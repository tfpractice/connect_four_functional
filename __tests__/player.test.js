import 'jasmine-expect';
import { node, } from 'src/node';
import { claim, decrementScore, id, incrementScore, name, player, resetScore,
   score, setID, setName, setScore, } from 'src/player';

const dick = player('Dick');
const jane = player('Jane');

describe('Player', () => {
  describe('player', () => {
    it('returns an object with a name, score, and id ', () => {
      expect(player('Dick')).toBeObject();
      expect(player('Dick').name).toBe('Dick');
      expect(player('Dick').score).toBe(0);
      expect(player('Dick').id).toBe('Dick');
    });
  });
  describe('name ', () => {
    it('retrieves the name attribute', () => {
      expect(name(dick)).toBe('Dick');
    });
  });
  describe('score ', () => {
    it('retrieves the score attribute', () => {
      expect(score(dick)).toBe(0);
    });
  }); describe('id ', () => {
    it('retrieves the id attribute', () => {
      expect(id(dick)).toBe('Dick');
    });
  });
  describe('resetScore ', () => {
    it('retrieves the resetScore attribute', () => {
      resetScore(dick);
      expect(score(dick)).toBe(0);
    });
  });
  describe('incrementScore ', () => {
    it('retrieves the incrementScore attribute', () => {
      expect(score(incrementScore(dick))).toBe(1);
    });
  });
  describe('decrementScore ', () => {
    it('retrieves the decrementScore attribute', () => {
      expect(score(decrementScore(incrementScore(dick)))).toBe(0);
    });
  });
  describe('claim', () => {
    it('sets the object player attribute to the Player', () => {
      expect(claim(dick)(node(0, 0)).player).toBe(dick.id);
    });
  });
});
