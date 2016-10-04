const GameGraph = require('./game_graph');
const Cell = require('./cell');

const spawn = (cNum = 3, rNum = 3) =>
	Object.assign(GameGraph.spawn(...(initCells(cNum, rNum))), { cNum, rNum });

const initCells = (cNum = 0, rNum = 0) => {
	let cells = [];
	for (var c = cNum - 1; c >= 0; c--) {
		for (var r = rNum - 1; r >= 0; r--) {
			cells.unshift(Cell.spawn(c, r));
		}
	}

	return cells;
};

const fromGrid = ({ cNum = 0, rNum = 0 }) => spawn(cNum, rNum);

module.exports = { spawn, fromGrid, initCells };