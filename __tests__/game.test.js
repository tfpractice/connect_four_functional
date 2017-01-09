import 'jasmine-expect';
import game, { actComps,
  actGraph,
  active,
  board,
  cID,
  column,
  components,
  hasWinComp,
  next,
  passComps,
  passGraph,
  passive,
  playerMap,
  players,
  select,
  setColumn,
  togglePlayers,
  winner, } from 'src/game';

import player, { claim, } from 'src/player';
import { playerGraph, } from 'src/board';

const dick = player('Dick');
const jane = player('Jane');
const myPlayers = [ dick, jane ];
const myGame = game({ players: myPlayers });

console.log('myGame', myGame);
const graphs = g => players(g).map(playerGraph(board(g)));

describe('Game', () => {
  describe('spawn', () => {
    it('creates a new object with players and a board', () => {
      expect(myGame).toBeObject();
      expect(myGame.players).toBeArray();
      expect(myGame.board instanceof Map).toBeTrue();
    });
  });

  describe('board', () => {
    it('returns the board of the game', () => {
      expect(board(myGame) instanceof Map).toBeTrue();
    });
  });

  describe('players', () => {
    it('returns the players attribute of the', () => {
      expect(players(myGame)).toBeArray();
    });
  });
  describe('playerMap', () => {
    it('returns a new set of Players', () => {
      expect(playerMap(myGame.players) instanceof Map).toBeTrue();
    });
  });

  describe('active', () => {
    it('returns the games active players', () => {
      expect(active(myGame)).toBe(jane);
    });
  });
  describe('passive', () => {
    it('returns the games passive player ', () => {
      expect(passive(myGame)).toBe(dick);
    });
  });
  describe('togglePlayers', () => {
    it('switches the games active player ', () => {
      togglePlayers(myGame);
      expect(active(myGame)).toBe(dick);
    });
  });

  describe('components', () => {
    it('retrieve a map of player scores', () => {
      expect(components(myGame) instanceof Map).toBeTrue();
    });
  });

  describe('cID', () => {
    it('retrieves the current cID ID', () => {
      expect(cID(myGame)).toBe(0);
    });
  });
  describe('column', () => {
    it('returns the nodes in the current cID', () => {
      expect(column(myGame)).toBeArray();
    });
  });

  describe('setColumn', () => {
    it('returns a node at the specified position', () => {
      setColumn(myGame)(3);
      expect(cID(myGame)).toBe(3);
    });
  });
  describe('hasWinComp', () => {
    it('checks if the players component has more than three', () => {
      expect(hasWinComp(myGame.board)(myGame.players[0])).toBeFalse();
    });
  });
  describe('winner', () => {
    it('returns the player who has the winnnig component', () => {
      column(myGame).map(claim(active(myGame)));
      expect(winner(myGame)).toBe(jane);
    });
  });

//
// 	describe('select', () => {
// 		describe('when the current column is available', () => {
// 			it('assigns the currentNode to the current player', () => {
// 				let prev = active(myGame);
// 				let node = next(myGame);
// 				let gBoard = myGame.board;
// 				select(myGame);
// 				expect(Board.nodesByPlayer(gBoard)(prev)).toContain(node);
// 			});
// 			it('toggles the players', () => {
// 				let prev = active(myGame);
// 				select(myGame);
// 				expect(active(myGame)).not.toBe(prev);
// 			});
// 		});
// 		describe('when the current column is not available', () => {
// 			it('returns undefined', () => {
// 				column(myGame).map(claim(active(myGame)));
// 				expect(select(myGame)).toBeUndefined();
// 			});
// 			it('does not toggle the players', () => {
// 				column(myGame).map(claim(active(myGame)));
// 				let prev = active(myGame);
// 				select(myGame);
// 				expect(active(myGame)).toBe(prev);
// 			});
// 		});
// 	});
});
