describe('Player', function() {
	beforeAll(function() {
		console.log('\n.........Player Spec.........');
		({ Player: PR, Node } = app);
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
		it('returns an object with a ', () => {
			expect(dick).toBeObject();
		});
	});
	describe('name ', () => {
		it('retrieves the name attribute', () => {
			expect(PR.name(dick)).toBe('Dick');
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
	describe('claim', () => {
		it('sets the object player attribute to the Player', () => {
			let nd00 = Node.spawn(0, 0);
			PR.claim(dick)(nd00);
			PR.claim(dick)();
			expect(nd00.player).toBe(dick);
		});
	});
});