<script setup lang="ts">
import type { AuthPayload, AuthStorageWithBotId } from '@/types';

import { useBotStore } from '@/stores/ftbotwrapper';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const props = defineProps({
  inModal: { default: false, type: Boolean },
  existingAuth: { default: null, required: false, type: Object as () => AuthStorageWithBotId },
});
const emit = defineEmits<{ loginResult: [value: boolean] }>();

const defaultURL = window.location.origin || 'http://localhost:3000';

const router = useRouter();
const route = useRoute();
const botStore = useBotStore();

const nameState = ref<boolean>();
const pwdState = ref<boolean>();
const urlState = ref<boolean>();
const errorMessage = ref<string>('');
const errorMessageCORS = ref<boolean>(false);
const formRef = ref<HTMLFormElement>();
const botEdit = ref<boolean>(false);
const auth = ref<AuthPayload>({
  botName: '',
  url: defaultURL,
  username: '',
  password: '',
});

const emitLoginResult = (value: boolean) => {
  emit('loginResult', value);
};

const urlDuplicate = computed<boolean>(() => {
  const bots = Object.values(botStore.availableBots).find((bot) => bot.botUrl === auth.value.url);
  return !botEdit.value && bots !== undefined;
});

const checkFormValidity = () => {
  const valid = formRef.value?.checkValidity();
  nameState.value = valid || auth.value.username !== '';
  pwdState.value = valid || auth.value.password !== '';
  urlState.value = valid || auth.value.url !== '';
  return valid;
};

const resetLogin = () => {
  auth.value.botName = '';
  auth.value.url = defaultURL;
  auth.value.username = '';
  auth.value.password = '';
  nameState.value = undefined;
  pwdState.value = undefined;
  urlState.value = undefined;
  errorMessage.value = '';
  botEdit.value = false;
};

const handleReset = (evt) => {
  evt.preventDefault();
  resetLogin();
};
const handleSubmit = async () => {
  // Exit when the form isn't valid
  if (!checkFormValidity()) {
    return;
  }
  errorMessage.value = '';
  // Push the name to submitted names
  try {
    const botId = botEdit.value ? props.existingAuth.botId : botStore.nextBotId;
    const { login } = useLoginInfo(botId);
    await login(auth.value);
    if (botEdit.value) {
      // Bot editing ...
      botStore.botStores[botId].isBotLoggedIn = true;
      botStore.botStores[botId].isBotOnline = true;
      // botStore.allRefreshFull();
      emitLoginResult(true);
    } else {
      // Add new bot
      const sortId = Object.keys(botStore.availableBots).length + 1;
      botStore.addBot({
        botName: auth.value.botName,
        botId,
        botUrl: auth.value.url,
        sortId: sortId,
      });
      // switch to newly added bot
      botStore.selectBot(botId);
      emitLoginResult(true);
      botStore.allRefreshFull();
    }

    if (props.inModal === false) {
      if (typeof route?.query.redirect === 'string') {
        const resolved = router.resolve({ path: route.query.redirect });
        if (resolved.name === '404') {
          router.push('/');
        } else {
          router.push(resolved.path);
        }
      } else {
        router.push('/');
      }
    }
  } catch (error) {
    errorMessageCORS.value = false;
    // this.nameState = false;
    console.error(error);
    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      nameState.value = false;
      pwdState.value = false;
      errorMessage.value = '봇에 연결되었으나 로그인에 실패했습니다. 사용자명 또는 비밀번호가 잘못되었습니다.';
    } else {
      urlState.value = false;
      errorMessage.value = `로그인에 실패했습니다.
봇이 실행 중인지, Bot API가 활성화되어 있는지, URL에 접근할 수 있는지 확인하세요.
${auth.value.url}/api/v1/ping으로 이동하여 봇 API에 접근할 수 있는지 확인할 수 있습니다.`;
      if (auth.value.url !== window.location.origin) {
        errorMessageCORS.value = true;
      }
    }
    console.error(errorMessage.value);
    emitLoginResult(false);
  }
};

const handleOk = (evt) => {
  evt.preventDefault();
  handleSubmit();
};
const reset = () => {
  resetLogin();
  console.log('reset ', props.existingAuth);
  if (props.existingAuth) {
    botEdit.value = true;
    auth.value.botName = props.existingAuth.botName;
    auth.value.url = props.existingAuth.apiUrl;
    auth.value.username = props.existingAuth.username ?? '';
  }
};

defineExpose({
  reset,
});

onMounted(() => {
  reset();
});
</script>

<template>
  <form ref="formRef" novalidate @submit.stop.prevent="handleSubmit" @reset="handleReset">
    <div class="mb-4">
      <label for="name-input" class="block text-sm font-medium">봇 이름</label>
      <InputText
        id="name-input"
        v-model="auth.botName"
        placeholder="봇 이름"
        class="mt-1 block w-full"
        @keydown.enter="handleOk"
      />
    </div>
    <div class="mb-4">
      <label for="url-input" class="block text-sm font-medium">API URL</label>
      <InputText
        id="url-input"
        v-model="auth.url"
        required
        trim
        :invalid="urlState === false"
        class="mt-1 block w-full"
        @keydown.enter="handleOk"
      />
      <span v-if="urlState === false" class="mt-2 text-sm text-red-500">API URL이 필요합니다</span>
      <Message v-if="urlDuplicate" class="mt-2 text-sm" severity="warn">
        이 URL은 이미 다른 봇에서 사용 중입니다.
      </Message>
    </div>
    <div class="mb-4">
      <label for="username-input" class="block text-sm font-medium">사용자명</label>
      <InputText
        id="username-input"
        v-model="auth.username"
        required
        placeholder="Freqtrader"
        :invalid="nameState === false"
        class="mt-1 block w-full"
        @keydown.enter="handleOk"
      />
      <span v-if="nameState === false" class="mt-2 text-sm text-red-500">
        사용자명과 비밀번호가 필요합니다.
      </span>
    </div>
    <div class="mb-4">
      <label for="password-input" class="block text-sm font-medium">비밀번호</label>
      <Password
        id="password-input"
        v-model="auth.password"
        required
        toggle-mask
        :invalid="pwdState === false"
        :feedback="false"
        class="mt-1 block w-full"
        input-class="w-full"
        @keydown.enter="handleOk"
      />
    </div>
    <Message v-if="errorMessage" class="mt-2" severity="error">
      {{ errorMessage }}
      <div v-if="errorMessageCORS">
        <a
          target="_blank"
          href="https://www.freqtrade.io/en/stable/rest-api/#cors"
          class="font-bold text-primary-500 dark:text-primary-300"
          >CORS 설정을 확인하세요</a
        >
      </div>
    </Message>
    <div class="flex justify-between mt-4">
      <Button
        type="button"
        variant="outlined"
        severity="secondary"
        label="취소"
        @click="$router.push('/')"
      />
      <Button type="submit" label="로그인" severity="primary" />
    </div>
  </form>
</template>
