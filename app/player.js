const GG = require('game_grid');
const { nodesByPlayer, playerGraph } = require('./board');
const { Grid, Traversals, Connections } = GG;
const { spawn: gSpawn, addNodes } = Grid;
const { components: comps } = Traversals;
const { colComponents: cComps, rowComponents: rComps } = Traversals;
const { posComponents: pComps, negComponents: nComps, } = Traversals;

const spawn = (name = '') => ({ name, score: 0, grid: gSpawn() });

const name = ({ name }) => name;
const grid = ({ grid }) => grid;
const score = ({ score }) => score;
const resetScore = (player) => player.wins = 0;
const incrementScore = ({ score }) => ++score;
const decrementScore = ({ score }) => --score;
const claim = (player = null) => (n) => n && Object.assign(n, { player });
const claimNodes = (player) => (...nodes) =>
	addNodes(grid(player))(...(nodes.map(claim(player))));

const rowComps = (plr) => (graph) => rComps(playerGraph(graph)(plr));
const colComps = (plr) => (graph) => cComps(playerGraph(graph)(plr));
const posComps = (plr) => (graph) => pComps(playerGraph(graph)(plr));
const negComps = (plr) => (graph) => nComps(playerGraph(graph)(plr));

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
	rowComps,
	colComps,
	posComps,
	negComps,
};