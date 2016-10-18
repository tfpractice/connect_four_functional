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
		it('is a grid with 7 columns and 6 rows', () => {
			expect(myBoard instanceof Map).toBeTrue();
			expect(Board.cIDs(myBoard).size).toBe(7);
			expect(Board.rIDs(myBoard).size).toBe(6);
		});
	});
	describe('nodesByPlayer', () => {
		it('returns an array of nodes with a speacified player', () => {
			expect(Board.nodesByPlayer(myBoard)()).toBeArray();
		});
	});

	describe('playerGraph', () => {
		it('returns a graph of all nodes claimed by a player', () => {
			expect(Board.playerGraph(myBoard)(jane) instanceof Map).toBeTrue();
		});
	});

	describe('next', () => {
		it('returns the next free node', () => {
			expect(Board.next(col0)).toBe(c0r0);
		});
	});

	describe('hasFree', () => {
		it('checks if any of the nodes are free', () => {
			col1.map(Player.claim(dick));
			expect(Board.hasFree(col0)).toBeTrue();
			expect(Board.hasFree(col1)).toBeFalse();
		});
	});
	describe('allComps', () => {
		it('returns an array of components', () => {
			// console.log(Board.allComps(myBoard).map(STR.compString));
			expect(Board.allComps(myBoard)).toBeArray();
		});
	});
	describe('splitComps', function() {
		it('returns a map of all connected components by direction', () => {
			expect(Board.splitComps(myBoard) instanceof Map).toBeTrue();
		});
	});

	describe('winComp', () => {
		it('checks if the players component has more than three', function() {
			expect(Board.winComp(myBoard, 3)).toBeTrue();
		});
	});
});