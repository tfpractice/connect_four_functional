describe('Board', function() {
	beforeAll(function() {
		console.log('\n.........Board Spec.........');
		({ Board } = app);
	});

	beforeEach(function() {
		dick = { name: 'Dick' };
		jane = { name: 'Jane' };
		myBoard = Board.spawn();
	});

	describe('spawn', () => {
		it('is a grid with 7 columns and 6 rows', function() {
			console.log(myBoard);
			expect(myBoard instanceof Map).toBeTrue();
			expect(Board.cIDs(myBoard).size).toBe(7);
			expect(Board.rIDs(myBoard).size).toBe(6);
		});
	});
	describe('nodesByPlayer', function() {
		it('returns an array of nodes with a speacified player', function() {
			expect(Board.nodesByPlayer(myBoard)()).toBeArray();
		});
	});

	// describe('columns', function() {
	// 	it('returns an array of columns', function() {
	// 		// console.log(Board.columns(myBoard));
	// 		expect(Board.columns(myBoard)).toBeArray();
	// 	});
	// });
});