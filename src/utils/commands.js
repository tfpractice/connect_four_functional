import { collections, } from 'turmeric-utils';

const { addBinMap, spread, } = collections;

export const kvMap = (map = new Map) => fn =>
  spread(map).map(([ k, v = k ]) => [ k, fn(v) ]).reduce(addBinMap, new Map);
