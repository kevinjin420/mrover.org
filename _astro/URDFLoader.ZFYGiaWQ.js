var Wc={exports:{}},fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Sp(){if(Hh)return fr;Hh=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,i,s){var a=null;if(s!==void 0&&(a=""+s),i.key!==void 0&&(a=""+i.key),"key"in i){s={};for(var o in i)o!=="key"&&(s[o]=i[o])}else s=i;return i=s.ref,{$$typeof:r,type:n,key:a,ref:i!==void 0?i:null,props:s}}return fr.Fragment=e,fr.jsx=t,fr.jsxs=t,fr}var Wh;function Ap(){return Wh||(Wh=1,Wc.exports=Sp()),Wc.exports}var iM=Ap();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="181",wp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,Ul=1,Td=2,Ep=3,Cp=0,$l=1,Ed=2,Zn=3,jn=0,_n=1,Bn=2,Kn=0,rs=1,Fl=2,Ol=3,Bl=4,Cd=5,Ri=100,Rd=101,Id=102,Pd=103,Ld=104,Nd=200,Dd=201,Ud=202,Fd=203,uo=204,fo=205,Od=206,Bd=207,kd=208,zd=209,Vd=210,Gd=211,Hd=212,Wd=213,Xd=214,po=0,mo=1,xo=2,ls=3,go=4,_o=5,yo=6,vo=7,Qr=0,qd=1,Yd=2,pi=0,Jd=1,Zd=2,$d=3,Kd=4,jd=5,Qd=6,ef=7,kl="attached",tf="detached",tc=300,xi=301,Ni=302,Br=303,kr=304,nr=306,fi=1e3,hn=1001,zr=1002,tn=1003,Kl=1004,Rp=1004,Hs=1005,Ip=1005,Xt=1006,Ir=1007,Pp=1007,kn=1008,Lp=1008,Gn=1009,jl=1010,Ql=1011,qs=1012,nc=1013,gi=1014,An=1015,ms=1016,ic=1017,sc=1018,Ys=1020,eh=35902,th=35899,nh=1021,ih=1022,gn=1023,Js=1026,Zs=1027,rc=1028,ea=1029,ac=1030,oc=1031,Np=1032,cc=1033,Pr=33776,Lr=33777,Nr=33778,Dr=33779,bo=35840,Mo=35841,So=35842,Ao=35843,wo=36196,To=37492,Eo=37496,Co=37808,Ro=37809,Io=37810,Po=37811,Lo=37812,No=37813,Do=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,ko=37819,zo=37820,Vo=37821,Go=36492,Ho=36494,Wo=36495,Xo=36283,qo=36284,Yo=36285,Jo=36286,nf=2200,sf=2201,rf=2202,Vr=2300,Zo=2301,co=2302,ns=2400,is=2401,Gr=2402,lc=2500,sh=2501,Dp=0,Up=1,Fp=2,af=3200,of=3201,Op=3202,Bp=3203,Ui=0,cf=1,ui="",kt="srgb",hs="srgb-linear",Hr="linear",Lt="srgb",kp=0,es=7680,zp=7681,Vp=7682,Gp=7683,Hp=34055,Wp=34056,Xp=5386,qp=512,Yp=513,Jp=514,Zp=515,$p=516,Kp=517,jp=518,zl=519,lf=512,hf=513,uf=514,rh=515,df=516,ff=517,pf=518,mf=519,Wr=35044,Qp=35048,em=35040,tm=35045,nm=35049,im=35041,sm=35046,rm=35050,am=35042,om="100",Vl="300 es",Rn=2e3,$s=2001,cm={COMPUTE:"compute",RENDER:"render"},lm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},hm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function xf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const um={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ws(r,e){return new um[r](e)}function Xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gf(){const r=Xr("canvas");return r.style.display="block",r}const Xh={};let Di=null;function dm(r){Di=r}function fm(){return Di}function qr(...r){const e="THREE."+r.shift();Di?Di("log",e,...r):console.log(e,...r)}function Ie(...r){const e="THREE."+r.shift();Di?Di("warn",e,...r):console.warn(e,...r)}function ut(...r){const e="THREE."+r.shift();Di?Di("error",e,...r):console.error(e,...r)}function Ks(...r){const e=r.join(" ");e in Xh||(Xh[e]=!0,Ie(...r))}function pm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qh=1234567;const as=Math.PI/180,js=180/Math.PI;function In(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function ah(r,e){return(r%e+e)%e}function mm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function xm(r,e,t){return r!==e?(t-r)/(e-r):0}function Ur(r,e,t){return(1-t)*r+t*e}function gm(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))}function _m(r,e=1){return e-Math.abs(ah(r,e*2)-e)}function ym(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mm(r,e){return r+Math.random()*(e-r)}function Sm(r){return r*(.5-Math.random())}function Am(r){r!==void 0&&(qh=r);let e=qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wm(r){return r*as}function Tm(r){return r*js}function Em(r){return(r&r-1)===0&&r!==0}function Cm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Im(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*f,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gs={DEG2RAD:as,RAD2DEG:js,generateUUID:In,clamp:lt,euclideanModulo:ah,mapLinear:mm,inverseLerp:xm,lerp:Ur,damp:gm,pingpong:_m,smoothstep:ym,smootherstep:vm,randInt:bm,randFloat:Mm,randFloatSpread:Sm,seededRandom:Am,degToRad:wm,radToDeg:Tm,isPowerOfTwo:Em,ceilPowerOfTwo:Cm,floorPowerOfTwo:Rm,setQuaternionFromProperEuler:Im,normalize:pt,denormalize:xn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],g=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==m){let x=c*d+l*f+h*m+u*g;x<0&&(d=-d,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const y=Math.acos(x),_=Math.sin(y);p=Math.sin(p*y)/_,o=Math.sin(o*y)/_,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+g*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+g*o;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new U,Yh=new nn;class ft{constructor(e,t,n,i,s,a,o,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],x=i[3],p=i[6],y=i[1],_=i[4],A=i[7],C=i[2],w=i[5],L=i[8];return s[0]=a*g+o*y+c*C,s[3]=a*x+o*_+c*w,s[6]=a*p+o*A+c*L,s[1]=l*g+h*y+u*C,s[4]=l*x+h*_+u*w,s[7]=l*p+h*A+u*L,s[2]=d*g+f*y+m*C,s[5]=d*x+f*_+m*w,s[8]=d*p+f*A+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new ft,Jh=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pm(){const r={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Lt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Hr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hs]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Jh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:Jh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),r}const yt=Pm();function mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class _f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Xr("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lm=0;class Ii{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yc(i[a].image)):s.push(Yc(i[a]))}else s=Yc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_f.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Nm=0;const Jc=new U;class Ht extends ti{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=hn,i=hn,s=Xt,a=kn,o=gn,c=Gn,l=Ht.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=In(),this.name="",this.source=new Ii(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=tc;Ht.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],g=c[2],x=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+x)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,A=(f+1)/2,C=(p+1)/2,w=(h+d)/4,L=(u+g)/4,N=(m+x)/4;return _>A&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=L/n):A>C?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=w/i,s=N/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=L/s,i=N/s),this.set(n,i,s,t),this}let y=Math.sqrt((x-m)*(x-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ht(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ii(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hc extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new hc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class uc extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Um extends Qn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new uc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class un{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ma.subVectors(this.max,pr),bs.subVectors(e.a,pr),Ms.subVectors(e.b,pr),Ss.subVectors(e.c,pr),vi.subVectors(Ms,bs),bi.subVectors(Ss,Ms),zi.subVectors(bs,Ss);let t=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,bi.z,0,-bi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-zi.y,zi.x,0];return!Zc(t,bs,Ms,Ss,ma)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,bs,Ms,Ss,ma))?!1:(xa.crossVectors(vi,bi),t=[xa.x,xa.y,xa.z],Zc(t,bs,Ms,Ss,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,pa=new un,bs=new U,Ms=new U,Ss=new U,vi=new U,bi=new U,zi=new U,pr=new U,ma=new U,xa=new U,Vi=new U;function Zc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vi.fromArray(r,s);const o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Fm=new un,mr=new U,$c=new U;class sn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add($c)),this.expandByPoint(mr.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new U,Kc=new U,ga=new U,Mi=new U,jc=new U,_a=new U,Qc=new U;class ir{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kc.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Kc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ga),o=Mi.dot(this.direction),c=-Mi.dot(ga),l=Mi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kc).addScaledVector(ga,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,i,s){jc.subVectors(t,e),_a.subVectors(n,e),Qc.crossVectors(jc,_a);let a=this.direction.dot(Qc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const c=o*this.direction.dot(_a.crossVectors(Mi,_a));if(c<0)return null;const l=o*this.direction.dot(jc.cross(Mi));if(l<0||c+l>a)return null;const h=-o*Mi.dot(Qc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,m,g,x){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,g,x)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Bm)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Si.crossVectors(n,En),Si.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Si.crossVectors(n,En)),Si.normalize(),ya.crossVectors(En,Si),i[0]=Si.x,i[4]=ya.x,i[8]=En.x,i[1]=Si.y,i[5]=ya.y,i[9]=En.y,i[2]=Si.z,i[6]=ya.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],_=n[7],A=n[11],C=n[15],w=i[0],L=i[4],N=i[8],b=i[12],M=i[1],O=i[5],B=i[9],G=i[13],J=i[2],Z=i[6],z=i[10],ne=i[14],q=i[3],ie=i[7],ce=i[11],xe=i[15];return s[0]=a*w+o*M+c*J+l*q,s[4]=a*L+o*O+c*Z+l*ie,s[8]=a*N+o*B+c*z+l*ce,s[12]=a*b+o*G+c*ne+l*xe,s[1]=h*w+u*M+d*J+f*q,s[5]=h*L+u*O+d*Z+f*ie,s[9]=h*N+u*B+d*z+f*ce,s[13]=h*b+u*G+d*ne+f*xe,s[2]=m*w+g*M+x*J+p*q,s[6]=m*L+g*O+x*Z+p*ie,s[10]=m*N+g*B+x*z+p*ce,s[14]=m*b+g*G+x*ne+p*xe,s[3]=y*w+_*M+A*J+C*q,s[7]=y*L+_*O+A*Z+C*ie,s[11]=y*N+_*B+A*z+C*ce,s[15]=y*b+_*G+A*ne+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+x*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=u*x*l-g*d*l+g*c*f-o*x*f-u*c*p+o*d*p,_=m*d*l-h*x*l-m*c*f+a*x*f+h*c*p-a*d*p,A=h*g*l-m*u*l+m*o*f-a*g*f-h*o*p+a*u*p,C=m*u*c-h*g*c-m*o*d+a*g*d+h*o*x-a*u*x,w=t*y+n*_+i*A+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/w;return e[0]=y*L,e[1]=(g*d*s-u*x*s-g*i*f+n*x*f+u*i*p-n*d*p)*L,e[2]=(o*x*s-g*c*s+g*i*l-n*x*l-o*i*p+n*c*p)*L,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*L,e[4]=_*L,e[5]=(h*x*s-m*d*s+m*i*f-t*x*f-h*i*p+t*d*p)*L,e[6]=(m*c*s-a*x*s-m*i*l+t*x*l+a*i*p-t*c*p)*L,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*L,e[8]=A*L,e[9]=(m*u*s-h*g*s-m*n*f+t*g*f+h*n*p-t*u*p)*L,e[10]=(a*g*s-m*o*s+m*n*l-t*g*l-a*n*p+t*o*p)*L,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*L,e[12]=C*L,e[13]=(h*g*i-m*u*i+m*n*d-t*g*d-h*n*x+t*u*x)*L,e[14]=(m*o*i-a*g*i-m*n*c+t*g*c+a*n*x-t*o*x)*L,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,m=s*u,g=a*h,x=a*u,p=o*u,y=c*l,_=c*h,A=c*u,C=n.x,w=n.y,L=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+A)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(f-A)*w,i[5]=(1-(d+p))*w,i[6]=(x+y)*w,i[7]=0,i[8]=(m+_)*L,i[9]=(x-y)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=As.set(i[0],i[1],i[2]).length();const a=As.set(i[4],i[5],i[6]).length(),o=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const l=1/s,h=1/a,u=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Rn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(c)m=s/(a-s),g=a*s/(a-s);else if(o===Rn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$s)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Rn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,g;if(c)m=1/(a-s),g=a/(a-s);else if(o===Rn)m=-2/(a-s),g=-(a+s)/(a-s);else if(o===$s)m=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new U,Un=new $e,Om=new U(0,0,0),Bm=new U(1,1,1),Si=new U,ya=new U,En=new U,$h=new $e,Kh=new nn;class yn{constructor(e=0,t=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const jh=new U,ws=new nn,ai=new $e,va=new U,xr=new U,zm=new U,Vm=new nn,Qh=new U(1,0,0),eu=new U(0,1,0),tu=new U(0,0,1),nu={type:"added"},Gm={type:"removed"},Ts={type:"childadded",child:null},el={type:"childremoved",child:null};class bt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,t=new yn,n=new nn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new ft}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(xr,va,this.up):ai.lookAt(va,xr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ai),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new U,oi=new U,tl=new U,ci=new U,Es=new U,Cs=new U,iu=new U,nl=new U,il=new U,sl=new U,rl=new At,al=new At,ol=new At;class Sn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fn.subVectors(i,t),oi.subVectors(n,t),tl.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(oi),c=Fn.dot(tl),l=oi.dot(oi),h=oi.dot(tl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return rl.setScalar(0),al.setScalar(0),ol.setScalar(0),rl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),ol.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(al,s.y),a.addScaledVector(ol,s.z),a}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),oi.subVectors(e,t),Fn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Es.subVectors(i,n),Cs.subVectors(s,n),nl.subVectors(e,n);const c=Es.dot(nl),l=Cs.dot(nl);if(c<=0&&l<=0)return t.copy(n);il.subVectors(e,i);const h=Es.dot(il),u=Cs.dot(il);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Es,a);sl.subVectors(e,s);const f=Es.dot(sl),m=Cs.dot(sl);if(m>=0&&f<=m)return t.copy(s);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Cs,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return iu.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(iu,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Es,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ba={h:0,s:0,l:0};function cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=ah(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=cl(a,s,e+1/3),this.g=cl(a,s,e),this.b=cl(a,s,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return yt.workingToColorSpace(cn.copy(this),e),Math.round(lt(cn.r*255,0,255))*65536+Math.round(lt(cn.g*255,0,255))*256+Math.round(lt(cn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,s=cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=kt){yt.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ba);const n=Ur(Ai.h,ba.h,t),i=Ur(Ai.s,ba.s,t),s=Ur(Ai.l,ba.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new De;De.NAMES=yf;let Hm=0;class dn extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=In(),this.name="",this.type="Material",this.blending=rs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const di=Wm();function Wm(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Mn(r){Math.abs(r)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),r=lt(r,-65504,65504),di.floatView[0]=r;const e=di.uint32View[0],t=e>>23&511;return di.baseTable[t]+((e&8388607)>>di.shiftTable[t])}function Er(r){const e=r>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[e]+(r&1023)]+di.exponentTable[e],di.floatView[0]}class Xm{static toHalfFloat(e){return Mn(e)}static fromHalfFloat(e){return Er(e)}}const Yt=new U,Ma=new re;let qm=0;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wr,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wr&&(e.usage=this.usage),e}}class Ym extends Ct{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Jm extends Ct{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Zm extends Ct{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class $m extends Ct{constructor(e,t,n){super(new Int16Array(e),t,n)}}class ch extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends Ct{constructor(e,t,n){super(new Int32Array(e),t,n)}}class lh extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jm extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Er(this.array[e*this.itemSize]);return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Mn(t),this}getY(e){let t=Er(this.array[e*this.itemSize+1]);return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Mn(t),this}getZ(e){let t=Er(this.array[e*this.itemSize+2]);return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Mn(t),this}getW(e){let t=Er(this.array[e*this.itemSize+3]);return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Mn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Mn(t),this.array[e+1]=Mn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=Mn(t),this.array[e+1]=Mn(n),this.array[e+2]=Mn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=Mn(t),this.array[e+1]=Mn(n),this.array[e+2]=Mn(i),this.array[e+3]=Mn(s),this}}class Pe extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qm=0;const Pn=new $e,ll=new bt,Rs=new U,Cn=new un,gr=new un,jt=new U;class dt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?lh:ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Cn.min,gr.min),Cn.expandByPoint(jt),jt.addVectors(Cn.max,gr.max),Cn.expandByPoint(jt)):(Cn.expandByPoint(gr.min),Cn.expandByPoint(gr.max))}Cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(Rs.fromBufferAttribute(e,l),jt.add(Rs)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new U,c[N]=new U;const l=new U,h=new U,u=new U,d=new re,f=new re,m=new re,g=new U,x=new U;function p(N,b,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const O=1/(f.x*m.y-m.x*f.y);isFinite(O)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(O),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(O),o[N].add(g),o[b].add(g),o[M].add(g),c[N].add(x),c[b].add(x),c[M].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,b=y.length;N<b;++N){const M=y[N],O=M.start,B=M.count;for(let G=O,J=O+B;G<J;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const _=new U,A=new U,C=new U,w=new U;function L(N){C.fromBufferAttribute(i,N),w.copy(C);const b=o[N];_.copy(b),_.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(w,b);const O=A.dot(c[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,O)}for(let N=0,b=y.length;N<b;++N){const M=y[N],O=M.start,B=M.count;for(let G=O,J=O+B;G<J;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new $e,Gi=new ir,Sa=new sn,ru=new U,Aa=new U,wa=new U,Ta=new U,hl=new U,Ea=new U,au=new U,Ca=new U;class Ot extends bt{constructor(e=new dt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(hl.fromBufferAttribute(u,e),a?Ea.addScaledVector(hl,h):Ea.addScaledVector(hl.sub(t),h))}t.add(Ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Sa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Sa,ru)===null||Gi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let A=y,C=_;A<C;A+=3){const w=o.getX(A),L=o.getX(A+1),N=o.getX(A+2);i=Ra(this,p,e,n,l,h,u,w,L,N),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),A=o.getX(x+2);i=Ra(this,a,e,n,l,h,u,y,_,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let A=y,C=_;A<C;A+=3){const w=A,L=A+1,N=A+2;i=Ra(this,p,e,n,l,h,u,w,L,N),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=x,_=x+1,A=x+2;i=Ra(this,a,e,n,l,h,u,y,_,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function e0(r,e,t,n,i,s,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===jn,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:r}}function Ra(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Aa),r.getVertexPosition(c,wa),r.getVertexPosition(l,Ta);const h=e0(r,e,t,n,Aa,wa,Ta,au);if(h){const u=new U;Sn.getBarycoord(au,Aa,wa,Ta,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,c,l,u,new re)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,c,l,u,new re)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};Sn.getNormal(Aa,wa,Ta,d.normal),h.face=d,h.barycoord=u}return h}class Fi extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function m(g,x,p,y,_,A,C,w,L,N,b){const M=A/L,O=C/N,B=A/2,G=C/2,J=w/2,Z=L+1,z=N+1;let ne=0,q=0;const ie=new U;for(let ce=0;ce<z;ce++){const xe=ce*O-G;for(let Oe=0;Oe<Z;Oe++){const we=Oe*M-B;ie[g]=we*y,ie[x]=xe*_,ie[p]=J,l.push(ie.x,ie.y,ie.z),ie[g]=0,ie[x]=0,ie[p]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Oe/L),u.push(1-ce/N),ne+=1}}for(let ce=0;ce<N;ce++)for(let xe=0;xe<L;xe++){const Oe=d+xe+Z*ce,we=d+xe+Z*(ce+1),Te=d+(xe+1)+Z*(ce+1),be=d+(xe+1)+Z*ce;c.push(Oe,we,be),c.push(we,Te,be),q+=6}o.addGroup(f,q,b),f+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function t0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const bf={clone:Qs,merge:mn};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new U,ou=new re,cu=new re;class Jt extends fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,ou,cu),t.subVectors(cu,ou)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ps=1;class Mf extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(Is,Ps,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Is,Ps,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Is,Ps,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Is,Ps,e,t);o.layers=this.layers,this.add(o);const c=new Jt(Is,Ps,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Is,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ta extends Ht{constructor(e=[],t=xi,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sf extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ta(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fi(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Kn});s.uniforms.tEquirect.value=t;const a=new Ot(i,s),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=Xt),new Mf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Pi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(l,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hh extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wr,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new U;class us{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uh extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ls;const _r=new U,Ns=new U,Ds=new U,Us=new re,yr=new re,Af=new $e,Ia=new U,vr=new U,Pa=new U,lu=new re,ul=new re,hu=new re;class wf extends bt{constructor(e=new uh){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new us(n,3,0,!1)),Ls.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Ds.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;La(Ia.set(-.5,-.5,0),Ds,a,Ns,i,s),La(vr.set(.5,-.5,0),Ds,a,Ns,i,s),La(Pa.set(.5,.5,0),Ds,a,Ns,i,s),lu.set(0,0),ul.set(1,0),hu.set(1,1);let o=e.ray.intersectTriangle(Ia,vr,Pa,!1,_r);if(o===null&&(La(vr.set(-.5,.5,0),Ds,a,Ns,i,s),ul.set(0,1),o=e.ray.intersectTriangle(Ia,Pa,vr,!1,_r),o===null))return;const c=e.ray.origin.distanceTo(_r);c<e.near||c>e.far||t.push({distance:c,point:_r.clone(),uv:Sn.getInterpolation(_r,Ia,vr,Pa,lu,ul,hu,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function La(r,e,t,n,i,s){Us.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(yr.x=s*Us.x-i*Us.y,yr.y=i*Us.x+s*Us.y):yr.copy(Us),r.copy(e),r.x+=yr.x,r.y+=yr.y,r.applyMatrix4(Af)}const Na=new U,uu=new U;class Tf extends bt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Na.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Na);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Na.setFromMatrixPosition(e.matrixWorld),uu.setFromMatrixPosition(this.matrixWorld);const n=Na.distanceTo(uu)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const du=new U,fu=new At,pu=new At,r0=new U,mu=new $e,Da=new U,dl=new sn,xu=new $e,fl=new ir;class dh extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(i),e.ray.intersectsSphere(dl)!==!1&&(xu.copy(i).invert(),fl.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fu.fromBufferAttribute(i.attributes.skinIndex,e),pu.fromBufferAttribute(i.attributes.skinWeight,e),du.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=pu.getComponent(s);if(a!==0){const o=fu.getComponent(s);mu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(r0.copy(du).applyMatrix4(mu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gc extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vn extends Ht{constructor(e=null,t=1,n=1,i,s,a,o,c,l=tn,h=tn,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new $e,a0=new $e;class na{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:a0;gu.multiplyMatrices(o,t[s]),gu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vn(t,e,e,gn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ie("Skeleton: No bone found with UUID:",s),a=new gc),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class er extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new $e,_u=new $e,Ua=[],yu=new un,o0=new $e,br=new Ot,Mr=new sn;class Ef extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,o0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),yu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(yu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Mr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fs),_u.multiplyMatrices(n,Fs),br.matrixWorld=_u,br.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){const c=Ua[a];c.instanceId=s,c.object=this,t.push(c)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vn(new Float32Array(i*this.count),i,this.count,rc,An));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pl=new U,c0=new U,l0=new ft;class Ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pl.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l0.getNormalMatrix(e),i=this.coplanarPoint(pl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new sn,h0=new re(.5,.5),Fa=new U;class sr{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],y=s[12],_=s[13],A=s[14],C=s[15];if(i[0].setComponents(l-a,f-h,p-m,C-y).normalize(),i[1].setComponents(l+a,f+h,p+m,C+y).normalize(),i[2].setComponents(l+o,f+u,p+g,C+_).normalize(),i[3].setComponents(l-o,f-u,p-g,C-_).normalize(),n)i[4].setComponents(c,d,x,A).normalize(),i[5].setComponents(l-c,f-d,p-x,C-A).normalize();else if(i[4].setComponents(l-c,f-d,p-x,C-A).normalize(),t===Rn)i[5].setComponents(l+c,f+d,p+x,C+A).normalize();else if(t===$s)i[5].setComponents(c,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=h0.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fa.x=i.normal.x>0?e.max.x:e.min.x,Fa.y=i.normal.y>0?e.max.y:e.min.y,Fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Yn=new $e,Jn=new sr;class _c{constructor(){this.coordinateSystem=Rn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Jn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Jn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Jn.containsPoint(e))return!0}return!1}clone(){return new _c}}function ml(r,e){return r-e}function u0(r,e){return r.z-e.z}function d0(r,e){return e.z-r.z}class f0{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const bn=new $e,p0=new De(1,1,1),vu=new sr,m0=new _c,Oa=new un,Wi=new sn,Sr=new U,bu=new U,x0=new U,xl=new f0,ln=new Ot,Ba=[];function g0(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Xi(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Cf extends Ot{constructor(e,t,n=t*2,i){super(new dt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Vn(t,e,e,gn,An);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Vn(t,e,e,ea,gi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Vn(t,e,e,gn,An);n.colorSpace=yt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new Ct(h,c,l);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ct(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,bn),this.getBoundingBoxAt(s,Oa).applyMatrix4(bn),e.union(Oa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,bn),this.getBoundingSphereAt(s,Wi).applyMatrix4(bn),e.union(Wi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ml),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;bn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(p0.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ml),c=this._availableGeometryIds.shift(),s[c]=i):(c=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);g0(u,d,c);const f=u.itemSize;for(let m=u.count,g=l;m<g;m++){const x=c+m;for(let p=0;p<f;p++)d.setComponent(x,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)s.setX(h+d,c+a.getX(d));for(let d=a.count,f=u;d<f;d++)s.setX(h+d,c);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),s=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=s.index,m=f.array,g=e-u;for(let x=h;x<h+d;x++)m[x]=m[x]+g;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=s.attributes;for(const f in d){const m=d[f],{array:g,itemSize:x}=m;g.copyWithin(e*x,h*x,(h+u)*x),m.addUpdateRange(e*x,u*x)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new un,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),s.expandByPoint(Sr.fromBufferAttribute(o,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new sn;this.getBoundingBoxAt(e,Oa),Oa.getCenter(s.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;a&&(u=a.getX(u)),Sr.fromBufferAttribute(o,u),c=Math.max(c,s.center.distanceToSquared(Sr))}s.radius=Math.sqrt(c),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(ml);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Xi(this._multiDrawCounts,i),Xi(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Xi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Xi(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Xi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dt,this._initializeGeometry(s));const a=this.geometry;s.index&&Xi(s.index.array,a.index.array);for(const o in s.attributes)Xi(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,a=this.geometry;ln.material=this.material,ln.geometry.index=a.index,ln.geometry.attributes=a.attributes,ln.geometry.boundingBox===null&&(ln.geometry.boundingBox=new un),ln.geometry.boundingSphere===null&&(ln.geometry.boundingSphere=new sn);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];ln.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,ln.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,ln.geometry.boundingBox),this.getBoundingSphereAt(l,ln.geometry.boundingSphere),ln.raycast(e,Ba);for(let u=0,d=Ba.length;u<d;u++){const f=Ba[u];f.object=this,f.batchId=o,t.push(f)}Ba.length=0}ln.material=null,ln.geometry.index=null,ln.geometry.attributes={},ln.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,g=n.isArrayCamera?m0:vu;d&&!n.isArrayCamera&&(bn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vu.setFromProjectionMatrix(bn,n.coordinateSystem,n.reversedDepth));let x=0;if(this.sortObjects){bn.copy(this.matrixWorld).invert(),Sr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(bn),bu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(bn);for(let _=0,A=c.length;_<A;_++)if(c[_].visible&&c[_].active){const C=c[_].geometryIndex;this.getMatrixAt(_,bn),this.getBoundingSphereAt(C,Wi).applyMatrix4(bn);let w=!1;if(d&&(w=!g.intersectsSphere(Wi,n)),!w){const L=u[C],N=x0.subVectors(Wi.center,Sr).dot(bu);xl.push(L.start,L.count,N,_)}}const p=xl.list,y=this.customSort;y===null?p.sort(s.transparent?d0:u0):y.call(this,p,n);for(let _=0,A=p.length;_<A;_++){const C=p[_];l[x]=C.start*o,h[x]=C.count,m[x]=C.index,x++}xl.reset()}else for(let p=0,y=c.length;p<y;p++)if(c[p].visible&&c[p].active){const _=c[p].geometryIndex;let A=!1;if(d&&(this.getMatrixAt(p,bn),this.getBoundingSphereAt(_,Wi).applyMatrix4(bn),A=!g.intersectsSphere(Wi,n)),!A){const C=u[_];l[x]=C.start*o,h[x]=C.count,m[x]=p,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class rn extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new U,Ko=new U,Mu=new $e,Ar=new ir,ka=new sn,gl=new U,Su=new U;class _i extends bt{constructor(e=new dt,t=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$o.fromBufferAttribute(t,i-1),Ko.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Ko);e.setAttribute("lineDistance",new Pe(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;Mu.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(Mu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=h.getX(g),y=h.getX(g+1),_=za(this,e,Ar,c,p,y,g);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(m-1),x=h.getX(f),p=za(this,e,Ar,c,g,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=za(this,e,Ar,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=za(this,e,Ar,c,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function za(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if($o.fromBufferAttribute(o,i),Ko.fromBufferAttribute(o,s),t.distanceSqToSegment($o,Ko,gl,Su)>n)return;gl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(gl);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Au=new U,wu=new U;class Wn extends _i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Au.fromBufferAttribute(t,i),wu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Au.distanceTo(wu);e.setAttribute("lineDistance",new Pe(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rf extends _i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fh extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new $e,Gl=new ir,Va=new sn,Ga=new U;class If extends bt{constructor(e=new dt,t=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Tu.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(Tu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const x=l.getX(m);Ga.fromBufferAttribute(u,x),Eu(Ga,x,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)Ga.fromBufferAttribute(u,m),Eu(Ga,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Eu(r,e,t,n,i,s,a){const o=Gl.distanceSqToPoint(r);if(o<t){const c=new U;Gl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pf extends Ht{constructor(e,t,n,i,s=Xt,a=Xt,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class _0 extends Pf{constructor(e,t,n,i,s,a,o,c){super({},e,t,n,i,s,a,o,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class y0 extends Ht{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=tn,this.minFilter=tn,this.generateMipmaps=!1,this.needsUpdate=!0}}class yc extends Ht{constructor(e,t,n,i,s,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class v0 extends yc{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=hn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b0 extends yc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,xi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class M0 extends Ht{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ph extends Ht{constructor(e,t,n=gi,i,s,a,o=tn,c=tn,l,h=Js,u=1){if(h!==Js&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ii(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mh extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vc extends dt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,g=i+1,x=new U,p=new U;for(let y=0;y<=m;y++){let _=0,A=0,C=0,w=0;if(y<=n){const b=y/n,M=b*Math.PI/2;A=-h-e*Math.cos(M),C=e*Math.sin(M),w=-e*Math.cos(M),_=b*u}else if(y<=n+s){const b=(y-n)/s;A=-h+b*t,C=e,w=0,_=u+b*d}else{const b=(y-n-s)/n,M=b*Math.PI/2;A=h+e*Math.sin(M),C=e*Math.cos(M),w=e*Math.sin(M),_=u+d+b*u}const L=Math.max(0,Math.min(1,_/f));let N=0;y===0?N=.5/i:y===m&&(N=-.5/i);for(let b=0;b<=i;b++){const M=b/i,O=M*Math.PI*2,B=Math.sin(O),G=Math.cos(O);p.x=-C*G,p.y=A,p.z=C*B,o.push(p.x,p.y,p.z),x.set(-C*G,w,C*B),x.normalize(),c.push(x.x,x.y,x.z),l.push(M+N,L)}if(y>0){const b=(y-1)*g;for(let M=0;M<i;M++){const O=b+M,B=b+M+1,G=y*g+M,J=y*g+M+1;a.push(O,B,G),a.push(B,J,G)}}}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bc extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new U,h=new re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rr extends dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const g=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function y(){const A=new U,C=new U;let w=0;const L=(t-e)/n;for(let N=0;N<=s;N++){const b=[],M=N/s,O=M*(t-e)+e;for(let B=0;B<=i;B++){const G=B/i,J=G*c+o,Z=Math.sin(J),z=Math.cos(J);C.x=O*Z,C.y=-M*n+x,C.z=O*z,u.push(C.x,C.y,C.z),A.set(Z,L,z).normalize(),d.push(A.x,A.y,A.z),f.push(G,1-M),b.push(m++)}g.push(b)}for(let N=0;N<i;N++)for(let b=0;b<s;b++){const M=g[b][N],O=g[b+1][N],B=g[b+1][N+1],G=g[b][N+1];(e>0||b!==0)&&(h.push(M,O,G),w+=3),(t>0||b!==s-1)&&(h.push(O,B,G),w+=3)}l.addGroup(p,w,0),p+=w}function _(A){const C=m,w=new re,L=new U;let N=0;const b=A===!0?e:t,M=A===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,x*M,0),d.push(0,M,0),f.push(.5,.5),m++;const O=m;for(let B=0;B<=i;B++){const J=B/i*c+o,Z=Math.cos(J),z=Math.sin(J);L.x=b*z,L.y=x*M,L.z=b*Z,u.push(L.x,L.y,L.z),d.push(0,M,0),w.x=Z*.5+.5,w.y=z*.5*M+.5,f.push(w.x,w.y),m++}for(let B=0;B<i;B++){const G=C+B,J=O+B;A===!0?h.push(J,J+1,G):h.push(J+1,J,G),N+=3}l.addGroup(p,N,A===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends rr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new U,A=new U,C=new U;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],A),f(t[w+2],C),c(_,A,C,y)}function c(y,_,A,C){const w=C+1,L=[];for(let N=0;N<=w;N++){L[N]=[];const b=y.clone().lerp(A,N/w),M=_.clone().lerp(A,N/w),O=w-N;for(let B=0;B<=O;B++)B===0&&N===w?L[N][B]=b:L[N][B]=b.clone().lerp(M,B/O)}for(let N=0;N<w;N++)for(let b=0;b<2*(w-N)-1;b++){const M=Math.floor(b/2);b%2===0?(d(L[N][M+1]),d(L[N+1][M]),d(L[N][M])):(d(L[N][M+1]),d(L[N+1][M+1]),d(L[N+1][M]))}}function l(y){const _=new U;for(let A=0;A<s.length;A+=3)_.x=s[A+0],_.y=s[A+1],_.z=s[A+2],_.normalize().multiplyScalar(y),s[A+0]=_.x,s[A+1]=_.y,s[A+2]=_.z}function h(){const y=new U;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const A=x(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(A,1-C)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],A=a[y+2],C=a[y+4],w=Math.max(_,A,C),L=Math.min(_,A,C);w>.9&&L<.1&&(_<.2&&(a[y+0]+=1),A<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){const A=y*3;_.x=e[A+0],_.y=e[A+1],_.z=e[A+2]}function m(){const y=new U,_=new U,A=new U,C=new U,w=new re,L=new re,N=new re;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),A.set(s[b+6],s[b+7],s[b+8]),w.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),C.copy(y).add(_).add(A).divideScalar(3);const O=x(C);g(w,M+0,y,O),g(L,M+2,_,O),g(N,M+4,A,O)}}function g(y,_,A,C){C<0&&y.x===1&&(a[_]=y.x-1),A.x===0&&A.z===0&&(a[_]=C/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.vertices,e.indices,e.radius,e.details)}}class Mc extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mc(e.radius,e.detail)}}const Ha=new U,Wa=new U,_l=new U,Xa=new Sn;class Lf extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(as*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:g,b:x,c:p}=Xa;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Xa.getNormal(_l),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,A=u[y],C=u[_],w=Xa[h[y]],L=Xa[h[_]],N=`${A}_${C}`,b=`${C}_${A}`;b in d&&d[b]?(_l.dot(d[b].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(L.x,L.y,L.z)),d[b]=null):N in d||(d[N]={index0:l[y],index1:l[_],normal:_l.clone()})}}for(const m in d)if(d[m]){const{index0:g,index1:x}=d[m];Ha.fromBufferAttribute(o,g),Wa.fromBufferAttribute(o,x),f.push(Ha.x,Ha.y,Ha.z),f.push(Wa.x,Wa.y,Wa.z)}this.setAttribute("position",new Pe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new re:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],a=[],o=new U,c=new $e;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(lt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(lt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sc extends Xn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nf extends Sc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xh(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const qa=new U,yl=new xh,vl=new xh,bl=new xh;class Df extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(qa.subVectors(i[0],i[1]).add(i[0]),l=qa);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(qa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),yl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,x),vl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,x),bl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,x)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),vl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),bl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(yl.calc(c),vl.calc(c),bl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function S0(r,e){const t=1-r;return t*t*e}function A0(r,e){return 2*(1-r)*r*e}function w0(r,e){return r*r*e}function Fr(r,e,t,n){return S0(r,e)+A0(r,t)+w0(r,n)}function T0(r,e){const t=1-r;return t*t*t*e}function E0(r,e){const t=1-r;return 3*t*t*r*e}function C0(r,e){return 3*(1-r)*r*r*e}function R0(r,e){return r*r*r*e}function Or(r,e,t,n,i){return T0(r,e)+E0(r,t)+C0(r,n)+R0(r,i)}class gh extends Xn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,i.x,s.x,a.x,o.x),Or(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uf extends Xn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,i.x,s.x,a.x,o.x),Or(e,i.y,s.y,a.y,o.y),Or(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _h extends Xn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends Xn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends Xn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,i.x,s.x,a.x),Fr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends Xn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,i.x,s.x,a.x),Fr(e,i.y,s.y,a.y),Fr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Cu(o,c.x,l.x,h.x,u.x),Cu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var jo=Object.freeze({__proto__:null,ArcCurve:Nf,CatmullRomCurve3:Df,CubicBezierCurve:gh,CubicBezierCurve3:Uf,EllipseCurve:Sc,LineCurve:_h,LineCurve3:Ff,QuadraticBezierCurve:yh,QuadraticBezierCurve3:vh,SplineCurve:bh});class Of extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new jo[i.type]().fromJSON(i))}return this}}class Qo extends Of{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _h(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new yh(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new gh(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Sc(e,t,n,i,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class os extends Qo{constructor(e){super(e),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qo().fromJSON(i))}return this}}function I0(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Bf(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=U0(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,u=c;for(let d=t;d<i;d+=t){const f=r[d],m=r[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Yr(s,a,t,o,c,l,0),a}function Bf(r,e,t,n,i){let s;if(i===q0(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Ru(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Ru(a/n|0,r[a],r[a+1],s);return s&&tr(s,s.next)&&(Zr(s),s=s.next),s}function ds(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&z0(r,n,i,s);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?L0(r,n,i,s):P0(r)){e.push(c.i,r.i,l.i),Zr(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=N0(ds(r),e),Yr(r,e,t,n,i,s,2)):a===2&&D0(r,e,t,n,i,s):Yr(ds(r),e,t,n,i,s,1);break}}}function P0(r){const e=r.prev,t=r,n=r.next;if(Vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),d=Math.max(i,s,a),f=Math.max(o,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Cr(i,o,s,c,a,l,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function L0(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Vt(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),g=Math.max(o,c,l),x=Math.max(h,u,d),p=Hl(f,m,e,t,n),y=Hl(g,x,e,t,n);let _=r.prevZ,A=r.nextZ;for(;_&&_.z>=p&&A&&A.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Cr(o,h,c,u,l,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=f&&A.x<=g&&A.y>=m&&A.y<=x&&A!==i&&A!==a&&Cr(o,h,c,u,l,d,A.x,A.y)&&Vt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Cr(o,h,c,u,l,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=y;){if(A.x>=f&&A.x<=g&&A.y>=m&&A.y<=x&&A!==i&&A!==a&&Cr(o,h,c,u,l,d,A.x,A.y)&&Vt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function N0(r,e){let t=r;do{const n=t.prev,i=t.next.next;!tr(n,i)&&zf(n,t,t.next,i)&&Jr(n,i)&&Jr(i,n)&&(e.push(n.i,t.i,i.i),Zr(t),Zr(t.next),t=r=i),t=t.next}while(t!==r);return ds(t)}function D0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H0(a,o)){let c=Vf(a,o);a=ds(a,a.next),c=ds(c,c.next),Yr(a,e,t,n,i,s,0),Yr(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function U0(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=Bf(r,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(G0(l))}i.sort(F0);for(let s=0;s<i.length;s++)t=O0(i[s],t);return t}function F0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function O0(r,e){const t=B0(r,e);if(!t)return e;const n=Vf(t,r);return ds(n,n.next),ds(t,t.next)}function B0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(tr(r,t))return t;do{if(tr(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&kf(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Jr(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&k0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function k0(r,e){return Vt(r.prev,r,e.prev)<0&&Vt(e.next,r,r.next)<0}function z0(r,e,t,n){let i=r;do i.z===0&&(i.z=Hl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Hl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function G0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function kf(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Cr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&kf(r,e,t,n,i,s,a,o)}function H0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!W0(r,e)&&(Jr(r,e)&&Jr(e,r)&&X0(r,e)&&(Vt(r.prev,r,e.prev)||Vt(r,e.prev,e))||tr(r,e)&&Vt(r.prev,r,r.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function tr(r,e){return r.x===e.x&&r.y===e.y}function zf(r,e,t,n){const i=Ja(Vt(r,e,t)),s=Ja(Vt(r,e,n)),a=Ja(Vt(t,n,r)),o=Ja(Vt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ya(r,t,e)||s===0&&Ya(r,n,e)||a===0&&Ya(t,r,n)||o===0&&Ya(t,e,n))}function Ya(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ja(r){return r>0?1:r<0?-1:0}function W0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Jr(r,e){return Vt(r.prev,r,r.next)<0?Vt(r,e,r.next)>=0&&Vt(r,r.prev,e)>=0:Vt(r,e,r.prev)<0||Vt(r,r.next,e)<0}function X0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Vf(r,e){const t=Wl(r.i,r.x,r.y),n=Wl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ru(r,e,t,n){const i=Wl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Wl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q0(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Y0{static triangulate(e,t,n=2){return I0(e,t,n)}}class zn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return zn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Iu(e),Pu(n,e);let a=e.length;t.forEach(Iu);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Pu(n,t[c]);const o=Y0.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Iu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Pu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ac extends dt{constructor(e=new os([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Pe(i,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:J0;let _,A=!1,C,w,L,N;p&&(_=p.getSpacedPoints(h),A=!0,d=!1,C=p.computeFrenetFrames(h,!1),w=new U,L=new U,N=new U),d||(x=0,f=0,m=0,g=0);const b=o.extractPoints(l);let M=b.shape;const O=b.holes;if(!zn.isClockWise(M)){M=M.reverse();for(let he=0,F=O.length;he<F;he++){const oe=O[he];zn.isClockWise(oe)&&(O[he]=oe.reverse())}}function G(he){const oe=10000000000000001e-36;let pe=he[0];for(let _e=1;_e<=he.length;_e++){const de=_e%he.length,ze=he[de],Ae=ze.x-pe.x,Ue=ze.y-pe.y,D=Ae*Ae+Ue*Ue,T=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(pe.x),Math.abs(pe.y)),X=oe*T*T;if(D<=X){he.splice(de,1),_e--;continue}pe=ze}}G(M),O.forEach(G);const J=O.length,Z=M;for(let he=0;he<J;he++){const F=O[he];M=M.concat(F)}function z(he,F,oe){return F||ut("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(F,oe)}const ne=M.length;function q(he,F,oe){let pe,_e,de;const ze=he.x-F.x,Ae=he.y-F.y,Ue=oe.x-he.x,D=oe.y-he.y,T=ze*ze+Ae*Ae,X=ze*D-Ae*Ue;if(Math.abs(X)>Number.EPSILON){const ee=Math.sqrt(T),ae=Math.sqrt(Ue*Ue+D*D),Q=F.x-Ae/ee,Ye=F.y+ze/ee,Ee=oe.x-D/ae,Qe=oe.y+Ue/ae,qe=((Ee-Q)*D-(Qe-Ye)*Ue)/(ze*D-Ae*Ue);pe=Q+ze*qe-he.x,_e=Ye+Ae*qe-he.y;const le=pe*pe+_e*_e;if(le<=2)return new re(pe,_e);de=Math.sqrt(le/2)}else{let ee=!1;ze>Number.EPSILON?Ue>Number.EPSILON&&(ee=!0):ze<-Number.EPSILON?Ue<-Number.EPSILON&&(ee=!0):Math.sign(Ae)===Math.sign(D)&&(ee=!0),ee?(pe=-Ae,_e=ze,de=Math.sqrt(T)):(pe=ze,_e=Ae,de=Math.sqrt(T/2))}return new re(pe/de,_e/de)}const ie=[];for(let he=0,F=Z.length,oe=F-1,pe=he+1;he<F;he++,oe++,pe++)oe===F&&(oe=0),pe===F&&(pe=0),ie[he]=q(Z[he],Z[oe],Z[pe]);const ce=[];let xe,Oe=ie.concat();for(let he=0,F=J;he<F;he++){const oe=O[he];xe=[];for(let pe=0,_e=oe.length,de=_e-1,ze=pe+1;pe<_e;pe++,de++,ze++)de===_e&&(de=0),ze===_e&&(ze=0),xe[pe]=q(oe[pe],oe[de],oe[ze]);ce.push(xe),Oe=Oe.concat(xe)}let we;if(x===0)we=zn.triangulateShape(Z,O);else{const he=[],F=[];for(let oe=0;oe<x;oe++){const pe=oe/x,_e=f*Math.cos(pe*Math.PI/2),de=m*Math.sin(pe*Math.PI/2)+g;for(let ze=0,Ae=Z.length;ze<Ae;ze++){const Ue=z(Z[ze],ie[ze],de);Ve(Ue.x,Ue.y,-_e),pe===0&&he.push(Ue)}for(let ze=0,Ae=J;ze<Ae;ze++){const Ue=O[ze];xe=ce[ze];const D=[];for(let T=0,X=Ue.length;T<X;T++){const ee=z(Ue[T],xe[T],de);Ve(ee.x,ee.y,-_e),pe===0&&D.push(ee)}pe===0&&F.push(D)}}we=zn.triangulateShape(he,F)}const Te=we.length,be=m+g;for(let he=0;he<ne;he++){const F=d?z(M[he],Oe[he],be):M[he];A?(L.copy(C.normals[0]).multiplyScalar(F.x),w.copy(C.binormals[0]).multiplyScalar(F.y),N.copy(_[0]).add(L).add(w),Ve(N.x,N.y,N.z)):Ve(F.x,F.y,0)}for(let he=1;he<=h;he++)for(let F=0;F<ne;F++){const oe=d?z(M[F],Oe[F],be):M[F];A?(L.copy(C.normals[he]).multiplyScalar(oe.x),w.copy(C.binormals[he]).multiplyScalar(oe.y),N.copy(_[he]).add(L).add(w),Ve(N.x,N.y,N.z)):Ve(oe.x,oe.y,u/h*he)}for(let he=x-1;he>=0;he--){const F=he/x,oe=f*Math.cos(F*Math.PI/2),pe=m*Math.sin(F*Math.PI/2)+g;for(let _e=0,de=Z.length;_e<de;_e++){const ze=z(Z[_e],ie[_e],pe);Ve(ze.x,ze.y,u+oe)}for(let _e=0,de=O.length;_e<de;_e++){const ze=O[_e];xe=ce[_e];for(let Ae=0,Ue=ze.length;Ae<Ue;Ae++){const D=z(ze[Ae],xe[Ae],pe);A?Ve(D.x,D.y+_[h-1].y,_[h-1].x+oe):Ve(D.x,D.y,u+oe)}}}H(),Y();function H(){const he=i.length/3;if(d){let F=0,oe=ne*F;for(let pe=0;pe<Te;pe++){const _e=we[pe];Ge(_e[2]+oe,_e[1]+oe,_e[0]+oe)}F=h+x*2,oe=ne*F;for(let pe=0;pe<Te;pe++){const _e=we[pe];Ge(_e[0]+oe,_e[1]+oe,_e[2]+oe)}}else{for(let F=0;F<Te;F++){const oe=we[F];Ge(oe[2],oe[1],oe[0])}for(let F=0;F<Te;F++){const oe=we[F];Ge(oe[0]+ne*h,oe[1]+ne*h,oe[2]+ne*h)}}n.addGroup(he,i.length/3-he,0)}function Y(){const he=i.length/3;let F=0;fe(Z,F),F+=Z.length;for(let oe=0,pe=O.length;oe<pe;oe++){const _e=O[oe];fe(_e,F),F+=_e.length}n.addGroup(he,i.length/3-he,1)}function fe(he,F){let oe=he.length;for(;--oe>=0;){const pe=oe;let _e=oe-1;_e<0&&(_e=he.length-1);for(let de=0,ze=h+x*2;de<ze;de++){const Ae=ne*de,Ue=ne*(de+1),D=F+pe+Ae,T=F+_e+Ae,X=F+_e+Ue,ee=F+pe+Ue;xt(D,T,X,ee)}}}function Ve(he,F,oe){c.push(he),c.push(F),c.push(oe)}function Ge(he,F,oe){Rt(he),Rt(F),Rt(oe);const pe=i.length/3,_e=y.generateTopUV(n,i,pe-3,pe-2,pe-1);ot(_e[0]),ot(_e[1]),ot(_e[2])}function xt(he,F,oe,pe){Rt(he),Rt(F),Rt(pe),Rt(F),Rt(oe),Rt(pe);const _e=i.length/3,de=y.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);ot(de[0]),ot(de[1]),ot(de[3]),ot(de[1]),ot(de[2]),ot(de[3])}function Rt(he){i.push(c[he*3+0]),i.push(c[he*3+1]),i.push(c[he*3+2])}function ot(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Z0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new jo[i.type]().fromJSON(i)),new Ac(n,e.options)}}const J0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(s,a),new re(o,c),new re(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],g=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new re(a,1-c),new re(l,1-u),new re(d,1-m),new re(g,1-p)]:[new re(o,1-c),new re(h,1-u),new re(f,1-m),new re(x,1-p)]}};function Z0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wc extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wc(e.radius,e.detail)}}class Tc extends dt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=lt(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,u=new U,d=new re,f=new U,m=new U,g=new U;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*i,A=Math.sin(_),C=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*A,u.y=e[w].y,u.z=e[w].x*C,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const L=c[3*w+0]*A,N=c[3*w+1],b=c[3*w+0]*C;l.push(L,N,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const A=_+y*e.length,C=A,w=A+e.length,L=A+e.length+1,N=A+1;s.push(C,w,N),s.push(L,N,w)}this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.points,e.segments,e.phiStart,e.phiLength)}}class sa extends Oi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sa(e.radius,e.detail)}}class ar extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],g=[],x=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<l;_++){const A=_*u-s;m.push(A,-y,0),g.push(0,0,1),x.push(_/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,A=y+l*(p+1),C=y+1+l*(p+1),w=y+1+l*p;f.push(_,A,w),f.push(A,C,w)}this.setIndex(f),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new U,m=new re;for(let g=0;g<=i;g++){for(let x=0;x<=n;x++){const p=s+x/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<i;g++){const x=g*(n+1);for(let p=0;p<n;p++){const y=p+x,_=y,A=y+n+1,C=y+n+2,w=y+1;o.push(_,A,w),o.push(A,C,w)}}this.setIndex(o),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cc extends dt{constructor(e=new os([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;zn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=m.length;x<p;x++){const y=m[x];zn.isClockWise(y)===!0&&(m[x]=y.reverse())}const g=zn.triangulateShape(f,m);for(let x=0,p=m.length;x<p;x++){const y=m[x];f=f.concat(y)}for(let x=0,p=f.length;x<p;x++){const y=f[x];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let x=0,p=g.length;x<p;x++){const y=g[x],_=y[0]+u,A=y[1]+u,C=y[2]+u;n.push(_,A,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Cc(n,e.curveSegments)}}function $0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class or extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(w+A,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],A=h[p][y],C=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(_,A,w),(p!==n-1||c<Math.PI)&&f.push(A,C,w)}this.setIndex(f),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends Oi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rc(e.radius,e.detail)}}class Ic extends dt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const g=m/i*s,x=f/n*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(g),u.y=(e+t*Math.cos(x))*Math.sin(g),u.z=t*Math.sin(x),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const g=(i+1)*f+m-1,x=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(g,x,y),a.push(x,p,y)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pc extends dt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new U,d=new U,f=new U,m=new U,g=new U,x=new U,p=new U;for(let _=0;_<=n;++_){const A=_/n*s*Math.PI*2;y(A,s,a,e,f),y(A+.01,s,a,e,m),x.subVectors(m,f),p.addVectors(m,f),g.crossVectors(x,p),p.crossVectors(g,x),g.normalize(),p.normalize();for(let C=0;C<=i;++C){const w=C/i*Math.PI*2,L=-t*Math.cos(w),N=t*Math.sin(w);u.x=f.x+(L*p.x+N*g.x),u.y=f.y+(L*p.y+N*g.y),u.z=f.z+(L*p.z+N*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(_/n),h.push(C/i)}}for(let _=1;_<=n;_++)for(let A=1;A<=i;A++){const C=(i+1)*(_-1)+(A-1),w=(i+1)*_+(A-1),L=(i+1)*_+A,N=(i+1)*(_-1)+A;o.push(C,w,N),o.push(w,L,N)}this.setIndex(o),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2));function y(_,A,C,w,L){const N=Math.cos(_),b=Math.sin(_),M=C/A*_,O=Math.cos(M);L.x=w*(2+O)*.5*N,L.y=w*(2+O)*b*.5,L.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Lc extends dt{constructor(e=new vh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,c=new U,l=new re;let h=new U;const u=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function g(){for(let _=0;_<t;_++)x(_);x(s===!1?t:0),y(),p()}function x(_){h=e.getPointAt(_/t,h);const A=a.normals[_],C=a.binormals[_];for(let w=0;w<=i;w++){const L=w/i*Math.PI*2,N=Math.sin(L),b=-Math.cos(L);c.x=b*A.x+N*C.x,c.y=b*A.y+N*C.y,c.z=b*A.z+N*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let A=1;A<=i;A++){const C=(i+1)*(_-1)+(A-1),w=(i+1)*_+(A-1),L=(i+1)*_+A,N=(i+1)*(_-1)+A;m.push(C,w,N),m.push(w,L,N)}}function y(){for(let _=0;_<=t;_++)for(let A=0;A<=i;A++)l.x=_/t,l.y=A/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lc(new jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gf extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let m=d,g=d+f;m<g;m+=3)for(let x=0;x<3;x++){const p=o.getX(m+x),y=o.getX(m+(x+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,y),Lu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Lu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Lu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Nu=Object.freeze({__proto__:null,BoxGeometry:Fi,CapsuleGeometry:vc,CircleGeometry:bc,ConeGeometry:ia,CylinderGeometry:rr,DodecahedronGeometry:Mc,EdgesGeometry:Lf,ExtrudeGeometry:Ac,IcosahedronGeometry:wc,LatheGeometry:Tc,OctahedronGeometry:sa,PlaneGeometry:ar,PolyhedronGeometry:Oi,RingGeometry:Ec,ShapeGeometry:Cc,SphereGeometry:or,TetrahedronGeometry:Rc,TorusGeometry:Ic,TorusKnotGeometry:Pc,TubeGeometry:Lc,WireframeGeometry:Gf});class Hf extends dn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Wf extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mh extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xf extends Mh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cs extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yf extends dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Sh extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ah extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wh extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jf extends dn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends rn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ss(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function $f(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Kf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Th(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function K0(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<t||m>=n)){u.push(l.times[f]);for(let g=0;g<h;++g)d.push(l.values[f*h+g])}}u.length!==0&&(l.times=ss(u,l.times.constructor),l.values=ss(d,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function j0(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let g;if(s<=o.times[0]){const p=h,y=u-h;g=o.values.slice(p,y)}else if(s>=o.times[m]){const p=m*u+h,y=p+u-h;g=o.values.slice(p,y)}else{const p=o.createInterpolant(),y=h,_=u-h;p.evaluate(s),g=p.resultBuffer.slice(y,_)}c==="quaternion"&&new nn().fromArray(g).normalize().conjugate().toArray(g);const x=l.times.length;for(let p=0;p<x;++p){const y=p*f+d;if(c==="quaternion")nn.multiplyQuaternionsFlat(l.values,y,g,0,l.values,y);else{const _=f-d*2;for(let A=0;A<_;++A)l.values[y+A]-=g[A]}}}return r.blendMode=sh,r}class Q0{static convertArray(e,t){return ss(e,t)}static isTypedArray(e){return $f(e)}static getKeyframeOrder(e){return Kf(e)}static sortedArray(e,t,n){return Xl(e,t,n)}static flattenJSON(e,t,n,i){Th(e,t,n,i)}static subclip(e,t,n,i,s=30){return K0(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return j0(e,t,n,i)}}class ra{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jf extends ra{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case is:s=e,o=2*t-n;break;case Gr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case is:a=e,c=2*n-t;break;case Gr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,x=g*m,p=-d*x+2*d*g-d*m,y=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*x+(1.5+f)*g+.5*m,A=f*x-f*g;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+y*a[l+C]+_*a[c+C]+A*a[u+C];return s}}class Eh extends ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class Qf extends ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Zo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ut("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ut("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&$f(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){ut("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===co,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Zo;class xs extends Nn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Vr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Ch.prototype.ValueTypeName="color";class $r extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}$r.prototype.ValueTypeName="number";class ep extends ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class cr extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ep(this.times,this.values,this.getValueSize(),e)}}cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Nn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Vr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}fs.prototype.ValueTypeName="vector";class ps{constructor(e="",t=-1,n=[],i=lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Kf(c);c=Xl(c,1,h),l=Xl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new $r(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ut("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const x=[],p=[];Th(f,x,p,m),x.length!==0&&g.push(new u(d,x,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const _=d[m];x.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new $r(".morphTargetInfluence["+g+"]",x,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(fs,f+".position",d,"pos",i),n(cr,f+".quaternion",d,"rot",i),n(fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ex(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $r;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Ch;case"quaternion":return cr;case"bool":case"boolean":return xs;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ex(r.type);if(r.times===void 0){const t=[],n=[];Th(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const $n={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ih=new Rh;class an{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}an.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class nx extends Error{constructor(e,t){super(e),this.response=t}}class Hn extends an{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$n.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=li[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const x=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:A})=>{if(_)p.close();else{g+=A.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let w=0,L=h.length;w<L;w++){const N=h[w];N.onProgress&&N.onProgress(C)}p.enqueue(A),y()}},_=>{p.error(_)})}}});return new Response(x)}else throw new nx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{$n.add(`file:${e}`,l);const h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=li[e];if(h===void 0)throw this.manager.itemError(e),l;delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ix extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):ut(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ps.parse(e[n]);t.push(i)}return t}}class sx extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new yc,c=new Hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=s.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=Xt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+g]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Xt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const Os=new WeakMap;class Kr extends an{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$n.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Os.get(a);u===void 0&&(u=[],Os.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Xr("img");function c(){h(),t&&t(this);const u=Os.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Os.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),$n.remove(`image:${e}`);const d=Os.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class rx extends an{constructor(e){super(e)}load(e,t,n,i){const s=new ta;s.colorSpace=kt;const a=new Kr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){s.images[l]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class tp extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Vn,o=new Hn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{h(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:hn,a.wrapT=l.wrapT!==void 0?l.wrapT:hn,a.magFilter=l.magFilter!==void 0?l.magFilter:Xt,a.minFilter=l.minFilter!==void 0?l.minFilter:Xt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=kn),l.mipmapCount===1&&(a.minFilter=Xt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class Ph extends an{constructor(e){super(e)}load(e,t,n,i){const s=new Ht,a=new Kr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Bi extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class np extends Bi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ml=new $e,Du=new U,Uu=new U;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ax extends Lh{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nh extends Bi{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ax}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new $e,wr=new U,Sl=new U;class ox extends Lh{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu,n.coordinateSystem,n.reversedDepth)}}class Dh extends Bi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aa extends fc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cx extends Lh{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uh extends Bi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fh extends Bi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ip extends Bi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class sp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class rp extends Bi{constructor(e=new sp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Nc extends an{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new Hn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):ut(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&Ie("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new De().setHex(a.value);break;case"v2":i.uniforms[s].value=new re().fromArray(a.value);break;case"v3":i.uniforms[s].value=new U().fromArray(a.value);break;case"v4":i.uniforms[s].value=new At().fromArray(a.value);break;case"m3":i.uniforms[s].value=new ft().fromArray(a.value);break;case"m4":i.uniforms[s].value=new $e().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new re().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Nc.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Hf,SpriteMaterial:uh,RawShaderMaterial:Wf,ShaderMaterial:Ln,PointsMaterial:fh,MeshPhysicalMaterial:Xf,MeshStandardMaterial:Mh,MeshPhongMaterial:cs,MeshToonMaterial:qf,MeshNormalMaterial:Yf,MeshLambertMaterial:Sh,MeshDepthMaterial:Ah,MeshDistanceMaterial:wh,MeshBasicMaterial:ei,MeshMatcapMaterial:Jf,LineDashedMaterial:Zf,LineBasicMaterial:rn,Material:dn};return new t[e]}}class jr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ap extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class op extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Hn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):ut(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const x=f.interleavedBuffers[m],p=s(f,x.buffer),y=Ws(x.type,p),_=new xc(y,x.stride);return _.uuid=x.uuid,t[m]=_,_}function s(f,m){if(n[m]!==void 0)return n[m];const x=f.arrayBuffers[m],p=new Uint32Array(x).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new ap:new dt,o=e.data.index;if(o!==void 0){const f=Ws(o.type,o.array);a.setIndex(new Ct(f,1))}const c=e.data.attributes;for(const f in c){const m=c[f];let g;if(m.isInterleavedBufferAttribute){const x=i(e.data,m.data);g=new us(x,m.itemSize,m.offset,m.normalized)}else{const x=Ws(m.type,m.array),p=m.isInstancedBufferAttribute?er:Ct;g=new p(x,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),m.usage!==void 0&&g.setUsage(m.usage),a.setAttribute(f,g)}const l=e.data.morphAttributes;if(l)for(const f in l){const m=l[f],g=[];for(let x=0,p=m.length;x<p;x++){const y=m[x];let _;if(y.isInterleavedBufferAttribute){const A=i(e.data,y.data);_=new us(A,y.itemSize,y.offset,y.normalized)}else{const A=Ws(y.type,y.array);_=new Ct(A,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),g.push(_)}a.morphAttributes[f]=g}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){const g=u[f];a.addGroup(g.start,g.count,g.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new sn().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class lx extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?jr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),ut("ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?jr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Hn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new os().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new na().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new op;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in Nu?o=Nu[c.type].fromJSON(c,t):Ie(`ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Nc;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=ps.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Ws(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Rh(t);s=new Kr(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let m=0,g=d.length;m<g;m++){const x=d[m],p=o(x);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Vn(p.data,p.width,p.height)))}i[u.uuid]=new Ii(f)}else{const f=o(u.url);i[u.uuid]=new Ii(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Ws(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Kr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=await s(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Vn(m.data,m.width,m.height)))}n[c.uuid]=new Ii(h)}else{const h=await s(c.url);n[c.uuid]=new Ii(h)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(Ie("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&Ie('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Ie("ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new ta,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Vn:h=new Ht,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,hx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Ou),h.wrapT=n(o.wrap[1],Ou)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Bu)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Bu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,s){let a;function o(d){return t[d]===void 0&&Ie("ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,g=d.length;m<g;m++){const x=d[m];n[x]===void 0&&Ie("ObjectLoader: Undefined material",x),f.push(n[x])}return f}return n[d]===void 0&&Ie("ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&Ie("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new hh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new De(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new mc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new pc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Jt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new aa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Fh(e.color,e.intensity);break;case"DirectionalLight":a=new Uh(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Dh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ip(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Nh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new np(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new rp().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new dh(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new Ot(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Ef(h,u,d),a.instanceMatrix=new er(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new er(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new Cf(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let x=null,p=null;return g.boundingBox!==void 0&&(x=new un().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(p=new sn().fromJSON(g.boundingSphere)),{...g,boundingBox:x,boundingSphere:p}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=l(e.matricesTexture.uuid),a._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new sn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new un().fromJSON(e.boundingBox));break;case"LOD":a=new Tf;break;case"Line":a=new _i(o(e.geometry),c(e.material));break;case"LineLoop":a=new Rf(o(e.geometry),c(e.material));break;case"LineSegments":a=new Wn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new If(o(e.geometry),c(e.material));break;case"Sprite":a=new wf(c(e.material));break;case"Group":a=new Pi;break;case"Bone":a=new gc;break;default:a=new bt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],g=a.getObjectByProperty("uuid",m.object);g!==void 0&&a.addLevel(g,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Ie("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new bt}})}}const hx={UVMapping:tc,CubeReflectionMapping:xi,CubeRefractionMapping:Ni,EquirectangularReflectionMapping:Br,EquirectangularRefractionMapping:kr,CubeUVReflectionMapping:nr},Ou={RepeatWrapping:fi,ClampToEdgeWrapping:hn,MirroredRepeatWrapping:zr},Bu={NearestFilter:tn,NearestMipmapNearestFilter:Kl,NearestMipmapLinearFilter:Hs,LinearFilter:Xt,LinearMipmapNearestFilter:Ir,LinearMipmapLinearFilter:kn},Al=new WeakMap;class ux extends an{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$n.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Al.has(a)===!0)i&&i(Al.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return $n.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Al.set(c,l),$n.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Za;class Oh{static getContext(){return Za===void 0&&(Za=new(window.AudioContext||window.webkitAudioContext)),Za}static setContext(e){Za=e}}class dx extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Hn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Oh.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):ut(c),s.manager.itemError(e)}}}const ku=new $e,zu=new $e,qi=new $e;class fx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Jt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Jt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,qi.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(as*t.fov*.5)/t.zoom;let o,c;zu.elements[12]=-i,ku.elements[12]=i,o=-a*t.aspect+s,c=a*t.aspect+s,qi.elements[0]=2*t.near/(c-o),qi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(qi),o=-a*t.aspect-s,c=a*t.aspect-s,qi.elements[0]=2*t.near/(c-o),qi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(qi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(zu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ku)}}class cp extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Yi=new U,wl=new nn,px=new U,Ji=new U,Zi=new U;class mx extends bt{constructor(){super(),this.type="AudioListener",this.context=Oh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new lp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Yi,wl,px),Ji.set(0,0,-1).applyQuaternion(wl),Zi.set(0,1,0).applyQuaternion(wl),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yi.x,n),t.positionY.linearRampToValueAtTime(Yi.y,n),t.positionZ.linearRampToValueAtTime(Yi.z,n),t.forwardX.linearRampToValueAtTime(Ji.x,n),t.forwardY.linearRampToValueAtTime(Ji.y,n),t.forwardZ.linearRampToValueAtTime(Ji.z,n),t.upX.linearRampToValueAtTime(Zi.x,n),t.upY.linearRampToValueAtTime(Zi.y,n),t.upZ.linearRampToValueAtTime(Zi.z,n)}else t.setPosition(Yi.x,Yi.y,Yi.z),t.setOrientation(Ji.x,Ji.y,Ji.z,Zi.x,Zi.y,Zi.z)}}class hp extends bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ie("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ie("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ie("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const $i=new U,Vu=new nn,xx=new U,Ki=new U;class gx extends hp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose($i,Vu,xx),Ki.set(0,0,1).applyQuaternion(Vu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime($i.x,n),t.positionY.linearRampToValueAtTime($i.y,n),t.positionZ.linearRampToValueAtTime($i.z,n),t.orientationX.linearRampToValueAtTime(Ki.x,n),t.orientationY.linearRampToValueAtTime(Ki.y,n),t.orientationZ.linearRampToValueAtTime(Ki.z,n)}else t.setPosition($i.x,$i.y,$i.z),t.setOrientation(Ki.x,Ki.y,Ki.z)}}class _x{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class up{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;nn.multiplyQuaternionsFlat(e,a,e,t,e,n),nn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Bh="\\[\\]\\.:\\/",yx=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",vx="[^"+Bh.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",kh),Mx=/(WCOD+)?/.source.replace("WCOD",vx),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),wx=new RegExp("^"+bx+Mx+Sx+Ax+"$"),Tx=["material","materials","bones","map"];class Ex{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){const t=wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Tx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Ex;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=In(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let g=0,x=a;g!==x;++g)s[g].push(new St(d,n[g],i[g]))}else if(m<l){o=e[m];const g=--l,x=e[g];t[x.uuid]=m,e[m]=x,t[f]=g,e[g]=d;for(let p=0,y=a;p!==y;++p){const _=s[p],A=_[g];let C=_[m];_[m]=A,C===void 0&&(C=new St(d,n[p],i[p])),_[g]=C}}else e[m]!==o&&ut("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){const u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,m=i;f!==m;++f){const g=n[f],x=g[u],p=g[h];g[h]=x,g[u]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){const d=--s,f=e[d],m=--a,g=e[m];t[f.uuid]=u,e[u]=f,t[g.uuid]=d,e[d]=g,e.pop();for(let x=0,p=i;x!==p;++x){const y=n[x],_=y[d],A=y[m];y[u]=_,y[d]=A,y.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,g=i;m!==g;++m){const x=n[m];x[u]=x[d],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(u);for(let d=h,f=c.length;d!==f;++d){const m=c[d];u[d]=new St(m,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class dp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:ns,endingEnd:ns};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case sh:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case lc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===rf;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===nf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=is,i.endingEnd=is):(e?i.endingStart=this.zeroSlopeAtStart?is:ns:i.endingStart=Gr,t?i.endingEnd=this.zeroSlopeAtEnd?is:ns:i.endingEnd=Gr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const Rx=new Float32Array(1);class Ix extends ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new up(St.create(n,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Eh(new Float32Array(2),new Float32Array(2),1,Rx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ps.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=lc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new dp(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ps.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Px extends oh{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new uc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class zh{constructor(e){this.value=e}clone(){return new zh(this.value.clone===void 0?this.value:this.value.clone())}}let Lx=0;class Nx extends ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.usage=Wr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Dx extends xc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ux{constructor(e,t,n,i,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Gu=new $e;class Fx{constructor(e,t,n=0,i=1/0){this.ray=new ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(e,t=!0,n=[]){return ql(e,this,n,t),n.sort(Hu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ql(e[i],this,n,t);return n.sort(Hu),n}}function Hu(r,e){return r.distance-e.distance}function ql(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ql(s[a],e,t,!0)}}class Ox{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Bx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Bx(){this._document.hidden===!1&&this.reset()}class kx{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zx{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Vh{constructor(e,t,n,i){Vh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Wu=new re;class Vx{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xu=new U,$a=new U,Bs=new U,ks=new U,Tl=new U,Gx=new U,Hx=new U;class Wx{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xu.subVectors(e,this.start),$a.subVectors(this.end,this.start);const n=$a.dot($a);let s=$a.dot(Xu)/n;return t&&(s=lt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Gx,n=Hx){const i=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,h=e.end;Bs.subVectors(l,o),ks.subVectors(h,c),Tl.subVectors(o,c);const u=Bs.dot(Bs),d=ks.dot(ks),f=ks.dot(Tl);if(u<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=i)s=0,a=f/d,a=lt(a,0,1);else{const m=Bs.dot(Tl);if(d<=i)a=0,s=lt(-m/u,0,1);else{const g=Bs.dot(ks),x=u*d-g*g;x!==0?s=lt((g*f-m*d)/x,0,1):s=0,a=(g*s+f)/d,a<0?(a=0,s=lt(-m/u,0,1)):a>1&&(a=1,s=lt((g-m)/u,0,1))}}return t.copy(o).add(Bs.multiplyScalar(s)),n.copy(c).add(ks.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const qu=new U;class Xx extends bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new dt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Pe(i,3));const s=new rn({fog:!1,toneMapped:!1});this.cone=new Wn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),qu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ti=new U,Ka=new $e,El=new $e;class qx extends Wn{constructor(e){const t=fp(e),n=new dt,i=[],s=[];for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Pe(i,3)),n.setAttribute("color",new Pe(s,3));const a=new rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new De(255),c=new De(65280);this.setColors(o,c)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");El.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ka.multiplyMatrices(El,o.matrixWorld),Ti.setFromMatrixPosition(Ka),i.setXYZ(a,Ti.x,Ti.y,Ti.z),Ka.multiplyMatrices(El,o.parent.matrixWorld),Ti.setFromMatrixPosition(Ka),i.setXYZ(a+1,Ti.x,Ti.y,Ti.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function fp(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...fp(r.children[t]));return e}class Yx extends Ot{constructor(e,t,n){const i=new or(t,4,2),s=new ei({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Jx=new U,Yu=new De,Ju=new De;class Zx extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new sa(t);i.rotateY(Math.PI*.5),this.material=new ei({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Ct(a,3)),this.add(new Ot(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Yu.copy(this.light.color),Ju.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Yu:Ju;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Jx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class $x extends Wn{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const g=d===s?n:i;g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3}const h=new dt;h.setAttribute("position",new Pe(c,3)),h.setAttribute("color",new Pe(l,3));const u=new rn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kx extends Wn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new De(s),a=new De(a);const o=[],c=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);const g=u&1?s:a;c.push(g.r,g.g,g.b),c.push(g.r,g.g,g.b)}for(let u=0;u<n;u++){const d=u&1?s:a,f=e-e/n*u;for(let m=0;m<i;m++){let g=m/i*(Math.PI*2),x=Math.sin(g)*f,p=Math.cos(g)*f;o.push(x,0,p),c.push(d.r,d.g,d.b),g=(m+1)/i*(Math.PI*2),x=Math.sin(g)*f,p=Math.cos(g)*f,o.push(x,0,p),c.push(d.r,d.g,d.b)}}const l=new dt;l.setAttribute("position",new Pe(o,3)),l.setAttribute("color",new Pe(c,3));const h=new rn({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Zu=new U,ja=new U,$u=new U;class jx extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new dt;i.setAttribute("position",new Pe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new rn({fog:!1,toneMapped:!1});this.lightPlane=new _i(i,s),this.add(this.lightPlane),i=new dt,i.setAttribute("position",new Pe([0,0,0,0,0,1],3)),this.targetLine=new _i(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Zu.setFromMatrixPosition(this.light.matrixWorld),ja.setFromMatrixPosition(this.light.target.matrixWorld),$u.subVectors(ja,Zu),this.lightPlane.lookAt(ja),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ja),this.targetLine.scale.z=$u.length()}}const Qa=new U,Gt=new fc;class Qx extends Wn{constructor(e){const t=new dt,n=new rn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,g){c(m),c(g)}function c(m){i.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Pe(i,3)),t.setAttribute("color",new Pe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new De(16755200),h=new De(16711680),u=new De(43775),d=new De(16777215),f=new De(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,a;if(Gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===Rn)s=-1,a=1;else if(this.camera.coordinateSystem===$s)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Wt("c",t,e,Gt,0,0,s),Wt("t",t,e,Gt,0,0,a),Wt("n1",t,e,Gt,-n,-i,s),Wt("n2",t,e,Gt,n,-i,s),Wt("n3",t,e,Gt,-n,i,s),Wt("n4",t,e,Gt,n,i,s),Wt("f1",t,e,Gt,-n,-i,a),Wt("f2",t,e,Gt,n,-i,a),Wt("f3",t,e,Gt,-n,i,a),Wt("f4",t,e,Gt,n,i,a),Wt("u1",t,e,Gt,n*.7,i*1.1,s),Wt("u2",t,e,Gt,-n*.7,i*1.1,s),Wt("u3",t,e,Gt,0,i*2,s),Wt("cf1",t,e,Gt,-n,0,a),Wt("cf2",t,e,Gt,n,0,a),Wt("cf3",t,e,Gt,0,-i,a),Wt("cf4",t,e,Gt,0,i,a),Wt("cn1",t,e,Gt,-n,0,s),Wt("cn2",t,e,Gt,n,0,s),Wt("cn3",t,e,Gt,0,-i,s),Wt("cn4",t,e,Gt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wt(r,e,t,n,i,s,a){Qa.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],Qa.x,Qa.y,Qa.z)}}const eo=new un;class eg extends Wn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new dt;s.setIndex(new Ct(n,1)),s.setAttribute("position",new Ct(i,3)),super(s,new rn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&eo.setFromObject(this.object),eo.isEmpty())return;const e=eo.min,t=eo.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class tg extends Wn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new dt;s.setIndex(new Ct(n,1)),s.setAttribute("position",new Pe(i,3)),super(s,new rn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class ng extends _i{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new dt;a.setAttribute("position",new Pe(s,3)),a.computeBoundingSphere(),super(a,new rn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new dt;c.setAttribute("position",new Pe(o,3)),c.computeBoundingSphere(),this.add(new Ot(c,new ei({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ku=new U;let to,Cl;class ig extends bt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",to===void 0&&(to=new dt,to.setAttribute("position",new Pe([0,0,0,0,1,0],3)),Cl=new ia(.5,1,5,1),Cl.translate(0,-.5,0)),this.position.copy(t),this.line=new _i(to,new rn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ot(Cl,new ei({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ku,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class sg extends Wn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new dt;i.setAttribute("position",new Pe(t,3)),i.setAttribute("color",new Pe(n,3));const s=new rn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new De,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class rg{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Qo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let _=0,A=p.length;_<A;_++){const C=p[_],w=new os;w.curves=C.curves,y.push(w)}return y}function n(p,y){const _=y.length;let A=!1;for(let C=_-1,w=0;w<_;C=w++){let L=y[C],N=y[w],b=N.x-L.x,M=N.y-L.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(L=y[w],b=-b,N=y[C],M=-M),p.y<L.y||p.y>N.y)continue;if(p.y===L.y){if(p.x===L.x)return!0}else{const O=M*(p.x-L.x)-b*(p.y-L.y);if(O===0)return!0;if(O<0)continue;A=!A}}else{if(p.y!==L.y)continue;if(N.x<=p.x&&p.x<=L.x||L.x<=p.x&&p.x<=N.x)return!0}}return A}const i=zn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new os,c.curves=o.curves,l.push(c),l;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],m=0,g;d[m]=void 0,f[m]=[];for(let p=0,y=s.length;p<y;p++)o=s[p],g=o.getPoints(),a=i(g),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new os,p:g},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:g[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,y=0;for(let _=0,A=d.length;_<A;_++)u[_]=[];for(let _=0,A=d.length;_<A;_++){const C=f[_];for(let w=0;w<C.length;w++){const L=C[w];let N=!0;for(let b=0;b<d.length;b++)n(L.p,d[b].p)&&(_!==b&&y++,N?(N=!1,u[b].push(L)):p=!0);N&&u[_].push(L)}}y>0&&p===!1&&(f=u)}let x;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),x=f[p];for(let _=0,A=x.length;_<A;_++)c.holes.push(x[_].h)}return l}}class ag extends ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function og(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function cg(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function lg(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Yl(r,e,t,n){const i=hg(n);switch(t){case nh:return r*e;case rc:return r*e/i.components*i.byteLength;case ea:return r*e/i.components*i.byteLength;case ac:return r*e*2/i.components*i.byteLength;case oc:return r*e*2/i.components*i.byteLength;case ih:return r*e*3/i.components*i.byteLength;case gn:return r*e*4/i.components*i.byteLength;case cc:return r*e*4/i.components*i.byteLength;case Pr:case Lr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Dr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mo:case Ao:return Math.max(r,16)*Math.max(e,8)/4;case bo:case So:return Math.max(r,8)*Math.max(e,8)/2;case wo:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Go:case Ho:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xo:case qo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yo:case Jo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(r){switch(r){case Gn:case jl:return{byteLength:1,components:1};case qs:case Ql:case ms:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case gi:case nc:case An:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class ug{static contain(e,t){return og(e,t)}static cover(e,t){return cg(e,t)}static fill(e){return lg(e)}static getByteLength(e,t,n,i){return Yl(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function dg(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,by=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:xg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:yg,aomap_pars_fragment:vg,batching_pars_vertex:bg,batching_vertex:Mg,begin_vertex:Sg,beginnormal_vertex:Ag,bsdfs:wg,iridescence_fragment:Tg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Ng,color_pars_vertex:Dg,color_vertex:Ug,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:kg,displacementmap_vertex:zg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Hg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:r_,envmap_vertex:Zg,fog_vertex:$g,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:e_,lightmap_pars_fragment:t_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:s_,lights_toon_fragment:a_,lights_toon_pars_fragment:o_,lights_phong_fragment:c_,lights_phong_pars_fragment:l_,lights_physical_fragment:h_,lights_physical_pars_fragment:u_,lights_fragment_begin:d_,lights_fragment_maps:f_,lights_fragment_end:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:y_,map_pars_fragment:v_,map_particle_fragment:b_,map_particle_pars_fragment:M_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:A_,morphinstance_vertex:w_,morphcolor_vertex:T_,morphnormal_vertex:E_,morphtarget_pars_vertex:C_,morphtarget_vertex:R_,normal_fragment_begin:I_,normal_fragment_maps:P_,normal_pars_fragment:L_,normal_pars_vertex:N_,normal_vertex:D_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:k_,opaque_fragment:z_,packing:V_,premultiplied_alpha_fragment:G_,project_vertex:H_,dithering_fragment:W_,dithering_pars_fragment:X_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Z_,shadowmap_vertex:$_,shadowmask_pars_fragment:K_,skinbase_vertex:j_,skinning_pars_vertex:Q_,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:ay,transmission_pars_fragment:oy,uv_pars_fragment:cy,uv_pars_vertex:ly,uv_vertex:hy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:xy,cube_frag:gy,depth_vert:_y,depth_frag:yy,distanceRGBA_vert:vy,distanceRGBA_frag:by,equirect_vert:My,equirect_frag:Sy,linedashed_vert:Ay,linedashed_frag:wy,meshbasic_vert:Ty,meshbasic_frag:Ey,meshlambert_vert:Cy,meshlambert_frag:Ry,meshmatcap_vert:Iy,meshmatcap_frag:Py,meshnormal_vert:Ly,meshnormal_frag:Ny,meshphong_vert:Dy,meshphong_frag:Uy,meshphysical_vert:Fy,meshphysical_frag:Oy,meshtoon_vert:By,meshtoon_frag:ky,points_vert:zy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Hy,sprite_vert:Wy,sprite_frag:Xy},Re={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},On={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new De(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new De(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};On.physical={uniforms:mn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const no={r:0,b:0,g:0},ji=new yn,qy=new $e;function Yy(r,e,t,n,i,s,a){const o=new De(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let A=_.isScene===!0?_.background:null;return A&&A.isTexture&&(A=(_.backgroundBlurriness>0?t:e).get(A)),A}function g(_){let A=!1;const C=m(_);C===null?p(o,c):C&&C.isColor&&(p(C,1),A=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,A){const C=m(A);C&&(C.isCubeTexture||C.mapping===nr)?(h===void 0&&(h=new Ot(new Fi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Qs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ji.copy(A.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(ji)),h.material.toneMapped=yt.getTransfer(C.colorSpace)!==Lt,(u!==C||d!==C.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ot(new ar(2,2),new Ln({name:"BackgroundMaterial",uniforms:Qs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=yt.getTransfer(C.colorSpace)!==Lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,A){_.getRGB(no,vf(r)),n.buffers.color.setClear(no.r,no.g,no.b,A,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,A=1){o.set(_),c=A,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:g,addToRenderList:x,dispose:y}}function Jy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(M,O,B,G,J){let Z=!1;const z=u(G,B,O);s!==z&&(s=z,l(s.object)),Z=f(M,G,B,J),Z&&m(M,G,B,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,A(M,O,B,G),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,O,B){const G=B.wireframe===!0;let J=n[M.id];J===void 0&&(J={},n[M.id]=J);let Z=J[O.id];Z===void 0&&(Z={},J[O.id]=Z);let z=Z[G];return z===void 0&&(z=d(c()),Z[G]=z),z}function d(M){const O=[],B=[],G=[];for(let J=0;J<t;J++)O[J]=0,B[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,O,B,G){const J=s.attributes,Z=O.attributes;let z=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){const ce=J[q];let xe=Z[q];if(xe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;z++}return s.attributesNum!==z||s.index!==G}function m(M,O,B,G){const J={},Z=O.attributes;let z=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){let ce=Z[q];ce===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),J[q]=xe,z++}s.attributes=J,s.attributesNum=z,s.index=G}function g(){const M=s.newAttributes;for(let O=0,B=M.length;O<B;O++)M[O]=0}function x(M){p(M,0)}function p(M,O){const B=s.newAttributes,G=s.enabledAttributes,J=s.attributeDivisors;B[M]=1,G[M]===0&&(r.enableVertexAttribArray(M),G[M]=1),J[M]!==O&&(r.vertexAttribDivisor(M,O),J[M]=O)}function y(){const M=s.newAttributes,O=s.enabledAttributes;for(let B=0,G=O.length;B<G;B++)O[B]!==M[B]&&(r.disableVertexAttribArray(B),O[B]=0)}function _(M,O,B,G,J,Z,z){z===!0?r.vertexAttribIPointer(M,O,B,J,Z):r.vertexAttribPointer(M,O,B,G,J,Z)}function A(M,O,B,G){g();const J=G.attributes,Z=B.getAttributes(),z=O.defaultAttributeValues;for(const ne in Z){const q=Z[ne];if(q.location>=0){let ie=J[ne];if(ie===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const ce=ie.normalized,xe=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;const we=Oe.buffer,Te=Oe.type,be=Oe.bytesPerElement,H=Te===r.INT||Te===r.UNSIGNED_INT||ie.gpuType===nc;if(ie.isInterleavedBufferAttribute){const Y=ie.data,fe=Y.stride,Ve=ie.offset;if(Y.isInstancedInterleavedBuffer){for(let Ge=0;Ge<q.locationSize;Ge++)p(q.location+Ge,Y.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)x(q.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ge=0;Ge<q.locationSize;Ge++)_(q.location+Ge,xe/q.locationSize,Te,ce,fe*be,(Ve+xe/q.locationSize*Ge)*be,H)}else{if(ie.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)p(q.location+Y,ie.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Y=0;Y<q.locationSize;Y++)x(q.location+Y);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Y=0;Y<q.locationSize;Y++)_(q.location+Y,xe/q.locationSize,Te,ce,xe*be,xe/q.locationSize*Y*be,H)}}else if(z!==void 0){const ce=z[ne];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(q.location,ce);break;case 3:r.vertexAttrib3fv(q.location,ce);break;case 4:r.vertexAttrib4fv(q.location,ce);break;default:r.vertexAttrib1fv(q.location,ce)}}}}y()}function C(){N();for(const M in n){const O=n[M];for(const B in O){const G=O[B];for(const J in G)h(G[J].object),delete G[J];delete O[B]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const O=n[M.id];for(const B in O){const G=O[B];for(const J in G)h(G[J].object),delete G[J];delete O[B]}delete n[M.id]}function L(M){for(const O in n){const B=n[O];if(B[M.id]===void 0)continue;const G=B[M.id];for(const J in G)h(G[J].object),delete G[J];delete B[M.id]}}function N(){b(),a=!0,s!==i&&(s=i,l(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function Zy(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $y(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==gn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const N=L===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Gn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==An&&!N)}function c(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:C,maxSamples:w}}function Ky(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ci,o=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!x)s?h(null):l();else{const y=s?0:n,_=y*4;let A=p.clippingState||null;c.value=A,A=h(m,d,_,f);for(let C=0;C!==_;++C)A[C]=t[C];p.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,A=f;_!==g;++_,A+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(x,A),x[A+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function jy(r){let e=new WeakMap;function t(a,o){return o===Br?a.mapping=xi:o===kr&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Br||o===kr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sf(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Li=4,ju=[.125,.215,.35,.446,.526,.582],ts=20,Qy=256,Tr=new aa,Qu=new De;let Rl=null,Il=0,Pl=0,Ll=!1;const ev=new U;class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=ev}=s;Rl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Il,Pl),this._renderer.xr.enabled=Ll,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ms,format:gn,colorSpace:hs,depthBuffer:!1},i=ed(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tv(s)),this._blurMaterial=iv(s,e,t),this._ggxMaterial=nv(s,e,t)}return i}_compileMaterial(e){const t=new Ot(new dt,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,n,i,s){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qu),u.toneMapping=pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Fi,new ei({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(Qu),p=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):A===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;zs(i,A*C,_>2?C:0,C,C),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Li?n-m+Li:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,zs(s,x,p,3*g,2*g),i.setRenderTarget(s),i.render(o,Tr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,zs(e,x,p,3*g,2*g),i.setRenderTarget(e),i.render(o,Tr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ts-1),g=s/m,x=isFinite(s)?1+Math.floor(h*g):ts;x>ts&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ts}`);const p=[];let y=0;for(let L=0;L<ts;++L){const N=L/g,b=Math.exp(-N*N/2);p.push(b),L===0?y+=b:L<x&&(y+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const A=this._sizeLods[i],C=3*A*(i>_-Li?i-_+Li:0),w=4*(this._cubeSize-A);zs(t,C,w,3*A,2*A),c.setRenderTarget(t),c.render(u,Tr)}}function tv(r){const e=[],t=[],n=[];let i=r;const s=r-Li+1+ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Li?c=ju[a-r+Li-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,x=2,p=1,y=new Float32Array(g*m*f),_=new Float32Array(x*m*f),A=new Float32Array(p*m*f);for(let w=0;w<f;w++){const L=w%3*2/3-1,N=w>2?0:-1,b=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];y.set(b,g*m*w),_.set(d,x*m*w);const M=[w,w,w,w,w,w];A.set(M,p*m*w)}const C=new dt;C.setAttribute("position",new Ct(y,g)),C.setAttribute("uv",new Ct(_,x)),C.setAttribute("faceIndex",new Ct(A,p)),n.push(new Ot(C,null)),i>Li&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ed(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function nv(r,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function iv(r,e,t){const n=new Float32Array(ts),i=new U(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function td(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function nd(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Br||c===kr,h=c===xi||c===Ni;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jl(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Jl(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ks("WebGLRenderer: "+n+" extension not supported."),i}}}function av(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,A=y.length;_<A;_+=3){const C=y[_+0],w=y[_+1],L=y[_+2];d.push(C,w,w,L,L,C)}}else if(m!==void 0){const y=m.array;g=m.version;for(let _=0,A=y.length/3-1;_<A;_+=3){const C=_+0,w=_+1,L=_+2;d.push(C,w,w,L,L,C)}}else return;const x=new(xf(d)?lh:ch)(d,1);x.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,x)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ov(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function u(d,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lv(r,e,t){const n=new WeakMap,i=new At;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let A=o.attributes.position.count*_,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*C*4*u),L=new hc(w,A,C,u);L.type=An,L.needsUpdate=!0;const N=_*4;for(let M=0;M<u;M++){const O=x[M],B=p[M],G=y[M],J=A*C*4*M;for(let Z=0;Z<O.count;Z++){const z=Z*N;f===!0&&(i.fromBufferAttribute(O,Z),w[J+z+0]=i.x,w[J+z+1]=i.y,w[J+z+2]=i.z,w[J+z+3]=0),m===!0&&(i.fromBufferAttribute(B,Z),w[J+z+4]=i.x,w[J+z+5]=i.y,w[J+z+6]=i.z,w[J+z+7]=0),g===!0&&(i.fromBufferAttribute(G,Z),w[J+z+8]=i.x,w[J+z+9]=i.y,w[J+z+10]=i.z,w[J+z+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new re(A,C)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const mp=new Ht,id=new ph(1,1),xp=new hc,gp=new uc,_p=new ta,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),cd=new Float32Array(4);function lr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sd[i];if(s===void 0&&(s=new Float32Array(i),sd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Uc(r,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function mv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;cd.set(n),r.uniformMatrix2fv(this.addr,!1,cd),$t(t,n)}}function xv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;od.set(n),r.uniformMatrix3fv(this.addr,!1,od),$t(t,n)}}function gv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;ad.set(n),r.uniformMatrix4fv(this.addr,!1,ad),$t(t,n)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function Mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(id.compareFunction=rh,s=id):s=mp,t.setTexture2D(e||s,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gp,i)}function Cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_p,i)}function Rv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xp,i)}function Iv(r){switch(r){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return xv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return yv;case 35668:case 35672:return vv;case 35669:case 35673:return bv;case 5125:return Mv;case 36294:return Sv;case 36295:return Av;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(r,e){r.uniform1fv(this.addr,e)}function Lv(r,e){const t=lr(e,this.size,2);r.uniform2fv(this.addr,t)}function Nv(r,e){const t=lr(e,this.size,3);r.uniform3fv(this.addr,t)}function Dv(r,e){const t=lr(e,this.size,4);r.uniform4fv(this.addr,t)}function Uv(r,e){const t=lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fv(r,e){const t=lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ov(r,e){const t=lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bv(r,e){r.uniform1iv(this.addr,e)}function kv(r,e){r.uniform2iv(this.addr,e)}function zv(r,e){r.uniform3iv(this.addr,e)}function Vv(r,e){r.uniform4iv(this.addr,e)}function Gv(r,e){r.uniform1uiv(this.addr,e)}function Hv(r,e){r.uniform2uiv(this.addr,e)}function Wv(r,e){r.uniform3uiv(this.addr,e)}function Xv(r,e){r.uniform4uiv(this.addr,e)}function qv(r,e,t){const n=this.cache,i=e.length,s=Uc(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||mp,s[a])}function Yv(r,e,t){const n=this.cache,i=e.length,s=Uc(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gp,s[a])}function Jv(r,e,t){const n=this.cache,i=e.length,s=Uc(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_p,s[a])}function Zv(r,e,t){const n=this.cache,i=e.length,s=Uc(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xp,s[a])}function $v(r){switch(r){case 5126:return Pv;case 35664:return Lv;case 35665:return Nv;case 35666:return Dv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return zv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Hv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}}class jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function ld(r,e){r.seq.push(e),r.map[e.id]=e}function eb(r,e,t){const n=r.name,i=n.length;for(Nl.lastIndex=0;;){const s=Nl.exec(n),a=Nl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ld(t,l===void 0?new Kv(o,r,e):new jv(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Qv(o),ld(t,u)),t=u}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);eb(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function hd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const tb=37297;let nb=0;function ib(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ud=new ft;function sb(r){yt._getMatrix(ud,yt.workingColorSpace,r);const e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(r)){case Hr:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ib(r.getShaderSource(e),o)}else return s}function rb(r,e){const t=sb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ab(r,e){let t;switch(e){case Jd:t="Linear";break;case Zd:t="Reinhard";break;case $d:t="Cineon";break;case Kd:t="ACESFilmic";break;case Qd:t="AgX";break;case ef:t="Neutral";break;case jd:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new U;function ob(){yt.getLuminanceCoefficients(io);const r=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function lb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Rr(r){return r!==""}function fd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(ub,fb)}const db=new Map;function fb(r,e){let t=mt[e];if(t===void 0){const n=db.get(e);if(n!==void 0)t=mt[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(r){return r.replace(pb,mb)}function mb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function gb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xi:case Ni:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _b(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qr:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function vb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=xb(t),l=gb(t),h=_b(t),u=yb(t),d=vb(t),f=cb(t),m=lb(s),g=i.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(x=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?mt.tonemapping_pars_fragment:"",t.toneMapping!==pi?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,rb("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Zl(a),a=fd(a,t),a=pd(a,t),o=Zl(o),o=fd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+x+a,A=y+p+o,C=hd(i,i.VERTEX_SHADER,_),w=hd(i,i.FRAGMENT_SHADER,A);i.attachShader(g,C),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(O){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(C)||"",J=i.getShaderInfoLog(w)||"",Z=B.trim(),z=G.trim(),ne=J.trim();let q=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,w);else{const ce=dd(i,C,"vertex"),xe=dd(i,w,"fragment");ut("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+ce+`
`+xe)}else Z!==""?Ie("WebGLProgram: Program Info Log:",Z):(z===""||ne==="")&&(ie=!1);ie&&(O.diagnostics={runnable:q,programLog:Z,vertexShader:{log:z,prefix:x},fragmentShader:{log:ne,prefix:p}})}i.deleteShader(C),i.deleteShader(w),N=new ho(i,g),b=hb(i,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,tb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let Mb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ab(e),t.set(e,n)),n}}class Ab{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}}function wb(r,e,t,n,i,s,a){const o=new dc,c=new Sb,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,M,O,B,G){const J=B.fog,Z=G.geometry,z=b.isMeshStandardMaterial?B.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),q=ne&&ne.mapping===nr?ne.image.height:null,ie=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&Ie("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=ce!==void 0?ce.length:0;let Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let we,Te,be,H;if(ie){const gt=On[ie];we=gt.vertexShader,Te=gt.fragmentShader}else we=b.vertexShader,Te=b.fragmentShader,c.update(b),be=c.getVertexShaderID(b),H=c.getFragmentShaderID(b);const Y=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),Ve=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,xt=!!b.map,Rt=!!b.matcap,ot=!!ne,he=!!b.aoMap,F=!!b.lightMap,oe=!!b.bumpMap,pe=!!b.normalMap,_e=!!b.displacementMap,de=!!b.emissiveMap,ze=!!b.metalnessMap,Ae=!!b.roughnessMap,Ue=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,X=b.iridescence>0,ee=b.sheen>0,ae=b.transmission>0,Q=Ue&&!!b.anisotropyMap,Ye=D&&!!b.clearcoatMap,Ee=D&&!!b.clearcoatNormalMap,Qe=D&&!!b.clearcoatRoughnessMap,qe=X&&!!b.iridescenceMap,le=X&&!!b.iridescenceThicknessMap,ye=ee&&!!b.sheenColorMap,rt=ee&&!!b.sheenRoughnessMap,nt=!!b.specularMap,Fe=!!b.specularColorMap,ct=!!b.specularIntensityMap,k=ae&&!!b.transmissionMap,Ce=ae&&!!b.thicknessMap,ve=!!b.gradientMap,Me=!!b.alphaMap,me=b.alphaTest>0,se=!!b.alphaHash,He=!!b.extensions;let ht=pi;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ht=r.toneMapping);const Nt={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Te,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&G.instanceColor!==null,instancingMorph:Ve&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:hs,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:Rt,envMap:ot,envMapMode:ot&&ne.mapping,envMapCubeUVHeight:q,aoMap:he,lightMap:F,bumpMap:oe,normalMap:pe,displacementMap:d&&_e,emissiveMap:de,normalMapObjectSpace:pe&&b.normalMapType===cf,normalMapTangentSpace:pe&&b.normalMapType===Ui,metalnessMap:ze,roughnessMap:Ae,anisotropy:Ue,anisotropyMap:Q,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Qe,dispersion:T,iridescence:X,iridescenceMap:qe,iridescenceThicknessMap:le,sheen:ee,sheenColorMap:ye,sheenRoughnessMap:rt,specularMap:nt,specularColorMap:Fe,specularIntensityMap:ct,transmission:ae,transmissionMap:k,thicknessMap:Ce,gradientMap:ve,opaque:b.transparent===!1&&b.blending===rs&&b.alphaToCoverage===!1,alphaMap:Me,alphaTest:me,alphaHash:se,combine:b.combine,mapUv:xt&&g(b.map.channel),aoMapUv:he&&g(b.aoMap.channel),lightMapUv:F&&g(b.lightMap.channel),bumpMapUv:oe&&g(b.bumpMap.channel),normalMapUv:pe&&g(b.normalMap.channel),displacementMapUv:_e&&g(b.displacementMap.channel),emissiveMapUv:de&&g(b.emissiveMap.channel),metalnessMapUv:ze&&g(b.metalnessMap.channel),roughnessMapUv:Ae&&g(b.roughnessMap.channel),anisotropyMapUv:Q&&g(b.anisotropyMap.channel),clearcoatMapUv:Ye&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(b.sheenRoughnessMap.channel),specularMapUv:nt&&g(b.specularMap.channel),specularColorMapUv:Fe&&g(b.specularColorMap.channel),specularIntensityMapUv:ct&&g(b.specularIntensityMap.channel),transmissionMapUv:k&&g(b.transmissionMap.channel),thicknessMapUv:Ce&&g(b.thicknessMap.channel),alphaMapUv:Me&&g(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(pe||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(xt||Me),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bn,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)M.push(O),M.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const M=m[b.type];let O;if(M){const B=On[M];O=bf.clone(B.uniforms)}else O=b.uniforms;return O}function C(b,M){let O;for(let B=0,G=h.length;B<G;B++){const J=h[B];if(J.cacheKey===M){O=J,++O.usedTimes;break}}return O===void 0&&(O=new bb(r,M,b,s),h.push(O)),O}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function L(b){c.remove(b)}function N(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:A,acquireProgram:C,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:N}}function Tb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Eb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _d(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,g,x){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:x},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=x),e++,p}function o(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Eb),n.length>1&&n.sort(d||gd),i.length>1&&i.sort(d||gd)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Cb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new _d,r.set(n,[a])):i>=s.length?(a=new _d,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new De};break;case"SpotLight":t={position:new U,direction:new U,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Ib(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Pb=0;function Lb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Nb(r){const e=new Rb,t=Ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,s=new $e,a=new $e;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,y=0,_=0,A=0,C=0,w=0,L=0;l.sort(Lb);for(let b=0,M=l.length;b<M;b++){const O=l[b],B=O.color,G=O.intensity,J=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=B.r*G,u+=B.g*G,d+=B.b*G;else if(O.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(O.sh.coefficients[z],G);L++}else if(O.isDirectionalLight){const z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ne=O.shadow,q=t.get(O);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=O.shadow.matrix,y++}n.directional[f]=z,f++}else if(O.isSpotLight){const z=e.get(O);z.position.setFromMatrixPosition(O.matrixWorld),z.color.copy(B).multiplyScalar(G),z.distance=J,z.coneCos=Math.cos(O.angle),z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),z.decay=O.decay,n.spot[g]=z;const ne=O.shadow;if(O.map&&(n.spotLightMap[C]=O.map,C++,ne.updateMatrices(O),O.castShadow&&w++),n.spotLightMatrix[g]=ne.matrix,O.castShadow){const q=t.get(O);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=Z,A++}g++}else if(O.isRectAreaLight){const z=e.get(O);z.color.copy(B).multiplyScalar(G),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=z,x++}else if(O.isPointLight){const z=e.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity),z.distance=O.distance,z.decay=O.decay,O.castShadow){const ne=O.shadow,q=t.get(O);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=O.shadow.matrix,_++}n.point[m]=z,m++}else if(O.isHemisphereLight){const z=e.get(O);z.skyColor.copy(O.color).multiplyScalar(G),z.groundColor.copy(O.groundColor).multiplyScalar(G),n.hemi[p]=z,p++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==g||N.rectAreaLength!==x||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==_||N.numSpotShadows!==A||N.numSpotMaps!==C||N.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=A+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,N.directionalLength=f,N.pointLength=m,N.spotLength=g,N.rectAreaLength=x,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=_,N.numSpotShadows=A,N.numSpotMaps=C,N.numLightProbes=L,n.version=Pb++)}function c(l,h){let u=0,d=0,f=0,m=0,g=0;const x=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),u++}else if(_.isSpotLight){const A=n.spot[f];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),f++}else if(_.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function yd(r){const e=new Nb(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Db(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new yd(r),e.set(i,[o])):s>=a.length?(o=new yd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ob(r,e,t){let n=new sr;const i=new re,s=new re,a=new At,o=new Ah({depthPacking:of}),c=new wh,l={},h=t.maxTextureSize,u={[jn]:_n,[_n]:jn,[Bn]:Bn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ub,fragmentShader:Fb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new dt;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let p=this.type;this.render=function(w,L,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Kn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==Zn&&this.type===Zn,J=p===Zn&&this.type!==Zn;for(let Z=0,z=w.length;Z<z;Z++){const ne=w[Z],q=ne.shadow;if(q===void 0){Ie("WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ie=q.getFrameExtents();if(i.multiply(ie),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,q.mapSize.y=s.y)),q.map===null||G===!0||J===!0){const xe=this.type!==Zn?{minFilter:tn,magFilter:tn}:{};q.map!==null&&q.map.dispose(),q.map=new Qn(i.x,i.y,xe),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const ce=q.getViewportCount();for(let xe=0;xe<ce;xe++){const Oe=q.getViewport(xe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),B.viewport(a),q.updateMatrices(ne,xe),n=q.getFrustum(),A(L,N,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Zn&&y(q,N),q.needsUpdate=!1}p=this.type,x.needsUpdate=!1,r.setRenderTarget(b,M,O)};function y(w,L){const N=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(L,null,N,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(L,null,N,f,g,null)}function _(w,L,N,b){let M=null;const O=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)M=O;else if(M=N.isPointLight===!0?c:o,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=M.uuid,G=L.uuid;let J=l[B];J===void 0&&(J={},l[B]=J);let Z=J[G];Z===void 0&&(Z=M.clone(),J[G]=Z,L.addEventListener("dispose",C)),M=Z}if(M.visible=L.visible,M.wireframe=L.wireframe,b===Zn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=r.properties.get(M);B.light=N}return M}function A(w,L,N,b,M){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const G=e.update(w),J=w.material;if(Array.isArray(J)){const Z=G.groups;for(let z=0,ne=Z.length;z<ne;z++){const q=Z[z],ie=J[q.materialIndex];if(ie&&ie.visible){const ce=_(w,ie,b,M);w.onBeforeShadow(r,w,L,N,G,ce,q),r.renderBufferDirect(N,null,G,ce,w,q),w.onAfterShadow(r,w,L,N,G,ce,q)}}}else if(J.visible){const Z=_(w,J,b,M);w.onBeforeShadow(r,w,L,N,G,Z,null),r.renderBufferDirect(N,null,G,Z,w,null),w.onAfterShadow(r,w,L,N,G,Z,null)}}const B=w.children;for(let G=0,J=B.length;G<J;G++)A(B[G],L,N,b,M)}function C(w){w.target.removeEventListener("dispose",C);for(const N in l){const b=l[N],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Bb={[po]:mo,[xo]:yo,[go]:vo,[ls]:_o,[mo]:po,[yo]:xo,[vo]:go,[_o]:ls};function kb(r,e){function t(){let k=!1;const Ce=new At;let ve=null;const Me=new At(0,0,0,0);return{setMask:function(me){ve!==me&&!k&&(r.colorMask(me,me,me,me),ve=me)},setLocked:function(me){k=me},setClear:function(me,se,He,ht,Nt){Nt===!0&&(me*=ht,se*=ht,He*=ht),Ce.set(me,se,He,ht),Me.equals(Ce)===!1&&(r.clearColor(me,se,He,ht),Me.copy(Ce))},reset:function(){k=!1,ve=null,Me.set(-1,0,0,0)}}}function n(){let k=!1,Ce=!1,ve=null,Me=null,me=null;return{setReversed:function(se){if(Ce!==se){const He=e.get("EXT_clip_control");se?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=se;const ht=me;me=null,this.setClear(ht)}},getReversed:function(){return Ce},setTest:function(se){se?Y(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(se){ve!==se&&!k&&(r.depthMask(se),ve=se)},setFunc:function(se){if(Ce&&(se=Bb[se]),Me!==se){switch(se){case po:r.depthFunc(r.NEVER);break;case mo:r.depthFunc(r.ALWAYS);break;case xo:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case go:r.depthFunc(r.EQUAL);break;case _o:r.depthFunc(r.GEQUAL);break;case yo:r.depthFunc(r.GREATER);break;case vo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=se}},setLocked:function(se){k=se},setClear:function(se){me!==se&&(Ce&&(se=1-se),r.clearDepth(se),me=se)},reset:function(){k=!1,ve=null,Me=null,me=null,Ce=!1}}}function i(){let k=!1,Ce=null,ve=null,Me=null,me=null,se=null,He=null,ht=null,Nt=null;return{setTest:function(gt){k||(gt?Y(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!k&&(r.stencilMask(gt),Ce=gt)},setFunc:function(gt,wn,Tn){(ve!==gt||Me!==wn||me!==Tn)&&(r.stencilFunc(gt,wn,Tn),ve=gt,Me=wn,me=Tn)},setOp:function(gt,wn,Tn){(se!==gt||He!==wn||ht!==Tn)&&(r.stencilOp(gt,wn,Tn),se=gt,He=wn,ht=Tn)},setLocked:function(gt){k=gt},setClear:function(gt){Nt!==gt&&(r.clearStencil(gt),Nt=gt)},reset:function(){k=!1,Ce=null,ve=null,Me=null,me=null,se=null,He=null,ht=null,Nt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,A=null,C=null,w=null,L=new De(0,0,0),N=0,b=!1,M=null,O=null,B=null,G=null,J=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ne>=2);let ie=null,ce={};const xe=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),we=new At().fromArray(xe),Te=new At().fromArray(Oe);function be(k,Ce,ve,Me){const me=new Uint8Array(4),se=r.createTexture();r.bindTexture(k,se),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ve;He++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(Ce+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return se}const H={};H[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(r.DEPTH_TEST),a.setFunc(ls),oe(!1),pe(Ul),Y(r.CULL_FACE),he(Kn);function Y(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function fe(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Ve(k,Ce){return u[k]!==Ce?(r.bindFramebuffer(k,Ce),u[k]=Ce,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Ce),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(k,Ce){let ve=f,Me=!1;if(k){ve=d.get(Ce),ve===void 0&&(ve=[],d.set(Ce,ve));const me=k.textures;if(ve.length!==me.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let se=0,He=me.length;se<He;se++)ve[se]=r.COLOR_ATTACHMENT0+se;ve.length=me.length,Me=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ve)}function xt(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const Rt={[Ri]:r.FUNC_ADD,[Rd]:r.FUNC_SUBTRACT,[Id]:r.FUNC_REVERSE_SUBTRACT};Rt[Pd]=r.MIN,Rt[Ld]=r.MAX;const ot={[Nd]:r.ZERO,[Dd]:r.ONE,[Ud]:r.SRC_COLOR,[uo]:r.SRC_ALPHA,[Vd]:r.SRC_ALPHA_SATURATE,[kd]:r.DST_COLOR,[Od]:r.DST_ALPHA,[Fd]:r.ONE_MINUS_SRC_COLOR,[fo]:r.ONE_MINUS_SRC_ALPHA,[zd]:r.ONE_MINUS_DST_COLOR,[Bd]:r.ONE_MINUS_DST_ALPHA,[Gd]:r.CONSTANT_COLOR,[Hd]:r.ONE_MINUS_CONSTANT_COLOR,[Wd]:r.CONSTANT_ALPHA,[Xd]:r.ONE_MINUS_CONSTANT_ALPHA};function he(k,Ce,ve,Me,me,se,He,ht,Nt,gt){if(k===Kn){g===!0&&(fe(r.BLEND),g=!1);return}if(g===!1&&(Y(r.BLEND),g=!0),k!==Cd){if(k!==x||gt!==b){if((p!==Ri||A!==Ri)&&(r.blendEquation(r.FUNC_ADD),p=Ri,A=Ri),gt)switch(k){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fl:r.blendFunc(r.ONE,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ut("WebGLState: Invalid blending: ",k);break}else switch(k){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ol:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",k);break}y=null,_=null,C=null,w=null,L.set(0,0,0),N=0,x=k,b=gt}return}me=me||Ce,se=se||ve,He=He||Me,(Ce!==p||me!==A)&&(r.blendEquationSeparate(Rt[Ce],Rt[me]),p=Ce,A=me),(ve!==y||Me!==_||se!==C||He!==w)&&(r.blendFuncSeparate(ot[ve],ot[Me],ot[se],ot[He]),y=ve,_=Me,C=se,w=He),(ht.equals(L)===!1||Nt!==N)&&(r.blendColor(ht.r,ht.g,ht.b,Nt),L.copy(ht),N=Nt),x=k,b=!1}function F(k,Ce){k.side===Bn?fe(r.CULL_FACE):Y(r.CULL_FACE);let ve=k.side===_n;Ce&&(ve=!ve),oe(ve),k.blending===rs&&k.transparent===!1?he(Kn):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Me=k.stencilWrite;o.setTest(Me),Me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){M!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),M=k)}function pe(k){k!==wd?(Y(r.CULL_FACE),k!==O&&(k===Ul?r.cullFace(r.BACK):k===Td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),O=k}function _e(k){k!==B&&(z&&r.lineWidth(k),B=k)}function de(k,Ce,ve){k?(Y(r.POLYGON_OFFSET_FILL),(G!==Ce||J!==ve)&&(r.polygonOffset(Ce,ve),G=Ce,J=ve)):fe(r.POLYGON_OFFSET_FILL)}function ze(k){k?Y(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function Ae(k){k===void 0&&(k=r.TEXTURE0+Z-1),ie!==k&&(r.activeTexture(k),ie=k)}function Ue(k,Ce,ve){ve===void 0&&(ie===null?ve=r.TEXTURE0+Z-1:ve=ie);let Me=ce[ve];Me===void 0&&(Me={type:void 0,texture:void 0},ce[ve]=Me),(Me.type!==k||Me.texture!==Ce)&&(ie!==ve&&(r.activeTexture(ve),ie=ve),r.bindTexture(k,Ce||H[k]),Me.type=k,Me.texture=Ce)}function D(){const k=ce[ie];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{r.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ae(){try{r.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(){try{r.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Qe(){try{r.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function qe(){try{r.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function le(){try{r.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ye(k){we.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function rt(k){Te.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function nt(k,Ce){let ve=l.get(Ce);ve===void 0&&(ve=new WeakMap,l.set(Ce,ve));let Me=ve.get(k);Me===void 0&&(Me=r.getUniformBlockIndex(Ce,k.name),ve.set(k,Me))}function Fe(k,Ce){const Me=l.get(Ce).get(k);c.get(Ce)!==Me&&(r.uniformBlockBinding(Ce,Me,k.__bindingPointIndex),c.set(Ce,Me))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,ce={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,A=null,C=null,w=null,L=new De(0,0,0),N=0,b=!1,M=null,O=null,B=null,G=null,J=null,we.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:fe,bindFramebuffer:Ve,drawBuffers:Ge,useProgram:xt,setBlending:he,setMaterial:F,setFlipSided:oe,setCullFace:pe,setLineWidth:_e,setPolygonOffset:de,setScissorTest:ze,activeTexture:Ae,bindTexture:Ue,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:qe,texImage3D:le,updateUBOMapping:nt,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:Qe,texSubImage2D:ee,texSubImage3D:ae,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ye,scissor:ye,viewport:rt,reset:ct}}function zb(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,T){return f?new OffscreenCanvas(D,T):Xr("canvas")}function g(D,T,X){let ee=1;const ae=Ue(D);if((ae.width>X||ae.height>X)&&(ee=X/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(ee*ae.width),Ye=Math.floor(ee*ae.height);u===void 0&&(u=m(Q,Ye));const Ee=T?m(Q,Ye):u;return Ee.width=Q,Ee.height=Ye,Ee.getContext("2d").drawImage(D,0,0,Q,Ye),Ie("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Q+"x"+Ye+")."),Ee}else return"data"in D&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function x(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(D,T,X,ee,ae=!1){if(D!==null){if(r[D]!==void 0)return r[D];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=T;if(T===r.RED&&(X===r.FLOAT&&(Q=r.R32F),X===r.HALF_FLOAT&&(Q=r.R16F),X===r.UNSIGNED_BYTE&&(Q=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.R8UI),X===r.UNSIGNED_SHORT&&(Q=r.R16UI),X===r.UNSIGNED_INT&&(Q=r.R32UI),X===r.BYTE&&(Q=r.R8I),X===r.SHORT&&(Q=r.R16I),X===r.INT&&(Q=r.R32I)),T===r.RG&&(X===r.FLOAT&&(Q=r.RG32F),X===r.HALF_FLOAT&&(Q=r.RG16F),X===r.UNSIGNED_BYTE&&(Q=r.RG8)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RG8UI),X===r.UNSIGNED_SHORT&&(Q=r.RG16UI),X===r.UNSIGNED_INT&&(Q=r.RG32UI),X===r.BYTE&&(Q=r.RG8I),X===r.SHORT&&(Q=r.RG16I),X===r.INT&&(Q=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),X===r.UNSIGNED_INT&&(Q=r.RGB32UI),X===r.BYTE&&(Q=r.RGB8I),X===r.SHORT&&(Q=r.RGB16I),X===r.INT&&(Q=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),X===r.UNSIGNED_INT&&(Q=r.RGBA32UI),X===r.BYTE&&(Q=r.RGBA8I),X===r.SHORT&&(Q=r.RGBA16I),X===r.INT&&(Q=r.RGBA32I)),T===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),T===r.RGBA){const Ye=ae?Hr:yt.getTransfer(ee);X===r.FLOAT&&(Q=r.RGBA32F),X===r.HALF_FLOAT&&(Q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Q=Ye===Lt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(D,T){let X;return D?T===null||T===gi||T===Ys?X=r.DEPTH24_STENCIL8:T===An?X=r.DEPTH32F_STENCIL8:T===qs&&(X=r.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===Ys?X=r.DEPTH_COMPONENT24:T===An?X=r.DEPTH_COMPONENT32F:T===qs&&(X=r.DEPTH_COMPONENT16),X}function C(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==tn&&D.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function w(D){const T=D.target;T.removeEventListener("dispose",w),N(T),T.isVideoTexture&&h.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),M(T)}function N(D){const T=n.get(D);if(T.__webglInit===void 0)return;const X=D.source,ee=d.get(X);if(ee){const ae=ee[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(D),Object.keys(ee).length===0&&d.delete(X)}n.remove(D)}function b(D){const T=n.get(D);r.deleteTexture(T.__webglTexture);const X=D.source,ee=d.get(X);delete ee[T.__cacheKey],a.memory.textures--}function M(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ae=0;ae<T.__webglFramebuffer[ee].length;ae++)r.deleteFramebuffer(T.__webglFramebuffer[ee][ae]);else r.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)r.deleteFramebuffer(T.__webglFramebuffer[ee]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=D.textures;for(let ee=0,ae=X.length;ee<ae;ee++){const Q=n.get(X[ee]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(X[ee])}n.remove(D)}let O=0;function B(){O=0}function G(){const D=O;return D>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),O+=1,D}function J(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function Z(D,T){const X=n.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){const ee=D.image;if(ee===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,D,T);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function z(D,T){const X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){H(X,D,T);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function ne(D,T){const X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){H(X,D,T);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function q(D,T){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Y(X,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const ie={[fi]:r.REPEAT,[hn]:r.CLAMP_TO_EDGE,[zr]:r.MIRRORED_REPEAT},ce={[tn]:r.NEAREST,[Kl]:r.NEAREST_MIPMAP_NEAREST,[Hs]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[Ir]:r.LINEAR_MIPMAP_NEAREST,[kn]:r.LINEAR_MIPMAP_LINEAR},xe={[lf]:r.NEVER,[mf]:r.ALWAYS,[hf]:r.LESS,[rh]:r.LEQUAL,[uf]:r.EQUAL,[pf]:r.GEQUAL,[df]:r.GREATER,[ff]:r.NOTEQUAL};function Oe(D,T){if(T.type===An&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xt||T.magFilter===Ir||T.magFilter===Hs||T.magFilter===kn||T.minFilter===Xt||T.minFilter===Ir||T.minFilter===Hs||T.minFilter===kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ie[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ie[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ie[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ce[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==Hs&&T.minFilter!==kn||T.type===An&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function we(D,T){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",w));const ee=T.source;let ae=d.get(ee);ae===void 0&&(ae={},d.set(ee,ae));const Q=J(T);if(Q!==D.__cacheKey){ae[Q]===void 0&&(ae[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[Q].usedTimes++;const Ye=ae[D.__cacheKey];Ye!==void 0&&(ae[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(T)),D.__cacheKey=Q,D.__webglTexture=ae[Q].texture}return X}function Te(D,T,X){return Math.floor(Math.floor(D/X)/T)}function be(D,T,X,ee){const Q=D.updateRanges;if(Q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,X,ee,T.data);else{Q.sort((le,ye)=>le.start-ye.start);let Ye=0;for(let le=1;le<Q.length;le++){const ye=Q[Ye],rt=Q[le],nt=ye.start+ye.count,Fe=Te(rt.start,T.width,4),ct=Te(ye.start,T.width,4);rt.start<=nt+1&&Fe===ct&&Te(rt.start+rt.count-1,T.width,4)===Fe?ye.count=Math.max(ye.count,rt.start+rt.count-ye.start):(++Ye,Q[Ye]=rt)}Q.length=Ye+1;const Ee=r.getParameter(r.UNPACK_ROW_LENGTH),Qe=r.getParameter(r.UNPACK_SKIP_PIXELS),qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let le=0,ye=Q.length;le<ye;le++){const rt=Q[le],nt=Math.floor(rt.start/4),Fe=Math.ceil(rt.count/4),ct=nt%T.width,k=Math.floor(nt/T.width),Ce=Fe,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,ct,k,Ce,ve,X,ee,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,qe)}}function H(D,T,X){let ee=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=r.TEXTURE_3D);const ae=we(D,T),Q=T.source;t.bindTexture(ee,D.__webglTexture,r.TEXTURE0+X);const Ye=n.get(Q);if(Q.version!==Ye.__version||ae===!0){t.activeTexture(r.TEXTURE0+X);const Ee=yt.getPrimaries(yt.workingColorSpace),Qe=T.colorSpace===ui?null:yt.getPrimaries(T.colorSpace),qe=T.colorSpace===ui||Ee===Qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=g(T.image,!1,i.maxTextureSize);le=Ae(T,le);const ye=s.convert(T.format,T.colorSpace),rt=s.convert(T.type);let nt=_(T.internalFormat,ye,rt,T.colorSpace,T.isVideoTexture);Oe(ee,T);let Fe;const ct=T.mipmaps,k=T.isVideoTexture!==!0,Ce=Ye.__version===void 0||ae===!0,ve=Q.dataReady,Me=C(T,le);if(T.isDepthTexture)nt=A(T.format===Zs,T.type),Ce&&(k?t.texStorage2D(r.TEXTURE_2D,1,nt,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,nt,le.width,le.height,0,ye,rt,null));else if(T.isDataTexture)if(ct.length>0){k&&Ce&&t.texStorage2D(r.TEXTURE_2D,Me,nt,ct[0].width,ct[0].height);for(let me=0,se=ct.length;me<se;me++)Fe=ct[me],k?ve&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Fe.width,Fe.height,ye,rt,Fe.data):t.texImage2D(r.TEXTURE_2D,me,nt,Fe.width,Fe.height,0,ye,rt,Fe.data);T.generateMipmaps=!1}else k?(Ce&&t.texStorage2D(r.TEXTURE_2D,Me,nt,le.width,le.height),ve&&be(T,le,ye,rt)):t.texImage2D(r.TEXTURE_2D,0,nt,le.width,le.height,0,ye,rt,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,nt,ct[0].width,ct[0].height,le.depth);for(let me=0,se=ct.length;me<se;me++)if(Fe=ct[me],T.format!==gn)if(ye!==null)if(k){if(ve)if(T.layerUpdates.size>0){const He=Yl(Fe.width,Fe.height,T.format,T.type);for(const ht of T.layerUpdates){const Nt=Fe.data.subarray(ht*He/Fe.data.BYTES_PER_ELEMENT,(ht+1)*He/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,ht,Fe.width,Fe.height,1,ye,Nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Fe.width,Fe.height,le.depth,ye,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,nt,Fe.width,Fe.height,le.depth,0,Fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Fe.width,Fe.height,le.depth,ye,rt,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,nt,Fe.width,Fe.height,le.depth,0,ye,rt,Fe.data)}else{k&&Ce&&t.texStorage2D(r.TEXTURE_2D,Me,nt,ct[0].width,ct[0].height);for(let me=0,se=ct.length;me<se;me++)Fe=ct[me],T.format!==gn?ye!==null?k?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,Fe.width,Fe.height,ye,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,me,nt,Fe.width,Fe.height,0,Fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ve&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Fe.width,Fe.height,ye,rt,Fe.data):t.texImage2D(r.TEXTURE_2D,me,nt,Fe.width,Fe.height,0,ye,rt,Fe.data)}else if(T.isDataArrayTexture)if(k){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,nt,le.width,le.height,le.depth),ve)if(T.layerUpdates.size>0){const me=Yl(le.width,le.height,T.format,T.type);for(const se of T.layerUpdates){const He=le.data.subarray(se*me/le.data.BYTES_PER_ELEMENT,(se+1)*me/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,ye,rt,He)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,rt,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,le.width,le.height,le.depth,0,ye,rt,le.data);else if(T.isData3DTexture)k?(Ce&&t.texStorage3D(r.TEXTURE_3D,Me,nt,le.width,le.height,le.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,rt,le.data)):t.texImage3D(r.TEXTURE_3D,0,nt,le.width,le.height,le.depth,0,ye,rt,le.data);else if(T.isFramebufferTexture){if(Ce)if(k)t.texStorage2D(r.TEXTURE_2D,Me,nt,le.width,le.height);else{let me=le.width,se=le.height;for(let He=0;He<Me;He++)t.texImage2D(r.TEXTURE_2D,He,nt,me,se,0,ye,rt,null),me>>=1,se>>=1}}else if(ct.length>0){if(k&&Ce){const me=Ue(ct[0]);t.texStorage2D(r.TEXTURE_2D,Me,nt,me.width,me.height)}for(let me=0,se=ct.length;me<se;me++)Fe=ct[me],k?ve&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ye,rt,Fe):t.texImage2D(r.TEXTURE_2D,me,nt,ye,rt,Fe);T.generateMipmaps=!1}else if(k){if(Ce){const me=Ue(le);t.texStorage2D(r.TEXTURE_2D,Me,nt,me.width,me.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,rt,le)}else t.texImage2D(r.TEXTURE_2D,0,nt,ye,rt,le);x(T)&&p(ee),Ye.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Y(D,T,X){if(T.image.length!==6)return;const ee=we(D,T),ae=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+X);const Q=n.get(ae);if(ae.version!==Q.__version||ee===!0){t.activeTexture(r.TEXTURE0+X);const Ye=yt.getPrimaries(yt.workingColorSpace),Ee=T.colorSpace===ui?null:yt.getPrimaries(T.colorSpace),Qe=T.colorSpace===ui||Ye===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,le=T.image[0]&&T.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!qe&&!le?ye[se]=g(T.image[se],!0,i.maxCubemapSize):ye[se]=le?T.image[se].image:T.image[se],ye[se]=Ae(T,ye[se]);const rt=ye[0],nt=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type),ct=_(T.internalFormat,nt,Fe,T.colorSpace),k=T.isVideoTexture!==!0,Ce=Q.__version===void 0||ee===!0,ve=ae.dataReady;let Me=C(T,rt);Oe(r.TEXTURE_CUBE_MAP,T);let me;if(qe){k&&Ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ct,rt.width,rt.height);for(let se=0;se<6;se++){me=ye[se].mipmaps;for(let He=0;He<me.length;He++){const ht=me[He];T.format!==gn?nt!==null?k?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,0,0,ht.width,ht.height,nt,ht.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,ct,ht.width,ht.height,0,ht.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,0,0,ht.width,ht.height,nt,Fe,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He,ct,ht.width,ht.height,0,nt,Fe,ht.data)}}}else{if(me=T.mipmaps,k&&Ce){me.length>0&&Me++;const se=Ue(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ct,se.width,se.height)}for(let se=0;se<6;se++)if(le){k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,nt,Fe,ye[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ct,ye[se].width,ye[se].height,0,nt,Fe,ye[se].data);for(let He=0;He<me.length;He++){const Nt=me[He].image[se].image;k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,0,0,Nt.width,Nt.height,nt,Fe,Nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,ct,Nt.width,Nt.height,0,nt,Fe,Nt.data)}}else{k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,nt,Fe,ye[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ct,nt,Fe,ye[se]);for(let He=0;He<me.length;He++){const ht=me[He];k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,0,0,nt,Fe,ht.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,He+1,ct,nt,Fe,ht.image[se])}}}x(T)&&p(r.TEXTURE_CUBE_MAP),Q.__version=ae.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,X,ee,ae,Q){const Ye=s.convert(X.format,X.colorSpace),Ee=s.convert(X.type),Qe=_(X.internalFormat,Ye,Ee,X.colorSpace),qe=n.get(T),le=n.get(X);if(le.__renderTarget=T,!qe.__hasExternalTextures){const ye=Math.max(1,T.width>>Q),rt=Math.max(1,T.height>>Q);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,Q,Qe,ye,rt,T.depth,0,Ye,Ee,null):t.texImage2D(ae,Q,Qe,ye,rt,0,Ye,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ae,le.__webglTexture,0,_e(T)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ae,le.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(D,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const ee=T.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,Q=A(T.stencilBuffer,ae),Ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=_e(T);de(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,Q,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,D)}else{const ee=T.textures;for(let ae=0;ae<ee.length;ae++){const Q=ee[ae],Ye=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),Qe=_(Q.internalFormat,Ye,Ee,Q.colorSpace),qe=_e(T);X&&de(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Qe,T.width,T.height):de(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,Qe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Qe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const ae=ee.__webglTexture,Q=_e(T);if(T.depthTexture.format===Js)de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(T.depthTexture.format===Zs)de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function xt(D){const T=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=ee}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const ee=D.texture.mipmaps;ee&&ee.length>0?Ge(T.__webglFramebuffer[0],D):Ge(T.__webglFramebuffer,D)}else if(X){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ve(T.__webglDepthbuffer[ee],D,!1);else{const ae=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Q)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ve(T.__webglDepthbuffer,D,!1);else{const ae=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(D,T,X){const ee=n.get(D);T!==void 0&&fe(ee.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&xt(D)}function ot(D){const T=D.texture,X=n.get(D),ee=n.get(T);D.addEventListener("dispose",L);const ae=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Ye=ae.length>1;if(Ye||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=T.version,a.memory.textures++),Q){X.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[Ee]=[];for(let Qe=0;Qe<T.mipmaps.length;Qe++)X.__webglFramebuffer[Ee][Qe]=r.createFramebuffer()}else X.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)X.__webglFramebuffer[Ee]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ee=0,Qe=ae.length;Ee<Qe;Ee++){const qe=n.get(ae[Ee]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&de(D)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ae.length;Ee++){const Qe=ae[Ee];X.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ee]);const qe=s.convert(Qe.format,Qe.colorSpace),le=s.convert(Qe.type),ye=_(Qe.internalFormat,qe,le,Qe.colorSpace,D.isXRRenderTarget===!0),rt=_e(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,ye,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,T);for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)fe(X.__webglFramebuffer[Ee][Qe],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe);else fe(X.__webglFramebuffer[Ee],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ee=0,Qe=ae.length;Ee<Qe;Ee++){const qe=ae[Ee],le=n.get(qe);let ye=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,le.__webglTexture),Oe(ye,qe),fe(X.__webglFramebuffer,D,qe,r.COLOR_ATTACHMENT0+Ee,ye,0),x(qe)&&p(ye)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ee.__webglTexture),Oe(Ee,T),T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)fe(X.__webglFramebuffer[Qe],D,T,r.COLOR_ATTACHMENT0,Ee,Qe);else fe(X.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ee,0);x(T)&&p(Ee),t.unbindTexture()}D.depthBuffer&&xt(D)}function he(D){const T=D.textures;for(let X=0,ee=T.length;X<ee;X++){const ae=T[X];if(x(ae)){const Q=y(D),Ye=n.get(ae).__webglTexture;t.bindTexture(Q,Ye),p(Q),t.unbindTexture()}}}const F=[],oe=[];function pe(D){if(D.samples>0){if(de(D)===!1){const T=D.textures,X=D.width,ee=D.height;let ae=r.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(D),Ee=T.length>1;if(Ee)for(let qe=0;qe<T.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Qe=D.texture.mipmaps;Qe&&Qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const le=n.get(T[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,X,ee,0,0,X,ee,ae,r.NEAREST),c===!0&&(F.length=0,oe.length=0,F.push(r.COLOR_ATTACHMENT0+qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(F.push(Q),oe.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let qe=0;qe<T.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const le=n.get(T[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function _e(D){return Math.min(i.maxSamples,D.samples)}function de(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ze(D){const T=a.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Ae(D,T){const X=D.colorSpace,ee=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==hs&&X!==ui&&(yt.getTransfer(X)===Lt?(ee!==gn||ae!==Gn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",X)),T}function Ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=de}function yp(r,e){function t(n,i=ui){let s;const a=yt.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===ic)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return r.BYTE;if(n===Ql)return r.SHORT;if(n===qs)return r.UNSIGNED_SHORT;if(n===nc)return r.INT;if(n===gi)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===ms)return r.HALF_FLOAT;if(n===nh)return r.ALPHA;if(n===ih)return r.RGB;if(n===gn)return r.RGBA;if(n===Js)return r.DEPTH_COMPONENT;if(n===Zs)return r.DEPTH_STENCIL;if(n===rc)return r.RED;if(n===ea)return r.RED_INTEGER;if(n===ac)return r.RG;if(n===oc)return r.RG_INTEGER;if(n===cc)return r.RGBA_INTEGER;if(n===Pr||n===Lr||n===Nr||n===Dr)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===Mo||n===So||n===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===To||n===Eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wo||n===To)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Io||n===Po||n===Lo||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Ho||n===Wo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Go)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:Vb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wb extends ti{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new Hb,p={},y=t.getContextAttributes();let _=null,A=null;const C=[],w=[],L=new re;let N=null;const b=new Jt;b.viewport=new At;const M=new Jt;M.viewport=new At;const O=[b,M],B=new cp;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=C[H];return Y===void 0&&(Y=new lo,C[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=C[H];return Y===void 0&&(Y=new lo,C[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=C[H];return Y===void 0&&(Y=new lo,C[H]=Y),Y.getHandSpace()};function Z(H){const Y=w.indexOf(H.inputSource);if(Y===-1)return;const fe=C[Y];fe!==void 0&&(fe.update(H.inputSource,H.frame,l||a),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",ne);for(let H=0;H<C.length;H++){const Y=w[H];Y!==null&&(w[H]=null,C[H].disconnect(Y))}G=null,J=null,x.reset();for(const H in p)delete p[H];e.setRenderTarget(_),f=null,d=null,u=null,i=null,A=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",z),i.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ve=null,Ge=null;y.depth&&(Ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Zs:Js,Ve=y.stencil?Ys:gi);const xt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(xt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Qn(d.textureWidth,d.textureHeight,{format:gn,type:Gn,depthTexture:new ph(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Qn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(H){for(let Y=0;Y<H.removed.length;Y++){const fe=H.removed[Y],Ve=w.indexOf(fe);Ve>=0&&(w[Ve]=null,C[Ve].disconnect(fe))}for(let Y=0;Y<H.added.length;Y++){const fe=H.added[Y];let Ve=w.indexOf(fe);if(Ve===-1){for(let xt=0;xt<C.length;xt++)if(xt>=w.length){w.push(fe),Ve=xt;break}else if(w[xt]===null){w[xt]=fe,Ve=xt;break}if(Ve===-1)break}const Ge=C[Ve];Ge&&Ge.connect(fe)}}const q=new U,ie=new U;function ce(H,Y,fe){q.setFromMatrixPosition(Y.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);const Ve=q.distanceTo(ie),Ge=Y.projectionMatrix.elements,xt=fe.projectionMatrix.elements,Rt=Ge[14]/(Ge[10]-1),ot=Ge[14]/(Ge[10]+1),he=(Ge[9]+1)/Ge[5],F=(Ge[9]-1)/Ge[5],oe=(Ge[8]-1)/Ge[0],pe=(xt[8]+1)/xt[0],_e=Rt*oe,de=Rt*pe,ze=Ve/(-oe+pe),Ae=ze*-oe;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ae),H.translateZ(ze),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ge[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ue=Rt+ze,D=ot+ze,T=_e-Ae,X=de+(Ve-Ae),ee=he*ot/D*Ue,ae=F*ot/D*Ue;H.projectionMatrix.makePerspective(T,X,ee,ae,Ue,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function xe(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let Y=H.near,fe=H.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),B.near=M.near=b.near=Y,B.far=M.far=b.far=fe,(G!==B.near||J!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,J=B.far),B.layers.mask=H.layers.mask|6,b.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const Ve=H.parent,Ge=B.cameras;xe(B,Ve);for(let xt=0;xt<Ge.length;xt++)xe(Ge[xt],Ve);Ge.length===2?ce(B,b,M):B.projectionMatrix.copy(b.projectionMatrix),Oe(H,B,Ve)};function Oe(H,Y,fe){fe===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=js*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(H){return p[H]};let we=null;function Te(H,Y){if(h=Y.getViewerPose(l||a),m=Y,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let Ve=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Ve=!0);for(let ot=0;ot<fe.length;ot++){const he=fe[ot];let F=null;if(f!==null)F=f.getViewport(he);else{const pe=u.getViewSubImage(d,he);F=pe.viewport,ot===0&&(e.setRenderTargetTextures(A,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(A))}let oe=O[ot];oe===void 0&&(oe=new Jt,oe.layers.enable(ot),oe.viewport=new At,O[ot]=oe),oe.matrix.fromArray(he.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(he.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(F.x,F.y,F.width,F.height),ot===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ve===!0&&B.cameras.push(oe)}const Ge=i.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const ot=u.getDepthInformation(fe[0]);ot&&ot.isValid&&ot.texture&&x.init(ot,i.renderState)}if(Ge&&Ge.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let ot=0;ot<fe.length;ot++){const he=fe[ot].camera;if(he){let F=p[he];F||(F=new mh,p[he]=F);const oe=u.getCameraImage(he);F.sourceTexture=oe}}}}for(let fe=0;fe<C.length;fe++){const Ve=w[fe],Ge=C[fe];Ve!==null&&Ge!==void 0&&Ge.update(Ve,Y,l||a)}we&&we(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}const be=new pp;be.setAnimationLoop(Te),this.setAnimationLoop=function(H){we=H},this.dispose=function(){}}}const Qi=new yn,Xb=new $e;function qb(r,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,vf(r)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,_,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),u(x,p)):p.isMeshPhongMaterial?(s(x,p),h(x,p)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,A)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),g(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,y,_):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===_n&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===_n&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,A=y.envMapRotation;_&&(x.envMap.value=_,Qi.copy(A),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),x.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(Qi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yb(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const A=_.program;n.uniformBlockBinding(y,A)}function l(y,_){let A=i[y.id];A===void 0&&(m(y),A=h(y),i[y.id]=A,y.addEventListener("dispose",x));const C=_.program;n.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const _=u();y.__bindingPointIndex=_;const A=r.createBuffer(),C=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,A),A}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],A=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let w=0,L=A.length;w<L;w++){const N=Array.isArray(A[w])?A[w]:[A[w]];for(let b=0,M=N.length;b<M;b++){const O=N[b];if(f(O,w,b,C)===!0){const B=O.__offset,G=Array.isArray(O.value)?O.value:[O.value];let J=0;for(let Z=0;Z<G.length;Z++){const z=G[Z],ne=g(z);typeof z=="number"||typeof z=="boolean"?(O.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,B+J,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=0,O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=0,O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=0):(z.toArray(O.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,A,C){const w=y.value,L=_+"_"+A;if(C[L]===void 0)return typeof w=="number"||typeof w=="boolean"?C[L]=w:C[L]=w.clone(),!0;{const N=C[L];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return C[L]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function m(y){const _=y.uniforms;let A=0;const C=16;for(let L=0,N=_.length;L<N;L++){const b=Array.isArray(_[L])?_[L]:[_[L]];for(let M=0,O=b.length;M<O;M++){const B=b[M],G=Array.isArray(B.value)?B.value:[B.value];for(let J=0,Z=G.length;J<Z;J++){const z=G[J],ne=g(z),q=A%C,ie=q%ne.boundary,ce=q+ie;A+=ie,ce!==0&&C-ce<ne.storage&&(A+=C-ce),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=ne.storage}}}const w=A%C;return w>0&&(A+=C-w),y.__size=A,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const Jb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let hi=null;function Zb(){return hi===null&&(hi=new Vn(Jb,32,32,ac,ms),hi.minFilter=Xt,hi.magFilter=Xt,hi.wrapS=hn,hi.wrapT=hn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class $b{constructor(e={}){const{canvas:t=gf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Set([cc,oc,ea]),g=new Set([Gn,gi,qs,Ys,ic,sc]),x=new Uint32Array(4),p=new Int32Array(4);let y=null,_=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=kt;let N=0,b=0,M=null,O=-1,B=null;const G=new At,J=new At;let Z=null;const z=new De(0);let ne=0,q=t.width,ie=t.height,ce=1,xe=null,Oe=null;const we=new At(0,0,q,ie),Te=new At(0,0,q,ie);let be=!1;const H=new sr;let Y=!1,fe=!1;const Ve=new $e,Ge=new U,xt=new At,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function he(){return M===null?ce:1}let F=n;function oe(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",He,!1),F===null){const V="webgl2";if(F=oe(V,R),F===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let pe,_e,de,ze,Ae,Ue,D,T,X,ee,ae,Q,Ye,Ee,Qe,qe,le,ye,rt,nt,Fe,ct,k,Ce;function ve(){pe=new rv(F),pe.init(),ct=new yp(F,pe),_e=new $y(F,pe,e,ct),de=new kb(F,pe),_e.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),ze=new cv(F),Ae=new Tb,Ue=new zb(F,pe,de,Ae,_e,ct,ze),D=new jy(w),T=new sv(w),X=new dg(F),k=new Jy(F,X),ee=new av(F,X,ze,k),ae=new hv(F,ee,X,ze),rt=new lv(F,_e,Ue),qe=new Ky(Ae),Q=new wb(w,D,T,pe,_e,k,qe),Ye=new qb(w,Ae),Ee=new Cb,Qe=new Db(pe),ye=new Yy(w,D,T,de,ae,f,c),le=new Ob(w,ae,_e),Ce=new Yb(F,ze,_e,de),nt=new Zy(F,pe,ze),Fe=new ov(F,pe,ze),ze.programs=Q.programs,w.capabilities=_e,w.extensions=pe,w.properties=Ae,w.renderLists=Ee,w.shadowMap=le,w.state=de,w.info=ze}ve();const Me=new Wb(w,F);this.xr=Me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=pe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(q,ie,!1))},this.getSize=function(R){return R.set(q,ie)},this.setSize=function(R,V,$=!0){if(Me.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,ie=V,t.width=Math.floor(R*ce),t.height=Math.floor(V*ce),$===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(q*ce,ie*ce).floor()},this.setDrawingBufferSize=function(R,V,$){q=R,ie=V,ce=$,t.width=Math.floor(R*$),t.height=Math.floor(V*$),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(we)},this.setViewport=function(R,V,$,K){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,V,$,K),de.viewport(G.copy(we).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,V,$,K){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,V,$,K),de.scissor(J.copy(Te).multiplyScalar(ce).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){de.setScissorTest(be=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){Oe=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,$=!0){let K=0;if(R){let W=!1;if(M!==null){const ge=M.texture.format;W=m.has(ge)}if(W){const ge=M.texture.type,Le=g.has(ge),We=ye.getClearColor(),Be=ye.getClearAlpha(),it=We.r,at=We.g,Je=We.b;Le?(x[0]=it,x[1]=at,x[2]=Je,x[3]=Be,F.clearBufferuiv(F.COLOR,0,x)):(p[0]=it,p[1]=at,p[2]=Je,p[3]=Be,F.clearBufferiv(F.COLOR,0,p))}else K|=F.COLOR_BUFFER_BIT}V&&(K|=F.DEPTH_BUFFER_BIT),$&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",He,!1),ye.dispose(),Ee.dispose(),Qe.dispose(),Ae.dispose(),D.dispose(),T.dispose(),ae.dispose(),k.dispose(),Ce.dispose(),Q.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",oa),Me.removeEventListener("sessionend",ca),ni.stop()};function me(R){R.preventDefault(),qr("WebGLRenderer: Context Lost."),L=!0}function se(){qr("WebGLRenderer: Context Restored."),L=!1;const R=ze.autoReset,V=le.enabled,$=le.autoUpdate,K=le.needsUpdate,W=le.type;ve(),ze.autoReset=R,le.enabled=V,le.autoUpdate=$,le.needsUpdate=K,le.type=W}function He(R){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const V=R.target;V.removeEventListener("dispose",ht),Nt(V)}function Nt(R){gt(R),Ae.remove(R)}function gt(R){const V=Ae.get(R).programs;V!==void 0&&(V.forEach(function($){Q.releaseProgram($)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,$,K,W,ge){V===null&&(V=Rt);const Le=W.isMesh&&W.matrixWorld.determinant()<0,We=Bc(R,V,$,K,W);de.setMaterial(K,Le);let Be=$.index,it=1;if(K.wireframe===!0){if(Be=ee.getWireframeAttribute($),Be===void 0)return;it=2}const at=$.drawRange,Je=$.attributes.position;let _t=at.start*it,Et=(at.start+at.count)*it;ge!==null&&(_t=Math.max(_t,ge.start*it),Et=Math.min(Et,(ge.start+ge.count)*it)),Be!==null?(_t=Math.max(_t,0),Et=Math.min(Et,Be.count)):Je!=null&&(_t=Math.max(_t,0),Et=Math.min(Et,Je.count));const Bt=Et-_t;if(Bt<0||Bt===1/0)return;k.setup(W,K,We,$,Be);let Ut,It=nt;if(Be!==null&&(Ut=X.get(Be),It=Fe,It.setIndex(Ut)),W.isMesh)K.wireframe===!0?(de.setLineWidth(K.wireframeLinewidth*he()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(W.isLine){let tt=K.linewidth;tt===void 0&&(tt=1),de.setLineWidth(tt*he()),W.isLineSegments?It.setMode(F.LINES):W.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else W.isPoints?It.setMode(F.POINTS):W.isSprite&&It.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ks("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))It.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tt=W._multiDrawStarts,Ft=W._multiDrawCounts,vt=W._multiDrawCount,Mt=Be?X.get(Be).bytesPerElement:1,qn=Ae.get(K).currentProgram.getUniforms();for(let fn=0;fn<vt;fn++)qn.setValue(F,"_gl_DrawID",fn),It.render(tt[fn]/Mt,Ft[fn])}else if(W.isInstancedMesh)It.renderInstances(_t,Bt,W.count);else if($.isInstancedBufferGeometry){const tt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ft=Math.min($.instanceCount,tt);It.renderInstances(_t,Bt,Ft)}else It.render(_t,Bt)};function wn(R,V,$){R.transparent===!0&&R.side===Bn&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,_s(R,V,$),R.side=jn,R.needsUpdate=!0,_s(R,V,$),R.side=Bn):_s(R,V,$)}this.compile=function(R,V,$=null){$===null&&($=R),_=Qe.get($),_.init(V),C.push(_),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),R!==$&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const K=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Le=0;Le<ge.length;Le++){const We=ge[Le];wn(We,$,W),K.add(We)}else wn(ge,$,W),K.add(ge)}),_=C.pop(),K},this.compileAsync=function(R,V,$=null){const K=this.compile(R,V,$);return new Promise(W=>{function ge(){if(K.forEach(function(Le){Ae.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){W(R);return}setTimeout(ge,10)}pe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Tn=null;function Oc(R){Tn&&Tn(R)}function oa(){ni.stop()}function ca(){ni.start()}const ni=new pp;ni.setAnimationLoop(Oc),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(R){Tn=R,Me.setAnimationLoop(R),R===null?ni.stop():ni.start()},Me.addEventListener("sessionstart",oa),Me.addEventListener("sessionend",ca),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,V,M),_=Qe.get(R,C.length),_.init(V),C.push(_),Ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H.setFromProjectionMatrix(Ve,Rn,V.reversedDepth),fe=this.localClippingEnabled,Y=qe.init(this.clippingPlanes,fe),y=Ee.get(R,A.length),y.init(),A.push(y),Me.enabled===!0&&Me.isPresenting===!0){const ge=w.xr.getDepthSensingMesh();ge!==null&&hr(ge,V,-1/0,w.sortObjects)}hr(R,V,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(xe,Oe),ot=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ot&&ye.addToRenderList(y,R),this.info.render.frame++,Y===!0&&qe.beginShadows();const $=_.state.shadowsArray;le.render($,R,V),Y===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,W=y.transmissive;if(_.setupLights(),V.isArrayCamera){const ge=V.cameras;if(W.length>0)for(let Le=0,We=ge.length;Le<We;Le++){const Be=ge[Le];la(K,W,R,Be)}ot&&ye.render(R);for(let Le=0,We=ge.length;Le<We;Le++){const Be=ge[Le];ur(y,R,Be,Be.viewport)}}else W.length>0&&la(K,W,R,V),ot&&ye.render(R),ur(y,R,V);M!==null&&b===0&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(w,R,V),k.resetDefaultState(),O=-1,B=null,C.pop(),C.length>0?(_=C[C.length-1],Y===!0&&qe.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function hr(R,V,$,K){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){K&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Le=ae.update(R),We=R.material;We.visible&&y.push(R,Le,We,$,xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const Le=ae.update(R),We=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),xt.copy(Le.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(We)){const Be=Le.groups;for(let it=0,at=Be.length;it<at;it++){const Je=Be[it],_t=We[Je.materialIndex];_t&&_t.visible&&y.push(R,Le,_t,$,xt.z,Je)}}else We.visible&&y.push(R,Le,We,$,xt.z,null)}}const ge=R.children;for(let Le=0,We=ge.length;Le<We;Le++)hr(ge[Le],V,$,K)}function ur(R,V,$,K){const{opaque:W,transmissive:ge,transparent:Le}=R;_.setupLightsView($),Y===!0&&qe.setGlobalState(w.clippingPlanes,$),K&&de.viewport(G.copy(K)),W.length>0&&ki(W,V,$),ge.length>0&&ki(ge,V,$),Le.length>0&&ki(Le,V,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function la(R,V,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new Qn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?ms:Gn,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const ge=_.state.transmissionRenderTarget[K.id],Le=K.viewport||G;ge.setSize(Le.z*w.transmissionResolutionScale,Le.w*w.transmissionResolutionScale);const We=w.getRenderTarget(),Be=w.getActiveCubeFace(),it=w.getActiveMipmapLevel();w.setRenderTarget(ge),w.getClearColor(z),ne=w.getClearAlpha(),ne<1&&w.setClearColor(16777215,.5),w.clear(),ot&&ye.render($);const at=w.toneMapping;w.toneMapping=pi;const Je=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),Y===!0&&qe.setGlobalState(w.clippingPlanes,K),ki(R,$,K),Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge),pe.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Et=0,Bt=V.length;Et<Bt;Et++){const Ut=V[Et],{object:It,geometry:tt,material:Ft,group:vt}=Ut;if(Ft.side===Bn&&It.layers.test(K.layers)){const Mt=Ft.side;Ft.side=_n,Ft.needsUpdate=!0,ha(It,$,K,tt,Ft,vt),Ft.side=Mt,Ft.needsUpdate=!0,_t=!0}}_t===!0&&(Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge))}w.setRenderTarget(We,Be,it),w.setClearColor(z,ne),Je!==void 0&&(K.viewport=Je),w.toneMapping=at}function ki(R,V,$){const K=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ge=R.length;W<ge;W++){const Le=R[W],{object:We,geometry:Be,group:it}=Le;let at=Le.material;at.allowOverride===!0&&K!==null&&(at=K),We.layers.test($.layers)&&ha(We,V,$,Be,at,it)}}function ha(R,V,$,K,W,ge){R.onBeforeRender(w,V,$,K,W,ge),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(w,V,$,K,R,ge),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,w.renderBufferDirect($,V,K,W,R,ge),W.side=jn,W.needsUpdate=!0,w.renderBufferDirect($,V,K,W,R,ge),W.side=Bn):w.renderBufferDirect($,V,K,W,R,ge),R.onAfterRender(w,V,$,K,W,ge)}function _s(R,V,$){V.isScene!==!0&&(V=Rt);const K=Ae.get(R),W=_.state.lights,ge=_.state.shadowsArray,Le=W.state.version,We=Q.getParameters(R,W.state,ge,V,$),Be=Q.getProgramCacheKey(We);let it=K.programs;K.environment=R.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(R.isMeshStandardMaterial?T:D).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",ht),it=new Map,K.programs=it);let at=it.get(Be);if(at!==void 0){if(K.currentProgram===at&&K.lightsStateVersion===Le)return da(R,We),at}else We.uniforms=Q.getUniforms(R),R.onBeforeCompile(We,w),at=Q.acquireProgram(We,Be),it.set(Be,at),K.uniforms=We.uniforms;const Je=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=qe.uniform),da(R,We),K.needsLights=zc(R),K.lightsStateVersion=Le,K.needsLights&&(Je.ambientLightColor.value=W.state.ambient,Je.lightProbe.value=W.state.probe,Je.directionalLights.value=W.state.directional,Je.directionalLightShadows.value=W.state.directionalShadow,Je.spotLights.value=W.state.spot,Je.spotLightShadows.value=W.state.spotShadow,Je.rectAreaLights.value=W.state.rectArea,Je.ltc_1.value=W.state.rectAreaLTC1,Je.ltc_2.value=W.state.rectAreaLTC2,Je.pointLights.value=W.state.point,Je.pointLightShadows.value=W.state.pointShadow,Je.hemisphereLights.value=W.state.hemi,Je.directionalShadowMap.value=W.state.directionalShadowMap,Je.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Je.spotShadowMap.value=W.state.spotShadowMap,Je.spotLightMatrix.value=W.state.spotLightMatrix,Je.spotLightMap.value=W.state.spotLightMap,Je.pointShadowMap.value=W.state.pointShadowMap,Je.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=at,K.uniformsList=null,at}function ua(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ho.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function da(R,V){const $=Ae.get(R);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Bc(R,V,$,K,W){V.isScene!==!0&&(V=Rt),Ue.resetTextureUnits();const ge=V.fog,Le=K.isMeshStandardMaterial?V.environment:null,We=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:hs,Be=(K.isMeshStandardMaterial?T:D).get(K.envMap||Le),it=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Je=!!$.morphAttributes.position,_t=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let Bt=pi;K.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const Ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,It=Ut!==void 0?Ut.length:0,tt=Ae.get(K),Ft=_.state.lights;if(Y===!0&&(fe===!0||R!==B)){const qt=R===B&&K.id===O;qe.setState(K,R,qt)}let vt=!1;K.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ft.state.version||tt.outputColorSpace!==We||W.isBatchedMesh&&tt.batching===!1||!W.isBatchedMesh&&tt.batching===!0||W.isBatchedMesh&&tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&tt.instancing===!1||!W.isInstancedMesh&&tt.instancing===!0||W.isSkinnedMesh&&tt.skinning===!1||!W.isSkinnedMesh&&tt.skinning===!0||W.isInstancedMesh&&tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&tt.instancingMorph===!1&&W.morphTexture!==null||tt.envMap!==Be||K.fog===!0&&tt.fog!==ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==qe.numPlanes||tt.numIntersection!==qe.numIntersection)||tt.vertexAlphas!==it||tt.vertexTangents!==at||tt.morphTargets!==Je||tt.morphNormals!==_t||tt.morphColors!==Et||tt.toneMapping!==Bt||tt.morphTargetsCount!==It)&&(vt=!0):(vt=!0,tt.__version=K.version);let Mt=tt.currentProgram;vt===!0&&(Mt=_s(K,V,W));let qn=!1,fn=!1,yi=!1;const Dt=Mt.getUniforms(),Kt=tt.uniforms;if(de.useProgram(Mt.program)&&(qn=!0,fn=!0,yi=!0),K.id!==O&&(O=K.id,fn=!0),qn||B!==R){de.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Dt.setValue(F,"projectionMatrix",R.projectionMatrix),Dt.setValue(F,"viewMatrix",R.matrixWorldInverse);const en=Dt.map.cameraPosition;en!==void 0&&en.setValue(F,Ge.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,fn=!0,yi=!0)}if(W.isSkinnedMesh){Dt.setOptional(F,W,"bindMatrix"),Dt.setOptional(F,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Dt.setValue(F,"boneTexture",qt.boneTexture,Ue))}W.isBatchedMesh&&(Dt.setOptional(F,W,"batchingTexture"),Dt.setValue(F,"batchingTexture",W._matricesTexture,Ue),Dt.setOptional(F,W,"batchingIdTexture"),Dt.setValue(F,"batchingIdTexture",W._indirectTexture,Ue),Dt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(F,"batchingColorTexture",W._colorsTexture,Ue));const Qt=$.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&rt.update(W,$,Mt),(fn||tt.receiveShadow!==W.receiveShadow)&&(tt.receiveShadow=W.receiveShadow,Dt.setValue(F,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Kt.envMap.value=Be,Kt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Kt.envMapIntensity.value=V.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Zb()),fn&&(Dt.setValue(F,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&kc(Kt,yi),ge&&K.fog===!0&&Ye.refreshFogUniforms(Kt,ge),Ye.refreshMaterialUniforms(Kt,K,ce,ie,_.state.transmissionRenderTarget[R.id]),ho.upload(F,ua(tt),Kt,Ue)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ho.upload(F,ua(tt),Kt,Ue),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(F,"center",W.center),Dt.setValue(F,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(F,"normalMatrix",W.normalMatrix),Dt.setValue(F,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const qt=K.uniformsGroups;for(let en=0,dr=qt.length;en<dr;en++){const je=qt[en];Ce.update(je,Mt),Ce.bind(je,Mt)}}return Mt}function kc(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function zc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,V,$){const K=Ae.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ae.get(R.texture).__webglTexture=V,Ae.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const $=Ae.get(R);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};const Vc=F.createFramebuffer();this.setRenderTarget=function(R,V=0,$=0){M=R,N=V,b=$;let K=!0,W=null,ge=!1,Le=!1;if(R){const Be=Ae.get(R);if(Be.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)Ue.setupRenderTarget(R);else if(Be.__hasExternalTextures)Ue.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Be.__boundDepthTexture!==Je){if(Je!==null&&Ae.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const at=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[V])?W=at[V][$]:W=at[V],ge=!0):R.samples>0&&Ue.useMultisampledRTT(R)===!1?W=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?W=at[$]:W=at,G.copy(R.viewport),J.copy(R.scissor),Z=R.scissorTest}else G.copy(we).multiplyScalar(ce).floor(),J.copy(Te).multiplyScalar(ce).floor(),Z=be;if($!==0&&(W=Vc),de.bindFramebuffer(F.FRAMEBUFFER,W)&&K&&de.drawBuffers(R,W),de.viewport(G),de.scissor(J),de.setScissorTest(Z),ge){const Be=Ae.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,$)}else if(Le){const Be=V;for(let it=0;it<R.textures.length;it++){const at=Ae.get(R.textures[it]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+it,at.__webglTexture,$,Be)}}else if(R!==null&&$!==0){const Be=Ae.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,$)}O=-1},this.readRenderTargetPixels=function(R,V,$,K,W,ge,Le,We=0){if(!(R&&R.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){de.bindFramebuffer(F.FRAMEBUFFER,Be);try{const it=R.textures[We],at=it.format,Je=it.type;if(!_e.textureFormatReadable(at)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Je)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-K&&$>=0&&$<=R.height-W&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We),F.readPixels(V,$,K,W,ct.convert(at),ct.convert(Je),ge))}finally{const it=M!==null?Ae.get(M).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,V,$,K,W,ge,Le,We=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be)if(V>=0&&V<=R.width-K&&$>=0&&$<=R.height-W){de.bindFramebuffer(F.FRAMEBUFFER,Be);const it=R.textures[We],at=it.format,Je=it.type;if(!_e.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We),F.readPixels(V,$,K,W,ct.convert(at),ct.convert(Je),0);const Et=M!==null?Ae.get(M).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,Et);const Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pm(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(_t),F.deleteSync(Bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,$=0){const K=Math.pow(2,-$),W=Math.floor(R.image.width*K),ge=Math.floor(R.image.height*K),Le=V!==null?V.x:0,We=V!==null?V.y:0;Ue.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Le,We,W,ge),de.unbindTexture()};const Gc=F.createFramebuffer(),Hc=F.createFramebuffer();this.copyTextureToTexture=function(R,V,$=null,K=null,W=0,ge=null){ge===null&&(W!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let Le,We,Be,it,at,Je,_t,Et,Bt;const Ut=R.isCompressedTexture?R.mipmaps[ge]:R.image;if($!==null)Le=$.max.x-$.min.x,We=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,it=$.min.x,at=$.min.y,Je=$.isBox3?$.min.z:0;else{const Qt=Math.pow(2,-W);Le=Math.floor(Ut.width*Qt),We=Math.floor(Ut.height*Qt),R.isDataArrayTexture?Be=Ut.depth:R.isData3DTexture?Be=Math.floor(Ut.depth*Qt):Be=1,it=0,at=0,Je=0}K!==null?(_t=K.x,Et=K.y,Bt=K.z):(_t=0,Et=0,Bt=0);const It=ct.convert(V.format),tt=ct.convert(V.type);let Ft;V.isData3DTexture?(Ue.setTexture3D(V,0),Ft=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ue.setTexture2DArray(V,0),Ft=F.TEXTURE_2D_ARRAY):(Ue.setTexture2D(V,0),Ft=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),Mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),qn=F.getParameter(F.UNPACK_SKIP_PIXELS),fn=F.getParameter(F.UNPACK_SKIP_ROWS),yi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,it),F.pixelStorei(F.UNPACK_SKIP_ROWS,at),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const Dt=R.isDataArrayTexture||R.isData3DTexture,Kt=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Qt=Ae.get(R),qt=Ae.get(V),en=Ae.get(Qt.__renderTarget),dr=Ae.get(qt.__renderTarget);de.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let je=0;je<Be;je++)Dt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(R).__webglTexture,W,Je+je),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(V).__webglTexture,ge,Bt+je)),F.blitFramebuffer(it,at,Le,We,_t,Et,Le,We,F.DEPTH_BUFFER_BIT,F.NEAREST);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Ae.has(R)){const Qt=Ae.get(R),qt=Ae.get(V);de.bindFramebuffer(F.READ_FRAMEBUFFER,Gc),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hc);for(let en=0;en<Be;en++)Dt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,W,Je+en):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,W),Kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,ge,Bt+en):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,ge),W!==0?F.blitFramebuffer(it,at,Le,We,_t,Et,Le,We,F.COLOR_BUFFER_BIT,F.NEAREST):Kt?F.copyTexSubImage3D(Ft,ge,_t,Et,Bt+en,it,at,Le,We):F.copyTexSubImage2D(Ft,ge,_t,Et,it,at,Le,We);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kt?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ft,ge,_t,Et,Bt,Le,We,Be,It,tt,Ut.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,ge,_t,Et,Bt,Le,We,Be,It,Ut.data):F.texSubImage3D(Ft,ge,_t,Et,Bt,Le,We,Be,It,tt,Ut):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,_t,Et,Le,We,It,tt,Ut.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,_t,Et,Ut.width,Ut.height,It,Ut.data):F.texSubImage2D(F.TEXTURE_2D,ge,_t,Et,Le,We,It,tt,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qn),F.pixelStorei(F.UNPACK_SKIP_ROWS,fn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yi),ge===0&&V.generateMipmaps&&F.generateMipmap(Ft),de.unbindTexture()},this.initRenderTarget=function(R){Ae.get(R).__webglFramebuffer===void 0&&Ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ue.setTextureCube(R,0):R.isData3DTexture?Ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ue.setTexture2DArray(R,0):Ue.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){N=0,b=0,M=null,de.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const sM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Kd,AddEquation:Ri,AddOperation:Yd,AdditiveAnimationBlendMode:sh,AdditiveBlending:Fl,AgXToneMapping:Qd,AlphaFormat:nh,AlwaysCompare:mf,AlwaysDepth:mo,AlwaysStencilFunc:zl,AmbientLight:Fh,AnimationAction:dp,AnimationClip:ps,AnimationLoader:ix,AnimationMixer:Ix,AnimationObjectGroup:Cx,AnimationUtils:Q0,ArcCurve:Nf,ArrayCamera:cp,ArrowHelper:ig,AttachedBindMode:kl,Audio:hp,AudioAnalyser:_x,AudioContext:Oh,AudioListener:mx,AudioLoader:dx,AxesHelper:sg,BackSide:_n,BasicDepthPacking:af,BasicShadowMap:Cp,BatchedMesh:Cf,Bone:gc,BooleanKeyframeTrack:xs,Box2:Vx,Box3:un,Box3Helper:tg,BoxGeometry:Fi,BoxHelper:eg,BufferAttribute:Ct,BufferGeometry:dt,BufferGeometryLoader:op,ByteType:jl,Cache:$n,Camera:fc,CameraHelper:Qx,CanvasTexture:M0,CapsuleGeometry:vc,CatmullRomCurve3:Df,CineonToneMapping:$d,CircleGeometry:bc,ClampToEdgeWrapping:hn,Clock:lp,Color:De,ColorKeyframeTrack:Ch,ColorManagement:yt,CompressedArrayTexture:v0,CompressedCubeTexture:b0,CompressedTexture:yc,CompressedTextureLoader:sx,ConeGeometry:ia,ConstantAlphaFactor:Wd,ConstantColorFactor:Gd,Controls:ag,CubeCamera:Mf,CubeReflectionMapping:xi,CubeRefractionMapping:Ni,CubeTexture:ta,CubeTextureLoader:rx,CubeUVReflectionMapping:nr,CubicBezierCurve:gh,CubicBezierCurve3:Uf,CubicInterpolant:jf,CullFaceBack:Ul,CullFaceFront:Td,CullFaceFrontBack:Ep,CullFaceNone:wd,Curve:Xn,CurvePath:Of,CustomBlending:Cd,CustomToneMapping:jd,CylinderGeometry:rr,Cylindrical:zx,Data3DTexture:uc,DataArrayTexture:hc,DataTexture:Vn,DataTextureLoader:tp,DataUtils:Xm,DecrementStencilOp:Gp,DecrementWrapStencilOp:Wp,DefaultLoadingManager:Ih,DepthFormat:Js,DepthStencilFormat:Zs,DepthTexture:ph,DetachedBindMode:tf,DirectionalLight:Uh,DirectionalLightHelper:jx,DiscreteInterpolant:Qf,DodecahedronGeometry:Mc,DoubleSide:Bn,DstAlphaFactor:Od,DstColorFactor:kd,DynamicCopyUsage:rm,DynamicDrawUsage:Qp,DynamicReadUsage:nm,EdgesGeometry:Lf,EllipseCurve:Sc,EqualCompare:uf,EqualDepth:go,EqualStencilFunc:Jp,EquirectangularReflectionMapping:Br,EquirectangularRefractionMapping:kr,Euler:yn,EventDispatcher:ti,ExternalTexture:mh,ExtrudeGeometry:Ac,FileLoader:Hn,Float16BufferAttribute:jm,Float32BufferAttribute:Pe,FloatType:An,Fog:mc,FogExp2:pc,FramebufferTexture:y0,FrontSide:jn,Frustum:sr,FrustumArray:_c,GLBufferAttribute:Ux,GLSL1:om,GLSL3:Vl,GreaterCompare:df,GreaterDepth:yo,GreaterEqualCompare:pf,GreaterEqualDepth:_o,GreaterEqualStencilFunc:jp,GreaterStencilFunc:$p,GridHelper:$x,Group:Pi,HalfFloatType:ms,HemisphereLight:np,HemisphereLightHelper:Zx,IcosahedronGeometry:wc,ImageBitmapLoader:ux,ImageLoader:Kr,ImageUtils:_f,IncrementStencilOp:Vp,IncrementWrapStencilOp:Hp,InstancedBufferAttribute:er,InstancedBufferGeometry:ap,InstancedInterleavedBuffer:Dx,InstancedMesh:Ef,Int16BufferAttribute:$m,Int32BufferAttribute:Km,Int8BufferAttribute:Ym,IntType:nc,InterleavedBuffer:xc,InterleavedBufferAttribute:us,Interpolant:ra,InterpolateDiscrete:Vr,InterpolateLinear:Zo,InterpolateSmooth:co,InterpolationSamplingMode:hm,InterpolationSamplingType:lm,InvertStencilOp:Xp,KeepStencilOp:es,KeyframeTrack:Nn,LOD:Tf,LatheGeometry:Tc,Layers:dc,LessCompare:hf,LessDepth:xo,LessEqualCompare:rh,LessEqualDepth:ls,LessEqualStencilFunc:Zp,LessStencilFunc:Yp,Light:Bi,LightProbe:rp,Line:_i,Line3:Wx,LineBasicMaterial:rn,LineCurve:_h,LineCurve3:Ff,LineDashedMaterial:Zf,LineLoop:Rf,LineSegments:Wn,LinearFilter:Xt,LinearInterpolant:Eh,LinearMipMapLinearFilter:Lp,LinearMipMapNearestFilter:Pp,LinearMipmapLinearFilter:kn,LinearMipmapNearestFilter:Ir,LinearSRGBColorSpace:hs,LinearToneMapping:Jd,LinearTransfer:Hr,Loader:an,LoaderUtils:jr,LoadingManager:Rh,LoopOnce:nf,LoopPingPong:rf,LoopRepeat:sf,MOUSE:wp,Material:dn,MaterialLoader:Nc,MathUtils:Gs,Matrix2:Vh,Matrix3:ft,Matrix4:$e,MaxEquation:Ld,Mesh:Ot,MeshBasicMaterial:ei,MeshDepthMaterial:Ah,MeshDistanceMaterial:wh,MeshLambertMaterial:Sh,MeshMatcapMaterial:Jf,MeshNormalMaterial:Yf,MeshPhongMaterial:cs,MeshPhysicalMaterial:Xf,MeshStandardMaterial:Mh,MeshToonMaterial:qf,MinEquation:Pd,MirroredRepeatWrapping:zr,MixOperation:qd,MultiplyBlending:Bl,MultiplyOperation:Qr,NearestFilter:tn,NearestMipMapLinearFilter:Ip,NearestMipMapNearestFilter:Rp,NearestMipmapLinearFilter:Hs,NearestMipmapNearestFilter:Kl,NeutralToneMapping:ef,NeverCompare:lf,NeverDepth:po,NeverStencilFunc:qp,NoBlending:Kn,NoColorSpace:ui,NoToneMapping:pi,NormalAnimationBlendMode:lc,NormalBlending:rs,NotEqualCompare:ff,NotEqualDepth:vo,NotEqualStencilFunc:Kp,NumberKeyframeTrack:$r,Object3D:bt,ObjectLoader:lx,ObjectSpaceNormalMap:cf,OctahedronGeometry:sa,OneFactor:Dd,OneMinusConstantAlphaFactor:Xd,OneMinusConstantColorFactor:Hd,OneMinusDstAlphaFactor:Bd,OneMinusDstColorFactor:zd,OneMinusSrcAlphaFactor:fo,OneMinusSrcColorFactor:Fd,OrthographicCamera:aa,PCFShadowMap:$l,PCFSoftShadowMap:Ed,PMREMGenerator:Jl,Path:Qo,PerspectiveCamera:Jt,Plane:Ci,PlaneGeometry:ar,PlaneHelper:ng,PointLight:Dh,PointLightHelper:Yx,Points:If,PointsMaterial:fh,PolarGridHelper:Kx,PolyhedronGeometry:Oi,PositionalAudio:gx,PropertyBinding:St,PropertyMixer:up,QuadraticBezierCurve:yh,QuadraticBezierCurve3:vh,Quaternion:nn,QuaternionKeyframeTrack:cr,QuaternionLinearInterpolant:ep,RED_GREEN_RGTC2_Format:Yo,RED_RGTC1_Format:Xo,REVISION:ec,RGBADepthPacking:of,RGBAFormat:gn,RGBAIntegerFormat:cc,RGBA_ASTC_10x10_Format:ko,RGBA_ASTC_10x5_Format:Fo,RGBA_ASTC_10x6_Format:Oo,RGBA_ASTC_10x8_Format:Bo,RGBA_ASTC_12x10_Format:zo,RGBA_ASTC_12x12_Format:Vo,RGBA_ASTC_4x4_Format:Co,RGBA_ASTC_5x4_Format:Ro,RGBA_ASTC_5x5_Format:Io,RGBA_ASTC_6x5_Format:Po,RGBA_ASTC_6x6_Format:Lo,RGBA_ASTC_8x5_Format:No,RGBA_ASTC_8x6_Format:Do,RGBA_ASTC_8x8_Format:Uo,RGBA_BPTC_Format:Go,RGBA_ETC2_EAC_Format:Eo,RGBA_PVRTC_2BPPV1_Format:Ao,RGBA_PVRTC_4BPPV1_Format:So,RGBA_S3TC_DXT1_Format:Lr,RGBA_S3TC_DXT3_Format:Nr,RGBA_S3TC_DXT5_Format:Dr,RGBDepthPacking:Op,RGBFormat:ih,RGBIntegerFormat:Np,RGB_BPTC_SIGNED_Format:Ho,RGB_BPTC_UNSIGNED_Format:Wo,RGB_ETC1_Format:wo,RGB_ETC2_Format:To,RGB_PVRTC_2BPPV1_Format:Mo,RGB_PVRTC_4BPPV1_Format:bo,RGB_S3TC_DXT1_Format:Pr,RGDepthPacking:Bp,RGFormat:ac,RGIntegerFormat:oc,RawShaderMaterial:Wf,Ray:ir,Raycaster:Fx,RectAreaLight:ip,RedFormat:rc,RedIntegerFormat:ea,ReinhardToneMapping:Zd,RenderTarget:oh,RenderTarget3D:Px,RepeatWrapping:fi,ReplaceStencilOp:zp,ReverseSubtractEquation:Id,RingGeometry:Ec,SIGNED_RED_GREEN_RGTC2_Format:Jo,SIGNED_RED_RGTC1_Format:qo,SRGBColorSpace:kt,SRGBTransfer:Lt,Scene:hh,ShaderChunk:mt,ShaderLib:On,ShaderMaterial:Ln,ShadowMaterial:Hf,Shape:os,ShapeGeometry:Cc,ShapePath:rg,ShapeUtils:zn,ShortType:Ql,Skeleton:na,SkeletonHelper:qx,SkinnedMesh:dh,Source:Ii,Sphere:sn,SphereGeometry:or,Spherical:kx,SphericalHarmonics3:sp,SplineCurve:bh,SpotLight:Nh,SpotLightHelper:Xx,Sprite:wf,SpriteMaterial:uh,SrcAlphaFactor:uo,SrcAlphaSaturateFactor:Vd,SrcColorFactor:Ud,StaticCopyUsage:sm,StaticDrawUsage:Wr,StaticReadUsage:tm,StereoCamera:fx,StreamCopyUsage:am,StreamDrawUsage:em,StreamReadUsage:im,StringKeyframeTrack:gs,SubtractEquation:Rd,SubtractiveBlending:Ol,TOUCH:Tp,TangentSpaceNormalMap:Ui,TetrahedronGeometry:Rc,Texture:Ht,TextureLoader:Ph,TextureUtils:ug,Timer:Ox,TimestampQuery:cm,TorusGeometry:Ic,TorusKnotGeometry:Pc,Triangle:Sn,TriangleFanDrawMode:Fp,TriangleStripDrawMode:Up,TrianglesDrawMode:Dp,TubeGeometry:Lc,UVMapping:tc,Uint16BufferAttribute:ch,Uint32BufferAttribute:lh,Uint8BufferAttribute:Jm,Uint8ClampedBufferAttribute:Zm,Uniform:zh,UniformsGroup:Nx,UniformsLib:Re,UniformsUtils:bf,UnsignedByteType:Gn,UnsignedInt101111Type:th,UnsignedInt248Type:Ys,UnsignedInt5999Type:eh,UnsignedIntType:gi,UnsignedShort4444Type:ic,UnsignedShort5551Type:sc,UnsignedShortType:qs,VSMShadowMap:Zn,Vector2:re,Vector3:U,Vector4:At,VectorKeyframeTrack:fs,VideoFrameTexture:_0,VideoTexture:Pf,WebGL3DRenderTarget:Um,WebGLArrayRenderTarget:Dm,WebGLCoordinateSystem:Rn,WebGLCubeRenderTarget:Sf,WebGLRenderTarget:Qn,WebGLRenderer:$b,WebGLUtils:yp,WebGPUCoordinateSystem:$s,WebXRController:lo,WireframeGeometry:Gf,WrapAroundEnding:Gr,ZeroCurvatureEnding:ns,ZeroFactor:Nd,ZeroSlopeEnding:is,ZeroStencilOp:kp,createCanvasElement:gf,error:ut,getConsoleFunction:fm,log:qr,setConsoleFunction:dm,warn:Ie,warnOnce:Ks},Symbol.toStringTag,{value:"Module"}));class Kb extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Hn(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const m=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(m,h,g))return!1;return!0}function n(l,h,u){for(let d=0,f=l.length;d<f;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function i(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,f,m,g=!1,x,p,y,_,A;for(let O=0;O<70;O++)h.getUint32(O,!1)==1129270351&&h.getUint8(O+4)==82&&h.getUint8(O+5)==61&&(g=!0,x=new Float32Array(u*3*3),p=h.getUint8(O+6)/255,y=h.getUint8(O+7)/255,_=h.getUint8(O+8)/255,A=h.getUint8(O+9)/255);const C=84,w=50,L=new dt,N=new Float32Array(u*3*3),b=new Float32Array(u*3*3),M=new De;for(let O=0;O<u;O++){const B=C+O*w,G=h.getFloat32(B,!0),J=h.getFloat32(B+4,!0),Z=h.getFloat32(B+8,!0);if(g){const z=h.getUint16(B+48,!0);(z&32768)===0?(d=(z&31)/31,f=(z>>5&31)/31,m=(z>>10&31)/31):(d=p,f=y,m=_)}for(let z=1;z<=3;z++){const ne=B+z*12,q=O*3*3+(z-1)*3;N[q]=h.getFloat32(ne,!0),N[q+1]=h.getFloat32(ne+4,!0),N[q+2]=h.getFloat32(ne+8,!0),b[q]=G,b[q+1]=J,b[q+2]=Z,g&&(M.setRGB(d,f,m,kt),x[q]=M.r,x[q+1]=M.g,x[q+2]=M.b)}}return L.setAttribute("position",new Ct(N,3)),L.setAttribute("normal",new Ct(b,3)),g&&(L.setAttribute("color",new Ct(x,3)),L.hasColors=!0,L.alpha=A),L}function s(l){const h=new dt,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let m=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),y=[],_=[],A=[],C=new U;let w,L=0,N=0,b=0;for(;(w=u.exec(l))!==null;){N=b;const M=w[0],O=(w=f.exec(M))!==null?w[1]:"";for(A.push(O);(w=d.exec(M))!==null;){let J=0,Z=0;const z=w[0];for(;(w=p.exec(z))!==null;)C.x=parseFloat(w[1]),C.y=parseFloat(w[2]),C.z=parseFloat(w[3]),Z++;for(;(w=x.exec(z))!==null;)y.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),_.push(C.x,C.y,C.z),J++,b++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const B=N,G=b-N;h.userData.groupNames=A,h.addGroup(B,G,L),L++}return h.setAttribute("position",new Pe(y,3)),h.setAttribute("normal",new Pe(_,3)),h}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=o(e);return t(c)?i(c):s(a(e))}}class vd extends tp{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case d:case g:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case m:case x:case p:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function n(z,ne,q,ie,ce){let xe,Oe;const we=q.pixel_size>>3,Te=q.width*q.height*we;if(ne&&(Oe=ce.subarray(ie,ie+=q.colormap_length*(q.colormap_size>>3))),z){xe=new Uint8Array(Te);let be,H,Y,fe=0;const Ve=new Uint8Array(we);for(;fe<Te;)if(be=ce[ie++],H=(be&127)+1,be&128){for(Y=0;Y<we;++Y)Ve[Y]=ce[ie++];for(Y=0;Y<H;++Y)xe.set(Ve,fe+Y*we);fe+=we*H}else{for(H*=we,Y=0;Y<H;++Y)xe[fe+Y]=ce[ie++];fe+=H}}else xe=ce.subarray(ie,ie+=ne?q.width*q.height:Te);return{pixel_data:xe,palettes:Oe}}function i(z,ne,q,ie,ce,xe,Oe,we,Te){const be=Te;let H,Y=0,fe,Ve;const Ge=M.width;for(Ve=ne;Ve!==ie;Ve+=q)for(fe=ce;fe!==Oe;fe+=xe,Y++)H=we[Y],z[(fe+Ge*Ve)*4+3]=255,z[(fe+Ge*Ve)*4+2]=be[H*3+0],z[(fe+Ge*Ve)*4+1]=be[H*3+1],z[(fe+Ge*Ve)*4+0]=be[H*3+2];return z}function s(z,ne,q,ie,ce,xe,Oe,we){let Te,be=0,H,Y;const fe=M.width;for(Y=ne;Y!==ie;Y+=q)for(H=ce;H!==Oe;H+=xe,be+=2)Te=we[be+0]+(we[be+1]<<8),z[(H+fe*Y)*4+0]=(Te&31744)>>7,z[(H+fe*Y)*4+1]=(Te&992)>>2,z[(H+fe*Y)*4+2]=(Te&31)<<3,z[(H+fe*Y)*4+3]=Te&32768?0:255;return z}function a(z,ne,q,ie,ce,xe,Oe,we){let Te=0,be,H;const Y=M.width;for(H=ne;H!==ie;H+=q)for(be=ce;be!==Oe;be+=xe,Te+=3)z[(be+Y*H)*4+3]=255,z[(be+Y*H)*4+2]=we[Te+0],z[(be+Y*H)*4+1]=we[Te+1],z[(be+Y*H)*4+0]=we[Te+2];return z}function o(z,ne,q,ie,ce,xe,Oe,we){let Te=0,be,H;const Y=M.width;for(H=ne;H!==ie;H+=q)for(be=ce;be!==Oe;be+=xe,Te+=4)z[(be+Y*H)*4+2]=we[Te+0],z[(be+Y*H)*4+1]=we[Te+1],z[(be+Y*H)*4+0]=we[Te+2],z[(be+Y*H)*4+3]=we[Te+3];return z}function c(z,ne,q,ie,ce,xe,Oe,we){let Te,be=0,H,Y;const fe=M.width;for(Y=ne;Y!==ie;Y+=q)for(H=ce;H!==Oe;H+=xe,be++)Te=we[be],z[(H+fe*Y)*4+0]=Te,z[(H+fe*Y)*4+1]=Te,z[(H+fe*Y)*4+2]=Te,z[(H+fe*Y)*4+3]=255;return z}function l(z,ne,q,ie,ce,xe,Oe,we){let Te=0,be,H;const Y=M.width;for(H=ne;H!==ie;H+=q)for(be=ce;be!==Oe;be+=xe,Te+=2)z[(be+Y*H)*4+0]=we[Te+0],z[(be+Y*H)*4+1]=we[Te+0],z[(be+Y*H)*4+2]=we[Te+0],z[(be+Y*H)*4+3]=we[Te+1];return z}function h(z,ne,q,ie,ce){let xe,Oe,we,Te,be,H;switch((M.flags&y)>>_){default:case w:xe=0,we=1,be=ne,Oe=0,Te=1,H=q;break;case A:xe=0,we=1,be=ne,Oe=q-1,Te=-1,H=-1;break;case L:xe=ne-1,we=-1,be=-1,Oe=0,Te=1,H=q;break;case C:xe=ne-1,we=-1,be=-1,Oe=q-1,Te=-1,H=-1;break}if(G)switch(M.pixel_size){case 8:c(z,Oe,Te,H,xe,we,be,ie);break;case 16:l(z,Oe,Te,H,xe,we,be,ie);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(M.pixel_size){case 8:i(z,Oe,Te,H,xe,we,be,ie,ce);break;case 16:s(z,Oe,Te,H,xe,we,be,ie);break;case 24:a(z,Oe,Te,H,xe,we,be,ie);break;case 32:o(z,Oe,Te,H,xe,we,be,ie);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}const u=0,d=1,f=2,m=3,g=9,x=10,p=11,y=48,_=4,A=0,C=1,w=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const b=new Uint8Array(e),M={id_length:b[N++],colormap_type:b[N++],image_type:b[N++],colormap_index:b[N++]|b[N++]<<8,colormap_length:b[N++]|b[N++]<<8,colormap_size:b[N++],origin:[b[N++]|b[N++]<<8,b[N++]|b[N++]<<8],width:b[N++]|b[N++]<<8,height:b[N++]|b[N++]<<8,pixel_size:b[N++],flags:b[N++]};if(t(M),M.id_length+N>e.length)throw new Error("THREE.TGALoader: No data.");N+=M.id_length;let O=!1,B=!1,G=!1;switch(M.image_type){case g:O=!0,B=!0;break;case d:B=!0;break;case x:O=!0;break;case f:break;case p:O=!0,G=!0;break;case m:G=!0;break}const J=new Uint8Array(M.width*M.height*4),Z=n(O,B,M,N,b);return h(J,M.width,M.height,Z.pixel_data,Z.palettes),{data:J,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:kn}}}class jb extends an{load(e,t,n,i){const s=this,a=s.path===""?jr.extractUrlBase(e):s.path,o=new Hn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(c,a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e,t){function n(S,v){const I=[],E=S.childNodes;for(let P=0,j=E.length;P<j;P++){const te=E[P];te.nodeName===v&&I.push(te)}return I}function i(S){if(S.length===0)return[];const v=S.trim().split(/\s+/),I=new Array(v.length);for(let E=0,P=v.length;E<P;E++)I[E]=v[E];return I}function s(S){if(S.length===0)return[];const v=S.trim().split(/\s+/),I=new Array(v.length);for(let E=0,P=v.length;E<P;E++)I[E]=parseFloat(v[E]);return I}function a(S){if(S.length===0)return[];const v=S.trim().split(/\s+/),I=new Array(v.length);for(let E=0,P=v.length;E<P;E++)I[E]=parseInt(v[E]);return I}function o(S){return S.substring(1)}function c(){return"three_default_"+dr++}function l(S){return Object.keys(S).length===0}function h(S){return{unit:u(n(S,"unit")[0]),upAxis:d(n(S,"up_axis")[0])}}function u(S){return S!==void 0&&S.hasAttribute("meter")===!0?parseFloat(S.getAttribute("meter")):1}function d(S){return S!==void 0?S.textContent:"Y_UP"}function f(S,v,I,E){const P=n(S,v)[0];if(P!==void 0){const j=n(P,I);for(let te=0;te<j.length;te++)E(j[te])}}function m(S,v){for(const I in S){const E=S[I];E.build=v(S[I])}}function g(S,v){return S.build!==void 0||(S.build=v(S)),S.build}function x(S){const v={sources:{},samplers:{},channels:{}};let I=!1;for(let E=0,P=S.childNodes.length;E<P;E++){const j=S.childNodes[E];if(j.nodeType!==1)continue;let te;switch(j.nodeName){case"source":te=j.getAttribute("id"),v.sources[te]=ve(j);break;case"sampler":te=j.getAttribute("id"),v.samplers[te]=p(j);break;case"channel":te=j.getAttribute("target"),v.channels[te]=y(j);break;case"animation":x(j),I=!0;break;default:console.log(j)}}I===!1&&(je.animations[S.getAttribute("id")||Gs.generateUUID()]=v)}function p(S){const v={inputs:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"input":const j=o(P.getAttribute("source")),te=P.getAttribute("semantic");v.inputs[te]=j;break}}return v}function y(S){const v={};let E=S.getAttribute("target").split("/");const P=E.shift();let j=E.shift();const te=j.indexOf("(")!==-1,ke=j.indexOf(".")!==-1;if(ke)E=j.split("."),j=E.shift(),v.member=E.shift();else if(te){const Se=j.split("(");j=Se.shift();for(let Ne=0;Ne<Se.length;Ne++)Se[Ne]=parseInt(Se[Ne].replace(/\)/,""));v.indices=Se}return v.id=P,v.sid=j,v.arraySyntax=te,v.memberSyntax=ke,v.sampler=o(S.getAttribute("source")),v}function _(S){const v=[],I=S.channels,E=S.samplers,P=S.sources;for(const j in I)if(I.hasOwnProperty(j)){const te=I[j],ke=E[te.sampler],Se=ke.inputs.INPUT,Ne=ke.inputs.OUTPUT,Ke=P[Se],ue=P[Ne],Ze=C(te,Ke,ue);M(Ze,v)}return v}function A(S){return g(je.animations[S],_)}function C(S,v,I){const E=je.nodes[S.id],P=Je(E.id),j=E.transforms[S.sid],te=E.matrix.clone().transpose();let ke,Se,Ne,Ke,ue,Ze;const Xe={};switch(j){case"matrix":for(Ne=0,Ke=v.array.length;Ne<Ke;Ne++)if(ke=v.array[Ne],Se=Ne*I.stride,Xe[ke]===void 0&&(Xe[ke]={}),S.arraySyntax===!0){const zt=I.array[Se],Pt=S.indices[0]+4*S.indices[1];Xe[ke][Pt]=zt}else for(ue=0,Ze=I.stride;ue<Ze;ue++)Xe[ke][ue]=I.array[Se+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break}const st=w(Xe,te);return{name:P.uuid,keyframes:st}}function w(S,v){const I=[];for(const P in S)I.push({time:parseFloat(P),value:S[P]});I.sort(E);for(let P=0;P<16;P++)O(I,P,v.elements[P]);return I;function E(P,j){return P.time-j.time}}const L=new U,N=new U,b=new nn;function M(S,v){const I=S.keyframes,E=S.name,P=[],j=[],te=[],ke=[];for(let Se=0,Ne=I.length;Se<Ne;Se++){const Ke=I[Se],ue=Ke.time,Ze=Ke.value;R.fromArray(Ze).transpose(),R.decompose(L,b,N),P.push(ue),j.push(L.x,L.y,L.z),te.push(b.x,b.y,b.z,b.w),ke.push(N.x,N.y,N.z)}return j.length>0&&v.push(new fs(E+".position",P,j)),te.length>0&&v.push(new cr(E+".quaternion",P,te)),ke.length>0&&v.push(new fs(E+".scale",P,ke)),v}function O(S,v,I){let E,P=!0,j,te;for(j=0,te=S.length;j<te;j++)E=S[j],E.value[v]===void 0?E.value[v]=null:P=!1;if(P===!0)for(j=0,te=S.length;j<te;j++)E=S[j],E.value[v]=I;else B(S,v)}function B(S,v){let I,E;for(let P=0,j=S.length;P<j;P++){const te=S[P];if(te.value[v]===null){if(I=G(S,P,v),E=J(S,P,v),I===null){te.value[v]=E.value[v];continue}if(E===null){te.value[v]=I.value[v];continue}Z(te,I,E,v)}}}function G(S,v,I){for(;v>=0;){const E=S[v];if(E.value[I]!==null)return E;v--}return null}function J(S,v,I){for(;v<S.length;){const E=S[v];if(E.value[I]!==null)return E;v++}return null}function Z(S,v,I,E){if(I.time-v.time===0){S.value[E]=v.value[E];return}S.value[E]=(S.time-v.time)*(I.value[E]-v.value[E])/(I.time-v.time)+v.value[E]}function z(S){const v={name:S.getAttribute("id")||"default",start:parseFloat(S.getAttribute("start")||0),end:parseFloat(S.getAttribute("end")||0),animations:[]};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"instance_animation":v.animations.push(o(P.getAttribute("url")));break}}je.clips[S.getAttribute("id")]=v}function ne(S){const v=[],I=S.name,E=S.end-S.start||-1,P=S.animations;for(let j=0,te=P.length;j<te;j++){const ke=A(P[j]);for(let Se=0,Ne=ke.length;Se<Ne;Se++)v.push(ke[Se])}return new ps(I,E,v)}function q(S){return g(je.clips[S],ne)}function ie(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"skin":v.id=o(P.getAttribute("source")),v.skin=ce(P);break;case"morph":v.id=o(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[S.getAttribute("id")]=v}function ce(S){const v={sources:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":v.bindShapeMatrix=s(P.textContent);break;case"source":const j=P.getAttribute("id");v.sources[j]=ve(P);break;case"joints":v.joints=xe(P);break;case"vertex_weights":v.vertexWeights=Oe(P);break}}return v}function xe(S){const v={inputs:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"input":const j=P.getAttribute("semantic"),te=o(P.getAttribute("source"));v.inputs[j]=te;break}}return v}function Oe(S){const v={inputs:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"input":const j=P.getAttribute("semantic"),te=o(P.getAttribute("source")),ke=parseInt(P.getAttribute("offset"));v.inputs[j]={id:te,offset:ke};break;case"vcount":v.vcount=a(P.textContent);break;case"v":v.v=a(P.textContent);break}}return v}function we(S){const v={id:S.id},I=je.geometries[v.id];return S.skin!==void 0&&(v.skin=Te(S.skin),I.sources.skinIndices=v.skin.indices,I.sources.skinWeights=v.skin.weights),v}function Te(S){const I={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=S.sources,P=S.vertexWeights,j=P.vcount,te=P.v,ke=P.inputs.JOINT.offset,Se=P.inputs.WEIGHT.offset,Ne=S.sources[S.joints.inputs.JOINT],Ke=S.sources[S.joints.inputs.INV_BIND_MATRIX],ue=E[P.inputs.WEIGHT.id].array;let Ze=0,Xe,st,et;for(Xe=0,et=j.length;Xe<et;Xe++){const Pt=j[Xe],wt=[];for(st=0;st<Pt;st++){const Tt=te[Ze+ke],ii=te[Ze+Se],vn=ue[ii];wt.push({index:Tt,weight:vn}),Ze+=2}for(wt.sort(zt),st=0;st<4;st++){const Tt=wt[st];Tt!==void 0?(I.indices.array.push(Tt.index),I.weights.array.push(Tt.weight)):(I.indices.array.push(0),I.weights.array.push(0))}}for(S.bindShapeMatrix?I.bindMatrix=new $e().fromArray(S.bindShapeMatrix).transpose():I.bindMatrix=new $e().identity(),Xe=0,et=Ne.array.length;Xe<et;Xe++){const Pt=Ne.array[Xe],wt=new $e().fromArray(Ke.array,Xe*Ke.stride).transpose();I.joints.push({name:Pt,boneInverse:wt})}return I;function zt(Pt,wt){return wt.weight-Pt.weight}}function be(S){return g(je.controllers[S],we)}function H(S){const v={init_from:n(S,"init_from")[0].textContent};je.images[S.getAttribute("id")]=v}function Y(S){return S.build!==void 0?S.build:S.init_from}function fe(S){const v=je.images[S];return v!==void 0?g(v,Y):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",S),null)}function Ve(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"profile_COMMON":v.profile=Ge(P);break}}je.effects[S.getAttribute("id")]=v}function Ge(S){const v={surfaces:{},samplers:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"newparam":xt(P,v);break;case"technique":v.technique=he(P);break;case"extra":v.extra=ze(P);break}}return v}function xt(S,v){const I=S.getAttribute("sid");for(let E=0,P=S.childNodes.length;E<P;E++){const j=S.childNodes[E];if(j.nodeType===1)switch(j.nodeName){case"surface":v.surfaces[I]=Rt(j);break;case"sampler2D":v.samplers[I]=ot(j);break}}}function Rt(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"init_from":v.init_from=P.textContent;break}}return v}function ot(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"source":v.source=P.textContent;break}}return v}function he(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":v.type=P.nodeName,v.parameters=F(P);break;case"extra":v.extra=ze(P);break}}return v}function F(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":v[P.nodeName]=oe(P);break;case"transparent":v[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:oe(P)};break}}return v}function oe(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"color":v[P.nodeName]=s(P.textContent);break;case"float":v[P.nodeName]=parseFloat(P.textContent);break;case"texture":v[P.nodeName]={id:P.getAttribute("texture"),extra:pe(P)};break}}return v}function pe(S){const v={technique:{}};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"extra":_e(P,v);break}}return v}function _e(S,v){for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"technique":de(P,v);break}}}function de(S,v){for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":v.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?v.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?v.technique[P.nodeName]=0:v.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":v[P.nodeName]=Ue(P);break}}}function ze(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"technique":v.technique=Ae(P);break}}return v}function Ae(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"double_sided":v[P.nodeName]=parseInt(P.textContent);break;case"bump":v[P.nodeName]=Ue(P);break}}return v}function Ue(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"texture":v[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:pe(P)};break}}return v}function D(S){return S}function T(S){return g(je.effects[S],D)}function X(S){const v={name:S.getAttribute("name")};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"instance_effect":v.url=o(P.getAttribute("url"));break}}je.materials[S.getAttribute("id")]=v}function ee(S){let v,I=S.slice((S.lastIndexOf(".")-1>>>0)+2);switch(I=I.toLowerCase(),I){case"tga":v=Kt;break;default:v=Dt}return v}function ae(S){const v=T(S.url),I=v.profile.technique;let E;switch(I.type){case"phong":case"blinn":E=new cs;break;case"lambert":E=new Sh;break;default:E=new ei;break}E.name=S.name||"";function P(Se,Ne=null){const Ke=v.profile.samplers[Se.id];let ue=null;if(Ke!==void 0){const Ze=v.profile.surfaces[Ke.source];ue=fe(Ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=fe(Se.id);if(ue!==null){const Ze=ee(ue);if(Ze!==void 0){const Xe=Ze.load(ue),st=Se.extra;if(st!==void 0&&st.technique!==void 0&&l(st.technique)===!1){const et=st.technique;Xe.wrapS=et.wrapU?fi:hn,Xe.wrapT=et.wrapV?fi:hn,Xe.offset.set(et.offsetU||0,et.offsetV||0),Xe.repeat.set(et.repeatU||1,et.repeatV||1)}else Xe.wrapS=fi,Xe.wrapT=fi;return Ne!==null&&(Xe.colorSpace=Ne),Xe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Se.id),null}const j=I.parameters;for(const Se in j){const Ne=j[Se];switch(Se){case"diffuse":Ne.color&&E.color.fromArray(Ne.color),Ne.texture&&(E.map=P(Ne.texture,kt));break;case"specular":Ne.color&&E.specular&&E.specular.fromArray(Ne.color),Ne.texture&&(E.specularMap=P(Ne.texture));break;case"bump":Ne.texture&&(E.normalMap=P(Ne.texture));break;case"ambient":Ne.texture&&(E.lightMap=P(Ne.texture,kt));break;case"shininess":Ne.float&&E.shininess&&(E.shininess=Ne.float);break;case"emission":Ne.color&&E.emissive&&E.emissive.fromArray(Ne.color),Ne.texture&&(E.emissiveMap=P(Ne.texture,kt));break}}yt.colorSpaceToWorking(E.color,kt),E.specular&&yt.colorSpaceToWorking(E.specular,kt),E.emissive&&yt.colorSpaceToWorking(E.emissive,kt);let te=j.transparent,ke=j.transparency;if(ke===void 0&&te&&(ke={float:1}),te===void 0&&ke&&(te={opaque:"A_ONE",data:{color:[1,1,1,1]}}),te&&ke)if(te.data.texture)E.transparent=!0;else{const Se=te.data.color;switch(te.opaque){case"A_ONE":E.opacity=Se[3]*ke.float;break;case"RGB_ZERO":E.opacity=1-Se[0]*ke.float;break;case"A_ZERO":E.opacity=1-Se[3]*ke.float;break;case"RGB_ONE":E.opacity=Se[0]*ke.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',te.opaque)}E.opacity<1&&(E.transparent=!0)}if(I.extra!==void 0&&I.extra.technique!==void 0){const Se=I.extra.technique;for(const Ne in Se){const Ke=Se[Ne];switch(Ne){case"double_sided":E.side=Ke===1?Bn:jn;break;case"bump":E.normalMap=P(Ke.texture),E.normalScale=new re(1,1);break}}}return E}function Q(S){return g(je.materials[S],ae)}function Ye(S){const v={name:S.getAttribute("name")};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"optics":v.optics=Ee(P);break}}je.cameras[S.getAttribute("id")]=v}function Ee(S){for(let v=0;v<S.childNodes.length;v++){const I=S.childNodes[v];switch(I.nodeName){case"technique_common":return Qe(I)}}return{}}function Qe(S){const v={};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];switch(E.nodeName){case"perspective":case"orthographic":v.technique=E.nodeName,v.parameters=qe(E);break}}return v}function qe(S){const v={};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":v[E.nodeName]=parseFloat(E.textContent);break}}return v}function le(S){let v;switch(S.optics.technique){case"perspective":v=new Jt(S.optics.parameters.yfov,S.optics.parameters.aspect_ratio,S.optics.parameters.znear,S.optics.parameters.zfar);break;case"orthographic":let I=S.optics.parameters.ymag,E=S.optics.parameters.xmag;const P=S.optics.parameters.aspect_ratio;E=E===void 0?I*P:E,I=I===void 0?E/P:I,E*=.5,I*=.5,v=new aa(-E,E,I,-I,S.optics.parameters.znear,S.optics.parameters.zfar);break;default:v=new Jt;break}return v.name=S.name||"",v}function ye(S){const v=je.cameras[S];return v!==void 0?g(v,le):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",S),null)}function rt(S){let v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"technique_common":v=nt(P);break}}je.lights[S.getAttribute("id")]=v}function nt(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":v.technique=P.nodeName,v.parameters=Fe(P)}}return v}function Fe(S){const v={};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"color":const j=s(P.textContent);v.color=new De().fromArray(j),yt.colorSpaceToWorking(v.color,kt);break;case"falloff_angle":v.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const te=parseFloat(P.textContent);v.distance=te?Math.sqrt(1/te):0;break}}return v}function ct(S){let v;switch(S.technique){case"directional":v=new Uh;break;case"point":v=new Dh;break;case"spot":v=new Nh;break;case"ambient":v=new Fh;break}return S.parameters.color&&v.color.copy(S.parameters.color),S.parameters.distance&&(v.distance=S.parameters.distance),v}function k(S){const v=je.lights[S];return v!==void 0?g(v,ct):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",S),null)}function Ce(S){const v={name:S.getAttribute("name"),sources:{},vertices:{},primitives:[]},I=n(S,"mesh")[0];if(I!==void 0){for(let E=0;E<I.childNodes.length;E++){const P=I.childNodes[E];if(P.nodeType!==1)continue;const j=P.getAttribute("id");switch(P.nodeName){case"source":v.sources[j]=ve(P);break;case"vertices":v.vertices=Me(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":v.primitives.push(me(P));break;default:console.log(P)}}je.geometries[S.getAttribute("id")]=v}}function ve(S){const v={array:[],stride:3};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"float_array":v.array=s(E.textContent);break;case"Name_array":v.array=i(E.textContent);break;case"technique_common":const P=n(E,"accessor")[0];P!==void 0&&(v.stride=parseInt(P.getAttribute("stride")));break}}return v}function Me(S){const v={};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];E.nodeType===1&&(v[E.getAttribute("semantic")]=o(E.getAttribute("source")))}return v}function me(S){const v={type:S.nodeName,material:S.getAttribute("material"),count:parseInt(S.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let I=0,E=S.childNodes.length;I<E;I++){const P=S.childNodes[I];if(P.nodeType===1)switch(P.nodeName){case"input":const j=o(P.getAttribute("source")),te=P.getAttribute("semantic"),ke=parseInt(P.getAttribute("offset")),Se=parseInt(P.getAttribute("set")),Ne=Se>0?te+Se:te;v.inputs[Ne]={id:j,offset:ke},v.stride=Math.max(v.stride,ke+1),te==="TEXCOORD"&&(v.hasUV=!0);break;case"vcount":v.vcount=a(P.textContent);break;case"p":v.p=a(P.textContent);break}}return v}function se(S){const v={};for(let I=0;I<S.length;I++){const E=S[I];v[E.type]===void 0&&(v[E.type]=[]),v[E.type].push(E)}return v}function He(S){let v=0;for(let I=0,E=S.length;I<E;I++)S[I].hasUV===!0&&v++;v>0&&v<S.length&&(S.uvsNeedsFix=!0)}function ht(S){const v={},I=S.sources,E=S.vertices,P=S.primitives;if(P.length===0)return{};const j=se(P);for(const te in j){const ke=j[te];He(ke),v[te]=Nt(ke,I,E)}return v}function Nt(S,v,I){const E={},P={array:[],stride:0},j={array:[],stride:0},te={array:[],stride:0},ke={array:[],stride:0},Se={array:[],stride:0},Ne={array:[],stride:4},Ke={array:[],stride:4},ue=new dt,Ze=[];let Xe=0;for(let st=0;st<S.length;st++){const et=S[st],zt=et.inputs;let Pt=0;switch(et.type){case"lines":case"linestrips":Pt=et.count*2;break;case"triangles":Pt=et.count*3;break;case"polylist":for(let wt=0;wt<et.count;wt++){const Tt=et.vcount[wt];switch(Tt){case 3:Pt+=3;break;case 4:Pt+=6;break;default:Pt+=(Tt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",et.type)}ue.addGroup(Xe,Pt,st),Xe+=Pt,et.material&&Ze.push(et.material);for(const wt in zt){const Tt=zt[wt];switch(wt){case"VERTEX":for(const ii in I){const vn=I[ii];switch(ii){case"POSITION":const ys=P.array.length;if(gt(et,v[vn],Tt.offset,P.array),P.stride=v[vn].stride,v.skinWeights&&v.skinIndices&&(gt(et,v.skinIndices,Tt.offset,Ne.array),gt(et,v.skinWeights,Tt.offset,Ke.array)),et.hasUV===!1&&S.uvsNeedsFix===!0){const Mp=(P.array.length-ys)/P.stride;for(let Gh=0;Gh<Mp;Gh++)te.array.push(0,0)}break;case"NORMAL":gt(et,v[vn],Tt.offset,j.array),j.stride=v[vn].stride;break;case"COLOR":gt(et,v[vn],Tt.offset,Se.array),Se.stride=v[vn].stride;break;case"TEXCOORD":gt(et,v[vn],Tt.offset,te.array),te.stride=v[vn].stride;break;case"TEXCOORD1":gt(et,v[vn],Tt.offset,ke.array),te.stride=v[vn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ii)}}break;case"NORMAL":gt(et,v[Tt.id],Tt.offset,j.array),j.stride=v[Tt.id].stride;break;case"COLOR":gt(et,v[Tt.id],Tt.offset,Se.array,!0),Se.stride=v[Tt.id].stride;break;case"TEXCOORD":gt(et,v[Tt.id],Tt.offset,te.array),te.stride=v[Tt.id].stride;break;case"TEXCOORD1":gt(et,v[Tt.id],Tt.offset,ke.array),ke.stride=v[Tt.id].stride;break}}}return P.array.length>0&&ue.setAttribute("position",new Pe(P.array,P.stride)),j.array.length>0&&ue.setAttribute("normal",new Pe(j.array,j.stride)),Se.array.length>0&&ue.setAttribute("color",new Pe(Se.array,Se.stride)),te.array.length>0&&ue.setAttribute("uv",new Pe(te.array,te.stride)),ke.array.length>0&&ue.setAttribute("uv1",new Pe(ke.array,ke.stride)),Ne.array.length>0&&ue.setAttribute("skinIndex",new Pe(Ne.array,Ne.stride)),Ke.array.length>0&&ue.setAttribute("skinWeight",new Pe(Ke.array,Ke.stride)),E.data=ue,E.type=S[0].type,E.materialKeys=Ze,E}function gt(S,v,I,E,P=!1){const j=S.p,te=S.stride,ke=S.vcount;function Se(ue){let Ze=j[ue+I]*Ke;const Xe=Ze+Ke;for(;Ze<Xe;Ze++)E.push(Ne[Ze]);if(P){const st=E.length-Ke-1;Qt.setRGB(E[st+0],E[st+1],E[st+2],kt),E[st+0]=Qt.r,E[st+1]=Qt.g,E[st+2]=Qt.b}}const Ne=v.array,Ke=v.stride;if(S.vcount!==void 0){let ue=0;for(let Ze=0,Xe=ke.length;Ze<Xe;Ze++){const st=ke[Ze];if(st===4){const et=ue+te*0,zt=ue+te*1,Pt=ue+te*2,wt=ue+te*3;Se(et),Se(zt),Se(wt),Se(zt),Se(Pt),Se(wt)}else if(st===3){const et=ue+te*0,zt=ue+te*1,Pt=ue+te*2;Se(et),Se(zt),Se(Pt)}else if(st>4)for(let et=1,zt=st-2;et<=zt;et++){const Pt=ue+te*0,wt=ue+te*et,Tt=ue+te*(et+1);Se(Pt),Se(wt),Se(Tt)}ue+=te*st}}else for(let ue=0,Ze=j.length;ue<Ze;ue+=te)Se(ue)}function wn(S){return g(je.geometries[S],ht)}function Tn(S){const v={name:S.getAttribute("name")||"",joints:{},links:[]};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"technique_common":ca(E,v);break}}je.kinematicsModels[S.getAttribute("id")]=v}function Oc(S){return S.build!==void 0?S.build:S}function oa(S){return g(je.kinematicsModels[S],Oc)}function ca(S,v){for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"joint":v.joints[E.getAttribute("sid")]=ni(E);break;case"link":v.links.push(ur(E));break}}}function ni(S){let v;for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":v=hr(E);break}}return v}function hr(S){const v={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:S.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"axis":const P=s(E.textContent);v.axis.fromArray(P);break;case"limits":const j=E.getElementsByTagName("max")[0],te=E.getElementsByTagName("min")[0];v.limits.max=parseFloat(j.textContent),v.limits.min=parseFloat(te.textContent);break}}return v.limits.min>=v.limits.max&&(v.static=!0),v.middlePosition=(v.limits.min+v.limits.max)/2,v}function ur(S){const v={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",attachments:[],transforms:[]};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":v.attachments.push(la(E));break;case"matrix":case"translate":case"rotate":v.transforms.push(ki(E));break}}return v}function la(S){const v={joint:S.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"link":v.links.push(ur(E));break;case"matrix":case"translate":case"rotate":v.transforms.push(ki(E));break}}return v}function ki(S){const v={type:S.nodeName},I=s(S.textContent);switch(v.type){case"matrix":v.obj=new $e,v.obj.fromArray(I).transpose();break;case"translate":v.obj=new U,v.obj.fromArray(I);break;case"rotate":v.obj=new U,v.obj.fromArray(I),v.angle=Gs.degToRad(I[3]);break}return v}function ha(S){const v={name:S.getAttribute("name")||"",rigidBodies:{}};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":v.rigidBodies[E.getAttribute("name")]={},_s(E,v.rigidBodies[E.getAttribute("name")]);break}}je.physicsModels[S.getAttribute("id")]=v}function _s(S,v){for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"technique_common":ua(E,v);break}}}function ua(S,v){for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"inertia":v.inertia=s(E.textContent);break;case"mass":v.mass=s(E.textContent)[0];break}}}function da(S){const v={bindJointAxis:[]};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":v.bindJointAxis.push(Bc(E));break}}je.kinematicsScenes[o(S.getAttribute("url"))]=v}function Bc(S){const v={target:S.getAttribute("target").split("/").pop()};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType===1)switch(E.nodeName){case"axis":const P=E.getElementsByTagName("param")[0];v.axis=P.textContent;const j=v.axis.split("inst_").pop().split("axis")[0];v.jointIndex=j.substring(0,j.length-1);break}}return v}function kc(S){return S.build!==void 0?S.build:S}function zc(S){return g(je.kinematicsScenes[S],kc)}function Vc(){const S=Object.keys(je.kinematicsModels)[0],v=Object.keys(je.kinematicsScenes)[0],I=Object.keys(je.visualScenes)[0];if(S===void 0||v===void 0)return;const E=oa(S),P=zc(v),j=Ut(I),te=P.bindJointAxis,ke={};for(let Ke=0,ue=te.length;Ke<ue;Ke++){const Ze=te[Ke],Xe=Mt.querySelector('[sid="'+Ze.target+'"]');if(Xe){const st=Xe.parentElement;Se(Ze.jointIndex,st)}}function Se(Ke,ue){const Ze=ue.getAttribute("name"),Xe=E.joints[Ke];j.traverse(function(st){st.name===Ze&&(ke[Ke]={object:st,transforms:Gc(ue),joint:Xe,position:Xe.zeroPosition})})}const Ne=new $e;en={joints:E&&E.joints,getJointValue:function(Ke){const ue=ke[Ke];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Ke+" doesn't exist.")},setJointValue:function(Ke,ue){const Ze=ke[Ke];if(Ze){const Xe=Ze.joint;if(ue>Xe.limits.max||ue<Xe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ke+" value "+ue+" outside of limits (min: "+Xe.limits.min+", max: "+Xe.limits.max+").");else if(Xe.static)console.warn("THREE.ColladaLoader: Joint "+Ke+" is static.");else{const st=Ze.object,et=Xe.axis,zt=Ze.transforms;R.identity();for(let Pt=0;Pt<zt.length;Pt++){const wt=zt[Pt];if(wt.sid&&wt.sid.indexOf(Ke)!==-1)switch(Xe.type){case"revolute":R.multiply(Ne.makeRotationAxis(et,Gs.degToRad(ue)));break;case"prismatic":R.multiply(Ne.makeTranslation(et.x*ue,et.y*ue,et.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Xe.type);break}else switch(wt.type){case"matrix":R.multiply(wt.obj);break;case"translate":R.multiply(Ne.makeTranslation(wt.obj.x,wt.obj.y,wt.obj.z));break;case"scale":R.scale(wt.obj);break;case"rotate":R.multiply(Ne.makeRotationAxis(wt.obj,wt.angle));break}}st.matrix.copy(R),st.matrix.decompose(st.position,st.quaternion,st.scale),ke[Ke].position=ue}}else console.log("THREE.ColladaLoader: "+Ke+" does not exist.")}}}function Gc(S){const v=[],I=Mt.querySelector('[id="'+S.id+'"]');for(let E=0;E<I.childNodes.length;E++){const P=I.childNodes[E];if(P.nodeType!==1)continue;let j,te;switch(P.nodeName){case"matrix":j=s(P.textContent);const ke=new $e().fromArray(j).transpose();v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ke});break;case"translate":case"scale":j=s(P.textContent),te=new U().fromArray(j),v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:te});break;case"rotate":j=s(P.textContent),te=new U().fromArray(j);const Se=Gs.degToRad(j[3]);v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:te,angle:Se});break}}return v}function Hc(S){const v=S.getElementsByTagName("node");for(let I=0;I<v.length;I++){const E=v[I];E.hasAttribute("id")===!1&&E.setAttribute("id",c())}}const R=new $e,V=new U;function $(S){const v={name:S.getAttribute("name")||"",type:S.getAttribute("type"),id:S.getAttribute("id"),sid:S.getAttribute("sid"),matrix:new $e,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];if(E.nodeType!==1)continue;let P;switch(E.nodeName){case"node":v.nodes.push(E.getAttribute("id")),$(E);break;case"instance_camera":v.instanceCameras.push(o(E.getAttribute("url")));break;case"instance_controller":v.instanceControllers.push(K(E));break;case"instance_light":v.instanceLights.push(o(E.getAttribute("url")));break;case"instance_geometry":v.instanceGeometries.push(K(E));break;case"instance_node":v.instanceNodes.push(o(E.getAttribute("url")));break;case"matrix":P=s(E.textContent),v.matrix.multiply(R.fromArray(P).transpose()),v.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":P=s(E.textContent),V.fromArray(P),v.matrix.multiply(R.makeTranslation(V.x,V.y,V.z)),v.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":P=s(E.textContent);const j=Gs.degToRad(P[3]);v.matrix.multiply(R.makeRotationAxis(V.fromArray(P),j)),v.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":P=s(E.textContent),v.matrix.scale(V.fromArray(P)),v.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return at(v.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",v.id):je.nodes[v.id]=v,v}function K(S){const v={id:o(S.getAttribute("url")),materials:{},skeletons:[]};for(let I=0;I<S.childNodes.length;I++){const E=S.childNodes[I];switch(E.nodeName){case"bind_material":const P=E.getElementsByTagName("instance_material");for(let j=0;j<P.length;j++){const te=P[j],ke=te.getAttribute("symbol"),Se=te.getAttribute("target");v.materials[ke]=o(Se)}break;case"skeleton":v.skeletons.push(o(E.textContent));break}}return v}function W(S,v){const I=[],E=[];let P,j,te;for(P=0;P<S.length;P++){const Ne=S[P];let Ke;if(at(Ne))Ke=Je(Ne),ge(Ke,v,I);else if(Bt(Ne)){const Ze=je.visualScenes[Ne].children;for(let Xe=0;Xe<Ze.length;Xe++){const st=Ze[Xe];if(st.type==="JOINT"){const et=Je(st.id);ge(et,v,I)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ne)}for(P=0;P<v.length;P++)for(j=0;j<I.length;j++)if(te=I[j],te.bone.name===v[P].name){E[P]=te,te.processed=!0;break}for(P=0;P<I.length;P++)te=I[P],te.processed===!1&&(E.push(te),te.processed=!0);const ke=[],Se=[];for(P=0;P<E.length;P++)te=E[P],ke.push(te.bone),Se.push(te.boneInverse);return new na(ke,Se)}function ge(S,v,I){S.traverse(function(E){if(E.isBone===!0){let P;for(let j=0;j<v.length;j++){const te=v[j];if(te.name===E.name){P=te.boneInverse;break}}P===void 0&&(P=new $e),I.push({bone:E,boneInverse:P,processed:!1})}})}function Le(S){const v=[],I=S.matrix,E=S.nodes,P=S.type,j=S.instanceCameras,te=S.instanceControllers,ke=S.instanceLights,Se=S.instanceGeometries,Ne=S.instanceNodes;for(let ue=0,Ze=E.length;ue<Ze;ue++)v.push(Je(E[ue]));for(let ue=0,Ze=j.length;ue<Ze;ue++){const Xe=ye(j[ue]);Xe!==null&&v.push(Xe.clone())}for(let ue=0,Ze=te.length;ue<Ze;ue++){const Xe=te[ue],st=be(Xe.id),et=wn(st.id),zt=it(et,Xe.materials),Pt=Xe.skeletons,wt=st.skin.joints,Tt=W(Pt,wt);for(let ii=0,vn=zt.length;ii<vn;ii++){const ys=zt[ii];ys.isSkinnedMesh&&(ys.bind(Tt,st.skin.bindMatrix),ys.normalizeSkinWeights()),v.push(ys)}}for(let ue=0,Ze=ke.length;ue<Ze;ue++){const Xe=k(ke[ue]);Xe!==null&&v.push(Xe.clone())}for(let ue=0,Ze=Se.length;ue<Ze;ue++){const Xe=Se[ue],st=wn(Xe.id),et=it(st,Xe.materials);for(let zt=0,Pt=et.length;zt<Pt;zt++)v.push(et[zt])}for(let ue=0,Ze=Ne.length;ue<Ze;ue++)v.push(Je(Ne[ue]).clone());let Ke;if(E.length===0&&v.length===1)Ke=v[0];else{Ke=P==="JOINT"?new gc:new Pi;for(let ue=0;ue<v.length;ue++)Ke.add(v[ue])}return Ke.name=P==="JOINT"?S.sid:S.name,Ke.matrix.copy(I),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke}const We=new ei({name:an.DEFAULT_MATERIAL_NAME,color:16711935});function Be(S,v){const I=[];for(let E=0,P=S.length;E<P;E++){const j=v[S[E]];j===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",S[E]),I.push(We)):I.push(Q(j))}return I}function it(S,v){const I=[];for(const E in S){const P=S[E],j=Be(P.materialKeys,v);if(j.length===0&&(E==="lines"||E==="linestrips"?j.push(new rn):j.push(new cs)),E==="lines"||E==="linestrips")for(let Ne=0,Ke=j.length;Ne<Ke;Ne++){const ue=j[Ne];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){const Ze=new rn;Ze.color.copy(ue.color),Ze.opacity=ue.opacity,Ze.transparent=ue.transparent,j[Ne]=Ze}}const te=P.data.attributes.skinIndex!==void 0,ke=j.length===1?j[0]:j;let Se;switch(E){case"lines":Se=new Wn(P.data,ke);break;case"linestrips":Se=new _i(P.data,ke);break;case"triangles":case"polylist":te?Se=new dh(P.data,ke):Se=new Ot(P.data,ke);break}I.push(Se)}return I}function at(S){return je.nodes[S]!==void 0}function Je(S){return g(je.nodes[S],Le)}function _t(S){const v={name:S.getAttribute("name"),children:[]};Hc(S);const I=n(S,"node");for(let E=0;E<I.length;E++)v.children.push($(I[E]));je.visualScenes[S.getAttribute("id")]=v}function Et(S){const v=new Pi;v.name=S.name;const I=S.children;for(let E=0;E<I.length;E++){const P=I[E];v.add(Je(P.id))}return v}function Bt(S){return je.visualScenes[S]!==void 0}function Ut(S){return g(je.visualScenes[S],Et)}function It(S){const v=n(S,"instance_visual_scene")[0];return Ut(o(v.getAttribute("url")))}function tt(){const S=je.clips;if(l(S)===!0){if(l(je.animations)===!1){const v=[];for(const I in je.animations){const E=A(I);for(let P=0,j=E.length;P<j;P++)v.push(E[P])}qt.push(new ps("default",-1,v))}}else for(const v in S)qt.push(q(v))}function Ft(S){let v="";const I=[S];for(;I.length;){const E=I.shift();E.nodeType===Node.TEXT_NODE?v+=E.textContent:(v+=`
`,I.push(...E.childNodes))}return v.trim()}if(e.length===0)return{scene:new hh};const vt=new DOMParser().parseFromString(e,"application/xml"),Mt=n(vt,"COLLADA")[0],qn=vt.getElementsByTagName("parsererror")[0];if(qn!==void 0){const S=n(qn,"div")[0];let v;return S?v=S.textContent:v=Ft(qn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,v),null}const fn=Mt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",fn);const yi=h(n(Mt,"asset")[0]),Dt=new Ph(this.manager);Dt.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Kt;vd&&(Kt=new vd(this.manager),Kt.setPath(this.resourcePath||t));const Qt=new De,qt=[];let en={},dr=0;const je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(Mt,"library_animations","animation",x),f(Mt,"library_animation_clips","animation_clip",z),f(Mt,"library_controllers","controller",ie),f(Mt,"library_images","image",H),f(Mt,"library_effects","effect",Ve),f(Mt,"library_materials","material",X),f(Mt,"library_cameras","camera",Ye),f(Mt,"library_lights","light",rt),f(Mt,"library_geometries","geometry",Ce),f(Mt,"library_nodes","node",$),f(Mt,"library_visual_scenes","visual_scene",_t),f(Mt,"library_kinematics_models","kinematics_model",Tn),f(Mt,"library_physics_models","physics_model",ha),f(Mt,"scene","instance_kinematics_scene",da),m(je.animations,_),m(je.clips,ne),m(je.controllers,we),m(je.images,Y),m(je.effects,D),m(je.materials,ae),m(je.cameras,le),m(je.lights,ct),m(je.geometries,ht),m(je.visualScenes,Et),tt(),Vc();const fa=It(n(Mt,"scene")[0]);return fa.animations=qt,yi.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),fa.rotation.set(-Math.PI/2,0,0)),fa.scale.multiplyScalar(yi.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),qt},kinematics:en,library:je,scene:fa}}}const bd=new U,Qb=new yn,so=new $e,Ei=new $e,ro=new nn,ao=new U(1,1,1),oo=new U;class Fc extends bt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class eM extends Fc{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class tM extends Fc{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class vp extends Fc{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class bp extends Fc{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new U(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new U(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),bd.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(bd,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Ei.compose(this.origPosition,this.origQuaternion,ao),ro.setFromEuler(Qb.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),oo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),so.compose(oo,ro,ao),Ei.premultiply(so),this.position.setFromMatrixPosition(Ei),this.rotation.setFromRotationMatrix(Ei),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Ei.compose(this.origPosition,this.origQuaternion,ao),ro.setFromAxisAngle(this.axis,this.jointValue[2]),oo.set(this.jointValue[0],this.jointValue[1],0),so.compose(oo,ro,ao),Ei.premultiply(so),this.position.setFromMatrixPosition(Ei),this.rotation.setFromRotationMatrix(Ei),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class Md extends bp{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class nM extends vp{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(i=>this.joints[i.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const i=e[n];Array.isArray(i)?t=this.setJointValue(n,...i)||t:t=this.setJointValue(n,i)||t}return t}}const Dl=new nn,Sd=new yn;function Vs(r){return r?r.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Ad(r,e,t=!1){t||r.rotation.set(0,0,0),Sd.set(e[0],e[1],e[2],"ZYX"),Dl.setFromEuler(Sd),Dl.multiply(r.quaternion),r.quaternion.copy(Dl)}class rM{constructor(e){this.manager=e||Ih,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,i){const s=this.manager,a=jr.extractUrlBase(e),o=this.manager.resolveURL(e);s.itemStart(o),fetch(o,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{const l=this.parse(c,this.workingPath||a);t(l),s.itemEnd(o)}).catch(c=>{i?i(c):console.error("URDFLoader: Error loading file.",c),s.itemError(o),s.itemEnd(o)})}parse(e,t=this.workingPath){const n=this.packages,i=this.loadMeshCb,s=this.parseVisual,a=this.parseCollision,o=this.manager,c={},l={},h={};function u(y){if(!/^package:\/\//.test(y))return t?t+y:y;const[_,A]=y.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(_)?n+"/"+A:n+"/"+_+"/"+A;if(n instanceof Function)return n(_)+"/"+A;if(typeof n=="object")return _ in n?n[_]+"/"+A:(console.error(`URDFLoader : ${_} not found in provided package list.`),null)}function d(y){let _;y instanceof Document?_=[...y.children]:y instanceof Element?_=[y]:_=[...new DOMParser().parseFromString(y,"text/xml").children];const A=_.filter(C=>C.nodeName==="robot").pop();return f(A)}function f(y){const _=[...y.children],A=_.filter(O=>O.nodeName.toLowerCase()==="link"),C=_.filter(O=>O.nodeName.toLowerCase()==="joint"),w=_.filter(O=>O.nodeName.toLowerCase()==="material"),L=new nM;L.robotName=y.getAttribute("name"),L.urdfRobotNode=y,w.forEach(O=>{const B=O.getAttribute("name");h[B]=x(O)});const N={},b={};A.forEach(O=>{const B=O.getAttribute("name"),G=y.querySelector(`child[link="${B}"]`)===null;c[B]=g(O,N,b,G?L:null)}),C.forEach(O=>{const B=O.getAttribute("name");l[B]=m(O)}),L.joints=l,L.links=c,L.colliders=b,L.visual=N;const M=Object.values(l);return M.forEach(O=>{O instanceof Md&&l[O.mimicJoint].mimicJoints.push(O)}),M.forEach(O=>{const B=new Set,G=J=>{if(B.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(J),J.mimicJoints.forEach(Z=>{G(Z)})};G(O)}),L.frames={...b,...N,...c,...l},L}function m(y){const _=[...y.children],A=y.getAttribute("type");let C;const w=_.find(B=>B.nodeName.toLowerCase()==="mimic");w?(C=new Md,C.mimicJoint=w.getAttribute("joint"),C.multiplier=parseFloat(w.getAttribute("multiplier")||1),C.offset=parseFloat(w.getAttribute("offset")||0)):C=new bp,C.urdfNode=y,C.name=y.getAttribute("name"),C.urdfName=C.name,C.jointType=A;let L=null,N=null,b=[0,0,0],M=[0,0,0];_.forEach(B=>{const G=B.nodeName.toLowerCase();G==="origin"?(b=Vs(B.getAttribute("xyz")),M=Vs(B.getAttribute("rpy"))):G==="child"?N=c[B.getAttribute("link")]:G==="parent"?L=c[B.getAttribute("link")]:G==="limit"&&(C.limit.lower=parseFloat(B.getAttribute("lower")||C.limit.lower),C.limit.upper=parseFloat(B.getAttribute("upper")||C.limit.upper))}),L.add(C),C.add(N),Ad(C,M),C.position.set(b[0],b[1],b[2]);const O=_.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(O){const B=O.getAttribute("xyz").split(/\s+/g).map(G=>parseFloat(G));C.axis=new U(B[0],B[1],B[2]),C.axis.normalize()}return C}function g(y,_,A,C=null){C===null&&(C=new vp);const w=[...y.children];return C.name=y.getAttribute("name"),C.urdfName=C.name,C.urdfNode=y,s&&w.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const b=p(N,h);if(C.add(b),N.hasAttribute("name")){const M=N.getAttribute("name");b.name=M,b.urdfName=M,_[M]=b}}),a&&w.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const b=p(N);if(C.add(b),N.hasAttribute("name")){const M=N.getAttribute("name");b.name=M,b.urdfName=M,A[M]=b}}),C}function x(y){const _=[...y.children],A=new cs;return A.name=y.getAttribute("name")||"",_.forEach(C=>{const w=C.nodeName.toLowerCase();if(w==="color"){const L=C.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));A.color.setRGB(L[0],L[1],L[2]),A.opacity=L[3],A.transparent=L[3]<1,A.depthWrite=!A.transparent}else if(w==="texture"){const L=C.getAttribute("filename");if(L){const N=new Ph(o),b=u(L);A.map=N.load(b),A.map.colorSpace=kt}}}),A}function p(y,_={}){const A=y.nodeName.toLowerCase()==="collision",C=[...y.children];let w=null;const L=C.filter(b=>b.nodeName.toLowerCase()==="material")[0];if(L){const b=L.getAttribute("name");b&&b in _?w=_[b]:w=x(L)}else w=new cs;const N=A?new eM:new tM;return N.urdfNode=y,C.forEach(b=>{const M=b.nodeName.toLowerCase();if(M==="geometry"){const O=b.children[0].nodeName.toLowerCase();if(O==="mesh"){const B=b.children[0].getAttribute("filename"),G=u(B);if(G!==null){const J=b.children[0].getAttribute("scale");if(J){const Z=Vs(J);N.scale.set(Z[0],Z[1],Z[2])}i(G,o,(Z,z)=>{z?console.error("URDFLoader: Error loading mesh.",z):Z&&(Z instanceof Ot&&(Z.material=w),Z.position.set(0,0,0),Z.quaternion.identity(),N.add(Z))})}}else if(O==="box"){const B=new Ot;B.geometry=new Fi(1,1,1),B.material=w;const G=Vs(b.children[0].getAttribute("size"));B.scale.set(G[0],G[1],G[2]),N.add(B)}else if(O==="sphere"){const B=new Ot;B.geometry=new or(1,30,30),B.material=w;const G=parseFloat(b.children[0].getAttribute("radius"))||0;B.scale.set(G,G,G),N.add(B)}else if(O==="cylinder"){const B=new Ot;B.geometry=new rr(1,1,1,30),B.material=w;const G=parseFloat(b.children[0].getAttribute("radius"))||0,J=parseFloat(b.children[0].getAttribute("length"))||0;B.scale.set(G,J,G),B.rotation.set(Math.PI/2,0,0),N.add(B)}}else if(M==="origin"){const O=Vs(b.getAttribute("xyz")),B=Vs(b.getAttribute("rpy"));N.position.set(O[0],O[1],O[2]),N.rotation.set(0,0,0),Ad(N,B)}}),N}return d(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new Kb(t).load(e,s=>{const a=new Ot(s,new cs);n(a)}):/\.dae$/i.test(e)?new jb(t).load(e,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}export{Kn as $,Fh as A,Cp as B,De as C,Uh as D,ei as E,An as F,Pi as G,ms as H,wc as I,nc as J,Ql as K,Rh as L,Ot as M,pi as N,aa as O,Jt as P,jl as Q,Fx as R,hh as S,sM as T,rM as U,Zn as V,$b as W,gi as X,an as Y,Lp as Z,Hn as _,Ed as a,xi as a0,Br as a1,rx as a2,Sf as a3,ph as a4,Zs as a5,Ys as a6,Yf as a7,tn as a8,af as a9,ti as aa,ui as ab,zh as ac,_n as ad,jn as ae,dn as af,mo as ag,dt as ah,Ct as ai,At as aj,pc as ak,Mh as al,$l as b,yt as c,hs as d,kt as e,Kd as f,dc as g,gn as h,Gn as i,iM as j,U as k,re as l,lp as m,ec as n,Ln as o,Bn as p,tp as q,Xm as r,Xt as s,rc as t,hn as u,ar as v,Qn as w,tc as x,Vn as y,Ht as z};
