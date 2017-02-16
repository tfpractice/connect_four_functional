import 'jasmine-expect';
import { claim, decrementScore, id, incrementScore, name, player, resetScore,
   score, setID, setName, setScore, } from 'src/player';
const dick = player('Dick');
const jane = player('Jane');

// const myBoard = board(...genNodes());
// const myNodes = nodes(myBoard);
// const col0 = nodesByColumn(myBoard)(0);
// const col1 = nodesByColumn(myBoard)(1);
// const [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5] = col0;
// const [c1r0, c1r1, c1r2, c1r3, c1r4, c1r5] = col1;

describe('Player', () => {
// 	beforeAll(function() {
// 		console.log('\n.........Player Spec.........');
// 		({ Player: PR, Node } = app);
// 	});
//
// 	beforeEach(function() {
// 		dick = Player.spawn('Dick');
// 		jane = Player.spawn('Jane');
// 		myBoard = Board.spawn();
// 		myNodes = Board.nodes(myBoard);
// 		col0 = [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5] = byCol(myBoard)(0);
// 		col1 = [c1r0, c1r1, c1r2, c1r3, c1r4, c1r5] = byCol(myBoard)(1);
// 	});
//
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

// 	describe('incrementScore ', () => {
// 		it('retrieves the incrementScore attribute', () => {
// 			resetScore(dick);
// 			expect(score(dick)).toBe(0);
// 		});
// 	});
// 	describe('decrementScore ', () => {
// 		it('retrieves the decrementScore attribute', () => {
// 			resetScore(dick);
// 			expect(score(dick)).toBe(0);
// 		});
// 	});
// 	describe('claim', () => {
// 		it('sets the object player attribute to the Player', () => {
// 			let nd00 = Node.spawn(0, 0);
// 			claim(dick)(nd00);
// 			claim(dick)();
// 			expect(nd00.player).toBe(dick);
// 		});
// 	});
});
