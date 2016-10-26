const { Utils } = require('game_grid');
const Commands = require('./commands');
const Strings = require('./strings');

module.exports = Object.assign({}, Utils, { Commands, Strings });