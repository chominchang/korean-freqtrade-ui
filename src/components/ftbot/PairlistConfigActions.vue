<script setup lang="ts">
import { usePairlistConfigStore } from '@/stores/pairlistConfig';
import EditValue from '../general/EditValue.vue';
const pairlistStore = usePairlistConfigStore();
</script>
<template>
  <div class="flex flex-col sm:flex-row mb-2 gap-2">
    <Button
      title="설정 저장"
      size="small"
      severity="primary"
      @click="pairlistStore.saveConfig(pairlistStore.config.name)"
    >
      <i-mdi-content-save />
    </Button>
    <EditValue
      v-model="pairlistStore.config.name"
      editable-name="config"
      :allow-add="true"
      :allow-duplicate="true"
      :allow-edit="true"
      class="flex grow"
      @delete="pairlistStore.deleteConfig"
      @duplicate="(oldName: string, newName: string) => pairlistStore.duplicateConfig(newName)"
      @new="(name: string) => pairlistStore.newConfig(name)"
      @rename="(oldName: string, newName: string) => pairlistStore.saveConfig(newName)"
    >
      <Select
        v-model="pairlistStore.configName"
        size="small"
        class="w-full text-start"
        :options="pairlistStore.savedConfigs.map((c) => c.name)"
        @update:model-value="(config) => pairlistStore.selectOrCreateConfig(config as string)"
      />
    </EditValue>
    <Button
      title="페어리스트 평가"
      :disabled="pairlistStore.evaluating || !pairlistStore.pairlistValid"
      severity="primary"
      class="px-5"
      size="small"
      @click="pairlistStore.startPairlistEvaluation()"
    >
      <ProgressSpinner v-if="pairlistStore.evaluating" class="h-5 w-5"></ProgressSpinner>
      <span v-else>평가</span>
    </Button>
  </div>
</template>
