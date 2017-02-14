import { map, spreadKV, } from 'fenugreek-collections';
import { Components, Grid, } from 'game_grid';

import { kvMap, } from './utils';

import { claim, player, } from './player';
import makeBoard, { next as bnext, genNodes, hasFree, playerGraph as pGraph,
    winComp, } from './board';

const { nodesByColumn, } = Grid;
const { allComps, splitComps } = Components;

const initGame = () => ({
  cID: 0,
  nodes: genNodes(),
  players: [ player('player0', 0, 0), player('player1', 0, 1) ],
});

export default ({ cID = 0, nodes = genNodes(), players = initGame().players }) =>
 ({ cID, nodes, players, });

export const setPlayers = players => (g = initGame()) => Object.assign({}, g, players);
export const cID = ({ cID = 0 }) => cID;
export const board = ({ nodes }) => makeBoard(...nodes);
export const players = ({ players }) => players;
export const active = ({ players: [ active, passive ] }) => active;
export const passive = ({ players: [ active, passive ] }) => passive;

export const column = ({ cID, nodes }) => nodesByColumn(board({ nodes }))(cID);
export const next = game => bnext(column(game));
export const playerMap = players => new Map(spreadKV(new Set(players)));

export const graphs = ({ players: p, nodes }) =>
  kvMap(playerMap(p))(pGraph(board({ nodes })));
export const actGraph = ({ players: [ act, pass ], nodes }) =>
  pGraph(board({ nodes }))(act);
export const passGraph = ({ players: [ act, pass ], nodes }) =>
  pGraph(board({ nodes }))(pas);

export const components = game => kvMap(graphs(game))(splitComps);
export const actComps = game => allComps(actGraph(game));
export const passComps = game => allComps(passGraph(game));

export const togglePlayers = ({ players: arr }) =>
[ arr[1], arr[0] ] = [ arr[0], arr[1] ];

export const setColumn = game => (cID = 0) => Object.assign(game, { cID });
export const select = game => claim(active(game))(next(game)) && togglePlayers(game);
export const hasWinComp = brd => plr => winComp(pGraph(brd)(plr), 3);
export const winner = ({ players, nodes }) => players.find(hasWinComp(board({ nodes })));
