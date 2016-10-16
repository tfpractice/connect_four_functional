describe('Game', function() {
	beforeAll(function() {
		console.log('\n.........Game Spec.........');
		PR = Player;
		// GR = Graph;
	});

	beforeEach(function() {
		dick = PR.spawn('Dick');
		jane = PR.spawn('Jane');
		myGame = Game.spawn(jane, dick);
	});

	describe('spawn', function() {
		it('creates a new object with players and a board', function() {
			expect(myGame).toBeObject();
			expect(myGame.players).toBeArray();
			expect(myGame.board instanceof Map).toBeTrue();
			expect(myGame.score instanceof Map).toBeTrue();
		});
	});

	describe('board', () => {
		it('returns the board of the game', () => {
			expect(Game.board(myGame) instanceof Map).toBeTrue();
		});
	});
	describe('players', () => {
		it('returns the players attribute of the', () => {
			expect(Game.players(myGame)).toBeArray();
		});
	});

	describe('active', () => {
		it('returns the games active players', () => {
			expect(Game.active(myGame)).toBe(jane);
		});
	});
	describe('passive', () => {
		it('returns the games passive player ', () => {
			expect(Game.passive(myGame)).toBe(dick);
		});
	});
	describe('score', () => {
		it('retrieve a map of player scores', () => {
			expect(Game.score(myGame) instanceof Map).toBeTrue();
		});
	});
	describe('cID', function() {
		it('retrieves the current cID ID', function() {
			expect(Game.cID(myGame)).toBe(0);
		});
	});

	describe('column', () => {
		it('returns the nodes in the current cID', function() {
			expect(Game.column(myGame)).toBeArray();
		});
	});

	describe('playerScore', () => {
		it('retrieves the players score', () => {
			expect(Game.playerScore(myGame)(jane)).toBe(0);
		});
	});
	describe('activeScore', () => {
		it('returns the active pplayers score', () => {
			expect(Game.activeScore(myGame)).toBe(0);
		});
	});

	describe('passiveScore', () => {
		it('returns the active pplayers score', () => {
			expect(Game.passiveScore(myGame)).toBe(0);
		});
	});

	describe('incScore', () => {
		it('increaeses the players score by one', () => {
			Game.incScore(myGame)(jane);
			expect(Game.activeScore(myGame)).toBe(1);
		});
	});
	describe('togglePlayers', () => {
		it('switches the games active player ', () => {
			Game.togglePlayers(myGame);
			expect(Game.active(myGame)).toBe(dick);
		});
	});

	describe('setColumn', () => {
		it('returns a node at the specified position', () => {
			Game.setColumn(myGame)(3);
			expect(Game.cID(myGame)).toBe(3);
		});
	});
	describe('isAvail', () => {
		it('checks if the current cID has free nodes', () => {
			Game.isAvail(myGame);
			Game.setColumn(myGame)(3);

			expect(Game.isAvail(myGame)).toBeTrue();
			// expect(Game.cID(myGame)).toBe(3);
		});
	});

	// 	// describe('completeTurn', () => {
	// 	//     it('transfers nodes from the grid to the active player',
	// 	//         () => {
	// 	//             let n30 = Game.selectCell(myGame)(3, 0);
	// 	//             Game.completeTurn(myGame);
	// 	//             expect(Graph.contains(Game.grid(myGame))(
	// 	//                 n30)).toBeFalse();
	// 	//         });

	// 	//     it('switches the current player', () => {
	// 	//         let oldPlayer = Game.active(myGame);
	// 	//         let n40 = Game.selectCell(myGame)(4, 0);
	// 	//         Game.completeTurn(myGame);
	// 	//         expect(Game.active(myGame)).not.toBe(
	// 	//             oldPlayer);
	// 	//     });
	// 	// });
});