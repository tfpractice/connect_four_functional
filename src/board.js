import { some, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { id, } from './player';
import { copy as copyN, } from './node';
import { byExcess, byPlayer, exceeds, } from './filter';

const { graph, nodes, } = Graph;
const { genNodes: gen, } = Grid;
const { omniComps, } = Components;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(copyN);
export const board = (c = 7, r = 6) => graph(...genNodes(c, r));
export const copy = b => graph(...nodes(b).map(copyN));
export const playerNodes = b => p => byPlayer(nodes(b))(id(p));
export const playerGraph = b => p => graph(...playerNodes(b)(p));

export const hasWinComp = (g, n = 3) => some(omniComps(g))(exceeds(n));
export const winComps = (g, n = 3) => byExcess(n)(omniComps(g));
