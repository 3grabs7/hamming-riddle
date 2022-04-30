import type { DataIndex, ParityIndex } from './bit.types';

export type FlipConfig =
  | {
      type: 'parity';
      position: ParityIndex;
    }
  | {
      type: 'data';
      position: DataIndex;
    };
