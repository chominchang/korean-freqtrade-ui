<script setup lang="ts">
import type { MsgBoxObject } from '@/components/general/MessageBox.vue';
import MessageBox from '@/components/general/MessageBox.vue';
import { useBotStore } from '@/stores/ftbotwrapper';
import type { BacktestHistoryEntry } from '@/types';
import InfoBox from '../general/InfoBox.vue';

const botStore = useBotStore();
const msgBox = ref<typeof MessageBox>();
const filterText = ref('');
const filterTextDebounced = refDebounced(filterText, 350, { maxWait: 1000 });

onMounted(() => {
  botStore.activeBot.getBacktestHistory();
});

function deleteBacktestResult(result: BacktestHistoryEntry) {
  const msg: MsgBoxObject = {
    title: '결과 삭제',
    message: `디스크에서 결과 ${result.filename}을(를) 삭제하시겠습니까?`,
    accept: () => {
      botStore.activeBot.deleteBacktestHistoryResult(result);
    },
  };
  msgBox.value?.show(msg);
}

const filteredList = computed(() =>
  botStore.activeBot.backtestHistoryList.filter(
    (r) =>
      r.filename.toLowerCase().includes(filterTextDebounced.value.toLowerCase()) ||
      r.strategy.toLowerCase().includes(filterTextDebounced.value.toLowerCase()),
  ),
);
function rowClick(row) {
  botStore.activeBot.getBacktestHistoryResult(row.data);
}
</script>

<template>
  <div>
    <Button
      class="float-end"
      title="새로고침"
      aria-label="새로고침"
      variant="outlined"
      severity="secondary"
      @click="botStore.activeBot.getBacktestHistory"
    >
      <i-mdi-refresh />
    </Button>
    <p>
      디스크에서 과거 결과를 불러옵니다. 여러 결과를 클릭하여 모두 freqUI로 불러올 수 있습니다.
    </p>
    <div v-if="botStore.activeBot.backtestHistoryList.length > 0" class="flex align-center">
      <InputText
        id="trade-filter"
        v-model="filterText"
        type="text"
        size="small"
        placeholder="결과 필터링"
        title="결과 필터링"
      />
    </div>
    <DataTable
      v-if="botStore.activeBot.backtestHistoryList.length > 0"
      class="mt-2"
      responsive
      size="small"
      scrollable
      scroll-height="50rem"
      :virtual-scroller-options="{ itemSize: 46 }"
      show-gridlines
      :value="filteredList"
      @row-click="rowClick"
    >
      <Column field="strategy" header="전략"></Column>
      <Column field="timeframe" header="상세 정보">
        <template #body="{ data }">
          <strong>{{ data.timeframe }}</strong>
          <span v-if="data.backtest_start_ts && data.backtest_end_ts" class="ms-1">
            {{ timestampToTimeRangeString(data.backtest_start_ts * 1000) }}-{{
              timestampToTimeRangeString(data.backtest_end_ts * 1000)
            }}</span
          >
        </template>
      </Column>
      <Column field="backtest_start_time" header="백테스트 시간">
        <template #body="{ data }">
          <DateTimeTZ :date="data.backtest_start_time * 1000" />
        </template>
      </Column>
      <Column field="filename" header="파일명"></Column>
      <Column field="actions" header="작업">
        <template #body="{ data }">
          <div class="flex items-center">
            <InfoBox
              v-if="botStore.activeBot.botApiVersion >= 2.32"
              :class="data.notes ? 'opacity-100' : 'opacity-0'"
              :hint="data.notes ?? ''"
            ></InfoBox>
            <Button
              v-if="botStore.activeBot.botApiVersion >= 2.31"
              class="ms-1"
              size="small"
              title="이 결과 불러오기"
              :disabled="data.run_id in botStore.activeBot.backtestHistory"
              @click.stop="botStore.activeBot.getBacktestHistoryResult(data)"
            >
              <template #icon>
                <i-mdi-arrow-right />
              </template>
            </Button>
            <Button
              v-if="botStore.activeBot.botApiVersion >= 2.31"
              class="ms-1"
              size="small"
              severity="secondary"
              title="이 결과 삭제하기"
              :disabled="data.run_id in botStore.activeBot.backtestHistory"
              @click.stop="deleteBacktestResult(data)"
            >
              <template #icon>
                <i-mdi-delete />
              </template>
            </Button>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <MessageBox ref="msgBox" />
</template>
