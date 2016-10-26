const { Utils: { Strings } } = require('game_grid');
const { spread, spreadV, spreadKV, addMap } = require('./commands');

const compString = (set) => '\n' + `${spread(set).join(' => ')}`;
const pairString = ([k, v]) => `${k} :: ${spread(v).map(compString)}`;
const mapString = (coll) => spreadKV(coll).map(pairString);

module.exports = Object.assign({}, Strings, { compString, pairString, mapString });