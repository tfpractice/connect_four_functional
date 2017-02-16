import 'jasmine-expect';
import { actComps, actGraph, active, actNodes, board, colNodes, column,
   game, hasWinComp, next, nodes, passComps, passGraph, passive, passNodes,
   playerGraph, playerNodes, players, select, setColumn, setNodes,
  setPlayers, togglePlayers, winner, } from 'src/game';

import { claim, player, } from 'src/player';

// playerMapcomponents,
// import { playerGraph, } from 'src/board';

const dick = player('Dick', 0, 0);
const jane = player('Jane', 0, 1);
const myPlayers = [ dick, jane ];
const myGame = game(myPlayers);
const col0 = colNodes(myGame);
const col1 = colNodes(setColumn(1)(myGame));
const [ c0r0, c0r1, c0r2, c0r3, c0r4, c0r5 ] = col0;
const [ c1r0, c1r1, c1r2, c1r3, c1r4, c1r5 ] = col1;

// const graphs = g => players(g).map(playerGraph(board(g)));

describe('Game', () => {
  describe('game', () => {
    it('creates a new object with players, nodes, and a  colID', () => {
      expect(myGame).toBeObject();
      expect(myGame.players).toBeArray();
      expect(myGame.nodes).toBeArray();
      expect(myGame.column).toBe(0);
    });
  });
  
  describe('nodes', () => {
    it('returns the nodes of the game', () => {
      expect(nodes(myGame)).toBeArray();
    });
  });
  describe('column', () => {
    it('returns the games column ID', () => {
      expect(column(myGame)).toBe(0);
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
      expect(column(setColumn(3)(myGame))).toBe(3);
    });
  });

  describe('setPlayers', () => {
    it('returns a new game with the specified players', () => {
      expect(players(setPlayers([])(myGame))).toBeArray();
    });
  });

  // describe('board', () => {
  //   it('returns a graph of the games nodes', () => {
  //     expect(board(myGame) instanceof Map).toBeTrue();
  //   });
  // });
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
  
  // describe('playerMap', () => {
  //   it('returns a new Map of Players with the same keys and values', () => {
  //     expect(playerMap(myGame.players) instanceof Map).toBeTrue();
  //   });
  // });
  //
  describe('togglePlayers', () => {
    it('switches the games active player ', () => {
      togglePlayers(myGame);
      expect(active(myGame)).toBe(dick);
    });
  });

  describe('playerNodes', () => {
    it('returns an array of the nodes claimed by a player', () => {
      colNodes(myGame).map(claim(dick));
      expect(playerNodes(myGame)(dick)).toBeArray();
      expect(playerNodes(myGame)(dick)[0].player).toBe(dick.id);
    });
  });

  describe('actNodes', () => {
    it('returns an array of the nodes belonging to the active player', () => {
      colNodes(myGame).map(claim(dick));
      expect(actNodes(myGame)).toBeArray();
      expect(actNodes(myGame)[0].player).toBe(dick.id);
    });
  });

  describe('passNodes', () => {
    it('returns an array of the nodes belonging to the passive player', () => {
      colNodes(myGame).map(claim(jane));
      console.log(passNodes(myGame)[0]);
      expect(passNodes(myGame)).toBeArray();
  
      // expect(passNodes(myGame)[0].player).toBe(jane.id);
    });
  });
  
  describe('playerGraph', () => {
    it('returns a map of the nodes claime d by the specified player', () => {
      colNodes(myGame).map(claim(dick));
      expect(playerGraph(myGame)(dick) instanceof Map).toBeTrue();
    });
  });
  
  describe('actGraph', () => {
    it('returns a Graph of the nodes belonging to the active player', () => {
      colNodes(myGame).map(claim(dick));
      console.log(actGraph(myGame));
      expect(actGraph(myGame) instanceof Map).toBeTrue();
  
      expect([ ...actGraph(myGame) ][0][0].player).toBe(dick.id);
    });
  });

  // describe('passGraph', () => {
  //   it('returns  a Graph of the nodes  belonging to the passive player', () => {
  //     colNodes(myGame).map(claim(jane));
  //
  //     // console.log(passGraph(myGame));
  //     expect(passGraph(myGame) instanceof Map).toBeTrue();
  //
  //     // expect([ ...passGraph(myGame) ][0][0].player).toBe(jane.id);
  //   });
  // });
  // describe('actComps', () => {
  //   it('returns  the active players components', () => {
  //     colNodes(myGame).map(claim(dick));
  //
  //     // console.log(actComps(myGame));
  //   });
  // });

  // describe('components', () => {
  //   it('retrieve a map of player scores', () => {
  //     expect(components(myGame) instanceof Map).toBeTrue();
  //   });
  // });
  //
  

  describe('select', () => {
    describe('when the current column is available', () => {
      it('assigns the currentNode to the current player', () => {
        let prev = active(myGame);
        let node = next(myGame);
        let gBoard = myGame.board;
        select(myGame);
        expect(Board.nodesByPlayer(gBoard)(prev)).toContain(node);
      });
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
