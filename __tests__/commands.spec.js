import 'jasmine-expect';
import { kvMap, } from 'src/utils';

// console.log('comms', comms);

const cSet = new Set([ 1, 2, 3, 4 ]);
const cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const cArr = [ 0, 11, 22, 33, 44 ];

describe('kvMap', () => {
  it('returns a new map with altered keys', () => {
    const dubMap = kvMap(cMap)(v => v * 2);

    expect(dubMap.get(8)).toBe(2);
  });
});
