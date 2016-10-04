describe('Grid', function() {
	beforeAll(function() {
		console.log('\n.........Grid Spec.........');
	});

	describe('spawn', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(Grid.spawn(3, 3)).toBeObject();
		});
	});
	describe('initCells({cNum, rNum})', () => {
		it('retunrn an object wtih cNum and rNum attributes', () => {
			expect(Grid.initCells(6, 6)).toBeArray();
		});
	});

	describe('fromGrid', () => {
		it('returns a copy of the grid  ', () => {
			expect(Grid.fromGrid(Grid.spawn(3, 3))).toBeObject();
		});
	});
});