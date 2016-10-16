describe('Board', function() {
	beforeAll(function() {
		console.log('\n.........Board Spec.........');
		({ Board } = app);
	});

	beforeEach(function() {
		myBoard = Board.spawn();
	});

	it('is a grid with 7 columns and 6 rows', function() {
		// console.log(myBoard);
		// GameGraph.connectAdjacents(myBoard);
		expect(myBoard instanceof Map).toBeTrue();
	});

	describe('columns', function() {
		it('returns an array of columns', function() {
			// console.log(Board.columns(myBoard));
			expect(Board.columns(myBoard)).toBeArray();
		});
	});
});