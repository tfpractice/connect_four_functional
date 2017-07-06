import { asSet, filter, map, some, spread } from 'fenugreek-collections';
import { Graph } from 'graph-curry';
import { Compare, Components, Filter, Grid, Node } from 'game_grid';

var column = Node.column;
var row = Node.row;
var gNode = Node.node;
var id$1 = Node.id;


var defP = Object.assign({}, gNode(), { player: null });

var node = function node(c, r) {
    var player = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.assign({}, gNode(c, r), { player: player });
};

var player$2 = function player() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defP,
        player = _ref.player;

    return player;
};

var copy$1 = function copy(n) {
    return node(column(n), row(n), player$2(n));
};

var setPlayer = function setPlayer(p) {
    return function (n) {
        return node(column(n), row(n), p);
    };
};

var isFree = function isFree(n) {
    return !!n && player$2(n) == null;
};

var claim$1 = function claim(p) {
    return function (n) {
        return isFree(n) ? setPlayer(p)(n) : n;
    };
};
var unClaim = function unClaim(n) {
    return setPlayer(null)(n);
};

var samePlayer = function samePlayer(n0) {
    return function (n1) {
        return player$2(n0) === player$2(n1);
    };
};

var sameID$1 = function sameID(a) {
    return function (b) {
        return id$1(a) === id$1(b);
    };
};

var node$1 = Object.freeze({
	node: node,
	player: player$2,
	copy: copy$1,
	setPlayer: setPlayer,
	isFree: isFree,
	claim: claim$1,
	unClaim: unClaim,
	samePlayer: samePlayer,
	sameID: sameID$1
});

var playerInit = { name: '', score: 0, id: null };

var player = function player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;
  return { name: name, score: score, id: id };
};
var name = function name() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playerInit,
      name = _ref.name;

  return name;
};
var score = function score() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playerInit,
      score = _ref2.score;

  return score;
};
var id = function id() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playerInit,
      id = _ref3.id;

  return id;
};
var copy = function copy(p) {
  return player(name(p), score(p), id(p));
};

var setName = function setName(name) {
  return function (p) {
    return player(name, score(p), id(p));
  };
};
var setID = function setID(id) {
  return function (p) {
    return player(name(p), score(p), id);
  };
};
var setScore = function setScore(score) {
  return function (p) {
    return player(name(p), score, id(p));
  };
};

var hasID = function hasID(i) {
  return function (_ref4) {
    var id = _ref4.id;
    return id === i;
  };
};
var sameID = function sameID(p0) {
  return function (p1) {
    return id(p0) === id(p1);
  };
};
var updatePlayer = function updatePlayer(next) {
  return function (p) {
    return sameID(next)(p) ? Object.assign({}, p, next) : p;
  };
};

var resetScore = setScore(0);
var incrementScore = function incrementScore(p) {
  return setScore(score(p) + 1)(p);
};
var decrementScore = function decrementScore(p) {
  return setScore(score(p) - 1)(p);
};
var claim = function claim(p) {
  return claim$1(id(p));
};



var player$1 = Object.freeze({
	playerInit: playerInit,
	player: player,
	name: name,
	score: score,
	id: id,
	copy: copy,
	setName: setName,
	setID: setID,
	setScore: setScore,
	hasID: hasID,
	sameID: sameID,
	updatePlayer: updatePlayer,
	resetScore: resetScore,
	incrementScore: incrementScore,
	decrementScore: decrementScore,
	claim: claim
});

var samePos = Compare.samePos;


var nextFree = function nextFree(nArr) {
  return spread(nArr).find(isFree);
};
var lastFree = function lastFree(nArr) {
  return spread(nArr).reverse().find(isFree);
};
var hasFree = function hasFree(nArr) {
  return some(nArr)(isFree);
};
var byPlayer = function byPlayer(nArr) {
  return function () {
    var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return filter(nArr)(samePlayer({ player: player }));
  };
};

var exceeds = function exceeds(lim) {
  return function (coll) {
    return asSet(coll).size > lim;
  };
};
var anyExceed = function anyExceed(lim) {
  return function (coll) {
    return some(coll)(exceeds(lim));
  };
};
var byExcess = function byExcess(lim) {
  return function (arrays) {
    return filter(arrays)(exceeds(lim));
  };
};

var callIf = function callIf(fn) {
  return function (boolFn) {
    return function (n) {
      return boolFn(n) ? fn(n) : n;
    };
  };
};
var repIf = function repIf(next) {
  return function (boolFn) {
    return function (n) {
      return boolFn(n) ? next : n;
    };
  };
};
var repPos = function repPos(next) {
  return repIf(next)(samePos(next));
};
var repID = function repID(next) {
  return repIf(next)(samePos(next));
};
var replace = function replace(next) {
  return function (nArr) {
    return map(nArr)(repPos(next));
  };
};

var filter$1 = Object.freeze({
	nextFree: nextFree,
	lastFree: lastFree,
	hasFree: hasFree,
	byPlayer: byPlayer,
	exceeds: exceeds,
	anyExceed: anyExceed,
	byExcess: byExcess,
	callIf: callIf,
	repIf: repIf,
	repPos: repPos,
	repID: repID,
	replace: replace
});

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













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var graph = Graph.graph;
var nodes = Graph.nodes;
var gen = Grid.genNodes;
var omniComps = Components.omniComps;


var genNodes = function genNodes() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return gen(c, r).map(copy$1);
};
var board = function board() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return graph.apply(undefined, toConsumableArray(genNodes(c, r)));
};

var playerNodes = function playerNodes(b) {
  return function (p) {
    return byPlayer(nodes(b))(id(p));
  };
};
var playerGraph = function playerGraph(b) {
  return function (p) {
    return graph.apply(undefined, toConsumableArray(playerNodes(b)(p)));
  };
};

var hasWinComp = function hasWinComp(g) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return some(omniComps(g))(exceeds(n));
};
var winComps = function winComps(g) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return byExcess(n)(omniComps(g));
};



var board$1 = Object.freeze({
	genNodes: genNodes,
	board: board,
	playerNodes: playerNodes,
	playerGraph: playerGraph,
	hasWinComp: hasWinComp,
	winComps: winComps
});

var graph$1 = Graph.graph;
var omniComps$1 = Components.omniComps;
var byCol = Filter.byCol;


var dPlr = [player('player0', 0, 0), player('player1', 0, 1)];
var dNod = genNodes(7, 6);
var init = { column: 0, nodes: genNodes(), players: dPlr, inPlay: false, min: 3 };

var game = function game() {
  var players = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dPlr;
  var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dNod;
  var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var inPlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var min = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
  return { players: players, nodes: nodes, column: column, inPlay: inPlay, min: min };
};

var column$1 = function column() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      column = _ref.column;

  return column;
};
var nodes$1 = function nodes() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      nodes = _ref2.nodes;

  return nodes;
};
var inPlay = function inPlay() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      inPlay = _ref3.inPlay;

  return inPlay;
};
var min = function min() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      min = _ref4.min;

  return min;
};
var players = function players() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      players = _ref5.players;

  return players;
};
var active = function active() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      _ref6$players = slicedToArray(_ref6.players, 2),
      active = _ref6$players[0],
      passive = _ref6$players[1];

  return active;
};
var passive = function passive() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init,
      _ref7$players = slicedToArray(_ref7.players, 2),
      active = _ref7$players[0],
      passive = _ref7$players[1];

  return passive;
};

var setNodes = function setNodes(nArr) {
  return function (g) {
    return game(players(g), nArr, column$1(g), inPlay(g), min(g));
  };
};

var setColumn = function setColumn(col) {
  return function (g) {
    return game(players(g), nodes$1(g), col, inPlay(g), min(g));
  };
};

var setPlayState = function setPlayState(bool) {
  return function (g) {
    return game(players(g), nodes$1(g), column$1(g), !!bool, min(g));
  };
};

var setPlayers = function setPlayers(pArr) {
  return function (g) {
    return game(pArr, nodes$1(g), column$1(g), inPlay(g), min(g));
  };
};

var setMin = function setMin(m) {
  return function (g) {
    return game(players(g), nodes$1(g), column$1(g), inPlay(g), m);
  };
};

var copy$2 = function copy$$1(g) {
  return game(players(g), nodes$1(g), column$1(g), inPlay(g), min(g));
};

var resetGame = function resetGame(g) {
  return game(players(g));
};
var board$2 = function board$$1(g) {
  return graph$1.apply(undefined, toConsumableArray(nodes$1(g)));
};
var colNodes = function colNodes(g) {
  return byCol(nodes$1(g))(column$1(g));
};
var next = function next(g) {
  return lastFree(colNodes(g));
};

var start = function start(g) {
  return setPlayState(true)(g);
};
var stop = function stop(g) {
  return setPlayState(false)(g);
};
var canPlay = function canPlay(g) {
  return inPlay(g) && !!next(g);
};
var locked = function locked(g) {
  return !canPlay(g);
};
var toggleState = function toggleState(g) {
  return setPlayState(!inPlay(g))(g);
};

var togglePlayers = function togglePlayers(g) {
  return setPlayers([passive(g), active(g)])(g);
};
var isActive = function isActive(p) {
  return function (g) {
    return sameID(p)(active(g));
  };
};
var playerNodes$1 = function playerNodes$$1(g) {
  return function (p) {
    return byPlayer(nodes$1(g))(id(p));
  };
};
var actNodes = function actNodes(g) {
  return playerNodes$1(g)(active(g));
};
var passNodes = function passNodes(g) {
  return playerNodes$1(g)(passive(g));
};

var playerGraph$1 = function playerGraph$$1(g) {
  return function (p) {
    return graph$1.apply(undefined, toConsumableArray(playerNodes$1(g)(p)));
  };
};
var actGraph = function actGraph(g) {
  return playerGraph$1(g)(active(g));
};
var passGraph = function passGraph(g) {
  return playerGraph$1(g)(passive(g));
};

var playerComps = function playerComps(g) {
  return function (p) {
    return byExcess(1)(omniComps$1(playerGraph$1(g)(p)));
  };
};
var actComps = function actComps(g) {
  return playerComps(g)(active(g));
};
var passComps = function passComps(g) {
  return playerComps(g)(passive(g));
};

var isWinner = function isWinner(g) {
  return function (p) {
    return anyExceed(min(g))(playerComps(g)(p));
  };
};
var winner = function winner(g) {
  return players(g).find(isWinner(g));
};
var endIfWon = function endIfWon(g) {
  return winner(g) ? stop(g) : g;
};

var claimSwap = function claimSwap(g) {
  return replace(claim$1(id(active(g)))(next(g)))(nodes$1(g));
};
var claimNext = function claimNext(g) {
  return locked(g) ? g : endIfWon(setNodes(claimSwap(g))(g));
};

var select = function select(g) {
  return locked(g) ? g : togglePlayers(claimNext(g));
};

var playerByID = function playerByID(i) {
  return function (g) {
    return players(g).find(hasID(i));
  };
};
var findPlr = function findPlr(p) {
  return function (g) {
    return players(g).find(sameID(p));
  };
};
var hasPlr = function hasPlr(p) {
  return function (g) {
    return players(g).some(sameID(p));
  };
};
var mendPlr = function mendPlr(p) {
  return function (g) {
    return setPlayers(players(g).map(updatePlayer(p)))(g);
  };
};
var pushPlr = function pushPlr(p) {
  return function (g) {
    return setPlayers(players(g).concat(p))(g);
  };
};

// export const canPlay
// export const claimNode = p=>g=> !isActive(p)(g)? g:setPlayers()
// export const isActive=player=>game=>id



var game$1 = Object.freeze({
	game: game,
	column: column$1,
	nodes: nodes$1,
	inPlay: inPlay,
	min: min,
	players: players,
	active: active,
	passive: passive,
	setNodes: setNodes,
	setColumn: setColumn,
	setPlayState: setPlayState,
	setPlayers: setPlayers,
	setMin: setMin,
	copy: copy$2,
	resetGame: resetGame,
	board: board$2,
	colNodes: colNodes,
	next: next,
	start: start,
	stop: stop,
	canPlay: canPlay,
	locked: locked,
	toggleState: toggleState,
	togglePlayers: togglePlayers,
	isActive: isActive,
	playerNodes: playerNodes$1,
	actNodes: actNodes,
	passNodes: passNodes,
	playerGraph: playerGraph$1,
	actGraph: actGraph,
	passGraph: passGraph,
	playerComps: playerComps,
	actComps: actComps,
	passComps: passComps,
	isWinner: isWinner,
	winner: winner,
	endIfWon: endIfWon,
	claimSwap: claimSwap,
	claimNext: claimNext,
	select: select,
	playerByID: playerByID,
	findPlr: findPlr,
	hasPlr: hasPlr,
	mendPlr: mendPlr,
	pushPlr: pushPlr
});

export { board$1 as Board, filter$1 as Filter, game$1 as Game, node$1 as Node, player$1 as Player };
//# sourceMappingURL=bundle.es6.js.map
