import type { Bit } from './bit.class';

export interface IBitCollection {
  dataBits: Bit[];
  parityBits: Bit[];
}
