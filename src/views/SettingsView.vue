<script setup lang="ts">
import { OpenTradeVizOptions, useSettingsStore } from '@/stores/settings';
import { useLayoutStore } from '@/stores/layout';
import { FtWsMessageTypes } from '@/types/wsMessageTypes';
import { ColorPreferences, useColorStore } from '@/stores/colors';

const settingsStore = useSettingsStore();
const colorStore = useColorStore();
const layoutStore = useLayoutStore();

const timezoneOptions = ['UTC', Intl.DateTimeFormat().resolvedOptions().timeZone];
const openTradesOptions = [
  { value: OpenTradeVizOptions.showPill, text: '아이콘에 표시' },
  { value: OpenTradeVizOptions.asTitle, text: '제목에 표시' },
  { value: OpenTradeVizOptions.noOpenTrades, text: "헤더에 진행 중인 거래 표시 안 함" },
];
const colorPreferenceOptions = [
  { value: ColorPreferences.GREEN_UP, text: '상승 초록/하락 빨강' },
  { value: ColorPreferences.RED_UP, text: '상승 빨강/하락 초록' },
];

const resetDynamicLayout = () => {
  layoutStore.resetTradingLayout();
  layoutStore.resetDashboardLayout();
  showAlert('레이아웃이 초기화되었습니다.');
};
</script>

<template>
  <Card class="mx-auto mt-3 p-4 max-w-4xl">
    <template #title>FreqUI 설정</template>
    <template #content>
      <div class="flex flex-col gap-4 text-start dark:text-surface-300">
        <p class="text-left">UI 버전: {{ settingsStore.uiVersion }}</p>

        <div class="border border-surface-400 rounded-sm p-4 space-y-4">
          <h4 class="text-xl font-semibold">UI 설정</h4>

          <BaseCheckbox v-model="layoutStore.layoutLocked" class="space-y-1">
            동적 레이아웃 잠금
            <template #hint>
              동적 레이아웃을 잠가 더 이상 이동할 수 없게 합니다. 상단 네비게이션 바에서도 설정할 수 있습니다.
            </template>
          </BaseCheckbox>

          <div class="flex flex-row gap-2 space-y-2">
            <Button severity="secondary" size="small" @click="resetDynamicLayout"
              >레이아웃 초기화</Button
            >
            <small class="block text-surface-600 dark:text-surface-400"
              >동적 레이아웃을 원래 상태로 초기화합니다.</small
            >
          </div>

          <Divider />

          <div class="space-y-1">
            <label class="block text-sm">헤더에 진행 중인 거래 표시</label>
            <Select
              v-model="settingsStore.openTradesInTitle"
              :options="openTradesOptions"
              option-label="text"
              option-value="value"
              size="small"
              class="w-full"
            />
            <small class="text-surface-600 dark:text-surface-400"
              >진행 중인 거래를 시각적으로 표시할 방법을 선택하세요</small
            >
          </div>

          <div class="space-y-1">
            <label class="block text-sm">UTC 시간대</label>
            <Select
              v-model="settingsStore.timezone"
              :options="timezoneOptions"
              class="w-full"
              size="small"
            />
            <small class="text-surface-600 dark:text-surface-400"
              >시간대를 선택하세요 (거래소는 보통 UTC로 작동하므로 UTC가 권장됩니다)</small
            >
          </div>

          <BaseCheckbox v-model="settingsStore.backgroundSync" class="space-y-1">
            백그라운드 동기화
            <template #hint>다른 봇이 선택되어 있을 때도 백그라운드 동기화를 유지합니다.</template>
          </BaseCheckbox>

          <BaseCheckbox v-model="settingsStore.confirmDialog" class="space-y-1">
            거래 종료 시 확인 대화 상자 표시
            <template #hint>거래를 강제 종료할 때 확인 대화 상자를 사용합니다.</template>
          </BaseCheckbox>

          <BaseCheckbox v-model="settingsStore.multiPaneButtonsShowText" class="space-y-1">
            다중 패널 버튼에 텍스트 표시
            <template #hint
              >다중 패널 버튼에 텍스트를 표시합니다. 비활성화하면 이미지만 표시됩니다.</template
            >
          </BaseCheckbox>
        </div>

        <div class="border border-surface-400 rounded-sm p-4 space-y-4">
          <h4 class="text-lg font-semibold">차트 설정</h4>

          <div class="space-y-1">
            <label class="block text-sm">차트 스케일 위치</label>
            <div class="flex gap-4">
              <div class="flex items-center">
                <RadioButton v-model="settingsStore.chartLabelSide" value="left" size="small" />
                <label class="ml-2">왼쪽</label>
              </div>
              <div class="flex items-center">
                <RadioButton v-model="settingsStore.chartLabelSide" value="right" size="small" />
                <label class="ml-2">오른쪽</label>
              </div>
            </div>
            <small class="text-surface-600 dark:text-surface-400"
              >스케일을 오른쪽에 표시할까요, 왼쪽에 표시할까요?</small
            >
          </div>

          <BaseCheckbox v-model="settingsStore.useHeikinAshiCandles" class="space-y-1">
            헤이킨 아시 캔들 사용
            <template #hint>차트에서 헤이킨 아시 캔들을 사용합니다</template>
          </BaseCheckbox>

          <BaseCheckbox v-model="settingsStore.useReducedPairCalls" class="space-y-1">
            필요한 열만 요청
            <template #hint
              >대규모 데이터프레임의 전송 크기를 줄일 수 있습니다. 플롯 구성이 변경되면 추가 호출이 필요할 수 있습니다.</template
            >
          </BaseCheckbox>

          <div class="space-y-1">
            <label class="block text-sm">캔들 색상 설정</label>
            <div class="flex flex-row gap-5 items-center">
              <div
                v-for="option in colorPreferenceOptions"
                :key="option.value"
                class="flex items-center"
              >
                <RadioButton
                  v-model="colorStore.colorPreference"
                  :value="option.value"
                  :input-id="`input-id${option.value}`"
                  size="small"
                  @change="colorStore.updateProfitLossColor"
                />
                <label :for="`input-id${option.value}`" class="ml-2 flex items-center">
                  <span class="mr-2">{{ option.text }}</span>
                  <i-mdi-arrow-up-thin
                    :color="
                      option.value === ColorPreferences.GREEN_UP
                        ? colorStore.colorProfit
                        : colorStore.colorLoss
                    "
                    class="-ml-2"
                  />
                  <i-mdi-arrow-down-thin
                    :color="
                      option.value === ColorPreferences.GREEN_UP
                        ? colorStore.colorLoss
                        : colorStore.colorProfit
                    "
                    class="-ml-2"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="border rounded-sm p-4 space-y-4">
          <h4 class="text-lg font-semibold">알림 설정</h4>
          <div class="space-y-2">
            <BaseCheckbox v-model="settingsStore.notifications[FtWsMessageTypes.entryFill]">
              진입 알림
            </BaseCheckbox>
            <BaseCheckbox v-model="settingsStore.notifications[FtWsMessageTypes.exitFill]">
              종료 알림
            </BaseCheckbox>
            <BaseCheckbox v-model="settingsStore.notifications[FtWsMessageTypes.entryCancel]">
              진입 취소 알림
            </BaseCheckbox>
            <BaseCheckbox v-model="settingsStore.notifications[FtWsMessageTypes.exitCancel]">
              종료 취소 알림
            </BaseCheckbox>
          </div>
        </div>

        <div class="border rounded-sm p-4 space-y-4">
          <h4 class="text-lg font-semibold">백테스팅 설정</h4>
          <div>
            <label for="backtestMetrics" class="block text-sm">백테스팅 지표</label>
            <MultiSelect
              id="backtestMetrics"
              v-model="settingsStore.backtestAdditionalMetrics"
              :options="availableBacktestMetrics"
              option-label="header"
              option-value="field"
              class="w-full"
              size="small"
              display="chip"
            />
            <small class="text-surface-600 dark:text-surface-400"
              >페어/태그별로 표시할 지표를 선택하세요.</small
            >
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
