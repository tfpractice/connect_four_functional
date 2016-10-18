const { Utils } = require('functional_graph_theory');
const Commands = require('./commands');
const Strings = require('./strings');

module.exports = Object.assign({}, Utils, { Commands, Strings });