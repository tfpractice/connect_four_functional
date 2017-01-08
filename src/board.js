const { Grid, Traversals } = require('game_grid');
const { Commands: { flatTuple, spreadV, flatten } } = require('./utils');
const { samePlayer, isFree } = require('./node');
const { nodes, initCells, fromElements } = Grid;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = () => initCells(7, 6);
const next = (nodes) => nodes.find(isFree);
const hasFree = (nodes) => nodes.some(isFree);

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const playerGraph = (gr = new Map) => (p) =>
	fromElements(...nodesByPlayer(gr)(p));

const allComps = (graph) =>
	[rComps, cComps, pComps, nComps].map(f => f(graph)).reduce(flatten, []);

const splitComps = (g) => new Map()
	.set('row', rComps(g)).set('col', cComps(g))
	.set('pos', pComps(g)).set('neg', nComps(g));

const moreThan = (num) => (coll = new Set) => coll.size > num;
const winComp = (graph, n = 3) => allComps(graph).some(moreThan(n));

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