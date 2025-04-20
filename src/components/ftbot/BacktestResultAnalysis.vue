<script setup lang="ts">
import type { StrategyBacktestResult } from '@/types';

const props = defineProps<{
  backtestResult: StrategyBacktestResult;
}>();

const backtestResultStats = computed(() => {
  const tmp = generateBacktestMetricRows(props.backtestResult);
  return formatObjectForTable({ value: tmp }, 'metric');
});

const backtestResultSettings = computed(() => {
  // Transpose Result into readable format
  const tmp = generateBacktestSettingRows(props.backtestResult);

  return formatObjectForTable({ value: tmp }, 'setting');
});
</script>

<template>
  <div class="px-0 w-full">
    <div class="flex justify-center">
      <h3 class="font-bold text-2xl mb-2">
        {{ backtestResult.strategy_name }} 백테스트 결과
      </h3>
    </div>

    <div class="flex flex-col text-start ms-0 me-2 gap-2">
      <div class="flex flex-col xl:flex-row">
        <div class="px-0 px-xl-0 pe-xl-1 grow">
          <DraggableContainer header="전략 설정">
            <DataTable size="small" :value="backtestResultSettings">
              <Column field="setting" header="설정"></Column>
              <Column field="value" header="값"></Column>
            </DataTable>
          </DraggableContainer>
        </div>
        <div class="px-0 xl:px-0 pt-2 xl:pt-0 xl:ps-1 grow">
          <DraggableContainer header="지표">
            <DataTable size="small" borderless :value="backtestResultStats">
              <Column field="metric" header="지표" />
              <Column field="value" header="값" />
            </DataTable>
          </DraggableContainer>
        </div>
      </div>
      <BacktestResultTablePer
        title="진입 태그별 결과"
        :results="backtestResult.results_per_enter_tag"
        :stake-currency="backtestResult.stake_currency"
        key-header="진입 태그"
        :stake-currency-decimals="backtestResult.stake_currency_decimals"
      />

      <BacktestResultTablePer
        title="종료 이유별 결과"
        :results="backtestResult.exit_reason_summary ?? []"
        :stake-currency="backtestResult.stake_currency"
        key-header="종료 이유"
        :stake-currency-decimals="backtestResult.stake_currency_decimals"
      />

      <BacktestResultTablePer
        v-if="backtestResult.mix_tag_stats"
        title="혼합 태그 결과"
        :results="backtestResult.mix_tag_stats ?? []"
        :stake-currency="backtestResult.stake_currency"
        :key-headers="['진입 태그', '종료 태그']"
        :stake-currency-decimals="backtestResult.stake_currency_decimals"
      />

      <BacktestResultTablePer
        title="페어별 결과"
        :results="backtestResult.results_per_pair"
        :stake-currency="backtestResult.stake_currency"
        key-header="페어"
        :stake-currency-decimals="backtestResult.stake_currency_decimals"
      />
      <DraggableContainer v-if="backtestResult.periodic_breakdown" header="기간별 분석">
        <BacktestResultPeriodBreakdown :periodic-breakdown="backtestResult.periodic_breakdown">
        </BacktestResultPeriodBreakdown>
      </DraggableContainer>

      <DraggableContainer header="개별 거래">
        <TradeList
          :trades="backtestResult.trades"
          :show-filter="true"
          :stake-currency="backtestResult.stake_currency"
        />
      </DraggableContainer>
    </div>
  </div>
</template>
