const { Commands, Queries } = require('./utils');
const { Traversals } = require('game_grid');
const Board = require('./board');
const Player = require('./player');
const { spread, spreadK, spreadV, spreadKV, addMap, tuple, kvMap } = Commands;
const { claim } = Player;
const { spawn: grid, playerGraph: pGraph, hasFree } = Board;
const { nodesByColumn, splitComps, allComps, winComp } = Board;

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
const hasWinComp = (board) => (plr) => winComp(pGraph(board)(plr))(3);
const winner = ({ players, board }) => players.find(hasWinComp(board));

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
	hasWinComp,
	next,
	components,
	winner,
};