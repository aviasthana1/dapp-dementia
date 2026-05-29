(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var bd={exports:{}},Ga={},Ld={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function iT(){if(ey)return Ce;ey=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function B(V,G,fe){this.props=V,this.context=G,this.refs=H,this.updater=fe||F}B.prototype.isReactComponent={},B.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function oe(){}oe.prototype=B.prototype;function ee(V,G,fe){this.props=V,this.context=G,this.refs=H,this.updater=fe||F}var ne=ee.prototype=new oe;ne.constructor=ee,$(ne,B.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,xe=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function A(V,G,fe){var Ae,ke={},Oe=null,Ue=null;if(G!=null)for(Ae in G.ref!==void 0&&(Ue=G.ref),G.key!==void 0&&(Oe=""+G.key),G)xe.call(G,Ae)&&!x.hasOwnProperty(Ae)&&(ke[Ae]=G[Ae]);var je=arguments.length-2;if(je===1)ke.children=fe;else if(1<je){for(var We=Array(je),At=0;At<je;At++)We[At]=arguments[At+2];ke.children=We}if(V&&V.defaultProps)for(Ae in je=V.defaultProps,je)ke[Ae]===void 0&&(ke[Ae]=je[Ae]);return{$$typeof:r,type:V,key:Oe,ref:Ue,props:ke,_owner:Te.current}}function k(V,G){return{$$typeof:r,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function O(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return G[fe]})}var b=/\/+/g;function C(V,G){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):G.toString(36)}function tt(V,G,fe,Ae,ke){var Oe=typeof V;(Oe==="undefined"||Oe==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(Oe){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case r:case e:Ue=!0}}if(Ue)return Ue=V,ke=ke(Ue),V=Ae===""?"."+C(Ue,0):Ae,le(ke)?(fe="",V!=null&&(fe=V.replace(b,"$&/")+"/"),tt(ke,G,fe,"",function(At){return At})):ke!=null&&(N(ke)&&(ke=k(ke,fe+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(b,"$&/")+"/")+V)),G.push(ke)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",le(V))for(var je=0;je<V.length;je++){Oe=V[je];var We=Ae+C(Oe,je);Ue+=tt(Oe,G,fe,We,ke)}else if(We=S(V),typeof We=="function")for(V=We.call(V),je=0;!(Oe=V.next()).done;)Oe=Oe.value,We=Ae+C(Oe,je++),Ue+=tt(Oe,G,fe,We,ke);else if(Oe==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ue}function _e(V,G,fe){if(V==null)return V;var Ae=[],ke=0;return tt(V,Ae,"","",function(Oe){return G.call(fe,Oe,ke++)}),Ae}function He(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Me={current:null},J={transition:null},me={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:J,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:_e,forEach:function(V,G,fe){_e(V,function(){G.apply(this,arguments)},fe)},count:function(V){var G=0;return _e(V,function(){G++}),G},toArray:function(V){return _e(V,function(G){return G})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ee,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(V,G,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=$({},V.props),ke=V.key,Oe=V.ref,Ue=V._owner;if(G!=null){if(G.ref!==void 0&&(Oe=G.ref,Ue=Te.current),G.key!==void 0&&(ke=""+G.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(We in G)xe.call(G,We)&&!x.hasOwnProperty(We)&&(Ae[We]=G[We]===void 0&&je!==void 0?je[We]:G[We])}var We=arguments.length-2;if(We===1)Ae.children=fe;else if(1<We){je=Array(We);for(var At=0;At<We;At++)je[At]=arguments[At+2];Ae.children=je}return{$$typeof:r,type:V.type,key:ke,ref:Oe,props:Ae,_owner:Ue}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=A,Ce.createFactory=function(V){var G=A.bind(null,V);return G.type=V,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:f,render:V}},Ce.isValidElement=N,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:He}},Ce.memo=function(V,G){return{$$typeof:_,type:V,compare:G===void 0?null:G}},Ce.startTransition=function(V){var G=J.transition;J.transition={};try{V()}finally{J.transition=G}},Ce.unstable_act=se,Ce.useCallback=function(V,G){return Me.current.useCallback(V,G)},Ce.useContext=function(V){return Me.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Me.current.useDeferredValue(V)},Ce.useEffect=function(V,G){return Me.current.useEffect(V,G)},Ce.useId=function(){return Me.current.useId()},Ce.useImperativeHandle=function(V,G,fe){return Me.current.useImperativeHandle(V,G,fe)},Ce.useInsertionEffect=function(V,G){return Me.current.useInsertionEffect(V,G)},Ce.useLayoutEffect=function(V,G){return Me.current.useLayoutEffect(V,G)},Ce.useMemo=function(V,G){return Me.current.useMemo(V,G)},Ce.useReducer=function(V,G,fe){return Me.current.useReducer(V,G,fe)},Ce.useRef=function(V){return Me.current.useRef(V)},Ce.useState=function(V){return Me.current.useState(V)},Ce.useSyncExternalStore=function(V,G,fe){return Me.current.useSyncExternalStore(V,G,fe)},Ce.useTransition=function(){return Me.current.useTransition()},Ce.version="18.3.1",Ce}var ty;function Of(){return ty||(ty=1,Ld.exports=iT()),Ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function sT(){if(ny)return Ga;ny=1;var r=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,T={},S=null,F=null;_!==void 0&&(S=""+_),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:S,ref:F,props:T,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=h,Ga.jsxs=h,Ga}var ry;function oT(){return ry||(ry=1,bd.exports=sT()),bd.exports}var I=oT(),Qu={},Md={exports:{}},hn={},Fd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function aT(){return iy||(iy=1,(function(r){function e(J,me){var se=J.length;J.push(me);e:for(;0<se;){var V=se-1>>>1,G=J[V];if(0<o(G,me))J[V]=me,J[se]=G,se=V;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var me=J[0],se=J.pop();if(se!==me){J[0]=se;e:for(var V=0,G=J.length,fe=G>>>1;V<fe;){var Ae=2*(V+1)-1,ke=J[Ae],Oe=Ae+1,Ue=J[Oe];if(0>o(ke,se))Oe<G&&0>o(Ue,ke)?(J[V]=Ue,J[Oe]=se,V=Oe):(J[V]=ke,J[Ae]=se,V=Ae);else if(Oe<G&&0>o(Ue,se))J[V]=Ue,J[Oe]=se,V=Oe;else break e}}return me}function o(J,me){var se=J.sortIndex-me.sortIndex;return se!==0?se:J.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,T=null,S=3,F=!1,$=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(J){for(var me=t(_);me!==null;){if(me.callback===null)i(_);else if(me.startTime<=J)i(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function le(J){if(H=!1,ne(J),!$)if(t(g)!==null)$=!0,He(xe);else{var me=t(_);me!==null&&Me(le,me.startTime-J)}}function xe(J,me){$=!1,H&&(H=!1,oe(A),A=-1),F=!0;var se=S;try{for(ne(me),T=t(g);T!==null&&(!(T.expirationTime>me)||J&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var G=V(T.expirationTime<=me);me=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(g)&&i(g),ne(me)}else i(g);T=t(g)}if(T!==null)var fe=!0;else{var Ae=t(_);Ae!==null&&Me(le,Ae.startTime-me),fe=!1}return fe}finally{T=null,S=se,F=!1}}var Te=!1,x=null,A=-1,k=5,N=-1;function O(){return!(r.unstable_now()-N<k)}function b(){if(x!==null){var J=r.unstable_now();N=J;var me=!0;try{me=x(!0,J)}finally{me?C():(Te=!1,x=null)}}else Te=!1}var C;if(typeof ee=="function")C=function(){ee(b)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,_e=tt.port2;tt.port1.onmessage=b,C=function(){_e.postMessage(null)}}else C=function(){B(b,0)};function He(J){x=J,Te||(Te=!0,C())}function Me(J,me){A=B(function(){J(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){$||F||($=!0,He(xe))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(J){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var se=S;S=me;try{return J()}finally{S=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,me){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var se=S;S=J;try{return me()}finally{S=se}},r.unstable_scheduleCallback=function(J,me,se){var V=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,J){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,J={id:E++,callback:me,priorityLevel:J,startTime:se,expirationTime:G,sortIndex:-1},se>V?(J.sortIndex=se,e(_,J),t(g)===null&&J===t(_)&&(H?(oe(A),A=-1):H=!0,Me(le,se-V))):(J.sortIndex=G,e(g,J),$||F||($=!0,He(xe))),J},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(J){var me=S;return function(){var se=S;S=me;try{return J.apply(this,arguments)}finally{S=se}}}})(Ud)),Ud}var sy;function lT(){return sy||(sy=1,Fd.exports=aT()),Fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function uT(){if(oy)return hn;oy=1;var r=Of(),e=lT();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function S(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function F(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||F(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];B[s]=new H(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ee(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(oe,ee);B[s]=new H(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(oe,ee);B[s]=new H(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(oe,ee);B[s]=new H(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),J=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,V;function G(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var fe=!1;function Ae(n,s){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(n,[],s)}else{try{s.call()}catch(j){c=j}n.call(s.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,R=m.length-1;1<=v&&0<=R&&d[v]!==m[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==m[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==m[R]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=R);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function ke(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Te:return"Portal";case k:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case b:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _e:return s=n.displayName||null,s!==null?s:Oe(n.type)||"Memo";case He:s=n._payload,n=n._init;try{return Oe(n(s))}catch{}}return null}function Ue(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function At(n){var s=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ir(n){n._valueTracker||(n._valueTracker=At(n))}function bs(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $i(n,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ls(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Zo(n,s){s=s.checked,s!=null&&ne(n,"checked",s,!1)}function ea(n,s){Zo(n,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(n,s.type,a):s.hasOwnProperty("defaultValue")&&Ms(n,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Vl(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ms(n,s,a){(s!=="number"||Xr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Sr=Array.isArray;function Ar(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function ta(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Fs(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Sr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:je(a)}}function Us(n,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function na(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function _t(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?_t(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Rr,ra=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Yr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qi=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(n){qi.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Hi[s]=Hi[n]})});function ia(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Hi.hasOwnProperty(n)&&Hi[n]?(""+s).trim():s+"px"}function sa(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ia(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var oa=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(n,s){if(s){if(oa[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function la(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function js(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Bs=null,In=null,er=null;function zs(n){if(n=Da(n)){if(typeof Bs!="function")throw Error(t(280));var s=n.stateNode;s&&(s=cu(s),Bs(n.stateNode,n.type,s))}}function tr(n){In?er?er.push(n):er=[n]:In=n}function ua(){if(In){var n=In,s=er;if(er=In=null,zs(n),s)for(n=0;n<s.length;n++)zs(s[n])}}function Gi(n,s){return n(s)}function ca(){}var kr=!1;function ha(n,s,a){if(kr)return n(s,a);kr=!0;try{return Gi(n,s,a)}finally{kr=!1,(In!==null||er!==null)&&(ca(),ua())}}function ct(n,s){var a=n.stateNode;if(a===null)return null;var c=cu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var $s=!1;if(f)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{$s=!1}function Ki(n,s,a,c,d,m,v,R,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Q){this.onError(Q)}}var Qi=!1,Hs=null,Mn=!1,da=null,uh={onError:function(n){Qi=!0,Hs=n}};function qs(n,s,a,c,d,m,v,R,P){Qi=!1,Hs=null,Ki.apply(uh,arguments)}function bl(n,s,a,c,d,m,v,R,P){if(qs.apply(this,arguments),Qi){if(Qi){var j=Hs;Qi=!1,Hs=null}else throw Error(t(198));Mn||(Mn=!0,da=j)}}function Fn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Xi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Un(n){if(Fn(n)!==n)throw Error(t(188))}function Ll(n){var s=n.alternate;if(!s){if(s=Fn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Un(d),n;if(m===c)return Un(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=m;break}if(R===c){v=!0,c=d,a=m;break}R=R.sibling}if(!v){for(R=m.child;R;){if(R===a){v=!0,a=m,c=d;break}if(R===c){v=!0,c=m,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function fa(n){return n=Ll(n),n!==null?Ws(n):null}function Ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ws(n);if(s!==null)return s;n=n.sibling}return null}var Gs=e.unstable_scheduleCallback,pa=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,ch=e.unstable_requestPaint,Ge=e.unstable_now,Fl=e.unstable_getCurrentPriorityLevel,Yi=e.unstable_ImmediatePriority,Jr=e.unstable_UserBlockingPriority,Sn=e.unstable_NormalPriority,ma=e.unstable_LowPriority,Ul=e.unstable_IdlePriority,Ji=null,pn=null;function jl(n){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Ji,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:zl,ga=Math.log,Bl=Math.LN2;function zl(n){return n>>>=0,n===0?32:31-(ga(n)/Bl|0)|0}var Ks=64,Qs=4194304;function Zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zi(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Zr(R):(m&=v,m!==0&&(c=Zr(m)))}else v=a&~d,v!==0?c=Zr(v):m!==0&&(c=Zr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Gt(s),d=1<<a,c|=n[a],s&=~d;return c}function hh(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Gt(m),R=1<<v,P=d[v];P===-1?((R&a)===0||(R&c)!==0)&&(d[v]=hh(R,s)):P<=s&&(n.expiredLanes|=R),m&=~R}}function mn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function es(){var n=Ks;return Ks<<=1,(Ks&4194240)===0&&(Ks=64),n}function ei(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function ti(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Gt(s),n[s]=a}function qe(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Gt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function ni(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Gt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var De=0;function ri(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var $l,Xs,Hl,ql,Wl,ya=!1,nr=[],Dt=null,jn=null,Bn=null,ii=new Map,An=new Map,rr=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(n,s){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":ii.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(s.pointerId)}}function rn(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Da(s),s!==null&&Xs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function fh(n,s,a,c,d){switch(s){case"focusin":return Dt=rn(Dt,n,s,a,c,d),!0;case"dragenter":return jn=rn(jn,n,s,a,c,d),!0;case"mouseover":return Bn=rn(Bn,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return ii.set(m,rn(ii.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,An.set(m,rn(An.get(m)||null,n,s,a,c,d)),!0}return!1}function Kl(n){var s=ss(n.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=Xi(a),s!==null){n.blockedOn=s,Wl(n.priority,function(){Hl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Ys(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Wi=c,a.target.dispatchEvent(c),Wi=null}else return s=Da(a),s!==null&&Xs(s),n.blockedOn=a,!1;s.shift()}return!0}function ts(n,s,a){Pr(n)&&a.delete(s)}function Ql(){ya=!1,Dt!==null&&Pr(Dt)&&(Dt=null),jn!==null&&Pr(jn)&&(jn=null),Bn!==null&&Pr(Bn)&&(Bn=null),ii.forEach(ts),An.forEach(ts)}function zn(n,s){n.blockedOn===s&&(n.blockedOn=null,ya||(ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ql)))}function $n(n){function s(d){return zn(d,n)}if(0<nr.length){zn(nr[0],n);for(var a=1;a<nr.length;a++){var c=nr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Dt!==null&&zn(Dt,n),jn!==null&&zn(jn,n),Bn!==null&&zn(Bn,n),ii.forEach(s),An.forEach(s),a=0;a<rr.length;a++)c=rr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)Kl(a),a.blockedOn===null&&rr.shift()}var Nr=le.ReactCurrentBatchConfig,si=!0;function Ze(n,s,a,c){var d=De,m=Nr.transition;Nr.transition=null;try{De=1,_a(n,s,a,c)}finally{De=d,Nr.transition=m}}function ph(n,s,a,c){var d=De,m=Nr.transition;Nr.transition=null;try{De=4,_a(n,s,a,c)}finally{De=d,Nr.transition=m}}function _a(n,s,a,c){if(si){var d=Ys(n,s,a,c);if(d===null)Ah(n,s,c,ns,a),Gl(n,c);else if(fh(d,n,s,a,c))c.stopPropagation();else if(Gl(n,c),s&4&&-1<dh.indexOf(n)){for(;d!==null;){var m=Da(d);if(m!==null&&$l(m),m=Ys(n,s,a,c),m===null&&Ah(n,s,c,ns,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Ah(n,s,c,null,a)}}var ns=null;function Ys(n,s,a,c){if(ns=null,n=js(c),n=ss(n),n!==null)if(s=Fn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Xi(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return ns=n,null}function va(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fl()){case Yi:return 1;case Jr:return 4;case Sn:case ma:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var gn=null,Js=null,sn=null;function Ea(){if(sn)return sn;var n,s=Js,a=s.length,c,d="value"in gn?gn.value:gn.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return sn=d.slice(n,1<c?1-c:void 0)}function Zs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ir(){return!0}function wa(){return!1}function Ot(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var R in n)n.hasOwnProperty(R)&&(a=n[R],this[R]=a?a(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ir:wa,this.isPropagationStopped=wa,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),s}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Ot(Hn),sr=se({},Hn,{view:0,detail:0}),mh=Ot(sr),to,xr,oi,rs=se({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oi&&(oi&&n.type==="mousemove"?(to=n.screenX-oi.screenX,xr=n.screenY-oi.screenY):xr=to=0,oi=n),to)},movementY:function(n){return"movementY"in n?n.movementY:xr}}),no=Ot(rs),Ta=se({},rs,{dataTransfer:0}),Xl=Ot(Ta),ro=se({},sr,{relatedTarget:0}),io=Ot(ro),Yl=se({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dr=Ot(Yl),Jl=se({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zl=Ot(Jl),eu=se({},Hn,{data:0}),Ia=Ot(eu),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nu(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=tu[n])?!!s[n]:!1}function or(){return nu}var u=se({},sr,{key:function(n){if(n.key){var s=so[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Zs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(n){return n.type==="keypress"?Zs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Ot(u),y=se({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ot(y),L=se({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),z=Ot(L),Z=se({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Ot(Z),Et=se({},rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Ot(Et),Rt=[9,13,27,32],ft=f&&"CompositionEvent"in window,Rn=null;f&&"documentMode"in document&&(Rn=document.documentMode);var yn=f&&"TextEvent"in window&&!Rn,is=f&&(!ft||Rn&&8<Rn&&11>=Rn),oo=" ",Kp=!1;function Qp(n,s){switch(n){case"keyup":return Rt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function t0(n,s){switch(n){case"compositionend":return Xp(s);case"keypress":return s.which!==32?null:(Kp=!0,oo);case"textInput":return n=s.data,n===oo&&Kp?null:n;default:return null}}function n0(n,s){if(ao)return n==="compositionend"||!ft&&Qp(n,s)?(n=Ea(),sn=Js=gn=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return is&&s.locale!=="ko"?null:s.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!r0[n.type]:s==="textarea"}function Jp(n,s,a,c){tr(c),s=au(s,"onChange"),0<s.length&&(a=new eo("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var Sa=null,Aa=null;function i0(n){gm(n,0)}function ru(n){var s=fo(n);if(bs(s))return n}function s0(n,s){if(n==="change")return s}var Zp=!1;if(f){var gh;if(f){var yh="oninput"in document;if(!yh){var em=document.createElement("div");em.setAttribute("oninput","return;"),yh=typeof em.oninput=="function"}gh=yh}else gh=!1;Zp=gh&&(!document.documentMode||9<document.documentMode)}function tm(){Sa&&(Sa.detachEvent("onpropertychange",nm),Aa=Sa=null)}function nm(n){if(n.propertyName==="value"&&ru(Aa)){var s=[];Jp(s,Aa,n,js(n)),ha(i0,s)}}function o0(n,s,a){n==="focusin"?(tm(),Sa=s,Aa=a,Sa.attachEvent("onpropertychange",nm)):n==="focusout"&&tm()}function a0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ru(Aa)}function l0(n,s){if(n==="click")return ru(s)}function u0(n,s){if(n==="input"||n==="change")return ru(s)}function c0(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var qn=typeof Object.is=="function"?Object.is:c0;function Ra(n,s){if(qn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!qn(n[d],s[d]))return!1}return!0}function rm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,s){var a=rm(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function sm(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?sm(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function om(){for(var n=window,s=Xr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Xr(n.document)}return s}function _h(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function h0(n){var s=om(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&sm(a.ownerDocument.documentElement,a)){if(c!==null&&_h(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=im(a,m);var v=im(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d0=f&&"documentMode"in document&&11>=document.documentMode,lo=null,vh=null,ka=null,Eh=!1;function am(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eh||lo==null||lo!==Xr(c)||(c=lo,"selectionStart"in c&&_h(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Ra(ka,c)||(ka=c,c=au(vh,"onSelect"),0<c.length&&(s=new eo("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=lo)))}function iu(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var uo={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},wh={},lm={};f&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function su(n){if(wh[n])return wh[n];if(!uo[n])return n;var s=uo[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in lm)return wh[n]=s[a];return n}var um=su("animationend"),cm=su("animationiteration"),hm=su("animationstart"),dm=su("transitionend"),fm=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(n,s){fm.set(n,s),l(s,[n])}for(var Th=0;Th<pm.length;Th++){var Ih=pm[Th],f0=Ih.toLowerCase(),p0=Ih[0].toUpperCase()+Ih.slice(1);ai(f0,"on"+p0)}ai(um,"onAnimationEnd"),ai(cm,"onAnimationIteration"),ai(hm,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(dm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function mm(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,bl(c,s,void 0,n),n.currentTarget=null}function gm(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],P=R.instance,j=R.currentTarget;if(R=R.listener,P!==m&&d.isPropagationStopped())break e;mm(d,R,j),m=P}else for(v=0;v<c.length;v++){if(R=c[v],P=R.instance,j=R.currentTarget,R=R.listener,P!==m&&d.isPropagationStopped())break e;mm(d,R,j),m=P}}}if(Mn)throw n=da,Mn=!1,da=null,n}function Xe(n,s){var a=s[xh];a===void 0&&(a=s[xh]=new Set);var c=n+"__bubble";a.has(c)||(ym(s,n,2,!1),a.add(c))}function Sh(n,s,a){var c=0;s&&(c|=4),ym(a,n,c,s)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Pa(n){if(!n[ou]){n[ou]=!0,i.forEach(function(a){a!=="selectionchange"&&(m0.has(a)||Sh(a,!1,n),Sh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[ou]||(s[ou]=!0,Sh("selectionchange",!1,s))}}function ym(n,s,a,c){switch(va(s)){case 1:var d=Ze;break;case 4:d=ph;break;default:d=_a}a=d.bind(null,s,a,n),d=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Ah(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;R!==null;){if(v=ss(R),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}R=R.parentNode}}c=c.return}ha(function(){var j=m,Q=js(a),X=[];e:{var K=fm.get(n);if(K!==void 0){var re=eo,ue=n;switch(n){case"keypress":if(Zs(a)===0)break e;case"keydown":case"keyup":re=p;break;case"focusin":ue="focus",re=io;break;case"focusout":ue="blur",re=io;break;case"beforeblur":case"afterblur":re=io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Xl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=z;break;case um:case cm:case hm:re=Dr;break;case dm:re=ze;break;case"scroll":re=mh;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=Zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=w}var ce=(s&4)!==0,ht=!ce&&n==="scroll",M=ce?K!==null?K+"Capture":null:K;ce=[];for(var D=j,U;D!==null;){U=D;var Y=U.stateNode;if(U.tag===5&&Y!==null&&(U=Y,M!==null&&(Y=ct(D,M),Y!=null&&ce.push(Na(D,Y,U)))),ht)break;D=D.return}0<ce.length&&(K=new re(K,ue,null,a,Q),X.push({event:K,listeners:ce}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&a!==Wi&&(ue=a.relatedTarget||a.fromElement)&&(ss(ue)||ue[Or]))break e;if((re||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,re?(ue=a.relatedTarget||a.toElement,re=j,ue=ue?ss(ue):null,ue!==null&&(ht=Fn(ue),ue!==ht||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(re=null,ue=j),re!==ue)){if(ce=no,Y="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ce=w,Y="onPointerLeave",M="onPointerEnter",D="pointer"),ht=re==null?K:fo(re),U=ue==null?K:fo(ue),K=new ce(Y,D+"leave",re,a,Q),K.target=ht,K.relatedTarget=U,Y=null,ss(Q)===j&&(ce=new ce(M,D+"enter",ue,a,Q),ce.target=U,ce.relatedTarget=ht,Y=ce),ht=Y,re&&ue)t:{for(ce=re,M=ue,D=0,U=ce;U;U=co(U))D++;for(U=0,Y=M;Y;Y=co(Y))U++;for(;0<D-U;)ce=co(ce),D--;for(;0<U-D;)M=co(M),U--;for(;D--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=co(ce),M=co(M)}ce=null}else ce=null;re!==null&&_m(X,K,re,ce,!1),ue!==null&&ht!==null&&_m(X,ht,ue,ce,!0)}}e:{if(K=j?fo(j):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var de=s0;else if(Yp(K))if(Zp)de=u0;else{de=a0;var ge=o0}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(de=l0);if(de&&(de=de(n,j))){Jp(X,de,a,Q);break e}ge&&ge(n,K,j),n==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Ms(K,"number",K.value)}switch(ge=j?fo(j):window,n){case"focusin":(Yp(ge)||ge.contentEditable==="true")&&(lo=ge,vh=j,ka=null);break;case"focusout":ka=vh=lo=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,am(X,a,Q);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":am(X,a,Q)}var ye;if(ft)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ao?Qp(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(is&&a.locale!=="ko"&&(ao||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ao&&(ye=Ea()):(gn=Q,Js="value"in gn?gn.value:gn.textContent,ao=!0)),ge=au(j,Ee),0<ge.length&&(Ee=new Ia(Ee,n,null,a,Q),X.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Xp(a),ye!==null&&(Ee.data=ye)))),(ye=yn?t0(n,a):n0(n,a))&&(j=au(j,"onBeforeInput"),0<j.length&&(Q=new Ia("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:j}),Q.data=ye))}gm(X,s)})}function Na(n,s,a){return{instance:n,listener:s,currentTarget:a}}function au(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ct(n,a),m!=null&&c.unshift(Na(n,m,d)),m=ct(n,s),m!=null&&c.push(Na(n,m,d))),n=n.return}return c}function co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _m(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var R=a,P=R.alternate,j=R.stateNode;if(P!==null&&P===c)break;R.tag===5&&j!==null&&(R=j,d?(P=ct(a,m),P!=null&&v.unshift(Na(a,P,R))):d||(P=ct(a,m),P!=null&&v.push(Na(a,P,R)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var g0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function vm(n){return(typeof n=="string"?n:""+n).replace(g0,`
`).replace(y0,"")}function lu(n,s,a){if(s=vm(s),vm(n)!==s&&a)throw Error(t(425))}function uu(){}var Rh=null,kh=null;function Ch(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(n){return Em.resolve(null).then(n).catch(E0)}:Ph;function E0(n){setTimeout(function(){throw n})}function Nh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),$n(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);$n(s)}function li(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function wm(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ho=Math.random().toString(36).slice(2),ar="__reactFiber$"+ho,xa="__reactProps$"+ho,Or="__reactContainer$"+ho,xh="__reactEvents$"+ho,w0="__reactListeners$"+ho,T0="__reactHandles$"+ho;function ss(n){var s=n[ar];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Or]||a[ar]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=wm(n);n!==null;){if(a=n[ar])return a;n=wm(n)}return s}n=a,a=n.parentNode}return null}function Da(n){return n=n[ar]||n[Or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function cu(n){return n[xa]||null}var Dh=[],po=-1;function ui(n){return{current:n}}function Ye(n){0>po||(n.current=Dh[po],Dh[po]=null,po--)}function Ke(n,s){po++,Dh[po]=n.current,n.current=s}var ci={},Ut=ui(ci),on=ui(!1),os=ci;function mo(n,s){var a=n.type.contextTypes;if(!a)return ci;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function an(n){return n=n.childContextTypes,n!=null}function hu(){Ye(on),Ye(Ut)}function Tm(n,s,a){if(Ut.current!==ci)throw Error(t(168));Ke(Ut,s),Ke(on,a)}function Im(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ue(n)||"Unknown",d));return se({},a,c)}function du(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ci,os=Ut.current,Ke(Ut,n),Ke(on,on.current),!0}function Sm(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Im(n,s,os),c.__reactInternalMemoizedMergedChildContext=n,Ye(on),Ye(Ut),Ke(Ut,n)):Ye(on),Ke(on,a)}var Vr=null,fu=!1,Oh=!1;function Am(n){Vr===null?Vr=[n]:Vr.push(n)}function I0(n){fu=!0,Am(n)}function hi(){if(!Oh&&Vr!==null){Oh=!0;var n=0,s=De;try{var a=Vr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Vr=null,fu=!1}catch(d){throw Vr!==null&&(Vr=Vr.slice(n+1)),Gs(Yi,hi),d}finally{De=s,Oh=!1}}return null}var go=[],yo=0,pu=null,mu=0,kn=[],Cn=0,as=null,br=1,Lr="";function ls(n,s){go[yo++]=mu,go[yo++]=pu,pu=n,mu=s}function Rm(n,s,a){kn[Cn++]=br,kn[Cn++]=Lr,kn[Cn++]=as,as=n;var c=br;n=Lr;var d=32-Gt(c)-1;c&=~(1<<d),a+=1;var m=32-Gt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,br=1<<32-Gt(s)+d|a<<d|c,Lr=m+n}else br=1<<m|a<<d|c,Lr=n}function Vh(n){n.return!==null&&(ls(n,1),Rm(n,1,0))}function bh(n){for(;n===pu;)pu=go[--yo],go[yo]=null,mu=go[--yo],go[yo]=null;for(;n===as;)as=kn[--Cn],kn[Cn]=null,Lr=kn[--Cn],kn[Cn]=null,br=kn[--Cn],kn[Cn]=null}var _n=null,vn=null,et=!1,Wn=null;function km(n,s){var a=Dn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Cm(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,_n=n,vn=li(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,_n=n,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=as!==null?{id:br,overflow:Lr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Dn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,_n=n,vn=null,!0):!1;default:return!1}}function Lh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mh(n){if(et){var s=vn;if(s){var a=s;if(!Cm(n,s)){if(Lh(n))throw Error(t(418));s=li(a.nextSibling);var c=_n;s&&Cm(n,s)?km(c,a):(n.flags=n.flags&-4097|2,et=!1,_n=n)}}else{if(Lh(n))throw Error(t(418));n.flags=n.flags&-4097|2,et=!1,_n=n}}}function Pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function gu(n){if(n!==_n)return!1;if(!et)return Pm(n),et=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Ch(n.type,n.memoizedProps)),s&&(s=vn)){if(Lh(n))throw Nm(),Error(t(418));for(;s;)km(n,s),s=li(s.nextSibling)}if(Pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){vn=li(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}vn=null}}else vn=_n?li(n.stateNode.nextSibling):null;return!0}function Nm(){for(var n=vn;n;)n=li(n.nextSibling)}function _o(){vn=_n=null,et=!1}function Fh(n){Wn===null?Wn=[n]:Wn.push(n)}var S0=le.ReactCurrentBatchConfig;function Oa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var R=d.refs;v===null?delete R[m]:R[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function yu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function xm(n){var s=n._init;return s(n._payload)}function Dm(n){function s(M,D){if(n){var U=M.deletions;U===null?(M.deletions=[D],M.flags|=16):U.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=vi(M,D),M.index=0,M.sibling=null,M}function m(M,D,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<D?(M.flags|=2,D):U):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function R(M,D,U,Y){return D===null||D.tag!==6?(D=Pd(U,M.mode,Y),D.return=M,D):(D=d(D,U),D.return=M,D)}function P(M,D,U,Y){var de=U.type;return de===x?Q(M,D,U.props.children,Y,U.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&xm(de)===D.type)?(Y=d(D,U.props),Y.ref=Oa(M,D,U),Y.return=M,Y):(Y=Bu(U.type,U.key,U.props,null,M.mode,Y),Y.ref=Oa(M,D,U),Y.return=M,Y)}function j(M,D,U,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Nd(U,M.mode,Y),D.return=M,D):(D=d(D,U.children||[]),D.return=M,D)}function Q(M,D,U,Y,de){return D===null||D.tag!==7?(D=gs(U,M.mode,Y,de),D.return=M,D):(D=d(D,U),D.return=M,D)}function X(M,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Pd(""+D,M.mode,U),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return U=Bu(D.type,D.key,D.props,null,M.mode,U),U.ref=Oa(M,null,D),U.return=M,U;case Te:return D=Nd(D,M.mode,U),D.return=M,D;case He:var Y=D._init;return X(M,Y(D._payload),U)}if(Sr(D)||me(D))return D=gs(D,M.mode,U,null),D.return=M,D;yu(M,D)}return null}function K(M,D,U,Y){var de=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:R(M,D,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:return U.key===de?P(M,D,U,Y):null;case Te:return U.key===de?j(M,D,U,Y):null;case He:return de=U._init,K(M,D,de(U._payload),Y)}if(Sr(U)||me(U))return de!==null?null:Q(M,D,U,Y,null);yu(M,U)}return null}function re(M,D,U,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(U)||null,R(D,M,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case xe:return M=M.get(Y.key===null?U:Y.key)||null,P(D,M,Y,de);case Te:return M=M.get(Y.key===null?U:Y.key)||null,j(D,M,Y,de);case He:var ge=Y._init;return re(M,D,U,ge(Y._payload),de)}if(Sr(Y)||me(Y))return M=M.get(U)||null,Q(D,M,Y,de,null);yu(D,Y)}return null}function ue(M,D,U,Y){for(var de=null,ge=null,ye=D,Ee=D=0,Pt=null;ye!==null&&Ee<U.length;Ee++){ye.index>Ee?(Pt=ye,ye=null):Pt=ye.sibling;var Fe=K(M,ye,U[Ee],Y);if(Fe===null){ye===null&&(ye=Pt);break}n&&ye&&Fe.alternate===null&&s(M,ye),D=m(Fe,D,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe,ye=Pt}if(Ee===U.length)return a(M,ye),et&&ls(M,Ee),de;if(ye===null){for(;Ee<U.length;Ee++)ye=X(M,U[Ee],Y),ye!==null&&(D=m(ye,D,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return et&&ls(M,Ee),de}for(ye=c(M,ye);Ee<U.length;Ee++)Pt=re(ye,M,Ee,U[Ee],Y),Pt!==null&&(n&&Pt.alternate!==null&&ye.delete(Pt.key===null?Ee:Pt.key),D=m(Pt,D,Ee),ge===null?de=Pt:ge.sibling=Pt,ge=Pt);return n&&ye.forEach(function(Ei){return s(M,Ei)}),et&&ls(M,Ee),de}function ce(M,D,U,Y){var de=me(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=D,Ee=D=0,Pt=null,Fe=U.next();ye!==null&&!Fe.done;Ee++,Fe=U.next()){ye.index>Ee?(Pt=ye,ye=null):Pt=ye.sibling;var Ei=K(M,ye,Fe.value,Y);if(Ei===null){ye===null&&(ye=Pt);break}n&&ye&&Ei.alternate===null&&s(M,ye),D=m(Ei,D,Ee),ge===null?de=Ei:ge.sibling=Ei,ge=Ei,ye=Pt}if(Fe.done)return a(M,ye),et&&ls(M,Ee),de;if(ye===null){for(;!Fe.done;Ee++,Fe=U.next())Fe=X(M,Fe.value,Y),Fe!==null&&(D=m(Fe,D,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return et&&ls(M,Ee),de}for(ye=c(M,ye);!Fe.done;Ee++,Fe=U.next())Fe=re(ye,M,Ee,Fe.value,Y),Fe!==null&&(n&&Fe.alternate!==null&&ye.delete(Fe.key===null?Ee:Fe.key),D=m(Fe,D,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return n&&ye.forEach(function(rT){return s(M,rT)}),et&&ls(M,Ee),de}function ht(M,D,U,Y){if(typeof U=="object"&&U!==null&&U.type===x&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:e:{for(var de=U.key,ge=D;ge!==null;){if(ge.key===de){if(de=U.type,de===x){if(ge.tag===7){a(M,ge.sibling),D=d(ge,U.props.children),D.return=M,M=D;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===He&&xm(de)===ge.type){a(M,ge.sibling),D=d(ge,U.props),D.ref=Oa(M,ge,U),D.return=M,M=D;break e}a(M,ge);break}else s(M,ge);ge=ge.sibling}U.type===x?(D=gs(U.props.children,M.mode,Y,U.key),D.return=M,M=D):(Y=Bu(U.type,U.key,U.props,null,M.mode,Y),Y.ref=Oa(M,D,U),Y.return=M,M=Y)}return v(M);case Te:e:{for(ge=U.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(M,D.sibling),D=d(D,U.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else s(M,D);D=D.sibling}D=Nd(U,M.mode,Y),D.return=M,M=D}return v(M);case He:return ge=U._init,ht(M,D,ge(U._payload),Y)}if(Sr(U))return ue(M,D,U,Y);if(me(U))return ce(M,D,U,Y);yu(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,U),D.return=M,M=D):(a(M,D),D=Pd(U,M.mode,Y),D.return=M,M=D),v(M)):a(M,D)}return ht}var vo=Dm(!0),Om=Dm(!1),_u=ui(null),vu=null,Eo=null,Uh=null;function jh(){Uh=Eo=vu=null}function Bh(n){var s=_u.current;Ye(_u),n._currentValue=s}function zh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function wo(n,s){vu=n,Uh=Eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(ln=!0),n.firstContext=null)}function Pn(n){var s=n._currentValue;if(Uh!==n)if(n={context:n,memoizedValue:s,next:null},Eo===null){if(vu===null)throw Error(t(308));Eo=n,vu.dependencies={lanes:0,firstContext:n}}else Eo=Eo.next=n;return s}var us=null;function $h(n){us===null?us=[n]:us.push(n)}function Vm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,$h(s)):(a.next=d.next,d.next=a),s.interleaved=a,Mr(n,c)}function Mr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var di=!1;function Hh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function fi(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Mr(n,a)}return d=c.interleaved,d===null?(s.next=s,$h(c)):(s.next=d.next,d.next=s),c.interleaved=s,Mr(n,a)}function Eu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ni(n,a)}}function Lm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function wu(n,s,a,c){var d=n.updateQueue;di=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var P=R,j=P.next;P.next=null,v===null?m=j:v.next=j,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,R=Q.lastBaseUpdate,R!==v&&(R===null?Q.firstBaseUpdate=j:R.next=j,Q.lastBaseUpdate=P))}if(m!==null){var X=d.baseState;v=0,Q=j=P=null,R=m;do{var K=R.lane,re=R.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ue=n,ce=R;switch(K=s,re=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(re,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(re,X,K):ue,K==null)break e;X=se({},X,K);break e;case 2:di=!0}}R.callback!==null&&R.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[R]:K.push(R))}else re={eventTime:re,lane:K,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Q===null?(j=Q=re,P=X):Q=Q.next=re,v|=K;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;K=R,R=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=X),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ds|=v,n.lanes=v,n.memoizedState=X}}function Mm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Va={},lr=ui(Va),ba=ui(Va),La=ui(Va);function cs(n){if(n===Va)throw Error(t(174));return n}function qh(n,s){switch(Ke(La,s),Ke(ba,n),Ke(lr,Va),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=vt(s,n)}Ye(lr),Ke(lr,s)}function To(){Ye(lr),Ye(ba),Ye(La)}function Fm(n){cs(La.current);var s=cs(lr.current),a=vt(s,n.type);s!==a&&(Ke(ba,n),Ke(lr,a))}function Wh(n){ba.current===n&&(Ye(lr),Ye(ba))}var nt=ui(0);function Tu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gh=[];function Kh(){for(var n=0;n<Gh.length;n++)Gh[n]._workInProgressVersionPrimary=null;Gh.length=0}var Iu=le.ReactCurrentDispatcher,Qh=le.ReactCurrentBatchConfig,hs=0,rt=null,wt=null,kt=null,Su=!1,Ma=!1,Fa=0,A0=0;function jt(){throw Error(t(321))}function Xh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!qn(n[a],s[a]))return!1;return!0}function Yh(n,s,a,c,d,m){if(hs=m,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Iu.current=n===null||n.memoizedState===null?P0:N0,n=a(c,d),Ma){m=0;do{if(Ma=!1,Fa=0,25<=m)throw Error(t(301));m+=1,kt=wt=null,s.updateQueue=null,Iu.current=x0,n=a(c,d)}while(Ma)}if(Iu.current=ku,s=wt!==null&&wt.next!==null,hs=0,kt=wt=rt=null,Su=!1,s)throw Error(t(300));return n}function Jh(){var n=Fa!==0;return Fa=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?rt.memoizedState=kt=n:kt=kt.next=n,kt}function Nn(){if(wt===null){var n=rt.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var s=kt===null?rt.memoizedState:kt.next;if(s!==null)kt=s,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},kt===null?rt.memoizedState=kt=n:kt=kt.next=n}return kt}function Ua(n,s){return typeof s=="function"?s(n):s}function Zh(n){var s=Nn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var R=v=null,P=null,j=m;do{var Q=j.lane;if((hs&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var X={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(R=P=X,v=c):P=P.next=X,rt.lanes|=Q,ds|=Q}j=j.next}while(j!==null&&j!==m);P===null?v=c:P.next=R,qn(c,s.memoizedState)||(ln=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,rt.lanes|=m,ds|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ed(n){var s=Nn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);qn(m,s.memoizedState)||(ln=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function Um(){}function jm(n,s){var a=rt,c=Nn(),d=s(),m=!qn(c.memoizedState,d);if(m&&(c.memoizedState=d,ln=!0),c=c.queue,td($m.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,ja(9,zm.bind(null,a,c,d,s),void 0,null),Ct===null)throw Error(t(349));(hs&30)!==0||Bm(a,s,d)}return d}function Bm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function zm(n,s,a,c){s.value=a,s.getSnapshot=c,Hm(s)&&qm(n)}function $m(n,s,a){return a(function(){Hm(s)&&qm(n)})}function Hm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!qn(n,a)}catch{return!0}}function qm(n){var s=Mr(n,1);s!==null&&Xn(s,n,1,-1)}function Wm(n){var s=ur();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},s.queue=n,n=n.dispatch=C0.bind(null,rt,n),[s.memoizedState,n]}function ja(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Gm(){return Nn().memoizedState}function Au(n,s,a,c){var d=ur();rt.flags|=n,d.memoizedState=ja(1|s,a,void 0,c===void 0?null:c)}function Ru(n,s,a,c){var d=Nn();c=c===void 0?null:c;var m=void 0;if(wt!==null){var v=wt.memoizedState;if(m=v.destroy,c!==null&&Xh(c,v.deps)){d.memoizedState=ja(s,a,m,c);return}}rt.flags|=n,d.memoizedState=ja(1|s,a,m,c)}function Km(n,s){return Au(8390656,8,n,s)}function td(n,s){return Ru(2048,8,n,s)}function Qm(n,s){return Ru(4,2,n,s)}function Xm(n,s){return Ru(4,4,n,s)}function Ym(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Jm(n,s,a){return a=a!=null?a.concat([n]):null,Ru(4,4,Ym.bind(null,s,n),a)}function nd(){}function Zm(n,s){var a=Nn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Xh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function eg(n,s){var a=Nn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Xh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function tg(n,s,a){return(hs&21)===0?(n.baseState&&(n.baseState=!1,ln=!0),n.memoizedState=a):(qn(a,s)||(a=es(),rt.lanes|=a,ds|=a,n.baseState=!0),s)}function R0(n,s){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Qh.transition;Qh.transition={};try{n(!1),s()}finally{De=a,Qh.transition=c}}function ng(){return Nn().memoizedState}function k0(n,s,a){var c=yi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rg(n))ig(s,a);else if(a=Vm(n,s,a,c),a!==null){var d=Xt();Xn(a,n,c,d),sg(a,s,c)}}function C0(n,s,a){var c=yi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(n))ig(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,R=m(v,a);if(d.hasEagerState=!0,d.eagerState=R,qn(R,v)){var P=s.interleaved;P===null?(d.next=d,$h(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Vm(n,s,d,c),a!==null&&(d=Xt(),Xn(a,n,c,d),sg(a,s,c))}}function rg(n){var s=n.alternate;return n===rt||s!==null&&s===rt}function ig(n,s){Ma=Su=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function sg(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ni(n,a)}}var ku={readContext:Pn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},P0={readContext:Pn,useCallback:function(n,s){return ur().memoizedState=[n,s===void 0?null:s],n},useContext:Pn,useEffect:Km,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,Au(4194308,4,Ym.bind(null,s,n),a)},useLayoutEffect:function(n,s){return Au(4194308,4,n,s)},useInsertionEffect:function(n,s){return Au(4,2,n,s)},useMemo:function(n,s){var a=ur();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=ur();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=k0.bind(null,rt,n),[c.memoizedState,n]},useRef:function(n){var s=ur();return n={current:n},s.memoizedState=n},useState:Wm,useDebugValue:nd,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=Wm(!1),s=n[0];return n=R0.bind(null,n[1]),ur().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=rt,d=ur();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ct===null)throw Error(t(349));(hs&30)!==0||Bm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Km($m.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,zm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=ur(),s=Ct.identifierPrefix;if(et){var a=Lr,c=br;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Fa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=A0++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},N0={readContext:Pn,useCallback:Zm,useContext:Pn,useEffect:td,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Xm,useMemo:eg,useReducer:Zh,useRef:Gm,useState:function(){return Zh(Ua)},useDebugValue:nd,useDeferredValue:function(n){var s=Nn();return tg(s,wt.memoizedState,n)},useTransition:function(){var n=Zh(Ua)[0],s=Nn().memoizedState;return[n,s]},useMutableSource:Um,useSyncExternalStore:jm,useId:ng,unstable_isNewReconciler:!1},x0={readContext:Pn,useCallback:Zm,useContext:Pn,useEffect:td,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Xm,useMemo:eg,useReducer:ed,useRef:Gm,useState:function(){return ed(Ua)},useDebugValue:nd,useDeferredValue:function(n){var s=Nn();return wt===null?s.memoizedState=n:tg(s,wt.memoizedState,n)},useTransition:function(){var n=ed(Ua)[0],s=Nn().memoizedState;return[n,s]},useMutableSource:Um,useSyncExternalStore:jm,useId:ng,unstable_isNewReconciler:!1};function Gn(n,s){if(n&&n.defaultProps){s=se({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function rd(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cu={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Xt(),d=yi(n),m=Fr(c,d);m.payload=s,a!=null&&(m.callback=a),s=fi(n,m,d),s!==null&&(Xn(s,n,d,c),Eu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Xt(),d=yi(n),m=Fr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=fi(n,m,d),s!==null&&(Xn(s,n,d,c),Eu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Xt(),c=yi(n),d=Fr(a,c);d.tag=2,s!=null&&(d.callback=s),s=fi(n,d,c),s!==null&&(Xn(s,n,c,a),Eu(s,n,c))}};function og(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!Ra(a,c)||!Ra(d,m):!0}function ag(n,s,a){var c=!1,d=ci,m=s.contextType;return typeof m=="object"&&m!==null?m=Pn(m):(d=an(s)?os:Ut.current,c=s.contextTypes,m=(c=c!=null)?mo(n,d):ci),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function lg(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&Cu.enqueueReplaceState(s,s.state,null)}function id(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Hh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Pn(m):(m=an(s)?os:Ut.current,d.context=mo(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(rd(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Cu.enqueueReplaceState(d,d.state,null),wu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Io(n,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function sd(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function od(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function ug(n,s,a){a=Fr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){bu||(bu=!0,wd=c),od(n,s)},a}function cg(n,s,a){a=Fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){od(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){od(n,s),typeof c!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function hg(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new D0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=W0.bind(null,n,s,a),s.then(n,n))}function dg(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function fg(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Fr(-1,1),s.tag=2,fi(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var O0=le.ReactCurrentOwner,ln=!1;function Qt(n,s,a,c){s.child=n===null?Om(s,null,a,c):vo(s,n.child,a,c)}function pg(n,s,a,c,d){a=a.render;var m=s.ref;return wo(s,d),c=Yh(n,s,a,c,m,d),a=Jh(),n!==null&&!ln?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ur(n,s,d)):(et&&a&&Vh(s),s.flags|=1,Qt(n,s,c,d),s.child)}function mg(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Cd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,gg(n,s,m,c,d)):(n=Bu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(v,c)&&n.ref===s.ref)return Ur(n,s,d)}return s.flags|=1,n=vi(m,c),n.ref=s.ref,n.return=s,s.child=n}function gg(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ra(m,c)&&n.ref===s.ref)if(ln=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ln=!0);else return s.lanes=n.lanes,Ur(n,s,d)}return ad(n,s,a,c,d)}function yg(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ao,En),En|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ke(Ao,En),En|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ke(Ao,En),En|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ke(Ao,En),En|=c;return Qt(n,s,d,a),s.child}function _g(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ad(n,s,a,c,d){var m=an(a)?os:Ut.current;return m=mo(s,m),wo(s,d),a=Yh(n,s,a,c,m,d),c=Jh(),n!==null&&!ln?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ur(n,s,d)):(et&&c&&Vh(s),s.flags|=1,Qt(n,s,a,d),s.child)}function vg(n,s,a,c,d){if(an(a)){var m=!0;du(s)}else m=!1;if(wo(s,d),s.stateNode===null)Nu(n,s),ag(s,a,c),id(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Pn(j):(j=an(a)?os:Ut.current,j=mo(s,j));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||P!==j)&&lg(s,v,c,j),di=!1;var K=s.memoizedState;v.state=K,wu(s,c,v,d),P=s.memoizedState,R!==c||K!==P||on.current||di?(typeof Q=="function"&&(rd(s,a,Q,c),P=s.memoizedState),(R=di||og(s,a,R,c,K,P,j))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=j,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,bm(n,s),R=s.memoizedProps,j=s.type===s.elementType?R:Gn(s.type,R),v.props=j,X=s.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Pn(P):(P=an(a)?os:Ut.current,P=mo(s,P));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==X||K!==P)&&lg(s,v,c,P),di=!1,K=s.memoizedState,v.state=K,wu(s,c,v,d);var ue=s.memoizedState;R!==X||K!==ue||on.current||di?(typeof re=="function"&&(rd(s,a,re,c),ue=s.memoizedState),(j=di||og(s,a,j,c,K,ue,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||R===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return ld(n,s,a,c,m,d)}function ld(n,s,a,c,d,m){_g(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Sm(s,a,!1),Ur(n,s,m);c=s.stateNode,O0.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=vo(s,n.child,null,m),s.child=vo(s,null,R,m)):Qt(n,s,R,m),s.memoizedState=c.state,d&&Sm(s,a,!0),s.child}function Eg(n){var s=n.stateNode;s.pendingContext?Tm(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Tm(n,s.context,!1),qh(n,s.containerInfo)}function wg(n,s,a,c,d){return _o(),Fh(d),s.flags|=256,Qt(n,s,a,c),s.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tg(n,s,a){var c=s.pendingProps,d=nt.current,m=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=n!==null&&n.memoizedState===null?!1:(d&2)!==0),R?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ke(nt,d&1),n===null)return Mh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=zu(v,c,0,null),n=gs(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=cd(a),s.memoizedState=ud,n):hd(s,v));if(d=n.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return V0(n,s,v,c,R,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,R=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=vi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?m=vi(R,m):(m=gs(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?cd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=ud,c}return m=n.child,n=m.sibling,c=vi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function hd(n,s){return s=zu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Pu(n,s,a,c){return c!==null&&Fh(c),vo(s,n.child,null,a),n=hd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function V0(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=sd(Error(t(422))),Pu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=zu({mode:"visible",children:c.children},d,0,null),m=gs(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&vo(s,n.child,null,v),s.child.memoizedState=cd(v),s.memoizedState=ud,m);if((s.mode&1)===0)return Pu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,m=Error(t(419)),c=sd(m,c,void 0),Pu(n,s,v,c)}if(R=(v&n.childLanes)!==0,ln||R){if(c=Ct,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Mr(n,d),Xn(c,n,d,-1))}return kd(),c=sd(Error(t(421))),Pu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=G0.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,vn=li(d.nextSibling),_n=s,et=!0,Wn=null,n!==null&&(kn[Cn++]=br,kn[Cn++]=Lr,kn[Cn++]=as,br=n.id,Lr=n.overflow,as=s),s=hd(s,c.children),s.flags|=4096,s)}function Ig(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),zh(n.return,s,a)}function dd(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Sg(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(n,s,c.children,a),c=nt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ig(n,a,s);else if(n.tag===19)Ig(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(nt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Tu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),dd(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Tu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dd(s,!0,a,null,m);break;case"together":dd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ur(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ds|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=vi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=vi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function b0(n,s,a){switch(s.tag){case 3:Eg(s),_o();break;case 5:Fm(s);break;case 1:an(s.type)&&du(s);break;case 4:qh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(_u,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Tg(n,s,a):(Ke(nt,nt.current&1),n=Ur(n,s,a),n!==null?n.sibling:null);Ke(nt,nt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Sg(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(nt,nt.current),c)break;return null;case 22:case 23:return s.lanes=0,yg(n,s,a)}return Ur(n,s,a)}var Ag,fd,Rg,kg;Ag=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fd=function(){},Rg=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,cs(lr.current);var m=null;switch(a){case"input":d=$i(n,d),c=$i(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=ta(n,d),c=ta(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=uu)}aa(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var R=d[j];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var P=c[j];if(R=d?.[j],c.hasOwnProperty(j)&&P!==R&&(P!=null||R!=null))if(j==="style")if(R){for(v in R)!R.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&R[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,R=R?R.__html:void 0,P!=null&&R!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Xe("scroll",n),m||R===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},kg=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ba(n,s){if(!et)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function L0(n,s,a){var c=s.pendingProps;switch(bh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return an(s.type)&&hu(),Bt(s),null;case 3:return c=s.stateNode,To(),Ye(on),Ye(Ut),Kh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(gu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Wn!==null&&(Sd(Wn),Wn=null))),fd(n,s),Bt(s),null;case 5:Wh(s);var d=cs(La.current);if(a=s.type,n!==null&&s.stateNode!=null)Rg(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(n=cs(lr.current),gu(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[ar]=s,c[xa]=m,n=(s.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<Ca.length;d++)Xe(Ca[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":Ls(c,m),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Xe("invalid",c);break;case"textarea":Fs(c,m),Xe("invalid",c)}aa(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var R=m[v];v==="children"?typeof R=="string"?c.textContent!==R&&(m.suppressHydrationWarning!==!0&&lu(c.textContent,R,n),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(m.suppressHydrationWarning!==!0&&lu(c.textContent,R,n),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&Xe("scroll",c)}switch(a){case"input":Ir(c),Vl(c,m,!0);break;case"textarea":Ir(c),na(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=uu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_t(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[ar]=s,n[xa]=c,Ag(n,s,!1,!1),s.stateNode=n;e:{switch(v=la(a,c),a){case"dialog":Xe("cancel",n),Xe("close",n),d=c;break;case"iframe":case"object":case"embed":Xe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ca.length;d++)Xe(Ca[d],n);d=c;break;case"source":Xe("error",n),d=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),d=c;break;case"details":Xe("toggle",n),d=c;break;case"input":Ls(n,c),d=$i(n,c),Xe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":Fs(n,c),d=ta(n,c),Xe("invalid",n);break;default:d=c}aa(a,d),R=d;for(m in R)if(R.hasOwnProperty(m)){var P=R[m];m==="style"?sa(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ra(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Yr(n,P):typeof P=="number"&&Yr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Xe("scroll",n):P!=null&&ne(n,m,P,v))}switch(a){case"input":Ir(n),Vl(n,c,!1);break;case"textarea":Ir(n),na(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ar(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ar(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=uu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(n&&s.stateNode!=null)kg(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=cs(La.current),cs(lr.current),gu(s)){if(c=s.stateNode,a=s.memoizedProps,c[ar]=s,(m=c.nodeValue!==a)&&(n=_n,n!==null))switch(n.tag){case 3:lu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lu(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ar]=s,s.stateNode=c}return Bt(s),null;case 13:if(Ye(nt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&vn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Nm(),_o(),s.flags|=98560,m=!1;else if(m=gu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ar]=s}else _o(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bt(s),m=!1}else Wn!==null&&(Sd(Wn),Wn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(nt.current&1)!==0?Tt===0&&(Tt=3):kd())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return To(),fd(n,s),n===null&&Pa(s.stateNode.containerInfo),Bt(s),null;case 10:return Bh(s.type._context),Bt(s),null;case 17:return an(s.type)&&hu(),Bt(s),null;case 19:if(Ye(nt),m=s.memoizedState,m===null)return Bt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Ba(m,!1);else{if(Tt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=Tu(n),v!==null){for(s.flags|=128,Ba(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(nt,nt.current&1|2),s.child}n=n.sibling}m.tail!==null&&Ge()>Ro&&(s.flags|=128,c=!0,Ba(m,!1),s.lanes=4194304)}else{if(!c)if(n=Tu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!et)return Bt(s),null}else 2*Ge()-m.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,c=!0,Ba(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ge(),s.sibling=null,a=nt.current,Ke(nt,c?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return Rd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(En&1073741824)!==0&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function M0(n,s){switch(bh(s),s.tag){case 1:return an(s.type)&&hu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return To(),Ye(on),Ye(Ut),Kh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Wh(s),null;case 13:if(Ye(nt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ye(nt),null;case 4:return To(),null;case 10:return Bh(s.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var xu=!1,zt=!1,F0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function So(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,s,c)}else a.current=null}function pd(n,s,a){try{a()}catch(c){st(n,s,c)}}var Cg=!1;function U0(n,s){if(Rh=si,n=om(),_h(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,R=-1,P=-1,j=0,Q=0,X=n,K=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(R=v+d),X!==m||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(re=X.firstChild)!==null;)K=X,X=re;for(;;){if(X===n)break t;if(K===a&&++j===d&&(R=v),K===m&&++Q===c&&(P=v),(re=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=re}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(kh={focusedElem:n,selectionRange:a},si=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ht=ue.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Gn(s.type,ce),ht);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){st(s,s.return,Y)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return ue=Cg,Cg=!1,ue}function za(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pd(s,a,m)}d=d.next}while(d!==c)}}function Du(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function md(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Pg(n){var s=n.alternate;s!==null&&(n.alternate=null,Pg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[ar],delete s[xa],delete s[xh],delete s[w0],delete s[T0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ng(n){return n.tag===5||n.tag===3||n.tag===4}function xg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ng(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=uu));else if(c!==4&&(n=n.child,n!==null))for(gd(n,s,a),n=n.sibling;n!==null;)gd(n,s,a),n=n.sibling}function yd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yd(n,s,a),n=n.sibling;n!==null;)yd(n,s,a),n=n.sibling}var Vt=null,Kn=!1;function pi(n,s,a){for(a=a.child;a!==null;)Dg(n,s,a),a=a.sibling}function Dg(n,s,a){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 5:zt||So(a,s);case 6:var c=Vt,d=Kn;Vt=null,pi(n,s,a),Vt=c,Kn=d,Vt!==null&&(Kn?(n=Vt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Vt.removeChild(a.stateNode));break;case 18:Vt!==null&&(Kn?(n=Vt,a=a.stateNode,n.nodeType===8?Nh(n.parentNode,a):n.nodeType===1&&Nh(n,a),$n(n)):Nh(Vt,a.stateNode));break;case 4:c=Vt,d=Kn,Vt=a.stateNode.containerInfo,Kn=!0,pi(n,s,a),Vt=c,Kn=d;break;case 0:case 11:case 14:case 15:if(!zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&pd(a,s,v),d=d.next}while(d!==c)}pi(n,s,a);break;case 1:if(!zt&&(So(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){st(a,s,R)}pi(n,s,a);break;case 21:pi(n,s,a);break;case 22:a.mode&1?(zt=(c=zt)||a.memoizedState!==null,pi(n,s,a),zt=c):pi(n,s,a);break;default:pi(n,s,a)}}function Og(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new F0),s.forEach(function(c){var d=K0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Qn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Vt=R.stateNode,Kn=!1;break e;case 3:Vt=R.stateNode.containerInfo,Kn=!0;break e;case 4:Vt=R.stateNode.containerInfo,Kn=!0;break e}R=R.return}if(Vt===null)throw Error(t(160));Dg(m,v,d),Vt=null,Kn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){st(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Vg(s,n),s=s.sibling}function Vg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Qn(s,n),cr(n),c&4){try{za(3,n,n.return),Du(3,n)}catch(ce){st(n,n.return,ce)}try{za(5,n,n.return)}catch(ce){st(n,n.return,ce)}}break;case 1:Qn(s,n),cr(n),c&512&&a!==null&&So(a,a.return);break;case 5:if(Qn(s,n),cr(n),c&512&&a!==null&&So(a,a.return),n.flags&32){var d=n.stateNode;try{Yr(d,"")}catch(ce){st(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,R=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{R==="input"&&m.type==="radio"&&m.name!=null&&Zo(d,m),la(R,v);var j=la(R,m);for(v=0;v<P.length;v+=2){var Q=P[v],X=P[v+1];Q==="style"?sa(d,X):Q==="dangerouslySetInnerHTML"?ra(d,X):Q==="children"?Yr(d,X):ne(d,Q,X,j)}switch(R){case"input":ea(d,m);break;case"textarea":Us(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var re=m.value;re!=null?Ar(d,!!m.multiple,re,!1):K!==!!m.multiple&&(m.defaultValue!=null?Ar(d,!!m.multiple,m.defaultValue,!0):Ar(d,!!m.multiple,m.multiple?[]:"",!1))}d[xa]=m}catch(ce){st(n,n.return,ce)}}break;case 6:if(Qn(s,n),cr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){st(n,n.return,ce)}}break;case 3:if(Qn(s,n),cr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{$n(s.containerInfo)}catch(ce){st(n,n.return,ce)}break;case 4:Qn(s,n),cr(n);break;case 13:Qn(s,n),cr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ed=Ge())),c&4&&Og(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(zt=(j=zt)||Q,Qn(s,n),zt=j):Qn(s,n),cr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,re=K.child,K.tag){case 0:case 11:case 14:case 15:za(4,K,K.return);break;case 1:So(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){st(c,a,ce)}}break;case 5:So(K,K.return);break;case 22:if(K.memoizedState!==null){Mg(X);continue}}re!==null?(re.return=K,ae=re):Mg(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(R=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,R.style.display=ia("display",v))}catch(ce){st(n,n.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ce){st(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Qn(s,n),cr(n),c&4&&Og(n);break;case 21:break;default:Qn(s,n),cr(n)}}function cr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Ng(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yr(d,""),c.flags&=-33);var m=xg(n);yd(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=xg(n);gd(n,R,v);break;default:throw Error(t(161))}}catch(P){st(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function j0(n,s,a){ae=n,bg(n)}function bg(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||xu;if(!v){var R=d.alternate,P=R!==null&&R.memoizedState!==null||zt;R=xu;var j=zt;if(xu=v,(zt=P)&&!j)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?Fg(d):P!==null?(P.return=v,ae=P):Fg(d);for(;m!==null;)ae=m,bg(m),m=m.sibling;ae=d,xu=R,zt=j}Lg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):Lg(n)}}function Lg(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Du(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!zt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Gn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Mm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Mm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&$n(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&md(s)}catch(K){st(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Mg(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Fg(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Du(4,s)}catch(P){st(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){st(s,d,P)}}var m=s.return;try{md(s)}catch(P){st(s,m,P)}break;case 5:var v=s.return;try{md(s)}catch(P){st(s,v,P)}}}catch(P){st(s,s.return,P)}if(s===n){ae=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ae=R;break}ae=s.return}}var B0=Math.ceil,Ou=le.ReactCurrentDispatcher,_d=le.ReactCurrentOwner,xn=le.ReactCurrentBatchConfig,Le=0,Ct=null,pt=null,bt=0,En=0,Ao=ui(0),Tt=0,$a=null,ds=0,Vu=0,vd=0,Ha=null,un=null,Ed=0,Ro=1/0,jr=null,bu=!1,wd=null,mi=null,Lu=!1,gi=null,Mu=0,qa=0,Td=null,Fu=-1,Uu=0;function Xt(){return(Le&6)!==0?Ge():Fu!==-1?Fu:Fu=Ge()}function yi(n){return(n.mode&1)===0?1:(Le&2)!==0&&bt!==0?bt&-bt:S0.transition!==null?(Uu===0&&(Uu=es()),Uu):(n=De,n!==0||(n=window.event,n=n===void 0?16:va(n.type)),n)}function Xn(n,s,a,c){if(50<qa)throw qa=0,Td=null,Error(t(185));ti(n,a,c),((Le&2)===0||n!==Ct)&&(n===Ct&&((Le&2)===0&&(Vu|=a),Tt===4&&_i(n,bt)),cn(n,c),a===1&&Le===0&&(s.mode&1)===0&&(Ro=Ge()+500,fu&&hi()))}function cn(n,s){var a=n.callbackNode;Cr(n,s);var c=Zi(n,n===Ct?bt:0);if(c===0)a!==null&&pa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&pa(a),s===1)n.tag===0?I0(jg.bind(null,n)):Am(jg.bind(null,n)),v0(function(){(Le&6)===0&&hi()}),a=null;else{switch(ri(c)){case 1:a=Yi;break;case 4:a=Jr;break;case 16:a=Sn;break;case 536870912:a=Ul;break;default:a=Sn}a=Kg(a,Ug.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Ug(n,s){if(Fu=-1,Uu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ko()&&n.callbackNode!==a)return null;var c=Zi(n,n===Ct?bt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=ju(n,c);else{s=c;var d=Le;Le|=2;var m=zg();(Ct!==n||bt!==s)&&(jr=null,Ro=Ge()+500,ps(n,s));do try{H0();break}catch(R){Bg(n,R)}while(!0);jh(),Ou.current=m,Le=d,pt!==null?s=0:(Ct=null,bt=0,s=Tt)}if(s!==0){if(s===2&&(d=mn(n),d!==0&&(c=d,s=Id(n,d))),s===1)throw a=$a,ps(n,0),_i(n,c),cn(n,Ge()),a;if(s===6)_i(n,c);else{if(d=n.current.alternate,(c&30)===0&&!z0(d)&&(s=ju(n,c),s===2&&(m=mn(n),m!==0&&(c=m,s=Id(n,m))),s===1))throw a=$a,ps(n,0),_i(n,c),cn(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ms(n,un,jr);break;case 3:if(_i(n,c),(c&130023424)===c&&(s=Ed+500-Ge(),10<s)){if(Zi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Xt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ph(ms.bind(null,n,un,jr),s);break}ms(n,un,jr);break;case 4:if(_i(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Gt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*B0(c/1960))-c,10<c){n.timeoutHandle=Ph(ms.bind(null,n,un,jr),c);break}ms(n,un,jr);break;case 5:ms(n,un,jr);break;default:throw Error(t(329))}}}return cn(n,Ge()),n.callbackNode===a?Ug.bind(null,n):null}function Id(n,s){var a=Ha;return n.current.memoizedState.isDehydrated&&(ps(n,s).flags|=256),n=ju(n,s),n!==2&&(s=un,un=a,s!==null&&Sd(s)),n}function Sd(n){un===null?un=n:un.push.apply(un,n)}function z0(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!qn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function _i(n,s){for(s&=~vd,s&=~Vu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Gt(s),c=1<<a;n[a]=-1,s&=~c}}function jg(n){if((Le&6)!==0)throw Error(t(327));ko();var s=Zi(n,0);if((s&1)===0)return cn(n,Ge()),null;var a=ju(n,s);if(n.tag!==0&&a===2){var c=mn(n);c!==0&&(s=c,a=Id(n,c))}if(a===1)throw a=$a,ps(n,0),_i(n,s),cn(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ms(n,un,jr),cn(n,Ge()),null}function Ad(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(Ro=Ge()+500,fu&&hi())}}function fs(n){gi!==null&&gi.tag===0&&(Le&6)===0&&ko();var s=Le;Le|=1;var a=xn.transition,c=De;try{if(xn.transition=null,De=1,n)return n()}finally{De=c,xn.transition=a,Le=s,(Le&6)===0&&hi()}}function Rd(){En=Ao.current,Ye(Ao)}function ps(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_0(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(bh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&hu();break;case 3:To(),Ye(on),Ye(Ut),Kh();break;case 5:Wh(c);break;case 4:To();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:Bh(c.type._context);break;case 22:case 23:Rd()}a=a.return}if(Ct=n,pt=n=vi(n.current,null),bt=En=s,Tt=0,$a=null,vd=Vu=ds=0,un=Ha=null,us!==null){for(s=0;s<us.length;s++)if(a=us[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}us=null}return n}function Bg(n,s){do{var a=pt;try{if(jh(),Iu.current=ku,Su){for(var c=rt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Su=!1}if(hs=0,kt=wt=rt=null,Ma=!1,Fa=0,_d.current=null,a===null||a.return===null){Tt=1,$a=s,pt=null;break}e:{var m=n,v=a.return,R=a,P=s;if(s=bt,R.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=R,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=dg(v);if(re!==null){re.flags&=-257,fg(re,v,R,m,s),re.mode&1&&hg(m,j,s),s=re,P=j;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if((s&1)===0){hg(m,j,s),kd();break e}P=Error(t(426))}}else if(et&&R.mode&1){var ht=dg(v);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),fg(ht,v,R,m,s),Fh(Io(P,R));break e}}m=P=Io(P,R),Tt!==4&&(Tt=2),Ha===null?Ha=[m]:Ha.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=ug(m,P,s);Lm(m,M);break e;case 1:R=P;var D=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(mi===null||!mi.has(U)))){m.flags|=65536,s&=-s,m.lanes|=s;var Y=cg(m,R,s);Lm(m,Y);break e}}m=m.return}while(m!==null)}Hg(a)}catch(de){s=de,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function zg(){var n=Ou.current;return Ou.current=ku,n===null?ku:n}function kd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ct===null||(ds&268435455)===0&&(Vu&268435455)===0||_i(Ct,bt)}function ju(n,s){var a=Le;Le|=2;var c=zg();(Ct!==n||bt!==s)&&(jr=null,ps(n,s));do try{$0();break}catch(d){Bg(n,d)}while(!0);if(jh(),Le=a,Ou.current=c,pt!==null)throw Error(t(261));return Ct=null,bt=0,Tt}function $0(){for(;pt!==null;)$g(pt)}function H0(){for(;pt!==null&&!Ml();)$g(pt)}function $g(n){var s=Gg(n.alternate,n,En);n.memoizedProps=n.pendingProps,s===null?Hg(n):pt=s,_d.current=null}function Hg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=L0(a,s,En),a!==null){pt=a;return}}else{if(a=M0(a,s),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=n}while(s!==null);Tt===0&&(Tt=5)}function ms(n,s,a){var c=De,d=xn.transition;try{xn.transition=null,De=1,q0(n,s,a,c)}finally{xn.transition=d,De=c}return null}function q0(n,s,a,c){do ko();while(gi!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(qe(n,m),n===Ct&&(pt=Ct=null,bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Lu||(Lu=!0,Kg(Sn,function(){return ko(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=xn.transition,xn.transition=null;var v=De;De=1;var R=Le;Le|=4,_d.current=null,U0(n,a),Vg(a,n),h0(kh),si=!!Rh,kh=Rh=null,n.current=a,j0(a),ch(),Le=R,De=v,xn.transition=m}else n.current=a;if(Lu&&(Lu=!1,gi=n,Mu=d),m=n.pendingLanes,m===0&&(mi=null),jl(a.stateNode),cn(n,Ge()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(bu)throw bu=!1,n=wd,wd=null,n;return(Mu&1)!==0&&n.tag!==0&&ko(),m=n.pendingLanes,(m&1)!==0?n===Td?qa++:(qa=0,Td=n):qa=0,hi(),null}function ko(){if(gi!==null){var n=ri(Mu),s=xn.transition,a=De;try{if(xn.transition=null,De=16>n?16:n,gi===null)var c=!1;else{if(n=gi,gi=null,Mu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var R=m.deletions;if(R!==null){for(var P=0;P<R.length;P++){var j=R[P];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:za(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,re=Q.return;if(Pg(Q),Q===j){ae=null;break}if(K!==null){K.return=re,ae=K;break}ae=re}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ht=ce.sibling;ce.sibling=null,ce=ht}while(ce!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:za(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ae=M;break e}ae=m.return}}var D=n.current;for(ae=D;ae!==null;){v=ae;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,ae=U;else e:for(v=D;ae!==null;){if(R=ae,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Du(9,R)}}catch(de){st(R,R.return,de)}if(R===v){ae=null;break e}var Y=R.sibling;if(Y!==null){Y.return=R.return,ae=Y;break e}ae=R.return}}if(Le=d,hi(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Ji,n)}catch{}c=!0}return c}finally{De=a,xn.transition=s}}return!1}function qg(n,s,a){s=Io(a,s),s=ug(n,s,1),n=fi(n,s,1),s=Xt(),n!==null&&(ti(n,1,s),cn(n,s))}function st(n,s,a){if(n.tag===3)qg(n,n,a);else for(;s!==null;){if(s.tag===3){qg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mi===null||!mi.has(c))){n=Io(a,n),n=cg(s,n,1),s=fi(s,n,1),n=Xt(),s!==null&&(ti(s,1,n),cn(s,n));break}}s=s.return}}function W0(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Xt(),n.pingedLanes|=n.suspendedLanes&a,Ct===n&&(bt&a)===a&&(Tt===4||Tt===3&&(bt&130023424)===bt&&500>Ge()-Ed?ps(n,0):vd|=a),cn(n,s)}function Wg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Qs,Qs<<=1,(Qs&130023424)===0&&(Qs=4194304)));var a=Xt();n=Mr(n,s),n!==null&&(ti(n,s,a),cn(n,a))}function G0(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Wg(n,a)}function K0(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Wg(n,a)}var Gg;Gg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return ln=!1,b0(n,s,a);ln=(n.flags&131072)!==0}else ln=!1,et&&(s.flags&1048576)!==0&&Rm(s,mu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Nu(n,s),n=s.pendingProps;var d=mo(s,Ut.current);wo(s,a),d=Yh(null,s,c,n,d,a);var m=Jh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(c)?(m=!0,du(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hh(s),d.updater=Cu,s.stateNode=d,d._reactInternals=s,id(s,c,n,a),s=ld(null,s,c,!0,m,a)):(s.tag=0,et&&m&&Vh(s),Qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Nu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=X0(c),n=Gn(c,n),d){case 0:s=ad(null,s,c,n,a);break e;case 1:s=vg(null,s,c,n,a);break e;case 11:s=pg(null,s,c,n,a);break e;case 14:s=mg(null,s,c,Gn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Gn(c,d),ad(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Gn(c,d),vg(n,s,c,d,a);case 3:e:{if(Eg(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,bm(n,s),wu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=Io(Error(t(423)),s),s=wg(n,s,c,a,d);break e}else if(c!==d){d=Io(Error(t(424)),s),s=wg(n,s,c,a,d);break e}else for(vn=li(s.stateNode.containerInfo.firstChild),_n=s,et=!0,Wn=null,a=Om(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),c===d){s=Ur(n,s,a);break e}Qt(n,s,c,a)}s=s.child}return s;case 5:return Fm(s),n===null&&Mh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Ch(c,d)?v=null:m!==null&&Ch(c,m)&&(s.flags|=32),_g(n,s),Qt(n,s,v,a),s.child;case 6:return n===null&&Mh(s),null;case 13:return Tg(n,s,a);case 4:return qh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=vo(s,null,c,a):Qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Gn(c,d),pg(n,s,c,d,a);case 7:return Qt(n,s,s.pendingProps,a),s.child;case 8:return Qt(n,s,s.pendingProps.children,a),s.child;case 12:return Qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,Ke(_u,c._currentValue),c._currentValue=v,m!==null)if(qn(m.value,v)){if(m.children===d.children&&!on.current){s=Ur(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var R=m.dependencies;if(R!==null){v=m.child;for(var P=R.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Fr(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),zh(m.return,a,s),R.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),zh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,wo(s,a),d=Pn(d),c=c(d),s.flags|=1,Qt(n,s,c,a),s.child;case 14:return c=s.type,d=Gn(c,s.pendingProps),d=Gn(c.type,d),mg(n,s,c,d,a);case 15:return gg(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Gn(c,d),Nu(n,s),s.tag=1,an(c)?(n=!0,du(s)):n=!1,wo(s,a),ag(s,c,d),id(s,c,d,a),ld(null,s,c,!0,n,a);case 19:return Sg(n,s,a);case 22:return yg(n,s,a)}throw Error(t(156,s.tag))};function Kg(n,s){return Gs(n,s)}function Q0(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,s,a,c){return new Q0(n,s,a,c)}function Cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function X0(n){if(typeof n=="function")return Cd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===_e)return 14}return 2}function vi(n,s){var a=n.alternate;return a===null?(a=Dn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Bu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")Cd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return gs(a.children,d,m,s);case A:v=8,d|=8;break;case k:return n=Dn(12,a,s,d|2),n.elementType=k,n.lanes=m,n;case C:return n=Dn(13,a,s,d),n.elementType=C,n.lanes=m,n;case tt:return n=Dn(19,a,s,d),n.elementType=tt,n.lanes=m,n;case Me:return zu(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case O:v=9;break e;case b:v=11;break e;case _e:v=14;break e;case He:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Dn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function gs(n,s,a,c){return n=Dn(7,n,c,s),n.lanes=a,n}function zu(n,s,a,c){return n=Dn(22,n,c,s),n.elementType=Me,n.lanes=a,n.stateNode={isHidden:!1},n}function Pd(n,s,a){return n=Dn(6,n,null,s),n.lanes=a,n}function Nd(n,s,a){return s=Dn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Y0(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xd(n,s,a,c,d,m,v,R,P){return n=new Y0(n,s,a,R,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Dn(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(m),n}function J0(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Qg(n){if(!n)return ci;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(an(a))return Im(n,a,s)}return s}function Xg(n,s,a,c,d,m,v,R,P){return n=xd(a,c,!0,n,d,m,v,R,P),n.context=Qg(null),a=n.current,c=Xt(),d=yi(a),m=Fr(c,d),m.callback=s??null,fi(a,m,d),n.current.lanes=d,ti(n,d,c),cn(n,c),n}function $u(n,s,a,c){var d=s.current,m=Xt(),v=yi(d);return a=Qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Fr(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=fi(d,s,v),n!==null&&(Xn(n,d,v,m),Eu(n,d,v)),v}function Hu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Dd(n,s){Yg(n,s),(n=n.alternate)&&Yg(n,s)}function Z0(){return null}var Jg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Od(n){this._internalRoot=n}qu.prototype.render=Od.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));$u(n,s,null,null)},qu.prototype.unmount=Od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;fs(function(){$u(null,n,null,null)}),s[Or]=null}};function qu(n){this._internalRoot=n}qu.prototype.unstable_scheduleHydration=function(n){if(n){var s=ql();n={blockedOn:null,target:n,priority:s};for(var a=0;a<rr.length&&s!==0&&s<rr[a].priority;a++);rr.splice(a,0,n),a===0&&Kl(n)}};function Vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function eT(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=Hu(v);m.call(j)}}var v=Xg(s,c,n,0,null,!1,!1,"",Zg);return n._reactRootContainer=v,n[Or]=v.current,Pa(n.nodeType===8?n.parentNode:n),fs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var j=Hu(P);R.call(j)}}var P=xd(n,0,!1,null,null,!1,!1,"",Zg);return n._reactRootContainer=P,n[Or]=P.current,Pa(n.nodeType===8?n.parentNode:n),fs(function(){$u(s,P,a,c)}),P}function Gu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var R=d;d=function(){var P=Hu(v);R.call(P)}}$u(s,v,n,d)}else v=eT(a,s,n,d,c);return Hu(v)}$l=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Zr(s.pendingLanes);a!==0&&(ni(s,a|1),cn(s,Ge()),(Le&6)===0&&(Ro=Ge()+500,hi()))}break;case 13:fs(function(){var c=Mr(n,1);if(c!==null){var d=Xt();Xn(c,n,1,d)}}),Dd(n,1)}},Xs=function(n){if(n.tag===13){var s=Mr(n,134217728);if(s!==null){var a=Xt();Xn(s,n,134217728,a)}Dd(n,134217728)}},Hl=function(n){if(n.tag===13){var s=yi(n),a=Mr(n,s);if(a!==null){var c=Xt();Xn(a,n,s,c)}Dd(n,s)}},ql=function(){return De},Wl=function(n,s){var a=De;try{return De=n,s()}finally{De=a}},Bs=function(n,s,a){switch(s){case"input":if(ea(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=cu(c);if(!d)throw Error(t(90));bs(c),ea(c,d)}}}break;case"textarea":Us(n,a);break;case"select":s=a.value,s!=null&&Ar(n,!!a.multiple,s,!1)}},Gi=Ad,ca=fs;var tT={usingClientEntryPoint:!1,Events:[Da,fo,cu,tr,ua,Ad]},Wa={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nT={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Ji=Ku.inject(nT),pn=Ku}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT,hn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(s))throw Error(t(200));return J0(n,s,null,a)},hn.createRoot=function(n,s){if(!Vd(n))throw Error(t(299));var a=!1,c="",d=Jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=xd(n,1,!1,null,null,a,!1,c,d),n[Or]=s.current,Pa(n.nodeType===8?n.parentNode:n),new Od(s)},hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(s),n=n===null?null:n.stateNode,n},hn.flushSync=function(n){return fs(n)},hn.hydrate=function(n,s,a){if(!Wu(s))throw Error(t(200));return Gu(null,n,s,!0,a)},hn.hydrateRoot=function(n,s,a){if(!Vd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Jg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Xg(s,null,n,1,a??null,d,!1,m,v),n[Or]=s.current,Pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new qu(s)},hn.render=function(n,s,a){if(!Wu(s))throw Error(t(200));return Gu(null,n,s,!1,a)},hn.unmountComponentAtNode=function(n){if(!Wu(n))throw Error(t(40));return n._reactRootContainer?(fs(function(){Gu(null,null,n,!1,function(){n._reactRootContainer=null,n[Or]=null})}),!0):!1},hn.unstable_batchedUpdates=Ad,hn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Wu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Gu(n,s,a,!1,c)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var ay;function cT(){if(ay)return Md.exports;ay=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Md.exports=uT(),Md.exports}var ly;function hT(){if(ly)return Qu;ly=1;var r=cT();return Qu.createRoot=r.createRoot,Qu.hydrateRoot=r.hydrateRoot,Qu}var dT=hT(),he=Of();const fT="modulepreload",pT=function(r){return"/"+r},uy={},mT=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");o=h(t.map(_=>{if(_=pT(_),_ in uy)return;uy[_]=!0;const E=_.endsWith(".css"),T=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${T}`))return;const S=document.createElement("link");if(S.rel=E?"stylesheet":fT,E||(S.as="script"),S.crossOrigin="",S.href=_,g&&S.setAttribute("nonce",g),document.head.appendChild(S),E)return new Promise((F,$)=>{S.addEventListener("load",F),S.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},gT=()=>{};var cy={};/**
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
 */const Z_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let S=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(S=64)),i.push(t[E],t[T],t[S],t[F])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Z_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):yT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new _T;const S=l<<2|f>>4;if(i.push(S),_!==64){const F=f<<4&240|_>>2;if(i.push(F),T!==64){const $=_<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vT=function(r){const e=Z_(r);return ev.encodeByteArray(e,!0)},mc=function(r){return vT(r).replace(/\./g,"")},tv=function(r){try{return ev.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ET(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wT=()=>ET().__FIREBASE_DEFAULTS__,TT=()=>{if(typeof process>"u"||typeof cy>"u")return;const r=cy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},IT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&tv(r[1]);return e&&JSON.parse(e)},Mc=()=>{try{return gT()||wT()||TT()||IT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},nv=r=>{var e,t;return(t=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},rv=r=>{const e=nv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},iv=()=>{var r;return(r=Mc())===null||r===void 0?void 0:r.config},sv=r=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class ST{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ji(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function ov(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[mc(JSON.stringify(t)),mc(JSON.stringify(h)),""].join(".")}const Za={};function AT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Za))Za[e]?r.emulator.push(e):r.prod.push(e);return r}function RT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let hy=!1;function bf(r,e){if(typeof window>"u"||typeof document>"u"||!ji(window.location.host)||Za[r]===e||Za[r]||hy)return;Za[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=AT().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,F){S.setAttribute("width","24"),S.setAttribute("id",F),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{hy=!0,h()},S}function E(S,F){S.setAttribute("id",F),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=RT(i),F=t("text"),$=document.getElementById(F)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),oe=t("preprendIcon"),ee=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;f(ne),E(B,H);const le=_();g(ee,oe),ne.append(ee,$,B,le),document.body.appendChild(ne)}l?($.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function CT(){var r;const e=(r=Mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function xT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DT(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function OT(){return!CT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VT(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const LT="FirebaseError";class Tr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=LT,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gl.prototype.create)}}class gl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?MT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Tr(o,f,i)}}function MT(r,e){return r.replace(FT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const FT=/\{\$([^}]+)}/g;function UT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Is(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(dy(l)&&dy(h)){if(!Is(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function dy(r){return r!==null&&typeof r=="object"}/**
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
 */function yl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function jT(r,e){const t=new BT(r,e);return t.subscribe.bind(t)}class BT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=jd),o.error===void 0&&(o.error=jd),o.complete===void 0&&(o.complete=jd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function jd(){}/**
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
 */function at(r){return r&&r._delegate?r._delegate:r}class Di{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class $T{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ST;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:HT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HT(r){return r===ys?void 0:r}function qT(r){return r.instantiationMode==="EAGER"}/**
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
 */class WT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $T(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const GT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},KT=Pe.INFO,QT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},XT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=QT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=KT,this._logHandler=XT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const YT=(r,e)=>e.some(t=>r instanceof t);let fy,py;function JT(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZT(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const av=new WeakMap,nf=new WeakMap,lv=new WeakMap,Bd=new WeakMap,Mf=new WeakMap;function eI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ci(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&av.set(t,r)}).catch(()=>{}),Mf.set(e,r),e}function tI(r){if(nf.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});nf.set(r,e)}let rf={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return nf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||lv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ci(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function nI(r){rf=r(rf)}function rI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(zd(this),e,...t);return lv.set(i,e.sort?e.sort():[e]),Ci(i)}:ZT().includes(r)?function(...e){return r.apply(zd(this),e),Ci(av.get(this))}:function(...e){return Ci(r.apply(zd(this),e))}}function iI(r){return typeof r=="function"?rI(r):(r instanceof IDBTransaction&&tI(r),YT(r,JT())?new Proxy(r,rf):r)}function Ci(r){if(r instanceof IDBRequest)return eI(r);if(Bd.has(r))return Bd.get(r);const e=iI(r);return e!==r&&(Bd.set(r,e),Mf.set(e,r)),e}const zd=r=>Mf.get(r);function sI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ci(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ci(h.result),g.oldVersion,g.newVersion,Ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const oI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],$d=new Map;function my(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=aI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||oI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return $d.set(e,l),l}nI(r=>({...r,get:(e,t,i)=>my(e,t)||r.get(e,t,i),has:(e,t)=>!!my(e,t)||r.has(e,t)}));/**
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
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function uI(r){const e=r.getComponent();return e?.type==="VERSION"}const sf="@firebase/app",gy="0.13.2";/**
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
 */const Hr=new Lf("@firebase/app"),cI="@firebase/app-compat",hI="@firebase/analytics-compat",dI="@firebase/analytics",fI="@firebase/app-check-compat",pI="@firebase/app-check",mI="@firebase/auth",gI="@firebase/auth-compat",yI="@firebase/database",_I="@firebase/data-connect",vI="@firebase/database-compat",EI="@firebase/functions",wI="@firebase/functions-compat",TI="@firebase/installations",II="@firebase/installations-compat",SI="@firebase/messaging",AI="@firebase/messaging-compat",RI="@firebase/performance",kI="@firebase/performance-compat",CI="@firebase/remote-config",PI="@firebase/remote-config-compat",NI="@firebase/storage",xI="@firebase/storage-compat",DI="@firebase/firestore",OI="@firebase/ai",VI="@firebase/firestore-compat",bI="firebase",LI="11.10.0";/**
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
 */const of="[DEFAULT]",MI={[sf]:"fire-core",[cI]:"fire-core-compat",[dI]:"fire-analytics",[hI]:"fire-analytics-compat",[pI]:"fire-app-check",[fI]:"fire-app-check-compat",[mI]:"fire-auth",[gI]:"fire-auth-compat",[yI]:"fire-rtdb",[_I]:"fire-data-connect",[vI]:"fire-rtdb-compat",[EI]:"fire-fn",[wI]:"fire-fn-compat",[TI]:"fire-iid",[II]:"fire-iid-compat",[SI]:"fire-fcm",[AI]:"fire-fcm-compat",[RI]:"fire-perf",[kI]:"fire-perf-compat",[CI]:"fire-rc",[PI]:"fire-rc-compat",[NI]:"fire-gcs",[xI]:"fire-gcs-compat",[DI]:"fire-fst",[VI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[bI]:"fire-js-all"};/**
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
 */const gc=new Map,FI=new Map,af=new Map;function yy(r,e){try{r.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ss(r){const e=r.name;if(af.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;af.set(e,r);for(const t of gc.values())yy(t,r);for(const t of FI.values())yy(t,r);return!0}function Fc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Yn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new gl("app","Firebase",UI);/**
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
 */class jI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=LI;function uv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:of,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=iv()),!t)throw Pi.create("no-options");const l=gc.get(o);if(l){if(Is(t,l.options)&&Is(i,l.config))return l;throw Pi.create("duplicate-app",{appName:o})}const h=new WT(o);for(const g of af.values())h.addComponent(g);const f=new jI(t,i,h);return gc.set(o,f),f}function Ff(r=of){const e=gc.get(r);if(!e&&r===of&&iv())return uv();if(!e)throw Pi.create("no-app",{appName:r});return e}function fr(r,e,t){var i;let o=(i=MI[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(f.join(" "));return}Ss(new Di(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const BI="firebase-heartbeat-database",zI=1,ol="firebase-heartbeat-store";let Hd=null;function cv(){return Hd||(Hd=sI(BI,zI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(r=>{throw Pi.create("idb-open",{originalErrorMessage:r.message})})),Hd}async function $I(r){try{const t=(await cv()).transaction(ol),i=await t.objectStore(ol).get(hv(r));return await t.done,i}catch(e){if(e instanceof Tr)Hr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e?.message});Hr.warn(t.message)}}}async function _y(r,e){try{const i=(await cv()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,hv(r)),await i.done}catch(t){if(t instanceof Tr)Hr.warn(t.message);else{const i=Pi.create("idb-set",{originalErrorMessage:t?.message});Hr.warn(i.message)}}}function hv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const HI=1024,qI=30;class WI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>qI){const h=QI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vy(),{heartbeatsToSend:i,unsentEntries:o}=GI(this._heartbeatsCache.heartbeats),l=mc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function vy(){return new Date().toISOString().substring(0,10)}function GI(r,e=HI){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Ey(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ey(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VT()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $I(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return _y(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return _y(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ey(r){return mc(JSON.stringify({version:2,heartbeats:r})).length}function QI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function XI(r){Ss(new Di("platform-logger",e=>new lI(e),"PRIVATE")),Ss(new Di("heartbeat",e=>new WI(e),"PRIVATE")),fr(sf,gy,r),fr(sf,gy,"esm2017"),fr("fire-js","")}XI("");var wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,dv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,A){function k(){}k.prototype=A.prototype,x.D=A.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(N,O,b){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return A.prototype[O].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,A,k){k||(k=0);var N=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)N[O]=A.charCodeAt(k++)|A.charCodeAt(k++)<<8|A.charCodeAt(k++)<<16|A.charCodeAt(k++)<<24;else for(O=0;16>O;++O)N[O]=A[k++]|A[k++]<<8|A[k++]<<16|A[k++]<<24;A=x.g[0],k=x.g[1],O=x.g[2];var b=x.g[3],C=A+(b^k&(O^b))+N[0]+3614090360&4294967295;A=k+(C<<7&4294967295|C>>>25),C=b+(O^A&(k^O))+N[1]+3905402710&4294967295,b=A+(C<<12&4294967295|C>>>20),C=O+(k^b&(A^k))+N[2]+606105819&4294967295,O=b+(C<<17&4294967295|C>>>15),C=k+(A^O&(b^A))+N[3]+3250441966&4294967295,k=O+(C<<22&4294967295|C>>>10),C=A+(b^k&(O^b))+N[4]+4118548399&4294967295,A=k+(C<<7&4294967295|C>>>25),C=b+(O^A&(k^O))+N[5]+1200080426&4294967295,b=A+(C<<12&4294967295|C>>>20),C=O+(k^b&(A^k))+N[6]+2821735955&4294967295,O=b+(C<<17&4294967295|C>>>15),C=k+(A^O&(b^A))+N[7]+4249261313&4294967295,k=O+(C<<22&4294967295|C>>>10),C=A+(b^k&(O^b))+N[8]+1770035416&4294967295,A=k+(C<<7&4294967295|C>>>25),C=b+(O^A&(k^O))+N[9]+2336552879&4294967295,b=A+(C<<12&4294967295|C>>>20),C=O+(k^b&(A^k))+N[10]+4294925233&4294967295,O=b+(C<<17&4294967295|C>>>15),C=k+(A^O&(b^A))+N[11]+2304563134&4294967295,k=O+(C<<22&4294967295|C>>>10),C=A+(b^k&(O^b))+N[12]+1804603682&4294967295,A=k+(C<<7&4294967295|C>>>25),C=b+(O^A&(k^O))+N[13]+4254626195&4294967295,b=A+(C<<12&4294967295|C>>>20),C=O+(k^b&(A^k))+N[14]+2792965006&4294967295,O=b+(C<<17&4294967295|C>>>15),C=k+(A^O&(b^A))+N[15]+1236535329&4294967295,k=O+(C<<22&4294967295|C>>>10),C=A+(O^b&(k^O))+N[1]+4129170786&4294967295,A=k+(C<<5&4294967295|C>>>27),C=b+(k^O&(A^k))+N[6]+3225465664&4294967295,b=A+(C<<9&4294967295|C>>>23),C=O+(A^k&(b^A))+N[11]+643717713&4294967295,O=b+(C<<14&4294967295|C>>>18),C=k+(b^A&(O^b))+N[0]+3921069994&4294967295,k=O+(C<<20&4294967295|C>>>12),C=A+(O^b&(k^O))+N[5]+3593408605&4294967295,A=k+(C<<5&4294967295|C>>>27),C=b+(k^O&(A^k))+N[10]+38016083&4294967295,b=A+(C<<9&4294967295|C>>>23),C=O+(A^k&(b^A))+N[15]+3634488961&4294967295,O=b+(C<<14&4294967295|C>>>18),C=k+(b^A&(O^b))+N[4]+3889429448&4294967295,k=O+(C<<20&4294967295|C>>>12),C=A+(O^b&(k^O))+N[9]+568446438&4294967295,A=k+(C<<5&4294967295|C>>>27),C=b+(k^O&(A^k))+N[14]+3275163606&4294967295,b=A+(C<<9&4294967295|C>>>23),C=O+(A^k&(b^A))+N[3]+4107603335&4294967295,O=b+(C<<14&4294967295|C>>>18),C=k+(b^A&(O^b))+N[8]+1163531501&4294967295,k=O+(C<<20&4294967295|C>>>12),C=A+(O^b&(k^O))+N[13]+2850285829&4294967295,A=k+(C<<5&4294967295|C>>>27),C=b+(k^O&(A^k))+N[2]+4243563512&4294967295,b=A+(C<<9&4294967295|C>>>23),C=O+(A^k&(b^A))+N[7]+1735328473&4294967295,O=b+(C<<14&4294967295|C>>>18),C=k+(b^A&(O^b))+N[12]+2368359562&4294967295,k=O+(C<<20&4294967295|C>>>12),C=A+(k^O^b)+N[5]+4294588738&4294967295,A=k+(C<<4&4294967295|C>>>28),C=b+(A^k^O)+N[8]+2272392833&4294967295,b=A+(C<<11&4294967295|C>>>21),C=O+(b^A^k)+N[11]+1839030562&4294967295,O=b+(C<<16&4294967295|C>>>16),C=k+(O^b^A)+N[14]+4259657740&4294967295,k=O+(C<<23&4294967295|C>>>9),C=A+(k^O^b)+N[1]+2763975236&4294967295,A=k+(C<<4&4294967295|C>>>28),C=b+(A^k^O)+N[4]+1272893353&4294967295,b=A+(C<<11&4294967295|C>>>21),C=O+(b^A^k)+N[7]+4139469664&4294967295,O=b+(C<<16&4294967295|C>>>16),C=k+(O^b^A)+N[10]+3200236656&4294967295,k=O+(C<<23&4294967295|C>>>9),C=A+(k^O^b)+N[13]+681279174&4294967295,A=k+(C<<4&4294967295|C>>>28),C=b+(A^k^O)+N[0]+3936430074&4294967295,b=A+(C<<11&4294967295|C>>>21),C=O+(b^A^k)+N[3]+3572445317&4294967295,O=b+(C<<16&4294967295|C>>>16),C=k+(O^b^A)+N[6]+76029189&4294967295,k=O+(C<<23&4294967295|C>>>9),C=A+(k^O^b)+N[9]+3654602809&4294967295,A=k+(C<<4&4294967295|C>>>28),C=b+(A^k^O)+N[12]+3873151461&4294967295,b=A+(C<<11&4294967295|C>>>21),C=O+(b^A^k)+N[15]+530742520&4294967295,O=b+(C<<16&4294967295|C>>>16),C=k+(O^b^A)+N[2]+3299628645&4294967295,k=O+(C<<23&4294967295|C>>>9),C=A+(O^(k|~b))+N[0]+4096336452&4294967295,A=k+(C<<6&4294967295|C>>>26),C=b+(k^(A|~O))+N[7]+1126891415&4294967295,b=A+(C<<10&4294967295|C>>>22),C=O+(A^(b|~k))+N[14]+2878612391&4294967295,O=b+(C<<15&4294967295|C>>>17),C=k+(b^(O|~A))+N[5]+4237533241&4294967295,k=O+(C<<21&4294967295|C>>>11),C=A+(O^(k|~b))+N[12]+1700485571&4294967295,A=k+(C<<6&4294967295|C>>>26),C=b+(k^(A|~O))+N[3]+2399980690&4294967295,b=A+(C<<10&4294967295|C>>>22),C=O+(A^(b|~k))+N[10]+4293915773&4294967295,O=b+(C<<15&4294967295|C>>>17),C=k+(b^(O|~A))+N[1]+2240044497&4294967295,k=O+(C<<21&4294967295|C>>>11),C=A+(O^(k|~b))+N[8]+1873313359&4294967295,A=k+(C<<6&4294967295|C>>>26),C=b+(k^(A|~O))+N[15]+4264355552&4294967295,b=A+(C<<10&4294967295|C>>>22),C=O+(A^(b|~k))+N[6]+2734768916&4294967295,O=b+(C<<15&4294967295|C>>>17),C=k+(b^(O|~A))+N[13]+1309151649&4294967295,k=O+(C<<21&4294967295|C>>>11),C=A+(O^(k|~b))+N[4]+4149444226&4294967295,A=k+(C<<6&4294967295|C>>>26),C=b+(k^(A|~O))+N[11]+3174756917&4294967295,b=A+(C<<10&4294967295|C>>>22),C=O+(A^(b|~k))+N[2]+718787259&4294967295,O=b+(C<<15&4294967295|C>>>17),C=k+(b^(O|~A))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+A&4294967295,x.g[1]=x.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+b&4294967295}i.prototype.u=function(x,A){A===void 0&&(A=x.length);for(var k=A-this.blockSize,N=this.B,O=this.h,b=0;b<A;){if(O==0)for(;b<=k;)o(this,x,b),b+=this.blockSize;if(typeof x=="string"){for(;b<A;)if(N[O++]=x.charCodeAt(b++),O==this.blockSize){o(this,N),O=0;break}}else for(;b<A;)if(N[O++]=x[b++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var A=1;A<x.length-8;++A)x[A]=0;var k=8*this.o;for(A=x.length-8;A<x.length;++A)x[A]=k&255,k/=256;for(this.u(x),x=Array(16),A=k=0;4>A;++A)for(var N=0;32>N;N+=8)x[k++]=this.g[A]>>>N&255;return x};function l(x,A){var k=f;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=A(x)}function h(x,A){this.h=A;for(var k=[],N=!0,O=x.length-1;0<=O;O--){var b=x[O]|0;N&&b==A||(k[O]=b,N=!1)}this.g=k}var f={};function g(x){return-128<=x&&128>x?l(x,function(A){return new h([A|0],0>A?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return B(_(-x));for(var A=[],k=1,N=0;x>=k;N++)A[N]=x/k|0,k*=4294967296;return new h(A,0)}function E(x,A){if(x.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(x.charAt(0)=="-")return B(E(x.substring(1),A));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(A,8)),N=T,O=0;O<x.length;O+=8){var b=Math.min(8,x.length-O),C=parseInt(x.substring(O,O+b),A);8>b?(b=_(Math.pow(A,b)),N=N.j(b).add(_(C))):(N=N.j(k),N=N.add(_(C)))}return N}var T=g(0),S=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-B(this).m();for(var x=0,A=1,k=0;k<this.g.length;k++){var N=this.i(k);x+=(0<=N?N:4294967296+N)*A,A*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if($(this))return"0";if(H(this))return"-"+B(this).toString(x);for(var A=_(Math.pow(x,6)),k=this,N="";;){var O=le(k,A).g;k=oe(k,O.j(A));var b=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=O,$(k))return b+N;for(;6>b.length;)b="0"+b;N=b+N}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function $(x){if(x.h!=0)return!1;for(var A=0;A<x.g.length;A++)if(x.g[A]!=0)return!1;return!0}function H(x){return x.h==-1}r.l=function(x){return x=oe(this,x),H(x)?-1:$(x)?0:1};function B(x){for(var A=x.g.length,k=[],N=0;N<A;N++)k[N]=~x.g[N];return new h(k,~x.h).add(S)}r.abs=function(){return H(this)?B(this):this},r.add=function(x){for(var A=Math.max(this.g.length,x.g.length),k=[],N=0,O=0;O<=A;O++){var b=N+(this.i(O)&65535)+(x.i(O)&65535),C=(b>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);N=C>>>16,b&=65535,C&=65535,k[O]=C<<16|b}return new h(k,k[k.length-1]&-2147483648?-1:0)};function oe(x,A){return x.add(B(A))}r.j=function(x){if($(this)||$(x))return T;if(H(this))return H(x)?B(this).j(B(x)):B(B(this).j(x));if(H(x))return B(this.j(B(x)));if(0>this.l(F)&&0>x.l(F))return _(this.m()*x.m());for(var A=this.g.length+x.g.length,k=[],N=0;N<2*A;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<x.g.length;O++){var b=this.i(N)>>>16,C=this.i(N)&65535,tt=x.i(O)>>>16,_e=x.i(O)&65535;k[2*N+2*O]+=C*_e,ee(k,2*N+2*O),k[2*N+2*O+1]+=b*_e,ee(k,2*N+2*O+1),k[2*N+2*O+1]+=C*tt,ee(k,2*N+2*O+1),k[2*N+2*O+2]+=b*tt,ee(k,2*N+2*O+2)}for(N=0;N<A;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=A;N<2*A;N++)k[N]=0;return new h(k,0)};function ee(x,A){for(;(x[A]&65535)!=x[A];)x[A+1]+=x[A]>>>16,x[A]&=65535,A++}function ne(x,A){this.g=x,this.h=A}function le(x,A){if($(A))throw Error("division by zero");if($(x))return new ne(T,T);if(H(x))return A=le(B(x),A),new ne(B(A.g),B(A.h));if(H(A))return A=le(x,B(A)),new ne(B(A.g),A.h);if(30<x.g.length){if(H(x)||H(A))throw Error("slowDivide_ only works with positive integers.");for(var k=S,N=A;0>=N.l(x);)k=xe(k),N=xe(N);var O=Te(k,1),b=Te(N,1);for(N=Te(N,2),k=Te(k,2);!$(N);){var C=b.add(N);0>=C.l(x)&&(O=O.add(k),b=C),N=Te(N,1),k=Te(k,1)}return A=oe(x,O.j(A)),new ne(O,A)}for(O=T;0<=x.l(A);){for(k=Math.max(1,Math.floor(x.m()/A.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),b=_(k),C=b.j(A);H(C)||0<C.l(x);)k-=N,b=_(k),C=b.j(A);$(b)&&(b=S),O=O.add(b),x=oe(x,C)}return new ne(O,x)}r.A=function(x){return le(this,x).h},r.and=function(x){for(var A=Math.max(this.g.length,x.g.length),k=[],N=0;N<A;N++)k[N]=this.i(N)&x.i(N);return new h(k,this.h&x.h)},r.or=function(x){for(var A=Math.max(this.g.length,x.g.length),k=[],N=0;N<A;N++)k[N]=this.i(N)|x.i(N);return new h(k,this.h|x.h)},r.xor=function(x){for(var A=Math.max(this.g.length,x.g.length),k=[],N=0;N<A;N++)k[N]=this.i(N)^x.i(N);return new h(k,this.h^x.h)};function xe(x){for(var A=x.g.length+1,k=[],N=0;N<A;N++)k[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(k,x.h)}function Te(x,A){var k=A>>5;A%=32;for(var N=x.g.length-k,O=[],b=0;b<N;b++)O[b]=0<A?x.i(b+k)>>>A|x.i(b+k+1)<<32-A:x.i(b+k);return new h(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,dv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ni=h}).apply(typeof wy<"u"?wy:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fv,Qa,pv,sc,lf,mv,gv,yv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function S(u,p,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,S.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,z){for(var Z=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)Z[ze-2]=arguments[ze];return p.prototype[L].apply(w,Z)}}function H(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,z=w.length||0;u.length=L+z;for(let Z=0;Z<z;Z++)u[L+Z]=w[Z]}else u.push(w)}}class oe{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ee(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var xe=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Te(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function x(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function A(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let z=0;z<k.length;z++)y=k[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function b(u){f.setTimeout(()=>{throw u},0)}function C(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const w=_e.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var _e=new oe(()=>new He,u=>u.reset());class He{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,J=!1,me=new tt,se=()=>{const u=f.Promise.resolve(void 0);Me=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){b(y)}var p=_e;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}J=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function ke(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(xe){e:{try{le(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Oe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}$(ke,fe);var Oe={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function We(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++je,this.da=this.fa=!1}function At(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ir(u){this.src=u,this.g={},this.h=0}Ir.prototype.add=function(u,p,y,w,L){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=Xr(u,p,w,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new We(p,this.src,z,!!w,L),p.fa=y,u.push(p)),p};function bs(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=L)&&Array.prototype.splice.call(w,L,1),z&&(At(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Xr(u,p,y,w){for(var L=0;L<u.length;++L){var z=u[L];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return L}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),Ls={};function Zo(u,p,y,w,L){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Zo(u,p[z],y,w,L);return null}return y=na(y),u&&u[Ue]?u.K(p,y,_(w)?!!w.capture:!1,L):ea(u,p,y,!1,w,L)}function ea(u,p,y,w,L,z){if(!p)throw Error("Invalid event type");var Z=_(L)?!!L.capture:!!L,ze=Fs(u);if(ze||(u[$i]=ze=new Ir(u)),y=ze.add(p,y,w,Z,z),y.proxy)return y;if(w=Vl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ae||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(Ar(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Vl(){function u(y){return p.call(u.src,u.listener,y)}const p=ta;return u}function Ms(u,p,y,w,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)Ms(u,p[z],y,w,L);else w=_(w)?!!w.capture:!!w,y=na(y),u&&u[Ue]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=Xr(z,y,w,L),-1<y&&(At(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Fs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Xr(p,y,w,L)),(y=-1<u?p[u]:null)&&Sr(y))}function Sr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ue])bs(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(Ar(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Fs(p))?(bs(y,u),y.h==0&&(y.src=null,p[$i]=null)):At(u)}}}function Ar(u){return u in Ls?Ls[u]:Ls[u]="on"+u}function ta(u,p){if(u.da)u=!0;else{p=new ke(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&Sr(u),u=y.call(w,p)}return u}function Fs(u){return u=u[$i],u instanceof Ir?u:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(u){return typeof u=="function"?u:(u[Us]||(u[Us]=function(p){return u.handleEvent(p)}),u[Us])}function _t(){G.call(this),this.i=new Ir(this),this.M=this,this.F=null}$(_t,G),_t.prototype[Ue]=!0,_t.prototype.removeEventListener=function(u,p,y,w){Ms(this,u,p,y,w)};function vt(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var L=p;p=new fe(w,u),N(p,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var Z=p.g=y[z];L=Rr(Z,w,!0,p)&&L}if(Z=p.g=u,L=Rr(Z,w,!0,p)&&L,L=Rr(Z,w,!1,p)&&L,y)for(z=0;z<y.length;z++)Z=p.g=y[z],L=Rr(Z,w,!1,p)&&L}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)At(y[w]);delete u.g[p],u.h--}}this.F=null},_t.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},_t.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function Rr(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,z=0;z<p.length;++z){var Z=p[z];if(Z&&!Z.da&&Z.capture==y){var ze=Z.listener,Et=Z.ha||Z.src;Z.fa&&bs(u.i,Z),L=ze.call(Et,w)!==!1&&L}}return L&&!w.defaultPrevented}function ra(u,p,y){if(typeof u=="function")y&&(u=S(u,y));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Yr(u){u.g=ra(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Hi extends G{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(u){G.call(this),this.h=u,this.g={}}$(qi,G);var ia=[];function sa(u){Te(u.g,function(p,y){this.g.hasOwnProperty(y)&&Sr(p)},u),u.g={}}qi.prototype.N=function(){qi.aa.N.call(this),sa(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oa=f.JSON.stringify,aa=f.JSON.parse,la=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Wi(){}Wi.prototype.h=null;function js(u){return u.h||(u.h=u.i())}function Bs(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){fe.call(this,"d")}$(er,fe);function zs(){fe.call(this,"c")}$(zs,fe);var tr={},ua=null;function Gi(){return ua=ua||new _t}tr.La="serverreachability";function ca(u){fe.call(this,tr.La,u)}$(ca,fe);function kr(u){const p=Gi();vt(p,new ca(p))}tr.STAT_EVENT="statevent";function ha(u,p){fe.call(this,tr.STAT_EVENT,u),this.stat=p}$(ha,fe);function ct(u){const p=Gi();vt(p,new ha(p,u))}tr.Ma="timingevent";function $s(u,p){fe.call(this,tr.Ma,u),this.size=p}$($s,fe);function Ln(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ki(){this.g=!0}Ki.prototype.xa=function(){this.g=!1};function Qi(u,p,y,w,L,z){u.info(function(){if(u.g)if(z)for(var Z="",ze=z.split("&"),Et=0;Et<ze.length;Et++){var Ve=ze[Et].split("=");if(1<Ve.length){var Rt=Ve[0];Ve=Ve[1];var ft=Rt.split("_");Z=2<=ft.length&&ft[1]=="type"?Z+(Rt+"="+Ve+"&"):Z+(Rt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Hs(u,p,y,w,L,z,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+z+" "+Z})}function Mn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+uh(u,y)+(w?" "+w:"")})}function da(u,p){u.info(function(){return"TIMEOUT: "+p})}Ki.prototype.info=function(){};function uh(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return oa(y)}catch{return p}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function Xi(){}$(Xi,Wi),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Fn=new Xi;function Un(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var fa={},Ws={};function Gs(u,p,y){u.L=1,u.v=ni(mn(p)),u.m=y,u.P=!0,pa(u,null)}function pa(u,p){u.F=Date.now(),Ge(u),u.A=mn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ii(y.i,"t",w),u.C=0,y=u.j.J,u.h=new Ll,u.g=eu(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Hi(S(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(ia[0]=L.toString()),L=ia);for(var z=0;z<L.length;z++){var Z=Zo(y,L[z],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),kr(),Qi(u.i,u.u,u.A,u.l,u.R,u.m)}Un.prototype.ca=function(u){u=u.target;const p=this.M;p&&sn(u)==3?p.j():this.Y(u)},Un.prototype.Y=function(u){try{if(u==this.g)e:{const ft=sn(this.g);var p=this.g.Ba();const Rn=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ea(this.g)))){this.J||ft!=4||p==7||(p==8||0>=Rn?kr(3):kr(2)),Yi(this);var y=this.g.Z();this.X=y;t:if(Ml(this)){var w=Ea(this.g);u="";var L=w.length,z=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),Jr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(z&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Hs(this.i,this.u,this.A,this.l,this.R,ft,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Et=this.g;if((ze=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(ze)){var Ve=ze;break t}}Ve=null}if(y=Ve)Mn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,y);else{this.o=!1,this.s=3,ct(12),Sn(this),Jr(this);break e}}if(this.P){y=!0;let yn;for(;!this.J&&this.C<Z.length;)if(yn=ch(this,Z),yn==Ws){ft==4&&(this.s=4,ct(14),y=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==fa){this.s=4,ct(15),Mn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Mn(this.i,this.l,yn,null),ma(this,yn);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||Z.length!=0||this.h.h||(this.s=1,ct(16),y=!1),this.o=this.o&&y,!y)Mn(this.i,this.l,Z,"[Invalid Chunked Response]"),Sn(this),Jr(this);else if(0<Z.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Ta(Rt),Rt.M=!0,ct(11))}}else Mn(this.i,this.l,Z,null),ma(this,Z);ft==4&&Sn(this),this.o&&!this.J&&(ft==4?io(this.j,this):(this.o=!1,Ge(this)))}else Zs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Sn(this),Jr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ch(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Ws:(y=Number(p.substring(y,w)),isNaN(y)?fa:(w+=1,w+y>p.length?Ws:(p=p.slice(w,w+y),u.C=w+y,p)))}Un.prototype.cancel=function(){this.J=!0,Sn(this)};function Ge(u){u.S=Date.now()+u.I,Fl(u,u.I)}function Fl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ln(S(u.ba,u),p)}function Yi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Un.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(da(this.i,this.A),this.L!=2&&(kr(),ct(17)),Sn(this),this.s=2,Jr(this)):Fl(this,this.S-u)};function Jr(u){u.j.G==0||u.J||io(u.j,u)}function Sn(u){Yi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,sa(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ma(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Gt(y.h,u))){if(!u.K&&Gt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)ro(y),Hn(y);else break e;no(y),ct(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ln(S(y.Za,y),6e3));if(1>=jl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Dr(y,11)}else if((u.K||y.g==u)&&ro(y),!ee(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ve=L[p];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const Rt=Ve[3];Rt!=null&&(y.la=Rt,y.j.info("VER="+y.la));const ft=Ve[4];ft!=null&&(y.Aa=ft,y.j.info("SVER="+y.Aa));const Rn=Ve[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(w=1.5*Rn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const yn=u.g;if(yn){const is=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(is){var z=w.h;z.g||is.indexOf("spdy")==-1&&is.indexOf("quic")==-1&&is.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ga(z,z.h),z.h=null))}if(w.D){const oo=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(w.ya=oo,qe(w.I,w.D,oo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=Zl(w,w.J?w.ia:null,w.W),Z.K){Bl(w.h,Z);var ze=Z,Et=w.L;Et&&(ze.I=Et),ze.B&&(Yi(ze),Ge(ze)),w.g=Z}else rs(w);0<y.i.length&&sr(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Dr(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Dr(y,7):Ot(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}kr(4)}catch{}}var Ul=class{constructor(u,p){this.g=u,this.map=p}};function Ji(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function jl(u){return u.h?1:u.g?u.g.size:0}function Gt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ga(u,p){u.g?u.g.add(p):u.h=p}function Bl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ji.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return H(u.i)}function Ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Zr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Qs(u),w=Ks(u),L=w.length,z=0;z<L;z++)p.call(void 0,w[z],y&&y[z],u)}var Zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var z=u[y].substring(0,w);L=u[y].substring(w+1)}else z=u[y];p(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Cr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Cr){this.h=u.h,es(this,u.j),this.o=u.o,this.g=u.g,ei(this,u.s),this.l=u.l;var p=u.i,y=new nr;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),ti(this,y),this.m=u.m}else u&&(p=String(u).match(Zi))?(this.h=!1,es(this,p[1]||"",!0),this.o=De(p[2]||""),this.g=De(p[3]||"",!0),ei(this,p[4]),this.l=De(p[5]||"",!0),ti(this,p[6]||"",!0),this.m=De(p[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Cr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ri(p,Xs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ri(p,Xs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ri(y,y.charAt(0)=="/"?ql:Hl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ri(y,ya)),u.join("")};function mn(u){return new Cr(u)}function es(u,p,y){u.j=y?De(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ei(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function ti(u,p,y){p instanceof nr?(u.i=p,rr(u.i,u.h)):(y||(p=ri(p,Wl)),u.i=new nr(p,u.h))}function qe(u,p,y){u.i.set(p,y)}function ni(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function De(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ri(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,$l),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function $l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xs=/[#\/\?@]/g,Hl=/[#\?:]/g,ql=/[#\?]/g,Wl=/[#\?@]/g,ya=/#/g;function nr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Dt(u){u.g||(u.g=new Map,u.h=0,u.i&&hh(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=nr.prototype,r.add=function(u,p){Dt(this),this.i=null,u=An(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function jn(u,p){Dt(u),p=An(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Bn(u,p){return Dt(u),p=An(u,p),u.g.has(p)}r.forEach=function(u,p){Dt(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){Dt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let z=0;z<L.length;z++)y.push(p[w])}return y},r.V=function(u){Dt(this);let p=[];if(typeof u=="string")Bn(this,u)&&(p=p.concat(this.g.get(An(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Dt(this),this.i=null,u=An(this,u),Bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ii(u,p,y){jn(u,p),0<y.length&&(u.i=null,u.g.set(An(u,p),H(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=z;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),u.push(L)}}return this.i=u.join("&")};function An(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function rr(u,p){p&&!u.j&&(Dt(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(jn(this,w),ii(this,L,y))},u)),u.j=p}function dh(u,p){const y=new Ki;if(f.Image){const w=new Image;w.onload=F(rn,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F(rn,y,"TestLoadImage: error",!1,p,w),w.onabort=F(rn,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F(rn,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Gl(u,p){const y=new Ki,w=new AbortController,L=setTimeout(()=>{w.abort(),rn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(L),z.ok?rn(y,"TestPingServer: ok",!0,p):rn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),rn(y,"TestPingServer: error",!1,p)})}function rn(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function fh(){this.g=new la}function Kl(u,p,y){const w=y||"";try{Zr(u,function(L,z){let Z=L;_(L)&&(Z=oa(L)),p.push(w+z+"="+encodeURIComponent(Z))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function Pr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Pr,Wi),Pr.prototype.g=function(){return new ts(this.l,this.j)},Pr.prototype.i=(function(u){return function(){return u}})({});function ts(u,p){_t.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(ts,_t),r=ts.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,$n(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?zn(this):$n(this),this.readyState==3&&Ql(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,zn(this))},r.Qa=function(u){this.g&&(this.response=u,zn(this))},r.ga=function(){this.g&&zn(this)};function zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,$n(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function $n(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Nr(u){let p="";return Te(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function si(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Nr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):qe(u,p,y))}function Ze(u){_t.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ze,_t);var ph=/^https?$/i,_a=["POST","PUT"];r=Ze.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?js(this.o):js(Fn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){ns(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(_a,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){ns(this,z)}};function ns(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ys(u),gn(u)}function Ys(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,vt(this,"complete"),vt(this,"abort"),gn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),Ze.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},r.bb=function(){va(this)};function va(u){if(u.h&&typeof h<"u"&&(!u.v[1]||sn(u)!=4||u.Z()!=2)){if(u.u&&sn(u)==4)ra(u.Ea,0,u);else if(vt(u,"readystatechange"),sn(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var L=String(u.D).match(Zi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!ph.test(L?L.toLowerCase():"")}y=w}if(y)vt(u,"complete"),vt(u,"success");else{u.m=6;try{var z=2<sn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Ys(u)}}finally{gn(u)}}}}function gn(u,p){if(u.g){Js(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||vt(u,"ready");try{y.onreadystatechange=w}catch{}}}function Js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function sn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),aa(p)}};function Ea(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const p={};u=(u.g&&2<=sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ee(u[w]))continue;var y=O(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[L]||[];p[L]=z,z.push(y)}x(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function wa(u){this.Aa=0,this.i=[],this.j=new Ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,u),this.cb=ir("retryDelaySeedMs",1e4,u),this.Wa=ir("forwardChannelMaxRetries",2,u),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(u&&u.concurrentRequestLimit),this.Da=new fh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=wa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){ct(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Zl(this,null,this.W),sr(this)};function Ot(u){if(eo(u),u.G==3){var p=u.U++,y=mn(u.I);if(qe(y,"SID",u.K),qe(y,"RID",p),qe(y,"TYPE","terminate"),xr(u,y),p=new Un(u,u.j,p),p.L=2,p.v=ni(mn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=eu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ge(p)}Jl(u)}function Hn(u){u.g&&(Ta(u),u.g.cancel(),u.g=null)}function eo(u){Hn(u),u.u&&(f.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function sr(u){if(!pn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Me||se(),J||(Me(),J=!0),me.add(p,u),u.B=0}}function mh(u,p){return jl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ln(S(u.Ga,u,p),Yl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Un(this,this.j,u);let z=this.o;if(this.S&&(z?(z=A(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=oi(this,L,p),y=mn(this.I),qe(y,"RID",u),qe(y,"CVER",22),this.D&&qe(y,"X-HTTP-Session-Id",this.D),xr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(Nr(z)))+"&"+p:this.m&&si(y,this.m,z)),ga(this.h,L),this.Ua&&qe(y,"TYPE","init"),this.P?(qe(y,"$req",p),qe(y,"SID","null"),L.T=!0,Gs(L,y,null)):Gs(L,y,p),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||pn(this.h)||to(this))};function to(u,p){var y;p?y=p.l:y=u.U++;const w=mn(u.I);qe(w,"SID",u.K),qe(w,"RID",y),qe(w,"AID",u.T),xr(u,w),u.m&&u.o&&si(w,u.m,u.o),y=new Un(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=oi(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ga(u.h,y),Gs(y,w,p)}function xr(u,p){u.H&&Te(u.H,function(y,w){qe(p,w,y)}),u.l&&Zr({},function(y,w){qe(p,w,y)})}function oi(u,p,y){y=Math.min(u.i.length,y);var w=u.l?S(u.l.Na,u.l,u):null;e:{var L=u.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=L[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let ze=!0;for(let Et=0;Et<y;Et++){let Ve=L[Et].g;const Rt=L[Et].map;if(Ve-=z,0>Ve)z=Math.max(0,L[Et].g-100),ze=!1;else try{Kl(Rt,Z,"req"+Ve+"_")}catch{w&&w(Rt)}}if(ze){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function rs(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Me||se(),J||(Me(),J=!0),me.add(p,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ln(S(u.Fa,u),Yl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ln(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Hn(this),Xl(this))};function Ta(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Xl(u){u.g=new Un(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=mn(u.qa);qe(p,"RID","rpc"),qe(p,"SID",u.K),qe(p,"AID",u.T),qe(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(p,"TO",u.ja),qe(p,"TYPE","xmlhttp"),xr(u,p),u.m&&u.o&&si(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=ni(mn(p)),y.m=null,y.P=!0,pa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Hn(this),no(this),ct(19))};function ro(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function io(u,p){var y=null;if(u.g==p){ro(u),Ta(u),u.g=null;var w=2}else if(Gt(u.h,p))y=p.D,Bl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Gi(),vt(w,new $s(w,y)),sr(u)}else rs(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&mh(u,p)||w==2&&no(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Dr(u,5);break;case 4:Dr(u,10);break;case 3:Dr(u,6);break;default:Dr(u,2)}}}function Yl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Dr(u,p){if(u.j.info("Error code "+p),p==2){var y=S(u.fb,u),w=u.Xa;const L=!w;w=new Cr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||es(w,"https"),ni(w),L?dh(w.toString(),y):Gl(w.toString(),y)}else ct(2);u.G=0,u.l&&u.l.sa(p),Jl(u),eo(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const p=zl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function Zl(u,p,y){var w=y instanceof Cr?mn(y):new Cr(y);if(w.g!="")p&&(w.g=p+"."+w.g),ei(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var z=new Cr(null);w&&es(z,w),p&&(z.g=p),L&&ei(z,L),y&&(z.l=y),w=z}return y=u.D,p=u.ya,y&&p&&qe(w,y,p),qe(w,"VER",u.la),xr(u,w),w}function eu(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ze(new Pr({eb:y})):new Ze(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}r=Ia.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function so(){}so.prototype.g=function(u,p){return new Kt(u,p)};function Kt(u,p){_t.call(this),this.g=new wa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ee(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ee(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new or(this)}$(Kt,_t),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Ot(this.g)},Kt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=oa(u),u=y);p.i.push(new Ul(p.Ya++,u)),p.G==3&&sr(p)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Kt.aa.N.call(this)};function tu(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(tu,er);function nu(){zs.call(this),this.status=1}$(nu,zs);function or(u){this.g=u}$(or,Ia),or.prototype.ua=function(){vt(this.g,"a")},or.prototype.ta=function(u){vt(this.g,new tu(u))},or.prototype.sa=function(u){vt(this.g,new nu)},or.prototype.ra=function(){vt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,yv=function(){return new so},gv=function(){return Gi()},mv=tr,lf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,sc=qs,bl.COMPLETE="complete",pv=bl,Bs.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Qa=Bs,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,fv=Ze}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const Ty="@firebase/firestore",Iy="4.8.0";/**
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
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
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
 */let Wo="11.10.0";/**
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
 */const As=new Lf("@firebase/firestore");function Co(){return As.logLevel}function ie(r,...e){if(As.logLevel<=Pe.DEBUG){const t=e.map(Uf);As.debug(`Firestore (${Wo}): ${r}`,...t)}}function qr(r,...e){if(As.logLevel<=Pe.ERROR){const t=e.map(Uf);As.error(`Firestore (${Wo}): ${r}`,...t)}}function Oi(r,...e){if(As.logLevel<=Pe.WARN){const t=e.map(Uf);As.warn(`Firestore (${Wo}): ${r}`,...t)}}function Uf(r){if(typeof r=="string")return r;try{/**
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
 */function ve(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,_v(r,i,t)}function _v(r,e,t){let i=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw qr(i),new Error(i)}function Be(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||_v(e,o,i)}function Se(r,e){return r}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Tr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class vv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class JI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ZI{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $r)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string",31837,{l:i}),new vv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class eS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new eS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Ev(){return new TextEncoder}/**
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
 */class jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=rS(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Re(r,e){return r<e?-1:r>e?1:0}function uf(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Re(i,o);{const l=Ev(),h=iS(l.encode(Ay(r,t)),l.encode(Ay(e,t)));return h!==0?h:Re(i,o)}}t+=i>65535?2:1}return Re(r.length,e.length)}function Ay(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function iS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Re(r[t],e[t]);return Re(r.length,e.length)}function Uo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const Ry="__name__";class hr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=hr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const i=hr.isNumericId(e),o=hr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?hr.extractNumericId(e).compare(hr.extractNumericId(t)):uf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class Qe extends hr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const sS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends hr{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return sS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ry}static keyField(){return new Mt([Ry])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}/**
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
 */function wv(r,e,t){if(!t)throw new te(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function oS(r,e,t,i){if(e===!0&&i===!0)throw new te(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ky(r){if(!pe.isDocumentKey(r))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cy(r){if(pe.isDocumentKey(r))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Tv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Uc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function tn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uc(r);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function yt(r,e){const t={typeString:r};return e&&(t.value=e),t}function _l(r,e){if(!Tv(r))throw new te(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const Py=-62135596800,Ny=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ny);return new Je(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Py)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ny}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_l(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Py;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:yt("string",Je._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Je(0,0))}static max(){return new Ie(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const al=-1;function aS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new Je(t+1,0):new Je(t,i));return new Vi(o,pe.empty(),e)}function lS(r){return new Vi(r.readTime,r.key,al)}class Vi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Vi(Ie.min(),pe.empty(),al)}static max(){return new Vi(Ie.max(),pe.empty(),al)}}function uS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const cS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Go(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==cS)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function dS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ko(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class jc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}jc.ue=-1;/**
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
 */const Bf=-1;function Bc(r){return r==null}function yc(r){return r===0&&1/r==-1/0}function fS(r){return typeof r=="number"&&Number.isInteger(r)&&!yc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Iv="";function pS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xy(e)),e=mS(r.get(t),e);return xy(e)}function mS(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Iv:t+="";break;default:t+=l}}return t}function xy(r){return r+Iv+""}/**
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
 */function Dy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Sv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yu(this.root,e,this.comparator,!0)}}class Yu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oy(this.data.getIterator())}getIteratorFrom(e){return new Oy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Oy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new St(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Av("Invalid base64 string: "+l):l}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const gS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=gS.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Li(r){return typeof r=="string"?Ft.fromBase64String(r):Ft.fromUint8Array(r)}/**
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
 */const Rv="server_timestamp",kv="__type__",Cv="__previous_value__",Pv="__local_write_time__";function zf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[kv])===null||t===void 0?void 0:t.stringValue)===Rv}function zc(r){const e=r.mapValue.fields[Cv];return zf(e)?zc(e):e}function ll(r){const e=bi(r.mapValue.fields[Pv].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class yS{constructor(e,t,i,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const _c="(default)";class ul{constructor(e,t){this.projectId=e,this.database=t||_c}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database===_c}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Nv="__type__",_S="__max__",Ju={mapValue:{}},xv="__vector__",vc="value";function Mi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zf(r)?4:ES(r)?9007199254740991:vS(r)?10:11:ve(28295,{value:r})}function Er(r,e){if(r===e)return!0;const t=Mi(r);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ll(r).isEqual(ll(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=bi(o.timestampValue),f=bi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Li(o.bytesValue).isEqual(Li(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),f=dt(l.doubleValue);return h===f?yc(h)===yc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Uo(r.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Dy(h)!==Dy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!Er(h[g],f[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function cl(r,e){return(r.values||[]).find((t=>Er(t,e)))!==void 0}function jo(r,e){if(r===e)return 0;const t=Mi(r),i=Mi(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Vy(r.timestampValue,e.timestampValue);case 4:return Vy(ll(r),ll(e));case 5:return uf(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Li(l),g=Li(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Re(f[_],g[_]);if(E!==0)return E}return Re(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Re(dt(l.latitude),dt(h.latitude));return f!==0?f:Re(dt(l.longitude),dt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return by(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,E;const T=l.fields||{},S=h.fields||{},F=(f=T[vc])===null||f===void 0?void 0:f.arrayValue,$=(g=S[vc])===null||g===void 0?void 0:g.arrayValue,H=Re(((_=F?.values)===null||_===void 0?void 0:_.length)||0,((E=$?.values)===null||E===void 0?void 0:E.length)||0);return H!==0?H:by(F,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ju.mapValue&&h===Ju.mapValue)return 0;if(l===Ju.mapValue)return 1;if(h===Ju.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const S=uf(g[T],E[T]);if(S!==0)return S;const F=jo(f[g[T]],_[E[T]]);if(F!==0)return F}return Re(g.length,E.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function Vy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=bi(r),i=bi(e),o=Re(t.seconds,i.seconds);return o!==0?o:Re(t.nanos,i.nanos)}function by(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=jo(t[o],i[o]);if(l)return l}return Re(t.length,i.length)}function Bo(r){return cf(r)}function cf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Li(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=cf(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${cf(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function oc(r){switch(Mi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zc(r);return e?16+oc(e):16;case 5:return 2*r.stringValue.length;case 6:return Li(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+oc(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Bi(i.fields,((l,h)=>{o+=l.length+oc(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function Ly(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function hf(r){return!!r&&"integerValue"in r}function $f(r){return!!r&&"arrayValue"in r}function My(r){return!!r&&"nullValue"in r}function Fy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ac(r){return!!r&&"mapValue"in r}function vS(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Nv])===null||t===void 0?void 0:t.stringValue)===xv}function el(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=el(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(r.arrayValue.values[t]);return e}return Object.assign({},r)}function ES(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_S}/**
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
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ac(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=el(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());ac(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];ac(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Bi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new fn(el(this.value))}}function Dv(r){const e=[];return Bi(r.fields,((t,i)=>{const o=new Mt([t]);if(ac(i)){const l=Dv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new wn(e)}/**
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
 */class qt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new qt(e,0,Ie.min(),Ie.min(),Ie.min(),fn.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Ie.min(),Ie.min(),fn.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Ie.min(),Ie.min(),fn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ec{constructor(e,t){this.position=e,this.inclusive=t}}function Uy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=jo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function jy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Er(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function wS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Ov{}class gt extends Ov{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new IS(e,t,i):t==="array-contains"?new RS(e,i):t==="in"?new kS(e,i):t==="not-in"?new CS(e,i):t==="array-contains-any"?new PS(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new SS(e,i):new AS(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends Ov{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Zn(e,t)}matches(e){return Vv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Vv(r){return r.op==="and"}function bv(r){return TS(r)&&Vv(r)}function TS(r){for(const e of r.filters)if(e instanceof Zn)return!1;return!0}function df(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Bo(r.value);if(bv(r))return r.filters.map((e=>df(e))).join(",");{const e=r.filters.map((t=>df(t))).join(",");return`${r.op}(${e})`}}function Lv(r,e){return r instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&Er(i.value,o.value)})(r,e):r instanceof Zn?(function(i,o){return o instanceof Zn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Lv(h,o.filters[f])),!0):!1})(r,e):void ve(19439)}function Mv(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`})(r):r instanceof Zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Mv).join(" ,")+"}"})(r):"Filter"}class IS extends gt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class SS extends gt{constructor(e,t){super(e,"in",t),this.keys=Fv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AS extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Fv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class RS extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $f(t)&&cl(t.arrayValue,this.value)}}class kS extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class CS extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cl(this.value.arrayValue,t)}}class PS extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$f(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>cl(this.value.arrayValue,i)))}}/**
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
 */class NS{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function By(r,e=null,t=[],i=[],o=null,l=null,h=null){return new NS(r,e,t,i,o,l,h)}function Hf(r){const e=Se(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>df(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Bo(i))).join(",")),e.Pe=t}return e.Pe}function qf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Lv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!jy(r.startAt,e.startAt)&&jy(r.endAt,e.endAt)}function ff(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Qo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xS(r,e,t,i,o,l,h,f){return new Qo(r,e,t,i,o,l,h,f)}function $c(r){return new Qo(r)}function zy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Uv(r){return r.collectionGroup!==null}function tl(r){const e=Se(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new St(Mt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new hl(l,i))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new hl(Mt.keyField(),i))}return e.Te}function pr(r){const e=Se(r);return e.Ie||(e.Ie=DS(e,tl(r))),e.Ie}function DS(r,e){if(r.limitType==="F")return By(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new hl(o.field,l)}));const t=r.endAt?new Ec(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Ec(r.startAt.position,r.startAt.inclusive):null;return By(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function pf(r,e){const t=r.filters.concat([e]);return new Qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function wc(r,e,t){return new Qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Hc(r,e){return qf(pr(r),pr(e))&&r.limitType===e.limitType}function jv(r){return`${Hf(pr(r))}|lt:${r.limitType}`}function Po(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Mv(o))).join(", ")}]`),Bc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Bo(o))).join(",")),`Target(${i})`})(pr(r))}; limitType=${r.limitType})`}function qc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of tl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=Uy(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,tl(i),o)||i.endAt&&!(function(h,f,g){const _=Uy(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,tl(i),o))})(r,e)}function OS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Bv(r){return(e,t)=>{let i=!1;for(const o of tl(r)){const l=VS(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function VS(r,e,t){const i=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?jo(g,_):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:r.dir})}}/**
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
 */class xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Sv(this.inner)}size(){return this.innerSize}}/**
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
 */const bS=new it(pe.comparator);function Wr(){return bS}const zv=new it(pe.comparator);function Xa(...r){let e=zv;for(const t of r)e=e.insert(t.key,t);return e}function $v(r){let e=zv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function _s(){return nl()}function Hv(){return nl()}function nl(){return new xs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const LS=new it(pe.comparator),MS=new St(pe.comparator);function Ne(...r){let e=MS;for(const t of r)e=e.add(t);return e}const FS=new St(Re);function US(){return FS}/**
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
 */function Wf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function qv(r){return{integerValue:""+r}}function jS(r,e){return fS(e)?qv(e):Wf(r,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function BS(r,e,t){return r instanceof Tc?(function(o,l){const h={fields:{[kv]:{stringValue:Rv},[Pv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&zf(l)&&(l=zc(l)),l&&(h.fields[Cv]=l),{mapValue:h}})(t,e):r instanceof dl?Gv(r,e):r instanceof fl?Kv(r,e):(function(o,l){const h=Wv(o,l),f=$y(h)+$y(o.Ee);return hf(h)&&hf(o.Ee)?qv(f):Wf(o.serializer,f)})(r,e)}function zS(r,e,t){return r instanceof dl?Gv(r,e):r instanceof fl?Kv(r,e):t}function Wv(r,e){return r instanceof Ic?(function(i){return hf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Tc extends Wc{}class dl extends Wc{constructor(e){super(),this.elements=e}}function Gv(r,e){const t=Qv(e);for(const i of r.elements)t.some((o=>Er(o,i)))||t.push(i);return{arrayValue:{values:t}}}class fl extends Wc{constructor(e){super(),this.elements=e}}function Kv(r,e){let t=Qv(e);for(const i of r.elements)t=t.filter((o=>!Er(o,i)));return{arrayValue:{values:t}}}class Ic extends Wc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function $y(r){return dt(r.integerValue||r.doubleValue)}function Qv(r){return $f(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function $S(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof dl&&o instanceof dl||i instanceof fl&&o instanceof fl?Uo(i.elements,o.elements,Er):i instanceof Ic&&o instanceof Ic?Er(i.Ee,o.Ee):i instanceof Tc&&o instanceof Tc})(r.transform,e.transform)}class HS{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Gc{}function Xv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Kc(r.key,nn.none()):new vl(r.key,r.data,nn.none());{const t=r.data,i=fn.empty();let o=new St(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new zi(r.key,i,new wn(o.toArray()),nn.none())}}function qS(r,e,t){r instanceof vl?(function(o,l,h){const f=o.value.clone(),g=qy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof zi?(function(o,l,h){if(!lc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=qy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Yv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function rl(r,e,t,i){return r instanceof vl?(function(l,h,f,g){if(!lc(l.precondition,h))return f;const _=l.value.clone(),E=Wy(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof zi?(function(l,h,f,g){if(!lc(l.precondition,h))return f;const _=Wy(l.fieldTransforms,g,h),E=h.data;return E.setAll(Yv(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,h,f){return lc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function WS(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=Wv(i.transform,o||null);l!=null&&(t===null&&(t=fn.empty()),t.set(i.field,l))}return t||null}function Hy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Uo(i,o,((l,h)=>$S(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class vl extends Gc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class zi extends Gc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Yv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function qy(r,e,t){const i=new Map;Be(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,zS(h,f,t[o]))}return i}function Wy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,BS(l,h,e))}return i}class Kc extends Gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GS extends Gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KS{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&qS(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Hv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Xv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,((t,i)=>Hy(t,i)))&&Uo(this.baseMutations,e.baseMutations,((t,i)=>Hy(t,i)))}}class Gf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return LS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Gf(e,t,i,o)}}/**
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
 */class QS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,be;function YS(r){switch(r){case q.OK:return ve(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function Jv(r){if(r===void 0)return qr("GRPC error has no .code"),q.UNKNOWN;switch(r){case mt.OK:return q.OK;case mt.CANCELLED:return q.CANCELLED;case mt.UNKNOWN:return q.UNKNOWN;case mt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case mt.INTERNAL:return q.INTERNAL;case mt.UNAVAILABLE:return q.UNAVAILABLE;case mt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case mt.NOT_FOUND:return q.NOT_FOUND;case mt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case mt.ABORTED:return q.ABORTED;case mt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case mt.DATA_LOSS:return q.DATA_LOSS;default:return ve(39323,{code:r})}}(be=mt||(mt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const JS=new Ni([4294967295,4294967295],0);function Gy(r){const e=Ev().encode(r),t=new dv;return t.update(e),new Uint8Array(t.digest())}function Ky(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ni([t,i],0),new Ni([o,l],0)]}class Kf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(i<0)throw new Ya(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ni.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Ni.fromNumber(i)));return o.compare(JS)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Gy(e),[i,o]=Ky(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Kf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Gy(e),[i,o]=Ky(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qc(Ie.min(),o,new it(Re),Wr(),Ne())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Ne(),Ne(),Ne())}}/**
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
 */class uc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class Zv{constructor(e,t){this.targetId=e,this.De=t}}class eE{constructor(e,t,i=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Qy{constructor(){this.ve=0,this.Ce=Xy(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new El(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Xy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ZS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Wr(),this.je=Zu(),this.Je=Zu(),this.He=new it(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(ff(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,qt.newNoDocument(h,Ie.min()))}else Be(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Li(i).toUint8Array()}catch(g){if(g instanceof Av)return Oi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Kf(h,o,l)}catch(g){return Oi(g instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&ff(f.target)){const g=new pe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,qt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Ne();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Qc(e,t,this.He,this.ze,i);return this.ze=Wr(),this.je=Zu(),this.Je=Zu(),this.He=new it(Re),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Qy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new St(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new St(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Qy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new it(pe.comparator)}function Xy(){return new it(pe.comparator)}const eA={asc:"ASCENDING",desc:"DESCENDING"},tA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nA={and:"AND",or:"OR"};class rA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mf(r,e){return r.useProto3Json||Bc(e)?e:{value:e}}function Sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function iA(r,e){return Sc(r,e.toTimestamp())}function mr(r){return Be(!!r,49232),Ie.fromTimestamp((function(t){const i=bi(t);return new Je(i.seconds,i.nanos)})(r))}function Qf(r,e){return gf(r,e).canonicalString()}function gf(r,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function nE(r){const e=Qe.fromString(r);return Be(aE(e),10190,{key:e.toString()}),e}function yf(r,e){return Qf(r.databaseId,e.path)}function qd(r,e){const t=nE(e);if(t.get(1)!==r.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(iE(t))}function rE(r,e){return Qf(r.databaseId,e)}function sA(r){const e=nE(r);return e.length===4?Qe.emptyPath():iE(e)}function _f(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function iE(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Yy(r,e,t){return{name:yf(r,e),fields:t.value.mapValue.fields}}function oA(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ve(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Be(E===void 0||typeof E=="string",58123),Ft.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ft.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?q.UNKNOWN:Jv(_.code);return new te(E,_.message||"")})(h);t=new eE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=qd(r,i.document.name),l=mr(i.document.updateTime),h=i.document.createTime?mr(i.document.createTime):Ie.min(),f=new fn({mapValue:{fields:i.document.fields}}),g=qt.newFoundDocument(o,l,h,f),_=i.targetIds||[],E=i.removedTargetIds||[];t=new uc(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=qd(r,i.document),l=i.readTime?mr(i.readTime):Ie.min(),h=qt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new uc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=qd(r,i.document),l=i.removedTargetIds||[];t=new uc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new XS(o,l),f=i.targetId;t=new Zv(f,h)}}return t}function aA(r,e){let t;if(e instanceof vl)t={update:Yy(r,e.key,e.value)};else if(e instanceof Kc)t={delete:yf(r,e.key)};else if(e instanceof zi)t={update:Yy(r,e.key,e.data),updateMask:gA(e.fieldMask)};else{if(!(e instanceof GS))return ve(16599,{Rt:e.type});t={verify:yf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Tc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof fl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ic)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:iA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(r,e.precondition)),t}function lA(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?mr(o.updateTime):mr(l);return h.isEqual(Ie.min())&&(h=mr(l)),new HS(h,o.transformResults||[])})(t,e)))):[]}function uA(r,e){return{documents:[rE(r,e.path)]}}function cA(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=rE(r,o);const l=(function(_){if(_.length!==0)return oE(Zn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(S){return{field:No(S.field),direction:fA(S.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=mf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function hA(r){let e=sA(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const S=sE(T);return S instanceof Zn&&bv(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((S=>(function($){return new hl(xo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let S;return S=typeof T=="object"?T.value:T,Bc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(T){const S=!!T.before,F=T.values||[];return new Ec(F,S)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const S=!T.before,F=T.values||[];return new Ec(F,S)})(t.endAt)),xS(e,o,h,l,f,"F",g,_)}function dA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sE(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(xo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Zn.create(t.compositeFilter.filters.map((i=>sE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function fA(r){return eA[r]}function pA(r){return tA[r]}function mA(r){return nA[r]}function No(r){return{fieldPath:r.canonicalString()}}function xo(r){return Mt.fromServerFormat(r.fieldPath)}function oE(r){return r instanceof gt?(function(t){if(t.op==="=="){if(Fy(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NAN"}};if(My(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fy(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NAN"}};if(My(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:No(t.field),op:pA(t.op),value:t.value}}})(r):r instanceof Zn?(function(t){const i=t.getFilters().map((o=>oE(o)));return i.length===1?i[0]:{compositeFilter:{op:mA(t.op),filters:i}}})(r):ve(54877,{filter:r})}function gA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function aE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ki{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),f=Ft.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yA{constructor(e){this.gt=e}}function _A(r){const e=hA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class vA{constructor(){this.Dn=new EA}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Vi.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class EA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new St(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new St(Qe.comparator)).toArray()}}/**
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
 */const Jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lE=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(lE,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class zo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new zo(0)}static ur(){return new zo(-1)}}/**
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
 */const Zy="LruGarbageCollector",wA=1048576;function e_([r,e],[t,i]){const o=Re(r,t);return o===0?Re(e,i):o}class TA{constructor(e){this.Tr=e,this.buffer=new St(e_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();e_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class IA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Zy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ko(t)?ie(Zy,"Ignoring IndexedDB error during garbage collection: ",t):await Go(t)}await this.Rr(3e5)}))}}class SA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(jc.ue);const i=new TA(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Jy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),Co()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function AA(r,e){return new SA(r,e)}/**
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
 */class RA{constructor(){this.changes=new xs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class CA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&rl(i.mutation,o,wn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=_s();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Xa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=_s();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Wr();const h=nl(),f=(function(){return nl()})();return t.forEach(((g,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof zi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),rl(E.mutation,_,E.mutation.getFieldMask(),Je.now())):h.set(_.key,wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var T;return f.set(_,new kA(E,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=nl();let o=new it(((h,f)=>h-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=i.get(g)||wn.empty();E=f.applyToLocalView(_,E),i.set(g,E);const T=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,T=Hv();E.forEach((S=>{if(!l.has(S)){const F=Xv(t.get(S),i.get(S));F!==null&&T.set(S,F),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Uv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(_s());let f=al,g=l;return h.next((_=>W.forEach(_,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{g=g.insert(E,S)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ne()))).next((E=>({batchId:f,changes:$v(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const _=(function(T,S){return new Qo(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((E=>{E.forEach(((T,S)=>{h=h.insert(T,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,qt.newInvalidDocument(E)))}));let f=Xa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&rl(E.mutation,_,wn.empty(),Je.now()),qc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class PA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:mr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:_A(o.bundledQuery),readTime:mr(o.readTime)}})(t)),W.resolve()}}/**
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
 */class NA{constructor(){this.overlays=new it(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=_s();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=_s(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=l.get(_.largestBatchId);E===null&&(E=_s(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=_s(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return W.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new QS(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class xA{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Xf{constructor(){this.qr=new St(Nt.Qr),this.$r=new St(Nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Nt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Nt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new Qe([])),i=new Nt(t,e),o=new Nt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Qe([])),i=new Nt(t,e),o=new Nt(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Nt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Nt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class DA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new St(Nt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new KS(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Nt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Bf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new St(Re);return t.forEach((o=>{const l=new Nt(o,0),h=new Nt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),W.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new Nt(new pe(l),0);let f=new St(Re);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return W.forEach(t.mutations,(o=>{const l=new Nt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Nt(t,0),o=this.Yr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class OA{constructor(e){this.ni=e,this.docs=(function(){return new it(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Wr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Wr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||uS(lS(E),i)<=0||(o.has(E.key)||qc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ri(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new VA(this)}getSize(e){return W.resolve(this.size)}}class VA extends RA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class bA{constructor(e){this.persistence=e,this.ii=new xs((t=>Hf(t)),qf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Xf,this.targetCount=0,this._i=zo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
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
 */class uE{constructor(e,t){this.ai={},this.overlays={},this.ui=new jc(0),this.ci=!1,this.ci=!0,this.li=new xA,this.referenceDelegate=e(this),this.hi=new bA(this),this.indexManager=new vA,this.remoteDocumentCache=(function(o){return new OA(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new yA(t),this.Ti=new PA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new DA(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new LA(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class LA extends hS{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Ai=new Xf,this.Ri=null}static Vi(e){return new Yf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ac{constructor(e,t){this.persistence=e,this.gi=new xs((i=>pS(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=AA(this,t)}static Vi(e,t){return new Ac(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ie.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=oc(e.data.value)),t}Sr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Jf(e,t.fromCache,i,o)}}/**
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
 */class MA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return OT()?8:dS(Wt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new MA;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Co()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(Co()<=Pe.DEBUG&&ie("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Co()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):W.resolve())}ps(e,t){if(zy(t))return W.resolve(null);let i=pr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wc(t,null,"F"),i=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ne(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,wc(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return zy(t)||o.isEqual(Ie.min())?W.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?W.resolve(null):(Co()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Po(t)),this.vs(e,h,t,aS(o,al)).next((f=>f)))}))}bs(e,t){let i=new St(Bv(e));return t.forEach(((o,l)=>{qc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Co()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Po(t)),this.gs.getDocumentsMatchingQuery(e,t,Vi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Zf="LocalStore",UA=3e8;class jA{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Re),this.Ms=new xs((l=>Hf(l)),qf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function BA(r,e,t,i){return new jA(r,e,t,i)}async function cE(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function zA(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const T=_.batch,S=T.keys();let F=W.resolve();return S.forEach(($=>{F=F.next((()=>E.getEntry(g,$))).next((H=>{const B=_.docVersions.get($);Be(B!==null,48541),H.version.compareTo(B)<0&&(T.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),E.addEntry(H)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ne();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function hE(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function $A(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const S=o.get(T);if(!S)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let F=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Ft.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,i)),o=o.insert(T,F),(function(H,B,oe){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=UA?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(S,F,E)&&f.push(t.hi.updateTargetData(l,F))}));let g=Wr(),_=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(HA(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!i.isEqual(Ie.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function HA(r,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Wr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(Zf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function qA(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Bf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function WA(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new ki(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function vf(r,e,t){const i=Se(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ko(h))throw h;ie(Zf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function t_(r,e,t){const i=Se(r);let o=Ie.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=Se(g),S=T.Ms.get(E);return S!==void 0?W.resolve(T.Fs.get(S)):T.hi.getTargetData(_,E)})(i,h,pr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Ne()))).next((f=>(GA(i,OS(e),f),{documents:f,qs:l})))))}function GA(r,e,t){let i=r.xs.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class n_{constructor(){this.activeTargetIds=US()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KA{constructor(){this.Fo=new n_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new n_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QA{xo(e){}shutdown(){}}/**
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
 */const r_="ConnectivityMonitor";class i_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(r_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(r_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function Ef(){return ec===null?ec=(function(){return 268435456+Math.round(2147483648*Math.random())})():ec++,"0x"+ec.toString(16)}/**
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
 */const Wd="RestConnection",XA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===_c?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Ef(),f=this.Go(e,t.toUriEncodedString());ie(Wd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),E=ji(_);return this.jo(e,f,g,i,E).then((T=>(ie(Wd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Oi(Wd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=XA[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class JA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const $t="WebChannelConnection";class ZA extends YA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=Ef();return new Promise(((f,g)=>{const _=new fv;_.setWithCredentials(!0),_.listenOnce(pv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case sc.NO_ERROR:const T=_.getResponseJson();ie($t,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case sc.TIMEOUT:ie($t,`RPC '${e}' ${h} timed out`),g(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const S=_.getStatus();if(ie($t,`RPC '${e}' ${h} failed with status:`,S,"response text:",_.getResponseText()),S>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const $=F?.error;if($&&$.status&&$.message){const H=(function(oe){const ee=oe.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ee)>=0?ee:q.UNKNOWN})($.status);g(new te(H,$.message))}else g(new te(q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new te(q.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ie($t,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie($t,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=Ef(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=yv(),f=gv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");ie($t,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let S=!1,F=!1;const $=new JA({Ho:B=>{F?ie($t,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(S||(ie($t,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),ie($t,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Yo:()=>T.close()}),H=(B,oe,ee)=>{B.listen(oe,(ne=>{try{ee(ne)}catch(le){setTimeout((()=>{throw le}),0)}}))};return H(T,Qa.EventType.OPEN,(()=>{F||(ie($t,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),H(T,Qa.EventType.CLOSE,(()=>{F||(F=!0,ie($t,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(T))})),H(T,Qa.EventType.ERROR,(B=>{F||(F=!0,Oi($t,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.__(new te(q.UNAVAILABLE,"The operation could not be completed")))})),H(T,Qa.EventType.MESSAGE,(B=>{var oe;if(!F){const ee=B.data[0];Be(!!ee,16349);const ne=ee,le=ne?.error||((oe=ne[0])===null||oe===void 0?void 0:oe.error);if(le){ie($t,`RPC '${e}' stream ${o} received error:`,le);const xe=le.status;let Te=(function(k){const N=mt[k];if(N!==void 0)return Jv(N)})(xe),x=le.message;Te===void 0&&(Te=q.INTERNAL,x="Unknown error status: "+xe+" with message "+le.message),F=!0,$.__(new te(Te,x)),T.close()}else ie($t,`RPC '${e}' stream ${o} received:`,ee),$.a_(ee)}})),H(f,mv.STAT_EVENT,(B=>{B.stat===lf.PROXY?ie($t,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===lf.NOPROXY&&ie($t,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Gd(){return typeof document<"u"?document:null}/**
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
 */function Xc(r){return new rA(r,!0)}/**
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
 */class dE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const s_="PersistentStream";class fE{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new dE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(qr(t.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new te(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(s_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(s_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class e1 extends fE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=oA(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?mr(h.readTime):Ie.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=_f(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=ff(g)?{documents:uA(l,g)}:{query:cA(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=tE(l,h.resumeToken);const _=mf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Sc(l,h.snapshotVersion.toTimestamp());const _=mf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=dA(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=_f(this.serializer),t.removeTarget=e,this.k_(t)}}class t1 extends fE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=lA(e.writeResults,e.commitTime),i=mr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=_f(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>aA(this.serializer,i)))};this.k_(t)}}/**
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
 */class n1{}class r1 extends n1{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,gf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(q.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,gf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class i1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(qr(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Rs="RemoteStore";class s1{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ds(this)&&(ie(Rs,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ia.add(4),await wl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Yc(_)})(this))}))})),this.Aa=new i1(i,o)}}async function Yc(r){if(Ds(r))for(const e of r.da)await e(!0)}async function wl(r){for(const e of r.da)await e(!1)}function pE(r,e){const t=Se(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),rp(t)?np(t):Xo(t).x_()&&tp(t,e))}function ep(r,e){const t=Se(r),i=Xo(t);t.Ta.delete(e),i.x_()&&mE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ds(t)&&t.Aa.set("Unknown"))}function tp(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xo(r).H_(e)}function mE(r,e){r.Ra.$e(e),Xo(r).Y_(e)}function np(r){r.Ra=new ZS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Xo(r).start(),r.Aa.aa()}function rp(r){return Ds(r)&&!Xo(r).M_()&&r.Ta.size>0}function Ds(r){return Se(r).Ia.size===0}function gE(r){r.Ra=void 0}async function o1(r){r.Aa.set("Online")}async function a1(r){r.Ta.forEach(((e,t)=>{tp(r,e)}))}async function l1(r,e){gE(r),rp(r)?(r.Aa.la(e),np(r)):r.Aa.set("Unknown")}async function u1(r,e,t){if(r.Aa.set("Online"),e instanceof eE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(i){ie(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Rc(r,i)}else if(e instanceof uc?r.Ra.Ye(e):e instanceof Zv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ie.min()))try{const i=await hE(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(Ft.EMPTY_BYTE_STRING,E.snapshotVersion)),mE(l,g);const T=new ki(E.target,g,_,E.sequenceNumber);tp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ie(Rs,"Failed to raise snapshot:",i),await Rc(r,i)}}async function Rc(r,e,t){if(!Ko(e))throw e;r.Ia.add(1),await wl(r),r.Aa.set("Offline"),t||(t=()=>hE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(Rs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Yc(r)}))}function yE(r,e){return e().catch((t=>Rc(r,t,e)))}async function Jc(r){const e=Se(r),t=Fi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Bf;for(;c1(e);)try{const o=await qA(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,h1(e,o)}catch(o){await Rc(e,o)}_E(e)&&vE(e)}function c1(r){return Ds(r)&&r.Pa.length<10}function h1(r,e){r.Pa.push(e);const t=Fi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function _E(r){return Ds(r)&&!Fi(r).M_()&&r.Pa.length>0}function vE(r){Fi(r).start()}async function d1(r){Fi(r).na()}async function f1(r){const e=Fi(r);for(const t of r.Pa)e.X_(t.mutations)}async function p1(r,e,t){const i=r.Pa.shift(),o=Gf.from(i,e,t);await yE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Jc(r)}async function m1(r,e){e&&Fi(r).Z_&&await(async function(i,o){if((function(h){return YS(h)&&h!==q.ABORTED})(o.code)){const l=i.Pa.shift();Fi(i).N_(),await yE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Jc(i)}})(r,e),_E(r)&&vE(r)}async function o_(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ie(Rs,"RemoteStore received new credentials");const i=Ds(t);t.Ia.add(3),await wl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yc(t)}async function g1(r,e){const t=Se(r);e?(t.Ia.delete(2),await Yc(t)):e||(t.Ia.add(2),await wl(t),t.Aa.set("Unknown"))}function Xo(r){return r.Va||(r.Va=(function(t,i,o){const l=Se(t);return l.ia(),new e1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:o1.bind(null,r),e_:a1.bind(null,r),n_:l1.bind(null,r),J_:u1.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),rp(r)?np(r):r.Aa.set("Unknown")):(await r.Va.stop(),gE(r))}))),r.Va}function Fi(r){return r.ma||(r.ma=(function(t,i,o){const l=Se(t);return l.ia(),new t1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:d1.bind(null,r),n_:m1.bind(null,r),ea:f1.bind(null,r),ta:p1.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Jc(r)):(await r.ma.stop(),r.Pa.length>0&&(ie(Rs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class ip{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new ip(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sp(r,e){if(qr("AsyncQueue",`${e}: ${r}`),Ko(r))return new te(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class a_{constructor(){this.fa=new it(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class $o{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new $o(e,t,Vo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class y1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class _1{constructor(){this.queries=l_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=l_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new te(q.ABORTED,"Firestore shutting down"))}}function l_(){return new xs((r=>jv(r)),Hc)}async function op(r,e){const t=Se(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new y1,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=sp(h,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&lp(t)}async function ap(r,e){const t=Se(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function v1(r,e){const t=Se(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&lp(t)}function E1(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function lp(r){r.Da.forEach((e=>{e.next()}))}var wf,u_;(u_=wf||(wf={})).Fa="default",u_.Cache="cache";class up{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new $o(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==wf.Cache}}/**
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
 */class EE{constructor(e){this.key=e}}class wE{constructor(e){this.key=e}}class w1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=Bv(e),this.eu=new Vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new a_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const S=o.get(E),F=qc(this.query,T)?T:null,$=!!S&&this.mutatedKeys.has(S.key),H=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let B=!1;S&&F?S.data.isEqual(F.data)?$!==H&&(i.track({type:3,doc:F}),B=!0):this.iu(S,F)||(i.track({type:2,doc:F}),B=!0,(g&&this.Xa(F,g)>0||_&&this.Xa(F,_)<0)&&(f=!0)):!S&&F?(i.track({type:0,doc:F}),B=!0):S&&!F&&(i.track({type:1,doc:S}),B=!0,(g||_)&&(f=!0)),B&&(F?(h=h.add(F),l=H?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(F,$){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:B})}};return H(F)-H($)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new $o(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new a_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new wE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new EE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return $o.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const cp="SyncEngine";class T1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class I1{constructor(e){this.key=e,this.lu=!1}}class S1{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new xs((f=>jv(f)),Hc),this.Tu=new Map,this.Iu=new Set,this.du=new it(pe.comparator),this.Eu=new Map,this.Au=new Xf,this.Ru={},this.Vu=new Map,this.mu=zo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function A1(r,e,t=!0){const i=kE(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await TE(i,e,t,!0),o}async function R1(r,e){const t=kE(r);await TE(t,e,!0,!1)}async function TE(r,e,t,i){const o=await WA(r.localStore,pr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await k1(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&pE(r.remoteStore,o),f}async function k1(r,e,t,i,o){r.gu=(T,S,F)=>(async function(H,B,oe,ee){let ne=B.view.nu(oe);ne.Ds&&(ne=await t_(H.localStore,B.query,!1).then((({documents:x})=>B.view.nu(x,ne))));const le=ee&&ee.targetChanges.get(B.targetId),xe=ee&&ee.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(ne,H.isPrimaryClient,le,xe);return h_(H,B.targetId,Te._u),Te.snapshot})(r,T,S,F);const l=await t_(r.localStore,e,!0),h=new w1(e,l.qs),f=h.nu(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);h_(r,t,_._u);const E=new T1(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function C1(r,e,t){const i=Se(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Hc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ep(i.remoteStore,o.targetId),Tf(i,o.targetId)})).catch(Go)):(Tf(i,o.targetId),await vf(i.localStore,o.targetId,!0))}async function P1(r,e){const t=Se(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ep(t.remoteStore,i.targetId))}async function N1(r,e,t){const i=M1(r);try{const o=await(function(h,f){const g=Se(h),_=Je.now(),E=f.reduce(((F,$)=>F.add($.key)),Ne());let T,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let $=Wr(),H=Ne();return g.Os.getEntries(F,E).next((B=>{$=B,$.forEach(((oe,ee)=>{ee.isValidDocument()||(H=H.add(oe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,$))).next((B=>{T=B;const oe=[];for(const ee of f){const ne=WS(ee,T.get(ee.key).overlayedDocument);ne!=null&&oe.push(new zi(ee.key,ne,Dv(ne.value.mapValue),nn.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,oe,f)})).next((B=>{S=B;const oe=B.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(F,B.batchId,oe)}))})).then((()=>({batchId:S.batchId,changes:$v(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new it(Re)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await Tl(i,o.changes),await Jc(i.remoteStore)}catch(o){const l=sp(o,"Failed to persist write");t.reject(l)}}async function IE(r,e){const t=Se(r);try{const i=await $A(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Be(h.lu,14607):o.removedDocuments.size>0&&(Be(h.lu,42227),h.lu=!1))})),await Tl(t,i,e)}catch(i){await Go(i)}}function c_(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Se(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,T)=>{for(const S of T.wa)S.va(f)&&(_=!0)})),_&&lp(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function x1(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new it(pe.comparator);h=h.insert(l,qt.newNoDocument(l,Ie.min()));const f=Ne().add(l),g=new Qc(Ie.min(),new Map,new it(Re),h,f);await IE(i,g),i.du=i.du.remove(l),i.Eu.delete(e),hp(i)}else await vf(i.localStore,e,!1).then((()=>Tf(i,e,t))).catch(Go)}async function D1(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await zA(t.localStore,e);AE(t,i,null),SE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await Go(o)}}async function O1(r,e,t){const i=Se(r);try{const o=await(function(h,f){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(Be(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(i.localStore,e);AE(i,e,t),SE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await Go(o)}}function SE(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function AE(r,e,t){const i=Se(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Tf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||RE(r,i)}))}function RE(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ep(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),hp(r))}function h_(r,e,t){for(const i of t)i instanceof EE?(r.Au.addReference(i.key,e),V1(r,i)):i instanceof wE?(ie(cp,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||RE(r,i.key)):ve(19791,{yu:i})}function V1(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(ie(cp,"New document in limbo: "+t),r.Iu.add(i),hp(r))}function hp(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(Qe.fromString(e)),i=r.mu.next();r.Eu.set(i,new I1(t)),r.du=r.du.insert(t,i),pE(r.remoteStore,new ki(pr($c(t.path)),i,"TargetPurposeLimboResolution",jc.ue))}}async function Tl(r,e,t){const i=Se(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var E;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(E=t?.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Jf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const E=Se(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(_,(S=>W.forEach(S.Is,(F=>E.persistence.referenceDelegate.addReference(T,S.targetId,F))).next((()=>W.forEach(S.ds,(F=>E.persistence.referenceDelegate.removeReference(T,S.targetId,F)))))))))}catch(T){if(!Ko(T))throw T;ie(Zf,"Failed to update sequence numbers: "+T)}for(const T of _){const S=T.targetId;if(!T.fromCache){const F=E.Fs.get(S),$=F.snapshotVersion,H=F.withLastLimboFreeSnapshotVersion($);E.Fs=E.Fs.insert(S,H)}}})(i.localStore,l))}async function b1(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ie(cp,"User change. New user:",e.toKey());const i=await cE(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new te(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Bs)}}function L1(r,e){const t=Se(r),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function kE(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=IE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x1.bind(null,e),e.hu.J_=v1.bind(null,e.eventManager),e.hu.pu=E1.bind(null,e.eventManager),e}function M1(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=D1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O1.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return BA(this.persistence,new FA,e.initialUser,this.serializer)}Du(e){return new uE(Yf.Vi,this.serializer)}bu(e){return new KA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class F1 extends kc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Be(this.persistence.referenceDelegate instanceof Ac,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new IA(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new uE((i=>Ac.Vi(i,t)),this.serializer)}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>c_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=b1.bind(null,this.syncEngine),await g1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _1})()}createDatastore(e){const t=Xc(e.databaseInfo.databaseId),i=(function(l){return new ZA(l)})(e.databaseInfo);return(function(l,h,f,g){return new r1(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new s1(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>c_(this.syncEngine,t,0)),(function(){return i_.C()?new i_:new QA})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const T=new S1(o,l,h,f,g,_);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);ie(Rs,"RemoteStore shutting down."),l.Ia.add(5),await wl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}If.provider={build:()=>new If};/**
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
 */class dp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ui="FirestoreClient";class U1{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ie(Ui,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ie(Ui,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=sp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Kd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Ui,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await cE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Oi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Oi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function d_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await j1(r);ie(Ui,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>o_(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>o_(e.remoteStore,o))),r._onlineComponents=e}async function j1(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Ui,"Using user provided OfflineComponentProvider");try{await Kd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Oi("Error using user provided cache. Falling back to memory cache: "+t),await Kd(r,new kc)}}else ie(Ui,"Using default OfflineComponentProvider"),await Kd(r,new F1(void 0));return r._offlineComponents}async function CE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Ui,"Using user provided OnlineComponentProvider"),await d_(r,r._uninitializedComponentsProvider._online)):(ie(Ui,"Using default OnlineComponentProvider"),await d_(r,new If))),r._onlineComponents}function B1(r){return CE(r).then((e=>e.syncEngine))}async function Cc(r){const e=await CE(r),t=e.eventManager;return t.onListen=A1.bind(null,e.syncEngine),t.onUnlisten=C1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=R1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=P1.bind(null,e.syncEngine),t}function z1(r,e,t={}){const i=new $r;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new dp({next:S=>{E.Ou(),h.enqueueAndForget((()=>ap(l,T)));const F=S.docs.has(f);!F&&S.fromCache?_.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&S.fromCache&&g&&g.source==="server"?_.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new up($c(f.path),E,{includeMetadataChanges:!0,ka:!0});return op(l,T)})(await Cc(r),r.asyncQueue,e,t,i))),i.promise}function $1(r,e,t={}){const i=new $r;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new dp({next:S=>{E.Ou(),h.enqueueAndForget((()=>ap(l,T))),S.fromCache&&g.source==="server"?_.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new up(f,E,{includeMetadataChanges:!0,ka:!0});return op(l,T)})(await Cc(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function PE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const f_=new Map;/**
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
 */const NE="firestore.googleapis.com",p_=!0;class m_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NE,this.ssl=p_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:p_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wA)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new YI;switch(i.type){case"firstParty":return new tS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=f_.get(t);i&&(ie("ComponentProvider","Removing Datastore"),f_.delete(t),i.terminate())})(this),Promise.resolve()}}function H1(r,e,t,i={}){var o;r=tn(r,Zc);const l=ji(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Vf(`https://${g}`),bf("Firestore",!0)),h.host!==NE&&h.host!==g&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!Is(_,f)&&(r._setSettings(_),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=Ht.MOCK_USER;else{E=ov(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ht(S)}r._authCredentials=new JI(new vv(E,T))}}/**
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
 */class Qr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(_l(t,ot._jsonSchema))return new ot(e,i||null,new pe(Qe.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:yt("string",ot._jsonSchemaVersion),referencePath:yt("string")};class xi extends Qr{constructor(e,t,i){super(e,t,$c(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new pe(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function bn(r,e,...t){if(r=at(r),wv("collection","path",e),r instanceof Zc){const i=Qe.fromString(e,...t);return Cy(i),new xi(r,null,i)}{if(!(r instanceof ot||r instanceof xi))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Qe.fromString(e,...t));return Cy(i),new xi(r.firestore,null,i)}}function Zt(r,e,...t){if(r=at(r),arguments.length===1&&(e=jf.newId()),wv("doc","path",e),r instanceof Zc){const i=Qe.fromString(e,...t);return ky(i),new ot(r,null,new pe(i))}{if(!(r instanceof ot||r instanceof xi))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Qe.fromString(e,...t));return ky(i),new ot(r.firestore,r instanceof xi?r.converter:null,new pe(i))}}/**
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
 */const g_="AsyncQueue";class y_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new dE(this,"async_queue_retry"),this.oc=()=>{const i=Gd();i&&ie(g_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Gd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Gd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new $r;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ko(e))throw e;ie(g_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,qr("INTERNAL UNHANDLED ERROR: ",__(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=ip.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:__(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function __(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function v_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class wr extends Zc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new y_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new y_(e),this._firestoreClient=void 0,await e}}}function q1(r,e){const t=typeof r=="object"?r:Ff(),i=typeof r=="string"?r:_c,o=Fc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=rv("firestore");l&&H1(o,...l)}return o}function Il(r){if(r._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||W1(r),r._firestoreClient}function W1(r){var e,t,i;const o=r._freezeSettings(),l=(function(f,g,_,E){return new yS(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,PE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new U1(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f?._online.build();return{_offline:f?._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Ft.fromBase64String(e))}catch(t){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:On._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_l(e,On._jsonSchema))return On.fromBase64String(e.bytes)}}On._jsonSchemaVersion="firestore/bytes/1.0",On._jsonSchema={type:yt("string",On._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class Sl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fp{constructor(e){this._methodName=e}}/**
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
 */class gr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(_l(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:yt("string",gr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class yr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_l(e,yr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new yr(e.vectorValues);throw new te(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yr._jsonSchemaVersion="firestore/vectorValue/1.0",yr._jsonSchema={type:yt("string",yr._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const G1=/^__.*__$/;class K1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}class xE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function DE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class pp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Pc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(DE(this.Ec)&&G1.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Q1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Xc(e)}Dc(e,t,i,o=!1){return new pp({Ec:e,methodName:t,bc:i,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Al(r){const e=r._freezeSettings(),t=Xc(r._databaseId);return new Q1(r._databaseId,!!e.ignoreUndefinedProperties,t)}function mp(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);gp("Data must be an object, but it was:",h,i);const f=bE(i,h);let g,_;if(l.merge)g=new wn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const S=Sf(e,T,t);if(!h.contains(S))throw new te(q.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);ME(E,S)||E.push(S)}g=new wn(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new K1(new fn(f),g,_)}class eh extends fp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}function OE(r,e,t,i){const o=r.Dc(1,e,t);gp("Data must be an object, but it was:",o,i);const l=[],h=fn.empty();Bi(i,((g,_)=>{const E=yp(e,g,t);_=at(_);const T=o.gc(E);if(_ instanceof eh)l.push(E);else{const S=Rl(_,T);S!=null&&(l.push(E),h.set(E,S))}}));const f=new wn(l);return new xE(h,f,o.fieldTransforms)}function VE(r,e,t,i,o,l){const h=r.Dc(1,e,t),f=[Sf(e,i,t)],g=[o];if(l.length%2!=0)throw new te(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(Sf(e,l[S])),g.push(l[S+1]);const _=[],E=fn.empty();for(let S=f.length-1;S>=0;--S)if(!ME(_,f[S])){const F=f[S];let $=g[S];$=at($);const H=h.gc(F);if($ instanceof eh)_.push(F);else{const B=Rl($,H);B!=null&&(_.push(F),E.set(F,B))}}const T=new wn(_);return new xE(E,T,h.fieldTransforms)}function X1(r,e,t,i=!1){return Rl(t,r.Dc(i?4:3,e))}function Rl(r,e){if(LE(r=at(r)))return gp("Unsupported field value:",e,r),bE(r,e);if(r instanceof fp)return(function(i,o){if(!DE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Rl(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=at(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return jS(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Je.fromDate(i);return{timestampValue:Sc(o.serializer,l)}}if(i instanceof Je){const l=new Je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Sc(o.serializer,l)}}if(i instanceof gr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof On)return{bytesValue:tE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof yr)return(function(h,f){return{mapValue:{fields:{[Nv]:{stringValue:xv},[vc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Wf(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Uc(i)}`)})(r,e)}function bE(r,e){const t={};return Sv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(r,((i,o)=>{const l=Rl(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function LE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof gr||r instanceof On||r instanceof ot||r instanceof fp||r instanceof yr)}function gp(r,e,t){if(!LE(t)||!Tv(t)){const i=Uc(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function Sf(r,e,t){if((e=at(e))instanceof Sl)return e._internalPath;if(typeof e=="string")return yp(r,e);throw Pc("Field path arguments must be of type string or ",r,!1,void 0,t)}const Y1=new RegExp("[~\\*/\\[\\]]");function yp(r,e,t){if(e.search(Y1)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Sl(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Pc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new te(q.INVALID_ARGUMENT,f+r+g)}function ME(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class FE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(th("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class J1 extends FE{data(){return super.data()}}function th(r,e){return typeof e=="string"?yp(r,e):e instanceof Sl?e._internalPath:e._delegate._internalPath}/**
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
 */function UE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class vp extends _p{}function kl(r,e,...t){let i=[];e instanceof _p&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof wp)).length,f=l.filter((g=>g instanceof nh)).length;if(h>1||h>0&&f>0)throw new te(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class nh extends vp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new nh(e,t,i)}_apply(e){const t=this._parse(e);return BE(e._query,t),new Qr(e.firestore,e.converter,pf(e._query,t))}_parse(e){const t=Al(e.firestore);return(function(l,h,f,g,_,E,T){let S;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new te(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){w_(T,E);const $=[];for(const H of T)$.push(E_(g,l,H));S={arrayValue:{values:$}}}else S=E_(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||w_(T,E),S=X1(f,h,T,E==="in"||E==="not-in");return gt.create(_,E,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ep(r,e,t){const i=e,o=th("where",r);return nh._create(o,i,t)}class wp extends _p{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)BE(h,g),h=pf(h,g)})(e._query,t),new Qr(e.firestore,e.converter,pf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tp extends vp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hl(l,h)})(e._query,this._field,this._direction);return new Qr(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Qo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function jE(r,e="asc"){const t=e,i=th("orderBy",r);return Tp._create(i,t)}class Ip extends vp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Ip(e,t,i)}_apply(e){return new Qr(e.firestore,e.converter,wc(e._query,this._limit,this._limitType))}}function Z1(r){return Ip._create("limit",r,"F")}function E_(r,e,t){if(typeof(t=at(t))=="string"){if(t==="")throw new te(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uv(e)&&t.indexOf("/")!==-1)throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!pe.isDocumentKey(i))throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ly(r,new pe(i))}if(t instanceof ot)return Ly(r,t._key);throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(t)}.`)}function w_(r,e){if(!Array.isArray(r)||r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BE(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eR{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Bi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[vc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>dt(h.doubleValue)));return new yr(l)}convertGeoPoint(e){return new gr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=zc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);Be(aE(i),9688,{name:e});const o=new ul(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Sp(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends FE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(th("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:yt("string",vs._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class cc extends vs{data(e={}){return super.data(e)}}class Es{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new cc(this._firestore,this._userDataWriter,i.key,i,new Ja(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new cc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new cc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:tR(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}/**
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
 */function Cl(r){r=tn(r,ot);const e=tn(r.firestore,wr);return z1(Il(e),r._key).then((t=>$E(e,r,t)))}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:yt("string",Es._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class Ap extends eR{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Os(r){r=tn(r,Qr);const e=tn(r.firestore,wr),t=Il(e),i=new Ap(e);return UE(r._query),$1(t,r._query).then((o=>new Es(e,i,r,o)))}function Rp(r,e,t){r=tn(r,ot);const i=tn(r.firestore,wr),o=Sp(r.converter,e,t);return Pl(i,[mp(Al(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,nn.none())])}function zE(r,e,t,...i){r=tn(r,ot);const o=tn(r.firestore,wr),l=Al(o);let h;return h=typeof(e=at(e))=="string"||e instanceof Sl?VE(l,"updateDoc",r._key,e,t,i):OE(l,"updateDoc",r._key,e),Pl(o,[h.toMutation(r._key,nn.exists(!0))])}function nR(r){return Pl(tn(r.firestore,wr),[new Kc(r._key,nn.none())])}function rR(r,e){const t=tn(r.firestore,wr),i=Zt(r),o=Sp(r.converter,e);return Pl(t,[mp(Al(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,nn.exists(!1))]).then((()=>i))}function rh(r,...e){var t,i,o;r=at(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||v_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(v_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,E;if(r instanceof ot)_=tn(r.firestore,wr),E=$c(r._key.path),g={next:T=>{e[h]&&e[h]($E(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=tn(r,Qr);_=tn(T.firestore,wr),E=T._query;const S=new Ap(_);g={next:F=>{e[h]&&e[h](new Es(_,S,T,F))},error:e[h+1],complete:e[h+2]},UE(r._query)}return(function(S,F,$,H){const B=new dp(H),oe=new up(F,B,$);return S.asyncQueue.enqueueAndForget((async()=>op(await Cc(S),oe))),()=>{B.Ou(),S.asyncQueue.enqueueAndForget((async()=>ap(await Cc(S),oe)))}})(Il(_),E,f,g)}function Pl(r,e){return(function(i,o){const l=new $r;return i.asyncQueue.enqueueAndForget((async()=>N1(await B1(i),o,l))),l.promise})(Il(r),e)}function $E(r,e,t){const i=t.docs.get(e._key),o=new Ap(r);return new vs(r,o,e._key,i,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class iR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Al(e)}set(e,t,i){this._verifyNotCommitted();const o=Qd(e,this._firestore),l=Sp(o.converter,t,i),h=mp(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(h.toMutation(o._key,nn.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=Qd(e,this._firestore);let h;return h=typeof(t=at(t))=="string"||t instanceof Sl?VE(this._dataReader,"WriteBatch.update",l._key,t,i,o):OE(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,nn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Qd(e,this._firestore);return this._mutations=this._mutations.concat(new Kc(t._key,nn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qd(r,e){if((r=at(r)).firestore!==e)throw new te(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function kp(r){return Il(r=tn(r,wr)),new iR(r,(e=>Pl(r,e)))}(function(e,t=!0){(function(o){Wo=o})(Ns),Ss(new Di("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new wr(new ZI(i.getProvider("auth-internal")),new nS(h,i.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),fr(Ty,Iy,e),fr(Ty,Iy,"esm2017")})();/**
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
 */const HE="firebasestorage.googleapis.com",qE="storageBucket",sR=120*1e3,oR=600*1e3;/**
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
 */class ut extends Tr{constructor(e,t,i=0){super(Xd(e),`Firebase Storage: ${t} (${Xd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function Xd(r){return"storage/"+r}function Cp(){const r="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,r)}function aR(r){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function lR(r){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uR(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,r)}function cR(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hR(r){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function dR(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fR(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function pR(r){return new ut(lt.INVALID_URL,"Invalid URL '"+r+"'.")}function mR(r){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function gR(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qE+"' property when initializing the app?")}function yR(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _R(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vR(r){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Af(r){return new ut(lt.INVALID_ARGUMENT,r)}function WE(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function ER(r){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(r,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ka(r){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Tn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Tn.makeFromUrl(e,t)}catch{return new Tn(e,"")}if(i.path==="")return i;throw mR(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(le){le.path_=decodeURIComponent(le.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${E}/b/${o}/o${S}`,"i"),$={bucket:1,path:3},H=t===HE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",oe=new RegExp(`^https?://${H}/${o}/${B}`,"i"),ne=[{regex:f,indices:g,postModify:l},{regex:F,indices:$,postModify:_},{regex:oe,indices:{bucket:1,path:2},postModify:_}];for(let le=0;le<ne.length;le++){const xe=ne[le],Te=xe.regex.exec(e);if(Te){const x=Te[xe.indices.bucket];let A=Te[xe.indices.path];A||(A=""),i=new Tn(x,A),xe.postModify(i);break}}if(i==null)throw pR(e);return i}}class wR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function TR(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function E(...B){_||(_=!0,e.apply(null,B))}function T(B){o=setTimeout(()=>{o=null,r(F,g())},B)}function S(){l&&clearTimeout(l)}function F(B,...oe){if(_){S();return}if(B){S(),E.call(null,B,...oe);return}if(g()||h){S(),E.call(null,B,...oe);return}i<64&&(i*=2);let ne;f===1?(f=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let $=!1;function H(B){$||($=!0,S(),!_&&(o!==null?(B||(f=2),clearTimeout(o),T(0)):B||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function IR(r){r(!1)}/**
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
 */function SR(r){return r!==void 0}function AR(r){return typeof r=="object"&&!Array.isArray(r)}function Pp(r){return typeof r=="string"||r instanceof String}function T_(r){return Np()&&r instanceof Blob}function Np(){return typeof Blob<"u"}function I_(r,e,t,i){if(i<e)throw Af(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Af(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function xp(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function GE(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ws;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ws||(ws={}));/**
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
 */function RR(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class kR{constructor(e,t,i,o,l,h,f,g,_,E,T,S=!0,F=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,H)=>{this.resolve_=$,this.reject_=H,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new tc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ws.NO_ERROR,g=l.getStatus();if(!f||RR(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===ws.ABORT;i(!1,new tc(!1,null,E));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new tc(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());SR(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Cp();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?WE():fR();h(g)}else{const g=dR();h(g)}};this.canceled_?t(!1,new tc(!1,null,!0)):this.backoffId_=TR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function CR(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function PR(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NR(r,e){e&&(r["X-Firebase-GMPID"]=e)}function xR(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function DR(r,e,t,i,o,l,h=!0,f=!1){const g=GE(r.urlParams),_=r.url+g,E=Object.assign({},r.headers);return NR(E,e),CR(E,t),PR(E,l),xR(E,i),new kR(_,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function OR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VR(...r){const e=OR();if(e!==void 0){const t=new e;for(let i=0;i<r.length;i++)t.append(r[i]);return t.getBlob()}else{if(Np())return new Blob(r);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bR(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function LR(r){if(typeof atob>"u")throw vR("base-64");return atob(r)}/**
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
 */const dr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yd{constructor(e,t){this.data=e,this.contentType=t||null}}function MR(r,e){switch(r){case dr.RAW:return new Yd(KE(e));case dr.BASE64:case dr.BASE64URL:return new Yd(QE(r,e));case dr.DATA_URL:return new Yd(UR(e),jR(e))}throw Cp()}function KE(r){const e=[];for(let t=0;t<r.length;t++){let i=r.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=r.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function FR(r){let e;try{e=decodeURIComponent(r)}catch{throw il(dr.DATA_URL,"Malformed data URL.")}return KE(e)}function QE(r,e){switch(r){case dr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw il(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case dr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw il(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=LR(e)}catch(o){throw o.message.includes("polyfill")?o:il(r,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class XE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw il(dr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=BR(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function UR(r){const e=new XE(r);return e.base64?QE(dr.BASE64,e.rest):FR(e.rest)}function jR(r){return new XE(r).contentType}function BR(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class Ti{constructor(e,t){let i=0,o="";T_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(T_(this.data_)){const i=this.data_,o=bR(i,e,t);return o===null?null:new Ti(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ti(i,!0)}}static getBlob(...e){if(Np()){const t=e.map(i=>i instanceof Ti?i.data_:i);return new Ti(VR.apply(null,t))}else{const t=e.map(h=>Pp(h)?MR(dr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new Ti(o,!0)}}uploadData(){return this.data_}}/**
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
 */function YE(r){let e;try{e=JSON.parse(r)}catch{return null}return AR(e)?e:null}/**
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
 */function zR(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function $R(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function JE(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function HR(r,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||HR}}let nc=null;function qR(r){return!Pp(r)||r.length<2?r:JE(r)}function ZE(){if(nc)return nc;const r=[];r.push(new Yt("bucket")),r.push(new Yt("generation")),r.push(new Yt("metageneration")),r.push(new Yt("name","fullPath",!0));function e(l,h){return qR(h)}const t=new Yt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Yt("size");return o.xform=i,r.push(o),r.push(new Yt("timeCreated")),r.push(new Yt("updated")),r.push(new Yt("md5Hash",null,!0)),r.push(new Yt("cacheControl",null,!0)),r.push(new Yt("contentDisposition",null,!0)),r.push(new Yt("contentEncoding",null,!0)),r.push(new Yt("contentLanguage",null,!0)),r.push(new Yt("contentType",null,!0)),r.push(new Yt("metadata","customMetadata",!0)),nc=r,nc}function WR(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new Tn(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function GR(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return WR(i,r),i}function ew(r,e,t){const i=YE(e);return i===null?null:GR(r,i,t)}function KR(r,e,t,i){const o=YE(e);if(o===null||!Pp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const E=r.bucket,T=r.fullPath,S="/b/"+h(E)+"/o/"+h(T),F=xp(S,t,i),$=GE({alt:"media",token:_});return F+$})[0]}function QR(r,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}class tw{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function nw(r){if(!r)throw Cp()}function XR(r,e){function t(i,o){const l=ew(r,o,e);return nw(l!==null),l}return t}function YR(r,e){function t(i,o){const l=ew(r,o,e);return nw(l!==null),KR(l,o,r.host,r._protocol)}return t}function rw(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=cR():o=uR():t.getStatus()===402?o=lR(r.bucket):t.getStatus()===403?o=hR(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function JR(r){const e=rw(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=aR(r.path)),l.serverResponse=o.serverResponse,l}return t}function ZR(r,e,t){const i=e.fullServerUrl(),o=xp(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new tw(o,l,YR(r,t),h);return f.errorHandler=JR(e),f}function ek(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function tk(r,e,t){const i=Object.assign({},t);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=ek(null,e)),i}function nk(r,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ne="";for(let le=0;le<2;le++)ne=ne+Math.random().toString().slice(2);return ne}const g=f();h["Content-Type"]="multipart/related; boundary="+g;const _=tk(e,i,o),E=QR(_,t),T="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,S=`\r
--`+g+"--",F=Ti.getBlob(T,i,S);if(F===null)throw yR();const $={name:_.fullPath},H=xp(l,r.host,r._protocol),B="POST",oe=r.maxUploadRetryTime,ee=new tw(H,B,XR(r,t),oe);return ee.urlParams=$,ee.headers=h,ee.body=F.uploadData(),ee.errorHandler=rw(e),ee}class rk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Ka("cannot .send() more than once");if(ji(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ka("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ka("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ka("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ka("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ik extends rk{initXhr(){this.xhr_.responseType="text"}}function iw(){return new ik}/**
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
 */class ks{constructor(e,t){this._service=e,t instanceof Tn?this._location=t:this._location=Tn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ks(e,t)}get root(){const e=new Tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JE(this._location.path)}get storage(){return this._service}get parent(){const e=zR(this._location.path);if(e===null)return null;const t=new Tn(this._location.bucket,e);return new ks(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ER(e)}}function sk(r,e,t){r._throwIfRoot("uploadBytes");const i=nk(r.storage,r._location,ZE(),new Ti(e,!0),t);return r.storage.makeRequestWithTokens(i,iw).then(o=>({metadata:o,ref:r}))}function ok(r){r._throwIfRoot("getDownloadURL");const e=ZR(r.storage,r._location,ZE());return r.storage.makeRequestWithTokens(e,iw).then(t=>{if(t===null)throw _R();return t})}function ak(r,e){const t=$R(r._location.path,e),i=new Tn(r._location.bucket,t);return new ks(r.storage,i)}/**
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
 */function lk(r){return/^[A-Za-z]+:\/\//.test(r)}function uk(r,e){return new ks(r,e)}function sw(r,e){if(r instanceof Dp){const t=r;if(t._bucket==null)throw gR();const i=new ks(t,t._bucket);return e!=null?sw(i,e):i}else return e!==void 0?ak(r,e):r}function ck(r,e){if(e&&lk(e)){if(r instanceof Dp)return uk(r,e);throw Af("To use ref(service, url), the first argument must be a Storage instance.")}else return sw(r,e)}function S_(r,e){const t=e?.[qE];return t==null?null:Tn.makeFromBucketSpec(t,r)}function hk(r,e,t,i={}){r.host=`${e}:${t}`;const o=ji(e);o&&(Vf(`https://${r.host}/b`),bf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:ov(l,r.app.options.projectId))}class Dp{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=HE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sR,this._maxUploadRetryTime=oR,this._requests=new Set,o!=null?this._bucket=Tn.makeFromBucketSpec(o,this._host):this._bucket=S_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,e):this._bucket=S_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ks(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new wR(WE());{const h=DR(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const A_="@firebase/storage",R_="0.13.14";/**
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
 */const ow="storage";function dk(r,e,t){return r=at(r),sk(r,e,t)}function fk(r){return r=at(r),ok(r)}function pk(r,e){return r=at(r),ck(r,e)}function mk(r=Ff(),e){r=at(r);const i=Fc(r,ow).getImmediate({identifier:e}),o=rv("storage");return o&&gk(i,...o),i}function gk(r,e,t,i={}){hk(r,e,t,i)}function yk(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Dp(t,i,o,e,Ns)}function _k(){Ss(new Di(ow,yk,"PUBLIC").setMultipleInstances(!0)),fr(A_,R_,""),fr(A_,R_,"esm2017")}_k();var vk="firebase",Ek="11.10.0";/**
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
 */fr(vk,Ek,"app");function Op(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wk=aw,lw=new gl("auth","Firebase",aw());/**
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
 */const Nc=new Lf("@firebase/auth");function Tk(r,...e){Nc.logLevel<=Pe.WARN&&Nc.warn(`Auth (${Ns}): ${r}`,...e)}function hc(r,...e){Nc.logLevel<=Pe.ERROR&&Nc.error(`Auth (${Ns}): ${r}`,...e)}/**
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
 */function Gr(r,...e){throw Vp(r,...e)}function _r(r,...e){return Vp(r,...e)}function uw(r,e,t){const i=Object.assign(Object.assign({},wk()),{[e]:t});return new gl("auth","Firebase",i).create(e,{appName:r.name})}function Ts(r){return uw(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vp(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return lw.create(r,...e)}function we(r,e,...t){if(!r)throw Vp(e,...t)}function Br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw hc(e),new Error(e)}function Kr(r,e){r||Br(e)}/**
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
 */function Rf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ik(){return k_()==="http:"||k_()==="https:"}function k_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Sk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ik()||NT()||"connection"in navigator)?navigator.onLine:!0}function Ak(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=kT()||xT()}get(){return Sk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bp(r,e){Kr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ck=new Nl(3e4,6e4);function Lp(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Yo(r,e,t,i,o={}){return hw(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=yl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return PT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&ji(r.emulatorConfig.host)&&(_.credentials="include"),cw.fetch()(await dw(r,r.config.apiHost,t,f),_)})}async function hw(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},Rk),e);try{const o=new Nk(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw rc(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw rc(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw rc(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw uw(r,E,_);Gr(r,E)}}catch(o){if(o instanceof Tr)throw o;Gr(r,"network-request-failed",{message:String(o)})}}async function Pk(r,e,t,i,o={}){const l=await Yo(r,e,t,i,o);return"mfaPendingCredential"in l&&Gr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function dw(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?bp(r.config,o):`${r.config.apiScheme}://${o}`;return kk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class Nk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(_r(this.auth,"network-request-failed")),Ck.get())})}}function rc(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=_r(r,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function xk(r,e){return Yo(r,"POST","/v1/accounts:delete",e)}async function xc(r,e){return Yo(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function sl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dk(r,e=!1){const t=at(r),i=await t.getIdToken(e),o=Mp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:sl(Jd(o.auth_time)),issuedAtTime:sl(Jd(o.iat)),expirationTime:sl(Jd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Jd(r){return Number(r)*1e3}function Mp(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=tv(t);return o?JSON.parse(o):(hc("Failed to decode base64 JWT payload"),null)}catch(o){return hc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function C_(r){const e=Mp(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Tr&&Ok(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Ok({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sl(this.lastLoginAt),this.creationTime=sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dc(r){var e;const t=r.auth,i=await r.getIdToken(),o=await pl(r,xc(t,{idToken:i}));we(o?.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?fw(l.providerUserInfo):[],f=Lk(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!f?.length,E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new kf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function bk(r){const e=at(r);await Dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lk(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function fw(r){return r.map(e=>{var{providerId:t}=e,i=Op(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Mk(r,e){const t=await hw(r,{},async()=>{const i=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await dw(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&ji(r.emulatorConfig.host)&&(g.credentials="include"),cw.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fk(r,e){return Yo(r,"POST","/v2/accounts:revokeToken",Lp(r,e))}/**
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
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=C_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Mk(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new bo;return i&&(we(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function wi(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new kf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await pl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dk(this,e)}reload(){return bk(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Dc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(Ts(this.auth));const e=await this.getIdToken();return await pl(this,xk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,oe=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ee=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ne,emailVerified:le,isAnonymous:xe,providerData:Te,stsTokenManager:x}=t;we(ne&&x,e,"internal-error");const A=bo.fromJSON(this.name,x);we(typeof ne=="string",e,"internal-error"),wi(T,e.name),wi(S,e.name),we(typeof le=="boolean",e,"internal-error"),we(typeof xe=="boolean",e,"internal-error"),wi(F,e.name),wi($,e.name),wi(H,e.name),wi(B,e.name),wi(oe,e.name),wi(ee,e.name);const k=new Jn({uid:ne,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:xe,photoURL:$,phoneNumber:F,tenantId:H,stsTokenManager:A,createdAt:oe,lastLoginAt:ee});return Te&&Array.isArray(Te)&&(k.providerData=Te.map(N=>Object.assign({},N))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new bo;o.updateFromServerResponse(t);const l=new Jn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Dc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?fw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new bo;f.updateFromIdToken(i);const g=new Jn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new kf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,_),g}}/**
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
 */const P_=new Map;function zr(r){Kr(r instanceof Function,"Expected a class definition");let e=P_.get(r);return e?(Kr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,P_.set(r,e),e)}/**
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
 */class pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pw.type="NONE";const N_=pw;/**
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
 */function dc(r,e,t){return`firebase:${r}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=dc(this.userKey,o.apiKey,l),this.fullPersistenceKey=dc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xc(this.auth,{idToken:e}).catch(()=>{});return t?Jn._fromGetAccountInfoResponse(this.auth,t,e):null}return Jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo(zr(N_),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||zr(N_);const h=dc(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const S=await xc(e,{idToken:E}).catch(()=>{});if(!S)break;T=await Jn._fromGetAccountInfoResponse(e,S,E)}else T=Jn._fromJSON(e,E);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Lo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Lo(l,e,i))}}/**
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
 */function x_(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(ww(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function mw(r=Wt()){return/firefox\//i.test(r)}function gw(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(r=Wt()){return/crios\//i.test(r)}function _w(r=Wt()){return/iemobile/i.test(r)}function vw(r=Wt()){return/android/i.test(r)}function Ew(r=Wt()){return/blackberry/i.test(r)}function ww(r=Wt()){return/webos/i.test(r)}function Fp(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Uk(r=Wt()){var e;return Fp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jk(){return DT()&&document.documentMode===10}function Tw(r=Wt()){return Fp(r)||vw(r)||ww(r)||Ew(r)||/windows phone/i.test(r)||_w(r)}/**
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
 */function Iw(r,e=[]){let t;switch(r){case"Browser":t=x_(Wt());break;case"Worker":t=`${x_(Wt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${i}`}/**
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
 */class Bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function zk(r,e={}){return Yo(r,"GET","/v2/passwordPolicy",Lp(r,e))}/**
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
 */const $k=6;class Hk{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:$k,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class qk{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D_(this),this.idTokenSubscription=new D_(this),this.beforeStateQueue=new Bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xc(this,{idToken:e}),i=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ak()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(Ts(this));const t=e?at(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(Ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(Ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zk(this),t=new Hk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Fk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Tk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Up(r){return at(r)}class D_{constructor(e){this.auth=e,this.observer=null,this.addObserver=jT(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wk(r){jp=r}function Gk(r){return jp.loadJS(r)}function Kk(){return jp.gapiScript}function Qk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Xk(r,e){const t=Fc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Is(l,e??{}))return o;Gr(o,"already-initialized")}return t.initialize({options:e})}function Yk(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(zr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function Jk(r,e,t){const i=Up(r);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Sw(e),{host:h,port:f}=Zk(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(Is(_,i.config.emulator)&&Is(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,ji(h)?(Vf(`${l}//${h}${g}`),bf("Auth",!0)):eC()}function Sw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Zk(r){const e=Sw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:O_(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:O_(h)}}}function O_(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Aw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}/**
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
 */async function Mo(r,e){return Pk(r,"POST","/v1/accounts:signInWithIdp",Lp(r,e))}/**
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
 */const tC="http://localhost";class Cs extends Aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Op(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Cs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Mo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:tC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yl(t)}return e}}/**
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
 */class Rw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xl extends Rw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends xl{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Si extends xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class Ai extends xl{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
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
 */class Ri extends xl{constructor(){super("twitter.com")}static credential(e,t){return Cs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ri.credential(t,i)}catch{return null}}}Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";/**
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
 */class Ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Jn._fromIdTokenResponse(e,i,o),h=V_(i);return new Ho({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=V_(i);return new Ho({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function V_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Oc extends Tr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Oc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Oc(e,t,i,o)}}function kw(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Oc._fromErrorAndOperation(r,l,e,i):l})}async function nC(r,e,t=!1){const i=await pl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ho._forOperation(r,"link",i)}/**
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
 */async function rC(r,e,t=!1){const{auth:i}=r;if(Yn(i.app))return Promise.reject(Ts(i));const o="reauthenticate";try{const l=await pl(r,kw(i,o,e,r),t);we(l.idToken,i,"internal-error");const h=Mp(l.idToken);we(h,i,"internal-error");const{sub:f}=h;return we(r.uid===f,i,"user-mismatch"),Ho._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Gr(i,"user-mismatch"),l}}/**
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
 */async function iC(r,e,t=!1){if(Yn(r.app))return Promise.reject(Ts(r));const i="signIn",o=await kw(r,i,e),l=await Ho._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function sC(r,e,t,i){return at(r).onIdTokenChanged(e,t,i)}function oC(r,e,t){return at(r).beforeAuthStateChanged(e,t)}const Vc="__sak";/**
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
 */class Cw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aC=1e3,lC=10;class Pw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);jk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,lC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pw.type="LOCAL";const uC=Pw;/**
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
 */class Nw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nw.type="SESSION";const xw=Nw;/**
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
 */function cC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new ih(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await cC(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
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
 */function Bp(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Bp("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function vr(){return window}function dC(r){vr().location.href=r}/**
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
 */function Dw(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function fC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function mC(){return Dw()?self:null}/**
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
 */const Ow="firebaseLocalStorageDb",gC=1,bc="firebaseLocalStorage",Vw="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sh(r,e){return r.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function yC(){const r=indexedDB.deleteDatabase(Ow);return new Dl(r).toPromise()}function Cf(){const r=indexedDB.open(Ow,gC);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(bc,{keyPath:Vw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(bc)?e(i):(i.close(),await yC(),e(await Cf()))})})}async function b_(r,e,t){const i=sh(r,!0).put({[Vw]:e,value:t});return new Dl(i).toPromise()}async function _C(r,e){const t=sh(r,!1).get(e),i=await new Dl(t).toPromise();return i===void 0?null:i.value}function L_(r,e){const t=sh(r,!0).delete(e);return new Dl(t).toPromise()}const vC=800,EC=3;class bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>EC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await b_(e,Vc,"1"),await L_(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>b_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>_C(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>L_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=sh(o,!1).getAll();return new Dl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bw.type="LOCAL";const wC=bw;new Nl(3e4,6e4);/**
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
 */function TC(r,e){return e?zr(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class zp extends Aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IC(r){return iC(r.auth,new zp(r),r.bypassAuthState)}function SC(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),rC(t,new zp(r),r.bypassAuthState)}async function AC(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),nC(t,new zp(r),r.bypassAuthState)}/**
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
 */class Lw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return AC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:Gr(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RC=new Nl(2e3,1e4);class Oo extends Lw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RC.get())};e()}}Oo.currentPopupAction=null;/**
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
 */const kC="pendingRedirect",fc=new Map;class CC extends Lw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const i=await PC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PC(r,e){const t=DC(e),i=xC(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function NC(r,e){fc.set(r._key(),e)}function xC(r){return zr(r._redirectPersistence)}function DC(r){return dc(kC,r.config.apiKey,r.name)}async function OC(r,e,t=!1){if(Yn(r.app))return Promise.reject(Ts(r));const i=Up(r),o=TC(i,e),h=await new CC(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const VC=600*1e3;class bC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Mw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(_r(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VC&&this.cachedEventUids.clear(),this.cachedEventUids.has(M_(e))}saveEventToCache(e){this.cachedEventUids.add(M_(e)),this.lastProcessedEventTime=Date.now()}}function M_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Mw({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function LC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(r);default:return!1}}/**
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
 */async function MC(r,e={}){return Yo(r,"GET","/v1/projects",e)}/**
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
 */const FC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UC=/^https?/;async function jC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await MC(r);for(const t of e)try{if(BC(t))return}catch{}Gr(r,"unauthorized-domain")}function BC(r){const e=Rf(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!UC.test(t))return!1;if(FC.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const zC=new Nl(3e4,6e4);function F_(){const r=vr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function $C(r){return new Promise((e,t)=>{var i,o,l;function h(){F_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{F_(),t(_r(r,"network-request-failed"))},timeout:zC.get()})}if(!((o=(i=vr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=vr().gapi)===null||l===void 0)&&l.load)h();else{const f=Qk("iframefcb");return vr()[f]=()=>{gapi.load?h():t(_r(r,"network-request-failed"))},Gk(`${Kk()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw pc=null,e})}let pc=null;function HC(r){return pc=pc||$C(r),pc}/**
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
 */const qC=new Nl(5e3,15e3),WC="__/auth/iframe",GC="emulator/auth/iframe",KC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XC(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?bp(e,GC):`https://${r.config.authDomain}/${WC}`,i={apiKey:e.apiKey,appName:r.name,v:Ns},o=QC.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${yl(i).slice(1)}`}async function YC(r){const e=await HC(r),t=vr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:XC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=_r(r,"network-request-failed"),f=vr().setTimeout(()=>{l(h)},qC.get());function g(){vr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const JC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,eP=600,tP="_blank",nP="http://localhost";class U_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rP(r,e,t,i=ZC,o=eP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},JC),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Wt().toLowerCase();t&&(f=yw(_)?tP:t),mw(_)&&(e=e||nP,g.scrollbars="yes");const E=Object.entries(g).reduce((S,[F,$])=>`${S}${F}=${$},`,"");if(Uk(_)&&f!=="_self")return iP(e||"",f),new U_(null);const T=window.open(e||"",f,E);we(T,r,"popup-blocked");try{T.focus()}catch{}return new U_(T)}function iP(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const sP="__/auth/handler",oP="emulator/auth/handler",aP=encodeURIComponent("fac");async function j_(r,e,t,i,o,l){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Ns,eventId:o};if(e instanceof Rw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",UT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof xl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${aP}=${encodeURIComponent(g)}`:"";return`${lP(r)}?${yl(f).slice(1)}${_}`}function lP({config:r}){return r.emulator?bp(r,oP):`https://${r.authDomain}/${sP}`}/**
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
 */const Zd="webStorageSupport";class uP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=OC,this._overrideRedirectResult=NC}async _openPopup(e,t,i,o){var l;Kr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await j_(e,t,i,Rf(),o);return rP(e,h,Bp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await j_(e,t,i,Rf(),o);return dC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Kr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await YC(e),i=new bC(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zd,{type:Zd},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Zd];h!==void 0&&t(!!h),Gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tw()||gw()||Fp()}}const cP=uP;var B_="@firebase/auth",z_="1.10.8";/**
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
 */class hP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dP(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fP(r){Ss(new Di("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(r)},_=new qk(i,o,l,g);return Yk(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ss(new Di("auth-internal",e=>{const t=Up(e.getProvider("auth").getImmediate());return(i=>new hP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(B_,z_,dP(r)),fr(B_,z_,"esm2017")}/**
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
 */const pP=300,mP=sv("authIdTokenMaxAge")||pP;let $_=null;const gP=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>mP)return;const o=t?.token;$_!==o&&($_=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yP(r=Ff()){const e=Fc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Xk(r,{popupRedirectResolver:cP,persistence:[wC,uC,xw]}),i=sv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=gP(l.toString());oC(t,h,()=>h(t.currentUser)),sC(t,f=>h(f))}}const o=nv("auth");return o&&Jk(t,`http://${o}`),t}function _P(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Wk({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=_r("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",_P().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fP("Browser");const vP={apiKey:"AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A",authDomain:"test-f80e2.firebaseapp.com",projectId:"test-f80e2",storageBucket:"test-f80e2.firebasestorage.app",messagingSenderId:"998655559449",appId:"1:998655559449:web:7cf8fe76af797e7904e788"},$p=uv(vP);yP($p);const $e=q1($p),EP=mk($p),It={CAREGIVERS:"caregivers",PATIENTS:"patients",REMINDERS:"reminders",LINKING_CODES:"linkingCodes"},wP=[{id:"c1",email:"maria@careconnect.example",name:"Maria"},{id:"c2",email:"john@careconnect.example",name:"John"},{id:"c3",email:"sarah@careconnect.example",name:"Sarah"}],TP=[{id:"p1",name:"James",caregiverId:"c1"},{id:"p2",name:"Eleanor",caregiverId:"c1"},{id:"p3",name:"Robert",caregiverId:"c2"},{id:"p4",name:"Margaret",caregiverId:"c3"}],IP=[{id:"r1",patientId:"p1",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r2",patientId:"p1",title:"Drink water",time:"10:00 AM",done:!1},{id:"r3",patientId:"p1",title:"Lunch",time:"12:30 PM",done:!1},{id:"r4",patientId:"p1",title:"Afternoon walk",time:"3:00 PM",done:!1},{id:"r5",patientId:"p2",title:"Take morning medication",time:"8:30 AM",done:!1},{id:"r6",patientId:"p2",title:"Call family",time:"2:00 PM",done:!1},{id:"r7",patientId:"p3",title:"Take morning medication",time:"9:00 AM",done:!1},{id:"r8",patientId:"p4",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r9",patientId:"p4",title:"Rest",time:"1:00 PM",done:!1}],SP=[{code:"JAMES01",patientId:"p1",patientName:"James"},{code:"ELEANOR",patientId:"p2",patientName:"Eleanor"},{code:"ROBERT1",patientId:"p3",patientName:"Robert"},{code:"MARGARET",patientId:"p4",patientName:"Margaret"}];async function AP(){const r=bn($e,It.CAREGIVERS);if(!(await Os(r)).empty)return;const t=kp($e);for(const l of wP)t.set(Zt($e,It.CAREGIVERS,l.id),{email:l.email,name:l.name});for(const l of TP)t.set(Zt($e,It.PATIENTS,l.id),{name:l.name,caregiverId:l.caregiverId});for(const l of IP)t.set(Zt($e,It.REMINDERS,l.id),{patientId:l.patientId,title:l.title,time:l.time,done:l.done});for(const l of SP){const h=l.code.toUpperCase();t.set(Zt($e,It.LINKING_CODES,h),{patientId:l.patientId,patientName:l.patientName})}await t.commit(),await kP();const{seedRoomsIfEmpty:i,seedHubConfigIfEmpty:o}=await mT(async()=>{const{seedRoomsIfEmpty:l,seedHubConfigIfEmpty:h}=await Promise.resolve().then(()=>aN);return{seedRoomsIfEmpty:l,seedHubConfigIfEmpty:h}},void 0);await i(),await o()}const RP=[{patientId:"p1",id:"loc1",room:"Living room",time:Date.now()-36e5},{patientId:"p1",id:"loc2",room:"Kitchen",time:Date.now()-72e5},{patientId:"p2",id:"loc1",room:"Bedroom",time:Date.now()-18e5}];async function kP(){const r=kp($e);let e=!1;for(const{patientId:t,id:i,room:o,time:l}of RP){const h=Zt($e,It.PATIENTS,t,"location",i);(await Cl(h)).exists()||(r.set(h,{room:o,time:l}),e=!0)}e&&await r.commit()}async function Fw(){return(await Os(bn($e,It.CAREGIVERS))).docs.map(e=>({id:e.id,...e.data()}))}async function Hp(r){return(await Fw()).find(t=>t.email===r)}async function Uw(r){const e=await Hp(r);if(!e)return[];const t=kl(bn($e,It.PATIENTS),Ep("caregiverId","==",e.id));return(await Os(t)).docs.map(o=>({id:o.id,...o.data()}))}async function CP(r){const e=kl(bn($e,It.REMINDERS),Ep("patientId","==",r));return(await Os(e)).docs.map(o=>({id:o.id,...o.data()})).sort((o,l)=>o.time.localeCompare(l.time))}async function PP(r){const e=r.trim().toUpperCase();if(!e)return;const t=Zt($e,It.LINKING_CODES,e),i=await Cl(t);if(!i.exists())return;const o=i.data();return{code:e,patientId:o.patientId,patientName:o.patientName}}async function NP(r){if(r.length===0)return[];const e=await Os(bn($e,It.LINKING_CODES)),t=new Set(r);return e.docs.map(i=>({code:i.id,...i.data()})).filter(i=>t.has(i.patientId))}function xP(r,e,t){const i=kl(bn($e,It.REMINDERS),Ep("patientId","==",r));return rh(i,o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));e(l.sort((h,f)=>h.time.localeCompare(f.time)))},o=>t?.(o))}async function DP(){return(await Os(bn($e,It.LINKING_CODES))).docs.map(e=>({code:e.id,...e.data()}))}async function OP(r){await nR(Zt($e,It.REMINDERS,r))}async function VP(r){const e=Zt($e,It.REMINDERS,r);await zE(e,{done:!0})}async function bP(r,e,t){const i=`reminders/${r}/${e}/${t.name}`,o=pk(EP,i);return await dk(o,t),fk(o)}async function LP(r,e){const t=bn($e,It.REMINDERS);return(await rR(t,{patientId:r,title:e.title,time:e.time,done:!1,...e.photoUrl&&{photoUrl:e.photoUrl},...e.audioUrl&&{audioUrl:e.audioUrl}})).id}async function MP(r,e){const t=Zt($e,It.REMINDERS,r);await zE(t,{photoUrl:e})}function FP(r,e,t){const i=bn($e,It.PATIENTS,r,"location"),o=kl(i,jE("time","desc"));return rh(o,l=>{const h=l.docs.map(f=>{const g=f.data(),_=typeof g.room=="string"?g.room:"Unknown",E=g.time;let T=NaN;return typeof E=="number"?T=E:typeof E=="string"&&E.trim()?T=Number(E):E&&typeof E.toMillis=="function"&&(T=E.toMillis()),{id:f.id,room:_,time:T}}).filter(f=>Number.isFinite(f.time));e(h)},l=>t?.(l))}const Pf="careconnect_caregiver_email",Nf="careconnect_linked_patient_id",xf="careconnect_linked_patient_name";function oh(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function H_(){return oh()?.getItem(Pf)??null}function q_(r){const e=oh();e&&(r?e.setItem(Pf,r):e.removeItem(Pf))}function W_(){const r=oh();if(!r)return null;const e=r.getItem(Nf);return e?{id:e,name:r.getItem(xf)??"Patient"}:null}function G_(r,e){const t=oh();t&&(r?(t.setItem(Nf,r),e&&t.setItem(xf,e)):(t.removeItem(Nf),t.removeItem(xf)))}function Vn({className:r=""}){return I.jsx("div",{className:`animate-pulse rounded bg-gray-200 ${r}`,"aria-hidden":!0})}function UP({count:r=4}){return I.jsx("ul",{className:"stack",children:Array.from({length:r}).map((e,t)=>I.jsxs("li",{className:"card flex items-center gap-3",children:[I.jsx(Vn,{className:"w-12 h-12 flex-shrink-0"}),I.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[I.jsx(Vn,{className:"h-4 max-w-[12rem]"}),I.jsx(Vn,{className:"h-3 max-w-[6rem]"})]})]},t))})}function jw({count:r=3}){return I.jsx("ul",{className:"stack",children:Array.from({length:r}).map((e,t)=>I.jsx("li",{children:I.jsx(Vn,{className:"h-11 w-full"})},t))})}function jP({count:r=3}){return I.jsx("div",{className:"stack",children:Array.from({length:r}).map((e,t)=>I.jsx(Vn,{className:"h-11 w-full"},t))})}function BP(){return I.jsxs("div",{className:"card task-card",children:[I.jsx(Vn,{className:"h-5 max-w-[75%] mx-auto mb-3"}),I.jsx(Vn,{className:"h-4 max-w-[40%] mx-auto mb-4"}),I.jsx(Vn,{className:"h-11 w-full"})]})}function zP(){return I.jsxs("div",{className:"space-y-2 mt-2",children:[I.jsx(Vn,{className:"h-4 w-full"}),I.jsx(Vn,{className:"h-4 w-2/3"})]})}function $P({count:r=4}){return I.jsx("ul",{className:"stack",children:Array.from({length:r}).map((e,t)=>I.jsxs("li",{className:"card space-y-2",children:[I.jsx(Vn,{className:"h-4 w-32"}),I.jsx(Vn,{className:"h-3 w-48"})]},t))})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qP=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),K_=r=>{const e=qP(r);return e.charAt(0).toUpperCase()+e.slice(1)},Bw=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=he.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>he.createElement("svg",{ref:g,...WP,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:Bw("lucide",o),...f},[...h.map(([_,E])=>he.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=(r,e)=>{const t=he.forwardRef(({className:i,...o},l)=>he.createElement(GP,{ref:l,iconNode:e,className:Bw(`lucide-${HP(K_(r))}`,`lucide-${r}`,i),...o}));return t.displayName=K_(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],QP=qp("arrow-left",KP);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],YP=qp("clock",XP);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],ZP=qp("trash-2",JP),eN={sm:32,md:40,lg:56};function Df({size:r="md",className:e=""}){const t=eN[r];return I.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,"aria-hidden":!0,children:[I.jsx("rect",{width:"48",height:"48",rx:"12",fill:"currentColor"}),I.jsx("circle",{cx:"17",cy:"24",r:"5.5",stroke:"#fff",strokeWidth:"2"}),I.jsx("circle",{cx:"31",cy:"24",r:"5.5",stroke:"#fff",strokeWidth:"2"}),I.jsx("path",{d:"M22.5 24h3",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round"}),I.jsx("circle",{cx:"24",cy:"34",r:"2.5",fill:"#fff"})]})}function zw({size:r="md",showName:e=!0,layout:t="stack",className:i=""}){const o=t==="row"?"logo-brand logo-brand--row":"logo-brand";return I.jsxs("div",{className:`${o} ${i}`.trim(),"aria-label":"CareConnect",children:[I.jsx(Df,{size:r}),e&&I.jsx("span",{className:"logo-brand-name",children:"CareConnect"})]})}function Jo({children:r,className:e=""}){return I.jsx("div",{className:`min-h-screen app-page ${e}`.trim(),children:I.jsx("div",{className:"page-shell",children:r})})}function Ol({onClick:r,label:e="Back"}){return I.jsxs("button",{type:"button",onClick:r,className:"btn-text",children:[I.jsx(QP,{className:"w-4 h-4","aria-hidden":!0}),e]})}function Vs({title:r,subtitle:e,showLogo:t=!1}){return I.jsxs("header",{className:"page-header",children:[t?I.jsx(zw,{size:"sm",layout:"row",className:"mb-4",showName:!1}):null,I.jsx("h1",{className:"page-title",children:r}),e?I.jsx("p",{className:"page-subtitle",children:e}):null]})}function xt({variant:r="primary",className:e="",type:t="button",children:i,...o}){const l=r==="secondary"?"btn-secondary":r==="ghost"?"btn-ghost":r==="danger"?"btn-danger":"btn-primary";return I.jsx("button",{type:t,className:`btn ${l} ${e}`.trim(),...o,children:i})}function Jt({children:r,className:e=""}){return I.jsx("div",{className:`card ${e}`.trim(),children:r})}function Fo({label:r,children:e}){return I.jsxs("label",{className:"field",children:[I.jsx("span",{className:"field-label",children:r}),e]})}function Lc({className:r="",...e}){return I.jsx("input",{className:`input ${r}`.trim(),...e})}function Ps({message:r}){return I.jsx("p",{className:"banner-error",role:"alert",children:r})}function en({children:r}){return I.jsx("p",{className:"section-label",children:r})}function tN({onLogin:r,onBack:e}){const[t,i]=he.useState(""),[o,l]=he.useState([]),[h,f]=he.useState(!0),[g,_]=he.useState(null);he.useEffect(()=>{Fw().then(l).catch(T=>_(T?.message??"Failed to load")).finally(()=>f(!1))},[]);const E=async T=>{T.preventDefault();const S=t.trim();if(S){_(null);try{const F=await Hp(S);if(!F){_("Email not found. Pick a caregiver below or use a demo email.");return}r(F.email)}catch(F){_(F?.message??"Login failed")}}};return I.jsxs(Jo,{children:[I.jsx(Ol,{onClick:e}),I.jsx(Vs,{showLogo:!0,title:"Caregiver login",subtitle:"Select a demo account or sign in with email."}),g&&I.jsx(Ps,{message:g}),h?I.jsx(jP,{count:3}):I.jsx("div",{className:"stack mb-6",children:o.map(T=>I.jsxs("button",{type:"button",onClick:()=>r(T.email),className:"list-row",children:[I.jsx("span",{className:"font-medium",children:T.name}),I.jsxs("span",{className:"text-sm text-muted",children:[" — ",T.email]})]},T.id))}),I.jsx(Jt,{children:I.jsxs("form",{onSubmit:E,className:"stack",children:[I.jsx(Fo,{label:"Email",children:I.jsx(Lc,{id:"email",type:"email",value:t,onChange:T=>i(T.target.value),placeholder:"your@email.com",autoComplete:"email"})}),I.jsx(xt,{type:"submit",className:"w-full",children:"Log in"})]})})]})}function nN({caregiverEmail:r,onSelectPatient:e,onLogout:t,onSettings:i}){const[o,l]=he.useState([]),[h,f]=he.useState(!0),[g,_]=he.useState(null);return he.useEffect(()=>{Uw(r).then(l).catch(E=>_(E?.message??"Failed to load")).finally(()=>f(!1))},[r]),I.jsxs(Jo,{children:[I.jsxs("div",{className:"flex gap-2 mb-6",children:[I.jsx(xt,{variant:"secondary",className:"flex-1",onClick:i,children:"Settings"}),I.jsx(xt,{variant:"ghost",className:"flex-1",onClick:t,children:"Log out"})]}),I.jsx(Vs,{title:"Choose patient",subtitle:`Signed in as ${r}`}),g&&I.jsx(Ps,{message:g}),I.jsx(en,{children:"Your patients"}),h?I.jsx(jw,{count:3}):o.length===0?I.jsx("p",{className:"text-sm text-muted",children:"No patients yet. Share a linking code from Settings."}):I.jsx("ul",{className:"stack",children:o.map(E=>I.jsx("li",{children:I.jsx("button",{type:"button",onClick:()=>e(E.id,E.name),className:"list-row",children:E.name})},E.id))})]})}const ml="rooms",ah="hubConfig",lh="default",Wp=[{roomId:1,name:"Bathroom",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:2,name:"Kitchen",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:3,name:"Bedroom",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:4,name:"Room 4",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:5,name:"Room 5",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:6,name:"Room 6",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0},{roomId:7,name:"Room 7",occupancy:0,lastEntry:0,lastExit:0,lastVisitDuration:0}];function $w(r){return`room_${r}`}function Do(r){if(typeof r=="number"&&Number.isFinite(r))return r;if(typeof r=="string"&&r.trim()){const e=Number(r);if(Number.isFinite(e))return e}return 0}function Hw(r){const e=Do(r);return e<=0||e<1e9?Date.now():e<1e12?e*1e3:e}async function rN(){const r=bn($e,ml);if(!(await Os(r)).empty)return;const t=kp($e);for(const i of Wp){const o=$w(i.roomId);t.set(Zt($e,ml,o),i)}await t.commit()}async function iN(){const r=Zt($e,ah,lh);(await Cl(r)).exists()||await Rp(r,{patientId:"p1",enabled:!0})}async function Gp(){const r=await Cl(Zt($e,ah,lh));if(!r.exists())return null;const e=r.data();return e.enabled===!1?null:typeof e.patientId=="string"?e.patientId:null}async function qw(r){await Rp(Zt($e,ah,lh),{patientId:r??"",enabled:!!r})}function Ww(r,e){return rh(bn($e,ml),t=>{const i=t.docs.map(o=>{const l=o.data();return{id:o.id,roomId:Do(l.roomId),name:typeof l.name=="string"?l.name:o.id,occupancy:Do(l.occupancy),lastEntry:Do(l.lastEntry),lastExit:Do(l.lastExit),lastVisitDuration:Do(l.lastVisitDuration)}}).sort((o,l)=>o.roomId-l.roomId);r(i)},t=>e?.(t))}async function sN(r,e,t,i){if(i.type!=="ENTRY")return;const o=`ble_r${e}_${t}`,l=Zt($e,It.PATIENTS,r,"location",o);if((await Cl(l)).exists())return;const f=typeof i.roomName=="string"&&i.roomName?i.roomName:Wp.find(g=>g.roomId===e)?.name??`Room ${e}`;await Rp(l,{room:f,time:Hw(i.timestamp),source:"esp32"})}function oN(r,e){const t=[],i=new Set;for(const o of Wp){const l=o.roomId,h=bn($e,ml,$w(l),"events"),f=kl(h,jE("timestamp","desc"),Z1(10));t.push(rh(f,g=>{for(const _ of g.docChanges()){if(_.type!=="added"&&_.type!=="modified")continue;const E=`${l}_${_.doc.id}`;i.has(E)||(i.add(E),sN(r,l,_.doc.id,_.doc.data()).catch(T=>e?.(T instanceof Error?T:new Error(String(T)))))}},g=>e?.(g)))}return()=>t.forEach(o=>o())}function Gw(r,e){let t=null,i=!1;return Gp().then(o=>{i||o!==r||(t=oN(r,e))}).catch(o=>e?.(o instanceof Error?o:new Error(String(o)))),()=>{i=!0,t?.()}}const aN=Object.freeze(Object.defineProperty({__proto__:null,HUB_CONFIG_COLLECTION:ah,HUB_CONFIG_DOC:lh,ROOM_COLLECTION:ml,getHubPatientId:Gp,normalizeHubTimestamp:Hw,seedHubConfigIfEmpty:iN,seedRoomsIfEmpty:rN,setHubPatientId:qw,startHubLocationSync:Gw,subscribeRoomStates:Ww},Symbol.toStringTag,{value:"Module"}));function lN({url:r,alt:e,className:t}){return I.jsx("img",{src:r,alt:e,className:t??"w-12 h-12 object-cover rounded-md border border-gray-200 flex-shrink-0"})}function Q_(r){if(!Number.isFinite(r))return"Unknown time";const e=r>1e12?r:r*1e3;return new Date(e).toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}function uN({patientId:r,patientName:e,onLogout:t,onBack:i}){const[o,l]=he.useState([]),[h,f]=he.useState(!0),[g,_]=he.useState(null),[E,T]=he.useState(!1),[S,F]=he.useState(""),[$,H]=he.useState(""),[B,oe]=he.useState(null),[ee,ne]=he.useState(!1),le=()=>{f(!0),CP(r).then(l).catch(_e=>_(_e?.message??"Failed to load")).finally(()=>f(!1))};he.useEffect(()=>{le()},[r]);const[xe,Te]=he.useState([]),[x,A]=he.useState(!0),[k,N]=he.useState(null),[O,b]=he.useState([]);he.useEffect(()=>{A(!0),N(null);const _e=FP(r,J=>{Te(J),A(!1)},J=>{N(J.message??"Failed to load location history"),A(!1)}),He=Gw(r,J=>{N(J.message??"Hub sync failed")}),Me=Ww(b);return()=>{_e(),He(),Me()}},[r]);const C=async _e=>{if(window.confirm("Delete this reminder?")){_(null);try{await OP(_e),le()}catch(He){_(He?.message??"Failed to delete reminder")}}},tt=async _e=>{if(_e.preventDefault(),!(!S.trim()||!$.trim())){ne(!0),_(null);try{const He=await LP(r,{title:S.trim(),time:$.trim()});if(B){const Me=await bP(r,He,B);await MP(He,Me)}F(""),H(""),oe(null),T(!1),le()}catch(He){_(He?.message??"Failed to add reminder")}finally{ne(!1)}}};return I.jsxs(Jo,{children:[I.jsx(Ol,{onClick:i,label:"Patients"}),I.jsx("div",{className:"flex gap-2 mb-4",children:I.jsx(xt,{variant:"ghost",className:"flex-1",onClick:t,children:"Log out"})}),I.jsx(Vs,{title:e,subtitle:"Manage reminders and view location history."}),I.jsx(Jt,{className:"mb-6",children:E?I.jsxs("form",{onSubmit:tt,className:"stack",children:[I.jsx(Fo,{label:"Title",children:I.jsx(Lc,{value:S,onChange:_e=>F(_e.target.value),placeholder:"Take morning medication",required:!0})}),I.jsx(Fo,{label:"Time",children:I.jsx(Lc,{value:$,onChange:_e=>H(_e.target.value),placeholder:"8:00 AM",required:!0})}),I.jsxs(Fo,{label:"Photo (optional)",children:[I.jsx("input",{type:"file",accept:"image/*",onChange:_e=>oe(_e.target.files?.[0]??null),className:"text-sm"}),B&&I.jsx("p",{className:"text-sm text-muted mt-1",children:B.name})]}),I.jsxs("div",{className:"flex gap-2",children:[I.jsx(xt,{type:"submit",className:"flex-1",disabled:ee,children:ee?"Adding…":"Save"}),I.jsx(xt,{type:"button",variant:"secondary",onClick:()=>{T(!1),F(""),H(""),oe(null)},children:"Cancel"})]})]}):I.jsx(xt,{className:"w-full",onClick:()=>T(!0),children:"Add reminder"})}),I.jsx(en,{children:"Reminders"}),g&&I.jsx(Ps,{message:g}),h?I.jsx(UP,{count:4}):o.length===0?I.jsx("p",{className:"text-sm text-muted",children:"No reminders yet."}):I.jsx("ul",{className:"stack mb-6",children:o.map(_e=>I.jsxs("li",{className:"card flex items-start gap-3",children:[_e.photoUrl?I.jsx(lN,{url:_e.photoUrl,alt:""}):null,I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsx("p",{className:"font-medium",children:_e.title}),I.jsxs("p",{className:"text-sm text-muted flex items-center gap-1 mt-0.5",children:[I.jsx(YP,{className:"w-3.5 h-3.5","aria-hidden":!0}),_e.time,_e.done&&I.jsx("span",{className:"text-green-700",children:" · Done"})]})]}),I.jsx("button",{type:"button",onClick:()=>C(_e.id),className:"btn-text",style:{marginBottom:0},"aria-label":`Delete ${_e.title}`,children:I.jsx(ZP,{className:"w-4 h-4","aria-hidden":!0})})]},_e.id))}),O.length>0&&I.jsxs(I.Fragment,{children:[I.jsx(en,{children:"BLE hub — live rooms"}),I.jsx("ul",{className:"stack mb-6 text-sm",children:O.map(_e=>I.jsxs("li",{className:"card flex justify-between gap-2",children:[I.jsx("span",{className:"font-medium",children:_e.name}),I.jsx("span",{className:"text-muted",children:_e.lastEntry>0?`Last entry ${Q_(_e.lastEntry)}`:"No entry yet"})]},_e.id))})]}),I.jsx(en,{children:"Location history"}),k&&I.jsx(Ps,{message:k}),x?I.jsx($P,{count:4}):xe.length===0?I.jsx("p",{className:"text-sm text-muted",children:"No location events yet."}):I.jsx("ul",{className:"stack",children:xe.map((_e,He)=>I.jsxs("li",{className:`card ${He===0?"font-medium":""}`,children:[I.jsx("p",{children:He===0?`Latest: ${_e.room}`:_e.room}),I.jsx("p",{className:"text-sm text-muted mt-0.5",children:Q_(_e.time)})]},_e.id))})]})}function cN({caregiverEmail:r,onBack:e,onSelectPatient:t}){const[i,o]=he.useState(null),[l,h]=he.useState([]),[f,g]=he.useState([]),[_,E]=he.useState(!0),[T,S]=he.useState(null),[F,$]=he.useState("");return he.useEffect(()=>{let H=!1;return E(!0),S(null),(async()=>{try{const B=await Hp(r);if(H)return;o(B?.name??null);const oe=await Uw(r);if(H)return;h(oe);const ee=await NP(oe.map(le=>le.id));if(H)return;g(ee);const ne=await Gp();if(H)return;$(ne??"")}catch(B){H||S(B?.message??"Failed to load settings")}finally{H||E(!1)}})(),()=>{H=!0}},[r]),I.jsxs(Jo,{children:[I.jsx(Ol,{onClick:e}),I.jsx(Vs,{title:"Settings",subtitle:`${i??"Caregiver"} · ${r}`}),T&&I.jsx(Ps,{message:T}),I.jsx(en,{children:"BLE hub"}),I.jsxs(Jt,{className:"mb-4",children:[I.jsx("p",{className:"text-sm text-muted mb-3",children:"ESP32 hub ENTRY events are copied into this patient's location history."}),_?I.jsx("p",{className:"text-sm text-muted",children:"Loading…"}):I.jsx(Fo,{label:"Tracked patient",children:I.jsxs("select",{className:"input",value:F,onChange:H=>{const B=H.target.value;$(B),qw(B||null)},children:[I.jsx("option",{value:"",children:"None"}),l.map(H=>I.jsx("option",{value:H.id,children:H.name},H.id))]})})]}),I.jsx(en,{children:"Reminders"}),I.jsx(Jt,{className:"mb-4",children:I.jsx("p",{className:"text-sm text-muted",children:"When a patient marks a reminder done, it updates automatically in Firestore."})}),I.jsx(en,{children:"Patients"}),_?I.jsx(jw,{count:3}):I.jsxs(I.Fragment,{children:[l.length===0?I.jsx("p",{className:"text-sm text-muted mb-4",children:"No patients assigned yet."}):I.jsx("ul",{className:"stack mb-4",children:l.map(H=>I.jsx("li",{children:I.jsx("button",{type:"button",onClick:()=>t(H.id,H.name),className:"list-row",children:H.name})},H.id))}),I.jsx(en,{children:"Linking codes"}),I.jsxs(Jt,{children:[I.jsx("p",{className:"text-sm text-muted mb-3",children:"Share a code so patients can link on the home screen."}),f.length===0?I.jsx("p",{className:"text-sm text-muted",children:"No codes found."}):I.jsx("ul",{className:"stack text-sm",children:f.map(H=>I.jsxs("li",{className:"flex items-center gap-2",children:[I.jsx("span",{className:"font-mono font-medium",children:H.code}),I.jsx("span",{className:"text-muted",children:"→"}),I.jsx("span",{children:H.patientName})]},H.code))})]})]})]})}const Kw="careconnect_patient_preferences",Qw="careconnect-preferences-change",ef={textSize:"standard",reminderSound:"chime",notificationsEnabled:!0,quietHoursEnabled:!0,quietHoursStart:"22:00",quietHoursEnd:"07:00"};function Xw(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function qo(){const r=Xw()?.getItem(Kw);if(!r)return{...ef};try{const e=JSON.parse(r);return{...ef,...e}}catch{return{...ef}}}function hN(r){const e={...qo(),...r};return Xw()?.setItem(Kw,JSON.stringify(e)),typeof window<"u"&&window.dispatchEvent(new Event(Qw)),Yw(e.textSize),e}function Yw(r){typeof document>"u"||(document.documentElement.dataset.patientTextSize=r)}function dN(){Yw(qo().textSize)}function X_(r){const[e,t]=r.split(":").map(Number);return!Number.isFinite(e)||!Number.isFinite(t)?0:e*60+t}function fN(r=new Date,e=qo()){if(!e.quietHoursEnabled)return!1;const t=X_(e.quietHoursStart),i=X_(e.quietHoursEnd),o=r.getHours()*60+r.getMinutes();return t===i?!1:t<i?o>=t&&o<i:o>=t||o<i}function pN(r=qo()){return!(!r.notificationsEnabled||r.reminderSound==="none"||fN(void 0,r))}const Y_=Qw;function Jw(){const[r,e]=he.useState(()=>qo());he.useEffect(()=>{const i=()=>e(qo());return window.addEventListener(Y_,i),()=>window.removeEventListener(Y_,i)},[]);const t=he.useCallback(i=>{e(hN(i))},[]);return{prefs:r,update:t}}let tf=null;function Zw(){if(typeof window>"u")return null;if(!tf){const r=window.AudioContext||window.webkitAudioContext;if(!r)return null;tf=new r}return tf}function ic(r,e,t,i=.12){const o=Zw();if(!o)return;const l=o.createOscillator(),h=o.createGain();l.type="sine",l.frequency.value=r,h.gain.setValueAtTime(0,o.currentTime+e),h.gain.linearRampToValueAtTime(i,o.currentTime+e+.02),h.gain.exponentialRampToValueAtTime(.001,o.currentTime+e+t),l.connect(h),h.connect(o.destination),l.start(o.currentTime+e),l.stop(o.currentTime+e+t+.05)}async function e0(r){if(r==="none")return;const e=Zw();if(e)switch(e.state==="suspended"&&await e.resume(),r){case"chime":ic(523.25,0,.35),ic(659.25,.2,.4);break;case"bell":ic(440,0,.55,.1);break;case"soft":ic(329.63,0,.7,.08);break}}const mN=[{id:"chime",label:"Gentle chime"},{id:"bell",label:"Soft bell"},{id:"soft",label:"Low tone"},{id:"none",label:"Silent"}],gN="caregiverPhone",J_="+15551234567";function yN(r){return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}function _N(r){return r.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})}function vN({patientId:r,patientName:e,onSettings:t,onLinkAccount:i}){const[o,l]=he.useState(new Date),[h,f]=he.useState([]),[g,_]=he.useState(!!r),[E,T]=he.useState(null),{prefs:S}=Jw(),F=he.useRef(null);he.useEffect(()=>{const ee=setInterval(()=>l(new Date),1e3);return()=>clearInterval(ee)},[]),he.useEffect(()=>{if(!r){f([]),_(!1),T(null);return}_(!0),T(null);const ee=xP(r,ne=>{f(ne.filter(le=>!le.done)),_(!1)},ne=>{T(ne.message??"Could not load reminders"),_(!1)});return()=>ee()},[r]);const $=h[0]??null;he.useEffect(()=>{if(!$||g)return;const ee=F.current;F.current=$.id,ee&&ee!==$.id&&pN(S)&&e0(S.reminderSound)},[$?.id,g,S]);const H=async()=>{if($)try{await VP($.id),f(ee=>ee.filter(ne=>ne.id!==$.id))}catch{T("Could not mark reminder as done. Try again.")}},oe=`tel:${(typeof localStorage<"u"&&localStorage.getItem(gN)||J_).replace(/\s/g,"")}`;return r?I.jsxs("div",{className:"patient-screen","data-text-size":S.textSize,children:[I.jsx("header",{className:"patient-header",children:I.jsxs("div",{className:"flex items-start justify-between gap-3",children:[I.jsxs("div",{className:"flex items-start gap-3",children:[I.jsx(Df,{size:"sm",className:"flex-shrink-0 mt-0.5"}),I.jsxs("div",{children:[I.jsx("p",{className:"patient-time",children:yN(o)}),I.jsx("p",{className:"patient-date",children:_N(o)}),e&&I.jsxs("p",{className:"patient-greeting",children:["Hi, ",e]})]})]}),I.jsx(xt,{variant:"ghost",onClick:t,children:"Settings"})]})}),I.jsxs("main",{className:"patient-main",children:[I.jsx(en,{children:"Current task"}),E&&I.jsx(Ps,{message:E}),g?I.jsx(BP,{}):$?I.jsxs(Jt,{className:"task-card",children:[$.photoUrl&&I.jsx("img",{src:$.photoUrl,alt:"",className:"task-photo"}),I.jsx("p",{className:"task-title",children:$.title}),I.jsxs("p",{className:"task-time",children:["at ",$.time]}),I.jsx(xt,{className:"w-full mt-4",onClick:H,children:"Mark as done"})]}):I.jsxs(Jt,{className:"task-card task-card--empty",children:[I.jsx("p",{className:"task-title",children:"All caught up"}),I.jsx("p",{className:"task-time",children:"No reminders right now."})]})]}),I.jsx("footer",{className:"patient-footer",children:I.jsx("a",{href:oe,className:"btn btn-danger w-full",children:"Call for help"})})]}):I.jsx("div",{className:"patient-screen","data-text-size":S.textSize,children:I.jsxs("div",{className:"page-shell",style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[I.jsx(Df,{size:"lg",className:"mb-6"}),I.jsx(Vs,{title:"Link your account",subtitle:"Enter the code from your caregiver to see reminders here."}),I.jsxs("div",{className:"stack",children:[I.jsx(xt,{className:"w-full",onClick:i,children:"Enter linking code"}),I.jsx(xt,{variant:"ghost",className:"w-full",onClick:t,children:"Settings"})]})]})})}const EN=[{id:"standard",label:"Standard"},{id:"large",label:"Large"},{id:"extra-large",label:"Extra large"}];function wN({linkedPatientName:r,onBack:e,onLinkAccount:t,onUnlink:i}){const{prefs:o,update:l}=Jw(),h=()=>{e0(o.reminderSound)};return I.jsxs(Jo,{className:"patient-prefs-page",children:[I.jsx(Ol,{onClick:e}),I.jsx(Vs,{showLogo:!0,title:"Settings",subtitle:"Display and account options for My Reminders."}),I.jsx(en,{children:"Account"}),r?I.jsxs(Jt,{className:"mb-4",children:[I.jsxs("p",{className:"font-medium",children:["Linked as ",r]}),I.jsx("p",{className:"text-sm text-muted mt-1 mb-4",children:"Reminders sync from your caregiver's account."}),i&&I.jsx(xt,{variant:"danger",className:"w-full",onClick:i,children:"Unlink account"})]}):t&&I.jsx(xt,{className:"w-full mb-4",onClick:t,children:"Link with caregiver code"}),I.jsx(en,{children:"Display"}),I.jsxs(Jt,{className:"mb-4",children:[I.jsx("p",{className:"font-medium mb-1",children:"Text size"}),I.jsx("p",{className:"text-sm text-muted mb-3",children:"Applies to My Reminders screens."}),I.jsx("div",{className:"segmented",role:"group","aria-label":"Text size",children:EN.map(f=>I.jsx("button",{type:"button",className:`segmented-item ${o.textSize===f.id?"segmented-item--active":""}`,"aria-pressed":o.textSize===f.id,onClick:()=>l({textSize:f.id}),children:f.label},f.id))})]}),I.jsx(en,{children:"Sound"}),I.jsxs(Jt,{className:"mb-4",children:[I.jsxs("label",{className:"field",htmlFor:"reminder-sound",children:[I.jsx("span",{className:"field-label",children:"Reminder sound"}),I.jsx("select",{id:"reminder-sound",className:"input",value:o.reminderSound,onChange:f=>l({reminderSound:f.target.value}),children:mN.map(f=>I.jsx("option",{value:f.id,children:f.label},f.id))})]}),I.jsx(xt,{type:"button",variant:"secondary",className:"w-full mt-3",onClick:h,disabled:o.reminderSound==="none",children:"Preview sound"})]}),I.jsx(en,{children:"Notifications"}),I.jsx(Jt,{className:"mb-4",children:I.jsxs("label",{className:"toggle-row",children:[I.jsxs("span",{children:[I.jsx("span",{className:"font-medium",children:"Reminder alerts"}),I.jsx("span",{className:"text-sm text-muted block mt-0.5",children:"Play a sound when a new reminder appears."})]}),I.jsx("input",{type:"checkbox",className:"toggle",checked:o.notificationsEnabled,onChange:f=>l({notificationsEnabled:f.target.checked})})]})}),I.jsxs(Jt,{children:[I.jsxs("label",{className:"toggle-row mb-4",children:[I.jsxs("span",{children:[I.jsx("span",{className:"font-medium",children:"Quiet hours"}),I.jsx("span",{className:"text-sm text-muted block mt-0.5",children:"Mute reminder sounds during these times."})]}),I.jsx("input",{type:"checkbox",className:"toggle",checked:o.quietHoursEnabled,onChange:f=>l({quietHoursEnabled:f.target.checked})})]}),o.quietHoursEnabled&&I.jsxs("div",{className:"quiet-hours-grid",children:[I.jsxs("label",{className:"field",children:[I.jsx("span",{className:"field-label",children:"From"}),I.jsx("input",{type:"time",className:"input",value:o.quietHoursStart,onChange:f=>l({quietHoursStart:f.target.value})})]}),I.jsxs("label",{className:"field",children:[I.jsx("span",{className:"field-label",children:"To"}),I.jsx("input",{type:"time",className:"input",value:o.quietHoursEnd,onChange:f=>l({quietHoursEnd:f.target.value})})]})]})]})]})}function TN({onComplete:r,onBack:e}){const[t,i]=he.useState(""),[o,l]=he.useState(""),[h,f]=he.useState([]),[g,_]=he.useState(!0);he.useEffect(()=>{DP().then(f).catch(()=>f([])).finally(()=>_(!1))},[]);const E=async T=>{T.preventDefault(),l("");const S=await PP(t);S?r(S.patientId,S.patientName):l("Code not found. Try again.")};return I.jsxs(Jo,{children:[I.jsx(Ol,{onClick:e}),I.jsx(Vs,{showLogo:!0,title:"Link account",subtitle:"Enter the code from your caregiver to see your reminders."}),I.jsx(Jt,{className:"mb-4",children:I.jsxs("form",{onSubmit:E,className:"stack",children:[I.jsx(Fo,{label:"Linking code",children:I.jsx(Lc,{id:"code",type:"text",value:t,onChange:T=>{i(T.target.value),l("")},className:"uppercase",placeholder:"e.g. JAMES01",autoComplete:"off"})}),o&&I.jsx(Ps,{message:o}),I.jsx(xt,{type:"submit",className:"w-full",children:"Link account"})]})}),g&&I.jsxs(Jt,{children:[I.jsx(en,{children:"Demo codes"}),I.jsx(zP,{})]}),!g&&h.length>0&&I.jsxs(Jt,{children:[I.jsx(en,{children:"Demo codes"}),I.jsx("ul",{className:"stack text-sm",children:h.map(T=>I.jsxs("li",{className:"flex items-center gap-2",children:[I.jsx("span",{className:"font-mono font-medium",children:T.code}),I.jsx("span",{className:"text-muted",children:"→"}),I.jsx("span",{children:T.patientName})]},T.code))})]})]})}function IN(){const[r,e]=he.useState(null);he.useEffect(()=>{AP().catch(A=>{const k=A?.message??"";(k.includes("permission")||k.includes("Permission"))&&e("Firestore permission denied. Add rules in Firebase Console → Firestore → Rules (see FIRESTORE.md)."),console.warn("Firebase seed:",A)})},[]);const[t,i]=he.useState("home"),[o,l]=he.useState(()=>!!H_()),[h,f]=he.useState(()=>H_()),[g,_]=he.useState(null),[E,T]=he.useState(null),[S,F]=he.useState(()=>W_()?.id??null),[$,H]=he.useState(()=>W_()?.name??null),[B,oe]=he.useState("home"),ee=A=>{l(!0),f(A),q_(A),i("patient-selection")},ne=(A,k)=>{_(A),T(k),i("caregiver-dashboard")},le=()=>{_(null),T(null),i("patient-selection")},xe=()=>{l(!1),f(null),q_(null),_(null),T(null),i("home")},Te=(A,k)=>{F(A),H(k),G_(A,k),i(B),oe("home")},x=()=>{F(null),H(null),G_(null)};return I.jsxs("div",{className:"min-h-screen app-page",children:[r&&I.jsxs("div",{className:"banner-warn flex items-center justify-between gap-3 flex-wrap",children:[I.jsx("p",{children:r}),I.jsxs("div",{className:"flex gap-3 text-sm",children:[I.jsx("a",{href:"https://console.firebase.google.com/project/test-f80e2/firestore/rules",target:"_blank",rel:"noopener noreferrer",className:"font-medium underline",children:"Open rules"}),I.jsx("button",{type:"button",onClick:()=>e(null),className:"btn-text",style:{marginBottom:0},children:"Dismiss"})]})]}),t==="home"&&I.jsxs("div",{className:"landing",children:[I.jsxs("header",{className:"landing-header",children:[I.jsx(zw,{size:"lg",className:"mb-2"}),I.jsx("p",{className:"page-subtitle",children:"Reminders for patients and caregivers"})]}),I.jsx("main",{className:"landing-main stack",children:I.jsx(xt,{className:"w-full",onClick:()=>i("patient"),children:"My reminders"})}),I.jsxs("footer",{className:"landing-footer",children:[I.jsx(xt,{variant:"secondary",className:"w-full",onClick:()=>{i(o&&h?"patient-selection":"caregiver-login")},children:"Caregiver login"}),I.jsx(xt,{variant:"ghost",className:"w-full",onClick:()=>{oe("home"),i("account-linking")},children:"Link account"}),I.jsx("p",{className:"landing-hint",children:"Ask your caregiver for a linking code."})]})]}),t==="caregiver-login"&&I.jsx(tN,{onLogin:ee,onBack:()=>i("home")}),t==="patient-selection"&&o&&I.jsx(nN,{caregiverEmail:h,onSelectPatient:ne,onLogout:xe,onSettings:()=>i("caregiver-settings")}),t==="caregiver-settings"&&o&&I.jsx(cN,{caregiverEmail:h,onBack:()=>i("patient-selection"),onSelectPatient:ne}),t==="caregiver-dashboard"&&o&&I.jsx(uN,{caregiverEmail:h,patientId:g,patientName:E,onLogout:xe,onBack:le}),t==="patient"&&I.jsx(vN,{patientId:S,patientName:$,onSettings:()=>i("patient-settings"),onLinkAccount:()=>{oe("patient"),i("account-linking")}}),t==="patient-settings"&&I.jsx(wN,{linkedPatientName:$,onBack:()=>i("patient"),onLinkAccount:()=>{oe("patient-settings"),i("account-linking")},onUnlink:x}),t==="account-linking"&&I.jsx(TN,{onComplete:Te,onBack:()=>i(B??"home")})]})}dN();dT.createRoot(document.getElementById("root")).render(I.jsx(IN,{}));
