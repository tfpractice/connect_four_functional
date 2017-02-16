import { asSet, flattenBin, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { copy as copyN, isFree, node, samePlayer, setPlayer, } from './node';

const { fromElements: gElems, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { omniComps, } = Components;

// export const grid = gElems;
export const initNodes = grid;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(copyN);
export const board = gElems;

export const next = nArr => nArr.find(isFree);
export const hasFree = nArr => nArr.some(isFree);
export const copy = g => board(nodes(g));

export const nodesByPlayer = graph => (player = null) =>
  nodes(graph).filter(samePlayer({ player }));

export const playerGraph = g => p => gElems(...nodesByPlayer(g)(p));

export const moreThan = num => coll => asSet(coll).size > num;
export const winComp = (g, n = 3) => spread(omniComps(g)).some(moreThan(n));
