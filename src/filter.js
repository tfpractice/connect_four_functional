import { asSet, filter, some, spread, } from 'fenugreek-collections';
import { isFree, samePlayer, } from './node';

export const nextFree = nArr => spread(nArr).find(isFree);
export const hasFree = nArr => some(nArr)(isFree);
export const byPlayer = nArr => (player = null) =>
  filter(nArr)(samePlayer({ player }));

export const exceeds = lim => coll => asSet(coll).size > lim;
export const byExcess = lim => arrays => filter(arrays)(exceeds(lim));
