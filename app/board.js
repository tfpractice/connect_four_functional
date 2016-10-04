const GG = require('game_grid');
const { Grid, GameGraph } = GG;
const { connectAdjacents } = GameGraph;
const spawn = () =>
    connectAdjacents(Grid.spawn(7, 6));

module.exports = { spawn };
