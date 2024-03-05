<template>
  <hgroup>
    <cite v-if="data.cite">{{ data.cite }}</cite>
    <h1 v-if="data.heading == 'h1'" v-html="data.h"></h1>
    <h2 v-else-if="data.heading == 'h2'" v-html="data.h"></h2>
    <h3 v-else v-html="data.h"></h3>
    <p v-html="data.p"></p>
  </hgroup>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';
import type { IData } from './BlockHgroups.type';

const props = defineProps<{ data: IData }>();
const { data } = toRefs(props);
</script>
