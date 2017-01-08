// const { Traversals, Connections } = require('game_grid');
// exports.Connections = Connections;
// exports.Traversals = Traversals;
//
// module.exports.Utils = require('./utils');
// module.exports.Node = require('./node');
// module.exports.Board = require('./board');
// module.exports.Player = require('./player');
// module.exports.Game = require('./game');
import * as Board from './board';
import * as Node from './node';
import * as Player from './player';

export * from './utils';
export { default as board, } from './board';
export { default as node, } from './node';
export { default as player, } from './player';
export { Board, Node, Player, };
