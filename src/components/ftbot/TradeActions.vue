<script setup lang="ts">
import type { Trade } from '@/types';

defineProps({
  botApiVersion: {
    type: Number,
    default: 1.0,
  },
  trade: {
    type: Object as () => Trade,
    required: true,
  },
  enableForceEntry: {
    type: Boolean,
    default: false,
  },
});
defineEmits<{
  forceExit: [trade: Trade, type?: 'limit' | 'market'];
  forceExitPartial: [trade: Trade];
  cancelOpenOrder: [trade: Trade];
  reloadTrade: [trade: Trade];
  deleteTrade: [trade: Trade];
  forceEntry: [trade: Trade];
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <Button
      v-if="botApiVersion <= 1.1"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="강제 종료"
      label="강제 종료"
      @click="$emit('forceExit', trade)"
    >
      <template #icon>
        <i-mdi-close-box />
      </template>
    </Button>
    <Button
      v-if="botApiVersion > 1.1"
      size="small"
      class="justify-start!"
      severity="secondary"
      title="지정가 강제 종료"
      label="지정가 강제 종료"
      @click="$emit('forceExit', trade, 'limit')"
    >
      <template #icon>
        <i-mdi-close-box />
      </template>
    </Button>
    <Button
      v-if="botApiVersion > 1.1"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="시장가 강제 종료"
      label="시장가 강제 종료"
      @click="$emit('forceExit', trade, 'market')"
    >
      <template #icon>
        <i-mdi-close-box />
      </template>
    </Button>
    <Button
      v-if="botApiVersion > 2.16"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="부분 강제 종료"
      label="부분 강제 종료"
      @click="$emit('forceExitPartial', trade)"
    >
      <template #icon>
        <i-mdi-close-box-multiple />
      </template>
    </Button>
    <Button
      v-if="botApiVersion >= 2.24 && (trade.open_order_id || trade.has_open_orders)"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="미체결 주문 취소"
      label="미체결 주문 취소"
      @click="$emit('cancelOpenOrder', trade)"
    >
      <template #icon>
        <i-mdi-cancel />
      </template>
    </Button>
    <Button
      v-if="enableForceEntry"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="포지션 증가"
      label="포지션 증가"
      @click="$emit('forceEntry', trade)"
    >
      <template #icon>
        <i-mdi-plus-box-multiple-outline />
      </template>
    </Button>
    <Button
      v-if="botApiVersion >= 2.28"
      class="justify-start!"
      size="small"
      severity="secondary"
      title="새로고침"
      label="새로고침"
      @click="$emit('reloadTrade', trade)"
    >
      <template #icon><i-mdi-reload-alert /> </template>
    </Button>
    <Button
      class="justify-start!"
      size="small"
      severity="secondary"
      title="거래 삭제"
      label="거래 삭제"
      @click="$emit('deleteTrade', trade)"
    >
      <template #icon>
        <i-mdi-delete />
      </template>
    </Button>
  </div>
</template>
