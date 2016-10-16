const { Grid, Traversals, Connections, Cell } = require('game_grid');
const { spawn: cSpawn } = Cell;
const { initCells, cIDs, nodesByColumn, fromElements, mergeEdges, } = Grid;

const spawn = (c = 0, r = 0, player = null) =>
	Object.assign(cSpawn(c, r), { player });

const player = ({ player = null }) => player;
const isFree = ({ player }) => !player;
const samePlayer = ({ player: p0 }) => ({ player: p1 }) => p0 === p1;

module.exports = Object.assign({}, Cell, { spawn, isFree, player, samePlayer });