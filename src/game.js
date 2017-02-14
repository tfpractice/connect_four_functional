import { asMap, asSet, map, spreadKV, } from 'fenugreek-collections';
import { Components, Grid, Node, } from 'game_grid';
import { kvMap, } from './utils';
import { claim, id, player, } from './player';
import { next as bNext, genNodes, hasFree, board as makeBoard, nodesByPlayer,
playerGraph as pGraph, winComp, } from './board';
import { samePlayer, } from './node';
const { nodesByColumn, } = Grid;
const { sameCol, } = Node;
const { omniComps, splitComps } = Components;

const dCol = 0;
const dPlr = [ player('player0', 0, 0), player('player1', 0, 1) ];
const dNodes = genNodes();

const init = ({ cID: 0, nodes: genNodes(), players: dPlr, });

export const game = (players = dPlr, nodes = dNodes, cID = 0) =>
  ({ players, nodes, cID });

export const cID = ({ cID } = init) => cID;
export const nodes = ({ nodes } = init) => nodes;
export const players = ({ players } = init) => players;
export const active = ({ players: [ active, passive ] } = init) => active;
export const passive = ({ players: [ active, passive ] } = init) => passive;

export const setNodes = nArr => g => game(players(g), nArr, cID(g));
export const setColumn = cID => g => game(players(g), nodes(g), cID);
export const setPlayers = pArr => g => game(pArr, nodes(g), cID(g));

export const board = g => makeBoard(...nodes(g));
export const colNodes = g => nodesByColumn(board(g))(cID(g));
export const column = ({ cID, nodes }) => nodesByColumn(board({ nodes }))(cID);
export const next = game => bNext(colNodes(game));

export const togglePlayers = g => setPlayers([ passive(g), active(g) ])(g);
export const playerMap = players => asMap(asSet(players));

export const playerNodes = g => p => nodesByPlayer(board(g))(id(p));
export const actNodes = g => playerNodes(g)(active(g));
export const passNodes = g => playerNodes(g)(passive(g));

export const playerGraph = g => p => pGraph(board(g))(id(p));
export const actGraph = g => playerGraph(g)(active(g));
export const passGraph = g => playerGraph(g)(passive(g));

export const graphs = g =>
 map(playerMap(players(g)))(([ p, v ]) => asMap([ p, playerGraph(g)(p) ]));
    
export const components = game => kvMap(graphs(game))(splitComps);
export const actComps = game => omniComps(actGraph(game));
export const passComps = game => omniComps(passGraph(game));

export const select = game => claim(active(game))(next(game)) && togglePlayers(game);
export const hasWinComp = brd => plr => winComp(pGraph(brd)(plr), 3);
export const winner = ({ players, nodes }) => players.find(hasWinComp(board({ nodes })));
