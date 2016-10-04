const Player = require('./player');
const GameGraph = require('./game_graph');
const { cells, cellByPosition, transferCells } = GameGraph;
const { graph: pGraph, claimCells } = Player;

const spawn = (active, passive, grid) => ({
	players: [active, passive],
	grid,
	current: cells(grid)[0],
	score: new Map().set(active, 0).set(passive, 0),
});

const grid = ({ grid }) => grid;
const players = ({ players }) => players;
const score = ({ score }) => score;
const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;
const current = ({ current }) => current;

const activeScore = ({ players: [active, passive], score }) =>
	score.get(active);

const passiveScore = ({ players: [active, passive], score }) =>
	score.get(passive);

const playerScore = ({ score }) => (player) =>
	score.get(player);

const incrementPlayerScore = ({ score }) => (player) =>
	score.set(player, score.get(player) + 1);

const togglePlayers = ({ players }) => {
	let [passive, active] = players;
	[players[1], players[0]] = [passive, active];
};

const setCurrent = (game) => (current) => {
	Object.assign(game, { current });
};

const selectCell = (game) => (column = 0, row = 0) => {
	setCurrent(game)(cellByPosition(grid(game))(column, row));
};

const completeTurn = (game) => {
	transferCells(grid(game))(pGraph(active(game)))(current(game));
	togglePlayers(game);
};

module.exports = {
	spawn,
	players,
	playerScore,
	incrementPlayerScore,
	activeScore,
	passiveScore,
	grid,
	score,
	active,
	completeTurn,
	passive,
	togglePlayers,
	selectCell,
	setCurrent,
	current,
};