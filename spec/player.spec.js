describe('Player', function() {
	beforeAll(function() {
		console.log('\n.........Player Spec.........');
		({ Player: PR, Node } = app);
	});

	beforeEach(function() {
		dick = PR.spawn('Dick', 'red');
		jane = PR.spawn('Jane', 'black');
	});

	describe('spawn', () => {
		it('returns an object with a ', () => {
			expect(dick).toBeObject();
		});
	});
	describe('name ', () => {
		it('retrieves the name attribute', () => {
			expect(PR.name(dick)).toBe('Dick');
		});
	});
	describe('grid ', () => {
		it('retrieves the grid attribute', () => {
			expect(PR.grid(dick) instanceof Map).toBeTrue();
		});
	});
	describe('score ', () => {
		it('retrieves the score attribute', () => {
			expect(PR.score(dick)).toBe(0);
		});
	});
	describe('resetScore ', () => {
		it('retrieves the resetScore attribute', () => {
			PR.resetScore(dick);
			expect(PR.score(dick)).toBe(0);
		});
	});
	describe('incrementScore ', () => {
		it('retrieves the incrementScore attribute', () => {
			PR.resetScore(dick);
			expect(PR.score(dick)).toBe(0);
		});
	});
	describe('decrementScore ', () => {
		it('retrieves the decrementScore attribute', () => {
			PR.resetScore(dick);
			expect(PR.score(dick)).toBe(0);
		});
	});
	describe('claimNodes', () => {
		it('adds each node to the players graph', function() {
			let nd00 = Node.spawn(0, 0),
				nd01 = Node.spawn(0, 1);
			PR.claimNodes(dick)(nd00, nd01);
			expect(PR.grid(dick).size).toBe(2);
		});
	});
});