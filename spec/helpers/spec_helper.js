beforeAll(function() {
	require('jasmine-expect');
	app = require('../../index');
	({ Node, Board, Player, Game, Utils } = app);
	({ Commands: Comms, Strings: STR } = Utils);
});

beforeEach(function() {});