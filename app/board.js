const GG = require('game_grid');
const Node = require('./node');
const { Grid, Traversals, Connections } = GG;
const { samePlayer, isFree } = Node;
const { nodes, nodesByColumn, fromElements: fElems, } = Grid;
const { cellArray, initCells, cIDs, } = Grid;

const spawn = () => initCells(7, 6);

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const playerGraph = (graph) => (p) => fElems(nodesByPlayer(graph)(p));
const next = (nodes) => nodes.find(isFree);
const hasFree = (nodes) => nodes.some(isFree);

module.exports = Object.assign({}, Grid, { spawn, next, hasFree, nodesByPlayer,
	playerGraph, });