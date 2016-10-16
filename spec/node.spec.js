describe('Node', function() {
	beforeAll(function() {
		console.log('\n.........Node Spec.........');
		({ Node } = app);
	});

	beforeEach(function() {
		dick = { name: 'Dick' };
		jane = { name: 'Jane' };
		myNode = Node.spawn(2, 3);
		jN00 = Node.spawn(0, 0, jane);
		jN01 = Node.spawn(0, 1, jane);
		dN55 = Node.spawn(5, 5, dick);
		dN54 = Node.spawn(5, 4, dick);
	});

	describe('spawn', () => {
		it('returns an object with a column, row, and player attribute', () => {
			expect(myNode.column).toBe(2);
			expect(myNode.row).toBe(3);
			expect(myNode.player).toBe(null);
		});
	});
	describe('player', () => {
		it('retrieves the player attribute', () => {
			expect(Node.player(myNode)).toBeNull();
		});
	});

	describe('samePlayer', () => {
		it('compares the player attributes', () => {
			expect(Node.samePlayer(jN00)(dN55)).toBeFalse();
			expect(Node.samePlayer(jN00)(jN01)).toBeTrue();
		});
	});

	describe('isFree', () => {
		it('checks is player attr is falsy', () => {
			expect(Node.isFree(myNode)).toBeTrue();
			expect(Node.isFree(jN00)).toBeFalse();
		});
	});
});