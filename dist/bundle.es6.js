import { collections } from 'turmeric-utils';
import { colComponents, genNodes, negComponents, node, posComponents, rowComponents } from 'game_grid';

var addMap = collections.addMap;
var get$$1 = collections.get;
var addNodeBin = function addNodeBin(edges, src) {
  return addMap(edges)(src)(new Map(get$$1(edges)(src)));
};

var spreadK = collections.spreadK;
var spawn = function spawn(edges) {
  return new Map(edges);
};
var copy = spawn;
var fromElements$1 = function fromElements() {
  for (var _len = arguments.length, elems = Array(_len), _key = 0; _key < _len; _key++) {
    elems[_key] = arguments[_key];
  }

  return elems.reduce(addNodeBin, copy());
};
var nodes = function nodes(edges) {
  return spreadK(copy(edges));
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
  return player === null;
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

var slicedToArray$1 = function () {
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













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var flatten = collections.flatten;


var flattenBin = function flattenBin() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return flatten(a)(b);
};

var genNodes$1 = function genNodes$$1() {
  var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return genNodes(cols, rows).map(function (n) {
    return node$1(n.column, n.row);
  });
};

var initNodes = function initNodes() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return fromElements$1.apply(undefined, toConsumableArray(genNodes$1(c, r)));
};
var next = function next(nodes$$1) {
  return nodes$$1.find(isFree);
};
var hasFree = function hasFree(nodes$$1) {
  return nodes$$1.some(isFree);
};

var nodesByPlayer = function nodesByPlayer(graph) {
  return function () {
    var player$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return nodes(graph).filter(samePlayer({ player: player$$1 }));
  };
};

var playerGraph = function playerGraph() {
  var gr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  return function (p) {
    return fromElements$1.apply(undefined, toConsumableArray(nodesByPlayer(gr)(p)));
  };
};

var allComps = function allComps(graph) {
  return [colComponents, negComponents, posComponents, rowComponents].map(function (f) {
    return f(graph);
  }).reduce(flattenBin, []);
};

var splitComps = function splitComps(g) {
  return new Map().set('row', rowComponents(g)).set('col', colComponents(g)).set('pos', posComponents(g)).set('neg', negComponents(g));
};

var moreThan = function moreThan(num) {
  return function () {
    var coll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
    return coll.size > num;
  };
};
var winComp = function winComp(graph) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return allComps(graph).some(moreThan(n));
};

//
// module.exports = Object.assign({}, Grid, {
//   spawn,
//   next,
//   hasFree,
//   nodesByPlayer,
//   playerGraph,
//   splitComponents,
//   allComps,
//   winegComp,
// });



var board = Object.freeze({
	default: fromElements$1,
	genNodes: genNodes$1,
	initNodes: initNodes,
	next: next,
	hasFree: hasFree,
	nodesByPlayer: nodesByPlayer,
	playerGraph: playerGraph,
	allComps: allComps,
	splitComps: splitComps,
	moreThan: moreThan,
	winComp: winComp
});

var playerInit = { name: '', score: 0 };
var player$1 = (function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return { name: name, score: score };
});
var name = function name(_ref) {
  var name = _ref.name;
  return name;
};
var score = function score(_ref2) {
  var score = _ref2.score;
  return score;
};
var resetScore = function resetScore(player) {
  return player.wins = 0;
};
var incrementScore = function incrementScore(_ref3) {
  var score = _ref3.score;
  return ++score;
};
var decrementScore = function decrementScore(_ref4) {
  var score = _ref4.score;
  return --score;
};
var claim = function claim() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (n) {
    return n && Object.assign(n, { player: player });
  };
};

var player$2 = Object.freeze({
	playerInit: playerInit,
	default: player$1,
	name: name,
	score: score,
	resetScore: resetScore,
	incrementScore: incrementScore,
	decrementScore: decrementScore,
	claim: claim
});

var addBinMap$1$1 = collections.addBinMap;
var spread$1$1 = collections.spread;


var kvMap = function kvMap() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  return function (fn) {
    return spread$1$1(map).map(function (_ref) {
      var _ref2 = slicedToArray$1(_ref, 2),
          k = _ref2[0],
          _ref2$ = _ref2[1],
          v = _ref2$ === undefined ? k : _ref2$;

      return [k, fn(v)];
    }).reduce(addBinMap$1$1, new Map());
  };
};

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
	Board: board,
	Node: node$2,
	Player: player$2,
	board: fromElements$1,
	node: node$1,
	player: player$1,
	kvMap: kvMap
});

export { board as Board, node$2 as Node, player$2 as Player, fromElements$1 as board, node$1 as node, player$1 as player, kvMap };export default src$1;
//# sourceMappingURL=bundle.es6.js.map
