import 'jasmine-expect';
import { actComps, actGraph, active, actNodes, addPlr, canPlay,
  claimNext, claimSwap, colNodes, column, copy, endIfWon, findPlr, game, hasPlr,
  inPlay, isActive, isWinner, locked, mendPlr, min, next,
  nodes, passComps, passGraph, passive, passNodes, playerByID, playerComps,
  playerGraph, playerNodes, players, pSelect, pushPlr, resetGame, rmPlr,
  select, setColumn, setMin,
  setNodes,
  setPlayers,
  setPlayState,
  start,
  stop,
  togglePlayers,
  toggleState,
  winner, } from 'src/game';

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
const evenJane = nodes(myGame).filter((e, i) => i % 2 === 0).map(claim(id(jane)));
const oddDick = nodes(myGame).filter((e, i) => i % 2 === 1).map(claim(id(dick)));
const rowGame = setNodes([ ...evenJane, ...oddDick ])(myGame);

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
  describe('min', () => {
    it('retrieves the minimum size which a winning component must exceed ', () => {
      expect(min(myGame)).toEqual(3);
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
  describe('setMin', () => {
    it('returns a copy of the game with amodified min prop', () => {
      expect(min(setMin(4)(myGame))).toEqual(4);
    });
  });
  describe('setPlayers', () => {
    it('returns a new game with the specified players', () => {
      expect(players(setPlayers([])(myGame))).toBeArray();
    });
  });
  describe('claimNext', () => {
    describe('claimSwap', () => {
      it('claims the next node and return a new array of Nodes', () => {
        // console.log(claimSwap(myGame));
        expect(claimSwap(myGame)).toBeArray();
      });
    });
    describe('when game is playable', () => {
      it('retuns a modified version of the game with next available node claimed ', () => {
        const myNext = next(start(myGame));

        // console.log('myGame', myGame);
        // console.log('claimNext(start(myGame))', claimNext(start(myGame)));

        // //console.log(inPlay(start(myGame)));
        expect(claimNext(start(myGame))).not.toBe(myGame);
        
        // //console.log(playerNodes(claimNext(start(myGame)))(active((myGame))));
        expect(playerNodes(claimNext(start(myGame)))(active((myGame)))[0].row).toBe(myNext.row);
        expect(playerNodes(claimNext(start(myGame)))(active((myGame)))[0].column).toBe(myNext.column);
      });
    });
    describe('when game is locked', () => {
      it('retuns the unmodified game', () => {
        expect(claimNext(myGame)).toBe(myGame);
      });
    });
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
  describe('endIfWon', () => {
    it('locks the game if theere is a winner', () => {
      expect(locked(endIfWon(rowGame))).toBeTrue();
      expect(locked(endIfWon(start(myGame)))).toBeFalse();
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
    describe('playerNodes', () => {
      it('returns an array of the nodes claimed by a player', () => {
        expect(playerNodes(rowGame)(dick)).toBeArray();
        
        // //console.log(playerNodes(rowGame)(dick))
        expect(playerNodes(rowGame)(dick).length).toBe(21);
      });
    });
    describe('actNodes', () => {
      it('returns an array of the nodes belonging to the active player', () => {
        expect(actNodes(rowGame)).toBeArray();
        expect(actNodes(rowGame).length).toBe(21);
      });
    });
    describe('passNodes', () => {
      it('returns an array of the nodes belonging to the passive player', () => {
        expect(passNodes(rowGame)).toBeArray();
        expect(passNodes(rowGame).length).toBe(21);
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
      it('checks if a player has connected any components exceeding min', () => {
        expect(isWinner(rowGame)(dick)).toBeTrue();
      });
    });
    describe('winner', () => {
      it('returns the first user wtih more than min connected', () => {
        expect(winner(rowGame)).toBe(dick);
      });
    });
  });
  describe('select', () => {
    describe('when the games is playable', () => {
      it('assigns the currentNode to the current player', () => {
        const myNext = next(start(myGame));
        
        expect(playerNodes(select(start(myGame)))(active(myGame))[0].row).toBe(myNext.row);
        expect(playerNodes(select(start(myGame)))(active(myGame))[0].column).toBe(myNext.column);
      });
      
      it('toggles the players', () => {
        // const prev = ;
        
        expect(active(select(start(myGame)))).not.toBe(active(myGame));
      });
    });
    
    // describe('when the current column is not available', () => {
    //   it('returns undefined', () => {
    //     column(start(myGame)).map(claim(id(active)(start(myGame))));
    //     expect(select(start(myGame))).toBeUndefined();
    //   });
    //   it('does not toggle the players', () => {
    //     column(start(myGame)).map(claim(id(active)(start(myGame))));
    //     const prev = active(start(myGame));
    //
    //     select(start(myGame));
    //     expect(active(start(myGame))).toBe(prev);
    //   });
    // });
  });
  describe('isActive', () => {
    it('checks if the selected player is active', () => {
      expect(isActive(dick)(myGame)).toBeTruthy();
      expect(isActive(jane)(myGame)).toBeFalsy();
    });
  });
  describe('copy', () => {
    it('returns a game object with identitcal properties', () => {
      expect(active(copy(myGame))).toEqual(active(myGame));
    });
  });
  describe('resetGame', () => {
    it('returns a new game with the  same players', () => {
      expect(resetGame(myGame).players).toEqual(players(myGame));
    });
  });
  
  describe('playerByID', () => {
    it('playerByID', () => {
      expect(playerByID(id(dick))(myGame)).toBe(dick);
    });
  });
  describe('findPlr', () => {
    it('findPlr', () => {
      expect(findPlr(dick)(myGame)).toBe(dick);
    });
  });
  describe('hasPlr', () => {
    it('hasPlr', () => {
      expect(hasPlr(dick)(myGame)).toBeTruthy();
    });
  });
  describe('mendPlr', () => {
    it('mendPlr', () => {
      expect(hasPlr(dick)(mendPlr(dick)(myGame))).toBeTruthy();
    });
  });
  describe('pushPlr', () => {
    it('pushPlr', () => {
      expect(hasPlr(dick)(pushPlr(dick)(myGame))).toBeTruthy();
    });
  });
  describe('addPlr', () => {
    it('adds or updates a player', () => {
      expect(hasPlr(dick)(addPlr(dick)())).toBeTruthy();
    });
  });
  describe('rmPlr', () => {
    it('removes a player if they are in the game', () => {
      expect(hasPlr(jane)(rmPlr(jane)(myGame))).toBeFalsy();
    });
  });
  describe('pSelect', () => {
    it('allows a player to place a token if theyre active', () => {
      expect(active(pSelect(passive(myGame))(start(myGame)))).toBe(active(myGame));
    
      expect(active(pSelect(active(myGame))(start(myGame)))).toBe(passive(myGame));
    });
  });
});
