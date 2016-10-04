describe('Graph', function() {
	beforeAll(function() {
		console.log('\n.........Graph Spec.........');
	});

	describe('makeEdges(...elements)', () => {
		it('returns a new Map of those elements', () => {
			expect(makeEdges(...myNodes) instanceof Map).toBeTrue();
		});
	});
	describe('fromElements(...elements)', () => {
		it('returns a new object with nodes and edges', () => {
			expect(fromElements(...myNodes)).toBeObject();
		});
	});
	describe('accessors', () => {
		describe('nodes', () => {
			it('returns a set of the nodes from that graph', () => {
				expect(nodes(myGraph) instanceof Set).toBeTrue();
			});
		});
		describe('edges', () => {
			it('returns a Map of nodes and neighbor', () => {
				expect(edges(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('neighbors(edge)(node)', () => {
			it('returns a map entry of that nodes neighbors ', () => {
				expect(neighbors(myGraph)(n0) instanceof Array).toBeTrue();
			});
		});
	});
	describe('operators', () => {
		describe('contains(graph)(node)', () => {
			it('checks for the presence of a node in the graph', () => {
				expect(contains(myGraph)(n0)).toBeTrue();
			});
		});
		describe('isAdjacent(graph)(n0)(n1)', () => {
			it('checks for the presence of a node in the graph', () => {
				expect(isAdjacent(myGraph)(n0)(n6)).toBeFalse();
			});
		});

		describe('addNodes', () => {
			it('adds an edges entry for each additional node', () => {
				addNodes(myGraph)(n7, n9);
				expect(contains(myGraph)(n9)).toBeTrue();
				expect(edges(myGraph).has(n9)).toBeTrue();
			});
		});
		describe('removeNodes', () => {
			it('removes a node from all its neihghbors nad the graph', () => {
				addNodes(myGraph)(n7, n9);
				removeNode(myGraph)(n7);
				expect(contains(myGraph)(n7)).toBeFalse();
			});
		});

		describe('addEdge(n0)(n1,weight)', () => {
			it('updates each nodes edge entry', () => {
				expect(neighbors(myGraph)(n0)).toContain(n1);
				expect(edges(myGraph).get(n0).get(n1)).toBe(2);
			});
		});
		describe('importEdge(n0)(n1,weight)', () => {
			it('updates each nodes edge entry', () => {
				let firstOdd = [...oddGraph.edges.entries()][0];
				let OddNode = firstOdd[0];
				let OddNabe = firstOdd[1];
				importEdge(myGraph)(firstOdd);
				expect(contains(myGraph)(OddNode)).toBeTrue();
			});
		});
		describe('removeEdge', () => {
			it('removes an entry from the edgs map', () => {
				removeEdge(myGraph)(n0)(n1);
				expect(neighbors(myGraph)(n0)).not.toContain(n1);
				expect(edges(myGraph).get(n0).get(n1)).toBeUndefined();
			});
		});
		describe('mergeGraphs(n0)(n1,weight)', () => {
			it('merges nodes and edges of two graphs', () => {
				mergeGraphs(evenGraph)(oddGraph);
				expect(contains(evenGraph)(n15)).toBeTrue();
			});
		});
	});
});