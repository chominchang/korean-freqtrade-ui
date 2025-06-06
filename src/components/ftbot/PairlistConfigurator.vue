<script setup lang="ts">
import type { Pairlist } from '@/types';
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable';

const botStore = useBotStore();
const pairlistStore = usePairlistConfigStore();

const availablePairlists = ref<Pairlist[]>([]);
const pairlistConfigsEl = ref<HTMLElement | null>(null);
const availablePairlistsEl = ref<HTMLElement | null>(null);
const selectedView = ref<'Config' | 'Results'>('Config');

const configEmpty = computed(() => {
  return pairlistStore.config.pairlists.length == 0;
});

useSortable(availablePairlistsEl, availablePairlists.value, {
  group: {
    name: 'configurator',
    pull: 'clone',
    put: false,
  },
  sort: false,
  filter: '.no-drag',
  dragClass: 'dragging',
});

useSortable(pairlistConfigsEl, pairlistStore.config.pairlists, {
  handle: '.handle',
  group: 'configurator',
  onUpdate: async (e) => {
    moveArrayElement(pairlistStore.config.pairlists, e.oldIndex, e.newIndex);
  },
  onAdd: (e) => {
    const pairlist = availablePairlists.value[e.oldIndex];
    pairlistStore.addToConfig(pairlist, e.newIndex);
    // quick fix from: https://github.com/SortableJS/Sortable/issues/1515
    e.clone.replaceWith(e.item);
    e.clone.remove();
  },
});

onMounted(async () => {
  availablePairlists.value = (await botStore.activeBot.getPairlists()).pairlists.sort((a, b) =>
    // Sort by is_pairlist_generator (by name), then by name.
    // TODO: this might need to be improved
    a.is_pairlist_generator === b.is_pairlist_generator
      ? a.name.localeCompare(b.name)
      : a.is_pairlist_generator
        ? -1
        : 1,
  );
  pairlistStore.selectOrCreateConfig(
    pairlistStore.isSavedConfig(pairlistStore.configName) ? pairlistStore.configName : 'default',
  );
});

watch(
  () => pairlistStore.whitelist,
  () => {
    selectedView.value = 'Results';
  },
);
</script>

<template>
  <div class="flex px-3 mb-3 gap-3 flex-col lg:flex-row">
    <ul
      ref="availablePairlistsEl"
      class="divide-y border-x border-surface-500 rounded-sm border-y divide-solid divide-surface-500"
    >
      <li
        v-for="pairlist in availablePairlists"
        :key="pairlist.name"
        :class="{
          'no-drag text-gray-500 hover:cursor-default':
            pairlistStore.config.pairlists.length == 0 && !pairlist.is_pairlist_generator,
        }"
        class="pairlist flex text-start items-center py-2 px-3 hover:cursor-grab"
      >
        <div class="flex grow items-start flex-col">
          <span class="font-bold">{{ pairlist.name }}</span>
          <span class="text-sm text-muted-color">{{ pairlist.description }}</span>
        </div>
        <Button
          severity="secondary"
          class="dark:text-white"
          variant="text"
          :disabled="pairlistStore.config.pairlists.length == 0 && !pairlist.is_pairlist_generator"
          @click="pairlistStore.addToConfig(pairlist, pairlistStore.config.pairlists.length)"
        >
          <template #icon>
            <i-mdi-arrow-right-bold-box-outline />
          </template>
        </Button>
      </li>
    </ul>
    <div class="flex flex-col grow">
      <PairlistConfigActions />
      <div class="border rounded-sm border-surface-500 p-2 mb-2">
        <div class="flex items-center gap-2 my-2">
          <span class="col-auto">스테이크 통화: </span>
          <InputText v-model="pairlistStore.stakeCurrency" size="small" />
        </div>

        <div class="mb-2 border rounded-sm border-surface-500 p-2 text-start">
          <BaseCheckbox v-model="pairlistStore.customExchange" class="mb-2">
            커스텀 거래소
          </BaseCheckbox>
          <Transition name="fade">
            <ExchangeSelect
              v-if="pairlistStore.customExchange"
              v-model="pairlistStore.selectedExchange"
            />
          </Transition>
        </div>
      </div>
      <PairlistConfigBlacklist />
      <Message
        v-if="pairlistStore.config.pairlists.length > 0 && !pairlistStore.firstPairlistIsGenerator"
        class="my-2"
        severity="warn"
      >
        페어리스트의 첫 번째 항목은 StaticPairList 또는 VolumePairList와 같은 생성 페어리스트여야 합니다.
      </Message>
      <div
        ref="pairlistConfigsEl"
        class="flex flex-col grow relative border rounded-sm border-surface-500 p-1 gap-2"
        :class="{ empty: configEmpty }"
      >
        <PairlistConfigItem
          v-for="(pairlist, i) in pairlistStore.config.pairlists"
          :key="pairlist.id"
          v-model="pairlistStore.config.pairlists[i]"
          :index="i"
          @remove="pairlistStore.removeFromConfig"
        />
      </div>
    </div>
    <div class="flex flex-col w-full lg:w-3/12">
      <SelectButton
        v-model="selectedView"
        class="mb-2"
        size="small"
        :allow-empty="false"
        option-label="value"
        option-value="value"
        :options="[
          { value: '설정' },
          { value: '결과', disabled: pairlistStore.whitelist.length === 0 },
        ]"
        option-disabled="disabled"
      >
        <!-- TODO primevue: Fix selectButton "disabled" state-->
      </SelectButton>
      <div class="relative overflow-auto">
        <CopyableTextfield
          v-if="selectedView === '설정'"
          class="lg:a22bsolute w-full"
          :content="pairlistStore.configJSON"
          :is-valid="pairlistStore.pairlistValid"
        />
        <CopyableTextfield
          v-if="selectedView === '결과'"
          class="lg:abs22olute w-full"
          :content="pairlistStore.whitelist"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@reference '../../styles/tailwind.css';

.pairlist.dragging {
  @apply border-white border bg-white dark:bg-black;
  /* border: 1px solid white; */
  /* border-radius: 0; */
}

.empty:after {
  content: '여기에 페어리스트 끌어다 놓기';
  position: absolute;
  align-self: center;
  font-size: 1.1rem;
  text-transform: uppercase;
  line-height: 0;
  top: 50%;
}
</style>
