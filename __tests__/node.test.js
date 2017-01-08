import 'jasmine-expect';
import node, * as Node from 'src/node';

const dick = { name: 'Dick' };
const jane = { name: 'Jane' };
const myNode = node(2, 3);
const jN00 = node(0, 0, jane);
const jN01 = node(0, 1, jane);
const dN55 = node(5, 5, dick);
const dN54 = node(5, 4, dick);

describe('Node', () => {
  describe('default', () => {
    it('returns an object with a column, row, and player attribute', () => {
      expect(myNode.column).toBe(2);
      expect(myNode.row).toBe(3);
      expect(myNode.player).toBe(null);
    });
  });

  describe('player', () => {
    it('retrieves the player attribute', () => {
      expect(Node.player(myNode)).toBeNull();
    });
  });

  describe('samePlayer', () => {
    it('compares the player attributes', () => {
      expect(Node.samePlayer(jN00)(dN55)).toBeFalse();
      expect(Node.samePlayer(jN00)(jN01)).toBeTrue();
    });
  });

  describe('isFree', () => {
    it('checks is player attr is falsy', () => {
      expect(Node.isFree(myNode)).toBeTrue();
      expect(Node.isFree(jN00)).toBeFalse();
    });
  });
});
