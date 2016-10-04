const { addNodes, spawn: gSpawn } = require('./game_graph');

const spawn = (name) => ({ name, graph: gSpawn(), wins: 0 });
const name = ({ name }) => name;
const graph = ({ graph }) => graph;
const wins = ({ wins }) => wins;
const resetScore = (player) => player.wins = 0;
const incrementScore = (player) => ++player.wins;
const decrementScore = (player) => --player.wins;
const claimCells = ({ graph }) => addNodes(graph);

module.exports = {
	spawn,
	name,
	graph,
	wins,
	resetScore,
	incrementScore,
	decrementScore,
	claimCells,
};