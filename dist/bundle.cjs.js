"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var turmericUtils=require("turmeric-utils"),game_grid=require("game_grid"),addMap=turmericUtils.collections.addMap,get$$1=turmericUtils.collections.get,addNodeBin=function(e,r){return addMap(e)(r)(new Map(get$$1(e)(r)))},spreadK=turmericUtils.collections.spreadK,spawn=function(e){return new Map(e)},copy=spawn,fromElements$1=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(addNodeBin,copy())},nodes=function(e){return spreadK(copy(e))},node$1=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.assign(game_grid.node(e,r),{player:n})},player=function e(r){var n=r.player,e=void 0===n?null:n;return e},isFree=function(e){var r=e.player,n=void 0===r?null:r;return null===n},samePlayer=function(e){var r=e.player;return function(e){var n=e.player;return r===n}},node$2=Object.freeze({default:node$1,player:player,isFree:isFree,samePlayer:samePlayer}),slicedToArray$1=function(){function e(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,a=e}finally{try{!t&&l.return&&l.return()}finally{if(o)throw a}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)},flatten=turmericUtils.collections.flatten,flattenBin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return flatten(e)(r)},genNodes$1=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return game_grid.genNodes(e,r).map(function(e){return node$1(e.column,e.row)})},initNodes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return fromElements$1.apply(void 0,toConsumableArray(genNodes$1(e,r)))},next=function(e){return e.find(isFree)},hasFree=function(e){return e.some(isFree)},nodesByPlayer=function(e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return nodes(e).filter(samePlayer({player:r}))}},playerGraph=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(r){return fromElements$1.apply(void 0,toConsumableArray(nodesByPlayer(e)(r)))}},allComps=function(e){return[game_grid.colComponents,game_grid.negComponents,game_grid.posComponents,game_grid.rowComponents].map(function(r){return r(e)}).reduce(flattenBin,[])},splitComps=function(e){return(new Map).set("row",game_grid.rowComponents(e)).set("col",game_grid.colComponents(e)).set("pos",game_grid.posComponents(e)).set("neg",game_grid.negComponents(e))},moreThan=function(e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return r.size>e}},winComp=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return allComps(e).some(moreThan(r))},board=Object.freeze({default:fromElements$1,genNodes:genNodes$1,initNodes:initNodes,next:next,hasFree:hasFree,nodesByPlayer:nodesByPlayer,playerGraph:playerGraph,allComps:allComps,splitComps:splitComps,moreThan:moreThan,winComp:winComp}),playerInit={name:"",score:0},player$1=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{name:e,score:r}},name=function e(r){var e=r.name;return e},score=function e(r){var e=r.score;return e},resetScore=function(e){return e.wins=0},incrementScore=function(e){var r=e.score;return++r},decrementScore=function(e){var r=e.score;return--r},claim=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(r){return r&&Object.assign(r,{player:e})}},player$2=Object.freeze({playerInit:playerInit,default:player$1,name:name,score:score,resetScore:resetScore,incrementScore:incrementScore,decrementScore:decrementScore,claim:claim}),addBinMap$1$1=turmericUtils.collections.addBinMap,spread$1$1=turmericUtils.collections.spread,kvMap=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(r){return spread$1$1(e).map(function(e){var n=slicedToArray$1(e,2),t=n[0],o=n[1],a=void 0===o?t:o;return[t,r(a)]}).reduce(addBinMap$1$1,new Map)}},src$1=Object.freeze({Board:board,Node:node$2,Player:player$2,board:fromElements$1,node:node$1,player:player$1,kvMap:kvMap});exports.default=src$1,exports.Board=board,exports.Node=node$2,exports.Player=player$2,exports.board=fromElements$1,exports.node=node$1,exports.player=player$1,exports.kvMap=kvMap;
//# sourceMappingURL=bundle.cjs.js.map
