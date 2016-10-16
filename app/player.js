const GG = require('game_grid');
const { Grid, Traversals, Connections } = GG;
const { spawn: gSpawn, addNodes } = Grid;

const spawn = (name = '', color = 'black') =>
	({ name, color, tokens: [], score: 0, grid: gSpawn() });

const name = ({ name }) => name;
const grid = ({ grid }) => grid;
const score = ({ score }) => score;
const resetScore = (player) => player.wins = 0;
const incrementScore = ({ score }) => ++score;
const decrementScore = ({ score }) => --score;
const claimNodes = ({ grid }) => (...nodes) =>
	addNodes(grid)(...nodes);

module.exports = {
	spawn,
	name,
	grid,
	score,
	resetScore,
	incrementScore,
	decrementScore,
	claimNodes,
};