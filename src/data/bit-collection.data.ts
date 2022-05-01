import type { IBitCollection } from '../models/bit-collection.interface';
import { DataBit } from '../models/data-bit.class';
import { ParityBit } from '../models/parity-bit.class';

const bitCollection: IBitCollection = {
  dataBits: [new DataBit(1), new DataBit(2), new DataBit(3), new DataBit(4)],
  parityBits: [new ParityBit(1), new ParityBit(2), new ParityBit(3)],
};

export default bitCollection;
