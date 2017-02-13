import { Node, } from 'game_grid';
const { assign } = Object;

const defP = { player: null };

export const node = (c = 0, r = 0, player = null) =>
 Object.assign(Node.node(c, r), { player });

export default (c = 0, r = 0, player = null) =>
Object.assign(node(c, r), { player });

export const player = ({ player } = defP) => player;
export const isFree = ({ player } = defP) => player === null;
export const samePlayer = ({ player: p0 }) => ({ player: p1 }) => p0 === p1;
