describe('player', function() {
	beforeAll(function() {
		console.log('\n.........player Spec.........');
		P = Player;
		G = Graph;
	});

	beforeEach(function() {
		john = P.spawn('john');
		jCells = allCells.filter((c, id) => id > 17);
		P.claimCells(john)(...jCells);
	});

	describe('when given a name string', () => {
		it('retuns an object with that name', () => {
			expect(P.spawn('john')).toBeObject();
		});
	});
	describe('name(P)', () => {
		it('retrieves the name attribute', () => {
			expect(P.name(john)).toBe('john');
		});
	});

	describe('wins', () => {
		it('returns the players wins', () => {
			expect(P.wins(john)).toBe(0);
		});
	});
	describe('incrementScore', () => {
		it('increases the wins by one', () => {
			P.incrementScore(john);
			expect(P.wins(john)).toBe(1);
		});
	});
	describe('decrementScore', () => {
		it('increases the wins by one', () => {
			P.decrementScore(john);
			expect(P.wins(john)).toBe(-1);
		});
	});
	describe('graph', () => {
		it('returns the Ps graph object', () => {
			expect(P.graph(john)).toBeObject();
		});
	});

	describe('claimCell', () => {
		it('adds a cell to the Ps graph', () => {
			n30 = allCells.find(({ column, row }) =>
				column === 3 && row === 0);
			P.claimCells(john)(n30);
			expect(G.edges(P.graph(john)).has(n30)).toBeTrue();
		});
	});
});