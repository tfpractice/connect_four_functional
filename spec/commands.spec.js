describe('Commands', function() {
	beforeAll(function() {
		console.log('\n.........Commands Spec.........');
	});

	beforeEach(function() {
		cSet = new Set([1, 2, 3, 4]);
		cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
		cArr = [00, 11, 22, 33, 44];
	});

	describe('kvMap', function() {
		it('returns a new map with altered keys', function() {
			let dubMap = Comms.kvMap(cMap)(v => v * 2);
			expect(dubMap.get(8)).toBe(2);
		});
	});
});