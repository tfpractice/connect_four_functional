!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("turmeric-utils"),require("game_grid")):"function"==typeof define&&define.amd?define("connect_four_functional",["exports","turmeric-utils","game_grid"],r):r(e.connect_four_functional=e.connect_four_functional||{},e.turmericUtils,e.game_grid)}(this,function(e,r,n){"use strict";var t=function(){function e(e,r){var n=[],t=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done)&&(n.push(u.value),!r||n.length!==r);t=!0);}catch(e){o=!0,i=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r.collections.addBinMap,i=r.collections.spread,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(r){return i(e).map(function(e){var n=t(e,2),o=n[0],i=n[1],u=void 0===i?o:i;return[o,r(u)]}).reduce(o,new Map)}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.assign(n.node(e,r),{player:t})},l=function e(r){var n=r.player,e=void 0===n?null:n;return e},c=function(e){var r=e.player,n=void 0===r?null:r;return null==n},f=function(e){var r=e.player;return function(e){var n=e.player;return r===n}},d=Object.freeze({default:a,player:l,isFree:c,samePlayer:f}),p=Object.freeze({Node:d,node:a,kvMap:u});e.default=p,e.Node=d,e.node=a,e.kvMap=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
