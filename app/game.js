const Board = require('./board');
const Player = require('./player');
const Column = require('./column');
const { hasFree } = Column;
const { claim } = Player;
const { spawn: bSpawn, nodesByColumn, } = Board;

const spawn = (active, passive) => ({ players: [ active, passive ],
    cID: 0,
    board: bSpawn(),
    score: new Map([
     [ active, 0 ],
     [ passive, 0 ],
    ]), });

const board = ({ board }) => board;
const players = ({ players }) => players;
const score = ({ score }) => score;
const active = ({ players: [active, passive] }) => active;
const passive = ({ players: [active, passive] }) => passive;
const cID = ({ cID }) => cID;
const column = ({ cID, board }) => nodesByColumn(board)(cID);
const setColumn = (game) => (cID = 0) => Object.assign(game, { cID });

const activeScore = ({ players: [active, passive], score }) =>
	score.get(active);

const passiveScore = ({ players: [active, passive], score }) =>
	score.get(passive);

const playerScore = ({ score }) => (player) =>
	score.get(player);

const incScore = ({ score }) => (plr) => score.set(plr, score.get(plr) + 1);

const togglePlayers = ({ players: arr }) => [arr[1], arr[0]] = [ arr[0], arr[1]];

const next = (game) => Board.next(column(game));
const isAvail = (game) => hasFree(column(game));
const choose = ({ players: [active] }) => claim(active);

const select = (game) =>
	next(game) && choose(game)(next(game)) && togglePlayers(game);


// const setCurrent = (game) => (cID) => {
//  Object.assign(game, { cID });
// };



// const completeTurn = (game) => {
//  transferCells(grid(game))(pGraph(active(game)))(cID(game));
//  togglePlayers(game);
// };

module.exports = { spawn,
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
    choose,
    next,
    select, };
