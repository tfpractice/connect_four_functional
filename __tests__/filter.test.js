import 'jasmine-expect';
import { copy, node, setPlayer, } from 'src/node';
import { byExcess, byPlayer, exceeds, hasFree, nextFree, repIf, replace, repPos,
 } from 'src/filter';

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

      // expect(hasFree(myNodes.map(setPlayer(0)))).toBeFalse();
    });
  });
  describe('nextFree', () => {
    it('retrieves the next unclaimed node', () => {
      expect(nextFree(myNodes)).toBe(c00);
      expect(nextFree(myNodes.map(setPlayer(0)))).toBeUndefined();
    });
  });
  describe('exceeds', () => {
    it('checks if a collections size is greater than the limit', () => {
      expect(exceeds(3)(myNodes)).toBeTrue();
      expect(exceeds(6)(myNodes)).toBeFalse();
    });
  });
  describe('byExcess', () => {
    it('filters an collections of collections by whose which exceed the limt', () => {
      const concNodes = myNodes.map((n, id, arr) => id % 2 ? [ n ] : [ n, 1, 2, 3, 4 ]);

      expect(byExcess(2)(concNodes).length).toEqual(3);
    });
  });
  describe('repIf', () => {
    it('returns an object if the boolean function called on the original is true', () => {
      expect(repIf(3)(x => x % 2 === 0)(4)).toBe(3);
      expect(repIf(3)(x => x % 2 === 0)(5)).toBe(5);
    });
  });
  describe('repPos', () => {
    it('replaces a node if it matches position', () => {
      expect(repPos(c00)(c00)).toEqual(c00);
      expect(repPos(c00)(c01)).toEqual(c01);
    });
  });
  describe('replace', () => {
    it('returns a copy of an array with a modified matching element', () => {
      expect(replace(setPlayer('rep')(c00))(myNodes)).toBeArray();
    });
  });
});
