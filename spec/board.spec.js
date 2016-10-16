describe('Board', function() {
	beforeAll(function() {
		console.log('\n.........Board Spec.........');
		// ({ Board } = app);
		({ nodesByColumn: byCol } = Board);
	});

	beforeEach(function() {
		dick = Player.spawn('Dick');
		jane = Player.spawn('Jane');
		myBoard = Board.spawn();
		myNodes = Board.nodes(myBoard);
		col0 = [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5] = byCol(myBoard)(0);
		col1 = [c1r0, c1r1, c1r2, c1r3, c1r4, c1r5] = byCol(myBoard)(1);
	});

	describe('spawn', () => {
		it('is a grid with 7 columns and 6 rows', function() {
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

	describe('playerGraph', function() {
		it('returns a graph of all nodes claimed by a player', function() {
			expect(Board.playerGraph(myBoard)(jane)).toBeTrue();
		});
	});

	describe('next', function() {
		it('returns the next free node', function() {
			expect(Board.next(col0)).toBe(c0r0);
		});
	});

	describe('hasFree', function() {
		it('checks if any of the nodes are free', function() {
			col1.map(Player.claim(dick));
			expect(Board.hasFree(col0)).toBeTrue();
			expect(Board.hasFree(col1)).toBeFalse();
		});
	});
});