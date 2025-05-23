<script setup lang="ts">
import { useBotStore } from '@/stores/ftbotwrapper';
import type { ForceEnterPayload } from '@/types';
import { OrderSides } from '@/types';

const props = defineProps({
  pair: { type: String, default: '' },
  positionIncrease: { type: Boolean, default: false },
});
const model = defineModel<boolean>();
const botStore = useBotStore();

const form = ref<HTMLFormElement>();
const selectedPair = ref('');
const price = ref<number | undefined>(undefined);
const stakeAmount = ref<number | undefined>(undefined);
const leverage = ref<number | undefined>(undefined);

const ordertype = ref('');
const orderSide = ref<OrderSides>(OrderSides.long);
const enterTag = ref('force_entry');

const orderTypeOptions = [
  { value: 'market', text: '시장가' },
  { value: 'limit', text: '지정가' },
];
const orderSideOptions = [
  { value: 'long', text: '롱' },
  { value: 'short', text: '숏' },
];

const checkFormValidity = () => {
  const valid = form.value?.checkValidity();

  return valid;
};

const handleSubmit = async () => {
  // Exit when the form isn't valid
  if (!checkFormValidity()) {
    return;
  }

  // call forceentry
  const payload: ForceEnterPayload = { pair: selectedPair.value };
  if (price.value) {
    payload.price = Number(price.value);
  }
  if (ordertype.value) {
    payload.ordertype = ordertype.value;
  }
  if (stakeAmount.value) {
    payload.stakeamount = stakeAmount.value;
  }
  if (botStore.activeBot.botApiVersion >= 2.13 && botStore.activeBot.shortAllowed) {
    payload.side = orderSide.value;
  }
  if (botStore.activeBot.botApiVersion >= 2.16 && enterTag.value) {
    payload.entry_tag = enterTag.value;
  }

  if (leverage.value) {
    payload.leverage = leverage.value;
  }
  botStore.activeBot.forceentry(payload);
  await nextTick();
  model.value = false;
};
const resetForm = () => {
  console.log('resetForm');
  selectedPair.value = props.pair;
  price.value = undefined;
  stakeAmount.value = undefined;
  ordertype.value =
    botStore.activeBot.botState?.order_types?.forcebuy ||
    botStore.activeBot.botState?.order_types?.force_entry ||
    botStore.activeBot.botState?.order_types?.buy ||
    botStore.activeBot.botState?.order_types?.entry ||
    'limit';
};

const handleEntry = () => {
  // Trigger submit handler
  handleSubmit();
};
</script>

<template>
  <Dialog
    v-model:visible="model"
    :header="positionIncrease ? `${pair} 포지션 증가` : '거래 강제 진입'"
    modal
    @show="resetForm"
    @hide="resetForm"
  >
    <form ref="form" class="space-y-4 md:min-w-[32rem]" @submit.prevent="handleSubmit">
      <div v-if="botStore.activeBot.botApiVersion >= 2.13 && botStore.activeBot.shortAllowed">
        <label class="block font-medium mb-1">주문 방향 (롱 또는 숏)</label>
        <SelectButton
          v-model="orderSide"
          :options="orderSideOptions"
          :allow-empty="false"
          option-label="text"
          option-value="value"
          size="small"
          class="w-full"
        />
      </div>

      <div>
        <label for="pair-input" class="block font-medium mb-1">페어</label>
        <InputText
          id="pair-input"
          v-model="selectedPair"
          :disabled="positionIncrease"
          required
          class="w-full"
          @keydown.enter="handleEntry"
          @focus="($event.target as HTMLInputElement).select()"
        />
      </div>

      <div>
        <label for="price-input" class="block font-medium mb-1">가격 [선택사항]</label>
        <InputNumber
          id="price-input"
          v-model="price"
          show-buttons
          :min="0"
          :max-fraction-digits="8"
          :step="0.1"
          class="w-full"
          @keydown.enter="handleEntry"
        />
      </div>

      <div>
        <label for="stake-input" class="block font-medium mb-1"
          >* {{ botStore.activeBot.stakeCurrency }} 단위 스테이크 금액 [선택사항]</label
        >
        <InputNumber
          id="stake-input"
          v-model="stakeAmount"
          show-buttons
          :min="0"
          :step="botStore.activeBot.stakeCurrency === 'USDT' ? 10 : 1"
          :max-fraction-digits="5"
          fluid
        />
      </div>

      <div v-if="botStore.activeBot.botApiVersion > 2.16 && botStore.activeBot.shortAllowed">
        <label for="leverage-input" class="block font-medium mb-1"
          >레버리지 설정 [선택사항]</label
        >
        <InputNumber
          id="leverage-input"
          v-model="leverage"
          show-buttons
          :min="0"
          :step="1"
          :max-fraction-digits="1"
          class="w-full"
          @keydown.enter="handleEntry"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">주문 유형</label>
        <SelectButton
          v-model="ordertype"
          :options="orderTypeOptions"
          option-label="text"
          option-value="value"
          size="small"
          class="w-full"
        />
      </div>

      <div v-if="botStore.activeBot.botApiVersion > 1.16">
        <label for="enterTag-input" class="block text-sm font-medium mb-1"
          >* 사용자 지정 진입 태그 [선택사항]</label
        >
        <InputText id="enterTag-input" v-model="enterTag" class="w-full" />
      </div>
    </form>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button severity="secondary" size="small" @click="model = false"> 취소 </Button>
        <Button severity="primary" size="small" @click="handleEntry"> 포지션 진입 </Button>
      </div>
    </template>
  </Dialog>
</template>
