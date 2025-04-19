<script setup lang="ts">
import type { Trade } from '@/types';
import Popover from 'primevue/popover';

defineProps({
  trade: { type: Object as () => Trade, required: true },
  id: { type: Number, required: true },
  botApiVersion: { type: Number, required: true },
  enableForceEntry: { type: Boolean, default: false },
});
const emit = defineEmits<{
  forceExit: [trade: Trade, type?: string];
  forceExitPartial: [trade: Trade];
  cancelOpenOrder: [trade: Trade];
  reloadTrade: [trade: Trade];
  deleteTrade: [trade: Trade];
  forceEntry: [trade: Trade];
}>();
const popoverOpen = ref(false);

function forceExitHandler(item: Trade, ordertype: string | undefined = undefined) {
  popoverOpen.value = false;
  emit('forceExit', item, ordertype);
}
function forceExitPartialHandler(item: Trade) {
  popoverOpen.value = false;
  emit('forceExitPartial', item);
}
function cancelOpenOrderHandler(item: Trade) {
  popoverOpen.value = false;
  emit('cancelOpenOrder', item);
}
function handleReloadTrade(item: Trade) {
  popoverOpen.value = false;
  emit('reloadTrade', item);
}
function handleDeleteTrade(item: Trade) {
  popoverOpen.value = false;
  emit('deleteTrade', item);
}
function handleForceEntry(item: Trade) {
  popoverOpen.value = false;
  emit('forceEntry', item);
}
const popover = ref<InstanceType<typeof Popover> | null>(null);
</script>

<template>
  <div>
    <Button
      :id="`btn-actions-${id}`"
      class="btn-xs"
      size="small"
      severity="secondary"
      title="작업"
      @click="popover?.toggle"
    >
      <i-mdi-gesture-tap />
    </Button>
    <Popover
      ref="popover"
      :target="`btn-actions-${id}`"
      :title="`${trade.pair}에 대한 작업`"
      triggers="manual"
      placement="left"
    >
      <TradeActions
        :trade="trade"
        :bot-api-version="botApiVersion"
        :enable-force-entry="enableForceEntry"
        @force-exit="forceExitHandler"
        @force-exit-partial="forceExitPartialHandler"
        @delete-trade="handleDeleteTrade(trade)"
        @cancel-open-order="cancelOpenOrderHandler"
        @reload-trade="handleReloadTrade"
        @force-entry="handleForceEntry"
      />
      <Button
        class="mt-1 w-full text-start"
        size="small"
        severity="secondary"
        label="작업 메뉴 닫기"
        @click="popover?.hide"
      >
        <template #icon><i-mdi-cancel class="me-1" /></template>
      </Button>
    </Popover>
  </div>
</template>
