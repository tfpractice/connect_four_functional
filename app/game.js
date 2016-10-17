const Utils = require('functional_graph_theory').Utils;
const Column = require('./column');
const { Traversals } = require('game_grid');
const Board = require('./board');
const Player = require('./player');
const { Commands: Comms, Queries: Query } = Utils;
const { spreadK, addMap } = Comms;
const { hasFree } = Column;
const { claim } = Player;
const { spawn: bSpawn, nodesByColumn, playerGraph: pGraph, splitComps } = Board
;
const { components: comps } = Traversals;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = (active, passive) => ({
	cID: 0,
	board: bSpawn(),
	players: [active, passive],
	// score: new Map([
	// 	[active, 0],
	// 	[passive, 0],
	// ]),
	// components: new Map()
	// 	.set(active, splitComps(pGraph()(active)))
	// 	.set(passive, splitComps(pGraph()(passive))),
});

const board = ({ board }) => board;
const players = ({ players }) => players;
const cID = ({ cID }) => cID;

// const score = ({ score }) => score;
// const components = ({ components }) => components;
const graphs = ({ players, board }) => players.map(pGraph(board));

// const splitC = (map) => (p) => (g) => map.set(p, split(pGraph(g)(p)));
// const upComps = (game) => players(game).reduce(allComps, game);
// const allComps = (game, p) =>
// 	components(game).set(p, splitComps(pGraph(board(game))(p))) && game;

const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;
const togglePlayers = ({ players: arr }) => [arr[1], arr[0]] = [arr[0], arr[1]];

const column = ({ cID, board }) => nodesByColumn(board)(cID);
const setColumn = (game) => (cID = 0) => Object.assign(game, { cID });

// const activeScore = ({ players: [act, pss], score }) => score.get(act);
// const passiveScore = ({ players: [act, pss], score }) => score.get(pss);
// const playerScore = ({ score }) => (player) => score.get(player);
// const incScore = ({ score }) => (plr) => score.set(plr, score.get(plr) + 1);


// const next = (game) => Board.next(column(game));
// const isAvail = (game) => hasFree(column(game));
// const choose = ({ players: [active] }) => claim(active);
// const select = (game) =>
// 	next(game) && choose(game)(next(game)) && togglePlayers(game);

module.exports = {
	spawn,
	board,
	players,
	// score,
	active,
	passive,
	// activeScore,
	// passiveScore,
	// playerScore,
	// incScore,
	togglePlayers,
	cID,
	column,
	setColumn,
	// select,
	// isAvail,
	// choose,
	// next,
	// select,
	// components,
	// graphs,
	// upComps,
	// allComps,
};