import { node, } from 'game_grid';

export default (c = 0, r = 0, player = null) =>
Object.assign(node(c, r), { player });

export const player = ({ player = null }) => player;
export const isFree = ({ player = null }) => player == null;
export const samePlayer = ({ player: p0 }) => ({ player: p1 }) => p0 === p1;
