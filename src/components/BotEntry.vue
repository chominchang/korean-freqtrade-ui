<script setup lang="ts">
import { useBotStore } from '@/stores/ftbotwrapper';
import type { BotDescriptor } from '@/types';
import type MessageBox from './general/MessageBox.vue';
const msgBox = ref<typeof MessageBox>();

const props = defineProps({
  bot: { required: true, type: Object as () => BotDescriptor },
  noButtons: { default: false, type: Boolean },
});
defineEmits<{ edit: []; editLogin: [] }>();
const botStore = useBotStore();

function confirmRemoveBot() {
  botStore.removeBot(props.bot.botId);
}

function removeBotQuestion() {
  msgBox.value?.show({
    title: '로그아웃 확인',
    message: `정말로 ${props.bot.botName} (${props.bot.botId})에서 로그아웃하시겠습니까?`,
    accept: () => {
      confirmRemoveBot();
    },
  });
}

const autoRefreshLoc = computed({
  get() {
    return botStore.botStores[props.bot.botId].autoRefresh;
  },
  set(newValue) {
    botStore.botStores[props.bot.botId].setAutoRefresh(newValue);
  },
});
</script>

<template>
  <div v-if="bot" class="flex items-center justify-between w-full">
    <span class="me-2">{{ bot.botName || bot.botId }}</span>

    <div class="flex items-center gap-2">
      <div class="flex items-center">
        <ToggleSwitch v-model="autoRefreshLoc" class="mr-2" />
        <div
          v-if="botStore.botStores[bot.botId].isBotLoggedIn"
          :title="botStore.botStores[bot.botId].isBotOnline ? '온라인' : '오프라인'"
        >
          <i-mdi-circle
            class="mx-1"
            :class="botStore.botStores[bot.botId].isBotOnline ? 'text-green-500' : 'text-red-500'"
          />
        </div>
        <div v-else title="로그인 정보가 만료되었습니다. 다시 로그인해주세요.">
          <i-mdi-cancel class="text-red-500" />
        </div>
      </div>

      <div v-if="!noButtons" class="flex items-center gap-1">
        <Button
          v-if="botStore.botStores[bot.botId].isBotLoggedIn"
          size="small"
          severity="secondary"
          title="봇 편집"
          @click="$emit('edit')"
        >
          <i-mdi-pencil />
        </Button>
        <Button
          v-else
          size="small"
          severity="secondary"
          title="다시 로그인"
          @click="$emit('editLogin')"
        >
          <i-mdi-login />
        </Button>
        <Button size="small" severity="secondary" title="봇 삭제" @click="removeBotQuestion">
          <i-mdi-delete />
        </Button>
      </div>
    </div>
    <MessageBox ref="msgBox" />
  </div>
</template>
