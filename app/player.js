const GG = require('game_grid');
const { Player: GP } = GG;

const spawn = (name, color = 'black') =>
	Object.assign(GP.spawn(name), { color, tokens: [] });

module.exports = Object.assign({}, GP, { spawn });