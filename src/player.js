export const playerInit = { name: '', score: 0, id: null };
export default (name = '', score = 0) => ({ name, score });

export const player = (name = '', score = 0, id = name) => ({ name, score, id });
export const name = ({ name } = playerInit) => name;
export const score = ({ score } = playerInit) => score;
export const ID = ({ id }) => id;
export const copy = p => player(name(p), score(p), id(p));

export const setName = name => p => player(name, score(p), id(p));
export const setID = id => p => player(name(p), score(p), id);
export const setScore = score => p => player(name(p), score, id(p));

export const resetScore = setScore(0);
export const incrementScore = p => setScore(score(p) + 1)(p);
export const decrementScore = p => setScore(score(p) - 1)(p);
export const claim = (player = null) => n => n && Object.assign(n, { player });
