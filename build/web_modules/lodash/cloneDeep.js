import{_ as V,e as W,k as w,i as g,a as S,b as Y,c as J,d as Z,f as H,g as C,h as Q,s as X,j as ee,l as re,m as R,n as I,o as x,p as v,q as y,r as $,t as te,u as ae,v as oe,w as ne}from"../common/_Uint8Array-a3bbcce5.js";function se(e,r){for(var t=-1,o=e==null?0:e.length;++t<o&&!(r(e[t],t,e)===!1););return e}var ie=se,ce=function(){try{var e=V(Object,"defineProperty");return e({},"",{}),e}catch(r){}}(),B=ce;function ue(e,r,t){r=="__proto__"&&B?B(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var E=ue,le=Object.prototype,pe=le.hasOwnProperty;function be(e,r,t){var o=e[r];(!(pe.call(e,r)&&W(o,t))||t===void 0&&!(r in e))&&E(e,r,t)}var U=be;function fe(e,r,t,o){var l=!t;t||(t={});for(var s=-1,n=r.length;++s<n;){var c=r[s],i=o?o(t[c],e[c],c,t,e):void 0;i===void 0&&(i=e[c]),l?E(t,c,i):U(t,c,i)}return t}var m=fe;function ye(e,r){return e&&m(r,w(r),e)}var me=ye;function he(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var je=he,ge=Object.prototype,ve=ge.hasOwnProperty;function de(e){if(!g(e))return je(e);var r=S(e),t=[];for(var o in e)o=="constructor"&&(r||!ve.call(e,o))||t.push(o);return t}var Te=de;function _e(e){return Y(e)?J(e,!0):Te(e)}var d=_e;function Oe(e,r){return e&&m(r,d(r),e)}var Ae=Oe,we=Z(function(e,r){var t=r&&!r.nodeType&&r,o=t&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===t,s=l?H.Buffer:void 0,n=s?s.allocUnsafe:void 0;function c(i,j){if(j)return i.slice();var f=i.length,u=n?n(f):new i.constructor(f);return i.copy(u),u}e.exports=c});function Se(e,r){var t=-1,o=e.length;for(r||(r=Array(o));++t<o;)r[t]=e[t];return r}var Ce=Se;function Re(e,r){return m(e,C(e),r)}var Ie=Re,xe=Q(Object.getPrototypeOf,Object),M=xe,$e=Object.getOwnPropertySymbols,Be=$e?function(e){for(var r=[];e;)ee(r,C(e)),e=M(e);return r}:X,F=Be;function Ee(e,r){return m(e,F(e),r)}var Ue=Ee;function Me(e){return re(e,d,F)}var Fe=Me,Pe=Object.prototype,De=Pe.hasOwnProperty;function Le(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&De.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var ke=Le;function Ne(e){var r=new e.constructor(e.byteLength);return new R(r).set(new R(e)),r}var T=Ne;function ze(e,r){var t=r?T(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var qe=ze,Ke=/\w*$/;function Ge(e){var r=new e.constructor(e.source,Ke.exec(e));return r.lastIndex=e.lastIndex,r}var Ve=Ge,P=I?I.prototype:void 0,D=P?P.valueOf:void 0;function We(e){return D?Object(D.call(e)):{}}var Ye=We;function Je(e,r){var t=r?T(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Ze=Je,He="[object Boolean]",Qe="[object Date]",Xe="[object Map]",er="[object Number]",rr="[object RegExp]",tr="[object Set]",ar="[object String]",or="[object Symbol]",nr="[object ArrayBuffer]",sr="[object DataView]",ir="[object Float32Array]",cr="[object Float64Array]",ur="[object Int8Array]",lr="[object Int16Array]",pr="[object Int32Array]",br="[object Uint8Array]",fr="[object Uint8ClampedArray]",yr="[object Uint16Array]",mr="[object Uint32Array]";function hr(e,r,t){var o=e.constructor;switch(r){case nr:return T(e);case He:case Qe:return new o(+e);case sr:return qe(e,t);case ir:case cr:case ur:case lr:case pr:case br:case fr:case yr:case mr:return Ze(e,t);case Xe:return new o;case er:case ar:return new o(e);case rr:return Ve(e);case tr:return new o;case or:return Ye(e)}}var jr=hr,L=Object.create,gr=function(){function e(){}return function(r){if(!g(r))return{};if(L)return L(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),vr=gr;function dr(e){return typeof e.constructor=="function"&&!S(e)?vr(M(e)):{}}var Tr=dr,_r="[object Map]";function Or(e){return x(e)&&v(e)==_r}var Ar=Or,k=y&&y.isMap,wr=k?$(k):Ar,Sr=wr,Cr="[object Set]";function Rr(e){return x(e)&&v(e)==Cr}var Ir=Rr,N=y&&y.isSet,xr=N?$(N):Ir,$r=xr,Br=1,Er=2,Ur=4,z="[object Arguments]",Mr="[object Array]",Fr="[object Boolean]",Pr="[object Date]",Dr="[object Error]",q="[object Function]",Lr="[object GeneratorFunction]",kr="[object Map]",Nr="[object Number]",K="[object Object]",zr="[object RegExp]",qr="[object Set]",Kr="[object String]",Gr="[object Symbol]",Vr="[object WeakMap]",Wr="[object ArrayBuffer]",Yr="[object DataView]",Jr="[object Float32Array]",Zr="[object Float64Array]",Hr="[object Int8Array]",Qr="[object Int16Array]",Xr="[object Int32Array]",et="[object Uint8Array]",rt="[object Uint8ClampedArray]",tt="[object Uint16Array]",at="[object Uint32Array]",a={};a[z]=a[Mr]=a[Wr]=a[Yr]=a[Fr]=a[Pr]=a[Jr]=a[Zr]=a[Hr]=a[Qr]=a[Xr]=a[kr]=a[Nr]=a[K]=a[zr]=a[qr]=a[Kr]=a[Gr]=a[et]=a[rt]=a[tt]=a[at]=!0,a[Dr]=a[q]=a[Vr]=!1;function h(e,r,t,o,l,s){var n,c=r&Br,i=r&Er,j=r&Ur;if(t&&(n=l?t(e,o,l,s):t(e)),n!==void 0)return n;if(!g(e))return e;var f=oe(e);if(f){if(n=ke(e),!c)return Ce(e,n)}else{var u=v(e),_=u==q||u==Lr;if(te(e))return we(e,c);if(u==K||u==z||_&&!l){if(n=i||_?{}:Tr(e),!c)return i?Ue(e,Ae(n,e)):Ie(e,me(n,e))}else{if(!a[u])return l?e:{};n=jr(e,u,c)}}s||(s=new ae);var O=s.get(e);if(O)return O;s.set(e,n),$r(e)?e.forEach(function(p){n.add(h(p,r,t,p,e,s))}):Sr(e)&&e.forEach(function(p,b){n.set(b,h(p,r,t,b,e,s))});var G=j?i?Fe:ne:i?d:w,A=f?void 0:G(e);return ie(A||e,function(p,b){A&&(b=p,p=e[b]),U(n,b,h(p,r,t,b,e,s))}),n}var ot=h,nt=1,st=4;function it(e){return ot(e,nt|st)}var ct=it;export default ct;
