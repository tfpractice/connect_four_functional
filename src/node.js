import { Node, } from 'game_grid';
import { id, } from './player';
const { column, row, node: gNode } = Node;
const { assign: asg } = Object;

const defP = { player: null };

export const node = (c = 0, r = 0, player = null) => asg(gNode(c, r), { player });

export const player = ({ player } = defP) => player;
export const setPlayer = p => n => node(column(n), row(n), id(p));

export const copy = n => node(column(n), row(n), player(n));
export const isFree = n => player(n) == null;
export const samePlayer = ({ player: p0 }) => ({ player: p1 }) => p0 === p1;
