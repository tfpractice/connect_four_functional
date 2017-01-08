const spawn = (name = '') => ({ name, score: 0 });
const name = ({ name }) => name;
const score = ({ score }) => score;
const resetScore = (player) => player.wins = 0;
const incrementScore = ({ score }) => ++score;
const decrementScore = ({ score }) => --score;
const claim = (player = null) => (n) => n && Object.assign(n, { player });

module.exports = {
	spawn,
	name,
	score,
	resetScore,
	incrementScore,
	decrementScore,
	claim,
};