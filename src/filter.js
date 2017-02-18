import { asSet, filter, map, some, spread, } from 'fenugreek-collections';
import { Compare, } from 'game_grid';
import { isFree, samePlayer, } from './node';

const { samePos } = Compare;

export const nextFree = nArr => spread(nArr).find(isFree);
export const hasFree = nArr => some(nArr)(isFree);
export const byPlayer = nArr => (player = null) =>
  filter(nArr)(samePlayer({ player }));

export const exceeds = lim => coll => asSet(coll).size > lim;
export const anyExceed = lim => coll => some(coll)(exceeds(lim));
export const byExcess = lim => arrays => filter(arrays)(exceeds(lim));

export const callIf = fn => boolFn => n => boolFn(n) ? fn(n) : n;
export const repIf = next => boolFn => n => boolFn(n) ? next : n;
export const repPos = next => repIf(next)(samePos(next));
export const repID = next => repIf(next)(samePos(next));
export const replace = next => nArr => map(nArr)(repPos(next));
