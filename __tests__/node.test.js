import 'jasmine-expect';
import { claim, isFree, node, player, samePlayer, setPlayer, unClaim, } from 'src/node';
const dick = { name: 'Dick', id: 'Dick' };
const jane = { name: 'Jane', id: 'Jane' };
const myNode = node(2, 3);
const jN00 = node(0, 0, jane);
const jN01 = node(0, 1, jane);
const dN55 = node(5, 5, dick);
const dN54 = node(5, 4, dick);

describe('Node', () => {
  describe('node', () => {
    it('returns an object with a column, row, and player attribute', () => {
      expect(myNode.column).toBe(2);
      expect(myNode.row).toBe(3);
      expect(myNode.player).toBe(null);
    });
  });
  describe('player', () => {
    it('retrieves the player attribute', () => {
      expect(player(myNode)).toBeNull();
    });
  });
  describe('isFree', () => {
    describe('when given a node object', () => {
      it('checks if player attr is falsy', () => {
        expect(isFree(myNode)).toBeTrue();
        expect(isFree(jN00)).toBeFalse();
      });
    });
    describe('when given null or undefined', () => {
      it('return false', () => {
        expect(isFree()).toBeFalsy();
        expect(isFree(0)).toBeFalsy();
      });
    });
  });
  describe('samePlayer', () => {
    it('compares the player attributes', () => {
      expect(samePlayer(jN00)(dN55)).toBeFalse();
      expect(samePlayer(jN00)(jN01)).toBeTrue();
    });
  });
  describe('setPlayer', () => {
    it('returns a copy of the node with a changed player attributes', () => {
      expect(player(setPlayer(jane.id)(myNode))).toBe('Jane');
    });
  });
  describe('claim', () => {
    describe('when the node is free', () => {
      it('returns a copy of the node with a changed player attributes', () => {
        expect(player(claim(jane.id)(myNode))).toBe('Jane');
      });
    });
    describe('when the node isNot free', () => {
      it('returns a copy of the node with unchanged properties', () => {
        expect(player(claim(dick.id)(claim(jane.id)(myNode)))).toBe('Jane');
      });
    });
  });
  describe('unClaim', () => {
    it('sets the player to null', () => {
      expect(player(unClaim(myNode))).toBeNull();
    });
  });
});
