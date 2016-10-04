describe('async', function() {
	beforeAll(function() {
		console.log('\n.........AsyncOps Spec.........');
		({ addNodesAsync, addEdgeAsync, removeEdgeAsync } = AsyncOps);
		({ removeNodeAsync, addNeighborAsync, } = AsyncOps);
		({ importEdgeAsync, mergeGraphsAsync, } = AsyncOps);
	});

	beforeEach(function() {
		e2 = eNodes[2];
		o2 = oNodes[2];
	});

	describe('addNodesAsync', () => {
		it('adds a node to the graph', (done) => {
			addNodesAsync(oddGraph)(e2);
			expect(Graph.contains(oddGraph)(e2)).toBeTrue();
			done();
		});
	});

	describe('addEdgeAsync(e2)(o2,weight)', () => {
		it('updates each nodes edge entry', (done) => {
			addEdgeAsync(oddGraph)(e2)(o2, 2);
			expect(neighbors(oddGraph)(e2)).toContain(o2);
			expect(edges(oddGraph).get(e2).get(o2)).toBe(2);
			done();
		});
	});
	describe('importEdgeAsync(e2)(o2,weight)', () => {
		it('updates each nodes edge entry', (done) => {
			let firstOdd = [...oddGraph.edges.entries()][0];
			let OddNode = firstOdd[0];
			let OddNabe = [...firstOdd[1].keys()][0];
			importEdgeAsync(evenGraph)(firstOdd);
			expect(contains(evenGraph)(OddNode)).toBeTrue();
			expect(contains(evenGraph)(OddNabe)).toBeTrue();
			done();
		});
	});
	describe('removeEdgeAsync', () => {
		it('removes an entry from the edgs map', (done) => {
			let firstOdd = [...oddGraph.edges.entries()][0];
			let OddNode = firstOdd[0];
			let OddNabe = [...firstOdd[1].keys()][0];
			importEdge(evenGraph)(firstOdd);
			removeEdge(evenGraph)(OddNode)(OddNabe);
			expect(isAdjacent(evenGraph)(OddNode)(OddNabe)).not.toBeTrue();
			done();
		});
	});
	describe('removeNodeAsync', () => {
		it('removes an entry from the edgs map', (done) => {
			let firstOdd = [...oddGraph.edges.entries()][0];
			let OddNode = firstOdd[0];
			let OddNabe = [...firstOdd[1].keys()][0];
			importEdge(evenGraph)(firstOdd);
			removeNodeAsync(evenGraph)(OddNode);
			expect(Graph.contains(evenGraph)(OddNode)).toBeFalse();
			done();
		});
	});
	describe('mergeGraphsAsync(e2)(o2,weight)', () => {
		it('merges nodes and edges of two graphs', (done) => {
			let elevOdd = [...oddGraph.edges.entries()][10];
			let OddNode = elevOdd[0];
			mergeGraphsAsync(evenGraph)(oddGraph);
			expect(contains(evenGraph)(OddNode)).toBeTrue();
			done();
		});
	});
});