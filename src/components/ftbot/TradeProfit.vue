<script setup lang="ts">
import type { Trade } from '@/types';

type modes = 'default' | 'total' | 'realized';

const props = defineProps({
  trade: { required: true, type: Object as () => Trade },
  mode: {
    required: false,
    default: 'default',
    type: String as PropType<modes>,
  },
});

const modeDescs: { [key in modes]: string } = {
  default: '현재 수익',
  total: '총 수익',
  realized: '실현 수익',
};

const profitRatio = computed<number | undefined>(() => {
  switch (props.mode) {
    case 'default':
      return props.trade.profit_ratio;
    case 'total':
      return props.trade.total_profit_ratio;
    case 'realized':
      return props.trade.realized_profit_ratio;
    default:
      return undefined;
  }
});
const profitAbs = computed<number | undefined>(() => {
  switch (props.mode) {
    case 'default':
      return props.trade.profit_abs;
    case 'total':
      return props.trade.total_profit_abs;
    case 'realized':
      return props.trade.realized_profit;
    default:
      return undefined;
  }
});
const profitDesc = computed((): string => {
  let profit = `${modeDescs[props.mode]}: ${
    profitRatio.value ? formatPercent(profitRatio.value) : ''
  } (${profitAbs.value})`;
  profit += `\n시작 시간: ${timestampms(props.trade.open_timestamp)}`;
  return profit;
});
</script>

<template>
  <ProfitPill
    :profit-ratio="profitRatio"
    :profit-abs="profitAbs"
    :profit-desc="profitDesc"
    :stake-currency="trade.quote_currency || 'USDT'"
  />
</template>
