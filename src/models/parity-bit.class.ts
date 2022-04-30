import { Bit } from './bit.class';
import type { ParityIndex } from './bit.types';
import { ParityData } from './parity.data';
import type { BitType } from './bit.types';

export class ParityBit extends Bit {
  containsKey: boolean = false;
  type: BitType = 'parity';
  parityData: number[];

  constructor(position: ParityIndex) {
    super(position);
    this.parityData = ParityData[position];
  }

  checkIfCorrect(): boolean {
    console.log('This is a parity bit');
    console.log('type: ', this.type);
    return false;
  }
}
