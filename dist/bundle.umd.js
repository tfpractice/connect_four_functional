!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("fenugreek-collections"),require("graph-curry"),require("game_grid")):"function"==typeof define&&define.amd?define("connect_four_functional",["exports","fenugreek-collections","graph-curry","game_grid"],r):r(n.connect_four_functional=n.connect_four_functional||{},n["fenugreek-collections"],n["graph-curry"],n.game_grid)}(this,function(n,r,e,t){"use strict";var u=t.Node.column,o=t.Node.row,i=t.Node.node,c=t.Node.id,f=Object.assign({},i(),{player:null}),a=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.assign({},i(n,r),{player:e})},l=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:f).player;return n},s=function(n){return a(u(n),o(n),l(n))},d=function(n){return function(r){return a(u(r),o(r),n)}},p=function(n){return!!n&&null==l(n)},y=function(n){return function(r){return p(r)?d(n)(r):r}},v=function(n){return function(r){return l(n)===l(r)}},m=Object.freeze({node:a,player:l,copy:s,setPlayer:d,isFree:p,claim:y,unClaim:function(n){return d(null)(n)},samePlayer:v,sameID:function(n){return function(r){return c(n)===c(r)}}}),g={name:"",score:0,id:null},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{name:n,score:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,id:arguments.length>2&&void 0!==arguments[2]?arguments[2]:n}},b=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:g).name;return n},N=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:g).score;return n},P=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:g).id;return n},C=function(n){return function(r){return h(b(r),n,P(r))}},_=C(0),j=Object.freeze({playerInit:g,player:h,name:b,score:N,id:P,copy:function(n){return h(b(n),N(n),P(n))},setName:function(n){return function(r){return h(n,N(r),P(r))}},setID:function(n){return function(r){return h(b(r),N(r),n)}},setScore:C,sameID:function(n){return function(r){return P(n)===P(r)}},resetScore:_,incrementScore:function(n){return C(N(n)+1)(n)},decrementScore:function(n){return C(N(n)-1)(n)},claim:function(n){return y(P(n))}}),x=t.Compare.samePos,S=function(n){return r.spread(n).find(p)},G=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r.filter(n)(v({player:e}))}},I=function(n){return function(e){return r.asSet(e).size>n}},O=function(n){return function(e){return r.some(e)(I(n))}},w=function(n){return function(e){return r.filter(e)(I(n))}},z=function(n){return function(r){return function(e){return r(e)?n:e}}},A=function(n){return z(n)(x(n))},F=function(n){return function(e){return r.map(e)(A(n))}},k=Object.freeze({nextFree:S,hasFree:function(n){return r.some(n)(p)},byPlayer:G,exceeds:I,anyExceed:O,byExcess:w,callIf:function(n){return function(r){return function(e){return r(e)?n(e):e}}},repIf:z,repPos:A,repID:function(n){return z(n)(x(n))},replace:F}),D=function(){function n(n,r){var e=[],t=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){u=!0,o=n}finally{try{!t&&c.return&&c.return()}finally{if(u)throw o}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),q=function(n){if(Array.isArray(n)){for(var r=0,e=Array(n.length);r<n.length;r++)e[r]=n[r];return e}return Array.from(n)},E=e.Graph.graph,W=e.Graph.nodes,M=t.Grid.genNodes,B=t.Components.omniComps,T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return M(n,r).map(s)},H=function(n){return function(r){return G(W(n))(P(r))}},J=Object.freeze({genNodes:T,board:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return E.apply(void 0,q(T(n,r)))},playerNodes:H,playerGraph:function(n){return function(r){return E.apply(void 0,q(H(n)(r)))}},hasWinComp:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return r.some(B(n))(I(e))},winComps:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return w(r)(B(n))}}),K=e.Graph.graph,L=t.Components.omniComps,Q=t.Filter.byCol,R=[h("player0",0,0),h("player1",0,1)],U=T(7,6),V={column:0,nodes:T(),players:R,inPlay:!1,min:3},X=function(){return{players:arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,nodes:arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,column:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,inPlay:arguments.length>3&&void 0!==arguments[3]&&arguments[3],min:arguments.length>4&&void 0!==arguments[4]?arguments[4]:3}},Y=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:V).column;return n},Z=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:V).nodes;return n},$=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:V).inPlay;return n},nn=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:V).min;return n},rn=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:V).players;return n},en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,r=D(n.players,2),e=r[0];r[1];return e},tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,r=D(n.players,2),e=(r[0],r[1]);return e},un=function(n){return function(r){return X(rn(r),n,Y(r),$(r),nn(r))}},on=function(n){return function(r){return X(rn(r),Z(r),Y(r),!!n,nn(r))}},cn=function(n){return function(r){return X(n,Z(r),Y(r),$(r),nn(r))}},fn=function(n){return Q(Z(n))(Y(n))},an=function(n){return S(fn(n))},ln=function(n){return on(!1)(n)},sn=function(n){return $(n)&&!!an(n)},dn=function(n){return!sn(n)},pn=function(n){return cn([tn(n),en(n)])(n)},yn=function(n){return function(r){return G(Z(n))(P(r))}},vn=function(n){return function(r){return K.apply(void 0,q(yn(n)(r)))}},mn=function(n){return function(r){return w(1)(L(vn(n)(r)))}},gn=function(n){return function(r){return O(nn(n))(mn(n)(r))}},hn=function(n){return rn(n).find(gn(n))},bn=function(n){return hn(n)?ln(n):n},Nn=function(n){return F(y(P(en(n)))(an(n)))(Z(n))},Pn=function(n){return dn(n)?n:bn(un(Nn(n))(n))},Cn=Object.freeze({game:X,column:Y,nodes:Z,inPlay:$,min:nn,players:rn,active:en,passive:tn,setNodes:un,setColumn:function(n){return function(r){return X(rn(r),Z(r),n,$(r),nn(r))}},setPlayState:on,setPlayers:cn,setMin:function(n){return function(r){return X(rn(r),Z(r),Y(r),$(r),n)}},board:function(n){return K.apply(void 0,q(Z(n)))},colNodes:fn,next:an,start:function(n){return on(!0)(n)},stop:ln,canPlay:sn,locked:dn,toggleState:function(n){return on(!$(n))(n)},togglePlayers:pn,playerNodes:yn,actNodes:function(n){return yn(n)(en(n))},passNodes:function(n){return yn(n)(tn(n))},playerGraph:vn,actGraph:function(n){return vn(n)(en(n))},passGraph:function(n){return vn(n)(tn(n))},playerComps:mn,actComps:function(n){return mn(n)(en(n))},passComps:function(n){return mn(n)(tn(n))},isWinner:gn,winner:hn,endIfWon:bn,claimSwap:Nn,claimNext:Pn,select:function(n){return dn(n)?n:pn(Pn(n))}});n.Board=J,n.Filter=k,n.Game=Cn,n.Node=m,n.Player=j,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
