import 'jasmine-expect';
import { node, } from 'src/node';
import { claim, decrementScore, hasID, id, incrementScore, name, player,
  resetScore, sameID, score, setID, setName, setScore, updatePlayer, xMatches, } from 'src/player';

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
  describe('hasID', () => {
    it('checks if the player Id matches the argument', () => {
      expect(hasID(id(dick))(dick)).toBeTruthy();
    });
  });
  describe('sameID', () => {
    it('compares the id attr of two players', () => {
      expect(sameID(dick)(dick)).toBeTruthy();
      expect(sameID(dick)(jane)).toBeFalsy();
    });
  });
  describe('updatePlayer', () => {
    it('assigns new properties to a player', () => {
      expect(updatePlayer(setName('john')(dick))(dick).name).toEqual('john');
    });
  });
  describe('xMatches', () => {
    it('returns true if the ids are different', () => {
      expect(xMatches(jane)(dick)).toBeTruthy();
    });
  });
});
