import { collections, } from 'turmeric-utils';
import { fromElements, nodes, } from 'graph-curry';
import { colComponents, genNodes as generate, grid, negComponents,
   posComponents, rowComponents, } from 'game_grid';
import node, { isFree, samePlayer, } from './node';
const { flatten, flatTuple, spreadV, } = collections;

const flattenBin = (a = [], b = []) => flatten(a)(b);

export default fromElements;

export const genNodes = (cols = 7, rows = 6) =>
generate(cols, rows).map(n => node(n.column, n.row));

export const initNodes = (c = 7, r = 6) => fromElements(...genNodes(c, r));
export const next = nodes => nodes.find(isFree);
export const hasFree = nodes => nodes.some(isFree);

export const nodesByPlayer = graph => (player = null) =>
  nodes(graph).filter(samePlayer({ player }));

export const playerGraph = (gr = new Map) => p =>
  fromElements(...nodesByPlayer(gr)(p));

export const allComps = graph => [
  colComponents, negComponents, posComponents, rowComponents,
].map(f => f(graph)).reduce(flattenBin, []);

export const splitComps = g => new Map()
  .set('row', rowComponents(g)).set('col', colComponents(g))
  .set('pos', posComponents(g)).set('neg', negComponents(g));

export const moreThan = num => (coll = new Set) => coll.size > num;
export const winComp = (graph, n = 3) => allComps(graph).some(moreThan(n));
