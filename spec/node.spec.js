describe('Node', function() {
	beforeAll(function() {
		console.log('\n.........Node Spec.........');
		({ Node } = app);
	});

	beforeEach(function() {
		myNode = Node.spawn(2, 3);
	});

	describe('spawn', () => {
		it('returns an object with a column, row, and player attribute', function() {
			expect(myNode.column).toBe(2);
			expect(myNode.row).toBe(3);
			expect(myNode.player).toBe(null);
		});
	});
	describe('player', function() {
		it('retrieves the player attribute', function() {
			expect(Node.player(myNode)).toBeNull();
		});
	});

	describe('columns', function() {
		it('returns an array of columns', function() {
			// console.log(Node.columns(myNode));
			// expect(Node.columns(myNode)).toBeArray();
		});
	});
});