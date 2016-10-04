describe('Connections', function() {
	beforeAll(function() {
		console.log('\n.........connections Spec.........');
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

	describe('rowNeighbors ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.rowNeighbors(myGraph)(n30)).toBeArray();
		});
	});
	describe('columnNeighbors ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.columnNeighbors(myGraph)(n30)).toBeArray();
		});
	});
	describe('posNeighbors ', () => {
		it('returns all neighboring nodes adjacent bby row', () => {
			expect(Connections.posNeighbors(myGraph)(n30)).toBeArray();
		});
	});
	describe('negNeighbors ', () => {
		it('returns all neighboring nodes adjacent by column', () => {
			expect(Connections.negNeighbors(myGraph)(n30)).toBeArray();
		});
	});

	describe('connectCols', () => {
		it('creates edges between columnNeighbors', () => {
			Connections.connectCols(myGraph);
		});
	});

	describe('connectRows', () => {
		it('creates edges between rowNeighbors', () => {
			Connections.connectRows(myGraph);
		});
	});

	describe('connectPVectors', () => {
		it('creates edges between posNeighbors', () => {
			Connections.connectPVectors(myGraph);
		});
	});

	describe('connectNVectors', () => {
		it('creates edges between negNeighbors', () => {
			Connections.connectNVectors(myGraph);
		});
	});
	describe('colGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.colGraph(myGraph)).toBeObject();
		});
	});
	describe('rowGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.rowGraph(myGraph)).toBeObject();
		});
	});
	describe('posGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.posGraph(myGraph)).toBeObject();
		});
	});
	describe('negGraph', () => {
		it('returns a new Graph with only columns connected', function() {
			expect(Connections.negGraph(myGraph)).toBeObject();
		});
	});
	describe('colComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.colComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('rowComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.rowComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('posComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.posComponents(myGraph) instanceof Set).toBeTrue();
		});
	});

	describe('negComponents', function() {
		it('retrives the compnents of the colGraph', function() {
			expect(Connections.negComponents(myGraph) instanceof Set).toBeTrue();
		});
	});
});