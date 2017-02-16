import { asSet, flattenBin, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { copy as copyN, isFree, node, samePlayer, setPlayer, } from './node';
import { byPlayer, hasFree, nextFree, } from './filter';

const { graph, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { omniComps, } = Components;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(copyN);
export const board = (c = 7, r = 6) => graph(...genNodes(c, r));

export const copy = g => graph(...nodes(g));

export const nodesByPlayer = graph => (player = null) =>
  nodes(graph).filter(samePlayer({ player }));

export const playerGraph = g => p => graph(...nodesByPlayer(g)(p));

export const moreThan = num => coll => asSet(coll).size > num;
export const winComp = (g, n = 3) => spread(omniComps(g)).some(moreThan(n));
