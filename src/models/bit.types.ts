export type BitValue = 0 | 1;
export type BitType = 'data' | 'parity';
export type ParityIndex = 1 | 2 | 3;
export type DataIndex = 1 | 2 | 3 | 4;

export type BitTypeAndPosition =
  | {
      bitType: 'data';
      position: DataIndex;
    }
  | {
      bitType: 'parity';
      position: ParityIndex;
    };
