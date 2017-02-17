import 'jasmine-expect';
import { actComps, actGraph, active, actNodes, board, claimNext, colNodes,
   column, game, hasWinComp, inPlay, next, nodes, passComps, passGraph, passive,
   passNodes, playerGraph, playerNodes, players, select, setColumn, setNodes,
  setPlayers, togglePlayers, winner, } from 'src/game';

import { id, player, } from 'src/player';
import { claim, } from 'src/node';

const dick = player('Dick', 0, 0);
const jane = player('Jane', 0, 1);
const myPlayers = [ dick, jane ];
const myGame = game(myPlayers);
const col0 = colNodes(myGame);
const col1 = colNodes(setColumn(1)(myGame));
const [ c0r0, c0r1, c0r2, c0r3, c0r4, c0r5 ] = col0;
const [ c1r0, c1r1, c1r2, c1r3, c1r4, c1r5 ] = col1;

describe('Game', () => {
  describe('game', () => {
    it('creates a new object with players, nodes, and a  colID', () => {
      expect(myGame).toBeObject();
      expect(myGame.players).toBeArray();
      expect(myGame.nodes).toBeArray();
      expect(myGame.column).toBe(0);
      expect(myGame.inPlay).toBe(false);
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
  describe('inPlay', () => {
    it('returns the games play state', () => {
      expect(inPlay(myGame)).toBeFalse();
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
  describe('claimNext', () => {
    it('retuns a modified version of the game with claimed nodes available node', () => {
      const myNext = next(myGame);
      
      expect(claimNext(myGame)).toBeObject();
      
      expect(playerNodes(claimNext(myGame))(active(myGame))[0].row).toBe(myNext.row);
      expect(playerNodes(claimNext(myGame))(active(myGame))[0].column).toBe(myNext.column);
    });
  });
  describe('board', () => {
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
  describe('togglePlayers', () => {
    it('switches the games active player ', () => {
      togglePlayers(myGame);
      expect(active(myGame)).toBe(dick);
    });
  });
  describe('playerNodes', () => {
    it('returns an array of the nodes claimed by a player', () => {
      colNodes(myGame).map(claim(id(dick)));
      expect(playerNodes(myGame)(dick)).toBeArray();
      
      // console.log(playerNodes(myGame)(dick));
      
      // expect(playerNodes(myGame)(dick)[0].player).toBe(dick.id);
    });
  });
  describe('actNodes', () => {
    it('returns an array of the nodes belonging to the active player', () => {
      colNodes(myGame).map(claim(id(dick)));
      expect(actNodes(myGame)).toBeArray();
      
      // expect(actNodes(myGame)[0].player).toBe(dick.id);
    });
  });
  describe('passNodes', () => {
    it('returns an array of the nodes belonging to the passive player', () => {
      colNodes(myGame).map(claim(id(jane)));
      
      expect(passNodes(myGame)).toBeArray();
    });
  });
  describe('playerGraph', () => {
    it('returns a map of the nodes claime d by the specified player', () => {
      colNodes(myGame).map(claim(id(dick)));
      expect(playerGraph(myGame)(dick) instanceof Map).toBeTrue();
    });
  });
  describe('actGraph', () => {
    it('returns a Graph of the nodes belonging to the active player', () => {
      colNodes(myGame).map(claim(id(dick)));
      
      expect(actGraph(myGame) instanceof Map).toBeTrue();
      
      // expect([ ...actGraph(myGame) ][0][0].player).toBe(dick.id);
    });
  });
  describe('passGraph', () => {
    it('returns  a Graph of the nodes  belonging to the passive player', () => {
      colNodes(myGame).map(claim(id(jane)));
      
      expect(passGraph(myGame) instanceof Map).toBeTrue();
    });
  });
  describe('select', () => {
    describe('when the games next node is Free', () => {
      it('assigns the currentNode to the current player', () => {
        const myNext = next(myGame);

        expect(playerNodes(select(myGame))(active(myGame))[0].row).toBe(myNext.row);
        expect(playerNodes(select(myGame))(active(myGame))[0].column).toBe(myNext.column);
      });
      
      it('toggles the players', () => {
        const prev = active(myGame);
      
        // select(myGame);
        expect(active(select(myGame))).not.toBe(prev);
      });
    });
    
    // describe('when the current column is not available', () => {
    //   it('returns undefined', () => {
    //     column(myGame).map(claim(id(active)(myGame)));
    //     expect(select(myGame)).toBeUndefined();
    //   });
    //   it('does not toggle the players', () => {
    //     column(myGame).map(claim(id(active)(myGame)));
    //     const prev = active(myGame);
    //
    //     select(myGame);
    //     expect(active(myGame)).toBe(prev);
    //   });
    // });
  });
});
