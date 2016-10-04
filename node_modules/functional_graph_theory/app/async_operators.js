const Graph = require('./graph');
const { addNodes, addEdge, removeEdge, removeNode } = Graph;
const { addNeighbor, importEdge, mergeGraphs, } = Graph;

const addNodesAsync = (graph) => (...additional) =>
	new Promise((resolve) => {
		addNodes(graph)(...additional);
		resolve(graph);
	});

const addEdgeAsync = (graph) => (n0) => (n1, weight = 0) =>
	new Promise((resolve) => {
		addEdge(graph)(n0)(n1, weight);
		resolve(graph);
	});

const removeEdgeAsync = (graph) => (src) => (nabe) =>
	new Promise((resolve, reject) => {
		if (Graph.isAdjacent(graph)(src)(nabe)) {
			removeEdge(graph)(src)(nabe);
			resolve(graph);
		} else {
			reject('no edge to delete');
		}
	});

const removeNodeAsync = (graph) => (exNode) =>
	new Promise((resolve) => {
		removeNode(graph)(exNode);
		resolve(graph);
	});

const addNeighborAsync = (graph) => (src) => ([nabe, wt]) =>
	new Promise((resolve) => {
		addNeighbor(graph)(src)([nabe, wt]);
		resolve(graph);
	});

const importEdgeAsync = (graph) => ([src, nabes]) =>
	new Promise((resolve) => {
		importEdge(graph)([src, nabes]);
		resolve(graph);
	});
const mergeGraphsAsync = (graph) => (altGraph) =>
	new Promise((resolve) => {
		mergeGraphs(graph)(altGraph);
		resolve(graph);
	});

module.exports = {
	addNodesAsync,
	addEdgeAsync,
	removeEdgeAsync,
	removeNodeAsync,
	addNeighborAsync,
	importEdgeAsync,
	mergeGraphsAsync,
};