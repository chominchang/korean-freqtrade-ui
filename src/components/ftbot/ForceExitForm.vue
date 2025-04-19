<script setup lang="ts">
import { useBotStore } from '@/stores/ftbotwrapper';
import type { ForceSellPayload, Trade } from '@/types';
import { ref, computed } from 'vue';
import { refDebounced } from '@vueuse/core';

const props = defineProps({
  trade: {
    type: Object as () => Trade,
    required: true,
  },
  stakeCurrencyDecimals: {
    type: Number,
    required: true,
  },
});

const model = defineModel<boolean>();

const botStore = useBotStore();

const form = ref<HTMLFormElement>();
const amount = ref<number | undefined>(undefined);
const ordertype = ref('limit');

const checkFormValidity = () => {
  const valid = form.value?.checkValidity();

  return valid;
};

async function handleSubmit() {
  // Exit when the form isn't valid
  if (!checkFormValidity()) {
    return;
  }
  // call forceentry
  const payload: ForceSellPayload = { tradeid: String(props.trade.trade_id) };

  if (ordertype.value) {
    payload.ordertype = ordertype.value;
  }
  if (amount.value) {
    payload.amount = amount.value;
  }
  await nextTick();
  botStore.activeBot.forceexit(payload);
  model.value = false;
}

function resetForm() {
  amount.value = props.trade.amount;
  ordertype.value =
    botStore.activeBot.botState?.order_types?.force_exit ||
    botStore.activeBot.botState?.order_types?.exit ||
    'limit';
}

function handleExit() {
  // Trigger submit handler
  handleSubmit();
}

const amountDebounced = refDebounced(amount, 250, { maxWait: 500 });

const amountInBase = computed<string>(() => {
  return amountDebounced.value && props.trade.current_rate
    ? `~${formatPriceCurrency(amountDebounced.value * props.trade.current_rate, props.trade.quote_currency || '', props.stakeCurrencyDecimals)} (예상 가치) `
    : '';
});
const orderTypeOptions = [
  { value: 'market', text: '시장가' },
  { value: 'limit', text: '지정가' },
];
</script>

<template>
  <Dialog
    v-model:visible="model"
    :header="`거래 강제 종료`"
    modal
    @show="resetForm"
    @hide="resetForm"
  >
    <form ref="form" class="space-y-4 md:min-w-[32rem]" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <p class="mb-2">
          <span>거래 #{{ trade.trade_id }} {{ trade.pair }} 종료 중.</span>
          <br />
          <span>현재 보유 중인 {{ trade.amount }} {{ trade.base_currency }}</span>
        </p>
      </div>

      <div>
        <label for="stake-input" class="block font-medium mb-1">
          {{ trade.base_currency }} 수량 [선택사항]
          <span class="text-sm italic ml-1">{{ amountInBase }}</span>
        </label>
        <div class="space-y-2">
          <InputNumber
            id="stake-input"
            v-model="amount"
            :min="0"
            :max="trade.amount"
            :use-grouping="false"
            :step="0.000001"
            :max-fraction-digits="8"
            class="w-full"
            show-buttons
          />
          <Slider v-model="amount" :min="0" :max="trade.amount" :step="0.000001" class="w-full" />
        </div>
      </div>

      <div>
        <label class="block font-medium mb-1">*주문 유형</label>
        <SelectButton
          v-model="ordertype"
          :options="orderTypeOptions"
          :allow-empty="false"
          option-label="text"
          option-value="value"
          size="small"
          class="w-full"
        />
      </div>
    </form>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button severity="secondary" size="small" @click="model = false">취소</Button>
        <Button severity="primary" size="small" @click="handleExit">포지션 종료</Button>
      </div>
    </template>
  </Dialog>
</template>
