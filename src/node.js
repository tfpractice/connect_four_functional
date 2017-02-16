import { Node, } from 'game_grid';

const { column, row, node: gNode, id } = Node;

const defP = Object.assign({}, gNode(), { player: null });

export const node = (c, r, player = null) =>
    Object.assign({}, gNode(c, r), { player });

export const player = ({ player } = defP) => player;

export const copy = n => node(column(n), row(n), player(n));

export const setPlayer = p => n => node(column(n), row(n), p);

export const isFree = n => !!n && player(n) == null;

export const claim = p => n => isFree(n) ? setPlayer(p)(n) : n;
export const unClaim = n => setPlayer(null)(n);

export const samePlayer = n0 => n1 => player(n0) === player(n1);

export const sameID = a => b => id(a) === id(b);
