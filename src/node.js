import { Node, } from 'game_grid';
const { column, row, node: gNode } = Node;
const { assign: asg } = Object;

const defP = { player: null };

export const node = (c = 0, r = 0, player = null) => asg(gNode(c, r), { player });

export default (c = 0, r = 0, player = null) =>
Object.assign(node(c, r), { player });

export const player = ({ player } = defP) => player;
export const setPlayer = p => n => node(column(n), row(n), p);

export const isFree = ({ player } = defP) => player === null;
export const samePlayer = ({ player: p0 }) => ({ player: p1 }) => p0 === p1;
