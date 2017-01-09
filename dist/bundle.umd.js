!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("turmeric-utils"),require("game_grid")):"function"==typeof define&&define.amd?define("connect_four_functional",["exports","turmeric-utils","game_grid"],e):e(n.connect_four_functional=n.connect_four_functional||{},n.turmericUtils,n.game_grid)}(this,function(n,e,r){"use strict";var t=e.collections.addMap,o=e.collections.get,u=function(n,e){return t(n)(e)(new Map(o(n)(e)))},i=e.collections.spreadK,a=function(n){return new Map(n)},c=a,l=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.reduce(u,c())},s=function(n){return i(c(n))},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.assign(r.node(n,e),{player:t})},d=function n(e){var r=e.player,n=void 0===r?null:r;return n},p=function(n){var e=n.player,r=void 0===e?null:e;return null===r},v=function(n){var e=n.player;return function(n){var r=n.player;return e===r}},y=Object.freeze({default:f,player:d,isFree:p,samePlayer:v}),m=function(){function n(n,e){var r=[],t=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(n){o=!0,u=n}finally{try{!t&&a.return&&a.return()}finally{if(o)throw u}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(n){if(Array.isArray(n)){for(var e=0,r=Array(n.length);e<n.length;e++)r[e]=n[e];return r}return Array.from(n)},h=e.collections.flatten,w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return h(n)(e)},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return r.genNodes(n,e).map(function(n){return f(n.column,n.row)})},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return l.apply(void 0,g(b(n,e)))},M=function(n){return n.find(p)},j=function(n){return n.some(p)},O=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s(n).filter(v({player:e}))}},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return l.apply(void 0,g(O(n)(e)))}},I=function(n){return[r.colComponents,r.negComponents,r.posComponents,r.rowComponents].map(function(e){return e(n)}).reduce(w,[])},A=function(n){return(new Map).set("row",r.rowComponents(n)).set("col",r.colComponents(n)).set("pos",r.posComponents(n)).set("neg",r.negComponents(n))},D=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return e.size>n}},P=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return I(n).some(D(e))},S=Object.freeze({default:l,genNodes:b,initNodes:C,next:M,hasFree:j,nodesByPlayer:O,playerGraph:_,allComps:I,splitComps:A,moreThan:D,winComp:P}),x={name:"",score:0},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{name:n,score:e}},B=function n(e){var n=e.name;return n},G=function n(e){var n=e.score;return n},N=function(n){return n.wins=0},k=function(n){var e=n.score;return++e},q=function(n){var e=n.score;return--e},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(e){return e&&Object.assign(e,{player:n})}},K=Object.freeze({playerInit:x,default:z,name:B,score:G,resetScore:N,incrementScore:k,decrementScore:q,claim:F}),T=e.collections.addBinMap,E=e.collections.spread,U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return E(n).map(function(n){var r=m(n,2),t=r[0],o=r[1],u=void 0===o?t:o;return[t,e(u)]}).reduce(T,new Map)}},V=e.collections.spreadKV,W=function(){return{cID:0,nodes:b(),players:[z("player0"),z("player1")]}},H=function(n){var e=n.cID,r=void 0===e?0:e,t=n.nodes,o=void 0===t?b():t,u=n.players,i=void 0===u?W().players:u;return{cID:r,nodes:o,players:i}},J=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W();return Object.assign({},e,n)}},L=function n(e){var r=e.cID,n=void 0===r?0:r;return n},Q=function(n){var e=n.nodes;return l.apply(void 0,g(e))},R=function n(e){var n=e.players;return n},X=function n(e){var r=m(e.players,2),n=r[0];r[1];return n},Y=function n(e){var r=m(e.players,2),n=(r[0],r[1]);return n},Z=function(n){var e=n.cID,t=n.nodes;return r.nodesByColumn(Q({nodes:t}))(e)},$=function(n){return M(Z(n))},nn=function(n){return new Map(V(new Set(n)))},en=function(n){var e=n.players,r=n.nodes;return U(nn(e))(_(Q({nodes:r})))},rn=function(n){var e=m(n.players,2),r=e[0],t=(e[1],n.nodes);return _(Q({nodes:t}))(r)},tn=function(n){var e=m(n.players,2),r=(e[0],e[1],n.nodes);return _(Q({nodes:r}))(pas)},on=function(n){return U(en(n))(A)},un=function(n){return I(rn(n))},an=function(n){return I(tn(n))},cn=function(n){var e,r=n.players;return e=[r[0],r[1]],r[1]=e[0],r[0]=e[1],e},ln=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object.assign(n,{cID:e})}},sn=function(n){return F(X(n))($(n))&&cn(n)},fn=function(n){return function(e){return P(_(n)(e),3)}},dn=function(n){var e=n.players,r=n.nodes;return e.find(fn(Q({nodes:r})))},pn=Object.freeze({default:H,setPlayers:J,cID:L,board:Q,players:R,active:X,passive:Y,column:Z,next:$,playerMap:nn,graphs:en,actGraph:rn,passGraph:tn,components:on,actComps:un,passComps:an,togglePlayers:cn,setColumn:ln,select:sn,hasWinComp:fn,winner:dn}),vn=Object.freeze({Board:S,Game:pn,Node:y,Player:K,board:l,node:f,player:z,game:H,kvMap:U});n.default=vn,n.Board=S,n.Game=pn,n.Node=y,n.Player=K,n.board=l,n.node=f,n.player=z,n.game=H,n.kvMap=U,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
