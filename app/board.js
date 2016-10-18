const GG = require('game_grid');
const Node = require('./node');
const { Commands: { flatTuple, spreadV, flatten } } = require('./utils');
const { Grid, Traversals, Connections } = GG;
const { samePlayer, isFree } = Node;
const { nodes, nodesByColumn, fromElements: fElems, } = Grid;
const { cellArray, initCells, cIDs, } = Grid;
const { components: comps } = Traversals;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = () => initCells(7, 6);
const next = (nodes) => nodes.find(isFree);
const hasFree = (nodes) => nodes.some(isFree);

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const playerGraph = (gr = new Map) => (p) => fElems(...nodesByPlayer(gr)(p));
const allComps = (graph) =>
	[rComps, cComps, pComps, nComps].map(f => f(graph)).reduce(flatten, []);

const splitComps = (g) => new Map()
	.set('row', rComps(g)).set('col', cComps(g))
	.set('pos', pComps(g)).set('neg', nComps(g));

const moreThan = (num) => (coll = new Set) => coll.size > num;
const winComp = (graph) => (n = 1) => allComps(graph).some(moreThan(n));
module.exports = Object.assign({}, Grid, {
	spawn,
	next,
	hasFree,
	nodesByPlayer,
	playerGraph,
	splitComps,
	allComps,
	winComp,
});