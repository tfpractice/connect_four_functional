describe('Game', function() {
	beforeAll(function() {
		console.log('\n.........Game Spec.........');
		PR = Player;
	});

	beforeEach(function() {
		dick = PR.spawn('Dick');
		jane = PR.spawn('Jane');
		myGame = Game.spawn(jane, dick);
	});

	describe('spawn', () => {
		it('creates a new object with players and a board', () => {
			expect(myGame).toBeObject();
			expect(myGame.players).toBeArray();
			expect(myGame.board instanceof Map).toBeTrue();
			// expect(myGame.score instanceof Map).toBeTrue();
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
			// expect(Game.score(myGame) instanceof Map).toBeTrue();
		});
	});
	describe('components', () => {
		it('retrieve a map of player scores', () => {
			// expect(Game.components(myGame) instanceof Map).toBeTrue();
		});
	});
	describe('graphs', function() {
		it('returns a graph of each players nodes', function() {
			// console.log(Game.graphs(myGame));

			// console.log(Game.upComps(myGame));
		});
	});

	describe('cID', () => {
		it('retrieves the current cID ID', () => {
			expect(Game.cID(myGame)).toBe(0);
		});
	});

	describe('column', () => {
		it('returns the nodes in the current cID', () => {
			expect(Game.column(myGame)).toBeArray();
		});
	});

	describe('playerScore', () => {
		it('retrieves the players score', () => {
			// expect(Game.playerScore(myGame)(jane)).toBe(0);
		});
	});
	describe('activeScore', () => {
		it('returns the active pplayers score', () => {
			// expect(Game.activeScore(myGame)).toBe(0);
		});
	});

	// describe('passiveScore', () => {
	// 	it('returns the active pplayers score', () => {
	// 		expect(Game.passiveScore(myGame)).toBe(0);
	// 	});
	// });

	// describe('incScore', () => {
	// 	it('increaeses the players score by one', () => {
	// 		Game.incScore(myGame)(jane);
	// 		expect(Game.activeScore(myGame)).toBe(1);
	// 	});
	// });
	// describe('togglePlayers', () => {
	// 	it('switches the games active player ', () => {
	// 		Game.togglePlayers(myGame);
	// 		expect(Game.active(myGame)).toBe(dick);
	// 	});
	// });

	// describe('setColumn', () => {
	// 	it('returns a node at the specified position', () => {
	// 		Game.setColumn(myGame)(3);
	// 		expect(Game.cID(myGame)).toBe(3);
	// 	});
	// });
	// describe('isAvail', () => {
	// 	it('checks if the current cID has free nodes', () => {
	// 		Game.setColumn(myGame)(0);
	// 		Game.column(myGame).map(Game.choose(myGame));
	// 		expect(Game.isAvail(myGame)).toBeFalse();
	// 	});
	// });

	// describe('choose', () => {
	// 	it('calls the active players claim function', () => {
	// 		expect(Game.choose(myGame)).toBeFunction();
	// 	});
	// });

	// describe('select', () => {
	// 	describe('when the current column is available', () => {
	// 		it('assigns the currentNode to the current player', () => {
	// 			let prev = Game.active(myGame);
	// 			let node = Game.next(myGame);
	// 			let gBoard = myGame.board;
	// 			Game.select(myGame);
	// 			expect(Board.nodesByPlayer(gBoard)(prev)).toContain(node);
	// 		});

	// 		it('toggles the players', () => {
	// 			let prev = Game.active(myGame);
	// 			Game.select(myGame);
	// 			expect(Game.active(myGame)).not.toBe(prev);
	// 		});
	// 	});
	// 	describe('when the current column is not available', () => {
	// 		it('returns undefined', () => {
	// 			Game.column(myGame).map(Game.choose(myGame));
	// 			expect(Game.select(myGame)).toBeUndefined();
	// 		});

	// 		it('does not toggle the players', () => {
	// 			Game.column(myGame).map(Game.choose(myGame));
	// 			let prev = Game.active(myGame);
	// 			Game.select(myGame);
	// 			expect(Game.active(myGame)).toBe(prev);
	// 		});
	// });
	// });
});