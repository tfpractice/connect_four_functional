const { Commands, Queries } = require('./utils');
const { Traversals } = require('game_grid');
const Column = require('./column');
const Board = require('./board');
const Player = require('./player');
const { spread, spreadK, spreadV, spreadKV, addMap, tuple, kvMap } = Commands;
const { hasFree } = Column;
const { claim } = Player;
const { spawn: grid, playerGraph: pGraph } = Board;
const { nodesByColumn, splitComps, allComps, winComp } = Board;
const { components: comps } = Traversals;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = (p0, p1) => ({ cID: 0, board: grid(), players: [p0, p1] });
const cID = ({ cID = 0 }) => cID;
const board = ({ board }) => board;
const players = ({ players }) => players;
const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;

const column = ({ cID, board }) => nodesByColumn(board)(cID);
const next = (game) => Board.next(column(game));
const playerMap = (players) => new Map(spreadKV(new Set(players)));
const graphs = ({ players: p, board: b }) => kvMap(playerMap(p))(pGraph(b));
const components = (game) => kvMap(graphs(game))(splitComps);

const togglePlayers = ({ players: arr }) => [arr[1], arr[0]] = [arr[0], arr[1]];
const setColumn = (game) => (cID = 0) => Object.assign(game, { cID });
const select = (game) => claim(active(game))(next(game)) && togglePlayers(game);
const winner = (game) =>
	components(game).any(m => spreadV(m).any(s => s.size > 3));

const moreThan = (num) => (coll = new Set) => coll.size > num;

const hasWinningSet = (board) => (plr) =>
	allComps(pGraph(board)(plr)).some(moreThan(3));
const findWinnner = ({ players, board }) => players.find(hasWinningSet(board));

module.exports = {
	spawn,
	board,
	players,
	playerMap,
	active,
	passive,
	togglePlayers,
	cID,
	column,
	setColumn,
	select,
	hasWinningSet,
	next,
	components,
	// findWSet,
};