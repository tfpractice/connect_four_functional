const GG = require('game_grid');
const Node = require('./node');
const { Grid, Traversals, Connections } = GG;
const { samePlayer } = Node;
const { omniGraph } = Traversals;
const { nodes, initCells, cIDs, nodesByColumn, fromElements, } = Grid;

const spawn = () => initCells(7, 6);

const nodesByPlayer = (graph) => (player = null) =>
	nodes(graph).filter(samePlayer({ player }));

// const columns = (board) => [...cIDs(board)]
// 	.map(nodesByColumn(board))
// 	.map(cells => fromElements(...cells));
// .map(omniGraph)
// .reduce(merge, new Map);

module.exports = Object.assign({}, Grid, { spawn, nodesByPlayer });
// module.exports = { spawn, columns };