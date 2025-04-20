<script setup lang="ts">
import { useBotStore } from '@/stores/ftbotwrapper';

const botStore = useBotStore();
</script>

<template>
  <div v-if="botStore.activeBot.botState" class="p-4">
    <p class="mb-4">
      Freqtrade <strong>{{ botStore.activeBot.version }}</strong> 실행 중
    </p>
    <p class="mb-4">
      <strong>
        {{ botStore.activeBot.botState.max_open_trades }}x{{
          botStore.activeBot.botState.stake_amount
        }}
        {{ botStore.activeBot.botState.stake_currency }}
      </strong>
      로
      <strong>{{ botStore.activeBot.botState.exchange }}</strong> 거래소에서
      <strong>{{ botStore.activeBot.botState.trading_mode || 'spot' }}</strong> 마켓,
      <strong>{{ botStore.activeBot.botState.strategy }}</strong> 전략으로 실행 중
      .
    </p>
    <p v-if="'stoploss_on_exchange' in botStore.activeBot.botState" class="mb-4">
      거래소 손절매는
      <strong>{{
        botStore.activeBot.botState.stoploss_on_exchange ? '활성화됨' : '비활성화됨'
      }}</strong>
      .
    </p>
    <p class="mb-4">
      현재 상태: <strong>{{ botStore.activeBot.botState.state }}</strong>,
      <strong>강제 진입: {{ botStore.activeBot.botState.force_entry_enable }}</strong>
    </p>
    <p>
      <strong>{{ botStore.activeBot.botState.dry_run ? '테스트 모드' : '실거래 모드' }}</strong>
    </p>
    <Divider />
    <p class="mb-4">
      평균 수익률 {{ formatPercent(botStore.activeBot.profit.profit_all_ratio_mean) }} (&sum;
      {{ formatPercent(botStore.activeBot.profit.profit_all_ratio_sum) }})
      총 {{ botStore.activeBot.profit.trade_count }}건 거래,
      평균 거래 기간 {{ botStore.activeBot.profit.avg_duration }}.
      최고 페어: {{ botStore.activeBot.profit.best_pair }}.
    </p>
    <p v-if="botStore.activeBot.profit.first_trade_timestamp" class="mb-4">
      <span v-if="botStore.activeBot.profit.bot_start_timestamp" class="block">
        봇 시작 시간:
        <strong>
          <DateTimeTZ :date="botStore.activeBot.profit.bot_start_timestamp" show-timezone />
        </strong>
      </span>
      <span class="block">
        첫 거래 시작:
        <strong>
          <DateTimeTZ :date="botStore.activeBot.profit.first_trade_timestamp" show-timezone />
        </strong>
      </span>
      <span class="block">
        마지막 거래 시작:
        <strong>
          <DateTimeTZ :date="botStore.activeBot.profit.latest_trade_timestamp" show-timezone />
        </strong>
      </span>
    </p>
    <p>
      <span v-if="botStore.activeBot.profit.profit_factor" class="block">
        수익 팩터:
        {{ botStore.activeBot.profit.profit_factor.toFixed(2) }}
      </span>
      <span v-if="botStore.activeBot.profit.trading_volume" class="block mb-4">
        거래 볼륨:
        {{
          formatPriceCurrency(
            botStore.activeBot.profit.trading_volume,
            botStore.activeBot.botState.stake_currency,
            botStore.activeBot.botState.stake_currency_decimals ?? 3,
          )
        }}
      </span>
    </p>
    <BotProfit
      class="mx-1"
      :profit="botStore.activeBot.profit"
      :stake-currency="botStore.activeBot.botState.stake_currency ?? 'USDT'"
      :stake-currency-decimals="botStore.activeBot.botState.stake_currency_decimals ?? 3"
    />
  </div>
</template>
