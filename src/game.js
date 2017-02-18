import { Graph, } from 'graph-curry';
import { asMap, asSet, filter, map, } from 'fenugreek-collections';
import { Components, Filter, Grid, Node, } from 'game_grid';
import { id, player, } from './player';
import { genNodes, playerGraph as pGraph,
  playerNodes as pNodes, winComp, } from './board';
import { claim, samePlayer, setPlayer, } from './node';
const { colNodes: gCols, colNodes: cNodes } = Grid;

import * as Board from './board';
const { graph } = Graph;
const { omniComps, splitComps } = Components;
const { byCol, } = Filter;

import { anyExceed, byExcess, byPlayer, callIf, hasFree, nextFree, replace, } from './filter';

const dCol = 0;
const dPlr = [ player('player0', 0, 0), player('player1', 0, 1) ];
const dNodes = genNodes();

const init = ({ column: 0, nodes: genNodes(), players: dPlr, inPlay: false });

export const game = (players = dPlr, nodes = dNodes, column = 0, inPlay = false) =>
  ({ players, nodes, column, inPlay });

export const column = ({ column } = init) => column;
export const nodes = ({ nodes } = init) => nodes;
export const inPlay = ({ inPlay } = init) => inPlay;
export const players = ({ players } = init) => players;
export const active = ({ players: [ active, passive ] } = init) => active;
export const passive = ({ players: [ active, passive ] } = init) => passive;

export const setNodes = nArr => g => game(players(g), nArr, column(g), inPlay(g));
export const setColumn = col => g => game(players(g), nodes(g), col, inPlay(g));
export const setPlayState = bool => g => game(players(g), nodes(g), column(g), !!bool);
export const setPlayers = pArr => g => game(pArr, nodes(g), column(g), inPlay(g));

export const start = g => setPlayState(true)(g);
export const stop = g => setPlayState(false)(g);
export const toggleState = g => setPlayState(!inPlay(g))(g);

export const board = g => graph(...nodes(g));
export const colNodes = g => byCol(nodes(g))(column(g));
export const next = game => nextFree(colNodes(game));

export const canPlay = g => inPlay(g) && !!next(g);

export const togglePlayers = g => setPlayers([ passive(g), active(g) ])(g);

export const playerNodes = g => p => byPlayer(nodes(g))(id(p));
export const actNodes = g => playerNodes(g)(active(g));
export const passNodes = g => playerNodes(g)(passive(g));

export const playerGraph = g => p => graph(...playerNodes(g)(p));
export const actGraph = g => playerGraph(g)(active(g));
export const passGraph = g => playerGraph(g)(passive(g));

export const playerComps = g => p => byExcess(1)(omniComps(playerGraph(g)(p)));
export const actComps = g => playerComps(g)(active(g));
export const passComps = g => playerComps(g)(passive(g));

export const isWinner = g => p => anyExceed(3)(playerComps(g)(p));
export const winner = g => players(g).find(isWinner(g));

export const claimNext = g =>

// canPlay(g) ?
  setNodes(replace(claim(id(active(g)))(next(g)))(nodes(g)))(g);

  // : g;
export const select = game =>

// canPlay(g) ?
  next(game) ? togglePlayers(claimNext(game)) : game;
