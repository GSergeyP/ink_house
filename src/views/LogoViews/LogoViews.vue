<template>
  <article :class="$style.container">
    <section v-if="device != Device.MOBILE" :class="$style.item1">
      <img :src="data.img" :class="$style.img" alt="Ink.House" />
    </section>
    <section :class="$style.item2">
      <BlockHgroups
        :data="{
          heading: data.heading,
          h: data.h,
          p: data.p
        }"
      />
      <button :class="[$style.button, 'pseudo-but-var1']">Продукция</button>
    </section>
  </article>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useMedia } from '@/composables/useMedia/useMedia';
import { Device } from '@/constants/device.constants';
import type { IData } from './LogoViews.type';
import BlockHgroups from '@/components/BlockHgroups/BlockHgroups.vue';

const props = defineProps<{ data: IData }>();
const { data } = toRefs(props);
const device = useMedia();
</script>

<style src="./LogoViews.style.scss" lang="scss" module />
