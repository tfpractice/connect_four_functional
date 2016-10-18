describe('Game', function() {
	beforeAll(function() {
		console.log('\n.........Game Spec.........');
		PR = Player, B = Board, G = Game;
		graphs = (g) => G.players(g).map(B.playerGraph(G.board(g)));
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
	describe('playerMap', function() {
		it('returns a new set of Players', function() {
			expect(Game.playerMap(myGame.players) instanceof Map).toBeTrue();
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
	describe('togglePlayers', () => {
		it('switches the games active player ', () => {
			Game.togglePlayers(myGame);
			expect(Game.active(myGame)).toBe(dick);
		});
	});
	describe('components', () => {
		it('retrieve a map of player scores', () => {
			expect(Game.components(myGame) instanceof Map).toBeTrue();
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
	describe('setColumn', () => {
		it('returns a node at the specified position', () => {
			Game.setColumn(myGame)(3);
			expect(Game.cID(myGame)).toBe(3);
		});
	});
	describe('select', () => {
		describe('when the current column is available', () => {
			it('assigns the currentNode to the current player', () => {
				let prev = Game.active(myGame);
				let node = Game.next(myGame);
				let gBoard = myGame.board;
				Game.select(myGame);
				for (var i = Board.nodes(myGame.board).length; i >= 0; i--) {
					// console.log(i);
					// console.log(Game.next(myGame));
					if (!Game.next(myGame)) Game.setColumn(myGame)(myGame.CID + 1);
					Game.select(myGame);
				}

				let myComps = Comms.spreadV(Game.components(myGame));

				let myGraphs = graphs(myGame);

				expect(Board.nodesByPlayer(gBoard)(prev)).toContain(node);
			});
			it('toggles the players', () => {
				let prev = Game.active(myGame);
				Game.select(myGame);
				expect(Game.active(myGame)).not.toBe(prev);
			});
		});
		describe('when the current column is not available', () => {
			it('returns undefined', () => {
				Game.column(myGame).map(Player.claim(Game.active(myGame)));
				expect(Game.select(myGame)).toBeUndefined();
			});
			it('does not toggle the players', () => {
				Game.column(myGame).map(Player.claim(Game.active(myGame)));
				let prev = Game.active(myGame);
				Game.select(myGame);
				expect(Game.active(myGame)).toBe(prev);
			});
		});
	});
});