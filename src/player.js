import { claim as claimNode, } from './node';

export const playerInit = { name: '', score: 0, id: null };

export const player = (name = '', score = 0, id = name) => ({ name, score, id });
export const name = ({ name } = playerInit) => name;
export const score = ({ score } = playerInit) => score;
export const id = ({ id } = playerInit) => id;
export const copy = p => player(name(p), score(p), id(p));

export const setName = name => p => player(name, score(p), id(p));
export const setID = id => p => player(name(p), score(p), id);
export const setScore = score => p => player(name(p), score, id(p));

export const hasID = i => ({ id, }) => id === i;
export const sameID = p0 => p1 => id(p0) === id(p1);
export const matches = sameID;
export const xMatches = p0 => p1 => !matches(p0)(p1);

export const updatePlayer = next => p => sameID(next)(p) ? Object.assign({}, p, next) : p;

export const resetScore = setScore(0);
export const incrementScore = p => setScore(score(p) + 1)(p);
export const decrementScore = p => setScore(score(p) - 1)(p);
export const claim = p => claimNode(id(p));

// const matches = p0 => p1 => hasID(p0.id)(p1);
