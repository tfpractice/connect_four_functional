import { Graph, } from 'graph-curry';
import { Components, Filter, } from 'game_grid';
import { claim, } from './node';
import { genNodes, } from './board';
import { id, player, sameID, } from './player';
import { anyExceed, byExcess, byPlayer, nextFree, replace, } from './filter';

const { graph } = Graph;
const { omniComps } = Components;
const { byCol, } = Filter;

const dCol = 0;
const dPlr = [ player('player0', 0, 0), player('player1', 0, 1) ];
const dNod = genNodes(7, 6);
const init = ({ column: 0, nodes: genNodes(), players: dPlr, inPlay: false, min: 3 });

export const game =
 (players = dPlr, nodes = dNod, column = 0, inPlay = false, min = 3) =>
   ({ players, nodes, column, inPlay, min });

export const column = ({ column } = init) => column;
export const nodes = ({ nodes } = init) => nodes;
export const inPlay = ({ inPlay } = init) => inPlay;
export const min = ({ min } = init) => min;
export const players = ({ players } = init) => players;
export const active = ({ players: [ active, passive ] } = init) => active;
export const passive = ({ players: [ active, passive ] } = init) => passive;

export const setNodes = nArr => g =>
  game(players(g), nArr, column(g), inPlay(g), min(g));

export const setColumn = col => g =>
  game(players(g), nodes(g), col, inPlay(g), min(g));

export const setPlayState = bool => g =>
  game(players(g), nodes(g), column(g), !!bool, min(g));

export const setPlayers = pArr => g =>
  game(pArr, nodes(g), column(g), inPlay(g), min(g));

export const setMin = m => g =>
  game(players(g), nodes(g), column(g), inPlay(g), m);

export const board = g => graph(...nodes(g));
export const colNodes = g => byCol(nodes(g))(column(g));
export const next = g => nextFree(colNodes(g));

export const start = g => setPlayState(true)(g);
export const stop = g => setPlayState(false)(g);
export const canPlay = g => inPlay(g) && !!next(g);
export const locked = g => !canPlay(g);
export const toggleState = g => setPlayState(!inPlay(g))(g);

export const togglePlayers = g => setPlayers([ passive(g), active(g) ])(g);
export const isActive = p => g => sameID(p)(active(g));
export const playerNodes = g => p => byPlayer(nodes(g))(id(p));
export const actNodes = g => playerNodes(g)(active(g));
export const passNodes = g => playerNodes(g)(passive(g));

export const playerGraph = g => p => graph(...playerNodes(g)(p));
export const actGraph = g => playerGraph(g)(active(g));
export const passGraph = g => playerGraph(g)(passive(g));

export const playerComps = g => p => byExcess(1)(omniComps(playerGraph(g)(p)));
export const actComps = g => playerComps(g)(active(g));
export const passComps = g => playerComps(g)(passive(g));

export const isWinner = g => p => anyExceed(min(g))(playerComps(g)(p));
export const winner = g => players(g).find(isWinner(g));
export const endIfWon = g => winner(g) ? stop(g) : g;

export const claimSwap = g => replace(claim(id(active(g)))(next(g)))(nodes(g));
export const claimNext = g => locked(g) ? g : endIfWon(setNodes(claimSwap(g))(g));

export const select = g => locked(g) ? g : togglePlayers(claimNext(g));

// export const canPlay
// export const claimNode = p=>g=> !isActive(p)(g)? g:setPlayers()
// export const isActive=player=>game=>id
