<template>
  <footer id="footer" :class="$style.container">
    <section :class="$style.item1">
      <BlockLogo :class="$style['item1-block1']" />
      <address :class="$style['item1-block2']">
        <a :href="'tel:' + contacts.tel">{{ contacts.tel }}</a>
        <h5>{{ contacts.title }}</h5>
      </address>
    </section>
    <section :class="$style.item2">
      <article :class="$style['item2-block1']">
        <BlockNavigate :data="[NavigateMainData[0]]" :class="$style['item2-block1_h']" />
        <BlockNavigate
          :data="NavigateStateData"
          :link="NavigateMainData[0].link"
          @change-navigate-state="states"
          :change-navigate-state="state"
        />
      </article>
      <article :class="$style['item2-block2']">
        <BlockNavigate :data="[NavigateMainData[1]]" :class="$style['item2-block2_h']" />
        <BlockNavigate :data="NavigateYearData" :link="'#footer'" />
      </article>
      <article :class="$style['item2-block3']">
        <BlockNavigate :data="[NavigateMainData[2]]" :class="$style['item2-block3_h']" />
        <BlockNavigate :data="NavigateAboutsData" :link="'#footer'" />
      </article>
    </section>
    <section :class="$style.item3">
      <article :class="$style['item3-block1']">
        <FacebookIcon :class="$style['item3-block1_icon1']" />
        <InstagramIcon :class="$style['item3-block1_icon2']" />
        <YoutubeIcon :class="$style['item3-block1_icon3']" />
      </article>
      <h6>
        Ink. House ®
        <br v-if="device == Device.DESKTOP || device == Device.TABLET_B" />
        All rights reserved
      </h6>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Emits } from '@/constants/emits.constants';
import { contacts } from '@/constants/contacts.constants';
import {
  NavigateMainData,
  NavigateStateData,
  NavigateYearData,
  NavigateAboutsData
} from '@/constants/navigate.constants';
import { useMedia } from '@/composables/useMedia/useMedia';
import { Device } from '@/constants/device.constants';
import BlockLogo from '@/components/BlockLogo/BlockLogo.vue';
import BlockNavigate from '@/components/BlockNavigate/BlockNavigate.vue';
import FacebookIcon from '@/assets/icon/FacebookIcon.vue';
import InstagramIcon from '@/assets/icon/InstagramIcon.vue';
import YoutubeIcon from '@/assets/icon/YoutubeIcon.vue';

const device = useMedia();
const state = ref<string | undefined>();
const emits = defineEmits([Emits.CHANGE_NAVIGATE_STATE]);

const states = (states: string) => {
  state.value = states;
  return emits(Emits.CHANGE_NAVIGATE_STATE, state.value);
};
</script>

<style src="./FooterViews.style.scss" lang="scss" module />
