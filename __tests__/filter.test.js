import 'jasmine-expect';
import { node, setPlayer, } from 'src/node';
import { byPlayer, hasFree, nextFree, } from 'src/filter';

const c00 = node(0, 0);
const c01 = node(0, 1);
const c22 = node(2, 2);
const c31 = node(3, 1);
const c33 = node(3, 3);
const myNodes = [ c00, c01, c22, c31, c33, ];

describe('filters', () => {
  describe('byPlayer', () => {
    it('filters the array of nodes by player', () => {
      expect(byPlayer(myNodes.map(setPlayer(0)))(0)).toBeArray();
      expect(byPlayer(myNodes.map(setPlayer(0)))(0).length).toBe(5);
      expect(byPlayer(myNodes.map(setPlayer(0)))(1).length).toBe(0);
    });
  });
  describe('hasFree', () => {
    it('checks the array for unclaimed nodes', () => {
      expect(hasFree(myNodes)).toBeTrue();
      expect(hasFree(myNodes.map(setPlayer(0)))).toBeFalse();
    });
  });
  describe('nextFree', () => {
    it('retrieves the next unclaimed node', () => {
      expect(nextFree(myNodes)).toBe(c00);
      expect(nextFree(myNodes.map(setPlayer(0)))).toBeUndefined();
    });
  });
});
