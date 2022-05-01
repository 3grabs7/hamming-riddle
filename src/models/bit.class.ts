import type { BitType, BitValue as BitValue, ParityIndex } from './bit.types';
import type { DataIndex } from './bit.types';

export abstract class Bit {
  containsKey: boolean = false;
  position: ParityIndex | DataIndex;
  value: BitValue;

  abstract type: BitType;
  abstract checkIfCorrect(): boolean;

  constructor(position: ParityIndex | DataIndex) {
    this.position = position;
  }

  flip(): void {
    this.value = this.value === 1 ? 0 : 1;
  }

  setRandomValue(): void {
    const randomBitValue = Math.round(Math.random());
    this.value = randomBitValue as BitValue;
  }
}
