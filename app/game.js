const Board = require('./board');
const Player = require('./player');
const { spawn: bSpawn } = Board;

const spawn = (active, passive) => ({
	players: [active, passive],
	column: 0,
	board: bSpawn(),
	score: new Map([
		[active, 0],
		[passive, 0],
	]),
});

const board = ({ board }) => board;
const players = ({ players }) => players;
const score = ({ score }) => score;
const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;
const column = ({ column }) => column;

const activeScore = ({ players: [active, passive], score }) =>
	score.get(active);

const passiveScore = ({ players: [active, passive], score }) =>
	score.get(passive);

const playerScore = ({ score }) => (player) =>
	score.get(player);

const incScore = ({ score }) => (player) =>
	score.set(player, score.get(player) + 1);

const togglePlayers = ({ players }) =>
	[players[1], players[0]] = [players[0], players[1]];

// const nextFromColumn = (col = 0) => next(nodesByColumn(col));


// const setCurrent = (game) => (column) => {
//  Object.assign(game, { column });
// };

// const selectCell = (game) => (column = 0, row = 0) => {
//  setCurrent(game)(cellByPosition(grid(game))(column, row));
// };

// const completeTurn = (game) => {
//  transferCells(grid(game))(pGraph(active(game)))(column(game));
//  togglePlayers(game);
// };

module.exports = {
	spawn,
	board,
	players,
	score,
	active,
	passive,
	activeScore,
	passiveScore,
	playerScore,
	incScore,
	togglePlayers,
	column,
};