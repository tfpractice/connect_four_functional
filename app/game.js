const Board = require('./board');
const Player = require('./player');
const Column = require('./column');
const { hasFree } = Column;
const { claim } = Player;
const { spawn: bSpawn, nodesByColumn: cNodes } = Board;

const spawn = (active, passive) => ({
	players: [active, passive],
	cID: 0,
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
const cID = ({ cID }) => cID;
const column = ({ cID, board }) => nodesByColumn(board)(cID);
// const nodes = ({cID, board})=> nodesByColumn(board)

const isAvail = ({ players: [active], cID, board }) =>
	hasFree(cNodes(board)(cID));

const setColumn = (game) => (cID = 0) =>
	isAvail(game) && Object.assign(game, { cID });

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

const select = ({ players: [active], cID, board }) =>
	hasFree(cNodes)(board)(cID) && claim(active)(next(cNodes(board)(cID)));


// const setCurrent = (game) => (cID) => {
//  Object.assign(game, { cID });
// };



// const completeTurn = (game) => {
//  transferCells(grid(game))(pGraph(active(game)))(cID(game));
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
	cID,
	column,
	setColumn,
	select,
	isAvail,
};