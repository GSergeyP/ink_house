<template>
  <MainLayout />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useMedia } from './composables/useMedia/useMedia';
import MainLayout from './layouts/MainLayout.vue';

const device = useMedia();
const htmlElement = document.documentElement;

htmlElement.setAttribute('device', device.value);

watch(
  device,
  (newDevice) => {
    htmlElement.setAttribute('device', newDevice);
  },
  {}
);
</script>
