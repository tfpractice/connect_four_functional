describe('Player', function() {
	beforeAll(function() {
		console.log('\n.........Player Spec.........');
		P = Player;
	});

	beforeEach(function() {
		dick = P.spawn('Dick', 'red');
		jane = P.spawn('Jane', 'black');
	});

	it('is an object', function() {
		expect(dick).toBeObject();
	});
});