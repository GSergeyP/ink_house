<template>
  <article :id="NavigateMain.ABOUT" :class="$style.container">
    <section>
      <img :src="data.about.img" :class="$style.img1" alt="Ink.House" />
    </section>
    <section>
      <BlockHgroups
        :class="$style.block"
        :data="{
          heading: data.about.heading,
          h: data.about.h,
          p: data.about.p
        }"
      >
      </BlockHgroups>
      <img
        v-for="(item, index) in data.team"
        :key="index"
        :src="item.img"
        :class="$style.img2"
        alt="Ink.House"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { NavigateMain } from '@/constants/navigate.constants';
import type { IData } from './AboutViews.type';
import BlockHgroups from '@/components/BlockHgroups/BlockHgroups.vue';

const props = defineProps<{ data: IData }>();
const { data } = toRefs(props);
</script>

<style src="./AboutViews.style.scss" lang="scss" module />
