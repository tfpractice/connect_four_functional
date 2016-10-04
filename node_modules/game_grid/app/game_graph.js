const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const { Graph, utils, traversals } = FGT;
const { nodes, addEdge } = Graph;
const { spreadValues } = utils;
const { components } = traversals;
const { sameColumn, sameRow, isNeighbor } = Cell;
const { samePVector, sameNVector } = Cell;

const spawn = Graph.fromElements;
const cells = (graph) => spreadValues(nodes(graph));

const cellsByColumn = (graph) => (column = 0) =>
	cells(graph).filter(sameColumn({ column }));

const cellsByRow = (graph) => (row = 0) =>
	cells(graph).filter(sameRow({ row }));

const cellByPosition = (graph) => (column = 0, row = 0) =>
	cells(graph).find(Cell.isEquivalent({ column, row }));

const addNodes = (graph) => (...nodes) => {
	Graph.addNodes(graph)(...nodes);
	connectAdjacents(graph);
	return graph;
};

const removeNodes = (graph) => (...nodes) => {
	nodes.forEach(n => Graph.removeNode(graph)(n));
	connectAdjacents(graph);
	return graph;
};

const adjNodes = (graph) => (src) => cells(graph).filter(isNeighbor(src));

const connectAdjacents = (graph) => {
	cells(graph).forEach((prev) =>
		adjNodes(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const transferCells = (src) => (dest) => (...nodes) => {
	removeNodes(src)(...nodes);
	addNodes(dest)(...nodes);
};

const getComponents = (graph) => new Set(spreadValues(components(graph)));
const countComponents = (graph) => getComponents(graph).size;

module.exports = {
	spawn,
	cells,
	cellsByColumn,
	cellByPosition,
	cellsByRow,
	connectAdjacents,
	adjNodes,
	transferCells,
	addNodes,
	removeNodes,
	getComponents,
	countComponents,
};