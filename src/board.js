import { flattenBin, } from 'fenugreek-collections';
import { Graph, } from 'graph-curry';
import { Components, Grid, } from 'game_grid';
import { isFree, node, samePlayer, setPlayer, } from './node';

const { fromElements: gElems, nodes, } = Graph;
const { genNodes: gen, grid, } = Grid;
const { colComponents: colC, negComponents: negC, posComponents: posC, rowComponents: rowC, } = Components;

export const genNodes = (c = 7, r = 6) => gen(c, r).map(setPlayer());
export const board = gElems;
export const initNodes = grid;
export const next = nArr => nArr.find(isFree);
export const hasFree = nArr => nArr.some(isFree);

export const nodesByPlayer = graph => (player = null) =>
  nodes(graph).filter(samePlayer({ player }));

export const playerGraph = g => p => gElems(...nodesByPlayer(g)(p));

export const allComps = g =>
  [ colC, negC, posC, rowC, ].map(f => f(g)).reduce(flattenBin, []);

export const splitComps = g => new Map().set('row', rowC(g)).set('col', colC(g))
  .set('pos', posC(g)).set('neg', negC(g));

export const moreThan = num => (coll = new Set) => coll.size > num;
export const winComp = (graph, n = 3) => allComps(graph).some(moreThan(n));
