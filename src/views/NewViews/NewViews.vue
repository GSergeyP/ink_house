<template>
  <article :class="$style.container" :id="NavigateMain.NEW">
    <section :class="$style.item">
      <StarIcon :class="$style.icon" />
      <BlockHgroups :data="data" />
      <button :class="[$style.button, 'pseudo-but-var2']">Ознакомиться</button>
    </section>
  </article>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { NavigateMain } from '@/constants/navigate.constants';
import type { IData } from './NewViews.type';
import StarIcon from '@/assets/icon/StarIcon.vue';
import BlockHgroups from '@/components/BlockHgroups/BlockHgroups.vue';

const props = defineProps<{ data: IData }>();
const { data } = toRefs(props);
</script>

<style src="./NewViews.style.scss" lang="scss" module />
