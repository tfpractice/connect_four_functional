const { Utils: { Commands, Queries } } = require('functional_graph_theory');
const { Traversals } = require('game_grid');
const Column = require('./column');
const Board = require('./board');
const Player = require('./player');
const { spreadK, addMap, tuple, } = Commands;
const { hasFree } = Column;
const { claim } = Player;
const { spawn: grid, playerGraph: pGraph } = Board;
const { nodesByColumn, splitComps: cSplit } = Board;
const { components: comps } = Traversals;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = (p0, p1) => ({ cID: 0, board: grid(), players: [p0, p1] });
const cID = ({ cID }) => cID;
const board = ({ board }) => board;
const players = ({ players }) => players;
const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;
const togglePlayers = ({ players: arr }) => [arr[1], arr[0]] = [arr[0], arr[1]];

const keyCurry = (fn) => (key) => tuple(fn(key))(key);

// const score = ({ score }) => score;
// const components = ({ components }) => components;
const gMap = (gm = new Map, [p, board]) => gm.set(p, pGraph(board)(p));
const graphs = ({ players, board }) =>
	players.map(tuple(board)).reduce(gMap, new Map);
const cmap = (gm = new Map, [p, board]) =>
	gm.set(p, pGraph(board)(p));

const splitC = (map) => (p) => (g) => map.set(p, split(pGraph(g)(p)));
// const upComps = (game) => players(game).reduce(allComps, game);
// const allComps = (game, p) =>
// 	components(game).set(p, splitComps(pGraph(board(game))(p))) && game;

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
	graphs,
	// upComps,
	// allComps,
};