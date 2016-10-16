const GG = require('game_grid');
const Node = require('./node');
const Column = require('./column');
const { Grid, Traversals, Connections } = GG;
const { samePlayer } = Node;
const { next } = Column;
const { omniGraph } = Traversals;
const { nodes, nodesByColumn, fromElements, } = Grid;
const { cellArray, initCells, cIDs, } = Grid;

const spawn = () => initCells(7, 6);

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

const nextFromColumn = (col = 0) => next(nodesByColumn(col));

module.exports = Object.assign({}, Grid, { spawn, nodesByPlayer });
// module.exports = { spawn, columns };