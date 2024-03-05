import { computed, onMounted, onUnmounted, ref } from 'vue';
import { Device, Breakpoint } from '@/constants/device.constants';
import type { IDevice, IUseMedia } from './useMedia.type';

const useMedia = (): IUseMedia => {
  const screenWidth = ref<number>(0);

  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    screenWidth.value = window.innerWidth;

    window.addEventListener('resize', changeSizeWindow);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const device = computed<IDevice>(() => {
    if (screenWidth.value >= Breakpoint.MAX) return Device.DESKTOP;
    else if (screenWidth.value < Breakpoint.MAX && screenWidth.value >= Breakpoint.MIDDLE)
      return Device.TABLET_B;
    else if (screenWidth.value < Breakpoint.MIDDLE && screenWidth.value >= Breakpoint.MIN)
      return Device.TABLET_S;
    else return Device.MOBILE;
  });
  return device;
};

export { useMedia };
