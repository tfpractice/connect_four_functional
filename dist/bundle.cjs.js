"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var turmericUtils=require("turmeric-utils"),slicedToArray=function(){function r(r,e){var t=[],n=!0,i=!1,a=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(r){i=!0,a=r}finally{try{!n&&u.return&&u.return()}finally{if(i)throw a}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),addMap=turmericUtils.collections.addMap,spread=turmericUtils.collections.spread,kvMap=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return spread(r).map(function(r){var t=slicedToArray(r,2),n=t[0],i=t[1],a=void 0===i?n:i;return[n,e(a)]}).reduce(addMap,new Map)}};exports.kvMap=kvMap;
//# sourceMappingURL=bundle.cjs.js.map
