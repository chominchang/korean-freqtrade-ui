<script setup lang="ts">
import type { AuthStorageWithBotId } from '@/types';

defineProps({
  loginText: { required: false, default: '로그인', type: String },
});
const loginViewOpen = ref(false);
const loginInfo = ref<AuthStorageWithBotId | undefined>(undefined);

const handleLoginResult = (result: boolean) => {
  if (result) {
    loginViewOpen.value = false;
  }
};

const openLoginModal = async (botInfo: AuthStorageWithBotId | undefined = undefined) => {
  loginInfo.value = botInfo;
  await nextTick();
  loginViewOpen.value = true;
};
defineExpose({
  openLoginModal,
});
</script>

<template>
  <div>
    <Button severity="secondary" @click="openLoginModal()"
      ><i-mdi-login class="me-1" />{{ loginText }}</Button
    >
    <Dialog
      id="modal-prevent-closing"
      v-model:visible="loginViewOpen"
      header="봇에 로그인"
      :dismissable-mask="true"
    >
      <BotLogin
        class="w-[1000px] max-w-[500px]"
        in-modal
        :existing-auth="loginInfo"
        @login-result="handleLoginResult"
      />
    </Dialog>
  </div>
</template>
