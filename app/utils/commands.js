const { Utils: { Commands } } = require('functional_graph_theory');
const { spread, spreadV, addMap } = Commands;

const flatten = (a, b) => [...a, ...b];
const kvMap = (map = new Map) => (fn) =>
	spread(map).map(([k, v = k]) => [k, fn(v)]).reduce(addMap, new Map);

module.exports = Object.assign({}, Commands, { kvMap, flatten });