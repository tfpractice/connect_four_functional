let spreadKeys = (coll) => [...coll.keys()];
let spreadValues = (coll) => [...coll.values()];
let spreadEntries = (coll) => [...coll.entries()];
let lastKey = (coll) => spreadKeys(coll).pop();
let firstKey = (coll) => spreadKeys(coll).shift();

let rmFirst = (set) => {
	let elem = [...set].shift();
	set.delete(elem);
	return elem;
};

let getFirst = (set) => [...set].shift();

let hasKey = (coll) => (key) => coll.has(key);
let x_hasKey = (coll) => (key) => !coll.has(key);
let pathHasNode = (path) => (node) => path.has(node);
let x_pathHasNode = (path) => (node) => !pathHasNode(path)(node);
let pathHasEntry = (path) => ([key, val]) => path.has(key);
let x_pathHasEntry = (path) => ([key, val]) => !pathHasEntry(path)([key, val]);

let pathString = (path) =>
	spreadKeys(path).reduce((str, next, id, coll) =>
		id === (coll.length - 1) ?
		(str + next + ' }') :
		(str + next + ' => '), '{ ');

let edgeString = ([source, nabes]) =>
	'{ Edge ' + source + ' } >> [ ' + spreadKeys(nabes) + ' ]\n';

let componentString = ([node, set]) =>
	' ' + node + ' { Component ' + firstKey(set) + '... ' + lastKey(set) + '}';

let graphString = (edges) =>
	spreadEntries(edges).reduce((str, [node, nabes], id) =>
		str + edgeString([node, nabes]),
		'Showing Edges\n');

let showGraph = ({ edges }) =>
	(graphString(edges));

let intersection = (m0) => (m1) =>
	spreadEntries(m0).filter(([k, v]) => m1.has(k));
let difference = (m0) => (m1) =>
	spreadEntries(m0).filter(([k, v]) => !m1.has(k));
let union = (m0) => (m1) =>
	spreadEntries(m0).concat(difference(m1)(m0));

module.exports.spreadKeys = spreadKeys;
module.exports.spreadValues = spreadValues;
module.exports.spreadEntries = spreadEntries;
module.exports.hasKey = hasKey;
module.exports.x_hasKey = x_hasKey;
module.exports.lastKey = lastKey;
module.exports.firstKey = firstKey;
module.exports.rmFirst = rmFirst;
module.exports.pathHasNode = pathHasNode;
module.exports.x_pathHasNode = x_pathHasNode;
module.exports.pathHasEntry = pathHasEntry;
module.exports.x_pathHasEntry = x_pathHasEntry;
module.exports.componentString = componentString;
module.exports.showGraph = showGraph;
module.exports.intersection = intersection;
module.exports.difference = difference;
module.exports.union = union;
module.exports.edgeString = edgeString;
module.exports.pathString = pathString;
module.exports.graphString = graphString;



//
//
//