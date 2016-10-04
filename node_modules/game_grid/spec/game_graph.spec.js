describe('GameGraph', function() {
	beforeAll(function() {
		console.log('\n.........GameGraph Spec.........');
	});

	beforeEach(function(done) {
		myGraph = GameGraph.spawn();
		eGraph = GameGraph.spawn();
		oGraph = GameGraph.spawn();
		evens = allCells.filter((c, id) => id % 2 === 0);
		odds = allCells.filter((c, id) => id % 2 !== 0);
		myCells = allCells.filter((c, id) => id < 18);
		GameGraph.addNodes(myGraph)(...myCells);
		GameGraph.addNodes(eGraph)(...evens);
		GameGraph.addNodes(oGraph)(...odds);
		done();
	});

	describe('cells', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cells(myGraph)).toBeArray();
		});
	});
	describe('cellsByColumn', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cellsByColumn(myGraph)(2)).toBeArray();
		});
	});
	describe('cellsByRow', () => {
		it('returns the cells of the GameGraph', () => {
			expect(GameGraph.cellsByRow(myGraph)(2)).toBeArray();
		});
	});
	describe('cellByPosition', () => {
		it('retrives a cell with the specified row and column', function() {
			expect(GameGraph.cellByPosition(myGraph)(0, 3)).toBeObject();
		});
	});
	describe('spawn', () => {
		it('returns a graph of the cells ', () => {
			expect(GameGraph.spawn()).toBeObject();
		});
	});
	describe('graph methods', () => {
		describe('adjNodes', () => {
			it('creates an edge between each cell in a column', () => {
				GameGraph.connectAdjacents(myGraph);
			});
		});
		describe('addNodes', () => {
			it('adds nodes to a grid and connects them via adjNodes function', () => {
				expect(Graph.edges(myGraph).has(n30)).toBeTrue();
			});
		});
		describe('removeNodes', () => {
			it('removes nodes from a grid and resets edges them via initEdges', () => {
				GameGraph.removeNodes(myGraph)(n30, n32);
				expect(Graph.edges(myGraph).has(n30)).toBeFalse();
			});
		});
		describe('transferCells', () => {
			it('transfers nodes from one graph to another', () => {
				let e3 = evens[3];
				GameGraph.transferCells(eGraph)(oGraph)(e3);
				expect(Graph.contains(oGraph)(e3)).toBeTrue();
				expect(Graph.contains(eGraph)(e3)).toBeFalse();
			});
		});
		describe('getComponents', () => {
			it('returns the length', () => {
				expect(GameGraph.getComponents(myGraph) instanceof Set).toBeTruthy();
			});
		});
		describe('countComponents', () => {
			it('returns the length of the components', () => {
				expect(GameGraph.countComponents(myGraph)).toBe(1);
			});
		});
	});
});