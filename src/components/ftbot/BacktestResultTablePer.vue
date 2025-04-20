<script setup lang="ts">
import type { ExitReasonResults, PairResult } from '@/types';

type ResultsType = PairResult | ExitReasonResults;
type ResultsTypeWithKey = ResultsType & { key?: string | string[] };
const props = withDefaults(
  defineProps<{
    title: string;
    results: ResultsType[];
    stakeCurrency: string;
    stakeCurrencyDecimals: number;
    keyHeader?: string;
    keyHeaders?: string[];
  }>(),
  {
    keyHeader: '',
    keyHeaders: () => [],
  },
);

const tableItems = computed<ResultsTypeWithKey[]>(() =>
  props.results.map((v) => {
    if (props.keyHeaders.length > 0) {
      return {
        ...v,
        key:
          typeof v['key'] === 'string' ? Array(props.keyHeaders.length).fill(v['key']) : v['key'],
      };
    }
    return v;
  }),
);

const perTagReason = computed(() => {
  const firstFields: {
    key: string;
    label: string;
    formatter: (value: string, item: ResultsTypeWithKey) => string;
  }[] = [];
  if (props.keyHeaders.length > 0) {
    // Keys could be an array
    for (let i = 0; i < props.keyHeaders.length; i += 1) {
      firstFields.push({
        key: `key[${i}]`,
        label: props.keyHeaders[i],
        formatter: (value, item) =>
          Array.isArray(value) ? value[i] : value || item['exit_reason'] || 'OTHER',
      });
    }
  } else {
    firstFields.push({
      key: 'key',
      label: props.keyHeader,
      formatter: (value, item) => (value || item['exit_reason'] || 'OTHER') as string,
    });
  }
  return firstFields;
});

const settingsStore = useSettingsStore();

const metrics = computed(() =>
  availableBacktestMetrics.value.filter(
    (metric) =>
      metric.field !== 'key' && settingsStore.backtestAdditionalMetrics.includes(metric.field),
  ),
);
</script>
<template>
  <DraggableContainer>
    <template #header>
      <div class="flex flex-row w-full justify-between items-center">
        {{ title }}
        <div>
          표시할 지표:
          <MultiSelect
            id="backtestMetrics"
            v-model="settingsStore.backtestAdditionalMetrics"
            :options="availableBacktestMetrics"
            option-label="header"
            option-value="field"
            size="small"
          />
        </div>
      </div>
    </template>
    <DataTable size="small" hover stacked="sm" :value="tableItems">
      <Column v-for="col in perTagReason" :key="col.key" :field="col.key" :header="col.label">
        <template #body="{ data }">
          {{ col.formatter(data['key'], data) }}
        </template>
      </Column>
      <Column field="trades" header="거래 수"></Column>
      <Column field="profit_mean" header="평균 수익 %">
        <template #body="{ data, field }">
          {{ formatPercent(data[field], 2) }}
        </template>
      </Column>
      <Column field="profit_total_abs" :header="`총 수익 ${props.stakeCurrency}`">
        <template #body="{ data, field }">
          {{ formatPrice(data[field], props.stakeCurrencyDecimals) }}
        </template>
      </Column>
      <Column field="profit_total" header="총 수익 %">
        <template #body="{ data, field }">
          {{ formatPercent(data[field], 2) }}
        </template>
      </Column>
      <Column field="wins" header="승리"></Column>
      <Column field="draws" header="무승부"></Column>
      <Column field="losses" header="패배"></Column>

      <Column v-for="col in metrics" :key="col.field" :field="col.field" :header="col.header">
        <template #body="{ data, field }">
          {{ col.is_ratio ? formatPercent(data[field], 2) : formatPrice(data[field], 2) }}
        </template>
      </Column>
    </DataTable>
  </DraggableContainer>
</template>
