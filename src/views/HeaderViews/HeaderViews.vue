<template>
  <header :class="$style.container">
    <BlockLogo />
    <section v-if="device == Device.MOBILE" :class="$style.section">
      <MenuIcon v-if="!isActive" :class="$style['icon-men']" @click="isActive = !isActive" />
      <CloseIcon v-else :class="$style['icon-men']" @click="isActive = !isActive" />
      <BasketIcon :class="$style['icon-bas']" />
    </section>
    <BlockNavigate
      :class="
        device == Device.TABLET_S
          ? [$style.block, $style.border]
          : device == Device.MOBILE && isActive
            ? $style['block-mobile-active']
            : device == Device.MOBILE && !isActive
              ? $style['block-mobile']
              : $style.block
      "
      :data="NavigateMainData"
    >
      <a v-if="device != Device.MOBILE" href="#" :class="$style.a">
        <BasketIcon :class="$style['icon-bas']" />
      </a>
    </BlockNavigate>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMedia } from '@/composables/useMedia/useMedia';
import { NavigateMainData } from '@/constants/navigate.constants';
import { Device } from '@/constants/device.constants';
import BlockLogo from '@/components/BlockLogo/BlockLogo.vue';
import BlockNavigate from '@/components/BlockNavigate/BlockNavigate.vue';
import BasketIcon from '@/assets/icon/BasketIcon.vue';
import MenuIcon from '@/assets/icon/MenuIcon.vue';
import CloseIcon from '@/assets/icon/CloseIcon.vue';

const device = useMedia();
const isActive = ref<boolean>(false);
</script>

<style src="./HeaderViews.style.scss" lang="scss" module />
