// const GameGraph = require('../index').GameGraph;
// const { addNodes, connectAdjacents, cells } = GameGraph;
// const addAndUpdate = (graph) => (...nodes) =>
// 	Promise.resolve(graph)
// 	.then(g => {
// 		addNodes(graph)(...nodes);
// 		// console.log((g.edges));
// 		return g.edges;
// 	})
// 	.then(g => {
// 		// connectAdjacents(g);
// 		console.log(g);
// 		return g;
// 	}).then(k => {
// 		// console.log(k.edges);
// 	});
// const addAsync = (graph) => (...nodes) =>
// 	new Promise((resolve) => {
// 		// console.log(cells(graph));
// 		addNodes(graph)(...nodes);
// 		console.log(cells(graph));
// 		resolve(graph);
// 	});

// const updateAsync = (graph) =>
// 	new Promise((resolve) => {
// 		connectAdjacents(graph);
// 		resolve(graph);
// 	});

// describe('async tests', function() {

// 	beforeEach(function() {
// 		myGraph = GameGraph.spawn();
// 		eGraph = GameGraph.spawn();
// 		oGraph = GameGraph.spawn();
// 		evens = allCells.filter((c, id) => id % 2 === 0);
// 		odds = allCells.filter((c, id) => id % 2 !== 0);
// 		myCells = allCells.filter((c, id) => id < 18);
// 		GameGraph.addNodes(myGraph)(...myCells);
// 		GameGraph.addNodes(eGraph)(...evens);
// 		GameGraph.addNodes(oGraph)(...odds);
// 	});
// 	it('should behave...', function() {
// 		addAndUpdate(eGraph)(odds[3])
// 	});

// });