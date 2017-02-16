import { asMap, asSet, map, spreadKV, } from 'fenugreek-collections';
import { Components, Filter, Grid, Node, } from 'game_grid';
import { id, player, } from './player';
import { genNodes, fromNodes as makeBoard, playerGraph as pGraph,
  playerNodes as pNodes, winComp, } from './board';
import { claim, samePlayer, setPlayer, } from './node';
const { colNodes: gCols, colNodes: cNodes } = Grid;

import * as Board from './board';

const { omniComps, splitComps } = Components;
const {
 byAdj, byCol, byNVec, byPosition, byPVec, byRow, columns, colAdj,
generate, negAdj, posAdj, rIDs, rowAdj,
} = Filter;

import { byExcess, byPlayer, exceeds, hasFree, nextFree, replace, } from './filter';

const dCol = 0;
const dPlr = [ player('player0', 0, 0), player('player1', 0, 1) ];
const dNodes = genNodes();

const init = ({ column: 0, nodes: genNodes(), players: dPlr, });

export const game = (players = dPlr, nodes = dNodes, column = 0) =>
  ({ players, nodes, column });

export const column = ({ column } = init) => column;
export const nodes = ({ nodes } = init) => nodes;
export const players = ({ players } = init) => players;
export const active = ({ players: [ active, passive ] } = init) => active;
export const passive = ({ players: [ active, passive ] } = init) => passive;

export const setNodes = nArr => g => game(players(g), nArr, column(g));
export const setColumn = col => g => game(players(g), nodes(g), col);
export const setPlayers = pArr => g => game(pArr, nodes(g), column(g));

export const board = g => makeBoard(...nodes(g));
export const colNodes = g => byCol(nodes(g))(column(g));
export const next = game => nextFree(colNodes(game));

export const togglePlayers = g => setPlayers([ passive(g), active(g) ])(g);

// export const playerMap = players => asMap(asSet(players));

export const playerNodes = g => p => byPlayer(nodes(g))(id(p));
export const actNodes = g => playerNodes(g)(active(g));
export const passNodes = g => playerNodes(g)(passive(g));

export const playerGraph = g => p => makeBoard(...playerNodes(g)(p));
export const actGraph = g => playerGraph(g)(active(g));
export const passGraph = g => playerGraph(g)(passive(g));

export const actComps = game => omniComps(actGraph(game));
export const passComps = game => omniComps(passGraph(game));

// export const claimNext = game =>
 // replace(setPlayer(active(game))(next(game)))(nodes(game));
export const select = (game) => {
  setNodes(replace(setPlayer(active(game))(next(game)))(nodes(game)))(game);

  // claim(active(game))(next(game));
  // console.log(nodes(game));
  return togglePlayers(game);
};
export const hasWinComp = brd => plr => winComp(pGraph(brd)(plr), 3);
export const winner = ({ players, nodes }) => players.find(hasWinComp(board({ nodes })));
