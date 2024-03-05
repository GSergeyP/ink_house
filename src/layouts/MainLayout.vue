<template>
  <HeaderViews />
  <LogoViews :data="logo" />
  <HeroViews :data="hero" :newState="state" />
  <NewViews :data="news" />
  <AboutViews :data="{ about, team }" />
  <FooterViews @change-navigate-state="states" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { logo } from '@/constants/logo.constants';
import { hero } from '@/constants/hero.constants';
import { news } from '@/constants/new.constants';
import { about, team } from '@/constants/about.constants';
import HeaderViews from '@/views/HeaderViews/HeaderViews.vue';
import LogoViews from '@/views/LogoViews/LogoViews.vue';
import HeroViews from '@/views/HeroViews/HeroViews.vue';
import NewViews from '@/views/NewViews/NewViews.vue';
import AboutViews from '@/views/AboutViews/AboutViews.vue';
import FooterViews from '@/views/FooterViews/FooterViews.vue';

const state = ref<string | undefined>();

const states = (nevState: string) => {
  state.value = nevState;
};
</script>
