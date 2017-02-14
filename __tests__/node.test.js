import 'jasmine-expect';
import { isFree, node, player, samePlayer, setPlayer, } from 'src/node';
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
  
  describe('samePlayer', () => {
    it('compares the player attributes', () => {
      expect(samePlayer(jN00)(dN55)).toBeFalse();
      expect(samePlayer(jN00)(jN01)).toBeTrue();
    });
  }); describe('setPlayer', () => {
    it('compares the player attributes', () => {
      expect(player(setPlayer(jane)(myNode))).toBe('Jane');
    });
  });
  
  describe('isFree', () => {
    it('checks is player attr is falsy', () => {
      expect(isFree(myNode)).toBeTrue();
      expect(isFree(jN00)).toBeFalse();
    });
  });
});
