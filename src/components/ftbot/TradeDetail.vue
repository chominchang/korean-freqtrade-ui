<script setup lang="ts">
import type { Trade } from '@/types';

const colorStore = useColorStore();

defineProps({
  trade: { required: true, type: Object as () => Trade },
  stakeCurrency: { required: true, type: String },
});
</script>

<template>
  <div class="text-start grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
    <div class="">
      <h5 class="detail-header">일반 정보</h5>
      <ValuePair description="거래 ID">{{ trade.trade_id }}</ValuePair>
      <ValuePair description="페어">{{ trade.pair }}</ValuePair>

      <ValuePair description="시작 일시">{{ timestampms(trade.open_timestamp) }}</ValuePair>
      <ValuePair v-if="trade.enter_tag" description="진입 태그">{{ trade.enter_tag }}</ValuePair>
      <ValuePair v-if="trade.is_open" description="스테이크"
        >{{ formatPriceCurrency(trade.stake_amount, stakeCurrency) }}
        {{ trade.leverage && trade.leverage !== 1 ? `(${trade.leverage}x)` : '' }}</ValuePair
      >
      <ValuePair v-if="!trade.is_open" description="총 스테이크"
        >{{ formatPriceCurrency(trade.max_stake_amount ?? trade.stake_amount, stakeCurrency) }}
        {{ trade.leverage && trade.leverage !== 1 ? `(${trade.leverage}x)` : '' }}</ValuePair
      >
      <ValuePair description="수량">{{ trade.amount }}</ValuePair>
      <ValuePair description="시작 가격">{{ formatPrice(trade.open_rate) }}</ValuePair>
      <ValuePair v-if="trade.is_open && trade.current_rate" description="현재 가격">{{
        formatPrice(trade.current_rate)
      }}</ValuePair>
      <ValuePair v-if="!trade.is_open && trade.close_rate" description="종료 가격">{{
        formatPrice(trade.close_rate)
      }}</ValuePair>

      <ValuePair v-if="trade.close_timestamp" description="종료 일시">{{
        timestampms(trade.close_timestamp)
      }}</ValuePair>
      <ValuePair
        v-if="trade.is_open && trade.realized_profit && !trade.total_profit_abs"
        description="실현 수익"
      >
        <TradeProfit class="ms-2" :trade="trade" mode="realized" />
      </ValuePair>
      <ValuePair v-if="trade.is_open && trade.total_profit_abs" description="총 수익">
        <TradeProfit class="ms-2" :trade="trade" mode="total" />
      </ValuePair>
      <ValuePair
        v-if="trade.profit_ratio && trade.profit_abs"
        :description="`${trade.is_open ? '현재 수익' : '종료 수익'}`"
      >
        <TradeProfit class="ms-2" :trade="trade" />
      </ValuePair>
      <details>
        <summary>상세 정보</summary>
        <ValuePair v-if="trade.min_rate" description="최저 가격">{{
          formatPrice(trade.min_rate)
        }}</ValuePair>
        <ValuePair v-if="trade.max_rate" description="최고 가격">{{
          formatPrice(trade.max_rate)
        }}</ValuePair>
        <ValuePair description="시작 수수료">
          {{ trade.fee_open_cost }} {{ trade.quote_currency }}
          <span v-if="trade.quote_currency !== trade.fee_open_currency">
            ({{ trade.fee_open_currency }} 단위)
          </span>
          ({{ formatPercent(trade.fee_open) }})
        </ValuePair>
        <ValuePair v-if="trade.fee_close_cost && trade.fee_close" description="종료 수수료">
          {{ trade.fee_close_cost }} {{ trade.fee_close_currency }} ({{
            formatPercent(trade.fee_close)
          }})
        </ValuePair>
      </details>
    </div>
    <div class="mt-2 lg:mt-0">
      <h5 class="detail-header">손절매</h5>
      <ValuePair description="손절매">
        {{ formatPercent(trade.stop_loss_pct / 100) }} |
        {{ formatPrice(trade.stop_loss_abs) }}
      </ValuePair>
      <ValuePair
        v-if="trade.initial_stop_loss_pct && trade.initial_stop_loss_abs"
        description="초기 손절매"
      >
        {{ formatPercent(trade.initial_stop_loss_pct / 100) }} |
        {{ formatPrice(trade.initial_stop_loss_abs) }}
      </ValuePair>
      <ValuePair
        v-if="trade.is_open && trade.stoploss_current_dist_ratio && trade.stoploss_current_dist"
        description="현재 손절매 거리"
      >
        {{ formatPercent(trade.stoploss_current_dist_ratio) }} |
        {{ formatPrice(trade.stoploss_current_dist) }}
      </ValuePair>
      <ValuePair v-if="trade.stoploss_last_update_timestamp" description="손절매 최종 업데이트">
        {{ timestampms(trade.stoploss_last_update_timestamp) }}
      </ValuePair>
      <div v-if="trade.trading_mode !== undefined && trade.trading_mode !== 'spot'">
        <h5 class="detail-header">선물/마진</h5>
        <ValuePair description="방향">
          {{ trade.is_short ? '숏' : '롱' }} - {{ trade.leverage }}x
        </ValuePair>
        <ValuePair v-if="trade.funding_fees !== undefined" description="자금 조달 수수료">
          {{ formatPrice(trade.funding_fees) }}
        </ValuePair>
        <ValuePair v-if="trade.interest_rate !== undefined" description="이자율">
          {{ formatPrice(trade.interest_rate) }}
        </ValuePair>
        <ValuePair v-if="trade.liquidation_price !== undefined" description="청산 가격">
          {{ formatPrice(trade.liquidation_price) }}
        </ValuePair>
      </div>
      <details v-if="trade.orders">
        <summary>주문 {{ trade.orders.length > 1 ? `[${trade.orders.length}]` : '' }}</summary>
        <div
          v-for="(order, key) in trade.orders"
          :key="key"
          class="flex items-center gap-1 2"
          :title="`${order.ft_order_side} ${order.order_type} order for ${formatPriceCurrency(
            order.amount,
            trade.base_currency ?? '',
          )} at ${formatPriceCurrency(
            order.safe_price,
            trade.quote_currency ?? '',
          )}, filled ${formatPrice(order.filled)}`"
        >
          (#{{ key + 1 }})
          <i-mdi-triangle
            v-if="order.ft_order_side === 'buy'"
            class="me-1 color-up"
            style="font-size: 0.6rem"
          />
          <i-mdi-triangle-down v-else class="me-1 color-down" style="font-size: 0.6rem" />
          <DateTimeTZ v-if="order.order_timestamp" :date="order.order_timestamp" show-timezone />
          <b class="ms-1" :class="order.ft_order_side === 'buy' ? 'color-up' : 'color-down'">{{
            order.ft_order_side === 'buy' ? '매수' : '매도'
          }}</b>
          : <b>{{ formatPrice(order.safe_price) }}</b> |
          <span v-if="order.remaining && order.remaining !== 0" title="남은 수량"
            >{{ formatPrice(order.remaining, 8) }} /
          </span>
          <span title="체결 수량">{{ formatPrice(order.filled ?? 0, 8) }}</span>
          <template v-if="order.ft_order_tag"> | {{ order.ft_order_tag ?? '' }}</template>
        </div>
      </details>
    </div>
  </div>
</template>
<style scoped>
@reference '../../styles/tailwind.css';

.detail-header {
  @apply text-xl font-semibold border-b pb-1 w-full block mb-1;
}
.color-up {
  color: v-bind('colorStore.colorUp');
}

.color-down {
  color: v-bind('colorStore.colorDown');
}
</style>
