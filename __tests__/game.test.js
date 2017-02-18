import 'jasmine-expect';
import { actComps, actGraph, active, actNodes, board, canPlay, claimNext,
   colNodes, column, game, hasWinComp, inPlay, isWinner, locked, next, nodes, passComps, passGraph,
   passive, passNodes, playerComps, playerGraph, playerNodes, players, select, setColumn, setNodes, setPlayers,
  setPlayState, start, stop, togglePlayers, toggleState, winner,
   } from 'src/game';

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
  describe('setPlayState', () => {
    it('returns a copy of the game with a new PlayState', () => {
      expect(inPlay(setPlayState(true)(myGame))).toBeTruthy();
    });
  });
  describe('setPlayers', () => {
    it('returns a new game with the specified players', () => {
      expect(players(setPlayers([])(myGame))).toBeArray();
    });
  });
  describe('claimNext', () => {
    describe('when game is playable', () => {
      it('retuns a modified version of the game with next available node claimed ', () => {
        const myNext = next(myGame);

        console.log(inPlay(myGame));
        expect(claimNext(myGame)).toBeObject();
        console.log(playerNodes(claimNext(myGame))(active(myGame)));
        expect(playerNodes(claimNext(myGame))(active(myGame))[0].row).toBe(myNext.row);
        expect(playerNodes(claimNext(myGame))(active(myGame))[0].column).toBe(myNext.column);
      });
    });
    describe('when game is locked', () => {
      it('retuns the unmodified game', () => {
        const myNext = next(myGame);
        
        expect(claimNext(myGame)).toBeObject();
        
        expect(playerNodes(claimNext(myGame))(active(myGame))[0].row).toBe(myNext.row);
        expect(playerNodes(claimNext(myGame))(active(myGame))[0].column).toBe(myNext.column);
      });
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
  describe('canPlay', () => {
    it('checks if the game is inPlay and there is an available node', () => {
      const locked = setPlayState(false)(myGame);
      const noNext = setNodes([])(myGame);

      expect(canPlay(locked)).toBeFalsy();
      expect(canPlay(noNext)).toBeFalsy();
      expect(canPlay(setPlayState(true)(myGame))).toBeTrue();
    });
  });
  describe('locked', () => {
    it('checks if the game is not inPlay or there is no available node', () => {
      const lockedGame = setPlayState(false)(myGame);
      const noNext = setNodes([])(myGame);

      expect(locked(lockedGame)).toBeTrue();
      expect(locked(noNext)).toBeTrue();
      expect(locked(setPlayState(true)(myGame))).toBeFalse();
    });
  });
  describe('next', () => {
    it('returns the next free node in the games current column', () => {
      expect(next(myGame)).toBeObject();
    });
  });
  describe('start', () => {
    it('sets inPlay to true', () => {
      expect(inPlay(start(myGame))).toBeTrue();
    });
  });
  describe('stop', () => {
    it('sets inPlay to false', () => {
      expect(inPlay(stop(myGame))).toBeFalse();
    });
  });
  describe('toggleState', () => {
    it('returns a copy of the game with a negated play state', () => {
      expect(inPlay(toggleState(myGame))).toBeTrue();
    });
  });
  describe('togglePlayers', () => {
    it('switches the games active player ', () => {
      togglePlayers(myGame);
      expect(active(myGame)).toBe(dick);
    });
  });
  
  describe('graphs', () => {
    const evenJane = nodes(myGame).filter((e, i) => i % 2 === 0).map(claim(id(jane)));
    const oddDick = nodes(myGame).filter((e, i) => i % 2 === 1).map(claim(id(dick)));
    const rowGame = setNodes([ ...evenJane, ...oddDick ])(myGame);

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
        expect(playerGraph(rowGame)(dick) instanceof Map).toBeTrue();
        expect(playerGraph(rowGame)(dick).size).toBe(21);
        expect(playerGraph(rowGame)(jane).size).toBe(21);
      });
    });
    describe('actGraph', () => {
      it('returns a Graph of the nodes belonging to the active player', () => {
        expect(actGraph(rowGame) instanceof Map).toBeTrue();
        expect(actGraph(rowGame).size).toBe(21);
      });
    });
    describe('passGraph', () => {
      it('returns a Graph of the nodes  belonging to the passive player', () => {
        expect(passGraph(rowGame) instanceof Map).toBeTrue();
        expect(passGraph(rowGame).size).toBe(21);
      });
    });
    describe('playerComps', () => {
      it('returns all the players Components', () => {
        expect(playerComps(rowGame)(dick)).toBeArray();
        expect(playerComps(rowGame)(dick).length).toBe(3);
      });
    });
    describe('actComps', () => {
      it('returns the active player Components', () => {
        expect(actComps(rowGame)).toBeArray();
        expect(actComps(rowGame).length).toBe(3);
      });
    });
    describe('isWinner', () => {
      it('checks if a player has connected any components exceeding 3', () => {
        expect(isWinner(rowGame)(dick)).toBeTrue();
      });
    });
    describe('winner', () => {
      it('returns the first user wtih more than 3 connected', () => {
        expect(winner(rowGame)).toBe(dick);
      });
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
