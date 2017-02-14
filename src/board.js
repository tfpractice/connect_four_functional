import { flattenBin, spread, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { isFree, node, samePlayer, setPlayer, } from './node';

const { fromElements: gElems, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { omniComps, } = Components;

export const board = gElems;
export const initNodes = grid;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(setPlayer());
export const next = nArr => nArr.find(isFree);
export const hasFree = nArr => nArr.some(isFree);

export const nodesByPlayer = graph => (player = null) =>
  nodes(graph).filter(samePlayer({ player }));

export const playerGraph = g => p => gElems(...nodesByPlayer(g)(p));

export const splitComps = Components.splitComps;

export const moreThan = num => (coll = new Set) => coll.size > num;
export const winComp = (g, n = 3) => spread(omniComps(g)).some(moreThan(n));
