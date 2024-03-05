<template>
  <section>
    <button
      v-for="(item, index) in data.data"
      :key="index"
      :class="
        item.link == data.state
          ? [$style.button, $style.active]
          : [$style.button, 'pseudo-but-var1']
      "
      @click="states(item.link)"
    >
      {{ item.title }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IData } from './BlockSwitching.type';
import { Emits } from '@/constants/emits.constants';

const props = defineProps<{ data: IData }>();
const { data } = toRefs(props);
const emits = defineEmits([Emits.CHANGE_NAVIGATE_STATE]);

const states = (state: string) => {
  return emits(Emits.CHANGE_NAVIGATE_STATE, state);
};
</script>

<style src="./BlockSwitching.style.scss" lang="scss" module />
