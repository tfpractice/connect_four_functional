import { filter, some, spread, } from 'fenugreek-collections';
import { isFree, samePlayer, } from './node';

export const nextFree = nArr => spread(nArr).find(isFree);
export const hasFree = nArr => some(nArr)(isFree);
export const byPlayer = nArr => (player = null) =>
  filter(nArr)(samePlayer({ player }));
