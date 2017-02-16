import { asSet, flattenBin, some, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { copy as copyN, isFree, node, samePlayer, setPlayer, } from './node';
import { byExcess, byPlayer, exceeds, hasFree, nextFree, } from './filter';
import { id, } from './player';

const { graph, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { omniComps, } = Components;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(copyN);
export const board = (c = 7, r = 6) => graph(...genNodes(c, r));
export const copy = b => graph(...nodes(b));

export const playerNodes = board => p => byPlayer(nodes(board))(id(p));

export const playerGraph = b => p => graph(...playerNodes(b)(p));

export const hasWinComp = (g, n = 3) => some(omniComps(g))(exceeds(n));
export const winComps = (g, n = 3) => byExcess(n)(omniComps(g));
