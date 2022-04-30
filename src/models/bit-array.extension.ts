import type { Bit } from './bit.class';

export {};
declare global {
  interface Array<T> {
    checkOutcomeAfterFlip(this: Bit[]): boolean;
  }
}

Array.prototype.checkOutcomeAfterFlip = function (): boolean {
  console.log(
    'here we check all the bits and if the only incorrect bit holds the key'
  );
  return true;
};
