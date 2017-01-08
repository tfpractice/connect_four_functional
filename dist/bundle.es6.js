import { collections } from 'turmeric-utils';

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

var addMap = collections.addMap;
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
    }).reduce(addMap, new Map());
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



var index$2 = Object.freeze({
	kvMap: kvMap
});

var require$$0 = ( index$2 && index$2['default'] ) || index$2;

var index = require$$0;

export default index;
//# sourceMappingURL=bundle.es6.js.map
