const UTILS = require('./utils');
const { spreadKeys, spreadValues, spreadEntries } = UTILS;
const { lastKey, firstKey, rmFirst, } = UTILS;
const { pathHasNode, x_pathHasNode } = UTILS;
const { pathHasEntry, x_pathHasEntry } = UTILS;
const { componentString } = UTILS;

const initPath = (node) =>
	new Map().set(node, { pred: null, weight: 0, length: 0 });

const unvisitedNeighbors = ({ edges }) => (path) => (node) =>
	spreadKeys(edges.get(node)).filter(x_pathHasNode(path));

const unvisitedMap = ({ edges }) => (path) => (node) =>
	new Map(spreadEntries(edges.get(node)).filter(x_pathHasEntry(path)));

const dfs = ({ edges }) => (iNode) => {
	let dPath = initPath(iNode);
	let dVisit = (path) => {
		let pred = lastKey(path);
		let { length: pCount, weight: pWeight } = path.get(pred);
		let nextNabes = unvisitedMap({ edges })(path)(pred);
		for (let [nabe, weight] of nextNabes) {
			path.set(nabe, {
				pred,
				length: pCount + 1,
				weight: pWeight + weight,
			});
			dVisit(path);
		};
	};

	dVisit(dPath);
	return dPath;
};

const bfs = ({ edges }) => (iNode) => {
	var bPath = initPath(iNode);
	var bQueue = new Set([iNode]);
	while (bQueue.size > 0) {
		let pred = rmFirst(bQueue);
		let nextNabes = unvisitedMap({ edges })(bPath)(pred);
		let { length: pCount, weight: pWeight } = bPath.get(pred);
		for (let [nabe, weight] of nextNabes) {
			bPath.set(nabe, {
				pred,
				length: pCount + 1,
				weight: pWeight + weight,
			});
			bQueue.add(nabe);
		};
	}

	return bPath;
};

const dijkstra = ({ edges }) => (iNode) => {
	let reachables = bfs({ edges })(iNode);
	let inspectQueue = new Set().add(iNode);
	let solutionSet = initPath(iNode);
	while (inspectQueue.size > 0) {
		let pred = rmFirst(inspectQueue);
		let nextNabes = edges.get(pred);
		let { length: dCount, weight: dWeight } = solutionSet.get(pred);
		for (let [nabe, nWeight] of nextNabes) {
			let prevMap = reachables.get(nabe);
			let { length: rCount, weight: rWeight } = prevMap;
			let dMap = { pred: pred, length: dCount + 1, weight: dWeight + nWeight, };
			let sMap = ((dWeight + nWeight) < rWeight) ? dMap : prevMap;
			if (!solutionSet.has(nabe)) {
				inspectQueue.add(nabe);
				solutionSet.set(nabe, sMap);
			}
		}
	}

	return solutionSet;
};

const components = ({ edges }) => {
	let cMap = new Map();

	let visitComponent = (comp = new Set) => (node) => {
		comp.add(node);
		cMap.set(node, comp);
		for (let [nabe, nWeight] of edges.get(node)) {
			if (!comp.has(nabe)) { visitComponent(comp)(nabe); }
		}
	};

	for (let [node, nabes] of edges) {
		if (!cMap.has(node)) { visitComponent(new Set)(node); }
	}

	return cMap;
};

module.exports = {
	dfs,
	bfs,
	dijkstra,
	components,
	unvisitedMap,
	unvisitedNeighbors,
};