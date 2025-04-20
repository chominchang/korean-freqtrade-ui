forceexit
<script setup lang="ts">
import type { MsgBoxObject } from '@/components/general/MessageBox.vue';
import type MessageBox from '@/components/general/MessageBox.vue';
import { useBotStore } from '@/stores/ftbotwrapper';
import type { ForceSellPayload } from '@/types';

import ForceEntryForm from './ForceEntryForm.vue';

const botStore = useBotStore();
const forceEnter = ref<boolean>(false);
const msgBox = ref<typeof MessageBox>();

const isRunning = computed((): boolean => {
  return botStore.activeBot.botState?.state === 'running';
});

const handleStopBot = () => {
  const msg: MsgBoxObject = {
    title: '봇 중지',
    message: '봇 루프 실행을 중지하시겠습니까?',
    accept: () => {
      botStore.activeBot.stopBot();
    },
  };
  msgBox.value?.show(msg);
};

const handleStopBuy = () => {
  const msg: MsgBoxObject = {
    title: '일시 중지 - 진입 중지',
    message:
      'Freqtrade는 열린 거래는 계속 처리하지만, 새로운 거래를 시작하거나 포지션 크기를 늘리지 않습니다.',
    accept: () => {
      botStore.activeBot.stopBuy();
    },
  };
  msgBox.value?.show(msg);
};

const handleReloadConfig = () => {
  const msg: MsgBoxObject = {
    title: '새로고침',
    message: '설정(전략 포함)을 다시 로드하시겠습니까?',
    accept: () => {
      console.log('reload...');
      botStore.activeBot.reloadConfig();
    },
  };
  msgBox.value?.show(msg);
};

const handleForceExit = () => {
  const msg: MsgBoxObject = {
    title: '모든 거래 강제 종료',
    message: '정말로 모든 거래를 강제 종료하시겠습니까?',
    accept: () => {
      const payload: ForceSellPayload = {
        tradeid: 'all',
        // TODO: support ordertype (?)
      };
      botStore.activeBot.forceexit(payload);
    },
  };
  msgBox.value?.show(msg);
};
</script>

<template>
  <div class="flex flex-row gap-1">
    <Button
      size="large"
      severity="secondary"
      :disabled="!botStore.activeBot.isTrading || isRunning"
      title="거래 시작"
      @click="botStore.activeBot.startBot()"
    >
      <template #icon>
        <i-mdi-play />
      </template>
    </Button>
    <Button
      size="large"
      severity="secondary"
      :disabled="!botStore.activeBot.isTrading || !isRunning"
      title="거래 중지 - 열린 거래 처리도 중지합니다."
      @click="handleStopBot()"
    >
      <template #icon>
        <i-mdi-stop />
      </template>
    </Button>
    <Button
      size="large"
      severity="secondary"
      :disabled="!botStore.activeBot.isTrading || !isRunning"
      title="일시 중지 (매수 중지) - Freqtrade는 열린 거래는 계속 처리하지만, 새로운 거래를 시작하거나 포지션 크기를 늘리지 않습니다."
      @click="handleStopBuy()"
    >
      <template #icon>
        <i-mdi-pause />
      </template>
    </Button>
    <Button
      size="large"
      severity="secondary"
      :disabled="!botStore.activeBot.isTrading"
      title="설정 새로고침 - 전략을 포함한 설정을 다시 로드하고, 즉석에서 변경된 모든 설정을 재설정합니다."
      @click="handleReloadConfig()"
    >
      <template #icon>
        <i-mdi-reload />
      </template>
    </Button>
    <Button
      severity="secondary"
      size="large"
      :disabled="!botStore.activeBot.isTrading"
      title="모든 거래 강제 종료"
      @click="handleForceExit()"
    >
      <template #icon>
        <i-mdi-close-box-multiple />
      </template>
    </Button>
    <Button
      v-if="botStore.activeBot.botState && botStore.activeBot.botState.force_entry_enable"
      size="large"
      severity="secondary"
      :disabled="!botStore.activeBot.isTrading || !isRunning"
      title="강제 진입 - 즉시 선택적 가격으로 거래를 시작합니다. 종료는 전략 규칙에 따라 처리됩니다."
      @click="forceEnter = true"
    >
      <template #icon>
        <i-mdi-plus-box-multiple-outline />
      </template>
    </Button>
    <Button
      v-if="botStore.activeBot.isWebserverMode && false"
      size="large"
      severity="secondary"
      :disabled="botStore.activeBot.isTrading"
      title="거래 모드 시작"
      @click="botStore.activeBot.startTrade()"
    >
      <template #icon>
        <i-mdi-play />
      </template>
    </Button>
    <ForceEntryForm v-model="forceEnter" :pair="botStore.activeBot.selectedPair" />
    <MessageBox ref="msgBox" />
  </div>
</template>
