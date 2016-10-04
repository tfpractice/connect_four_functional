const FGT = require('functional_graph_theory');
const Cell = require('./cell');
const GameGraph = require('./game_graph');
const { Graph } = FGT;
const { addEdge } = Graph;
const { sameColumn, sameRow } = Cell;
const { samePVector, sameNVector } = Cell;
const { spawn, cells, adjNodes, getComponents } = GameGraph;

const rowNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameRow(src));

const columnNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameColumn(src));

const posNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(samePVector(src));

const negNeighbors = (graph) => (src) =>
	adjNodes(graph)(src).filter(sameNVector(src));

const connectCols = (graph) => {
	cells(graph).forEach((prev) =>
		columnNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectRows = (graph) => {
	cells(graph).forEach((prev) =>
		rowNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectPVectors = (graph) => {
	cells(graph).forEach((prev) =>
		posNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const connectNVectors = (graph) => {
	cells(graph).forEach((prev) =>
		negNeighbors(graph)(prev).map(n => addEdge(graph)(prev)(n))
	);
	return graph;
};

const colGraph = (graph) => connectCols(spawn(...cells(graph)));
const rowGraph = (graph) => connectRows(spawn(...cells(graph)));
const posGraph = (graph) => connectPVectors(spawn(...cells(graph)));
const negGraph = (graph) => connectNVectors(spawn(...cells(graph)));
const colComponents = (graph) => getComponents(colGraph(graph));
const rowComponents = (graph) => getComponents(rowGraph(graph));
const posComponents = (graph) => getComponents(posGraph(graph));
const negComponents = (graph) => getComponents(negGraph(graph));


// const components = ({ edges }) => {
// 	let cMap = new Map();

// 	let visitComponent = (comp = new Set) => (node) => {
// 		comp.add(node);
// 		cMap.set(node, comp);
// 		for (let [nabe, nWeight] of edges.get(node)) {
// 			if (!comp.has(nabe)) { visitComponent(comp)(nabe); }
// 		}
// 	};

// 	for (let [node, nabes] of edges) {
// 		if (!cMap.has(node)) { visitComponent(new Set)(node); }
// 	}

// 	return cMap;
// };

module.exports = {
	rowNeighbors,
	columnNeighbors,
	posNeighbors,
	negNeighbors,
	connectCols,
	connectRows,
	connectPVectors,
	connectNVectors,
	colGraph,
	rowGraph,
	posGraph,
	negGraph,
	colComponents,
	rowComponents,
	posComponents,
	negComponents,
};