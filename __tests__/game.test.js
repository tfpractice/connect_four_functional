import 'jasmine-expect';
import { actComps, actGraph, active, board, cID, colNodes, column, components,
  game, hasWinComp, next, nodes, passComps, passGraph, passive, playerMap,
  players, select, setColumn, setNodes, setPlayers, togglePlayers, winner, } from 'src/game';

import { claim, player, } from 'src/player';
import { playerGraph, } from 'src/board';

const dick = player('Dick', 0, 0);
const jane = player('Jane', 0, 1);
const myPlayers = [ dick, jane ];
const myGame = game(myPlayers);

// const graphs = g => players(g).map(playerGraph(board(g)));

describe('Game', () => {
  describe('game', () => {
    it('creates a new object with players, nodes, and a  colID', () => {
      expect(myGame).toBeObject();
      expect(myGame.players).toBeArray();
      expect(myGame.nodes).toBeArray();
      expect(myGame.cID).toBe(0);
    });
  });
  
  describe('nodes', () => {
    it('returns the nodes of the game', () => {
      expect(nodes(myGame)).toBeArray();
    });
  });
  describe('cID', () => {
    it('returns the games column ID', () => {
      expect(cID(myGame)).toBe(0);
    });
  });
  
  describe('players', () => {
    it('returns the players attribute of the', () => {
      expect(players(myGame)).toBeArray();
    });
  });
  describe('active', () => {
    it('returns the games current player', () => {
      expect(active(myGame)).toBeObject();
      expect(active(myGame)).toBe(dick);
    });
  });
  describe('passive', () => {
    it('returns the players attribute of the', () => {
      expect(passive(myGame)).toBeObject();
      expect(passive(myGame)).toBe(jane);
    });
  });
  describe('setNodes', () => {
    it('returns a new game with the specified nodes', () => {
      expect(nodes(setNodes([])(myGame))).toBeArray();
    });
  });
  describe('setColumn', () => {
    it('returns a new game with the specified columnID', () => {
      expect(cID(setColumn(3)(myGame))).toBe(3);
    });
  });
  describe('setPlayers', () => {
    it('returns a new game with the specified players', () => {
      expect(players(setPlayers([])(myGame))).toBeArray();
    });
  });
  describe('colNodes', () => {
    it('returns an array of nodes in the current column', () => {
      expect(colNodes(myGame)).toBeArray();
      expect(colNodes(myGame)[0].column).toBe(0);
    });
  });
  describe('next', () => {
    it('returns the next free node in the games current column', () => {
      expect(next(myGame)).toBeObject();
    });
  });

  describe('playerMap', () => {
    it('returns a new Map of Players with the same keys and values', () => {
      expect(playerMap(myGame.players) instanceof Map).toBeTrue();
    });
  });

  describe('togglePlayers', () => {
    it('switches the games active player ', () => {
      togglePlayers(myGame);
      expect(active(myGame)).toBe(dick);
    });
  });
  
  // describe('components', () => {
  //   it('retrieve a map of player scores', () => {
  //     expect(components(myGame) instanceof Map).toBeTrue();
  //   });
  // });
  //
  // describe('cID', () => {
  //   it('retrieves the current cID ID', () => {
  //     expect(cID(myGame)).toBe(0);
  //   });
  // });
  // describe('column', () => {
  //   it('returns the nodes in the current cID', () => {
  //     expect(column(myGame)).toBeArray();
  //   });
  // });
  //
  // describe('setColumn', () => {
  //   it('returns a node at the specified position', () => {
  //     setColumn(myGame)(3);
  //     expect(cID(myGame)).toBe(3);
  //   });
  // });
  // describe('hasWinComp', () => {
  //   it('checks if the players component has more than three', () => {
  //     expect(hasWinComp(myGame.board)(myGame.players[0])).toBeFalse();
  //   });
  // });
  // describe('winner', () => {
  //   it('returns the player who has the winnnig component', () => {
  //     column(myGame).map(claim(active(myGame)));
  //     expect(winner(myGame)).toBe(jane);
  //   });
  // });
  
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
