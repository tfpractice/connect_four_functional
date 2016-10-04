const GG = require('game_grid');
const Board = require('./board');
const { Game: GGame, Grid, GameGraph } = GG;
const { connectAdjacents } = GameGraph;
const spawn = (active, passive) =>
	GGame.spawn(active, passive, Board.spawn());
// connectAdjacents(Grid.spawn(7, 6));

module.exports = { spawn };