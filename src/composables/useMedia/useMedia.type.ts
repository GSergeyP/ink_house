import type { Device } from '@/constants/device.constants';
import type { ComputedRef } from 'vue';

type IDevice = `${Device}`;

type IUseMedia = ComputedRef<IDevice>;

export type { IDevice, IUseMedia };
