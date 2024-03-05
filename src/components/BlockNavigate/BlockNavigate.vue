<template>
  <nav>
    <a
      v-for="(item, index) in data"
      :key="index"
      :href="link ? link : item.link"
      @click="link == '#hero' && states(item.link)"
    >
      {{ item.title }}
    </a>
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IData, TLink } from './BlockNavigate.type';
import { Emits } from '@/constants/emits.constants';

const props = defineProps<{ data: IData[]; link?: TLink }>();
const { data, link } = toRefs(props);

const emits = defineEmits([Emits.CHANGE_NAVIGATE_STATE]);
const states = (state: string) => {
  return emits(Emits.CHANGE_NAVIGATE_STATE, state);
};
</script>
