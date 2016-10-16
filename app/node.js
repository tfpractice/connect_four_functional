const { Grid, Traversals, Connections, Cell } = require('game_grid');
const { spawn: cSpawn } = Cell;
const { initCells, cIDs, nodesByColumn, fromElements, mergeEdges, } = Grid;

const spawn = (c = 0, r = 0, player = null) =>
	Object.assign(cSpawn(c, r), { player });

const player = ({ player }) => player;

module.exports = Object.assign({}, Cell, { spawn, player });