import { Bit } from './bit.class';
import type { DataIndex } from './bit.types';
import type { BitType } from './bit.types';

export class DataBit extends Bit {
  containsKey: boolean = false;
  type: BitType = 'data';

  constructor(position: DataIndex) {
    super(position);
  }

  checkIfCorrect(): boolean {
    return false;
  }
}
