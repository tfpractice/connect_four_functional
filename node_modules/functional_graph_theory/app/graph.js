const utils = require('./utils');
const { spreadKeys, spreadValues, spreadEntries } = utils;
const { hasKey, x_hasKey, showGraph } = utils;

const initEdge = (edges) => (src) => edges.set(src, new Map);

const makeEdges = (...elements) =>
	spreadValues(new Set(elements))
	.reduce((eMap, next) => initEdge(eMap)(next), new Map);

const fromElements = (...elements) =>
	({ edges: makeEdges(...elements) });

const edges = ({ edges = new Map }) => edges;
const nodes = ({ edges = new Map }) => new Set(spreadKeys(edges));
const copy = ({ edges }) => ({ edges: new Map(edges) });
const neighbors = ({ edges }) => (node) => spreadKeys(edges.get(node));

const contains = ({ edges }) => (node) => edges.has(node);
const x_contains = ({ edges }) => (node) => !edges.has(node);
const isAdjacent = ({ edges }) => (n0) => (n1) => edges.get(n0).has(n1);
const clearEdges = ({ edges }) => edges.clear;

const hasEdge = (graph) => (n0, n1) =>
	isAdjacent(graph)(n0)(n1) && isAdjacent(graph)(n1)(n0);

const addNodes = ({ edges }) => (...additional) =>
	additional.filter(x_hasKey(edges)).map(initEdge(edges));

const addEdge = ({ edges }) => (n0) => (n1, weight = 0) => {
	addNodes({ edges })(n0, n1);
	if (!hasEdge(({ edges }))(n0, n1)) {
		edges.get(n0).set(n1, weight);
		edges.get(n1).set(n0, weight);
	}

};

const removeEdge = ({ edges }) => (src) => (nabe) =>
	hasEdge({ edges })(src, nabe) ?
	(edges.get(src).delete(nabe) && edges.get(nabe).delete(src)) :
	({ edges });

const removeNode = ({ edges }) => (exNode) => {
	if (contains({ edges })(exNode)) {
		neighbors({ edges })(exNode).forEach(removeEdge({ edges })(exNode));
		edges.delete(exNode);
	}
};

const addNeighbor = (graph) => (src) => ([nabe, wt = 0]) =>
	addEdge(graph)(src)(nabe, wt);

const importEdge = (graph) => ([src, nabes = new Map]) =>
	spreadEntries(nabes).forEach(addNeighbor(graph)(src));

const mergeGraphs = (graph) => ({ edges: altEdges = new Map }) =>
	spreadEntries(altEdges).forEach(importEdge(graph));

module.exports = {
	addEdge,
	addNodes,
	clearEdges,
	contains,
	edges,
	fromElements,
	importEdge,
	isAdjacent,
	makeEdges,
	mergeGraphs,
	neighbors,
	nodes,
	removeEdge,
	removeNode,
	showGraph,
};