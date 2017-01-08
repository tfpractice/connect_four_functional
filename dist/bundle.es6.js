import { collections } from 'turmeric-utils';
import { node } from 'game_grid';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var addBinMap = collections.addBinMap;
var spread = collections.spread;


var kvMap = function kvMap() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  return function (fn) {
    return spread(map).map(function (_ref) {
      var _ref2 = slicedToArray(_ref, 2),
          k = _ref2[0],
          _ref2$ = _ref2[1],
          v = _ref2$ === undefined ? k : _ref2$;

      return [k, fn(v)];
    }).reduce(addBinMap, new Map());
  };
};

var node$1 = (function () {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var player = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Object.assign(node(c, r), { player: player });
});

var player = function player(_ref) {
  var _ref$player = _ref.player,
      player = _ref$player === undefined ? null : _ref$player;
  return player;
};
var isFree = function isFree(_ref2) {
  var _ref2$player = _ref2.player,
      player = _ref2$player === undefined ? null : _ref2$player;
  return player == null;
};
var samePlayer = function samePlayer(_ref3) {
  var p0 = _ref3.player;
  return function (_ref4) {
    var p1 = _ref4.player;
    return p0 === p1;
  };
};

var node$2 = Object.freeze({
	default: node$1,
	player: player,
	isFree: isFree,
	samePlayer: samePlayer
});

// const { Traversals, Connections } = require('game_grid');
// exports.Connections = Connections;
// exports.Traversals = Traversals;
//
// module.exports.Utils = require('./utils');
// module.exports.Node = require('./node');
// module.exports.Board = require('./board');
// module.exports.Player = require('./player');
// module.exports.Game = require('./game');



var src$1 = Object.freeze({
	Node: node$2,
	node: node$1,
	kvMap: kvMap
});

export { node$2 as Node, node$1 as node, kvMap };export default src$1;
//# sourceMappingURL=bundle.es6.js.map
