<template>
  <article :class="$style.container" :id="NavigateMain.HERO">
    <h2 :class="$style.h2">
      {{ NavigateMainTitle.HERO }}
    </h2>
    <BlockSwitching
      :data="{ data: NavigateStateData, state: state }"
      :class="$style.item1"
      @change-navigate-state="states"
    />
    <section :class="$style.item2">
      <article v-for="(item, index) in currentData" :key="index" :class="$style.card">
        <section :class="$style['card-top']">
          <img :class="$style['card-img']" :src="item.img" alt="Ink.House" />
        </section>
        <section :class="$style['card-bottom']">
          <BlockHgroups
            :data="{
              cite: item.cite,
              heading: item.heading,
              h: item.h,
              p: item.p
            }"
          />
          <button class="pseudo-but-var1">В корзину</button>
        </section>
      </article>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import type { IData, TState } from './HeroViews.type';
import { NavigateMain, NavigateStateData, NavigateMainTitle } from '@/constants/navigate.constants';
import BlockSwitching from '@/components/BlockSwitching/BlockSwitching.vue';
import BlockHgroups from '@/components/BlockHgroups/BlockHgroups.vue';

const filter = (newState: string) => {
  return data.value.filter((item: IData) => item.state === newState);
};

const props = defineProps<{ data: IData[]; newState?: TState }>();
const { data, newState } = toRefs(props);

const state = ref<string>('france');
const currentData = ref<IData[]>(filter(state.value));

const states = (nevState: string) => {
  state.value = nevState;
};
watch(newState, (updateState) => {
  if (updateState) state.value = updateState;
});

watch(state, (newState) => {
  currentData.value = filter(newState);
});
</script>

<style src="./HeroViews.style.scss" lang="scss" module />
