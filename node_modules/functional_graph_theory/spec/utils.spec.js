describe('Utils', function() {
	let nabes0;
	beforeAll(function() {
		console.log('\n.........Utils Spec.........');
	});

	beforeEach(function() {
		nabes0 = neighbors(myGraph)(n0);
		myEdges = edges(myGraph);
	});

	describe('spreadKeys', () => {
		it('returns an array of Map keys', () => {
			expect(utils.spreadKeys(myEdges)).toBeArray();
			expect(utils.spreadKeys(myEdges)).toContain(n0);
		});
	});
	describe('spreadValues', () => {
		it('returns an array of map values', () => {
			expect(utils.spreadValues(myEdges)).toBeArray();
		});
	});
	describe('spreadEntries', () => {
		it('returns an array of key values pairs', () => {
			expect(utils.spreadEntries(myEdges)[0]).toBeArray();
		});
	});
	describe('lastKey', () => {
		it('retrievs the last key in a map', () => {
			expect(utils.lastKey(myEdges)).toBe(n9);
		});
	});
	describe('firstKey', () => {
		it('retrieves the last key in a map', () => {
			expect(utils.firstKey(myEdges)).toBe(n0);
		});
	});
	describe('rmFirst', () => {
		it('deletes the last key in a map/set', () => {
			let copied = new Set(nodes(myGraph));
			let first = utils.rmFirst((copied));
			expect(first).toBe(n0);
			expect(copied.has(n0)).toBeFalse();
		});
	});
	describe('pathHasNode', () => {
		it('checks a path for a node', () => {
			expect(utils.pathHasNode(myEdges)(n0)).toBeTrue();
		});
	});
	describe('x_pathHasNode', () => {
		it('checks a path for a node', () => {
			expect(utils.x_pathHasNode(myEdges)(n0)).toBeFalse();
		});
	});
	describe('pathHasEntry', () => {
		it('checks a path for an entry', () => {
			let first = [...myEdges][0];
			expect(utils.pathHasEntry(myEdges)(first)).toBeTrue();
		});
	});
	describe('x_pathHasEntry', () => {
		it('checks a path for an entry', () => {
			let first = [...myEdges][0];
			expect(utils.x_pathHasEntry(myEdges)(first)).toBeFalse();
		});
	});
});