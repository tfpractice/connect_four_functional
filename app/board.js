const { Grid, Traversals, Connections } = require('game_grid');
const { omniGraph } = Traversals;
const { initCells, colIDs, nodesByColumn, fromElements, mergeEdges, } = Grid;
const spawn = () => omniGraph(initCells(7, 6));
const merge = (g0 = new Map, g1 = new Map) =>
	[...g1].filter(([k, v]) => !g0.has(k)).reduce(mergeEdges, g0);
const columns = (board) => [...colIDs(board)]
	.map(nodesByColumn(board))
	.map(cells => fromElements(...cells));
// .map(omniGraph)
// .reduce(merge, new Map);

module.exports = { spawn, columns };