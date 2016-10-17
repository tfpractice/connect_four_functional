const GG = require('game_grid');
const Node = require('./node');
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

const playerGraph = (graph) => (p) => fElems(...nodesByPlayer(graph)(p));
const splitComps = (graph) =>
	new Map()
	.set('row', rComps(graph))
	.set('col', cComps(graph))
	.set('pos', pComps(graph))
	.set('neg', nComps(graph));

module.exports = Object.assign({}, Grid, {
	spawn,
	next,
	hasFree,
	nodesByPlayer,
	playerGraph,
	splitComps,
});