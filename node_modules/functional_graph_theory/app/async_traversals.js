const traversals = require('traversals');
const { dfs, bfs, dijkstra, components } = traversals;

const dfsAsync = (graph) => (iNode) =>
	new Promise((resolve, reject) => {
		resolve(dfs(graph)(iNode));
	});
const bfsAsync = (graph) => (iNode) =>
	new Promise((resolve, reject) => {
		resolve(bfs(graph)(iNode));
	});
const dijkstraAsync = (graph) => (iNode) =>
	new Promise((resolve, reject) => {
		resolve(dijkstra(graph)(iNode));
	});
const componentsAsync = (graph) =>
	new Promise((resolve, reject) => {
		resolve(components(graph));
	});

module.exports = { dfsAsync, bfsAsync, dijkstraAsync, componentsAsync };