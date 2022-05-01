export const ParityData: IParityData = {
  1: [1, 2, 4],
  2: [1, 3, 4],
  3: [2, 3, 4],
};

interface IParityData {
  [key: number]: number[];
}
