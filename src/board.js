import { asSet, flattenBin, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { copy as copyN, isFree, node, samePlayer, setPlayer, } from './node';
import { byPlayer, exceeds, hasFree, nextFree, } from './filter';
import { id, } from './player';

const { graph, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { omniComps, } = Components;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(copyN);
export const board = (c = 7, r = 6) => graph(...genNodes(c, r));
export const copy = b => graph(...nodes(b));

export const playerNodes = board => p => byPlayer(nodes(board))(id(p));

export const playerGraph = b => p => graph(...playerNodes(b)(p));

export const winComp = (g, n = 3) => spread(omniComps(g)).some(exceeds(n));
