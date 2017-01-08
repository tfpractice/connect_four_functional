import { collections, } from 'turmeric-utils';

const { addMap, spread, spreadV, flatten } = collections;

export const kvMap = (map = new Map) => fn =>
  spread(map).map(([ k, v = k ]) => [ k, fn(v) ]).reduce(addMap, new Map);
