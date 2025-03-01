(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $s(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ee={},en=[],He=()=>{},il=()=>!1,xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bs=t=>t.startsWith("onUpdate:"),fe=Object.assign,Vs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ol=Object.prototype.hasOwnProperty,G=(t,e)=>ol.call(t,e),F=Array.isArray,tn=t=>Nr(t)==="[object Map]",Go=t=>Nr(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",Ct=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",qo=t=>(se(t)||H(t))&&H(t.then)&&H(t.catch),Jo=Object.prototype.toString,Nr=t=>Jo.call(t),al=t=>Nr(t).slice(8,-1),Yo=t=>Nr(t)==="[object Object]",Ws=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,An=$s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cl=/-(\w)/g,De=Dr(t=>t.replace(cl,(e,n)=>n?n.toUpperCase():"")),ll=/\B([A-Z])/g,Bt=Dr(t=>t.replace(ll,"-$1").toLowerCase()),Mr=Dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jr=Dr(t=>t?`on${Mr(t)}`:""),It=(t,e)=>!Object.is(t,e),lr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wi;const qn=()=>wi||(wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ks(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?hl(r):Ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||se(t))return t}const ul=/;(?![^(]*\))/g,fl=/:([^]+)/,dl=/\/\*[^]*?\*\//g;function hl(t){const e={};return t.replace(dl,"").split(ul).forEach(n=>{if(n){const r=n.split(fl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lr(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Lr(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=$s(pl);function Qo(t){return!!t||t===""}const Zo=t=>!!(t&&t.__v_isRef===!0),wt=t=>ce(t)?t:t==null?"":F(t)||se(t)&&(t.toString===Jo||!H(t.toString))?Zo(t)?wt(t.value):JSON.stringify(t,ea,2):String(t),ea=(t,e)=>Zo(e)?ea(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Yr(r,i)+" =>"]=s,n),{})}:Go(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yr(n))}:Ct(e)?Yr(e):se(e)&&!F(e)&&!Yo(e)?String(e):e,Yr=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class ml{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function _l(){return Te}let re;const Xr=new WeakSet;class ta{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xr.has(this)&&(Xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ra(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ii(this),sa(this);const e=re,n=$e;re=this,$e=!0;try{return this.fn()}finally{ia(this),re=e,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qs(e);this.deps=this.depsTail=void 0,Ii(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vs(this)&&this.run()}get dirty(){return vs(this)}}let na=0,Pn,On;function ra(t,e=!1){if(t.flags|=8,e){t.next=On,On=t;return}t.next=Pn,Pn=t}function zs(){na++}function Gs(){if(--na>0)return;if(On){let e=On;for(On=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pn;){let e=Pn;for(Pn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ia(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qs(r),vl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function vs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function oa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Un))return;t.globalVersion=Un;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vs(t)){t.flags&=-3;return}const n=re,r=$e;re=t,$e=!0;try{sa(t);const s=t.fn(t._value);(e.version===0||It(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,$e=r,ia(t),t.flags&=-3}}function qs(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qs(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $e=!0;const aa=[];function At(){aa.push($e),$e=!1}function Pt(){const t=aa.pop();$e=t===void 0?!0:t}function Ii(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Un=0;class yl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Js{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!$e||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new yl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,ca(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Un++,this.notify(e)}notify(e){zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gs()}}}function ca(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ca(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ys=new WeakMap,jt=Symbol(""),bs=Symbol(""),Fn=Symbol("");function he(t,e,n){if($e&&re){let r=ys.get(t);r||ys.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Js),s.map=r,s.key=n),s.track()}}function st(t,e,n,r,s,i){const o=ys.get(t);if(!o){Un++;return}const a=c=>{c&&c.trigger()};if(zs(),e==="clear")o.forEach(a);else{const c=F(t),u=c&&Ws(n);if(c&&n==="length"){const l=Number(r);o.forEach((d,p)=>{(p==="length"||p===Fn||!Ct(p)&&p>=l)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Fn)),e){case"add":c?u&&a(o.get("length")):(a(o.get(jt)),tn(t)&&a(o.get(bs)));break;case"delete":c||(a(o.get(jt)),tn(t)&&a(o.get(bs)));break;case"set":tn(t)&&a(o.get(jt));break}}Gs()}function zt(t){const e=z(t);return e===t?e:(he(e,"iterate",Fn),xe(t)?e:e.map(pe))}function Ur(t){return he(t=z(t),"iterate",Fn),t}const bl={__proto__:null,[Symbol.iterator](){return Qr(this,Symbol.iterator,pe)},concat(...t){return zt(this).concat(...t.map(e=>F(e)?zt(e):e))},entries(){return Qr(this,"entries",t=>(t[1]=pe(t[1]),t))},every(t,e){return tt(this,"every",t,e,void 0,arguments)},filter(t,e){return tt(this,"filter",t,e,n=>n.map(pe),arguments)},find(t,e){return tt(this,"find",t,e,pe,arguments)},findIndex(t,e){return tt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return tt(this,"findLast",t,e,pe,arguments)},findLastIndex(t,e){return tt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return tt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zr(this,"includes",t)},indexOf(...t){return Zr(this,"indexOf",t)},join(t){return zt(this).join(t)},lastIndexOf(...t){return Zr(this,"lastIndexOf",t)},map(t,e){return tt(this,"map",t,e,void 0,arguments)},pop(){return En(this,"pop")},push(...t){return En(this,"push",t)},reduce(t,...e){return Si(this,"reduce",t,e)},reduceRight(t,...e){return Si(this,"reduceRight",t,e)},shift(){return En(this,"shift")},some(t,e){return tt(this,"some",t,e,void 0,arguments)},splice(...t){return En(this,"splice",t)},toReversed(){return zt(this).toReversed()},toSorted(t){return zt(this).toSorted(t)},toSpliced(...t){return zt(this).toSpliced(...t)},unshift(...t){return En(this,"unshift",t)},values(){return Qr(this,"values",pe)}};function Qr(t,e,n){const r=Ur(t),s=r[e]();return r!==t&&!xe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const El=Array.prototype;function tt(t,e,n,r,s,i){const o=Ur(t),a=o!==t&&!xe(t),c=o[e];if(c!==El[e]){const d=c.apply(t,i);return a?pe(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,pe(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function Si(t,e,n,r){const s=Ur(t);let i=n;return s!==t&&(xe(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,pe(a),c,t)}),s[e](i,...r)}function Zr(t,e,n){const r=z(t);he(r,"iterate",Fn);const s=r[e](...n);return(s===-1||s===!1)&&Qs(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function En(t,e,n=[]){At(),zs();const r=z(t)[e].apply(t,n);return Gs(),Pt(),r}const wl=$s("__proto__,__v_isRef,__isVue"),la=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function Il(t){Ct(t)||(t=String(t));const e=z(this);return he(e,"has",t),e.hasOwnProperty(t)}class ua{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Nl:pa:i?ha:da).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let c;if(o&&(c=bl[n]))return c;if(n==="hasOwnProperty")return Il}const a=Reflect.get(e,n,me(e)?e:r);return(Ct(n)?la.has(n):wl(n))||(s||he(e,"get",n),i)?a:me(a)?o&&Ws(n)?a:a.value:se(a)?s?ga(a):Jn(a):a}}class fa extends ua{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ht(i);if(!xe(r)&&!Ht(r)&&(i=z(i),r=z(r)),!F(e)&&me(i)&&!me(r))return c?!1:(i.value=r,!0)}const o=F(e)&&Ws(n)?Number(n)<e.length:G(e,n),a=Reflect.set(e,n,r,me(e)?e:s);return e===z(s)&&(o?It(r,i)&&st(e,"set",n,r):st(e,"add",n,r)),a}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&st(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ct(n)||!la.has(n))&&he(e,"has",n),r}ownKeys(e){return he(e,"iterate",F(e)?"length":jt),Reflect.ownKeys(e)}}class Sl extends ua{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tl=new fa,Rl=new Sl,Cl=new fa(!0);const Es=t=>t,ir=t=>Reflect.getPrototypeOf(t);function Al(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=tn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Es:e?ws:pe;return!e&&he(i,"iterate",c?bs:jt),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function or(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pl(t,e){const n={get(s){const i=this.__v_raw,o=z(i),a=z(s);t||(It(s,a)&&he(o,"get",s),he(o,"get",a));const{has:c}=ir(o),u=e?Es:t?ws:pe;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&he(z(s),"iterate",jt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),a=z(s);return t||(It(s,a)&&he(o,"has",s),he(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=z(a),u=e?Es:t?ws:pe;return!t&&he(c,"iterate",jt),a.forEach((l,d)=>s.call(i,u(l),u(d),o))}};return fe(n,t?{add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear")}:{add(s){!e&&!xe(s)&&!Ht(s)&&(s=z(s));const i=z(this);return ir(i).has.call(i,s)||(i.add(s),st(i,"add",s,s)),this},set(s,i){!e&&!xe(i)&&!Ht(i)&&(i=z(i));const o=z(this),{has:a,get:c}=ir(o);let u=a.call(o,s);u||(s=z(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?It(i,l)&&st(o,"set",s,i):st(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:a}=ir(i);let c=o.call(i,s);c||(s=z(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&st(i,"delete",s,void 0),u},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&st(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Al(s,t,e)}),n}function Ys(t,e){const n=Pl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Ol={get:Ys(!1,!1)},kl={get:Ys(!1,!0)},xl={get:Ys(!0,!1)};const da=new WeakMap,ha=new WeakMap,pa=new WeakMap,Nl=new WeakMap;function Dl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ml(t){return t.__v_skip||!Object.isExtensible(t)?0:Dl(al(t))}function Jn(t){return Ht(t)?t:Xs(t,!1,Tl,Ol,da)}function Ll(t){return Xs(t,!1,Cl,kl,ha)}function ga(t){return Xs(t,!0,Rl,xl,pa)}function Xs(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ml(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function nn(t){return Ht(t)?nn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ht(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function Qs(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Ul(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&Xo(t,"__v_skip",!0),t}const pe=t=>se(t)?Jn(t):t,ws=t=>se(t)?ga(t):t;function me(t){return t?t.__v_isRef===!0:!1}function un(t){return ma(t,!1)}function Fl(t){return ma(t,!0)}function ma(t,e){return me(t)?t:new jl(t,e)}class jl{constructor(e,n){this.dep=new Js,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:pe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xe(e)||Ht(e);e=r?e:z(e),It(e,n)&&(this._rawValue=e,this._value=r?e:pe(e),this.dep.trigger())}}function je(t){return me(t)?t.value:t}const Hl={get:(t,e,n)=>e==="__v_raw"?t:je(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _a(t){return nn(t)?t:new Proxy(t,Hl)}class $l{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Js(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Un-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return ra(this,!0),!0}get value(){const e=this.dep.track();return oa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bl(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new $l(r,s,n)}const ar={},vr=new WeakMap;let Ut;function Vl(t,e=!1,n=Ut){if(n){let r=vr.get(n);r||vr.set(n,r=[]),r.push(t)}}function Wl(t,e,n=ee){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=O=>s?O:xe(O)||s===!1||s===0?it(O,1):it(O);let l,d,p,m,S=!1,x=!1;if(me(t)?(d=()=>t.value,S=xe(t)):nn(t)?(d=()=>u(t),S=!0):F(t)?(x=!0,S=t.some(O=>nn(O)||xe(O)),d=()=>t.map(O=>{if(me(O))return O.value;if(nn(O))return u(O);if(H(O))return c?c(O,2):O()})):H(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){At();try{p()}finally{Pt()}}const O=Ut;Ut=l;try{return c?c(t,3,[m]):t(m)}finally{Ut=O}}:d=He,e&&s){const O=d,K=s===!0?1/0:s;d=()=>it(O(),K)}const j=_l(),A=()=>{l.stop(),j&&j.active&&Vs(j.effects,l)};if(i&&e){const O=e;e=(...K)=>{O(...K),A()}}let k=x?new Array(t.length).fill(ar):ar;const B=O=>{if(!(!(l.flags&1)||!l.dirty&&!O))if(e){const K=l.run();if(s||S||(x?K.some((ie,le)=>It(ie,k[le])):It(K,k))){p&&p();const ie=Ut;Ut=l;try{const le=[K,k===ar?void 0:x&&k[0]===ar?[]:k,m];c?c(e,3,le):e(...le),k=K}finally{Ut=ie}}}else l.run()};return a&&a(B),l=new ta(d),l.scheduler=o?()=>o(B,!1):B,m=O=>Vl(O,!1,l),p=l.onStop=()=>{const O=vr.get(l);if(O){if(c)c(O,4);else for(const K of O)K();vr.delete(l)}},e?r?B(!0):k=l.run():o?o(B.bind(null,!0),!0):l.run(),A.pause=l.pause.bind(l),A.resume=l.resume.bind(l),A.stop=A,A}function it(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))it(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)it(t[r],e,n);else if(Go(t)||tn(t))t.forEach(r=>{it(r,e,n)});else if(Yo(t)){for(const r in t)it(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&it(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yn(t,e,n,r){try{return r?t(...r):t()}catch(s){Fr(s,e,n)}}function et(t,e,n,r){if(H(t)){const s=Yn(t,e,n,r);return s&&qo(s)&&s.catch(i=>{Fr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(et(t[i],e,n,r));return s}}function Fr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ee;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,c,u)===!1)return}a=a.parent}if(i){At(),Yn(i,null,10,[t,c,u]),Pt();return}}Kl(t,n,s,r,o)}function Kl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ve=[];let Je=-1;const rn=[];let gt=null,qt=0;const va=Promise.resolve();let yr=null;function ya(t){const e=yr||va;return t?e.then(this?t.bind(this):t):e}function zl(t){let e=Je+1,n=ve.length;for(;e<n;){const r=e+n>>>1,s=ve[r],i=jn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zs(t){if(!(t.flags&1)){const e=jn(t),n=ve[ve.length-1];!n||!(t.flags&2)&&e>=jn(n)?ve.push(t):ve.splice(zl(e),0,t),t.flags|=1,ba()}}function ba(){yr||(yr=va.then(wa))}function Gl(t){F(t)?rn.push(...t):gt&&t.id===-1?gt.splice(qt+1,0,t):t.flags&1||(rn.push(t),t.flags|=1),ba()}function Ti(t,e,n=Je+1){for(;n<ve.length;n++){const r=ve[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ea(t){if(rn.length){const e=[...new Set(rn)].sort((n,r)=>jn(n)-jn(r));if(rn.length=0,gt){gt.push(...e);return}for(gt=e,qt=0;qt<gt.length;qt++){const n=gt[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,qt=0}}const jn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wa(t){const e=He;try{for(Je=0;Je<ve.length;Je++){const n=ve[Je];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Yn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Je<ve.length;Je++){const n=ve[Je];n&&(n.flags&=-2)}Je=-1,ve.length=0,Ea(),yr=null,(ve.length||rn.length)&&wa()}}let Ae=null,Ia=null;function br(t){const e=Ae;return Ae=t,Ia=t&&t.type.__scopeId||null,e}function Qt(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mi(-1);const i=br(e);let o;try{o=t(...s)}finally{br(i),r._d&&Mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ri(t,e){if(Ae===null)return t;const n=Br(Ae),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ee]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&it(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(At(),et(c,n,8,[t.el,a,t,e]),Pt())}}const ql=Symbol("_vte"),Jl=t=>t.__isTeleport;function ei(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ei(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sa(t,e){return H(t)?(()=>fe({name:t.name},e,{setup:t}))():t}function Ta(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Er(t,e,n,r,s=!1){if(F(t)){t.forEach((S,x)=>Er(S,e&&(F(e)?e[x]:e),n,r,s));return}if(kn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Er(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Br(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ee?a.refs={}:a.refs,d=a.setupState,p=z(d),m=d===ee?()=>!1:S=>G(p,S);if(u!=null&&u!==c&&(ce(u)?(l[u]=null,m(u)&&(d[u]=null)):me(u)&&(u.value=null)),H(c))Yn(c,a,12,[o,l]);else{const S=ce(c),x=me(c);if(S||x){const j=()=>{if(t.f){const A=S?m(c)?d[c]:l[c]:c.value;s?F(A)&&Vs(A,i):F(A)?A.includes(i)||A.push(i):S?(l[c]=[i],m(c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else S?(l[c]=o,m(c)&&(d[c]=o)):x&&(c.value=o,t.k&&(l[t.k]=o))};o?(j.id=-1,Se(j,n)):j()}}}qn().requestIdleCallback;qn().cancelIdleCallback;const kn=t=>!!t.type.__asyncLoader,Ra=t=>t.type.__isKeepAlive;function Yl(t,e){Ca(t,"a",e)}function Xl(t,e){Ca(t,"da",e)}function Ca(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ra(s.parent.vnode)&&Ql(r,e,n,s),s=s.parent}}function Ql(t,e,n,r){const s=jr(e,t,r,!0);Aa(()=>{Vs(r[e],s)},n)}function jr(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{At();const a=Xn(n),c=et(e,n,t,o);return a(),Pt(),c});return r?s.unshift(i):s.push(i),i}}const ft=t=>(e,n=ge)=>{(!Bn||t==="sp")&&jr(t,(...r)=>e(...r),n)},Zl=ft("bm"),eu=ft("m"),tu=ft("bu"),nu=ft("u"),ru=ft("bum"),Aa=ft("um"),su=ft("sp"),iu=ft("rtg"),ou=ft("rtc");function au(t,e=ge){jr("ec",t,e)}const Pa="components";function ti(t,e){return lu(Pa,t,!0,e)||t}const cu=Symbol.for("v-ndc");function lu(t,e,n=!0,r=!1){const s=Ae||ge;if(s){const i=s.type;if(t===Pa){const a=Xu(i,!1);if(a&&(a===e||a===De(e)||a===Mr(De(e))))return i}const o=Ci(s[t]||i[t],e)||Ci(s.appContext[t],e);return!o&&r?i:o}}function Ci(t,e){return t&&(t[e]||t[De(e)]||t[Mr(De(e))])}function Oa(t,e,n,r){let s;const i=n&&n[r],o=F(t);if(o||ce(t)){const a=o&&nn(t);let c=!1;a&&(c=!xe(t),t=Ur(t)),s=new Array(t.length);for(let u=0,l=t.length;u<l;u++)s[u]=e(c?pe(t[u]):t[u],u,void 0,i&&i[u])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i&&i[a])}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];s[c]=e(t[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const Is=t=>t?Ya(t)?Br(t):Is(t.parent):null,xn=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Is(t.parent),$root:t=>Is(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ni(t),$forceUpdate:t=>t.f||(t.f=()=>{Zs(t.update)}),$nextTick:t=>t.n||(t.n=ya.bind(t.proxy)),$watch:t=>ku.bind(t)}),es=(t,e)=>t!==ee&&!t.__isScriptSetup&&G(t,e),uu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(es(r,e))return o[e]=1,r[e];if(s!==ee&&G(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&G(u,e))return o[e]=3,i[e];if(n!==ee&&G(n,e))return o[e]=4,n[e];Ss&&(o[e]=0)}}const l=xn[e];let d,p;if(l)return e==="$attrs"&&he(t.attrs,"get",""),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ee&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return es(s,e)?(s[e]=n,!0):r!==ee&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&G(t,o)||es(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(xn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ai(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ss=!0;function fu(t){const e=ni(t),n=t.proxy,r=t.ctx;Ss=!1,e.beforeCreate&&Pi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:m,updated:S,activated:x,deactivated:j,beforeDestroy:A,beforeUnmount:k,destroyed:B,unmounted:O,render:K,renderTracked:ie,renderTriggered:le,errorCaptured:Oe,serverPrefetch:Me,expose:ke,inheritAttrs:dt,components:ze,directives:Wt,filters:Nt}=e;if(u&&du(u,r,null),o)for(const Q in o){const X=o[Q];H(X)&&(r[Q]=X.bind(n))}if(s){const Q=s.call(n,n);se(Q)&&(t.data=Jn(Q))}if(Ss=!0,i)for(const Q in i){const X=i[Q],Le=H(X)?X.bind(n,n):H(X.get)?X.get.bind(n,n):He,Dt=!H(X)&&H(X.set)?X.set.bind(n):He,Ue=Ce({get:Le,set:Dt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:be=>Ue.value=be})}if(a)for(const Q in a)ka(a[Q],r,n,Q);if(c){const Q=H(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(X=>{ur(X,Q[X])})}l&&Pi(l,t,"c");function ae(Q,X){F(X)?X.forEach(Le=>Q(Le.bind(n))):X&&Q(X.bind(n))}if(ae(Zl,d),ae(eu,p),ae(tu,m),ae(nu,S),ae(Yl,x),ae(Xl,j),ae(au,Oe),ae(ou,ie),ae(iu,le),ae(ru,k),ae(Aa,O),ae(su,Me),F(ke))if(ke.length){const Q=t.exposed||(t.exposed={});ke.forEach(X=>{Object.defineProperty(Q,X,{get:()=>n[X],set:Le=>n[X]=Le})})}else t.exposed||(t.exposed={});K&&t.render===He&&(t.render=K),dt!=null&&(t.inheritAttrs=dt),ze&&(t.components=ze),Wt&&(t.directives=Wt),Me&&Ta(t)}function du(t,e,n=He){F(t)&&(t=Ts(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pi(t,e,n){et(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ka(t,e,n,r){let s=r.includes(".")?Ka(n,r):()=>n[r];if(ce(t)){const i=e[t];H(i)&&fr(s,i)}else if(H(t))fr(s,t.bind(n));else if(se(t))if(F(t))t.forEach(i=>ka(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&fr(s,i,t)}}function ni(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>wr(c,u,o,!0)),wr(c,e,o)),se(e)&&i.set(e,c),c}function wr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wr(t,i,n,!0),s&&s.forEach(o=>wr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=hu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hu={data:Oi,props:ki,emits:ki,methods:Tn,computed:Tn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Tn,directives:Tn,watch:gu,provide:Oi,inject:pu};function Oi(t,e){return e?t?function(){return fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function pu(t,e){return Tn(Ts(t),Ts(e))}function Ts(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?fe(Object.create(null),t,e):e}function ki(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:fe(Object.create(null),Ai(t),Ai(e??{})):e}function gu(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function xa(){return{app:null,config:{isNativeTag:il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mu=0;function _u(t,e){return function(r,s=null){H(r)||(r=fe({},r)),s!=null&&!se(s)&&(s=null);const i=xa(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:mu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zu,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(u,...d)):H(l)&&(o.add(l),l(u,...d))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,d){return d?(i.components[l]=d,u):i.components[l]},directive(l,d){return d?(i.directives[l]=d,u):i.directives[l]},mount(l,d,p){if(!c){const m=u._ceVNode||oe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,l):t(m,l,p),c=!0,u._container=l,l.__vue_app__=u,Br(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(et(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,d){return i.provides[l]=d,u},runWithContext(l){const d=sn;sn=u;try{return l()}finally{sn=d}}};return u}}let sn=null;function ur(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=ge||Ae;if(r||sn){const s=sn?sn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Na={},Da=()=>Object.create(Na),Ma=t=>Object.getPrototypeOf(t)===Na;function vu(t,e,n,r=!1){const s={},i=Da();t.propsDefaults=Object.create(null),La(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ll(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=z(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(Hr(t.emitsOptions,p))continue;const m=e[p];if(c)if(G(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const S=De(p);s[S]=Rs(c,a,S,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{La(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!G(e,d)&&((l=Bt(d))===d||!G(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Rs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!G(e,d))&&(delete i[d],u=!0)}u&&st(t.attrs,"set","")}function La(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(An(c))continue;const u=e[c];let l;s&&G(s,l=De(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Hr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=z(n),u=a||ee;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Rs(s,c,d,u[d],t,!G(u,d))}}return o}function Rs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Xn(s);r=u[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}const bu=new WeakMap;function Ua(t,e,n=!1){const r=n?bu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=d=>{c=!0;const[p,m]=Ua(d,e,!0);fe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return se(t)&&r.set(t,en),en;if(F(i))for(let l=0;l<i.length;l++){const d=De(i[l]);xi(d)&&(o[d]=ee)}else if(i)for(const l in i){const d=De(l);if(xi(d)){const p=i[l],m=o[d]=F(p)||H(p)?{type:p}:fe({},p),S=m.type;let x=!1,j=!0;if(F(S))for(let A=0;A<S.length;++A){const k=S[A],B=H(k)&&k.name;if(B==="Boolean"){x=!0;break}else B==="String"&&(j=!1)}else x=H(S)&&S.name==="Boolean";m[0]=x,m[1]=j,(x||G(m,"default"))&&a.push(d)}}const u=[o,a];return se(t)&&r.set(t,u),u}function xi(t){return t[0]!=="$"&&!An(t)}const Fa=t=>t[0]==="_"||t==="$stable",ri=t=>F(t)?t.map(Ye):[Ye(t)],Eu=(t,e,n)=>{if(e._n)return e;const r=Qt((...s)=>ri(e(...s)),n);return r._c=!1,r},ja=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fa(s))continue;const i=t[s];if(H(i))e[s]=Eu(s,i,r);else if(i!=null){const o=ri(i);e[s]=()=>o}}},Ha=(t,e)=>{const n=ri(e);t.slots.default=()=>n},$a=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},wu=(t,e,n)=>{const r=t.slots=Da();if(t.vnode.shapeFlag&32){const s=e._;s?($a(r,e,n),n&&Xo(r,"_",s,!0)):ja(e,r)}else e&&Ha(t,e)},Iu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:$a(s,e,n):(i=!e.$stable,ja(e,s)),o=e}else e&&(Ha(t,e),o={default:1});if(i)for(const a in s)!Fa(a)&&o[a]==null&&delete s[a]};function Su(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(qn().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Se=Fu;function Tu(t){return Ru(t)}function Ru(t,e){Su();const n=qn();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:m=He,insertStaticContent:S}=t,x=(f,h,g,b=null,v=null,y=null,T=void 0,I=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!wn(f,h)&&(b=R(f),be(f,v,y,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:M,shapeFlag:C}=h;switch(E){case $r:j(f,h,g,b);break;case Hn:A(f,h,g,b);break;case rs:f==null&&k(h,g,b,T);break;case Re:ze(f,h,g,b,v,y,T,I,w);break;default:C&1?K(f,h,g,b,v,y,T,I,w):C&6?Wt(f,h,g,b,v,y,T,I,w):(C&64||C&128)&&E.process(f,h,g,b,v,y,T,I,w,te)}M!=null&&v&&Er(M,f&&f.ref,y,h||f,!h)},j=(f,h,g,b)=>{if(f==null)r(h.el=a(h.children),g,b);else{const v=h.el=f.el;h.children!==f.children&&u(v,h.children)}},A=(f,h,g,b)=>{f==null?r(h.el=c(h.children||""),g,b):h.el=f.el},k=(f,h,g,b)=>{[f.el,f.anchor]=S(f.children,h,g,b,f.el,f.anchor)},B=({el:f,anchor:h},g,b)=>{let v;for(;f&&f!==h;)v=p(f),r(f,g,b),f=v;r(h,g,b)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},K=(f,h,g,b,v,y,T,I,w)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),f==null?ie(h,g,b,v,y,T,I,w):Me(f,h,v,y,T,I,w)},ie=(f,h,g,b,v,y,T,I)=>{let w,E;const{props:M,shapeFlag:C,transition:D,dirs:U}=f;if(w=f.el=o(f.type,y,M&&M.is,M),C&8?l(w,f.children):C&16&&Oe(f.children,w,null,b,v,ts(f,y),T,I),U&&Mt(f,null,b,"created"),le(w,f,f.scopeId,T,b),M){for(const ne in M)ne!=="value"&&!An(ne)&&i(w,ne,null,M[ne],y,b);"value"in M&&i(w,"value",null,M.value,y),(E=M.onVnodeBeforeMount)&&qe(E,b,f)}U&&Mt(f,null,b,"beforeMount");const W=Cu(v,D);W&&D.beforeEnter(w),r(w,h,g),((E=M&&M.onVnodeMounted)||W||U)&&Se(()=>{E&&qe(E,b,f),W&&D.enter(w),U&&Mt(f,null,b,"mounted")},v)},le=(f,h,g,b,v)=>{if(g&&m(f,g),b)for(let y=0;y<b.length;y++)m(f,b[y]);if(v){let y=v.subTree;if(h===y||Ga(y.type)&&(y.ssContent===h||y.ssFallback===h)){const T=v.vnode;le(f,T,T.scopeId,T.slotScopeIds,v.parent)}}},Oe=(f,h,g,b,v,y,T,I,w=0)=>{for(let E=w;E<f.length;E++){const M=f[E]=I?mt(f[E]):Ye(f[E]);x(null,M,h,g,b,v,y,T,I)}},Me=(f,h,g,b,v,y,T)=>{const I=h.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:M}=h;w|=f.patchFlag&16;const C=f.props||ee,D=h.props||ee;let U;if(g&&Lt(g,!1),(U=D.onVnodeBeforeUpdate)&&qe(U,g,h,f),M&&Mt(h,f,g,"beforeUpdate"),g&&Lt(g,!0),(C.innerHTML&&D.innerHTML==null||C.textContent&&D.textContent==null)&&l(I,""),E?ke(f.dynamicChildren,E,I,g,b,ts(h,v),y):T||X(f,h,I,null,g,b,ts(h,v),y,!1),w>0){if(w&16)dt(I,C,D,g,v);else if(w&2&&C.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",C.style,D.style,v),w&8){const W=h.dynamicProps;for(let ne=0;ne<W.length;ne++){const J=W[ne],Ee=C[J],de=D[J];(de!==Ee||J==="value")&&i(I,J,Ee,de,v,g)}}w&1&&f.children!==h.children&&l(I,h.children)}else!T&&E==null&&dt(I,C,D,g,v);((U=D.onVnodeUpdated)||M)&&Se(()=>{U&&qe(U,g,h,f),M&&Mt(h,f,g,"updated")},b)},ke=(f,h,g,b,v,y,T)=>{for(let I=0;I<h.length;I++){const w=f[I],E=h[I],M=w.el&&(w.type===Re||!wn(w,E)||w.shapeFlag&70)?d(w.el):g;x(w,E,M,null,b,v,y,T,!0)}},dt=(f,h,g,b,v)=>{if(h!==g){if(h!==ee)for(const y in h)!An(y)&&!(y in g)&&i(f,y,h[y],null,v,b);for(const y in g){if(An(y))continue;const T=g[y],I=h[y];T!==I&&y!=="value"&&i(f,y,I,T,v,b)}"value"in g&&i(f,"value",h.value,g.value,v)}},ze=(f,h,g,b,v,y,T,I,w)=>{const E=h.el=f?f.el:a(""),M=h.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:D,slotScopeIds:U}=h;U&&(I=I?I.concat(U):U),f==null?(r(E,g,b),r(M,g,b),Oe(h.children||[],g,M,v,y,T,I,w)):C>0&&C&64&&D&&f.dynamicChildren?(ke(f.dynamicChildren,D,g,v,y,T,I),(h.key!=null||v&&h===v.subTree)&&Ba(f,h,!0)):X(f,h,g,M,v,y,T,I,w)},Wt=(f,h,g,b,v,y,T,I,w)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?v.ctx.activate(h,g,b,T,w):Nt(h,g,b,v,y,T,w):yn(f,h,w)},Nt=(f,h,g,b,v,y,T)=>{const I=f.component=zu(f,b,v);if(Ra(f)&&(I.ctx.renderer=te),Gu(I,!1,T),I.asyncDep){if(v&&v.registerDep(I,ae,T),!f.el){const w=I.subTree=oe(Hn);A(null,w,h,g)}}else ae(I,f,h,g,v,y,T)},yn=(f,h,g)=>{const b=h.component=f.component;if(Lu(f,h,g))if(b.asyncDep&&!b.asyncResolved){Q(b,h,g);return}else b.next=h,b.update();else h.el=f.el,b.vnode=h},ae=(f,h,g,b,v,y,T)=>{const I=()=>{if(f.isMounted){let{next:C,bu:D,u:U,parent:W,vnode:ne}=f;{const we=Va(f);if(we){C&&(C.el=ne.el,Q(f,C,T)),we.asyncDep.then(()=>{f.isUnmounted||I()});return}}let J=C,Ee;Lt(f,!1),C?(C.el=ne.el,Q(f,C,T)):C=ne,D&&lr(D),(Ee=C.props&&C.props.onVnodeBeforeUpdate)&&qe(Ee,W,C,ne),Lt(f,!0);const de=ns(f),Fe=f.subTree;f.subTree=de,x(Fe,de,d(Fe.el),R(Fe),f,v,y),C.el=de.el,J===null&&Uu(f,de.el),U&&Se(U,v),(Ee=C.props&&C.props.onVnodeUpdated)&&Se(()=>qe(Ee,W,C,ne),v)}else{let C;const{el:D,props:U}=h,{bm:W,m:ne,parent:J,root:Ee,type:de}=f,Fe=kn(h);if(Lt(f,!1),W&&lr(W),!Fe&&(C=U&&U.onVnodeBeforeMount)&&qe(C,J,h),Lt(f,!0),D&&$){const we=()=>{f.subTree=ns(f),$(D,f.subTree,f,v,null)};Fe&&de.__asyncHydrate?de.__asyncHydrate(D,f,we):we()}else{Ee.ce&&Ee.ce._injectChildStyle(de);const we=f.subTree=ns(f);x(null,we,g,b,f,v,y),h.el=we.el}if(ne&&Se(ne,v),!Fe&&(C=U&&U.onVnodeMounted)){const we=h;Se(()=>qe(C,J,we),v)}(h.shapeFlag&256||J&&kn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&Se(f.a,v),f.isMounted=!0,h=g=b=null}};f.scope.on();const w=f.effect=new ta(I);f.scope.off();const E=f.update=w.run.bind(w),M=f.job=w.runIfDirty.bind(w);M.i=f,M.id=f.uid,w.scheduler=()=>Zs(M),Lt(f,!0),E()},Q=(f,h,g)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,yu(f,h.props,b,g),Iu(f,h.children,g),At(),Ti(f),Pt()},X=(f,h,g,b,v,y,T,I,w=!1)=>{const E=f&&f.children,M=f?f.shapeFlag:0,C=h.children,{patchFlag:D,shapeFlag:U}=h;if(D>0){if(D&128){Dt(E,C,g,b,v,y,T,I,w);return}else if(D&256){Le(E,C,g,b,v,y,T,I,w);return}}U&8?(M&16&&P(E,v,y),C!==E&&l(g,C)):M&16?U&16?Dt(E,C,g,b,v,y,T,I,w):P(E,v,y,!0):(M&8&&l(g,""),U&16&&Oe(C,g,b,v,y,T,I,w))},Le=(f,h,g,b,v,y,T,I,w)=>{f=f||en,h=h||en;const E=f.length,M=h.length,C=Math.min(E,M);let D;for(D=0;D<C;D++){const U=h[D]=w?mt(h[D]):Ye(h[D]);x(f[D],U,g,null,v,y,T,I,w)}E>M?P(f,v,y,!0,!1,C):Oe(h,g,b,v,y,T,I,w,C)},Dt=(f,h,g,b,v,y,T,I,w)=>{let E=0;const M=h.length;let C=f.length-1,D=M-1;for(;E<=C&&E<=D;){const U=f[E],W=h[E]=w?mt(h[E]):Ye(h[E]);if(wn(U,W))x(U,W,g,null,v,y,T,I,w);else break;E++}for(;E<=C&&E<=D;){const U=f[C],W=h[D]=w?mt(h[D]):Ye(h[D]);if(wn(U,W))x(U,W,g,null,v,y,T,I,w);else break;C--,D--}if(E>C){if(E<=D){const U=D+1,W=U<M?h[U].el:b;for(;E<=D;)x(null,h[E]=w?mt(h[E]):Ye(h[E]),g,W,v,y,T,I,w),E++}}else if(E>D)for(;E<=C;)be(f[E],v,y,!0),E++;else{const U=E,W=E,ne=new Map;for(E=W;E<=D;E++){const Ie=h[E]=w?mt(h[E]):Ye(h[E]);Ie.key!=null&&ne.set(Ie.key,E)}let J,Ee=0;const de=D-W+1;let Fe=!1,we=0;const bn=new Array(de);for(E=0;E<de;E++)bn[E]=0;for(E=U;E<=C;E++){const Ie=f[E];if(Ee>=de){be(Ie,v,y,!0);continue}let Ge;if(Ie.key!=null)Ge=ne.get(Ie.key);else for(J=W;J<=D;J++)if(bn[J-W]===0&&wn(Ie,h[J])){Ge=J;break}Ge===void 0?be(Ie,v,y,!0):(bn[Ge-W]=E+1,Ge>=we?we=Ge:Fe=!0,x(Ie,h[Ge],g,null,v,y,T,I,w),Ee++)}const bi=Fe?Au(bn):en;for(J=bi.length-1,E=de-1;E>=0;E--){const Ie=W+E,Ge=h[Ie],Ei=Ie+1<M?h[Ie+1].el:b;bn[E]===0?x(null,Ge,g,Ei,v,y,T,I,w):Fe&&(J<0||E!==bi[J]?Ue(Ge,g,Ei,2):J--)}}},Ue=(f,h,g,b,v=null)=>{const{el:y,type:T,transition:I,children:w,shapeFlag:E}=f;if(E&6){Ue(f.component.subTree,h,g,b);return}if(E&128){f.suspense.move(h,g,b);return}if(E&64){T.move(f,h,g,te);return}if(T===Re){r(y,h,g);for(let C=0;C<w.length;C++)Ue(w[C],h,g,b);r(f.anchor,h,g);return}if(T===rs){B(f,h,g);return}if(b!==2&&E&1&&I)if(b===0)I.beforeEnter(y),r(y,h,g),Se(()=>I.enter(y),v);else{const{leave:C,delayLeave:D,afterLeave:U}=I,W=()=>r(y,h,g),ne=()=>{C(y,()=>{W(),U&&U()})};D?D(y,W,ne):ne()}else r(y,h,g)},be=(f,h,g,b=!1,v=!1)=>{const{type:y,props:T,ref:I,children:w,dynamicChildren:E,shapeFlag:M,patchFlag:C,dirs:D,cacheIndex:U}=f;if(C===-2&&(v=!1),I!=null&&Er(I,null,g,f,!0),U!=null&&(h.renderCache[U]=void 0),M&256){h.ctx.deactivate(f);return}const W=M&1&&D,ne=!kn(f);let J;if(ne&&(J=T&&T.onVnodeBeforeUnmount)&&qe(J,h,f),M&6)_(f.component,g,b);else{if(M&128){f.suspense.unmount(g,b);return}W&&Mt(f,null,h,"beforeUnmount"),M&64?f.type.remove(f,h,g,te,b):E&&!E.hasOnce&&(y!==Re||C>0&&C&64)?P(E,h,g,!1,!0):(y===Re&&C&384||!v&&M&16)&&P(w,h,g),b&&Kt(f)}(ne&&(J=T&&T.onVnodeUnmounted)||W)&&Se(()=>{J&&qe(J,h,f),W&&Mt(f,null,h,"unmounted")},g)},Kt=f=>{const{type:h,el:g,anchor:b,transition:v}=f;if(h===Re){sr(g,b);return}if(h===rs){O(f);return}const y=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:I}=v,w=()=>T(g,y);I?I(f.el,y,w):w()}else y()},sr=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},_=(f,h,g)=>{const{bum:b,scope:v,job:y,subTree:T,um:I,m:w,a:E}=f;Ni(w),Ni(E),b&&lr(b),v.stop(),y&&(y.flags|=8,be(T,f,h,g)),I&&Se(I,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},P=(f,h,g,b=!1,v=!1,y=0)=>{for(let T=y;T<f.length;T++)be(f[T],h,g,b,v)},R=f=>{if(f.shapeFlag&6)return R(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[ql];return g?p(g):h};let N=!1;const q=(f,h,g)=>{f==null?h._vnode&&be(h._vnode,null,null,!0):x(h._vnode||null,f,h,null,null,null,g),h._vnode=f,N||(N=!0,Ti(),Ea(),N=!1)},te={p:x,um:be,m:Ue,r:Kt,mt:Nt,mc:Oe,pc:X,pbc:ke,n:R,o:t};let V,$;return e&&([V,$]=e(te)),{render:q,hydrate:V,createApp:_u(q,V)}}function ts({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ba(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ba(o,a)),a.type===$r&&(a.el=o.el)}}function Au(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Va(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Va(e)}function Ni(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Pu=Symbol.for("v-scx"),Ou=()=>Be(Pu);function fr(t,e,n){return Wa(t,e,n)}function Wa(t,e,n=ee){const{immediate:r,deep:s,flush:i,once:o}=n,a=fe({},n),c=e&&r||!e&&i!=="post";let u;if(Bn){if(i==="sync"){const m=Ou();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=He,m.resume=He,m.pause=He,m}}const l=ge;a.call=(m,S,x)=>et(m,l,S,x);let d=!1;i==="post"?a.scheduler=m=>{Se(m,l&&l.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,S)=>{S?m():Zs(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const p=Wl(t,e,a);return Bn&&(u?u.push(p):c&&p()),p}function ku(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?Ka(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Xn(this),a=Wa(s,i.bind(r),n);return o(),a}function Ka(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Bt(e)}Modifiers`];function Nu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&xu(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>ce(l)?l.trim():l)),o.number&&(s=n.map(_s)));let a,c=r[a=Jr(e)]||r[a=Jr(De(e))];!c&&i&&(c=r[a=Jr(Bt(e))]),c&&et(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,et(u,t,6,s)}}function za(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=za(u,e,!0);l&&(a=!0,fe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(se(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):fe(o,i),se(t)&&r.set(t,o),o)}function Hr(t,e){return!t||!xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Bt(e))||G(t,e))}function ns(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:d,data:p,setupState:m,ctx:S,inheritAttrs:x}=t,j=br(t);let A,k;try{if(n.shapeFlag&4){const O=s||r,K=O;A=Ye(u.call(K,O,l,d,m,p,S)),k=a}else{const O=e;A=Ye(O.length>1?O(d,{attrs:a,slots:o,emit:c}):O(d,null)),k=e.props?a:Du(a)}}catch(O){Nn.length=0,Fr(O,t,1),A=oe(Hn)}let B=A;if(k&&x!==!1){const O=Object.keys(k),{shapeFlag:K}=B;O.length&&K&7&&(i&&O.some(Bs)&&(k=Mu(k,i)),B=fn(B,k,!1,!0))}return n.dirs&&(B=fn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&ei(B,n.transition),A=B,br(j),A}const Du=t=>{let e;for(const n in t)(n==="class"||n==="style"||xr(n))&&((e||(e={}))[n]=t[n]);return e},Mu=(t,e)=>{const n={};for(const r in t)(!Bs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Di(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(o[p]!==r[p]&&!Hr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Di(r,o,u):!0:!!o;return!1}function Di(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hr(n,i))return!0}return!1}function Uu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ga=t=>t.__isSuspense;function Fu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Gl(t)}const Re=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),rs=Symbol.for("v-stc"),Nn=[];let Pe=null;function Ne(t=!1){Nn.push(Pe=t?null:[])}function ju(){Nn.pop(),Pe=Nn[Nn.length-1]||null}let $n=1;function Mi(t,e=!1){$n+=t,t<0&&Pe&&e&&(Pe.hasOnce=!0)}function qa(t){return t.dynamicChildren=$n>0?Pe||en:null,ju(),$n>0&&Pe&&Pe.push(t),t}function Ve(t,e,n,r,s,i){return qa(ue(t,e,n,r,s,i,!0))}function Hu(t,e,n,r,s){return qa(oe(t,e,n,r,s,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const Ja=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||me(t)||H(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ja(e),ref:e&&dr(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(si(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),$n>0&&!o&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const oe=$u;function $u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cu)&&(t=Hn),Ir(t)){const a=fn(t,e,!0);return n&&si(a,n),$n>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag=-2,a}if(Qu(t)&&(t=t.__vccOpts),e){e=Bu(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=Lr(a)),se(c)&&(Qs(c)&&!F(c)&&(c=fe({},c)),e.style=Ks(c))}const o=ce(t)?1:Ga(t)?128:Jl(t)?64:se(t)?4:H(t)?2:0;return ue(t,e,n,r,s,o,i,!0)}function Bu(t){return t?Qs(t)||Ma(t)?fe({},t):t:null}function fn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?Vu(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ja(u),ref:e&&e.ref?n&&i?F(i)?i.concat(dr(e)):[i,dr(e)]:dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ei(l,c.clone(l)),l}function Jt(t=" ",e=0){return oe($r,null,t,e)}function Ye(t){return t==null||typeof t=="boolean"?oe(Hn):F(t)?oe(Re,null,t.slice()):Ir(t)?mt(t):oe($r,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function si(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),si(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ma(e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lr([e.class,r.class]));else if(s==="style")e.style=Ks([e.style,r.style]);else if(xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qe(t,e,n,r=null){et(t,e,7,[n,r])}const Wu=xa();let Ku=0;function zu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wu,i={uid:Ku++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ua(r,s),emitsOptions:za(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nu.bind(null,i),t.ce&&t.ce(i),i}let ge=null,Sr,Cs;{const t=qn(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Sr=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),Cs=e("__VUE_SSR_SETTERS__",n=>Bn=n)}const Xn=t=>{const e=ge;return Sr(t),t.scope.on(),()=>{t.scope.off(),Sr(e)}},Li=()=>{ge&&ge.scope.off(),Sr(null)};function Ya(t){return t.vnode.shapeFlag&4}let Bn=!1;function Gu(t,e=!1,n=!1){e&&Cs(e);const{props:r,children:s}=t.vnode,i=Ya(t);vu(t,r,i,e),wu(t,s,n);const o=i?qu(t,e):void 0;return e&&Cs(!1),o}function qu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,uu);const{setup:r}=n;if(r){At();const s=t.setupContext=r.length>1?Yu(t):null,i=Xn(t),o=Yn(r,t,0,[t.props,s]),a=qo(o);if(Pt(),i(),(a||t.sp)&&!kn(t)&&Ta(t),a){if(o.then(Li,Li),e)return o.then(c=>{Ui(t,c,e)}).catch(c=>{Fr(c,t,0)});t.asyncDep=o}else Ui(t,o,e)}else Xa(t,e)}function Ui(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=_a(e)),Xa(t,n)}let Fi;function Xa(t,e,n){const r=t.type;if(!t.render){if(!e&&Fi&&!r.render){const s=r.template||ni(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=fe(fe({isCustomElement:i,delimiters:a},o),c);r.render=Fi(s,u)}}t.render=r.render||He}{const s=Xn(t);At();try{fu(t)}finally{Pt(),s()}}}const Ju={get(t,e){return he(t,"get",""),t[e]}};function Yu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ju),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_a(Ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xn)return xn[n](t)},has(e,n){return n in e||n in xn}})):t.proxy}function Xu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Qu(t){return H(t)&&"__vccOpts"in t}const Ce=(t,e)=>Bl(t,e,Bn);function Qa(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?Ir(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),oe(t,e,n))}const Zu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let As;const ji=typeof window<"u"&&window.trustedTypes;if(ji)try{As=ji.createPolicy("vue",{createHTML:t=>t})}catch{}const Za=As?t=>As.createHTML(t):t=>t,ef="http://www.w3.org/2000/svg",tf="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Hi=rt&&rt.createElement("template"),nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rt.createElementNS(ef,t):e==="mathml"?rt.createElementNS(tf,t):n?rt.createElement(t,{is:n}):rt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hi.innerHTML=Za(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Hi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rf=Symbol("_vtc");function sf(t,e,n){const r=t[rf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $i=Symbol("_vod"),of=Symbol("_vsh"),af=Symbol(""),cf=/(^|;)\s*display\s*:/;function lf(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hr(r,a,"")}else for(const o in e)n[o]==null&&hr(r,o,"");for(const o in n)o==="display"&&(i=!0),hr(r,o,n[o])}else if(s){if(e!==n){const o=r[af];o&&(n+=";"+o),r.cssText=n,i=cf.test(n)}}else e&&t.removeAttribute("style");$i in t&&(t[$i]=i?r.display:"",t[of]&&(r.display="none"))}const Bi=/\s*!important$/;function hr(t,e,n){if(F(n))n.forEach(r=>hr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uf(t,e);Bi.test(n)?t.setProperty(Bt(r),n.replace(Bi,""),"important"):t[r]=n}}const Vi=["Webkit","Moz","ms"],ss={};function uf(t,e){const n=ss[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return ss[e]=r;r=Mr(r);for(let s=0;s<Vi.length;s++){const i=Vi[s]+r;if(i in t)return ss[e]=i}return e}const Wi="http://www.w3.org/1999/xlink";function Ki(t,e,n,r,s,i=gl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wi,e.slice(6,e.length)):t.setAttributeNS(Wi,e,n):n==null||i&&!Qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ct(n)?String(n):n)}function zi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Za(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Qo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function ff(t,e,n,r){t.removeEventListener(e,n,r)}const Gi=Symbol("_vei");function df(t,e,n,r,s=null){const i=t[Gi]||(t[Gi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=hf(e);if(r){const u=i[e]=mf(r,s);Yt(t,a,u,c)}else o&&(ff(t,a,o,c),i[e]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function hf(t){let e;if(qi.test(t)){e={};let r;for(;r=t.match(qi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bt(t.slice(2)),e]}let is=0;const pf=Promise.resolve(),gf=()=>is||(pf.then(()=>is=0),is=Date.now());function mf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;et(_f(r,n.value),e,5,[r])};return n.value=t,n.attached=gf(),n}function _f(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ji=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sf(t,r,o):e==="style"?lf(t,n,r):xr(e)?Bs(e)||df(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yf(t,e,r,o))?(zi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ki(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(r))?zi(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ki(t,e,r,o))};function yf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ji(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ji(e)&&ce(n)?!1:e in t}const Yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>lr(e,n):e};function bf(t){t.target.composing=!0}function Xi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const os=Symbol("_assign"),Qi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[os]=Yi(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_s(a)),t[os](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",bf),Yt(t,"compositionend",Xi),Yt(t,"change",Xi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[os]=Yi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?_s(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ef=["ctrl","shift","alt","meta"],wf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ef.some(n=>t[`${n}Key`]&&!e.includes(n))},If=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=wf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Sf=fe({patchProp:vf},nf);let Zi;function Tf(){return Zi||(Zi=Tu(Sf))}const Rf=(...t)=>{const e=Tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Af(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Cf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Af(t){return ce(t)?document.querySelector(t):t}const Pf="modulepreload",Of=function(t){return"/project5/"+t},eo={},kf=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Of(i),i in eo)return;eo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const d=s[l];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Pf,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,d)=>{u.addEventListener("load",l),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function xf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Y=Object.assign;function as(t,e){const n={};for(const r in e){const s=e[r];n[r]=We(s)?s.map(t):t(s)}return n}const Dn=()=>{},We=Array.isArray,Nf=/\/$/,Df=t=>t.replace(Nf,"");function cs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ff(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Mf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function to(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dn(e.matched[r],n.matched[s])&&ec(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ec(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Uf(t[n],e[n]))return!1;return!0}function Uf(t,e){return We(t)?no(t,e):We(e)?no(e,t):t===e}function no(t,e){return We(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ff(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Mn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mn||(Mn={}));function jf(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Df(t)}const Hf=/^[^#]+#/;function $f(t,e){return t.replace(Hf,"#")+e}function Bf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Bf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ro(t,e){return(history.state?history.state.position-e:-1)+t}const Ps=new Map;function Wf(t,e){Ps.set(t,e)}function Kf(t){const e=Ps.get(t);return Ps.delete(t),e}let zf=()=>location.protocol+"//"+location.host;function tc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),to(c,"")}return to(n,t)+r+s}function Gf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=tc(t,location),S=n.value,x=e.value;let j=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}j=x?p.position-x.position:0}else r(m);s.forEach(A=>{A(n.value,S,{delta:j,type:Vn.pop,direction:j?j>0?Mn.forward:Mn.back:Mn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function l(){const{history:p}=window;p.state&&p.replaceState(Y({},p.state,{scroll:Vr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function so(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Vr():null}}function qf(t){const{history:e,location:n}=window,r={value:tc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:zf()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[l?"replace":"assign"](p)}}function o(c,u){const l=Y({},e.state,so(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Y({},s.value,e.state,{forward:c,scroll:Vr()});i(l.current,l,!0);const d=Y({},so(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Jf(t){t=jf(t);const e=qf(t),n=Gf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:$f.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yf(t){return typeof t=="string"||t&&typeof t=="object"}function nc(t){return typeof t=="string"||typeof t=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rc=Symbol("");var io;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(io||(io={}));function hn(t,e){return Y(new Error,{type:t,[rc]:!0},e)}function nt(t,e){return t instanceof Error&&rc in t&&(e==null||!!(t.type&e))}const oo="[^/]+?",Xf={sensitive:!1,strict:!1,start:!0,end:!0},Qf=/[.+*?^${}()[\]/\\]/g;function Zf(t,e){const n=Y({},Xf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Qf,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:x,optional:j,regexp:A}=p;i.push({name:S,repeatable:x,optional:j});const k=A||oo;if(k!==oo){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${S}" (${k}): `+O.message)}}let B=x?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(B=j&&u.length<2?`(?:/${B})`:"/"+B),j&&(B+="?"),s+=B,m+=20,j&&(m+=-8),x&&(m+=-20),k===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let p=1;p<l.length;p++){const m=l[p]||"",S=i[p-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function c(u){let l="",d=!1;for(const p of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const m of p)if(m.type===0)l+=m.value;else if(m.type===1){const{value:S,repeatable:x,optional:j}=m,A=S in u?u[S]:"";if(We(A)&&!x)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const k=We(A)?A.join("/"):A;if(!k)if(j)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);l+=k}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ed(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function td(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ed(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ao(r))return 1;if(ao(s))return-1}return s.length-r.length}function ao(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nd={type:0,value:""},rd=/[a-zA-Z0-9_]/;function sd(t){if(!t)return[[]];if(t==="/")return[[nd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:rd.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function id(t,e,n){const r=Zf(sd(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function od(t,e){const n=[],r=new Map;e=uo({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,d,p){const m=!p,S=ad(l);S.aliasOf=p&&p.record;const x=uo(e,l),j=[S];if("alias"in l){const B=typeof l.alias=="string"?[l.alias]:l.alias;for(const O of B)j.push(Y({},S,{components:p?p.record.components:S.components,path:O,aliasOf:p?p.record:S}))}let A,k;for(const B of j){const{path:O}=B;if(d&&O[0]!=="/"){const K=d.record.path,ie=K[K.length-1]==="/"?"":"/";B.path=d.record.path+(O&&ie+O)}if(A=id(B,d,x),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&l.name&&!lo(A)&&o(l.name)),S.children){const K=S.children;for(let ie=0;ie<K.length;ie++)i(K[ie],A,p&&p.children[ie])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:Dn}function o(l){if(nc(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&td(l,n[d])>=0&&(l.record.path!==n[d].record.path||!sc(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!lo(l)&&r.set(l.record.name,l)}function u(l,d){let p,m={},S,x;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw hn(1,{location:l});x=p.record.name,m=Y(co(d.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),l.params&&co(l.params,p.keys.map(k=>k.name))),S=p.stringify(m)}else if("path"in l)S=l.path,p=n.find(k=>k.re.test(S)),p&&(m=p.parse(S),x=p.record.name);else{if(p=d.name?r.get(d.name):n.find(k=>k.re.test(d.path)),!p)throw hn(1,{location:l,currentLocation:d});x=p.record.name,m=Y({},d.params,l.params),S=p.stringify(m)}const j=[];let A=p;for(;A;)j.unshift(A.record),A=A.parent;return{name:x,path:S,params:m,matched:j,meta:ld(j)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function co(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ad(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ld(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sc(t,e){return e.children.some(n=>n===t||sc(t,n))}const ic=/#/g,ud=/&/g,fd=/\//g,dd=/=/g,hd=/\?/g,oc=/\+/g,pd=/%5B/g,gd=/%5D/g,ac=/%5E/g,md=/%60/g,cc=/%7B/g,_d=/%7C/g,lc=/%7D/g,vd=/%20/g;function ii(t){return encodeURI(""+t).replace(_d,"|").replace(pd,"[").replace(gd,"]")}function yd(t){return ii(t).replace(cc,"{").replace(lc,"}").replace(ac,"^")}function Os(t){return ii(t).replace(oc,"%2B").replace(vd,"+").replace(ic,"%23").replace(ud,"%26").replace(md,"`").replace(cc,"{").replace(lc,"}").replace(ac,"^")}function bd(t){return Os(t).replace(dd,"%3D")}function Ed(t){return ii(t).replace(ic,"%23").replace(hd,"%3F")}function wd(t){return t==null?"":Ed(t).replace(fd,"%2F")}function Tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Id(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(oc," "),o=i.indexOf("="),a=Tr(o<0?i:i.slice(0,o)),c=o<0?null:Tr(i.slice(o+1));if(a in e){let u=e[a];We(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function fo(t){let e="";for(let n in t){const r=t[n];if(n=bd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(We(r)?r.map(i=>i&&Os(i)):[r&&Os(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=We(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Td=Symbol(""),ho=Symbol(""),Wr=Symbol(""),oi=Symbol(""),ks=Symbol("");function In(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function _t(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(hn(4,{from:n,to:e})):d instanceof Error?a(d):Yf(d)?a(hn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function ls(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rd(a)){const u=(a.__vccOpts||a)[e];u&&s.push(_t(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=xf(u)?u.default:u;i.components[o]=l;const p=(l.__vccOpts||l)[e];return p&&_t(p,n,r,i,o)()}))}}return s}function Rd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function po(t){const e=Be(Wr),n=Be(oi),r=Ce(()=>e.resolve(je(t.to))),s=Ce(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(dn.bind(null,l));if(p>-1)return p;const m=go(c[u-2]);return u>1&&go(l)===m&&d[d.length-1].path!==m?d.findIndex(dn.bind(null,c[u-2])):p}),i=Ce(()=>s.value>-1&&Od(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&ec(n.params,r.value.params));function a(c={}){return Pd(c)?e[je(t.replace)?"replace":"push"](je(t.to)).catch(Dn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Cd=Sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:po,setup(t,{slots:e}){const n=Jn(po(t)),{options:r}=Be(Wr),s=Ce(()=>({[mo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ad=Cd;function Pd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Od(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!We(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function go(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mo=(t,e,n)=>t??e??n,kd=Sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(ks),s=Ce(()=>t.route||r.value),i=Be(ho,0),o=Ce(()=>{let u=je(i);const{matched:l}=s.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=Ce(()=>s.value.matched[o.value]);ur(ho,Ce(()=>o.value+1)),ur(Td,a),ur(ks,s);const c=un();return fr(()=>[c.value,a.value,t.name],([u,l,d],[p,m,S])=>{l&&(l.instances[d]=u,m&&m!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!dn(l,m)||!p)&&(l.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,d=a.value,p=d&&d.components[l];if(!p)return _o(n.default,{Component:p,route:u});const m=d.props[l],S=m?m===!0?u.params:typeof m=="function"?m(u):m:null,j=Qa(p,Y({},S,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return _o(n.default,{Component:j,route:u})||j}}});function _o(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xd=kd;function Nd(t){const e=od(t.routes,t),n=t.parseQuery||Id,r=t.stringifyQuery||fo,s=t.history,i=In(),o=In(),a=In(),c=Fl(ht);let u=ht;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=as.bind(null,_=>""+_),d=as.bind(null,wd),p=as.bind(null,Tr);function m(_,P){let R,N;return nc(_)?(R=e.getRecordMatcher(_),N=P):N=_,e.addRoute(N,R)}function S(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(_=>_.record)}function j(_){return!!e.getRecordMatcher(_)}function A(_,P){if(P=Y({},P||c.value),typeof _=="string"){const $=cs(n,_,P.path),f=e.resolve({path:$.path},P),h=s.createHref($.fullPath);return Y($,f,{params:p(f.params),hash:Tr($.hash),redirectedFrom:void 0,href:h})}let R;if("path"in _)R=Y({},_,{path:cs(n,_.path,P.path).path});else{const $=Y({},_.params);for(const f in $)$[f]==null&&delete $[f];R=Y({},_,{params:d(_.params)}),P.params=d(P.params)}const N=e.resolve(R,P),q=_.hash||"";N.params=l(p(N.params));const te=Mf(r,Y({},_,{hash:yd(q),path:N.path})),V=s.createHref(te);return Y({fullPath:te,hash:q,query:r===fo?Sd(_.query):_.query||{}},N,{redirectedFrom:void 0,href:V})}function k(_){return typeof _=="string"?cs(n,_,c.value.path):Y({},_)}function B(_,P){if(u!==_)return hn(8,{from:P,to:_})}function O(_){return le(_)}function K(_){return O(Y(k(_),{replace:!0}))}function ie(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:R}=P;let N=typeof R=="function"?R(_):R;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),Y({query:_.query,hash:_.hash,params:"path"in N?{}:_.params},N)}}function le(_,P){const R=u=A(_),N=c.value,q=_.state,te=_.force,V=_.replace===!0,$=ie(R);if($)return le(Y(k($),{state:typeof $=="object"?Y({},q,$.state):q,force:te,replace:V}),P||R);const f=R;f.redirectedFrom=P;let h;return!te&&Lf(r,N,R)&&(h=hn(16,{to:f,from:N}),Dt(N,N,!0,!1)),(h?Promise.resolve(h):Me(f,N)).catch(g=>nt(g)?nt(g,2)?g:Le(g):Q(g,f,N)).then(g=>{if(g){if(nt(g,2))return le(Y({replace:V},k(g.to),{state:typeof g.to=="object"?Y({},q,g.to.state):q,force:te}),P||f)}else g=dt(f,N,!0,V,q);return ke(f,N,g),g})}function Oe(_,P){const R=B(_,P);return R?Promise.reject(R):Promise.resolve()}function Me(_,P){let R;const[N,q,te]=Dd(_,P);R=ls(N.reverse(),"beforeRouteLeave",_,P);for(const $ of N)$.leaveGuards.forEach(f=>{R.push(_t(f,_,P))});const V=Oe.bind(null,_,P);return R.push(V),Gt(R).then(()=>{R=[];for(const $ of i.list())R.push(_t($,_,P));return R.push(V),Gt(R)}).then(()=>{R=ls(q,"beforeRouteUpdate",_,P);for(const $ of q)$.updateGuards.forEach(f=>{R.push(_t(f,_,P))});return R.push(V),Gt(R)}).then(()=>{R=[];for(const $ of _.matched)if($.beforeEnter&&!P.matched.includes($))if(We($.beforeEnter))for(const f of $.beforeEnter)R.push(_t(f,_,P));else R.push(_t($.beforeEnter,_,P));return R.push(V),Gt(R)}).then(()=>(_.matched.forEach($=>$.enterCallbacks={}),R=ls(te,"beforeRouteEnter",_,P),R.push(V),Gt(R))).then(()=>{R=[];for(const $ of o.list())R.push(_t($,_,P));return R.push(V),Gt(R)}).catch($=>nt($,8)?$:Promise.reject($))}function ke(_,P,R){for(const N of a.list())N(_,P,R)}function dt(_,P,R,N,q){const te=B(_,P);if(te)return te;const V=P===ht,$=Xt?history.state:{};R&&(N||V?s.replace(_.fullPath,Y({scroll:V&&$&&$.scroll},q)):s.push(_.fullPath,q)),c.value=_,Dt(_,P,R,V),Le()}let ze;function Wt(){ze||(ze=s.listen((_,P,R)=>{if(!sr.listening)return;const N=A(_),q=ie(N);if(q){le(Y(q,{replace:!0}),N).catch(Dn);return}u=N;const te=c.value;Xt&&Wf(ro(te.fullPath,R.delta),Vr()),Me(N,te).catch(V=>nt(V,12)?V:nt(V,2)?(le(V.to,N).then($=>{nt($,20)&&!R.delta&&R.type===Vn.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Q(V,N,te))).then(V=>{V=V||dt(N,te,!1),V&&(R.delta&&!nt(V,8)?s.go(-R.delta,!1):R.type===Vn.pop&&nt(V,20)&&s.go(-1,!1)),ke(N,te,V)}).catch(Dn)}))}let Nt=In(),yn=In(),ae;function Q(_,P,R){Le(_);const N=yn.list();return N.length?N.forEach(q=>q(_,P,R)):console.error(_),Promise.reject(_)}function X(){return ae&&c.value!==ht?Promise.resolve():new Promise((_,P)=>{Nt.add([_,P])})}function Le(_){return ae||(ae=!_,Wt(),Nt.list().forEach(([P,R])=>_?R(_):P()),Nt.reset()),_}function Dt(_,P,R,N){const{scrollBehavior:q}=t;if(!Xt||!q)return Promise.resolve();const te=!R&&Kf(ro(_.fullPath,0))||(N||!R)&&history.state&&history.state.scroll||null;return ya().then(()=>q(_,P,te)).then(V=>V&&Vf(V)).catch(V=>Q(V,_,P))}const Ue=_=>s.go(_);let be;const Kt=new Set,sr={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,hasRoute:j,getRoutes:x,resolve:A,options:t,push:O,replace:K,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:yn.add,isReady:X,install(_){const P=this;_.component("RouterLink",Ad),_.component("RouterView",xd),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>je(c)}),Xt&&!be&&c.value===ht&&(be=!0,O(s.location).catch(q=>{}));const R={};for(const q in ht)R[q]=Ce(()=>c.value[q]);_.provide(Wr,P),_.provide(oi,Jn(R)),_.provide(ks,c);const N=_.unmount;Kt.add(_),_.unmount=function(){Kt.delete(_),Kt.size<1&&(u=ht,ze&&ze(),ze=null,c.value=ht,be=!1,ae=!1),N()}}};return sr}function Gt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Dd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>dn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>dn(u,c))||s.push(c))}return[n,r,s]}function Md(){return Be(Wr)}function uc(){return Be(oi)}const Ld={class:"border border-gray-500 rounded-lg shadow bg-white h-full transition-transform duration-300 hover:scale-105"},Ud=["src"],Fd={class:"p-4"},jd={class:"mb-2 text-2xl font-bold"},Hd={class:"mb-3 font-normal text-gray-800"},$d={class:"mb-3 font-normal text-gray-800"},Bd={__name:"MainCardSingle",props:{resortadj:String,resortname:String,phonenumber:String,bio:String,imageUrl:String,username:String},setup(t){const e=t;return(n,r)=>{const s=ti("RouterLink");return Ne(),Hu(s,{to:{name:"CardDetail",params:{id:e.username}}},{default:Qt(()=>[ue("div",Ld,[ue("img",{class:"w-full h-48 object-cover rounded-t-lg",src:e.imageUrl},null,8,Ud),ue("div",Fd,[ue("p",jd,wt(e.resortadj)+" "+wt(e.resortname),1),ue("p",Hd,wt(e.phonenumber),1),ue("p",$d,wt(e.bio),1)])])]),_:1},8,["to"])}}},Vd={class:"grid grid-cols-5 gap-10 p-10"},Wd={__name:"MainCards",setup(t){const e=[{resortadj:"Tropical",resortname:"Brazil",phonenumber:"(555) 123-4567",bio:"Tropical paradise with amazing beaches and resorts.",imageUrl:"https://images.pexels.com/photos/3272589/pexels-photo-3272589.jpeg",username:"tropicalbrazil"},{resortadj:"Peaceful",resortname:"Japan",phonenumber:"(555) 234-5678",bio:"A serene retreat surrounded by nature and culture.",imageUrl:"https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"peacefuljapan"},{resortadj:"Luxurious",resortname:"Switzerland",phonenumber:"(555) 345-6789",bio:"Luxurious resorts amidst the stunning Swiss Alps.",imageUrl:"https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"luxuriousswiss"},{resortadj:"Scenic",resortname:"Canada",phonenumber:"(555) 456-7890",bio:"Scenic mountain lodges with breathtaking views.",imageUrl:"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"sceniccanada"},{resortadj:"Vibrant",resortname:"Thailand",phonenumber:"(555) 567-8901",bio:"A lively resort destination with stunning beaches and nightlife.",imageUrl:"https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"vibrantthailand"},{resortadj:"Historic",resortname:"Italy",phonenumber:"(555) 678-9012",bio:"Charming resorts set in Italy's historic landscapes.",imageUrl:"https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"historicitaly"},{resortadj:"Majestic",resortname:"Norway",phonenumber:"(555) 789-0123",bio:"Experience majestic fjords and serene luxury.",imageUrl:"https://images.pexels.com/photos/1940038/pexels-photo-1940038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"majesticnorway"},{resortadj:"Exotic",resortname:"Maldives",phonenumber:"(555) 890-1234",bio:"Overwater bungalows and clear blue waters await you.",imageUrl:"https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"exoticmaldives"},{resortadj:"Adventurous",resortname:"New Zealand",phonenumber:"(555) 901-2345",bio:"A haven for adventure seekers and nature lovers.",imageUrl:"https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"adventurousnz"},{resortadj:"Charming",resortname:"France",phonenumber:"(555) 012-3456",bio:"Romantic resorts nestled in the heart of France.",imageUrl:"https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"charmingfrance"},{resortadj:"Serene",resortname:"Bali",phonenumber:"(555) 123-4567",bio:"A tranquil escape in lush tropical surroundings.",imageUrl:"https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"serenebali"},{resortadj:"Sunny",resortname:"Spain",phonenumber:"(555) 234-6789",bio:"Enjoy warm beaches, vibrant culture, and stunning coastlines.",imageUrl:"https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"sunnyspain"},{resortadj:"Picturesque",resortname:"Greece",phonenumber:"(555) 345-7890",bio:"White-washed resorts with stunning ocean views in the Mediterranean.",imageUrl:"https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"picturesquegreece"},{resortadj:"Wild",resortname:"South Africa",phonenumber:"(555) 456-8901",bio:"Luxury resorts surrounded by breathtaking wildlife and safaris.",imageUrl:"https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"wildsouthafrica"},{resortadj:"Tranquil",resortname:"Fiji",phonenumber:"(555) 567-9012",bio:"Private island resorts with crystal-clear waters and soft sands.",imageUrl:"https://images.pexels.com/photos/4784462/pexels-photo-4784462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",username:"tranquilfiji"}];return(n,r)=>(Ne(),Ve("div",Vd,[(Ne(),Ve(Re,null,Oa(e,(s,i)=>oe(Bd,{key:i,resortadj:s.resortadj,resortname:s.resortname,phonenumber:s.phonenumber,bio:s.bio,imageUrl:s.imageUrl,username:s.username},null,8,["resortadj","resortname","phonenumber","bio","imageUrl","username"])),64))]))}},Kd={class:"flex justify-center gap-4 p-8"},zd=["disabled"],Gd=["disabled"],qd={__name:"MainPagination",setup(t){const e=un(10),n=un(2),r=()=>{n.value>1&&n.value--,console.log(n)},s=()=>{n.value<e.value&&n.value++,console.log(n)};return(i,o)=>(Ne(),Ve("div",Kd,[ue("button",{onClick:r,disabled:n.value===1,class:"rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md"},"PREV",8,zd),(Ne(!0),Ve(Re,null,Oa(e.value,a=>(Ne(),Ve("button",{key:a,class:Lr(["rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md",a===n.value?"bg-yellow-700 text-slate-100":""])},wt(a),3))),128)),ue("button",{onClick:s,disabled:n.value===e.value,class:"rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md"},"NEXT",8,Gd)]))}},Jd={__name:"HomePage",setup(t){return(e,n)=>(Ne(),Ve(Re,null,[oe(Wd),oe(qd)],64))}},Yd={__name:"CardDetail",setup(t){const e=uc();return(n,r)=>wt(je(e).params.id)}},Xd=()=>{};/**
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
 */const fc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[l],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new Zd;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const S=u<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eh=function(t){const e=fc(t);return dc.encodeByteArray(e,!0)},hc=function(t){return eh(t).replace(/\./g,"")},pc=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function th(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nh=()=>th().__FIREBASE_DEFAULTS__,rh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pc(t[1]);return e&&JSON.parse(e)},ai=()=>{try{return Xd()||nh()||rh()||sh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ih=t=>{var e,n;return(n=(e=ai())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gc=()=>{var t;return(t=ai())===null||t===void 0?void 0:t.config},mc=t=>{var e;return(e=ai())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function ch(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fh(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ph="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ph,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function gh(t,e){return t.replace(mh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mh=/\{\$([^}]+)}/g;function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vo(i)&&vo(o)){if(!pn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vo(t){return t!==null&&typeof t=="object"}/**
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
 */function Zn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vh(t,e){const n=new yh(t,e);return n.subscribe.bind(n)}class yh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=us),s.error===void 0&&(s.error=us),s.complete===void 0&&(s.complete=us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function us(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class Eh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ih(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wh(t){return t===Ft?void 0:t}function Ih(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Th={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Rh=Z.INFO,Ch={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Ah=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ch[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=Rh,this._logHandler=Ah,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ph=(t,e)=>e.some(n=>t instanceof n);let yo,bo;function Oh(){return yo||(yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vc=new WeakMap,xs=new WeakMap,yc=new WeakMap,fs=new WeakMap,ci=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vc.set(n,t)}).catch(()=>{}),ci.set(e,t),e}function Nh(t){if(xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xs.set(t,e)}let Ns={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dh(t){Ns=t(Ns)}function Mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ds(this),e,...n);return yc.set(r,e.sort?e.sort():[e]),St(r)}:kh().includes(t)?function(...e){return t.apply(ds(this),e),St(vc.get(this))}:function(...e){return St(t.apply(ds(this),e))}}function Lh(t){return typeof t=="function"?Mh(t):(t instanceof IDBTransaction&&Nh(t),Ph(t,Oh())?new Proxy(t,Ns):t)}function St(t){if(t instanceof IDBRequest)return xh(t);if(fs.has(t))return fs.get(t);const e=Lh(t);return e!==t&&(fs.set(t,e),ci.set(e,t)),e}const ds=t=>ci.get(t);function Uh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Fh=["get","getKey","getAll","getAllKeys","count"],jh=["put","add","delete","clear"],hs=new Map;function Eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return hs.set(e,i),i}Dh(t=>({...t,get:(e,n,r)=>Eo(e,n)||t.get(e,n,r),has:(e,n)=>!!Eo(e,n)||t.has(e,n)}));/**
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
 */class Hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($h(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $h(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ds="@firebase/app",wo="0.11.2";/**
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
 */const lt=new _c("@firebase/app"),Bh="@firebase/app-compat",Vh="@firebase/analytics-compat",Wh="@firebase/analytics",Kh="@firebase/app-check-compat",zh="@firebase/app-check",Gh="@firebase/auth",qh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/data-connect",Xh="@firebase/database-compat",Qh="@firebase/functions",Zh="@firebase/functions-compat",ep="@firebase/installations",tp="@firebase/installations-compat",np="@firebase/messaging",rp="@firebase/messaging-compat",sp="@firebase/performance",ip="@firebase/performance-compat",op="@firebase/remote-config",ap="@firebase/remote-config-compat",cp="@firebase/storage",lp="@firebase/storage-compat",up="@firebase/firestore",fp="@firebase/vertexai",dp="@firebase/firestore-compat",hp="firebase",pp="11.4.0";/**
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
 */const Ms="[DEFAULT]",gp={[Ds]:"fire-core",[Bh]:"fire-core-compat",[Wh]:"fire-analytics",[Vh]:"fire-analytics-compat",[zh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Gh]:"fire-auth",[qh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-data-connect",[Xh]:"fire-rtdb-compat",[Qh]:"fire-fn",[Zh]:"fire-fn-compat",[ep]:"fire-iid",[tp]:"fire-iid-compat",[np]:"fire-fcm",[rp]:"fire-fcm-compat",[sp]:"fire-perf",[ip]:"fire-perf-compat",[op]:"fire-rc",[ap]:"fire-rc-compat",[cp]:"fire-gcs",[lp]:"fire-gcs-compat",[up]:"fire-fst",[dp]:"fire-fst-compat",[fp]:"fire-vertex","fire-js":"fire-js",[hp]:"fire-js-all"};/**
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
 */const Rr=new Map,mp=new Map,Ls=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Ls.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Ls.set(e,t);for(const n of Rr.values())Io(n,t);for(const n of mp.values())Io(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const _p={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new Qn("app","Firebase",_p);/**
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
 */class vp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const er=pp;function Ec(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ms,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=gc()),!n)throw Tt.create("no-options");const i=Rr.get(s);if(i){if(pn(n,i.options)&&pn(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new Sh(s);for(const c of Ls.values())o.addComponent(c);const a=new vp(n,r,o);return Rr.set(s,a),a}function yp(t=Ms){const e=Rr.get(t);if(!e&&t===Ms&&gc())return Ec();if(!e)throw Tt.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=gp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}Wn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",Ep=1,Kn="firebase-heartbeat-store";let ps=null;function wc(){return ps||(ps=Uh(bp,Ep,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Kn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),ps}async function wp(t){try{const n=(await wc()).transaction(Kn),r=await n.objectStore(Kn).get(Ic(t));return await n.done,r}catch(e){if(e instanceof Ot)lt.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(n.message)}}}async function So(t,e){try{const r=(await wc()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,Ic(t)),await r.done}catch(n){if(n instanceof Ot)lt.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lt.warn(r.message)}}}function Ic(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ip=1024,Sp=30;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=To();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Sp){const o=Ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=To(),{heartbeatsToSend:r,unsentEntries:s}=Rp(this._heartbeatsCache.heartbeats),i=hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lt.warn(n),""}}}function To(){return new Date().toISOString().substring(0,10)}function Rp(t,e=Ip){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ro(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ro(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ro(t){return hc(JSON.stringify({version:2,heartbeats:t})).length}function Ap(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Pp(t){Wn(new gn("platform-logger",e=>new Hh(e),"PRIVATE")),Wn(new gn("heartbeat",e=>new Tp(e),"PRIVATE")),on(Ds,wo,t),on(Ds,wo,"esm2017"),on("fire-js","")}Pp("");var Op="firebase",kp="11.4.0";/**
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
 */on(Op,kp,"app");const xp={apiKey:"AIzaSyBo6HbA27EhygstsHNPoV96Z7dAoXXJnkE",authDomain:"project5-directory.firebaseapp.com",projectId:"project5-directory",storageBucket:"project5-directory.firebasestorage.app",messagingSenderId:"841690344791",appId:"1:841690344791:web:a4af66e86b72d59c63a212"},Np=Ec(xp);function li(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dp=Sc,Tc=new Qn("auth","Firebase",Sc());/**
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
 */const Cr=new _c("@firebase/auth");function Mp(t,...e){Cr.logLevel<=Z.WARN&&Cr.warn(`Auth (${er}): ${t}`,...e)}function pr(t,...e){Cr.logLevel<=Z.ERROR&&Cr.error(`Auth (${er}): ${t}`,...e)}/**
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
 */function Ke(t,...e){throw ui(t,...e)}function Qe(t,...e){return ui(t,...e)}function Rc(t,e,n){const r=Object.assign(Object.assign({},Dp()),{[e]:n});return new Qn("auth","Firebase",r).create(e,{appName:t.name})}function Rt(t){return Rc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tc.create(t,...e)}function L(t,e,...n){if(!t)throw ui(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function ut(t,e){t||ot(e)}/**
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
 */function Us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lp(){return Co()==="http:"||Co()==="https:"}function Co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Up(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lp()||lh()||"connection"in navigator)?navigator.onLine:!0}function Fp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=ah()||uh()}get(){return Up()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fi(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hp=new tr(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xt(t,e,n,r,s={}){return Ac(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return ch()||(u.referrerPolicy="no-referrer"),Cc.fetch()(Pc(t,t.config.apiHost,n,a),u)})}async function Ac(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jp),e);try{const s=new Bp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw cr(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rc(t,l,u);Ke(t,l)}}catch(s){if(s instanceof Ot)throw s;Ke(t,"network-request-failed",{message:String(s)})}}async function Kr(t,e,n,r,s={}){const i=await xt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fi(t.config,s):`${t.config.apiScheme}://${s}`}function $p(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Hp.get())})}}function cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(t,e,r);return s.customData._tokenResponse=n,s}function Ao(t){return t!==void 0&&t.enterprise!==void 0}class Vp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $p(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wp(t,e){return xt(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
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
 */async function Kp(t,e){return xt(t,"POST","/v1/accounts:delete",e)}async function Oc(t,e){return xt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zp(t,e=!1){const n=kt(t),r=await n.getIdToken(e),s=di(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ln(gs(s.auth_time)),issuedAtTime:Ln(gs(s.iat)),expirationTime:Ln(gs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gs(t){return Number(t)*1e3}function di(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=pc(n);return s?JSON.parse(s):(pr("Failed to decode base64 JWT payload"),null)}catch(s){return pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Po(t){const e=di(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&Gp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ar(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zn(t,Oc(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kc(i.providerUserInfo):[],a=Yp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fs(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Jp(t){const e=kt(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kc(t){return t.map(e=>{var{providerId:n}=e,r=li(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Xp(t,e){const n=await Ac(t,{},async()=>{const r=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qp(t,e){return xt(t,"POST","/v2/accounts:revokeToken",Vt(t,e))}/**
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
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Po(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=Po(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new an;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function pt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=li(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zp(this,e)}reload(){return Jp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await zn(this,Kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,j=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:B,emailVerified:O,isAnonymous:K,providerData:ie,stsTokenManager:le}=n;L(B&&le,e,"internal-error");const Oe=an.fromJSON(this.name,le);L(typeof B=="string",e,"internal-error"),pt(d,e.name),pt(p,e.name),L(typeof O=="boolean",e,"internal-error"),L(typeof K=="boolean",e,"internal-error"),pt(m,e.name),pt(S,e.name),pt(x,e.name),pt(j,e.name),pt(A,e.name),pt(k,e.name);const Me=new at({uid:B,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:K,photoURL:S,phoneNumber:m,tenantId:x,stsTokenManager:Oe,createdAt:A,lastLoginAt:k});return ie&&Array.isArray(ie)&&(Me.providerData=ie.map(ke=>Object.assign({},ke))),j&&(Me._redirectEventId=j),Me}static async _fromIdTokenResponse(e,n,r=!1){const s=new an;s.updateFromServerResponse(n);const i=new at({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ar(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new an;a.updateFromIdToken(r);const c=new at({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Oo=new Map;function ct(t){ut(t instanceof Function,"Expected a class definition");let e=Oo.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oo.set(t,e),e)}/**
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
 */class xc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xc.type="NONE";const ko=xc;/**
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
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cn(ct(ko),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ct(ko);const o=gr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=at._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cn(i,e,r))}}/**
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
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fc(e))return"Blackberry";if(jc(e))return"Webos";if(Dc(e))return"Safari";if((e.includes("chrome/")||Mc(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nc(t=ye()){return/firefox\//i.test(t)}function Dc(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mc(t=ye()){return/crios\//i.test(t)}function Lc(t=ye()){return/iemobile/i.test(t)}function Uc(t=ye()){return/android/i.test(t)}function Fc(t=ye()){return/blackberry/i.test(t)}function jc(t=ye()){return/webos/i.test(t)}function hi(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zp(t=ye()){var e;return hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eg(){return fh()&&document.documentMode===10}function Hc(t=ye()){return hi(t)||Uc(t)||jc(t)||Fc(t)||/windows phone/i.test(t)||Lc(t)}/**
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
 */function $c(t,e=[]){let n;switch(t){case"Browser":n=xo(ye());break;case"Worker":n=`${xo(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}/**
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
 */class tg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ng(t,e={}){return xt(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
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
 */const rg=6;class sg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ig{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Oc(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Rt(this));const n=e?kt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ng(this),n=new sg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _n(t){return kt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=vh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function og(t){zr=t}function Bc(t){return zr.loadJS(t)}function ag(){return zr.recaptchaEnterpriseScript}function cg(){return zr.gapiScript}function lg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ug{constructor(){this.enterprise=new fg}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class fg{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dg="recaptcha-enterprise",Vc="NO_RECAPTCHA";class hg{constructor(e){this.type=dg,this.auth=_n(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Wp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vp(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ao(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Vc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ug().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ao(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ag();c.length!==0&&(c+=a),Bc(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Sn(t,e,n,r=!1,s=!1){const i=new hg(t);let o;if(s)o=Vc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Do(t,e,n,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Sn(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sn(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Sn(t,e,n);return r(t,a).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const l=await Sn(t,e,n,!1,!0);return r(t,l)}return Promise.reject(c)})}else{const a=await Sn(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(s+" provider is not supported.")}/**
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
 */function pg(t,e){const n=bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pn(i,e??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function gg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mg(t,e,n){const r=_n(t);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Wc(e),{host:o,port:a}=_g(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(pn(u,r.config.emulator)&&pn(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,s||vg()}function Wc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _g(t){const e=Wc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function yg(t,e){return xt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bg(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
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
 */async function Eg(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function wg(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
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
 */class Gn extends pi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,n,"signInWithPassword",bg,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Eg(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",yg,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ln(t,e){return Kr(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
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
 */const Ig="http://localhost";class $t extends pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=li(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:Ig,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
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
 */function Sg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tg(t){const e=Rn(Cn(t)).link,n=e?Rn(Cn(e)).deep_link_id:null,r=Rn(Cn(t)).deep_link_id;return(r?Rn(Cn(r)).link:null)||r||n||e||t}class gi{constructor(e){var n,r,s,i,o,a;const c=Rn(Cn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Sg((s=c.mode)!==null&&s!==void 0?s:null);L(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Tg(e);try{return new gi(n)}catch{return null}}}/**
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
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gi.parseLink(n);return L(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nr extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends nr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class yt extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
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
 */class bt extends nr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class Et extends nr{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await at._fromIdTokenResponse(e,r,s),o=Lo(r);return new mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Lo(r);return new mn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pr extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pr(e,n,r,s)}}function zc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(t,i,e,r):i})}async function Rg(t,e,n=!1){const r=await zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",r)}/**
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
 */async function Cg(t,e,n=!1){const{auth:r}=t;if(Xe(r.app))return Promise.reject(Rt(r));const s="reauthenticate";try{const i=await zn(t,zc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=di(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),mn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function Gc(t,e,n=!1){if(Xe(t.app))return Promise.reject(Rt(t));const r="signIn",s=await zc(t,r,e),i=await mn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ag(t,e){return Gc(_n(t),e)}/**
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
 */async function Pg(t){const e=_n(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Og(t,e,n){return Xe(t.app)?Promise.reject(Rt(t)):Ag(kt(t),vn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}function kg(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function xg(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function Ng(t){return kt(t).signOut()}const Or="__sak";/**
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
 */class qc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Dg=1e3,Mg=10;class Jc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jc.type="LOCAL";const Lg=Jc;/**
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
 */class Yc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yc.type="SESSION";const Xc=Yc;/**
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
 */function Ug(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Ug(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
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
 */function mi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=mi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function jg(t){Ze().location.href=t}/**
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
 */function Qc(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $g(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bg(){return Qc()?self:null}/**
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
 */const Zc="firebaseLocalStorageDb",Vg=1,kr="firebaseLocalStorage",el="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qr(t,e){return t.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function Wg(){const t=indexedDB.deleteDatabase(Zc);return new rr(t).toPromise()}function js(){const t=indexedDB.open(Zc,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kr,{keyPath:el})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kr)?e(r):(r.close(),await Wg(),e(await js()))})})}async function Uo(t,e,n){const r=qr(t,!0).put({[el]:e,value:n});return new rr(r).toPromise()}async function Kg(t,e){const n=qr(t,!1).get(e),r=await new rr(n).toPromise();return r===void 0?null:r.value}function Fo(t,e){const n=qr(t,!0).delete(e);return new rr(n).toPromise()}const zg=800,Gg=3;class tl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(Bg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hg(),!this.activeServiceWorker)return;this.sender=new Fg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await Uo(e,Or,"1"),await Fo(e,Or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Kg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qr(s,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tl.type="LOCAL";const qg=tl;new tr(3e4,6e4);/**
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
 */function Jg(t,e){return e?ct(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _i extends pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yg(t){return Gc(t.auth,new _i(t),t.bypassAuthState)}function Xg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Cg(n,new _i(t),t.bypassAuthState)}async function Qg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Rg(n,new _i(t),t.bypassAuthState)}/**
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
 */class nl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:Ke(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zg=new tr(2e3,1e4);class Zt extends nl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zg.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const em="pendingRedirect",mr=new Map;class tm extends nl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nm(t,e){const n=im(e),r=sm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rm(t,e){mr.set(t._key(),e)}function sm(t){return ct(t._redirectPersistence)}function im(t){return gr(em,t.config.apiKey,t.name)}async function om(t,e,n=!1){if(Xe(t.app))return Promise.reject(Rt(t));const r=_n(t),s=Jg(r,e),o=await new tm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const am=10*60*1e3;class cm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=am&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(e))}saveEventToCache(e){this.cachedEventUids.add(jo(e)),this.lastProcessedEventTime=Date.now()}}function jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rl(t);default:return!1}}/**
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
 */async function um(t,e={}){return xt(t,"GET","/v1/projects",e)}/**
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
 */const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dm=/^https?/;async function hm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await um(t);for(const n of e)try{if(pm(n))return}catch{}Ke(t,"unauthorized-domain")}function pm(t){const e=Us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dm.test(n))return!1;if(fm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gm=new tr(3e4,6e4);function Ho(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mm(t){return new Promise((e,n)=>{var r,s,i;function o(){Ho(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ho(),n(Qe(t,"network-request-failed"))},timeout:gm.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=lg("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Bc(`${cg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _r=null,e})}let _r=null;function _m(t){return _r=_r||mm(t),_r}/**
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
 */const vm=new tr(5e3,15e3),ym="__/auth/iframe",bm="emulator/auth/iframe",Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Im(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fi(e,bm):`https://${t.config.authDomain}/${ym}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=wm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zn(r).slice(1)}`}async function Sm(t){const e=await _m(t),n=Ze().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Im(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},vm.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Tm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Cm=600,Am="_blank",Pm="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Om(t,e,n,r=Rm,s=Cm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ye().toLowerCase();n&&(a=Mc(u)?Am:n),Nc(u)&&(e=e||Pm,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(Zp(u)&&a!=="_self")return km(e||"",a),new $o(null);const d=window.open(e||"",a,l);L(d,t,"popup-blocked");try{d.focus()}catch{}return new $o(d)}function km(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xm="__/auth/handler",Nm="emulator/auth/handler",Dm=encodeURIComponent("fac");async function Bo(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries(i||{}))o[l]=d}if(e instanceof nr){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Dm}=${encodeURIComponent(c)}`:"";return`${Mm(t)}?${Zn(a).slice(1)}${u}`}function Mm({config:t}){return t.emulator?fi(t,Nm):`https://${t.authDomain}/${xm}`}/**
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
 */const ms="webStorageSupport";class Lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xc,this._completeRedirectFn=om,this._overrideRedirectResult=rm}async _openPopup(e,n,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bo(e,n,r,Us(),s);return Om(e,o,mi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bo(e,n,r,Us(),s);return jg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sm(e),r=new cm(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ms,{type:ms},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ms];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hc()||Dc()||hi()}}const Um=Lm;var Vo="@firebase/auth",Wo="1.9.1";/**
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
 */class Fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hm(t){Wn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(t)},u=new ig(r,s,i,c);return gg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new gn("auth-internal",e=>{const n=_n(e.getProvider("auth").getImmediate());return(r=>new Fm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Vo,Wo,jm(t)),on(Vo,Wo,"esm2017")}/**
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
 */const $m=5*60,Bm=mc("authIdTokenMaxAge")||$m;let Ko=null;const Vm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bm)return;const s=n==null?void 0:n.token;Ko!==s&&(Ko=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wm(t=yp()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pg(t,{popupRedirectResolver:Um,persistence:[qg,Lg,Xc]}),r=mc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vm(i.toString());xg(n,o,()=>o(n.currentUser)),kg(n,a=>o(a))}}const s=ih("auth");return s&&mg(n,`http://${s}`),n}function Km(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}og({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Km().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hm("Browser");function zm(t){const e=un(t.currentUser),n=Ce(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const Hs=Wm(Np),{isAuthenticated:zo,user:Gm}=zm(Hs),vi=()=>({isAuthenticated:zo,user:Gm,login:async(n,r)=>(await Og(Hs,n,r),zo.value),logout:async()=>{await Ng(Hs),yi.push({name:"Home"})}}),qm={__name:"LoginPage",setup(t){const{login:e,logout:n}=vi(),r=Md(),s=uc(),i=un(""),o=un(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"SettingsPage"}):n()};return(c,u)=>(Ne(),Ve("form",{class:"m-10",onSubmit:u[2]||(u[2]=If(()=>{},["prevent"]))},[ue("div",null,[u[3]||(u[3]=ue("label",{for:"username",class:"block mb-2 font-bold"},"Username",-1)),Ri(ue("input",{id:"username","onUpdate:modelValue":u[0]||(u[0]=l=>i.value=l),type:"text",placeholder:"Username"},null,512),[[Qi,i.value]])]),ue("div",null,[u[4]||(u[4]=ue("label",{for:"password",class:"block mb-2 font-bold"},"Password",-1)),Ri(ue("input",{id:"password","onUpdate:modelValue":u[1]||(u[1]=l=>o.value=l),type:"password",placeholder:"Password"},null,512),[[Qi,o.value]])]),ue("button",{onClick:a,class:"bg-green-500 mt-4 px-4 py-2 hover:bg-green-900 hover:text-white"},"LOGIN")],32))}},sl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jm={};function Ym(t,e){return" Settings Page "}const Xm=sl(Jm,[["render",Ym]]),{isAuthenticated:Qm}=vi(),Zm=[{path:"/project5/",name:"Home",component:Jd},{path:"/project5/other",name:"Other",component:()=>kf(()=>import("./OtherPage-36c9e282.js"),[])},{path:"/project5/employees/:id",name:"CardDetail",component:Yd},{path:"/project5/login",name:"LoginPage",component:qm},{path:"/project5/settings",name:"SettingsPage",component:Xm,meta:{requiresAuth:!0}}],yi=Nd({history:Jf(),routes:Zm});yi.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Qm.value?n({name:"LoginPage",query:{redirect:t.fullPath}}):n()});const e_={class:"bg-slate-900 h-20 items-center text-white"},t_={key:0},n_={key:1},r_={__name:"NavMenu",setup(t){const{isAuthenticated:e,logout:n,user:r}=vi();return(s,i)=>{const o=ti("RouterLink");return Ne(),Ve("nav",e_,[oe(o,{to:{name:"Home"}},{default:Qt(()=>i[1]||(i[1]=[Jt("Home")])),_:1}),oe(o,{to:{name:"Other"}},{default:Qt(()=>i[2]||(i[2]=[Jt("Other")])),_:1}),oe(o,{to:{name:"SettingsPage"}},{default:Qt(()=>i[3]||(i[3]=[Jt("Settings")])),_:1}),je(e)?(Ne(),Ve("div",t_,[Jt(" Welcome "+wt(je(r).email)+" ",1),ue("button",{onClick:i[0]||(i[0]=(...a)=>je(n)&&je(n)(...a)),class:"rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700"},"LOGOUT")])):(Ne(),Ve("div",n_,[oe(o,{to:{name:"LoginPage"}},{default:Qt(()=>i[4]||(i[4]=[Jt("Login")])),_:1})]))])}}},s_=sl(r_,[["__scopeId","data-v-313904ec"]]),i_={__name:"App",setup(t){return(e,n)=>{const r=ti("RouterView");return Ne(),Ve(Re,null,[oe(s_),oe(r)],64)}}};Rf(i_).use(yi).mount("#app");export{sl as _,ue as a,Ve as c,Ne as o};
