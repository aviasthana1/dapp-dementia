(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var fd={exports:{}},Fa={},pd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function lE(){if(gg)return ke;gg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,G={};function z(O,W,fe){this.props=O,this.context=W,this.refs=G,this.updater=fe||j}z.prototype.isReactComponent={},z.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function de(){}de.prototype=z.prototype;function oe(O,W,fe){this.props=O,this.context=W,this.refs=G,this.updater=fe||j}var se=oe.prototype=new de;se.constructor=oe,H(se,z.prototype),se.isPureReactComponent=!0;var ue=Array.isArray,Ne=Object.prototype.hasOwnProperty,he={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(O,W,fe){var Se,Re={},be=null,Me=null;if(W!=null)for(Se in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(be=""+W.key),W)Ne.call(W,Se)&&!P.hasOwnProperty(Se)&&(Re[Se]=W[Se]);var Fe=arguments.length-2;if(Fe===1)Re.children=fe;else if(1<Fe){for(var $e=Array(Fe),Tt=0;Tt<Fe;Tt++)$e[Tt]=arguments[Tt+2];Re.children=$e}if(O&&O.defaultProps)for(Se in Fe=O.defaultProps,Fe)Re[Se]===void 0&&(Re[Se]=Fe[Se]);return{$$typeof:r,type:O,key:be,ref:Me,props:Re,_owner:he.current}}function C(O,W){return{$$typeof:r,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return W[fe]})}var V=/\/+/g;function k(O,W){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):W.toString(36)}function it(O,W,fe,Se,Re){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(be){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Re=Re(Me),O=Se===""?"."+k(Me,0):Se,ue(Re)?(fe="",O!=null&&(fe=O.replace(V,"$&/")+"/"),it(Re,W,fe,"",function(Tt){return Tt})):Re!=null&&(N(Re)&&(Re=C(Re,fe+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+O)),W.push(Re)),1;if(Me=0,Se=Se===""?".":Se+":",ue(O))for(var Fe=0;Fe<O.length;Fe++){be=O[Fe];var $e=Se+k(be,Fe);Me+=it(be,W,fe,$e,Re)}else if($e=R(O),typeof $e=="function")for(O=$e.call(O),Fe=0;!(be=O.next()).done;)be=be.value,$e=Se+k(be,Fe++),Me+=it(be,W,fe,$e,Re);else if(be==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function Vt(O,W,fe){if(O==null)return O;var Se=[],Re=0;return it(O,Se,"","",function(be){return W.call(fe,be,Re++)}),Se}function Lt(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},Z={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Z,ReactCurrentOwner:he};function re(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Vt,forEach:function(O,W,fe){Vt(O,function(){W.apply(this,arguments)},fe)},count:function(O){var W=0;return Vt(O,function(){W++}),W},toArray:function(O){return Vt(O,function(W){return W})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=z,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=oe,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ke.act=re,ke.cloneElement=function(O,W,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=H({},O.props),Re=O.key,be=O.ref,Me=O._owner;if(W!=null){if(W.ref!==void 0&&(be=W.ref,Me=he.current),W.key!==void 0&&(Re=""+W.key),O.type&&O.type.defaultProps)var Fe=O.type.defaultProps;for($e in W)Ne.call(W,$e)&&!P.hasOwnProperty($e)&&(Se[$e]=W[$e]===void 0&&Fe!==void 0?Fe[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Fe=Array($e);for(var Tt=0;Tt<$e;Tt++)Fe[Tt]=arguments[Tt+2];Se.children=Fe}return{$$typeof:r,type:O.type,key:Re,ref:be,props:Se,_owner:Me}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ke.createElement=S,ke.createFactory=function(O){var W=S.bind(null,O);return W.type=O,W},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:p,render:O}},ke.isValidElement=N,ke.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Lt}},ke.memo=function(O,W){return{$$typeof:_,type:O,compare:W===void 0?null:W}},ke.startTransition=function(O){var W=Z.transition;Z.transition={};try{O()}finally{Z.transition=W}},ke.unstable_act=re,ke.useCallback=function(O,W){return Be.current.useCallback(O,W)},ke.useContext=function(O){return Be.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},ke.useEffect=function(O,W){return Be.current.useEffect(O,W)},ke.useId=function(){return Be.current.useId()},ke.useImperativeHandle=function(O,W,fe){return Be.current.useImperativeHandle(O,W,fe)},ke.useInsertionEffect=function(O,W){return Be.current.useInsertionEffect(O,W)},ke.useLayoutEffect=function(O,W){return Be.current.useLayoutEffect(O,W)},ke.useMemo=function(O,W){return Be.current.useMemo(O,W)},ke.useReducer=function(O,W,fe){return Be.current.useReducer(O,W,fe)},ke.useRef=function(O){return Be.current.useRef(O)},ke.useState=function(O){return Be.current.useState(O)},ke.useSyncExternalStore=function(O,W,fe){return Be.current.useSyncExternalStore(O,W,fe)},ke.useTransition=function(){return Be.current.useTransition()},ke.version="18.3.1",ke}var yg;function af(){return yg||(yg=1,pd.exports=lE()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function uE(){if(_g)return Fa;_g=1;var r=af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var w,T={},R=null,j=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(p&&p.defaultProps)for(w in g=p.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:p,key:R,ref:j,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var vg;function cE(){return vg||(vg=1,fd.exports=uE()),fd.exports}var I=cE(),Ou={},md={exports:{}},sn={},gd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function hE(){return wg||(wg=1,(function(r){function e(Z,me){var re=Z.length;Z.push(me);e:for(;0<re;){var O=re-1>>>1,W=Z[O];if(0<o(W,me))Z[O]=me,Z[re]=W,re=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var me=Z[0],re=Z.pop();if(re!==me){Z[0]=re;e:for(var O=0,W=Z.length,fe=W>>>1;O<fe;){var Se=2*(O+1)-1,Re=Z[Se],be=Se+1,Me=Z[be];if(0>o(Re,re))be<W&&0>o(Me,Re)?(Z[O]=Me,Z[be]=re,O=be):(Z[O]=Re,Z[Se]=re,O=Se);else if(be<W&&0>o(Me,re))Z[O]=Me,Z[be]=re,O=be;else break e}}return me}function o(Z,me){var re=Z.sortIndex-me.sortIndex;return re!==0?re:Z.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],w=1,T=null,R=3,j=!1,H=!1,G=!1,z=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(Z){for(var me=t(_);me!==null;){if(me.callback===null)s(_);else if(me.startTime<=Z)s(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function ue(Z){if(G=!1,se(Z),!H)if(t(g)!==null)H=!0,Lt(Ne);else{var me=t(_);me!==null&&Be(ue,me.startTime-Z)}}function Ne(Z,me){H=!1,G&&(G=!1,de(S),S=-1),j=!0;var re=R;try{for(se(me),T=t(g);T!==null&&(!(T.expirationTime>me)||Z&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,R=T.priorityLevel;var W=O(T.expirationTime<=me);me=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),se(me)}else s(g);T=t(g)}if(T!==null)var fe=!0;else{var Se=t(_);Se!==null&&Be(ue,Se.startTime-me),fe=!1}return fe}finally{T=null,R=re,j=!1}}var he=!1,P=null,S=-1,C=5,N=-1;function D(){return!(r.unstable_now()-N<C)}function V(){if(P!==null){var Z=r.unstable_now();N=Z;var me=!0;try{me=P(!0,Z)}finally{me?k():(he=!1,P=null)}}else he=!1}var k;if(typeof oe=="function")k=function(){oe(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Vt=it.port2;it.port1.onmessage=V,k=function(){Vt.postMessage(null)}}else k=function(){z(V,0)};function Lt(Z){P=Z,he||(he=!0,k())}function Be(Z,me){S=z(function(){Z(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){H||j||(H=!0,Lt(Ne))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var me=3;break;default:me=R}var re=R;R=me;try{return Z()}finally{R=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=R;R=Z;try{return me()}finally{R=re}},r.unstable_scheduleCallback=function(Z,me,re){var O=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,Z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=re+W,Z={id:w++,callback:me,priorityLevel:Z,startTime:re,expirationTime:W,sortIndex:-1},re>O?(Z.sortIndex=re,e(_,Z),t(g)===null&&Z===t(_)&&(G?(de(S),S=-1):G=!0,Be(ue,re-O))):(Z.sortIndex=W,e(g,Z),H||j||(H=!0,Lt(Ne))),Z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(Z){var me=R;return function(){var re=R;R=me;try{return Z.apply(this,arguments)}finally{R=re}}}})(yd)),yd}var Eg;function dE(){return Eg||(Eg=1,gd.exports=hE()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function fE(){if(Tg)return sn;Tg=1;var r=af(),e=dE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function G(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new G(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function oe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(de,oe);z[i]=new G(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(de,oe);z[i]=new G(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(de,oe);z[i]=new G(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function se(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(H(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ue=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),he=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),Z=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var fe=!1;function Se(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,A=m.length-1;1<=v&&0<=A&&d[v]!==m[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==m[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==m[A]){var x=`
`+d[v].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=v&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case he:return"Portal";case C:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case it:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Vt:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case Lt:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Tt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function yr(n){n._valueTracker||(n._valueTracker=Tt(n))}function ks(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Fi(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Cs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ho(n,i){i=i.checked,i!=null&&se(n,"checked",i,!1)}function qo(n,i){Ho(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xs(n,i.type,a):i.hasOwnProperty("defaultValue")&&xs(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function vl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xs(n,i,a){(i!=="number"||Hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _r=Array.isArray;function vr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Wo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ps(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_r(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function Ns(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Go(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?mt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var wr,Ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=wr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(n){ji.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ui[i]=Ui[n]})});function Qo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ui.hasOwnProperty(n)&&Ui[n]?(""+i).trim():i+"px"}function Xo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Yo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(n,i){if(i){if(Yo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Zo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function bs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ds=null,vn=null,Qn=null;function Os(n){if(n=Ia(n)){if(typeof Ds!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ql(i),Ds(n.stateNode,n.type,i))}}function Xn(n){vn?Qn?Qn.push(n):Qn=[n]:vn=n}function ea(){if(vn){var n=vn,i=Qn;if(Qn=vn=null,Os(n),i)for(n=0;n<i.length;n++)Os(i[n])}}function zi(n,i){return n(i)}function ta(){}var Er=!1;function na(n,i,a){if(Er)return n(i,a);Er=!0;try{return zi(n,i,a)}finally{Er=!1,(vn!==null||Qn!==null)&&(ta(),ea())}}function st(n,i){var a=n.stateNode;if(a===null)return null;var c=Ql(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Vs=!1;if(p)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Vs=!1}function $i(n,i,a,c,d,m,v,A,x){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(Q){this.onError(Q)}}var Hi=!1,Ls=null,bn=!1,ra=null,Bc={onError:function(n){Hi=!0,Ls=n}};function Ms(n,i,a,c,d,m,v,A,x){Hi=!1,Ls=null,$i.apply(Bc,arguments)}function wl(n,i,a,c,d,m,v,A,x){if(Ms.apply(this,arguments),Hi){if(Hi){var U=Ls;Hi=!1,Ls=null}else throw Error(t(198));bn||(bn=!0,ra=U)}}function Dn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function On(n){if(Dn(n)!==n)throw Error(t(188))}function El(n){var i=n.alternate;if(!i){if(i=Dn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return On(d),n;if(m===c)return On(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=m;break}if(A===c){v=!0,c=d,a=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===a){v=!0,a=m,c=d;break}if(A===c){v=!0,c=m,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ia(n){return n=El(n),n!==null?Fs(n):null}function Fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Fs(n);if(i!==null)return i;n=n.sibling}return null}var Us=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Tl=e.unstable_shouldYield,zc=e.unstable_requestPaint,He=e.unstable_now,Il=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Sl=e.unstable_IdlePriority,Gi=null,un=null;function Al(n){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:kl,aa=Math.log,Rl=Math.LN2;function kl(n){return n>>>=0,n===0?32:31-(aa(n)/Rl|0)|0}var js=64,Bs=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ki(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Gr(A):(m&=v,m!==0&&(c=Gr(m)))}else v=a&~d,v!==0?c=Gr(v):m!==0&&(c=Gr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-qt(i),d=1<<a,c|=n[a],i&=~d;return c}function $c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-qt(m),A=1<<v,x=d[v];x===-1?((A&a)===0||(A&c)!==0)&&(d[v]=$c(A,i)):x<=i&&(n.expiredLanes|=A),m&=~A}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qi(){var n=js;return js<<=1,(js&4194240)===0&&(js=64),n}function Kr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-qt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-qt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Xr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-qt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Yr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Cl,zs,xl,Pl,Nl,la=!1,Yn=[],Ct=null,Vn=null,Ln=null,Jr=new Map,En=new Map,Jn=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Jr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(i.pointerId)}}function Yt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ia(i),i!==null&&zs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function qc(n,i,a,c,d){switch(i){case"focusin":return Ct=Yt(Ct,n,i,a,c,d),!0;case"dragenter":return Vn=Yt(Vn,n,i,a,c,d),!0;case"mouseover":return Ln=Yt(Ln,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Jr.set(m,Yt(Jr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,En.set(m,Yt(En.get(m)||null,n,i,a,c,d)),!0}return!1}function Dl(n){var i=es(n.target);if(i!==null){var a=Dn(i);if(a!==null){if(i=a.tag,i===13){if(i=qi(a),i!==null){n.blockedOn=i,Nl(n.priority,function(){xl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ir(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$s(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Bi=c,a.target.dispatchEvent(c),Bi=null}else return i=Ia(a),i!==null&&zs(i),n.blockedOn=a,!1;i.shift()}return!0}function Xi(n,i,a){Ir(n)&&a.delete(i)}function Ol(){la=!1,Ct!==null&&Ir(Ct)&&(Ct=null),Vn!==null&&Ir(Vn)&&(Vn=null),Ln!==null&&Ir(Ln)&&(Ln=null),Jr.forEach(Xi),En.forEach(Xi)}function Mn(n,i){n.blockedOn===i&&(n.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ol)))}function Fn(n){function i(d){return Mn(d,n)}if(0<Yn.length){Mn(Yn[0],n);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&Mn(Ct,n),Vn!==null&&Mn(Vn,n),Ln!==null&&Mn(Ln,n),Jr.forEach(i),En.forEach(i),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Dl(a),a.blockedOn===null&&Jn.shift()}var Sr=ue.ReactCurrentBatchConfig,Zr=!0;function Xe(n,i,a,c){var d=Pe,m=Sr.transition;Sr.transition=null;try{Pe=1,ua(n,i,a,c)}finally{Pe=d,Sr.transition=m}}function Wc(n,i,a,c){var d=Pe,m=Sr.transition;Sr.transition=null;try{Pe=4,ua(n,i,a,c)}finally{Pe=d,Sr.transition=m}}function ua(n,i,a,c){if(Zr){var d=$s(n,i,a,c);if(d===null)rh(n,i,c,Yi,a),bl(n,c);else if(qc(d,n,i,a,c))c.stopPropagation();else if(bl(n,c),i&4&&-1<Hc.indexOf(n)){for(;d!==null;){var m=Ia(d);if(m!==null&&Cl(m),m=$s(n,i,a,c),m===null&&rh(n,i,c,Yi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else rh(n,i,c,null,a)}}var Yi=null;function $s(n,i,a,c){if(Yi=null,n=bs(c),n=es(n),n!==null)if(i=Dn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Yi=n,null}function ca(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Il()){case Wi:return 1;case Wr:return 4;case wn:case oa:return 16;case Sl:return 536870912;default:return 16}default:return 16}}var hn=null,Hs=null,Jt=null;function ha(){if(Jt)return Jt;var n,i=Hs,a=i.length,c,d="value"in hn?hn.value:hn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Jt=d.slice(n,1<c?1-c:void 0)}function qs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function da(){return!1}function xt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:da,this.isPropagationStopped=da,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=xt(Un),er=re({},Un,{view:0,detail:0}),Gc=xt(er),Gs,Ar,ei,Ji=re({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(Gs=n.screenX-ei.screenX,Ar=n.screenY-ei.screenY):Ar=Gs=0,ei=n),Gs)},movementY:function(n){return"movementY"in n?n.movementY:Ar}}),Ks=xt(Ji),fa=re({},Ji,{dataTransfer:0}),Vl=xt(fa),Qs=re({},er,{relatedTarget:0}),Xs=xt(Qs),Ll=re({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=xt(Ll),Ml=re({},Un,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fl=xt(Ml),Ul=re({},Un,{data:0}),pa=xt(Ul),Ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jl[n])?!!i[n]:!1}function tr(){return Bl}var u=re({},er,{key:function(n){if(n.key){var i=Ys[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(n){return n.type==="keypress"?qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=xt(u),y=re({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=xt(y),L=re({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),B=xt(L),J=re({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=xt(J),yt=re({},Ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=xt(yt),It=[9,13,27,32],ut=p&&"CompositionEvent"in window,Tn=null;p&&"documentMode"in document&&(Tn=document.documentMode);var dn=p&&"TextEvent"in window&&!Tn,Zi=p&&(!ut||Tn&&8<Tn&&11>=Tn),Js=" ",cp=!1;function hp(n,i){switch(n){case"keyup":return It.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Zs=!1;function sw(n,i){switch(n){case"compositionend":return dp(i);case"keypress":return i.which!==32?null:(cp=!0,Js);case"textInput":return n=i.data,n===Js&&cp?null:n;default:return null}}function ow(n,i){if(Zs)return n==="compositionend"||!ut&&hp(n,i)?(n=ha(),Jt=Hs=hn=null,Zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zi&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aw[n.type]:i==="textarea"}function pp(n,i,a,c){Xn(c),i=Wl(i,"onChange"),0<i.length&&(a=new Ws("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ma=null,ga=null;function lw(n){bp(n,0)}function zl(n){var i=io(n);if(ks(i))return n}function uw(n,i){if(n==="change")return i}var mp=!1;if(p){var Kc;if(p){var Qc="oninput"in document;if(!Qc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Qc=typeof gp.oninput=="function"}Kc=Qc}else Kc=!1;mp=Kc&&(!document.documentMode||9<document.documentMode)}function yp(){ma&&(ma.detachEvent("onpropertychange",_p),ga=ma=null)}function _p(n){if(n.propertyName==="value"&&zl(ga)){var i=[];pp(i,ga,n,bs(n)),na(lw,i)}}function cw(n,i,a){n==="focusin"?(yp(),ma=i,ga=a,ma.attachEvent("onpropertychange",_p)):n==="focusout"&&yp()}function hw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zl(ga)}function dw(n,i){if(n==="click")return zl(i)}function fw(n,i){if(n==="input"||n==="change")return zl(i)}function pw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var jn=typeof Object.is=="function"?Object.is:pw;function ya(n,i){if(jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!jn(n[d],i[d]))return!1}return!0}function vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wp(n,i){var a=vp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function Ep(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ep(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Tp(){for(var n=window,i=Hr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Hr(n.document)}return i}function Xc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mw(n){var i=Tp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ep(a.ownerDocument.documentElement,a)){if(c!==null&&Xc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=wp(a,m);var v=wp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gw=p&&"documentMode"in document&&11>=document.documentMode,eo=null,Yc=null,_a=null,Jc=!1;function Ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||eo==null||eo!==Hr(c)||(c=eo,"selectionStart"in c&&Xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Wl(Yc,"onSelect"),0<c.length&&(i=new Ws("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=eo)))}function $l(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var to={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},Zc={},Sp={};p&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Hl(n){if(Zc[n])return Zc[n];if(!to[n])return n;var i=to[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Sp)return Zc[n]=i[a];return n}var Ap=Hl("animationend"),Rp=Hl("animationiteration"),kp=Hl("animationstart"),Cp=Hl("transitionend"),xp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(n,i){xp.set(n,i),l(i,[n])}for(var eh=0;eh<Pp.length;eh++){var th=Pp[eh],yw=th.toLowerCase(),_w=th[0].toUpperCase()+th.slice(1);ti(yw,"on"+_w)}ti(Ap,"onAnimationEnd"),ti(Rp,"onAnimationIteration"),ti(kp,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Np(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,wl(c,i,void 0,n),n.currentTarget=null}function bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var A=c[v],x=A.instance,U=A.currentTarget;if(A=A.listener,x!==m&&d.isPropagationStopped())break e;Np(d,A,U),m=x}else for(v=0;v<c.length;v++){if(A=c[v],x=A.instance,U=A.currentTarget,A=A.listener,x!==m&&d.isPropagationStopped())break e;Np(d,A,U),m=x}}}if(bn)throw n=ra,bn=!1,ra=null,n}function Ge(n,i){var a=i[uh];a===void 0&&(a=i[uh]=new Set);var c=n+"__bubble";a.has(c)||(Dp(i,n,2,!1),a.add(c))}function nh(n,i,a){var c=0;i&&(c|=4),Dp(a,n,c,i)}var ql="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[ql]){n[ql]=!0,s.forEach(function(a){a!=="selectionchange"&&(vw.has(a)||nh(a,!1,n),nh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ql]||(i[ql]=!0,nh("selectionchange",!1,i))}}function Dp(n,i,a,c){switch(ca(i)){case 1:var d=Xe;break;case 4:d=Wc;break;default:d=ua}a=d.bind(null,i,a,n),d=void 0,!Vs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function rh(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;v=v.return}for(;A!==null;){if(v=es(A),v===null)return;if(x=v.tag,x===5||x===6){c=m=v;continue e}A=A.parentNode}}c=c.return}na(function(){var U=m,Q=bs(a),X=[];e:{var K=xp.get(n);if(K!==void 0){var te=Ws,ae=n;switch(n){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":ae="focus",te=Xs;break;case"focusout":ae="blur",te=Xs;break;case"beforeblur":case"afterblur":te=Xs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Vl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case Ap:case Rp:case kp:te=Rr;break;case Cp:te=je;break;case"scroll":te=Gc;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=Fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var le=(i&4)!==0,ot=!le&&n==="scroll",M=le?K!==null?K+"Capture":null:K;le=[];for(var b=U,F;b!==null;){F=b;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=st(b,M),Y!=null&&le.push(Ea(b,Y,F)))),ot)break;b=b.return}0<le.length&&(K=new te(K,ae,null,a,Q),X.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",K&&a!==Bi&&(ae=a.relatedTarget||a.fromElement)&&(es(ae)||ae[kr]))break e;if((te||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,te?(ae=a.relatedTarget||a.toElement,te=U,ae=ae?es(ae):null,ae!==null&&(ot=Dn(ae),ae!==ot||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(te=null,ae=U),te!==ae)){if(le=Ks,Y="onMouseLeave",M="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,Y="onPointerLeave",M="onPointerEnter",b="pointer"),ot=te==null?K:io(te),F=ae==null?K:io(ae),K=new le(Y,b+"leave",te,a,Q),K.target=ot,K.relatedTarget=F,Y=null,es(Q)===U&&(le=new le(M,b+"enter",ae,a,Q),le.target=F,le.relatedTarget=ot,Y=le),ot=Y,te&&ae)t:{for(le=te,M=ae,b=0,F=le;F;F=no(F))b++;for(F=0,Y=M;Y;Y=no(Y))F++;for(;0<b-F;)le=no(le),b--;for(;0<F-b;)M=no(M),F--;for(;b--;){if(le===M||M!==null&&le===M.alternate)break t;le=no(le),M=no(M)}le=null}else le=null;te!==null&&Op(X,K,te,le,!1),ae!==null&&ot!==null&&Op(X,ot,ae,le,!0)}}e:{if(K=U?io(U):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var ce=uw;else if(fp(K))if(mp)ce=fw;else{ce=hw;var ge=cw}else(te=K.nodeName)&&te.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=dw);if(ce&&(ce=ce(n,U))){pp(X,ce,a,Q);break e}ge&&ge(n,K,U),n==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&xs(K,"number",K.value)}switch(ge=U?io(U):window,n){case"focusin":(fp(ge)||ge.contentEditable==="true")&&(eo=ge,Yc=U,_a=null);break;case"focusout":_a=Yc=eo=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Ip(X,a,Q);break;case"selectionchange":if(gw)break;case"keydown":case"keyup":Ip(X,a,Q)}var ye;if(ut)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Zs?hp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Zi&&a.locale!=="ko"&&(Zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Zs&&(ye=ha()):(hn=Q,Hs="value"in hn?hn.value:hn.textContent,Zs=!0)),ge=Wl(U,ve),0<ge.length&&(ve=new pa(ve,n,null,a,Q),X.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=dp(a),ye!==null&&(ve.data=ye)))),(ye=dn?sw(n,a):ow(n,a))&&(U=Wl(U,"onBeforeInput"),0<U.length&&(Q=new pa("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:U}),Q.data=ye))}bp(X,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Wl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=st(n,a),m!=null&&c.unshift(Ea(n,m,d)),m=st(n,i),m!=null&&c.push(Ea(n,m,d))),n=n.return}return c}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Op(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var A=a,x=A.alternate,U=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&U!==null&&(A=U,d?(x=st(a,m),x!=null&&v.unshift(Ea(a,x,A))):d||(x=st(a,m),x!=null&&v.push(Ea(a,x,A)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var ww=/\r\n?/g,Ew=/\u0000|\uFFFD/g;function Vp(n){return(typeof n=="string"?n:""+n).replace(ww,`
`).replace(Ew,"")}function Gl(n,i,a){if(i=Vp(i),Vp(n)!==i&&a)throw Error(t(425))}function Kl(){}var ih=null,sh=null;function oh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(Sw)}:ah;function Sw(n){setTimeout(function(){throw n})}function lh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Fn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Fn(i)}function ni(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),nr="__reactFiber$"+ro,Ta="__reactProps$"+ro,kr="__reactContainer$"+ro,uh="__reactEvents$"+ro,Aw="__reactListeners$"+ro,Rw="__reactHandles$"+ro;function es(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[kr]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mp(n);n!==null;){if(a=n[nr])return a;n=Mp(n)}return i}n=a,a=n.parentNode}return null}function Ia(n){return n=n[nr]||n[kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ql(n){return n[Ta]||null}var ch=[],so=-1;function ri(n){return{current:n}}function Ke(n){0>so||(n.current=ch[so],ch[so]=null,so--)}function qe(n,i){so++,ch[so]=n.current,n.current=i}var ii={},Mt=ri(ii),Zt=ri(!1),ts=ii;function oo(n,i){var a=n.type.contextTypes;if(!a)return ii;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function en(n){return n=n.childContextTypes,n!=null}function Xl(){Ke(Zt),Ke(Mt)}function Fp(n,i,a){if(Mt.current!==ii)throw Error(t(168));qe(Mt,i),qe(Zt,a)}function Up(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return re({},a,c)}function Yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ii,ts=Mt.current,qe(Mt,n),qe(Zt,Zt.current),!0}function jp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Up(n,i,ts),c.__reactInternalMemoizedMergedChildContext=n,Ke(Zt),Ke(Mt),qe(Mt,n)):Ke(Zt),qe(Zt,a)}var Cr=null,Jl=!1,hh=!1;function Bp(n){Cr===null?Cr=[n]:Cr.push(n)}function kw(n){Jl=!0,Bp(n)}function si(){if(!hh&&Cr!==null){hh=!0;var n=0,i=Pe;try{var a=Cr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,Jl=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),Us(Wi,si),d}finally{Pe=i,hh=!1}}return null}var ao=[],lo=0,Zl=null,eu=0,In=[],Sn=0,ns=null,xr=1,Pr="";function rs(n,i){ao[lo++]=eu,ao[lo++]=Zl,Zl=n,eu=i}function zp(n,i,a){In[Sn++]=xr,In[Sn++]=Pr,In[Sn++]=ns,ns=n;var c=xr;n=Pr;var d=32-qt(c)-1;c&=~(1<<d),a+=1;var m=32-qt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,xr=1<<32-qt(i)+d|a<<d|c,Pr=m+n}else xr=1<<m|a<<d|c,Pr=n}function dh(n){n.return!==null&&(rs(n,1),zp(n,1,0))}function fh(n){for(;n===Zl;)Zl=ao[--lo],ao[lo]=null,eu=ao[--lo],ao[lo]=null;for(;n===ns;)ns=In[--Sn],In[Sn]=null,Pr=In[--Sn],In[Sn]=null,xr=In[--Sn],In[Sn]=null}var fn=null,pn=null,Ye=!1,Bn=null;function $p(n,i){var a=Cn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fn=n,pn=ni(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fn=n,pn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:xr,overflow:Pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Cn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fn=n,pn=null,!0):!1;default:return!1}}function ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mh(n){if(Ye){var i=pn;if(i){var a=i;if(!Hp(n,i)){if(ph(n))throw Error(t(418));i=ni(a.nextSibling);var c=fn;i&&Hp(n,i)?$p(c,a):(n.flags=n.flags&-4097|2,Ye=!1,fn=n)}}else{if(ph(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,fn=n}}}function qp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fn=n}function tu(n){if(n!==fn)return!1;if(!Ye)return qp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!oh(n.type,n.memoizedProps)),i&&(i=pn)){if(ph(n))throw Wp(),Error(t(418));for(;i;)$p(n,i),i=ni(i.nextSibling)}if(qp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){pn=ni(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}pn=null}}else pn=fn?ni(n.stateNode.nextSibling):null;return!0}function Wp(){for(var n=pn;n;)n=ni(n.nextSibling)}function uo(){pn=fn=null,Ye=!1}function gh(n){Bn===null?Bn=[n]:Bn.push(n)}var Cw=ue.ReactCurrentBatchConfig;function Sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var A=d.refs;v===null?delete A[m]:A[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function nu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gp(n){var i=n._init;return i(n._payload)}function Kp(n){function i(M,b){if(n){var F=M.deletions;F===null?(M.deletions=[b],M.flags|=16):F.push(b)}}function a(M,b){if(!n)return null;for(;b!==null;)i(M,b),b=b.sibling;return null}function c(M,b){for(M=new Map;b!==null;)b.key!==null?M.set(b.key,b):M.set(b.index,b),b=b.sibling;return M}function d(M,b){return M=fi(M,b),M.index=0,M.sibling=null,M}function m(M,b,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<b?(M.flags|=2,b):F):(M.flags|=2,b)):(M.flags|=1048576,b)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,b,F,Y){return b===null||b.tag!==6?(b=ad(F,M.mode,Y),b.return=M,b):(b=d(b,F),b.return=M,b)}function x(M,b,F,Y){var ce=F.type;return ce===P?Q(M,b,F.props.children,Y,F.key):b!==null&&(b.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&Gp(ce)===b.type)?(Y=d(b,F.props),Y.ref=Sa(M,b,F),Y.return=M,Y):(Y=Ru(F.type,F.key,F.props,null,M.mode,Y),Y.ref=Sa(M,b,F),Y.return=M,Y)}function U(M,b,F,Y){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=ld(F,M.mode,Y),b.return=M,b):(b=d(b,F.children||[]),b.return=M,b)}function Q(M,b,F,Y,ce){return b===null||b.tag!==7?(b=hs(F,M.mode,Y,ce),b.return=M,b):(b=d(b,F),b.return=M,b)}function X(M,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=ad(""+b,M.mode,F),b.return=M,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ne:return F=Ru(b.type,b.key,b.props,null,M.mode,F),F.ref=Sa(M,null,b),F.return=M,F;case he:return b=ld(b,M.mode,F),b.return=M,b;case Lt:var Y=b._init;return X(M,Y(b._payload),F)}if(_r(b)||me(b))return b=hs(b,M.mode,F,null),b.return=M,b;nu(M,b)}return null}function K(M,b,F,Y){var ce=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:A(M,b,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ne:return F.key===ce?x(M,b,F,Y):null;case he:return F.key===ce?U(M,b,F,Y):null;case Lt:return ce=F._init,K(M,b,ce(F._payload),Y)}if(_r(F)||me(F))return ce!==null?null:Q(M,b,F,Y,null);nu(M,F)}return null}function te(M,b,F,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,A(b,M,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ne:return M=M.get(Y.key===null?F:Y.key)||null,x(b,M,Y,ce);case he:return M=M.get(Y.key===null?F:Y.key)||null,U(b,M,Y,ce);case Lt:var ge=Y._init;return te(M,b,F,ge(Y._payload),ce)}if(_r(Y)||me(Y))return M=M.get(F)||null,Q(b,M,Y,ce,null);nu(b,Y)}return null}function ae(M,b,F,Y){for(var ce=null,ge=null,ye=b,ve=b=0,Rt=null;ye!==null&&ve<F.length;ve++){ye.index>ve?(Rt=ye,ye=null):Rt=ye.sibling;var Le=K(M,ye,F[ve],Y);if(Le===null){ye===null&&(ye=Rt);break}n&&ye&&Le.alternate===null&&i(M,ye),b=m(Le,b,ve),ge===null?ce=Le:ge.sibling=Le,ge=Le,ye=Rt}if(ve===F.length)return a(M,ye),Ye&&rs(M,ve),ce;if(ye===null){for(;ve<F.length;ve++)ye=X(M,F[ve],Y),ye!==null&&(b=m(ye,b,ve),ge===null?ce=ye:ge.sibling=ye,ge=ye);return Ye&&rs(M,ve),ce}for(ye=c(M,ye);ve<F.length;ve++)Rt=te(ye,M,ve,F[ve],Y),Rt!==null&&(n&&Rt.alternate!==null&&ye.delete(Rt.key===null?ve:Rt.key),b=m(Rt,b,ve),ge===null?ce=Rt:ge.sibling=Rt,ge=Rt);return n&&ye.forEach(function(pi){return i(M,pi)}),Ye&&rs(M,ve),ce}function le(M,b,F,Y){var ce=me(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var ge=ce=null,ye=b,ve=b=0,Rt=null,Le=F.next();ye!==null&&!Le.done;ve++,Le=F.next()){ye.index>ve?(Rt=ye,ye=null):Rt=ye.sibling;var pi=K(M,ye,Le.value,Y);if(pi===null){ye===null&&(ye=Rt);break}n&&ye&&pi.alternate===null&&i(M,ye),b=m(pi,b,ve),ge===null?ce=pi:ge.sibling=pi,ge=pi,ye=Rt}if(Le.done)return a(M,ye),Ye&&rs(M,ve),ce;if(ye===null){for(;!Le.done;ve++,Le=F.next())Le=X(M,Le.value,Y),Le!==null&&(b=m(Le,b,ve),ge===null?ce=Le:ge.sibling=Le,ge=Le);return Ye&&rs(M,ve),ce}for(ye=c(M,ye);!Le.done;ve++,Le=F.next())Le=te(ye,M,ve,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?ve:Le.key),b=m(Le,b,ve),ge===null?ce=Le:ge.sibling=Le,ge=Le);return n&&ye.forEach(function(aE){return i(M,aE)}),Ye&&rs(M,ve),ce}function ot(M,b,F,Y){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ne:e:{for(var ce=F.key,ge=b;ge!==null;){if(ge.key===ce){if(ce=F.type,ce===P){if(ge.tag===7){a(M,ge.sibling),b=d(ge,F.props.children),b.return=M,M=b;break e}}else if(ge.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&Gp(ce)===ge.type){a(M,ge.sibling),b=d(ge,F.props),b.ref=Sa(M,ge,F),b.return=M,M=b;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}F.type===P?(b=hs(F.props.children,M.mode,Y,F.key),b.return=M,M=b):(Y=Ru(F.type,F.key,F.props,null,M.mode,Y),Y.ref=Sa(M,b,F),Y.return=M,M=Y)}return v(M);case he:e:{for(ge=F.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(M,b.sibling),b=d(b,F.children||[]),b.return=M,M=b;break e}else{a(M,b);break}else i(M,b);b=b.sibling}b=ld(F,M.mode,Y),b.return=M,M=b}return v(M);case Lt:return ge=F._init,ot(M,b,ge(F._payload),Y)}if(_r(F))return ae(M,b,F,Y);if(me(F))return le(M,b,F,Y);nu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(M,b.sibling),b=d(b,F),b.return=M,M=b):(a(M,b),b=ad(F,M.mode,Y),b.return=M,M=b),v(M)):a(M,b)}return ot}var co=Kp(!0),Qp=Kp(!1),ru=ri(null),iu=null,ho=null,yh=null;function _h(){yh=ho=iu=null}function vh(n){var i=ru.current;Ke(ru),n._currentValue=i}function wh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function fo(n,i){iu=n,yh=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(tn=!0),n.firstContext=null)}function An(n){var i=n._currentValue;if(yh!==n)if(n={context:n,memoizedValue:i,next:null},ho===null){if(iu===null)throw Error(t(308));ho=n,iu.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return i}var is=null;function Eh(n){is===null?is=[n]:is.push(n)}function Xp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Eh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Nr(n,c)}function Nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var oi=!1;function Th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function br(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ai(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Nr(n,a)}return d=c.interleaved,d===null?(i.next=i,Eh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Nr(n,a)}function su(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Xr(n,a)}}function Jp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ou(n,i,a,c){var d=n.updateQueue;oi=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var x=A,U=x.next;x.next=null,v===null?m=U:v.next=U,v=x;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=U:A.next=U,Q.lastBaseUpdate=x))}if(m!==null){var X=d.baseState;v=0,Q=U=x=null,A=m;do{var K=A.lane,te=A.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:te,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ae=n,le=A;switch(K=i,te=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){X=ae.call(te,X,K);break e}X=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(te,X,K):ae,K==null)break e;X=re({},X,K);break e;case 2:oi=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else te={eventTime:te,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(U=Q=te,x=X):Q=Q.next=te,v|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(x=X),d.baseState=x,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);as|=v,n.lanes=v,n.memoizedState=X}}function Zp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},rr=ri(Aa),Ra=ri(Aa),ka=ri(Aa);function ss(n){if(n===Aa)throw Error(t(174));return n}function Ih(n,i){switch(qe(ka,i),qe(Ra,n),qe(rr,Aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:gt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=gt(i,n)}Ke(rr),qe(rr,i)}function po(){Ke(rr),Ke(Ra),Ke(ka)}function em(n){ss(ka.current);var i=ss(rr.current),a=gt(i,n.type);i!==a&&(qe(Ra,n),qe(rr,a))}function Sh(n){Ra.current===n&&(Ke(rr),Ke(Ra))}var Je=ri(0);function au(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ah=[];function Rh(){for(var n=0;n<Ah.length;n++)Ah[n]._workInProgressVersionPrimary=null;Ah.length=0}var lu=ue.ReactCurrentDispatcher,kh=ue.ReactCurrentBatchConfig,os=0,Ze=null,_t=null,St=null,uu=!1,Ca=!1,xa=0,xw=0;function Ft(){throw Error(t(321))}function Ch(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!jn(n[a],i[a]))return!1;return!0}function xh(n,i,a,c,d,m){if(os=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,lu.current=n===null||n.memoizedState===null?Dw:Ow,n=a(c,d),Ca){m=0;do{if(Ca=!1,xa=0,25<=m)throw Error(t(301));m+=1,St=_t=null,i.updateQueue=null,lu.current=Vw,n=a(c,d)}while(Ca)}if(lu.current=du,i=_t!==null&&_t.next!==null,os=0,St=_t=Ze=null,uu=!1,i)throw Error(t(300));return n}function Ph(){var n=xa!==0;return xa=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Ze.memoizedState=St=n:St=St.next=n,St}function Rn(){if(_t===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var i=St===null?Ze.memoizedState:St.next;if(i!==null)St=i,_t=n;else{if(n===null)throw Error(t(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?Ze.memoizedState=St=n:St=St.next=n}return St}function Pa(n,i){return typeof i=="function"?i(n):i}function Nh(n){var i=Rn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_t,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=v=null,x=null,U=m;do{var Q=U.lane;if((os&Q)===Q)x!==null&&(x=x.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};x===null?(A=x=X,v=c):x=x.next=X,Ze.lanes|=Q,as|=Q}U=U.next}while(U!==null&&U!==m);x===null?v=c:x.next=A,jn(c,i.memoizedState)||(tn=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=x,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,as|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function bh(n){var i=Rn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);jn(m,i.memoizedState)||(tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function tm(){}function nm(n,i){var a=Ze,c=Rn(),d=i(),m=!jn(c.memoizedState,d);if(m&&(c.memoizedState=d,tn=!0),c=c.queue,Dh(sm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Na(9,im.bind(null,a,c,d,i),void 0,null),At===null)throw Error(t(349));(os&30)!==0||rm(a,i,d)}return d}function rm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function im(n,i,a,c){i.value=a,i.getSnapshot=c,om(i)&&am(n)}function sm(n,i,a){return a(function(){om(i)&&am(n)})}function om(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!jn(n,a)}catch{return!0}}function am(n){var i=Nr(n,1);i!==null&&qn(i,n,1,-1)}function lm(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},i.queue=n,n=n.dispatch=bw.bind(null,Ze,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function um(){return Rn().memoizedState}function cu(n,i,a,c){var d=ir();Ze.flags|=n,d.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function hu(n,i,a,c){var d=Rn();c=c===void 0?null:c;var m=void 0;if(_t!==null){var v=_t.memoizedState;if(m=v.destroy,c!==null&&Ch(c,v.deps)){d.memoizedState=Na(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=Na(1|i,a,m,c)}function cm(n,i){return cu(8390656,8,n,i)}function Dh(n,i){return hu(2048,8,n,i)}function hm(n,i){return hu(4,2,n,i)}function dm(n,i){return hu(4,4,n,i)}function fm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pm(n,i,a){return a=a!=null?a.concat([n]):null,hu(4,4,fm.bind(null,i,n),a)}function Oh(){}function mm(n,i){var a=Rn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gm(n,i){var a=Rn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function ym(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=a):(jn(a,i)||(a=Qi(),Ze.lanes|=a,as|=a,n.baseState=!0),i)}function Pw(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=kh.transition;kh.transition={};try{n(!1),i()}finally{Pe=a,kh.transition=c}}function _m(){return Rn().memoizedState}function Nw(n,i,a){var c=hi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vm(n))wm(i,a);else if(a=Xp(n,i,a,c),a!==null){var d=Kt();qn(a,n,c,d),Em(a,i,c)}}function bw(n,i,a){var c=hi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vm(n))wm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,A=m(v,a);if(d.hasEagerState=!0,d.eagerState=A,jn(A,v)){var x=i.interleaved;x===null?(d.next=d,Eh(i)):(d.next=x.next,x.next=d),i.interleaved=d;return}}catch{}finally{}a=Xp(n,i,d,c),a!==null&&(d=Kt(),qn(a,n,c,d),Em(a,i,c))}}function vm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function wm(n,i){Ca=uu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Em(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Xr(n,a)}}var du={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Dw={readContext:An,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:An,useEffect:cm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,cu(4194308,4,fm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return cu(4194308,4,n,i)},useInsertionEffect:function(n,i){return cu(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ir();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Nw.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:lm,useDebugValue:Oh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=lm(!1),i=n[0];return n=Pw.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=ir();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),At===null)throw Error(t(349));(os&30)!==0||rm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,cm(sm.bind(null,c,m,n),[n]),c.flags|=2048,Na(9,im.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=ir(),i=At.identifierPrefix;if(Ye){var a=Pr,c=xr;a=(c&~(1<<32-qt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=xw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ow={readContext:An,useCallback:mm,useContext:An,useEffect:Dh,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:Nh,useRef:um,useState:function(){return Nh(Pa)},useDebugValue:Oh,useDeferredValue:function(n){var i=Rn();return ym(i,_t.memoizedState,n)},useTransition:function(){var n=Nh(Pa)[0],i=Rn().memoizedState;return[n,i]},useMutableSource:tm,useSyncExternalStore:nm,useId:_m,unstable_isNewReconciler:!1},Vw={readContext:An,useCallback:mm,useContext:An,useEffect:Dh,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:bh,useRef:um,useState:function(){return bh(Pa)},useDebugValue:Oh,useDeferredValue:function(n){var i=Rn();return _t===null?i.memoizedState=n:ym(i,_t.memoizedState,n)},useTransition:function(){var n=bh(Pa)[0],i=Rn().memoizedState;return[n,i]},useMutableSource:tm,useSyncExternalStore:nm,useId:_m,unstable_isNewReconciler:!1};function zn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Vh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fu={isMounted:function(n){return(n=n._reactInternals)?Dn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kt(),d=hi(n),m=br(c,d);m.payload=i,a!=null&&(m.callback=a),i=ai(n,m,d),i!==null&&(qn(i,n,d,c),su(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kt(),d=hi(n),m=br(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ai(n,m,d),i!==null&&(qn(i,n,d,c),su(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kt(),c=hi(n),d=br(a,c);d.tag=2,i!=null&&(d.callback=i),i=ai(n,d,c),i!==null&&(qn(i,n,c,a),su(i,n,c))}};function Tm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(d,m):!0}function Im(n,i,a){var c=!1,d=ii,m=i.contextType;return typeof m=="object"&&m!==null?m=An(m):(d=en(i)?ts:Mt.current,c=i.contextTypes,m=(c=c!=null)?oo(n,d):ii),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Sm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&fu.enqueueReplaceState(i,i.state,null)}function Lh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Th(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=An(m):(m=en(i)?ts:Mt.current,d.context=oo(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Vh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&fu.enqueueReplaceState(d,d.state,null),ou(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function mo(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function Am(n,i,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){wu||(wu=!0,Zh=c),Fh(n,i)},a}function Rm(n,i,a){a=br(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Fh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Fh(n,i),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function km(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Lw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Xw.bind(null,n,i,a),i.then(n,n))}function Cm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=br(-1,1),i.tag=2,ai(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Mw=ue.ReactCurrentOwner,tn=!1;function Gt(n,i,a,c){i.child=n===null?Qp(i,null,a,c):co(i,n.child,a,c)}function Pm(n,i,a,c,d){a=a.render;var m=i.ref;return fo(i,d),c=xh(n,i,a,c,m,d),a=Ph(),n!==null&&!tn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Ye&&a&&dh(i),i.flags|=1,Gt(n,i,c,d),i.child)}function Nm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!od(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bm(n,i,m,c,d)):(n=Ru(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,c)&&n.ref===i.ref)return Dr(n,i,d)}return i.flags|=1,n=fi(m,c),n.ref=i.ref,n.return=i,i.child=n}function bm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===i.ref)if(tn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(tn=!0);else return i.lanes=n.lanes,Dr(n,i,d)}return Uh(n,i,a,c,d)}function Dm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(yo,mn),mn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(yo,mn),mn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(yo,mn),mn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(yo,mn),mn|=c;return Gt(n,i,d,a),i.child}function Om(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Uh(n,i,a,c,d){var m=en(a)?ts:Mt.current;return m=oo(i,m),fo(i,d),a=xh(n,i,a,c,m,d),c=Ph(),n!==null&&!tn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Ye&&c&&dh(i),i.flags|=1,Gt(n,i,a,d),i.child)}function Vm(n,i,a,c,d){if(en(a)){var m=!0;Yl(i)}else m=!1;if(fo(i,d),i.stateNode===null)mu(n,i),Im(i,a,c),Lh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,A=i.memoizedProps;v.props=A;var x=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=An(U):(U=en(a)?ts:Mt.current,U=oo(i,U));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||x!==U)&&Sm(i,v,c,U),oi=!1;var K=i.memoizedState;v.state=K,ou(i,c,v,d),x=i.memoizedState,A!==c||K!==x||Zt.current||oi?(typeof Q=="function"&&(Vh(i,a,Q,c),x=i.memoizedState),(A=oi||Tm(i,a,A,c,K,x,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=x),v.props=c,v.state=x,v.context=U,c=A):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Yp(n,i),A=i.memoizedProps,U=i.type===i.elementType?A:zn(i.type,A),v.props=U,X=i.pendingProps,K=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=An(x):(x=en(a)?ts:Mt.current,x=oo(i,x));var te=a.getDerivedStateFromProps;(Q=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||K!==x)&&Sm(i,v,c,x),oi=!1,K=i.memoizedState,v.state=K,ou(i,c,v,d);var ae=i.memoizedState;A!==X||K!==ae||Zt.current||oi?(typeof te=="function"&&(Vh(i,a,te,c),ae=i.memoizedState),(U=oi||Tm(i,a,U,c,K,ae,x)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,x)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=x,c=U):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return jh(n,i,a,c,m,d)}function jh(n,i,a,c,d,m){Om(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&jp(i,a,!1),Dr(n,i,m);c=i.stateNode,Mw.current=i;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=co(i,n.child,null,m),i.child=co(i,null,A,m)):Gt(n,i,A,m),i.memoizedState=c.state,d&&jp(i,a,!0),i.child}function Lm(n){var i=n.stateNode;i.pendingContext?Fp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fp(n,i.context,!1),Ih(n,i.containerInfo)}function Mm(n,i,a,c,d){return uo(),gh(d),i.flags|=256,Gt(n,i,a,c),i.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fm(n,i,a){var c=i.pendingProps,d=Je.current,m=!1,v=(i.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Je,d&1),n===null)return mh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=ku(v,c,0,null),n=hs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=zh(a),i.memoizedState=Bh,n):$h(i,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return Fw(n,i,v,c,A,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,A=d.sibling;var x={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=x,i.deletions=null):(c=fi(d,x),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=fi(A,m):(m=hs(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Bh,c}return m=n.child,n=m.sibling,c=fi(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function $h(n,i){return i=ku({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function pu(n,i,a,c){return c!==null&&gh(c),co(i,n.child,null,a),n=$h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fw(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Mh(Error(t(422))),pu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ku({mode:"visible",children:c.children},d,0,null),m=hs(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&co(i,n.child,null,v),i.child.memoizedState=zh(v),i.memoizedState=Bh,m);if((i.mode&1)===0)return pu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Mh(m,c,void 0),pu(n,i,v,c)}if(A=(v&n.childLanes)!==0,tn||A){if(c=At,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Nr(n,d),qn(c,n,d,-1))}return sd(),c=Mh(Error(t(421))),pu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Yw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,pn=ni(d.nextSibling),fn=i,Ye=!0,Bn=null,n!==null&&(In[Sn++]=xr,In[Sn++]=Pr,In[Sn++]=ns,xr=n.id,Pr=n.overflow,ns=i),i=$h(i,c.children),i.flags|=4096,i)}function Um(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),wh(n.return,i,a)}function Hh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function jm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Gt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Um(n,a,i);else if(n.tag===19)Um(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&au(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Hh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&au(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Hh(i,!0,a,null,m);break;case"together":Hh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function mu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Uw(n,i,a){switch(i.tag){case 3:Lm(i),uo();break;case 5:em(i);break;case 1:en(i.type)&&Yl(i);break;case 4:Ih(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(ru,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fm(n,i,a):(qe(Je,Je.current&1),n=Dr(n,i,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return jm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,Dm(n,i,a)}return Dr(n,i,a)}var Bm,qh,zm,$m;Bm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qh=function(){},zm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ss(rr.current);var m=null;switch(a){case"input":d=Fi(n,d),c=Fi(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Wo(n,d),c=Wo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Kl)}Jo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var A=d[U];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var x=c[U];if(A=d?.[U],c.hasOwnProperty(U)&&x!==A&&(x!=null||A!=null))if(U==="style")if(A){for(v in A)!A.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&A[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(m||(m=[]),m.push(U,a)),a=x;else U==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(m=m||[]).push(U,x)):U==="children"?typeof x!="string"&&typeof x!="number"||(m=m||[]).push(U,""+x):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(x!=null&&U==="onScroll"&&Ge("scroll",n),m||A===x||(m=[])):(m=m||[]).push(U,x))}a&&(m=m||[]).push("style",a);var U=m;(i.updateQueue=U)&&(i.flags|=4)}},$m=function(n,i,a,c){a!==c&&(i.flags|=4)};function ba(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ut(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function jw(n,i,a){var c=i.pendingProps;switch(fh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(i),null;case 1:return en(i.type)&&Xl(),Ut(i),null;case 3:return c=i.stateNode,po(),Ke(Zt),Ke(Mt),Rh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(tu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bn!==null&&(nd(Bn),Bn=null))),qh(n,i),Ut(i),null;case 5:Sh(i);var d=ss(ka.current);if(a=i.type,n!==null&&i.stateNode!=null)zm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ut(i),null}if(n=ss(rr.current),tu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[nr]=i,c[Ta]=m,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<va.length;d++)Ge(va[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Cs(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Ps(c,m),Ge("invalid",c)}Jo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var A=m[v];v==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&Gl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&Gl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":yr(c),vl(c,m,!0);break;case"textarea":yr(c),Go(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Kl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[nr]=i,n[Ta]=c,Bm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Zo(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<va.length;d++)Ge(va[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":Cs(n,c),d=Fi(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Ps(n,c),d=Wo(n,c),Ge("invalid",n);break;default:d=c}Jo(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var x=A[m];m==="style"?Xo(n,x):m==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Ko(n,x)):m==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&qr(n,x):typeof x=="number"&&qr(n,""+x):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?x!=null&&m==="onScroll"&&Ge("scroll",n):x!=null&&se(n,m,x,v))}switch(a){case"input":yr(n),vl(n,c,!1);break;case"textarea":yr(n),Go(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?vr(n,!!c.multiple,m,!1):c.defaultValue!=null&&vr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ut(i),null;case 6:if(n&&i.stateNode!=null)$m(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(ka.current),ss(rr.current),tu(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(m=c.nodeValue!==a)&&(n=fn,n!==null))switch(n.tag){case 3:Gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return Ut(i),null;case 13:if(Ke(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&pn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wp(),uo(),i.flags|=98560,m=!1;else if(m=tu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=i}else uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ut(i),m=!1}else Bn!==null&&(nd(Bn),Bn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?vt===0&&(vt=3):sd())),i.updateQueue!==null&&(i.flags|=4),Ut(i),null);case 4:return po(),qh(n,i),n===null&&wa(i.stateNode.containerInfo),Ut(i),null;case 10:return vh(i.type._context),Ut(i),null;case 17:return en(i.type)&&Xl(),Ut(i),null;case 19:if(Ke(Je),m=i.memoizedState,m===null)return Ut(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)ba(m,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=au(n),v!==null){for(i.flags|=128,ba(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),i.child}n=n.sibling}m.tail!==null&&He()>_o&&(i.flags|=128,c=!0,ba(m,!1),i.lanes=4194304)}else{if(!c)if(n=au(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Ut(i),null}else 2*He()-m.renderingStartTime>_o&&a!==1073741824&&(i.flags|=128,c=!0,ba(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=He(),i.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),i):(Ut(i),null);case 22:case 23:return id(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(mn&1073741824)!==0&&(Ut(i),i.subtreeFlags&6&&(i.flags|=8192)):Ut(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Bw(n,i){switch(fh(i),i.tag){case 1:return en(i.type)&&Xl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return po(),Ke(Zt),Ke(Mt),Rh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Sh(i),null;case 13:if(Ke(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));uo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Je),null;case 4:return po(),null;case 10:return vh(i.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var gu=!1,jt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function go(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Wh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Hm=!1;function $w(n,i){if(ih=Zr,n=Tp(),Xc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,A=-1,x=-1,U=0,Q=0,X=n,K=null;t:for(;;){for(var te;X!==a||d!==0&&X.nodeType!==3||(A=v+d),X!==m||c!==0&&X.nodeType!==3||(x=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(te=X.firstChild)!==null;)K=X,X=te;for(;;){if(X===n)break t;if(K===a&&++U===d&&(A=v),K===m&&++Q===c&&(x=v),(te=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=te}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:n,selectionRange:a},Zr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,ot=ae.memoizedState,M=i.stateNode,b=M.getSnapshotBeforeUpdate(i.elementType===i.type?le:zn(i.type,le),ot);M.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return ae=Hm,Hm=!1,ae}function Da(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Wh(i,a,m)}d=d.next}while(d!==c)}}function yu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Gh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function qm(n){var i=n.alternate;i!==null&&(n.alternate=null,qm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[Ta],delete i[uh],delete i[Aw],delete i[Rw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function Gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kl));else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}function Qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Qh(n,i,a),n=n.sibling;n!==null;)Qh(n,i,a),n=n.sibling}var Pt=null,$n=!1;function li(n,i,a){for(a=a.child;a!==null;)Km(n,i,a),a=a.sibling}function Km(n,i,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:jt||go(a,i);case 6:var c=Pt,d=$n;Pt=null,li(n,i,a),Pt=c,$n=d,Pt!==null&&($n?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&($n?(n=Pt,a=a.stateNode,n.nodeType===8?lh(n.parentNode,a):n.nodeType===1&&lh(n,a),Fn(n)):lh(Pt,a.stateNode));break;case 4:c=Pt,d=$n,Pt=a.stateNode.containerInfo,$n=!0,li(n,i,a),Pt=c,$n=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Wh(a,i,v),d=d.next}while(d!==c)}li(n,i,a);break;case 1:if(!jt&&(go(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,i,A)}li(n,i,a);break;case 21:li(n,i,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,li(n,i,a),jt=c):li(n,i,a);break;default:li(n,i,a)}}function Qm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new zw),i.forEach(function(c){var d=Jw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Hn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,$n=!1;break e;case 3:Pt=A.stateNode.containerInfo,$n=!0;break e;case 4:Pt=A.stateNode.containerInfo,$n=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));Km(m,v,d),Pt=null,$n=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(U){tt(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xm(i,n),i=i.sibling}function Xm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(i,n),sr(n),c&4){try{Da(3,n,n.return),yu(3,n)}catch(le){tt(n,n.return,le)}try{Da(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:Hn(i,n),sr(n),c&512&&a!==null&&go(a,a.return);break;case 5:if(Hn(i,n),sr(n),c&512&&a!==null&&go(a,a.return),n.flags&32){var d=n.stateNode;try{qr(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,A=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Ho(d,m),Zo(A,v);var U=Zo(A,m);for(v=0;v<x.length;v+=2){var Q=x[v],X=x[v+1];Q==="style"?Xo(d,X):Q==="dangerouslySetInnerHTML"?Ko(d,X):Q==="children"?qr(d,X):se(d,Q,X,U)}switch(A){case"input":qo(d,m);break;case"textarea":Ns(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?vr(d,!!m.multiple,te,!1):K!==!!m.multiple&&(m.defaultValue!=null?vr(d,!!m.multiple,m.defaultValue,!0):vr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ta]=m}catch(le){tt(n,n.return,le)}}break;case 6:if(Hn(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){tt(n,n.return,le)}}break;case 3:if(Hn(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(i.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:Hn(i,n),sr(n);break;case 13:Hn(i,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Jh=He())),c&4&&Qm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(jt=(U=jt)||Q,Hn(i,n),jt=U):Hn(i,n),sr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(ie=n,Q=n.child;Q!==null;){for(X=ie=Q;ie!==null;){switch(K=ie,te=K.child,K.tag){case 0:case 11:case 14:case 15:Da(4,K,K.return);break;case 1:go(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:go(K,K.return);break;case 22:if(K.memoizedState!==null){Zm(X);continue}}te!==null?(te.return=K,ie=te):Zm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=X.stateNode,x=X.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=Qo("display",v))}catch(le){tt(n,n.return,le)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(le){tt(n,n.return,le)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Hn(i,n),sr(n),c&4&&Qm(n);break;case 21:break;default:Hn(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(qr(d,""),c.flags&=-33);var m=Gm(n);Qh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Gm(n);Kh(n,A,v);break;default:throw Error(t(161))}}catch(x){tt(n,n.return,x)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Hw(n,i,a){ie=n,Ym(n)}function Ym(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||gu;if(!v){var A=d.alternate,x=A!==null&&A.memoizedState!==null||jt;A=gu;var U=jt;if(gu=v,(jt=x)&&!U)for(ie=d;ie!==null;)v=ie,x=v.child,v.tag===22&&v.memoizedState!==null?eg(d):x!==null?(x.return=v,ie=x):eg(d);for(;m!==null;)ie=m,Ym(m),m=m.sibling;ie=d,gu=A,jt=U}Jm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ie=m):Jm(n)}}function Jm(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:jt||yu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:zn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Zp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Zp(i,v,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Fn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||i.flags&512&&Gh(i)}catch(K){tt(i,i.return,K)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Zm(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function eg(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{yu(4,i)}catch(x){tt(i,a,x)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(x){tt(i,d,x)}}var m=i.return;try{Gh(i)}catch(x){tt(i,m,x)}break;case 5:var v=i.return;try{Gh(i)}catch(x){tt(i,v,x)}}}catch(x){tt(i,i.return,x)}if(i===n){ie=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ie=A;break}ie=i.return}}var qw=Math.ceil,_u=ue.ReactCurrentDispatcher,Xh=ue.ReactCurrentOwner,kn=ue.ReactCurrentBatchConfig,Ve=0,At=null,ct=null,Nt=0,mn=0,yo=ri(0),vt=0,Oa=null,as=0,vu=0,Yh=0,Va=null,nn=null,Jh=0,_o=1/0,Or=null,wu=!1,Zh=null,ui=null,Eu=!1,ci=null,Tu=0,La=0,ed=null,Iu=-1,Su=0;function Kt(){return(Ve&6)!==0?He():Iu!==-1?Iu:Iu=He()}function hi(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Nt!==0?Nt&-Nt:Cw.transition!==null?(Su===0&&(Su=Qi()),Su):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:ca(n.type)),n)}function qn(n,i,a,c){if(50<La)throw La=0,ed=null,Error(t(185));Qr(n,a,c),((Ve&2)===0||n!==At)&&(n===At&&((Ve&2)===0&&(vu|=a),vt===4&&di(n,Nt)),rn(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(_o=He()+500,Jl&&si()))}function rn(n,i){var a=n.callbackNode;Tr(n,i);var c=Ki(n,n===At?Nt:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sa(a),i===1)n.tag===0?kw(ng.bind(null,n)):Bp(ng.bind(null,n)),Iw(function(){(Ve&6)===0&&si()}),a=null;else{switch(Yr(c)){case 1:a=Wi;break;case 4:a=Wr;break;case 16:a=wn;break;case 536870912:a=Sl;break;default:a=wn}a=cg(a,tg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tg(n,i){if(Iu=-1,Su=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(vo()&&n.callbackNode!==a)return null;var c=Ki(n,n===At?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Au(n,c);else{i=c;var d=Ve;Ve|=2;var m=ig();(At!==n||Nt!==i)&&(Or=null,_o=He()+500,us(n,i));do try{Kw();break}catch(A){rg(n,A)}while(!0);_h(),_u.current=m,Ve=d,ct!==null?i=0:(At=null,Nt=0,i=vt)}if(i!==0){if(i===2&&(d=cn(n),d!==0&&(c=d,i=td(n,d))),i===1)throw a=Oa,us(n,0),di(n,c),rn(n,He()),a;if(i===6)di(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Ww(d)&&(i=Au(n,c),i===2&&(m=cn(n),m!==0&&(c=m,i=td(n,m))),i===1))throw a=Oa,us(n,0),di(n,c),rn(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,nn,Or);break;case 3:if(di(n,c),(c&130023424)===c&&(i=Jh+500-He(),10<i)){if(Ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Kt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ah(cs.bind(null,n,nn,Or),i);break}cs(n,nn,Or);break;case 4:if(di(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-qt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qw(c/1960))-c,10<c){n.timeoutHandle=ah(cs.bind(null,n,nn,Or),c);break}cs(n,nn,Or);break;case 5:cs(n,nn,Or);break;default:throw Error(t(329))}}}return rn(n,He()),n.callbackNode===a?tg.bind(null,n):null}function td(n,i){var a=Va;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=Au(n,i),n!==2&&(i=nn,nn=a,i!==null&&nd(i)),n}function nd(n){nn===null?nn=n:nn.push.apply(nn,n)}function Ww(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!jn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function di(n,i){for(i&=~Yh,i&=~vu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-qt(i),c=1<<a;n[a]=-1,i&=~c}}function ng(n){if((Ve&6)!==0)throw Error(t(327));vo();var i=Ki(n,0);if((i&1)===0)return rn(n,He()),null;var a=Au(n,i);if(n.tag!==0&&a===2){var c=cn(n);c!==0&&(i=c,a=td(n,c))}if(a===1)throw a=Oa,us(n,0),di(n,i),rn(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,nn,Or),rn(n,He()),null}function rd(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(_o=He()+500,Jl&&si())}}function ls(n){ci!==null&&ci.tag===0&&(Ve&6)===0&&vo();var i=Ve;Ve|=1;var a=kn.transition,c=Pe;try{if(kn.transition=null,Pe=1,n)return n()}finally{Pe=c,kn.transition=a,Ve=i,(Ve&6)===0&&si()}}function id(){mn=yo.current,Ke(yo)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tw(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(fh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Xl();break;case 3:po(),Ke(Zt),Ke(Mt),Rh();break;case 5:Sh(c);break;case 4:po();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:vh(c.type._context);break;case 22:case 23:id()}a=a.return}if(At=n,ct=n=fi(n.current,null),Nt=mn=i,vt=0,Oa=null,Yh=vu=as=0,nn=Va=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}is=null}return n}function rg(n,i){do{var a=ct;try{if(_h(),lu.current=du,uu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}uu=!1}if(os=0,St=_t=Ze=null,Ca=!1,xa=0,Xh.current=null,a===null||a.return===null){vt=1,Oa=i,ct=null;break}e:{var m=n,v=a.return,A=a,x=i;if(i=Nt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=x,Q=A,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var te=Cm(v);if(te!==null){te.flags&=-257,xm(te,v,A,m,i),te.mode&1&&km(m,U,i),i=te,x=U;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(x),i.updateQueue=le}else ae.add(x);break e}else{if((i&1)===0){km(m,U,i),sd();break e}x=Error(t(426))}}else if(Ye&&A.mode&1){var ot=Cm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),xm(ot,v,A,m,i),gh(mo(x,A));break e}}m=x=mo(x,A),vt!==4&&(vt=2),Va===null?Va=[m]:Va.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=Am(m,x,i);Jp(m,M);break e;case 1:A=x;var b=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ui===null||!ui.has(F)))){m.flags|=65536,i&=-i,m.lanes|=i;var Y=Rm(m,A,i);Jp(m,Y);break e}}m=m.return}while(m!==null)}og(a)}catch(ce){i=ce,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function ig(){var n=_u.current;return _u.current=du,n===null?du:n}function sd(){(vt===0||vt===3||vt===2)&&(vt=4),At===null||(as&268435455)===0&&(vu&268435455)===0||di(At,Nt)}function Au(n,i){var a=Ve;Ve|=2;var c=ig();(At!==n||Nt!==i)&&(Or=null,us(n,i));do try{Gw();break}catch(d){rg(n,d)}while(!0);if(_h(),Ve=a,_u.current=c,ct!==null)throw Error(t(261));return At=null,Nt=0,vt}function Gw(){for(;ct!==null;)sg(ct)}function Kw(){for(;ct!==null&&!Tl();)sg(ct)}function sg(n){var i=ug(n.alternate,n,mn);n.memoizedProps=n.pendingProps,i===null?og(n):ct=i,Xh.current=null}function og(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=jw(a,i,mn),a!==null){ct=a;return}}else{if(a=Bw(a,i),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,ct=null;return}}if(i=i.sibling,i!==null){ct=i;return}ct=i=n}while(i!==null);vt===0&&(vt=5)}function cs(n,i,a){var c=Pe,d=kn.transition;try{kn.transition=null,Pe=1,Qw(n,i,a,c)}finally{kn.transition=d,Pe=c}return null}function Qw(n,i,a,c){do vo();while(ci!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===At&&(ct=At=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Eu||(Eu=!0,cg(wn,function(){return vo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=kn.transition,kn.transition=null;var v=Pe;Pe=1;var A=Ve;Ve|=4,Xh.current=null,$w(n,a),Xm(a,n),mw(sh),Zr=!!ih,sh=ih=null,n.current=a,Hw(a),zc(),Ve=A,Pe=v,kn.transition=m}else n.current=a;if(Eu&&(Eu=!1,ci=n,Tu=d),m=n.pendingLanes,m===0&&(ui=null),Al(a.stateNode),rn(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(wu)throw wu=!1,n=Zh,Zh=null,n;return(Tu&1)!==0&&n.tag!==0&&vo(),m=n.pendingLanes,(m&1)!==0?n===ed?La++:(La=0,ed=n):La=0,si(),null}function vo(){if(ci!==null){var n=Yr(Tu),i=kn.transition,a=Pe;try{if(kn.transition=null,Pe=16>n?16:n,ci===null)var c=!1;else{if(n=ci,ci=null,Tu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=n.current;ie!==null;){var m=ie,v=m.child;if((ie.flags&16)!==0){var A=m.deletions;if(A!==null){for(var x=0;x<A.length;x++){var U=A[x];for(ie=U;ie!==null;){var Q=ie;switch(Q.tag){case 0:case 11:case 15:Da(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ie=X;else for(;ie!==null;){Q=ie;var K=Q.sibling,te=Q.return;if(qm(Q),Q===U){ie=null;break}if(K!==null){K.return=te,ie=K;break}ie=te}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var ot=le.sibling;le.sibling=null,le=ot}while(le!==null)}}ie=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ie=v;else e:for(;ie!==null;){if(m=ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Da(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ie=M;break e}ie=m.return}}var b=n.current;for(ie=b;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=b;ie!==null;){if(A=ie,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:yu(9,A)}}catch(ce){tt(A,A.return,ce)}if(A===v){ie=null;break e}var Y=A.sibling;if(Y!==null){Y.return=A.return,ie=Y;break e}ie=A.return}}if(Ve=d,si(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{Pe=a,kn.transition=i}}return!1}function ag(n,i,a){i=mo(a,i),i=Am(n,i,1),n=ai(n,i,1),i=Kt(),n!==null&&(Qr(n,1,i),rn(n,i))}function tt(n,i,a){if(n.tag===3)ag(n,n,a);else for(;i!==null;){if(i.tag===3){ag(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=mo(a,n),n=Rm(i,n,1),i=ai(i,n,1),n=Kt(),i!==null&&(Qr(i,1,n),rn(i,n));break}}i=i.return}}function Xw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kt(),n.pingedLanes|=n.suspendedLanes&a,At===n&&(Nt&a)===a&&(vt===4||vt===3&&(Nt&130023424)===Nt&&500>He()-Jh?us(n,0):Yh|=a),rn(n,i)}function lg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Bs,Bs<<=1,(Bs&130023424)===0&&(Bs=4194304)));var a=Kt();n=Nr(n,i),n!==null&&(Qr(n,i,a),rn(n,a))}function Yw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lg(n,a)}function Jw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lg(n,a)}var ug;ug=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zt.current)tn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return tn=!1,Uw(n,i,a);tn=(n.flags&131072)!==0}else tn=!1,Ye&&(i.flags&1048576)!==0&&zp(i,eu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;mu(n,i),n=i.pendingProps;var d=oo(i,Mt.current);fo(i,a),d=xh(null,i,c,n,d,a);var m=Ph();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,en(c)?(m=!0,Yl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Th(i),d.updater=fu,i.stateNode=d,d._reactInternals=i,Lh(i,c,n,a),i=jh(null,i,c,!0,m,a)):(i.tag=0,Ye&&m&&dh(i),Gt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(mu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=eE(c),n=zn(c,n),d){case 0:i=Uh(null,i,c,n,a);break e;case 1:i=Vm(null,i,c,n,a);break e;case 11:i=Pm(null,i,c,n,a);break e;case 14:i=Nm(null,i,c,zn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zn(c,d),Uh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zn(c,d),Vm(n,i,c,d,a);case 3:e:{if(Lm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Yp(n,i),ou(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=mo(Error(t(423)),i),i=Mm(n,i,c,a,d);break e}else if(c!==d){d=mo(Error(t(424)),i),i=Mm(n,i,c,a,d);break e}else for(pn=ni(i.stateNode.containerInfo.firstChild),fn=i,Ye=!0,Bn=null,a=Qp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),c===d){i=Dr(n,i,a);break e}Gt(n,i,c,a)}i=i.child}return i;case 5:return em(i),n===null&&mh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,oh(c,d)?v=null:m!==null&&oh(c,m)&&(i.flags|=32),Om(n,i),Gt(n,i,v,a),i.child;case 6:return n===null&&mh(i),null;case 13:return Fm(n,i,a);case 4:return Ih(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=co(i,null,c,a):Gt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zn(c,d),Pm(n,i,c,d,a);case 7:return Gt(n,i,i.pendingProps,a),i.child;case 8:return Gt(n,i,i.pendingProps.children,a),i.child;case 12:return Gt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,qe(ru,c._currentValue),c._currentValue=v,m!==null)if(jn(m.value,v)){if(m.children===d.children&&!Zt.current){i=Dr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){v=m.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(m.tag===1){x=br(-1,a&-a),x.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?x.next=x:(x.next=Q.next,Q.next=x),U.pending=x}}m.lanes|=a,x=m.alternate,x!==null&&(x.lanes|=a),wh(m.return,a,i),A.lanes|=a;break}x=x.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),wh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Gt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,fo(i,a),d=An(d),c=c(d),i.flags|=1,Gt(n,i,c,a),i.child;case 14:return c=i.type,d=zn(c,i.pendingProps),d=zn(c.type,d),Nm(n,i,c,d,a);case 15:return bm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zn(c,d),mu(n,i),i.tag=1,en(c)?(n=!0,Yl(i)):n=!1,fo(i,a),Im(i,c,d),Lh(i,c,d,a),jh(null,i,c,!0,n,a);case 19:return jm(n,i,a);case 22:return Dm(n,i,a)}throw Error(t(156,i.tag))};function cg(n,i){return Us(n,i)}function Zw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,i,a,c){return new Zw(n,i,a,c)}function od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eE(n){if(typeof n=="function")return od(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Vt)return 14}return 2}function fi(n,i){var a=n.alternate;return a===null?(a=Cn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ru(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")od(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return hs(a.children,d,m,i);case S:v=8,d|=8;break;case C:return n=Cn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case k:return n=Cn(13,a,i,d),n.elementType=k,n.lanes=m,n;case it:return n=Cn(19,a,i,d),n.elementType=it,n.lanes=m,n;case Be:return ku(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case D:v=9;break e;case V:v=11;break e;case Vt:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Cn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,a,c){return n=Cn(7,n,c,i),n.lanes=a,n}function ku(n,i,a,c){return n=Cn(22,n,c,i),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function ad(n,i,a){return n=Cn(6,n,null,i),n.lanes=a,n}function ld(n,i,a){return i=Cn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ud(n,i,a,c,d,m,v,A,x){return n=new tE(n,i,a,A,x),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Cn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(m),n}function nE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function hg(n){if(!n)return ii;n=n._reactInternals;e:{if(Dn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(en(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(en(a))return Up(n,a,i)}return i}function dg(n,i,a,c,d,m,v,A,x){return n=ud(a,c,!0,n,d,m,v,A,x),n.context=hg(null),a=n.current,c=Kt(),d=hi(a),m=br(c,d),m.callback=i??null,ai(a,m,d),n.current.lanes=d,Qr(n,d,c),rn(n,c),n}function Cu(n,i,a,c){var d=i.current,m=Kt(),v=hi(d);return a=hg(a),i.context===null?i.context=a:i.pendingContext=a,i=br(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ai(d,i,v),n!==null&&(qn(n,d,v,m),su(n,d,v)),v}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function cd(n,i){fg(n,i),(n=n.alternate)&&fg(n,i)}function rE(){return null}var pg=typeof reportError=="function"?reportError:function(n){console.error(n)};function hd(n){this._internalRoot=n}Pu.prototype.render=hd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Cu(n,i,null,null)},Pu.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ls(function(){Cu(null,n,null,null)}),i[kr]=null}};function Pu(n){this._internalRoot=n}Pu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Jn.length&&i!==0&&i<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&Dl(n)}};function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mg(){}function iE(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=xu(v);m.call(U)}}var v=dg(i,c,n,0,null,!1,!1,"",mg);return n._reactRootContainer=v,n[kr]=v.current,wa(n.nodeType===8?n.parentNode:n),ls(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var U=xu(x);A.call(U)}}var x=ud(n,0,!1,null,null,!1,!1,"",mg);return n._reactRootContainer=x,n[kr]=x.current,wa(n.nodeType===8?n.parentNode:n),ls(function(){Cu(i,x,a,c)}),x}function bu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var A=d;d=function(){var x=xu(v);A.call(x)}}Cu(i,v,n,d)}else v=iE(a,i,n,d,c);return xu(v)}Cl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gr(i.pendingLanes);a!==0&&(Xr(i,a|1),rn(i,He()),(Ve&6)===0&&(_o=He()+500,si()))}break;case 13:ls(function(){var c=Nr(n,1);if(c!==null){var d=Kt();qn(c,n,1,d)}}),cd(n,1)}},zs=function(n){if(n.tag===13){var i=Nr(n,134217728);if(i!==null){var a=Kt();qn(i,n,134217728,a)}cd(n,134217728)}},xl=function(n){if(n.tag===13){var i=hi(n),a=Nr(n,i);if(a!==null){var c=Kt();qn(a,n,i,c)}cd(n,i)}},Pl=function(){return Pe},Nl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},Ds=function(n,i,a){switch(i){case"input":if(qo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ql(c);if(!d)throw Error(t(90));ks(c),qo(c,d)}}}break;case"textarea":Ns(n,a);break;case"select":i=a.value,i!=null&&vr(n,!!a.multiple,i,!1)}},zi=rd,ta=ls;var sE={usingClientEntryPoint:!1,Events:[Ia,io,Ql,Xn,ea,rd]},Ma={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oE={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{Gi=Du.inject(oE),un=Du}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE,sn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(i))throw Error(t(200));return nE(n,i,null,a)},sn.createRoot=function(n,i){if(!dd(n))throw Error(t(299));var a=!1,c="",d=pg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ud(n,1,!1,null,null,a,!1,c,d),n[kr]=i.current,wa(n.nodeType===8?n.parentNode:n),new hd(i)},sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},sn.flushSync=function(n){return ls(n)},sn.hydrate=function(n,i,a){if(!Nu(i))throw Error(t(200));return bu(null,n,i,!0,a)},sn.hydrateRoot=function(n,i,a){if(!dd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=pg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=dg(i,null,n,1,a??null,d,!1,m,v),n[kr]=i.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Pu(i)},sn.render=function(n,i,a){if(!Nu(i))throw Error(t(200));return bu(null,n,i,!1,a)},sn.unmountComponentAtNode=function(n){if(!Nu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){bu(null,null,n,!1,function(){n._reactRootContainer=null,n[kr]=null})}),!0):!1},sn.unstable_batchedUpdates=rd,sn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Nu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bu(n,i,a,!1,c)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var Ig;function pE(){if(Ig)return md.exports;Ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),md.exports=fE(),md.exports}var Sg;function mE(){if(Sg)return Ou;Sg=1;var r=pE();return Ou.createRoot=r.createRoot,Ou.hydrateRoot=r.hydrateRoot,Ou}var gE=mE(),Ee=af();const yE=()=>{};var Ag={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_E=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|p>>4;let R=(p&15)<<2|_>>6,j=_&63;g||(j=64,h||(R=64)),s.push(t[w],t[T],t[R],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(l_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_E(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||_==null||T==null)throw new vE;const R=l<<2|p>>4;if(s.push(R),_!==64){const j=p<<4&240|_>>2;if(s.push(j),T!==64){const H=_<<6&192|T;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wE=function(r){const e=l_(r);return u_.encodeByteArray(e,!0)},Zu=function(r){return wE(r).replace(/\./g,"")},c_=function(r){try{return u_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=()=>EE().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof Ag>"u")return;const r=Ag.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},SE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&c_(r[1]);return e&&JSON.parse(e)},vc=()=>{try{return yE()||TE()||IE()||SE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},h_=r=>{var e,t;return(t=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},d_=r=>{const e=h_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},f_=()=>{var r;return(r=vc())===null||r===void 0?void 0:r.config},p_=r=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lf(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Zu(JSON.stringify(t)),Zu(JSON.stringify(h)),""].join(".")}const Ha={};function RE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ha))Ha[e]?r.emulator.push(e):r.prod.push(e);return r}function kE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Rg=!1;function uf(r,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||Ha[r]===e||Ha[r]||Rg)return;Ha[r]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",l=RE().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function p(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,j){R.setAttribute("width","24"),R.setAttribute("id",j),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Rg=!0,h()},R}function w(R,j){R.setAttribute("id",j),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=kE(s),j=t("text"),H=document.getElementById(j)||document.createElement("span"),G=t("learnmore"),z=document.getElementById(G)||document.createElement("a"),de=t("preprendIcon"),oe=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const se=R.element;p(se),w(z,G);const ue=_();g(oe,de),se.append(oe,H,z,ue),document.body.appendChild(se)}l?(H.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function xE(){var r;const e=(r=vc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DE(){const r=Ht();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function OE(){return!xE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function LE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="FirebaseError";class gr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ME,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?FE(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new gr(o,p,s)}}function FE(r,e){return r.replace(UE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const UE=/\{\$([^}]+)}/g;function jE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(kg(l)&&kg(h)){if(!ys(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function kg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function BE(r,e){const t=new zE(r,e);return t.subscribe.bind(t)}class zE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");$E(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=_d),o.error===void 0&&(o.error=_d),o.complete===void 0&&(o.complete=_d);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function _d(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(r){return r&&r._delegate?r._delegate:r}class ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new AE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WE(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(r){return r===ds?void 0:r}function WE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const KE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},QE=Ce.INFO,XE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},YE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=XE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cf{constructor(e){this.name=e,this._logLevel=QE,this._logHandler=YE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const JE=(r,e)=>e.some(t=>r instanceof t);let Cg,xg;function ZE(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,bd=new WeakMap,y_=new WeakMap,vd=new WeakMap,hf=new WeakMap;function tT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ii(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&g_.set(t,r)}).catch(()=>{}),hf.set(e,r),e}function nT(r){if(bd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});bd.set(r,e)}let Dd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return bd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||y_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rT(r){Dd=r(Dd)}function iT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wd(this),e,...t);return y_.set(s,e.sort?e.sort():[e]),Ii(s)}:eT().includes(r)?function(...e){return r.apply(wd(this),e),Ii(g_.get(this))}:function(...e){return Ii(r.apply(wd(this),e))}}function sT(r){return typeof r=="function"?iT(r):(r instanceof IDBTransaction&&nT(r),JE(r,ZE())?new Proxy(r,Dd):r)}function Ii(r){if(r instanceof IDBRequest)return tT(r);if(vd.has(r))return vd.get(r);const e=sT(r);return e!==r&&(vd.set(r,e),hf.set(e,r)),e}const wd=r=>hf.get(r);function oT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=Ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Ii(h.result),g.oldVersion,g.newVersion,Ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const aT=["get","getKey","getAll","getAllKeys","count"],lT=["put","add","delete","clear"],Ed=new Map;function Pg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=lT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||aT.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return Ed.set(e,l),l}rT(r=>({...r,get:(e,t,s)=>Pg(e,t)||r.get(e,t,s),has:(e,t)=>!!Pg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function cT(r){const e=r.getComponent();return e?.type==="VERSION"}const Od="@firebase/app",Ng="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new cf("@firebase/app"),hT="@firebase/app-compat",dT="@firebase/analytics-compat",fT="@firebase/analytics",pT="@firebase/app-check-compat",mT="@firebase/app-check",gT="@firebase/auth",yT="@firebase/auth-compat",_T="@firebase/database",vT="@firebase/data-connect",wT="@firebase/database-compat",ET="@firebase/functions",TT="@firebase/functions-compat",IT="@firebase/installations",ST="@firebase/installations-compat",AT="@firebase/messaging",RT="@firebase/messaging-compat",kT="@firebase/performance",CT="@firebase/performance-compat",xT="@firebase/remote-config",PT="@firebase/remote-config-compat",NT="@firebase/storage",bT="@firebase/storage-compat",DT="@firebase/firestore",OT="@firebase/ai",VT="@firebase/firestore-compat",LT="firebase",MT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="[DEFAULT]",FT={[Od]:"fire-core",[hT]:"fire-core-compat",[fT]:"fire-analytics",[dT]:"fire-analytics-compat",[mT]:"fire-app-check",[pT]:"fire-app-check-compat",[gT]:"fire-auth",[yT]:"fire-auth-compat",[_T]:"fire-rtdb",[vT]:"fire-data-connect",[wT]:"fire-rtdb-compat",[ET]:"fire-fn",[TT]:"fire-fn-compat",[IT]:"fire-iid",[ST]:"fire-iid-compat",[AT]:"fire-fcm",[RT]:"fire-fcm-compat",[kT]:"fire-perf",[CT]:"fire-perf-compat",[xT]:"fire-rc",[PT]:"fire-rc-compat",[NT]:"fire-gcs",[bT]:"fire-gcs-compat",[DT]:"fire-fst",[VT]:"fire-fst-compat",[OT]:"fire-vertex","fire-js":"fire-js",[LT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map,UT=new Map,Ld=new Map;function bg(r,e){try{r.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _s(r){const e=r.name;if(Ld.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,r);for(const t of ec.values())bg(t,r);for(const t of UT.values())bg(t,r);return!0}function wc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Wn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new sl("app","Firebase",jT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=MT;function __(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=f_()),!t)throw Si.create("no-options");const l=ec.get(o);if(l){if(ys(t,l.options)&&ys(s,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const h=new GE(o);for(const g of Ld.values())h.addComponent(g);const p=new BT(t,s,h);return ec.set(o,p),p}function df(r=Vd){const e=ec.get(r);if(!e&&r===Vd&&f_())return __();if(!e)throw Si.create("no-app",{appName:r});return e}function lr(r,e,t){var s;let o=(s=FT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(p.join(" "));return}_s(new ki(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="firebase-heartbeat-database",$T=1,Ya="firebase-heartbeat-store";let Td=null;function v_(){return Td||(Td=oT(zT,$T,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ya)}catch(t){console.warn(t)}}}}).catch(r=>{throw Si.create("idb-open",{originalErrorMessage:r.message})})),Td}async function HT(r){try{const t=(await v_()).transaction(Ya),s=await t.objectStore(Ya).get(w_(r));return await t.done,s}catch(e){if(e instanceof gr)Fr.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e?.message});Fr.warn(t.message)}}}async function Dg(r,e){try{const s=(await v_()).transaction(Ya,"readwrite");await s.objectStore(Ya).put(e,w_(r)),await s.done}catch(t){if(t instanceof gr)Fr.warn(t.message);else{const s=Si.create("idb-set",{originalErrorMessage:t?.message});Fr.warn(s.message)}}}function w_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=1024,WT=30;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Og();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>WT){const h=XT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Fr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Og(),{heartbeatsToSend:s,unsentEntries:o}=KT(this._heartbeatsCache.heartbeats),l=Zu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function Og(){return new Date().toISOString().substring(0,10)}function KT(r,e=qT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Vg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Vg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class QT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vg(r){return Zu(JSON.stringify({version:2,heartbeats:r})).length}function XT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(r){_s(new ki("platform-logger",e=>new uT(e),"PRIVATE")),_s(new ki("heartbeat",e=>new GT(e),"PRIVATE")),lr(Od,Ng,r),lr(Od,Ng,"esm2017"),lr("fire-js","")}YT("");var Lg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai,E_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,S){function C(){}C.prototype=S.prototype,P.D=S.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(N,D,V){for(var k=Array(arguments.length-2),it=2;it<arguments.length;it++)k[it-2]=arguments[it];return S.prototype[D].apply(N,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,S,C){C||(C=0);var N=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)N[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;16>D;++D)N[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=P.g[0],C=P.g[1],D=P.g[2];var V=P.g[3],k=S+(V^C&(D^V))+N[0]+3614090360&4294967295;S=C+(k<<7&4294967295|k>>>25),k=V+(D^S&(C^D))+N[1]+3905402710&4294967295,V=S+(k<<12&4294967295|k>>>20),k=D+(C^V&(S^C))+N[2]+606105819&4294967295,D=V+(k<<17&4294967295|k>>>15),k=C+(S^D&(V^S))+N[3]+3250441966&4294967295,C=D+(k<<22&4294967295|k>>>10),k=S+(V^C&(D^V))+N[4]+4118548399&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(D^S&(C^D))+N[5]+1200080426&4294967295,V=S+(k<<12&4294967295|k>>>20),k=D+(C^V&(S^C))+N[6]+2821735955&4294967295,D=V+(k<<17&4294967295|k>>>15),k=C+(S^D&(V^S))+N[7]+4249261313&4294967295,C=D+(k<<22&4294967295|k>>>10),k=S+(V^C&(D^V))+N[8]+1770035416&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(D^S&(C^D))+N[9]+2336552879&4294967295,V=S+(k<<12&4294967295|k>>>20),k=D+(C^V&(S^C))+N[10]+4294925233&4294967295,D=V+(k<<17&4294967295|k>>>15),k=C+(S^D&(V^S))+N[11]+2304563134&4294967295,C=D+(k<<22&4294967295|k>>>10),k=S+(V^C&(D^V))+N[12]+1804603682&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(D^S&(C^D))+N[13]+4254626195&4294967295,V=S+(k<<12&4294967295|k>>>20),k=D+(C^V&(S^C))+N[14]+2792965006&4294967295,D=V+(k<<17&4294967295|k>>>15),k=C+(S^D&(V^S))+N[15]+1236535329&4294967295,C=D+(k<<22&4294967295|k>>>10),k=S+(D^V&(C^D))+N[1]+4129170786&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^D&(S^C))+N[6]+3225465664&4294967295,V=S+(k<<9&4294967295|k>>>23),k=D+(S^C&(V^S))+N[11]+643717713&4294967295,D=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(D^V))+N[0]+3921069994&4294967295,C=D+(k<<20&4294967295|k>>>12),k=S+(D^V&(C^D))+N[5]+3593408605&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^D&(S^C))+N[10]+38016083&4294967295,V=S+(k<<9&4294967295|k>>>23),k=D+(S^C&(V^S))+N[15]+3634488961&4294967295,D=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(D^V))+N[4]+3889429448&4294967295,C=D+(k<<20&4294967295|k>>>12),k=S+(D^V&(C^D))+N[9]+568446438&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^D&(S^C))+N[14]+3275163606&4294967295,V=S+(k<<9&4294967295|k>>>23),k=D+(S^C&(V^S))+N[3]+4107603335&4294967295,D=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(D^V))+N[8]+1163531501&4294967295,C=D+(k<<20&4294967295|k>>>12),k=S+(D^V&(C^D))+N[13]+2850285829&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^D&(S^C))+N[2]+4243563512&4294967295,V=S+(k<<9&4294967295|k>>>23),k=D+(S^C&(V^S))+N[7]+1735328473&4294967295,D=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(D^V))+N[12]+2368359562&4294967295,C=D+(k<<20&4294967295|k>>>12),k=S+(C^D^V)+N[5]+4294588738&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^D)+N[8]+2272392833&4294967295,V=S+(k<<11&4294967295|k>>>21),k=D+(V^S^C)+N[11]+1839030562&4294967295,D=V+(k<<16&4294967295|k>>>16),k=C+(D^V^S)+N[14]+4259657740&4294967295,C=D+(k<<23&4294967295|k>>>9),k=S+(C^D^V)+N[1]+2763975236&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^D)+N[4]+1272893353&4294967295,V=S+(k<<11&4294967295|k>>>21),k=D+(V^S^C)+N[7]+4139469664&4294967295,D=V+(k<<16&4294967295|k>>>16),k=C+(D^V^S)+N[10]+3200236656&4294967295,C=D+(k<<23&4294967295|k>>>9),k=S+(C^D^V)+N[13]+681279174&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^D)+N[0]+3936430074&4294967295,V=S+(k<<11&4294967295|k>>>21),k=D+(V^S^C)+N[3]+3572445317&4294967295,D=V+(k<<16&4294967295|k>>>16),k=C+(D^V^S)+N[6]+76029189&4294967295,C=D+(k<<23&4294967295|k>>>9),k=S+(C^D^V)+N[9]+3654602809&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^D)+N[12]+3873151461&4294967295,V=S+(k<<11&4294967295|k>>>21),k=D+(V^S^C)+N[15]+530742520&4294967295,D=V+(k<<16&4294967295|k>>>16),k=C+(D^V^S)+N[2]+3299628645&4294967295,C=D+(k<<23&4294967295|k>>>9),k=S+(D^(C|~V))+N[0]+4096336452&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~D))+N[7]+1126891415&4294967295,V=S+(k<<10&4294967295|k>>>22),k=D+(S^(V|~C))+N[14]+2878612391&4294967295,D=V+(k<<15&4294967295|k>>>17),k=C+(V^(D|~S))+N[5]+4237533241&4294967295,C=D+(k<<21&4294967295|k>>>11),k=S+(D^(C|~V))+N[12]+1700485571&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~D))+N[3]+2399980690&4294967295,V=S+(k<<10&4294967295|k>>>22),k=D+(S^(V|~C))+N[10]+4293915773&4294967295,D=V+(k<<15&4294967295|k>>>17),k=C+(V^(D|~S))+N[1]+2240044497&4294967295,C=D+(k<<21&4294967295|k>>>11),k=S+(D^(C|~V))+N[8]+1873313359&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~D))+N[15]+4264355552&4294967295,V=S+(k<<10&4294967295|k>>>22),k=D+(S^(V|~C))+N[6]+2734768916&4294967295,D=V+(k<<15&4294967295|k>>>17),k=C+(V^(D|~S))+N[13]+1309151649&4294967295,C=D+(k<<21&4294967295|k>>>11),k=S+(D^(C|~V))+N[4]+4149444226&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~D))+N[11]+3174756917&4294967295,V=S+(k<<10&4294967295|k>>>22),k=D+(S^(V|~C))+N[2]+718787259&4294967295,D=V+(k<<15&4294967295|k>>>17),k=C+(V^(D|~S))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+S&4294967295,P.g[1]=P.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.u=function(P,S){S===void 0&&(S=P.length);for(var C=S-this.blockSize,N=this.B,D=this.h,V=0;V<S;){if(D==0)for(;V<=C;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<S;)if(N[D++]=P.charCodeAt(V++),D==this.blockSize){o(this,N),D=0;break}}else for(;V<S;)if(N[D++]=P[V++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var S=1;S<P.length-8;++S)P[S]=0;var C=8*this.o;for(S=P.length-8;S<P.length;++S)P[S]=C&255,C/=256;for(this.u(P),P=Array(16),S=C=0;4>S;++S)for(var N=0;32>N;N+=8)P[C++]=this.g[S]>>>N&255;return P};function l(P,S){var C=p;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=S(P)}function h(P,S){this.h=S;for(var C=[],N=!0,D=P.length-1;0<=D;D--){var V=P[D]|0;N&&V==S||(C[D]=V,N=!1)}this.g=C}var p={};function g(P){return-128<=P&&128>P?l(P,function(S){return new h([S|0],0>S?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return z(_(-P));for(var S=[],C=1,N=0;P>=C;N++)S[N]=P/C|0,C*=4294967296;return new h(S,0)}function w(P,S){if(P.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P.charAt(0)=="-")return z(w(P.substring(1),S));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(S,8)),N=T,D=0;D<P.length;D+=8){var V=Math.min(8,P.length-D),k=parseInt(P.substring(D,D+V),S);8>V?(V=_(Math.pow(S,V)),N=N.j(V).add(_(k))):(N=N.j(C),N=N.add(_(k)))}return N}var T=g(0),R=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(G(this))return-z(this).m();for(var P=0,S=1,C=0;C<this.g.length;C++){var N=this.i(C);P+=(0<=N?N:4294967296+N)*S,S*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(H(this))return"0";if(G(this))return"-"+z(this).toString(P);for(var S=_(Math.pow(P,6)),C=this,N="";;){var D=ue(C,S).g;C=de(C,D.j(S));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=D,H(C))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function H(P){if(P.h!=0)return!1;for(var S=0;S<P.g.length;S++)if(P.g[S]!=0)return!1;return!0}function G(P){return P.h==-1}r.l=function(P){return P=de(this,P),G(P)?-1:H(P)?0:1};function z(P){for(var S=P.g.length,C=[],N=0;N<S;N++)C[N]=~P.g[N];return new h(C,~P.h).add(R)}r.abs=function(){return G(this)?z(this):this},r.add=function(P){for(var S=Math.max(this.g.length,P.g.length),C=[],N=0,D=0;D<=S;D++){var V=N+(this.i(D)&65535)+(P.i(D)&65535),k=(V>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=k>>>16,V&=65535,k&=65535,C[D]=k<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function de(P,S){return P.add(z(S))}r.j=function(P){if(H(this)||H(P))return T;if(G(this))return G(P)?z(this).j(z(P)):z(z(this).j(P));if(G(P))return z(this.j(z(P)));if(0>this.l(j)&&0>P.l(j))return _(this.m()*P.m());for(var S=this.g.length+P.g.length,C=[],N=0;N<2*S;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var V=this.i(N)>>>16,k=this.i(N)&65535,it=P.i(D)>>>16,Vt=P.i(D)&65535;C[2*N+2*D]+=k*Vt,oe(C,2*N+2*D),C[2*N+2*D+1]+=V*Vt,oe(C,2*N+2*D+1),C[2*N+2*D+1]+=k*it,oe(C,2*N+2*D+1),C[2*N+2*D+2]+=V*it,oe(C,2*N+2*D+2)}for(N=0;N<S;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=S;N<2*S;N++)C[N]=0;return new h(C,0)};function oe(P,S){for(;(P[S]&65535)!=P[S];)P[S+1]+=P[S]>>>16,P[S]&=65535,S++}function se(P,S){this.g=P,this.h=S}function ue(P,S){if(H(S))throw Error("division by zero");if(H(P))return new se(T,T);if(G(P))return S=ue(z(P),S),new se(z(S.g),z(S.h));if(G(S))return S=ue(P,z(S)),new se(z(S.g),S.h);if(30<P.g.length){if(G(P)||G(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,N=S;0>=N.l(P);)C=Ne(C),N=Ne(N);var D=he(C,1),V=he(N,1);for(N=he(N,2),C=he(C,2);!H(N);){var k=V.add(N);0>=k.l(P)&&(D=D.add(C),V=k),N=he(N,1),C=he(C,1)}return S=de(P,D.j(S)),new se(D,S)}for(D=T;0<=P.l(S);){for(C=Math.max(1,Math.floor(P.m()/S.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=_(C),k=V.j(S);G(k)||0<k.l(P);)C-=N,V=_(C),k=V.j(S);H(V)&&(V=R),D=D.add(V),P=de(P,k)}return new se(D,P)}r.A=function(P){return ue(this,P).h},r.and=function(P){for(var S=Math.max(this.g.length,P.g.length),C=[],N=0;N<S;N++)C[N]=this.i(N)&P.i(N);return new h(C,this.h&P.h)},r.or=function(P){for(var S=Math.max(this.g.length,P.g.length),C=[],N=0;N<S;N++)C[N]=this.i(N)|P.i(N);return new h(C,this.h|P.h)},r.xor=function(P){for(var S=Math.max(this.g.length,P.g.length),C=[],N=0;N<S;N++)C[N]=this.i(N)^P.i(N);return new h(C,this.h^P.h)};function Ne(P){for(var S=P.g.length+1,C=[],N=0;N<S;N++)C[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(C,P.h)}function he(P,S){var C=S>>5;S%=32;for(var N=P.g.length-C,D=[],V=0;V<N;V++)D[V]=0<S?P.i(V+C)>>>S|P.i(V+C+1)<<32-S:P.i(V+C);return new h(D,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,E_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ai=h}).apply(typeof Lg<"u"?Lg:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T_,ja,I_,$u,Md,S_,A_,R_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:f(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function _(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function T(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(f,L)}}return function(){return u.apply(f,arguments)}}function R(u,f,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,R.apply(null,arguments)}function j(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function H(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return f.prototype[L].apply(E,J)}}function G(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function z(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let J=0;J<B;J++)u[L+J]=E[J]}else u.push(E)}}class de{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function oe(u){return/^[\s\xa0]*$/.test(u)}function se(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ue(u){return ue[" "](u),u}ue[" "]=function(){};var Ne=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function he(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function P(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function S(u){const f={};for(const y in u)f[y]=u[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<C.length;B++)y=C[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function V(u){p.setTimeout(()=>{throw u},0)}function k(){var u=me;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class it{constructor(){this.h=this.g=null}add(f,y){const E=Vt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Vt=new de(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Z=!1,me=new it,re=()=>{const u=p.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(y){V(y)}var f=Vt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}Z=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return u})();function Re(u,f){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(Ne){e:{try{ue(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}H(Re,fe);var be={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,f,y,E,L){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yr(u){this.src=u,this.g={},this.h=0}yr.prototype.add=function(u,f,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var J=Hr(u,f,E,L);return-1<J?(f=u[J],y||(f.fa=!1)):(f=new $e(f,this.src,B,!!E,L),f.fa=y,u.push(f)),f};function ks(u,f){var y=f.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,f,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(Tt(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Hr(u,f,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==f&&B.capture==!!y&&B.ha==E)return L}return-1}var Fi="closure_lm_"+(1e6*Math.random()|0),Cs={};function Ho(u,f,y,E,L){if(Array.isArray(f)){for(var B=0;B<f.length;B++)Ho(u,f[B],y,E,L);return null}return y=Go(y),u&&u[Me]?u.K(f,y,_(E)?!!E.capture:!1,L):qo(u,f,y,!1,E,L)}function qo(u,f,y,E,L,B){if(!f)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,je=Ps(u);if(je||(u[Fi]=je=new yr(u)),y=je.add(f,y,E,J,B),y.proxy)return y;if(E=vl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Se||(L=J),L===void 0&&(L=!1),u.addEventListener(f.toString(),E,L);else if(u.attachEvent)u.attachEvent(vr(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function vl(){function u(y){return f.call(u.src,u.listener,y)}const f=Wo;return u}function xs(u,f,y,E,L){if(Array.isArray(f))for(var B=0;B<f.length;B++)xs(u,f[B],y,E,L);else E=_(E)?!!E.capture:!!E,y=Go(y),u&&u[Me]?(u=u.i,f=String(f).toString(),f in u.g&&(B=u.g[f],y=Hr(B,y,E,L),-1<y&&(Tt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ps(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Hr(f,y,E,L)),(y=-1<u?f[u]:null)&&_r(y))}function _r(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Me])ks(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(vr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Ps(f))?(ks(y,u),y.h==0&&(y.src=null,f[Fi]=null)):Tt(u)}}}function vr(u){return u in Cs?Cs[u]:Cs[u]="on"+u}function Wo(u,f){if(u.da)u=!0;else{f=new Re(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&_r(u),u=y.call(E,f)}return u}function Ps(u){return u=u[Fi],u instanceof yr?u:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[Ns]||(u[Ns]=function(f){return u.handleEvent(f)}),u[Ns])}function mt(){W.call(this),this.i=new yr(this),this.M=this,this.F=null}H(mt,W),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,f,y,E){xs(this,u,f,y,E)};function gt(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new fe(f,u);else if(f instanceof fe)f.target=f.target||u;else{var L=f;f=new fe(E,u),N(f,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var J=f.g=y[B];L=wr(J,E,!0,f)&&L}if(J=f.g=u,L=wr(J,E,!0,f)&&L,L=wr(J,E,!1,f)&&L,y)for(B=0;B<y.length;B++)J=f.g=y[B],L=wr(J,E,!1,f)&&L}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)Tt(y[E]);delete u.g[f],u.h--}}this.F=null},mt.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},mt.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function wr(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,B=0;B<f.length;++B){var J=f[B];if(J&&!J.da&&J.capture==y){var je=J.listener,yt=J.ha||J.src;J.fa&&ks(u.i,J),L=je.call(yt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ko(u,f,y){if(typeof u=="function")y&&(u=R(u,y));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(u,f||0)}function qr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,qr(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Ui extends W{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){W.call(this),this.h=u,this.g={}}H(ji,W);var Qo=[];function Xo(u){he(u.g,function(f,y){this.g.hasOwnProperty(y)&&_r(f)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Xo(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yo=p.JSON.stringify,Jo=p.JSON.parse,Zo=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function bs(u){return u.h||(u.h=u.i())}function Ds(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){fe.call(this,"d")}H(Qn,fe);function Os(){fe.call(this,"c")}H(Os,fe);var Xn={},ea=null;function zi(){return ea=ea||new mt}Xn.La="serverreachability";function ta(u){fe.call(this,Xn.La,u)}H(ta,fe);function Er(u){const f=zi();gt(f,new ta(f))}Xn.STAT_EVENT="statevent";function na(u,f){fe.call(this,Xn.STAT_EVENT,u),this.stat=f}H(na,fe);function st(u){const f=zi();gt(f,new na(f,u))}Xn.Ma="timingevent";function Vs(u,f){fe.call(this,Xn.Ma,u),this.size=f}H(Vs,fe);function Nn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},f)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Hi(u,f,y,E,L,B){u.info(function(){if(u.g)if(B)for(var J="",je=B.split("&"),yt=0;yt<je.length;yt++){var De=je[yt].split("=");if(1<De.length){var It=De[0];De=De[1];var ut=It.split("_");J=2<=ut.length&&ut[1]=="type"?J+(It+"="+De+"&"):J+(It+"=redacted&")}}else J=null;else J=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function Ls(u,f,y,E,L,B,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+B+" "+J})}function bn(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Bc(u,y)+(E?" "+E:"")})}function ra(u,f){u.info(function(){return"TIMEOUT: "+f})}$i.prototype.info=function(){};function Bc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Yo(y)}catch{return f}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function qi(){}H(qi,Bi),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Dn=new qi;function On(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new El}function El(){this.i=null,this.g="",this.h=!1}var ia={},Fs={};function Us(u,f,y){u.L=1,u.v=Xr(cn(f)),u.m=y,u.P=!0,sa(u,null)}function sa(u,f){u.F=Date.now(),He(u),u.A=cn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Jr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new El,u.g=Ul(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Ui(R(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Qo[0]=L.toString()),L=Qo);for(var B=0;B<L.length;B++){var J=Ho(y,L[B],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),Er(),Hi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const f=this.M;f&&Jt(u)==3?f.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Jt(this.g);var f=this.g.Ba();const Tn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ut!=4||f==7||(f==8||0>=Tn?Er(3):Er(2)),Wi(this);var y=this.g.Z();this.X=y;t:if(Tl(this)){var E=ha(this.g);u="";var L=E.length,B=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Wr(this);var J="";break t}this.h.i=new p.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(B&&f==L-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Ls(this.i,this.u,this.A,this.l,this.R,ut,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(je)){var De=je;break t}}De=null}if(y=De)bn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,y);else{this.o=!1,this.s=3,st(12),wn(this),Wr(this);break e}}if(this.P){y=!0;let dn;for(;!this.J&&this.C<J.length;)if(dn=zc(this,J),dn==Fs){ut==4&&(this.s=4,st(14),y=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ia){this.s=4,st(15),bn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else bn(this.i,this.l,dn,null),oa(this,dn);if(Tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||J.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)bn(this.i,this.l,J,"[Invalid Chunked Response]"),wn(this),Wr(this);else if(0<J.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),fa(It),It.M=!0,st(11))}}else bn(this.i,this.l,J,null),oa(this,J);ut==4&&wn(this),this.o&&!this.J&&(ut==4?Xs(this.j,this):(this.o=!1,He(this)))}else qs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),wn(this),Wr(this)}}}catch{}finally{}};function Tl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function zc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Fs:(y=Number(f.substring(y,E)),isNaN(y)?ia:(E+=1,E+y>f.length?Fs:(f=f.slice(E,E+y),u.C=E+y,f)))}On.prototype.cancel=function(){this.J=!0,wn(this)};function He(u){u.S=Date.now()+u.I,Il(u,u.I)}function Il(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Nn(R(u.ba,u),f)}function Wi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(Er(),st(17)),wn(this),this.s=2,Wr(this)):Il(this,this.S-u)};function Wr(u){u.j.G==0||u.J||Xs(u.j,u)}function wn(u){Wi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Xo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function oa(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||qt(y.h,u))){if(!u.K&&qt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Qs(y),Un(y);else break e;Ks(y),st(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Nn(R(y.Za,y),6e3));if(1>=Al(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Rr(y,11)}else if((u.K||y.g==u)&&Qs(y),!oe(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const It=De[3];It!=null&&(y.la=It,y.j.info("VER="+y.la));const ut=De[4];ut!=null&&(y.Aa=ut,y.j.info("SVER="+y.Aa));const Tn=De[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(E=1.5*Tn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const dn=u.g;if(dn){const Zi=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var B=E.h;B.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(aa(B,B.h),B.h=null))}if(E.D){const Js=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(E.ya=Js,ze(E.I,E.D,Js))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=Fl(E,E.J?E.ia:null,E.W),J.K){Rl(E.h,J);var je=J,yt=E.L;yt&&(je.I=yt),je.B&&(Wi(je),He(je)),E.g=J}else Ji(E);0<y.i.length&&er(y)}else De[0]!="stop"&&De[0]!="close"||Rr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Rr(y,7):xt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}Er(4)}catch{}}var Sl=class{constructor(u,f){this.g=u,this.map=f}};function Gi(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function un(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Al(u){return u.h?1:u.g?u.g.size:0}function qt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function aa(u,f){u.g?u.g.add(f):u.h=f}function Rl(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Gi.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function kl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return G(u.i)}function js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function Gr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Bs(u),E=js(u),L=E.length,B=0;B<L;B++)f.call(void 0,E[B],y&&y[B],u)}var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];f(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Tr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tr){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var f=u.i,y=new Yn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Qr(this,y),this.m=u.m}else u&&(f=String(u).match(Ki))?(this.h=!1,Qi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Kr(this,f[4]),this.l=Pe(f[5]||"",!0),Qr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Tr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Yr(f,zs,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Yr(f,zs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Yr(y,y.charAt(0)=="/"?Pl:xl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Yr(y,la)),u.join("")};function cn(u){return new Tr(u)}function Qi(u,f,y){u.j=y?Pe(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function Qr(u,f,y){f instanceof Yn?(u.i=f,Jn(u.i,u.h)):(y||(f=Yr(f,Nl)),u.i=new Yn(f,u.h))}function ze(u,f,y){u.i.set(f,y)}function Xr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,Cl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Cl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,xl=/[#\?:]/g,Pl=/[#\?]/g,Nl=/[#\?@]/g,la=/#/g;function Yn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&$c(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Yn.prototype,r.add=function(u,f){Ct(this),this.i=null,u=En(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function Vn(u,f){Ct(u),f=En(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Ln(u,f){return Ct(u),f=En(u,f),u.g.has(f)}r.forEach=function(u,f){Ct(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(f,L,E,this)},this)},this)},r.na=function(){Ct(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(f[E])}return y},r.V=function(u){Ct(this);let f=[];if(typeof u=="string")Ln(this,u)&&(f=f.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return Ct(this),this.i=null,u=En(this,u),Ln(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Jr(u,f,y){Vn(u,f),0<y.length&&(u.i=null,u.g.set(En(u,f),G(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const B=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=B;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),u.push(L)}}return this.i=u.join("&")};function En(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Jn(u,f){f&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Vn(this,E),Jr(this,L,y))},u)),u.j=f}function Hc(u,f){const y=new $i;if(p.Image){const E=new Image;E.onload=j(Yt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Yt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Yt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Yt,y,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function bl(u,f){const y=new $i,E=new AbortController,L=setTimeout(()=>{E.abort(),Yt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Yt(y,"TestPingServer: ok",!0,f):Yt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Yt(y,"TestPingServer: error",!1,f)})}function Yt(u,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function qc(){this.g=new Zo}function Dl(u,f,y){const E=y||"";try{Gr(u,function(L,B){let J=L;_(L)&&(J=Yo(L)),f.push(E+B+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}H(Ir,Bi),Ir.prototype.g=function(){return new Xi(this.l,this.j)},Ir.prototype.i=(function(u){return function(){return u}})({});function Xi(u,f){mt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Xi,mt),r=Xi.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Fn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ol(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ol(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Mn(this):Fn(this),this.readyState==3&&Ol(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Mn(this))},r.Qa=function(u){this.g&&(this.response=u,Mn(this))},r.ga=function(){this.g&&Mn(this)};function Mn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sr(u){let f="";return he(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Zr(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Sr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,f,y))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Xe,mt);var Wc=/^https?$/i,ua=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?bs(this.o):bs(Dn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(B){Yi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ua,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of y)this.g.setRequestHeader(B,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Yi(this,B)}};function Yi(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,$s(u),hn(u)}function $s(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),hn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)Ko(u.Ea,0,u);else if(gt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(u.D).match(Ki)[1]||null;!L&&p.self&&p.self.location&&(L=p.self.location.protocol.slice(0,-1)),E=!Wc.test(L?L.toLowerCase():"")}y=E}if(y)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var B=2<Jt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",$s(u)}}finally{hn(u)}}}}function hn(u,f){if(u.g){Hs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||gt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Hs(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Jo(f)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const f={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(oe(u[E]))continue;var y=D(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=f[L]||[];f[L]=B,B.push(y)}P(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function da(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Da=new qc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){st(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Fl(this,null,this.W),er(this)};function xt(u){if(Ws(u),u.G==3){var f=u.U++,y=cn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),Ar(u,y),f=new On(u,u.j,f),f.L=2,f.v=Xr(cn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=Ul(f.j,null),f.g.ea(f.v)),f.F=Date.now(),He(f)}Ml(u)}function Un(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function Ws(u){Un(u),u.u&&(p.clearTimeout(u.u),u.u=null),Qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function er(u){if(!un(u.h)&&!u.s){u.s=!0;var f=u.Ga;Be||re(),Z||(Be(),Z=!0),me.add(f,u),u.B=0}}function Gc(u,f){return Al(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Nn(R(u.Ga,u,f),Ll(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new On(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),N(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=ei(this,L,f),y=cn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Ar(this,y),B&&(this.O?f="headers="+encodeURIComponent(String(Sr(B)))+"&"+f:this.m&&Zr(y,this.m,B)),aa(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),L.T=!0,Us(L,y,null)):Us(L,y,f),this.G=2}}else this.G==3&&(u?Gs(this,u):this.i.length==0||un(this.h)||Gs(this))};function Gs(u,f){var y;f?y=f.l:y=u.U++;const E=cn(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),Ar(u,E),u.m&&u.o&&Zr(E,u.m,u.o),y=new On(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=ei(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,y),Us(y,E,f)}function Ar(u,f){u.H&&he(u.H,function(y,E){ze(f,E,y)}),u.l&&Gr({},function(y,E){ze(f,E,y)})}function ei(u,f,y){y=Math.min(u.i.length,y);var E=u.l?R(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const J=["count="+y];B==-1?0<y?(B=L[0].g,J.push("ofs="+B)):B=0:J.push("ofs="+B);let je=!0;for(let yt=0;yt<y;yt++){let De=L[yt].g;const It=L[yt].map;if(De-=B,0>De)B=Math.max(0,L[yt].g-100),je=!1;else try{Dl(It,J,"req"+De+"_")}catch{E&&E(It)}}if(je){E=J.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Ji(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Be||re(),Z||(Be(),Z=!0),me.add(f,u),u.v=0}}function Ks(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Nn(R(u.Fa,u),Ll(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Vl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Nn(R(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Un(this),Vl(this))};function fa(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Vl(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=cn(u.qa);ze(f,"RID","rpc"),ze(f,"SID",u.K),ze(f,"AID",u.T),ze(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(f,"TO",u.ja),ze(f,"TYPE","xmlhttp"),Ar(u,f),u.m&&u.o&&Zr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(cn(f)),y.m=null,y.P=!0,sa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Un(this),Ks(this),st(19))};function Qs(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Xs(u,f){var y=null;if(u.g==f){Qs(u),fa(u),u.g=null;var E=2}else if(qt(u.h,f))y=f.D,Rl(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=u.B;E=zi(),gt(E,new Vs(E,y)),er(u)}else Ji(u);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Gc(u,f)||E==2&&Ks(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),L){case 1:Rr(u,5);break;case 4:Rr(u,10);break;case 3:Rr(u,6);break;default:Rr(u,2)}}}function Ll(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Rr(u,f){if(u.j.info("Error code "+f),f==2){var y=R(u.fb,u),E=u.Xa;const L=!E;E=new Tr(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Qi(E,"https"),Xr(E),L?Hc(E.toString(),y):bl(E.toString(),y)}else st(2);u.G=0,u.l&&u.l.sa(f),Ml(u),Ws(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Ml(u){if(u.G=0,u.ka=[],u.l){const f=kl(u.h);(f.length!=0||u.i.length!=0)&&(z(u.ka,f),z(u.ka,u.i),u.h.i.length=0,G(u.i),u.i.length=0),u.l.ra()}}function Fl(u,f,y){var E=y instanceof Tr?cn(y):new Tr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Kr(E,E.s);else{var L=p.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var B=new Tr(null);E&&Qi(B,E),f&&(B.g=f),L&&Kr(B,L),y&&(B.l=y),E=B}return y=u.D,f=u.ya,y&&f&&ze(E,y,f),ze(E,"VER",u.la),Ar(u,E),E}function Ul(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Xe(new Ir({eb:y})):new Xe(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}r=pa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ys(){}Ys.prototype.g=function(u,f){return new Wt(u,f)};function Wt(u,f){mt.call(this),this.g=new da(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!oe(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!oe(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new tr(this)}H(Wt,mt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){xt(this.g)},Wt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Yo(u),u=y);f.i.push(new Sl(f.Ya++,u)),f.G==3&&er(f)},Wt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Wt.aa.N.call(this)};function jl(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}H(jl,Qn);function Bl(){Os.call(this),this.status=1}H(Bl,Os);function tr(u){this.g=u}H(tr,pa),tr.prototype.ua=function(){gt(this.g,"a")},tr.prototype.ta=function(u){gt(this.g,new jl(u))},tr.prototype.sa=function(u){gt(this.g,new Bl)},tr.prototype.ra=function(){gt(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,R_=function(){return new Ys},A_=function(){return zi()},S_=Xn,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,$u=Ms,wl.COMPLETE="complete",I_=wl,Ds.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,ja=Ds,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,T_=Xe}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const Mg="@firebase/firestore",Fg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new cf("@firebase/firestore");function wo(){return vs.logLevel}function ne(r,...e){if(vs.logLevel<=Ce.DEBUG){const t=e.map(ff);vs.debug(`Firestore (${Lo}): ${r}`,...t)}}function Ur(r,...e){if(vs.logLevel<=Ce.ERROR){const t=e.map(ff);vs.error(`Firestore (${Lo}): ${r}`,...t)}}function Ci(r,...e){if(vs.logLevel<=Ce.WARN){const t=e.map(ff);vs.warn(`Firestore (${Lo}): ${r}`,...t)}}function ff(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,k_(r,s,t)}function k_(r,e,t){let s=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ur(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||k_(e,o,s)}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new C_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class tI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ug(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ug(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iI(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ae(r,e){return r<e?-1:r>e?1:0}function Fd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const l=x_(),h=sI(l.encode(jg(r,t)),l.encode(jg(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(r.length,e.length)}function jg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function sI(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ae(r[t],e[t]);return Ae(r.length,e.length)}function Po(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ai.fromString(e.substring(4,e.length-2))}}class We extends or{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends or{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bg}static keyField(){return new Dt([Bg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ee($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new ee($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(We.fromString(e))}static fromName(e){return new pe(We.fromString(e).popFirst(5))}static empty(){return new pe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(r,e,t){if(!t)throw new ee($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function aI(r,e,t,s){if(e===!0&&s===!0)throw new ee($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zg(r){if(!pe.isDocumentKey(r))throw new ee($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $g(r){if(pe.isDocumentKey(r))throw new ee($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function N_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ec(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function jr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(r);throw new ee($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function al(r,e){if(!N_(r))throw new ee($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=-62135596800,qg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*qg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hg)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qg}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(al(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ft("string",Qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Qe(0,0))}static max(){return new Te(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=-1;function lI(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new xi(o,pe.empty(),e)}function uI(r){return new xi(r.readTime,r.key,Ja)}class xi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new xi(Te.min(),pe.empty(),Ja)}static max(){return new xi(Te.max(),pe.empty(),Ja)}}function cI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==hI)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++p,p===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function fI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Tc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=-1;function Ic(r){return r==null}function tc(r){return r===0&&1/r==-1/0}function pI(r){return typeof r=="number"&&Number.isInteger(r)&&!tc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="";function mI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Wg(e)),e=gI(r.get(t),e);return Wg(e)}function gI(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case b_:t+="";break;default:t+=l}}return t}function Wg(r){return r+b_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Li(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function D_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lu(this.root,e,this.comparator,!0)}}class Lu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new bt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kg(this.data.getIterator())}getIteratorFrom(e){return new Kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new wt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new O_("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=yI.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="server_timestamp",L_="__type__",M_="__previous_value__",F_="__local_write_time__";function gf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[L_])===null||t===void 0?void 0:t.stringValue)===V_}function Sc(r){const e=r.mapValue.fields[M_];return gf(e)?Sc(e):e}function Za(r){const e=Pi(r.mapValue.fields[F_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t,s,o,l,h,p,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const nc="(default)";class el{constructor(e,t){this.projectId=e,this.database=t||nc}static empty(){return new el("","")}get isDefaultDatabase(){return this.database===nc}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="__type__",vI="__max__",Mu={mapValue:{}},j_="__vector__",rc="value";function bi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gf(r)?4:EI(r)?9007199254740991:wI(r)?10:11:_e(28295,{value:r})}function mr(r,e){if(r===e)return!0;const t=bi(r);if(t!==bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Za(r).isEqual(Za(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Pi(o.timestampValue),p=Pi(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),p=at(l.doubleValue);return h===p?tc(h)===tc(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(Gg(h)!==Gg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!mr(h[g],p[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function tl(r,e){return(r.values||[]).find((t=>mr(t,e)))!==void 0}function No(r,e){if(r===e)return 0;const t=bi(r),s=bi(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=at(l.integerValue||l.doubleValue),g=at(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Qg(r.timestampValue,e.timestampValue);case 4:return Qg(Za(r),Za(e));case 5:return Fd(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=Ni(l),g=Ni(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const w=Ae(p[_],g[_]);if(w!==0)return w}return Ae(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Ae(at(l.latitude),at(h.latitude));return p!==0?p:Ae(at(l.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Xg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var p,g,_,w;const T=l.fields||{},R=h.fields||{},j=(p=T[rc])===null||p===void 0?void 0:p.arrayValue,H=(g=R[rc])===null||g===void 0?void 0:g.arrayValue,G=Ae(((_=j?.values)===null||_===void 0?void 0:_.length)||0,((w=H?.values)===null||w===void 0?void 0:w.length)||0);return G!==0?G:Xg(j,H)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Mu.mapValue&&h===Mu.mapValue)return 0;if(l===Mu.mapValue)return 1;if(h===Mu.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const R=Fd(g[T],w[T]);if(R!==0)return R;const j=No(p[g[T]],_[w[T]]);if(j!==0)return j}return Ae(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function Qg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Pi(r),s=Pi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Xg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=No(t[o],s[o]);if(l)return l}return Ae(t.length,s.length)}function bo(r){return Ud(r)}function Ud(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Pi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Ud(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Ud(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Hu(r){switch(bi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sc(r);return e?16+Hu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Hu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((l,h)=>{o+=l.length+Hu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Yg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function jd(r){return!!r&&"integerValue"in r}function yf(r){return!!r&&"arrayValue"in r}function Jg(r){return!!r&&"nullValue"in r}function Zg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qu(r){return!!r&&"mapValue"in r}function wI(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[U_])===null||t===void 0?void 0:t.stringValue)===j_}function qa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Li(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=qa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function EI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!qu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qa(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=qa(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());qu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];qu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new an(qa(this.value))}}function B_(r){const e=[];return Li(r.fields,((t,s)=>{const o=new Dt([t]);if(qu(s)){const l=B_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),an.empty(),0)}static newFoundDocument(e,t,s,o){return new $t(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),an.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.position=e,this.inclusive=t}}function ey(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=No(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function ty(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!mr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function TI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{}class dt extends z_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new SI(e,t,s):t==="array-contains"?new kI(e,s):t==="in"?new CI(e,s):t==="not-in"?new xI(e,s):t==="array-contains-any"?new PI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new AI(e,s):new RI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&bi(this.value)===bi(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends z_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kn(e,t)}matches(e){return $_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function $_(r){return r.op==="and"}function H_(r){return II(r)&&$_(r)}function II(r){for(const e of r.filters)if(e instanceof Kn)return!1;return!0}function Bd(r){if(r instanceof dt)return r.field.canonicalString()+r.op.toString()+bo(r.value);if(H_(r))return r.filters.map((e=>Bd(e))).join(",");{const e=r.filters.map((t=>Bd(t))).join(",");return`${r.op}(${e})`}}function q_(r,e){return r instanceof dt?(function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&mr(s.value,o.value)})(r,e):r instanceof Kn?(function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&q_(h,o.filters[p])),!0):!1})(r,e):void _e(19439)}function W_(r){return r instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${bo(t.value)}`})(r):r instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(W_).join(" ,")+"}"})(r):"Filter"}class SI extends dt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class AI extends dt{constructor(e,t){super(e,"in",t),this.keys=G_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class RI extends dt{constructor(e,t){super(e,"not-in",t),this.keys=G_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function G_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class kI extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yf(t)&&tl(t.arrayValue,this.value)}}class CI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tl(this.value.arrayValue,t)}}class xI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!tl(this.value.arrayValue,t)}}class PI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>tl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Pe=null}}function ny(r,e=null,t=[],s=[],o=null,l=null,h=null){return new NI(r,e,t,s,o,l,h)}function _f(r){const e=Ie(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Bd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>bo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>bo(s))).join(",")),e.Pe=t}return e.Pe}function vf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!TI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!q_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ty(r.startAt,e.startAt)&&ty(r.endAt,e.endAt)}function zd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bI(r,e,t,s,o,l,h,p){return new ll(r,e,t,s,o,l,h,p)}function wf(r){return new ll(r)}function ry(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function K_(r){return r.collectionGroup!==null}function Wa(r){const e=Ie(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new sc(l,s))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new sc(Dt.keyField(),s))}return e.Te}function ur(r){const e=Ie(r);return e.Ie||(e.Ie=DI(e,Wa(r))),e.Ie}function DI(r,e){if(r.limitType==="F")return ny(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new sc(o.field,l)}));const t=r.endAt?new ic(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ic(r.startAt.position,r.startAt.inclusive):null;return ny(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function $d(r,e){const t=r.filters.concat([e]);return new ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Hd(r,e,t){return new ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ac(r,e){return vf(ur(r),ur(e))&&r.limitType===e.limitType}function Q_(r){return`${_f(ur(r))}|lt:${r.limitType}`}function Eo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>W_(o))).join(", ")}]`),Ic(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>bo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>bo(o))).join(",")),`Target(${s})`})(ur(r))}; limitType=${r.limitType})`}function Rc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Wa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const _=ey(h,p,g);return h.inclusive?_<=0:_<0})(s.startAt,Wa(s),o)||s.endAt&&!(function(h,p,g){const _=ey(h,p,g);return h.inclusive?_>=0:_>0})(s.endAt,Wa(s),o))})(r,e)}function OI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function X_(r){return(e,t)=>{let s=!1;for(const o of Wa(r)){const l=VI(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function VI(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,p){const g=h.data.field(l),_=p.data.field(l);return g!==null&&_!==null?No(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new et(pe.comparator);function Br(){return LI}const Y_=new et(pe.comparator);function Ba(...r){let e=Y_;for(const t of r)e=e.insert(t.key,t);return e}function J_(r){let e=Y_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fs(){return Ga()}function Z_(){return Ga()}function Ga(){return new Ss((r=>r.toString()),((r,e)=>r.isEqual(e)))}const MI=new et(pe.comparator),FI=new wt(pe.comparator);function xe(...r){let e=FI;for(const t of r)e=e.add(t);return e}const UI=new wt(Ae);function jI(){return UI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function ev(r){return{integerValue:""+r}}function BI(r,e){return pI(e)?ev(e):Ef(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function zI(r,e,t){return r instanceof oc?(function(o,l){const h={fields:{[L_]:{stringValue:V_},[F_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&gf(l)&&(l=Sc(l)),l&&(h.fields[M_]=l),{mapValue:h}})(t,e):r instanceof nl?nv(r,e):r instanceof rl?rv(r,e):(function(o,l){const h=tv(o,l),p=iy(h)+iy(o.Ee);return jd(h)&&jd(o.Ee)?ev(p):Ef(o.serializer,p)})(r,e)}function $I(r,e,t){return r instanceof nl?nv(r,e):r instanceof rl?rv(r,e):t}function tv(r,e){return r instanceof ac?(function(s){return jd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class oc extends kc{}class nl extends kc{constructor(e){super(),this.elements=e}}function nv(r,e){const t=iv(e);for(const s of r.elements)t.some((o=>mr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class rl extends kc{constructor(e){super(),this.elements=e}}function rv(r,e){let t=iv(e);for(const s of r.elements)t=t.filter((o=>!mr(o,s)));return{arrayValue:{values:t}}}class ac extends kc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iy(r){return at(r.integerValue||r.doubleValue)}function iv(r){return yf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function HI(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof nl&&o instanceof nl||s instanceof rl&&o instanceof rl?Po(s.elements,o.elements,mr):s instanceof ac&&o instanceof ac?mr(s.Ee,o.Ee):s instanceof oc&&o instanceof oc})(r.transform,e.transform)}class qI{constructor(e,t){this.version=e,this.transformResults=t}}class _n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Cc{}function sv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tf(r.key,_n.none()):new ul(r.key,r.data,_n.none());{const t=r.data,s=an.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Mi(r.key,s,new gn(o.toArray()),_n.none())}}function WI(r,e,t){r instanceof ul?(function(o,l,h){const p=o.value.clone(),g=oy(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Mi?(function(o,l,h){if(!Wu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=oy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(ov(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ka(r,e,t,s){return r instanceof ul?(function(l,h,p,g){if(!Wu(l.precondition,h))return p;const _=l.value.clone(),w=ay(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Mi?(function(l,h,p,g){if(!Wu(l.precondition,h))return p;const _=ay(l.fieldTransforms,g,h),w=h.data;return w.setAll(ov(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,p){return Wu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function GI(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=tv(s.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(s.field,l))}return t||null}function sy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Po(s,o,((l,h)=>HI(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ul extends Cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends Cc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ov(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function oy(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,$I(h,p,t[o]))}return s}function ay(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,zI(l,h,e))}return s}class Tf extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&WI(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Z_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=sv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,s)=>sy(t,s)))&&Po(this.baseMutations,e.baseMutations,((t,s)=>sy(t,s)))}}class If{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return MI})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new If(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Oe;function JI(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function av(r){if(r===void 0)return Ur("GRPC error has no .code"),$.UNKNOWN;switch(r){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(Oe=ht||(ht={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Ai([4294967295,4294967295],0);function ly(r){const e=x_().encode(r),t=new E_;return t.update(e),new Uint8Array(t.digest())}function uy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ai([t,s],0),new Ai([o,l],0)]}class Sf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new za(`Invalid padding: ${t}`);if(s<0)throw new za(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new za(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ai.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ai.fromNumber(s)));return o.compare(ZI)===1&&(o=new Ai([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ly(e),[s,o]=uy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Sf(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.fe===0)return;const t=ly(e),[s,o]=uy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new xc(Te.min(),o,new et(Ae),Br(),xe())}}class cl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new cl(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class lv{constructor(e,t){this.targetId=e,this.De=t}}class uv{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class cy{constructor(){this.ve=0,this.Ce=hy(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=xe(),t=xe(),s=xe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new cl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=hy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class e1{constructor(e){this.We=e,this.Ge=new Map,this.ze=Br(),this.je=Fu(),this.Je=Fu(),this.He=new et(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(zd(l))if(s===0){const h=new pe(l.path);this.Xe(t,h,$t.newNoDocument(h,Te.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),g=p?this.ut(p,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=Ni(s).toUint8Array()}catch(g){if(g instanceof O_)return Ci("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Sf(h,o,l)}catch(g){return Ci(g instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const p=this.st(h);if(p){if(l.current&&zd(p.target)){const g=new pe(p.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,$t.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=xe();this.Je.forEach(((l,h)=>{let p=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new xc(e,t,this.He,this.ze,s);return this.ze=Br(),this.je=Fu(),this.Je=Fu(),this.He=new et(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new cy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new cy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Fu(){return new et(pe.comparator)}function hy(){return new et(pe.comparator)}const t1={asc:"ASCENDING",desc:"DESCENDING"},n1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r1={and:"AND",or:"OR"};class i1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qd(r,e){return r.useProto3Json||Ic(e)?e:{value:e}}function lc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function s1(r,e){return lc(r,e.toTimestamp())}function cr(r){return Ue(!!r,49232),Te.fromTimestamp((function(t){const s=Pi(t);return new Qe(s.seconds,s.nanos)})(r))}function Af(r,e){return Wd(r,e).canonicalString()}function Wd(r,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function hv(r){const e=We.fromString(r);return Ue(gv(e),10190,{key:e.toString()}),e}function Gd(r,e){return Af(r.databaseId,e.path)}function Id(r,e){const t=hv(e);if(t.get(1)!==r.databaseId.projectId)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(fv(t))}function dv(r,e){return Af(r.databaseId,e)}function o1(r){const e=hv(r);return e.length===4?We.emptyPath():fv(e)}function Kd(r){return new We(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function fv(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function dy(r,e,t){return{name:Gd(r,e),fields:t.value.mapValue.fields}}function a1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Ot.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ot.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const w=_.code===void 0?$.UNKNOWN:av(_.code);return new ee(w,_.message||"")})(h);t=new uv(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Id(r,s.document.name),l=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):Te.min(),p=new an({mapValue:{fields:s.document.fields}}),g=$t.newFoundDocument(o,l,h,p),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Gu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Id(r,s.document),l=s.readTime?cr(s.readTime):Te.min(),h=$t.newNoDocument(o,l),p=s.removedTargetIds||[];t=new Gu([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Id(r,s.document),l=s.removedTargetIds||[];t=new Gu([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new YI(o,l),p=s.targetId;t=new lv(p,h)}}return t}function l1(r,e){let t;if(e instanceof ul)t={update:dy(r,e.key,e.value)};else if(e instanceof Tf)t={delete:Gd(r,e.key)};else if(e instanceof Mi)t={update:dy(r,e.key,e.data),updateMask:y1(e.fieldMask)};else{if(!(e instanceof KI))return _e(16599,{Rt:e.type});t={verify:Gd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof oc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof nl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof rl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ac)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:s1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function u1(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Te.min())&&(h=cr(l)),new qI(h,o.transformResults||[])})(t,e)))):[]}function c1(r,e){return{documents:[dv(r,e.path)]}}function h1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=dv(r,o);const l=(function(_){if(_.length!==0)return mv(Kn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(R){return{field:To(R.field),direction:p1(R.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=qd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function d1(r){let e=o1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const R=pv(T);return R instanceof Kn&&H_(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((R=>(function(H){return new sc(Io(H.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(R)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let R;return R=typeof T=="object"?T.value:T,Ic(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(T){const R=!!T.before,j=T.values||[];return new ic(j,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const R=!T.before,j=T.values||[];return new ic(j,R)})(t.endAt)),bI(e,o,h,l,p,"F",g,_)}function f1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Io(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Io(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return dt.create(Io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((s=>pv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function p1(r){return t1[r]}function m1(r){return n1[r]}function g1(r){return r1[r]}function To(r){return{fieldPath:r.canonicalString()}}function Io(r){return Dt.fromServerFormat(r.fieldPath)}function mv(r){return r instanceof dt?(function(t){if(t.op==="=="){if(Zg(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(Jg(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zg(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(Jg(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:m1(t.op),value:t.value}}})(r):r instanceof Kn?(function(t){const s=t.getFilters().map((o=>mv(o)));return s.length===1?s[0]:{compositeFilter:{op:g1(t.op),filters:s}}})(r):_e(54877,{filter:r})}function y1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,s,o,l=Te.min(),h=Te.min(),p=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.gt=e}}function v1(r){const e=d1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.Dn=new E1}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(xi.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class E1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(We.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yv=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(yv,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Do(0)}static ur(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="LruGarbageCollector",T1=1048576;function my([r,e],[t,s]){const o=Ae(r,t);return o===0?Ae(e,s):o}class I1{constructor(e){this.Tr=e,this.buffer=new wt(my),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();my(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(py,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fo(t)?ne(py,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Rr(3e5)}))}}class A1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Tc.ue);const s=new I1(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(fy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,p,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,p=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),wo()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(g-p)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function R1(r,e){return new A1(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.changes=new Ss((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ka(s.mutation,o,gn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Ba();return l.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=fs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=Br();const h=Ga(),p=(function(){return Ga()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Mi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ka(w.mutation,_,w.mutation.getFieldMask(),Qe.now())):h.set(_.key,gn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return p.set(_,new C1(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),p)))}recalculateAndSaveOverlays(e,t){const s=Ga();let o=new et(((h,p)=>h-p)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||gn.empty();w=p.applyToLocalView(_,w),s.set(g,w);const T=(o.get(p.batchId)||xe()).add(g);o=o.insert(p.batchId,T)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,w=g.value,T=Z_();w.forEach((R=>{if(!l.has(R)){const j=sv(t.get(R),s.get(R));j!==null&&T.set(R,j),l=l.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):K_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(fs());let p=Ja,g=l;return h.next((_=>q.forEach(_,((w,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{g=g.insert(w,R)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,xe()))).next((w=>({batchId:p,changes:J_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ba();return this.indexManager.getCollectionParents(e,l).next((p=>q.forEach(p,(g=>{const _=(function(T,R){return new ll(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,R)=>{h=h.insert(T,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,$t.newInvalidDocument(w)))}));let p=Ba();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Ka(w.mutation,_,gn.empty(),Qe.now()),Rc(t,_)&&(p=p.insert(g,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:v1(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.overlays=new et(pe.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fs();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=fs(),l=t.length+1,h=new pe(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=fs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const p=fs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>p.set(_,w))),!(p.size()>=o)););return q.resolve(p)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new XI(t,s));let l=this.kr.get(t);l===void 0&&(l=xe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.qr=new wt(kt.Qr),this.$r=new wt(kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new kt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new kt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new pe(new We([])),s=new kt(t,e),o=new kt(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new We([])),s=new kt(t,e),o=new kt(t,e+1);let l=xe();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new kt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(kt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new QI(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Yr=this.Yr.add(new kt(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?mf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Hr);l.push(p)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Ae);return t.forEach((o=>{const l=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(p=>{s=s.add(p.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new kt(new pe(l),0);let p=new wt(Ae);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Hr)),!0)}),h),q.resolve(this.ei(p))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const l=new kt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new kt(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.ni=e,this.docs=(function(){return new et(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let s=Br();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Br();const h=t.path,p=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||cI(uI(w),s)<=0||(o.has(w.key)||Rc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new V1(this)}getSize(e){return q.resolve(this.size)}}class V1 extends k1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.persistence=e,this.ii=new Ss((t=>_f(t)),vf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new Rf,this.targetCount=0,this._i=Do.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.ai={},this.overlays={},this.ui=new Tc(0),this.ci=!1,this.ci=!0,this.li=new b1,this.referenceDelegate=e(this),this.hi=new L1(this),this.indexManager=new w1,this.remoteDocumentCache=(function(o){return new O1(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new _1(t),this.Ti=new P1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new D1(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new M1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class M1 extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Ai=new Rf,this.Ri=null}static Vi(e){return new kf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=pe.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class uc{constructor(e,t){this.persistence=e,this.gi=new Ss((s=>mI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=R1(this,t)}static Vi(e,t){return new uc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Cf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return OE()?8:fI(Ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new F1;return this.ws(e,t,h).next((p=>{if(l.result=p,this.Rs)return this.Ss(e,t,h,p.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(wo()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(wo()<=Ce.DEBUG&&ne("QueryEngine","Query:",Eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(wo()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}ps(e,t){if(ry(t))return q.resolve(null);let s=ur(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Hd(t,null,"F"),s=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=xe(...l);return this.gs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,p);return this.Ds(t,_,h,g.readTime)?this.ps(e,Hd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return ry(t)||o.isEqual(Te.min())?q.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?q.resolve(null):(wo()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.vs(e,h,t,lI(o,Ja)).next((p=>p)))}))}bs(e,t){let s=new wt(X_(e));return t.forEach(((o,l)=>{Rc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return wo()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.gs.getDocumentsMatchingQuery(e,t,xi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="LocalStore",j1=3e8;class B1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ae),this.Ms=new Ss((l=>_f(l)),vf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function z1(r,e,t,s){return new B1(r,e,t,s)}async function vv(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let g=xe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){p.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function $1(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,w){const T=_.batch,R=T.keys();let j=q.resolve();return R.forEach((H=>{j=j.next((()=>w.getEntry(g,H))).next((G=>{const z=_.docVersions.get(H);Ue(z!==null,48541),G.version.compareTo(z)<0&&(T.applyToRemoteDocument(G,_),G.isValidDocument()&&(G.setReadTime(_.commitVersion),w.addEntry(G)))}))})),j.next((()=>p.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=xe();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function wv(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function H1(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const p=[];e.targetChanges.forEach(((w,T)=>{const R=o.get(T);if(!R)return;p.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let j=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?j=j.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(T,j),(function(G,z,de){return G.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=j1?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(R,j,w)&&p.push(t.hi.updateTargetData(l,j))}));let g=Br(),_=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),p.push(q1(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(Te.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(w)}return q.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function q1(r,e,t){let s=xe(),o=xe();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Br();return t.forEach(((p,g)=>{const _=l.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ne(xf,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function W1(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=mf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function G1(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new Ei(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Qd(r,e,t){const s=Ie(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Fo(h))throw h;ne(xf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function gy(r,e,t){const s=Ie(r);let o=Te.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Ie(g),R=T.Ms.get(w);return R!==void 0?q.resolve(T.Fs.get(R)):T.hi.getTargetData(_,w)})(s,h,ur(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:xe()))).next((p=>(K1(s,OI(e),p),{documents:p,qs:l})))))}function K1(r,e,t){let s=r.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class yy{constructor(){this.activeTargetIds=jI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q1{constructor(){this.Fo=new yy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new yy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="ConnectivityMonitor";class vy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(_y,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(_y,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu=null;function Xd(){return Uu===null?Uu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Uu++,"0x"+Uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="RestConnection",Y1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===nc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Xd(),p=this.Go(e,t.toUriEncodedString());ne(Sd,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(p),w=Vi(_);return this.jo(e,p,g,s,w).then((T=>(ne(Sd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Ci(Sd,`RPC '${e}' ${h} failed with error: `,T,"url: ",p,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Lo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=Y1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class eS extends J1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=Xd();return new Promise(((p,g)=>{const _=new T_;_.setWithCredentials(!0),_.listenOnce(I_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case $u.NO_ERROR:const T=_.getResponseJson();ne(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),p(T);break;case $u.TIMEOUT:ne(Bt,`RPC '${e}' ${h} timed out`),g(new ee($.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const R=_.getStatus();if(ne(Bt,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const H=j?.error;if(H&&H.status&&H.message){const G=(function(de){const oe=de.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(oe)>=0?oe:$.UNKNOWN})(H.status);g(new ee(G,H.message))}else g(new ee($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Xd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=R_(),p=A_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(Bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let R=!1,j=!1;const H=new Z1({Ho:z=>{j?ne(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(R||(ne(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),ne(Bt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Yo:()=>T.close()}),G=(z,de,oe)=>{z.listen(de,(se=>{try{oe(se)}catch(ue){setTimeout((()=>{throw ue}),0)}}))};return G(T,ja.EventType.OPEN,(()=>{j||(ne(Bt,`RPC '${e}' stream ${o} transport opened.`),H.s_())})),G(T,ja.EventType.CLOSE,(()=>{j||(j=!0,ne(Bt,`RPC '${e}' stream ${o} transport closed`),H.__(),this.I_(T))})),G(T,ja.EventType.ERROR,(z=>{j||(j=!0,Ci(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),H.__(new ee($.UNAVAILABLE,"The operation could not be completed")))})),G(T,ja.EventType.MESSAGE,(z=>{var de;if(!j){const oe=z.data[0];Ue(!!oe,16349);const se=oe,ue=se?.error||((de=se[0])===null||de===void 0?void 0:de.error);if(ue){ne(Bt,`RPC '${e}' stream ${o} received error:`,ue);const Ne=ue.status;let he=(function(C){const N=ht[C];if(N!==void 0)return av(N)})(Ne),P=ue.message;he===void 0&&(he=$.INTERNAL,P="Unknown error status: "+Ne+" with message "+ue.message),j=!0,H.__(new ee(he,P)),T.close()}else ne(Bt,`RPC '${e}' stream ${o} received:`,oe),H.a_(oe)}})),G(p,S_.STAT_EVENT,(z=>{z.stat===Md.PROXY?ne(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Md.NOPROXY&&ne(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{H.o_()}),0),H}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r){return new i1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="PersistentStream";class Tv{constructor(e,t,s,o,l,h,p,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ev(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ee($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(wy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(wy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tS extends Tv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=a1(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?cr(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Kd(this.serializer),t.addTarget=(function(l,h){let p;const g=h.target;if(p=zd(g)?{documents:c1(l,g)}:{query:h1(l,g).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=cv(l,h.resumeToken);const _=qd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){p.readTime=lc(l,h.snapshotVersion.toTimestamp());const _=qd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=f1(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Kd(this.serializer),t.removeTarget=e,this.k_(t)}}class nS extends Tv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=u1(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Kd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>l1(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{}class iS extends rS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Wd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee($.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Jo(e,Wd(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee($.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class sS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="RemoteStore";class oS{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{As(this)&&(ne(ws,"Restarting streams for network reachability change."),await(async function(g){const _=Ie(g);_.Ia.add(4),await hl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Nc(_)})(this))}))})),this.Aa=new sS(s,o)}}async function Nc(r){if(As(r))for(const e of r.da)await e(!0)}async function hl(r){for(const e of r.da)await e(!1)}function Iv(r,e){const t=Ie(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Df(t)?bf(t):Uo(t).x_()&&Nf(t,e))}function Pf(r,e){const t=Ie(r),s=Uo(t);t.Ta.delete(e),s.x_()&&Sv(t,e),t.Ta.size===0&&(s.x_()?s.B_():As(t)&&t.Aa.set("Unknown"))}function Nf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Uo(r).H_(e)}function Sv(r,e){r.Ra.$e(e),Uo(r).Y_(e)}function bf(r){r.Ra=new e1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Uo(r).start(),r.Aa.aa()}function Df(r){return As(r)&&!Uo(r).M_()&&r.Ta.size>0}function As(r){return Ie(r).Ia.size===0}function Av(r){r.Ra=void 0}async function aS(r){r.Aa.set("Online")}async function lS(r){r.Ta.forEach(((e,t)=>{Nf(r,e)}))}async function uS(r,e){Av(r),Df(r)?(r.Aa.la(e),bf(r)):r.Aa.set("Unknown")}async function cS(r,e,t){if(r.Aa.set("Online"),e instanceof uv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ta.delete(p),o.Ra.removeTarget(p))})(r,e)}catch(s){ne(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cc(r,s)}else if(e instanceof Gu?r.Ra.Ye(e):e instanceof lv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Te.min()))try{const s=await wv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.Ra.Pt(h);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),Sv(l,g);const T=new Ei(w.target,g,_,w.sequenceNumber);Nf(l,T)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(s){ne(ws,"Failed to raise snapshot:",s),await cc(r,s)}}async function cc(r,e,t){if(!Fo(e))throw e;r.Ia.add(1),await hl(r),r.Aa.set("Offline"),t||(t=()=>wv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(ws,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Nc(r)}))}function Rv(r,e){return e().catch((t=>cc(r,t,e)))}async function bc(r){const e=Ie(r),t=Di(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:mf;for(;hS(e);)try{const o=await W1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,dS(e,o)}catch(o){await cc(e,o)}kv(e)&&Cv(e)}function hS(r){return As(r)&&r.Pa.length<10}function dS(r,e){r.Pa.push(e);const t=Di(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function kv(r){return As(r)&&!Di(r).M_()&&r.Pa.length>0}function Cv(r){Di(r).start()}async function fS(r){Di(r).na()}async function pS(r){const e=Di(r);for(const t of r.Pa)e.X_(t.mutations)}async function mS(r,e,t){const s=r.Pa.shift(),o=If.from(s,e,t);await Rv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await bc(r)}async function gS(r,e){e&&Di(r).Z_&&await(async function(s,o){if((function(h){return JI(h)&&h!==$.ABORTED})(o.code)){const l=s.Pa.shift();Di(s).N_(),await Rv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await bc(s)}})(r,e),kv(r)&&Cv(r)}async function Ey(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ne(ws,"RemoteStore received new credentials");const s=As(t);t.Ia.add(3),await hl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Nc(t)}async function yS(r,e){const t=Ie(r);e?(t.Ia.delete(2),await Nc(t)):e||(t.Ia.add(2),await hl(t),t.Aa.set("Unknown"))}function Uo(r){return r.Va||(r.Va=(function(t,s,o){const l=Ie(t);return l.ia(),new tS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:aS.bind(null,r),e_:lS.bind(null,r),n_:uS.bind(null,r),J_:cS.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Df(r)?bf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Av(r))}))),r.Va}function Di(r){return r.ma||(r.ma=(function(t,s,o){const l=Ie(t);return l.ia(),new nS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:fS.bind(null,r),n_:gS.bind(null,r),ea:pS.bind(null,r),ta:mS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await bc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(ws,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new Of(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Fo(r))return new ee($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Ba(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.fa=new et(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Oo{constructor(e,t,s,o,l,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new Oo(e,t,Ao.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vS{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=Iy(),l.forEach(((h,p)=>{for(const g of p.wa)g.onError(s)}))})(this,new ee($.ABORTED,"Firestore shutting down"))}}function Iy(){return new Ss((r=>Q_(r)),Ac)}async function xv(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new _S,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Vf(h,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Lf(t)}async function Pv(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wS(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.wa)p.Ca(o)&&(s=!0);h.ya=o}}s&&Lf(t)}function ES(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Lf(r){r.Da.forEach((e=>{e.next()}))}var Yd,Sy;(Sy=Yd||(Yd={})).Fa="default",Sy.Cache="cache";class Nv{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.key=e}}class Dv{constructor(e){this.key=e}}class TS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=xe(),this.mutatedKeys=xe(),this.Xa=X_(e),this.eu=new Ao(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Ty,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const R=o.get(w),j=Rc(this.query,T)?T:null,H=!!R&&this.mutatedKeys.has(R.key),G=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let z=!1;R&&j?R.data.isEqual(j.data)?H!==G&&(s.track({type:3,doc:j}),z=!0):this.iu(R,j)||(s.track({type:2,doc:j}),z=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(p=!0)):!R&&j?(s.track({type:0,doc:j}),z=!0):R&&!j&&(s.track({type:1,doc:R}),z=!0,(g||_)&&(p=!0)),z&&(j?(h=h.add(j),l=G?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:p,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(j,H){const G=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:z})}};return G(j)-G(H)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(s),o=o!=null&&o;const p=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Oo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ty,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=xe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Dv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new bv(s))})),t}uu(e){this.Ha=e.qs,this.Za=xe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Oo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mf="SyncEngine";class IS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class SS{constructor(e){this.key=e,this.lu=!1}}class AS{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ss((p=>Q_(p)),Ac),this.Tu=new Map,this.Iu=new Set,this.du=new et(pe.comparator),this.Eu=new Map,this.Au=new Rf,this.Ru={},this.Vu=new Map,this.mu=Do.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function RS(r,e,t=!0){const s=Uv(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Ov(s,e,t,!0),o}async function kS(r,e){const t=Uv(r);await Ov(t,e,!0,!1)}async function Ov(r,e,t,s){const o=await G1(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await CS(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Iv(r.remoteStore,o),p}async function CS(r,e,t,s,o){r.gu=(T,R,j)=>(async function(G,z,de,oe){let se=z.view.nu(de);se.Ds&&(se=await gy(G.localStore,z.query,!1).then((({documents:P})=>z.view.nu(P,se))));const ue=oe&&oe.targetChanges.get(z.targetId),Ne=oe&&oe.targetMismatches.get(z.targetId)!=null,he=z.view.applyChanges(se,G.isPrimaryClient,ue,Ne);return Ry(G,z.targetId,he._u),he.snapshot})(r,T,R,j);const l=await gy(r.localStore,e,!0),h=new TS(e,l.qs),p=h.nu(l.documents),g=cl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(p,r.isPrimaryClient,g);Ry(r,t,_._u);const w=new IS(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function xS(r,e,t){const s=Ie(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Ac(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Qd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Pf(s.remoteStore,o.targetId),Jd(s,o.targetId)})).catch(Mo)):(Jd(s,o.targetId),await Qd(s.localStore,o.targetId,!0))}async function PS(r,e){const t=Ie(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Pf(t.remoteStore,s.targetId))}async function NS(r,e,t){const s=FS(r);try{const o=await(function(h,p){const g=Ie(h),_=Qe.now(),w=p.reduce(((j,H)=>j.add(H.key)),xe());let T,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let H=Br(),G=xe();return g.Os.getEntries(j,w).next((z=>{H=z,H.forEach(((de,oe)=>{oe.isValidDocument()||(G=G.add(de))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,H))).next((z=>{T=z;const de=[];for(const oe of p){const se=GI(oe,T.get(oe.key).overlayedDocument);se!=null&&de.push(new Mi(oe.key,se,B_(se.value.mapValue),_n.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,de,p)})).next((z=>{R=z;const de=z.applyToLocalDocumentSet(T,G);return g.documentOverlayCache.saveOverlays(j,z.batchId,de)}))})).then((()=>({batchId:R.batchId,changes:J_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Ae)),_=_.insert(p,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await dl(s,o.changes),await bc(s.remoteStore)}catch(o){const l=Vf(o,"Failed to persist write");t.reject(l)}}async function Vv(r,e){const t=Ie(r);try{const s=await H1(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await dl(t,s,e)}catch(s){await Mo(s)}}function Ay(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Ie(h);g.onlineState=p;let _=!1;g.queries.forEach(((w,T)=>{for(const R of T.wa)R.va(p)&&(_=!0)})),_&&Lf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bS(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,$t.newNoDocument(l,Te.min()));const p=xe().add(l),g=new xc(Te.min(),new Map,new et(Ae),h,p);await Vv(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Ff(s)}else await Qd(s.localStore,e,!1).then((()=>Jd(s,e,t))).catch(Mo)}async function DS(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await $1(t.localStore,e);Mv(t,s,null),Lv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dl(t,o)}catch(o){await Mo(o)}}async function OS(r,e,t){const s=Ie(r);try{const o=await(function(h,p){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,p).next((T=>(Ue(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Mv(s,e,t),Lv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dl(s,o)}catch(o){await Mo(o)}}function Lv(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Mv(r,e,t){const s=Ie(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Jd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Fv(r,s)}))}function Fv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Pf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Ff(r))}function Ry(r,e,t){for(const s of t)s instanceof bv?(r.Au.addReference(s.key,e),VS(r,s)):s instanceof Dv?(ne(Mf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Fv(r,s.key)):_e(19791,{yu:s})}function VS(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(Mf,"New document in limbo: "+t),r.Iu.add(s),Ff(r))}function Ff(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(We.fromString(e)),s=r.mu.next();r.Eu.set(s,new SS(t)),r.du=r.du.insert(t,s),Iv(r.remoteStore,new Ei(ur(wf(t.path)),s,"TargetPurposeLimboResolution",Tc.ue))}}async function dl(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((p,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t?.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Cf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=Ie(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(R=>q.forEach(R.Is,(j=>w.persistence.referenceDelegate.addReference(T,R.targetId,j))).next((()=>q.forEach(R.ds,(j=>w.persistence.referenceDelegate.removeReference(T,R.targetId,j)))))))))}catch(T){if(!Fo(T))throw T;ne(xf,"Failed to update sequence numbers: "+T)}for(const T of _){const R=T.targetId;if(!T.fromCache){const j=w.Fs.get(R),H=j.snapshotVersion,G=j.withLastLimboFreeSnapshotVersion(H);w.Fs=w.Fs.insert(R,G)}}})(s.localStore,l))}async function LS(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ne(Mf,"User change. New user:",e.toKey());const s=await vv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((p=>{p.forEach((g=>{g.reject(new ee($.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dl(t,s.Bs)}}function MS(r,e){const t=Ie(r),s=t.Eu.get(e);if(s&&s.lu)return xe().add(s.key);{let o=xe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const p=t.Pu.get(h);o=o.unionWith(p.view.tu)}return o}}function Uv(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bS.bind(null,e),e.hu.J_=wS.bind(null,e.eventManager),e.hu.pu=ES.bind(null,e.eventManager),e}function FS(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OS.bind(null,e),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return z1(this.persistence,new U1,e.initialUser,this.serializer)}Du(e){return new _v(kf.Vi,this.serializer)}bu(e){return new Q1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class US extends hc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof uc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new S1(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new _v((s=>uc.Vi(s,t)),this.serializer)}}class Zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await yS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vS})()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),s=(function(l){return new eS(l)})(e.databaseInfo);return(function(l,h,p,g){return new iS(l,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new oS(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ay(this.syncEngine,t,0)),(function(){return vy.C()?new vy:new X1})())}createSyncEngine(e,t){return(function(o,l,h,p,g,_,w){const T=new AS(o,l,h,p,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);ne(ws,"RemoteStore shutting down."),l.Ia.add(5),await hl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zd.provider={build:()=>new Zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="FirestoreClient";class jS{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Rd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Oi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await vv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ci("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ci("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function ky(r,e){r.asyncQueue.verifyOperationInProgress();const t=await BS(r);ne(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Ey(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Ey(e.remoteStore,o))),r._onlineComponents=e}async function BS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Oi,"Using user provided OfflineComponentProvider");try{await Rd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ci("Error using user provided cache. Falling back to memory cache: "+t),await Rd(r,new hc)}}else ne(Oi,"Using default OfflineComponentProvider"),await Rd(r,new US(void 0));return r._offlineComponents}async function Bv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Oi,"Using user provided OnlineComponentProvider"),await ky(r,r._uninitializedComponentsProvider._online)):(ne(Oi,"Using default OnlineComponentProvider"),await ky(r,new Zd))),r._onlineComponents}function zS(r){return Bv(r).then((e=>e.syncEngine))}async function zv(r){const e=await Bv(r),t=e.eventManager;return t.onListen=RS.bind(null,e.syncEngine),t.onUnlisten=xS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PS.bind(null,e.syncEngine),t}function $S(r,e,t={}){const s=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,_){const w=new jv({next:R=>{w.Ou(),h.enqueueAndForget((()=>Pv(l,T)));const j=R.docs.has(p);!j&&R.fromCache?_.reject(new ee($.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&R.fromCache&&g&&g.source==="server"?_.reject(new ee($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new Nv(wf(p.path),w,{includeMetadataChanges:!0,ka:!0});return xv(l,T)})(await zv(r),r.asyncQueue,e,t,s))),s.promise}function HS(r,e,t={}){const s=new Mr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,_){const w=new jv({next:R=>{w.Ou(),h.enqueueAndForget((()=>Pv(l,T))),R.fromCache&&g.source==="server"?_.reject(new ee($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new Nv(p,w,{includeMetadataChanges:!0,ka:!0});return xv(l,T)})(await zv(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firestore.googleapis.com",xy=!0;class Py{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hv,this.ssl=xy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T1)throw new ee($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$v((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new JT;switch(s.type){case"firstParty":return new nI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Cy.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Cy.delete(t),s.terminate())})(this),Promise.resolve()}}function qS(r,e,t,s={}){var o;r=jr(r,Dc);const l=Vi(e),h=r._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(lf(`https://${g}`),uf("Firestore",!0)),h.host!==Hv&&h.host!==g&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ys(_,p)&&(r._setSettings(_),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=zt.MOCK_USER;else{w=m_(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ee($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(R)}r._authCredentials=new ZT(new C_(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class pt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(al(t,pt._jsonSchema))return new pt(e,s||null,new pe(We.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ft("string",pt._jsonSchemaVersion),referencePath:ft("string")};class Ri extends jo{constructor(e,t,s){super(e,t,wf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new pe(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function Rs(r,e,...t){if(r=lt(r),P_("collection","path",e),r instanceof Dc){const s=We.fromString(e,...t);return $g(s),new Ri(r,null,s)}{if(!(r instanceof pt||r instanceof Ri))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return $g(s),new Ri(r.firestore,null,s)}}function Ti(r,e,...t){if(r=lt(r),arguments.length===1&&(e=pf.newId()),P_("doc","path",e),r instanceof Dc){const s=We.fromString(e,...t);return zg(s),new pt(r,null,new pe(s))}{if(!(r instanceof pt||r instanceof Ri))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return zg(s),new pt(r.firestore,r instanceof Ri?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="AsyncQueue";class by{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ev(this,"async_queue_retry"),this.oc=()=>{const s=Ad();s&&ne(Ny,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Mr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Fo(e))throw e;ne(Ny,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",Dy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Of.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:Dy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Dy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Bo extends Dc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new by,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new by(e),this._firestoreClient=void 0,await e}}}function WS(r,e){const t=typeof r=="object"?r:df(),s=typeof r=="string"?r:nc,o=wc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=d_("firestore");l&&qS(o,...l)}return o}function Oc(r){if(r._terminated)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||GS(r),r._firestoreClient}function GS(r){var e,t,s;const o=r._freezeSettings(),l=(function(p,g,_,w){return new _I(p,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,$v(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new jS(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(p){const g=p?._online.build();return{_offline:p?._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Ot.fromBase64String(e))}catch(t){throw new ee($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(al(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:ft("string",xn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(al(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:ft("string",hr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(al(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new ee($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:ft("string",dr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=/^__.*__$/;class QS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}class qv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class jf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return dc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Wv(this.Ec)&&KS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class XS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Pc(e)}Dc(e,t,s,o=!1){return new jf({Ec:e,methodName:t,bc:s,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vc(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new XS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Gv(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);Bf("Data must be an object, but it was:",h,s);const p=Xv(s,h);let g,_;if(l.merge)g=new gn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const R=ef(e,T,t);if(!h.contains(R))throw new ee($.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Jv(w,R)||w.push(R)}g=new gn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new QS(new an(p),g,_)}class Lc extends Uf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lc}}function Kv(r,e,t,s){const o=r.Dc(1,e,t);Bf("Data must be an object, but it was:",o,s);const l=[],h=an.empty();Li(s,((g,_)=>{const w=zf(e,g,t);_=lt(_);const T=o.gc(w);if(_ instanceof Lc)l.push(w);else{const R=pl(_,T);R!=null&&(l.push(w),h.set(w,R))}}));const p=new gn(l);return new qv(h,p,o.fieldTransforms)}function Qv(r,e,t,s,o,l){const h=r.Dc(1,e,t),p=[ef(e,s,t)],g=[o];if(l.length%2!=0)throw new ee($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)p.push(ef(e,l[R])),g.push(l[R+1]);const _=[],w=an.empty();for(let R=p.length-1;R>=0;--R)if(!Jv(_,p[R])){const j=p[R];let H=g[R];H=lt(H);const G=h.gc(j);if(H instanceof Lc)_.push(j);else{const z=pl(H,G);z!=null&&(_.push(j),w.set(j,z))}}const T=new gn(_);return new qv(w,T,h.fieldTransforms)}function YS(r,e,t,s=!1){return pl(t,r.Dc(s?4:3,e))}function pl(r,e){if(Yv(r=lt(r)))return Bf("Unsupported field value:",e,r),Xv(r,e);if(r instanceof Uf)return(function(s,o){if(!Wv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let g=pl(p,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:lc(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:lc(o.serializer,l)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xn)return{bytesValue:cv(o.serializer,s._byteString)};if(s instanceof pt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof dr)return(function(h,p){return{mapValue:{fields:{[U_]:{stringValue:j_},[rc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw p.wc("VectorValues must only contain numeric values.");return Ef(p.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Ec(s)}`)})(r,e)}function Xv(r,e){const t={};return D_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(r,((s,o)=>{const l=pl(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Yv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof hr||r instanceof xn||r instanceof pt||r instanceof Uf||r instanceof dr)}function Bf(r,e,t){if(!Yv(t)||!N_(t)){const s=Ec(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function ef(r,e,t){if((e=lt(e))instanceof fl)return e._internalPath;if(typeof e=="string")return zf(r,e);throw dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const JS=new RegExp("[~\\*/\\[\\]]");function zf(r,e,t){if(e.search(JS)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fl(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function dc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee($.INVALID_ARGUMENT,p+r+g)}function Jv(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($f("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZS extends Zv{data(){return super.data()}}function $f(r,e){return typeof e=="string"?zf(r,e):e instanceof fl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hf{}class tA extends Hf{}function e0(r,e,...t){let s=[];e instanceof Hf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof qf)).length,p=l.filter((g=>g instanceof Mc)).length;if(h>1||h>0&&p>0)throw new ee($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Mc extends tA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Mc(e,t,s)}_apply(e){const t=this._parse(e);return n0(e._query,t),new jo(e.firestore,e.converter,$d(e._query,t))}_parse(e){const t=Vc(e.firestore);return(function(l,h,p,g,_,w,T){let R;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Vy(T,w);const H=[];for(const G of T)H.push(Oy(g,l,G));R={arrayValue:{values:H}}}else R=Oy(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Vy(T,w),R=YS(p,h,T,w==="in"||w==="not-in");return dt.create(_,w,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function t0(r,e,t){const s=e,o=$f("where",r);return Mc._create(o,s,t)}class qf extends Hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const p=l.getFlattenedFilters();for(const g of p)n0(h,g),h=$d(h,g)})(e._query,t),new jo(e.firestore,e.converter,$d(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Oy(r,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ee($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!K_(e)&&t.indexOf("/")!==-1)throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!pe.isDocumentKey(s))throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Yg(r,new pe(s))}if(t instanceof pt)return Yg(r,t._key);throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(t)}.`)}function Vy(r,e){if(!Array.isArray(r)||r.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function n0(r,e){const t=(function(o,l){for(const h of o)for(const p of h.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nA{convertValue(e,t="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[rc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>at(h.doubleValue)));return new dr(l)}convertGeoPoint(e){return new hr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Sc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Ue(gv(s),9688,{name:e});const o=new el(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends Zv{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($f("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:ft("string",ps._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Ku extends ps{data(e={}){return super.data(e)}}class Ro{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $a(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ku(this._firestore,this._userDataWriter,s.key,s,new $a(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new Ku(o._firestore,o._userDataWriter,p.doc.key,p.doc,new $a(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const g=new Ku(o._firestore,o._userDataWriter,p.doc.key,p.doc,new $a(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:rA(p.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(r){r=jr(r,pt);const e=jr(r.firestore,Bo);return $S(Oc(e),r._key).then((t=>oA(e,r,t)))}Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:ft("string",Ro._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class i0 extends nA{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function zo(r){r=jr(r,jo);const e=jr(r.firestore,Bo),t=Oc(e),s=new i0(e);return eA(r._query),HS(t,r._query).then((o=>new Ro(e,s,r,o)))}function s0(r,e,t,...s){r=jr(r,pt);const o=jr(r.firestore,Bo),l=Vc(o);let h;return h=typeof(e=lt(e))=="string"||e instanceof fl?Qv(l,"updateDoc",r._key,e,t,s):Kv(l,"updateDoc",r._key,e),Wf(o,[h.toMutation(r._key,_n.exists(!0))])}function sA(r,e){const t=jr(r.firestore,Bo),s=Ti(r),o=r0(r.converter,e);return Wf(t,[Gv(Vc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,_n.exists(!1))]).then((()=>s))}function Wf(r,e){return(function(s,o){const l=new Mr;return s.asyncQueue.enqueueAndForget((async()=>NS(await zS(s),o,l))),l.promise})(Oc(r),e)}function oA(r,e,t){const s=t.docs.get(e._key),o=new i0(r);return new ps(r,o,e._key,s,new $a(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vc(e)}set(e,t,s){this._verifyNotCommitted();const o=kd(e,this._firestore),l=r0(o.converter,t,s),h=Gv(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,_n.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const l=kd(e,this._firestore);let h;return h=typeof(t=lt(t))=="string"||t instanceof fl?Qv(this._dataReader,"WriteBatch.update",l._key,t,s,o):Kv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,_n.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kd(e,this._firestore);return this._mutations=this._mutations.concat(new Tf(t._key,_n.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kd(r,e){if((r=lt(r)).firestore!==e)throw new ee($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(r){return Oc(r=jr(r,Bo)),new aA(r,(e=>Wf(r,e)))}(function(e,t=!0){(function(o){Lo=o})(Is),_s(new ki("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new Bo(new eI(s.getProvider("auth-internal")),new rI(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),lr(Mg,Fg,e),lr(Mg,Fg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebasestorage.googleapis.com",a0="storageBucket",uA=120*1e3,cA=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends gr{constructor(e,t,s=0){super(Cd(e),`Firebase Storage: ${t} (${Cd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Cd(r){return"storage/"+r}function Gf(){const r="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,r)}function hA(r){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function dA(r){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fA(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,r)}function pA(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mA(r){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function gA(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yA(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function _A(r){return new rt(nt.INVALID_URL,"Invalid URL '"+r+"'.")}function vA(r){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function wA(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a0+"' property when initializing the app?")}function EA(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TA(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IA(r){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tf(r){return new rt(nt.INVALID_ARGUMENT,r)}function l0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function SA(r){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qa(r,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ua(r){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=yn.makeFromUrl(e,t)}catch{return new yn(e,"")}if(s.path==="")return s;throw vA(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(ue){ue.path.charAt(ue.path.length-1)==="/"&&(ue.path_=ue.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(ue){ue.path_=decodeURIComponent(ue.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",j=new RegExp(`^https?://${T}/${w}/b/${o}/o${R}`,"i"),H={bucket:1,path:3},G=t===o0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,z="([^?#]*)",de=new RegExp(`^https?://${G}/${o}/${z}`,"i"),se=[{regex:p,indices:g,postModify:l},{regex:j,indices:H,postModify:_},{regex:de,indices:{bucket:1,path:2},postModify:_}];for(let ue=0;ue<se.length;ue++){const Ne=se[ue],he=Ne.regex.exec(e);if(he){const P=he[Ne.indices.bucket];let S=he[Ne.indices.path];S||(S=""),s=new yn(P,S),Ne.postModify(s);break}}if(s==null)throw _A(e);return s}}class AA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(r,e,t){let s=1,o=null,l=null,h=!1,p=0;function g(){return p===2}let _=!1;function w(...z){_||(_=!0,e.apply(null,z))}function T(z){o=setTimeout(()=>{o=null,r(j,g())},z)}function R(){l&&clearTimeout(l)}function j(z,...de){if(_){R();return}if(z){R(),w.call(null,z,...de);return}if(g()||h){R(),w.call(null,z,...de);return}s<64&&(s*=2);let se;p===1?(p=2,se=0):se=(s+Math.random())*1e3,T(se)}let H=!1;function G(z){H||(H=!0,R(),!_&&(o!==null?(z||(p=2),clearTimeout(o),T(0)):z||(p=1)))}return T(0),l=setTimeout(()=>{h=!0,G(!0)},t),G}function kA(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(r){return r!==void 0}function xA(r){return typeof r=="object"&&!Array.isArray(r)}function Kf(r){return typeof r=="string"||r instanceof String}function Ly(r){return Qf()&&r instanceof Blob}function Qf(){return typeof Blob<"u"}function My(r,e,t,s){if(s<e)throw tf(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw tf(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(r,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${r}`}function u0(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ms;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ms||(ms={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t,s,o,l,h,p,g,_,w,T,R=!0,j=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=T,this.retry=R,this.isUsingEmulator=j,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((H,G)=>{this.resolve_=H,this.reject_=G,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new ju(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=p=>{const g=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const p=l.getErrorCode()===ms.NO_ERROR,g=l.getStatus();if(!p||PA(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ms.ABORT;s(!1,new ju(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new ju(_,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());CA(g)?l(g):l()}catch(g){h(g)}else if(p!==null){const g=Gf();g.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,g)):h(g)}else if(o.canceled){const g=this.appDelete_?l0():yA();h(g)}else{const g=gA();h(g)}};this.canceled_?t(!1,new ju(!1,null,!0)):this.backoffId_=RA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ju{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function bA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function DA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function VA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function LA(r,e,t,s,o,l,h=!0,p=!1){const g=u0(r.urlParams),_=r.url+g,w=Object.assign({},r.headers);return OA(w,e),bA(w,t),DA(w,l),VA(w,s),new NA(_,r.method,w,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FA(...r){const e=MA();if(e!==void 0){const t=new e;for(let s=0;s<r.length;s++)t.append(r[s]);return t.getBlob()}else{if(Qf())return new Blob(r);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UA(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(r){if(typeof atob>"u")throw IA("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xd{constructor(e,t){this.data=e,this.contentType=t||null}}function BA(r,e){switch(r){case ar.RAW:return new xd(c0(e));case ar.BASE64:case ar.BASE64URL:return new xd(h0(r,e));case ar.DATA_URL:return new xd($A(e),HA(e))}throw Gf()}function c0(r){const e=[];for(let t=0;t<r.length;t++){let s=r.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=r.charCodeAt(++t);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function zA(r){let e;try{e=decodeURIComponent(r)}catch{throw Qa(ar.DATA_URL,"Malformed data URL.")}return c0(e)}function h0(r,e){switch(r){case ar.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Qa(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Qa(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=jA(e)}catch(o){throw o.message.includes("polyfill")?o:Qa(r,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class d0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Qa(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=qA(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function $A(r){const e=new d0(r);return e.base64?h0(ar.BASE64,e.rest):zA(e.rest)}function HA(r){return new d0(r).contentType}function qA(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){let s=0,o="";Ly(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ly(this.data_)){const s=this.data_,o=UA(s,e,t);return o===null?null:new gi(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new gi(s,!0)}}static getBlob(...e){if(Qf()){const t=e.map(s=>s instanceof gi?s.data_:s);return new gi(FA.apply(null,t))}else{const t=e.map(h=>Kf(h)?BA(ar.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(h=>{for(let p=0;p<h.length;p++)o[l++]=h[p]}),new gi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(r){let e;try{e=JSON.parse(r)}catch{return null}return xA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function GA(r,e){const t=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?t:r+"/"+t}function p0(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(r,e){return e}class Qt{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||KA}}let Bu=null;function QA(r){return!Kf(r)||r.length<2?r:p0(r)}function m0(){if(Bu)return Bu;const r=[];r.push(new Qt("bucket")),r.push(new Qt("generation")),r.push(new Qt("metageneration")),r.push(new Qt("name","fullPath",!0));function e(l,h){return QA(h)}const t=new Qt("name");t.xform=e,r.push(t);function s(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=s,r.push(o),r.push(new Qt("timeCreated")),r.push(new Qt("updated")),r.push(new Qt("md5Hash",null,!0)),r.push(new Qt("cacheControl",null,!0)),r.push(new Qt("contentDisposition",null,!0)),r.push(new Qt("contentEncoding",null,!0)),r.push(new Qt("contentLanguage",null,!0)),r.push(new Qt("contentType",null,!0)),r.push(new Qt("metadata","customMetadata",!0)),Bu=r,Bu}function XA(r,e){function t(){const s=r.bucket,o=r.fullPath,l=new yn(s,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function YA(r,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];s[h.local]=h.xform(s,e[h.server])}return XA(s,r),s}function g0(r,e,t){const s=f0(e);return s===null?null:YA(r,s,t)}function JA(r,e,t,s){const o=f0(e);if(o===null||!Kf(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const w=r.bucket,T=r.fullPath,R="/b/"+h(w)+"/o/"+h(T),j=Xf(R,t,s),H=u0({alt:"media",token:_});return j+H})[0]}function ZA(r,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}class y0{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(r){if(!r)throw Gf()}function eR(r,e){function t(s,o){const l=g0(r,o,e);return _0(l!==null),l}return t}function tR(r,e){function t(s,o){const l=g0(r,o,e);return _0(l!==null),JA(l,o,r.host,r._protocol)}return t}function v0(r){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=pA():o=fA():t.getStatus()===402?o=dA(r.bucket):t.getStatus()===403?o=mA(r.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function nR(r){const e=v0(r);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=hA(r.path)),l.serverResponse=o.serverResponse,l}return t}function rR(r,e,t){const s=e.fullServerUrl(),o=Xf(s,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,p=new y0(o,l,tR(r,t),h);return p.errorHandler=nR(e),p}function iR(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function sR(r,e,t){const s=Object.assign({},t);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=iR(null,e)),s}function oR(r,e,t,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function p(){let se="";for(let ue=0;ue<2;ue++)se=se+Math.random().toString().slice(2);return se}const g=p();h["Content-Type"]="multipart/related; boundary="+g;const _=sR(e,s,o),w=ZA(_,t),T="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,R=`\r
--`+g+"--",j=gi.getBlob(T,s,R);if(j===null)throw EA();const H={name:_.fullPath},G=Xf(l,r.host,r._protocol),z="POST",de=r.maxUploadRetryTime,oe=new y0(G,z,eR(r,t),de);return oe.urlParams=H,oe.headers=h,oe.body=j.uploadData(),oe.errorHandler=v0(e),oe}class aR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ms.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ms.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ms.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,l){if(this.sent_)throw Ua("cannot .send() more than once");if(Vi(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lR extends aR{initXhr(){this.xhr_.responseType="text"}}function w0(){return new lR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this._service=e,t instanceof yn?this._location=t:this._location=yn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Es(e,t)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return p0(this._location.path)}get storage(){return this._service}get parent(){const e=WA(this._location.path);if(e===null)return null;const t=new yn(this._location.bucket,e);return new Es(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw SA(e)}}function uR(r,e,t){r._throwIfRoot("uploadBytes");const s=oR(r.storage,r._location,m0(),new gi(e,!0),t);return r.storage.makeRequestWithTokens(s,w0).then(o=>({metadata:o,ref:r}))}function cR(r){r._throwIfRoot("getDownloadURL");const e=rR(r.storage,r._location,m0());return r.storage.makeRequestWithTokens(e,w0).then(t=>{if(t===null)throw TA();return t})}function hR(r,e){const t=GA(r._location.path,e),s=new yn(r._location.bucket,t);return new Es(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(r){return/^[A-Za-z]+:\/\//.test(r)}function fR(r,e){return new Es(r,e)}function E0(r,e){if(r instanceof Yf){const t=r;if(t._bucket==null)throw wA();const s=new Es(t,t._bucket);return e!=null?E0(s,e):s}else return e!==void 0?hR(r,e):r}function pR(r,e){if(e&&dR(e)){if(r instanceof Yf)return fR(r,e);throw tf("To use ref(service, url), the first argument must be a Storage instance.")}else return E0(r,e)}function Fy(r,e){const t=e?.[a0];return t==null?null:yn.makeFromBucketSpec(t,r)}function mR(r,e,t,s={}){r.host=`${e}:${t}`;const o=Vi(e);o&&(lf(`https://${r.host}/b`),uf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:m_(l,r.app.options.projectId))}class Yf{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=o0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uA,this._maxUploadRetryTime=cA,this._requests=new Set,o!=null?this._bucket=yn.makeFromBucketSpec(o,this._host):this._bucket=Fy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=Fy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new AA(l0());{const h=LA(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const Uy="@firebase/storage",jy="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="storage";function gR(r,e,t){return r=lt(r),uR(r,e,t)}function yR(r){return r=lt(r),cR(r)}function _R(r,e){return r=lt(r),pR(r,e)}function vR(r=df(),e){r=lt(r);const s=wc(r,T0).getImmediate({identifier:e}),o=d_("storage");return o&&wR(s,...o),s}function wR(r,e,t,s={}){mR(r,e,t,s)}function ER(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Yf(t,s,o,e,Is)}function TR(){_s(new ki(T0,ER,"PUBLIC").setMultipleInstances(!0)),lr(Uy,jy,""),lr(Uy,jy,"esm2017")}TR();var IR="firebase",SR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(IR,SR,"app");function Jf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function I0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AR=I0,S0=new sl("auth","Firebase",I0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new cf("@firebase/auth");function RR(r,...e){fc.logLevel<=Ce.WARN&&fc.warn(`Auth (${Is}): ${r}`,...e)}function Qu(r,...e){fc.logLevel<=Ce.ERROR&&fc.error(`Auth (${Is}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r,...e){throw Zf(r,...e)}function fr(r,...e){return Zf(r,...e)}function A0(r,e,t){const s=Object.assign(Object.assign({},AR()),{[e]:t});return new sl("auth","Firebase",s).create(e,{appName:r.name})}function gs(r){return A0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return S0.create(r,...e)}function we(r,e,...t){if(!r)throw Zf(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qu(e),new Error(e)}function $r(r,e){r||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function kR(){return By()==="http:"||By()==="https:"}function By(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kR()||NE()||"connection"in navigator)?navigator.onLine:!0}function xR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,$r(t>e,"Short delay should be less than long delay!"),this.isMobile=CE()||bE()}get(){return CR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(r,e){$r(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bR=new ml(3e4,6e4);function tp(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function $o(r,e,t,s,o={}){return k0(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=ol(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return PE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(_.credentials="include"),R0.fetch()(await C0(r,r.config.apiHost,t,p),_)})}async function k0(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},PR),e);try{const o=new OR(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw zu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw zu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw A0(r,w,_);zr(r,w)}}catch(o){if(o instanceof gr)throw o;zr(r,"network-request-failed",{message:String(o)})}}async function DR(r,e,t,s,o={}){const l=await $o(r,e,t,s,o);return"mfaPendingCredential"in l&&zr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function C0(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?ep(r.config,o):`${r.config.apiScheme}://${o}`;return NR.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class OR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(fr(this.auth,"network-request-failed")),bR.get())})}}function zu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=fr(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(r,e){return $o(r,"POST","/v1/accounts:delete",e)}async function pc(r,e){return $o(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LR(r,e=!1){const t=lt(r),s=await t.getIdToken(e),o=np(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:Xa(Pd(o.auth_time)),issuedAtTime:Xa(Pd(o.iat)),expirationTime:Xa(Pd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Pd(r){return Number(r)*1e3}function np(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=c_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function zy(r){const e=np(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof gr&&MR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function MR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await il(r,pc(t,{idToken:s}));we(o?.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?x0(l.providerUserInfo):[],p=jR(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!p?.length,w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new rf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function UR(r){const e=lt(r);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jR(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function x0(r){return r.map(e=>{var{providerId:t}=e,s=Jf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(r,e){const t=await k0(r,{},async()=>{const s=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await C0(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(g.credentials="include"),R0.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zR(r,e){return $o(r,"POST","/v2/accounts:revokeToken",tp(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=zy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await BR(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new ko;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new rf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LR(this,e)}reload(){return UR(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await mc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(gs(this.auth));const e=await this.getIdToken();return await il(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,p,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(p=t.tenantId)!==null&&p!==void 0?p:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,de=(_=t.createdAt)!==null&&_!==void 0?_:void 0,oe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:se,emailVerified:ue,isAnonymous:Ne,providerData:he,stsTokenManager:P}=t;we(se&&P,e,"internal-error");const S=ko.fromJSON(this.name,P);we(typeof se=="string",e,"internal-error"),mi(T,e.name),mi(R,e.name),we(typeof ue=="boolean",e,"internal-error"),we(typeof Ne=="boolean",e,"internal-error"),mi(j,e.name),mi(H,e.name),mi(G,e.name),mi(z,e.name),mi(de,e.name),mi(oe,e.name);const C=new Gn({uid:se,auth:e,email:R,emailVerified:ue,displayName:T,isAnonymous:Ne,photoURL:H,phoneNumber:j,tenantId:G,stsTokenManager:S,createdAt:de,lastLoginAt:oe});return he&&Array.isArray(he)&&(C.providerData=he.map(N=>Object.assign({},N))),z&&(C._redirectEventId=z),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new ko;o.updateFromServerResponse(t);const l=new Gn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await mc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?x0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,p=new ko;p.updateFromIdToken(s);const g=new Gn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function Lr(r){$r(r instanceof Function,"Expected a class definition");let e=$y.get(r);return e?($r(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$y.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}P0.type="NONE";const Hy=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(r,e,t){return`firebase:${r}:${e}:${t}`}class Co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pc(this.auth,{idToken:e}).catch(()=>{});return t?Gn._fromGetAccountInfoResponse(this.auth,t,e):null}return Gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Co(Lr(Hy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Lr(Hy);const h=Xu(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const R=await pc(e,{idToken:w}).catch(()=>{});if(!R)break;T=await Gn._fromGetAccountInfoResponse(e,R,w)}else T=Gn._fromJSON(e,w);_!==l&&(p=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Co(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Co(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L0(e))return"Blackberry";if(M0(e))return"Webos";if(b0(e))return"Safari";if((e.includes("chrome/")||D0(e))&&!e.includes("edge/"))return"Chrome";if(V0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function N0(r=Ht()){return/firefox\//i.test(r)}function b0(r=Ht()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D0(r=Ht()){return/crios\//i.test(r)}function O0(r=Ht()){return/iemobile/i.test(r)}function V0(r=Ht()){return/android/i.test(r)}function L0(r=Ht()){return/blackberry/i.test(r)}function M0(r=Ht()){return/webos/i.test(r)}function rp(r=Ht()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function $R(r=Ht()){var e;return rp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HR(){return DE()&&document.documentMode===10}function F0(r=Ht()){return rp(r)||V0(r)||M0(r)||L0(r)||/windows phone/i.test(r)||O0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r,e=[]){let t;switch(r){case"Browser":t=qy(Ht());break;case"Worker":t=`${qy(Ht())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Is}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(r,e={}){return $o(r,"GET","/v2/passwordPolicy",tp(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=6;class KR{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:GR,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.beforeStateQueue=new qR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pc(this,{idToken:e}),s=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(gs(this));const t=e?lt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(gs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(gs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WR(this),t=new KR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=U0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&RR(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ip(r){return lt(r)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XR(r){sp=r}function YR(r){return sp.loadJS(r)}function JR(){return sp.gapiScript}function ZR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(r,e){const t=wc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;zr(o,"already-initialized")}return t.initialize({options:e})}function tk(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Lr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function nk(r,e,t){const s=ip(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=j0(e),{host:h,port:p}=rk(e),g=p===null?"":`:${p}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(ys(_,s.config.emulator)&&ys(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Vi(h)?(lf(`${l}//${h}${g}`),uf("Auth",!0)):ik()}function j0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function rk(r){const e=j0(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Gy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Gy(h)}}}function Gy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ik(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(r,e){return DR(r,"POST","/v1/accounts:signInWithIdp",tp(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="http://localhost";class Ts extends B0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Jf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ts(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:sk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends z0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends gl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _i.credential(t,s)}catch{return null}}}_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends gl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends gl{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return wi.credential(t,s)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Gn._fromIdTokenResponse(e,s,o),h=Ky(s);return new Vo({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ky(s);return new Vo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ky(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends gr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new gc(e,t,s,o)}}function $0(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(r,l,e,s):l})}async function ok(r,e,t=!1){const s=await il(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Vo._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(r,e,t=!1){const{auth:s}=r;if(Wn(s.app))return Promise.reject(gs(s));const o="reauthenticate";try{const l=await il(r,$0(s,o,e,r),t);we(l.idToken,s,"internal-error");const h=np(l.idToken);we(h,s,"internal-error");const{sub:p}=h;return we(r.uid===p,s,"user-mismatch"),Vo._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&zr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(r,e,t=!1){if(Wn(r.app))return Promise.reject(gs(r));const s="signIn",o=await $0(r,s,e),l=await Vo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function uk(r,e,t,s){return lt(r).onIdTokenChanged(e,t,s)}function ck(r,e,t){return lt(r).beforeAuthStateChanged(e,t)}const yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1e3,dk=10;class q0 extends H0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=F0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);HR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,dk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}q0.type="LOCAL";const fk=q0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0 extends H0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}W0.type="SESSION";const G0=W0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,l)),g=await pk(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const _=op("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(R.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function gk(r){pr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function yk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _k(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function vk(){return K0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="firebaseLocalStorageDb",wk=1,_c="firebaseLocalStorage",X0="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uc(r,e){return r.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function Ek(){const r=indexedDB.deleteDatabase(Q0);return new yl(r).toPromise()}function sf(){const r=indexedDB.open(Q0,wk);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(_c,{keyPath:X0})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(_c)?e(s):(s.close(),await Ek(),e(await sf()))})})}async function Qy(r,e,t){const s=Uc(r,!0).put({[X0]:e,value:t});return new yl(s).toPromise()}async function Tk(r,e){const t=Uc(r,!1).get(e),s=await new yl(t).toPromise();return s===void 0?null:s.value}function Xy(r,e){const t=Uc(r,!0).delete(e);return new yl(t).toPromise()}const Ik=800,Sk=3;class Y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Sk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(vk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yk(),!this.activeServiceWorker)return;this.sender=new mk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await Qy(e,yc,"1"),await Xy(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Tk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Uc(o,!1).getAll();return new yl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y0.type="LOCAL";const Ak=Y0;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(r,e){return e?Lr(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends B0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kk(r){return lk(r.auth,new ap(r),r.bypassAuthState)}function Ck(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),ak(t,new ap(r),r.bypassAuthState)}async function xk(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),ok(t,new ap(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kk;case"linkViaPopup":case"linkViaRedirect":return xk;case"reauthViaPopup":case"reauthViaRedirect":return Ck;default:zr(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new ml(2e3,1e4);class So extends J0{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pk.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="pendingRedirect",Yu=new Map;class bk extends J0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const s=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(r,e){const t=Lk(e),s=Vk(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Ok(r,e){Yu.set(r._key(),e)}function Vk(r){return Lr(r._redirectPersistence)}function Lk(r){return Xu(Nk,r.config.apiKey,r.name)}async function Mk(r,e,t=!1){if(Wn(r.app))return Promise.reject(gs(r));const s=ip(r),o=Rk(s,e),h=await new bk(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=600*1e3;class Uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Z0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(fr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Z0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function jk(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(r,e={}){return $o(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$k=/^https?/;async function Hk(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Bk(r);for(const t of e)try{if(qk(t))return}catch{}zr(r,"unauthorized-domain")}function qk(r){const e=nf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!$k.test(t))return!1;if(zk.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new ml(3e4,6e4);function Jy(){const r=pr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Gk(r){return new Promise((e,t)=>{var s,o,l;function h(){Jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jy(),t(fr(r,"network-request-failed"))},timeout:Wk.get()})}if(!((o=(s=pr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pr().gapi)===null||l===void 0)&&l.load)h();else{const p=ZR("iframefcb");return pr()[p]=()=>{gapi.load?h():t(fr(r,"network-request-failed"))},YR(`${JR()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function Kk(r){return Ju=Ju||Gk(r),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new ml(5e3,15e3),Xk="__/auth/iframe",Yk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eC(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ep(e,Yk):`https://${r.config.authDomain}/${Xk}`,s={apiKey:e.apiKey,appName:r.name,v:Is},o=Zk.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ol(s).slice(1)}`}async function tC(r){const e=await Kk(r),t=pr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:eC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=fr(r,"network-request-failed"),p=pr().setTimeout(()=>{l(h)},Qk.get());function g(){pr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rC=500,iC=600,sC="_blank",oC="http://localhost";class Zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(r,e,t,s=rC,o=iC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},nC),{width:s.toString(),height:o.toString(),top:l,left:h}),_=Ht().toLowerCase();t&&(p=D0(_)?sC:t),N0(_)&&(e=e||oC,g.scrollbars="yes");const w=Object.entries(g).reduce((R,[j,H])=>`${R}${j}=${H},`,"");if($R(_)&&p!=="_self")return lC(e||"",p),new Zy(null);const T=window.open(e||"",p,w);we(T,r,"popup-blocked");try{T.focus()}catch{}return new Zy(T)}function lC(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="__/auth/handler",cC="emulator/auth/handler",hC=encodeURIComponent("fac");async function e_(r,e,t,s,o,l){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Is,eventId:o};if(e instanceof z0){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",jE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof gl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await r._getAppCheckToken(),_=g?`#${hC}=${encodeURIComponent(g)}`:"";return`${dC(r)}?${ol(p).slice(1)}${_}`}function dC({config:r}){return r.emulator?ep(r,cC):`https://${r.authDomain}/${uC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G0,this._completeRedirectFn=Mk,this._overrideRedirectResult=Ok}async _openPopup(e,t,s,o){var l;$r((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await e_(e,t,s,nf(),o);return aC(e,h,op())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await e_(e,t,s,nf(),o);return gk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):($r(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await tC(e),s=new Uk(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Nd,{type:Nd},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Nd];h!==void 0&&t(!!h),zr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return F0()||b0()||rp()}}const pC=fC;var t_="@firebase/auth",n_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yC(r){_s(new ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:U0(r)},_=new QR(s,o,l,g);return tk(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_s(new ki("auth-internal",e=>{const t=ip(e.getProvider("auth").getImmediate());return(s=>new mC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(t_,n_,gC(r)),lr(t_,n_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=300,vC=p_("authIdTokenMaxAge")||_C;let r_=null;const wC=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vC)return;const o=t?.token;r_!==o&&(r_=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function EC(r=df()){const e=wc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ek(r,{popupRedirectResolver:pC,persistence:[Ak,fk,G0]}),s=p_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=wC(l.toString());ck(t,h,()=>h(t.currentUser)),uk(t,p=>h(p))}}const o=h_("auth");return o&&nk(t,`http://${o}`),t}function TC(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}XR({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=fr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",TC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yC("Browser");const IC={apiKey:"AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A",authDomain:"test-f80e2.firebaseapp.com",projectId:"test-f80e2",storageBucket:"test-f80e2.firebasestorage.app",messagingSenderId:"998655559449",appId:"1:998655559449:web:7cf8fe76af797e7904e788"},lp=__(IC);EC(lp);const Xt=WS(lp),SC=vR(lp),ln={CAREGIVERS:"caregivers",PATIENTS:"patients",REMINDERS:"reminders",LINKING_CODES:"linkingCodes"},AC=[{id:"c1",email:"maria@careconnect.example",name:"Maria"},{id:"c2",email:"john@careconnect.example",name:"John"},{id:"c3",email:"sarah@careconnect.example",name:"Sarah"}],RC=[{id:"p1",name:"James",caregiverId:"c1"},{id:"p2",name:"Eleanor",caregiverId:"c1"},{id:"p3",name:"Robert",caregiverId:"c2"},{id:"p4",name:"Margaret",caregiverId:"c3"}],kC=[{id:"r1",patientId:"p1",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r2",patientId:"p1",title:"Drink water",time:"10:00 AM",done:!1},{id:"r3",patientId:"p1",title:"Lunch",time:"12:30 PM",done:!1},{id:"r4",patientId:"p1",title:"Afternoon walk",time:"3:00 PM",done:!1},{id:"r5",patientId:"p2",title:"Take morning medication",time:"8:30 AM",done:!1},{id:"r6",patientId:"p2",title:"Call family",time:"2:00 PM",done:!1},{id:"r7",patientId:"p3",title:"Take morning medication",time:"9:00 AM",done:!1},{id:"r8",patientId:"p4",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r9",patientId:"p4",title:"Rest",time:"1:00 PM",done:!1}],CC=[{code:"JAMES01",patientId:"p1",patientName:"James"},{code:"ELEANOR",patientId:"p2",patientName:"Eleanor"},{code:"ROBERT1",patientId:"p3",patientName:"Robert"},{code:"MARGARET",patientId:"p4",patientName:"Margaret"}];async function xC(){const r=Rs(Xt,ln.CAREGIVERS);if(!(await zo(r)).empty)return;const t=lA(Xt);for(const s of AC)t.set(Ti(Xt,ln.CAREGIVERS,s.id),{email:s.email,name:s.name});for(const s of RC)t.set(Ti(Xt,ln.PATIENTS,s.id),{name:s.name,caregiverId:s.caregiverId});for(const s of kC)t.set(Ti(Xt,ln.REMINDERS,s.id),{patientId:s.patientId,title:s.title,time:s.time,done:s.done});for(const s of CC){const o=s.code.toUpperCase();t.set(Ti(Xt,ln.LINKING_CODES,o),{patientId:s.patientId,patientName:s.patientName})}await t.commit()}async function ew(){return(await zo(Rs(Xt,ln.CAREGIVERS))).docs.map(e=>({id:e.id,...e.data()}))}async function tw(r){return(await ew()).find(t=>t.email===r)}async function PC(r){const e=await tw(r);if(!e)return[];const t=e0(Rs(Xt,ln.PATIENTS),t0("caregiverId","==",e.id));return(await zo(t)).docs.map(o=>({id:o.id,...o.data()}))}async function NC(r){const e=e0(Rs(Xt,ln.REMINDERS),t0("patientId","==",r));return(await zo(e)).docs.map(o=>({id:o.id,...o.data()})).sort((o,l)=>o.time.localeCompare(l.time))}async function bC(r){const e=r.trim().toUpperCase();if(!e)return;const t=Ti(Xt,ln.LINKING_CODES,e),s=await iA(t);if(!s.exists())return;const o=s.data();return{code:e,patientId:o.patientId,patientName:o.patientName}}async function DC(r){return(await zo(Rs(Xt,ln.REMINDERS))).docs.map(s=>({id:s.id,...s.data()})).sort((s,o)=>s.time.localeCompare(o.time)).slice(0,r)}async function OC(){return(await zo(Rs(Xt,ln.LINKING_CODES))).docs.map(e=>({code:e.id,...e.data()}))}async function VC(r){const e=Ti(Xt,ln.REMINDERS,r);await s0(e,{done:!0})}async function LC(r,e,t){const s=`reminders/${r}/${e}/${t.name}`,o=_R(SC,s);return await gR(o,t),yR(o)}async function MC(r,e){const t=Rs(Xt,ln.REMINDERS);return(await sA(t,{patientId:r,title:e.title,time:e.time,done:!1,...e.photoUrl&&{photoUrl:e.photoUrl},...e.audioUrl&&{audioUrl:e.audioUrl}})).id}async function FC(r,e){const t=Ti(Xt,ln.REMINDERS,r);await s0(t,{photoUrl:e})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jC=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),i_=r=>{const e=jC(r);return e.charAt(0).toUpperCase()+e.slice(1)},nw=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=Ee.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...p},g)=>Ee.createElement("svg",{ref:g,...BC,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:nw("lucide",o),...p},[...h.map(([_,w])=>Ee.createElement(_,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(r,e)=>{const t=Ee.forwardRef(({className:s,...o},l)=>Ee.createElement(zC,{ref:l,iconNode:e,className:nw(`lucide-${UC(i_(r))}`,`lucide-${r}`,s),...o}));return t.displayName=i_(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_l=Et("arrow-left",$C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],up=Et("bell",HC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],WC=Et("circle-help",qC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],KC=Et("clock",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],s_=Et("image",QC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],YC=Et("key",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],of=Et("link-2",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],ex=Et("list-todo",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],nx=Et("log-in",tx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],rw=Et("log-out",rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],sx=Et("phone",ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ax=Et("plus",ox);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jc=Et("settings",lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],cx=Et("sun",ux);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],dx=Et("type",hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],px=Et("user",fx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],iw=Et("users",mx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],yx=Et("volume-2",gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vx=Et("x",_x);function Pn({className:r=""}){return I.jsx("div",{className:`animate-pulse rounded bg-gray-200 ${r}`,"aria-hidden":!0})}function wx({count:r=4}){return I.jsx("ul",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>I.jsxs("li",{className:"card p-5 rounded-2xl flex items-start gap-4",children:[I.jsx(Pn,{className:"w-16 h-16 flex-shrink-0 rounded-xl"}),I.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[I.jsx(Pn,{className:"h-6 max-w-md rounded"}),I.jsx(Pn,{className:"h-5 max-w-[8rem] rounded"})]})]},t))})}function Ex({count:r=3}){return I.jsx("ul",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>I.jsx("li",{children:I.jsx(Pn,{className:"h-14 w-full rounded-2xl"})},t))})}function Tx({count:r=3}){return I.jsx("div",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>I.jsx(Pn,{className:"h-14 w-full rounded-2xl"},t))})}function Ix(){return I.jsx("div",{className:"card p-8 rounded-2xl border-4 border-gray-300 bg-gray-50",children:I.jsxs("div",{className:"flex flex-col items-center gap-6",children:[I.jsx(Pn,{className:"w-20 h-20 rounded-xl"}),I.jsx(Pn,{className:"h-8 w-full max-w-sm rounded"}),I.jsx(Pn,{className:"h-6 max-w-[6rem] rounded"}),I.jsx(Pn,{className:"h-14 w-full rounded-2xl"})]})})}function Sx(){return I.jsxs("div",{className:"card p-6 rounded-2xl space-y-3",children:[I.jsx(Pn,{className:"h-6 max-w-md rounded"}),I.jsx(Pn,{className:"h-5 w-full rounded"}),I.jsx(Pn,{className:"h-5 max-w-lg rounded"})]})}function Ax({onLogin:r,onBack:e}){const[t,s]=Ee.useState(""),[o,l]=Ee.useState([]),[h,p]=Ee.useState(!0),[g,_]=Ee.useState(null);Ee.useEffect(()=>{ew().then(l).catch(T=>_(T?.message??"Failed to load")).finally(()=>p(!1))},[]);const w=T=>{T.preventDefault(),t.trim()&&r(t.trim())};return I.jsxs("div",{className:"min-h-screen app-page p-8 flex flex-col max-w-xl mx-auto",children:[I.jsxs("button",{onClick:e,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl self-start max-w-[12rem] flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(_l,{className:"w-6 h-6"})," Back"]}),I.jsxs("div",{className:"card p-6 px-8 mb-8 shadow-card rounded-2xl",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(px,{className:"w-8 h-8 text-[#334155]","aria-hidden":!0})," Caregiver Login"]}),I.jsx("p",{className:"text-xl text-gray-600 mb-1 leading-relaxed",children:"Sign in to manage reminders for your loved ones."}),I.jsx("p",{className:"text-base text-gray-500 leading-relaxed",children:"You can add and edit reminders for each patient you care for."})]}),g&&I.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:g}),h?I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"section-title",children:"Quick sign in"}),I.jsx(Tx,{count:3})]}):I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"section-title",children:"Quick sign in"}),I.jsx("div",{className:"space-y-4 mb-8",children:o.map(T=>I.jsxs("button",{type:"button",onClick:()=>r(T.email),className:"btn-big w-full text-left px-6 card hover:border-[#334155]/30 hover:bg-slate-50/80 rounded-2xl text-gray-900 flex items-center gap-3 transition-colors shadow-card",children:[I.jsx("span",{className:"text-2xl",children:"👤"}),I.jsxs("span",{children:[I.jsx("strong",{children:T.name})," — ",T.email]})]},T.id))})]}),I.jsxs("div",{className:"card p-6 px-8 shadow-card rounded-2xl",children:[I.jsx("p",{className:"label-big block mb-3",children:"Or enter your email"}),I.jsxs("form",{onSubmit:w,className:"space-y-4",children:[I.jsx("input",{id:"email",type:"email",value:t,onChange:T=>s(T.target.value),className:"input-big w-full border-gray-300 border-2 focus:border-[#334155] focus:ring-2 focus:ring-[#334155]/20 rounded-2xl",placeholder:"e.g. name@example.com"}),I.jsxs("button",{type:"submit",className:"btn-big w-full btn-primary-caregiver rounded-2xl flex items-center justify-center gap-2 text-lg font-bold min-h-[60px]",children:[I.jsx(nx,{className:"w-6 h-6","aria-hidden":!0})," Log in"]})]})]})]})}function Rx({caregiverEmail:r,onSelectPatient:e,onLogout:t,onSettings:s}){const[o,l]=Ee.useState([]),[h,p]=Ee.useState(!0),[g,_]=Ee.useState(null);return Ee.useEffect(()=>{PC(r).then(l).catch(w=>_(w?.message??"Failed to load")).finally(()=>p(!1))},[r]),I.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[I.jsxs("div",{className:"flex flex-col gap-3 mb-8",children:[I.jsxs("button",{onClick:s,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(jc,{className:"w-6 h-6"})," Settings"]}),I.jsxs("button",{onClick:t,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(rw,{className:"w-6 h-6"})," Log out"]})]}),I.jsxs("div",{className:"card p-6 mb-8",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(iw,{className:"w-8 h-8 text-blue-600"})," Choose patient"]}),I.jsx("p",{className:"text-xl text-gray-600 mb-1",children:"Select who you’re managing reminders for."}),I.jsx("p",{className:"text-base text-gray-500",children:"You’ll see and add their reminders on the next screen."}),I.jsx("p",{className:"text-base text-gray-500 mt-2 font-medium",children:r})]}),g&&I.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:g}),h?I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"section-title",children:"Your patients"}),I.jsx(Ex,{count:3})]}):I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"section-title",children:"Your patients"}),I.jsx("ul",{className:"space-y-4",children:o.length===0?I.jsxs("li",{className:"card p-6 rounded-2xl text-center",children:[I.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"No patients linked yet."}),I.jsx("p",{className:"text-base text-gray-500",children:"Link a patient using their account — they’ll need to enter a code you provide (see Settings for codes)."})]}):o.map(w=>I.jsx("li",{children:I.jsxs("button",{onClick:()=>e(w.id,w.name),className:"btn-big w-full text-left px-6 card hover:border-blue-300 hover:bg-blue-50/50 rounded-2xl text-gray-900 flex items-center gap-3 transition-colors",children:[I.jsx("span",{className:"text-2xl",children:"👤"}),I.jsx("span",{className:"text-xl font-semibold",children:w.name})]})},w.id))})]})]})}function kx({url:r,alt:e,className:t}){return I.jsx("img",{src:r,alt:e,className:`object-cover rounded-xl flex-shrink-0 ${t??"w-16 h-16"}`})}function Cx({patientId:r,patientName:e,onLogout:t,onBack:s}){const[o,l]=Ee.useState([]),[h,p]=Ee.useState(!0),[g,_]=Ee.useState(null),[w,T]=Ee.useState(!1),[R,j]=Ee.useState(""),[H,G]=Ee.useState(""),[z,de]=Ee.useState(null),[oe,se]=Ee.useState(!1),ue=()=>{p(!0),NC(r).then(l).catch(he=>_(he?.message??"Failed to load")).finally(()=>p(!1))};Ee.useEffect(()=>{ue()},[r]);const Ne=async he=>{if(he.preventDefault(),!(!R.trim()||!H.trim())){se(!0),_(null);try{const P=await MC(r,{title:R.trim(),time:H.trim()});if(z){const S=await LC(r,P,z);await FC(P,S)}j(""),G(""),de(null),T(!1),ue()}catch(P){_(P?.message??"Failed to add reminder")}finally{se(!1)}}};return I.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[I.jsxs("div",{className:"flex flex-col gap-3 mb-6",children:[I.jsxs("button",{onClick:s,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(_l,{className:"w-6 h-6"})," Back to patients"]}),I.jsxs("button",{onClick:t,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(rw,{className:"w-6 h-6"})," Log out"]})]}),I.jsxs("div",{className:"card p-6 mb-6",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(up,{className:"w-8 h-8 text-blue-600"})," ",e]}),I.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Reminders you've set for them. Add a photo (e.g. their pill organizer or dog) so they recognize it more easily."}),w?I.jsxs("form",{onSubmit:Ne,className:"space-y-4",children:[I.jsx("label",{className:"label-big block",children:"Title"}),I.jsx("input",{type:"text",value:R,onChange:he=>j(he.target.value),placeholder:"e.g. Take morning medication",className:"input-big w-full border-2 border-gray-300 rounded-xl",required:!0}),I.jsx("label",{className:"label-big block",children:"Time"}),I.jsx("input",{type:"text",value:H,onChange:he=>G(he.target.value),placeholder:"e.g. 8:00 AM",className:"input-big w-full border-2 border-gray-300 rounded-xl",required:!0}),I.jsxs("div",{children:[I.jsxs("label",{className:"label-big block mb-2 flex items-center gap-2",children:[I.jsx(s_,{className:"w-5 h-5 text-blue-600"})," Photo (optional)"]}),I.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Their own pill organizer, pet, or familiar object helps them recognize the reminder."}),I.jsx("input",{type:"file",accept:"image/*",onChange:he=>de(he.target.files?.[0]??null),className:"block w-full text-lg"}),z&&I.jsxs("p",{className:"mt-2 text-base text-gray-600 flex items-center gap-2",children:[I.jsx(s_,{className:"w-4 h-4"})," ",z.name,I.jsxs("button",{type:"button",onClick:()=>de(null),className:"text-red-600 hover:underline flex items-center gap-1",children:[I.jsx(vx,{className:"w-4 h-4"})," Remove"]})]})]}),I.jsxs("div",{className:"flex gap-3",children:[I.jsx("button",{type:"submit",disabled:oe,className:"btn-big flex-1 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl disabled:opacity-70",children:oe?"Adding…":"Add reminder"}),I.jsx("button",{type:"button",onClick:()=>{T(!1),j(""),G(""),de(null)},className:"btn-big border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl px-6",children:"Cancel"})]})]}):I.jsxs("button",{type:"button",onClick:()=>T(!0),className:"btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(ax,{className:"w-6 h-6"})," Add a reminder"]})]}),I.jsx("p",{className:"section-title",children:"Today’s reminders"}),g&&I.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:g}),h?I.jsx(wx,{count:4}):I.jsx("ul",{className:"space-y-4",children:o.length===0?I.jsxs("li",{className:"card p-6 rounded-2xl text-center",children:[I.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"No reminders yet."}),I.jsx("p",{className:"text-base text-gray-500",children:"Tap “Add a reminder” above to create one (e.g. medication, meals, activities)."})]}):o.map(he=>I.jsxs("li",{className:"card p-5 rounded-2xl flex items-start gap-4",children:[he.photoUrl?I.jsx(kx,{url:he.photoUrl,alt:"",className:"w-16 h-16"}):I.jsx("span",{className:"text-2xl flex-shrink-0",children:"🔔"}),I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsx("p",{className:"text-xl font-semibold text-gray-900",children:he.title}),I.jsxs("p",{className:"text-lg text-gray-600 mt-1 flex items-center gap-1",children:[I.jsx(KC,{className:"w-5 h-5"})," ",he.time]})]})]},he.id))})]})}function xx({caregiverEmail:r,onBack:e}){const[t,s]=Ee.useState(null);return Ee.useEffect(()=>{tw(r).then(o=>s(o?.name??null)).catch(()=>s(null))},[r]),I.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[I.jsxs("button",{onClick:e,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(_l,{className:"w-6 h-6"})," Back"]}),I.jsxs("div",{className:"card p-6 mb-8",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(jc,{className:"w-8 h-8 text-blue-600"})," Settings"]}),I.jsxs("p",{className:"text-xl text-gray-600 mb-1",children:[t??"Caregiver"," — ",r]}),I.jsx("p",{className:"text-base text-gray-500",children:"Manage your account and how reminders work."})]}),I.jsx("p",{className:"section-title",children:"Notifications"}),I.jsxs("div",{className:"card p-6 rounded-2xl mb-6",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(up,{className:"w-6 h-6 text-blue-600"})," Reminder alerts"]}),I.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Choose when you get notified (e.g. when a patient marks a reminder done, or daily summary)."}),I.jsx("p",{className:"text-base text-gray-500",children:"(Placeholder: toggle options will appear here)"})]}),I.jsx("p",{className:"section-title",children:"Patients & linking"}),I.jsxs("div",{className:"card p-6 rounded-2xl mb-6",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(iw,{className:"w-6 h-6 text-blue-600"})," Manage patients"]}),I.jsx("p",{className:"text-base text-gray-600 mb-4",children:"See who’s linked and add new patients. Each patient gets a unique code to link their account."}),I.jsx("p",{className:"text-base text-gray-500",children:"(Placeholder: list and “Generate code” will appear here)"})]}),I.jsxs("div",{className:"card p-6 rounded-2xl",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(YC,{className:"w-6 h-6 text-blue-600"})," Linking codes"]}),I.jsx("p",{className:"text-base text-gray-600 mb-2",children:"Share the code below with your patient so they can see your reminders in “My Reminders.”"}),I.jsx("p",{className:"text-base text-gray-500",children:"(Placeholder: codes per patient will appear here)"})]})]})}const Px="caregiverPhone",o_="+15551234567";function Nx(r){return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}function bx(r){return r.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})}function Dx({onSettings:r}){const[e,t]=Ee.useState(new Date),[s,o]=Ee.useState([]),[l,h]=Ee.useState(!0);Ee.useEffect(()=>{const T=setInterval(()=>t(new Date),1e3);return()=>clearInterval(T)},[]),Ee.useEffect(()=>{DC(20).then(T=>o(T.filter(R=>!R.done))).catch(()=>o([])).finally(()=>h(!1))},[]);const p=s[0]??null,g=async()=>{if(p)try{await VC(p.id),o(T=>T.filter(R=>R.id!==p.id))}catch{}},w=`tel:${(typeof localStorage<"u"&&localStorage.getItem(Px)||o_).replace(/\s/g,"")}`;return I.jsxs("div",{className:"min-h-screen flex flex-col text-gray-900",children:[I.jsxs("header",{className:"flex-shrink-0 pt-10 pb-6 px-6 border-b-4 border-gray-200",children:[I.jsx("p",{className:"font-bold text-gray-900 leading-tight",style:{fontSize:"48px"},children:Nx(e)}),I.jsx("p",{className:"font-bold text-gray-900 mt-2 leading-tight",style:{fontSize:"48px"},children:bx(e)}),I.jsxs("button",{type:"button",onClick:r,className:"mt-4 flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900","aria-label":"Open settings",children:[I.jsx(jc,{className:"w-5 h-5"})," Settings"]})]}),I.jsxs("main",{className:"flex-1 flex flex-col justify-center px-6 py-10 min-h-0",children:[I.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-4",children:"Current Task"}),l?I.jsx(Ix,{}):p?I.jsx("div",{className:"card p-8 rounded-2xl border-4 border-gray-900 bg-white",children:I.jsxs("div",{className:"flex flex-col items-center gap-6",children:[p.photoUrl?I.jsx("img",{src:p.photoUrl,alt:"",className:"w-24 h-24 object-cover rounded-2xl border-2 border-gray-300 flex-shrink-0"}):I.jsx(ex,{className:"w-20 h-20 text-gray-900 flex-shrink-0",strokeWidth:2,"aria-hidden":!0}),I.jsx("p",{className:"text-2xl font-bold text-gray-900 text-center",children:p.title}),I.jsxs("p",{className:"text-xl text-gray-700",children:["at ",p.time]}),I.jsx("button",{type:"button",onClick:g,className:"w-full py-5 px-6 text-2xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-2xl border-4 border-green-800 transition-colors",children:"Mark as Done"})]})}):I.jsx("div",{className:"card p-8 rounded-2xl border-4 border-gray-300 bg-green-50",children:I.jsxs("div",{className:"flex flex-col items-center gap-6",children:[I.jsx(cx,{className:"w-20 h-20 text-green-700 flex-shrink-0",strokeWidth:2,"aria-hidden":!0}),I.jsx("p",{className:"text-2xl font-bold text-gray-900 text-center leading-relaxed",children:"Relax, you are all caught up"})]})})]}),I.jsx("footer",{className:"flex-shrink-0 p-6 border-t-4 border-gray-200 bg-white",children:I.jsxs("a",{href:w,className:"flex items-center justify-center gap-3 w-full py-5 px-6 text-2xl font-bold bg-red-600 hover:bg-red-700 text-white rounded-2xl border-4 border-red-800 transition-colors",children:[I.jsx(sx,{className:"w-8 h-8","aria-hidden":!0})," Help"]})})]})}function Ox({onBack:r,onLinkAccount:e}){return I.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[I.jsxs("button",{onClick:r,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(_l,{className:"w-6 h-6"})," Back"]}),I.jsxs("div",{className:"card p-6 mb-8 shadow-card rounded-2xl px-8",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(jc,{className:"w-8 h-8 text-teal-600"})," Settings"]}),I.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Make the app easier to see and hear. Changes here apply to “My Reminders.”"})]}),e&&I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"section-title",children:"Account"}),I.jsxs("button",{type:"button",onClick:e,className:"btn-ghost w-full rounded-2xl py-4 px-6 text-lg font-bold flex items-center justify-center gap-2 mb-6 min-h-[60px]",children:[I.jsx(of,{className:"w-6 h-6","aria-hidden":!0})," Link account with caregiver code"]})]}),I.jsx("p",{className:"section-title",children:"Display"}),I.jsxs("div",{className:"card p-6 rounded-2xl mb-6 shadow-card",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(dx,{className:"w-6 h-6 text-teal-600"})," Text size"]}),I.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Larger text for buttons and reminders. (Placeholder: size slider or “Large / Extra large” options will appear here.)"})]}),I.jsx("p",{className:"section-title",children:"Sound"}),I.jsxs("div",{className:"card p-6 rounded-2xl mb-6 shadow-card",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(yx,{className:"w-6 h-6 text-teal-600"})," Reminder sound"]}),I.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Choose a gentle sound for reminder alerts. (Placeholder: sound picker will appear here.)"})]}),I.jsx("p",{className:"section-title",children:"Notifications"}),I.jsxs("div",{className:"card p-6 rounded-2xl shadow-card",children:[I.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[I.jsx(up,{className:"w-6 h-6 text-teal-600"})," When to remind"]}),I.jsx("p",{className:"text-base text-gray-600",children:"Turn reminders on or off, and choose quiet hours. (Placeholder: toggles and time options will appear here.)"})]})]})}function Vx({onComplete:r,onBack:e}){const[t,s]=Ee.useState(""),[o,l]=Ee.useState(""),[h,p]=Ee.useState([]),[g,_]=Ee.useState(!0);Ee.useEffect(()=>{OC().then(p).catch(()=>p([])).finally(()=>_(!1))},[]);const w=async T=>{T.preventDefault(),l("");const R=await bC(t);R?r(R.patientId):l("Code not found. Please check the code and try again.")};return I.jsxs("div",{className:"min-h-screen app-page p-8 flex flex-col max-w-xl mx-auto",children:[I.jsxs("button",{onClick:e,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl self-start max-w-[12rem] flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(_l,{className:"w-6 h-6"})," Back"]}),I.jsxs("div",{className:"card p-6 mb-8",children:[I.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[I.jsx(of,{className:"w-8 h-8 text-purple-600"})," Link account"]}),I.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"Your caregiver will give you a code. Enter it here to see their reminders for you."}),I.jsx("p",{className:"text-base text-gray-500 mb-4",children:"After linking, you’ll see “From your caregiver” reminders in My Reminders. You can still add your own."}),I.jsxs("div",{className:"flex items-start gap-2 p-3 bg-purple-50 rounded-xl border border-purple-200",children:[I.jsx(WC,{className:"w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5"}),I.jsxs("div",{children:[I.jsx("p",{className:"font-semibold text-purple-900",children:"Where do I get the code?"}),I.jsx("p",{className:"text-gray-700",children:"Ask your caregiver. They find it in Settings after they log in as a caregiver."})]})]})]}),I.jsxs("div",{className:"card p-6 mb-8",children:[I.jsx("label",{htmlFor:"code",className:"label-big block mb-3",children:"Enter your code"}),I.jsxs("form",{onSubmit:w,className:"space-y-4",children:[I.jsx("input",{id:"code",type:"text",value:t,onChange:T=>{s(T.target.value),l("")},className:"input-big w-full border-gray-300 border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl uppercase",placeholder:"e.g. JAMES01",autoComplete:"off"}),o&&I.jsx("p",{className:"text-xl text-red-600 font-medium",children:o}),I.jsxs("button",{type:"submit",className:"btn-big w-full bg-purple-600 hover:bg-purple-700 text-white border-purple-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[I.jsx(of,{className:"w-6 h-6"})," Link account"]})]})]}),g&&I.jsxs("div",{className:"card p-6",children:[I.jsx("p",{className:"section-title",children:"Example codes (for demo)"}),I.jsx(Sx,{})]}),!g&&h.length>0&&I.jsxs("div",{className:"card p-6 px-8 shadow-card rounded-2xl",children:[I.jsx("p",{className:"section-title",children:"Example codes (for demo)"}),I.jsx("p",{className:"text-base text-gray-500 mb-3",children:"Try these to see how linking works."}),I.jsx("ul",{className:"space-y-2 text-xl text-gray-700",children:h.map(T=>I.jsxs("li",{className:"flex items-center gap-2",children:[I.jsx("strong",{className:"text-gray-900 font-mono",children:T.code}),I.jsx("span",{children:"→"}),I.jsx("span",{children:T.patientName})]},T.code))})]})]})}function a_(){const r=new Date().getHours();return r>=5&&r<12?"morning":r>=12&&r<17?"afternoon":"evening"}function Lx(){const[r,e]=Ee.useState(null),[t,s]=Ee.useState(a_);Ee.useEffect(()=>{const P=setInterval(()=>s(a_()),6e4);return()=>clearInterval(P)},[]),Ee.useEffect(()=>{xC().catch(P=>{const S=P?.message??"";(S.includes("permission")||S.includes("Permission"))&&e("Firestore permission denied. Add rules in Firebase Console → Firestore → Rules (see FIRESTORE.md)."),console.warn("Firebase seed:",P)})},[]);const[o,l]=Ee.useState("home"),[h,p]=Ee.useState(!1),[g,_]=Ee.useState(null),[w,T]=Ee.useState(null),[R,j]=Ee.useState(null),[H,G]=Ee.useState(null),[z,de]=Ee.useState("home"),oe=P=>{p(!0),_(P),l("patient-selection")},se=(P,S)=>{T(P),j(S),l("caregiver-dashboard")},ue=()=>{T(null),j(null),l("patient-selection")},Ne=()=>{p(!1),_(null),T(null),j(null),l("home")},he=P=>{G(P),l(z),de("home")};return I.jsxs("div",{className:"min-h-screen app-page text-gray-900","data-time-of-day":t,children:[r&&I.jsxs("div",{className:"bg-amber-100 border-b border-amber-300 px-4 py-3 text-gray-900 flex items-center justify-between gap-4 flex-wrap",children:[I.jsx("p",{className:"text-lg font-medium",children:r}),I.jsx("a",{href:"https://console.firebase.google.com/project/test-f80e2/firestore/rules",target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 underline font-semibold whitespace-nowrap",children:"Open Firestore Rules →"}),I.jsx("button",{type:"button",onClick:()=>e(null),className:"text-gray-600 hover:text-gray-900 font-medium",children:"Dismiss"})]}),o==="home"&&I.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-[#FAFAF9] px-8 pt-12 pb-10 max-w-xl mx-auto",children:[I.jsx("div",{className:"w-full max-w-[200px] h-24 flex-shrink-0 mb-6","aria-hidden":!0,children:I.jsxs("svg",{viewBox:"0 0 200 96",fill:"none",className:"w-full h-full",children:[I.jsx("ellipse",{cx:"100",cy:"50",rx:"70",ry:"35",fill:"#FEF3C7",opacity:"0.8"}),I.jsx("ellipse",{cx:"100",cy:"48",rx:"50",ry:"25",fill:"#FDE68A",opacity:"0.9"}),I.jsx("circle",{cx:"100",cy:"40",r:"18",fill:"#FCD34D"}),I.jsx("path",{d:"M60 70 Q100 50 140 70",stroke:"#F59E0B",strokeWidth:"3",fill:"none",opacity:"0.6"})]})}),I.jsx("h1",{className:"font-serif-careconnect text-4xl font-bold text-gray-800 text-center mb-2",children:"CareConnect"}),I.jsx("p",{className:"text-xl text-gray-600 text-center leading-relaxed max-w-md mb-10",children:"Gentle reminders for each day"}),I.jsxs("button",{type:"button",onClick:()=>l("patient"),className:"animate-breathe w-[200px] h-[200px] rounded-full btn-primary-patient flex flex-col items-center justify-center gap-2 shadow-xl transition-shadow hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0d9488]/40","aria-label":"Open my reminders",children:[I.jsx("span",{className:"text-2xl","aria-hidden":!0,children:"🔔"}),I.jsx("span",{className:"text-lg font-bold text-white text-center leading-tight px-2",children:"Open My Reminders"})]}),I.jsxs("div",{className:"mt-auto pt-10 flex flex-col items-center gap-4",children:[I.jsx("button",{type:"button",onClick:()=>l("caregiver-login"),className:"btn-ghost rounded-2xl px-6 py-3 text-lg font-bold min-h-[48px] flex items-center justify-center gap-2",children:"Caregiver Setup"}),I.jsx("p",{className:"text-base text-gray-500 text-center max-w-sm leading-relaxed",children:"First time? Ask your caregiver for a linking code — you can add it in Settings."})]})]}),o==="caregiver-login"&&I.jsx(Ax,{onLogin:oe,onBack:()=>l("home")}),o==="patient-selection"&&h&&I.jsx(Rx,{caregiverEmail:g,onSelectPatient:se,onLogout:Ne,onSettings:()=>l("caregiver-settings")}),o==="caregiver-settings"&&h&&I.jsx(xx,{caregiverEmail:g,onBack:()=>l("patient-selection"),onSelectPatient:se}),o==="caregiver-dashboard"&&h&&I.jsx(Cx,{caregiverEmail:g,patientId:w,patientName:R,onLogout:Ne,onBack:ue}),o==="patient"&&I.jsx(Dx,{onSettings:()=>l("patient-settings")}),o==="patient-settings"&&I.jsx(Ox,{onBack:()=>l("patient"),onLinkAccount:()=>{de("patient"),l("account-linking")}}),o==="account-linking"&&I.jsx(Vx,{onComplete:he,onBack:()=>l(z??"home")})]})}gE.createRoot(document.getElementById("root")).render(I.jsx(Lx,{}));
