<template>
  <section :class="$style.section">
    <StarIcon :class="$style.icon" />
    <h4 :class="$style.h4">Ink. House</h4>
  </section>
</template>

<script setup lang="ts">
import StarIcon from '@/assets/icon/StarIcon.vue';
</script>

<style src="./BlockLogo.style.scss" lang="scss" module />
