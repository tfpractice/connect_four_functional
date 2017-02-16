import { Node, } from 'game_grid';
import { id, } from './player';
const { column, row, node: gNode } = Node;

const defP = Object.assign({}, gNode(), { player: null });

export const node = (c, r, player = null) =>
    Object.assign({}, gNode(c, r), { player });

export const player = ({ player } = defP) => player;

export const isFree = n => player(n) == null;

export const copy = n => node(column(n), row(n), player(n));

export const setPlayer = p => n =>
  isFree(n) ? node(column(n), row(n), id(p)) : copy(n);

export const samePlayer = n0 => n1 => player(n0) === player(n1);
