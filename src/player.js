export const playerInit = { name: '', score: 0 };
export default (name = '', score = 0) => ({ name, score });

export const player = (name = '', score = 0) => ({ name, score });
export const name = ({ name } = playerInit) => name;
export const score = ({ score } = playerInit) => score;
export const resetScore = player => player.wins = 0;
export const incrementScore = ({ score }) => ++score;
export const decrementScore = ({ score }) => --score;
export const claim = (player = null) => n => n && Object.assign(n, { player });
