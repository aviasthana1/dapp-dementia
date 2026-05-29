(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Td={exports:{}},ja={},Id={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function kE(){if(Pg)return ke;Pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function B(O,G,de){this.props=O,this.context=G,this.refs=q,this.updater=de||V}B.prototype.isReactComponent={},B.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ne(){}ne.prototype=B.prototype;function se(O,G,de){this.props=O,this.context=G,this.refs=q,this.updater=de||V}var oe=se.prototype=new ne;oe.constructor=se,$(oe,B.prototype),oe.isPureReactComponent=!0;var ce=Array.isArray,Ne=Object.prototype.hasOwnProperty,Te={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function A(O,G,de){var Ae,Re={},De=null,Fe=null;if(G!=null)for(Ae in G.ref!==void 0&&(Fe=G.ref),G.key!==void 0&&(De=""+G.key),G)Ne.call(G,Ae)&&!N.hasOwnProperty(Ae)&&(Re[Ae]=G[Ae]);var je=arguments.length-2;if(je===1)Re.children=de;else if(1<je){for(var qe=Array(je),At=0;At<je;At++)qe[At]=arguments[At+2];Re.children=qe}if(O&&O.defaultProps)for(Ae in je=O.defaultProps,je)Re[Ae]===void 0&&(Re[Ae]=je[Ae]);return{$$typeof:r,type:O,key:De,ref:Fe,props:Re,_owner:Te.current}}function k(O,G){return{$$typeof:r,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return G[de]})}var L=/\/+/g;function R(O,G){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):G.toString(36)}function ve(O,G,de,Ae,Re){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(De){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=O,Re=Re(Fe),O=Ae===""?"."+R(Fe,0):Ae,ce(Re)?(de="",O!=null&&(de=O.replace(L,"$&/")+"/"),ve(Re,G,de,"",function(At){return At})):Re!=null&&(C(Re)&&(Re=k(Re,de+(!Re.key||Fe&&Fe.key===Re.key?"":(""+Re.key).replace(L,"$&/")+"/")+O)),G.push(Re)),1;if(Fe=0,Ae=Ae===""?".":Ae+":",ce(O))for(var je=0;je<O.length;je++){De=O[je];var qe=Ae+R(De,je);Fe+=ve(De,G,de,qe,Re)}else if(qe=S(O),typeof qe=="function")for(O=qe.call(O),je=0;!(De=O.next()).done;)De=De.value,qe=Ae+R(De,je++),Fe+=ve(De,G,de,qe,Re);else if(De==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Fe}function $e(O,G,de){if(O==null)return O;var Ae=[],Re=0;return ve(O,Ae,"","",function(De){return G.call(de,De,Re++)}),Ae}function St(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var ze={current:null},Z={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function ie(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:$e,forEach:function(O,G,de){$e(O,function(){G.apply(this,arguments)},de)},count:function(O){var G=0;return $e(O,function(){G++}),G},toArray:function(O){return $e(O,function(G){return G})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=B,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=se,ke.StrictMode=i,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ke.act=ie,ke.cloneElement=function(O,G,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=$({},O.props),Re=O.key,De=O.ref,Fe=O._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Fe=Te.current),G.key!==void 0&&(Re=""+G.key),O.type&&O.type.defaultProps)var je=O.type.defaultProps;for(qe in G)Ne.call(G,qe)&&!N.hasOwnProperty(qe)&&(Ae[qe]=G[qe]===void 0&&je!==void 0?je[qe]:G[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=de;else if(1<qe){je=Array(qe);for(var At=0;At<qe;At++)je[At]=arguments[At+2];Ae.children=je}return{$$typeof:r,type:O.type,key:Re,ref:De,props:Ae,_owner:Fe}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ke.createElement=A,ke.createFactory=function(O){var G=A.bind(null,O);return G.type=O,G},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:f,render:O}},ke.isValidElement=C,ke.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:St}},ke.memo=function(O,G){return{$$typeof:_,type:O,compare:G===void 0?null:G}},ke.startTransition=function(O){var G=Z.transition;Z.transition={};try{O()}finally{Z.transition=G}},ke.unstable_act=ie,ke.useCallback=function(O,G){return ze.current.useCallback(O,G)},ke.useContext=function(O){return ze.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return ze.current.useDeferredValue(O)},ke.useEffect=function(O,G){return ze.current.useEffect(O,G)},ke.useId=function(){return ze.current.useId()},ke.useImperativeHandle=function(O,G,de){return ze.current.useImperativeHandle(O,G,de)},ke.useInsertionEffect=function(O,G){return ze.current.useInsertionEffect(O,G)},ke.useLayoutEffect=function(O,G){return ze.current.useLayoutEffect(O,G)},ke.useMemo=function(O,G){return ze.current.useMemo(O,G)},ke.useReducer=function(O,G,de){return ze.current.useReducer(O,G,de)},ke.useRef=function(O){return ze.current.useRef(O)},ke.useState=function(O){return ze.current.useState(O)},ke.useSyncExternalStore=function(O,G,de){return ze.current.useSyncExternalStore(O,G,de)},ke.useTransition=function(){return ze.current.useTransition()},ke.version="18.3.1",ke}var Ng;function _f(){return Ng||(Ng=1,Id.exports=kE()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function CE(){if(bg)return ja;bg=1;var r=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,I={},S=null,V=null;_!==void 0&&(S=""+_),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(V=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(I[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)I[w]===void 0&&(I[w]=g[w]);return{$$typeof:e,type:f,key:S,ref:V,props:I,_owner:o.current}}return ja.Fragment=t,ja.jsx=h,ja.jsxs=h,ja}var Dg;function PE(){return Dg||(Dg=1,Td.exports=CE()),Td.exports}var T=PE(),Fu={},Sd={exports:{}},an={},Ad={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function NE(){return Og||(Og=1,(function(r){function e(Z,me){var ie=Z.length;Z.push(me);e:for(;0<ie;){var O=ie-1>>>1,G=Z[O];if(0<o(G,me))Z[O]=me,Z[ie]=G,ie=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var me=Z[0],ie=Z.pop();if(ie!==me){Z[0]=ie;e:for(var O=0,G=Z.length,de=G>>>1;O<de;){var Ae=2*(O+1)-1,Re=Z[Ae],De=Ae+1,Fe=Z[De];if(0>o(Re,ie))De<G&&0>o(Fe,Re)?(Z[O]=Fe,Z[De]=ie,O=De):(Z[O]=Re,Z[Ae]=ie,O=Ae);else if(De<G&&0>o(Fe,ie))Z[O]=Fe,Z[De]=ie,O=De;else break e}}return me}function o(Z,me){var ie=Z.sortIndex-me.sortIndex;return ie!==0?ie:Z.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,I=null,S=3,V=!1,$=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(Z){for(var me=t(_);me!==null;){if(me.callback===null)i(_);else if(me.startTime<=Z)i(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function ce(Z){if(q=!1,oe(Z),!$)if(t(g)!==null)$=!0,St(Ne);else{var me=t(_);me!==null&&ze(ce,me.startTime-Z)}}function Ne(Z,me){$=!1,q&&(q=!1,ne(A),A=-1),V=!0;var ie=S;try{for(oe(me),I=t(g);I!==null&&(!(I.expirationTime>me)||Z&&!D());){var O=I.callback;if(typeof O=="function"){I.callback=null,S=I.priorityLevel;var G=O(I.expirationTime<=me);me=r.unstable_now(),typeof G=="function"?I.callback=G:I===t(g)&&i(g),oe(me)}else i(g);I=t(g)}if(I!==null)var de=!0;else{var Ae=t(_);Ae!==null&&ze(ce,Ae.startTime-me),de=!1}return de}finally{I=null,S=ie,V=!1}}var Te=!1,N=null,A=-1,k=5,C=-1;function D(){return!(r.unstable_now()-C<k)}function L(){if(N!==null){var Z=r.unstable_now();C=Z;var me=!0;try{me=N(!0,Z)}finally{me?R():(Te=!1,N=null)}}else Te=!1}var R;if(typeof se=="function")R=function(){se(L)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,$e=ve.port2;ve.port1.onmessage=L,R=function(){$e.postMessage(null)}}else R=function(){B(L,0)};function St(Z){N=Z,Te||(Te=!0,R())}function ze(Z,me){A=B(function(){Z(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){$||V||($=!0,St(Ne))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var ie=S;S=me;try{return Z()}finally{S=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ie=S;S=Z;try{return me()}finally{S=ie}},r.unstable_scheduleCallback=function(Z,me,ie){var O=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,Z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ie+G,Z={id:w++,callback:me,priorityLevel:Z,startTime:ie,expirationTime:G,sortIndex:-1},ie>O?(Z.sortIndex=ie,e(_,Z),t(g)===null&&Z===t(_)&&(q?(ne(A),A=-1):q=!0,ze(ce,ie-O))):(Z.sortIndex=G,e(g,Z),$||V||($=!0,St(Ne))),Z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(Z){var me=S;return function(){var ie=S;S=me;try{return Z.apply(this,arguments)}finally{S=ie}}}})(xd)),xd}var Vg;function bE(){return Vg||(Vg=1,Ad.exports=NE()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function DE(){if(Lg)return an;Lg=1;var r=_f(),e=bE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function S(n){return g.call(I,n)?!0:g.call(w,n)?!1:_.test(n)?I[n]=!0:(w[n]=!0,!1)}function V(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||V(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];B[s]=new q(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function se(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(ne,se);B[s]=new q(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(ne,se);B[s]=new q(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(ne,se);B[s]=new q(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function oe(n,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),Te=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Z=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var de=!1;function Ae(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,x=m.length-1;1<=v&&0<=x&&d[v]!==m[x];)x--;for(;1<=v&&0<=x;v--,x--)if(d[v]!==m[x]){if(v!==1||x!==1)do if(v--,x--,0>x||d[v]!==m[x]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=x);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Re(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Te:return"Portal";case k:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case ve:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case L:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $e:return s=n.displayName||null,s!==null?s:De(n.type)||"Memo";case St:s=n._payload,n=n._init;try{return De(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function At(n){var s=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vr(n){n._valueTracker||(n._valueTracker=At(n))}function Ns(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Gr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Bi(n,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function bs(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(n,s){s=s.checked,s!=null&&oe(n,"checked",s,!1)}function Wo(n,s){qo(n,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ds(n,s.type,a):s.hasOwnProperty("defaultValue")&&Ds(n,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Il(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ds(n,s,a){(s!=="number"||Gr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var wr=Array.isArray;function Er(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Go(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Os(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(wr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:je(a)}}function Vs(n,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ko(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function _t(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?_t(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Tr,Qo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Tr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Kr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$i=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(n){$i.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),zi[s]=zi[n]})});function Xo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||zi.hasOwnProperty(n)&&zi[n]?(""+s).trim():s+"px"}function Yo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Xo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zo(n,s){if(s){if(Jo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ea(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Ls(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ms=null,En=null,Xn=null;function Fs(n){if(n=Sa(n)){if(typeof Ms!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Zl(s),Ms(n.stateNode,n.type,s))}}function Yn(n){En?Xn?Xn.push(n):Xn=[n]:En=n}function ta(){if(En){var n=En,s=Xn;if(Xn=En=null,Fs(n),s)for(n=0;n<s.length;n++)Fs(s[n])}}function qi(n,s){return n(s)}function na(){}var Ir=!1;function ra(n,s,a){if(Ir)return n(s,a);Ir=!0;try{return qi(n,s,a)}finally{Ir=!1,(En!==null||Xn!==null)&&(na(),ta())}}function at(n,s){var a=n.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var js=!1;if(f)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){js=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{js=!1}function Wi(n,s,a,c,d,m,v,x,P){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Q){this.onError(Q)}}var Gi=!1,Us=null,Dn=!1,ia=null,Xc={onError:function(n){Gi=!0,Us=n}};function Bs(n,s,a,c,d,m,v,x,P){Gi=!1,Us=null,Wi.apply(Xc,arguments)}function Sl(n,s,a,c,d,m,v,x,P){if(Bs.apply(this,arguments),Gi){if(Gi){var U=Us;Gi=!1,Us=null}else throw Error(t(198));Dn||(Dn=!0,ia=U)}}function On(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Ki(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Vn(n){if(On(n)!==n)throw Error(t(188))}function Al(n){var s=n.alternate;if(!s){if(s=On(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Vn(d),n;if(m===c)return Vn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,x=d.child;x;){if(x===a){v=!0,a=d,c=m;break}if(x===c){v=!0,c=d,a=m;break}x=x.sibling}if(!v){for(x=m.child;x;){if(x===a){v=!0,a=m,c=d;break}if(x===c){v=!0,c=m,a=d;break}x=x.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function sa(n){return n=Al(n),n!==null?zs(n):null}function zs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=zs(n);if(s!==null)return s;n=n.sibling}return null}var $s=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,xl=e.unstable_shouldYield,Yc=e.unstable_requestPaint,We=e.unstable_now,Rl=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,Qr=e.unstable_UserBlockingPriority,Tn=e.unstable_NormalPriority,aa=e.unstable_LowPriority,kl=e.unstable_IdlePriority,Xi=null,hn=null;function Cl(n){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Xi,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Nl,la=Math.log,Pl=Math.LN2;function Nl(n){return n>>>=0,n===0?32:31-(la(n)/Pl|0)|0}var Hs=64,qs=4194304;function Xr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yi(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var x=v&~d;x!==0?c=Xr(x):(m&=v,m!==0&&(c=Xr(m)))}else v=a&~d,v!==0?c=Xr(v):m!==0&&(c=Xr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Gt(s),d=1<<a,c|=n[a],s&=~d;return c}function Jc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Gt(m),x=1<<v,P=d[v];P===-1?((x&a)===0||(x&c)!==0)&&(d[v]=Jc(x,s)):P<=s&&(n.expiredLanes|=x),m&=~x}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ji(){var n=Hs;return Hs<<=1,(Hs&4194240)===0&&(Hs=64),n}function Yr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Jr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Gt(s),n[s]=a}function He(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Gt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Zr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Gt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var be=0;function ei(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bl,Ws,Dl,Ol,Vl,ua=!1,Jn=[],bt=null,Ln=null,Mn=null,ti=new Map,In=new Map,Zn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(n,s){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ti.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(s.pointerId)}}function Zt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Sa(s),s!==null&&Ws(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function eh(n,s,a,c,d){switch(s){case"focusin":return bt=Zt(bt,n,s,a,c,d),!0;case"dragenter":return Ln=Zt(Ln,n,s,a,c,d),!0;case"mouseover":return Mn=Zt(Mn,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return ti.set(m,Zt(ti.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,In.set(m,Zt(In.get(m)||null,n,s,a,c,d)),!0}return!1}function Ml(n){var s=rs(n.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=Ki(a),s!==null){n.blockedOn=s,Vl(n.priority,function(){Dl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ar(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Gs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Hi=c,a.target.dispatchEvent(c),Hi=null}else return s=Sa(a),s!==null&&Ws(s),n.blockedOn=a,!1;s.shift()}return!0}function Zi(n,s,a){Ar(n)&&a.delete(s)}function Fl(){ua=!1,bt!==null&&Ar(bt)&&(bt=null),Ln!==null&&Ar(Ln)&&(Ln=null),Mn!==null&&Ar(Mn)&&(Mn=null),ti.forEach(Zi),In.forEach(Zi)}function Fn(n,s){n.blockedOn===s&&(n.blockedOn=null,ua||(ua=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function jn(n){function s(d){return Fn(d,n)}if(0<Jn.length){Fn(Jn[0],n);for(var a=1;a<Jn.length;a++){var c=Jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bt!==null&&Fn(bt,n),Ln!==null&&Fn(Ln,n),Mn!==null&&Fn(Mn,n),ti.forEach(s),In.forEach(s),a=0;a<Zn.length;a++)c=Zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zn.length&&(a=Zn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Zn.shift()}var xr=ce.ReactCurrentBatchConfig,ni=!0;function Je(n,s,a,c){var d=be,m=xr.transition;xr.transition=null;try{be=1,ca(n,s,a,c)}finally{be=d,xr.transition=m}}function th(n,s,a,c){var d=be,m=xr.transition;xr.transition=null;try{be=4,ca(n,s,a,c)}finally{be=d,xr.transition=m}}function ca(n,s,a,c){if(ni){var d=Gs(n,s,a,c);if(d===null)dh(n,s,c,es,a),Ll(n,c);else if(eh(d,n,s,a,c))c.stopPropagation();else if(Ll(n,c),s&4&&-1<Zc.indexOf(n)){for(;d!==null;){var m=Sa(d);if(m!==null&&bl(m),m=Gs(n,s,a,c),m===null&&dh(n,s,c,es,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else dh(n,s,c,null,a)}}var es=null;function Gs(n,s,a,c){if(es=null,n=Ls(c),n=rs(n),n!==null)if(s=On(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Ki(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return es=n,null}function ha(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rl()){case Qi:return 1;case Qr:return 4;case Tn:case aa:return 16;case kl:return 536870912;default:return 16}default:return 16}}var fn=null,Ks=null,en=null;function da(){if(en)return en;var n,s=Ks,a=s.length,c,d="value"in fn?fn.value:fn.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return en=d.slice(n,1<c?1-c:void 0)}function Qs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function er(){return!0}function fa(){return!1}function Dt(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var x in n)n.hasOwnProperty(x)&&(a=n[x],this[x]=a?a(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?er:fa,this.isPropagationStopped=fa,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),s}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Dt(Un),tr=ie({},Un,{view:0,detail:0}),nh=Dt(tr),Ys,Rr,ri,ts=ie({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(Ys=n.screenX-ri.screenX,Rr=n.screenY-ri.screenY):Rr=Ys=0,ri=n),Ys)},movementY:function(n){return"movementY"in n?n.movementY:Rr}}),Js=Dt(ts),pa=ie({},ts,{dataTransfer:0}),jl=Dt(pa),Zs=ie({},tr,{relatedTarget:0}),eo=Dt(Zs),Ul=ie({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=Dt(Ul),Bl=ie({},Un,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zl=Dt(Bl),$l=ie({},Un,{data:0}),ma=Dt($l),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ql(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Hl[n])?!!s[n]:!1}function nr(){return ql}var u=ie({},tr,{key:function(n){if(n.key){var s=to[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Dt(u),y=ie({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Dt(y),M=ie({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),z=Dt(M),J=ie({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Dt(J),wt=ie({},ts,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Dt(wt),xt=[9,13,27,32],dt=f&&"CompositionEvent"in window,Sn=null;f&&"documentMode"in document&&(Sn=document.documentMode);var pn=f&&"TextEvent"in window&&!Sn,ns=f&&(!dt||Sn&&8<Sn&&11>=Sn),no=" ",Sp=!1;function Ap(n,s){switch(n){case"keyup":return xt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function Aw(n,s){switch(n){case"compositionend":return xp(s);case"keypress":return s.which!==32?null:(Sp=!0,no);case"textInput":return n=s.data,n===no&&Sp?null:n;default:return null}}function xw(n,s){if(ro)return n==="compositionend"||!dt&&Ap(n,s)?(n=da(),en=Ks=fn=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ns&&s.locale!=="ko"?null:s.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Rw[n.type]:s==="textarea"}function kp(n,s,a,c){Yn(c),s=Xl(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ga=null,ya=null;function kw(n){Wp(n,0)}function Wl(n){var s=lo(n);if(Ns(s))return n}function Cw(n,s){if(n==="change")return s}var Cp=!1;if(f){var rh;if(f){var ih="oninput"in document;if(!ih){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),ih=typeof Pp.oninput=="function"}rh=ih}else rh=!1;Cp=rh&&(!document.documentMode||9<document.documentMode)}function Np(){ga&&(ga.detachEvent("onpropertychange",bp),ya=ga=null)}function bp(n){if(n.propertyName==="value"&&Wl(ya)){var s=[];kp(s,ya,n,Ls(n)),ra(kw,s)}}function Pw(n,s,a){n==="focusin"?(Np(),ga=s,ya=a,ga.attachEvent("onpropertychange",bp)):n==="focusout"&&Np()}function Nw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wl(ya)}function bw(n,s){if(n==="click")return Wl(s)}function Dw(n,s){if(n==="input"||n==="change")return Wl(s)}function Ow(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Bn=typeof Object.is=="function"?Object.is:Ow;function _a(n,s){if(Bn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Bn(n[d],s[d]))return!1}return!0}function Dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Op(n,s){var a=Dp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Vp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Vp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Lp(){for(var n=window,s=Gr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Gr(n.document)}return s}function sh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Vw(n){var s=Lp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Vp(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Op(a,m);var v=Op(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lw=f&&"documentMode"in document&&11>=document.documentMode,io=null,oh=null,va=null,ah=!1;function Mp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||io==null||io!==Gr(c)||(c=io,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&_a(va,c)||(va=c,c=Xl(oh,"onSelect"),0<c.length&&(s=new Xs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=io)))}function Gl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var so={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},lh={},Fp={};f&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Kl(n){if(lh[n])return lh[n];if(!so[n])return n;var s=so[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fp)return lh[n]=s[a];return n}var jp=Kl("animationend"),Up=Kl("animationiteration"),Bp=Kl("animationstart"),zp=Kl("transitionend"),$p=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(n,s){$p.set(n,s),l(s,[n])}for(var uh=0;uh<Hp.length;uh++){var ch=Hp[uh],Mw=ch.toLowerCase(),Fw=ch[0].toUpperCase()+ch.slice(1);ii(Mw,"on"+Fw)}ii(jp,"onAnimationEnd"),ii(Up,"onAnimationIteration"),ii(Bp,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(zp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function qp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Sl(c,s,void 0,n),n.currentTarget=null}function Wp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var x=c[v],P=x.instance,U=x.currentTarget;if(x=x.listener,P!==m&&d.isPropagationStopped())break e;qp(d,x,U),m=P}else for(v=0;v<c.length;v++){if(x=c[v],P=x.instance,U=x.currentTarget,x=x.listener,P!==m&&d.isPropagationStopped())break e;qp(d,x,U),m=P}}}if(Dn)throw n=ia,Dn=!1,ia=null,n}function Qe(n,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=n+"__bubble";a.has(c)||(Gp(s,n,2,!1),a.add(c))}function hh(n,s,a){var c=0;s&&(c|=4),Gp(a,n,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Ql]){n[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(jw.has(a)||hh(a,!1,n),hh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,hh("selectionchange",!1,s))}}function Gp(n,s,a,c){switch(ha(s)){case 1:var d=Je;break;case 4:d=th;break;default:d=ca}a=d.bind(null,s,a,n),d=void 0,!js||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function dh(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var x=c.stateNode.containerInfo;if(x===d||x.nodeType===8&&x.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;x!==null;){if(v=rs(x),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}x=x.parentNode}}c=c.return}ra(function(){var U=m,Q=Ls(a),X=[];e:{var K=$p.get(n);if(K!==void 0){var te=Xs,le=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":le="focus",te=eo;break;case"focusout":le="blur",te=eo;break;case"beforeblur":case"afterblur":te=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=z;break;case jp:case Up:case Bp:te=kr;break;case zp:te=Be;break;case"scroll":te=nh;break;case"wheel":te=Oe;break;case"copy":case"cut":case"paste":te=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var ue=(s&4)!==0,lt=!ue&&n==="scroll",F=ue?K!==null?K+"Capture":null:K;ue=[];for(var b=U,j;b!==null;){j=b;var Y=j.stateNode;if(j.tag===5&&Y!==null&&(j=Y,F!==null&&(Y=at(b,F),Y!=null&&ue.push(Ta(b,Y,j)))),lt)break;b=b.return}0<ue.length&&(K=new te(K,le,null,a,Q),X.push({event:K,listeners:ue}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",K&&a!==Hi&&(le=a.relatedTarget||a.fromElement)&&(rs(le)||le[Cr]))break e;if((te||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,te?(le=a.relatedTarget||a.toElement,te=U,le=le?rs(le):null,le!==null&&(lt=On(le),le!==lt||le.tag!==5&&le.tag!==6)&&(le=null)):(te=null,le=U),te!==le)){if(ue=Js,Y="onMouseLeave",F="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(ue=E,Y="onPointerLeave",F="onPointerEnter",b="pointer"),lt=te==null?K:lo(te),j=le==null?K:lo(le),K=new ue(Y,b+"leave",te,a,Q),K.target=lt,K.relatedTarget=j,Y=null,rs(Q)===U&&(ue=new ue(F,b+"enter",le,a,Q),ue.target=j,ue.relatedTarget=lt,Y=ue),lt=Y,te&&le)t:{for(ue=te,F=le,b=0,j=ue;j;j=oo(j))b++;for(j=0,Y=F;Y;Y=oo(Y))j++;for(;0<b-j;)ue=oo(ue),b--;for(;0<j-b;)F=oo(F),j--;for(;b--;){if(ue===F||F!==null&&ue===F.alternate)break t;ue=oo(ue),F=oo(F)}ue=null}else ue=null;te!==null&&Kp(X,K,te,ue,!1),le!==null&&lt!==null&&Kp(X,lt,le,ue,!0)}}e:{if(K=U?lo(U):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var he=Cw;else if(Rp(K))if(Cp)he=Dw;else{he=Nw;var ge=Pw}else(te=K.nodeName)&&te.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=bw);if(he&&(he=he(n,U))){kp(X,he,a,Q);break e}ge&&ge(n,K,U),n==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Ds(K,"number",K.value)}switch(ge=U?lo(U):window,n){case"focusin":(Rp(ge)||ge.contentEditable==="true")&&(io=ge,oh=U,va=null);break;case"focusout":va=oh=io=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Mp(X,a,Q);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":Mp(X,a,Q)}var ye;if(dt)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ro?Ap(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ns&&a.locale!=="ko"&&(ro||we!=="onCompositionStart"?we==="onCompositionEnd"&&ro&&(ye=da()):(fn=Q,Ks="value"in fn?fn.value:fn.textContent,ro=!0)),ge=Xl(U,we),0<ge.length&&(we=new ma(we,n,null,a,Q),X.push({event:we,listeners:ge}),ye?we.data=ye:(ye=xp(a),ye!==null&&(we.data=ye)))),(ye=pn?Aw(n,a):xw(n,a))&&(U=Xl(U,"onBeforeInput"),0<U.length&&(Q=new ma("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:U}),Q.data=ye))}Wp(X,s)})}function Ta(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Xl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=at(n,a),m!=null&&c.unshift(Ta(n,m,d)),m=at(n,s),m!=null&&c.push(Ta(n,m,d))),n=n.return}return c}function oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var x=a,P=x.alternate,U=x.stateNode;if(P!==null&&P===c)break;x.tag===5&&U!==null&&(x=U,d?(P=at(a,m),P!=null&&v.unshift(Ta(a,P,x))):d||(P=at(a,m),P!=null&&v.push(Ta(a,P,x)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var Uw=/\r\n?/g,Bw=/\u0000|\uFFFD/g;function Qp(n){return(typeof n=="string"?n:""+n).replace(Uw,`
`).replace(Bw,"")}function Yl(n,s,a){if(s=Qp(s),Qp(n)!==s&&a)throw Error(t(425))}function Jl(){}var fh=null,ph=null;function mh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(n){return Xp.resolve(null).then(n).catch(Hw)}:gh;function Hw(n){setTimeout(function(){throw n})}function yh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),jn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);jn(s)}function si(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Yp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),rr="__reactFiber$"+ao,Ia="__reactProps$"+ao,Cr="__reactContainer$"+ao,_h="__reactEvents$"+ao,qw="__reactListeners$"+ao,Ww="__reactHandles$"+ao;function rs(n){var s=n[rr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Cr]||a[rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Yp(n);n!==null;){if(a=n[rr])return a;n=Yp(n)}return s}n=a,a=n.parentNode}return null}function Sa(n){return n=n[rr]||n[Cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zl(n){return n[Ia]||null}var vh=[],uo=-1;function oi(n){return{current:n}}function Xe(n){0>uo||(n.current=vh[uo],vh[uo]=null,uo--)}function Ge(n,s){uo++,vh[uo]=n.current,n.current=s}var ai={},jt=oi(ai),tn=oi(!1),is=ai;function co(n,s){var a=n.type.contextTypes;if(!a)return ai;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function nn(n){return n=n.childContextTypes,n!=null}function eu(){Xe(tn),Xe(jt)}function Jp(n,s,a){if(jt.current!==ai)throw Error(t(168));Ge(jt,s),Ge(tn,a)}function Zp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return ie({},a,c)}function tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ai,is=jt.current,Ge(jt,n),Ge(tn,tn.current),!0}function em(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Zp(n,s,is),c.__reactInternalMemoizedMergedChildContext=n,Xe(tn),Xe(jt),Ge(jt,n)):Xe(tn),Ge(tn,a)}var Pr=null,nu=!1,wh=!1;function tm(n){Pr===null?Pr=[n]:Pr.push(n)}function Gw(n){nu=!0,tm(n)}function li(){if(!wh&&Pr!==null){wh=!0;var n=0,s=be;try{var a=Pr;for(be=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pr=null,nu=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(n+1)),$s(Qi,li),d}finally{be=s,wh=!1}}return null}var ho=[],fo=0,ru=null,iu=0,An=[],xn=0,ss=null,Nr=1,br="";function os(n,s){ho[fo++]=iu,ho[fo++]=ru,ru=n,iu=s}function nm(n,s,a){An[xn++]=Nr,An[xn++]=br,An[xn++]=ss,ss=n;var c=Nr;n=br;var d=32-Gt(c)-1;c&=~(1<<d),a+=1;var m=32-Gt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-Gt(s)+d|a<<d|c,br=m+n}else Nr=1<<m|a<<d|c,br=n}function Eh(n){n.return!==null&&(os(n,1),nm(n,1,0))}function Th(n){for(;n===ru;)ru=ho[--fo],ho[fo]=null,iu=ho[--fo],ho[fo]=null;for(;n===ss;)ss=An[--xn],An[xn]=null,br=An[--xn],An[xn]=null,Nr=An[--xn],An[xn]=null}var mn=null,gn=null,Ze=!1,zn=null;function rm(n,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function im(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,mn=n,gn=si(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,mn=n,gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ss!==null?{id:Nr,overflow:br}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,mn=n,gn=null,!0):!1;default:return!1}}function Ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sh(n){if(Ze){var s=gn;if(s){var a=s;if(!im(n,s)){if(Ih(n))throw Error(t(418));s=si(a.nextSibling);var c=mn;s&&im(n,s)?rm(c,a):(n.flags=n.flags&-4097|2,Ze=!1,mn=n)}}else{if(Ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,mn=n}}}function sm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mn=n}function su(n){if(n!==mn)return!1;if(!Ze)return sm(n),Ze=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!mh(n.type,n.memoizedProps)),s&&(s=gn)){if(Ih(n))throw om(),Error(t(418));for(;s;)rm(n,s),s=si(s.nextSibling)}if(sm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){gn=si(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}gn=null}}else gn=mn?si(n.stateNode.nextSibling):null;return!0}function om(){for(var n=gn;n;)n=si(n.nextSibling)}function po(){gn=mn=null,Ze=!1}function Ah(n){zn===null?zn=[n]:zn.push(n)}var Kw=ce.ReactCurrentBatchConfig;function Aa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var x=d.refs;v===null?delete x[m]:x[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ou(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function am(n){var s=n._init;return s(n._payload)}function lm(n){function s(F,b){if(n){var j=F.deletions;j===null?(F.deletions=[b],F.flags|=16):j.push(b)}}function a(F,b){if(!n)return null;for(;b!==null;)s(F,b),b=b.sibling;return null}function c(F,b){for(F=new Map;b!==null;)b.key!==null?F.set(b.key,b):F.set(b.index,b),b=b.sibling;return F}function d(F,b){return F=gi(F,b),F.index=0,F.sibling=null,F}function m(F,b,j){return F.index=j,n?(j=F.alternate,j!==null?(j=j.index,j<b?(F.flags|=2,b):j):(F.flags|=2,b)):(F.flags|=1048576,b)}function v(F){return n&&F.alternate===null&&(F.flags|=2),F}function x(F,b,j,Y){return b===null||b.tag!==6?(b=gd(j,F.mode,Y),b.return=F,b):(b=d(b,j),b.return=F,b)}function P(F,b,j,Y){var he=j.type;return he===N?Q(F,b,j.props.children,Y,j.key):b!==null&&(b.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===St&&am(he)===b.type)?(Y=d(b,j.props),Y.ref=Aa(F,b,j),Y.return=F,Y):(Y=Pu(j.type,j.key,j.props,null,F.mode,Y),Y.ref=Aa(F,b,j),Y.return=F,Y)}function U(F,b,j,Y){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=yd(j,F.mode,Y),b.return=F,b):(b=d(b,j.children||[]),b.return=F,b)}function Q(F,b,j,Y,he){return b===null||b.tag!==7?(b=ps(j,F.mode,Y,he),b.return=F,b):(b=d(b,j),b.return=F,b)}function X(F,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=gd(""+b,F.mode,j),b.return=F,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ne:return j=Pu(b.type,b.key,b.props,null,F.mode,j),j.ref=Aa(F,null,b),j.return=F,j;case Te:return b=yd(b,F.mode,j),b.return=F,b;case St:var Y=b._init;return X(F,Y(b._payload),j)}if(wr(b)||me(b))return b=ps(b,F.mode,j,null),b.return=F,b;ou(F,b)}return null}function K(F,b,j,Y){var he=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:x(F,b,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ne:return j.key===he?P(F,b,j,Y):null;case Te:return j.key===he?U(F,b,j,Y):null;case St:return he=j._init,K(F,b,he(j._payload),Y)}if(wr(j)||me(j))return he!==null?null:Q(F,b,j,Y,null);ou(F,j)}return null}function te(F,b,j,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return F=F.get(j)||null,x(b,F,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ne:return F=F.get(Y.key===null?j:Y.key)||null,P(b,F,Y,he);case Te:return F=F.get(Y.key===null?j:Y.key)||null,U(b,F,Y,he);case St:var ge=Y._init;return te(F,b,j,ge(Y._payload),he)}if(wr(Y)||me(Y))return F=F.get(j)||null,Q(b,F,Y,he,null);ou(b,Y)}return null}function le(F,b,j,Y){for(var he=null,ge=null,ye=b,we=b=0,Ct=null;ye!==null&&we<j.length;we++){ye.index>we?(Ct=ye,ye=null):Ct=ye.sibling;var Me=K(F,ye,j[we],Y);if(Me===null){ye===null&&(ye=Ct);break}n&&ye&&Me.alternate===null&&s(F,ye),b=m(Me,b,we),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=Ct}if(we===j.length)return a(F,ye),Ze&&os(F,we),he;if(ye===null){for(;we<j.length;we++)ye=X(F,j[we],Y),ye!==null&&(b=m(ye,b,we),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ze&&os(F,we),he}for(ye=c(F,ye);we<j.length;we++)Ct=te(ye,F,we,j[we],Y),Ct!==null&&(n&&Ct.alternate!==null&&ye.delete(Ct.key===null?we:Ct.key),b=m(Ct,b,we),ge===null?he=Ct:ge.sibling=Ct,ge=Ct);return n&&ye.forEach(function(yi){return s(F,yi)}),Ze&&os(F,we),he}function ue(F,b,j,Y){var he=me(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=b,we=b=0,Ct=null,Me=j.next();ye!==null&&!Me.done;we++,Me=j.next()){ye.index>we?(Ct=ye,ye=null):Ct=ye.sibling;var yi=K(F,ye,Me.value,Y);if(yi===null){ye===null&&(ye=Ct);break}n&&ye&&yi.alternate===null&&s(F,ye),b=m(yi,b,we),ge===null?he=yi:ge.sibling=yi,ge=yi,ye=Ct}if(Me.done)return a(F,ye),Ze&&os(F,we),he;if(ye===null){for(;!Me.done;we++,Me=j.next())Me=X(F,Me.value,Y),Me!==null&&(b=m(Me,b,we),ge===null?he=Me:ge.sibling=Me,ge=Me);return Ze&&os(F,we),he}for(ye=c(F,ye);!Me.done;we++,Me=j.next())Me=te(ye,F,we,Me.value,Y),Me!==null&&(n&&Me.alternate!==null&&ye.delete(Me.key===null?we:Me.key),b=m(Me,b,we),ge===null?he=Me:ge.sibling=Me,ge=Me);return n&&ye.forEach(function(RE){return s(F,RE)}),Ze&&os(F,we),he}function lt(F,b,j,Y){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ne:e:{for(var he=j.key,ge=b;ge!==null;){if(ge.key===he){if(he=j.type,he===N){if(ge.tag===7){a(F,ge.sibling),b=d(ge,j.props.children),b.return=F,F=b;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===St&&am(he)===ge.type){a(F,ge.sibling),b=d(ge,j.props),b.ref=Aa(F,ge,j),b.return=F,F=b;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}j.type===N?(b=ps(j.props.children,F.mode,Y,j.key),b.return=F,F=b):(Y=Pu(j.type,j.key,j.props,null,F.mode,Y),Y.ref=Aa(F,b,j),Y.return=F,F=Y)}return v(F);case Te:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(F,b.sibling),b=d(b,j.children||[]),b.return=F,F=b;break e}else{a(F,b);break}else s(F,b);b=b.sibling}b=yd(j,F.mode,Y),b.return=F,F=b}return v(F);case St:return ge=j._init,lt(F,b,ge(j._payload),Y)}if(wr(j))return le(F,b,j,Y);if(me(j))return ue(F,b,j,Y);ou(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(F,b.sibling),b=d(b,j),b.return=F,F=b):(a(F,b),b=gd(j,F.mode,Y),b.return=F,F=b),v(F)):a(F,b)}return lt}var mo=lm(!0),um=lm(!1),au=oi(null),lu=null,go=null,xh=null;function Rh(){xh=go=lu=null}function kh(n){var s=au.current;Xe(au),n._currentValue=s}function Ch(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function yo(n,s){lu=n,xh=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(rn=!0),n.firstContext=null)}function Rn(n){var s=n._currentValue;if(xh!==n)if(n={context:n,memoizedValue:s,next:null},go===null){if(lu===null)throw Error(t(308));go=n,lu.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return s}var as=null;function Ph(n){as===null?as=[n]:as.push(n)}function cm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Ph(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(n,c)}function Dr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ui=!1;function Nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(n,a)}return d=c.interleaved,d===null?(s.next=s,Ph(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(n,a)}function uu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Zr(n,a)}}function dm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function cu(n,s,a,c){var d=n.updateQueue;ui=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var P=x,U=P.next;P.next=null,v===null?m=U:v.next=U,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,x=Q.lastBaseUpdate,x!==v&&(x===null?Q.firstBaseUpdate=U:x.next=U,Q.lastBaseUpdate=P))}if(m!==null){var X=d.baseState;v=0,Q=U=P=null,x=m;do{var K=x.lane,te=x.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:te,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var le=n,ue=x;switch(K=s,te=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(te,X,K);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(te,X,K):le,K==null)break e;X=ie({},X,K);break e;case 2:ui=!0}}x.callback!==null&&x.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[x]:K.push(x))}else te={eventTime:te,lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Q===null?(U=Q=te,P=X):Q=Q.next=te,v|=K;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;K=x,x=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=X),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);cs|=v,n.lanes=v,n.memoizedState=X}}function fm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var xa={},ir=oi(xa),Ra=oi(xa),ka=oi(xa);function ls(n){if(n===xa)throw Error(t(174));return n}function bh(n,s){switch(Ge(ka,s),Ge(Ra,n),Ge(ir,xa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=vt(s,n)}Xe(ir),Ge(ir,s)}function _o(){Xe(ir),Xe(Ra),Xe(ka)}function pm(n){ls(ka.current);var s=ls(ir.current),a=vt(s,n.type);s!==a&&(Ge(Ra,n),Ge(ir,a))}function Dh(n){Ra.current===n&&(Xe(ir),Xe(Ra))}var et=oi(0);function hu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Oh=[];function Vh(){for(var n=0;n<Oh.length;n++)Oh[n]._workInProgressVersionPrimary=null;Oh.length=0}var du=ce.ReactCurrentDispatcher,Lh=ce.ReactCurrentBatchConfig,us=0,tt=null,Et=null,Rt=null,fu=!1,Ca=!1,Pa=0,Qw=0;function Ut(){throw Error(t(321))}function Mh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Bn(n[a],s[a]))return!1;return!0}function Fh(n,s,a,c,d,m){if(us=m,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=n===null||n.memoizedState===null?Zw:eE,n=a(c,d),Ca){m=0;do{if(Ca=!1,Pa=0,25<=m)throw Error(t(301));m+=1,Rt=Et=null,s.updateQueue=null,du.current=tE,n=a(c,d)}while(Ca)}if(du.current=gu,s=Et!==null&&Et.next!==null,us=0,Rt=Et=tt=null,fu=!1,s)throw Error(t(300));return n}function jh(){var n=Pa!==0;return Pa=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?tt.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function kn(){if(Et===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=Et.next;var s=Rt===null?tt.memoizedState:Rt.next;if(s!==null)Rt=s,Et=n;else{if(n===null)throw Error(t(310));Et=n,n={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?tt.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function Na(n,s){return typeof s=="function"?s(n):s}function Uh(n){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Et,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var x=v=null,P=null,U=m;do{var Q=U.lane;if((us&Q)===Q)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(x=P=X,v=c):P=P.next=X,tt.lanes|=Q,cs|=Q}U=U.next}while(U!==null&&U!==m);P===null?v=c:P.next=x,Bn(c,s.memoizedState)||(rn=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tt.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bh(n){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Bn(m,s.memoizedState)||(rn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function mm(){}function gm(n,s){var a=tt,c=kn(),d=s(),m=!Bn(c.memoizedState,d);if(m&&(c.memoizedState=d,rn=!0),c=c.queue,zh(vm.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,ba(9,_m.bind(null,a,c,d,s),void 0,null),kt===null)throw Error(t(349));(us&30)!==0||ym(a,s,d)}return d}function ym(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function _m(n,s,a,c){s.value=a,s.getSnapshot=c,wm(s)&&Em(n)}function vm(n,s,a){return a(function(){wm(s)&&Em(n)})}function wm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Bn(n,a)}catch{return!0}}function Em(n){var s=Dr(n,1);s!==null&&Wn(s,n,1,-1)}function Tm(n){var s=sr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},s.queue=n,n=n.dispatch=Jw.bind(null,tt,n),[s.memoizedState,n]}function ba(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Im(){return kn().memoizedState}function pu(n,s,a,c){var d=sr();tt.flags|=n,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function mu(n,s,a,c){var d=kn();c=c===void 0?null:c;var m=void 0;if(Et!==null){var v=Et.memoizedState;if(m=v.destroy,c!==null&&Mh(c,v.deps)){d.memoizedState=ba(s,a,m,c);return}}tt.flags|=n,d.memoizedState=ba(1|s,a,m,c)}function Sm(n,s){return pu(8390656,8,n,s)}function zh(n,s){return mu(2048,8,n,s)}function Am(n,s){return mu(4,2,n,s)}function xm(n,s){return mu(4,4,n,s)}function Rm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function km(n,s,a){return a=a!=null?a.concat([n]):null,mu(4,4,Rm.bind(null,s,n),a)}function $h(){}function Cm(n,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Pm(n,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Nm(n,s,a){return(us&21)===0?(n.baseState&&(n.baseState=!1,rn=!0),n.memoizedState=a):(Bn(a,s)||(a=Ji(),tt.lanes|=a,cs|=a,n.baseState=!0),s)}function Xw(n,s){var a=be;be=a!==0&&4>a?a:4,n(!0);var c=Lh.transition;Lh.transition={};try{n(!1),s()}finally{be=a,Lh.transition=c}}function bm(){return kn().memoizedState}function Yw(n,s,a){var c=pi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dm(n))Om(s,a);else if(a=cm(n,s,a,c),a!==null){var d=Xt();Wn(a,n,c,d),Vm(a,s,c)}}function Jw(n,s,a){var c=pi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dm(n))Om(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,x=m(v,a);if(d.hasEagerState=!0,d.eagerState=x,Bn(x,v)){var P=s.interleaved;P===null?(d.next=d,Ph(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=cm(n,s,d,c),a!==null&&(d=Xt(),Wn(a,n,c,d),Vm(a,s,c))}}function Dm(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function Om(n,s){Ca=fu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Vm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Zr(n,a)}}var gu={readContext:Rn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Zw={readContext:Rn,useCallback:function(n,s){return sr().memoizedState=[n,s===void 0?null:s],n},useContext:Rn,useEffect:Sm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,pu(4194308,4,Rm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return pu(4194308,4,n,s)},useInsertionEffect:function(n,s){return pu(4,2,n,s)},useMemo:function(n,s){var a=sr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=sr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Yw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var s=sr();return n={current:n},s.memoizedState=n},useState:Tm,useDebugValue:$h,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Tm(!1),s=n[0];return n=Xw.bind(null,n[1]),sr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=tt,d=sr();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));(us&30)!==0||ym(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Sm(vm.bind(null,c,m,n),[n]),c.flags|=2048,ba(9,_m.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=sr(),s=kt.identifierPrefix;if(Ze){var a=br,c=Nr;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Pa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Qw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},eE={readContext:Rn,useCallback:Cm,useContext:Rn,useEffect:zh,useImperativeHandle:km,useInsertionEffect:Am,useLayoutEffect:xm,useMemo:Pm,useReducer:Uh,useRef:Im,useState:function(){return Uh(Na)},useDebugValue:$h,useDeferredValue:function(n){var s=kn();return Nm(s,Et.memoizedState,n)},useTransition:function(){var n=Uh(Na)[0],s=kn().memoizedState;return[n,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:bm,unstable_isNewReconciler:!1},tE={readContext:Rn,useCallback:Cm,useContext:Rn,useEffect:zh,useImperativeHandle:km,useInsertionEffect:Am,useLayoutEffect:xm,useMemo:Pm,useReducer:Bh,useRef:Im,useState:function(){return Bh(Na)},useDebugValue:$h,useDeferredValue:function(n){var s=kn();return Et===null?s.memoizedState=n:Nm(s,Et.memoizedState,n)},useTransition:function(){var n=Bh(Na)[0],s=kn().memoizedState;return[n,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:bm,unstable_isNewReconciler:!1};function $n(n,s){if(n&&n.defaultProps){s=ie({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Hh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yu={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Xt(),d=pi(n),m=Or(c,d);m.payload=s,a!=null&&(m.callback=a),s=ci(n,m,d),s!==null&&(Wn(s,n,d,c),uu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Xt(),d=pi(n),m=Or(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ci(n,m,d),s!==null&&(Wn(s,n,d,c),uu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Xt(),c=pi(n),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(n,d,c),s!==null&&(Wn(s,n,c,a),uu(s,n,c))}};function Lm(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!_a(a,c)||!_a(d,m):!0}function Mm(n,s,a){var c=!1,d=ai,m=s.contextType;return typeof m=="object"&&m!==null?m=Rn(m):(d=nn(s)?is:jt.current,c=s.contextTypes,m=(c=c!=null)?co(n,d):ai),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function Fm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&yu.enqueueReplaceState(s,s.state,null)}function qh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Nh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Rn(m):(m=nn(s)?is:jt.current,d.context=co(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Hh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&yu.enqueueReplaceState(d,d.state,null),cu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vo(n,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Wh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Gh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function jm(n,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,ld=c),Gh(n,s)},a}function Um(n,s,a){a=Or(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Gh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Gh(n,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Bm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=gE.bind(null,n,s,a),s.then(n,n))}function zm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function $m(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rE=ce.ReactCurrentOwner,rn=!1;function Qt(n,s,a,c){s.child=n===null?um(s,null,a,c):mo(s,n.child,a,c)}function Hm(n,s,a,c,d){a=a.render;var m=s.ref;return yo(s,d),c=Fh(n,s,a,c,m,d),a=jh(),n!==null&&!rn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ze&&a&&Eh(s),s.flags|=1,Qt(n,s,c,d),s.child)}function qm(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!md(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Wm(n,s,m,c,d)):(n=Pu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:_a,a(v,c)&&n.ref===s.ref)return Vr(n,s,d)}return s.flags|=1,n=gi(m,c),n.ref=s.ref,n.return=s,s.child=n}function Wm(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(_a(m,c)&&n.ref===s.ref)if(rn=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(rn=!0);else return s.lanes=n.lanes,Vr(n,s,d)}return Kh(n,s,a,c,d)}function Gm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Eo,yn),yn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ge(Eo,yn),yn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ge(Eo,yn),yn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ge(Eo,yn),yn|=c;return Qt(n,s,d,a),s.child}function Km(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(n,s,a,c,d){var m=nn(a)?is:jt.current;return m=co(s,m),yo(s,d),a=Fh(n,s,a,c,m,d),c=jh(),n!==null&&!rn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ze&&c&&Eh(s),s.flags|=1,Qt(n,s,a,d),s.child)}function Qm(n,s,a,c,d){if(nn(a)){var m=!0;tu(s)}else m=!1;if(yo(s,d),s.stateNode===null)vu(n,s),Mm(s,a,c),qh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,x=s.memoizedProps;v.props=x;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=Rn(U):(U=nn(a)?is:jt.current,U=co(s,U));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(x!==c||P!==U)&&Fm(s,v,c,U),ui=!1;var K=s.memoizedState;v.state=K,cu(s,c,v,d),P=s.memoizedState,x!==c||K!==P||tn.current||ui?(typeof Q=="function"&&(Hh(s,a,Q,c),P=s.memoizedState),(x=ui||Lm(s,a,x,c,K,P,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=U,c=x):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,hm(n,s),x=s.memoizedProps,U=s.type===s.elementType?x:$n(s.type,x),v.props=U,X=s.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Rn(P):(P=nn(a)?is:jt.current,P=co(s,P));var te=a.getDerivedStateFromProps;(Q=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(x!==X||K!==P)&&Fm(s,v,c,P),ui=!1,K=s.memoizedState,v.state=K,cu(s,c,v,d);var le=s.memoizedState;x!==X||K!==le||tn.current||ui?(typeof te=="function"&&(Hh(s,a,te,c),le=s.memoizedState),(U=ui||Lm(s,a,U,c,K,le,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||x===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||x===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Qh(n,s,a,c,m,d)}function Qh(n,s,a,c,d,m){Km(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&em(s,a,!1),Vr(n,s,m);c=s.stateNode,rE.current=s;var x=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=mo(s,n.child,null,m),s.child=mo(s,null,x,m)):Qt(n,s,x,m),s.memoizedState=c.state,d&&em(s,a,!0),s.child}function Xm(n){var s=n.stateNode;s.pendingContext?Jp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Jp(n,s.context,!1),bh(n,s.containerInfo)}function Ym(n,s,a,c,d){return po(),Ah(d),s.flags|=256,Qt(n,s,a,c),s.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jm(n,s,a){var c=s.pendingProps,d=et.current,m=!1,v=(s.flags&128)!==0,x;if((x=v)||(x=n!==null&&n.memoizedState===null?!1:(d&2)!==0),x?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return Sh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Nu(v,c,0,null),n=ps(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Yh(a),s.memoizedState=Xh,n):Jh(s,v));if(d=n.memoizedState,d!==null&&(x=d.dehydrated,x!==null))return iE(n,s,v,c,x,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,x=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=gi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),x!==null?m=gi(x,m):(m=ps(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Yh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Xh,c}return m=n.child,n=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Jh(n,s){return s=Nu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function _u(n,s,a,c){return c!==null&&Ah(c),mo(s,n.child,null,a),n=Jh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function iE(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Wh(Error(t(422))),_u(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Nu({mode:"visible",children:c.children},d,0,null),m=ps(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&mo(s,n.child,null,v),s.child.memoizedState=Yh(v),s.memoizedState=Xh,m);if((s.mode&1)===0)return _u(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var x=c.dgst;return c=x,m=Error(t(419)),c=Wh(m,c,void 0),_u(n,s,v,c)}if(x=(v&n.childLanes)!==0,rn||x){if(c=kt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Dr(n,d),Wn(c,n,d,-1))}return pd(),c=Wh(Error(t(421))),_u(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=yE.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,gn=si(d.nextSibling),mn=s,Ze=!0,zn=null,n!==null&&(An[xn++]=Nr,An[xn++]=br,An[xn++]=ss,Nr=n.id,br=n.overflow,ss=s),s=Jh(s,c.children),s.flags|=4096,s)}function Zm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Ch(n.return,s,a)}function Zh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function eg(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(n,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zm(n,a,s);else if(n.tag===19)Zm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&hu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Zh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&hu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Zh(s,!0,a,null,m);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Vr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),cs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=gi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=gi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function sE(n,s,a){switch(s.tag){case 3:Xm(s),po();break;case 5:pm(s);break;case 1:nn(s.type)&&tu(s);break;case 4:bh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(au,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Jm(n,s,a):(Ge(et,et.current&1),n=Vr(n,s,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return eg(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Gm(n,s,a)}return Vr(n,s,a)}var tg,ed,ng,rg;tg=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},ng=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ls(ir.current);var m=null;switch(a){case"input":d=Bi(n,d),c=Bi(n,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=Go(n,d),c=Go(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}Zo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var x=d[U];for(v in x)x.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var P=c[U];if(x=d?.[U],c.hasOwnProperty(U)&&P!==x&&(P!=null||x!=null))if(U==="style")if(x){for(v in x)!x.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&x[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,x=x?x.__html:void 0,P!=null&&x!==P&&(m=m||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Qe("scroll",n),m||x===P||(m=[])):(m=m||[]).push(U,P))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},rg=function(n,s,a,c){a!==c&&(s.flags|=4)};function Da(n,s){if(!Ze)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function oE(n,s,a){var c=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return nn(s.type)&&eu(),Bt(s),null;case 3:return c=s.stateNode,_o(),Xe(tn),Xe(jt),Vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(su(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,zn!==null&&(hd(zn),zn=null))),ed(n,s),Bt(s),null;case 5:Dh(s);var d=ls(ka.current);if(a=s.type,n!==null&&s.stateNode!=null)ng(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(n=ls(ir.current),su(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[rr]=s,c[Ia]=m,n=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<wa.length;d++)Qe(wa[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":bs(c,m),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",c);break;case"textarea":Os(c,m),Qe("invalid",c)}Zo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var x=m[v];v==="children"?typeof x=="string"?c.textContent!==x&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,x,n),d=["children",x]):typeof x=="number"&&c.textContent!==""+x&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,x,n),d=["children",""+x]):o.hasOwnProperty(v)&&x!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":vr(c),Il(c,m,!0);break;case"textarea":vr(c),Ko(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Jl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_t(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[rr]=s,n[Ia]=c,tg(n,s,!1,!1),s.stateNode=n;e:{switch(v=ea(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<wa.length;d++)Qe(wa[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":bs(n,c),d=Bi(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Os(n,c),d=Go(n,c),Qe("invalid",n);break;default:d=c}Zo(a,d),x=d;for(m in x)if(x.hasOwnProperty(m)){var P=x[m];m==="style"?Yo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Qo(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Kr(n,P):typeof P=="number"&&Kr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Qe("scroll",n):P!=null&&oe(n,m,P,v))}switch(a){case"input":vr(n),Il(n,c,!1);break;case"textarea":vr(n),Ko(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Er(n,!!c.multiple,m,!1):c.defaultValue!=null&&Er(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(n&&s.stateNode!=null)rg(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ls(ka.current),ls(ir.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[rr]=s,(m=c.nodeValue!==a)&&(n=mn,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=s,s.stateNode=c}return Bt(s),null;case 13:if(Xe(et),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&gn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)om(),po(),s.flags|=98560,m=!1;else if(m=su(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[rr]=s}else po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bt(s),m=!1}else zn!==null&&(hd(zn),zn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?Tt===0&&(Tt=3):pd())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return _o(),ed(n,s),n===null&&Ea(s.stateNode.containerInfo),Bt(s),null;case 10:return kh(s.type._context),Bt(s),null;case 17:return nn(s.type)&&eu(),Bt(s),null;case 19:if(Xe(et),m=s.memoizedState,m===null)return Bt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Da(m,!1);else{if(Tt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=hu(n),v!==null){for(s.flags|=128,Da(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),s.child}n=n.sibling}m.tail!==null&&We()>To&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304)}else{if(!c)if(n=hu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ze)return Bt(s),null}else 2*We()-m.renderingStartTime>To&&a!==1073741824&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=We(),s.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return fd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(yn&1073741824)!==0&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function aE(n,s){switch(Th(s),s.tag){case 1:return nn(s.type)&&eu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return _o(),Xe(tn),Xe(jt),Vh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Dh(s),null;case 13:if(Xe(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));po()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Xe(et),null;case 4:return _o(),null;case 10:return kh(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var wu=!1,zt=!1,lE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function wo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,s,c)}else a.current=null}function td(n,s,a){try{a()}catch(c){rt(n,s,c)}}var ig=!1;function uE(n,s){if(fh=ni,n=Lp(),sh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,x=-1,P=-1,U=0,Q=0,X=n,K=null;t:for(;;){for(var te;X!==a||d!==0&&X.nodeType!==3||(x=v+d),X!==m||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(te=X.firstChild)!==null;)K=X,X=te;for(;;){if(X===n)break t;if(K===a&&++U===d&&(x=v),K===m&&++Q===c&&(P=v),(te=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=te}a=x===-1||P===-1?null:{start:x,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:n,selectionRange:a},ni=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,lt=le.memoizedState,F=s.stateNode,b=F.getSnapshotBeforeUpdate(s.elementType===s.type?ue:$n(s.type,ue),lt);F.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){rt(s,s.return,Y)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return le=ig,ig=!1,le}function Oa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&td(s,a,m)}d=d.next}while(d!==c)}}function Eu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function sg(n){var s=n.alternate;s!==null&&(n.alternate=null,sg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[rr],delete s[Ia],delete s[_h],delete s[qw],delete s[Ww])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function og(n){return n.tag===5||n.tag===3||n.tag===4}function ag(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||og(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(rd(n,s,a),n=n.sibling;n!==null;)rd(n,s,a),n=n.sibling}function id(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(id(n,s,a),n=n.sibling;n!==null;)id(n,s,a),n=n.sibling}var Ot=null,Hn=!1;function hi(n,s,a){for(a=a.child;a!==null;)lg(n,s,a),a=a.sibling}function lg(n,s,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Xi,a)}catch{}switch(a.tag){case 5:zt||wo(a,s);case 6:var c=Ot,d=Hn;Ot=null,hi(n,s,a),Ot=c,Hn=d,Ot!==null&&(Hn?(n=Ot,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(Hn?(n=Ot,a=a.stateNode,n.nodeType===8?yh(n.parentNode,a):n.nodeType===1&&yh(n,a),jn(n)):yh(Ot,a.stateNode));break;case 4:c=Ot,d=Hn,Ot=a.stateNode.containerInfo,Hn=!0,hi(n,s,a),Ot=c,Hn=d;break;case 0:case 11:case 14:case 15:if(!zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&td(a,s,v),d=d.next}while(d!==c)}hi(n,s,a);break;case 1:if(!zt&&(wo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(x){rt(a,s,x)}hi(n,s,a);break;case 21:hi(n,s,a);break;case 22:a.mode&1?(zt=(c=zt)||a.memoizedState!==null,hi(n,s,a),zt=c):hi(n,s,a);break;default:hi(n,s,a)}}function ug(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lE),s.forEach(function(c){var d=_E.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function qn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,x=v;e:for(;x!==null;){switch(x.tag){case 5:Ot=x.stateNode,Hn=!1;break e;case 3:Ot=x.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=x.stateNode.containerInfo,Hn=!0;break e}x=x.return}if(Ot===null)throw Error(t(160));lg(m,v,d),Ot=null,Hn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){rt(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)cg(s,n),s=s.sibling}function cg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qn(s,n),or(n),c&4){try{Oa(3,n,n.return),Eu(3,n)}catch(ue){rt(n,n.return,ue)}try{Oa(5,n,n.return)}catch(ue){rt(n,n.return,ue)}}break;case 1:qn(s,n),or(n),c&512&&a!==null&&wo(a,a.return);break;case 5:if(qn(s,n),or(n),c&512&&a!==null&&wo(a,a.return),n.flags&32){var d=n.stateNode;try{Kr(d,"")}catch(ue){rt(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,x=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{x==="input"&&m.type==="radio"&&m.name!=null&&qo(d,m),ea(x,v);var U=ea(x,m);for(v=0;v<P.length;v+=2){var Q=P[v],X=P[v+1];Q==="style"?Yo(d,X):Q==="dangerouslySetInnerHTML"?Qo(d,X):Q==="children"?Kr(d,X):oe(d,Q,X,U)}switch(x){case"input":Wo(d,m);break;case"textarea":Vs(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?Er(d,!!m.multiple,te,!1):K!==!!m.multiple&&(m.defaultValue!=null?Er(d,!!m.multiple,m.defaultValue,!0):Er(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ia]=m}catch(ue){rt(n,n.return,ue)}}break;case 6:if(qn(s,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ue){rt(n,n.return,ue)}}break;case 3:if(qn(s,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(ue){rt(n,n.return,ue)}break;case 4:qn(s,n),or(n);break;case 13:qn(s,n),or(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ad=We())),c&4&&ug(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(zt=(U=zt)||Q,qn(s,n),zt=U):qn(s,n),or(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,te=K.child,K.tag){case 0:case 11:case 14:case 15:Oa(4,K,K.return);break;case 1:wo(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){rt(c,a,ue)}}break;case 5:wo(K,K.return);break;case 22:if(K.memoizedState!==null){fg(X);continue}}te!==null?(te.return=K,ae=te):fg(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(x=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,x.style.display=Xo("display",v))}catch(ue){rt(n,n.return,ue)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(ue){rt(n,n.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:qn(s,n),or(n),c&4&&ug(n);break;case 21:break;default:qn(s,n),or(n)}}function or(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(og(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Kr(d,""),c.flags&=-33);var m=ag(n);id(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,x=ag(n);rd(n,x,v);break;default:throw Error(t(161))}}catch(P){rt(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function cE(n,s,a){ae=n,hg(n)}function hg(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||wu;if(!v){var x=d.alternate,P=x!==null&&x.memoizedState!==null||zt;x=wu;var U=zt;if(wu=v,(zt=P)&&!U)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?pg(d):P!==null?(P.return=v,ae=P):pg(d);for(;m!==null;)ae=m,hg(m),m=m.sibling;ae=d,wu=x,zt=U}dg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):dg(n)}}function dg(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Eu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!zt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:$n(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&fm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}fm(s,v,a)}break;case 5:var x=s.stateNode;if(a===null&&s.flags&4){a=x;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&jn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&nd(s)}catch(K){rt(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function fg(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function pg(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Eu(4,s)}catch(P){rt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){rt(s,d,P)}}var m=s.return;try{nd(s)}catch(P){rt(s,m,P)}break;case 5:var v=s.return;try{nd(s)}catch(P){rt(s,v,P)}}}catch(P){rt(s,s.return,P)}if(s===n){ae=null;break}var x=s.sibling;if(x!==null){x.return=s.return,ae=x;break}ae=s.return}}var hE=Math.ceil,Tu=ce.ReactCurrentDispatcher,sd=ce.ReactCurrentOwner,Cn=ce.ReactCurrentBatchConfig,Le=0,kt=null,ft=null,Vt=0,yn=0,Eo=oi(0),Tt=0,Va=null,cs=0,Iu=0,od=0,La=null,sn=null,ad=0,To=1/0,Lr=null,Su=!1,ld=null,di=null,Au=!1,fi=null,xu=0,Ma=0,ud=null,Ru=-1,ku=0;function Xt(){return(Le&6)!==0?We():Ru!==-1?Ru:Ru=We()}function pi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Vt!==0?Vt&-Vt:Kw.transition!==null?(ku===0&&(ku=Ji()),ku):(n=be,n!==0||(n=window.event,n=n===void 0?16:ha(n.type)),n)}function Wn(n,s,a,c){if(50<Ma)throw Ma=0,ud=null,Error(t(185));Jr(n,a,c),((Le&2)===0||n!==kt)&&(n===kt&&((Le&2)===0&&(Iu|=a),Tt===4&&mi(n,Vt)),on(n,c),a===1&&Le===0&&(s.mode&1)===0&&(To=We()+500,nu&&li()))}function on(n,s){var a=n.callbackNode;Sr(n,s);var c=Yi(n,n===kt?Vt:0);if(c===0)a!==null&&oa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&oa(a),s===1)n.tag===0?Gw(gg.bind(null,n)):tm(gg.bind(null,n)),$w(function(){(Le&6)===0&&li()}),a=null;else{switch(ei(c)){case 1:a=Qi;break;case 4:a=Qr;break;case 16:a=Tn;break;case 536870912:a=kl;break;default:a=Tn}a=Sg(a,mg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function mg(n,s){if(Ru=-1,ku=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Io()&&n.callbackNode!==a)return null;var c=Yi(n,n===kt?Vt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Cu(n,c);else{s=c;var d=Le;Le|=2;var m=_g();(kt!==n||Vt!==s)&&(Lr=null,To=We()+500,ds(n,s));do try{pE();break}catch(x){yg(n,x)}while(!0);Rh(),Tu.current=m,Le=d,ft!==null?s=0:(kt=null,Vt=0,s=Tt)}if(s!==0){if(s===2&&(d=dn(n),d!==0&&(c=d,s=cd(n,d))),s===1)throw a=Va,ds(n,0),mi(n,c),on(n,We()),a;if(s===6)mi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!dE(d)&&(s=Cu(n,c),s===2&&(m=dn(n),m!==0&&(c=m,s=cd(n,m))),s===1))throw a=Va,ds(n,0),mi(n,c),on(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:fs(n,sn,Lr);break;case 3:if(mi(n,c),(c&130023424)===c&&(s=ad+500-We(),10<s)){if(Yi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Xt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gh(fs.bind(null,n,sn,Lr),s);break}fs(n,sn,Lr);break;case 4:if(mi(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Gt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hE(c/1960))-c,10<c){n.timeoutHandle=gh(fs.bind(null,n,sn,Lr),c);break}fs(n,sn,Lr);break;case 5:fs(n,sn,Lr);break;default:throw Error(t(329))}}}return on(n,We()),n.callbackNode===a?mg.bind(null,n):null}function cd(n,s){var a=La;return n.current.memoizedState.isDehydrated&&(ds(n,s).flags|=256),n=Cu(n,s),n!==2&&(s=sn,sn=a,s!==null&&hd(s)),n}function hd(n){sn===null?sn=n:sn.push.apply(sn,n)}function dE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Bn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(n,s){for(s&=~od,s&=~Iu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Gt(s),c=1<<a;n[a]=-1,s&=~c}}function gg(n){if((Le&6)!==0)throw Error(t(327));Io();var s=Yi(n,0);if((s&1)===0)return on(n,We()),null;var a=Cu(n,s);if(n.tag!==0&&a===2){var c=dn(n);c!==0&&(s=c,a=cd(n,c))}if(a===1)throw a=Va,ds(n,0),mi(n,s),on(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,fs(n,sn,Lr),on(n,We()),null}function dd(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(To=We()+500,nu&&li())}}function hs(n){fi!==null&&fi.tag===0&&(Le&6)===0&&Io();var s=Le;Le|=1;var a=Cn.transition,c=be;try{if(Cn.transition=null,be=1,n)return n()}finally{be=c,Cn.transition=a,Le=s,(Le&6)===0&&li()}}function fd(){yn=Eo.current,Xe(Eo)}function ds(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zw(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:_o(),Xe(tn),Xe(jt),Vh();break;case 5:Dh(c);break;case 4:_o();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:kh(c.type._context);break;case 22:case 23:fd()}a=a.return}if(kt=n,ft=n=gi(n.current,null),Vt=yn=s,Tt=0,Va=null,od=Iu=cs=0,sn=La=null,as!==null){for(s=0;s<as.length;s++)if(a=as[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}as=null}return n}function yg(n,s){do{var a=ft;try{if(Rh(),du.current=gu,fu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}fu=!1}if(us=0,Rt=Et=tt=null,Ca=!1,Pa=0,sd.current=null,a===null||a.return===null){Tt=1,Va=s,ft=null;break}e:{var m=n,v=a.return,x=a,P=s;if(s=Vt,x.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,Q=x,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var te=zm(v);if(te!==null){te.flags&=-257,$m(te,v,x,m,s),te.mode&1&&Bm(m,U,s),s=te,P=U;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(P),s.updateQueue=ue}else le.add(P);break e}else{if((s&1)===0){Bm(m,U,s),pd();break e}P=Error(t(426))}}else if(Ze&&x.mode&1){var lt=zm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),$m(lt,v,x,m,s),Ah(vo(P,x));break e}}m=P=vo(P,x),Tt!==4&&(Tt=2),La===null?La=[m]:La.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var F=jm(m,P,s);dm(m,F);break e;case 1:x=P;var b=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){m.flags|=65536,s&=-s,m.lanes|=s;var Y=Um(m,x,s);dm(m,Y);break e}}m=m.return}while(m!==null)}wg(a)}catch(he){s=he,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function _g(){var n=Tu.current;return Tu.current=gu,n===null?gu:n}function pd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),kt===null||(cs&268435455)===0&&(Iu&268435455)===0||mi(kt,Vt)}function Cu(n,s){var a=Le;Le|=2;var c=_g();(kt!==n||Vt!==s)&&(Lr=null,ds(n,s));do try{fE();break}catch(d){yg(n,d)}while(!0);if(Rh(),Le=a,Tu.current=c,ft!==null)throw Error(t(261));return kt=null,Vt=0,Tt}function fE(){for(;ft!==null;)vg(ft)}function pE(){for(;ft!==null&&!xl();)vg(ft)}function vg(n){var s=Ig(n.alternate,n,yn);n.memoizedProps=n.pendingProps,s===null?wg(n):ft=s,sd.current=null}function wg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=oE(a,s,yn),a!==null){ft=a;return}}else{if(a=aE(a,s),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Tt=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=n}while(s!==null);Tt===0&&(Tt=5)}function fs(n,s,a){var c=be,d=Cn.transition;try{Cn.transition=null,be=1,mE(n,s,a,c)}finally{Cn.transition=d,be=c}return null}function mE(n,s,a,c){do Io();while(fi!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(He(n,m),n===kt&&(ft=kt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Au||(Au=!0,Sg(Tn,function(){return Io(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Cn.transition,Cn.transition=null;var v=be;be=1;var x=Le;Le|=4,sd.current=null,uE(n,a),cg(a,n),Vw(ph),ni=!!fh,ph=fh=null,n.current=a,cE(a),Yc(),Le=x,be=v,Cn.transition=m}else n.current=a;if(Au&&(Au=!1,fi=n,xu=d),m=n.pendingLanes,m===0&&(di=null),Cl(a.stateNode),on(n,We()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Su)throw Su=!1,n=ld,ld=null,n;return(xu&1)!==0&&n.tag!==0&&Io(),m=n.pendingLanes,(m&1)!==0?n===ud?Ma++:(Ma=0,ud=n):Ma=0,li(),null}function Io(){if(fi!==null){var n=ei(xu),s=Cn.transition,a=be;try{if(Cn.transition=null,be=16>n?16:n,fi===null)var c=!1;else{if(n=fi,fi=null,xu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var x=m.deletions;if(x!==null){for(var P=0;P<x.length;P++){var U=x[P];for(ae=U;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Oa(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,te=Q.return;if(sg(Q),Q===U){ae=null;break}if(K!==null){K.return=te,ae=K;break}ae=te}}}var le=m.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var lt=ue.sibling;ue.sibling=null,ue=lt}while(ue!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var F=m.sibling;if(F!==null){F.return=m.return,ae=F;break e}ae=m.return}}var b=n.current;for(ae=b;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=b;ae!==null;){if(x=ae,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Eu(9,x)}}catch(he){rt(x,x.return,he)}if(x===v){ae=null;break e}var Y=x.sibling;if(Y!==null){Y.return=x.return,ae=Y;break e}ae=x.return}}if(Le=d,li(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Xi,n)}catch{}c=!0}return c}finally{be=a,Cn.transition=s}}return!1}function Eg(n,s,a){s=vo(a,s),s=jm(n,s,1),n=ci(n,s,1),s=Xt(),n!==null&&(Jr(n,1,s),on(n,s))}function rt(n,s,a){if(n.tag===3)Eg(n,n,a);else for(;s!==null;){if(s.tag===3){Eg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){n=vo(a,n),n=Um(s,n,1),s=ci(s,n,1),n=Xt(),s!==null&&(Jr(s,1,n),on(s,n));break}}s=s.return}}function gE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Xt(),n.pingedLanes|=n.suspendedLanes&a,kt===n&&(Vt&a)===a&&(Tt===4||Tt===3&&(Vt&130023424)===Vt&&500>We()-ad?ds(n,0):od|=a),on(n,s)}function Tg(n,s){s===0&&((n.mode&1)===0?s=1:(s=qs,qs<<=1,(qs&130023424)===0&&(qs=4194304)));var a=Xt();n=Dr(n,s),n!==null&&(Jr(n,s,a),on(n,a))}function yE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Tg(n,a)}function _E(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Tg(n,a)}var Ig;Ig=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||tn.current)rn=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return rn=!1,sE(n,s,a);rn=(n.flags&131072)!==0}else rn=!1,Ze&&(s.flags&1048576)!==0&&nm(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(n,s),n=s.pendingProps;var d=co(s,jt.current);yo(s,a),d=Fh(null,s,c,n,d,a);var m=jh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,nn(c)?(m=!0,tu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Nh(s),d.updater=yu,s.stateNode=d,d._reactInternals=s,qh(s,c,n,a),s=Qh(null,s,c,!0,m,a)):(s.tag=0,Ze&&m&&Eh(s),Qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=wE(c),n=$n(c,n),d){case 0:s=Kh(null,s,c,n,a);break e;case 1:s=Qm(null,s,c,n,a);break e;case 11:s=Hm(null,s,c,n,a);break e;case 14:s=qm(null,s,c,$n(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:$n(c,d),Kh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:$n(c,d),Qm(n,s,c,d,a);case 3:e:{if(Xm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,hm(n,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=vo(Error(t(423)),s),s=Ym(n,s,c,a,d);break e}else if(c!==d){d=vo(Error(t(424)),s),s=Ym(n,s,c,a,d);break e}else for(gn=si(s.stateNode.containerInfo.firstChild),mn=s,Ze=!0,zn=null,a=um(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){s=Vr(n,s,a);break e}Qt(n,s,c,a)}s=s.child}return s;case 5:return pm(s),n===null&&Sh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,mh(c,d)?v=null:m!==null&&mh(c,m)&&(s.flags|=32),Km(n,s),Qt(n,s,v,a),s.child;case 6:return n===null&&Sh(s),null;case 13:return Jm(n,s,a);case 4:return bh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=mo(s,null,c,a):Qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:$n(c,d),Hm(n,s,c,d,a);case 7:return Qt(n,s,s.pendingProps,a),s.child;case 8:return Qt(n,s,s.pendingProps.children,a),s.child;case 12:return Qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,Ge(au,c._currentValue),c._currentValue=v,m!==null)if(Bn(m.value,v)){if(m.children===d.children&&!tn.current){s=Vr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var x=m.dependencies;if(x!==null){v=m.child;for(var P=x.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Or(-1,a&-a),P.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),U.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Ch(m.return,a,s),x.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,x=v.alternate,x!==null&&(x.lanes|=a),Ch(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,yo(s,a),d=Rn(d),c=c(d),s.flags|=1,Qt(n,s,c,a),s.child;case 14:return c=s.type,d=$n(c,s.pendingProps),d=$n(c.type,d),qm(n,s,c,d,a);case 15:return Wm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:$n(c,d),vu(n,s),s.tag=1,nn(c)?(n=!0,tu(s)):n=!1,yo(s,a),Mm(s,c,d),qh(s,c,d,a),Qh(null,s,c,!0,n,a);case 19:return eg(n,s,a);case 22:return Gm(n,s,a)}throw Error(t(156,s.tag))};function Sg(n,s){return $s(n,s)}function vE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,s,a,c){return new vE(n,s,a,c)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wE(n){if(typeof n=="function")return md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===$e)return 14}return 2}function gi(n,s){var a=n.alternate;return a===null?(a=Pn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Pu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")md(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ps(a.children,d,m,s);case A:v=8,d|=8;break;case k:return n=Pn(12,a,s,d|2),n.elementType=k,n.lanes=m,n;case R:return n=Pn(13,a,s,d),n.elementType=R,n.lanes=m,n;case ve:return n=Pn(19,a,s,d),n.elementType=ve,n.lanes=m,n;case ze:return Nu(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:v=10;break e;case D:v=9;break e;case L:v=11;break e;case $e:v=14;break e;case St:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Pn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function ps(n,s,a,c){return n=Pn(7,n,c,s),n.lanes=a,n}function Nu(n,s,a,c){return n=Pn(22,n,c,s),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function gd(n,s,a){return n=Pn(6,n,null,s),n.lanes=a,n}function yd(n,s,a){return s=Pn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function EE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _d(n,s,a,c,d,m,v,x,P){return n=new EE(n,s,a,x,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Pn(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(m),n}function TE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Ag(n){if(!n)return ai;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(nn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(nn(a))return Zp(n,a,s)}return s}function xg(n,s,a,c,d,m,v,x,P){return n=_d(a,c,!0,n,d,m,v,x,P),n.context=Ag(null),a=n.current,c=Xt(),d=pi(a),m=Or(c,d),m.callback=s??null,ci(a,m,d),n.current.lanes=d,Jr(n,d,c),on(n,c),n}function bu(n,s,a,c){var d=s.current,m=Xt(),v=pi(d);return a=Ag(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ci(d,s,v),n!==null&&(Wn(n,d,v,m),uu(n,d,v)),v}function Du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function vd(n,s){Rg(n,s),(n=n.alternate)&&Rg(n,s)}function IE(){return null}var kg=typeof reportError=="function"?reportError:function(n){console.error(n)};function wd(n){this._internalRoot=n}Ou.prototype.render=wd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(n,s,null,null)},Ou.prototype.unmount=wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;hs(function(){bu(null,n,null,null)}),s[Cr]=null}};function Ou(n){this._internalRoot=n}Ou.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ol();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Zn.length&&s!==0&&s<Zn[a].priority;a++);Zn.splice(a,0,n),a===0&&Ml(n)}};function Ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function SE(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=Du(v);m.call(U)}}var v=xg(s,c,n,0,null,!1,!1,"",Cg);return n._reactRootContainer=v,n[Cr]=v.current,Ea(n.nodeType===8?n.parentNode:n),hs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var x=c;c=function(){var U=Du(P);x.call(U)}}var P=_d(n,0,!1,null,null,!1,!1,"",Cg);return n._reactRootContainer=P,n[Cr]=P.current,Ea(n.nodeType===8?n.parentNode:n),hs(function(){bu(s,P,a,c)}),P}function Lu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var x=d;d=function(){var P=Du(v);x.call(P)}}bu(s,v,n,d)}else v=SE(a,s,n,d,c);return Du(v)}bl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Xr(s.pendingLanes);a!==0&&(Zr(s,a|1),on(s,We()),(Le&6)===0&&(To=We()+500,li()))}break;case 13:hs(function(){var c=Dr(n,1);if(c!==null){var d=Xt();Wn(c,n,1,d)}}),vd(n,1)}},Ws=function(n){if(n.tag===13){var s=Dr(n,134217728);if(s!==null){var a=Xt();Wn(s,n,134217728,a)}vd(n,134217728)}},Dl=function(n){if(n.tag===13){var s=pi(n),a=Dr(n,s);if(a!==null){var c=Xt();Wn(a,n,s,c)}vd(n,s)}},Ol=function(){return be},Vl=function(n,s){var a=be;try{return be=n,s()}finally{be=a}},Ms=function(n,s,a){switch(s){case"input":if(Wo(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Zl(c);if(!d)throw Error(t(90));Ns(c),Wo(c,d)}}}break;case"textarea":Vs(n,a);break;case"select":s=a.value,s!=null&&Er(n,!!a.multiple,s,!1)}},qi=dd,na=hs;var AE={usingClientEntryPoint:!1,Events:[Sa,lo,Zl,Yn,ta,dd]},Fa={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xE={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Xi=Mu.inject(xE),hn=Mu}catch{}}return an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,an.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return TE(n,s,null,a)},an.createRoot=function(n,s){if(!Ed(n))throw Error(t(299));var a=!1,c="",d=kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_d(n,1,!1,null,null,a,!1,c,d),n[Cr]=s.current,Ea(n.nodeType===8?n.parentNode:n),new wd(s)},an.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(s),n=n===null?null:n.stateNode,n},an.flushSync=function(n){return hs(n)},an.hydrate=function(n,s,a){if(!Vu(s))throw Error(t(200));return Lu(null,n,s,!0,a)},an.hydrateRoot=function(n,s,a){if(!Ed(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=kg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=xg(s,null,n,1,a??null,d,!1,m,v),n[Cr]=s.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Ou(s)},an.render=function(n,s,a){if(!Vu(s))throw Error(t(200));return Lu(null,n,s,!1,a)},an.unmountComponentAtNode=function(n){if(!Vu(n))throw Error(t(40));return n._reactRootContainer?(hs(function(){Lu(null,null,n,!1,function(){n._reactRootContainer=null,n[Cr]=null})}),!0):!1},an.unstable_batchedUpdates=dd,an.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Lu(n,s,a,!1,c)},an.version="18.3.1-next-f1338f8080-20240426",an}var Mg;function OE(){if(Mg)return Sd.exports;Mg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=DE(),Sd.exports}var Fg;function VE(){if(Fg)return Fu;Fg=1;var r=OE();return Fu.createRoot=r.createRoot,Fu.hydrateRoot=r.hydrateRoot,Fu}var LE=VE(),fe=_f();const ME=()=>{};var jg={};/**
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
 */const C_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},FE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,I=(l&3)<<4|f>>4;let S=(f&15)<<2|_>>6,V=_&63;g||(V=64,h||(S=64)),i.push(t[w],t[I],t[S],t[V])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(C_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):FE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||I==null)throw new jE;const S=l<<2|f>>4;if(i.push(S),_!==64){const V=f<<4&240|_>>2;if(i.push(V),I!==64){const $=_<<6&192|I;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UE=function(r){const e=C_(r);return P_.encodeByteArray(e,!0)},rc=function(r){return UE(r).replace(/\./g,"")},N_=function(r){try{return P_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zE=()=>BE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof jg>"u")return;const r=jg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},HE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&N_(r[1]);return e&&JSON.parse(e)},Ic=()=>{try{return ME()||zE()||$E()||HE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},b_=r=>{var e,t;return(t=(e=Ic())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},D_=r=>{const e=b_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},O_=()=>{var r;return(r=Ic())===null||r===void 0?void 0:r.config},V_=r=>{var e;return(e=Ic())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class qE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Mi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function L_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[rc(JSON.stringify(t)),rc(JSON.stringify(h)),""].join(".")}const qa={};function WE(){const r={prod:[],emulator:[]};for(const e of Object.keys(qa))qa[e]?r.emulator.push(e):r.prod.push(e);return r}function GE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ug=!1;function wf(r,e){if(typeof window>"u"||typeof document>"u"||!Mi(window.location.host)||qa[r]===e||qa[r]||Ug)return;qa[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=WE().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,V){S.setAttribute("width","24"),S.setAttribute("id",V),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ug=!0,h()},S}function w(S,V){S.setAttribute("id",V),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=GE(i),V=t("text"),$=document.getElementById(V)||document.createElement("span"),q=t("learnmore"),B=document.getElementById(q)||document.createElement("a"),ne=t("preprendIcon"),se=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const oe=S.element;f(oe),w(B,q);const ce=_();g(se,ne),oe.append(se,$,B,ce),document.body.appendChild(oe)}l?($.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function QE(){var r;const e=(r=Ic())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function JE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZE(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function eT(){return!QE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tT(){try{return typeof indexedDB=="object"}catch{return!1}}function nT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const rT="FirebaseError";class _r extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rT,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?iT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new _r(o,f,i)}}function iT(r,e){return r.replace(sT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const sT=/\{\$([^}]+)}/g;function oT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Es(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Bg(l)&&Bg(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Bg(r){return r!==null&&typeof r=="object"}/**
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
 */function cl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function aT(r,e){const t=new lT(r,e);return t.subscribe.bind(t)}class lT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");uT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Rd),o.error===void 0&&(o.error=Rd),o.complete===void 0&&(o.complete=Rd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Rd(){}/**
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
 */function it(r){return r&&r._delegate?r._delegate:r}class Ci{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class cT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new qE;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dT(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hT(r){return r===ms?void 0:r}function dT(r){return r.instantiationMode==="EAGER"}/**
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
 */class fT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const pT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},mT=Ce.INFO,gT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},yT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=gT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const _T=(r,e)=>e.some(t=>r instanceof t);let zg,$g;function vT(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wT(){return $g||($g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M_=new WeakMap,Bd=new WeakMap,F_=new WeakMap,kd=new WeakMap,Tf=new WeakMap;function ET(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ai(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&M_.set(t,r)}).catch(()=>{}),Tf.set(e,r),e}function TT(r){if(Bd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Bd.set(r,e)}let zd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Bd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||F_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function IT(r){zd=r(zd)}function ST(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Cd(this),e,...t);return F_.set(i,e.sort?e.sort():[e]),Ai(i)}:wT().includes(r)?function(...e){return r.apply(Cd(this),e),Ai(M_.get(this))}:function(...e){return Ai(r.apply(Cd(this),e))}}function AT(r){return typeof r=="function"?ST(r):(r instanceof IDBTransaction&&TT(r),_T(r,vT())?new Proxy(r,zd):r)}function Ai(r){if(r instanceof IDBRequest)return ET(r);if(kd.has(r))return kd.get(r);const e=AT(r);return e!==r&&(kd.set(r,e),Tf.set(e,r)),e}const Cd=r=>Tf.get(r);function xT(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ai(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ai(h.result),g.oldVersion,g.newVersion,Ai(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const RT=["get","getKey","getAll","getAllKeys","count"],kT=["put","add","delete","clear"],Pd=new Map;function Hg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=kT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||RT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Pd.set(e,l),l}IT(r=>({...r,get:(e,t,i)=>Hg(e,t)||r.get(e,t,i),has:(e,t)=>!!Hg(e,t)||r.has(e,t)}));/**
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
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function PT(r){const e=r.getComponent();return e?.type==="VERSION"}const $d="@firebase/app",qg="0.13.2";/**
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
 */const Ur=new Ef("@firebase/app"),NT="@firebase/app-compat",bT="@firebase/analytics-compat",DT="@firebase/analytics",OT="@firebase/app-check-compat",VT="@firebase/app-check",LT="@firebase/auth",MT="@firebase/auth-compat",FT="@firebase/database",jT="@firebase/data-connect",UT="@firebase/database-compat",BT="@firebase/functions",zT="@firebase/functions-compat",$T="@firebase/installations",HT="@firebase/installations-compat",qT="@firebase/messaging",WT="@firebase/messaging-compat",GT="@firebase/performance",KT="@firebase/performance-compat",QT="@firebase/remote-config",XT="@firebase/remote-config-compat",YT="@firebase/storage",JT="@firebase/storage-compat",ZT="@firebase/firestore",eI="@firebase/ai",tI="@firebase/firestore-compat",nI="firebase",rI="11.10.0";/**
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
 */const Hd="[DEFAULT]",iI={[$d]:"fire-core",[NT]:"fire-core-compat",[DT]:"fire-analytics",[bT]:"fire-analytics-compat",[VT]:"fire-app-check",[OT]:"fire-app-check-compat",[LT]:"fire-auth",[MT]:"fire-auth-compat",[FT]:"fire-rtdb",[jT]:"fire-data-connect",[UT]:"fire-rtdb-compat",[BT]:"fire-fn",[zT]:"fire-fn-compat",[$T]:"fire-iid",[HT]:"fire-iid-compat",[qT]:"fire-fcm",[WT]:"fire-fcm-compat",[GT]:"fire-perf",[KT]:"fire-perf-compat",[QT]:"fire-rc",[XT]:"fire-rc-compat",[YT]:"fire-gcs",[JT]:"fire-gcs-compat",[ZT]:"fire-fst",[tI]:"fire-fst-compat",[eI]:"fire-vertex","fire-js":"fire-js",[nI]:"fire-js-all"};/**
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
 */const ic=new Map,sI=new Map,qd=new Map;function Wg(r,e){try{r.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ts(r){const e=r.name;if(qd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;qd.set(e,r);for(const t of ic.values())Wg(t,r);for(const t of sI.values())Wg(t,r);return!0}function Sc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Gn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const oI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new ul("app","Firebase",oI);/**
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
 */class aI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=rI;function j_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hd,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw xi.create("bad-app-name",{appName:String(o)});if(t||(t=O_()),!t)throw xi.create("no-options");const l=ic.get(o);if(l){if(Es(t,l.options)&&Es(i,l.config))return l;throw xi.create("duplicate-app",{appName:o})}const h=new fT(o);for(const g of qd.values())h.addComponent(g);const f=new aI(t,i,h);return ic.set(o,f),f}function If(r=Hd){const e=ic.get(r);if(!e&&r===Hd&&O_())return j_();if(!e)throw xi.create("no-app",{appName:r});return e}function cr(r,e,t){var i;let o=(i=iI[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(f.join(" "));return}Ts(new Ci(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const lI="firebase-heartbeat-database",uI=1,Ja="firebase-heartbeat-store";let Nd=null;function U_(){return Nd||(Nd=xT(lI,uI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ja)}catch(t){console.warn(t)}}}}).catch(r=>{throw xi.create("idb-open",{originalErrorMessage:r.message})})),Nd}async function cI(r){try{const t=(await U_()).transaction(Ja),i=await t.objectStore(Ja).get(B_(r));return await t.done,i}catch(e){if(e instanceof _r)Ur.warn(e.message);else{const t=xi.create("idb-get",{originalErrorMessage:e?.message});Ur.warn(t.message)}}}async function Gg(r,e){try{const i=(await U_()).transaction(Ja,"readwrite");await i.objectStore(Ja).put(e,B_(r)),await i.done}catch(t){if(t instanceof _r)Ur.warn(t.message);else{const i=xi.create("idb-set",{originalErrorMessage:t?.message});Ur.warn(i.message)}}}function B_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const hI=1024,dI=30;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Kg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>dI){const h=gI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kg(),{heartbeatsToSend:i,unsentEntries:o}=pI(this._heartbeatsCache.heartbeats),l=rc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function pI(r,e=hI){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Qg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class mI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?nT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Qg(r){return rc(JSON.stringify({version:2,heartbeats:r})).length}function gI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function yI(r){Ts(new Ci("platform-logger",e=>new CT(e),"PRIVATE")),Ts(new Ci("heartbeat",e=>new fI(e),"PRIVATE")),cr($d,qg,r),cr($d,qg,"esm2017"),cr("fire-js","")}yI("");var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,z_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function k(){}k.prototype=A.prototype,N.D=A.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(C,D,L){for(var R=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)R[ve-2]=arguments[ve];return A.prototype[D].apply(C,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,A,k){k||(k=0);var C=Array(16);if(typeof A=="string")for(var D=0;16>D;++D)C[D]=A.charCodeAt(k++)|A.charCodeAt(k++)<<8|A.charCodeAt(k++)<<16|A.charCodeAt(k++)<<24;else for(D=0;16>D;++D)C[D]=A[k++]|A[k++]<<8|A[k++]<<16|A[k++]<<24;A=N.g[0],k=N.g[1],D=N.g[2];var L=N.g[3],R=A+(L^k&(D^L))+C[0]+3614090360&4294967295;A=k+(R<<7&4294967295|R>>>25),R=L+(D^A&(k^D))+C[1]+3905402710&4294967295,L=A+(R<<12&4294967295|R>>>20),R=D+(k^L&(A^k))+C[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(A^D&(L^A))+C[3]+3250441966&4294967295,k=D+(R<<22&4294967295|R>>>10),R=A+(L^k&(D^L))+C[4]+4118548399&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(D^A&(k^D))+C[5]+1200080426&4294967295,L=A+(R<<12&4294967295|R>>>20),R=D+(k^L&(A^k))+C[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(A^D&(L^A))+C[7]+4249261313&4294967295,k=D+(R<<22&4294967295|R>>>10),R=A+(L^k&(D^L))+C[8]+1770035416&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(D^A&(k^D))+C[9]+2336552879&4294967295,L=A+(R<<12&4294967295|R>>>20),R=D+(k^L&(A^k))+C[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(A^D&(L^A))+C[11]+2304563134&4294967295,k=D+(R<<22&4294967295|R>>>10),R=A+(L^k&(D^L))+C[12]+1804603682&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(D^A&(k^D))+C[13]+4254626195&4294967295,L=A+(R<<12&4294967295|R>>>20),R=D+(k^L&(A^k))+C[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(A^D&(L^A))+C[15]+1236535329&4294967295,k=D+(R<<22&4294967295|R>>>10),R=A+(D^L&(k^D))+C[1]+4129170786&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(A^k))+C[6]+3225465664&4294967295,L=A+(R<<9&4294967295|R>>>23),R=D+(A^k&(L^A))+C[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(D^L))+C[0]+3921069994&4294967295,k=D+(R<<20&4294967295|R>>>12),R=A+(D^L&(k^D))+C[5]+3593408605&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(A^k))+C[10]+38016083&4294967295,L=A+(R<<9&4294967295|R>>>23),R=D+(A^k&(L^A))+C[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(D^L))+C[4]+3889429448&4294967295,k=D+(R<<20&4294967295|R>>>12),R=A+(D^L&(k^D))+C[9]+568446438&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(A^k))+C[14]+3275163606&4294967295,L=A+(R<<9&4294967295|R>>>23),R=D+(A^k&(L^A))+C[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(D^L))+C[8]+1163531501&4294967295,k=D+(R<<20&4294967295|R>>>12),R=A+(D^L&(k^D))+C[13]+2850285829&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(A^k))+C[2]+4243563512&4294967295,L=A+(R<<9&4294967295|R>>>23),R=D+(A^k&(L^A))+C[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(D^L))+C[12]+2368359562&4294967295,k=D+(R<<20&4294967295|R>>>12),R=A+(k^D^L)+C[5]+4294588738&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^D)+C[8]+2272392833&4294967295,L=A+(R<<11&4294967295|R>>>21),R=D+(L^A^k)+C[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^A)+C[14]+4259657740&4294967295,k=D+(R<<23&4294967295|R>>>9),R=A+(k^D^L)+C[1]+2763975236&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^D)+C[4]+1272893353&4294967295,L=A+(R<<11&4294967295|R>>>21),R=D+(L^A^k)+C[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^A)+C[10]+3200236656&4294967295,k=D+(R<<23&4294967295|R>>>9),R=A+(k^D^L)+C[13]+681279174&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^D)+C[0]+3936430074&4294967295,L=A+(R<<11&4294967295|R>>>21),R=D+(L^A^k)+C[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^A)+C[6]+76029189&4294967295,k=D+(R<<23&4294967295|R>>>9),R=A+(k^D^L)+C[9]+3654602809&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^D)+C[12]+3873151461&4294967295,L=A+(R<<11&4294967295|R>>>21),R=D+(L^A^k)+C[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^A)+C[2]+3299628645&4294967295,k=D+(R<<23&4294967295|R>>>9),R=A+(D^(k|~L))+C[0]+4096336452&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~D))+C[7]+1126891415&4294967295,L=A+(R<<10&4294967295|R>>>22),R=D+(A^(L|~k))+C[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~A))+C[5]+4237533241&4294967295,k=D+(R<<21&4294967295|R>>>11),R=A+(D^(k|~L))+C[12]+1700485571&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~D))+C[3]+2399980690&4294967295,L=A+(R<<10&4294967295|R>>>22),R=D+(A^(L|~k))+C[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~A))+C[1]+2240044497&4294967295,k=D+(R<<21&4294967295|R>>>11),R=A+(D^(k|~L))+C[8]+1873313359&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~D))+C[15]+4264355552&4294967295,L=A+(R<<10&4294967295|R>>>22),R=D+(A^(L|~k))+C[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~A))+C[13]+1309151649&4294967295,k=D+(R<<21&4294967295|R>>>11),R=A+(D^(k|~L))+C[4]+4149444226&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~D))+C[11]+3174756917&4294967295,L=A+(R<<10&4294967295|R>>>22),R=D+(A^(L|~k))+C[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~A))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}i.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var k=A-this.blockSize,C=this.B,D=this.h,L=0;L<A;){if(D==0)for(;L<=k;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<A;)if(C[D++]=N.charCodeAt(L++),D==this.blockSize){o(this,C),D=0;break}}else for(;L<A;)if(C[D++]=N[L++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=A},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var k=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=k&255,k/=256;for(this.u(N),N=Array(16),A=k=0;4>A;++A)for(var C=0;32>C;C+=8)N[k++]=this.g[A]>>>C&255;return N};function l(N,A){var k=f;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=A(N)}function h(N,A){this.h=A;for(var k=[],C=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;C&&L==A||(k[D]=L,C=!1)}this.g=k}var f={};function g(N){return-128<=N&&128>N?l(N,function(A){return new h([A|0],0>A?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return I;if(0>N)return B(_(-N));for(var A=[],k=1,C=0;N>=k;C++)A[C]=N/k|0,k*=4294967296;return new h(A,0)}function w(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return B(w(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(A,8)),C=I,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),R=parseInt(N.substring(D,D+L),A);8>L?(L=_(Math.pow(A,L)),C=C.j(L).add(_(R))):(C=C.j(k),C=C.add(_(R)))}return C}var I=g(0),S=g(1),V=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-B(this).m();for(var N=0,A=1,k=0;k<this.g.length;k++){var C=this.i(k);N+=(0<=C?C:4294967296+C)*A,A*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if($(this))return"0";if(q(this))return"-"+B(this).toString(N);for(var A=_(Math.pow(N,6)),k=this,C="";;){var D=ce(k,A).g;k=ne(k,D.j(A));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=D,$(k))return L+C;for(;6>L.length;)L="0"+L;C=L+C}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function $(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function q(N){return N.h==-1}r.l=function(N){return N=ne(this,N),q(N)?-1:$(N)?0:1};function B(N){for(var A=N.g.length,k=[],C=0;C<A;C++)k[C]=~N.g[C];return new h(k,~N.h).add(S)}r.abs=function(){return q(this)?B(this):this},r.add=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],C=0,D=0;D<=A;D++){var L=C+(this.i(D)&65535)+(N.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);C=R>>>16,L&=65535,R&=65535,k[D]=R<<16|L}return new h(k,k[k.length-1]&-2147483648?-1:0)};function ne(N,A){return N.add(B(A))}r.j=function(N){if($(this)||$(N))return I;if(q(this))return q(N)?B(this).j(B(N)):B(B(this).j(N));if(q(N))return B(this.j(B(N)));if(0>this.l(V)&&0>N.l(V))return _(this.m()*N.m());for(var A=this.g.length+N.g.length,k=[],C=0;C<2*A;C++)k[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<N.g.length;D++){var L=this.i(C)>>>16,R=this.i(C)&65535,ve=N.i(D)>>>16,$e=N.i(D)&65535;k[2*C+2*D]+=R*$e,se(k,2*C+2*D),k[2*C+2*D+1]+=L*$e,se(k,2*C+2*D+1),k[2*C+2*D+1]+=R*ve,se(k,2*C+2*D+1),k[2*C+2*D+2]+=L*ve,se(k,2*C+2*D+2)}for(C=0;C<A;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=A;C<2*A;C++)k[C]=0;return new h(k,0)};function se(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function oe(N,A){this.g=N,this.h=A}function ce(N,A){if($(A))throw Error("division by zero");if($(N))return new oe(I,I);if(q(N))return A=ce(B(N),A),new oe(B(A.g),B(A.h));if(q(A))return A=ce(N,B(A)),new oe(B(A.g),A.h);if(30<N.g.length){if(q(N)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var k=S,C=A;0>=C.l(N);)k=Ne(k),C=Ne(C);var D=Te(k,1),L=Te(C,1);for(C=Te(C,2),k=Te(k,2);!$(C);){var R=L.add(C);0>=R.l(N)&&(D=D.add(k),L=R),C=Te(C,1),k=Te(k,1)}return A=ne(N,D.j(A)),new oe(D,A)}for(D=I;0<=N.l(A);){for(k=Math.max(1,Math.floor(N.m()/A.m())),C=Math.ceil(Math.log(k)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),L=_(k),R=L.j(A);q(R)||0<R.l(N);)k-=C,L=_(k),R=L.j(A);$(L)&&(L=S),D=D.add(L),N=ne(N,R)}return new oe(D,N)}r.A=function(N){return ce(this,N).h},r.and=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],C=0;C<A;C++)k[C]=this.i(C)&N.i(C);return new h(k,this.h&N.h)},r.or=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],C=0;C<A;C++)k[C]=this.i(C)|N.i(C);return new h(k,this.h|N.h)},r.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],C=0;C<A;C++)k[C]=this.i(C)^N.i(C);return new h(k,this.h^N.h)};function Ne(N){for(var A=N.g.length+1,k=[],C=0;C<A;C++)k[C]=N.i(C)<<1|N.i(C-1)>>>31;return new h(k,N.h)}function Te(N,A){var k=A>>5;A%=32;for(var C=N.g.length-k,D=[],L=0;L<C;L++)D[L]=0<A?N.i(L+k)>>>A|N.i(L+k+1)<<32-A:N.i(L+k);return new h(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,z_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ri=h}).apply(typeof Xg<"u"?Xg:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $_,Ba,H_,Gu,Wd,q_,W_,G_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,M={next:function(){if(!E&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function I(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function S(u,p,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,S.apply(null,arguments)}function V(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,M,z){for(var J=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)J[Be-2]=arguments[Be];return p.prototype[M].apply(E,J)}}function q(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=u.length||0,z=E.length||0;u.length=M+z;for(let J=0;J<z;J++)u[M+J]=E[J]}else u.push(E)}}class ne{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function se(u){return/^[\s\xa0]*$/.test(u)}function oe(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Ne=oe().indexOf("Gecko")!=-1&&!(oe().toLowerCase().indexOf("webkit")!=-1&&oe().indexOf("Edge")==-1)&&!(oe().indexOf("Trident")!=-1||oe().indexOf("MSIE")!=-1)&&oe().indexOf("Edge")==-1;function Te(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function A(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let z=0;z<k.length;z++)y=k[z],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function L(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ve{constructor(){this.h=this.g=null}add(p,y){const E=$e.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var $e=new ne(()=>new St,u=>u.reset());class St{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Z=!1,me=new ve,ie=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){L(y)}var p=$e;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Z=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Re(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ne){e:{try{ce(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}$(Re,de);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),je=0;function qe(u,p,y,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++je,this.da=this.fa=!1}function At(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function vr(u){this.src=u,this.g={},this.h=0}vr.prototype.add=function(u,p,y,E,M){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var J=Gr(u,p,E,M);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new qe(p,this.src,z,!!E,M),p.fa=y,u.push(p)),p};function Ns(u,p){var y=p.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,p,void 0),z;(z=0<=M)&&Array.prototype.splice.call(E,M,1),z&&(At(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Gr(u,p,y,E){for(var M=0;M<u.length;++M){var z=u[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return M}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),bs={};function qo(u,p,y,E,M){if(Array.isArray(p)){for(var z=0;z<p.length;z++)qo(u,p[z],y,E,M);return null}return y=Ko(y),u&&u[Fe]?u.K(p,y,_(E)?!!E.capture:!1,M):Wo(u,p,y,!1,E,M)}function Wo(u,p,y,E,M,z){if(!p)throw Error("Invalid event type");var J=_(M)?!!M.capture:!!M,Be=Os(u);if(Be||(u[Bi]=Be=new vr(u)),y=Be.add(p,y,E,J,z),y.proxy)return y;if(E=Il(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ae||(M=J),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(Er(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Il(){function u(y){return p.call(u.src,u.listener,y)}const p=Go;return u}function Ds(u,p,y,E,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)Ds(u,p[z],y,E,M);else E=_(E)?!!E.capture:!!E,y=Ko(y),u&&u[Fe]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=Gr(z,y,E,M),-1<y&&(At(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Os(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Gr(p,y,E,M)),(y=-1<u?p[u]:null)&&wr(y))}function wr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Fe])Ns(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(Er(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Os(p))?(Ns(y,u),y.h==0&&(y.src=null,p[Bi]=null)):At(u)}}}function Er(u){return u in bs?bs[u]:bs[u]="on"+u}function Go(u,p){if(u.da)u=!0;else{p=new Re(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&wr(u),u=y.call(E,p)}return u}function Os(u){return u=u[Bi],u instanceof vr?u:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(u){return typeof u=="function"?u:(u[Vs]||(u[Vs]=function(p){return u.handleEvent(p)}),u[Vs])}function _t(){G.call(this),this.i=new vr(this),this.M=this,this.F=null}$(_t,G),_t.prototype[Fe]=!0,_t.prototype.removeEventListener=function(u,p,y,E){Ds(this,u,p,y,E)};function vt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var M=p;p=new de(E,u),C(p,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var J=p.g=y[z];M=Tr(J,E,!0,p)&&M}if(J=p.g=u,M=Tr(J,E,!0,p)&&M,M=Tr(J,E,!1,p)&&M,y)for(z=0;z<y.length;z++)J=p.g=y[z],M=Tr(J,E,!1,p)&&M}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)At(y[E]);delete u.g[p],u.h--}}this.F=null},_t.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},_t.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function Tr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,z=0;z<p.length;++z){var J=p[z];if(J&&!J.da&&J.capture==y){var Be=J.listener,wt=J.ha||J.src;J.fa&&Ns(u.i,J),M=Be.call(wt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Qo(u,p,y){if(typeof u=="function")y&&(u=S(u,y));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Kr(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class zi extends G{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(u){G.call(this),this.h=u,this.g={}}$($i,G);var Xo=[];function Yo(u){Te(u.g,function(p,y){this.g.hasOwnProperty(y)&&wr(p)},u),u.g={}}$i.prototype.N=function(){$i.aa.N.call(this),Yo(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=f.JSON.stringify,Zo=f.JSON.parse,ea=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Hi(){}Hi.prototype.h=null;function Ls(u){return u.h||(u.h=u.i())}function Ms(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xn(){de.call(this,"d")}$(Xn,de);function Fs(){de.call(this,"c")}$(Fs,de);var Yn={},ta=null;function qi(){return ta=ta||new _t}Yn.La="serverreachability";function na(u){de.call(this,Yn.La,u)}$(na,de);function Ir(u){const p=qi();vt(p,new na(p))}Yn.STAT_EVENT="statevent";function ra(u,p){de.call(this,Yn.STAT_EVENT,u),this.stat=p}$(ra,de);function at(u){const p=qi();vt(p,new ra(p,u))}Yn.Ma="timingevent";function js(u,p){de.call(this,Yn.Ma,u),this.size=p}$(js,de);function bn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Gi(u,p,y,E,M,z){u.info(function(){if(u.g)if(z)for(var J="",Be=z.split("&"),wt=0;wt<Be.length;wt++){var Oe=Be[wt].split("=");if(1<Oe.length){var xt=Oe[0];Oe=Oe[1];var dt=xt.split("_");J=2<=dt.length&&dt[1]=="type"?J+(xt+"="+Oe+"&"):J+(xt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+J})}function Us(u,p,y,E,M,z,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+J})}function Dn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Xc(u,y)+(E?" "+E:"")})}function ia(u,p){u.info(function(){return"TIMEOUT: "+p})}Wi.prototype.info=function(){};function Xc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<M.length;J++)M[J]=""}}}}return Jo(y)}catch{return p}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Ki(){}$(Ki,Hi),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},On=new Ki;function Vn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var sa={},zs={};function $s(u,p,y){u.L=1,u.v=Zr(dn(p)),u.m=y,u.P=!0,oa(u,null)}function oa(u,p){u.F=Date.now(),We(u),u.A=dn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),ti(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Al,u.g=$l(u.j,y?p:null,!u.m),0<u.O&&(u.M=new zi(S(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Xo[0]=M.toString()),M=Xo);for(var z=0;z<M.length;z++){var J=qo(y,M[z],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Ir(),Gi(u.i,u.u,u.A,u.l,u.R,u.m)}Vn.prototype.ca=function(u){u=u.target;const p=this.M;p&&en(u)==3?p.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)e:{const dt=en(this.g);var p=this.g.Ba();const Sn=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||da(this.g)))){this.J||dt!=4||p==7||(p==8||0>=Sn?Ir(3):Ir(2)),Qi(this);var y=this.g.Z();this.X=y;t:if(xl(this)){var E=da(this.g);u="";var M=E.length,z=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Qr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(z&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Us(this.i,this.u,this.A,this.l,this.R,dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,wt=this.g;if((Be=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(Be)){var Oe=Be;break t}}Oe=null}if(y=Oe)Dn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,y);else{this.o=!1,this.s=3,at(12),Tn(this),Qr(this);break e}}if(this.P){y=!0;let pn;for(;!this.J&&this.C<J.length;)if(pn=Yc(this,J),pn==zs){dt==4&&(this.s=4,at(14),y=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==sa){this.s=4,at(15),Dn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Dn(this.i,this.l,pn,null),aa(this,pn);if(xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||J.length!=0||this.h.h||(this.s=1,at(16),y=!1),this.o=this.o&&y,!y)Dn(this.i,this.l,J,"[Invalid Chunked Response]"),Tn(this),Qr(this);else if(0<J.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),pa(xt),xt.M=!0,at(11))}}else Dn(this.i,this.l,J,null),aa(this,J);dt==4&&Tn(this),this.o&&!this.J&&(dt==4?eo(this.j,this):(this.o=!1,We(this)))}else Qs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Tn(this),Qr(this)}}}catch{}finally{}};function xl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Yc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?zs:(y=Number(p.substring(y,E)),isNaN(y)?sa:(E+=1,E+y>p.length?zs:(p=p.slice(E,E+y),u.C=E+y,p)))}Vn.prototype.cancel=function(){this.J=!0,Tn(this)};function We(u){u.S=Date.now()+u.I,Rl(u,u.I)}function Rl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=bn(S(u.ba,u),p)}function Qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Vn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ia(this.i,this.A),this.L!=2&&(Ir(),at(17)),Tn(this),this.s=2,Qr(this)):Rl(this,this.S-u)};function Qr(u){u.j.G==0||u.J||eo(u.j,u)}function Tn(u){Qi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Yo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function aa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Gt(y.h,u))){if(!u.K&&Gt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Zs(y),Un(y);else break e;Js(y),at(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=bn(S(y.Za,y),6e3));if(1>=Cl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else kr(y,11)}else if((u.K||y.g==u)&&Zs(y),!se(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let Oe=M[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const xt=Oe[3];xt!=null&&(y.la=xt,y.j.info("VER="+y.la));const dt=Oe[4];dt!=null&&(y.Aa=dt,y.j.info("SVER="+y.Aa));const Sn=Oe[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(E=1.5*Sn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const pn=u.g;if(pn){const ns=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var z=E.h;z.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(la(z,z.h),z.h=null))}if(E.D){const no=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(E.ya=no,He(E.I,E.D,no))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=zl(E,E.J?E.ia:null,E.W),J.K){Pl(E.h,J);var Be=J,wt=E.L;wt&&(Be.I=wt),Be.B&&(Qi(Be),We(Be)),E.g=J}else ts(E);0<y.i.length&&tr(y)}else Oe[0]!="stop"&&Oe[0]!="close"||kr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?kr(y,7):Dt(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}Ir(4)}catch{}}var kl=class{constructor(u,p){this.g=u,this.map=p}};function Xi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Cl(u){return u.h?1:u.g?u.g.size:0}function Gt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function la(u,p){u.g?u.g.add(p):u.h=p}function Pl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Xi.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Nl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return q(u.i)}function Hs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Xr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=qs(u),E=Hs(u),M=E.length,z=0;z<M;z++)p.call(void 0,E[z],y&&y[z],u)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),M=null;if(0<=E){var z=u[y].substring(0,E);M=u[y].substring(E+1)}else z=u[y];p(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Sr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Sr){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,Yr(this,u.s),this.l=u.l;var p=u.i,y=new Jn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Jr(this,y),this.m=u.m}else u&&(p=String(u).match(Yi))?(this.h=!1,Ji(this,p[1]||"",!0),this.o=be(p[2]||""),this.g=be(p[3]||"",!0),Yr(this,p[4]),this.l=be(p[5]||"",!0),Jr(this,p[6]||"",!0),this.m=be(p[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Sr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ei(p,Ws,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ei(p,Ws,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ei(y,y.charAt(0)=="/"?Ol:Dl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ei(y,ua)),u.join("")};function dn(u){return new Sr(u)}function Ji(u,p,y){u.j=y?be(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Yr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Jr(u,p,y){p instanceof Jn?(u.i=p,Zn(u.i,u.h)):(y||(p=ei(p,Vl)),u.i=new Jn(p,u.h))}function He(u,p,y){u.i.set(p,y)}function Zr(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function be(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,bl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ws=/[#\/\?@]/g,Dl=/[#\?:]/g,Ol=/[#\?]/g,Vl=/[#\?@]/g,ua=/#/g;function Jn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&Jc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Jn.prototype,r.add=function(u,p){bt(this),this.i=null,u=In(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Ln(u,p){bt(u),p=In(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Mn(u,p){return bt(u),p=In(u,p),u.g.has(p)}r.forEach=function(u,p){bt(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(p,M,E,this)},this)},this)},r.na=function(){bt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const M=u[E];for(let z=0;z<M.length;z++)y.push(p[E])}return y},r.V=function(u){bt(this);let p=[];if(typeof u=="string")Mn(this,u)&&(p=p.concat(this.g.get(In(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return bt(this),this.i=null,u=In(this,u),Mn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ti(u,p,y){Ln(u,p),0<y.length&&(u.i=null,u.g.set(In(u,p),q(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const z=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var M=z;J[E]!==""&&(M+="="+encodeURIComponent(String(J[E]))),u.push(M)}}return this.i=u.join("&")};function In(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Zn(u,p){p&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Ln(this,E),ti(this,M,y))},u)),u.j=p}function Zc(u,p){const y=new Wi;if(f.Image){const E=new Image;E.onload=V(Zt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=V(Zt,y,"TestLoadImage: error",!1,p,E),E.onabort=V(Zt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=V(Zt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Ll(u,p){const y=new Wi,E=new AbortController,M=setTimeout(()=>{E.abort(),Zt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?Zt(y,"TestPingServer: ok",!0,p):Zt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Zt(y,"TestPingServer: error",!1,p)})}function Zt(u,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function eh(){this.g=new ea}function Ml(u,p,y){const E=y||"";try{Xr(u,function(M,z){let J=M;_(M)&&(J=Jo(M)),p.push(E+z+"="+encodeURIComponent(J))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Ar(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Ar,Hi),Ar.prototype.g=function(){return new Zi(this.l,this.j)},Ar.prototype.i=(function(u){return function(){return u}})({});function Zi(u,p){_t.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Zi,_t),r=Zi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,jn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Fn(this):jn(this),this.readyState==3&&Fl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Fn(this))},r.Qa=function(u){this.g&&(this.response=u,Fn(this))},r.ga=function(){this.g&&Fn(this)};function Fn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xr(u){let p="";return Te(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function ni(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=xr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):He(u,p,y))}function Je(u){_t.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Je,_t);var th=/^https?$/i,ca=["POST","PUT"];r=Je.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?Ls(this.o):Ls(On),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){es(this,z);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ca,p,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){es(this,z)}};function es(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gs(u),fn(u)}function Gs(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,vt(this,"complete"),vt(this,"abort"),fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),Je.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ha(this):this.bb())},r.bb=function(){ha(this)};function ha(u){if(u.h&&typeof h<"u"&&(!u.v[1]||en(u)!=4||u.Z()!=2)){if(u.u&&en(u)==4)Qo(u.Ea,0,u);else if(vt(u,"readystatechange"),en(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=J===0){var M=String(u.D).match(Yi)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!th.test(M?M.toLowerCase():"")}y=E}if(y)vt(u,"complete"),vt(u,"success");else{u.m=6;try{var z=2<en(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Gs(u)}}finally{fn(u)}}}}function fn(u,p){if(u.g){Ks(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||vt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function en(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Zo(p)}};function da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=en(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(se(u[E]))continue;var y=D(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}N(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function fa(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,u),this.cb=er("retryDelaySeedMs",1e4,u),this.Wa=er("forwardChannelMaxRetries",2,u),this.wa=er("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Xi(u&&u.concurrentRequestLimit),this.Da=new eh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){at(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=zl(this,null,this.W),tr(this)};function Dt(u){if(Xs(u),u.G==3){var p=u.U++,y=dn(u.I);if(He(y,"SID",u.K),He(y,"RID",p),He(y,"TYPE","terminate"),Rr(u,y),p=new Vn(u,u.j,p),p.L=2,p.v=Zr(dn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=$l(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}Bl(u)}function Un(u){u.g&&(pa(u),u.g.cancel(),u.g=null)}function Xs(u){Un(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function tr(u){if(!hn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||ie(),Z||(ze(),Z=!0),me.add(p,u),u.B=0}}function nh(u,p){return Cl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=bn(S(u.Ga,u,p),Ul(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Vn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=A(z),C(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ri(this,M,p),y=dn(this.I),He(y,"RID",u),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Rr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(xr(z)))+"&"+p:this.m&&ni(y,this.m,z)),la(this.h,M),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",p),He(y,"SID","null"),M.T=!0,$s(M,y,null)):$s(M,y,p),this.G=2}}else this.G==3&&(u?Ys(this,u):this.i.length==0||hn(this.h)||Ys(this))};function Ys(u,p){var y;p?y=p.l:y=u.U++;const E=dn(u.I);He(E,"SID",u.K),He(E,"RID",y),He(E,"AID",u.T),Rr(u,E),u.m&&u.o&&ni(E,u.m,u.o),y=new Vn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ri(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),la(u.h,y),$s(y,E,p)}function Rr(u,p){u.H&&Te(u.H,function(y,E){He(p,E,y)}),u.l&&Xr({},function(y,E){He(p,E,y)})}function ri(u,p,y){y=Math.min(u.i.length,y);var E=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let z=-1;for(;;){const J=["count="+y];z==-1?0<y?(z=M[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let Be=!0;for(let wt=0;wt<y;wt++){let Oe=M[wt].g;const xt=M[wt].map;if(Oe-=z,0>Oe)z=Math.max(0,M[wt].g-100),Be=!1;else try{Ml(xt,J,"req"+Oe+"_")}catch{E&&E(xt)}}if(Be){E=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function ts(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||ie(),Z||(ze(),Z=!0),me.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=bn(S(u.Fa,u),Ul(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=bn(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Un(this),jl(this))};function pa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function jl(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=dn(u.qa);He(p,"RID","rpc"),He(p,"SID",u.K),He(p,"AID",u.T),He(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(p,"TO",u.ja),He(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&ni(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Zr(dn(p)),y.m=null,y.P=!0,oa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Un(this),Js(this),at(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var y=null;if(u.g==p){Zs(u),pa(u),u.g=null;var E=2}else if(Gt(u.h,p))y=p.D,Pl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=qi(),vt(E,new js(E,y)),tr(u)}else ts(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&nh(u,p)||E==2&&Js(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),M){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function Ul(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function kr(u,p){if(u.j.info("Error code "+p),p==2){var y=S(u.fb,u),E=u.Xa;const M=!E;E=new Sr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ji(E,"https"),Zr(E),M?Zc(E.toString(),y):Ll(E.toString(),y)}else at(2);u.G=0,u.l&&u.l.sa(p),Bl(u),Xs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const p=Nl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function zl(u,p,y){var E=y instanceof Sr?dn(y):new Sr(y);if(E.g!="")p&&(E.g=p+"."+E.g),Yr(E,E.s);else{var M=f.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var z=new Sr(null);E&&Ji(z,E),p&&(z.g=p),M&&Yr(z,M),y&&(z.l=y),E=z}return y=u.D,p=u.ya,y&&p&&He(E,y,p),He(E,"VER",u.la),Rr(u,E),E}function $l(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Je(new Ar({eb:y})):new Je(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ma(){}r=ma.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function to(){}to.prototype.g=function(u,p){return new Kt(u,p)};function Kt(u,p){_t.call(this),this.g=new fa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new nr(this)}$(Kt,_t),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Dt(this.g)},Kt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Jo(u),u=y);p.i.push(new kl(p.Ya++,u)),p.G==3&&tr(p)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Kt.aa.N.call(this)};function Hl(u){Xn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(Hl,Xn);function ql(){Fs.call(this),this.status=1}$(ql,Fs);function nr(u){this.g=u}$(nr,ma),nr.prototype.ua=function(){vt(this.g,"a")},nr.prototype.ta=function(u){vt(this.g,new Hl(u))},nr.prototype.sa=function(u){vt(this.g,new ql)},nr.prototype.ra=function(){vt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,G_=function(){return new to},W_=function(){return qi()},q_=Yn,Wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,Gu=Bs,Sl.COMPLETE="complete",H_=Sl,Ms.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Ba=Ms,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,$_=Je}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});const Yg="@firebase/firestore",Jg="4.8.0";/**
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
 */let Ht=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
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
 */let jo="11.10.0";/**
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
 */const Is=new Ef("@firebase/firestore");function So(){return Is.logLevel}function re(r,...e){if(Is.logLevel<=Ce.DEBUG){const t=e.map(Sf);Is.debug(`Firestore (${jo}): ${r}`,...t)}}function Br(r,...e){if(Is.logLevel<=Ce.ERROR){const t=e.map(Sf);Is.error(`Firestore (${jo}): ${r}`,...t)}}function Pi(r,...e){if(Is.logLevel<=Ce.WARN){const t=e.map(Sf);Is.warn(`Firestore (${jo}): ${r}`,...t)}}function Sf(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,K_(r,i,t)}function K_(r,e,t){let i=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Br(i),new Error(i)}function Ue(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||K_(e,o,i)}function Se(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends _r{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wI{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new jr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new jr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Q_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class EI{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TI{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new EI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class II{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function X_(){return new TextEncoder}/**
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
 */class Af{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=SI(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function xe(r,e){return r<e?-1:r>e?1:0}function Gd(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return xe(i,o);{const l=X_(),h=AI(l.encode(ey(r,t)),l.encode(ey(e,t)));return h!==0?h:xe(i,o)}}t+=i>65535?2:1}return xe(r.length,e.length)}function ey(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function AI(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return xe(r[t],e[t]);return xe(r.length,e.length)}function Do(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const ty="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):Gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Ke extends ar{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const xI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends ar{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return xI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new Mt([ty])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}/**
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
 */function Y_(r,e,t){if(!t)throw new ee(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function RI(r,e,t,i){if(e===!0&&i===!0)throw new ee(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ny(r){if(!pe.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ry(r){if(pe.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function J_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ac(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function wn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ac(r);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function yt(r,e){const t={typeString:r};return e&&(t.value=e),t}function hl(r,e){if(!J_(r))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ee(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const iy=-62135596800,sy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*sy);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<iy)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sy}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:yt("string",Ye._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Ye(0,0))}static max(){return new Ie(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Za=-1;function kI(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Ni(o,pe.empty(),e)}function CI(r){return new Ni(r.readTime,r.key,Za)}class Ni{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ni(Ie.min(),pe.empty(),Za)}static max(){return new Ni(Ie.max(),pe.empty(),Za)}}function PI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const NI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Uo(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==NI)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function DI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}xc.ue=-1;/**
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
 */const xf=-1;function Rc(r){return r==null}function sc(r){return r===0&&1/r==-1/0}function OI(r){return typeof r=="number"&&Number.isInteger(r)&&!sc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Z_="";function VI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=oy(e)),e=LI(r.get(t),e);return oy(e)}function LI(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Z_:t+="";break;default:t+=l}}return t}function oy(r){return r+Z_+""}/**
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
 */function ay(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Fi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ev(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new _n([])}unionWith(e){let t=new It(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new tv("Invalid base64 string: "+l):l}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const MI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=MI.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Di(r){return typeof r=="string"?Ft.fromBase64String(r):Ft.fromUint8Array(r)}/**
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
 */const nv="server_timestamp",rv="__type__",iv="__previous_value__",sv="__local_write_time__";function Rf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[rv])===null||t===void 0?void 0:t.stringValue)===nv}function kc(r){const e=r.mapValue.fields[iv];return Rf(e)?kc(e):e}function el(r){const e=bi(r.mapValue.fields[sv].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class FI{constructor(e,t,i,o,l,h,f,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const oc="(default)";class tl{constructor(e,t){this.projectId=e,this.database=t||oc}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database===oc}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ov="__type__",jI="__max__",Bu={mapValue:{}},av="__vector__",ac="value";function Oi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rf(r)?4:BI(r)?9007199254740991:UI(r)?10:11:_e(28295,{value:r})}function yr(r,e){if(r===e)return!0;const t=Oi(r);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return el(r).isEqual(el(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=bi(o.timestampValue),f=bi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Di(o.bytesValue).isEqual(Di(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),f=ut(l.doubleValue);return h===f?sc(h)===sc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Do(r.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(ay(h)!==ay(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!yr(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function nl(r,e){return(r.values||[]).find((t=>yr(t,e)))!==void 0}function Oo(r,e){if(r===e)return 0;const t=Oi(r),i=Oi(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ut(l.integerValue||l.doubleValue),g=ut(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return uy(r.timestampValue,e.timestampValue);case 4:return uy(el(r),el(e));case 5:return Gd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Di(l),g=Di(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=xe(f[_],g[_]);if(w!==0)return w}return xe(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=xe(ut(l.latitude),ut(h.latitude));return f!==0?f:xe(ut(l.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return cy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const I=l.fields||{},S=h.fields||{},V=(f=I[ac])===null||f===void 0?void 0:f.arrayValue,$=(g=S[ac])===null||g===void 0?void 0:g.arrayValue,q=xe(((_=V?.values)===null||_===void 0?void 0:_.length)||0,((w=$?.values)===null||w===void 0?void 0:w.length)||0);return q!==0?q:cy(V,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Bu.mapValue&&h===Bu.mapValue)return 0;if(l===Bu.mapValue)return 1;if(h===Bu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let I=0;I<g.length&&I<w.length;++I){const S=Gd(g[I],w[I]);if(S!==0)return S;const V=Oo(f[g[I]],_[w[I]]);if(V!==0)return V}return xe(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function uy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=bi(r),i=bi(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function cy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Oo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function Vo(r){return Kd(r)}function Kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Di(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Kd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Kd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Ku(r){switch(Oi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(r);return e?16+Ku(e):16;case 5:return 2*r.stringValue.length;case 6:return Di(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Ku(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Fi(i.fields,((l,h)=>{o+=l.length+Ku(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function hy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qd(r){return!!r&&"integerValue"in r}function kf(r){return!!r&&"arrayValue"in r}function dy(r){return!!r&&"nullValue"in r}function fy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qu(r){return!!r&&"mapValue"in r}function UI(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[ov])===null||t===void 0?void 0:t.stringValue)===av}function Wa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Fi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Wa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function BI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===jI}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Qu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Wa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Qu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Qu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Fi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new un(Wa(this.value))}}function lv(r){const e=[];return Fi(r.fields,((t,i)=>{const o=new Mt([t]);if(Qu(i)){const l=lv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new _n(e)}/**
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
 */class qt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new qt(e,0,Ie.min(),Ie.min(),Ie.min(),un.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Ie.min(),Ie.min(),un.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Ie.min(),Ie.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lc{constructor(e,t){this.position=e,this.inclusive=t}}function py(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Oo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function my(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!yr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function zI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class uv{}class gt extends uv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new HI(e,t,i):t==="array-contains"?new GI(e,i):t==="in"?new KI(e,i):t==="not-in"?new QI(e,i):t==="array-contains-any"?new XI(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new qI(e,i):new WI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends uv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qn(e,t)}matches(e){return cv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function cv(r){return r.op==="and"}function hv(r){return $I(r)&&cv(r)}function $I(r){for(const e of r.filters)if(e instanceof Qn)return!1;return!0}function Xd(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Vo(r.value);if(hv(r))return r.filters.map((e=>Xd(e))).join(",");{const e=r.filters.map((t=>Xd(t))).join(",");return`${r.op}(${e})`}}function dv(r,e){return r instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&yr(i.value,o.value)})(r,e):r instanceof Qn?(function(i,o){return o instanceof Qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&dv(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function fv(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Vo(t.value)}`})(r):r instanceof Qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(fv).join(" ,")+"}"})(r):"Filter"}class HI extends gt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class qI extends gt{constructor(e,t){super(e,"in",t),this.keys=pv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class WI extends gt{constructor(e,t){super(e,"not-in",t),this.keys=pv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class GI extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kf(t)&&nl(t.arrayValue,this.value)}}class KI extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class QI extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nl(this.value.arrayValue,t)}}class XI extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>nl(this.value.arrayValue,i)))}}/**
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
 */class YI{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function gy(r,e=null,t=[],i=[],o=null,l=null,h=null){return new YI(r,e,t,i,o,l,h)}function Cf(r){const e=Se(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Xd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Vo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Vo(i))).join(",")),e.Pe=t}return e.Pe}function Pf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!zI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!dv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!my(r.startAt,e.startAt)&&my(r.endAt,e.endAt)}function Yd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class zo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JI(r,e,t,i,o,l,h,f){return new zo(r,e,t,i,o,l,h,f)}function Cc(r){return new zo(r)}function yy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mv(r){return r.collectionGroup!==null}function Ga(r){const e=Se(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new It(Mt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new rl(l,i))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new rl(Mt.keyField(),i))}return e.Te}function hr(r){const e=Se(r);return e.Ie||(e.Ie=ZI(e,Ga(r))),e.Ie}function ZI(r,e){if(r.limitType==="F")return gy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new rl(o.field,l)}));const t=r.endAt?new lc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new lc(r.startAt.position,r.startAt.inclusive):null;return gy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Jd(r,e){const t=r.filters.concat([e]);return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Zd(r,e,t){return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Pc(r,e){return Pf(hr(r),hr(e))&&r.limitType===e.limitType}function gv(r){return`${Cf(hr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>fv(o))).join(", ")}]`),Rc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Vo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Vo(o))).join(",")),`Target(${i})`})(hr(r))}; limitType=${r.limitType})`}function Nc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Ga(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=py(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Ga(i),o)||i.endAt&&!(function(h,f,g){const _=py(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Ga(i),o))})(r,e)}function e1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function yv(r){return(e,t)=>{let i=!1;for(const o of Ga(r)){const l=t1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function t1(r,e,t){const i=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Oo(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return ev(this.inner)}size(){return this.innerSize}}/**
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
 */const n1=new nt(pe.comparator);function zr(){return n1}const _v=new nt(pe.comparator);function za(...r){let e=_v;for(const t of r)e=e.insert(t.key,t);return e}function vv(r){let e=_v;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function gs(){return Ka()}function wv(){return Ka()}function Ka(){return new ks((r=>r.toString()),((r,e)=>r.isEqual(e)))}const r1=new nt(pe.comparator),i1=new It(pe.comparator);function Pe(...r){let e=i1;for(const t of r)e=e.add(t);return e}const s1=new It(xe);function o1(){return s1}/**
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
 */function Nf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function Ev(r){return{integerValue:""+r}}function a1(r,e){return OI(e)?Ev(e):Nf(r,e)}/**
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
 */class bc{constructor(){this._=void 0}}function l1(r,e,t){return r instanceof uc?(function(o,l){const h={fields:{[rv]:{stringValue:nv},[sv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Rf(l)&&(l=kc(l)),l&&(h.fields[iv]=l),{mapValue:h}})(t,e):r instanceof il?Iv(r,e):r instanceof sl?Sv(r,e):(function(o,l){const h=Tv(o,l),f=_y(h)+_y(o.Ee);return Qd(h)&&Qd(o.Ee)?Ev(f):Nf(o.serializer,f)})(r,e)}function u1(r,e,t){return r instanceof il?Iv(r,e):r instanceof sl?Sv(r,e):t}function Tv(r,e){return r instanceof cc?(function(i){return Qd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class uc extends bc{}class il extends bc{constructor(e){super(),this.elements=e}}function Iv(r,e){const t=Av(e);for(const i of r.elements)t.some((o=>yr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class sl extends bc{constructor(e){super(),this.elements=e}}function Sv(r,e){let t=Av(e);for(const i of r.elements)t=t.filter((o=>!yr(o,i)));return{arrayValue:{values:t}}}class cc extends bc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function _y(r){return ut(r.integerValue||r.doubleValue)}function Av(r){return kf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function c1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof il&&o instanceof il||i instanceof sl&&o instanceof sl?Do(i.elements,o.elements,yr):i instanceof cc&&o instanceof cc?yr(i.Ee,o.Ee):i instanceof uc&&o instanceof uc})(r.transform,e.transform)}class h1{constructor(e,t){this.version=e,this.transformResults=t}}class cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Dc{}function xv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Oc(r.key,cn.none()):new dl(r.key,r.data,cn.none());{const t=r.data,i=un.empty();let o=new It(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new ji(r.key,i,new _n(o.toArray()),cn.none())}}function d1(r,e,t){r instanceof dl?(function(o,l,h){const f=o.value.clone(),g=wy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof ji?(function(o,l,h){if(!Xu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=wy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Rv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Qa(r,e,t,i){return r instanceof dl?(function(l,h,f,g){if(!Xu(l.precondition,h))return f;const _=l.value.clone(),w=Ey(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof ji?(function(l,h,f,g){if(!Xu(l.precondition,h))return f;const _=Ey(l.fieldTransforms,g,h),w=h.data;return w.setAll(Rv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(r,e,t,i):(function(l,h,f){return Xu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function f1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=Tv(i.transform,o||null);l!=null&&(t===null&&(t=un.empty()),t.set(i.field,l))}return t||null}function vy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Do(i,o,((l,h)=>c1(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class dl extends Dc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ji extends Dc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Rv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function wy(r,e,t){const i=new Map;Ue(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,u1(h,f,t[o]))}return i}function Ey(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,l1(l,h,e))}return i}class Oc extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p1 extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&d1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=wv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=xv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,((t,i)=>vy(t,i)))&&Do(this.baseMutations,e.baseMutations,((t,i)=>vy(t,i)))}}class bf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return r1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new bf(e,t,i,o)}}/**
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
 */class g1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,Ve;function _1(r){switch(r){case H.OK:return _e(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function kv(r){if(r===void 0)return Br("GRPC error has no .code"),H.UNKNOWN;switch(r){case pt.OK:return H.OK;case pt.CANCELLED:return H.CANCELLED;case pt.UNKNOWN:return H.UNKNOWN;case pt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case pt.INTERNAL:return H.INTERNAL;case pt.UNAVAILABLE:return H.UNAVAILABLE;case pt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case pt.NOT_FOUND:return H.NOT_FOUND;case pt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case pt.ABORTED:return H.ABORTED;case pt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case pt.DATA_LOSS:return H.DATA_LOSS;default:return _e(39323,{code:r})}}(Ve=pt||(pt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const v1=new Ri([4294967295,4294967295],0);function Ty(r){const e=X_().encode(r),t=new z_;return t.update(e),new Uint8Array(t.digest())}function Iy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,l],0)]}class Df{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new $a(`Invalid padding: ${t}`);if(i<0)throw new $a(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new $a(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ri.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(v1)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Ty(e),[i,o]=Iy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Df(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Ty(e),[i,o]=Iy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Vc(Ie.min(),o,new nt(xe),zr(),Pe())}}class fl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new fl(i,t,Pe(),Pe(),Pe())}}/**
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
 */class Yu{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class Cv{constructor(e,t){this.targetId=e,this.De=t}}class Pv{constructor(e,t,i=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Sy{constructor(){this.ve=0,this.Ce=Ay(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),i=Pe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new fl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Ay()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class w1{constructor(e){this.We=e,this.Ge=new Map,this.ze=zr(),this.je=zu(),this.Je=zu(),this.He=new nt(xe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Yd(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,qt.newNoDocument(h,Ie.min()))}else Ue(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Di(i).toUint8Array()}catch(g){if(g instanceof tv)return Pi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Df(h,o,l)}catch(g){return Pi(g instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&Yd(f.target)){const g=new pe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,qt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Pe();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Vc(e,t,this.He,this.ze,i);return this.ze=zr(),this.je=zu(),this.Je=zu(),this.He=new nt(xe),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Sy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new It(xe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new It(xe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Sy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function zu(){return new nt(pe.comparator)}function Ay(){return new nt(pe.comparator)}const E1={asc:"ASCENDING",desc:"DESCENDING"},T1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I1={and:"AND",or:"OR"};class S1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ef(r,e){return r.useProto3Json||Rc(e)?e:{value:e}}function hc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function A1(r,e){return hc(r,e.toTimestamp())}function dr(r){return Ue(!!r,49232),Ie.fromTimestamp((function(t){const i=bi(t);return new Ye(i.seconds,i.nanos)})(r))}function Of(r,e){return tf(r,e).canonicalString()}function tf(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function bv(r){const e=Ke.fromString(r);return Ue(Mv(e),10190,{key:e.toString()}),e}function nf(r,e){return Of(r.databaseId,e.path)}function bd(r,e){const t=bv(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(Ov(t))}function Dv(r,e){return Of(r.databaseId,e)}function x1(r){const e=bv(r);return e.length===4?Ke.emptyPath():Ov(e)}function rf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ov(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xy(r,e,t){return{name:nf(r,e),fields:t.value.mapValue.fields}}function R1(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Ft.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ft.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?H.UNKNOWN:kv(_.code);return new ee(w,_.message||"")})(h);t=new Pv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=bd(r,i.document.name),l=dr(i.document.updateTime),h=i.document.createTime?dr(i.document.createTime):Ie.min(),f=new un({mapValue:{fields:i.document.fields}}),g=qt.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new Yu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=bd(r,i.document),l=i.readTime?dr(i.readTime):Ie.min(),h=qt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Yu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=bd(r,i.document),l=i.removedTargetIds||[];t=new Yu([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new y1(o,l),f=i.targetId;t=new Cv(f,h)}}return t}function k1(r,e){let t;if(e instanceof dl)t={update:xy(r,e.key,e.value)};else if(e instanceof Oc)t={delete:nf(r,e.key)};else if(e instanceof ji)t={update:xy(r,e.key,e.data),updateMask:M1(e.fieldMask)};else{if(!(e instanceof p1))return _e(16599,{Rt:e.type});t={verify:nf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof uc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof il)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof sl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof cc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:A1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function C1(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?dr(o.updateTime):dr(l);return h.isEqual(Ie.min())&&(h=dr(l)),new h1(h,o.transformResults||[])})(t,e)))):[]}function P1(r,e){return{documents:[Dv(r,e.path)]}}function N1(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Dv(r,o);const l=(function(_){if(_.length!==0)return Lv(Qn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(S){return{field:xo(S.field),direction:O1(S.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=ef(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function b1(r){let e=x1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(I){const S=Vv(I);return S instanceof Qn&&hv(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((S=>(function($){return new rl(Ro($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let S;return S=typeof I=="object"?I.value:I,Rc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(I){const S=!!I.before,V=I.values||[];return new lc(V,S)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const S=!I.before,V=I.values||[];return new lc(V,S)})(t.endAt)),JI(e,o,h,l,f,"F",g,_)}function D1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ro(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ro(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ro(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ro(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(Ro(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Qn.create(t.compositeFilter.filters.map((i=>Vv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function O1(r){return E1[r]}function V1(r){return T1[r]}function L1(r){return I1[r]}function xo(r){return{fieldPath:r.canonicalString()}}function Ro(r){return Mt.fromServerFormat(r.fieldPath)}function Lv(r){return r instanceof gt?(function(t){if(t.op==="=="){if(fy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(dy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(dy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:V1(t.op),value:t.value}}})(r):r instanceof Qn?(function(t){const i=t.getFilters().map((o=>Lv(o)));return i.length===1?i[0]:{compositeFilter:{op:L1(t.op),filters:i}}})(r):_e(54877,{filter:r})}function M1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Mv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),f=Ft.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class F1{constructor(e){this.gt=e}}function j1(r){const e=b1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zd(e,e.limit,"L"):e}/**
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
 */class U1{constructor(){this.Dn=new B1}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ni.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class B1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Ke.comparator)).toArray()}}/**
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
 */const Ry={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Fv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class Lo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Lo(0)}static ur(){return new Lo(-1)}}/**
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
 */const ky="LruGarbageCollector",z1=1048576;function Cy([r,e],[t,i]){const o=xe(r,t);return o===0?xe(e,i):o}class $1{constructor(e){this.Tr=e,this.buffer=new It(Cy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Cy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class H1{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(ky,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?re(ky,"Ignoring IndexedDB error during garbage collection: ",t):await Uo(t)}await this.Rr(3e5)}))}}class q1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(xc.ue);const i=new $1(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Ry)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ry):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(i=I,f=Date.now(),this.removeTargets(e,i,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((I=>(_=Date.now(),So()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function W1(r,e){return new q1(r,e)}/**
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
 */class G1{constructor(){this.changes=new ks((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class K1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Q1{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Qa(i.mutation,o,_n.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Pe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Pe()){const o=gs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=za();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=gs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Pe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=zr();const h=Ka(),f=(function(){return Ka()})();return t.forEach(((g,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ji)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Qa(w.mutation,_,w.mutation.getFieldMask(),Ye.now())):h.set(_.key,_n.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var I;return f.set(_,new K1(w,(I=h.get(_))!==null&&I!==void 0?I:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Ka();let o=new nt(((h,f)=>h-f)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=i.get(g)||_n.empty();w=f.applyToLocalView(_,w),i.set(g,w);const I=(o.get(f.batchId)||Pe()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,I=wv();w.forEach((S=>{if(!l.has(S)){const V=xv(t.get(S),i.get(S));V!==null&&I.set(S,V),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return W.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(gs());let f=Za,g=l;return h.next((_=>W.forEach(_,((w,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{g=g.insert(w,S)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Pe()))).next((w=>({batchId:f,changes:vv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=za();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=za();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const _=(function(I,S){return new zo(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((w=>{w.forEach(((I,S)=>{h=h.insert(I,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,qt.newInvalidDocument(w)))}));let f=za();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Qa(w.mutation,_,_n.empty(),Ye.now()),Nc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class X1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:dr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:j1(o.bundledQuery),readTime:dr(o.readTime)}})(t)),W.resolve()}}/**
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
 */class Y1{constructor(){this.overlays=new nt(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=gs();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=gs(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=gs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=gs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return W.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new g1(t,i));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class J1{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Vf{constructor(){this.qr=new It(Pt.Qr),this.$r=new It(Pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Pt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Pt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new Ke([])),i=new Pt(t,e),o=new Pt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Ke([])),i=new Pt(t,e),o=new Pt(t,e+1);let l=Pe();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Pt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class Z1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new It(Pt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new m1(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Pt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?xf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(xe);return t.forEach((o=>{const l=new Pt(o,0),h=new Pt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),W.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new Pt(new pe(l),0);let f=new It(xe);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return W.forEach(t.mutations,(o=>{const l=new Pt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Pt(t,0),o=this.Yr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class eS{constructor(e){this.ni=e,this.docs=(function(){return new nt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=zr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=zr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||PI(CI(w),i)<=0||(o.has(w.key)||Nc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ri(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new tS(this)}getSize(e){return W.resolve(this.size)}}class tS extends G1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class nS{constructor(e){this.persistence=e,this.ii=new ks((t=>Cf(t)),Pf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Vf,this.targetCount=0,this._i=Lo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Lo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
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
 */class jv{constructor(e,t){this.ai={},this.overlays={},this.ui=new xc(0),this.ci=!1,this.ci=!0,this.li=new J1,this.referenceDelegate=e(this),this.hi=new nS(this),this.indexManager=new U1,this.remoteDocumentCache=(function(o){return new eS(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new F1(t),this.Ti=new X1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Y1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new Z1(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new rS(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class rS extends bI{constructor(e){super(),this.currentSequenceNumber=e}}class Lf{constructor(e){this.persistence=e,this.Ai=new Vf,this.Ri=null}static Vi(e){return new Lf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class dc{constructor(e,t){this.persistence=e,this.gi=new ks((i=>VI(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=W1(this,t)}static Vi(e,t){return new dc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ie.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ku(e.data.value)),t}Sr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Mf(e,t.fromCache,i,o)}}/**
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
 */class iS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return eT()?8:DI(Wt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new iS;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(So()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(So()<=Ce.DEBUG&&re("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(So()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):W.resolve())}ps(e,t){if(yy(t))return W.resolve(null);let i=hr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Zd(t,null,"F"),i=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Pe(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,Zd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return yy(t)||o.isEqual(Ie.min())?W.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?W.resolve(null):(So()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,kI(o,Za)).next((f=>f)))}))}bs(e,t){let i=new It(yv(e));return t.forEach(((o,l)=>{Nc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return So()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,Ni.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Ff="LocalStore",oS=3e8;class aS{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(xe),this.Ms=new ks((l=>Cf(l)),Pf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function lS(r,e,t,i){return new aS(r,e,t,i)}async function Uv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function uS(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const I=_.batch,S=I.keys();let V=W.resolve();return S.forEach(($=>{V=V.next((()=>w.getEntry(g,$))).next((q=>{const B=_.docVersions.get($);Ue(B!==null,48541),q.version.compareTo(B)<0&&(I.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),w.addEntry(q)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Pe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Bv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function cS(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,I)=>{const S=o.get(I);if(!S)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,I).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,I))));let V=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?V=V.withResumeToken(Ft.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(w.resumeToken,i)),o=o.insert(I,V),(function(q,B,ne){return q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=oS?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(S,V,w)&&f.push(t.hi.updateTargetData(l,V))}));let g=zr(),_=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(hS(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!i.isEqual(Ie.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((I=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function hS(r,e,t){let i=Pe(),o=Pe();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=zr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):re(Ff,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function dS(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=xf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function fS(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Si(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function sf(r,e,t){const i=Se(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Bo(h))throw h;re(Ff,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Py(r,e,t){const i=Se(r);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const I=Se(g),S=I.Ms.get(w);return S!==void 0?W.resolve(I.Fs.get(S)):I.hi.getTargetData(_,w)})(i,h,hr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Pe()))).next((f=>(pS(i,e1(e),f),{documents:f,qs:l})))))}function pS(r,e,t){let i=r.xs.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class Ny{constructor(){this.activeTargetIds=o1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mS{constructor(){this.Fo=new Ny,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ny,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gS{xo(e){}shutdown(){}}/**
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
 */const by="ConnectivityMonitor";class Dy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(by,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(by,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function of(){return $u===null?$u=(function(){return 268435456+Math.round(2147483648*Math.random())})():$u++,"0x"+$u.toString(16)}/**
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
 */const Dd="RestConnection",yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _S{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===oc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=of(),f=this.Go(e,t.toUriEncodedString());re(Dd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),w=Mi(_);return this.jo(e,f,g,i,w).then((I=>(re(Dd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw Pi(Dd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",i),I}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=yS[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class vS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const $t="WebChannelConnection";class wS extends _S{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=of();return new Promise(((f,g)=>{const _=new $_;_.setWithCredentials(!0),_.listenOnce(H_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Gu.NO_ERROR:const I=_.getResponseJson();re($t,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case Gu.TIMEOUT:re($t,`RPC '${e}' ${h} timed out`),g(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const S=_.getStatus();if(re($t,`RPC '${e}' ${h} failed with status:`,S,"response text:",_.getResponseText()),S>0){let V=_.getResponseJson();Array.isArray(V)&&(V=V[0]);const $=V?.error;if($&&$.status&&$.message){const q=(function(ne){const se=ne.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(se)>=0?se:H.UNKNOWN})($.status);g(new ee(q,$.message))}else g(new ee(H.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(H.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{re($t,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re($t,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=of(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=G_(),f=W_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");re($t,`Creating RPC '${e}' stream ${o}: ${w}`,g);const I=h.createWebChannel(w,g);this.T_(I);let S=!1,V=!1;const $=new vS({Ho:B=>{V?re($t,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(S||(re($t,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),re($t,`RPC '${e}' stream ${o} sending:`,B),I.send(B))},Yo:()=>I.close()}),q=(B,ne,se)=>{B.listen(ne,(oe=>{try{se(oe)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return q(I,Ba.EventType.OPEN,(()=>{V||(re($t,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),q(I,Ba.EventType.CLOSE,(()=>{V||(V=!0,re($t,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(I))})),q(I,Ba.EventType.ERROR,(B=>{V||(V=!0,Pi($t,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.__(new ee(H.UNAVAILABLE,"The operation could not be completed")))})),q(I,Ba.EventType.MESSAGE,(B=>{var ne;if(!V){const se=B.data[0];Ue(!!se,16349);const oe=se,ce=oe?.error||((ne=oe[0])===null||ne===void 0?void 0:ne.error);if(ce){re($t,`RPC '${e}' stream ${o} received error:`,ce);const Ne=ce.status;let Te=(function(k){const C=pt[k];if(C!==void 0)return kv(C)})(Ne),N=ce.message;Te===void 0&&(Te=H.INTERNAL,N="Unknown error status: "+Ne+" with message "+ce.message),V=!0,$.__(new ee(Te,N)),I.close()}else re($t,`RPC '${e}' stream ${o} received:`,se),$.a_(se)}})),q(f,q_.STAT_EVENT,(B=>{B.stat===Wd.PROXY?re($t,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Wd.NOPROXY&&re($t,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Od(){return typeof document<"u"?document:null}/**
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
 */function Lc(r){return new S1(r,!0)}/**
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
 */class zv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Oy="PersistentStream";class $v{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ee(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(Oy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(Oy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ES extends $v{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=R1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?dr(h.readTime):Ie.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=rf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Yd(g)?{documents:P1(l,g)}:{query:N1(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Nv(l,h.resumeToken);const _=ef(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=hc(l,h.snapshotVersion.toTimestamp());const _=ef(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=D1(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=rf(this.serializer),t.removeTarget=e,this.k_(t)}}class TS extends $v{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=C1(e.writeResults,e.commitTime),i=dr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=rf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>k1(this.serializer,i)))};this.k_(t)}}/**
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
 */class IS{}class SS extends IS{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,tf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(H.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,tf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(H.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Br(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ss="RemoteStore";class xS{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Cs(this)&&(re(Ss,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ia.add(4),await pl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Mc(_)})(this))}))})),this.Aa=new AS(i,o)}}async function Mc(r){if(Cs(r))for(const e of r.da)await e(!0)}async function pl(r){for(const e of r.da)await e(!1)}function Hv(r,e){const t=Se(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),zf(t)?Bf(t):$o(t).x_()&&Uf(t,e))}function jf(r,e){const t=Se(r),i=$o(t);t.Ta.delete(e),i.x_()&&qv(t,e),t.Ta.size===0&&(i.x_()?i.B_():Cs(t)&&t.Aa.set("Unknown"))}function Uf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function qv(r,e){r.Ra.$e(e),$o(r).Y_(e)}function Bf(r){r.Ra=new w1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function zf(r){return Cs(r)&&!$o(r).M_()&&r.Ta.size>0}function Cs(r){return Se(r).Ia.size===0}function Wv(r){r.Ra=void 0}async function RS(r){r.Aa.set("Online")}async function kS(r){r.Ta.forEach(((e,t)=>{Uf(r,e)}))}async function CS(r,e){Wv(r),zf(r)?(r.Aa.la(e),Bf(r)):r.Aa.set("Unknown")}async function PS(r,e,t){if(r.Aa.set("Online"),e instanceof Pv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(i){re(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await fc(r,i)}else if(e instanceof Yu?r.Ra.Ye(e):e instanceof Cv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ie.min()))try{const i=await Bv(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ft.EMPTY_BYTE_STRING,w.snapshotVersion)),qv(l,g);const I=new Si(w.target,g,_,w.sequenceNumber);Uf(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){re(Ss,"Failed to raise snapshot:",i),await fc(r,i)}}async function fc(r,e,t){if(!Bo(e))throw e;r.Ia.add(1),await pl(r),r.Aa.set("Offline"),t||(t=()=>Bv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(Ss,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Mc(r)}))}function Gv(r,e){return e().catch((t=>fc(r,t,e)))}async function Fc(r){const e=Se(r),t=Vi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:xf;for(;NS(e);)try{const o=await dS(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,bS(e,o)}catch(o){await fc(e,o)}Kv(e)&&Qv(e)}function NS(r){return Cs(r)&&r.Pa.length<10}function bS(r,e){r.Pa.push(e);const t=Vi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Kv(r){return Cs(r)&&!Vi(r).M_()&&r.Pa.length>0}function Qv(r){Vi(r).start()}async function DS(r){Vi(r).na()}async function OS(r){const e=Vi(r);for(const t of r.Pa)e.X_(t.mutations)}async function VS(r,e,t){const i=r.Pa.shift(),o=bf.from(i,e,t);await Gv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Fc(r)}async function LS(r,e){e&&Vi(r).Z_&&await(async function(i,o){if((function(h){return _1(h)&&h!==H.ABORTED})(o.code)){const l=i.Pa.shift();Vi(i).N_(),await Gv(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Fc(i)}})(r,e),Kv(r)&&Qv(r)}async function Vy(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),re(Ss,"RemoteStore received new credentials");const i=Cs(t);t.Ia.add(3),await pl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Mc(t)}async function MS(r,e){const t=Se(r);e?(t.Ia.delete(2),await Mc(t)):e||(t.Ia.add(2),await pl(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,i,o){const l=Se(t);return l.ia(),new ES(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:RS.bind(null,r),e_:kS.bind(null,r),n_:CS.bind(null,r),J_:PS.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),zf(r)?Bf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Wv(r))}))),r.Va}function Vi(r){return r.ma||(r.ma=(function(t,i,o){const l=Se(t);return l.ia(),new TS(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:DS.bind(null,r),n_:LS.bind(null,r),ea:OS.bind(null,r),ta:VS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Fc(r)):(await r.ma.stop(),r.Pa.length>0&&(re(Ss,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class $f{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new $f(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hf(r,e){if(Br("AsyncQueue",`${e}: ${r}`),Bo(r))return new ee(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Co{static emptySet(e){return new Co(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=za(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Co;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Ly{constructor(){this.fa=new nt(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Mo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Mo(e,t,Co.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class FS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class jS{constructor(){this.queries=My(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=My(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function My(){return new ks((r=>gv(r)),Pc)}async function qf(r,e){const t=Se(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new FS,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Hf(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Gf(t)}async function Wf(r,e){const t=Se(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function US(r,e){const t=Se(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&Gf(t)}function BS(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Gf(r){r.Da.forEach((e=>{e.next()}))}var af,Fy;(Fy=af||(af={})).Fa="default",Fy.Cache="cache";class Kf{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Mo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==af.Cache}}/**
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
 */class Xv{constructor(e){this.key=e}}class Yv{constructor(e){this.key=e}}class zS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=yv(e),this.eu=new Co(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Ly,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,I)=>{const S=o.get(w),V=Nc(this.query,I)?I:null,$=!!S&&this.mutatedKeys.has(S.key),q=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let B=!1;S&&V?S.data.isEqual(V.data)?$!==q&&(i.track({type:3,doc:V}),B=!0):this.iu(S,V)||(i.track({type:2,doc:V}),B=!0,(g&&this.Xa(V,g)>0||_&&this.Xa(V,_)<0)&&(f=!0)):!S&&V?(i.track({type:0,doc:V}),B=!0):S&&!V&&(i.track({type:1,doc:S}),B=!0,(g||_)&&(f=!0)),B&&(V?(h=h.add(V),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,I)=>(function(V,$){const q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:B})}};return q(V)-q($)})(w.type,I.type)||this.Xa(w.doc,I.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Mo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ly,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new Yv(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new Xv(i))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Mo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Qf="SyncEngine";class $S{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class HS{constructor(e){this.key=e,this.lu=!1}}class qS{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ks((f=>gv(f)),Pc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(pe.comparator),this.Eu=new Map,this.Au=new Vf,this.Ru={},this.Vu=new Map,this.mu=Lo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function WS(r,e,t=!0){const i=r0(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Jv(i,e,t,!0),o}async function GS(r,e){const t=r0(r);await Jv(t,e,!0,!1)}async function Jv(r,e,t,i){const o=await fS(r.localStore,hr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await KS(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Hv(r.remoteStore,o),f}async function KS(r,e,t,i,o){r.gu=(I,S,V)=>(async function(q,B,ne,se){let oe=B.view.nu(ne);oe.Ds&&(oe=await Py(q.localStore,B.query,!1).then((({documents:N})=>B.view.nu(N,oe))));const ce=se&&se.targetChanges.get(B.targetId),Ne=se&&se.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(oe,q.isPrimaryClient,ce,Ne);return Uy(q,B.targetId,Te._u),Te.snapshot})(r,I,S,V);const l=await Py(r.localStore,e,!0),h=new zS(e,l.qs),f=h.nu(l.documents),g=fl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);Uy(r,t,_._u);const w=new $S(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function QS(r,e,t){const i=Se(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Pc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await sf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&jf(i.remoteStore,o.targetId),lf(i,o.targetId)})).catch(Uo)):(lf(i,o.targetId),await sf(i.localStore,o.targetId,!0))}async function XS(r,e){const t=Se(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),jf(t.remoteStore,i.targetId))}async function YS(r,e,t){const i=iA(r);try{const o=await(function(h,f){const g=Se(h),_=Ye.now(),w=f.reduce(((V,$)=>V.add($.key)),Pe());let I,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let $=zr(),q=Pe();return g.Os.getEntries(V,w).next((B=>{$=B,$.forEach(((ne,se)=>{se.isValidDocument()||(q=q.add(ne))}))})).next((()=>g.localDocuments.getOverlayedDocuments(V,$))).next((B=>{I=B;const ne=[];for(const se of f){const oe=f1(se,I.get(se.key).overlayedDocument);oe!=null&&ne.push(new ji(se.key,oe,lv(oe.value.mapValue),cn.exists(!0)))}return g.mutationQueue.addMutationBatch(V,_,ne,f)})).next((B=>{S=B;const ne=B.applyToLocalDocumentSet(I,q);return g.documentOverlayCache.saveOverlays(V,B.batchId,ne)}))})).then((()=>({batchId:S.batchId,changes:vv(I)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new nt(xe)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await ml(i,o.changes),await Fc(i.remoteStore)}catch(o){const l=Hf(o,"Failed to persist write");t.reject(l)}}async function Zv(r,e){const t=Se(r);try{const i=await cS(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await ml(t,i,e)}catch(i){await Uo(i)}}function jy(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Se(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,I)=>{for(const S of I.wa)S.va(f)&&(_=!0)})),_&&Gf(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function JS(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new nt(pe.comparator);h=h.insert(l,qt.newNoDocument(l,Ie.min()));const f=Pe().add(l),g=new Vc(Ie.min(),new Map,new nt(xe),h,f);await Zv(i,g),i.du=i.du.remove(l),i.Eu.delete(e),Xf(i)}else await sf(i.localStore,e,!1).then((()=>lf(i,e,t))).catch(Uo)}async function ZS(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await uS(t.localStore,e);t0(t,i,null),e0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ml(t,o)}catch(o){await Uo(o)}}async function eA(r,e,t){const i=Se(r);try{const o=await(function(h,f){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((I=>(Ue(I!==null,37113),w=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(i.localStore,e);t0(i,e,t),e0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ml(i,o)}catch(o){await Uo(o)}}function e0(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function t0(r,e,t){const i=Se(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function lf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||n0(r,i)}))}function n0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(jf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Xf(r))}function Uy(r,e,t){for(const i of t)i instanceof Xv?(r.Au.addReference(i.key,e),tA(r,i)):i instanceof Yv?(re(Qf,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||n0(r,i.key)):_e(19791,{yu:i})}function tA(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(re(Qf,"New document in limbo: "+t),r.Iu.add(i),Xf(r))}function Xf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(Ke.fromString(e)),i=r.mu.next();r.Eu.set(i,new HS(t)),r.du=r.du.insert(t,i),Hv(r.remoteStore,new Si(hr(Cc(t.path)),i,"TargetPurposeLimboResolution",xc.ue))}}async function ml(r,e,t){const i=Se(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var w;if((_||t)&&i.isPrimaryClient){const I=_?!_.fromCache:(w=t?.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Mf.Es(g.targetId,_);l.push(I)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>W.forEach(_,(S=>W.forEach(S.Is,(V=>w.persistence.referenceDelegate.addReference(I,S.targetId,V))).next((()=>W.forEach(S.ds,(V=>w.persistence.referenceDelegate.removeReference(I,S.targetId,V)))))))))}catch(I){if(!Bo(I))throw I;re(Ff,"Failed to update sequence numbers: "+I)}for(const I of _){const S=I.targetId;if(!I.fromCache){const V=w.Fs.get(S),$=V.snapshotVersion,q=V.withLastLimboFreeSnapshotVersion($);w.Fs=w.Fs.insert(S,q)}}})(i.localStore,l))}async function nA(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){re(Qf,"User change. New user:",e.toKey());const i=await Uv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ee(H.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ml(t,i.Bs)}}function rA(r,e){const t=Se(r),i=t.Eu.get(e);if(i&&i.lu)return Pe().add(i.key);{let o=Pe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function r0(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.hu.J_=US.bind(null,e.eventManager),e.hu.pu=BS.bind(null,e.eventManager),e}function iA(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eA.bind(null,e),e}class pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return lS(this.persistence,new sS,e.initialUser,this.serializer)}Du(e){return new jv(Lf.Vi,this.serializer)}bu(e){return new mS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pc.provider={build:()=>new pc};class sA extends pc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof dc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new H1(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new jv((i=>dc.Vi(i,t)),this.serializer)}}class uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>jy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=nA.bind(null,this.syncEngine),await MS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jS})()}createDatastore(e){const t=Lc(e.databaseInfo.databaseId),i=(function(l){return new wS(l)})(e.databaseInfo);return(function(l,h,f,g){return new SS(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new xS(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>jy(this.syncEngine,t,0)),(function(){return Dy.C()?new Dy:new gS})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const I=new qS(o,l,h,f,g,_);return w&&(I.fu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);re(Ss,"RemoteStore shutting down."),l.Ia.add(5),await pl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}uf.provider={build:()=>new uf};/**
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
 */class Yf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Li="FirestoreClient";class oA{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=Af.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{re(Li,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(re(Li,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Hf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Vd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Li,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Uv(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Pi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Pi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function By(r,e){r.asyncQueue.verifyOperationInProgress();const t=await aA(r);re(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Vy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Vy(e.remoteStore,o))),r._onlineComponents=e}async function aA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Li,"Using user provided OfflineComponentProvider");try{await Vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Pi("Error using user provided cache. Falling back to memory cache: "+t),await Vd(r,new pc)}}else re(Li,"Using default OfflineComponentProvider"),await Vd(r,new sA(void 0));return r._offlineComponents}async function i0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Li,"Using user provided OnlineComponentProvider"),await By(r,r._uninitializedComponentsProvider._online)):(re(Li,"Using default OnlineComponentProvider"),await By(r,new uf))),r._onlineComponents}function lA(r){return i0(r).then((e=>e.syncEngine))}async function mc(r){const e=await i0(r),t=e.eventManager;return t.onListen=WS.bind(null,e.syncEngine),t.onUnlisten=QS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XS.bind(null,e.syncEngine),t}function uA(r,e,t={}){const i=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new Yf({next:S=>{w.Ou(),h.enqueueAndForget((()=>Wf(l,I)));const V=S.docs.has(f);!V&&S.fromCache?_.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&S.fromCache&&g&&g.source==="server"?_.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(S)},error:S=>_.reject(S)}),I=new Kf(Cc(f.path),w,{includeMetadataChanges:!0,ka:!0});return qf(l,I)})(await mc(r),r.asyncQueue,e,t,i))),i.promise}function cA(r,e,t={}){const i=new jr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new Yf({next:S=>{w.Ou(),h.enqueueAndForget((()=>Wf(l,I))),S.fromCache&&g.source==="server"?_.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(S)},error:S=>_.reject(S)}),I=new Kf(f,w,{includeMetadataChanges:!0,ka:!0});return qf(l,I)})(await mc(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function s0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const zy=new Map;/**
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
 */const o0="firestore.googleapis.com",$y=!0;class Hy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o0,this.ssl=$y}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$y;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<z1)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new _I;switch(i.type){case"firstParty":return new TI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=zy.get(t);i&&(re("ComponentProvider","Removing Datastore"),zy.delete(t),i.terminate())})(this),Promise.resolve()}}function hA(r,e,t,i={}){var o;r=wn(r,jc);const l=Mi(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(vf(`https://${g}`),wf("Firestore",!0)),h.host!==o0&&h.host!==g&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!Es(_,f)&&(r._setSettings(_),i.mockUserToken)){let w,I;if(typeof i.mockUserToken=="string")w=i.mockUserToken,I=Ht.MOCK_USER;else{w=L_(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ht(S)}r._authCredentials=new vI(new Q_(w,I))}}/**
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
 */class Ui{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class ct{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(hl(t,ct._jsonSchema))return new ct(e,i||null,new pe(Ke.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:yt("string",ct._jsonSchemaVersion),referencePath:yt("string")};class ki extends Ui{constructor(e,t,i){super(e,t,Cc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new pe(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function Wr(r,e,...t){if(r=it(r),Y_("collection","path",e),r instanceof jc){const i=Ke.fromString(e,...t);return ry(i),new ki(r,null,i)}{if(!(r instanceof ct||r instanceof ki))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return ry(i),new ki(r.firestore,null,i)}}function lr(r,e,...t){if(r=it(r),arguments.length===1&&(e=Af.newId()),Y_("doc","path",e),r instanceof jc){const i=Ke.fromString(e,...t);return ny(i),new ct(r,null,new pe(i))}{if(!(r instanceof ct||r instanceof ki))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return ny(i),new ct(r.firestore,r instanceof ki?r.converter:null,new pe(i))}}/**
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
 */const qy="AsyncQueue";class Wy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zv(this,"async_queue_retry"),this.oc=()=>{const i=Od();i&&re(qy,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new jr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Bo(e))throw e;re(qy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Br("INTERNAL UNHANDLED ERROR: ",Gy(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=$f.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:Gy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Gy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Ky(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class $r extends jc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Wy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function dA(r,e){const t=typeof r=="object"?r:If(),i=typeof r=="string"?r:oc,o=Sc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=D_("firestore");l&&hA(o,...l)}return o}function gl(r){if(r._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fA(r),r._firestoreClient}function fA(r){var e,t,i;const o=r._freezeSettings(),l=(function(f,g,_,w){return new FI(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,s0(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new oA(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f?._online.build();return{_offline:f?._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Ft.fromBase64String(e))}catch(t){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hl(e,Nn._jsonSchema))return Nn.fromBase64String(e.bytes)}}Nn._jsonSchemaVersion="firestore/bytes/1.0",Nn._jsonSchema={type:yt("string",Nn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class yl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jf{constructor(e){this._methodName=e}}/**
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
 */class fr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fr._jsonSchemaVersion}}static fromJSON(e){if(hl(e,fr._jsonSchema))return new fr(e.latitude,e.longitude)}}fr._jsonSchemaVersion="firestore/geoPoint/1.0",fr._jsonSchema={type:yt("string",fr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class pr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hl(e,pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pr(e.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pr._jsonSchemaVersion="firestore/vectorValue/1.0",pr._jsonSchema={type:yt("string",pr._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const pA=/^__.*__$/;class mA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new dl(e,this.data,t,this.fieldTransforms)}}class a0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ji(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function l0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class Zf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return gc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(l0(this.Ec)&&pA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Lc(e)}Dc(e,t,i,o=!1){return new Zf({Ec:e,methodName:t,bc:i,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uc(r){const e=r._freezeSettings(),t=Lc(r._databaseId);return new gA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function u0(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);ep("Data must be an object, but it was:",h,i);const f=d0(i,h);let g,_;if(l.merge)g=new _n(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const I of l.mergeFields){const S=cf(e,I,t);if(!h.contains(S))throw new ee(H.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);p0(w,S)||w.push(S)}g=new _n(w),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new mA(new un(f),g,_)}class Bc extends Jf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}function c0(r,e,t,i){const o=r.Dc(1,e,t);ep("Data must be an object, but it was:",o,i);const l=[],h=un.empty();Fi(i,((g,_)=>{const w=tp(e,g,t);_=it(_);const I=o.gc(w);if(_ instanceof Bc)l.push(w);else{const S=_l(_,I);S!=null&&(l.push(w),h.set(w,S))}}));const f=new _n(l);return new a0(h,f,o.fieldTransforms)}function h0(r,e,t,i,o,l){const h=r.Dc(1,e,t),f=[cf(e,i,t)],g=[o];if(l.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(cf(e,l[S])),g.push(l[S+1]);const _=[],w=un.empty();for(let S=f.length-1;S>=0;--S)if(!p0(_,f[S])){const V=f[S];let $=g[S];$=it($);const q=h.gc(V);if($ instanceof Bc)_.push(V);else{const B=_l($,q);B!=null&&(_.push(V),w.set(V,B))}}const I=new _n(_);return new a0(w,I,h.fieldTransforms)}function yA(r,e,t,i=!1){return _l(t,r.Dc(i?4:3,e))}function _l(r,e){if(f0(r=it(r)))return ep("Unsupported field value:",e,r),d0(r,e);if(r instanceof Jf)return(function(i,o){if(!l0(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=_l(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return a1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:hc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:hc(o.serializer,l)}}if(i instanceof fr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Nn)return{bytesValue:Nv(o.serializer,i._byteString)};if(i instanceof ct){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Of(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof pr)return(function(h,f){return{mapValue:{fields:{[ov]:{stringValue:av},[ac]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Nf(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Ac(i)}`)})(r,e)}function d0(r,e){const t={};return ev(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(r,((i,o)=>{const l=_l(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function f0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof fr||r instanceof Nn||r instanceof ct||r instanceof Jf||r instanceof pr)}function ep(r,e,t){if(!f0(t)||!J_(t)){const i=Ac(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function cf(r,e,t){if((e=it(e))instanceof yl)return e._internalPath;if(typeof e=="string")return tp(r,e);throw gc("Field path arguments must be of type string or ",r,!1,void 0,t)}const _A=new RegExp("[~\\*/\\[\\]]");function tp(r,e,t){if(e.search(_A)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new yl(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function gc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ee(H.INVALID_ARGUMENT,f+r+g)}function p0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class m0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vA extends m0{data(){return super.data()}}function zc(r,e){return typeof e=="string"?tp(r,e):e instanceof yl?e._internalPath:e._delegate._internalPath}/**
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
 */function g0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class np{}class y0 extends np{}function $c(r,e,...t){let i=[];e instanceof np&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof ip)).length,f=l.filter((g=>g instanceof Hc)).length;if(h>1||h>0&&f>0)throw new ee(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Hc extends y0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Hc(e,t,i)}_apply(e){const t=this._parse(e);return _0(e._query,t),new Ui(e.firestore,e.converter,Jd(e._query,t))}_parse(e){const t=Uc(e.firestore);return(function(l,h,f,g,_,w,I){let S;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Xy(I,w);const $=[];for(const q of I)$.push(Qy(g,l,q));S={arrayValue:{values:$}}}else S=Qy(g,l,I)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Xy(I,w),S=yA(f,h,I,w==="in"||w==="not-in");return gt.create(_,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rp(r,e,t){const i=e,o=zc("where",r);return Hc._create(o,i,t)}class ip extends np{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ip(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)_0(h,g),h=Jd(h,g)})(e._query,t),new Ui(e.firestore,e.converter,Jd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sp extends y0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rl(l,h)})(e._query,this._field,this._direction);return new Ui(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new zo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function wA(r,e="asc"){const t=e,i=zc("orderBy",r);return sp._create(i,t)}function Qy(r,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ee(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mv(e)&&t.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!pe.isDocumentKey(i))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return hy(r,new pe(i))}if(t instanceof ct)return hy(r,t._key);throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ac(t)}.`)}function Xy(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _0(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EA{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Fi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[ac].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>ut(h.doubleValue)));return new pr(l)}convertGeoPoint(e){return new fr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=kc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(Mv(i),9688,{name:e});const o=new tl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function v0(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ys extends m0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(zc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ys._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",ys._jsonSchema={type:yt("string",ys._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Ju extends ys{data(e={}){return super.data(e)}}class _s{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ju(this._firestore,this._userDataWriter,i.key,i,new Ha(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:TA(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Af.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function w0(r){r=wn(r,ct);const e=wn(r.firestore,$r);return uA(gl(e),r._key).then((t=>T0(e,r,t)))}_s._jsonSchemaVersion="firestore/querySnapshot/1.0",_s._jsonSchema={type:yt("string",_s._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class op extends EA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Ps(r){r=wn(r,Ui);const e=wn(r.firestore,$r),t=gl(e),i=new op(e);return g0(r._query),cA(t,r._query).then((o=>new _s(e,i,r,o)))}function E0(r,e,t,...i){r=wn(r,ct);const o=wn(r.firestore,$r),l=Uc(o);let h;return h=typeof(e=it(e))=="string"||e instanceof yl?h0(l,"updateDoc",r._key,e,t,i):c0(l,"updateDoc",r._key,e),qc(o,[h.toMutation(r._key,cn.exists(!0))])}function IA(r){return qc(wn(r.firestore,$r),[new Oc(r._key,cn.none())])}function SA(r,e){const t=wn(r.firestore,$r),i=lr(r),o=v0(r.converter,e);return qc(t,[u0(Uc(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,cn.exists(!1))]).then((()=>i))}function AA(r,...e){var t,i,o;r=it(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ky(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Ky(e[h])){const I=e[h];e[h]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[h+1]=(i=I.error)===null||i===void 0?void 0:i.bind(I),e[h+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let g,_,w;if(r instanceof ct)_=wn(r.firestore,$r),w=Cc(r._key.path),g={next:I=>{e[h]&&e[h](T0(_,r,I))},error:e[h+1],complete:e[h+2]};else{const I=wn(r,Ui);_=wn(I.firestore,$r),w=I._query;const S=new op(_);g={next:V=>{e[h]&&e[h](new _s(_,S,I,V))},error:e[h+1],complete:e[h+2]},g0(r._query)}return(function(S,V,$,q){const B=new Yf(q),ne=new Kf(V,B,$);return S.asyncQueue.enqueueAndForget((async()=>qf(await mc(S),ne))),()=>{B.Ou(),S.asyncQueue.enqueueAndForget((async()=>Wf(await mc(S),ne)))}})(gl(_),w,f,g)}function qc(r,e){return(function(i,o){const l=new jr;return i.asyncQueue.enqueueAndForget((async()=>YS(await lA(i),o,l))),l.promise})(gl(r),e)}function T0(r,e,t){const i=t.docs.get(e._key),o=new op(r);return new ys(r,o,e._key,i,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class xA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uc(e)}set(e,t,i){this._verifyNotCommitted();const o=Ld(e,this._firestore),l=v0(o.converter,t,i),h=u0(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(h.toMutation(o._key,cn.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=Ld(e,this._firestore);let h;return h=typeof(t=it(t))=="string"||t instanceof yl?h0(this._dataReader,"WriteBatch.update",l._key,t,i,o):c0(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ld(e,this._firestore);return this._mutations=this._mutations.concat(new Oc(t._key,cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ld(r,e){if((r=it(r)).firestore!==e)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function I0(r){return gl(r=wn(r,$r)),new xA(r,(e=>qc(r,e)))}(function(e,t=!0){(function(o){jo=o})(Rs),Ts(new Ci("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new $r(new wI(i.getProvider("auth-internal")),new II(h,i.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),cr(Yg,Jg,e),cr(Yg,Jg,"esm2017")})();/**
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
 */const S0="firebasestorage.googleapis.com",A0="storageBucket",RA=120*1e3,kA=600*1e3;/**
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
 */class ot extends _r{constructor(e,t,i=0){super(Md(e),`Firebase Storage: ${t} (${Md(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Md(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function Md(r){return"storage/"+r}function ap(){const r="An unknown error occurred, please check the error payload for server response.";return new ot(st.UNKNOWN,r)}function CA(r){return new ot(st.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function PA(r){return new ot(st.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NA(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(st.UNAUTHENTICATED,r)}function bA(){return new ot(st.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DA(r){return new ot(st.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function OA(){return new ot(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VA(){return new ot(st.CANCELED,"User canceled the upload/download.")}function LA(r){return new ot(st.INVALID_URL,"Invalid URL '"+r+"'.")}function MA(r){return new ot(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function FA(){return new ot(st.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+A0+"' property when initializing the app?")}function jA(){return new ot(st.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UA(){return new ot(st.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function BA(r){return new ot(st.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hf(r){return new ot(st.INVALID_ARGUMENT,r)}function x0(){return new ot(st.APP_DELETED,"The Firebase app was deleted.")}function zA(r){return new ot(st.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xa(r,e){return new ot(st.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ua(r){throw new ot(st.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=vn.makeFromUrl(e,t)}catch{return new vn(e,"")}if(i.path==="")return i;throw MA(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(ce){ce.path_=decodeURIComponent(ce.path)}const w="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",V=new RegExp(`^https?://${I}/${w}/b/${o}/o${S}`,"i"),$={bucket:1,path:3},q=t===S0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",ne=new RegExp(`^https?://${q}/${o}/${B}`,"i"),oe=[{regex:f,indices:g,postModify:l},{regex:V,indices:$,postModify:_},{regex:ne,indices:{bucket:1,path:2},postModify:_}];for(let ce=0;ce<oe.length;ce++){const Ne=oe[ce],Te=Ne.regex.exec(e);if(Te){const N=Te[Ne.indices.bucket];let A=Te[Ne.indices.path];A||(A=""),i=new vn(N,A),Ne.postModify(i);break}}if(i==null)throw LA(e);return i}}class $A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HA(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function w(...B){_||(_=!0,e.apply(null,B))}function I(B){o=setTimeout(()=>{o=null,r(V,g())},B)}function S(){l&&clearTimeout(l)}function V(B,...ne){if(_){S();return}if(B){S(),w.call(null,B,...ne);return}if(g()||h){S(),w.call(null,B,...ne);return}i<64&&(i*=2);let oe;f===1?(f=2,oe=0):oe=(i+Math.random())*1e3,I(oe)}let $=!1;function q(B){$||($=!0,S(),!_&&(o!==null?(B||(f=2),clearTimeout(o),I(0)):B||(f=1)))}return I(0),l=setTimeout(()=>{h=!0,q(!0)},t),q}function qA(r){r(!1)}/**
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
 */function WA(r){return r!==void 0}function GA(r){return typeof r=="object"&&!Array.isArray(r)}function lp(r){return typeof r=="string"||r instanceof String}function Yy(r){return up()&&r instanceof Blob}function up(){return typeof Blob<"u"}function Jy(r,e,t,i){if(i<e)throw hf(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw hf(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function cp(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function R0(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var vs;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(vs||(vs={}));/**
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
 */function KA(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class QA{constructor(e,t,i,o,l,h,f,g,_,w,I,S=!0,V=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=I,this.retry=S,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,q)=>{this.resolve_=$,this.reject_=q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Hu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===vs.NO_ERROR,g=l.getStatus();if(!f||KA(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===vs.ABORT;i(!1,new Hu(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new Hu(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());WA(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=ap();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?x0():VA();h(g)}else{const g=OA();h(g)}};this.canceled_?t(!1,new Hu(!1,null,!0)):this.backoffId_=HA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function XA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function YA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function ZA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function ex(r,e,t,i,o,l,h=!0,f=!1){const g=R0(r.urlParams),_=r.url+g,w=Object.assign({},r.headers);return JA(w,e),XA(w,t),YA(w,l),ZA(w,i),new QA(_,r.method,w,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function tx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nx(...r){const e=tx();if(e!==void 0){const t=new e;for(let i=0;i<r.length;i++)t.append(r[i]);return t.getBlob()}else{if(up())return new Blob(r);throw new ot(st.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rx(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function ix(r){if(typeof atob>"u")throw BA("base-64");return atob(r)}/**
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
 */const ur={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fd{constructor(e,t){this.data=e,this.contentType=t||null}}function sx(r,e){switch(r){case ur.RAW:return new Fd(k0(e));case ur.BASE64:case ur.BASE64URL:return new Fd(C0(r,e));case ur.DATA_URL:return new Fd(ax(e),lx(e))}throw ap()}function k0(r){const e=[];for(let t=0;t<r.length;t++){let i=r.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=r.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function ox(r){let e;try{e=decodeURIComponent(r)}catch{throw Xa(ur.DATA_URL,"Malformed data URL.")}return k0(e)}function C0(r,e){switch(r){case ur.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Xa(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ur.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Xa(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ix(e)}catch(o){throw o.message.includes("polyfill")?o:Xa(r,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class P0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xa(ur.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=ux(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function ax(r){const e=new P0(r);return e.base64?C0(ur.BASE64,e.rest):ox(e.rest)}function lx(r){return new P0(r).contentType}function ux(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class vi{constructor(e,t){let i=0,o="";Yy(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Yy(this.data_)){const i=this.data_,o=rx(i,e,t);return o===null?null:new vi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new vi(i,!0)}}static getBlob(...e){if(up()){const t=e.map(i=>i instanceof vi?i.data_:i);return new vi(nx.apply(null,t))}else{const t=e.map(h=>lp(h)?sx(ur.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new vi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function N0(r){let e;try{e=JSON.parse(r)}catch{return null}return GA(e)?e:null}/**
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
 */function cx(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function hx(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function b0(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function dx(r,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||dx}}let qu=null;function fx(r){return!lp(r)||r.length<2?r:b0(r)}function D0(){if(qu)return qu;const r=[];r.push(new Yt("bucket")),r.push(new Yt("generation")),r.push(new Yt("metageneration")),r.push(new Yt("name","fullPath",!0));function e(l,h){return fx(h)}const t=new Yt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Yt("size");return o.xform=i,r.push(o),r.push(new Yt("timeCreated")),r.push(new Yt("updated")),r.push(new Yt("md5Hash",null,!0)),r.push(new Yt("cacheControl",null,!0)),r.push(new Yt("contentDisposition",null,!0)),r.push(new Yt("contentEncoding",null,!0)),r.push(new Yt("contentLanguage",null,!0)),r.push(new Yt("contentType",null,!0)),r.push(new Yt("metadata","customMetadata",!0)),qu=r,qu}function px(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new vn(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function mx(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return px(i,r),i}function O0(r,e,t){const i=N0(e);return i===null?null:mx(r,i,t)}function gx(r,e,t,i){const o=N0(e);if(o===null||!lp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const w=r.bucket,I=r.fullPath,S="/b/"+h(w)+"/o/"+h(I),V=cp(S,t,i),$=R0({alt:"media",token:_});return V+$})[0]}function yx(r,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}class V0{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function L0(r){if(!r)throw ap()}function _x(r,e){function t(i,o){const l=O0(r,o,e);return L0(l!==null),l}return t}function vx(r,e){function t(i,o){const l=O0(r,o,e);return L0(l!==null),gx(l,o,r.host,r._protocol)}return t}function M0(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=bA():o=NA():t.getStatus()===402?o=PA(r.bucket):t.getStatus()===403?o=DA(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function wx(r){const e=M0(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=CA(r.path)),l.serverResponse=o.serverResponse,l}return t}function Ex(r,e,t){const i=e.fullServerUrl(),o=cp(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new V0(o,l,vx(r,t),h);return f.errorHandler=wx(e),f}function Tx(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Ix(r,e,t){const i=Object.assign({},t);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=Tx(null,e)),i}function Sx(r,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let oe="";for(let ce=0;ce<2;ce++)oe=oe+Math.random().toString().slice(2);return oe}const g=f();h["Content-Type"]="multipart/related; boundary="+g;const _=Ix(e,i,o),w=yx(_,t),I="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,S=`\r
--`+g+"--",V=vi.getBlob(I,i,S);if(V===null)throw jA();const $={name:_.fullPath},q=cp(l,r.host,r._protocol),B="POST",ne=r.maxUploadRetryTime,se=new V0(q,B,_x(r,t),ne);return se.urlParams=$,se.headers=h,se.body=V.uploadData(),se.errorHandler=M0(e),se}class Ax{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Ua("cannot .send() more than once");if(Mi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xx extends Ax{initXhr(){this.xhr_.responseType="text"}}function F0(){return new xx}/**
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
 */class As{constructor(e,t){this._service=e,t instanceof vn?this._location=t:this._location=vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new As(e,t)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return b0(this._location.path)}get storage(){return this._service}get parent(){const e=cx(this._location.path);if(e===null)return null;const t=new vn(this._location.bucket,e);return new As(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zA(e)}}function Rx(r,e,t){r._throwIfRoot("uploadBytes");const i=Sx(r.storage,r._location,D0(),new vi(e,!0),t);return r.storage.makeRequestWithTokens(i,F0).then(o=>({metadata:o,ref:r}))}function kx(r){r._throwIfRoot("getDownloadURL");const e=Ex(r.storage,r._location,D0());return r.storage.makeRequestWithTokens(e,F0).then(t=>{if(t===null)throw UA();return t})}function Cx(r,e){const t=hx(r._location.path,e),i=new vn(r._location.bucket,t);return new As(r.storage,i)}/**
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
 */function Px(r){return/^[A-Za-z]+:\/\//.test(r)}function Nx(r,e){return new As(r,e)}function j0(r,e){if(r instanceof hp){const t=r;if(t._bucket==null)throw FA();const i=new As(t,t._bucket);return e!=null?j0(i,e):i}else return e!==void 0?Cx(r,e):r}function bx(r,e){if(e&&Px(e)){if(r instanceof hp)return Nx(r,e);throw hf("To use ref(service, url), the first argument must be a Storage instance.")}else return j0(r,e)}function Zy(r,e){const t=e?.[A0];return t==null?null:vn.makeFromBucketSpec(t,r)}function Dx(r,e,t,i={}){r.host=`${e}:${t}`;const o=Mi(e);o&&(vf(`https://${r.host}/b`),wf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:L_(l,r.app.options.projectId))}class hp{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=S0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RA,this._maxUploadRetryTime=kA,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=Zy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=Zy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new As(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new $A(x0());{const h=ex(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const e_="@firebase/storage",t_="0.13.14";/**
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
 */const U0="storage";function Ox(r,e,t){return r=it(r),Rx(r,e,t)}function Vx(r){return r=it(r),kx(r)}function Lx(r,e){return r=it(r),bx(r,e)}function Mx(r=If(),e){r=it(r);const i=Sc(r,U0).getImmediate({identifier:e}),o=D_("storage");return o&&Fx(i,...o),i}function Fx(r,e,t,i={}){Dx(r,e,t,i)}function jx(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new hp(t,i,o,e,Rs)}function Ux(){Ts(new Ci(U0,jx,"PUBLIC").setMultipleInstances(!0)),cr(e_,t_,""),cr(e_,t_,"esm2017")}Ux();var Bx="firebase",zx="11.10.0";/**
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
 */cr(Bx,zx,"app");function dp(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function B0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $x=B0,z0=new ul("auth","Firebase",B0());/**
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
 */const yc=new Ef("@firebase/auth");function Hx(r,...e){yc.logLevel<=Ce.WARN&&yc.warn(`Auth (${Rs}): ${r}`,...e)}function Zu(r,...e){yc.logLevel<=Ce.ERROR&&yc.error(`Auth (${Rs}): ${r}`,...e)}/**
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
 */function Hr(r,...e){throw fp(r,...e)}function mr(r,...e){return fp(r,...e)}function $0(r,e,t){const i=Object.assign(Object.assign({},$x()),{[e]:t});return new ul("auth","Firebase",i).create(e,{appName:r.name})}function ws(r){return $0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return z0.create(r,...e)}function Ee(r,e,...t){if(!r)throw fp(e,...t)}function Mr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zu(e),new Error(e)}function qr(r,e){r||Mr(e)}/**
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
 */function df(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function qx(){return n_()==="http:"||n_()==="https:"}function n_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Wx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qx()||YE()||"connection"in navigator)?navigator.onLine:!0}function Gx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,qr(t>e,"Short delay should be less than long delay!"),this.isMobile=KE()||JE()}get(){return Wx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pp(r,e){qr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class H0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xx=new vl(3e4,6e4);function mp(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ho(r,e,t,i,o={}){return q0(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=cl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return XE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Mi(r.emulatorConfig.host)&&(_.credentials="include"),H0.fetch()(await W0(r,r.config.apiHost,t,f),_)})}async function q0(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},Kx),e);try{const o=new Jx(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Wu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Wu(r,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw $0(r,w,_);Hr(r,w)}}catch(o){if(o instanceof _r)throw o;Hr(r,"network-request-failed",{message:String(o)})}}async function Yx(r,e,t,i,o={}){const l=await Ho(r,e,t,i,o);return"mfaPendingCredential"in l&&Hr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function W0(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?pp(r.config,o):`${r.config.apiScheme}://${o}`;return Qx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class Jx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),Xx.get())})}}function Wu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=mr(r,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function Zx(r,e){return Ho(r,"POST","/v1/accounts:delete",e)}async function _c(r,e){return Ho(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eR(r,e=!1){const t=it(r),i=await t.getIdToken(e),o=gp(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Ya(jd(o.auth_time)),issuedAtTime:Ya(jd(o.iat)),expirationTime:Ya(jd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function jd(r){return Number(r)*1e3}function gp(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=N_(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function r_(r){const e=gp(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ol(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof _r&&tR(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function tR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class nR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ff{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vc(r){var e;const t=r.auth,i=await r.getIdToken(),o=await ol(r,_c(t,{idToken:i}));Ee(o?.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?G0(l.providerUserInfo):[],f=iR(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!f?.length,w=g?_:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new ff(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,I)}async function rR(r){const e=it(r);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iR(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function G0(r){return r.map(e=>{var{providerId:t}=e,i=dp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function sR(r,e){const t=await q0(r,{},async()=>{const i=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await W0(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Mi(r.emulatorConfig.host)&&(g.credentials="include"),H0.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oR(r,e){return Ho(r,"POST","/v2/accounts:revokeToken",mp(r,e))}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=r_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await sR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Po;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
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
 */function _i(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=dp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ff(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ol(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eR(this,e)}reload(){return rR(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(ws(this.auth));const e=await this.getIdToken();return await ol(this,Zx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,w;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ne=(_=t.createdAt)!==null&&_!==void 0?_:void 0,se=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:oe,emailVerified:ce,isAnonymous:Ne,providerData:Te,stsTokenManager:N}=t;Ee(oe&&N,e,"internal-error");const A=Po.fromJSON(this.name,N);Ee(typeof oe=="string",e,"internal-error"),_i(I,e.name),_i(S,e.name),Ee(typeof ce=="boolean",e,"internal-error"),Ee(typeof Ne=="boolean",e,"internal-error"),_i(V,e.name),_i($,e.name),_i(q,e.name),_i(B,e.name),_i(ne,e.name),_i(se,e.name);const k=new Kn({uid:oe,auth:e,email:S,emailVerified:ce,displayName:I,isAnonymous:Ne,photoURL:$,phoneNumber:V,tenantId:q,stsTokenManager:A,createdAt:ne,lastLoginAt:se});return Te&&Array.isArray(Te)&&(k.providerData=Te.map(C=>Object.assign({},C))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new Po;o.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await vc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?G0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new Po;f.updateFromIdToken(i);const g=new Kn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,_),g}}/**
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
 */const i_=new Map;function Fr(r){qr(r instanceof Function,"Expected a class definition");let e=i_.get(r);return e?(qr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,i_.set(r,e),e)}/**
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
 */class K0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K0.type="NONE";const s_=K0;/**
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
 */function ec(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _c(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(Fr(s_),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Fr(s_);const h=ec(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let I;if(typeof w=="string"){const S=await _c(e,{idToken:w}).catch(()=>{});if(!S)break;I=await Kn._fromGetAccountInfoResponse(e,S,w)}else I=Kn._fromJSON(e,w);_!==l&&(f=I),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,i))}}/**
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
 */function o_(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ew(e))return"Blackberry";if(tw(e))return"Webos";if(X0(e))return"Safari";if((e.includes("chrome/")||Y0(e))&&!e.includes("edge/"))return"Chrome";if(Z0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function Q0(r=Wt()){return/firefox\//i.test(r)}function X0(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y0(r=Wt()){return/crios\//i.test(r)}function J0(r=Wt()){return/iemobile/i.test(r)}function Z0(r=Wt()){return/android/i.test(r)}function ew(r=Wt()){return/blackberry/i.test(r)}function tw(r=Wt()){return/webos/i.test(r)}function yp(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function aR(r=Wt()){var e;return yp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lR(){return ZE()&&document.documentMode===10}function nw(r=Wt()){return yp(r)||Z0(r)||tw(r)||ew(r)||/windows phone/i.test(r)||J0(r)}/**
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
 */function rw(r,e=[]){let t;switch(r){case"Browser":t=o_(Wt());break;case"Worker":t=`${o_(Wt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rs}/${i}`}/**
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
 */class uR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function cR(r,e={}){return Ho(r,"GET","/v2/passwordPolicy",mp(r,e))}/**
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
 */const hR=6;class dR{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:hR,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class fR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new uR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _c(this,{idToken:e}),i=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(ws(this));const t=e?it(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cR(this),t=new dR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ul("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await oR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Hx(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _p(r){return it(r)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=aT(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pR(r){vp=r}function mR(r){return vp.loadJS(r)}function gR(){return vp.gapiScript}function yR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _R(r,e){const t=Sc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;Hr(o,"already-initialized")}return t.initialize({options:e})}function vR(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Fr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function wR(r,e,t){const i=_p(r);Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=iw(e),{host:h,port:f}=ER(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ee(Es(_,i.config.emulator)&&Es(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Mi(h)?(vf(`${l}//${h}${g}`),wf("Auth",!0)):TR()}function iw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ER(r){const e=iw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:l_(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:l_(h)}}}function l_(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function TR(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class sw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}/**
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
 */async function bo(r,e){return Yx(r,"POST","/v1/accounts:signInWithIdp",mp(r,e))}/**
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
 */const IR="http://localhost";class xs extends sw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=dp(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new xs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return bo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bo(e,t)}buildRequest(){const e={requestUri:IR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cl(t)}return e}}/**
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
 */class ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wi extends wl{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
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
 */class Ei extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
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
 */class Ti extends wl{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends wl{constructor(){super("twitter.com")}static credential(e,t){return xs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */class Fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Kn._fromIdTokenResponse(e,i,o),h=u_(i);return new Fo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=u_(i);return new Fo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function u_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class wc extends _r{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new wc(e,t,i,o)}}function aw(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(r,l,e,i):l})}async function SR(r,e,t=!1){const i=await ol(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Fo._forOperation(r,"link",i)}/**
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
 */async function AR(r,e,t=!1){const{auth:i}=r;if(Gn(i.app))return Promise.reject(ws(i));const o="reauthenticate";try{const l=await ol(r,aw(i,o,e,r),t);Ee(l.idToken,i,"internal-error");const h=gp(l.idToken);Ee(h,i,"internal-error");const{sub:f}=h;return Ee(r.uid===f,i,"user-mismatch"),Fo._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Hr(i,"user-mismatch"),l}}/**
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
 */async function xR(r,e,t=!1){if(Gn(r.app))return Promise.reject(ws(r));const i="signIn",o=await aw(r,i,e),l=await Fo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function RR(r,e,t,i){return it(r).onIdTokenChanged(e,t,i)}function kR(r,e,t){return it(r).beforeAuthStateChanged(e,t)}const Ec="__sak";/**
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
 */class lw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CR=1e3,PR=10;class uw extends lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);lR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,PR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uw.type="LOCAL";const NR=uw;/**
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
 */class cw extends lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cw.type="SESSION";const hw=cw;/**
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
 */function bR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Wc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await bR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
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
 */function wp(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class DR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=wp("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function gr(){return window}function OR(r){gr().location.href=r}/**
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
 */function dw(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function VR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LR(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function MR(){return dw()?self:null}/**
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
 */const fw="firebaseLocalStorageDb",FR=1,Tc="firebaseLocalStorage",pw="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gc(r,e){return r.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function jR(){const r=indexedDB.deleteDatabase(fw);return new El(r).toPromise()}function pf(){const r=indexedDB.open(fw,FR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Tc,{keyPath:pw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Tc)?e(i):(i.close(),await jR(),e(await pf()))})})}async function c_(r,e,t){const i=Gc(r,!0).put({[pw]:e,value:t});return new El(i).toPromise()}async function UR(r,e){const t=Gc(r,!1).get(e),i=await new El(t).toPromise();return i===void 0?null:i.value}function h_(r,e){const t=Gc(r,!0).delete(e);return new El(t).toPromise()}const BR=800,zR=3;class mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>zR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(MR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VR(),!this.activeServiceWorker)return;this.sender=new DR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await c_(e,Ec,"1"),await h_(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>c_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>UR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>h_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Gc(o,!1).getAll();return new El(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mw.type="LOCAL";const $R=mw;new vl(3e4,6e4);/**
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
 */function HR(r,e){return e?Fr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ep extends sw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qR(r){return xR(r.auth,new Ep(r),r.bypassAuthState)}function WR(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),AR(t,new Ep(r),r.bypassAuthState)}async function GR(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),SR(t,new Ep(r),r.bypassAuthState)}/**
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
 */class gw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qR;case"linkViaPopup":case"linkViaRedirect":return GR;case"reauthViaPopup":case"reauthViaRedirect":return WR;default:Hr(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KR=new vl(2e3,1e4);class ko extends gw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KR.get())};e()}}ko.currentPopupAction=null;/**
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
 */const QR="pendingRedirect",tc=new Map;class XR extends gw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const i=await YR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YR(r,e){const t=ek(e),i=ZR(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function JR(r,e){tc.set(r._key(),e)}function ZR(r){return Fr(r._redirectPersistence)}function ek(r){return ec(QR,r.config.apiKey,r.name)}async function tk(r,e,t=!1){if(Gn(r.app))return Promise.reject(ws(r));const i=_p(r),o=HR(i,e),h=await new XR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const nk=600*1e3;class rk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ik(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nk&&this.cachedEventUids.clear(),this.cachedEventUids.has(d_(e))}saveEventToCache(e){this.cachedEventUids.add(d_(e)),this.lastProcessedEventTime=Date.now()}}function d_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function yw({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function ik(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yw(r);default:return!1}}/**
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
 */async function sk(r,e={}){return Ho(r,"GET","/v1/projects",e)}/**
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
 */const ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ak=/^https?/;async function lk(r){if(r.config.emulator)return;const{authorizedDomains:e}=await sk(r);for(const t of e)try{if(uk(t))return}catch{}Hr(r,"unauthorized-domain")}function uk(r){const e=df(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!ak.test(t))return!1;if(ok.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const ck=new vl(3e4,6e4);function f_(){const r=gr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function hk(r){return new Promise((e,t)=>{var i,o,l;function h(){f_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f_(),t(mr(r,"network-request-failed"))},timeout:ck.get()})}if(!((o=(i=gr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=gr().gapi)===null||l===void 0)&&l.load)h();else{const f=yR("iframefcb");return gr()[f]=()=>{gapi.load?h():t(mr(r,"network-request-failed"))},mR(`${gR()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw nc=null,e})}let nc=null;function dk(r){return nc=nc||hk(r),nc}/**
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
 */const fk=new vl(5e3,15e3),pk="__/auth/iframe",mk="emulator/auth/iframe",gk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _k(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?pp(e,mk):`https://${r.config.authDomain}/${pk}`,i={apiKey:e.apiKey,appName:r.name,v:Rs},o=yk.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${cl(i).slice(1)}`}async function vk(r){const e=await dk(r),t=gr().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:_k(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=mr(r,"network-request-failed"),f=gr().setTimeout(()=>{l(h)},fk.get());function g(){gr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ek=500,Tk=600,Ik="_blank",Sk="http://localhost";class p_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ak(r,e,t,i=Ek,o=Tk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},wk),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Wt().toLowerCase();t&&(f=Y0(_)?Ik:t),Q0(_)&&(e=e||Sk,g.scrollbars="yes");const w=Object.entries(g).reduce((S,[V,$])=>`${S}${V}=${$},`,"");if(aR(_)&&f!=="_self")return xk(e||"",f),new p_(null);const I=window.open(e||"",f,w);Ee(I,r,"popup-blocked");try{I.focus()}catch{}return new p_(I)}function xk(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Rk="__/auth/handler",kk="emulator/auth/handler",Ck=encodeURIComponent("fac");async function m_(r,e,t,i,o,l){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Rs,eventId:o};if(e instanceof ow){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",oT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof wl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${Ck}=${encodeURIComponent(g)}`:"";return`${Pk(r)}?${cl(f).slice(1)}${_}`}function Pk({config:r}){return r.emulator?pp(r,kk):`https://${r.authDomain}/${Rk}`}/**
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
 */const Ud="webStorageSupport";class Nk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=tk,this._overrideRedirectResult=JR}async _openPopup(e,t,i,o){var l;qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await m_(e,t,i,df(),o);return Ak(e,h,wp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await m_(e,t,i,df(),o);return OR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await vk(e),i=new rk(e);return t.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ud,{type:Ud},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Ud];h!==void 0&&t(!!h),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nw()||X0()||yp()}}const bk=Nk;var g_="@firebase/auth",y_="1.10.8";/**
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
 */class Dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ok(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vk(r){Ts(new Ci("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rw(r)},_=new fR(i,o,l,g);return vR(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ts(new Ci("auth-internal",e=>{const t=_p(e.getProvider("auth").getImmediate());return(i=>new Dk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(g_,y_,Ok(r)),cr(g_,y_,"esm2017")}/**
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
 */const Lk=300,Mk=V_("authIdTokenMaxAge")||Lk;let __=null;const Fk=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Mk)return;const o=t?.token;__!==o&&(__=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function jk(r=If()){const e=Sc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_R(r,{popupRedirectResolver:bk,persistence:[$R,NR,hw]}),i=V_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=Fk(l.toString());kR(t,h,()=>h(t.currentUser)),RR(t,f=>h(f))}}const o=b_("auth");return o&&wR(t,`http://${o}`),t}function Uk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}pR({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=mr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Uk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vk("Browser");const Bk={apiKey:"AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A",authDomain:"test-f80e2.firebaseapp.com",projectId:"test-f80e2",storageBucket:"test-f80e2.firebasestorage.app",messagingSenderId:"998655559449",appId:"1:998655559449:web:7cf8fe76af797e7904e788"},Tp=j_(Bk);jk(Tp);const mt=dA(Tp),zk=Mx(Tp),Nt={CAREGIVERS:"caregivers",PATIENTS:"patients",REMINDERS:"reminders",LINKING_CODES:"linkingCodes"},$k=[{id:"c1",email:"maria@careconnect.example",name:"Maria"},{id:"c2",email:"john@careconnect.example",name:"John"},{id:"c3",email:"sarah@careconnect.example",name:"Sarah"}],Hk=[{id:"p1",name:"James",caregiverId:"c1"},{id:"p2",name:"Eleanor",caregiverId:"c1"},{id:"p3",name:"Robert",caregiverId:"c2"},{id:"p4",name:"Margaret",caregiverId:"c3"}],qk=[{id:"r1",patientId:"p1",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r2",patientId:"p1",title:"Drink water",time:"10:00 AM",done:!1},{id:"r3",patientId:"p1",title:"Lunch",time:"12:30 PM",done:!1},{id:"r4",patientId:"p1",title:"Afternoon walk",time:"3:00 PM",done:!1},{id:"r5",patientId:"p2",title:"Take morning medication",time:"8:30 AM",done:!1},{id:"r6",patientId:"p2",title:"Call family",time:"2:00 PM",done:!1},{id:"r7",patientId:"p3",title:"Take morning medication",time:"9:00 AM",done:!1},{id:"r8",patientId:"p4",title:"Take morning medication",time:"8:00 AM",done:!1},{id:"r9",patientId:"p4",title:"Rest",time:"1:00 PM",done:!1}],Wk=[{code:"JAMES01",patientId:"p1",patientName:"James"},{code:"ELEANOR",patientId:"p2",patientName:"Eleanor"},{code:"ROBERT1",patientId:"p3",patientName:"Robert"},{code:"MARGARET",patientId:"p4",patientName:"Margaret"}];async function Gk(){const r=Wr(mt,Nt.CAREGIVERS);if(!(await Ps(r)).empty)return;const t=I0(mt);for(const i of $k)t.set(lr(mt,Nt.CAREGIVERS,i.id),{email:i.email,name:i.name});for(const i of Hk)t.set(lr(mt,Nt.PATIENTS,i.id),{name:i.name,caregiverId:i.caregiverId});for(const i of qk)t.set(lr(mt,Nt.REMINDERS,i.id),{patientId:i.patientId,title:i.title,time:i.time,done:i.done});for(const i of Wk){const o=i.code.toUpperCase();t.set(lr(mt,Nt.LINKING_CODES,o),{patientId:i.patientId,patientName:i.patientName})}await t.commit(),await Qk()}const Kk=[{patientId:"p1",id:"loc1",room:"Living room",time:Date.now()-36e5},{patientId:"p1",id:"loc2",room:"Kitchen",time:Date.now()-72e5},{patientId:"p2",id:"loc1",room:"Bedroom",time:Date.now()-18e5}];async function Qk(){const r=I0(mt);let e=!1;for(const{patientId:t,id:i,room:o,time:l}of Kk){const h=lr(mt,Nt.PATIENTS,t,"location",i);(await w0(h)).exists()||(r.set(h,{room:o,time:l}),e=!0)}e&&await r.commit()}async function _w(){return(await Ps(Wr(mt,Nt.CAREGIVERS))).docs.map(e=>({id:e.id,...e.data()}))}async function Ip(r){return(await _w()).find(t=>t.email===r)}async function vw(r){const e=await Ip(r);if(!e)return[];const t=$c(Wr(mt,Nt.PATIENTS),rp("caregiverId","==",e.id));return(await Ps(t)).docs.map(o=>({id:o.id,...o.data()}))}async function Xk(r){const e=$c(Wr(mt,Nt.REMINDERS),rp("patientId","==",r));return(await Ps(e)).docs.map(o=>({id:o.id,...o.data()})).sort((o,l)=>o.time.localeCompare(l.time))}async function Yk(r){const e=r.trim().toUpperCase();if(!e)return;const t=lr(mt,Nt.LINKING_CODES,e),i=await w0(t);if(!i.exists())return;const o=i.data();return{code:e,patientId:o.patientId,patientName:o.patientName}}async function Jk(r){if(r.length===0)return[];const e=await Ps(Wr(mt,Nt.LINKING_CODES)),t=new Set(r);return e.docs.map(i=>({code:i.id,...i.data()})).filter(i=>t.has(i.patientId))}function Zk(r,e,t){const i=$c(Wr(mt,Nt.REMINDERS),rp("patientId","==",r));return AA(i,o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));e(l.sort((h,f)=>h.time.localeCompare(f.time)))},o=>t?.(o))}async function eC(){return(await Ps(Wr(mt,Nt.LINKING_CODES))).docs.map(e=>({code:e.id,...e.data()}))}async function tC(r){await IA(lr(mt,Nt.REMINDERS,r))}async function nC(r){const e=lr(mt,Nt.REMINDERS,r);await E0(e,{done:!0})}async function rC(r,e,t){const i=`reminders/${r}/${e}/${t.name}`,o=Lx(zk,i);return await Ox(o,t),Vx(o)}async function iC(r,e){const t=Wr(mt,Nt.REMINDERS);return(await SA(t,{patientId:r,title:e.title,time:e.time,done:!1,...e.photoUrl&&{photoUrl:e.photoUrl},...e.audioUrl&&{audioUrl:e.audioUrl}})).id}async function sC(r,e){const t=lr(mt,Nt.REMINDERS,r);await E0(t,{photoUrl:e})}async function oC(r){const e=Wr(mt,Nt.PATIENTS,r,"location"),t=$c(e,wA("time","desc"));return(await Ps(t)).docs.map(l=>{const h=l.data(),f=typeof h.room=="string"?h.room:"Unknown",g=h.time;let _=NaN;return typeof g=="number"?_=g:typeof g=="string"&&g.trim()?_=Number(g):g&&typeof g.toMillis=="function"&&(_=g.toMillis()),{id:l.id,room:f,time:_}}).filter(l=>Number.isFinite(l.time))}const mf="careconnect_caregiver_email",gf="careconnect_linked_patient_id",yf="careconnect_linked_patient_name";function Kc(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function v_(){return Kc()?.getItem(mf)??null}function w_(r){const e=Kc();e&&(r?e.setItem(mf,r):e.removeItem(mf))}function E_(){const r=Kc();if(!r)return null;const e=r.getItem(gf);return e?{id:e,name:r.getItem(yf)??"Patient"}:null}function T_(r,e){const t=Kc();t&&(r?(t.setItem(gf,r),e&&t.setItem(yf,e)):(t.removeItem(gf),t.removeItem(yf)))}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lC=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),I_=r=>{const e=lC(r);return e.charAt(0).toUpperCase()+e.slice(1)},ww=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=fe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>fe.createElement("svg",{ref:g,...uC,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:ww("lucide",o),...f},[...h.map(([_,w])=>fe.createElement(_,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(r,e)=>{const t=fe.forwardRef(({className:i,...o},l)=>fe.createElement(cC,{ref:l,iconNode:e,className:ww(`lucide-${aC(I_(r))}`,`lucide-${r}`,i),...o}));return t.displayName=I_(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tl=ht("arrow-left",hC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Qc=ht("bell",dC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],S_=ht("clock",fC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],A_=ht("image",pC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],gC=ht("key",mC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],al=ht("link-2",yC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],vC=ht("list-todo",_C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],EC=ht("log-in",wC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Ew=ht("log-out",TC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],x_=ht("map-pin",IC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],AC=ht("phone",SC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],RC=ht("plus",xC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ll=ht("settings",kC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],PC=ht("sun",CC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],bC=ht("trash-2",NC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],OC=ht("type",DC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],LC=ht("unlink",VC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Tw=ht("user",MC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Iw=ht("users",FC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],UC=ht("volume-2",jC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zC=ht("x",BC);function Jt({className:r=""}){return T.jsx("div",{className:`animate-pulse rounded bg-gray-200 ${r}`,"aria-hidden":!0})}function $C({count:r=4}){return T.jsx("ul",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>T.jsxs("li",{className:"card p-5 rounded-2xl flex items-start gap-4",children:[T.jsx(Jt,{className:"w-16 h-16 flex-shrink-0 rounded-xl"}),T.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[T.jsx(Jt,{className:"h-6 max-w-md rounded"}),T.jsx(Jt,{className:"h-5 max-w-[8rem] rounded"})]})]},t))})}function Sw({count:r=3}){return T.jsx("ul",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>T.jsx("li",{children:T.jsx(Jt,{className:"h-14 w-full rounded-2xl"})},t))})}function HC({count:r=3}){return T.jsx("div",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>T.jsx(Jt,{className:"h-14 w-full rounded-2xl"},t))})}function qC(){return T.jsx("div",{className:"card p-8 rounded-2xl border-4 border-gray-300 bg-gray-50",children:T.jsxs("div",{className:"flex flex-col items-center gap-6",children:[T.jsx(Jt,{className:"w-20 h-20 rounded-xl"}),T.jsx(Jt,{className:"h-8 w-full max-w-sm rounded"}),T.jsx(Jt,{className:"h-6 max-w-[6rem] rounded"}),T.jsx(Jt,{className:"h-14 w-full rounded-2xl"})]})})}function WC(){return T.jsxs("div",{className:"card p-6 rounded-2xl space-y-3",children:[T.jsx(Jt,{className:"h-6 max-w-md rounded"}),T.jsx(Jt,{className:"h-5 w-full rounded"}),T.jsx(Jt,{className:"h-5 max-w-lg rounded"})]})}function GC({count:r=5}){return T.jsx("ul",{className:"space-y-4",children:Array.from({length:r}).map((e,t)=>T.jsxs("li",{className:"card p-5 rounded-2xl flex items-start gap-4",children:[T.jsx(Jt,{className:"w-12 h-12 flex-shrink-0 rounded-xl"}),T.jsxs("div",{className:"flex-1 min-w-0 space-y-3",children:[T.jsx(Jt,{className:"h-6 max-w-[12rem] rounded"}),T.jsx(Jt,{className:"h-5 max-w-[16rem] rounded"})]})]},t))})}function KC({onLogin:r,onBack:e}){const[t,i]=fe.useState(""),[o,l]=fe.useState([]),[h,f]=fe.useState(!0),[g,_]=fe.useState(null);fe.useEffect(()=>{_w().then(l).catch(I=>_(I?.message??"Failed to load")).finally(()=>f(!1))},[]);const w=async I=>{I.preventDefault();const S=t.trim();if(S){_(null);try{const V=await Ip(S);if(!V){_("Email not found. Pick a caregiver below or use a demo email.");return}r(V.email)}catch(V){_(V?.message??"Login failed")}}};return T.jsxs("div",{className:"min-h-screen app-page p-5 flex flex-col max-w-xl mx-auto",children:[T.jsxs("button",{onClick:e,className:"w-full mb-4 py-2.5 px-4 text-base font-medium border-2 border-gray-300 text-main bg-white hover:bg-gray-50 rounded-xl self-start max-w-[8rem] flex items-center justify-center gap-1.5 shadow-sm",children:[T.jsx(Tl,{className:"w-5 h-5"})," Back"]}),T.jsx("div",{className:"card p-4 px-5 mb-4 shadow-card rounded-xl",children:T.jsxs("h2",{className:"text-xl font-bold text-main flex items-center gap-2",children:[T.jsx(Tw,{className:"w-6 h-6 text-[#334155]","aria-hidden":!0})," Caregiver Login"]})}),g&&T.jsx("div",{className:"p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-error text-sm font-medium",children:g}),h?T.jsx(HC,{count:3}):T.jsx(T.Fragment,{children:T.jsx("div",{className:"space-y-3 mb-5",children:o.map(I=>T.jsxs("button",{type:"button",onClick:()=>r(I.email),className:"w-full py-3 px-4 text-left text-base card card-caregiver-hover rounded-xl text-main flex items-center gap-2.5 transition-colors shadow-card",children:[T.jsx("span",{className:"text-lg",children:"👤"}),T.jsxs("span",{children:[T.jsx("strong",{children:I.name})," — ",I.email]})]},I.id))})}),T.jsxs("div",{className:"card p-4 px-5 shadow-card rounded-xl",children:[T.jsx("label",{htmlFor:"email",className:"text-base font-semibold text-main block mb-2",children:"Email"}),T.jsxs("form",{onSubmit:w,className:"space-y-3",children:[T.jsx("input",{id:"email",type:"email",value:t,onChange:I=>i(I.target.value),className:"w-full py-2.5 px-3 text-base border-2 border-gray-300 rounded-xl focus:border-[#334155] focus:ring-2 focus:ring-[#334155]/20",placeholder:"your@email.com"}),T.jsxs("button",{type:"submit",className:"w-full btn-primary-caregiver py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base font-bold min-h-[48px]",children:[T.jsx(EC,{className:"w-5 h-5","aria-hidden":!0})," Log in"]})]})]})]})}function QC({caregiverEmail:r,onSelectPatient:e,onLogout:t,onSettings:i}){const[o,l]=fe.useState([]),[h,f]=fe.useState(!0),[g,_]=fe.useState(null);return fe.useEffect(()=>{vw(r).then(l).catch(w=>_(w?.message??"Failed to load")).finally(()=>f(!1))},[r]),T.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[T.jsxs("div",{className:"flex flex-col gap-3 mb-8",children:[T.jsxs("button",{onClick:i,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(ll,{className:"w-6 h-6"})," Settings"]}),T.jsxs("button",{onClick:t,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(Ew,{className:"w-6 h-6"})," Log out"]})]}),T.jsxs("div",{className:"card p-6 mb-8",children:[T.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[T.jsx(Iw,{className:"w-8 h-8 text-blue-600"})," Choose patient"]}),T.jsx("p",{className:"text-xl text-gray-600 mb-1",children:"Select who you’re managing reminders for."}),T.jsx("p",{className:"text-base text-gray-500",children:"You’ll see and add their reminders on the next screen."}),T.jsx("p",{className:"text-base text-gray-500 mt-2 font-medium",children:r})]}),g&&T.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:g}),h?T.jsxs(T.Fragment,{children:[T.jsx("p",{className:"section-title",children:"Your patients"}),T.jsx(Sw,{count:3})]}):T.jsxs(T.Fragment,{children:[T.jsx("p",{className:"section-title",children:"Your patients"}),T.jsx("ul",{className:"space-y-4",children:o.length===0?T.jsxs("li",{className:"card p-6 rounded-2xl text-center",children:[T.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"No patients linked yet."}),T.jsx("p",{className:"text-base text-gray-500",children:"Link a patient using their account — they’ll need to enter a code you provide (see Settings for codes)."})]}):o.map(w=>T.jsx("li",{children:T.jsxs("button",{onClick:()=>e(w.id,w.name),className:"btn-big w-full text-left px-6 card hover:border-blue-300 hover:bg-blue-50/50 rounded-2xl text-gray-900 flex items-center gap-3 transition-colors",children:[T.jsx("span",{className:"text-2xl",children:"👤"}),T.jsx("span",{className:"text-xl font-semibold",children:w.name})]})},w.id))})]})]})}function XC({url:r,alt:e,className:t}){return T.jsx("img",{src:r,alt:e,className:`object-cover rounded-xl flex-shrink-0 ${t??"w-16 h-16"}`})}function YC(r){if(!Number.isFinite(r))return"Unknown time";const e=r>1e12?r:r*1e3;return new Date(e).toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}function JC({patientId:r,patientName:e,onLogout:t,onBack:i}){const[o,l]=fe.useState([]),[h,f]=fe.useState(!0),[g,_]=fe.useState(null),[w,I]=fe.useState(!1),[S,V]=fe.useState(""),[$,q]=fe.useState(""),[B,ne]=fe.useState(null),[se,oe]=fe.useState(!1),ce=()=>{f(!0),Xk(r).then(l).catch(ve=>_(ve?.message??"Failed to load")).finally(()=>f(!1))};fe.useEffect(()=>{ce()},[r]);const[Ne,Te]=fe.useState([]),[N,A]=fe.useState(!0),[k,C]=fe.useState(null),D=()=>{A(!0),C(null),oC(r).then(Te).catch(ve=>C(ve?.message??"Failed to load location history")).finally(()=>A(!1))};fe.useEffect(()=>{D()},[r]);const L=async ve=>{if(window.confirm("Delete this reminder?")){_(null);try{await tC(ve),ce()}catch($e){_($e?.message??"Failed to delete reminder")}}},R=async ve=>{if(ve.preventDefault(),!(!S.trim()||!$.trim())){oe(!0),_(null);try{const $e=await iC(r,{title:S.trim(),time:$.trim()});if(B){const St=await rC(r,$e,B);await sC($e,St)}V(""),q(""),ne(null),I(!1),ce()}catch($e){_($e?.message??"Failed to add reminder")}finally{oe(!1)}}};return T.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[T.jsxs("div",{className:"flex flex-col gap-3 mb-6",children:[T.jsxs("button",{onClick:i,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(Tl,{className:"w-6 h-6"})," Back to patients"]}),T.jsxs("button",{onClick:t,className:"btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(Ew,{className:"w-6 h-6"})," Log out"]})]}),T.jsxs("div",{className:"card p-6 mb-6",children:[T.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[T.jsx(Qc,{className:"w-8 h-8 text-blue-600"})," ",e]}),T.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Reminders you've set for them. Add a photo (e.g. their pill organizer or dog) so they recognize it more easily."}),w?T.jsxs("form",{onSubmit:R,className:"space-y-4",children:[T.jsx("label",{className:"label-big block",children:"Title"}),T.jsx("input",{type:"text",value:S,onChange:ve=>V(ve.target.value),placeholder:"e.g. Take morning medication",className:"input-big w-full border-2 border-gray-300 rounded-xl",required:!0}),T.jsx("label",{className:"label-big block",children:"Time"}),T.jsx("input",{type:"text",value:$,onChange:ve=>q(ve.target.value),placeholder:"e.g. 8:00 AM",className:"input-big w-full border-2 border-gray-300 rounded-xl",required:!0}),T.jsxs("div",{children:[T.jsxs("label",{className:"label-big block mb-2 flex items-center gap-2",children:[T.jsx(A_,{className:"w-5 h-5 text-blue-600"})," Photo (optional)"]}),T.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Their own pill organizer, pet, or familiar object helps them recognize the reminder."}),T.jsx("input",{type:"file",accept:"image/*",onChange:ve=>ne(ve.target.files?.[0]??null),className:"block w-full text-lg"}),B&&T.jsxs("p",{className:"mt-2 text-base text-gray-600 flex items-center gap-2",children:[T.jsx(A_,{className:"w-4 h-4"})," ",B.name,T.jsxs("button",{type:"button",onClick:()=>ne(null),className:"text-red-600 hover:underline flex items-center gap-1",children:[T.jsx(zC,{className:"w-4 h-4"})," Remove"]})]})]}),T.jsxs("div",{className:"flex gap-3",children:[T.jsx("button",{type:"submit",disabled:se,className:"btn-big flex-1 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl disabled:opacity-70",children:se?"Adding…":"Add reminder"}),T.jsx("button",{type:"button",onClick:()=>{I(!1),V(""),q(""),ne(null)},className:"btn-big border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl px-6",children:"Cancel"})]})]}):T.jsxs("button",{type:"button",onClick:()=>I(!0),className:"btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(RC,{className:"w-6 h-6"})," Add a reminder"]})]}),T.jsx("p",{className:"section-title",children:"Today’s reminders"}),g&&T.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:g}),h?T.jsx($C,{count:4}):T.jsx("ul",{className:"space-y-4",children:o.length===0?T.jsxs("li",{className:"card p-6 rounded-2xl text-center",children:[T.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"No reminders yet."}),T.jsx("p",{className:"text-base text-gray-500",children:"Tap “Add a reminder” above to create one (e.g. medication, meals, activities)."})]}):o.map(ve=>T.jsxs("li",{className:"card p-5 rounded-2xl flex items-start gap-4",children:[ve.photoUrl?T.jsx(XC,{url:ve.photoUrl,alt:"",className:"w-16 h-16"}):T.jsx("span",{className:"text-2xl flex-shrink-0",children:"🔔"}),T.jsxs("div",{className:"flex-1 min-w-0",children:[T.jsx("p",{className:"text-xl font-semibold text-gray-900",children:ve.title}),T.jsxs("p",{className:"text-lg text-gray-600 mt-1 flex items-center gap-1",children:[T.jsx(S_,{className:"w-5 h-5"})," ",ve.time,ve.done&&T.jsx("span",{className:"text-green-700 font-medium",children:"· Done"})]})]}),T.jsx("button",{type:"button",onClick:()=>L(ve.id),className:"flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg","aria-label":`Delete ${ve.title}`,children:T.jsx(bC,{className:"w-6 h-6"})})]},ve.id))}),T.jsxs("div",{className:"mt-8",children:[T.jsxs("p",{className:"section-title flex items-center gap-2",children:[T.jsx(x_,{className:"w-6 h-6 text-blue-600"})," Location history"]}),k&&T.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:k}),N?T.jsx(GC,{count:6}):Ne.length===0?T.jsxs("div",{className:"card p-6 rounded-2xl text-center",children:[T.jsx("p",{className:"text-xl text-gray-600 mb-2",children:"No location history yet."}),T.jsx("p",{className:"text-base text-gray-500",children:"When location events are written to Firestore, you’ll see them here."})]}):T.jsx("ul",{className:"space-y-4",children:Ne.map((ve,$e)=>T.jsxs("li",{className:`card p-5 rounded-2xl flex items-start gap-4 ${$e===0?"border-2 border-green-200 bg-green-50 shadow-card-emerald":""}`,children:[T.jsx(x_,{className:`w-7 h-7 ${$e===0?"text-teal-600":"text-blue-600"} flex-shrink-0`,"aria-hidden":!0}),T.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900",children:[$e===0?"Latest: ":"",ve.room]}),T.jsxs("p",{className:"text-lg text-gray-600 flex items-center gap-1",children:[T.jsx(S_,{className:"w-5 h-5","aria-hidden":!0}),YC(ve.time)]})]})]},ve.id))})]})]})}function ZC({caregiverEmail:r,onBack:e,onSelectPatient:t}){const[i,o]=fe.useState(null),[l,h]=fe.useState([]),[f,g]=fe.useState([]),[_,w]=fe.useState(!0),[I,S]=fe.useState(null);return fe.useEffect(()=>{let V=!1;return w(!0),S(null),(async()=>{try{const $=await Ip(r);if(V)return;o($?.name??null);const q=await vw(r);if(V)return;h(q);const B=await Jk(q.map(ne=>ne.id));if(V)return;g(B)}catch($){V||S($?.message??"Failed to load settings")}finally{V||w(!1)}})(),()=>{V=!0}},[r]),T.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[T.jsxs("button",{onClick:e,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(Tl,{className:"w-6 h-6"})," Back"]}),T.jsxs("div",{className:"card p-6 mb-8",children:[T.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[T.jsx(ll,{className:"w-8 h-8 text-blue-600"})," Settings"]}),T.jsxs("p",{className:"text-xl text-gray-600 mb-1",children:[i??"Caregiver"," — ",r]}),T.jsx("p",{className:"text-base text-gray-500",children:"Manage your account and how reminders work."})]}),I&&T.jsx("div",{className:"p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl",children:I}),T.jsx("p",{className:"section-title",children:"Notifications"}),T.jsxs("div",{className:"card p-6 rounded-2xl mb-6",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[T.jsx(Qc,{className:"w-6 h-6 text-blue-600"})," Reminder alerts"]}),T.jsx("p",{className:"text-base text-gray-600",children:"Patients see reminders you add on their dashboard. When they mark one done, it updates in Firestore automatically."})]}),T.jsx("p",{className:"section-title",children:"Patients & linking"}),_?T.jsx(Sw,{count:3}):T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"card p-6 rounded-2xl mb-6",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[T.jsx(Iw,{className:"w-6 h-6 text-blue-600"})," Your patients"]}),l.length===0?T.jsx("p",{className:"text-base text-gray-600",children:"No patients assigned to this caregiver yet."}):T.jsx("ul",{className:"space-y-3",children:l.map(V=>T.jsx("li",{children:T.jsx("button",{type:"button",onClick:()=>t(V.id,V.name),className:"w-full text-left py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-lg font-semibold text-gray-900",children:V.name})},V.id))})]}),T.jsxs("div",{className:"card p-6 rounded-2xl",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[T.jsx(gC,{className:"w-6 h-6 text-blue-600"})," Linking codes"]}),T.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Share a code with your patient so they can link in “My Reminders” on the home screen."}),f.length===0?T.jsx("p",{className:"text-base text-gray-500",children:"No linking codes found for your patients."}):T.jsx("ul",{className:"space-y-3",children:f.map(V=>T.jsxs("li",{className:"flex flex-wrap items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 border border-gray-200",children:[T.jsx("span",{className:"font-mono font-bold text-lg text-gray-900",children:V.code}),T.jsx("span",{className:"text-gray-500",children:"→"}),T.jsx("span",{className:"text-lg text-gray-800",children:V.patientName})]},V.code))})]})]})]})}const eP="caregiverPhone",R_="+15551234567";function tP(r){return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}function nP(r){return r.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})}function rP({patientId:r,patientName:e,onSettings:t,onLinkAccount:i}){const[o,l]=fe.useState(new Date),[h,f]=fe.useState([]),[g,_]=fe.useState(!!r),[w,I]=fe.useState(null);fe.useEffect(()=>{const B=setInterval(()=>l(new Date),1e3);return()=>clearInterval(B)},[]),fe.useEffect(()=>{if(!r){f([]),_(!1),I(null);return}_(!0),I(null);const B=Zk(r,ne=>{f(ne.filter(se=>!se.done)),_(!1)},ne=>{I(ne.message??"Could not load reminders"),_(!1)});return()=>B()},[r]);const S=h[0]??null,V=async()=>{if(S)try{await nC(S.id),f(B=>B.filter(ne=>ne.id!==S.id))}catch{I("Could not mark reminder as done. Try again.")}},q=`tel:${(typeof localStorage<"u"&&localStorage.getItem(eP)||R_).replace(/\s/g,"")}`;return r?T.jsxs("div",{className:"min-h-screen flex flex-col text-gray-900 bg-[#FAFAF9]",style:{paddingBottom:"env(safe-area-inset-bottom)"},children:[T.jsxs("header",{className:"flex-shrink-0 border-b border-gray-200 bg-[#FAFAF9]",style:{paddingTop:"max(1rem, env(safe-area-inset-top))",paddingLeft:"max(1.5rem, env(safe-area-inset-left))",paddingRight:"max(1.5rem, env(safe-area-inset-right))",paddingBottom:"1rem"},children:[T.jsx("p",{className:"text-2xl font-bold text-gray-900 leading-tight",children:tP(o)}),T.jsx("p",{className:"text-xl font-bold text-gray-900 mt-1 leading-tight",children:nP(o)}),e&&T.jsxs("p",{className:"text-lg text-gray-600 mt-2",children:["Hi, ",e]}),T.jsxs("button",{type:"button",onClick:t,className:"mt-4 flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900","aria-label":"Open settings",children:[T.jsx(ll,{className:"w-5 h-5"})," Settings"]})]}),T.jsxs("main",{className:"flex-1 flex flex-col min-h-0 overflow-auto",style:{paddingLeft:"max(1.5rem, env(safe-area-inset-left))",paddingRight:"max(1.5rem, env(safe-area-inset-right))",paddingTop:"1.5rem",paddingBottom:"1.5rem"},children:[T.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-3",children:"Current Task"}),w&&T.jsx("div",{className:"mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-lg",children:w}),g?T.jsx(qC,{}):S?T.jsx("div",{className:"card p-6 rounded-2xl border-2 border-gray-300 bg-white shadow-card",children:T.jsxs("div",{className:"flex flex-col items-center gap-5",children:[S.photoUrl?T.jsx("img",{src:S.photoUrl,alt:"",className:"w-24 h-24 object-cover rounded-2xl border-2 border-gray-300 flex-shrink-0"}):T.jsx(vC,{className:"w-20 h-20 text-gray-900 flex-shrink-0",strokeWidth:2,"aria-hidden":!0}),T.jsx("p",{className:"text-2xl font-bold text-gray-900 text-center",children:S.title}),T.jsxs("p",{className:"text-xl text-gray-700",children:["at ",S.time]}),T.jsx("button",{type:"button",onClick:V,className:"w-full py-5 px-6 text-2xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-2xl border-4 border-green-800 transition-colors",children:"Mark as Done"})]})}):T.jsx("div",{className:"card p-6 rounded-2xl border-2 border-green-200 bg-green-50/80 shadow-card",children:T.jsxs("div",{className:"flex flex-col items-center gap-4",children:[T.jsx(PC,{className:"w-16 h-16 text-green-600 flex-shrink-0",strokeWidth:2,"aria-hidden":!0}),T.jsx("p",{className:"text-xl font-bold text-gray-900 text-center leading-relaxed",children:"Relax, you are all caught up"})]})})]}),T.jsx("footer",{className:"flex-shrink-0 border-t border-gray-200 bg-[#FAFAF9]",style:{paddingLeft:"max(1.5rem, env(safe-area-inset-left))",paddingRight:"max(1.5rem, env(safe-area-inset-right))",paddingTop:"1rem",paddingBottom:"max(1rem, env(safe-area-inset-bottom))"},children:T.jsxs("a",{href:q,className:"btn-help flex items-center justify-center gap-2 w-full py-4 px-5 text-lg font-bold rounded-2xl min-h-[56px] transition-colors bg-red-600 text-white border-2 border-red-700 hover:bg-red-700 hover:border-red-800",children:[T.jsx(AC,{className:"w-6 h-6 flex-shrink-0 text-white","aria-hidden":!0})," Help"]})})]}):T.jsx("div",{className:"min-h-screen flex flex-col text-gray-900 bg-[#FAFAF9] items-center justify-center p-8",style:{paddingBottom:"env(safe-area-inset-bottom)"},children:T.jsxs("div",{className:"card p-8 rounded-2xl border-2 border-gray-300 bg-white shadow-card max-w-md w-full text-center",children:[T.jsx(al,{className:"w-16 h-16 text-blue-600 mx-auto mb-4","aria-hidden":!0}),T.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-3",children:"Link your account"}),T.jsx("p",{className:"text-lg text-gray-600 mb-6 leading-relaxed",children:"Enter the code from your caregiver to see your reminders here."}),T.jsx("button",{type:"button",onClick:i,className:"w-full py-5 px-6 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl",children:"Enter linking code"}),T.jsxs("button",{type:"button",onClick:t,className:"mt-4 text-lg font-medium text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2 mx-auto",children:[T.jsx(ll,{className:"w-5 h-5"})," Settings"]})]})})}function iP({linkedPatientName:r,onBack:e,onLinkAccount:t,onUnlink:i}){return T.jsxs("div",{className:"min-h-screen app-page p-8 max-w-xl mx-auto",children:[T.jsxs("button",{onClick:e,className:"btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm",children:[T.jsx(Tl,{className:"w-6 h-6"})," Back"]}),T.jsxs("div",{className:"card p-6 mb-8 shadow-card rounded-2xl px-8",children:[T.jsxs("h2",{className:"heading-big mb-2 flex items-center gap-2",children:[T.jsx(ll,{className:"w-8 h-8 text-teal-600"})," Settings"]}),T.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Make the app easier to see and hear. Changes here apply to “My Reminders.”"})]}),T.jsx("p",{className:"section-title",children:"Account"}),r?T.jsxs("div",{className:"card p-6 rounded-2xl mb-6 shadow-card",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-1",children:["Linked as ",T.jsx("strong",{children:r})]}),T.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Your reminders come from your caregiver’s account."}),i&&T.jsxs("button",{type:"button",onClick:i,className:"w-full py-3 px-4 text-lg font-bold border-2 border-red-300 text-red-700 bg-red-50 hover:bg-red-100 rounded-xl flex items-center justify-center gap-2",children:[T.jsx(LC,{className:"w-5 h-5","aria-hidden":!0})," Unlink account"]})]}):t&&T.jsxs("button",{type:"button",onClick:t,className:"btn-ghost w-full rounded-2xl py-4 px-6 text-lg font-bold flex items-center justify-center gap-2 mb-6 min-h-[60px]",children:[T.jsx(al,{className:"w-6 h-6","aria-hidden":!0})," Link account with caregiver code"]}),T.jsx("p",{className:"section-title",children:"Display"}),T.jsxs("div",{className:"card p-6 rounded-2xl mb-6 shadow-card",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[T.jsx(OC,{className:"w-6 h-6 text-teal-600"})," Text size"]}),T.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Larger text for buttons and reminders. (Placeholder: size slider or “Large / Extra large” options will appear here.)"})]}),T.jsx("p",{className:"section-title",children:"Sound"}),T.jsxs("div",{className:"card p-6 rounded-2xl mb-6 shadow-card",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[T.jsx(UC,{className:"w-6 h-6 text-teal-600"})," Reminder sound"]}),T.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Choose a gentle sound for reminder alerts. (Placeholder: sound picker will appear here.)"})]}),T.jsx("p",{className:"section-title",children:"Notifications"}),T.jsxs("div",{className:"card p-6 rounded-2xl shadow-card",children:[T.jsxs("p",{className:"text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2",children:[T.jsx(Qc,{className:"w-6 h-6 text-teal-600"})," When to remind"]}),T.jsx("p",{className:"text-base text-gray-600",children:"Turn reminders on or off, and choose quiet hours. (Placeholder: toggles and time options will appear here.)"})]})]})}function sP({onComplete:r,onBack:e}){const[t,i]=fe.useState(""),[o,l]=fe.useState(""),[h,f]=fe.useState([]),[g,_]=fe.useState(!0);fe.useEffect(()=>{eC().then(f).catch(()=>f([])).finally(()=>_(!1))},[]);const w=async I=>{I.preventDefault(),l("");const S=await Yk(t);S?r(S.patientId,S.patientName):l("Code not found. Try again.")};return T.jsxs("div",{className:"min-h-screen app-page p-5 flex flex-col max-w-xl mx-auto",children:[T.jsxs("button",{onClick:e,className:"w-full mb-4 py-2.5 px-4 text-base font-medium border-2 border-gray-300 text-main bg-white hover:bg-gray-50 rounded-xl self-start max-w-[8rem] flex items-center justify-center gap-1.5 shadow-sm",children:[T.jsx(Tl,{className:"w-5 h-5"})," Back"]}),T.jsxs("div",{className:"card p-4 px-5 mb-5 shadow-card rounded-xl",children:[T.jsxs("h2",{className:"text-xl font-bold text-main mb-1.5 flex items-center gap-2",children:[T.jsx(al,{className:"w-6 h-6 text-[#2563eb]","aria-hidden":!0})," Link account"]}),T.jsx("p",{className:"text-base text-muted leading-relaxed",children:"Enter your caregiver's code to see their reminders."})]}),T.jsxs("div",{className:"card p-4 px-5 mb-5 shadow-card rounded-xl",children:[T.jsx("label",{htmlFor:"code",className:"text-base font-semibold text-main block mb-2",children:"Code"}),T.jsxs("form",{onSubmit:w,className:"space-y-3",children:[T.jsx("input",{id:"code",type:"text",value:t,onChange:I=>{i(I.target.value),l("")},className:"w-full py-2.5 px-3 text-base border-2 border-gray-300 rounded-xl focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 uppercase",placeholder:"e.g. JAMES01",autoComplete:"off"}),o&&T.jsx("p",{className:"text-sm text-error font-medium",children:o}),T.jsxs("button",{type:"submit",className:"w-full btn-ghost py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base font-bold min-h-[48px]",children:[T.jsx(al,{className:"w-5 h-5","aria-hidden":!0})," Link account"]})]})]}),g&&T.jsxs("div",{className:"card p-4 px-5 shadow-card rounded-xl",children:[T.jsx("p",{className:"section-title text-base font-semibold",children:"Demo codes"}),T.jsx(WC,{})]}),!g&&h.length>0&&T.jsxs("div",{className:"card p-4 px-5 shadow-card rounded-xl",children:[T.jsx("p",{className:"section-title text-base font-semibold mb-2",children:"Demo codes"}),T.jsx("ul",{className:"space-y-1.5 text-base text-main",children:h.map(I=>T.jsxs("li",{className:"flex items-center gap-2",children:[T.jsx("strong",{className:"text-gray-900 font-mono",children:I.code}),T.jsx("span",{children:"→"}),T.jsx("span",{children:I.patientName})]},I.code))})]})]})}function k_(){const r=new Date().getHours();return r>=5&&r<12?"morning":r>=12&&r<17?"afternoon":"evening"}function oP(){const[r,e]=fe.useState(null),[t,i]=fe.useState(k_);fe.useEffect(()=>{const C=setInterval(()=>i(k_()),6e4);return()=>clearInterval(C)},[]),fe.useEffect(()=>{Gk().catch(C=>{const D=C?.message??"";(D.includes("permission")||D.includes("Permission"))&&e("Firestore permission denied. Add rules in Firebase Console → Firestore → Rules (see FIRESTORE.md)."),console.warn("Firebase seed:",C)})},[]);const[o,l]=fe.useState("home"),[h,f]=fe.useState(()=>!!v_()),[g,_]=fe.useState(()=>v_()),[w,I]=fe.useState(null),[S,V]=fe.useState(null),[$,q]=fe.useState(()=>E_()?.id??null),[B,ne]=fe.useState(()=>E_()?.name??null),[se,oe]=fe.useState("home"),ce=C=>{f(!0),_(C),w_(C),l("patient-selection")},Ne=(C,D)=>{I(C),V(D),l("caregiver-dashboard")},Te=()=>{I(null),V(null),l("patient-selection")},N=()=>{f(!1),_(null),w_(null),I(null),V(null),l("home")},A=(C,D)=>{q(C),ne(D),T_(C,D),l(se),oe("home")},k=()=>{q(null),ne(null),T_(null)};return T.jsxs("div",{className:"min-h-screen app-page text-gray-900","data-time-of-day":t,children:[r&&T.jsxs("div",{className:"bg-amber-100 border-b border-amber-300 px-4 py-3 text-gray-900 flex items-center justify-between gap-4 flex-wrap",children:[T.jsx("p",{className:"text-lg font-medium",children:r}),T.jsx("a",{href:"https://console.firebase.google.com/project/test-f80e2/firestore/rules",target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 underline font-semibold whitespace-nowrap",children:"Open Firestore Rules →"}),T.jsx("button",{type:"button",onClick:()=>e(null),className:"text-gray-600 hover:text-gray-900 font-medium",children:"Dismiss"})]}),o==="home"&&T.jsxs("div",{className:"landing-phone flex flex-col items-center w-full overflow-hidden app-page",style:{minHeight:"100dvh",height:"100dvh",paddingLeft:"max(0.75rem, env(safe-area-inset-left))",paddingRight:"max(0.75rem, env(safe-area-inset-right))",paddingTop:"max(1rem, env(safe-area-inset-top))",paddingBottom:"max(1rem, env(safe-area-inset-bottom))"},children:[T.jsxs("div",{className:"flex-shrink-0 flex flex-col items-center w-full pb-6",children:[T.jsx("h1",{className:"landing-title text-main text-center mb-2 font-bold",children:"CareConnect"}),T.jsx("p",{className:"landing-subtitle text-muted text-center leading-snug font-normal",children:"Gentle reminders for each day"})]}),T.jsx("div",{className:"flex-1 min-h-0 w-full flex flex-col justify-center items-center py-6",children:T.jsxs("button",{type:"button",onClick:()=>l("patient"),className:"btn-big-circle-compact animate-breathe flex-shrink-0 inline-flex flex-col items-center justify-center focus:outline-none","aria-label":"My reminders",children:[T.jsx(Qc,{className:"btn-big-circle-bell text-amber-300 drop-shadow-sm flex-shrink-0",strokeWidth:2,"aria-hidden":!0}),T.jsx("span",{className:"btn-big-circle-label text-white font-bold text-center leading-tight",children:"My Reminders"})]})}),T.jsxs("div",{className:"flex-shrink-0 flex flex-col items-center w-full gap-3 pt-4 pb-2",children:[T.jsxs("div",{className:"flex flex-row items-stretch justify-center gap-2 sm:gap-3 w-full max-w-[320px] px-1",children:[T.jsxs("button",{type:"button",onClick:()=>{l(h&&g?"patient-selection":"caregiver-login")},className:"btn-landing-outline btn-landing-outline-equal rounded-xl px-3 py-3 text-sm font-medium flex-1 min-w-0 inline-flex items-center justify-center gap-2",children:[T.jsx(Tw,{className:"w-4 h-4 flex-shrink-0","aria-hidden":!0}),T.jsx("span",{className:"text-center",children:"Caregiver Login"})]}),T.jsxs("button",{type:"button",onClick:()=>{oe("home"),l("account-linking")},className:"btn-landing-outline btn-landing-outline-equal rounded-xl px-3 py-3 text-sm font-medium flex-1 min-w-0 inline-flex items-center justify-center gap-2",children:[T.jsx(al,{className:"w-4 h-4 flex-shrink-0","aria-hidden":!0}),T.jsx("span",{className:"text-center",children:"Link Account"})]})]}),T.jsx("p",{className:"text-xs text-muted text-center leading-snug",children:"First time? Ask your caregiver for a linking code."})]})]}),o==="caregiver-login"&&T.jsx(KC,{onLogin:ce,onBack:()=>l("home")}),o==="patient-selection"&&h&&T.jsx(QC,{caregiverEmail:g,onSelectPatient:Ne,onLogout:N,onSettings:()=>l("caregiver-settings")}),o==="caregiver-settings"&&h&&T.jsx(ZC,{caregiverEmail:g,onBack:()=>l("patient-selection"),onSelectPatient:Ne}),o==="caregiver-dashboard"&&h&&T.jsx(JC,{caregiverEmail:g,patientId:w,patientName:S,onLogout:N,onBack:Te}),o==="patient"&&T.jsx(rP,{patientId:$,patientName:B,onSettings:()=>l("patient-settings"),onLinkAccount:()=>{oe("patient"),l("account-linking")}}),o==="patient-settings"&&T.jsx(iP,{linkedPatientName:B,onBack:()=>l("patient"),onLinkAccount:()=>{oe("patient-settings"),l("account-linking")},onUnlink:k}),o==="account-linking"&&T.jsx(sP,{onComplete:A,onBack:()=>l(se??"home")})]})}LE.createRoot(document.getElementById("root")).render(T.jsx(oP,{}));
