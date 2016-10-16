const GG = require('game_grid');
const { Grid, Traversals, Connections } = GG;
const { spawn: gSpawn, addNodes } = Grid;

const spawn = (name = '', color = 'black') =>
	({ name, color, score: 0, grid: gSpawn() });

const name = ({ name }) => name;
const grid = ({ grid }) => grid;
const score = ({ score }) => score;
const resetScore = (player) => player.wins = 0;
const incrementScore = ({ score }) => ++score;
const decrementScore = ({ score }) => --score;
const claim = (player = null) => (node) => Object.assign(node, { player });
const claimNodes = (player) => (...nodes) =>
	addNodes(grid(player))(...(nodes.map(claim(player))));

module.exports = {
	spawn,
	name,
	grid,
	score,
	resetScore,
	incrementScore,
	decrementScore,
	claim,
	claimNodes,
};