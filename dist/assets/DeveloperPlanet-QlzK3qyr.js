import{r as be,a as Gx,j as qe}from"./index-BdoTvu1a.js";function Wx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="172",Xx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fv=0,Gd=1,Ov=2,Yx=3,Bv=0,Zu=1,ya=2,Ai=3,mr=0,On=1,Vi=2,dr=0,Ms=1,nu=2,Wd=3,Xd=4,zv=5,zr=100,kv=101,Hv=102,Vv=103,Gv=104,Wv=200,Xv=201,qv=202,Yv=203,iu=204,ru=205,Zv=206,jv=207,Jv=208,Kv=209,Qv=210,$v=211,e_=212,t_=213,n_=214,su=0,ou=1,au=2,Cs=3,lu=4,cu=5,uu=6,hu=7,Ya=0,i_=1,r_=2,Xi=0,s_=1,o_=2,a_=3,op=4,l_=5,c_=6,u_=7,qd="attached",h_="detached",ju=300,gr=301,kr=302,Ra=303,Pa=304,Do=306,Ia=1e3,yi=1001,La=1002,Mn=1003,ap=1004,Zx=1004,xo=1005,jx=1005,on=1006,xa=1007,Jx=1007,Wi=1008,Kx=1008,Ri=1009,lp=1010,cp=1011,bo=1012,Ju=1013,vr=1014,Jn=1015,Uo=1016,Ku=1017,Qu=1018,Rs=1020,up=35902,hp=1021,fp=1022,Pn=1023,dp=1024,pp=1025,ws=1026,Ps=1027,$u=1028,Za=1029,mp=1030,eh=1031,Qx=1032,th=1033,Sa=33776,Ma=33777,wa=33778,Ea=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,vu=37492,_u=37496,yu=37808,xu=37809,Su=37810,Mu=37811,wu=37812,Eu=37813,Tu=37814,Au=37815,bu=37816,Cu=37817,Ru=37818,Pu=37819,Iu=37820,Lu=37821,Ta=36492,Du=36494,Uu=36495,gp=36283,Nu=36284,Fu=36285,Ou=36286,f_=2200,d_=2201,p_=2202,Da=2300,Bu=2301,$c=2302,_s=2400,ys=2401,Ua=2402,nh=2500,vp=2501,$x=0,eS=1,tS=2,m_=3200,g_=3201,nS=3202,iS=3203,Vr=0,v_=1,ur="",Zn="srgb",Is="srgb-linear",Na="linear",Bt="srgb",rS=0,ms=7680,sS=7681,oS=7682,aS=7683,lS=34055,cS=34056,uS=5386,hS=512,fS=513,dS=514,pS=515,mS=516,gS=517,vS=518,Yd=519,__=512,y_=513,x_=514,_p=515,S_=516,M_=517,w_=518,E_=519,Fa=35044,_S=35048,yS=35040,xS=35045,SS=35049,MS=35041,wS=35046,ES=35050,TS=35042,AS="100",Zd="300 es",Ci=2e3,Oa=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lg=1234567;const Es=Math.PI/180,Co=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function yp(r,e){return(r%e+e)%e}function bS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function CS(r,e,t){return r!==e?(t-r)/(e-r):0}function Aa(r,e,t){return(1-t)*r+t*e}function RS(r,e,t,n){return Aa(r,e,1-Math.exp(-t*n))}function PS(r,e=1){return e-Math.abs(yp(r,e*2)-e)}function IS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function LS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function DS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function US(r,e){return r+Math.random()*(e-r)}function NS(r){return r*(.5-Math.random())}function FS(r){r!==void 0&&(Lg=r);let e=Lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OS(r){return r*Es}function BS(r){return r*Co}function zS(r){return(r&r-1)===0&&r!==0}function kS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function HS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function VS(r,e,t,n,i){const s=Math.cos,l=Math.sin,c=s(t/2),u=l(t/2),h=s((e+n)/2),f=l((e+n)/2),p=s((e-n)/2),m=l((e-n)/2),g=s((n-e)/2),y=l((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zu={DEG2RAD:Es,RAD2DEG:Co,generateUUID:ai,clamp:ht,euclideanModulo:yp,mapLinear:bS,inverseLerp:CS,lerp:Aa,damp:RS,pingpong:PS,smoothstep:IS,smootherstep:LS,randInt:DS,randFloat:US,randFloatSpread:NS,seededRandom:FS,degToRad:OS,radToDeg:BS,isPowerOfTwo:zS,ceilPowerOfTwo:kS,floorPowerOfTwo:HS,setQuaternionFromProperEuler:VS,normalize:gt,denormalize:Fn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,i,s,l,c,u,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h)}set(e,t,n,i,s,l,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=l,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],A=i[7],L=i[2],P=i[5],D=i[8];return s[0]=l*M+c*E+u*L,s[3]=l*x+c*w+u*P,s[6]=l*_+c*A+u*D,s[1]=h*M+f*E+p*L,s[4]=h*x+f*w+p*P,s[7]=h*_+f*A+p*D,s[2]=m*M+g*E+y*L,s[5]=m*x+g*w+y*P,s[8]=m*_+g*A+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*l*f-t*c*h-n*s*f+n*c*u+i*s*h-i*l*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*l-c*h,m=c*u-f*s,g=h*s-l*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*l)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(l*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*l+h*c)+l+e,-i*h,i*u,-i*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new mt;function T_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const GS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function So(r,e){return new GS[r](e)}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function A_(){const r=Ba("canvas");return r.style.display="block",r}const Dg={};function vo(r){r in Dg||(Dg[r]=!0,console.warn(r))}function WS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function XS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ug=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const r={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Bt&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Bt&&(i.r=Ao(i.r),i.g=Ao(i.g),i.b=Ao(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ur?Na:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,l){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Is]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Ug,fromXYZ:Ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Ug,fromXYZ:Ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const Pt=YS();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Js;class b_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Ba("canvas")),Js.width=e.width,Js.height=e.height;const n=Js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=pr(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pr(t[n]/255)*255):t[n]=pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class xs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?s.push(Of(i[l].image)):s.push(Of(i[l]))}else s=Of(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Of(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jS=0;class jt extends ji{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=yi,i=yi,s=on,l=Wi,c=Pn,u=Ri,h=jt.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ai(),this.name="",this.source=new xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ju;jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,A=(g+1)/2,L=(_+1)/2,P=(f+m)/4,D=(p+M)/4,O=(y+x)/4;return w>A&&w>L?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=P/n,s=D/n):A>L?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=P/i,s=O/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=D/s,i=O/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new xs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ja extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Zi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ja(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class rh extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KS extends Zi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new rh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[l+0],g=s[l+1],y=s[l+2],M=s[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const L=Math.sqrt(w),P=Math.atan2(L,_*E);x=Math.sin(x*P)/L,c=Math.sin(c*P)/L}const A=c*E;if(u=u*x+m*A,h=h*x+g*A,f=f*x+y*A,p=p*x+M*A,x===1-c){const L=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=L,h*=L,f*=L,p*=L}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,l){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[l],m=s[l+1],g=s[l+2],y=s[l+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(l){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(l-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(l-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+l*c+i*h-s*u,this._y=i*f+l*u+s*c-n*h,this._z=s*f+l*h+n*u-i*c,this._w=l*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let c=l*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,c=e.z,u=e.w,h=2*(l*i-c*n),f=2*(c*t-s*i),p=2*(s*n-l*t);return this.x=t+u*h+l*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*l-n*u,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new U,Fg=new Kn;class mn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,wi):wi.fromBufferAttribute(s,l),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),rc.subVectors(this.max,ia),Ks.subVectors(e.a,ia),Qs.subVectors(e.b,ia),$s.subVectors(e.c,ia),Pr.subVectors(Qs,Ks),Ir.subVectors($s,Qs),ns.subVectors(Ks,$s);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-ns.z,ns.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,ns.z,0,-ns.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-ns.y,ns.x,0];return!zf(t,Ks,Qs,$s,rc)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,Ks,Qs,$s,rc))?!1:(sc.crossVectors(Pr,Ir),t=[sc.x,sc.y,sc.z],zf(t,Ks,Qs,$s,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new U,new U,new U,new U,new U,new U,new U,new U],wi=new U,ic=new mn,Ks=new U,Qs=new U,$s=new U,Pr=new U,Ir=new U,ns=new U,ia=new U,rc=new U,sc=new U,is=new U;function zf(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){is.fromArray(r,s);const c=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),u=e.dot(is),h=t.dot(is),f=n.dot(is);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const QS=new mn,ra=new U,kf=new U;class gn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):QS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(kf)),this.expandByPoint(ra.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new U,Hf=new U,oc=new U,Lr=new U,Vf=new U,ac=new U,Gf=new U;class No{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hf.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Hf);const s=e.distanceTo(t)*.5,l=-this.direction.dot(oc),c=Lr.dot(this.direction),u=-Lr.dot(oc),h=Lr.lengthSq(),f=Math.abs(1-l*l);let p,m,g,y;if(f>0)if(p=l*u-c,m=l*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,g=p*(p+l*m+2*c)+m*(l*p+m+2*u)+h}else m=s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-l*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(l*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=l>0?-s:s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Hf).addScaledVector(oc,m),g}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,l=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,l=(e.min.y-m.y)*f),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){Vf.subVectors(t,e),ac.subVectors(n,e),Gf.crossVectors(Vf,ac);let l=this.direction.dot(Gf),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Lr.subVectors(this.origin,e);const u=c*this.direction.dot(ac.crossVectors(Lr,ac));if(u<0)return null;const h=c*this.direction.dot(Vf.cross(Lr));if(h<0||u+h>l)return null;const f=-c*Lr.dot(Gf);return f<0?null:this.at(f/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x)}set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=l,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/eo.setFromMatrixColumn(e,0).length(),s=1/eo.setFromMatrixColumn(e,1).length(),l=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=l*f,g=l*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+g*h,t[10]=l*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-g,t[8]=l*h,t[1]=l*p,t[5]=l*f,t[9]=-c,t[2]=g*c-y,t[6]=M+m*c,t[10]=l*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-l*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=l*f,t[9]=M-m*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const m=l*f,g=l*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const m=l*u,g=l*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+g,t[1]=p,t[5]=l*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=l*u,g=l*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=l*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,eM)}lookAt(e,t,n){const i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Dr.crossVectors(n,ri),Dr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Dr.crossVectors(n,ri)),Dr.normalize(),lc.crossVectors(ri,Dr),i[0]=Dr.x,i[4]=lc.x,i[8]=ri.x,i[1]=Dr.y,i[5]=lc.y,i[9]=ri.y,i[2]=Dr.z,i[6]=lc.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],A=n[11],L=n[15],P=i[0],D=i[4],O=i[8],C=i[12],b=i[1],N=i[5],q=i[9],Y=i[13],K=i[2],ae=i[6],$=i[10],me=i[14],k=i[3],ne=i[7],te=i[11],ce=i[15];return s[0]=l*P+c*b+u*K+h*k,s[4]=l*D+c*N+u*ae+h*ne,s[8]=l*O+c*q+u*$+h*te,s[12]=l*C+c*Y+u*me+h*ce,s[1]=f*P+p*b+m*K+g*k,s[5]=f*D+p*N+m*ae+g*ne,s[9]=f*O+p*q+m*$+g*te,s[13]=f*C+p*Y+m*me+g*ce,s[2]=y*P+M*b+x*K+_*k,s[6]=y*D+M*N+x*ae+_*ne,s[10]=y*O+M*q+x*$+_*te,s[14]=y*C+M*Y+x*me+_*ce,s[3]=E*P+w*b+A*K+L*k,s[7]=E*D+w*N+A*ae+L*ne,s[11]=E*O+w*q+A*$+L*te,s[15]=E*C+w*Y+A*me+L*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+M*(+t*u*g-t*h*m+s*l*m-i*l*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*l*p+n*l*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*l*p-n*l*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*g-c*x*g-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*g+l*x*g+f*u*_-l*m*_,A=f*M*h-y*p*h+y*c*g-l*M*g-f*c*_+l*p*_,L=y*p*u-f*M*u-y*c*m+l*M*m+f*c*x-l*p*x,P=t*E+n*w+i*A+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=E*D,e[1]=(M*m*s-p*x*s-M*i*g+n*x*g+p*i*_-n*m*_)*D,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*D,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*D,e[4]=w*D,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*D,e[6]=(y*u*s-l*x*s-y*i*h+t*x*h+l*i*_-t*u*_)*D,e[7]=(l*m*s-f*u*s+f*i*h-t*m*h-l*i*g+t*u*g)*D,e[8]=A*D,e[9]=(y*p*s-f*M*s-y*n*g+t*M*g+f*n*_-t*p*_)*D,e[10]=(l*M*s-y*c*s+y*n*h-t*M*h-l*n*_+t*c*_)*D,e[11]=(f*c*s-l*p*s-f*n*h+t*p*h+l*n*g-t*c*g)*D,e[12]=L*D,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*D,e[14]=(y*c*i-l*M*i-y*n*u+t*M*u+l*n*x-t*c*x)*D,e[15]=(l*p*i-f*c*i+f*n*u-t*p*u-l*n*m+t*c*m)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,c=e.y,u=e.z,h=s*l,f=s*c;return this.set(h*l+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*l,0,h*u-i*c,f*u+i*l,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,c=t._z,u=t._w,h=s+s,f=l+l,p=c+c,m=s*h,g=s*f,y=s*p,M=l*f,x=l*p,_=c*p,E=u*h,w=u*f,A=u*p,L=n.x,P=n.y,D=n.z;return i[0]=(1-(M+_))*L,i[1]=(g+A)*L,i[2]=(y-w)*L,i[3]=0,i[4]=(g-A)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(y+w)*D,i[9]=(x-E)*D,i[10]=(1-(m+M))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=eo.set(i[0],i[1],i[2]).length();const l=eo.set(i[4],i[5],i[6]).length(),c=eo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ei.copy(this);const h=1/s,f=1/l,p=1/c;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=f,Ei.elements[5]*=f,Ei.elements[6]*=f,Ei.elements[8]*=p,Ei.elements[9]*=p,Ei.elements[10]*=p,t.setFromRotationMatrix(Ei),n.x=s,n.y=l,n.z=c,this}makePerspective(e,t,n,i,s,l,c=Ci){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===Ci)g=-(l+s)/(l-s),y=-2*l*s/(l-s);else if(c===Oa)g=-l/(l-s),y=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,l,c=Ci){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(l-s),m=(t+e)*h,g=(n+i)*f;let y,M;if(c===Ci)y=(l+s)*p,M=-2*p;else if(c===Oa)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const eo=new U,Ei=new at,$S=new U(0,0,0),eM=new U(1,1,1),Dr=new U,lc=new U,ri=new U,Og=new at,Bg=new Kn;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ts{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const zg=new U,to=new Kn,or=new at,cc=new U,sa=new U,nM=new U,iM=new Kn,kg=new U(1,0,0),Hg=new U(0,1,0),Vg=new U(0,0,1),Gg={type:"added"},rM={type:"removed"},no={type:"childadded",child:null},Wf={type:"childremoved",child:null};class Lt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new li,n=new Kn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new mt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Hg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Hg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(sa,cc,this.up):or.lookAt(cc,sa,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),to.setFromRotationMatrix(or),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gg),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rM),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gg),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),f=l(e.images),p=l(e.shapes),m=l(e.skeletons),g=l(e.animations),y=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function l(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new U,ar=new U,Xf=new U,lr=new U,io=new U,ro=new U,Wg=new U,qf=new U,Yf=new U,Zf=new U,jf=new wt,Jf=new wt,Kf=new wt;class jn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),ar.subVectors(n,t),Xf.subVectors(e,t);const l=Ti.dot(Ti),c=Ti.dot(ar),u=Ti.dot(Xf),h=ar.dot(ar),f=ar.dot(Xf),p=l*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(l*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,i,s,l,c,u){return this.getBarycoord(e,t,n,i,lr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,lr.x),u.addScaledVector(l,lr.y),u.addScaledVector(c,lr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,l){return jf.setScalar(0),Jf.setScalar(0),Kf.setScalar(0),jf.fromBufferAttribute(e,t),Jf.fromBufferAttribute(e,n),Kf.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(jf,s.x),l.addScaledVector(Jf,s.y),l.addScaledVector(Kf,s.z),l}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),ar.subVectors(e,t),Ti.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ti.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,c;io.subVectors(i,n),ro.subVectors(s,n),qf.subVectors(e,n);const u=io.dot(qf),h=ro.dot(qf);if(u<=0&&h<=0)return t.copy(n);Yf.subVectors(e,i);const f=io.dot(Yf),p=ro.dot(Yf);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return l=u/(u-f),t.copy(n).addScaledVector(io,l);Zf.subVectors(e,s);const g=io.dot(Zf),y=ro.dot(Zf);if(y>=0&&g<=y)return t.copy(s);const M=g*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(ro,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Wg.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(Wg,c);const _=1/(x+M+m);return l=M*_,c=m*_,t.copy(n).addScaledVector(io,l).addScaledVector(ro,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Qf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=yp(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Qf(l,s,e+1/3),this.g=Qf(l,s,e),this.b=Qf(l,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=C_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Pt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ht(Cn.r*255,0,255))*65536+Math.round(ht(Cn.g*255,0,255))*256+Math.round(ht(Cn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b,l=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+l)/2;if(c===l)u=0,h=0;else{const p=l-c;switch(h=f<=.5?p/(l+c):p/(2-l-c),l){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Zn){Pt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,i=Cn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(uc);const n=Aa(Ur.h,uc.h,t),i=Aa(Ur.s,uc.s,t),s=Aa(Ur.l,uc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Fe;Fe.NAMES=C_;let sM=0;class In extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ms,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==iu&&(n.blendSrc=this.blendSrc),this.blendDst!==ru&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gr extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=oM();function oM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;(h&8388608)===0;)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)l[u]=u<<23;l[31]=1199570944,l[32]=2147483648;for(let u=33;u<63;++u)l[u]=2147483648+(u-32<<23);l[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:l,offsetTable:c}}function Yn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ht(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function va(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const aM={toHalfFloat:Yn,fromHalfFloat:va},tn=new U,hc=new he;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class lM extends kt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class cM extends kt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class uM extends kt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class hM extends kt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class xp extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fM extends kt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Sp extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dM extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=va(this.array[e*this.itemSize]);return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=Yn(t),this}getY(e){let t=va(this.array[e*this.itemSize+1]);return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=Yn(t),this}getZ(e){let t=va(this.array[e*this.itemSize+2]);return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=Yn(t),this}getW(e){let t=va(this.array[e*this.itemSize+3]);return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=Yn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this.array[e+3]=Yn(s),this}}class We extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pM=0;const _i=new at,$f=new Lt,so=new U,si=new mn,oa=new mn,dn=new U;class _t extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?Sp:xp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];oa.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(si.min,oa.min),si.expandByPoint(dn),dn.addVectors(si.max,oa.max),si.expandByPoint(dn)):(si.expandByPoint(oa.min),si.expandByPoint(oa.max))}si.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)dn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let s=0,l=t.length;s<l;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)dn.fromBufferAttribute(c,h),u&&(so.fromBufferAttribute(e,h),dn.add(so)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let O=0;O<n.count;O++)c[O]=new U,u[O]=new U;const h=new U,f=new U,p=new U,m=new he,g=new he,y=new he,M=new U,x=new U;function _(O,C,b){h.fromBufferAttribute(n,O),f.fromBufferAttribute(n,C),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,C),y.fromBufferAttribute(s,b),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(N),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(N),c[O].add(M),c[C].add(M),c[b].add(M),u[O].add(x),u[C].add(x),u[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,C=E.length;O<C;++O){const b=E[O],N=b.start,q=b.count;for(let Y=N,K=N+q;Y<K;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new U,A=new U,L=new U,P=new U;function D(O){L.fromBufferAttribute(i,O),P.copy(L);const C=c[O];w.copy(C),w.sub(L.multiplyScalar(L.dot(C))).normalize(),A.crossVectors(P,C);const N=A.dot(u[O])<0?-1:1;l.setXYZW(O,w.x,w.y,w.z,N)}for(let O=0,C=E.length;O<C;++O){const b=E[O],N=b.start,q=b.count;for(let Y=N,K=N+q;Y<K;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new U,s=new U,l=new U,c=new U,u=new U,h=new U,f=new U,p=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,x),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new kt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,f=l.length;h<f;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xg=new at,rs=new No,fc=new gn,qg=new U,dc=new U,pc=new U,mc=new U,ed=new U,gc=new U,Yg=new U,vc=new U;class Qt extends Lt{constructor(e=new _t,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){gc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(ed.fromBufferAttribute(p,e),l?gc.addScaledVector(ed,f):gc.addScaledVector(ed.sub(t),f))}t.add(gc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(fc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(fc,qg)===null||rs.origin.distanceToSquared(qg)>(e.far-e.near)**2))&&(Xg.copy(s).invert(),rs.copy(e.ray).applyMatrix4(Xg),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let A=E,L=w;A<L;A+=3){const P=c.getX(A),D=c.getX(A+1),O=c.getX(A+2);i=_c(this,_,e,n,h,f,p,P,D,O),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),A=c.getX(x+2);i=_c(this,l,e,n,h,f,p,E,w,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let A=E,L=w;A<L;A+=3){const P=A,D=A+1,O=A+2;i=_c(this,_,e,n,h,f,p,P,D,O),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,A=x+2;i=_c(this,l,e,n,h,f,p,E,w,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function mM(r,e,t,n,i,s,l,c){let u;if(e.side===On?u=n.intersectTriangle(l,s,i,!0,c):u=n.intersectTriangle(i,s,l,e.side===mr,c),u===null)return null;vc.copy(c),vc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(vc);return h<t.near||h>t.far?null:{distance:h,point:vc.clone(),object:r}}function _c(r,e,t,n,i,s,l,c,u,h){r.getVertexPosition(c,dc),r.getVertexPosition(u,pc),r.getVertexPosition(h,mc);const f=mM(r,e,t,n,dc,pc,mc,Yg);if(f){const p=new U;jn.getBarycoord(Yg,dc,pc,mc,p),i&&(f.uv=jn.getInterpolatedAttribute(i,c,u,h,p,new he)),s&&(f.uv1=jn.getInterpolatedAttribute(s,c,u,h,p,new he)),l&&(f.normal=jn.getInterpolatedAttribute(l,c,u,h,p,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new U,materialIndex:0};jn.getNormal(dc,pc,mc,m.normal),f.face=m,f.barycoord=p}return f}class Ds extends _t{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const c=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,l,s,0),y("z","y","x",1,-1,n,t,-e,l,s,1),y("x","z","y",1,1,e,n,t,i,l,2),y("x","z","y",1,-1,e,n,-t,i,l,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(p,2));function y(M,x,_,E,w,A,L,P,D,O,C){const b=A/D,N=L/O,q=A/2,Y=L/2,K=P/2,ae=D+1,$=O+1;let me=0,k=0;const ne=new U;for(let te=0;te<$;te++){const ce=te*N-Y;for(let Ie=0;Ie<ae;Ie++){const Ye=Ie*b-q;ne[M]=Ye*E,ne[x]=ce*w,ne[_]=K,h.push(ne.x,ne.y,ne.z),ne[M]=0,ne[x]=0,ne[_]=P>0?1:-1,f.push(ne.x,ne.y,ne.z),p.push(Ie/D),p.push(1-te/O),me+=1}}for(let te=0;te<O;te++)for(let ce=0;ce<D;ce++){const Ie=m+ce+ae*te,Ye=m+ce+ae*(te+1),re=m+(ce+1)+ae*(te+1),ve=m+(ce+1)+ae*te;u.push(Ie,Ye,ve),u.push(Ye,re,ve),k+=6}c.addGroup(g,k,C),g+=k,m+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nn(r){const e={};for(let t=0;t<r.length;t++){const n=Ro(r[t]);for(const i in n)e[i]=n[i]}return e}function gM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function R_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const ku={clone:Ro,merge:Nn};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ja extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new U,Zg=new he,jg=new he;class pn extends Ja{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Zg,jg),t.subVectors(jg,Zg)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;s+=l.offsetX*i/u,t-=l.offsetY*n/h,i*=l.width/u,n*=l.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class P_ extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(oo,ao,e,t);i.layers=this.layers,this.add(i);const s=new pn(oo,ao,e,t);s.layers=this.layers,this.add(s);const l=new pn(oo,ao,e,t);l.layers=this.layers,this.add(l);const c=new pn(oo,ao,e,t);c.layers=this.layers,this.add(c);const u=new pn(oo,ao,e,t);u.layers=this.layers,this.add(u);const h=new pn(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,c,u]=t;for(const h of t)this.remove(h);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Ka extends jt{constructor(e,t,n,i,s,l,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,l,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I_ extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:dr});s.uniforms.tEquirect.value=t;const l=new Qt(i,s),c=t.minFilter;return t.minFilter===Wi&&(t.minFilter=on),new P_(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}class sh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mp extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ah{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new U;class oi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wp extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let lo;const aa=new U,co=new U,uo=new U,ho=new he,la=new he,L_=new at,yc=new U,ca=new U,xc=new U,Jg=new he,td=new he,Kg=new he;class D_ extends Lt{constructor(e=new wp){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ah(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new oi(n,3,0,!1)),lo.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=lo,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),L_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const l=this.center;Sc(yc.set(-.5,-.5,0),uo,l,co,i,s),Sc(ca.set(.5,-.5,0),uo,l,co,i,s),Sc(xc.set(.5,.5,0),uo,l,co,i,s),Jg.set(0,0),td.set(1,0),Kg.set(1,1);let c=e.ray.intersectTriangle(yc,ca,xc,!1,aa);if(c===null&&(Sc(ca.set(-.5,.5,0),uo,l,co,i,s),td.set(0,1),c=e.ray.intersectTriangle(yc,xc,ca,!1,aa),c===null))return;const u=e.ray.origin.distanceTo(aa);u<e.near||u>e.far||t.push({distance:u,point:aa.clone(),uv:jn.getInterpolation(aa,yc,ca,xc,Jg,td,Kg,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sc(r,e,t,n,i,s){ho.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(la.x=s*ho.x-i*ho.y,la.y=i*ho.x+s*ho.y):la.copy(ho),r.copy(e),r.x+=la.x,r.y+=la.y,r.applyMatrix4(L_)}const Mc=new U,Qg=new U;class U_ extends Lt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Mc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Mc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Mc.setFromMatrixPosition(e.matrixWorld),Qg.setFromMatrixPosition(this.matrixWorld);const n=Mc.distanceTo(Qg)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let l=t[i].distance;if(t[i].object.visible&&(l-=l*t[i].hysteresis),n>=l)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const l=n[i];t.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return t}}const $g=new U,e0=new wt,t0=new wt,yM=new U,n0=new at,wc=new U,nd=new gn,i0=new at,id=new No;class N_ extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qd,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wc),this.boundingBox.expandByPoint(wc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wc),this.boundingSphere.expandByPoint(wc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nd.copy(this.boundingSphere),nd.applyMatrix4(i),e.ray.intersectsSphere(nd)!==!1&&(i0.copy(i).invert(),id.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&id.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,id)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===h_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;e0.fromBufferAttribute(i.attributes.skinIndex,e),t0.fromBufferAttribute(i.attributes.skinWeight,e),$g.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const l=t0.getComponent(s);if(l!==0){const c=e0.getComponent(s);n0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(yM.copy($g).applyMatrix4(n0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ep extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qi extends jt{constructor(e=null,t=1,n=1,i,s,l,c,u,h=Mn,f=Mn,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const r0=new at,xM=new at;class lh{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,l=e.length;s<l;s++){const c=e[s]?e[s].matrixWorld:xM;r0.multiplyMatrices(c,t[s]),r0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qi(t,e,e,Pn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let l=t[s];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),l=new Ep),this.bones.push(l),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Po extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new at,s0=new at,Ec=[],o0=new mn,SM=new at,ua=new Qt,ha=new gn;class F_ extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,SM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),o0.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(o0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),ha.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,l=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),s0.multiplyMatrices(n,fo),ua.matrixWorld=s0,ua.raycast(e,Ec);for(let l=0,c=Ec.length;l<c;l++){const u=Ec[l];u.instanceId=s,u.object=this,t.push(u)}Ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(i*this.count),i,this.count,$u,Jn));const s=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const rd=new U,MM=new U,wM=new mt;class Br{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rd.subVectors(n,t).cross(MM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wM.getNormalMatrix(e),i=this.coplanarPoint(rd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new gn,Tc=new U;class Qa{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,l=new Br){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,i=e.elements,s=i[0],l=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],A=i[15];if(n[0].setComponents(u-s,m-h,x-g,A-_).normalize(),n[1].setComponents(u+s,m+h,x+g,A+_).normalize(),n[2].setComponents(u+l,m+f,x+y,A+E).normalize(),n[3].setComponents(u-l,m-f,x-y,A-E).normalize(),n[4].setComponents(u-c,m-p,x-M,A-w).normalize(),t===Ci)n[5].setComponents(u+c,m+p,x+M,A+w).normalize();else if(t===Oa)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tc.x=i.normal.x>0?e.max.x:e.min.x,Tc.y=i.normal.y>0?e.max.y:e.min.y,Tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sd(r,e){return r-e}function EM(r,e){return r.z-e.z}function TM(r,e){return e.z-r.z}class AM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,l=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const c=s[this.index];l.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const qn=new at,bM=new Fe(1,1,1),od=new Qa,Ac=new mn,os=new gn,fa=new U,a0=new U,CM=new U,ad=new AM,Rn=new Qt,bc=[];function RM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let l=0;l<n;l++)e.setComponent(s+t,l,r.getComponent(s,l))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function as(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class O_ extends Qt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new _t,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new qi(t,e,e,Pn,Jn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new qi(t,e,e,Za,vr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new qi(t,e,e,Pn,Jn);n.colorSpace=Pt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const l=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=l,f=new c.constructor(n*u),p=new kt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new kt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingBoxAt(s,Ac).applyMatrix4(qn),e.union(Ac)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingSphereAt(s,os).applyMatrix4(qn),e.union(os)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(sd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;qn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const l=this._colorsTexture;return l&&(bM.toArray(l.image.data,i*4),l.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const l=e.getIndex();if(l!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?l.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(sd),u=this._availableGeometryIds.shift(),s[u]=i):(u=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),l=t.getIndex(),c=this._geometryInfo[e];if(i&&l.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const f in n.attributes){const p=t.getAttribute(f),m=n.getAttribute(f);RM(p,m,u);const g=p.itemSize;for(let y=p.count,M=h;y<M;y++){const x=u+y;for(let _=0;_<g;_++)m.setComponent(x,_,0)}m.needsUpdate=!0,m.addUpdateRange(u*g,h*g)}if(i){const f=c.indexStart,p=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let m=0;m<l.count;m++)s.setX(f+m,u+l.getX(m));for(let m=l.count,g=p;m<g;m++)s.setX(f+m,u);s.needsUpdate=!0,s.addUpdateRange(f,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((l,c)=>c).sort((l,c)=>n[l].vertexStart-n[c].vertexStart),s=this.geometry;for(let l=0,c=n.length;l<c;l++){const u=i[l],h=n[u];if(h.active!==!1){if(s.index!==null){if(h.indexStart!==t){const{indexStart:f,vertexStart:p,reservedIndexCount:m}=h,g=s.index,y=g.array,M=e-p;for(let x=f;x<f+m;x++)y[x]=y[x]+M;g.array.copyWithin(t,f,f+m),g.addUpdateRange(t,m),h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:f,reservedVertexCount:p}=h,m=s.attributes;for(const g in m){const y=m[g],{array:M,itemSize:x}=y;M.copyWithin(e*x,f*x,(f+p)*x),y.addUpdateRange(e*x,p*x)}h.vertexStart=e}e+=h.reservedVertexCount,h.start=s.index?h.indexStart:h.vertexStart,this._nextIndexStart=s.index?h.indexStart+h.reservedIndexCount:0,this._nextVertexStart=h.vertexStart+h.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new mn,l=n.index,c=n.attributes.position;for(let u=i.start,h=i.start+i.count;u<h;u++){let f=u;l&&(f=l.getX(f)),s.expandByPoint(fa.fromBufferAttribute(c,f))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new gn;this.getBoundingBoxAt(e,Ac),Ac.getCenter(s.center);const l=n.index,c=n.attributes.position;let u=0;for(let h=i.start,f=i.start+i.count;h<f;h++){let p=h;l&&(p=l.getX(p)),fa.fromBufferAttribute(c,p),u=Math.max(u,s.center.distanceToSquared(fa))}s.radius=Math.sqrt(u),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(sd);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);as(this._multiDrawCounts,i),as(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const l=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),as(l.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),as(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),as(u.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _t,this._initializeGeometry(s));const l=this.geometry;s.index&&as(s.index.array,l.index.array);for(const c in s.attributes)as(s.attributes[c].array,l.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,l=this.geometry;Rn.material=this.material,Rn.geometry.index=l.index,Rn.geometry.attributes=l.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new mn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new gn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Rn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Rn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Rn.geometry.boundingBox),this.getBoundingSphereAt(h,Rn.geometry.boundingSphere),Rn.raycast(e,bc);for(let p=0,m=bc.length;p<m;p++){const g=bc[p];g.object=this,g.batchId=c,t.push(g)}bc.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,u=this._instanceInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._geometryInfo,m=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data;m&&(qn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),od.setFromProjectionMatrix(qn,e.coordinateSystem));let M=0;if(this.sortObjects){qn.copy(this.matrixWorld).invert(),fa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(qn),a0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(qn);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const A=u[E].geometryIndex;this.getMatrixAt(E,qn),this.getBoundingSphereAt(A,os).applyMatrix4(qn);let L=!1;if(m&&(L=!od.intersectsSphere(os)),!L){const P=p[A],D=CM.subVectors(os.center,fa).dot(a0);ad.push(P.start,P.count,D,E)}}const x=ad.list,_=this.customSort;_===null?x.sort(s.transparent?TM:EM):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const A=x[E];h[M]=A.start*c,f[M]=A.count,y[M]=A.index,M++}ad.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,qn),this.getBoundingSphereAt(E,os).applyMatrix4(qn),w=!od.intersectsSphere(os)),!w){const A=p[E];h[M]=A.start*c,f[M]=A.count,y[M]=x,M++}}g.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,l){this.onBeforeRender(e,null,i,s,l)}}class Bn extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hu=new U,Vu=new U,l0=new at,da=new No,Cc=new gn,ld=new U,c0=new U;let Hr=class extends Lt{constructor(e=new _t,t=new Bn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Hu.fromBufferAttribute(t,i-1),Vu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hu.distanceTo(Vu);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(i),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;l0.copy(i).invert(),da.copy(e.ray).applyMatrix4(l0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,l.start),y=Math.min(f.count,l.start+l.count);for(let M=g,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=Rc(this,e,da,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(g),_=Rc(this,e,da,u,M,x);_&&t.push(_)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let M=g,x=y-1;M<x;M+=h){const _=Rc(this,e,da,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Rc(this,e,da,u,y-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Rc(r,e,t,n,i,s){const l=r.geometry.attributes.position;if(Hu.fromBufferAttribute(l,i),Vu.fromBufferAttribute(l,s),t.distanceSqToSegment(Hu,Vu,ld,c0)>n)return;ld.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(ld);if(!(u<e.near||u>e.far))return{distance:u,point:c0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const u0=new U,h0=new U;class Ji extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)u0.fromBufferAttribute(t,i),h0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+u0.distanceTo(h0);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tp extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f0=new at,jd=new No,Pc=new gn,Ic=new U;class z_ extends Lt{constructor(e=new _t,t=new Tp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(i),Pc.radius+=s,e.ray.intersectsSphere(Pc)===!1)return;f0.copy(i).invert(),jd.copy(e.ray).applyMatrix4(f0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,l.start),g=Math.min(h.count,l.start+l.count);for(let y=m,M=g;y<M;y++){const x=h.getX(y);Ic.fromBufferAttribute(p,x),d0(Ic,x,u,i,e,t,this)}}else{const m=Math.max(0,l.start),g=Math.min(p.count,l.start+l.count);for(let y=m,M=g;y<M;y++)Ic.fromBufferAttribute(p,y),d0(Ic,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function d0(r,e,t,n,i,s,l){const c=jd.distanceSqToPoint(r);if(c<t){const u=new U;jd.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Mo extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class PM extends jt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:on,this.magFilter=s!==void 0?s:on,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class IM extends jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Mn,this.minFilter=Mn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ch extends jt{constructor(e,t,n,i,s,l,c,u,h,f,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class LM extends ch{constructor(e,t,n,i,s,l){super(e,t,n,s,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=yi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends ch{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class UM extends jt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ap extends jt{constructor(e,t,n,i,s,l,c,u,h,f=ws){if(f!==ws&&f!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ws&&(n=vr),n===void 0&&f===Ps&&(n=Rs),super(null,i,s,l,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mn,this.minFilter=u!==void 0?u:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let l;t?l=t:l=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-l,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===l)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(l-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const l=this.getPoint(i),c=this.getPoint(s),u=t||(l.isVector2?new he:new U);return u.copy(c).sub(l).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],l=[],c=new U,u=new at;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new U)}s[0]=new U,l[0]=new U;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),l[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),l[g]=l[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(ht(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}l[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(ht(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),l[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uh extends Pi{constructor(e=0,t=0,n=1,i=1,s=0,l=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=l,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const l=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(l?s=0:s=i),this.aClockwise===!0&&!l&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class k_ extends uh{constructor(e,t,n,i,s,l){super(e,t,n,n,i,s,l),this.isArcCurve=!0,this.type="ArcCurve"}}function bp(){let r=0,e=0,t=0,n=0;function i(s,l,c,u){r=s,e=c,t=-3*s+3*l-2*c-u,n=2*s-2*l+c+u}return{initCatmullRom:function(s,l,c,u,h){i(l,c,h*(c-s),h*(u-l))},initNonuniformCatmullRom:function(s,l,c,u,h,f,p){let m=(l-s)/h-(c-s)/(h+f)+(c-l)/f,g=(c-l)/f-(u-l)/(f+p)+(u-c)/p;m*=f,g*=f,i(l,c,m,g)},calc:function(s){const l=s*s,c=l*s;return r+e*s+t*l+n*c}}}const Lc=new U,cd=new bp,ud=new bp,hd=new bp;class H_ extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,l=(s-(this.closed?0:1))*e;let c=Math.floor(l),u=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(Lc.subVectors(i[0],i[1]).add(i[0]),h=Lc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(Lc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),cd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),ud.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),hd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),ud.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),hd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(cd.calc(u),ud.calc(u),hd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function p0(r,e,t,n,i){const s=(n-e)*.5,l=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+l)*u+(-3*t+3*n-2*s-l)*c+s*r+t}function NM(r,e){const t=1-r;return t*t*e}function FM(r,e){return 2*(1-r)*r*e}function OM(r,e){return r*r*e}function ba(r,e,t,n){return NM(r,e)+FM(r,t)+OM(r,n)}function BM(r,e){const t=1-r;return t*t*t*e}function zM(r,e){const t=1-r;return 3*t*t*r*e}function kM(r,e){return 3*(1-r)*r*r*e}function HM(r,e){return r*r*r*e}function Ca(r,e,t,n,i){return BM(r,e)+zM(r,t)+kM(r,n)+HM(r,i)}class Cp extends Pi{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Ca(e,i.x,s.x,l.x,c.x),Ca(e,i.y,s.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class V_ extends Pi{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Ca(e,i.x,s.x,l.x,c.x),Ca(e,i.y,s.y,l.y,c.y),Ca(e,i.z,s.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rp extends Pi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G_ extends Pi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Pi{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(ba(e,i.x,s.x,l.x),ba(e,i.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ip extends Pi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(ba(e,i.x,s.x,l.x),ba(e,i.y,s.y,l.y),ba(e,i.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,l=Math.floor(s),c=s-l,u=i[l===0?l:l-1],h=i[l],f=i[l>i.length-2?i.length-1:l+1],p=i[l>i.length-3?i.length-1:l+2];return n.set(p0(c,u.x,h.x,f.x,p.x),p0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Gu=Object.freeze({__proto__:null,ArcCurve:k_,CatmullRomCurve3:H_,CubicBezierCurve:Cp,CubicBezierCurve3:V_,EllipseCurve:uh,LineCurve:Rp,LineCurve3:G_,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Ip,SplineCurve:Lp});class W_ extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const l=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-l/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const l=s[i],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,u=l.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Gu[i.type]().fromJSON(i))}return this}}class za extends W_{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rp(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Pp(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,l){const c=new Cp(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,l),this}absarc(e,t,n,i,s,l){return this.absellipse(e,t,n,n,i,s,l),this}ellipse(e,t,n,i,s,l,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,l,c,u),this}absellipse(e,t,n,i,s,l,c,u){const h=new uh(e,t,n,i,s,l,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $a extends _t{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ht(i,0,Math.PI*2);const s=[],l=[],c=[],u=[],h=[],f=1/t,p=new U,m=new he,g=new U,y=new U,M=new U;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,A=Math.sin(w),L=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*A,p.y=e[P].y,p.z=e[P].x*L,l.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const D=u[3*P+0]*A,O=u[3*P+1],C=u[3*P+0]*L;h.push(D,O,C)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const A=w+E*e.length,L=A,P=A+e.length,D=A+e.length+1,O=A+1;s.push(L,P,O),s.push(D,O,P)}this.setIndex(s),this.setAttribute("position",new We(l,3)),this.setAttribute("uv",new We(c,2)),this.setAttribute("normal",new We(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.points,e.segments,e.phiStart,e.phiLength)}}class hh extends $a{constructor(e=1,t=1,n=4,i=8){const s=new za;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new hh(e.radius,e.length,e.capSegments,e.radialSegments)}}class fh extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],l=[],c=[],u=[],h=new U,f=new he;l.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(l[m]/e+1)/2,f.y=(l[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fo extends _t{constructor(e=1,t=1,n=1,i=32,s=1,l=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const M=[],x=n/2;let _=0;E(),l===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(m,3)),this.setAttribute("uv",new We(g,2));function E(){const A=new U,L=new U;let P=0;const D=(t-e)/n;for(let O=0;O<=s;O++){const C=[],b=O/s,N=b*(t-e)+e;for(let q=0;q<=i;q++){const Y=q/i,K=Y*u+c,ae=Math.sin(K),$=Math.cos(K);L.x=N*ae,L.y=-b*n+x,L.z=N*$,p.push(L.x,L.y,L.z),A.set(ae,D,$).normalize(),m.push(A.x,A.y,A.z),g.push(Y,1-b),C.push(y++)}M.push(C)}for(let O=0;O<i;O++)for(let C=0;C<s;C++){const b=M[C][O],N=M[C+1][O],q=M[C+1][O+1],Y=M[C][O+1];(e>0||C!==0)&&(f.push(b,N,Y),P+=3),(t>0||C!==s-1)&&(f.push(N,q,Y),P+=3)}h.addGroup(_,P,0),_+=P}function w(A){const L=y,P=new he,D=new U;let O=0;const C=A===!0?e:t,b=A===!0?1:-1;for(let q=1;q<=i;q++)p.push(0,x*b,0),m.push(0,b,0),g.push(.5,.5),y++;const N=y;for(let q=0;q<=i;q++){const K=q/i*u+c,ae=Math.cos(K),$=Math.sin(K);D.x=C*$,D.y=x*b,D.z=C*ae,p.push(D.x,D.y,D.z),m.push(0,b,0),P.x=ae*.5+.5,P.y=$*.5*b+.5,g.push(P.x,P.y),y++}for(let q=0;q<i;q++){const Y=L+q,K=N+q;A===!0?f.push(K,K+1,Y):f.push(K+1,K,Y),O+=3}h.addGroup(_,O,A===!0?1:2),_+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dh extends Fo{constructor(e=1,t=1,n=32,i=1,s=!1,l=0,c=Math.PI*2){super(0,e,t,n,i,s,l,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:l,thetaLength:c}}static fromJSON(e){return new dh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],l=[];c(i),h(n),f(),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(s.slice(),3)),this.setAttribute("uv",new We(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new U,A=new U,L=new U;for(let P=0;P<t.length;P+=3)g(t[P+0],w),g(t[P+1],A),g(t[P+2],L),u(w,A,L,E)}function u(E,w,A,L){const P=L+1,D=[];for(let O=0;O<=P;O++){D[O]=[];const C=E.clone().lerp(A,O/P),b=w.clone().lerp(A,O/P),N=P-O;for(let q=0;q<=N;q++)q===0&&O===P?D[O][q]=C:D[O][q]=C.clone().lerp(b,q/N)}for(let O=0;O<P;O++)for(let C=0;C<2*(P-O)-1;C++){const b=Math.floor(C/2);C%2===0?(m(D[O][b+1]),m(D[O+1][b]),m(D[O][b])):(m(D[O][b+1]),m(D[O+1][b+1]),m(D[O+1][b]))}}function h(E){const w=new U;for(let A=0;A<s.length;A+=3)w.x=s[A+0],w.y=s[A+1],w.z=s[A+2],w.normalize().multiplyScalar(E),s[A+0]=w.x,s[A+1]=w.y,s[A+2]=w.z}function f(){const E=new U;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const A=x(E)/2/Math.PI+.5,L=_(E)/Math.PI+.5;l.push(A,1-L)}y(),p()}function p(){for(let E=0;E<l.length;E+=6){const w=l[E+0],A=l[E+2],L=l[E+4],P=Math.max(w,A,L),D=Math.min(w,A,L);P>.9&&D<.1&&(w<.2&&(l[E+0]+=1),A<.2&&(l[E+2]+=1),L<.2&&(l[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const A=E*3;w.x=e[A+0],w.y=e[A+1],w.z=e[A+2]}function y(){const E=new U,w=new U,A=new U,L=new U,P=new he,D=new he,O=new he;for(let C=0,b=0;C<s.length;C+=9,b+=6){E.set(s[C+0],s[C+1],s[C+2]),w.set(s[C+3],s[C+4],s[C+5]),A.set(s[C+6],s[C+7],s[C+8]),P.set(l[b+0],l[b+1]),D.set(l[b+2],l[b+3]),O.set(l[b+4],l[b+5]),L.copy(E).add(w).add(A).divideScalar(3);const N=x(L);M(P,b+0,E,N),M(D,b+2,w,N),M(O,b+4,A,N)}}function M(E,w,A,L){L<0&&E.x===1&&(l[w]=E.x-1),A.x===0&&A.z===0&&(l[w]=L/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.vertices,e.indices,e.radius,e.details)}}class ph extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ph(e.radius,e.detail)}}const Dc=new U,Uc=new U,fd=new U,Nc=new jn;class X_ extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Es*t),l=e.getIndex(),c=e.getAttribute("position"),u=l?l.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){l?(h[0]=l.getX(y),h[1]=l.getX(y+1),h[2]=l.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Nc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Nc.getNormal(fd),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,A=p[E],L=p[w],P=Nc[f[E]],D=Nc[f[w]],O=`${A}_${L}`,C=`${L}_${A}`;C in m&&m[C]?(fd.dot(m[C].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(D.x,D.y,D.z)),m[C]=null):O in m||(m[O]={index0:h[E],index1:h[w],normal:fd.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];Dc.fromBufferAttribute(c,M),Uc.fromBufferAttribute(c,x),g.push(Dc.x,Dc.y,Dc.z),g.push(Uc.x,Uc.y,Uc.z)}this.setAttribute("position",new We(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class As extends za{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new za().fromJSON(i))}return this}}const VM={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=q_(r,0,i,t,!0);const l=[];if(!s||s.next===s.prev)return l;let c,u,h,f,p,m,g;if(n&&(s=YM(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return ka(s,l,t,c,u,g,0),l}};function q_(r,e,t,n,i){let s,l;if(i===r1(r,e,t,n)>0)for(s=e;s<t;s+=n)l=m0(s,r[s],r[s+1],l);else for(s=t-n;s>=e;s-=n)l=m0(s,r[s],r[s+1],l);return l&&mh(l,l.next)&&(Va(l),l=l.next),l}function Ls(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(mh(t,t.next)||qt(t.prev,t,t.next)===0)){if(Va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(r,e,t,n,i,s,l){if(!r)return;!l&&s&&QM(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?WM(r,n,i,s):GM(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Va(r),r=h.next,c=h.next;continue}if(r=h,r===c){l?l===1?(r=XM(Ls(r),e,t),ka(r,e,t,n,i,s,2)):l===2&&qM(r,e,t,n,i,s):ka(Ls(r),e,t,n,i,s,1);break}}}function GM(r){const e=r.prev,t=r,n=r.next;if(qt(e,t,n)>=0)return!1;const i=e.x,s=t.x,l=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<l?i:l:s<l?s:l,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>l?i:l:s>l?s:l,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&wo(i,c,s,u,l,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function WM(r,e,t,n){const i=r.prev,s=r,l=r.next;if(qt(i,s,l)>=0)return!1;const c=i.x,u=s.x,h=l.x,f=i.y,p=s.y,m=l.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Jd(g,y,e,t,n),E=Jd(M,x,e,t,n);let w=r.prevZ,A=r.nextZ;for(;w&&w.z>=_&&A&&A.z<=E;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&wo(c,f,u,p,h,m,w.x,w.y)&&qt(w.prev,w,w.next)>=0||(w=w.prevZ,A.x>=g&&A.x<=M&&A.y>=y&&A.y<=x&&A!==i&&A!==l&&wo(c,f,u,p,h,m,A.x,A.y)&&qt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&wo(c,f,u,p,h,m,w.x,w.y)&&qt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;A&&A.z<=E;){if(A.x>=g&&A.x<=M&&A.y>=y&&A.y<=x&&A!==i&&A!==l&&wo(c,f,u,p,h,m,A.x,A.y)&&qt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function XM(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!mh(i,s)&&Y_(i,n,n.next,s)&&Ha(i,s)&&Ha(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Va(n),Va(n.next),n=r=s),n=n.next}while(n!==r);return Ls(n)}function qM(r,e,t,n,i,s){let l=r;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&t1(l,c)){let u=Z_(l,c);l=Ls(l,l.next),u=Ls(u,u.next),ka(l,e,t,n,i,s,0),ka(u,e,t,n,i,s,0);return}c=c.next}l=l.next}while(l!==r)}function YM(r,e,t,n){const i=[];let s,l,c,u,h;for(s=0,l=e.length;s<l;s++)c=e[s]*n,u=s<l-1?e[s+1]*n:r.length,h=q_(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(e1(h));for(i.sort(ZM),s=0;s<i.length;s++)t=jM(i[s],t);return t}function ZM(r,e){return r.x-e.x}function jM(r,e){const t=JM(r,e);if(!t)return e;const n=Z_(t,r);return Ls(n,n.next),Ls(t,t.next)}function JM(r,e){let t=e,n=-1/0,i;const s=r.x,l=r.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&wo(l<h?s:n,l,u,h,l<h?n:s,l,t.x,t.y)&&(p=Math.abs(l-t.y)/(s-t.x),Ha(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&KM(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function KM(r,e){return qt(r.prev,r,e.prev)<0&&qt(e.next,r,r.next)<0}function QM(r,e,t,n){let i=r;do i.z===0&&(i.z=Jd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$M(i)}function $M(r){let e,t,n,i,s,l,c,u,h=1;do{for(t=r,r=null,s=null,l=0;t;){for(l++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(l>1);return r}function Jd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function e1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function wo(r,e,t,n,i,s,l,c){return(i-l)*(e-c)>=(r-l)*(s-c)&&(r-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(s-c)>=(i-l)*(n-c)}function t1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!n1(r,e)&&(Ha(r,e)&&Ha(e,r)&&i1(r,e)&&(qt(r.prev,r,e.prev)||qt(r,e.prev,e))||mh(r,e)&&qt(r.prev,r,r.next)>0&&qt(e.prev,e,e.next)>0)}function qt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function mh(r,e){return r.x===e.x&&r.y===e.y}function Y_(r,e,t,n){const i=Oc(qt(r,e,t)),s=Oc(qt(r,e,n)),l=Oc(qt(t,n,r)),c=Oc(qt(t,n,e));return!!(i!==s&&l!==c||i===0&&Fc(r,t,e)||s===0&&Fc(r,n,e)||l===0&&Fc(t,r,n)||c===0&&Fc(t,e,n))}function Fc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Oc(r){return r>0?1:r<0?-1:0}function n1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Y_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ha(r,e){return qt(r.prev,r,r.next)<0?qt(r,e,r.next)>=0&&qt(r,r.prev,e)>=0:qt(r,e,r.prev)<0||qt(r,r.next,e)<0}function i1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Z_(r,e){const t=new Kd(r.i,r.x,r.y),n=new Kd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function m0(r,e,t,n){const i=new Kd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Va(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r1(r,e,t,n){let i=0;for(let s=e,l=t-n;s<t;s+=n)i+=(r[l]-r[s])*(r[s+1]+r[l+1]),l=s;return i}class Yi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];g0(e),v0(n,e);let l=e.length;t.forEach(g0);for(let u=0;u<t.length;u++)i.push(l),l+=t[u].length,v0(n,t[u]);const c=VM.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function g0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function v0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class gh extends _t{constructor(e=new As([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];l(h)}this.setAttribute("position",new We(i,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function l(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:s1;let w,A=!1,L,P,D,O;_&&(w=_.getSpacedPoints(f),A=!0,m=!1,L=_.computeFrenetFrames(f,!1),P=new U,D=new U,O=new U),m||(x=0,g=0,y=0,M=0);const C=c.extractPoints(h);let b=C.shape;const N=C.holes;if(!Yi.isClockWise(b)){b=b.reverse();for(let ue=0,pe=N.length;ue<pe;ue++){const B=N[ue];Yi.isClockWise(B)&&(N[ue]=B.reverse())}}const Y=Yi.triangulateShape(b,N),K=b;for(let ue=0,pe=N.length;ue<pe;ue++){const B=N[ue];b=b.concat(B)}function ae(ue,pe,B){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(pe,B)}const $=b.length,me=Y.length;function k(ue,pe,B){let je,_e,Be;const Me=ue.x-pe.x,ot=ue.y-pe.y,Te=B.x-ue.x,F=B.y-ue.y,R=Me*Me+ot*ot,Z=Me*F-ot*Te;if(Math.abs(Z)>Number.EPSILON){const oe=Math.sqrt(R),de=Math.sqrt(Te*Te+F*F),le=pe.x-ot/oe,Xe=pe.y+Me/oe,Ce=B.x-F/de,Oe=B.y+Te/de,Et=((Ce-le)*F-(Oe-Xe)*Te)/(Me*F-ot*Te);je=le+Me*Et-ue.x,_e=Xe+ot*Et-ue.y;const ye=je*je+_e*_e;if(ye<=2)return new he(je,_e);Be=Math.sqrt(ye/2)}else{let oe=!1;Me>Number.EPSILON?Te>Number.EPSILON&&(oe=!0):Me<-Number.EPSILON?Te<-Number.EPSILON&&(oe=!0):Math.sign(ot)===Math.sign(F)&&(oe=!0),oe?(je=-ot,_e=Me,Be=Math.sqrt(R)):(je=Me,_e=ot,Be=Math.sqrt(R/2))}return new he(je/Be,_e/Be)}const ne=[];for(let ue=0,pe=K.length,B=pe-1,je=ue+1;ue<pe;ue++,B++,je++)B===pe&&(B=0),je===pe&&(je=0),ne[ue]=k(K[ue],K[B],K[je]);const te=[];let ce,Ie=ne.concat();for(let ue=0,pe=N.length;ue<pe;ue++){const B=N[ue];ce=[];for(let je=0,_e=B.length,Be=_e-1,Me=je+1;je<_e;je++,Be++,Me++)Be===_e&&(Be=0),Me===_e&&(Me=0),ce[je]=k(B[je],B[Be],B[Me]);te.push(ce),Ie=Ie.concat(ce)}for(let ue=0;ue<x;ue++){const pe=ue/x,B=g*Math.cos(pe*Math.PI/2),je=y*Math.sin(pe*Math.PI/2)+M;for(let _e=0,Be=K.length;_e<Be;_e++){const Me=ae(K[_e],ne[_e],je);xe(Me.x,Me.y,-B)}for(let _e=0,Be=N.length;_e<Be;_e++){const Me=N[_e];ce=te[_e];for(let ot=0,Te=Me.length;ot<Te;ot++){const F=ae(Me[ot],ce[ot],je);xe(F.x,F.y,-B)}}}const Ye=y+M;for(let ue=0;ue<$;ue++){const pe=m?ae(b[ue],Ie[ue],Ye):b[ue];A?(D.copy(L.normals[0]).multiplyScalar(pe.x),P.copy(L.binormals[0]).multiplyScalar(pe.y),O.copy(w[0]).add(D).add(P),xe(O.x,O.y,O.z)):xe(pe.x,pe.y,0)}for(let ue=1;ue<=f;ue++)for(let pe=0;pe<$;pe++){const B=m?ae(b[pe],Ie[pe],Ye):b[pe];A?(D.copy(L.normals[ue]).multiplyScalar(B.x),P.copy(L.binormals[ue]).multiplyScalar(B.y),O.copy(w[ue]).add(D).add(P),xe(O.x,O.y,O.z)):xe(B.x,B.y,p/f*ue)}for(let ue=x-1;ue>=0;ue--){const pe=ue/x,B=g*Math.cos(pe*Math.PI/2),je=y*Math.sin(pe*Math.PI/2)+M;for(let _e=0,Be=K.length;_e<Be;_e++){const Me=ae(K[_e],ne[_e],je);xe(Me.x,Me.y,p+B)}for(let _e=0,Be=N.length;_e<Be;_e++){const Me=N[_e];ce=te[_e];for(let ot=0,Te=Me.length;ot<Te;ot++){const F=ae(Me[ot],ce[ot],je);A?xe(F.x,F.y+w[f-1].y,w[f-1].x+B):xe(F.x,F.y,p+B)}}}re(),ve();function re(){const ue=i.length/3;if(m){let pe=0,B=$*pe;for(let je=0;je<me;je++){const _e=Y[je];$e(_e[2]+B,_e[1]+B,_e[0]+B)}pe=f+x*2,B=$*pe;for(let je=0;je<me;je++){const _e=Y[je];$e(_e[0]+B,_e[1]+B,_e[2]+B)}}else{for(let pe=0;pe<me;pe++){const B=Y[pe];$e(B[2],B[1],B[0])}for(let pe=0;pe<me;pe++){const B=Y[pe];$e(B[0]+$*f,B[1]+$*f,B[2]+$*f)}}n.addGroup(ue,i.length/3-ue,0)}function ve(){const ue=i.length/3;let pe=0;Le(K,pe),pe+=K.length;for(let B=0,je=N.length;B<je;B++){const _e=N[B];Le(_e,pe),pe+=_e.length}n.addGroup(ue,i.length/3-ue,1)}function Le(ue,pe){let B=ue.length;for(;--B>=0;){const je=B;let _e=B-1;_e<0&&(_e=ue.length-1);for(let Be=0,Me=f+x*2;Be<Me;Be++){const ot=$*Be,Te=$*(Be+1),F=pe+je+ot,R=pe+_e+ot,Z=pe+_e+Te,oe=pe+je+Te;st(F,R,Z,oe)}}}function xe(ue,pe,B){u.push(ue),u.push(pe),u.push(B)}function $e(ue,pe,B){tt(ue),tt(pe),tt(B);const je=i.length/3,_e=E.generateTopUV(n,i,je-3,je-2,je-1);ct(_e[0]),ct(_e[1]),ct(_e[2])}function st(ue,pe,B,je){tt(ue),tt(pe),tt(je),tt(pe),tt(B),tt(je);const _e=i.length/3,Be=E.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);ct(Be[0]),ct(Be[1]),ct(Be[3]),ct(Be[1]),ct(Be[2]),ct(Be[3])}function tt(ue){i.push(u[ue*3+0]),i.push(u[ue*3+1]),i.push(u[ue*3+2])}function ct(ue){s.push(ue.x),s.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return o1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,l=e.shapes.length;s<l;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Gu[i.type]().fromJSON(i)),new gh(n,e.options)}}const s1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],l=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new he(s,l),new he(c,u),new he(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const l=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(l-h)?[new he(l,1-u),new he(h,1-p),new he(m,1-y),new he(M,1-_)]:[new he(c,1-u),new he(f,1-p),new he(g,1-y),new he(x,1-_)]}};function o1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vh extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vh(e.radius,e.detail)}}class el extends Wr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new el(e.radius,e.detail)}}class Oo extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-l;for(let w=0;w<h;w++){const A=w*p-s;y.push(A,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,A=E+h*(_+1),L=E+1+h*(_+1),P=E+1+h*_;g.push(w,A,P),g.push(A,L,P)}this.setIndex(g),this.setAttribute("position",new We(y,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class _h extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new U,y=new he;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*l;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,A=E+n+1,L=E+n+2,P=E+1;c.push(w,A,P),c.push(A,L,P)}}this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yh extends _t{constructor(e=new As([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],l=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new We(i,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(l,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;Yi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];Yi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=Yi.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];g=g.concat(E)}for(let x=0,_=g.length;x<_;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),l.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,A=E[1]+p,L=E[2]+p;n.push(w,A,L),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return a1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const l=t[e.shapes[i]];n.push(l)}return new yh(n,e.curveSegments)}}function a1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class tl extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(l+c,Math.PI);let h=0;const f=[],p=new U,m=new U,g=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let A=0;_===0&&l===0?A=.5/t:_===n&&u===Math.PI&&(A=-.5/t);for(let L=0;L<=t;L++){const P=L/t;p.x=-e*Math.cos(i+P*s)*Math.sin(l+w*c),p.y=e*Math.cos(l+w*c),p.z=e*Math.sin(i+P*s)*Math.sin(l+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(P+A,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],A=f[_][E],L=f[_+1][E],P=f[_+1][E+1];(_!==0||l>0)&&g.push(w,A,P),(_!==n-1||u<Math.PI)&&g.push(A,L,P)}this.setIndex(g),this.setAttribute("position",new We(y,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xh extends Wr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xh(e.radius,e.detail)}}class Sh extends _t{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],f=new U,p=new U,m=new U;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const M=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const M=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;l.push(M,x,E),l.push(x,_,E)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mh extends _t{constructor(e=1,t=.4,n=64,i=8,s=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new U,m=new U,g=new U,y=new U,M=new U,x=new U,_=new U;for(let w=0;w<=n;++w){const A=w/n*s*Math.PI*2;E(A,s,l,e,g),E(A+.01,s,l,e,y),x.subVectors(y,g),_.addVectors(y,g),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let L=0;L<=i;++L){const P=L/i*Math.PI*2,D=-t*Math.cos(P),O=t*Math.sin(P);p.x=g.x+(D*_.x+O*M.x),p.y=g.y+(D*_.y+O*M.y),p.z=g.z+(D*_.z+O*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(L/i)}}for(let w=1;w<=n;w++)for(let A=1;A<=i;A++){const L=(i+1)*(w-1)+(A-1),P=(i+1)*w+(A-1),D=(i+1)*w+A,O=(i+1)*(w-1)+A;c.push(L,P,O),c.push(P,D,O)}this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2));function E(w,A,L,P,D){const O=Math.cos(w),C=Math.sin(w),b=L/A*w,N=Math.cos(b);D.x=P*(2+N)*.5*O,D.y=P*(2+N)*C*.5,D.z=P*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class wh extends _t{constructor(e=new Ip(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const l=e.computeFrenetFrames(t,s);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new U,u=new U,h=new he;let f=new U;const p=[],m=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(m,3)),this.setAttribute("uv",new We(g,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const A=l.normals[w],L=l.binormals[w];for(let P=0;P<=i;P++){const D=P/i*Math.PI*2,O=Math.sin(D),C=-Math.cos(D);u.x=C*A.x+O*L.x,u.y=C*A.y+O*L.y,u.z=C*A.z+O*L.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let A=1;A<=i;A++){const L=(i+1)*(w-1)+(A-1),P=(i+1)*w+(A-1),D=(i+1)*w+A,O=(i+1)*(w-1)+A;y.push(L,P,O),y.push(P,D,O)}}function E(){for(let w=0;w<=t;w++)for(let A=0;A<=i;A++)h.x=w/t,h.y=A/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wh(new Gu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dp extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const l=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,M=m+g;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(l,_),s.fromBufferAttribute(l,E),_0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const l=e.attributes.position;for(let c=0,u=l.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(l,f),s.fromBufferAttribute(l,p),_0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new We(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var y0=Object.freeze({__proto__:null,BoxGeometry:Ds,CapsuleGeometry:hh,CircleGeometry:fh,ConeGeometry:dh,CylinderGeometry:Fo,DodecahedronGeometry:ph,EdgesGeometry:X_,ExtrudeGeometry:gh,IcosahedronGeometry:vh,LatheGeometry:$a,OctahedronGeometry:el,PlaneGeometry:Oo,PolyhedronGeometry:Wr,RingGeometry:_h,ShapeGeometry:yh,SphereGeometry:tl,TetrahedronGeometry:xh,TorusGeometry:Sh,TorusKnotGeometry:Mh,TubeGeometry:wh,WireframeGeometry:Dp});class j_ extends In{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class J_ extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Up extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends Up{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Q_ extends In{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $_ extends In{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ey extends In{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ty extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Np extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ny extends In{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iy extends Bn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ss(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ry(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function sy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,l=0;l!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[l++]=r[c+u]}return i}function Op(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let l=s[n];if(l!==void 0)if(Array.isArray(l))do l=s[n],l!==void 0&&(e.push(s.time),t.push.apply(t,l)),s=r[i++];while(s!==void 0);else if(l.toArray!==void 0)do l=s[n],l!==void 0&&(e.push(s.time),l.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do l=s[n],l!==void 0&&(e.push(s.time),t.push(l)),s=r[i++];while(s!==void 0)}function l1(r,e,t,n,i=30){const s=r.clone();s.name=e;const l=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=Ss(p,h.times.constructor),h.values=Ss(m,h.values.constructor),l.push(h))}s.tracks=l;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function c1(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let l=0;l<i;++l){const c=t.tracks[l],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new Kn().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*g+m;if(u==="quaternion")Kn.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=g-m*2;for(let A=0;A<w;++A)h.values[E+A]-=M[A]}}}return r.blendMode=vp,r}const u1={convertArray:Ss,isTypedArray:ry,getKeyframeOrder:sy,sortedArray:Qd,flattenJSON:Op,subclip:l1,makeClipAdditive:c1};class nl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let l=0;l!==i;++l)t[l]=n[s+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oy extends nl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,l=e+1,c=i[s],u=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case ys:s=e,c=2*t-n;break;case Ua:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ys:l=e,u=2*n-t;break;case Ua:l=1,u=n+i[1]-i[0];break;default:l=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=l*f}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-g)*x+(1.5+g)*M+.5*y,A=g*x-g*M;for(let L=0;L!==c;++L)s[L]=_*l[f+L]+E*l[h+L]+w*l[u+L]+A*l[p+L];return s}}class Bp extends nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=l[h+m]*p+l[u+m]*f;return s}}class ay extends nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case Bu:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Bu;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,l=i-1;for(;s!==i&&n[s]<e;)++s;for(;l!==-1&&n[l]>t;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);const c=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(i!==void 0&&ry(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$c,s=e.length-1;let l=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[g+y]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];const p=c*n,m=l*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++l}}if(s>0){e[l]=e[s];for(let c=s*n,u=l*n,h=0;h!==n;++h)t[u+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Bu;class Us extends Ii{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Da;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class zp extends Ii{}zp.prototype.ValueTypeName="color";class Ga extends Ii{}Ga.prototype.ValueTypeName="number";class ly extends nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Kn.slerpFlat(s,0,l,h-c,l,h,u);return s}}class il extends Ii{InterpolantFactoryMethodLinear(e){return new ly(this.times,this.values,this.getValueSize(),e)}}il.prototype.ValueTypeName="quaternion";il.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Ii{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Da;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Ii{}Wa.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=nh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(f1(n[l]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,l=n.length;s!==l;++s)t.push(Ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,l=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=sy(u);u=Qd(u,1,f),h=Qd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),l.push(new Ga(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,M){if(g.length!==0){const x=[],_=[];Op(g,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",l=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)g[m[y].morphTargets[M]]=-1;for(const M in g){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Ga(".morphTargetInfluence["+M+"]",x,_))}u=g.length*l}else{const g=".bones["+t[p].name+"]";n(Wa,g+".position",m,"pos",i),n(il,g+".quaternion",m,"rot",i),n(Wa,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ga;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return zp;case"quaternion":return il;case"bool":case"boolean":return Us;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function f1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=h1(r.type);if(r.times===void 0){const t=[],n=[];Op(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kp{constructor(e,t,n){const i=this;let s=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,l,c),s=!0},this.itemEnd=function(f){l++,i.onProgress!==void 0&&i.onProgress(f,l,c),l===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const cy=new kp;class Qn{constructor(e){this.manager=e!==void 0?e:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class d1 extends Error{constructor(e,t){super(e),this.response=t}}class _r extends Qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:n,onError:i});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=cr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:A})=>{if(w)_.close();else{M+=A.byteLength;const L=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let P=0,D=f.length;P<D;P++){const O=f[P];O.onProgress&&O.onProgress(L)}_.enqueue(A),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new d1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{fr.add(e,h);const f=cr[e];delete cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=cr[e];if(f===void 0)throw this.manager.itemError(e),h;delete cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class p1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xa.parse(e[n]);t.push(i)}return t}}class m1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=[],c=new ch,u=new _r(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);l[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=on),c.image=l,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){l[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)l[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),l[y].format=m.format,l[y].width=m.width,l[y].height=m.height}c.image=l}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=on),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class qa extends Qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=fr.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const c=Ba("img");function u(){f(),fr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class g1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new Ka;s.colorSpace=Zn;const l=new qa(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function u(h){l.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class v1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new qi,c=new _r(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?l.image=h.image:h.data!==void 0&&(l.image.width=h.width,l.image.height=h.height,l.image.data=h.data),l.wrapS=h.wrapS!==void 0?h.wrapS:yi,l.wrapT=h.wrapT!==void 0?h.wrapT:yi,l.magFilter=h.magFilter!==void 0?h.magFilter:on,l.minFilter=h.minFilter!==void 0?h.minFilter:on,l.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(l.colorSpace=h.colorSpace),h.flipY!==void 0&&(l.flipY=h.flipY),h.format!==void 0&&(l.format=h.format),h.type!==void 0&&(l.type=h.type),h.mipmaps!==void 0&&(l.mipmaps=h.mipmaps,l.minFilter=Wi),h.mipmapCount===1&&(l.minFilter=on),h.generateMipmaps!==void 0&&(l.generateMipmaps=h.generateMipmaps),l.needsUpdate=!0,t&&t(l,h)},n,i),l}}class _1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new jt,l=new qa(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xr extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class uy extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dd=new at,x0=new U,S0=new U;class Hp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;x0.setFromMatrixPosition(e.matrixWorld),t.position.copy(x0),S0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S0),t.updateMatrixWorld(),dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y1 extends Hp{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Co*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hy extends Xr{constructor(e,t,n=0,i=Math.PI/3,s=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new y1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const M0=new at,pa=new U,pd=new U;class x1 extends Hp{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),pd.copy(n.position),pd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pd),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),M0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M0)}}class fy extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new x1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends Ja{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,l=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S1 extends Hp{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new S1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class py extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class my extends Xr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class gy{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*i),t.addScaledVector(l[2],.488603*s),t.addScaledVector(l[3],.488603*n),t.addScaledVector(l[4],1.092548*(n*i)),t.addScaledVector(l[5],1.092548*(i*s)),t.addScaledVector(l[6],.315392*(3*s*s-1)),t.addScaledVector(l[7],1.092548*(n*s)),t.addScaledVector(l[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*i),t.addScaledVector(l[2],2*.511664*s),t.addScaledVector(l[3],2*.511664*n),t.addScaledVector(l[4],2*.429043*n*i),t.addScaledVector(l[5],2*.429043*i*s),t.addScaledVector(l[6],.743125*s*s-.247708),t.addScaledVector(l[7],2*.429043*n*s),t.addScaledVector(l[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class vy extends Xr{constructor(e=new gy,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Eh extends Qn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,l=new _r(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(i.uniforms[s]={},l.type){case"t":i.uniforms[s].value=n(l.value);break;case"c":i.uniforms[s].value=new Fe().setHex(l.value);break;case"v2":i.uniforms[s].value=new he().fromArray(l.value);break;case"v3":i.uniforms[s].value=new U().fromArray(l.value);break;case"v4":i.uniforms[s].value=new wt().fromArray(l.value);break;case"m3":i.uniforms[s].value=new mt().fromArray(l.value);break;case"m4":i.uniforms[s].value=new at().fromArray(l.value);break;default:i.uniforms[s].value=l.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new he().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Eh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:j_,SpriteMaterial:wp,RawShaderMaterial:J_,ShaderMaterial:ci,PointsMaterial:Tp,MeshPhysicalMaterial:K_,MeshStandardMaterial:Up,MeshPhongMaterial:Q_,MeshToonMaterial:$_,MeshNormalMaterial:ey,MeshLambertMaterial:ty,MeshDepthMaterial:Np,MeshDistanceMaterial:Fp,MeshBasicMaterial:Gr,MeshMatcapMaterial:ny,LineDashedMaterial:iy,LineBasicMaterial:Bn,Material:In};return new t[e]}}class $d{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vp extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _y extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),E=So(x.type,_),w=new ah(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const l=e.isInstancedBufferGeometry?new Vp:new _t,c=e.data.index;if(c!==void 0){const g=So(c.type,c.array);l.setIndex(new kt(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new oi(x,y.itemSize,y.offset,y.normalized)}else{const x=So(y.type,y.array),_=y.isInstancedBufferAttribute?Po:kt;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),l.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const A=i(e.data,E.data);w=new oi(A,E.itemSize,E.offset,E.normalized)}else{const A=So(E.type,E.array);w=new kt(A,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}l.morphAttributes[g]=M}e.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const M=p[g];l.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new U;m.center!==void 0&&g.fromArray(m.center),l.boundingSphere=new gn(g,m.radius)}return e.name&&(l.name=e.name),e.userData&&(l.userData=e.userData),l}}class M1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||l;const c=new _r(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new _r(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const l=await s.loadAsync(e,t),c=JSON.parse(l),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),l=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,l),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in l)if(l[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),l=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,l),u=this.parseObject(e.object,i,c,l,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new As().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=new lh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new _y;for(let s=0,l=e.length;s<l;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in y0?c=y0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Eh;s.setTextures(t);for(let l=0,c=e.length;l<c;l++){const u=e[l];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Xa.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function l(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return l(f)}else return u.data?{data:So(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new kp(t);s=new qa(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new qi(_.data,_.width,_.height)))}i[p.uuid]=new xs(g)}else{const g=c(p.url);i[p.uuid]=new xs(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return l.data?{data:So(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){i=new qa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const u=e[l],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new qi(y.data,y.width,y.height)))}n[u.uuid]=new xs(f)}else{const f=await s(u.url);n[u.uuid]=new xs(f)}}}return n}parseTextures(e,t){function n(s,l){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),l[s])}const i={};if(e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new Ka,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new qi:f=new jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,w1)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],w0),f.wrapT=n(c.wrap[1],w0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,E0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,E0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let l;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":l=new Mp,e.background!==void 0&&(Number.isInteger(e.background)?l.background=new Fe(e.background):l.background=h(e.background)),e.environment!==void 0&&(l.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?l.fog=new oh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(l.fog=new sh(e.fog.color,e.fog.density)),e.fog.name!==""&&(l.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(l.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(l.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&l.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":l=new pn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(l.focus=e.focus),e.zoom!==void 0&&(l.zoom=e.zoom),e.filmGauge!==void 0&&(l.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(l.filmOffset=e.filmOffset),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"OrthographicCamera":l=new rl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(l.zoom=e.zoom),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"AmbientLight":l=new py(e.color,e.intensity);break;case"DirectionalLight":l=new dy(e.color,e.intensity),l.target=e.target||"";break;case"PointLight":l=new fy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":l=new my(e.color,e.intensity,e.width,e.height);break;case"SpotLight":l=new hy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),l.target=e.target||"";break;case"HemisphereLight":l=new uy(e.color,e.groundColor,e.intensity);break;case"LightProbe":l=new vy().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),l=new N_(f,p),e.bindMode!==void 0&&(l.bindMode=e.bindMode),e.bindMatrix!==void 0&&l.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(l.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),l=new Qt(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;l=new F_(f,p,m),l.instanceMatrix=new Po(new Float32Array(g.array),16),y!==void 0&&(l.instanceColor=new Po(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),l=new O_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),l.geometry=f,l.perObjectFrustumCulled=e.perObjectFrustumCulled,l.sortObjects=e.sortObjects,l._drawRanges=e.drawRanges,l._reservedRanges=e.reservedRanges,l._visibility=e.visibility,l._active=e.active,l._bounds=e.bounds.map(M=>{const x=new mn;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new gn;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),l._maxInstanceCount=e.maxInstanceCount,l._maxVertexCount=e.maxVertexCount,l._maxIndexCount=e.maxIndexCount,l._geometryInitialized=e.geometryInitialized,l._geometryCount=e.geometryCount,l._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(l._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":l=new U_;break;case"Line":l=new Hr(c(e.geometry),u(e.material));break;case"LineLoop":l=new B_(c(e.geometry),u(e.material));break;case"LineSegments":l=new Ji(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":l=new z_(c(e.geometry),u(e.material));break;case"Sprite":l=new D_(u(e.material));break;case"Group":l=new Mo;break;case"Bone":l=new Ep;break;default:l=new Lt}if(l.uuid=e.uuid,e.name!==void 0&&(l.name=e.name),e.matrix!==void 0?(l.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=e.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(e.position!==void 0&&l.position.fromArray(e.position),e.rotation!==void 0&&l.rotation.fromArray(e.rotation),e.quaternion!==void 0&&l.quaternion.fromArray(e.quaternion),e.scale!==void 0&&l.scale.fromArray(e.scale)),e.up!==void 0&&l.up.fromArray(e.up),e.castShadow!==void 0&&(l.castShadow=e.castShadow),e.receiveShadow!==void 0&&(l.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(l.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(l.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(l.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(l.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(l.visible=e.visible),e.frustumCulled!==void 0&&(l.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(l.renderOrder=e.renderOrder),e.userData!==void 0&&(l.userData=e.userData),e.layers!==void 0&&(l.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)l.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];l.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(l.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],M=l.getObjectByProperty("uuid",y.object);M!==void 0&&l.addLevel(M,y.distance,y.hysteresis)}}return l}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Lt}})}}const w1={UVMapping:ju,CubeReflectionMapping:gr,CubeRefractionMapping:kr,EquirectangularReflectionMapping:Ra,EquirectangularRefractionMapping:Pa,CubeUVReflectionMapping:Do},w0={RepeatWrapping:Ia,ClampToEdgeWrapping:yi,MirroredRepeatWrapping:La},E0={NearestFilter:Mn,NearestMipmapNearestFilter:ap,NearestMipmapLinearFilter:xo,LinearFilter:on,LinearMipmapNearestFilter:xa,LinearMipmapLinearFilter:Wi};class E1 extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=fr.get(e);if(l!==void 0){if(s.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),fr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(e,u),s.manager.itemStart(e)}}let Bc;class Gp{static getContext(){return Bc===void 0&&(Bc=new(window.AudioContext||window.webkitAudioContext)),Bc}static setContext(e){Bc=e}}class T1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{const h=u.slice(0);Gp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const T0=new at,A0=new at,ls=new at;class A1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new pn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new pn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ls.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,l=t.near*Math.tan(Es*t.fov*.5)/t.zoom;let c,u;A0.elements[12]=-i,T0.elements[12]=i,c=-l*t.aspect+s,u=l*t.aspect+s,ls.elements[0]=2*t.near/(u-c),ls.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(ls),c=-l*t.aspect-s,u=l*t.aspect-s,ls.elements[0]=2*t.near/(u-c),ls.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(ls)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(A0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(T0)}}class yy extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=b0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=b0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function b0(){return performance.now()}const cs=new U,C0=new Kn,b1=new U,us=new U;class C1 extends Lt{constructor(){super(),this.type="AudioListener",this.context=Gp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(cs,C0,b1),us.set(0,0,-1).applyQuaternion(C0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(cs.x,i),t.positionY.linearRampToValueAtTime(cs.y,i),t.positionZ.linearRampToValueAtTime(cs.z,i),t.forwardX.linearRampToValueAtTime(us.x,i),t.forwardY.linearRampToValueAtTime(us.y,i),t.forwardZ.linearRampToValueAtTime(us.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(cs.x,cs.y,cs.z),t.setOrientation(us.x,us.y,us.z,n.x,n.y,n.z)}}class xy extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const hs=new U,R0=new Kn,R1=new U,fs=new U;class P1 extends xy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(hs,R0,R1),fs.set(0,0,1).applyQuaternion(R0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(hs.x,n),t.positionY.linearRampToValueAtTime(hs.y,n),t.positionZ.linearRampToValueAtTime(hs.z,n),t.orientationX.linearRampToValueAtTime(fs.x,n),t.orientationY.linearRampToValueAtTime(fs.y,n),t.orientationZ.linearRampToValueAtTime(fs.z,n)}else t.setPosition(hs.x,hs.y,hs.z),t.setOrientation(fs.x,fs.y,fs.z)}}class I1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Sy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,l;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[s+c]=n[c];l=t}else{l+=t;const c=t/l;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,l=i;s!==l;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let l=0;l!==s;++l)e[t+l]=e[n+l]}_slerp(e,t,n,i){Kn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const l=this._workIndex*s;Kn.multiplyQuaternionsFlat(e,l,e,t,e,n),Kn.slerpFlat(e,t,e,t,e,l,i)}_lerp(e,t,n,i,s){const l=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*l+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let l=0;l!==s;++l){const c=t+l;e[c]=e[c]+e[n+l]*i}}}const Xp="\\[\\]\\.:\\/",L1=new RegExp("["+Xp+"]","g"),qp="[^"+Xp+"]",D1="[^"+Xp.replace("\\.","")+"]",U1=/((?:WC+[\/:])*)/.source.replace("WC",qp),N1=/(WCOD+)?/.source.replace("WCOD",D1),F1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qp),O1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qp),B1=new RegExp("^"+U1+N1+F1+O1+"$"),z1=["material","materials","bones","map"];class k1{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L1,"")}static parseTrackName(e){const t=B1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);z1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let l=0;l<s.length;l++){const c=s[l];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[i];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=k1;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H1{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ai(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,l=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let M=0,x=l;M!==x;++M)s[M].push(new It(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[g]=M,e[M]=m;for(let _=0,E=l;_!==E;++_){const w=s[_],A=w[M];let L=w[y];w[y]=A,L===void 0&&(L=new It(m,n[_],i[_])),w[M]=L}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const u=arguments[l],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const M=n[g],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,l=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--l,M=e[y];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],A=E[y];E[p]=w,E[m]=A,E.pop()}}else{const m=--l,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const l=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,l.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new It(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,l=this._bindings,c=l.length-1,u=l[c],h=e[c];t[h]=n,l[n]=u,l.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class My{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,l=s.length,c=new Array(l),u={endingStart:_s,endingEnd:_s};for(let h=0;h!==l;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=d_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,l=s/i,c=i/s;e.warp(1,l,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const l=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case vp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulateAdditive(c);break;case nh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const l=n===p_;if(e===0)return s===-1?i:l&&(s&1)===1?t-i:i;if(n===f_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:_s:i.endingStart=Ua,t?i.endingEnd=this.zeroSlopeAtEnd?ys:_s:i.endingEnd=Ua)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,u=l.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const V1=new Float32Array(1);class G1 extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,l=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,l[p]=y;else{if(y=l[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new Sy(It.create(n,g,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),l[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let l=s[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=l;else{const c=l.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,l=this._actionsByClip,c=l[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete l[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let l=i[t];l===void 0&&(l={},i[t]=l),l[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,l=this._bindingsByRootAndName,c=l[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete l[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Bp(new Float32Array(2),new Float32Array(2),1,V1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let l=typeof e=="string"?Xa.findByName(i,e):e;const c=l!==null?l.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=nh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const f=new My(this,l,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xa.findByName(n,e):e,l=s?s.uuid:e,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,l);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const l=s.knownActions;for(let c=0,u=l.length;c!==u;++c){const h=l[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const l in s){const c=s[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class W1 extends ih{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new rh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class X1 extends ih{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTargetArray=!0,this.depth=n,this.texture=new ja(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Yp{constructor(e){this.value=e}clone(){return new Yp(this.value.clone===void 0?this.value:this.value.clone())}}let q1=0;class Y1 extends ji{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:q1++}),this.name="",this.usage=Fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let l=0;l<s.length;l++)this.uniforms.push(s[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class Wu extends ah{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Z1{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const P0=new at;class wy{constructor(e,t,n=0,i=1/0){this.ray=new No(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return P0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(P0),this}intersectObject(e,t=!0,n=[]){return ep(e,this,n,t),n.sort(I0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ep(e[i],this,n,t);return n.sort(I0),n}}function I0(r,e){return r.distance-e.distance}function ep(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let l=0,c=s.length;l<c;l++)ep(s[l],e,t,!0)}}class Ey{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class j1{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Zp{constructor(e,t,n,i){Zp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const L0=new he;class J1{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=L0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,L0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const D0=new U,zc=new U;class Ty{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){D0.subVectors(e,this.start),zc.subVectors(this.end,this.start);const n=zc.dot(zc);let s=zc.dot(D0)/n;return t&&(s=ht(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const U0=new U;class K1 extends Lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new _t,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,u=32;l<u;l++,c++){const h=l/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new We(i,3));const s=new Bn({fog:!1,toneMapped:!1});this.cone=new Ji(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),U0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(U0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fr=new U,kc=new at,md=new at;class Q1 extends Ji{constructor(e){const t=Ay(e),n=new _t,i=[],s=[],l=new Fe(0,0,1),c=new Fe(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(l.r,l.g,l.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new We(i,3)),n.setAttribute("color",new We(s,3));const u=new Bn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");md.copy(this.root.matrixWorld).invert();for(let s=0,l=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(kc.multiplyMatrices(md,c.matrixWorld),Fr.setFromMatrixPosition(kc),i.setXYZ(l,Fr.x,Fr.y,Fr.z),kc.multiplyMatrices(md,c.parent.matrixWorld),Fr.setFromMatrixPosition(kc),i.setXYZ(l+1,Fr.x,Fr.y,Fr.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ay(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ay(r.children[t]));return e}class $1 extends Qt{constructor(e,t,n){const i=new tl(t,4,2),s=new Gr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const ew=new U,N0=new Fe,F0=new Fe;class tw extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new el(t);i.rotateY(Math.PI*.5),this.material=new Gr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),l=new Float32Array(s.count*3);i.setAttribute("color",new kt(l,3)),this.add(new Qt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");N0.copy(this.light.color),F0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?N0:F0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(ew.setFromMatrixPosition(this.light.matrixWorld).negate())}}class nw extends Ji{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const s=t/2,l=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=l){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new _t;f.setAttribute("position",new We(u,3)),f.setAttribute("color",new We(h,3));const p=new Bn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iw extends Ji{constructor(e=10,t=16,n=8,i=64,s=4473924,l=8947848){s=new Fe(s),l=new Fe(l);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const M=p&1?s:l;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:l,g=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new _t;h.setAttribute("position",new We(c,3)),h.setAttribute("color",new We(u,3));const f=new Bn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const O0=new U,Hc=new U,B0=new U;class rw extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new _t;i.setAttribute("position",new We([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Bn({fog:!1,toneMapped:!1});this.lightPlane=new Hr(i,s),this.add(this.lightPlane),i=new _t,i.setAttribute("position",new We([0,0,0,0,0,1],3)),this.targetLine=new Hr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),O0.setFromMatrixPosition(this.light.matrixWorld),Hc.setFromMatrixPosition(this.light.target.matrixWorld),B0.subVectors(Hc,O0),this.lightPlane.lookAt(Hc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Hc),this.targetLine.scale.z=B0.length()}}const Vc=new U,Zt=new Ja;class sw extends Ji{constructor(e){const t=new _t,n=new Bn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(i.length/3-1)}t.setAttribute("position",new We(i,3)),t.setAttribute("color",new We(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const h=new Fe(16755200),f=new Fe(16711680),p=new Fe(43775),m=new Fe(16777215),g=new Fe(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const s=this.camera.coordinateSystem===Ci?-1:0;Kt("c",t,e,Zt,0,0,s),Kt("t",t,e,Zt,0,0,1),Kt("n1",t,e,Zt,-n,-i,s),Kt("n2",t,e,Zt,n,-i,s),Kt("n3",t,e,Zt,-n,i,s),Kt("n4",t,e,Zt,n,i,s),Kt("f1",t,e,Zt,-n,-i,1),Kt("f2",t,e,Zt,n,-i,1),Kt("f3",t,e,Zt,-n,i,1),Kt("f4",t,e,Zt,n,i,1),Kt("u1",t,e,Zt,n*.7,i*1.1,s),Kt("u2",t,e,Zt,-n*.7,i*1.1,s),Kt("u3",t,e,Zt,0,i*2,s),Kt("cf1",t,e,Zt,-n,0,1),Kt("cf2",t,e,Zt,n,0,1),Kt("cf3",t,e,Zt,0,-i,1),Kt("cf4",t,e,Zt,0,i,1),Kt("cn1",t,e,Zt,-n,0,s),Kt("cn2",t,e,Zt,n,0,s),Kt("cn3",t,e,Zt,0,-i,s),Kt("cn4",t,e,Zt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kt(r,e,t,n,i,s,l){Vc.set(i,s,l).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],Vc.x,Vc.y,Vc.z)}}const Gc=new mn;class ow extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new _t;s.setIndex(new kt(n,1)),s.setAttribute("position",new kt(i,3)),super(s,new Bn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Gc.setFromObject(this.object),Gc.isEmpty())return;const t=Gc.min,n=Gc.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aw extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new _t;s.setIndex(new kt(n,1)),s.setAttribute("position",new We(i,3)),super(s,new Bn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class lw extends Hr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new _t;l.setAttribute("position",new We(s,3)),l.computeBoundingSphere(),super(l,new Bn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new _t;u.setAttribute("position",new We(c,3)),u.computeBoundingSphere(),this.add(new Qt(u,new Gr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const z0=new U;let Wc,gd;class cw extends Lt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,l=s*.2){super(),this.type="ArrowHelper",Wc===void 0&&(Wc=new _t,Wc.setAttribute("position",new We([0,0,0,0,1,0],3)),gd=new Fo(0,.5,1,5,1),gd.translate(0,-.5,0)),this.position.copy(t),this.line=new Hr(Wc,new Bn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(gd,new Gr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{z0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(z0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class uw extends Ji{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _t;i.setAttribute("position",new We(t,3)),i.setAttribute("color",new We(n,3));const s=new Bn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Fe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hw{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,l){return this.currentPath.bezierCurveTo(e,t,n,i,s,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,A=_.length;w<A;w++){const L=_[w],P=new As;P.curves=L.curves,E.push(P)}return E}function n(_,E){const w=E.length;let A=!1;for(let L=w-1,P=0;P<w;L=P++){let D=E[L],O=E[P],C=O.x-D.x,b=O.y-D.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(D=E[P],C=-C,O=E[L],b=-b),_.y<D.y||_.y>O.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const N=b*(_.x-D.x)-C*(_.y-D.y);if(N===0)return!0;if(N<0)continue;A=!A}}else{if(_.y!==D.y)continue;if(O.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=O.x)return!0}}return A}const i=Yi.isClockWise,s=this.subPaths;if(s.length===0)return[];let l,c,u;const h=[];if(s.length===1)return c=s[0],u=new As,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,M;m[y]=void 0,g[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),l=i(M),l=e?!l:l,l?(!f&&m[y]&&y++,m[y]={s:new As,p:M},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,A=m.length;w<A;w++)p[w]=[];for(let w=0,A=m.length;w<A;w++){const L=g[w];for(let P=0;P<L.length;P++){const D=L[P];let O=!0;for(let C=0;C<m.length;C++)n(D.p,m[C].p)&&(w!==C&&E++,O?(O=!1,p[C].push(D)):_=!0);O&&p[w].push(D)}}E>0&&_===!1&&(g=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=g[_];for(let w=0,A=x.length;w<A;w++)u.holes.push(x[w].h)}return h}}class fw extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function dw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function pw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function mw(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function tp(r,e,t,n){const i=gw(n);switch(t){case hp:return r*e;case dp:return r*e;case pp:return r*e*2;case $u:return r*e/i.components*i.byteLength;case Za:return r*e/i.components*i.byteLength;case mp:return r*e*2/i.components*i.byteLength;case eh:return r*e*2/i.components*i.byteLength;case fp:return r*e*3/i.components*i.byteLength;case Pn:return r*e*4/i.components*i.byteLength;case th:return r*e*4/i.components*i.byteLength;case Sa:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(r,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(r,8)*Math.max(e,8)/2;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Au:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Du:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gp:case Nu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fu:case Ou:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gw(r){switch(r){case Ri:case lp:return{byteLength:1,components:1};case bo:case cp:case Uo:return{byteLength:2,components:1};case Ku:case Qu:return{byteLength:2,components:4};case vr:case Ju:case Jn:return{byteLength:4,components:1};case up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const vw={contain:dw,cover:pw,fill:mw,getByteLength:tp};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function by(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _w(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<p.length;g++){const y=p[m],M=p[g];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,y=p.length;g<y;g++){const M=p[g];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:l}}var yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xw=`#ifdef USE_ALPHAHASH
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
#endif`,Sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ww=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tw=`#ifdef USE_AOMAP
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
#endif`,Aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bw=`#ifdef USE_BATCHING
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
#endif`,Cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lw=`#ifdef USE_IRIDESCENCE
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
#endif`,Dw=`#ifdef USE_BUMPMAP
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
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vw=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Gw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ww=`vec3 transformedNormal = objectNormal;
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
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$w=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,hE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,vE=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,_E=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
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
}`,TT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AT=`#define DISTANCE
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
}`,bT=`#define DISTANCE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`uniform float scale;
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
}`,IT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#define LAMBERT
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
}`,NT=`#define LAMBERT
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
}`,FT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,BT=`#define NORMAL
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
}`,zT=`#define NORMAL
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
}`,kT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,WT=`#define TOON
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
}`,XT=`#define TOON
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
}`,qT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,KT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:yw,alphahash_pars_fragment:xw,alphamap_fragment:Sw,alphamap_pars_fragment:Mw,alphatest_fragment:ww,alphatest_pars_fragment:Ew,aomap_fragment:Tw,aomap_pars_fragment:Aw,batching_pars_vertex:bw,batching_vertex:Cw,begin_vertex:Rw,beginnormal_vertex:Pw,bsdfs:Iw,iridescence_fragment:Lw,bumpmap_pars_fragment:Dw,clipping_planes_fragment:Uw,clipping_planes_pars_fragment:Nw,clipping_planes_pars_vertex:Fw,clipping_planes_vertex:Ow,color_fragment:Bw,color_pars_fragment:zw,color_pars_vertex:kw,color_vertex:Hw,common:Vw,cube_uv_reflection_fragment:Gw,defaultnormal_vertex:Ww,displacementmap_pars_vertex:Xw,displacementmap_vertex:qw,emissivemap_fragment:Yw,emissivemap_pars_fragment:Zw,colorspace_fragment:jw,colorspace_pars_fragment:Jw,envmap_fragment:Kw,envmap_common_pars_fragment:Qw,envmap_pars_fragment:$w,envmap_pars_vertex:eE,envmap_physical_pars_fragment:hE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:rE,fog_pars_fragment:sE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:vE,lights_fragment_begin:_E,lights_fragment_maps:yE,lights_fragment_end:xE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:EE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:bE,map_particle_pars_fragment:CE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:PE,morphinstance_vertex:IE,morphcolor_vertex:LE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:NE,normal_fragment_begin:FE,normal_fragment_maps:OE,normal_pars_fragment:BE,normal_pars_vertex:zE,normal_vertex:kE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:XE,opaque_fragment:qE,packing:YE,premultiplied_alpha_fragment:ZE,project_vertex:jE,dithering_fragment:JE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:aT,specularmap_fragment:lT,specularmap_pars_fragment:cT,tonemapping_fragment:uT,tonemapping_pars_fragment:hT,transmission_fragment:fT,transmission_pars_fragment:dT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:gT,worldpos_vertex:vT,background_vert:_T,background_frag:yT,backgroundCube_vert:xT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:wT,depth_vert:ET,depth_frag:TT,distanceRGBA_vert:AT,distanceRGBA_frag:bT,equirect_vert:CT,equirect_frag:RT,linedashed_vert:PT,linedashed_frag:IT,meshbasic_vert:LT,meshbasic_frag:DT,meshlambert_vert:UT,meshlambert_frag:NT,meshmatcap_vert:FT,meshmatcap_frag:OT,meshnormal_vert:BT,meshnormal_frag:zT,meshphong_vert:kT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:GT,meshtoon_vert:WT,meshtoon_frag:XT,points_vert:qT,points_frag:YT,shadow_vert:ZT,shadow_frag:jT,sprite_vert:JT,sprite_frag:KT},Ee={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},bi={basic:{uniforms:Nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Nn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Nn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Nn([Ee.points,Ee.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Nn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Nn([Ee.common,Ee.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Nn([Ee.sprite,Ee.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Nn([Ee.common,Ee.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Nn([Ee.lights,Ee.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};bi.physical={uniforms:Nn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Xc={r:0,b:0,g:0},ds=new li,QT=new at;function $T(r,e,t,n,i,s,l){const c=new Fe(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?t:e).get(A)),A}function M(w){let A=!1;const L=y(w);L===null?_(c,u):L&&L.isColor&&(_(L,1),A=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(w,A){const L=y(A);L&&(L.isCubeTexture||L.mapping===Do)?(f===void 0&&(f=new Qt(new Ds(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ro(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),ds.copy(A.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(ds)),f.material.toneMapped=Pt.getTransfer(L.colorSpace)!==Bt,(p!==L||m!==L.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=L,m=L.version,g=r.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Qt(new Oo(2,2),new ci({name:"BackgroundMaterial",uniforms:Ro(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||m!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=L,m=L.version,g=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function _(w,A){w.getRGB(Xc,R_(r)),n.buffers.color.setClear(Xc.r,Xc.g,Xc.b,A,l)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(w,A=1){c.set(w),u=A,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(w){u=w,_(c,u)},render:M,addToRenderList:x,dispose:E}}function eA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,l=!1;function c(b,N,q,Y,K){let ae=!1;const $=p(Y,q,N);s!==$&&(s=$,h(s.object)),ae=g(b,Y,q,K),ae&&y(b,Y,q,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(ae||l)&&(l=!1,A(b,N,q,Y),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,N,q){const Y=q.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let ae=K[N.id];ae===void 0&&(ae={},K[N.id]=ae);let $=ae[Y];return $===void 0&&($=m(u()),ae[Y]=$),$}function m(b){const N=[],q=[],Y=[];for(let K=0;K<t;K++)N[K]=0,q[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:Y,object:b,attributes:{},index:null}}function g(b,N,q,Y){const K=s.attributes,ae=N.attributes;let $=0;const me=q.getAttributes();for(const k in me)if(me[k].location>=0){const te=K[k];let ce=ae[k];if(ce===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;$++}return s.attributesNum!==$||s.index!==Y}function y(b,N,q,Y){const K={},ae=N.attributes;let $=0;const me=q.getAttributes();for(const k in me)if(me[k].location>=0){let te=ae[k];te===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),K[k]=ce,$++}s.attributes=K,s.attributesNum=$,s.index=Y}function M(){const b=s.newAttributes;for(let N=0,q=b.length;N<q;N++)b[N]=0}function x(b){_(b,0)}function _(b,N){const q=s.newAttributes,Y=s.enabledAttributes,K=s.attributeDivisors;q[b]=1,Y[b]===0&&(r.enableVertexAttribArray(b),Y[b]=1),K[b]!==N&&(r.vertexAttribDivisor(b,N),K[b]=N)}function E(){const b=s.newAttributes,N=s.enabledAttributes;for(let q=0,Y=N.length;q<Y;q++)N[q]!==b[q]&&(r.disableVertexAttribArray(q),N[q]=0)}function w(b,N,q,Y,K,ae,$){$===!0?r.vertexAttribIPointer(b,N,q,K,ae):r.vertexAttribPointer(b,N,q,Y,K,ae)}function A(b,N,q,Y){M();const K=Y.attributes,ae=q.getAttributes(),$=N.defaultAttributeValues;for(const me in ae){const k=ae[me];if(k.location>=0){let ne=K[me];if(ne===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const te=ne.normalized,ce=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;const Ye=Ie.buffer,re=Ie.type,ve=Ie.bytesPerElement,Le=re===r.INT||re===r.UNSIGNED_INT||ne.gpuType===Ju;if(ne.isInterleavedBufferAttribute){const xe=ne.data,$e=xe.stride,st=ne.offset;if(xe.isInstancedInterleavedBuffer){for(let tt=0;tt<k.locationSize;tt++)_(k.location+tt,xe.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let tt=0;tt<k.locationSize;tt++)x(k.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let tt=0;tt<k.locationSize;tt++)w(k.location+tt,ce/k.locationSize,re,te,$e*ve,(st+ce/k.locationSize*tt)*ve,Le)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)_(k.location+xe,ne.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<k.locationSize;xe++)x(k.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let xe=0;xe<k.locationSize;xe++)w(k.location+xe,ce/k.locationSize,re,te,ce*ve,ce/k.locationSize*xe*ve,Le)}}else if($!==void 0){const te=$[me];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(k.location,te);break;case 3:r.vertexAttrib3fv(k.location,te);break;case 4:r.vertexAttrib4fv(k.location,te);break;default:r.vertexAttrib1fv(k.location,te)}}}}E()}function L(){O();for(const b in n){const N=n[b];for(const q in N){const Y=N[q];for(const K in Y)f(Y[K].object),delete Y[K];delete N[q]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const q in N){const Y=N[q];for(const K in Y)f(Y[K].object),delete Y[K];delete N[q]}delete n[b.id]}function D(b){for(const N in n){const q=n[N];if(q[b.id]===void 0)continue;const Y=q[b.id];for(const K in Y)f(Y[K].object),delete Y[K];delete q[b.id]}}function O(){C(),l=!0,s!==i&&(s=i,h(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function tA(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function l(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)l(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M]*m[M];t.update(y,n,1)}}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function nA(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(D){return!(D!==Pn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ri&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Jn&&!O)}function u(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:L,maxSamples:P}}function iA(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new Br,c=new mt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let A=_.clippingState||null;u.value=A,A=f(y,m,w,g);for(let L=0;L!==w;++L)A[L]=t[L];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=g+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,A=g;w!==M;++w,A+=4)l.copy(p[w]).applyMatrix4(E,c),l.normal.toArray(x,A),x[A+3]=l.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function rA(r){let e=new WeakMap;function t(l,c){return c===Ra?l.mapping=gr:c===Pa&&(l.mapping=kr),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ra||c===Pa)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new I_(u.height);return h.fromEquirectangularTexture(r,l),e.set(l,h),l.addEventListener("dispose",i),t(h.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Eo=4,k0=[.125,.215,.35,.446,.526,.582],vs=20,vd=new rl,H0=new Fe;let _d=null,yd=0,xd=0,Sd=!1;const gs=(1+Math.sqrt(5))/2,po=1/gs,V0=[new U(-gs,po,0),new U(gs,po,0),new U(-po,0,gs),new U(po,0,gs),new U(0,gs,-po),new U(0,gs,po),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,xd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Uo,format:Pn,colorSpace:Is,depthBuffer:!1},i=G0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sA(s)),this._blurMaterial=oA(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,vd)}_sceneToCubeUV(e,t,n,i){const c=new pn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(H0),f.toneMapping=Xi,f.autoClear=!1;const g=new Gr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),y=new Qt(new Ds,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy(H0),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;qc(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W0());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new Qt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;qc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,vd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=V0[(i-s-1)%V0.length];this._blur(e,s-1,s,l,c)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Qt(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*vs-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):vs;x>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vs}`);const _=[];let E=0;for(let D=0;D<vs;++D){const O=D/M,C=Math.exp(-O*O/2);_.push(C),D===0?E+=C:D<x&&(E+=2*C)}for(let D=0;D<_.length;D++)_[D]=_[D]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const A=this._sizeLods[i],L=3*A*(i>w-Eo?i-w+Eo:0),P=4*(this._cubeSize-A);qc(t,L,P,3*A,2*A),u.setRenderTarget(t),u.render(p,vd)}}function sA(r){const e=[],t=[],n=[];let i=r;const s=r-Eo+1+k0.length;for(let l=0;l<s;l++){const c=Math.pow(2,i);t.push(c);let u=1/c;l>r-Eo?u=k0[l-r+Eo-1]:l===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*g),w=new Float32Array(x*y*g),A=new Float32Array(_*y*g);for(let P=0;P<g;P++){const D=P%3*2/3-1,O=P>2?0:-1,C=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];E.set(C,M*y*P),w.set(m,x*y*P);const b=[P,P,P,P,P,P];A.set(b,_*y*P)}const L=new _t;L.setAttribute("position",new kt(E,M)),L.setAttribute("uv",new kt(w,x)),L.setAttribute("faceIndex",new kt(A,_)),e.push(L),i>Eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function G0(r,e,t){const n=new Zi(r,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function oA(r,e,t){const n=new Float32Array(vs),i=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jp(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function W0(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jp(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function X0(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function jp(){return`

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
	`}function aA(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ra||u===Pa,f=u===gr||u===kr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new np(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new np(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function lA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cA(r,e,t,n){const i={},s=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",l),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",l),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const g in m)e.update(m[g],r.ARRAY_BUFFER)}function h(p){const m=[],g=p.index,y=p.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let w=0,A=E.length;w<A;w+=3){const L=E[w+0],P=E[w+1],D=E[w+2];m.push(L,P,P,D,D,L)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,A=E.length/3-1;w<A;w+=3){const L=w+0,P=w+1,D=w+2;m.push(L,P,P,D,D,L)}}else return;const x=new(T_(m)?Sp:xp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function uA(r,e,t){let n;function i(m){n=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*l),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*l,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}function p(m,g,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/l,g[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E]*M[E];t.update(_,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function hA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fA(r,e,t){const n=new WeakMap,i=new wt;function s(l,c,u){const h=l.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let C=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",C)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let A=c.attributes.position.count*w,L=1;A>e.maxTextureSize&&(L=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*L*4*p),D=new ja(P,A,L,p);D.type=Jn,D.needsUpdate=!0;const O=w*4;for(let b=0;b<p;b++){const N=x[b],q=_[b],Y=E[b],K=A*L*4*b;for(let ae=0;ae<N.count;ae++){const $=ae*O;g===!0&&(i.fromBufferAttribute(N,ae),P[K+$+0]=i.x,P[K+$+1]=i.y,P[K+$+2]=i.z,P[K+$+3]=0),y===!0&&(i.fromBufferAttribute(q,ae),P[K+$+4]=i.x,P[K+$+5]=i.y,P[K+$+6]=i.z,P[K+$+7]=0),M===!0&&(i.fromBufferAttribute(Y,ae),P[K+$+8]=i.x,P[K+$+9]=i.y,P[K+$+10]=i.z,P[K+$+11]=Y.itemSize===4?i.w:1)}}m={count:p,texture:D,size:new he(A,L)},n.set(c,m),c.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function dA(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function l(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:l}}const Cy=new jt,q0=new Ap(1,1),Ry=new ja,Py=new rh,Iy=new Ka,Y0=[],Z0=[],j0=new Float32Array(16),J0=new Float32Array(9),K0=new Float32Array(4);function Bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Y0[i];if(s===void 0&&(s=new Float32Array(i),Y0[i]=s),e!==0){n.toArray(s,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(s,c)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Th(r,e){let t=Z0[e];t===void 0&&(t=new Int32Array(e),Z0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function gA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function vA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function _A(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;K0.set(n),r.uniformMatrix2fv(this.addr,!1,K0),ln(t,n)}}function yA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;J0.set(n),r.uniformMatrix3fv(this.addr,!1,J0),ln(t,n)}}function xA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;j0.set(n),r.uniformMatrix4fv(this.addr,!1,j0),ln(t,n)}}function SA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function MA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function wA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function EA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function TA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function bA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function CA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function RA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(q0.compareFunction=_p,s=q0):s=Cy,t.setTexture2D(e||s,i)}function PA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Py,i)}function IA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Iy,i)}function LA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ry,i)}function DA(r){switch(r){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return yA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return wA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return bA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return LA}}function UA(r,e){r.uniform1fv(this.addr,e)}function NA(r,e){const t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function FA(r,e){const t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function OA(r,e){const t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function BA(r,e){const t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zA(r,e){const t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kA(r,e){const t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function HA(r,e){r.uniform1iv(this.addr,e)}function VA(r,e){r.uniform2iv(this.addr,e)}function GA(r,e){r.uniform3iv(this.addr,e)}function WA(r,e){r.uniform4iv(this.addr,e)}function XA(r,e){r.uniform1uiv(this.addr,e)}function qA(r,e){r.uniform2uiv(this.addr,e)}function YA(r,e){r.uniform3uiv(this.addr,e)}function ZA(r,e){r.uniform4uiv(this.addr,e)}function jA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||Cy,s[l])}function JA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||Py,s[l])}function KA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||Iy,s[l])}function QA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||Ry,s[l])}function $A(r){switch(r){case 5126:return UA;case 35664:return NA;case 35665:return FA;case 35666:return OA;case 35674:return BA;case 35675:return zA;case 35676:return kA;case 5124:case 35670:return HA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}class eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DA(t.type)}}class tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$A(t.type)}}class nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function Q0(r,e){r.seq.push(e),r.map[e.id]=e}function ib(r,e,t){const n=r.name,i=n.length;for(Md.lastIndex=0;;){const s=Md.exec(n),l=Md.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===i){Q0(t,h===void 0?new eb(c,r,e):new tb(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new nb(c),Q0(t,p)),t=p}}}class eu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);ib(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function $0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rb=37297;let sb=0;function ob(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const ev=new mt;function ab(r){Pt._getMatrix(ev,Pt.workingColorSpace,r);const e=`mat3( ${ev.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Na:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function tv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ob(r.getShaderSource(e),l)}else return i}function lb(r,e){const t=ab(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cb(r,e){let t;switch(e){case s_:t="Linear";break;case o_:t="Reinhard";break;case a_:t="Cineon";break;case op:t="ACESFilmic";break;case c_:t="AgX";break;case u_:t="Neutral";break;case l_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yc=new U;function ub(){Pt.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),e=Yc.y.toFixed(4),t=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function fb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function db(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function _a(r){return r!==""}function nv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(pb,gb)}const mb=new Map;function gb(r,e){let t=vt[e];if(t===void 0){const n=mb.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ip(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(r){return r.replace(vb,_b)}function _b(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function yb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ya?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function xb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case kr:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function wb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eb(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=yb(t),h=xb(t),f=Sb(t),p=Mb(t),m=wb(t),g=hb(t),y=fb(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(_a).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(_a).join(`
`),_.length>0&&(_+=`
`)):(x=[sv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),_=[sv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,lb("linearToOutputTexel",t.outputColorSpace),ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),l=ip(l),l=nv(l,t),l=iv(l,t),c=ip(c),c=nv(c,t),c=iv(c,t),l=rv(l),c=rv(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+l,A=E+_+c,L=$0(i,i.VERTEX_SHADER,w),P=$0(i,i.FRAGMENT_SHADER,A);i.attachShader(M,L),i.attachShader(M,P),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function D(N){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(M).trim(),Y=i.getShaderInfoLog(L).trim(),K=i.getShaderInfoLog(P).trim();let ae=!0,$=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,L,P);else{const me=tv(i,L,"vertex"),k=tv(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+me+`
`+k)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||K==="")&&($=!1);$&&(N.diagnostics={runnable:ae,programLog:q,vertexShader:{log:Y,prefix:x},fragmentShader:{log:K,prefix:_}})}i.deleteShader(L),i.deleteShader(P),O=new eu(i,M),C=db(i,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,rb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let Tb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bb(e),t.set(e,n)),n}}class bb{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function Cb(r,e,t,n,i,s,l){const c=new Ts,u=new Ab,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,b,N,q,Y){const K=q.fog,ae=Y.geometry,$=C.isMeshStandardMaterial?q.environment:null,me=(C.isMeshStandardMaterial?t:e).get(C.envMap||$),k=me&&me.mapping===Do?me.image.height:null,ne=y[C.type];C.precision!==null&&(g=i.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ce=te!==void 0?te.length:0;let Ie=0;ae.morphAttributes.position!==void 0&&(Ie=1),ae.morphAttributes.normal!==void 0&&(Ie=2),ae.morphAttributes.color!==void 0&&(Ie=3);let Ye,re,ve,Le;if(ne){const Dt=bi[ne];Ye=Dt.vertexShader,re=Dt.fragmentShader}else Ye=C.vertexShader,re=C.fragmentShader,u.update(C),ve=u.getVertexShaderID(C),Le=u.getFragmentShaderID(C);const xe=r.getRenderTarget(),$e=r.state.buffers.depth.getReversed(),st=Y.isInstancedMesh===!0,tt=Y.isBatchedMesh===!0,ct=!!C.map,ue=!!C.matcap,pe=!!me,B=!!C.aoMap,je=!!C.lightMap,_e=!!C.bumpMap,Be=!!C.normalMap,Me=!!C.displacementMap,ot=!!C.emissiveMap,Te=!!C.metalnessMap,F=!!C.roughnessMap,R=C.anisotropy>0,Z=C.clearcoat>0,oe=C.dispersion>0,de=C.iridescence>0,le=C.sheen>0,Xe=C.transmission>0,Ce=R&&!!C.anisotropyMap,Oe=Z&&!!C.clearcoatMap,Et=Z&&!!C.clearcoatNormalMap,ye=Z&&!!C.clearcoatRoughnessMap,He=de&&!!C.iridescenceMap,rt=de&&!!C.iridescenceThicknessMap,lt=le&&!!C.sheenColorMap,Ve=le&&!!C.sheenRoughnessMap,bt=!!C.specularMap,ft=!!C.specularColorMap,zt=!!C.specularIntensityMap,V=Xe&&!!C.transmissionMap,Re=Xe&&!!C.thicknessMap,se=!!C.gradientMap,fe=!!C.alphaMap,Ne=C.alphaTest>0,De=!!C.alphaHash,ut=!!C.extensions;let Gt=Xi;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const nn={shaderID:ne,shaderType:C.type,shaderName:C.name,vertexShader:Ye,fragmentShader:re,defines:C.defines,customVertexShaderID:ve,customFragmentShaderID:Le,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:tt,batchingColor:tt&&Y._colorsTexture!==null,instancing:st,instancingColor:st&&Y.instanceColor!==null,instancingMorph:st&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Is,alphaToCoverage:!!C.alphaToCoverage,map:ct,matcap:ue,envMap:pe,envMapMode:pe&&me.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:je,bumpMap:_e,normalMap:Be,displacementMap:m&&Me,emissiveMap:ot,normalMapObjectSpace:Be&&C.normalMapType===v_,normalMapTangentSpace:Be&&C.normalMapType===Vr,metalnessMap:Te,roughnessMap:F,anisotropy:R,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:Et,clearcoatRoughnessMap:ye,dispersion:oe,iridescence:de,iridescenceMap:He,iridescenceThicknessMap:rt,sheen:le,sheenColorMap:lt,sheenRoughnessMap:Ve,specularMap:bt,specularColorMap:ft,specularIntensityMap:zt,transmission:Xe,transmissionMap:V,thicknessMap:Re,gradientMap:se,opaque:C.transparent===!1&&C.blending===Ms&&C.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ne,alphaHash:De,combine:C.combine,mapUv:ct&&M(C.map.channel),aoMapUv:B&&M(C.aoMap.channel),lightMapUv:je&&M(C.lightMap.channel),bumpMapUv:_e&&M(C.bumpMap.channel),normalMapUv:Be&&M(C.normalMap.channel),displacementMapUv:Me&&M(C.displacementMap.channel),emissiveMapUv:ot&&M(C.emissiveMap.channel),metalnessMapUv:Te&&M(C.metalnessMap.channel),roughnessMapUv:F&&M(C.roughnessMap.channel),anisotropyMapUv:Ce&&M(C.anisotropyMap.channel),clearcoatMapUv:Oe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:Et&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&M(C.sheenRoughnessMap.channel),specularMapUv:bt&&M(C.specularMap.channel),specularColorMapUv:ft&&M(C.specularColorMap.channel),specularIntensityMapUv:zt&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:Re&&M(C.thicknessMap.channel),alphaMapUv:fe&&M(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Be||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(ct||fe),fog:!!K,useFog:C.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:$e,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:ct&&C.map.isVideoTexture===!0&&Pt.getTransfer(C.map.colorSpace)===Bt,decodeVideoTextureEmissive:ot&&C.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(C.emissiveMap.colorSpace)===Bt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ut&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&C.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nn.vertexUv1s=h.has(1),nn.vertexUv2s=h.has(2),nn.vertexUv3s=h.has(3),h.clear(),nn}function _(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)b.push(N),b.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(E(b,C),w(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function E(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function w(C,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reverseDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),C.push(c.mask)}function A(C){const b=y[C.type];let N;if(b){const q=bi[b];N=ku.clone(q.uniforms)}else N=C.uniforms;return N}function L(C,b){let N;for(let q=0,Y=f.length;q<Y;q++){const K=f[q];if(K.cacheKey===b){N=K,++N.usedTimes;break}}return N===void 0&&(N=new Eb(r,b,C,s),f.push(N)),N}function P(C){if(--C.usedTimes===0){const b=f.indexOf(C);f[b]=f[f.length-1],f.pop(),C.destroy()}}function D(C){u.remove(C)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:f,dispose:O}}function Rb(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function i(l,c,u){r.get(l)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Pb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ov(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function av(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(p,m,g,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,g,y,M,x){const _=l(p,m,g,y,M,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,M,x){const _=l(p,m,g,y,M,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||Pb),n.length>1&&n.sort(m||ov),i.length>1&&i.sort(m||ov)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function Ib(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new av,r.set(n,[l])):i>=s.length?(l=new av,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function Lb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Db(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ub=0;function Nb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fb(r){const e=new Lb,t=Db(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const i=new U,s=new at,l=new at;function c(h){let f=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let g=0,y=0,M=0,x=0,_=0,E=0,w=0,A=0,L=0,P=0,D=0;h.sort(Nb);for(let C=0,b=h.length;C<b;C++){const N=h[C],q=N.color,Y=N.intensity,K=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=q.r*Y,p+=q.g*Y,m+=q.b*Y;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Y);D++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const me=N.shadow,k=t.get(N);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=N.shadow.matrix,E++}n.directional[g]=$,g++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(q).multiplyScalar(Y),$.distance=K,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[M]=$;const me=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,me.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[M]=me.matrix,N.castShadow){const k=t.get(N);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=ae,A++}M++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(q).multiplyScalar(Y),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=$,x++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const me=N.shadow,k=t.get(N);k.shadowIntensity=me.intensity,k.shadowBias=me.bias,k.shadowNormalBias=me.normalBias,k.shadowRadius=me.radius,k.shadowMapSize=me.mapSize,k.shadowCameraNear=me.camera.near,k.shadowCameraFar=me.camera.far,n.pointShadow[y]=k,n.pointShadowMap[y]=ae,n.pointShadowMatrix[y]=N.shadow.matrix,w++}n.point[y]=$,y++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(Y),$.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[_]=$,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==g||O.pointLength!==y||O.spotLength!==M||O.rectAreaLength!==x||O.hemiLength!==_||O.numDirectionalShadows!==E||O.numPointShadows!==w||O.numSpotShadows!==A||O.numSpotMaps!==L||O.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=A+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,O.directionalLength=g,O.pointLength=y,O.spotLength=M,O.rectAreaLength=x,O.hemiLength=_,O.numDirectionalShadows=E,O.numPointShadows=w,O.numSpotShadows=A,O.numSpotMaps=L,O.numLightProbes=D,n.version=Ub++)}function u(h,f){let p=0,m=0,g=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),p++}else if(w.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const A=n.rectArea[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),l.identity(),s.copy(w.matrixWorld),s.premultiply(x),l.extractRotation(s),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function lv(r){const e=new Fb(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function l(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:l}}function Ob(r){let e=new WeakMap;function t(i,s=0){const l=e.get(i);let c;return l===void 0?(c=new lv(r),e.set(i,[c])):s>=l.length?(c=new lv(r),l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
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
}`;function kb(r,e,t){let n=new Qa;const i=new he,s=new he,l=new wt,c=new Np({depthPacking:g_}),u=new Fp,h={},f=t.maxTextureSize,p={[mr]:On,[On]:mr,[Vi]:Vi},m=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Bb,fragmentShader:zb}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new _t;y.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qt(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let _=this.type;this.render=function(P,D,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),q=r.state;q.setBlending(dr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=_!==Ai&&this.type===Ai,K=_===Ai&&this.type!==Ai;for(let ae=0,$=P.length;ae<$;ae++){const me=P[ae],k=me.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ne=k.getFrameExtents();if(i.multiply(ne),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ne.x),i.x=s.x*ne.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ne.y),i.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||Y===!0||K===!0){const ce=this.type!==Ai?{minFilter:Mn,magFilter:Mn}:{};k.map!==null&&k.map.dispose(),k.map=new Zi(i.x,i.y,ce),k.map.texture.name=me.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const te=k.getViewportCount();for(let ce=0;ce<te;ce++){const Ie=k.getViewport(ce);l.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),q.viewport(l),k.updateMatrices(me,ce),n=k.getFrustum(),A(D,O,k.camera,me,this.type)}k.isPointLightShadow!==!0&&this.type===Ai&&E(k,O),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(C,b,N)};function E(P,D){const O=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zi(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(D,null,O,m,M,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(D,null,O,g,M,null)}function w(P,D,O,C){let b=null;const N=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)b=N;else if(b=O.isPointLight===!0?u:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const q=b.uuid,Y=D.uuid;let K=h[q];K===void 0&&(K={},h[q]=K);let ae=K[Y];ae===void 0&&(ae=b.clone(),K[Y]=ae,D.addEventListener("dispose",L)),b=ae}if(b.visible=D.visible,b.wireframe=D.wireframe,C===Ai?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:p[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=r.properties.get(b);q.light=O}return b}function A(P,D,O,C,b){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),K=P.material;if(Array.isArray(K)){const ae=Y.groups;for(let $=0,me=ae.length;$<me;$++){const k=ae[$],ne=K[k.materialIndex];if(ne&&ne.visible){const te=w(P,ne,C,b);P.onBeforeShadow(r,P,D,O,Y,te,k),r.renderBufferDirect(O,null,Y,te,P,k),P.onAfterShadow(r,P,D,O,Y,te,k)}}}else if(K.visible){const ae=w(P,K,C,b);P.onBeforeShadow(r,P,D,O,Y,ae,null),r.renderBufferDirect(O,null,Y,ae,P,null),P.onAfterShadow(r,P,D,O,Y,ae,null)}}const q=P.children;for(let Y=0,K=q.length;Y<K;Y++)A(q[Y],D,O,C,b)}function L(P){P.target.removeEventListener("dispose",L);for(const O in h){const C=h[O],b=P.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Hb={[su]:ou,[au]:uu,[lu]:hu,[Cs]:cu,[ou]:su,[uu]:au,[hu]:lu,[cu]:Cs};function Vb(r,e){function t(){let V=!1;const Re=new wt;let se=null;const fe=new wt(0,0,0,0);return{setMask:function(Ne){se!==Ne&&!V&&(r.colorMask(Ne,Ne,Ne,Ne),se=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,De,ut,Gt,nn){nn===!0&&(Ne*=Gt,De*=Gt,ut*=Gt),Re.set(Ne,De,ut,Gt),fe.equals(Re)===!1&&(r.clearColor(Ne,De,ut,Gt),fe.copy(Re))},reset:function(){V=!1,se=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,Re=!1,se=null,fe=null,Ne=null;return{setReversed:function(De){if(Re!==De){const ut=e.get("EXT_clip_control");Re?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Gt=Ne;Ne=null,this.setClear(Gt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?xe(r.DEPTH_TEST):$e(r.DEPTH_TEST)},setMask:function(De){se!==De&&!V&&(r.depthMask(De),se=De)},setFunc:function(De){if(Re&&(De=Hb[De]),fe!==De){switch(De){case su:r.depthFunc(r.NEVER);break;case ou:r.depthFunc(r.ALWAYS);break;case au:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case lu:r.depthFunc(r.EQUAL);break;case cu:r.depthFunc(r.GEQUAL);break;case uu:r.depthFunc(r.GREATER);break;case hu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=De}},setLocked:function(De){V=De},setClear:function(De){Ne!==De&&(Re&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){V=!1,se=null,fe=null,Ne=null,Re=!1}}}function i(){let V=!1,Re=null,se=null,fe=null,Ne=null,De=null,ut=null,Gt=null,nn=null;return{setTest:function(Dt){V||(Dt?xe(r.STENCIL_TEST):$e(r.STENCIL_TEST))},setMask:function(Dt){Re!==Dt&&!V&&(r.stencilMask(Dt),Re=Dt)},setFunc:function(Dt,zn,xi){(se!==Dt||fe!==zn||Ne!==xi)&&(r.stencilFunc(Dt,zn,xi),se=Dt,fe=zn,Ne=xi)},setOp:function(Dt,zn,xi){(De!==Dt||ut!==zn||Gt!==xi)&&(r.stencilOp(Dt,zn,xi),De=Dt,ut=zn,Gt=xi)},setLocked:function(Dt){V=Dt},setClear:function(Dt){nn!==Dt&&(r.clearStencil(Dt),nn=Dt)},reset:function(){V=!1,Re=null,se=null,fe=null,Ne=null,De=null,ut=null,Gt=null,nn=null}}}const s=new t,l=new n,c=new i,u=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,g=[],y=null,M=!1,x=null,_=null,E=null,w=null,A=null,L=null,P=null,D=new Fe(0,0,0),O=0,C=!1,b=null,N=null,q=null,Y=null,K=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,me=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(k)[1]),$=me>=1):k.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),$=me>=2);let ne=null,te={};const ce=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Ye=new wt().fromArray(ce),re=new wt().fromArray(Ie);function ve(V,Re,se,fe){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture(V,De),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<se;ut++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Re+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const Le={};Le[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Le[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Le[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(r.DEPTH_TEST),l.setFunc(Cs),_e(!1),Be(Gd),xe(r.CULL_FACE),B(dr);function xe(V){f[V]!==!0&&(r.enable(V),f[V]=!0)}function $e(V){f[V]!==!1&&(r.disable(V),f[V]=!1)}function st(V,Re){return p[V]!==Re?(r.bindFramebuffer(V,Re),p[V]=Re,V===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=Re),V===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function tt(V,Re){let se=g,fe=!1;if(V){se=m.get(Re),se===void 0&&(se=[],m.set(Re,se));const Ne=V.textures;if(se.length!==Ne.length||se[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ut=Ne.length;De<ut;De++)se[De]=r.COLOR_ATTACHMENT0+De;se.length=Ne.length,fe=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,fe=!0);fe&&r.drawBuffers(se)}function ct(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const ue={[zr]:r.FUNC_ADD,[kv]:r.FUNC_SUBTRACT,[Hv]:r.FUNC_REVERSE_SUBTRACT};ue[Vv]=r.MIN,ue[Gv]=r.MAX;const pe={[Wv]:r.ZERO,[Xv]:r.ONE,[qv]:r.SRC_COLOR,[iu]:r.SRC_ALPHA,[Qv]:r.SRC_ALPHA_SATURATE,[Jv]:r.DST_COLOR,[Zv]:r.DST_ALPHA,[Yv]:r.ONE_MINUS_SRC_COLOR,[ru]:r.ONE_MINUS_SRC_ALPHA,[Kv]:r.ONE_MINUS_DST_COLOR,[jv]:r.ONE_MINUS_DST_ALPHA,[$v]:r.CONSTANT_COLOR,[e_]:r.ONE_MINUS_CONSTANT_COLOR,[t_]:r.CONSTANT_ALPHA,[n_]:r.ONE_MINUS_CONSTANT_ALPHA};function B(V,Re,se,fe,Ne,De,ut,Gt,nn,Dt){if(V===dr){M===!0&&($e(r.BLEND),M=!1);return}if(M===!1&&(xe(r.BLEND),M=!0),V!==zv){if(V!==x||Dt!==C){if((_!==zr||A!==zr)&&(r.blendEquation(r.FUNC_ADD),_=zr,A=zr),Dt)switch(V){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.ONE,r.ONE);break;case Wd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,w=null,L=null,P=null,D.set(0,0,0),O=0,x=V,C=Dt}return}Ne=Ne||Re,De=De||se,ut=ut||fe,(Re!==_||Ne!==A)&&(r.blendEquationSeparate(ue[Re],ue[Ne]),_=Re,A=Ne),(se!==E||fe!==w||De!==L||ut!==P)&&(r.blendFuncSeparate(pe[se],pe[fe],pe[De],pe[ut]),E=se,w=fe,L=De,P=ut),(Gt.equals(D)===!1||nn!==O)&&(r.blendColor(Gt.r,Gt.g,Gt.b,nn),D.copy(Gt),O=nn),x=V,C=!1}function je(V,Re){V.side===Vi?$e(r.CULL_FACE):xe(r.CULL_FACE);let se=V.side===On;Re&&(se=!se),_e(se),V.blending===Ms&&V.transparent===!1?B(dr):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),s.setMask(V.colorWrite);const fe=V.stencilWrite;c.setTest(fe),fe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):$e(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(V){b!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),b=V)}function Be(V){V!==Fv?(xe(r.CULL_FACE),V!==N&&(V===Gd?r.cullFace(r.BACK):V===Ov?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$e(r.CULL_FACE),N=V}function Me(V){V!==q&&($&&r.lineWidth(V),q=V)}function ot(V,Re,se){V?(xe(r.POLYGON_OFFSET_FILL),(Y!==Re||K!==se)&&(r.polygonOffset(Re,se),Y=Re,K=se)):$e(r.POLYGON_OFFSET_FILL)}function Te(V){V?xe(r.SCISSOR_TEST):$e(r.SCISSOR_TEST)}function F(V){V===void 0&&(V=r.TEXTURE0+ae-1),ne!==V&&(r.activeTexture(V),ne=V)}function R(V,Re,se){se===void 0&&(ne===null?se=r.TEXTURE0+ae-1:se=ne);let fe=te[se];fe===void 0&&(fe={type:void 0,texture:void 0},te[se]=fe),(fe.type!==V||fe.texture!==Re)&&(ne!==se&&(r.activeTexture(se),ne=se),r.bindTexture(V,Re||Le[V]),fe.type=V,fe.texture=Re)}function Z(){const V=te[ne];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(V){Ye.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ye.copy(V))}function Ve(V){re.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),re.copy(V))}function bt(V,Re){let se=h.get(Re);se===void 0&&(se=new WeakMap,h.set(Re,se));let fe=se.get(V);fe===void 0&&(fe=r.getUniformBlockIndex(Re,V.name),se.set(V,fe))}function ft(V,Re){const fe=h.get(Re).get(V);u.get(Re)!==fe&&(r.uniformBlockBinding(Re,fe,V.__bindingPointIndex),u.set(Re,fe))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ne=null,te={},p={},m=new WeakMap,g=[],y=null,M=!1,x=null,_=null,E=null,w=null,A=null,L=null,P=null,D=new Fe(0,0,0),O=0,C=!1,b=null,N=null,q=null,Y=null,K=null,Ye.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:xe,disable:$e,bindFramebuffer:st,drawBuffers:tt,useProgram:ct,setBlending:B,setMaterial:je,setFlipSided:_e,setCullFace:Be,setLineWidth:Me,setPolygonOffset:ot,setScissorTest:Te,activeTexture:F,bindTexture:R,unbindTexture:Z,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:He,texImage3D:rt,updateUBOMapping:bt,uniformBlockBinding:ft,texStorage2D:Et,texStorage3D:ye,texSubImage2D:le,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:lt,viewport:Ve,reset:zt}}function Gb(r,e,t,n,i,s,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new he,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,R){return g?new OffscreenCanvas(F,R):Ba("canvas")}function M(F,R,Z){let oe=1;const de=Te(F);if((de.width>Z||de.height>Z)&&(oe=Z/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const le=Math.floor(oe*de.width),Xe=Math.floor(oe*de.height);p===void 0&&(p=y(le,Xe));const Ce=R?y(le,Xe):p;return Ce.width=le,Ce.height=Xe,Ce.getContext("2d").drawImage(F,0,0,le,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+le+"x"+Xe+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),F;return F}function x(F){return F.generateMipmaps}function _(F){r.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,R,Z,oe,de=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let le=R;if(R===r.RED&&(Z===r.FLOAT&&(le=r.R32F),Z===r.HALF_FLOAT&&(le=r.R16F),Z===r.UNSIGNED_BYTE&&(le=r.R8)),R===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(le=r.R8UI),Z===r.UNSIGNED_SHORT&&(le=r.R16UI),Z===r.UNSIGNED_INT&&(le=r.R32UI),Z===r.BYTE&&(le=r.R8I),Z===r.SHORT&&(le=r.R16I),Z===r.INT&&(le=r.R32I)),R===r.RG&&(Z===r.FLOAT&&(le=r.RG32F),Z===r.HALF_FLOAT&&(le=r.RG16F),Z===r.UNSIGNED_BYTE&&(le=r.RG8)),R===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(le=r.RG8UI),Z===r.UNSIGNED_SHORT&&(le=r.RG16UI),Z===r.UNSIGNED_INT&&(le=r.RG32UI),Z===r.BYTE&&(le=r.RG8I),Z===r.SHORT&&(le=r.RG16I),Z===r.INT&&(le=r.RG32I)),R===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(le=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(le=r.RGB16UI),Z===r.UNSIGNED_INT&&(le=r.RGB32UI),Z===r.BYTE&&(le=r.RGB8I),Z===r.SHORT&&(le=r.RGB16I),Z===r.INT&&(le=r.RGB32I)),R===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),Z===r.UNSIGNED_INT&&(le=r.RGBA32UI),Z===r.BYTE&&(le=r.RGBA8I),Z===r.SHORT&&(le=r.RGBA16I),Z===r.INT&&(le=r.RGBA32I)),R===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),R===r.RGBA){const Xe=de?Na:Pt.getTransfer(oe);Z===r.FLOAT&&(le=r.RGBA32F),Z===r.HALF_FLOAT&&(le=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(le=Xe===Bt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(F,R){let Z;return F?R===null||R===vr||R===Rs?Z=r.DEPTH24_STENCIL8:R===Jn?Z=r.DEPTH32F_STENCIL8:R===bo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===vr||R===Rs?Z=r.DEPTH_COMPONENT24:R===Jn?Z=r.DEPTH_COMPONENT32F:R===bo&&(Z=r.DEPTH_COMPONENT16),Z}function L(F,R){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Mn&&F.minFilter!==on?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function P(F){const R=F.target;R.removeEventListener("dispose",P),O(R),R.isVideoTexture&&f.delete(R)}function D(F){const R=F.target;R.removeEventListener("dispose",D),b(R)}function O(F){const R=n.get(F);if(R.__webglInit===void 0)return;const Z=F.source,oe=m.get(Z);if(oe){const de=oe[R.__cacheKey];de.usedTimes--,de.usedTimes===0&&C(F),Object.keys(oe).length===0&&m.delete(Z)}n.remove(F)}function C(F){const R=n.get(F);r.deleteTexture(R.__webglTexture);const Z=F.source,oe=m.get(Z);delete oe[R.__cacheKey],l.memory.textures--}function b(F){const R=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let de=0;de<R.__webglFramebuffer[oe].length;de++)r.deleteFramebuffer(R.__webglFramebuffer[oe][de]);else r.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)r.deleteFramebuffer(R.__webglFramebuffer[oe]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=F.textures;for(let oe=0,de=Z.length;oe<de;oe++){const le=n.get(Z[oe]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),l.memory.textures--),n.remove(Z[oe])}n.remove(F)}let N=0;function q(){N=0}function Y(){const F=N;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),N+=1,F}function K(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function ae(F,R){const Z=n.get(F);if(F.isVideoTexture&&Me(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const oe=F.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Z,F,R);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+R)}function $(F,R){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){re(Z,F,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+R)}function me(F,R){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){re(Z,F,R);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+R)}function k(F,R){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){ve(Z,F,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+R)}const ne={[Ia]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[La]:r.MIRRORED_REPEAT},te={[Mn]:r.NEAREST,[ap]:r.NEAREST_MIPMAP_NEAREST,[xo]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[xa]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},ce={[__]:r.NEVER,[E_]:r.ALWAYS,[y_]:r.LESS,[_p]:r.LEQUAL,[x_]:r.EQUAL,[w_]:r.GEQUAL,[S_]:r.GREATER,[M_]:r.NOTEQUAL};function Ie(F,R){if(R.type===Jn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===on||R.magFilter===xa||R.magFilter===xo||R.magFilter===Wi||R.minFilter===on||R.minFilter===xa||R.minFilter===xo||R.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,ne[R.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,ne[R.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,ne[R.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,te[R.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,te[R.minFilter]),R.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ce[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Mn||R.minFilter!==xo&&R.minFilter!==Wi||R.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ye(F,R){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",P));const oe=R.source;let de=m.get(oe);de===void 0&&(de={},m.set(oe,de));const le=K(R);if(le!==F.__cacheKey){de[le]===void 0&&(de[le]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),de[le].usedTimes++;const Xe=de[F.__cacheKey];Xe!==void 0&&(de[F.__cacheKey].usedTimes--,Xe.usedTimes===0&&C(R)),F.__cacheKey=le,F.__webglTexture=de[le].texture}return Z}function re(F,R,Z){let oe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=r.TEXTURE_3D);const de=Ye(F,R),le=R.source;t.bindTexture(oe,F.__webglTexture,r.TEXTURE0+Z);const Xe=n.get(le);if(le.version!==Xe.__version||de===!0){t.activeTexture(r.TEXTURE0+Z);const Ce=Pt.getPrimaries(Pt.workingColorSpace),Oe=R.colorSpace===ur?null:Pt.getPrimaries(R.colorSpace),Et=R.colorSpace===ur||Ce===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ye=M(R.image,!1,i.maxTextureSize);ye=ot(R,ye);const He=s.convert(R.format,R.colorSpace),rt=s.convert(R.type);let lt=w(R.internalFormat,He,rt,R.colorSpace,R.isVideoTexture);Ie(oe,R);let Ve;const bt=R.mipmaps,ft=R.isVideoTexture!==!0,zt=Xe.__version===void 0||de===!0,V=le.dataReady,Re=L(R,ye);if(R.isDepthTexture)lt=A(R.format===Ps,R.type),zt&&(ft?t.texStorage2D(r.TEXTURE_2D,1,lt,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,lt,ye.width,ye.height,0,He,rt,null));else if(R.isDataTexture)if(bt.length>0){ft&&zt&&t.texStorage2D(r.TEXTURE_2D,Re,lt,bt[0].width,bt[0].height);for(let se=0,fe=bt.length;se<fe;se++)Ve=bt[se],ft?V&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Ve.width,Ve.height,He,rt,Ve.data):t.texImage2D(r.TEXTURE_2D,se,lt,Ve.width,Ve.height,0,He,rt,Ve.data);R.generateMipmaps=!1}else ft?(zt&&t.texStorage2D(r.TEXTURE_2D,Re,lt,ye.width,ye.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,He,rt,ye.data)):t.texImage2D(r.TEXTURE_2D,0,lt,ye.width,ye.height,0,He,rt,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ft&&zt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,lt,bt[0].width,bt[0].height,ye.depth);for(let se=0,fe=bt.length;se<fe;se++)if(Ve=bt[se],R.format!==Pn)if(He!==null)if(ft){if(V)if(R.layerUpdates.size>0){const Ne=tp(Ve.width,Ve.height,R.format,R.type);for(const De of R.layerUpdates){const ut=Ve.data.subarray(De*Ne/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,De,Ve.width,Ve.height,1,He,ut)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Ve.width,Ve.height,ye.depth,He,Ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,lt,Ve.width,Ve.height,ye.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Ve.width,Ve.height,ye.depth,He,rt,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,lt,Ve.width,Ve.height,ye.depth,0,He,rt,Ve.data)}else{ft&&zt&&t.texStorage2D(r.TEXTURE_2D,Re,lt,bt[0].width,bt[0].height);for(let se=0,fe=bt.length;se<fe;se++)Ve=bt[se],R.format!==Pn?He!==null?ft?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Ve.width,Ve.height,He,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,se,lt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?V&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Ve.width,Ve.height,He,rt,Ve.data):t.texImage2D(r.TEXTURE_2D,se,lt,Ve.width,Ve.height,0,He,rt,Ve.data)}else if(R.isDataArrayTexture)if(ft){if(zt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,lt,ye.width,ye.height,ye.depth),V)if(R.layerUpdates.size>0){const se=tp(ye.width,ye.height,R.format,R.type);for(const fe of R.layerUpdates){const Ne=ye.data.subarray(fe*se/ye.data.BYTES_PER_ELEMENT,(fe+1)*se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,He,rt,Ne)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,He,rt,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,ye.width,ye.height,ye.depth,0,He,rt,ye.data);else if(R.isData3DTexture)ft?(zt&&t.texStorage3D(r.TEXTURE_3D,Re,lt,ye.width,ye.height,ye.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,He,rt,ye.data)):t.texImage3D(r.TEXTURE_3D,0,lt,ye.width,ye.height,ye.depth,0,He,rt,ye.data);else if(R.isFramebufferTexture){if(zt)if(ft)t.texStorage2D(r.TEXTURE_2D,Re,lt,ye.width,ye.height);else{let se=ye.width,fe=ye.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,lt,se,fe,0,He,rt,null),se>>=1,fe>>=1}}else if(bt.length>0){if(ft&&zt){const se=Te(bt[0]);t.texStorage2D(r.TEXTURE_2D,Re,lt,se.width,se.height)}for(let se=0,fe=bt.length;se<fe;se++)Ve=bt[se],ft?V&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,He,rt,Ve):t.texImage2D(r.TEXTURE_2D,se,lt,He,rt,Ve);R.generateMipmaps=!1}else if(ft){if(zt){const se=Te(ye);t.texStorage2D(r.TEXTURE_2D,Re,lt,se.width,se.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,rt,ye)}else t.texImage2D(r.TEXTURE_2D,0,lt,He,rt,ye);x(R)&&_(oe),Xe.__version=le.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function ve(F,R,Z){if(R.image.length!==6)return;const oe=Ye(F,R),de=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Z);const le=n.get(de);if(de.version!==le.__version||oe===!0){t.activeTexture(r.TEXTURE0+Z);const Xe=Pt.getPrimaries(Pt.workingColorSpace),Ce=R.colorSpace===ur?null:Pt.getPrimaries(R.colorSpace),Oe=R.colorSpace===ur||Xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Et=R.isCompressedTexture||R.image[0].isCompressedTexture,ye=R.image[0]&&R.image[0].isDataTexture,He=[];for(let fe=0;fe<6;fe++)!Et&&!ye?He[fe]=M(R.image[fe],!0,i.maxCubemapSize):He[fe]=ye?R.image[fe].image:R.image[fe],He[fe]=ot(R,He[fe]);const rt=He[0],lt=s.convert(R.format,R.colorSpace),Ve=s.convert(R.type),bt=w(R.internalFormat,lt,Ve,R.colorSpace),ft=R.isVideoTexture!==!0,zt=le.__version===void 0||oe===!0,V=de.dataReady;let Re=L(R,rt);Ie(r.TEXTURE_CUBE_MAP,R);let se;if(Et){ft&&zt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,bt,rt.width,rt.height);for(let fe=0;fe<6;fe++){se=He[fe].mipmaps;for(let Ne=0;Ne<se.length;Ne++){const De=se[Ne];R.format!==Pn?lt!==null?ft?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,De.width,De.height,lt,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,bt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,De.width,De.height,lt,Ve,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,bt,De.width,De.height,0,lt,Ve,De.data)}}}else{if(se=R.mipmaps,ft&&zt){se.length>0&&Re++;const fe=Te(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,bt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){ft?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He[fe].width,He[fe].height,lt,Ve,He[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,bt,He[fe].width,He[fe].height,0,lt,Ve,He[fe].data);for(let Ne=0;Ne<se.length;Ne++){const ut=se[Ne].image[fe].image;ft?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,ut.width,ut.height,lt,Ve,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,bt,ut.width,ut.height,0,lt,Ve,ut.data)}}else{ft?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,lt,Ve,He[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,bt,lt,Ve,He[fe]);for(let Ne=0;Ne<se.length;Ne++){const De=se[Ne];ft?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,lt,Ve,De.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,bt,lt,Ve,De.image[fe])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),le.__version=de.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Le(F,R,Z,oe,de,le){const Xe=s.convert(Z.format,Z.colorSpace),Ce=s.convert(Z.type),Oe=w(Z.internalFormat,Xe,Ce,Z.colorSpace),Et=n.get(R),ye=n.get(Z);if(ye.__renderTarget=R,!Et.__hasExternalTextures){const He=Math.max(1,R.width>>le),rt=Math.max(1,R.height>>le);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,le,Oe,He,rt,R.depth,0,Xe,Ce,null):t.texImage2D(de,le,Oe,He,rt,0,Xe,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Be(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,de,ye.__webglTexture,0,_e(R)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,de,ye.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(F,R,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,F),R.depthBuffer){const oe=R.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,le=A(R.stencilBuffer,de),Xe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=_e(R);Be(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,le,R.width,R.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,le,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,F)}else{const oe=R.textures;for(let de=0;de<oe.length;de++){const le=oe[de],Xe=s.convert(le.format,le.colorSpace),Ce=s.convert(le.type),Oe=w(le.internalFormat,Xe,Ce,le.colorSpace),Et=_e(R);Z&&Be(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,Oe,R.width,R.height):Be(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,Oe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(R.depthTexture);oe.__renderTarget=R,(!oe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ae(R.depthTexture,0);const de=oe.__webglTexture,le=_e(R);if(R.depthTexture.format===ws)Be(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(R.depthTexture.format===Ps)Be(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function st(F){const R=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const oe=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){const de=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),R.__depthDisposeCallback=de}R.__boundDepthTexture=oe}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");$e(R.__webglFramebuffer,F)}else if(Z){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=r.createRenderbuffer(),xe(R.__webglDepthbuffer[oe],F,!1);else{const de=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,le)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),xe(R.__webglDepthbuffer,F,!1);else{const oe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,de)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function tt(F,R,Z){const oe=n.get(F);R!==void 0&&Le(oe.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&st(F)}function ct(F){const R=F.texture,Z=n.get(F),oe=n.get(R);F.addEventListener("dispose",D);const de=F.textures,le=F.isWebGLCubeRenderTarget===!0,Xe=de.length>1;if(Xe||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=R.version,l.memory.textures++),le){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)Z.__webglFramebuffer[Ce][Oe]=r.createFramebuffer()}else Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ce=0,Oe=de.length;Ce<Oe;Ce++){const Et=n.get(de[Ce]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),l.memory.textures++)}if(F.samples>0&&Be(F)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<de.length;Ce++){const Oe=de[Ce];Z.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const Et=s.convert(Oe.format,Oe.colorSpace),ye=s.convert(Oe.type),He=w(Oe.internalFormat,Et,ye,Oe.colorSpace,F.isXRRenderTarget===!0),rt=_e(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,He,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)Le(Z.__webglFramebuffer[Ce][Oe],F,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Le(Z.__webglFramebuffer[Ce],F,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Oe=de.length;Ce<Oe;Ce++){const Et=de[Ce],ye=n.get(Et);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),Ie(r.TEXTURE_2D,Et),Le(Z.__webglFramebuffer,F,Et,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),x(Et)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,oe.__webglTexture),Ie(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)Le(Z.__webglFramebuffer[Oe],F,R,r.COLOR_ATTACHMENT0,Ce,Oe);else Le(Z.__webglFramebuffer,F,R,r.COLOR_ATTACHMENT0,Ce,0);x(R)&&_(Ce),t.unbindTexture()}F.depthBuffer&&st(F)}function ue(F){const R=F.textures;for(let Z=0,oe=R.length;Z<oe;Z++){const de=R[Z];if(x(de)){const le=E(F),Xe=n.get(de).__webglTexture;t.bindTexture(le,Xe),_(le),t.unbindTexture()}}}const pe=[],B=[];function je(F){if(F.samples>0){if(Be(F)===!1){const R=F.textures,Z=F.width,oe=F.height;let de=r.COLOR_BUFFER_BIT;const le=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(F),Ce=R.length>1;if(Ce)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const Et=n.get(R[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,de,r.NEAREST),u===!0&&(pe.length=0,B.length=0,pe.push(r.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(pe.push(le),B.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const Et=n.get(R[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&u){const R=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function _e(F){return Math.min(i.maxSamples,F.samples)}function Be(F){const R=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Me(F){const R=l.render.frame;f.get(F)!==R&&(f.set(F,R),F.update())}function ot(F,R){const Z=F.colorSpace,oe=F.format,de=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Is&&Z!==ur&&(Pt.getTransfer(Z)===Bt?(oe!==Pn||de!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Te(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=$,this.setTexture3D=me,this.setTextureCube=k,this.rebindTextures=tt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Be}function Ly(r,e){function t(n,i=ur){let s;const l=Pt.getTransfer(i);if(n===Ri)return r.UNSIGNED_BYTE;if(n===Ku)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Qu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lp)return r.BYTE;if(n===cp)return r.SHORT;if(n===bo)return r.UNSIGNED_SHORT;if(n===Ju)return r.INT;if(n===vr)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===Uo)return r.HALF_FLOAT;if(n===hp)return r.ALPHA;if(n===fp)return r.RGB;if(n===Pn)return r.RGBA;if(n===dp)return r.LUMINANCE;if(n===pp)return r.LUMINANCE_ALPHA;if(n===ws)return r.DEPTH_COMPONENT;if(n===Ps)return r.DEPTH_STENCIL;if(n===$u)return r.RED;if(n===Za)return r.RED_INTEGER;if(n===mp)return r.RG;if(n===eh)return r.RG_INTEGER;if(n===th)return r.RGBA_INTEGER;if(n===Sa||n===Ma||n===wa||n===Ea)if(l===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===vu||n===_u)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===vu)return l===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_u)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yu||n===xu||n===Su||n===Mu||n===wu||n===Eu||n===Tu||n===Au||n===bu||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Au)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ru)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Du||n===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return l===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gp||n===Nu||n===Fu||n===Ou)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Wb={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
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

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends ji{constructor(e,t){super();const n=this;let i=null,s=1,l=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const M=new Yb,x=t.getContextAttributes();let _=null,E=null;const w=[],A=[],L=new he;let P=null;const D=new pn;D.viewport=new wt;const O=new pn;O.viewport=new wt;const C=[D,O],b=new yy;let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=w[re];return ve===void 0&&(ve=new wd,w[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=w[re];return ve===void 0&&(ve=new wd,w[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=w[re];return ve===void 0&&(ve=new wd,w[re]=ve),ve.getHandSpace()};function Y(re){const ve=A.indexOf(re.inputSource);if(ve===-1)return;const Le=w[ve];Le!==void 0&&(Le.update(re.inputSource,re.frame,h||l),Le.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ae);for(let re=0;re<w.length;re++){const ve=A[re];ve!==null&&(A[re]=null,w[re].disconnect(ve))}N=null,q=null,M.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){c=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Le=null,xe=null,$e=null;x.depth&&($e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=x.stencil?Ps:ws,xe=x.stencil?Rs:vr);const st={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(st),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Zi(m.textureWidth,m.textureHeight,{format:Pn,type:Ri,depthTexture:new Ap(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}else{const Le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,Le),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Zi(g.framebufferWidth,g.framebufferHeight,{format:Pn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await i.requestReferenceSpace(c),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ae(re){for(let ve=0;ve<re.removed.length;ve++){const Le=re.removed[ve],xe=A.indexOf(Le);xe>=0&&(A[xe]=null,w[xe].disconnect(Le))}for(let ve=0;ve<re.added.length;ve++){const Le=re.added[ve];let xe=A.indexOf(Le);if(xe===-1){for(let st=0;st<w.length;st++)if(st>=A.length){A.push(Le),xe=st;break}else if(A[st]===null){A[st]=Le,xe=st;break}if(xe===-1)break}const $e=w[xe];$e&&$e.connect(Le)}}const $=new U,me=new U;function k(re,ve,Le){$.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Le.matrixWorld);const xe=$.distanceTo(me),$e=ve.projectionMatrix.elements,st=Le.projectionMatrix.elements,tt=$e[14]/($e[10]-1),ct=$e[14]/($e[10]+1),ue=($e[9]+1)/$e[5],pe=($e[9]-1)/$e[5],B=($e[8]-1)/$e[0],je=(st[8]+1)/st[0],_e=tt*B,Be=tt*je,Me=xe/(-B+je),ot=Me*-B;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ot),re.translateZ(Me),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),$e[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Te=tt+Me,F=ct+Me,R=_e-ot,Z=Be+(xe-ot),oe=ue*ct/F*Te,de=pe*ct/F*Te;re.projectionMatrix.makePerspective(R,Z,oe,de,Te,F),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ne(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let ve=re.near,Le=re.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(Le=M.depthFar)),b.near=O.near=D.near=ve,b.far=O.far=D.far=Le,(N!==b.near||q!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,q=b.far),D.layers.mask=re.layers.mask|2,O.layers.mask=re.layers.mask|4,b.layers.mask=D.layers.mask|O.layers.mask;const xe=re.parent,$e=b.cameras;ne(b,xe);for(let st=0;st<$e.length;st++)ne($e[st],xe);$e.length===2?k(b,D,O):b.projectionMatrix.copy(D.projectionMatrix),te(re,b,xe)};function te(re,ve,Le){Le===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(Le.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Co*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(re){u=re,m!==null&&(m.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ce=null;function Ie(re,ve){if(f=ve.getViewerPose(h||l),y=ve,f!==null){const Le=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let xe=!1;Le.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let st=0;st<Le.length;st++){const tt=Le[st];let ct=null;if(g!==null)ct=g.getViewport(tt);else{const pe=p.getViewSubImage(m,tt);ct=pe.viewport,st===0&&(e.setRenderTargetTextures(E,pe.colorTexture,m.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(E))}let ue=C[st];ue===void 0&&(ue=new pn,ue.layers.enable(st),ue.viewport=new wt,C[st]=ue),ue.matrix.fromArray(tt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(tt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ct.x,ct.y,ct.width,ct.height),st===0&&(b.matrix.copy(ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(ue)}const $e=i.enabledFeatures;if($e&&$e.includes("depth-sensing")){const st=p.getDepthInformation(Le[0]);st&&st.isValid&&st.texture&&M.init(e,st,i.renderState)}}for(let Le=0;Le<w.length;Le++){const xe=A[Le],$e=w[Le];xe!==null&&$e!==void 0&&$e.update(xe,ve,h||l)}ce&&ce(re,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),y=null}const Ye=new by;Ye.setAnimationLoop(Ie),this.setAnimationLoop=function(re){ce=re},this.dispose=function(){}}}const ps=new li,jb=new at;function Jb(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,R_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,A)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===On&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===On&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,A=E.envMapRotation;w&&(x.envMap.value=w,ps.copy(A),ps.x*=-1,ps.y*=-1,ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),x.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler(ps)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kb(r,e,t,n){let i={},s={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const A=w.program;n.uniformBlockBinding(E,A)}function h(E,w){let A=i[E.id];A===void 0&&(y(E),A=f(E),i[E.id]=A,E.addEventListener("dispose",x));const L=w.program;n.updateUBOMapping(E,L);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const A=r.createBuffer(),L=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function p(){for(let E=0;E<c;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],A=E.uniforms,L=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,D=A.length;P<D;P++){const O=Array.isArray(A[P])?A[P]:[A[P]];for(let C=0,b=O.length;C<b;C++){const N=O[C];if(g(N,P,C,L)===!0){const q=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let ae=0;ae<Y.length;ae++){const $=Y[ae],me=M($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,q+K,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,K),K+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,w,A,L){const P=E.value,D=w+"_"+A;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{const O=L[D];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return L[D]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function y(E){const w=E.uniforms;let A=0;const L=16;for(let D=0,O=w.length;D<O;D++){const C=Array.isArray(w[D])?w[D]:[w[D]];for(let b=0,N=C.length;b<N;b++){const q=C[b],Y=Array.isArray(q.value)?q.value:[q.value];for(let K=0,ae=Y.length;K<ae;K++){const $=Y[K],me=M($),k=A%L,ne=k%me.boundary,te=k+ne;A+=ne,te!==0&&L-te<me.storage&&(A+=L-te),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=me.storage}}}const P=A%L;return P>0&&(A+=L-P),E.__size=A,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const A=l.indexOf(w.__bindingPointIndex);l.splice(A,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);l=[],i={},s={}}return{bind:u,update:h,dispose:_}}class Dy{constructor(e={}){const{canvas:t=A_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=l;const y=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Xi,this.toneMappingExposure=1;const A=this;let L=!1,P=0,D=0,O=null,C=-1,b=null;const N=new wt,q=new wt;let Y=null;const K=new Fe(0);let ae=0,$=t.width,me=t.height,k=1,ne=null,te=null;const ce=new wt(0,0,$,me),Ie=new wt(0,0,$,me);let Ye=!1;const re=new Qa;let ve=!1,Le=!1;this.transmissionResolutionScale=1;const xe=new at,$e=new at,st=new U,tt=new wt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function pe(){return O===null?k:1}let B=n;function je(I,G){return t.getContext(I,G)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),B===null){const G="webgl2";if(B=je(G,I),B===null)throw je(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let _e,Be,Me,ot,Te,F,R,Z,oe,de,le,Xe,Ce,Oe,Et,ye,He,rt,lt,Ve,bt,ft,zt,V;function Re(){_e=new lA(B),_e.init(),ft=new Ly(B,_e),Be=new nA(B,_e,e,ft),Me=new Vb(B,_e),Be.reverseDepthBuffer&&m&&Me.buffers.depth.setReversed(!0),ot=new hA(B),Te=new Rb,F=new Gb(B,_e,Me,Te,Be,ft,ot),R=new rA(A),Z=new aA(A),oe=new _w(B),zt=new eA(B,oe),de=new cA(B,oe,ot,zt),le=new dA(B,de,oe,ot),lt=new fA(B,Be,F),ye=new iA(Te),Xe=new Cb(A,R,Z,_e,Be,zt,ye),Ce=new Jb(A,Te),Oe=new Ib,Et=new Ob(_e),rt=new $T(A,R,Z,Me,le,g,u),He=new kb(A,le,Be),V=new Kb(B,ot,Be,Me),Ve=new tA(B,_e,ot),bt=new uA(B,_e,ot),ot.programs=Xe.programs,A.capabilities=Be,A.extensions=_e,A.properties=Te,A.renderLists=Oe,A.shadowMap=He,A.state=Me,A.info=ot}Re();const se=new Zb(A,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=_e.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=_e.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize($,me,!1))},this.getSize=function(I){return I.set($,me)},this.setSize=function(I,G,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=I,me=G,t.width=Math.floor(I*k),t.height=Math.floor(G*k),J===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set($*k,me*k).floor()},this.setDrawingBufferSize=function(I,G,J){$=I,me=G,k=J,t.width=Math.floor(I*J),t.height=Math.floor(G*J),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(ce)},this.setViewport=function(I,G,J,Q){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,G,J,Q),Me.viewport(N.copy(ce).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(Ie)},this.setScissor=function(I,G,J,Q){I.isVector4?Ie.set(I.x,I.y,I.z,I.w):Ie.set(I,G,J,Q),Me.scissor(q.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(I){Me.setScissorTest(Ye=I)},this.setOpaqueSort=function(I){ne=I},this.setTransparentSort=function(I){te=I},this.getClearColor=function(I){return I.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(I=!0,G=!0,J=!0){let Q=0;if(I){let W=!1;if(O!==null){const ge=O.texture.format;W=ge===th||ge===eh||ge===Za}if(W){const ge=O.texture.type,Ae=ge===Ri||ge===vr||ge===bo||ge===Rs||ge===Ku||ge===Qu,ze=rt.getClearColor(),ke=rt.getClearAlpha(),nt=ze.r,et=ze.g,we=ze.b;Ae?(y[0]=nt,y[1]=et,y[2]=we,y[3]=ke,B.clearBufferuiv(B.COLOR,0,y)):(M[0]=nt,M[1]=et,M[2]=we,M[3]=ke,B.clearBufferiv(B.COLOR,0,M))}else Q|=B.COLOR_BUFFER_BIT}G&&(Q|=B.DEPTH_BUFFER_BIT),J&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),rt.dispose(),Oe.dispose(),Et.dispose(),Te.dispose(),R.dispose(),Z.dispose(),le.dispose(),zt.dispose(),V.dispose(),Xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",ol),se.removeEventListener("sessionend",al),Li.stop()};function fe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const I=ot.autoReset,G=He.enabled,J=He.autoUpdate,Q=He.needsUpdate,W=He.type;Re(),ot.autoReset=I,He.enabled=G,He.autoUpdate=J,He.needsUpdate=Q,He.type=W}function De(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ut(I){const G=I.target;G.removeEventListener("dispose",ut),Gt(G)}function Gt(I){nn(I),Te.remove(I)}function nn(I){const G=Te.get(I).programs;G!==void 0&&(G.forEach(function(J){Xe.releaseProgram(J)}),I.isShaderMaterial&&Xe.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,J,Q,W,ge){G===null&&(G=ct);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,ze=Ah(I,G,J,Q,W);Me.setMaterial(Q,Ae);let ke=J.index,nt=1;if(Q.wireframe===!0){if(ke=de.getWireframeAttribute(J),ke===void 0)return;nt=2}const et=J.drawRange,we=J.attributes.position;let Ze=et.start*nt,St=(et.start+et.count)*nt;ge!==null&&(Ze=Math.max(Ze,ge.start*nt),St=Math.min(St,(ge.start+ge.count)*nt)),ke!==null?(Ze=Math.max(Ze,0),St=Math.min(St,ke.count)):we!=null&&(Ze=Math.max(Ze,0),St=Math.min(St,we.count));const Tt=St-Ze;if(Tt<0||Tt===1/0)return;zt.setup(W,Q,ze,J,ke);let At,yt=Ve;if(ke!==null&&(At=oe.get(ke),yt=bt,yt.setIndex(At)),W.isMesh)Q.wireframe===!0?(Me.setLineWidth(Q.wireframeLinewidth*pe()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(W.isLine){let Je=Q.linewidth;Je===void 0&&(Je=1),Me.setLineWidth(Je*pe()),W.isLineSegments?yt.setMode(B.LINES):W.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else W.isPoints?yt.setMode(B.POINTS):W.isSprite&&yt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)yt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Je=W._multiDrawStarts,Ut=W._multiDrawCounts,Rt=W._multiDrawCount,kn=ke?oe.get(ke).bytesPerElement:1,Ki=Te.get(Q).currentProgram.getUniforms();for(let cn=0;cn<Rt;cn++)Ki.setValue(B,"_gl_DrawID",cn),yt.render(Je[cn]/kn,Ut[cn])}else if(W.isInstancedMesh)yt.renderInstances(Ze,Tt,W.count);else if(J.isInstancedBufferGeometry){const Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ut=Math.min(J.instanceCount,Je);yt.renderInstances(Ze,Tt,Ut)}else yt.render(Ze,Tt)};function Dt(I,G,J){I.transparent===!0&&I.side===Vi&&I.forceSinglePass===!1?(I.side=On,I.needsUpdate=!0,Os(I,G,J),I.side=mr,I.needsUpdate=!0,Os(I,G,J),I.side=Vi):Os(I,G,J)}this.compile=function(I,G,J=null){J===null&&(J=I),_=Et.get(J),_.init(G),w.push(_),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),I!==J&&I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const Q=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const ze=ge[Ae];Dt(ze,J,W),Q.add(ze)}else Dt(ge,J,W),Q.add(ge)}),w.pop(),_=null,Q},this.compileAsync=function(I,G,J=null){const Q=this.compile(I,G,J);return new Promise(W=>{function ge(){if(Q.forEach(function(Ae){Te.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){W(I);return}setTimeout(ge,10)}_e.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let zn=null;function xi(I){zn&&zn(I)}function ol(){Li.stop()}function al(){Li.start()}const Li=new by;Li.setAnimationLoop(xi),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(I){zn=I,se.setAnimationLoop(I),I===null?Li.stop():Li.start()},se.addEventListener("sessionstart",ol),se.addEventListener("sessionend",al),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,G,O),_=Et.get(I,w.length),_.init(G),w.push(_),$e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),re.setFromProjectionMatrix($e),Le=this.localClippingEnabled,ve=ye.init(this.clippingPlanes,Le),x=Oe.get(I,E.length),x.init(),E.push(x),se.enabled===!0&&se.isPresenting===!0){const ge=A.xr.getDepthSensingMesh();ge!==null&&qr(ge,G,-1/0,A.sortObjects)}qr(I,G,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ne,te),ue=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ue&&rt.addToRenderList(x,I),this.info.render.frame++,ve===!0&&ye.beginShadows();const J=_.state.shadowsArray;He.render(J,I,G),ve===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=x.opaque,W=x.transmissive;if(_.setupLights(),G.isArrayCamera){const ge=G.cameras;if(W.length>0)for(let Ae=0,ze=ge.length;Ae<ze;Ae++){const ke=ge[Ae];yr(Q,W,I,ke)}ue&&rt.render(I);for(let Ae=0,ze=ge.length;Ae<ze;Ae++){const ke=ge[Ae];ll(x,I,ke,ke.viewport)}}else W.length>0&&yr(Q,W,I,G),ue&&rt.render(I),ll(x,I,G);O!==null&&D===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),I.isScene===!0&&I.onAfterRender(A,I,G),zt.resetDefaultState(),C=-1,b=null,w.pop(),w.length>0?(_=w[w.length-1],ve===!0&&ye.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function qr(I,G,J,Q){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||re.intersectsSprite(I)){Q&&tt.setFromMatrixPosition(I.matrixWorld).applyMatrix4($e);const Ae=le.update(I),ze=I.material;ze.visible&&x.push(I,Ae,ze,J,tt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||re.intersectsObject(I))){const Ae=le.update(I),ze=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),tt.copy(I.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),tt.copy(Ae.boundingSphere.center)),tt.applyMatrix4(I.matrixWorld).applyMatrix4($e)),Array.isArray(ze)){const ke=Ae.groups;for(let nt=0,et=ke.length;nt<et;nt++){const we=ke[nt],Ze=ze[we.materialIndex];Ze&&Ze.visible&&x.push(I,Ae,Ze,J,tt.z,we)}}else ze.visible&&x.push(I,Ae,ze,J,tt.z,null)}}const ge=I.children;for(let Ae=0,ze=ge.length;Ae<ze;Ae++)qr(ge[Ae],G,J,Q)}function ll(I,G,J,Q){const W=I.opaque,ge=I.transmissive,Ae=I.transparent;_.setupLightsView(J),ve===!0&&ye.setGlobalState(A.clippingPlanes,J),Q&&Me.viewport(N.copy(Q)),W.length>0&&Fs(W,G,J),ge.length>0&&Fs(ge,G,J),Ae.length>0&&Fs(Ae,G,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function yr(I,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Zi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Uo:Ri,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const ge=_.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||N;ge.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);const ze=A.getRenderTarget();A.setRenderTarget(ge),A.getClearColor(K),ae=A.getClearAlpha(),ae<1&&A.setClearColor(16777215,.5),A.clear(),ue&&rt.render(J);const ke=A.toneMapping;A.toneMapping=Xi;const nt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),ve===!0&&ye.setGlobalState(A.clippingPlanes,Q),Fs(I,J,Q),F.updateMultisampleRenderTarget(ge),F.updateRenderTargetMipmap(ge),_e.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let we=0,Ze=G.length;we<Ze;we++){const St=G[we],Tt=St.object,At=St.geometry,yt=St.material,Je=St.group;if(yt.side===Vi&&Tt.layers.test(Q.layers)){const Ut=yt.side;yt.side=On,yt.needsUpdate=!0,cl(Tt,J,Q,At,yt,Je),yt.side=Ut,yt.needsUpdate=!0,et=!0}}et===!0&&(F.updateMultisampleRenderTarget(ge),F.updateRenderTargetMipmap(ge))}A.setRenderTarget(ze),A.setClearColor(K,ae),nt!==void 0&&(Q.viewport=nt),A.toneMapping=ke}function Fs(I,G,J){const Q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ge=I.length;W<ge;W++){const Ae=I[W],ze=Ae.object,ke=Ae.geometry,nt=Q===null?Ae.material:Q,et=Ae.group;ze.layers.test(J.layers)&&cl(ze,G,J,ke,nt,et)}}function cl(I,G,J,Q,W,ge){I.onBeforeRender(A,G,J,Q,W,ge),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(A,G,J,Q,I,ge),W.transparent===!0&&W.side===Vi&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,A.renderBufferDirect(J,G,Q,W,I,ge),W.side=mr,W.needsUpdate=!0,A.renderBufferDirect(J,G,Q,W,I,ge),W.side=Vi):A.renderBufferDirect(J,G,Q,W,I,ge),I.onAfterRender(A,G,J,Q,W,ge)}function Os(I,G,J){G.isScene!==!0&&(G=ct);const Q=Te.get(I),W=_.state.lights,ge=_.state.shadowsArray,Ae=W.state.version,ze=Xe.getParameters(I,W.state,ge,G,J),ke=Xe.getProgramCacheKey(ze);let nt=Q.programs;Q.environment=I.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(I.isMeshStandardMaterial?Z:R).get(I.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,nt===void 0&&(I.addEventListener("dispose",ut),nt=new Map,Q.programs=nt);let et=nt.get(ke);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ae)return hl(I,ze),et}else ze.uniforms=Xe.getUniforms(I),I.onBeforeCompile(ze,A),et=Xe.acquireProgram(ze,ke),nt.set(ke,et),Q.uniforms=ze.uniforms;const we=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(we.clippingPlanes=ye.uniform),hl(I,ze),Q.needsLights=fl(I),Q.lightsStateVersion=Ae,Q.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.directionalShadowMap.value=W.state.directionalShadowMap,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotShadowMap.value=W.state.spotShadowMap,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMap.value=W.state.pointShadowMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function ul(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=eu.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function hl(I,G){const J=Te.get(I);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ah(I,G,J,Q,W){G.isScene!==!0&&(G=ct),F.resetTextureUnits();const ge=G.fog,Ae=Q.isMeshStandardMaterial?G.environment:null,ze=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Is,ke=(Q.isMeshStandardMaterial?Z:R).get(Q.envMap||Ae),nt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),we=!!J.morphAttributes.position,Ze=!!J.morphAttributes.normal,St=!!J.morphAttributes.color;let Tt=Xi;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const At=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=At!==void 0?At.length:0,Je=Te.get(Q),Ut=_.state.lights;if(ve===!0&&(Le===!0||I!==b)){const vn=I===b&&Q.id===C;ye.setState(Q,I,vn)}let Rt=!1;Q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ut.state.version||Je.outputColorSpace!==ze||W.isBatchedMesh&&Je.batching===!1||!W.isBatchedMesh&&Je.batching===!0||W.isBatchedMesh&&Je.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Je.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Je.instancing===!1||!W.isInstancedMesh&&Je.instancing===!0||W.isSkinnedMesh&&Je.skinning===!1||!W.isSkinnedMesh&&Je.skinning===!0||W.isInstancedMesh&&Je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Je.instancingMorph===!1&&W.morphTexture!==null||Je.envMap!==ke||Q.fog===!0&&Je.fog!==ge||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ye.numPlanes||Je.numIntersection!==ye.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==et||Je.morphTargets!==we||Je.morphNormals!==Ze||Je.morphColors!==St||Je.toneMapping!==Tt||Je.morphTargetsCount!==yt)&&(Rt=!0):(Rt=!0,Je.__version=Q.version);let kn=Je.currentProgram;Rt===!0&&(kn=Os(Q,G,W));let Ki=!1,cn=!1,xr=!1;const Ct=kn.getUniforms(),Hn=Je.uniforms;if(Me.useProgram(kn.program)&&(Ki=!0,cn=!0,xr=!0),Q.id!==C&&(C=Q.id,cn=!0),Ki||b!==I){Me.buffers.depth.getReversed()?(xe.copy(I.projectionMatrix),XS(xe),qS(xe),Ct.setValue(B,"projectionMatrix",xe)):Ct.setValue(B,"projectionMatrix",I.projectionMatrix),Ct.setValue(B,"viewMatrix",I.matrixWorldInverse);const rn=Ct.map.cameraPosition;rn!==void 0&&rn.setValue(B,st.setFromMatrixPosition(I.matrixWorld)),Be.logarithmicDepthBuffer&&Ct.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,cn=!0,xr=!0)}if(W.isSkinnedMesh){Ct.setOptional(B,W,"bindMatrix"),Ct.setOptional(B,W,"bindMatrixInverse");const vn=W.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ct.setValue(B,"boneTexture",vn.boneTexture,F))}W.isBatchedMesh&&(Ct.setOptional(B,W,"batchingTexture"),Ct.setValue(B,"batchingTexture",W._matricesTexture,F),Ct.setOptional(B,W,"batchingIdTexture"),Ct.setValue(B,"batchingIdTexture",W._indirectTexture,F),Ct.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(B,"batchingColorTexture",W._colorsTexture,F));const Vn=J.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&lt.update(W,J,kn),(cn||Je.receiveShadow!==W.receiveShadow)&&(Je.receiveShadow=W.receiveShadow,Ct.setValue(B,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Hn.envMap.value=ke,Hn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Hn.envMapIntensity.value=G.environmentIntensity),cn&&(Ct.setValue(B,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&bh(Hn,xr),ge&&Q.fog===!0&&Ce.refreshFogUniforms(Hn,ge),Ce.refreshMaterialUniforms(Hn,Q,k,me,_.state.transmissionRenderTarget[I.id]),eu.upload(B,ul(Je),Hn,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(eu.upload(B,ul(Je),Hn,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(B,"center",W.center),Ct.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(B,"normalMatrix",W.normalMatrix),Ct.setValue(B,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const vn=Q.uniformsGroups;for(let rn=0,Sr=vn.length;rn<Sr;rn++){const $n=vn[rn];V.update($n,kn),V.bind($n,kn)}}return kn}function bh(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function fl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(I,G,J){Te.get(I.texture).__webglTexture=G,Te.get(I.depthTexture).__webglTexture=J;const Q=Te.get(I);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){const J=Te.get(I);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Ch=B.createFramebuffer();this.setRenderTarget=function(I,G=0,J=0){O=I,P=G,D=J;let Q=!0,W=null,ge=!1,Ae=!1;if(I){const ke=Te.get(I);if(ke.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(ke.__hasExternalTextures)F.rebindTextures(I,Te.get(I.texture).__webglTexture,Te.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const we=I.depthTexture;if(ke.__boundDepthTexture!==we){if(we!==null&&Te.has(we)&&(I.width!==we.image.width||I.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const nt=I.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ae=!0);const et=Te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(et[G])?W=et[G][J]:W=et[G],ge=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?W=Te.get(I).__webglMultisampledFramebuffer:Array.isArray(et)?W=et[J]:W=et,N.copy(I.viewport),q.copy(I.scissor),Y=I.scissorTest}else N.copy(ce).multiplyScalar(k).floor(),q.copy(Ie).multiplyScalar(k).floor(),Y=Ye;if(J!==0&&(W=Ch),Me.bindFramebuffer(B.FRAMEBUFFER,W)&&Q&&Me.drawBuffers(I,W),Me.viewport(N),Me.scissor(q),Me.setScissorTest(Y),ge){const ke=Te.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,J)}else if(Ae){const ke=Te.get(I.texture),nt=G;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,J,nt)}else if(I!==null&&J!==0){const ke=Te.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,J)}C=-1},this.readRenderTargetPixels=function(I,G,J,Q,W,ge,Ae){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){Me.bindFramebuffer(B.FRAMEBUFFER,ze);try{const ke=I.texture,nt=ke.format,et=ke.type;if(!Be.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-Q&&J>=0&&J<=I.height-W&&B.readPixels(G,J,Q,W,ft.convert(nt),ft.convert(et),ge)}finally{const ke=O!==null?Te.get(O).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(I,G,J,Q,W,ge,Ae){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){const ke=I.texture,nt=ke.format,et=ke.type;if(!Be.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-Q&&J>=0&&J<=I.height-W){Me.bindFramebuffer(B.FRAMEBUFFER,ze);const we=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,we),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(G,J,Q,W,ft.convert(nt),ft.convert(et),0);const Ze=O!==null?Te.get(O).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,Ze);const St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await WS(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,we),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.deleteBuffer(we),B.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,J=0){I.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);const Q=Math.pow(2,-J),W=Math.floor(I.image.width*Q),ge=Math.floor(I.image.height*Q),Ae=G!==null?G.x:0,ze=G!==null?G.y:0;F.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ae,ze,W,ge),Me.unbindTexture()};const Rh=B.createFramebuffer(),Ph=B.createFramebuffer();this.copyTextureToTexture=function(I,G,J=null,Q=null,W=0,ge=null){I.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1],G=arguments[2],ge=arguments[3]||0,J=null),ge===null&&(W!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let Ae,ze,ke,nt,et,we,Ze,St,Tt;const At=I.isCompressedTexture?I.mipmaps[ge]:I.image;if(J!==null)Ae=J.max.x-J.min.x,ze=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,nt=J.min.x,et=J.min.y,we=J.isBox3?J.min.z:0;else{const Vn=Math.pow(2,-W);Ae=Math.floor(At.width*Vn),ze=Math.floor(At.height*Vn),I.isDataArrayTexture?ke=At.depth:I.isData3DTexture?ke=Math.floor(At.depth*Vn):ke=1,nt=0,et=0,we=0}Q!==null?(Ze=Q.x,St=Q.y,Tt=Q.z):(Ze=0,St=0,Tt=0);const yt=ft.convert(G.format),Je=ft.convert(G.type);let Ut;G.isData3DTexture?(F.setTexture3D(G,0),Ut=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),Ut=B.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),Ut=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),kn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ki=B.getParameter(B.UNPACK_SKIP_PIXELS),cn=B.getParameter(B.UNPACK_SKIP_ROWS),xr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,we);const Ct=I.isDataArrayTexture||I.isData3DTexture,Hn=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){const Vn=Te.get(I),vn=Te.get(G),rn=Te.get(Vn.__renderTarget),Sr=Te.get(vn.__renderTarget);Me.bindFramebuffer(B.READ_FRAMEBUFFER,rn.__webglFramebuffer),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let $n=0;$n<ke;$n++)Ct&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,W,we+$n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(G).__webglTexture,ge,Tt+$n)),B.blitFramebuffer(nt,et,Ae,ze,Ze,St,Ae,ze,B.DEPTH_BUFFER_BIT,B.NEAREST);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||Te.has(I)){const Vn=Te.get(I),vn=Te.get(G);Me.bindFramebuffer(B.READ_FRAMEBUFFER,Rh),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ph);for(let rn=0;rn<ke;rn++)Ct?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vn.__webglTexture,W,we+rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vn.__webglTexture,W),Hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vn.__webglTexture,ge,Tt+rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vn.__webglTexture,ge),W!==0?B.blitFramebuffer(nt,et,Ae,ze,Ze,St,Ae,ze,B.COLOR_BUFFER_BIT,B.NEAREST):Hn?B.copyTexSubImage3D(Ut,ge,Ze,St,Tt+rn,nt,et,Ae,ze):B.copyTexSubImage2D(Ut,ge,Ze,St,nt,et,Ae,ze);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Hn?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Ut,ge,Ze,St,Tt,Ae,ze,ke,yt,Je,At.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,ge,Ze,St,Tt,Ae,ze,ke,yt,At.data):B.texSubImage3D(Ut,ge,Ze,St,Tt,Ae,ze,ke,yt,Je,At):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,Ze,St,Ae,ze,yt,Je,At.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,Ze,St,At.width,At.height,yt,At.data):B.texSubImage2D(B.TEXTURE_2D,ge,Ze,St,Ae,ze,yt,Je,At);B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ki),B.pixelStorei(B.UNPACK_SKIP_ROWS,cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xr),ge===0&&G.generateMipmaps&&B.generateMipmap(Ut),Me.unbindTexture()},this.copyTextureToTexture3D=function(I,G,J=null,Q=null,W=0){return I.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,I=arguments[2],G=arguments[3],W=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,G,J,Q,W)},this.initRenderTarget=function(I){Te.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),Me.unbindTexture()},this.resetState=function(){P=0,D=0,O=null,Me.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const Qb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:op,AddEquation:zr,AddOperation:r_,AdditiveAnimationBlendMode:vp,AdditiveBlending:nu,AgXToneMapping:c_,AlphaFormat:hp,AlwaysCompare:E_,AlwaysDepth:ou,AlwaysStencilFunc:Yd,AmbientLight:py,AnimationAction:My,AnimationClip:Xa,AnimationLoader:p1,AnimationMixer:G1,AnimationObjectGroup:H1,AnimationUtils:u1,ArcCurve:k_,ArrayCamera:yy,ArrowHelper:cw,AttachedBindMode:qd,Audio:xy,AudioAnalyser:I1,AudioContext:Gp,AudioListener:C1,AudioLoader:T1,AxesHelper:uw,BackSide:On,BasicDepthPacking:m_,BasicShadowMap:Bv,BatchedMesh:O_,Bone:Ep,BooleanKeyframeTrack:Us,Box2:J1,Box3:mn,Box3Helper:aw,BoxGeometry:Ds,BoxHelper:ow,BufferAttribute:kt,BufferGeometry:_t,BufferGeometryLoader:_y,ByteType:lp,Cache:fr,Camera:Ja,CameraHelper:sw,CanvasTexture:UM,CapsuleGeometry:hh,CatmullRomCurve3:H_,CineonToneMapping:a_,CircleGeometry:fh,ClampToEdgeWrapping:yi,Clock:Wp,Color:Fe,ColorKeyframeTrack:zp,ColorManagement:Pt,CompressedArrayTexture:LM,CompressedCubeTexture:DM,CompressedTexture:ch,CompressedTextureLoader:m1,ConeGeometry:dh,ConstantAlphaFactor:t_,ConstantColorFactor:$v,Controls:fw,CubeCamera:P_,CubeReflectionMapping:gr,CubeRefractionMapping:kr,CubeTexture:Ka,CubeTextureLoader:g1,CubeUVReflectionMapping:Do,CubicBezierCurve:Cp,CubicBezierCurve3:V_,CubicInterpolant:oy,CullFaceBack:Gd,CullFaceFront:Ov,CullFaceFrontBack:Yx,CullFaceNone:Fv,Curve:Pi,CurvePath:W_,CustomBlending:zv,CustomToneMapping:l_,CylinderGeometry:Fo,Cylindrical:j1,Data3DTexture:rh,DataArrayTexture:ja,DataTexture:qi,DataTextureLoader:v1,DataUtils:aM,DecrementStencilOp:aS,DecrementWrapStencilOp:cS,DefaultLoadingManager:cy,DepthFormat:ws,DepthStencilFormat:Ps,DepthTexture:Ap,DetachedBindMode:h_,DirectionalLight:dy,DirectionalLightHelper:rw,DiscreteInterpolant:ay,DodecahedronGeometry:ph,DoubleSide:Vi,DstAlphaFactor:Zv,DstColorFactor:Jv,DynamicCopyUsage:ES,DynamicDrawUsage:_S,DynamicReadUsage:SS,EdgesGeometry:X_,EllipseCurve:uh,EqualCompare:x_,EqualDepth:lu,EqualStencilFunc:dS,EquirectangularReflectionMapping:Ra,EquirectangularRefractionMapping:Pa,Euler:li,EventDispatcher:ji,ExtrudeGeometry:gh,FileLoader:_r,Float16BufferAttribute:dM,Float32BufferAttribute:We,FloatType:Jn,Fog:oh,FogExp2:sh,FramebufferTexture:IM,FrontSide:mr,Frustum:Qa,GLBufferAttribute:Z1,GLSL1:AS,GLSL3:Zd,GreaterCompare:S_,GreaterDepth:uu,GreaterEqualCompare:w_,GreaterEqualDepth:cu,GreaterEqualStencilFunc:vS,GreaterStencilFunc:mS,GridHelper:nw,Group:Mo,HalfFloatType:Uo,HemisphereLight:uy,HemisphereLightHelper:tw,IcosahedronGeometry:vh,ImageBitmapLoader:E1,ImageLoader:qa,ImageUtils:b_,IncrementStencilOp:oS,IncrementWrapStencilOp:lS,InstancedBufferAttribute:Po,InstancedBufferGeometry:Vp,InstancedInterleavedBuffer:Wu,InstancedMesh:F_,Int16BufferAttribute:hM,Int32BufferAttribute:fM,Int8BufferAttribute:lM,IntType:Ju,InterleavedBuffer:ah,InterleavedBufferAttribute:oi,Interpolant:nl,InterpolateDiscrete:Da,InterpolateLinear:Bu,InterpolateSmooth:$c,InvertStencilOp:uS,KeepStencilOp:ms,KeyframeTrack:Ii,LOD:U_,LatheGeometry:$a,Layers:Ts,LessCompare:y_,LessDepth:au,LessEqualCompare:_p,LessEqualDepth:Cs,LessEqualStencilFunc:pS,LessStencilFunc:fS,Light:Xr,LightProbe:vy,Line:Hr,Line3:Ty,LineBasicMaterial:Bn,LineCurve:Rp,LineCurve3:G_,LineDashedMaterial:iy,LineLoop:B_,LineSegments:Ji,LinearFilter:on,LinearInterpolant:Bp,LinearMipMapLinearFilter:Kx,LinearMipMapNearestFilter:Jx,LinearMipmapLinearFilter:Wi,LinearMipmapNearestFilter:xa,LinearSRGBColorSpace:Is,LinearToneMapping:s_,LinearTransfer:Na,Loader:Qn,LoaderUtils:$d,LoadingManager:kp,LoopOnce:f_,LoopPingPong:p_,LoopRepeat:d_,LuminanceAlphaFormat:pp,LuminanceFormat:dp,MOUSE:Xx,Material:In,MaterialLoader:Eh,MathUtils:zu,Matrix2:Zp,Matrix3:mt,Matrix4:at,MaxEquation:Gv,Mesh:Qt,MeshBasicMaterial:Gr,MeshDepthMaterial:Np,MeshDistanceMaterial:Fp,MeshLambertMaterial:ty,MeshMatcapMaterial:ny,MeshNormalMaterial:ey,MeshPhongMaterial:Q_,MeshPhysicalMaterial:K_,MeshStandardMaterial:Up,MeshToonMaterial:$_,MinEquation:Vv,MirroredRepeatWrapping:La,MixOperation:i_,MultiplyBlending:Xd,MultiplyOperation:Ya,NearestFilter:Mn,NearestMipMapLinearFilter:jx,NearestMipMapNearestFilter:Zx,NearestMipmapLinearFilter:xo,NearestMipmapNearestFilter:ap,NeutralToneMapping:u_,NeverCompare:__,NeverDepth:su,NeverStencilFunc:hS,NoBlending:dr,NoColorSpace:ur,NoToneMapping:Xi,NormalAnimationBlendMode:nh,NormalBlending:Ms,NotEqualCompare:M_,NotEqualDepth:hu,NotEqualStencilFunc:gS,NumberKeyframeTrack:Ga,Object3D:Lt,ObjectLoader:M1,ObjectSpaceNormalMap:v_,OctahedronGeometry:el,OneFactor:Xv,OneMinusConstantAlphaFactor:n_,OneMinusConstantColorFactor:e_,OneMinusDstAlphaFactor:jv,OneMinusDstColorFactor:Kv,OneMinusSrcAlphaFactor:ru,OneMinusSrcColorFactor:Yv,OrthographicCamera:rl,PCFShadowMap:Zu,PCFSoftShadowMap:ya,PMREMGenerator:np,Path:za,PerspectiveCamera:pn,Plane:Br,PlaneGeometry:Oo,PlaneHelper:lw,PointLight:fy,PointLightHelper:$1,Points:z_,PointsMaterial:Tp,PolarGridHelper:iw,PolyhedronGeometry:Wr,PositionalAudio:P1,PropertyBinding:It,PropertyMixer:Sy,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Ip,Quaternion:Kn,QuaternionKeyframeTrack:il,QuaternionLinearInterpolant:ly,RED_GREEN_RGTC2_Format:Fu,RED_RGTC1_Format:gp,REVISION:Lo,RGBADepthPacking:g_,RGBAFormat:Pn,RGBAIntegerFormat:th,RGBA_ASTC_10x10_Format:Pu,RGBA_ASTC_10x5_Format:bu,RGBA_ASTC_10x6_Format:Cu,RGBA_ASTC_10x8_Format:Ru,RGBA_ASTC_12x10_Format:Iu,RGBA_ASTC_12x12_Format:Lu,RGBA_ASTC_4x4_Format:yu,RGBA_ASTC_5x4_Format:xu,RGBA_ASTC_5x5_Format:Su,RGBA_ASTC_6x5_Format:Mu,RGBA_ASTC_6x6_Format:wu,RGBA_ASTC_8x5_Format:Eu,RGBA_ASTC_8x6_Format:Tu,RGBA_ASTC_8x8_Format:Au,RGBA_BPTC_Format:Ta,RGBA_ETC2_EAC_Format:_u,RGBA_PVRTC_2BPPV1_Format:mu,RGBA_PVRTC_4BPPV1_Format:pu,RGBA_S3TC_DXT1_Format:Ma,RGBA_S3TC_DXT3_Format:wa,RGBA_S3TC_DXT5_Format:Ea,RGBDepthPacking:nS,RGBFormat:fp,RGBIntegerFormat:Qx,RGB_BPTC_SIGNED_Format:Du,RGB_BPTC_UNSIGNED_Format:Uu,RGB_ETC1_Format:gu,RGB_ETC2_Format:vu,RGB_PVRTC_2BPPV1_Format:du,RGB_PVRTC_4BPPV1_Format:fu,RGB_S3TC_DXT1_Format:Sa,RGDepthPacking:iS,RGFormat:mp,RGIntegerFormat:eh,RawShaderMaterial:J_,Ray:No,Raycaster:wy,RectAreaLight:my,RedFormat:$u,RedIntegerFormat:Za,ReinhardToneMapping:o_,RenderTarget:ih,RenderTarget3D:W1,RenderTargetArray:X1,RepeatWrapping:Ia,ReplaceStencilOp:sS,ReverseSubtractEquation:Hv,RingGeometry:_h,SIGNED_RED_GREEN_RGTC2_Format:Ou,SIGNED_RED_RGTC1_Format:Nu,SRGBColorSpace:Zn,SRGBTransfer:Bt,Scene:Mp,ShaderChunk:vt,ShaderLib:bi,ShaderMaterial:ci,ShadowMaterial:j_,Shape:As,ShapeGeometry:yh,ShapePath:hw,ShapeUtils:Yi,ShortType:cp,Skeleton:lh,SkeletonHelper:Q1,SkinnedMesh:N_,Source:xs,Sphere:gn,SphereGeometry:tl,Spherical:Ey,SphericalHarmonics3:gy,SplineCurve:Lp,SpotLight:hy,SpotLightHelper:K1,Sprite:D_,SpriteMaterial:wp,SrcAlphaFactor:iu,SrcAlphaSaturateFactor:Qv,SrcColorFactor:qv,StaticCopyUsage:wS,StaticDrawUsage:Fa,StaticReadUsage:xS,StereoCamera:A1,StreamCopyUsage:TS,StreamDrawUsage:yS,StreamReadUsage:MS,StringKeyframeTrack:Ns,SubtractEquation:kv,SubtractiveBlending:Wd,TOUCH:qx,TangentSpaceNormalMap:Vr,TetrahedronGeometry:xh,Texture:jt,TextureLoader:_1,TextureUtils:vw,TorusGeometry:Sh,TorusKnotGeometry:Mh,Triangle:jn,TriangleFanDrawMode:tS,TriangleStripDrawMode:eS,TrianglesDrawMode:$x,TubeGeometry:wh,UVMapping:ju,Uint16BufferAttribute:xp,Uint32BufferAttribute:Sp,Uint8BufferAttribute:cM,Uint8ClampedBufferAttribute:uM,Uniform:Yp,UniformsGroup:Y1,UniformsLib:Ee,UniformsUtils:ku,UnsignedByteType:Ri,UnsignedInt248Type:Rs,UnsignedInt5999Type:up,UnsignedIntType:vr,UnsignedShort4444Type:Ku,UnsignedShort5551Type:Qu,UnsignedShortType:bo,VSMShadowMap:Ai,Vector2:he,Vector3:U,Vector4:wt,VectorKeyframeTrack:Wa,VideoTexture:PM,WebGL3DRenderTarget:KS,WebGLArrayRenderTarget:JS,WebGLCoordinateSystem:Ci,WebGLCubeRenderTarget:I_,WebGLRenderTarget:Zi,WebGLRenderer:Dy,WebGLUtils:Ly,WebGPUCoordinateSystem:Oa,WireframeGeometry:Dp,WrapAroundEnding:Ua,ZeroCurvatureEnding:_s,ZeroFactor:Wv,ZeroSlopeEnding:ys,ZeroStencilOp:rS,createCanvasElement:A_},Symbol.toStringTag,{value:"Module"}));var Ed={exports:{}},Or={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function $b(){return cv||(cv=1,Or.ConcurrentRoot=1,Or.ContinuousEventPriority=4,Or.DefaultEventPriority=16,Or.DiscreteEventPriority=1,Or.IdleEventPriority=536870912,Or.LegacyRoot=0),Or}var uv;function eC(){return uv||(uv=1,Ed.exports=$b()),Ed.exports}var To=eC();function tC(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const nC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),hv=nC?be.useEffect:be.useLayoutEffect;function iC(r){const e=typeof r=="function"?tC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=be.useReducer(x=>x+1,0),l=e.getState(),c=be.useRef(l),u=be.useRef(n),h=be.useRef(i),f=be.useRef(!1),p=be.useRef();p.current===void 0&&(p.current=n(l));let m,g=!1;(c.current!==l||u.current!==n||h.current!==i||f.current)&&(m=n(l),g=!i(p.current,m)),hv(()=>{g&&(p.current=m),c.current=l,u.current=n,h.current=i,f.current=!1});const y=be.useRef(l);hv(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=g?m:p.current;return be.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Td={exports:{}},Ad={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function rC(){return fv||(fv=1,(function(r){function e(k,ne){var te=k.length;k.push(ne);e:for(;0<te;){var ce=te-1>>>1,Ie=k[ce];if(0<i(Ie,ne))k[ce]=ne,k[te]=Ie,te=ce;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var ne=k[0],te=k.pop();if(te!==ne){k[0]=te;e:for(var ce=0,Ie=k.length,Ye=Ie>>>1;ce<Ye;){var re=2*(ce+1)-1,ve=k[re],Le=re+1,xe=k[Le];if(0>i(ve,te))Le<Ie&&0>i(xe,ve)?(k[ce]=xe,k[Le]=te,ce=Le):(k[ce]=ve,k[re]=te,ce=re);else if(Le<Ie&&0>i(xe,te))k[ce]=xe,k[Le]=te,ce=Le;else break e}}return ne}function i(k,ne){var te=k.sortIndex-ne.sortIndex;return te!==0?te:k.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(k){for(var ne=t(h);ne!==null;){if(ne.callback===null)n(h);else if(ne.startTime<=k)n(h),ne.sortIndex=ne.expirationTime,e(u,ne);else break;ne=t(h)}}function A(k){if(M=!1,w(k),!y)if(t(u)!==null)y=!0,$(L);else{var ne=t(h);ne!==null&&me(A,ne.startTime-k)}}function L(k,ne){y=!1,M&&(M=!1,_(O),O=-1),g=!0;var te=m;try{for(w(ne),p=t(u);p!==null&&(!(p.expirationTime>ne)||k&&!N());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var Ie=ce(p.expirationTime<=ne);ne=r.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===t(u)&&n(u),w(ne)}else n(u);p=t(u)}if(p!==null)var Ye=!0;else{var re=t(h);re!==null&&me(A,re.startTime-ne),Ye=!1}return Ye}finally{p=null,m=te,g=!1}}var P=!1,D=null,O=-1,C=5,b=-1;function N(){return!(r.unstable_now()-b<C)}function q(){if(D!==null){var k=r.unstable_now();b=k;var ne=!0;try{ne=D(!0,k)}finally{ne?Y():(P=!1,D=null)}}else P=!1}var Y;if(typeof E=="function")Y=function(){E(q)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ae=K.port2;K.port1.onmessage=q,Y=function(){ae.postMessage(null)}}else Y=function(){x(q,0)};function $(k){D=k,P||(P=!0,Y())}function me(k,ne){O=x(function(){k(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,$(L))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var te=m;m=ne;try{return k()}finally{m=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,ne){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=m;m=k;try{return ne()}finally{m=te}},r.unstable_scheduleCallback=function(k,ne,te){var ce=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ce+te:ce):te=ce,k){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=te+Ie,k={id:f++,callback:ne,priorityLevel:k,startTime:te,expirationTime:Ie,sortIndex:-1},te>ce?(k.sortIndex=te,e(h,k),t(u)===null&&k===t(h)&&(M?(_(O),O=-1):M=!0,me(A,te-ce))):(k.sortIndex=Ie,e(u,k),y||g||(y=!0,$(L))),k},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(k){var ne=m;return function(){var te=m;m=ne;try{return k.apply(this,arguments)}finally{m=te}}}})(bd)),bd}var dv;function Uy(){return dv||(dv=1,Ad.exports=rC()),Ad.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd,pv;function sC(){return pv||(pv=1,Cd=function(e){var t={},n=Gx(),i=Uy(),s=Object.assign;function l(o){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),L=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=L&&o[L]||o["@@iterator"],typeof o=="function"?o:null)}function D(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var a=o.render;return o=o.displayName,o||(o=a.displayName||a.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return a=o.displayName||null,a!==null?a:D(o.type)||"Memo";case w:a=o._payload,o=o._init;try{return D(o(a))}catch{}}return null}function O(o){var a=o.type;switch(o.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=a.render,o=o.displayName||o.name||"",a.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return D(a);case 8:return a===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function C(o){var a=o,d=o;if(o.alternate)for(;a.return;)a=a.return;else{o=a;do a=o,(a.flags&4098)!==0&&(d=a.return),o=a.return;while(o)}return a.tag===3?d:null}function b(o){if(C(o)!==o)throw Error(l(188))}function N(o){var a=o.alternate;if(!a){if(a=C(o),a===null)throw Error(l(188));return a!==o?null:o}for(var d=o,v=a;;){var S=d.return;if(S===null)break;var T=S.alternate;if(T===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===T.child){for(T=S.child;T;){if(T===d)return b(S),o;if(T===v)return b(S),a;T=T.sibling}throw Error(l(188))}if(d.return!==v.return)d=S,v=T;else{for(var z=!1,H=S.child;H;){if(H===d){z=!0,d=S,v=T;break}if(H===v){z=!0,v=S,d=T;break}H=H.sibling}if(!z){for(H=T.child;H;){if(H===d){z=!0,d=T,v=S;break}if(H===v){z=!0,v=T,d=S;break}H=H.sibling}if(!z)throw Error(l(189))}}if(d.alternate!==v)throw Error(l(190))}if(d.tag!==3)throw Error(l(188));return d.stateNode.current===d?o:a}function q(o){return o=N(o),o!==null?Y(o):null}function Y(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var a=Y(o);if(a!==null)return a;o=o.sibling}return null}function K(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var a=K(o);if(a!==null)return a}o=o.sibling}return null}var ae=Array.isArray,$=e.getPublicInstance,me=e.getRootHostContext,k=e.getChildHostContext,ne=e.prepareForCommit,te=e.resetAfterCommit,ce=e.createInstance,Ie=e.appendInitialChild,Ye=e.finalizeInitialChildren,re=e.prepareUpdate,ve=e.shouldSetTextContent,Le=e.createTextInstance,xe=e.scheduleTimeout,$e=e.cancelTimeout,st=e.noTimeout,tt=e.isPrimaryRenderer,ct=e.supportsMutation,ue=e.supportsPersistence,pe=e.supportsHydration,B=e.getInstanceFromNode,je=e.preparePortalMount,_e=e.getCurrentEventPriority,Be=e.detachDeletedInstance,Me=e.supportsMicrotasks,ot=e.scheduleMicrotask,Te=e.supportsTestSelectors,F=e.findFiberRoot,R=e.getBoundingRect,Z=e.getTextContent,oe=e.isHiddenSubtree,de=e.matchAccessibilityRole,le=e.setFocusIfFocusable,Xe=e.setupIntersectionObserver,Ce=e.appendChild,Oe=e.appendChildToContainer,Et=e.commitTextUpdate,ye=e.commitMount,He=e.commitUpdate,rt=e.insertBefore,lt=e.insertInContainerBefore,Ve=e.removeChild,bt=e.removeChildFromContainer,ft=e.resetTextContent,zt=e.hideInstance,V=e.hideTextInstance,Re=e.unhideInstance,se=e.unhideTextInstance,fe=e.clearContainer,Ne=e.cloneInstance,De=e.createContainerChildSet,ut=e.appendChildToContainerChildSet,Gt=e.finalizeContainerChildren,nn=e.replaceContainerChildren,Dt=e.cloneHiddenInstance,zn=e.cloneHiddenTextInstance,xi=e.canHydrateInstance,ol=e.canHydrateTextInstance,al=e.canHydrateSuspenseInstance,Li=e.isSuspenseInstancePending,qr=e.isSuspenseInstanceFallback,ll=e.registerSuspenseInstanceRetry,yr=e.getNextHydratableSibling,Fs=e.getFirstHydratableChild,cl=e.getFirstHydratableChildWithinContainer,Os=e.getFirstHydratableChildWithinSuspenseInstance,ul=e.hydrateInstance,hl=e.hydrateTextInstance,Ah=e.hydrateSuspenseInstance,bh=e.getNextHydratableInstanceAfterSuspenseInstance,fl=e.commitHydratedContainer,Ch=e.commitHydratedSuspenseInstance,Rh=e.clearSuspenseBoundary,Ph=e.clearSuspenseBoundaryFromContainer,I=e.shouldDeleteUnhydratedTailInstances,G=e.didNotMatchHydratedContainerTextInstance,J=e.didNotMatchHydratedTextInstance,Q;function W(o){if(Q===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);Q=a&&a[1]||""}return`
`+Q+o}var ge=!1;function Ae(o,a){if(!o||ge)return"";ge=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Se){var v=Se}Reflect.construct(o,[],a)}else{try{a.call()}catch(Se){v=Se}o.call(a.prototype)}else{try{throw Error()}catch(Se){v=Se}o()}}catch(Se){if(Se&&v&&typeof Se.stack=="string"){for(var S=Se.stack.split(`
`),T=v.stack.split(`
`),z=S.length-1,H=T.length-1;1<=z&&0<=H&&S[z]!==T[H];)H--;for(;1<=z&&0<=H;z--,H--)if(S[z]!==T[H]){if(z!==1||H!==1)do if(z--,H--,0>H||S[z]!==T[H]){var ie=`
`+S[z].replace(" at new "," at ");return o.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",o.displayName)),ie}while(1<=z&&0<=H);break}}}finally{ge=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?W(o):""}var ze=Object.prototype.hasOwnProperty,ke=[],nt=-1;function et(o){return{current:o}}function we(o){0>nt||(o.current=ke[nt],ke[nt]=null,nt--)}function Ze(o,a){nt++,ke[nt]=o.current,o.current=a}var St={},Tt=et(St),At=et(!1),yt=St;function Je(o,a){var d=o.type.contextTypes;if(!d)return St;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===a)return v.__reactInternalMemoizedMaskedChildContext;var S={},T;for(T in d)S[T]=a[T];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ut(o){return o=o.childContextTypes,o!=null}function Rt(){we(At),we(Tt)}function kn(o,a,d){if(Tt.current!==St)throw Error(l(168));Ze(Tt,a),Ze(At,d)}function Ki(o,a,d){var v=o.stateNode;if(a=a.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in a))throw Error(l(108,O(o)||"Unknown",S));return s({},d,v)}function cn(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||St,yt=Tt.current,Ze(Tt,o),Ze(At,At.current),!0}function xr(o,a,d){var v=o.stateNode;if(!v)throw Error(l(169));d?(o=Ki(o,a,yt),v.__reactInternalMemoizedMergedChildContext=o,we(At),we(Tt),Ze(Tt,o)):we(At),Ze(At,d)}var Ct=Math.clz32?Math.clz32:vn,Hn=Math.log,Vn=Math.LN2;function vn(o){return o>>>=0,o===0?32:31-(Hn(o)/Vn|0)|0}var rn=64,Sr=4194304;function $n(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function dl(o,a){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,T=o.pingedLanes,z=d&268435455;if(z!==0){var H=z&~S;H!==0?v=$n(H):(T&=z,T!==0&&(v=$n(T)))}else z=d&~S,z!==0?v=$n(z):T!==0&&(v=$n(T));if(v===0)return 0;if(a!==0&&a!==v&&(a&S)===0&&(S=v&-v,T=a&-a,S>=T||S===16&&(T&4194240)!==0))return a;if((v&4)!==0&&(v|=d&16),a=o.entangledLanes,a!==0)for(o=o.entanglements,a&=v;0<a;)d=31-Ct(a),S=1<<d,v|=o[d],a&=~S;return v}function tx(o,a){switch(o){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(o,a){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,T=o.pendingLanes;0<T;){var z=31-Ct(T),H=1<<z,ie=S[z];ie===-1?((H&d)===0||(H&v)!==0)&&(S[z]=tx(H,a)):ie<=a&&(o.expiredLanes|=H),T&=~H}}function Ih(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Lh(o){for(var a=[],d=0;31>d;d++)a.push(o);return a}function zo(o,a,d){o.pendingLanes|=a,a!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,a=31-Ct(a),o[a]=d}function ix(o,a){var d=o.pendingLanes&~a;o.pendingLanes=a,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=a,o.mutableReadLanes&=a,o.entangledLanes&=a,a=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Ct(d),T=1<<S;a[S]=0,v[S]=-1,o[S]=-1,d&=~T}}function Dh(o,a){var d=o.entangledLanes|=a;for(o=o.entanglements;d;){var v=31-Ct(d),S=1<<v;S&a|o[v]&a&&(o[v]|=a),d&=~S}}var Nt=0;function tm(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Uh=i.unstable_scheduleCallback,nm=i.unstable_cancelCallback,rx=i.unstable_shouldYield,sx=i.unstable_requestPaint,un=i.unstable_now,Nh=i.unstable_ImmediatePriority,ox=i.unstable_UserBlockingPriority,Fh=i.unstable_NormalPriority,ax=i.unstable_IdlePriority,pl=null,Di=null;function lx(o){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(pl,o,void 0,(o.current.flags&128)===128)}catch{}}function cx(o,a){return o===a&&(o!==0||1/o===1/a)||o!==o&&a!==a}var Ui=typeof Object.is=="function"?Object.is:cx,Qi=null,ml=!1,Oh=!1;function im(o){Qi===null?Qi=[o]:Qi.push(o)}function ux(o){ml=!0,im(o)}function Ni(){if(!Oh&&Qi!==null){Oh=!0;var o=0,a=Nt;try{var d=Qi;for(Nt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}Qi=null,ml=!1}catch(S){throw Qi!==null&&(Qi=Qi.slice(o+1)),Uh(Nh,Ni),S}finally{Nt=a,Oh=!1}}return null}var hx=c.ReactCurrentBatchConfig;function gl(o,a){if(Ui(o,a))return!0;if(typeof o!="object"||o===null||typeof a!="object"||a===null)return!1;var d=Object.keys(o),v=Object.keys(a);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!ze.call(a,S)||!Ui(o[S],a[S]))return!1}return!0}function fx(o){switch(o.tag){case 5:return W(o.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return o=Ae(o.type,!1),o;case 11:return o=Ae(o.type.render,!1),o;case 1:return o=Ae(o.type,!0),o;default:return""}}function Si(o,a){if(o&&o.defaultProps){a=s({},a),o=o.defaultProps;for(var d in o)a[d]===void 0&&(a[d]=o[d]);return a}return a}var vl=et(null),_l=null,Bs=null,Bh=null;function zh(){Bh=Bs=_l=null}function rm(o,a,d){tt?(Ze(vl,a._currentValue),a._currentValue=d):(Ze(vl,a._currentValue2),a._currentValue2=d)}function kh(o){var a=vl.current;we(vl),tt?o._currentValue=a:o._currentValue2=a}function Hh(o,a,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&a)!==a?(o.childLanes|=a,v!==null&&(v.childLanes|=a)):v!==null&&(v.childLanes&a)!==a&&(v.childLanes|=a),o===d)break;o=o.return}}function zs(o,a){_l=o,Bh=Bs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&a)!==0&&(ni=!0),o.firstContext=null)}function ui(o){var a=tt?o._currentValue:o._currentValue2;if(Bh!==o)if(o={context:o,memoizedValue:a,next:null},Bs===null){if(_l===null)throw Error(l(308));Bs=o,_l.dependencies={lanes:0,firstContext:o}}else Bs=Bs.next=o;return a}var Fi=null,Mr=!1;function Vh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(o,a){o=o.updateQueue,a.updateQueue===o&&(a.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function $i(o,a){return{eventTime:o,lane:a,tag:0,payload:null,callback:null,next:null}}function wr(o,a){var d=o.updateQueue;d!==null&&(d=d.shared,$t!==null&&(o.mode&1)!==0&&(Mt&2)===0?(o=d.interleaved,o===null?(a.next=a,Fi===null?Fi=[d]:Fi.push(d)):(a.next=o.next,o.next=a),d.interleaved=a):(o=d.pending,o===null?a.next=a:(a.next=o.next,o.next=a),d.pending=a))}function yl(o,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Dh(o,d)}}function om(o,a){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var z={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?S=T=z:T=T.next=z,d=d.next}while(d!==null);T===null?S=T=a:T=T.next=a}else S=T=a;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:T,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=a:o.next=a,d.lastBaseUpdate=a}function xl(o,a,d,v){var S=o.updateQueue;Mr=!1;var T=S.firstBaseUpdate,z=S.lastBaseUpdate,H=S.shared.pending;if(H!==null){S.shared.pending=null;var ie=H,Se=ie.next;ie.next=null,z===null?T=Se:z.next=Se,z=ie;var Ge=o.alternate;Ge!==null&&(Ge=Ge.updateQueue,H=Ge.lastBaseUpdate,H!==z&&(H===null?Ge.firstBaseUpdate=Se:H.next=Se,Ge.lastBaseUpdate=ie))}if(T!==null){var dt=S.baseState;z=0,Ge=Se=ie=null,H=T;do{var it=H.lane,Ht=H.eventTime;if((v&it)===it){Ge!==null&&(Ge=Ge.next={eventTime:Ht,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Qe=o,An=H;switch(it=a,Ht=d,An.tag){case 1:if(Qe=An.payload,typeof Qe=="function"){dt=Qe.call(Ht,dt,it);break e}dt=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=An.payload,it=typeof Qe=="function"?Qe.call(Ht,dt,it):Qe,it==null)break e;dt=s({},dt,it);break e;case 2:Mr=!0}}H.callback!==null&&H.lane!==0&&(o.flags|=64,it=S.effects,it===null?S.effects=[H]:it.push(H))}else Ht={eventTime:Ht,lane:it,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ge===null?(Se=Ge=Ht,ie=dt):Ge=Ge.next=Ht,z|=it;if(H=H.next,H===null){if(H=S.shared.pending,H===null)break;it=H,H=it.next,it.next=null,S.lastBaseUpdate=it,S.shared.pending=null}}while(!0);if(Ge===null&&(ie=dt),S.baseState=ie,S.firstBaseUpdate=Se,S.lastBaseUpdate=Ge,a=S.shared.interleaved,a!==null){S=a;do z|=S.lane,S=S.next;while(S!==a)}else T===null&&(S.shared.lanes=0);Zs|=z,o.lanes=z,o.memoizedState=dt}}function am(o,a,d){if(o=a.effects,a.effects=null,o!==null)for(a=0;a<o.length;a++){var v=o[a],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(l(191,S));S.call(v)}}}var lm=new n.Component().refs;function Gh(o,a,d,v){a=o.memoizedState,d=d(v,a),d=d==null?a:s({},a,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Sl={isMounted:function(o){return(o=o._reactInternals)?C(o)===o:!1},enqueueSetState:function(o,a,d){o=o._reactInternals;var v=Dn(),S=Ar(o),T=$i(v,S);T.payload=a,d!=null&&(T.callback=d),wr(o,T),a=mi(o,S,v),a!==null&&yl(a,o,S)},enqueueReplaceState:function(o,a,d){o=o._reactInternals;var v=Dn(),S=Ar(o),T=$i(v,S);T.tag=1,T.payload=a,d!=null&&(T.callback=d),wr(o,T),a=mi(o,S,v),a!==null&&yl(a,o,S)},enqueueForceUpdate:function(o,a){o=o._reactInternals;var d=Dn(),v=Ar(o),S=$i(d,v);S.tag=2,a!=null&&(S.callback=a),wr(o,S),a=mi(o,v,d),a!==null&&yl(a,o,v)}};function cm(o,a,d,v,S,T,z){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,T,z):a.prototype&&a.prototype.isPureReactComponent?!gl(d,v)||!gl(S,T):!0}function um(o,a,d){var v=!1,S=St,T=a.contextType;return typeof T=="object"&&T!==null?T=ui(T):(S=Ut(a)?yt:Tt.current,v=a.contextTypes,T=(v=v!=null)?Je(o,S):St),a=new a(d,T),o.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sl,o.stateNode=a,a._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=T),a}function hm(o,a,d,v){o=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,v),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,v),a.state!==o&&Sl.enqueueReplaceState(a,a.state,null)}function Wh(o,a,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=lm,Vh(o);var T=a.contextType;typeof T=="object"&&T!==null?S.context=ui(T):(T=Ut(a)?yt:Tt.current,S.context=Je(o,T)),S.state=o.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(Gh(o,a,T,d),S.state=o.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(a=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),a!==S.state&&Sl.enqueueReplaceState(S,S.state,null),xl(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var ks=[],Hs=0,Ml=null,wl=0,hi=[],fi=0,Yr=null,er=1,tr="";function Zr(o,a){ks[Hs++]=wl,ks[Hs++]=Ml,Ml=o,wl=a}function fm(o,a,d){hi[fi++]=er,hi[fi++]=tr,hi[fi++]=Yr,Yr=o;var v=er;o=tr;var S=32-Ct(v)-1;v&=~(1<<S),d+=1;var T=32-Ct(a)+S;if(30<T){var z=S-S%5;T=(v&(1<<z)-1).toString(32),v>>=z,S-=z,er=1<<32-Ct(a)+S|d<<S|v,tr=T+o}else er=1<<T|d<<S|v,tr=o}function Xh(o){o.return!==null&&(Zr(o,1),fm(o,1,0))}function qh(o){for(;o===Ml;)Ml=ks[--Hs],ks[Hs]=null,wl=ks[--Hs],ks[Hs]=null;for(;o===Yr;)Yr=hi[--fi],hi[fi]=null,tr=hi[--fi],hi[fi]=null,er=hi[--fi],hi[fi]=null}var ei=null,ti=null,Wt=!1,ko=!1,Mi=null;function dm(o,a){var d=gi(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=o,a=o.deletions,a===null?(o.deletions=[d],o.flags|=16):a.push(d)}function pm(o,a){switch(o.tag){case 5:return a=xi(a,o.type,o.pendingProps),a!==null?(o.stateNode=a,ei=o,ti=Fs(a),!0):!1;case 6:return a=ol(a,o.pendingProps),a!==null?(o.stateNode=a,ei=o,ti=null,!0):!1;case 13:if(a=al(a),a!==null){var d=Yr!==null?{id:er,overflow:tr}:null;return o.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=gi(18,null,null,0),d.stateNode=a,d.return=o,o.child=d,ei=o,ti=null,!0}return!1;default:return!1}}function Yh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Zh(o){if(Wt){var a=ti;if(a){var d=a;if(!pm(o,a)){if(Yh(o))throw Error(l(418));a=yr(d);var v=ei;a&&pm(o,a)?dm(v,d):(o.flags=o.flags&-4097|2,Wt=!1,ei=o)}}else{if(Yh(o))throw Error(l(418));o.flags=o.flags&-4097|2,Wt=!1,ei=o}}}function mm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;ei=o}function Ho(o){if(!pe||o!==ei)return!1;if(!Wt)return mm(o),Wt=!0,!1;if(o.tag!==3&&(o.tag!==5||I(o.type)&&!ve(o.type,o.memoizedProps))){var a=ti;if(a){if(Yh(o)){for(o=ti;o;)o=yr(o);throw Error(l(418))}for(;a;)dm(o,a),a=yr(a)}}if(mm(o),o.tag===13){if(!pe)throw Error(l(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));ti=bh(o)}else ti=ei?yr(o.stateNode):null;return!0}function Vs(){pe&&(ti=ei=null,ko=Wt=!1)}function jh(o){Mi===null?Mi=[o]:Mi.push(o)}function Vo(o,a,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(l(309));var v=d.stateNode}if(!v)throw Error(l(147,o));var S=v,T=""+o;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===T?a.ref:(a=function(z){var H=S.refs;H===lm&&(H=S.refs={}),z===null?delete H[T]:H[T]=z},a._stringRef=T,a)}if(typeof o!="string")throw Error(l(284));if(!d._owner)throw Error(l(290,o))}return o}function El(o,a){throw o=Object.prototype.toString.call(a),Error(l(31,o==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":o))}function gm(o){var a=o._init;return a(o._payload)}function vm(o){function a(j,X){if(o){var ee=j.deletions;ee===null?(j.deletions=[X],j.flags|=16):ee.push(X)}}function d(j,X){if(!o)return null;for(;X!==null;)a(j,X),X=X.sibling;return null}function v(j,X){for(j=new Map;X!==null;)X.key!==null?j.set(X.key,X):j.set(X.index,X),X=X.sibling;return j}function S(j,X){return j=Cr(j,X),j.index=0,j.sibling=null,j}function T(j,X,ee){return j.index=ee,o?(ee=j.alternate,ee!==null?(ee=ee.index,ee<X?(j.flags|=2,X):ee):(j.flags|=2,X)):(j.flags|=1048576,X)}function z(j){return o&&j.alternate===null&&(j.flags|=2),j}function H(j,X,ee,Ue){return X===null||X.tag!==6?(X=Df(ee,j.mode,Ue),X.return=j,X):(X=S(X,ee),X.return=j,X)}function ie(j,X,ee,Ue){var Ke=ee.type;return Ke===f?Ge(j,X,ee.props.children,Ue,ee.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===w&&gm(Ke)===X.type)?(Ue=S(X,ee.props),Ue.ref=Vo(j,X,ee),Ue.return=j,Ue):(Ue=tc(ee.type,ee.key,ee.props,null,j.mode,Ue),Ue.ref=Vo(j,X,ee),Ue.return=j,Ue)}function Se(j,X,ee,Ue){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Uf(ee,j.mode,Ue),X.return=j,X):(X=S(X,ee.children||[]),X.return=j,X)}function Ge(j,X,ee,Ue,Ke){return X===null||X.tag!==7?(X=ts(ee,j.mode,Ue,Ke),X.return=j,X):(X=S(X,ee),X.return=j,X)}function dt(j,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Df(""+X,j.mode,ee),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case u:return ee=tc(X.type,X.key,X.props,null,j.mode,ee),ee.ref=Vo(j,null,X),ee.return=j,ee;case h:return X=Uf(X,j.mode,ee),X.return=j,X;case w:var Ue=X._init;return dt(j,Ue(X._payload),ee)}if(ae(X)||P(X))return X=ts(X,j.mode,ee,null),X.return=j,X;El(j,X)}return null}function it(j,X,ee,Ue){var Ke=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ke!==null?null:H(j,X,""+ee,Ue);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return ee.key===Ke?ie(j,X,ee,Ue):null;case h:return ee.key===Ke?Se(j,X,ee,Ue):null;case w:return Ke=ee._init,it(j,X,Ke(ee._payload),Ue)}if(ae(ee)||P(ee))return Ke!==null?null:Ge(j,X,ee,Ue,null);El(j,ee)}return null}function Ht(j,X,ee,Ue,Ke){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return j=j.get(ee)||null,H(X,j,""+Ue,Ke);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case u:return j=j.get(Ue.key===null?ee:Ue.key)||null,ie(X,j,Ue,Ke);case h:return j=j.get(Ue.key===null?ee:Ue.key)||null,Se(X,j,Ue,Ke);case w:var xt=Ue._init;return Ht(j,X,ee,xt(Ue._payload),Ke)}if(ae(Ue)||P(Ue))return j=j.get(ee)||null,Ge(X,j,Ue,Ke,null);El(X,Ue)}return null}function Qe(j,X,ee,Ue){for(var Ke=null,xt=null,pt=X,Ft=X=0,fn=null;pt!==null&&Ft<ee.length;Ft++){pt.index>Ft?(fn=pt,pt=null):fn=pt.sibling;var Ot=it(j,pt,ee[Ft],Ue);if(Ot===null){pt===null&&(pt=fn);break}o&&pt&&Ot.alternate===null&&a(j,pt),X=T(Ot,X,Ft),xt===null?Ke=Ot:xt.sibling=Ot,xt=Ot,pt=fn}if(Ft===ee.length)return d(j,pt),Wt&&Zr(j,Ft),Ke;if(pt===null){for(;Ft<ee.length;Ft++)pt=dt(j,ee[Ft],Ue),pt!==null&&(X=T(pt,X,Ft),xt===null?Ke=pt:xt.sibling=pt,xt=pt);return Wt&&Zr(j,Ft),Ke}for(pt=v(j,pt);Ft<ee.length;Ft++)fn=Ht(pt,j,Ft,ee[Ft],Ue),fn!==null&&(o&&fn.alternate!==null&&pt.delete(fn.key===null?Ft:fn.key),X=T(fn,X,Ft),xt===null?Ke=fn:xt.sibling=fn,xt=fn);return o&&pt.forEach(function(Rr){return a(j,Rr)}),Wt&&Zr(j,Ft),Ke}function An(j,X,ee,Ue){var Ke=P(ee);if(typeof Ke!="function")throw Error(l(150));if(ee=Ke.call(ee),ee==null)throw Error(l(151));for(var xt=Ke=null,pt=X,Ft=X=0,fn=null,Ot=ee.next();pt!==null&&!Ot.done;Ft++,Ot=ee.next()){pt.index>Ft?(fn=pt,pt=null):fn=pt.sibling;var Rr=it(j,pt,Ot.value,Ue);if(Rr===null){pt===null&&(pt=fn);break}o&&pt&&Rr.alternate===null&&a(j,pt),X=T(Rr,X,Ft),xt===null?Ke=Rr:xt.sibling=Rr,xt=Rr,pt=fn}if(Ot.done)return d(j,pt),Wt&&Zr(j,Ft),Ke;if(pt===null){for(;!Ot.done;Ft++,Ot=ee.next())Ot=dt(j,Ot.value,Ue),Ot!==null&&(X=T(Ot,X,Ft),xt===null?Ke=Ot:xt.sibling=Ot,xt=Ot);return Wt&&Zr(j,Ft),Ke}for(pt=v(j,pt);!Ot.done;Ft++,Ot=ee.next())Ot=Ht(pt,j,Ft,Ot.value,Ue),Ot!==null&&(o&&Ot.alternate!==null&&pt.delete(Ot.key===null?Ft:Ot.key),X=T(Ot,X,Ft),xt===null?Ke=Ot:xt.sibling=Ot,xt=Ot);return o&&pt.forEach(function(Vx){return a(j,Vx)}),Wt&&Zr(j,Ft),Ke}function vi(j,X,ee,Ue){if(typeof ee=="object"&&ee!==null&&ee.type===f&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:e:{for(var Ke=ee.key,xt=X;xt!==null;){if(xt.key===Ke){if(Ke=ee.type,Ke===f){if(xt.tag===7){d(j,xt.sibling),X=S(xt,ee.props.children),X.return=j,j=X;break e}}else if(xt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===w&&gm(Ke)===xt.type){d(j,xt.sibling),X=S(xt,ee.props),X.ref=Vo(j,xt,ee),X.return=j,j=X;break e}d(j,xt);break}else a(j,xt);xt=xt.sibling}ee.type===f?(X=ts(ee.props.children,j.mode,Ue,ee.key),X.return=j,j=X):(Ue=tc(ee.type,ee.key,ee.props,null,j.mode,Ue),Ue.ref=Vo(j,X,ee),Ue.return=j,j=Ue)}return z(j);case h:e:{for(xt=ee.key;X!==null;){if(X.key===xt)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){d(j,X.sibling),X=S(X,ee.children||[]),X.return=j,j=X;break e}else{d(j,X);break}else a(j,X);X=X.sibling}X=Uf(ee,j.mode,Ue),X.return=j,j=X}return z(j);case w:return xt=ee._init,vi(j,X,xt(ee._payload),Ue)}if(ae(ee))return Qe(j,X,ee,Ue);if(P(ee))return An(j,X,ee,Ue);El(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(d(j,X.sibling),X=S(X,ee),X.return=j,j=X):(d(j,X),X=Df(ee,j.mode,Ue),X.return=j,j=X),z(j)):d(j,X)}return vi}var Gs=vm(!0),_m=vm(!1),Go={},di=et(Go),Wo=et(Go),Ws=et(Go);function Oi(o){if(o===Go)throw Error(l(174));return o}function Jh(o,a){Ze(Ws,a),Ze(Wo,o),Ze(di,Go),o=me(a),we(di),Ze(di,o)}function Xs(){we(di),we(Wo),we(Ws)}function ym(o){var a=Oi(Ws.current),d=Oi(di.current);a=k(d,o.type,a),d!==a&&(Ze(Wo,o),Ze(di,a))}function Kh(o){Wo.current===o&&(we(di),we(Wo))}var Xt=et(0);function Tl(o){for(var a=o;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Li(d)||qr(d)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Qh=[];function $h(){for(var o=0;o<Qh.length;o++){var a=Qh[o];tt?a._workInProgressVersionPrimary=null:a._workInProgressVersionSecondary=null}Qh.length=0}var Al=c.ReactCurrentDispatcher,pi=c.ReactCurrentBatchConfig,qs=0,Yt=null,wn=null,hn=null,bl=!1,Xo=!1,qo=0,dx=0;function En(){throw Error(l(321))}function ef(o,a){if(a===null)return!1;for(var d=0;d<a.length&&d<o.length;d++)if(!Ui(o[d],a[d]))return!1;return!0}function tf(o,a,d,v,S,T){if(qs=T,Yt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Al.current=o===null||o.memoizedState===null?vx:_x,o=d(v,S),Xo){T=0;do{if(Xo=!1,qo=0,25<=T)throw Error(l(301));T+=1,hn=wn=null,a.updateQueue=null,Al.current=yx,o=d(v,S)}while(Xo)}if(Al.current=Ll,a=wn!==null&&wn.next!==null,qs=0,hn=wn=Yt=null,bl=!1,a)throw Error(l(300));return o}function nf(){var o=qo!==0;return qo=0,o}function nr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Yt.memoizedState=hn=o:hn=hn.next=o,hn}function Bi(){if(wn===null){var o=Yt.alternate;o=o!==null?o.memoizedState:null}else o=wn.next;var a=hn===null?Yt.memoizedState:hn.next;if(a!==null)hn=a,wn=o;else{if(o===null)throw Error(l(310));wn=o,o={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},hn===null?Yt.memoizedState=hn=o:hn=hn.next=o}return hn}function jr(o,a){return typeof a=="function"?a(o):a}function Cl(o){var a=Bi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=wn,S=v.baseQueue,T=d.pending;if(T!==null){if(S!==null){var z=S.next;S.next=T.next,T.next=z}v.baseQueue=S=T,d.pending=null}if(S!==null){T=S.next,v=v.baseState;var H=z=null,ie=null,Se=T;do{var Ge=Se.lane;if((qs&Ge)===Ge)ie!==null&&(ie=ie.next={lane:0,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null}),v=Se.hasEagerState?Se.eagerState:o(v,Se.action);else{var dt={lane:Ge,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null};ie===null?(H=ie=dt,z=v):ie=ie.next=dt,Yt.lanes|=Ge,Zs|=Ge}Se=Se.next}while(Se!==null&&Se!==T);ie===null?z=v:ie.next=H,Ui(v,a.memoizedState)||(ni=!0),a.memoizedState=v,a.baseState=z,a.baseQueue=ie,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do T=S.lane,Yt.lanes|=T,Zs|=T,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function Rl(o){var a=Bi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,T=a.memoizedState;if(S!==null){d.pending=null;var z=S=S.next;do T=o(T,z.action),z=z.next;while(z!==S);Ui(T,a.memoizedState)||(ni=!0),a.memoizedState=T,a.baseQueue===null&&(a.baseState=T),d.lastRenderedState=T}return[T,v]}function xm(){}function Sm(o,a){var d=Yt,v=Bi(),S=a(),T=!Ui(v.memoizedState,S);if(T&&(v.memoizedState=S,ni=!0),v=v.queue,Zo(Em.bind(null,d,v,o),[o]),v.getSnapshot!==a||T||hn!==null&&hn.memoizedState.tag&1){if(d.flags|=2048,Yo(9,wm.bind(null,d,v,S,a),void 0,null),$t===null)throw Error(l(349));(qs&30)!==0||Mm(d,a,S)}return S}function Mm(o,a,d){o.flags|=16384,o={getSnapshot:a,value:d},a=Yt.updateQueue,a===null?(a={lastEffect:null,stores:null},Yt.updateQueue=a,a.stores=[o]):(d=a.stores,d===null?a.stores=[o]:d.push(o))}function wm(o,a,d,v){a.value=d,a.getSnapshot=v,Tm(a)&&mi(o,1,-1)}function Em(o,a,d){return d(function(){Tm(a)&&mi(o,1,-1)})}function Tm(o){var a=o.getSnapshot;o=o.value;try{var d=a();return!Ui(o,d)}catch{return!0}}function rf(o){var a=nr();return typeof o=="function"&&(o=o()),a.memoizedState=a.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:o},a.queue=o,o=o.dispatch=gx.bind(null,Yt,o),[a.memoizedState,o]}function Yo(o,a,d,v){return o={tag:o,create:a,destroy:d,deps:v,next:null},a=Yt.updateQueue,a===null?(a={lastEffect:null,stores:null},Yt.updateQueue=a,a.lastEffect=o.next=o):(d=a.lastEffect,d===null?a.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,a.lastEffect=o)),o}function Am(){return Bi().memoizedState}function Pl(o,a,d,v){var S=nr();Yt.flags|=o,S.memoizedState=Yo(1|a,d,void 0,v===void 0?null:v)}function Il(o,a,d,v){var S=Bi();v=v===void 0?null:v;var T=void 0;if(wn!==null){var z=wn.memoizedState;if(T=z.destroy,v!==null&&ef(v,z.deps)){S.memoizedState=Yo(a,d,T,v);return}}Yt.flags|=o,S.memoizedState=Yo(1|a,d,T,v)}function sf(o,a){return Pl(8390656,8,o,a)}function Zo(o,a){return Il(2048,8,o,a)}function bm(o,a){return Il(4,2,o,a)}function Cm(o,a){return Il(4,4,o,a)}function Rm(o,a){if(typeof a=="function")return o=o(),a(o),function(){a(null)};if(a!=null)return o=o(),a.current=o,function(){a.current=null}}function Pm(o,a,d){return d=d!=null?d.concat([o]):null,Il(4,4,Rm.bind(null,a,o),d)}function of(){}function Im(o,a){var d=Bi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&ef(a,v[1])?v[0]:(d.memoizedState=[o,a],o)}function Lm(o,a){var d=Bi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&ef(a,v[1])?v[0]:(o=o(),d.memoizedState=[o,a],o)}function px(o,a){var d=Nt;Nt=d!==0&&4>d?d:4,o(!0);var v=pi.transition;pi.transition={};try{o(!1),a()}finally{Nt=d,pi.transition=v}}function Dm(){return Bi().memoizedState}function mx(o,a,d){var v=Ar(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Um(o)?Nm(a,d):(Fm(o,a,d),d=Dn(),o=mi(o,v,d),o!==null&&Om(o,a,v))}function gx(o,a,d){var v=Ar(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Um(o))Nm(a,S);else{Fm(o,a,S);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=a.lastRenderedReducer,T!==null))try{var z=a.lastRenderedState,H=T(z,d);if(S.hasEagerState=!0,S.eagerState=H,Ui(H,z))return}catch{}finally{}d=Dn(),o=mi(o,v,d),o!==null&&Om(o,a,v)}}function Um(o){var a=o.alternate;return o===Yt||a!==null&&a===Yt}function Nm(o,a){Xo=bl=!0;var d=o.pending;d===null?a.next=a:(a.next=d.next,d.next=a),o.pending=a}function Fm(o,a,d){$t!==null&&(o.mode&1)!==0&&(Mt&2)===0?(o=a.interleaved,o===null?(d.next=d,Fi===null?Fi=[a]:Fi.push(a)):(d.next=o.next,o.next=d),a.interleaved=d):(o=a.pending,o===null?d.next=d:(d.next=o.next,o.next=d),a.pending=d)}function Om(o,a,d){if((d&4194240)!==0){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Dh(o,d)}}var Ll={readContext:ui,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},vx={readContext:ui,useCallback:function(o,a){return nr().memoizedState=[o,a===void 0?null:a],o},useContext:ui,useEffect:sf,useImperativeHandle:function(o,a,d){return d=d!=null?d.concat([o]):null,Pl(4194308,4,Rm.bind(null,a,o),d)},useLayoutEffect:function(o,a){return Pl(4194308,4,o,a)},useInsertionEffect:function(o,a){return Pl(4,2,o,a)},useMemo:function(o,a){var d=nr();return a=a===void 0?null:a,o=o(),d.memoizedState=[o,a],o},useReducer:function(o,a,d){var v=nr();return a=d!==void 0?d(a):a,v.memoizedState=v.baseState=a,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:a},v.queue=o,o=o.dispatch=mx.bind(null,Yt,o),[v.memoizedState,o]},useRef:function(o){var a=nr();return o={current:o},a.memoizedState=o},useState:rf,useDebugValue:of,useDeferredValue:function(o){var a=rf(o),d=a[0],v=a[1];return sf(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),d},useTransition:function(){var o=rf(!1),a=o[0];return o=px.bind(null,o[1]),nr().memoizedState=o,[a,o]},useMutableSource:function(){},useSyncExternalStore:function(o,a,d){var v=Yt,S=nr();if(Wt){if(d===void 0)throw Error(l(407));d=d()}else{if(d=a(),$t===null)throw Error(l(349));(qs&30)!==0||Mm(v,a,d)}S.memoizedState=d;var T={value:d,getSnapshot:a};return S.queue=T,sf(Em.bind(null,v,T,o),[o]),v.flags|=2048,Yo(9,wm.bind(null,v,T,d,a),void 0,null),d},useId:function(){var o=nr(),a=$t.identifierPrefix;if(Wt){var d=tr,v=er;d=(v&~(1<<32-Ct(v)-1)).toString(32)+d,a=":"+a+"R"+d,d=qo++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=dx++,a=":"+a+"r"+d.toString(32)+":";return o.memoizedState=a},unstable_isNewReconciler:!1},_x={readContext:ui,useCallback:Im,useContext:ui,useEffect:Zo,useImperativeHandle:Pm,useInsertionEffect:bm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Cl,useRef:Am,useState:function(){return Cl(jr)},useDebugValue:of,useDeferredValue:function(o){var a=Cl(jr),d=a[0],v=a[1];return Zo(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),d},useTransition:function(){var o=Cl(jr)[0],a=Bi().memoizedState;return[o,a]},useMutableSource:xm,useSyncExternalStore:Sm,useId:Dm,unstable_isNewReconciler:!1},yx={readContext:ui,useCallback:Im,useContext:ui,useEffect:Zo,useImperativeHandle:Pm,useInsertionEffect:bm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Rl,useRef:Am,useState:function(){return Rl(jr)},useDebugValue:of,useDeferredValue:function(o){var a=Rl(jr),d=a[0],v=a[1];return Zo(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),d},useTransition:function(){var o=Rl(jr)[0],a=Bi().memoizedState;return[o,a]},useMutableSource:xm,useSyncExternalStore:Sm,useId:Dm,unstable_isNewReconciler:!1};function af(o,a){try{var d="",v=a;do d+=fx(v),v=v.return;while(v);var S=d}catch(T){S=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:a,stack:S}}function lf(o,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Bm(o,a,d){d=$i(-1,d),d.tag=3,d.payload={element:null};var v=a.value;return d.callback=function(){Zl||(Zl=!0,Af=v),lf(o,a)},d}function zm(o,a,d){d=$i(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=a.value;d.payload=function(){return v(S)},d.callback=function(){lf(o,a)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){lf(o,a),typeof v!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var z=a.stack;this.componentDidCatch(a.value,{componentStack:z!==null?z:""})}),d}function km(o,a,d){var v=o.pingCache;if(v===null){v=o.pingCache=new xx;var S=new Set;v.set(a,S)}else S=v.get(a),S===void 0&&(S=new Set,v.set(a,S));S.has(d)||(S.add(d),o=Ux.bind(null,o,a,d),a.then(o,o))}function Hm(o){do{var a;if((a=o.tag===13)&&(a=o.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return o;o=o.return}while(o!==null);return null}function Vm(o,a,d,v,S){return(o.mode&1)===0?(o===a?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=$i(-1,1),a.tag=2,wr(d,a))),d.lanes|=1),o):(o.flags|=65536,o.lanes=S,o)}function zi(o){o.flags|=4}function Gm(o,a){if(o!==null&&o.child===a.child)return!0;if((a.flags&16)!==0)return!1;for(o=a.child;o!==null;){if((o.flags&12854)!==0||(o.subtreeFlags&12854)!==0)return!1;o=o.sibling}return!0}var jo,Jo,Dl,Ul;if(ct)jo=function(o,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)Ie(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Jo=function(){},Dl=function(o,a,d,v,S){if(o=o.memoizedProps,o!==v){var T=a.stateNode,z=Oi(di.current);d=re(T,d,o,v,S,z),(a.updateQueue=d)&&zi(a)}},Ul=function(o,a,d,v){d!==v&&zi(a)};else if(ue){jo=function(o,a,d,v){for(var S=a.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=Dt(T,S.type,S.memoizedProps,S)),Ie(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=zn(T,S.memoizedProps,S)),Ie(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),jo(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===a)break;for(;S.sibling===null;){if(S.return===null||S.return===a)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Wm=function(o,a,d,v){for(var S=a.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=Dt(T,S.type,S.memoizedProps,S)),ut(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=zn(T,S.memoizedProps,S)),ut(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),Wm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===a)break;for(;S.sibling===null;){if(S.return===null||S.return===a)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Jo=function(o,a){var d=a.stateNode;if(!Gm(o,a)){o=d.containerInfo;var v=De(o);Wm(v,a,!1,!1),d.pendingChildren=v,zi(a),Gt(o,v)}},Dl=function(o,a,d,v,S){var T=o.stateNode,z=o.memoizedProps;if((o=Gm(o,a))&&z===v)a.stateNode=T;else{var H=a.stateNode,ie=Oi(di.current),Se=null;z!==v&&(Se=re(H,d,z,v,S,ie)),o&&Se===null?a.stateNode=T:(T=Ne(T,Se,d,z,v,a,o,H),Ye(T,d,v,S,ie)&&zi(a),a.stateNode=T,o?zi(a):jo(T,a,!1,!1))}},Ul=function(o,a,d,v){d!==v?(o=Oi(Ws.current),d=Oi(di.current),a.stateNode=Le(v,o,d,a),zi(a)):a.stateNode=o.stateNode}}else Jo=function(){},Dl=function(){},Ul=function(){};function Ko(o,a){if(!Wt)switch(o.tailMode){case"hidden":a=o.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?a||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function Tn(o){var a=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(a)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,a}function Sx(o,a,d){var v=a.pendingProps;switch(qh(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(a),null;case 1:return Ut(a.type)&&Rt(),Tn(a),null;case 3:return v=a.stateNode,Xs(),we(At),we(Tt),$h(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Ho(a)?zi(a):o===null||o.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Mi!==null&&(Rf(Mi),Mi=null))),Jo(o,a),Tn(a),null;case 5:Kh(a),d=Oi(Ws.current);var S=a.type;if(o!==null&&a.stateNode!=null)Dl(o,a,S,v,d),o.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!v){if(a.stateNode===null)throw Error(l(166));return Tn(a),null}if(o=Oi(di.current),Ho(a)){if(!pe)throw Error(l(175));o=ul(a.stateNode,a.type,a.memoizedProps,d,o,a,!ko),a.updateQueue=o,o!==null&&zi(a)}else{var T=ce(S,v,d,o,a);jo(T,a,!1,!1),a.stateNode=T,Ye(T,S,v,d,o)&&zi(a)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Tn(a),null;case 6:if(o&&a.stateNode!=null)Ul(o,a,o.memoizedProps,v);else{if(typeof v!="string"&&a.stateNode===null)throw Error(l(166));if(o=Oi(Ws.current),d=Oi(di.current),Ho(a)){if(!pe)throw Error(l(176));if(o=a.stateNode,v=a.memoizedProps,(d=hl(o,v,a,!ko))&&(S=ei,S!==null))switch(T=(S.mode&1)!==0,S.tag){case 3:G(S.stateNode.containerInfo,o,v,T);break;case 5:J(S.type,S.memoizedProps,S.stateNode,o,v,T)}d&&zi(a)}else a.stateNode=Le(v,o,d,a)}return Tn(a),null;case 13:if(we(Xt),v=a.memoizedState,Wt&&ti!==null&&(a.mode&1)!==0&&(a.flags&128)===0){for(o=ti;o;)o=yr(o);return Vs(),a.flags|=98560,a}if(v!==null&&v.dehydrated!==null){if(v=Ho(a),o===null){if(!v)throw Error(l(318));if(!pe)throw Error(l(344));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));Ah(o,a)}else Vs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;return Tn(a),null}return Mi!==null&&(Rf(Mi),Mi=null),(a.flags&128)!==0?(a.lanes=d,a):(v=v!==null,d=!1,o===null?Ho(a):d=o.memoizedState!==null,v&&!d&&(a.child.flags|=8192,(a.mode&1)!==0&&(o===null||(Xt.current&1)!==0?sn===0&&(sn=3):If())),a.updateQueue!==null&&(a.flags|=4),Tn(a),null);case 4:return Xs(),Jo(o,a),o===null&&je(a.stateNode.containerInfo),Tn(a),null;case 10:return kh(a.type._context),Tn(a),null;case 17:return Ut(a.type)&&Rt(),Tn(a),null;case 19:if(we(Xt),S=a.memoizedState,S===null)return Tn(a),null;if(v=(a.flags&128)!==0,T=S.rendering,T===null)if(v)Ko(S,!1);else{if(sn!==0||o!==null&&(o.flags&128)!==0)for(o=a.child;o!==null;){if(T=Tl(o),T!==null){for(a.flags|=128,Ko(S,!1),o=T.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=d,v=a.child;v!==null;)d=v,S=o,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,S=T.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Ze(Xt,Xt.current&1|2),a.child}o=o.sibling}S.tail!==null&&un()>Tf&&(a.flags|=128,v=!0,Ko(S,!1),a.lanes=4194304)}else{if(!v)if(o=Tl(T),o!==null){if(a.flags|=128,v=!0,o=o.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),Ko(S,!0),S.tail===null&&S.tailMode==="hidden"&&!T.alternate&&!Wt)return Tn(a),null}else 2*un()-S.renderingStartTime>Tf&&d!==1073741824&&(a.flags|=128,v=!0,Ko(S,!1),a.lanes=4194304);S.isBackwards?(T.sibling=a.child,a.child=T):(o=S.last,o!==null?o.sibling=T:a.child=T,S.last=T)}return S.tail!==null?(a=S.tail,S.rendering=a,S.tail=a.sibling,S.renderingStartTime=un(),a.sibling=null,o=Xt.current,Ze(Xt,v?o&1|2:o&1),a):(Tn(a),null);case 22:case 23:return Pf(),v=a.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(a.flags|=8192),v&&(a.mode&1)!==0?(ii&1073741824)!==0&&(Tn(a),ct&&a.subtreeFlags&6&&(a.flags|=8192)):Tn(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}var Mx=c.ReactCurrentOwner,ni=!1;function Ln(o,a,d,v){a.child=o===null?_m(a,null,d,v):Gs(a,o.child,d,v)}function Xm(o,a,d,v,S){d=d.render;var T=a.ref;return zs(a,S),v=tf(o,a,d,v,T,S),d=nf(),o!==null&&!ni?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~S,ir(o,a,S)):(Wt&&d&&Xh(a),a.flags|=1,Ln(o,a,v,S),a.child)}function qm(o,a,d,v,S){if(o===null){var T=d.type;return typeof T=="function"&&!Lf(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=T,Ym(o,a,T,v,S)):(o=tc(d.type,null,v,a,a.mode,S),o.ref=a.ref,o.return=a,a.child=o)}if(T=o.child,(o.lanes&S)===0){var z=T.memoizedProps;if(d=d.compare,d=d!==null?d:gl,d(z,v)&&o.ref===a.ref)return ir(o,a,S)}return a.flags|=1,o=Cr(T,v),o.ref=a.ref,o.return=a,a.child=o}function Ym(o,a,d,v,S){if(o!==null&&gl(o.memoizedProps,v)&&o.ref===a.ref)if(ni=!1,(o.lanes&S)!==0)(o.flags&131072)!==0&&(ni=!0);else return a.lanes=o.lanes,ir(o,a,S);return cf(o,a,d,v,S)}function Zm(o,a,d){var v=a.pendingProps,S=v.children,T=o!==null?o.memoizedState:null;if(v.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null},Ze(Ys,ii),ii|=d;else if((d&1073741824)!==0)a.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,Ze(Ys,ii),ii|=v;else return o=T!==null?T.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:o,cachePool:null},a.updateQueue=null,Ze(Ys,ii),ii|=o,null;else T!==null?(v=T.baseLanes|d,a.memoizedState=null):v=d,Ze(Ys,ii),ii|=v;return Ln(o,a,S,d),a.child}function jm(o,a){var d=a.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function cf(o,a,d,v,S){var T=Ut(d)?yt:Tt.current;return T=Je(a,T),zs(a,S),d=tf(o,a,d,v,T,S),v=nf(),o!==null&&!ni?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~S,ir(o,a,S)):(Wt&&v&&Xh(a),a.flags|=1,Ln(o,a,d,S),a.child)}function Jm(o,a,d,v,S){if(Ut(d)){var T=!0;cn(a)}else T=!1;if(zs(a,S),a.stateNode===null)o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),um(a,d,v),Wh(a,d,v,S),v=!0;else if(o===null){var z=a.stateNode,H=a.memoizedProps;z.props=H;var ie=z.context,Se=d.contextType;typeof Se=="object"&&Se!==null?Se=ui(Se):(Se=Ut(d)?yt:Tt.current,Se=Je(a,Se));var Ge=d.getDerivedStateFromProps,dt=typeof Ge=="function"||typeof z.getSnapshotBeforeUpdate=="function";dt||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(H!==v||ie!==Se)&&hm(a,z,v,Se),Mr=!1;var it=a.memoizedState;z.state=it,xl(a,v,z,S),ie=a.memoizedState,H!==v||it!==ie||At.current||Mr?(typeof Ge=="function"&&(Gh(a,d,Ge,v),ie=a.memoizedState),(H=Mr||cm(a,d,H,v,it,ie,Se))?(dt||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(a.flags|=4194308)):(typeof z.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=v,a.memoizedState=ie),z.props=v,z.state=ie,z.context=Se,v=H):(typeof z.componentDidMount=="function"&&(a.flags|=4194308),v=!1)}else{z=a.stateNode,sm(o,a),H=a.memoizedProps,Se=a.type===a.elementType?H:Si(a.type,H),z.props=Se,dt=a.pendingProps,it=z.context,ie=d.contextType,typeof ie=="object"&&ie!==null?ie=ui(ie):(ie=Ut(d)?yt:Tt.current,ie=Je(a,ie));var Ht=d.getDerivedStateFromProps;(Ge=typeof Ht=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(H!==dt||it!==ie)&&hm(a,z,v,ie),Mr=!1,it=a.memoizedState,z.state=it,xl(a,v,z,S);var Qe=a.memoizedState;H!==dt||it!==Qe||At.current||Mr?(typeof Ht=="function"&&(Gh(a,d,Ht,v),Qe=a.memoizedState),(Se=Mr||cm(a,d,Se,v,it,Qe,ie)||!1)?(Ge||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(v,Qe,ie),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(v,Qe,ie)),typeof z.componentDidUpdate=="function"&&(a.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof z.componentDidUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(a.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(a.flags|=1024),a.memoizedProps=v,a.memoizedState=Qe),z.props=v,z.state=Qe,z.context=ie,v=Se):(typeof z.componentDidUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(a.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(a.flags|=1024),v=!1)}return uf(o,a,d,v,T,S)}function uf(o,a,d,v,S,T){jm(o,a);var z=(a.flags&128)!==0;if(!v&&!z)return S&&xr(a,d,!1),ir(o,a,T);v=a.stateNode,Mx.current=a;var H=z&&typeof d.getDerivedStateFromError!="function"?null:v.render();return a.flags|=1,o!==null&&z?(a.child=Gs(a,o.child,null,T),a.child=Gs(a,null,H,T)):Ln(o,a,H,T),a.memoizedState=v.state,S&&xr(a,d,!0),a.child}function Km(o){var a=o.stateNode;a.pendingContext?kn(o,a.pendingContext,a.pendingContext!==a.context):a.context&&kn(o,a.context,!1),Jh(o,a.containerInfo)}function Qm(o,a,d,v,S){return Vs(),jh(S),a.flags|=256,Ln(o,a,d,v),a.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Fl(o){return{baseLanes:o,cachePool:null}}function $m(o,a,d){var v=a.pendingProps,S=Xt.current,T=!1,z=(a.flags&128)!==0,H;if((H=z)||(H=o!==null&&o.memoizedState===null?!1:(S&2)!==0),H?(T=!0,a.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Ze(Xt,S&1),o===null)return Zh(a),o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((a.mode&1)===0?a.lanes=1:qr(o)?a.lanes=8:a.lanes=1073741824,null):(S=v.children,o=v.fallback,T?(v=a.mode,T=a.child,S={mode:"hidden",children:S},(v&1)===0&&T!==null?(T.childLanes=0,T.pendingProps=S):T=nc(S,v,0,null),o=ts(o,v,d,null),T.return=a,o.return=a,T.sibling=o,a.child=T,a.child.memoizedState=Fl(d),a.memoizedState=Nl,o):hf(a,S));if(S=o.memoizedState,S!==null){if(H=S.dehydrated,H!==null){if(z)return a.flags&256?(a.flags&=-257,Ol(o,a,d,Error(l(422)))):a.memoizedState!==null?(a.child=o.child,a.flags|=128,null):(T=v.fallback,S=a.mode,v=nc({mode:"visible",children:v.children},S,0,null),T=ts(T,S,d,null),T.flags|=2,v.return=a,T.return=a,v.sibling=T,a.child=v,(a.mode&1)!==0&&Gs(a,o.child,null,d),a.child.memoizedState=Fl(d),a.memoizedState=Nl,T);if((a.mode&1)===0)a=Ol(o,a,d,null);else if(qr(H))a=Ol(o,a,d,Error(l(419)));else if(v=(d&o.childLanes)!==0,ni||v){if(v=$t,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=(T&(v.suspendedLanes|d))!==0?0:T,v!==0&&v!==S.retryLane&&(S.retryLane=v,mi(o,v,-1))}If(),a=Ol(o,a,d,Error(l(421)))}else Li(H)?(a.flags|=128,a.child=o.child,a=Nx.bind(null,o),ll(H,a),a=null):(d=S.treeContext,pe&&(ti=Os(H),ei=a,Wt=!0,Mi=null,ko=!1,d!==null&&(hi[fi++]=er,hi[fi++]=tr,hi[fi++]=Yr,er=d.id,tr=d.overflow,Yr=a)),a=hf(a,a.pendingProps.children),a.flags|=4096);return a}return T?(v=tg(o,a,v.children,v.fallback,d),T=a.child,S=o.child.memoizedState,T.memoizedState=S===null?Fl(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,a.memoizedState=Nl,v):(d=eg(o,a,v.children,d),a.memoizedState=null,d)}return T?(v=tg(o,a,v.children,v.fallback,d),T=a.child,S=o.child.memoizedState,T.memoizedState=S===null?Fl(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,a.memoizedState=Nl,v):(d=eg(o,a,v.children,d),a.memoizedState=null,d)}function hf(o,a){return a=nc({mode:"visible",children:a},o.mode,0,null),a.return=o,o.child=a}function eg(o,a,d,v){var S=o.child;return o=S.sibling,d=Cr(S,{mode:"visible",children:d}),(a.mode&1)===0&&(d.lanes=v),d.return=a,d.sibling=null,o!==null&&(v=a.deletions,v===null?(a.deletions=[o],a.flags|=16):v.push(o)),a.child=d}function tg(o,a,d,v,S){var T=a.mode;o=o.child;var z=o.sibling,H={mode:"hidden",children:d};return(T&1)===0&&a.child!==o?(d=a.child,d.childLanes=0,d.pendingProps=H,a.deletions=null):(d=Cr(o,H),d.subtreeFlags=o.subtreeFlags&14680064),z!==null?v=Cr(z,v):(v=ts(v,T,S,null),v.flags|=2),v.return=a,d.return=a,d.sibling=v,a.child=d,v}function Ol(o,a,d,v){return v!==null&&jh(v),Gs(a,o.child,null,d),o=hf(a,a.pendingProps.children),o.flags|=2,a.memoizedState=null,o}function ng(o,a,d){o.lanes|=a;var v=o.alternate;v!==null&&(v.lanes|=a),Hh(o.return,a,d)}function ff(o,a,d,v,S){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(T.isBackwards=a,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=S)}function ig(o,a,d){var v=a.pendingProps,S=v.revealOrder,T=v.tail;if(Ln(o,a,v.children,d),v=Xt.current,(v&2)!==0)v=v&1|2,a.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=a.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&ng(o,d,a);else if(o.tag===19)ng(o,d,a);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Ze(Xt,v),(a.mode&1)===0)a.memoizedState=null;else switch(S){case"forwards":for(d=a.child,S=null;d!==null;)o=d.alternate,o!==null&&Tl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=a.child,a.child=null):(S=d.sibling,d.sibling=null),ff(a,!1,S,d,T);break;case"backwards":for(d=null,S=a.child,a.child=null;S!==null;){if(o=S.alternate,o!==null&&Tl(o)===null){a.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}ff(a,!0,d,null,T);break;case"together":ff(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ir(o,a,d){if(o!==null&&(a.dependencies=o.dependencies),Zs|=a.lanes,(d&a.childLanes)===0)return null;if(o!==null&&a.child!==o.child)throw Error(l(153));if(a.child!==null){for(o=a.child,d=Cr(o,o.pendingProps),a.child=d,d.return=a;o.sibling!==null;)o=o.sibling,d=d.sibling=Cr(o,o.pendingProps),d.return=a;d.sibling=null}return a.child}function wx(o,a,d){switch(a.tag){case 3:Km(a),Vs();break;case 5:ym(a);break;case 1:Ut(a.type)&&cn(a);break;case 4:Jh(a,a.stateNode.containerInfo);break;case 10:rm(a,a.type._context,a.memoizedProps.value);break;case 13:var v=a.memoizedState;if(v!==null)return v.dehydrated!==null?(Ze(Xt,Xt.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?$m(o,a,d):(Ze(Xt,Xt.current&1),o=ir(o,a,d),o!==null?o.sibling:null);Ze(Xt,Xt.current&1);break;case 19:if(v=(d&a.childLanes)!==0,(o.flags&128)!==0){if(v)return ig(o,a,d);a.flags|=128}var S=a.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Ze(Xt,Xt.current),v)break;return null;case 22:case 23:return a.lanes=0,Zm(o,a,d)}return ir(o,a,d)}function Ex(o,a){switch(qh(a),a.tag){case 1:return Ut(a.type)&&Rt(),o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 3:return Xs(),we(At),we(Tt),$h(),o=a.flags,(o&65536)!==0&&(o&128)===0?(a.flags=o&-65537|128,a):null;case 5:return Kh(a),null;case 13:if(we(Xt),o=a.memoizedState,o!==null&&o.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Vs()}return o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 19:return we(Xt),null;case 4:return Xs(),null;case 10:return kh(a.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Bl=!1,Jr=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function zl(o,a){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Xn(o,a,v)}else d.current=null}function df(o,a,d){try{d()}catch(v){Xn(o,a,v)}}var rg=!1;function Ax(o,a){for(ne(o.containerInfo),Pe=a;Pe!==null;)if(o=Pe,a=o.child,(o.subtreeFlags&1028)!==0&&a!==null)a.return=o,Pe=a;else for(;Pe!==null;){o=Pe;try{var d=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,T=o.stateNode,z=T.getSnapshotBeforeUpdate(o.elementType===o.type?v:Si(o.type,v),S);T.__reactInternalSnapshotBeforeUpdate=z}break;case 3:ct&&fe(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(H){Xn(o,o.return,H)}if(a=o.sibling,a!==null){a.return=o.return,Pe=a;break}Pe=o.return}return d=rg,rg=!1,d}function Kr(o,a,d){var v=a.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var T=S.destroy;S.destroy=void 0,T!==void 0&&df(a,d,T)}S=S.next}while(S!==v)}}function Qo(o,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==a)}}function pf(o){var a=o.ref;if(a!==null){var d=o.stateNode;switch(o.tag){case 5:o=$(d);break;default:o=d}typeof a=="function"?a(o):a.current=o}}function sg(o,a,d){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(pl,a)}catch{}switch(a.tag){case 0:case 11:case 14:case 15:if(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,T=S.destroy;S=S.tag,T!==void 0&&((S&2)!==0||(S&4)!==0)&&df(a,d,T),v=v.next}while(v!==o)}break;case 1:if(zl(a,d),o=a.stateNode,typeof o.componentWillUnmount=="function")try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(z){Xn(a,d,z)}break;case 5:zl(a,d);break;case 4:ct?hg(o,a,d):ue&&ue&&(a=a.stateNode.containerInfo,d=De(a),nn(a,d))}}function og(o,a,d){for(var v=a;;)if(sg(o,v,d),v.child===null||ct&&v.tag===4){if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function ag(o){var a=o.alternate;a!==null&&(o.alternate=null,ag(a)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(a=o.stateNode,a!==null&&Be(a)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function lg(o){return o.tag===5||o.tag===3||o.tag===4}function cg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||lg(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function ug(o){if(ct){e:{for(var a=o.return;a!==null;){if(lg(a))break e;a=a.return}throw Error(l(160))}var d=a;switch(d.tag){case 5:a=d.stateNode,d.flags&32&&(ft(a),d.flags&=-33),d=cg(o),gf(o,d,a);break;case 3:case 4:a=d.stateNode.containerInfo,d=cg(o),mf(o,d,a);break;default:throw Error(l(161))}}}function mf(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?lt(d,o,a):Oe(d,o);else if(v!==4&&(o=o.child,o!==null))for(mf(o,a,d),o=o.sibling;o!==null;)mf(o,a,d),o=o.sibling}function gf(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?rt(d,o,a):Ce(d,o);else if(v!==4&&(o=o.child,o!==null))for(gf(o,a,d),o=o.sibling;o!==null;)gf(o,a,d),o=o.sibling}function hg(o,a,d){for(var v=a,S=!1,T,z;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(l(160));switch(T=S.stateNode,S.tag){case 5:z=!1;break e;case 3:T=T.containerInfo,z=!0;break e;case 4:T=T.containerInfo,z=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)og(o,v,d),z?bt(T,v.stateNode):Ve(T,v.stateNode);else if(v.tag===18)z?Ph(T,v.stateNode):Rh(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,z=!0,v.child.return=v,v=v.child;continue}}else if(sg(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function vf(o,a){if(ct){switch(a.tag){case 0:case 11:case 14:case 15:Kr(3,a,a.return),Qo(3,a),Kr(5,a,a.return);return;case 1:return;case 5:var d=a.stateNode;if(d!=null){var v=a.memoizedProps;o=o!==null?o.memoizedProps:v;var S=a.type,T=a.updateQueue;a.updateQueue=null,T!==null&&He(d,T,S,o,v,a)}return;case 6:if(a.stateNode===null)throw Error(l(162));d=a.memoizedProps,Et(a.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:pe&&o!==null&&o.memoizedState.isDehydrated&&fl(a.stateNode.containerInfo);return;case 12:return;case 13:kl(a);return;case 19:kl(a);return;case 17:return}throw Error(l(163))}switch(a.tag){case 0:case 11:case 14:case 15:Kr(3,a,a.return),Qo(3,a),Kr(5,a,a.return);return;case 12:return;case 13:kl(a);return;case 19:kl(a);return;case 3:pe&&o!==null&&o.memoizedState.isDehydrated&&fl(a.stateNode.containerInfo);break;case 22:case 23:return}e:if(ue){switch(a.tag){case 1:case 5:case 6:break e;case 3:case 4:a=a.stateNode,nn(a.containerInfo,a.pendingChildren);break e}throw Error(l(163))}}function kl(o){var a=o.updateQueue;if(a!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Tx),a.forEach(function(v){var S=Fx.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function bx(o,a){for(Pe=a;Pe!==null;){a=Pe;var d=a.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var T=o;ct?hg(T,S,a):og(T,S,a);var z=S.alternate;z!==null&&(z.return=null),S.return=null}catch(Ke){Xn(S,a,Ke)}}if(d=a.child,(a.subtreeFlags&12854)!==0&&d!==null)d.return=a,Pe=d;else for(;Pe!==null;){a=Pe;try{var H=a.flags;if(H&32&&ct&&ft(a.stateNode),H&512){var ie=a.alternate;if(ie!==null){var Se=ie.ref;Se!==null&&(typeof Se=="function"?Se(null):Se.current=null)}}if(H&8192)switch(a.tag){case 13:if(a.memoizedState!==null){var Ge=a.alternate;(Ge===null||Ge.memoizedState===null)&&(Ef=un())}break;case 22:var dt=a.memoizedState!==null,it=a.alternate,Ht=it!==null&&it.memoizedState!==null;if(d=a,ct){e:if(v=d,S=dt,T=null,ct)for(var Qe=v;;){if(Qe.tag===5){if(T===null){T=Qe;var An=Qe.stateNode;S?zt(An):Re(Qe.stateNode,Qe.memoizedProps)}}else if(Qe.tag===6){if(T===null){var vi=Qe.stateNode;S?V(vi):se(vi,Qe.memoizedProps)}}else if((Qe.tag!==22&&Qe.tag!==23||Qe.memoizedState===null||Qe===v)&&Qe.child!==null){Qe.child.return=Qe,Qe=Qe.child;continue}if(Qe===v)break;for(;Qe.sibling===null;){if(Qe.return===null||Qe.return===v)break e;T===Qe&&(T=null),Qe=Qe.return}T===Qe&&(T=null),Qe.sibling.return=Qe.return,Qe=Qe.sibling}}if(dt&&!Ht&&(d.mode&1)!==0){Pe=d;for(var j=d.child;j!==null;){for(d=Pe=j;Pe!==null;){v=Pe;var X=v.child;switch(v.tag){case 0:case 11:case 14:case 15:Kr(4,v,v.return);break;case 1:zl(v,v.return);var ee=v.stateNode;if(typeof ee.componentWillUnmount=="function"){var Ue=v.return;try{ee.props=v.memoizedProps,ee.state=v.memoizedState,ee.componentWillUnmount()}catch(Ke){Xn(v,Ue,Ke)}}break;case 5:zl(v,v.return);break;case 22:if(v.memoizedState!==null){pg(d);continue}}X!==null?(X.return=v,Pe=X):pg(d)}j=j.sibling}}}switch(H&4102){case 2:ug(a),a.flags&=-3;break;case 6:ug(a),a.flags&=-3,vf(a.alternate,a);break;case 4096:a.flags&=-4097;break;case 4100:a.flags&=-4097,vf(a.alternate,a);break;case 4:vf(a.alternate,a)}}catch(Ke){Xn(a,a.return,Ke)}if(d=a.sibling,d!==null){d.return=a.return,Pe=d;break}Pe=a.return}}}function Cx(o,a,d){Pe=o,fg(o)}function fg(o,a,d){for(var v=(o.mode&1)!==0;Pe!==null;){var S=Pe,T=S.child;if(S.tag===22&&v){var z=S.memoizedState!==null||Bl;if(!z){var H=S.alternate,ie=H!==null&&H.memoizedState!==null||Jr;H=Bl;var Se=Jr;if(Bl=z,(Jr=ie)&&!Se)for(Pe=S;Pe!==null;)z=Pe,ie=z.child,z.tag===22&&z.memoizedState!==null?mg(S):ie!==null?(ie.return=z,Pe=ie):mg(S);for(;T!==null;)Pe=T,fg(T),T=T.sibling;Pe=S,Bl=H,Jr=Se}dg(o)}else(S.subtreeFlags&8772)!==0&&T!==null?(T.return=S,Pe=T):dg(o)}}function dg(o){for(;Pe!==null;){var a=Pe;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Jr||Qo(5,a);break;case 1:var v=a.stateNode;if(a.flags&4&&!Jr)if(d===null)v.componentDidMount();else{var S=a.elementType===a.type?d.memoizedProps:Si(a.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=a.updateQueue;T!==null&&am(a,T,v);break;case 3:var z=a.updateQueue;if(z!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=$(a.child.stateNode);break;case 1:d=a.child.stateNode}am(a,z,d)}break;case 5:var H=a.stateNode;d===null&&a.flags&4&&ye(H,a.type,a.memoizedProps,a);break;case 6:break;case 4:break;case 12:break;case 13:if(pe&&a.memoizedState===null){var ie=a.alternate;if(ie!==null){var Se=ie.memoizedState;if(Se!==null){var Ge=Se.dehydrated;Ge!==null&&Ch(Ge)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(l(163))}Jr||a.flags&512&&pf(a)}catch(dt){Xn(a,a.return,dt)}}if(a===o){Pe=null;break}if(d=a.sibling,d!==null){d.return=a.return,Pe=d;break}Pe=a.return}}function pg(o){for(;Pe!==null;){var a=Pe;if(a===o){Pe=null;break}var d=a.sibling;if(d!==null){d.return=a.return,Pe=d;break}Pe=a.return}}function mg(o){for(;Pe!==null;){var a=Pe;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Qo(4,a)}catch(ie){Xn(a,d,ie)}break;case 1:var v=a.stateNode;if(typeof v.componentDidMount=="function"){var S=a.return;try{v.componentDidMount()}catch(ie){Xn(a,S,ie)}}var T=a.return;try{pf(a)}catch(ie){Xn(a,T,ie)}break;case 5:var z=a.return;try{pf(a)}catch(ie){Xn(a,z,ie)}}}catch(ie){Xn(a,a.return,ie)}if(a===o){Pe=null;break}var H=a.sibling;if(H!==null){H.return=a.return,Pe=H;break}Pe=a.return}}var Hl=0,Vl=1,Gl=2,Wl=3,Xl=4;if(typeof Symbol=="function"&&Symbol.for){var $o=Symbol.for;Hl=$o("selector.component"),Vl=$o("selector.has_pseudo_class"),Gl=$o("selector.role"),Wl=$o("selector.test_id"),Xl=$o("selector.text")}function _f(o){var a=B(o);if(a!=null){if(typeof a.memoizedProps["data-testname"]!="string")throw Error(l(364));return a}if(o=F(o),o===null)throw Error(l(362));return o.stateNode.current}function yf(o,a){switch(a.$$typeof){case Hl:if(o.type===a.value)return!0;break;case Vl:e:{a=a.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],T=a[S];if(v.tag!==5||!oe(v)){for(;T!=null&&yf(v,T);)S++,T=a[S];if(S===a.length){a=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}a=!1}return a;case Gl:if(o.tag===5&&de(o.stateNode,a.value))return!0;break;case Xl:if((o.tag===5||o.tag===6)&&(o=Z(o),o!==null&&0<=o.indexOf(a.value)))return!0;break;case Wl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===a.value.toLowerCase()))return!0;break;default:throw Error(l(365))}return!1}function xf(o){switch(o.$$typeof){case Hl:return"<"+(D(o.value)||"Unknown")+">";case Vl:return":has("+(xf(o)||"")+")";case Gl:return'[role="'+o.value+'"]';case Xl:return'"'+o.value+'"';case Wl:return'[data-testname="'+o.value+'"]';default:throw Error(l(365))}}function gg(o,a){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],T=o[v++],z=a[T];if(S.tag!==5||!oe(S)){for(;z!=null&&yf(S,z);)T++,z=a[T];if(T===a.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,T),S=S.sibling}}return d}function Sf(o,a){if(!Te)throw Error(l(363));o=_f(o),o=gg(o,a),a=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)oe(v)||a.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return a}var Rx=Math.ceil,ql=c.ReactCurrentDispatcher,Mf=c.ReactCurrentOwner,Jt=c.ReactCurrentBatchConfig,Mt=0,$t=null,en=null,_n=0,ii=0,Ys=et(0),sn=0,ea=null,Zs=0,Yl=0,wf=0,ta=null,Gn=null,Ef=0,Tf=1/0;function js(){Tf=un()+500}var Zl=!1,Af=null,Er=null,jl=!1,Tr=null,Jl=0,na=0,bf=null,Kl=-1,Ql=0;function Dn(){return(Mt&6)!==0?un():Kl!==-1?Kl:Kl=un()}function Ar(o){return(o.mode&1)===0?1:(Mt&2)!==0&&_n!==0?_n&-_n:hx.transition!==null?(Ql===0&&(o=rn,rn<<=1,(rn&4194240)===0&&(rn=64),Ql=o),Ql):(o=Nt,o!==0?o:_e())}function mi(o,a,d){if(50<na)throw na=0,bf=null,Error(l(185));var v=$l(o,a);return v===null?null:(zo(v,a,d),((Mt&2)===0||v!==$t)&&(v===$t&&((Mt&2)===0&&(Yl|=a),sn===4&&br(v,_n)),Wn(v,d),a===1&&Mt===0&&(o.mode&1)===0&&(js(),ml&&Ni())),v)}function $l(o,a){o.lanes|=a;var d=o.alternate;for(d!==null&&(d.lanes|=a),d=o,o=o.return;o!==null;)o.childLanes|=a,d=o.alternate,d!==null&&(d.childLanes|=a),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Wn(o,a){var d=o.callbackNode;nx(o,a);var v=dl(o,o===$t?_n:0);if(v===0)d!==null&&nm(d),o.callbackNode=null,o.callbackPriority=0;else if(a=v&-v,o.callbackPriority!==a){if(d!=null&&nm(d),a===1)o.tag===0?ux(_g.bind(null,o)):im(_g.bind(null,o)),Me?ot(function(){Mt===0&&Ni()}):Uh(Nh,Ni),d=null;else{switch(tm(v)){case 1:d=Nh;break;case 4:d=ox;break;case 16:d=Fh;break;case 536870912:d=ax;break;default:d=Fh}d=bg(d,vg.bind(null,o))}o.callbackPriority=a,o.callbackNode=d}}function vg(o,a){if(Kl=-1,Ql=0,(Mt&6)!==0)throw Error(l(327));var d=o.callbackNode;if(es()&&o.callbackNode!==d)return null;var v=dl(o,o===$t?_n:0);if(v===0)return null;if((v&30)!==0||(v&o.expiredLanes)!==0||a)a=ec(o,v);else{a=v;var S=Mt;Mt|=2;var T=Sg();($t!==o||_n!==a)&&(js(),Qr(o,a));do try{Lx();break}catch(H){xg(o,H)}while(!0);zh(),ql.current=T,Mt=S,en!==null?a=0:($t=null,_n=0,a=sn)}if(a!==0){if(a===2&&(S=Ih(o),S!==0&&(v=S,a=Cf(o,S))),a===1)throw d=ea,Qr(o,0),br(o,v),Wn(o,un()),d;if(a===6)br(o,v);else{if(S=o.current.alternate,(v&30)===0&&!Px(S)&&(a=ec(o,v),a===2&&(T=Ih(o),T!==0&&(v=T,a=Cf(o,T))),a===1))throw d=ea,Qr(o,0),br(o,v),Wn(o,un()),d;switch(o.finishedWork=S,o.finishedLanes=v,a){case 0:case 1:throw Error(l(345));case 2:$r(o,Gn);break;case 3:if(br(o,v),(v&130023424)===v&&(a=Ef+500-un(),10<a)){if(dl(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Dn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=xe($r.bind(null,o,Gn),a);break}$r(o,Gn);break;case 4:if(br(o,v),(v&4194240)===v)break;for(a=o.eventTimes,S=-1;0<v;){var z=31-Ct(v);T=1<<z,z=a[z],z>S&&(S=z),v&=~T}if(v=S,v=un()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*Rx(v/1960))-v,10<v){o.timeoutHandle=xe($r.bind(null,o,Gn),v);break}$r(o,Gn);break;case 5:$r(o,Gn);break;default:throw Error(l(329))}}}return Wn(o,un()),o.callbackNode===d?vg.bind(null,o):null}function Cf(o,a){var d=ta;return o.current.memoizedState.isDehydrated&&(Qr(o,a).flags|=256),o=ec(o,a),o!==2&&(a=Gn,Gn=d,a!==null&&Rf(a)),o}function Rf(o){Gn===null?Gn=o:Gn.push.apply(Gn,o)}function Px(o){for(var a=o;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],T=S.getSnapshot;S=S.value;try{if(!Ui(T(),S))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function br(o,a){for(a&=~wf,a&=~Yl,o.suspendedLanes|=a,o.pingedLanes&=~a,o=o.expirationTimes;0<a;){var d=31-Ct(a),v=1<<d;o[d]=-1,a&=~v}}function _g(o){if((Mt&6)!==0)throw Error(l(327));es();var a=dl(o,0);if((a&1)===0)return Wn(o,un()),null;var d=ec(o,a);if(o.tag!==0&&d===2){var v=Ih(o);v!==0&&(a=v,d=Cf(o,v))}if(d===1)throw d=ea,Qr(o,0),br(o,a),Wn(o,un()),d;if(d===6)throw Error(l(345));return o.finishedWork=o.current.alternate,o.finishedLanes=a,$r(o,Gn),Wn(o,un()),null}function yg(o){Tr!==null&&Tr.tag===0&&(Mt&6)===0&&es();var a=Mt;Mt|=1;var d=Jt.transition,v=Nt;try{if(Jt.transition=null,Nt=1,o)return o()}finally{Nt=v,Jt.transition=d,Mt=a,(Mt&6)===0&&Ni()}}function Pf(){ii=Ys.current,we(Ys)}function Qr(o,a){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==st&&(o.timeoutHandle=st,$e(d)),en!==null)for(d=en.return;d!==null;){var v=d;switch(qh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Rt();break;case 3:Xs(),we(At),we(Tt),$h();break;case 5:Kh(v);break;case 4:Xs();break;case 13:we(Xt);break;case 19:we(Xt);break;case 10:kh(v.type._context);break;case 22:case 23:Pf()}d=d.return}if($t=o,en=o=Cr(o.current,null),_n=ii=a,sn=0,ea=null,wf=Yl=Zs=0,Gn=ta=null,Fi!==null){for(a=0;a<Fi.length;a++)if(d=Fi[a],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,T=d.pending;if(T!==null){var z=T.next;T.next=S,v.next=z}d.pending=v}Fi=null}return o}function xg(o,a){do{var d=en;try{if(zh(),Al.current=Ll,bl){for(var v=Yt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}bl=!1}if(qs=0,hn=wn=Yt=null,Xo=!1,qo=0,Mf.current=null,d===null||d.return===null){sn=1,ea=a,en=null;break}e:{var T=o,z=d.return,H=d,ie=a;if(a=_n,H.flags|=32768,ie!==null&&typeof ie=="object"&&typeof ie.then=="function"){var Se=ie,Ge=H,dt=Ge.tag;if((Ge.mode&1)===0&&(dt===0||dt===11||dt===15)){var it=Ge.alternate;it?(Ge.updateQueue=it.updateQueue,Ge.memoizedState=it.memoizedState,Ge.lanes=it.lanes):(Ge.updateQueue=null,Ge.memoizedState=null)}var Ht=Hm(z);if(Ht!==null){Ht.flags&=-257,Vm(Ht,z,H,T,a),Ht.mode&1&&km(T,Se,a),a=Ht,ie=Se;var Qe=a.updateQueue;if(Qe===null){var An=new Set;An.add(ie),a.updateQueue=An}else Qe.add(ie);break e}else{if((a&1)===0){km(T,Se,a),If();break e}ie=Error(l(426))}}else if(Wt&&H.mode&1){var vi=Hm(z);if(vi!==null){(vi.flags&65536)===0&&(vi.flags|=256),Vm(vi,z,H,T,a),jh(ie);break e}}T=ie,sn!==4&&(sn=2),ta===null?ta=[T]:ta.push(T),ie=af(ie,H),H=z;do{switch(H.tag){case 3:H.flags|=65536,a&=-a,H.lanes|=a;var j=Bm(H,ie,a);om(H,j);break e;case 1:T=ie;var X=H.type,ee=H.stateNode;if((H.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Er===null||!Er.has(ee)))){H.flags|=65536,a&=-a,H.lanes|=a;var Ue=zm(H,T,a);om(H,Ue);break e}}H=H.return}while(H!==null)}wg(d)}catch(Ke){a=Ke,en===d&&d!==null&&(en=d=d.return);continue}break}while(!0)}function Sg(){var o=ql.current;return ql.current=Ll,o===null?Ll:o}function If(){(sn===0||sn===3||sn===2)&&(sn=4),$t===null||(Zs&268435455)===0&&(Yl&268435455)===0||br($t,_n)}function ec(o,a){var d=Mt;Mt|=2;var v=Sg();$t===o&&_n===a||Qr(o,a);do try{Ix();break}catch(S){xg(o,S)}while(!0);if(zh(),Mt=d,ql.current=v,en!==null)throw Error(l(261));return $t=null,_n=0,sn}function Ix(){for(;en!==null;)Mg(en)}function Lx(){for(;en!==null&&!rx();)Mg(en)}function Mg(o){var a=Ag(o.alternate,o,ii);o.memoizedProps=o.pendingProps,a===null?wg(o):en=a,Mf.current=null}function wg(o){var a=o;do{var d=a.alternate;if(o=a.return,(a.flags&32768)===0){if(d=Sx(d,a,ii),d!==null){en=d;return}}else{if(d=Ex(d,a),d!==null){d.flags&=32767,en=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{sn=6,en=null;return}}if(a=a.sibling,a!==null){en=a;return}en=a=o}while(a!==null);sn===0&&(sn=5)}function $r(o,a){var d=Nt,v=Jt.transition;try{Jt.transition=null,Nt=1,Dx(o,a,d)}finally{Jt.transition=v,Nt=d}return null}function Dx(o,a,d){do es();while(Tr!==null);if((Mt&6)!==0)throw Error(l(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(l(177));o.callbackNode=null,o.callbackPriority=0;var T=v.lanes|v.childLanes;if(ix(o,T),o===$t&&(en=$t=null,_n=0),(v.subtreeFlags&2064)===0&&(v.flags&2064)===0||jl||(jl=!0,bg(Fh,function(){return es(),null})),T=(v.flags&15990)!==0,(v.subtreeFlags&15990)!==0||T){T=Jt.transition,Jt.transition=null;var z=Nt;Nt=1;var H=Mt;Mt|=4,Mf.current=null,Ax(o,v),bx(o,v),te(o.containerInfo),o.current=v,Cx(v),sx(),Mt=H,Nt=z,Jt.transition=T}else o.current=v;if(jl&&(jl=!1,Tr=o,Jl=S),T=o.pendingLanes,T===0&&(Er=null),lx(v.stateNode),Wn(o,un()),a!==null)for(d=o.onRecoverableError,v=0;v<a.length;v++)d(a[v]);if(Zl)throw Zl=!1,o=Af,Af=null,o;return(Jl&1)!==0&&o.tag!==0&&es(),T=o.pendingLanes,(T&1)!==0?o===bf?na++:(na=0,bf=o):na=0,Ni(),null}function es(){if(Tr!==null){var o=tm(Jl),a=Jt.transition,d=Nt;try{if(Jt.transition=null,Nt=16>o?16:o,Tr===null)var v=!1;else{if(o=Tr,Tr=null,Jl=0,(Mt&6)!==0)throw Error(l(331));var S=Mt;for(Mt|=4,Pe=o.current;Pe!==null;){var T=Pe,z=T.child;if((Pe.flags&16)!==0){var H=T.deletions;if(H!==null){for(var ie=0;ie<H.length;ie++){var Se=H[ie];for(Pe=Se;Pe!==null;){var Ge=Pe;switch(Ge.tag){case 0:case 11:case 15:Kr(8,Ge,T)}var dt=Ge.child;if(dt!==null)dt.return=Ge,Pe=dt;else for(;Pe!==null;){Ge=Pe;var it=Ge.sibling,Ht=Ge.return;if(ag(Ge),Ge===Se){Pe=null;break}if(it!==null){it.return=Ht,Pe=it;break}Pe=Ht}}}var Qe=T.alternate;if(Qe!==null){var An=Qe.child;if(An!==null){Qe.child=null;do{var vi=An.sibling;An.sibling=null,An=vi}while(An!==null)}}Pe=T}}if((T.subtreeFlags&2064)!==0&&z!==null)z.return=T,Pe=z;else e:for(;Pe!==null;){if(T=Pe,(T.flags&2048)!==0)switch(T.tag){case 0:case 11:case 15:Kr(9,T,T.return)}var j=T.sibling;if(j!==null){j.return=T.return,Pe=j;break e}Pe=T.return}}var X=o.current;for(Pe=X;Pe!==null;){z=Pe;var ee=z.child;if((z.subtreeFlags&2064)!==0&&ee!==null)ee.return=z,Pe=ee;else e:for(z=X;Pe!==null;){if(H=Pe,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Qo(9,H)}}catch(Ke){Xn(H,H.return,Ke)}if(H===z){Pe=null;break e}var Ue=H.sibling;if(Ue!==null){Ue.return=H.return,Pe=Ue;break e}Pe=H.return}}if(Mt=S,Ni(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(pl,o)}catch{}v=!0}return v}finally{Nt=d,Jt.transition=a}}return!1}function Eg(o,a,d){a=af(d,a),a=Bm(o,a,1),wr(o,a),a=Dn(),o=$l(o,1),o!==null&&(zo(o,1,a),Wn(o,a))}function Xn(o,a,d){if(o.tag===3)Eg(o,o,d);else for(;a!==null;){if(a.tag===3){Eg(a,o,d);break}else if(a.tag===1){var v=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v))){o=af(d,o),o=zm(a,o,1),wr(a,o),o=Dn(),a=$l(a,1),a!==null&&(zo(a,1,o),Wn(a,o));break}}a=a.return}}function Ux(o,a,d){var v=o.pingCache;v!==null&&v.delete(a),a=Dn(),o.pingedLanes|=o.suspendedLanes&d,$t===o&&(_n&d)===d&&(sn===4||sn===3&&(_n&130023424)===_n&&500>un()-Ef?Qr(o,0):wf|=d),Wn(o,a)}function Tg(o,a){a===0&&((o.mode&1)===0?a=1:(a=Sr,Sr<<=1,(Sr&130023424)===0&&(Sr=4194304)));var d=Dn();o=$l(o,a),o!==null&&(zo(o,a,d),Wn(o,d))}function Nx(o){var a=o.memoizedState,d=0;a!==null&&(d=a.retryLane),Tg(o,d)}function Fx(o,a){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(l(314))}v!==null&&v.delete(a),Tg(o,d)}var Ag;Ag=function(o,a,d){if(o!==null)if(o.memoizedProps!==a.pendingProps||At.current)ni=!0;else{if((o.lanes&d)===0&&(a.flags&128)===0)return ni=!1,wx(o,a,d);ni=(o.flags&131072)!==0}else ni=!1,Wt&&(a.flags&1048576)!==0&&fm(a,wl,a.index);switch(a.lanes=0,a.tag){case 2:var v=a.type;o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps;var S=Je(a,Tt.current);zs(a,d),S=tf(null,a,v,o,S,d);var T=nf();return a.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ut(v)?(T=!0,cn(a)):T=!1,a.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,Vh(a),S.updater=Sl,a.stateNode=S,S._reactInternals=a,Wh(a,v,o,d),a=uf(null,a,v,!0,T,d)):(a.tag=0,Wt&&T&&Xh(a),Ln(null,a,S,d),a=a.child),a;case 16:v=a.elementType;e:{switch(o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps,S=v._init,v=S(v._payload),a.type=v,S=a.tag=Bx(v),o=Si(v,o),S){case 0:a=cf(null,a,v,o,d);break e;case 1:a=Jm(null,a,v,o,d);break e;case 11:a=Xm(null,a,v,o,d);break e;case 14:a=qm(null,a,v,Si(v.type,o),d);break e}throw Error(l(306,v,""))}return a;case 0:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:Si(v,S),cf(o,a,v,S,d);case 1:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:Si(v,S),Jm(o,a,v,S,d);case 3:e:{if(Km(a),o===null)throw Error(l(387));v=a.pendingProps,T=a.memoizedState,S=T.element,sm(o,a),xl(a,v,null,d);var z=a.memoizedState;if(v=z.element,pe&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:z.cache,transitions:z.transitions},a.updateQueue.baseState=T,a.memoizedState=T,a.flags&256){S=Error(l(423)),a=Qm(o,a,v,d,S);break e}else if(v!==S){S=Error(l(424)),a=Qm(o,a,v,d,S);break e}else for(pe&&(ti=cl(a.stateNode.containerInfo),ei=a,Wt=!0,Mi=null,ko=!1),d=_m(a,null,v,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Vs(),v===S){a=ir(o,a,d);break e}Ln(o,a,v,d)}a=a.child}return a;case 5:return ym(a),o===null&&Zh(a),v=a.type,S=a.pendingProps,T=o!==null?o.memoizedProps:null,z=S.children,ve(v,S)?z=null:T!==null&&ve(v,T)&&(a.flags|=32),jm(o,a),Ln(o,a,z,d),a.child;case 6:return o===null&&Zh(a),null;case 13:return $m(o,a,d);case 4:return Jh(a,a.stateNode.containerInfo),v=a.pendingProps,o===null?a.child=Gs(a,null,v,d):Ln(o,a,v,d),a.child;case 11:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:Si(v,S),Xm(o,a,v,S,d);case 7:return Ln(o,a,a.pendingProps,d),a.child;case 8:return Ln(o,a,a.pendingProps.children,d),a.child;case 12:return Ln(o,a,a.pendingProps.children,d),a.child;case 10:e:{if(v=a.type._context,S=a.pendingProps,T=a.memoizedProps,z=S.value,rm(a,v,z),T!==null)if(Ui(T.value,z)){if(T.children===S.children&&!At.current){a=ir(o,a,d);break e}}else for(T=a.child,T!==null&&(T.return=a);T!==null;){var H=T.dependencies;if(H!==null){z=T.child;for(var ie=H.firstContext;ie!==null;){if(ie.context===v){if(T.tag===1){ie=$i(-1,d&-d),ie.tag=2;var Se=T.updateQueue;if(Se!==null){Se=Se.shared;var Ge=Se.pending;Ge===null?ie.next=ie:(ie.next=Ge.next,Ge.next=ie),Se.pending=ie}}T.lanes|=d,ie=T.alternate,ie!==null&&(ie.lanes|=d),Hh(T.return,d,a),H.lanes|=d;break}ie=ie.next}}else if(T.tag===10)z=T.type===a.type?null:T.child;else if(T.tag===18){if(z=T.return,z===null)throw Error(l(341));z.lanes|=d,H=z.alternate,H!==null&&(H.lanes|=d),Hh(z,d,a),z=T.sibling}else z=T.child;if(z!==null)z.return=T;else for(z=T;z!==null;){if(z===a){z=null;break}if(T=z.sibling,T!==null){T.return=z.return,z=T;break}z=z.return}T=z}Ln(o,a,S.children,d),a=a.child}return a;case 9:return S=a.type,v=a.pendingProps.children,zs(a,d),S=ui(S),v=v(S),a.flags|=1,Ln(o,a,v,d),a.child;case 14:return v=a.type,S=Si(v,a.pendingProps),S=Si(v.type,S),qm(o,a,v,S,d);case 15:return Ym(o,a,a.type,a.pendingProps,d);case 17:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:Si(v,S),o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),a.tag=1,Ut(v)?(o=!0,cn(a)):o=!1,zs(a,d),um(a,v,S),Wh(a,v,S,d),uf(null,a,v,!0,o,d);case 19:return ig(o,a,d);case 22:return Zm(o,a,d)}throw Error(l(156,a.tag))};function bg(o,a){return Uh(o,a)}function Ox(o,a,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(o,a,d,v){return new Ox(o,a,d,v)}function Lf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Bx(o){if(typeof o=="function")return Lf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Cr(o,a){var d=o.alternate;return d===null?(d=gi(o.tag,a,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=a,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,a=o.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function tc(o,a,d,v,S,T){var z=2;if(v=o,typeof o=="function")Lf(o)&&(z=1);else if(typeof o=="string")z=5;else e:switch(o){case f:return ts(d.children,S,T,a);case p:z=8,S|=8;break;case m:return o=gi(12,d,a,S|2),o.elementType=m,o.lanes=T,o;case x:return o=gi(13,d,a,S),o.elementType=x,o.lanes=T,o;case _:return o=gi(19,d,a,S),o.elementType=_,o.lanes=T,o;case A:return nc(d,S,T,a);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:z=10;break e;case y:z=9;break e;case M:z=11;break e;case E:z=14;break e;case w:z=16,v=null;break e}throw Error(l(130,o==null?o:typeof o,""))}return a=gi(z,d,a,S),a.elementType=o,a.type=v,a.lanes=T,a}function ts(o,a,d,v){return o=gi(7,o,v,a),o.lanes=d,o}function nc(o,a,d,v){return o=gi(22,o,v,a),o.elementType=A,o.lanes=d,o.stateNode={},o}function Df(o,a,d){return o=gi(6,o,null,a),o.lanes=d,o}function Uf(o,a,d){return a=gi(4,o.children!==null?o.children:[],o.key,a),a.lanes=d,a.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},a}function zx(o,a,d,v,S){this.tag=a,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=st,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lh(0),this.expirationTimes=Lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lh(0),this.identifierPrefix=v,this.onRecoverableError=S,pe&&(this.mutableSourceEagerHydrationData=null)}function Cg(o,a,d,v,S,T,z,H,ie){return o=new zx(o,a,d,H,ie),a===1?(a=1,T===!0&&(a|=8)):a=0,T=gi(3,null,null,a),o.current=T,T.stateNode=o,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},Vh(T),o}function Rg(o){if(!o)return St;o=o._reactInternals;e:{if(C(o)!==o||o.tag!==1)throw Error(l(170));var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ut(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(o.tag===1){var d=o.type;if(Ut(d))return Ki(o,d,a)}return a}function Pg(o){var a=o._reactInternals;if(a===void 0)throw typeof o.render=="function"?Error(l(188)):(o=Object.keys(o).join(","),Error(l(268,o)));return o=q(a),o===null?null:o.stateNode}function Ig(o,a){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<a?d:a}}function Nf(o,a){Ig(o,a),(o=o.alternate)&&Ig(o,a)}function kx(o){return o=q(o),o===null?null:o.stateNode}function Hx(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var a=Dn();mi(o,134217728,a),Nf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var a=Dn(),d=Ar(o);mi(o,d,a),Nf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var a=o.stateNode;if(a.current.memoizedState.isDehydrated){var d=$n(a.pendingLanes);d!==0&&(Dh(a,d|1),Wn(a,un()),(Mt&6)===0&&(js(),Ni()))}break;case 13:var v=Dn();yg(function(){return mi(o,1,v)}),Nf(o,1)}},t.batchedUpdates=function(o,a){var d=Mt;Mt|=1;try{return o(a)}finally{Mt=d,Mt===0&&(js(),ml&&Ni())}},t.createComponentSelector=function(o){return{$$typeof:Hl,value:o}},t.createContainer=function(o,a,d,v,S,T,z){return Cg(o,a,!1,null,d,v,S,T,z)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Vl,value:o}},t.createHydrationContainer=function(o,a,d,v,S,T,z,H,ie){return o=Cg(d,v,!0,o,S,T,z,H,ie),o.context=Rg(null),d=o.current,v=Dn(),S=Ar(d),T=$i(v,S),T.callback=a??null,wr(d,T),o.current.lanes=S,zo(o,S,v),Wn(o,v),o},t.createPortal=function(o,a,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:a,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:Gl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:Wl,value:o}},t.createTextSelector=function(o){return{$$typeof:Xl,value:o}},t.deferredUpdates=function(o){var a=Nt,d=Jt.transition;try{return Jt.transition=null,Nt=16,o()}finally{Nt=a,Jt.transition=d}},t.discreteUpdates=function(o,a,d,v,S){var T=Nt,z=Jt.transition;try{return Jt.transition=null,Nt=1,o(a,d,v,S)}finally{Nt=T,Jt.transition=z,Mt===0&&js()}},t.findAllNodes=Sf,t.findBoundingRects=function(o,a){if(!Te)throw Error(l(363));a=Sf(o,a),o=[];for(var d=0;d<a.length;d++)o.push(R(a[d]));for(a=o.length-1;0<a;a--){d=o[a];for(var v=d.x,S=v+d.width,T=d.y,z=T+d.height,H=a-1;0<=H;H--)if(a!==H){var ie=o[H],Se=ie.x,Ge=Se+ie.width,dt=ie.y,it=dt+ie.height;if(v>=Se&&T>=dt&&S<=Ge&&z<=it){o.splice(a,1);break}else if(v!==Se||d.width!==ie.width||it<T||dt>z){if(!(T!==dt||d.height!==ie.height||Ge<v||Se>S)){Se>v&&(ie.width+=Se-v,ie.x=v),Ge<S&&(ie.width=S-Se),o.splice(a,1);break}}else{dt>T&&(ie.height+=dt-T,ie.y=T),it<z&&(ie.height=z-dt),o.splice(a,1);break}}}return o},t.findHostInstance=Pg,t.findHostInstanceWithNoPortals=function(o){return o=N(o),o=o!==null?K(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Pg(o)},t.flushControlled=function(o){var a=Mt;Mt|=1;var d=Jt.transition,v=Nt;try{Jt.transition=null,Nt=1,o()}finally{Nt=v,Jt.transition=d,Mt=a,Mt===0&&(js(),Ni())}},t.flushPassiveEffects=es,t.flushSync=yg,t.focusWithin=function(o,a){if(!Te)throw Error(l(363));for(o=_f(o),a=gg(o,a),a=Array.from(a),o=0;o<a.length;){var d=a[o++];if(!oe(d)){if(d.tag===5&&le(d.stateNode))return!0;for(d=d.child;d!==null;)a.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Nt},t.getFindAllNodesFailureDescription=function(o,a){if(!Te)throw Error(l(363));var d=0,v=[];o=[_f(o),0];for(var S=0;S<o.length;){var T=o[S++],z=o[S++],H=a[z];if((T.tag!==5||!oe(T))&&(yf(T,H)&&(v.push(xf(H)),z++,z>d&&(d=z)),z<a.length))for(T=T.child;T!==null;)o.push(T,z),T=T.sibling}if(d<a.length){for(o=[];d<a.length;d++)o.push(xf(a[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return $(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:kx,findFiberByHostInstance:o.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a.isDisabled||!a.supportsFiber)o=!0;else{try{pl=a.inject(o),Di=a}catch{}o=!!a.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,a,d,v){if(!Te)throw Error(l(363));o=Sf(o,a);var S=Xe(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,a){var d=a._getVersion;d=d(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,d]:o.mutableSourceEagerHydrationData.push(a,d)},t.runWithPriority=function(o,a){var d=Nt;try{return Nt=o,a()}finally{Nt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,a,d,v){var S=a.current,T=Dn(),z=Ar(S);return d=Rg(d),a.context===null?a.context=d:a.pendingContext=d,a=$i(T,z),a.payload={element:o},v=v===void 0?null:v,v!==null&&(a.callback=v),wr(S,a),o=mi(S,z,T),o!==null&&yl(o,S,z),z},t}),Cd}var mv;function oC(){return mv||(mv=1,Td.exports=sC()),Td.exports}var aC=oC();const lC=Wx(aC);var gv=Uy();const Jp={},cC=r=>void Object.assign(Jp,r);function uC(r,e){function t(f,{args:p=[],attach:m,...g},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=_o(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=Jp[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=_o(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),M!=="inject"&&Id(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?Pd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||_o(p,{}),p.__r3f.parent=f,sp(p),yo(p)}}function i(f,p,m){let g=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Pd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||_o(p,{}),p.__r3f.parent=f,sp(p),yo(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>l(p,g,m))}function l(f,p,m){if(p){var g,y,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(A=>A!==p)),(y=p.__r3f)!=null&&y.attach)Sv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&vC(tu(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const A=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?gv.unstable_scheduleCallback(gv.unstable_IdlePriority,A):A()}yo(f)}}function c(f,p,m,g){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||l(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&tu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:lC({createInstance:t,removeChild:l,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&l(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...E}=g,{args:w=[],children:A,...L}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((D,O)=>D!==w[O]))return[!0];const P=Hy(f,E,L,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,y,M,x){p?c(f,g,M,x):Id(f,m)},commitMount(f,p,m,g){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&tu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>_o(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&Sv(g,f,m),f.isObject3D&&(f.visible=!1),yo(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&Pd(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),yo(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():To.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Vt.fun(performance.now)?performance.now:Vt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Vt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Vt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Id}}var vv,_v;const Rd=r=>"colorSpace"in r||"outputColorSpace"in r,Ny=()=>{var r;return(r=Jp.ColorManagement)!=null?r:null},Fy=r=>r&&r.isOrthographicCamera,hC=r=>r&&r.hasOwnProperty("current"),sl=typeof window<"u"&&((vv=window.document)!=null&&vv.createElement||((_v=window.navigator)==null?void 0:_v.product)==="ReactNative")?be.useLayoutEffect:be.useEffect;function Oy(r){const e=be.useRef(r);return sl(()=>void(e.current=r),[r]),e}function fC({set:r}){return sl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class By extends be.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}By.getDerivedStateFromError=()=>({error:!0});const zy="__default",yv=new Map,dC=r=>r&&!!r.memoized&&!!r.changes;function ky(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const ma=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function tu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Vt={obj:r=>r===Object(r)&&!Vt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Vt.str(r)||Vt.num(r)||Vt.boo(r))return r===e;const s=Vt.obj(r);if(s&&n==="reference")return r===e;const l=Vt.arr(r);if(l&&t==="reference")return r===e;if((l||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Vt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Vt.und(c)){if(l&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function pC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function _o(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function rp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,l)=>s[l],r),{target:t,key:i}}else return{target:t,key:e}}const xv=/-\d+$/;function Pd(r,e,t){if(Vt.str(t)){if(xv.test(t)){const s=t.replace(xv,""),{target:l,key:c}=rp(r,s);Array.isArray(l[c])||(l[c]=[])}const{target:n,key:i}=rp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function Sv(r,e,t){var n,i;if(Vt.str(t)){const{target:s,key:l}=rp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[l]:s[l]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Hy(r,{children:e,key:t,ref:n,...i},{children:s,key:l,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],zy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||Vt.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Id(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:l,changes:c}=dC(e)?e:Hy(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=l);for(let m=0;m<c.length;m++){let[g,y,M,x]=c[m];if(Rd(r)){const A="srgb",L="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?A:L):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?A:L)}let _=r,E=_[g];if(x.length&&(E=x.reduce((w,A)=>w[A],r),!(E&&E.set))){const[w,...A]=x.reverse();_=A.reverse().reduce((L,P)=>L[P],r),g=w}if(y===zy+"remove")if(_.constructor){let w=yv.get(_.constructor);w||(w=new _.constructor,yv.set(_.constructor,w)),y=w[g]}else y=0;if(M&&n)y?n.handlers[g]=y:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof Ts)){if(Array.isArray(y))E.fromArray?E.fromArray(y):E.set(...y);else if(E.copy&&y&&y.constructor&&E.constructor===y.constructor)E.copy(y);else if(y!==void 0){var h;const w=(h=E)==null?void 0:h.isColor;!w&&E.setScalar?E.setScalar(y):E instanceof Ts&&y instanceof Ts?E.mask=y.mask:E.set(y),!Ny()&&s&&!s.linear&&w&&E.convertSRGBToLinear()}}else{var f;if(_[g]=y,(f=_[g])!=null&&f.isTexture&&_[g].format===Pn&&_[g].type===Ri&&s){const w=_[g];Rd(w)&&Rd(s.gl)?w.colorSpace=s.gl.outputColorSpace:w.encoding=s.gl.outputEncoding}}yo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=tu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&sp(r),r}function yo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function sp(r){r.onUpdate==null||r.onUpdate(r)}function mC(r,e){r.manual||(Fy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function Zc(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function gC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return To.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return To.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return To.ContinuousEventPriority;default:return To.DefaultEventPriority}}function Vy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function vC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Vy(t.capturedMap,e,n,i)})}function _C(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=ma(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=ma(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(y).sort((_,E)=>{const w=ma(_.object),A=ma(E.object);return!w||!A?_.distance-E.distance:A.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=Zc(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(Zc(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const M=ma(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,A=new U(_.x,_.y,0).unproject(E),L=b=>{var N,q;return(N=(q=w.capturedMap.get(b))==null?void 0:q.has(y.eventObject))!=null?N:!1},P=b=>{const N={intersection:y,target:h.target};w.capturedMap.has(b)?w.capturedMap.get(b).set(y.eventObject,N):w.capturedMap.set(b,new Map([[y.eventObject,N]])),h.target.setPointerCapture(b)},D=b=>{const N=w.capturedMap.get(b);N&&Vy(w.capturedMap,y.eventObject,N,b)};let O={};for(let b in h){let N=h[b];typeof N!="function"&&(O[b]=N)}let C={...y,...O,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:A,ray:x.ray,camera:E,stopPropagation(){const b="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!b||b.has(y.eventObject))&&(C.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(N=>N.eventObject===y.eventObject))){const N=u.slice(0,u.indexOf(y));s([...N,y])}},target:{hasPointerCapture:L,setPointerCapture:P,releasePointerCapture:D},currentTarget:{hasPointerCapture:L,setPointerCapture:P,releasePointerCapture:D},nativeEvent:h};if(p(C),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(Zc(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function l(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(l(f,m.interaction),p&&p(f)),g&&s(x);function E(w){const A=w.eventObject,L=A.__r3f,P=L==null?void 0:L.handlers;if(L!=null&&L.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const D=Zc(w),O=m.hovered.get(D);O?O.stopped&&w.stopPropagation():(m.hovered.set(D,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const D=P[u];D?(!y||m.initialHits.includes(A))&&(l(f,m.interaction.filter(O=>!m.initialHits.includes(O))),D(w)):y&&m.initialHits.includes(A)&&l(f,m.interaction.filter(O=>!m.initialHits.includes(O)))}}i(x,f,_,E)}}return{handlePointer:c}}const Gy=r=>!!(r!=null&&r.render),Wy=be.createContext(null),yC=(r,e)=>{const t=iC((c,u)=>{const h=new U,f=new U,p=new U;function m(_=u().camera,E=f,w=u().size){const{width:A,height:L,top:P,left:D}=w,O=A/L;E.isVector3?p.copy(E):p.set(...E);const C=_.getWorldPosition(h).distanceTo(p);if(Fy(_))return{width:A/_.zoom,height:L/_.zoom,top:P,left:D,factor:1,distance:C,aspect:O};{const b=_.fov*Math.PI/180,N=2*Math.tan(b/2)*C,q=N*(A/L);return{width:q,height:N,top:P,left:D,factor:A/q,distance:C,aspect:O}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new he;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Wp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,A,L)=>{const P=u().camera,D={width:_,height:E,top:A||0,left:L||0,updateStyle:w};c(O=>({size:D,viewport:{...O.viewport,...m(P,f,D)}}))},setDpr:_=>c(E=>{const w=ky(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:be.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const A=u().internal;return A.priority=A.priority+(E>0?1:0),A.subscribers.push({ref:_,priority:E,store:w}),A.subscribers=A.subscribers.sort((L,P)=>L.priority-P.priority),()=>{const L=u().internal;L!=null&&L.subscribers&&(L.priority=L.priority-(E>0?1:0),L.subscribers=L.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,l=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,mC(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==l&&(l=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let jc,xC=new Set,SC=new Set,MC=new Set;function Ld(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function ga(r,e){switch(r){case"before":return Ld(xC,e);case"after":return Ld(SC,e);case"tail":return Ld(MC,e)}}let Dd,Ud;function Nd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Dd=e.internal.subscribers,jc=0;jc<Dd.length;jc++)Ud=Dd[jc],Ud.ref.current(Ud.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function wC(r){let e=!1,t=!1,n,i,s;function l(h){i=requestAnimationFrame(l),e=!0,n=0,ga("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Nd(h,s))}if(t=!1,ga("after",h),n===0)return ga("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(l)))}function u(h,f=!0,p,m){if(f&&ga("before",h),p)Nd(h,p,m);else for(const g of r.values())Nd(h,g.store.getState());f&&ga("after",h)}return{loop:l,invalidate:c,advance:u}}function Xy(){const r=be.useContext(Wy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function EC(r=t=>t,e){return Xy()(r,e)}function Kp(r,e=0){const t=Xy(),n=t.getState().internal.subscribe,i=Oy(r);return sl(()=>n(i,e,t),[e,n,t]),null}const Io=new Map,{invalidate:Mv,advance:wv}=wC(Io),{reconciler:Xu,applyProps:mo}=uC(Io,gC),go={objects:"shallow",strict:!1},TC=(r,e)=>{const t=typeof r=="function"?r(e):r;return Gy(t)?t:new Dy({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function AC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:l,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:l,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:l}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:l,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function bC(r){const e=Io.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||yC(Mv,wv),l=t||Xu.createContainer(s,To.ConcurrentRoot,null,!1,null,"",i,null);e||Io.set(r,{fiber:l,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:A=!1,frameloop:L="always",dpr:P=[1,2],performance:D,raycaster:O,camera:C,onPointerMissed:b}=f,N=s.getState(),q=N.gl;N.gl||N.set({gl:q=TC(p,r)});let Y=N.raycaster;Y||N.set({raycaster:Y=new wy});const{params:K,...ae}=O||{};if(Vt.equ(ae,Y,go)||mo(Y,{...ae}),Vt.equ(K,Y.params,go)||mo(Y,{params:{...Y.params,...K}}),!N.camera||N.camera===h&&!Vt.equ(h,C,go)){h=C;const te=C instanceof Ja,ce=te?C:A?new rl(0,0,0,0,.1,1e3):new pn(75,0,.1,1e3);te||(ce.position.z=5,C&&(mo(ce,C),("aspect"in C||"left"in C||"right"in C||"bottom"in C||"top"in C)&&(ce.manual=!0,ce.updateProjectionMatrix())),!N.camera&&!(C!=null&&C.rotation)&&ce.lookAt(0,0,0)),N.set({camera:ce}),Y.camera=ce}if(!N.scene){let te;g!=null&&g.isScene?te=g:(te=new Mp,g&&mo(te,g)),N.set({scene:_o(te)})}if(!N.xr){var $;const te=(Ye,re)=>{const ve=s.getState();ve.frameloop!=="never"&&wv(Ye,!0,ve,re)},ce=()=>{const Ye=s.getState();Ye.gl.xr.enabled=Ye.gl.xr.isPresenting,Ye.gl.xr.setAnimationLoop(Ye.gl.xr.isPresenting?te:null),Ye.gl.xr.isPresenting||Mv(Ye)},Ie={connect(){const Ye=s.getState().gl;Ye.xr.addEventListener("sessionstart",ce),Ye.xr.addEventListener("sessionend",ce)},disconnect(){const Ye=s.getState().gl;Ye.xr.removeEventListener("sessionstart",ce),Ye.xr.removeEventListener("sessionend",ce)}};typeof(($=q.xr)==null?void 0:$.addEventListener)=="function"&&Ie.connect(),N.set({xr:Ie})}if(q.shadowMap){const te=q.shadowMap.enabled,ce=q.shadowMap.type;if(q.shadowMap.enabled=!!x,Vt.boo(x))q.shadowMap.type=ya;else if(Vt.str(x)){var me;const Ie={basic:Bv,percentage:Zu,soft:ya,variance:Ai};q.shadowMap.type=(me=Ie[x])!=null?me:ya}else Vt.obj(x)&&Object.assign(q.shadowMap,x);(te!==q.shadowMap.enabled||ce!==q.shadowMap.type)&&(q.shadowMap.needsUpdate=!0)}const k=Ny();k&&("enabled"in k?k.enabled=!w:"legacyMode"in k&&(k.legacyMode=w)),u||mo(q,{outputEncoding:_?3e3:3001,toneMapping:E?Xi:op}),N.legacy!==w&&N.set(()=>({legacy:w})),N.linear!==_&&N.set(()=>({linear:_})),N.flat!==E&&N.set(()=>({flat:E})),p&&!Vt.fun(p)&&!Gy(p)&&!Vt.equ(p,q,go)&&mo(q,p),y&&!N.events.handlers&&N.set({events:y(s)});const ne=AC(r,m);return Vt.equ(ne,N.size,go)||N.setSize(ne.width,ne.height,ne.updateStyle,ne.top,ne.left),P&&N.viewport.dpr!==ky(P)&&N.setDpr(P),N.frameloop!==L&&N.setFrameloop(L),N.onPointerMissed||N.set({onPointerMissed:b}),D&&!Vt.equ(D,N.performance,go)&&N.set(te=>({performance:{...te.performance,...D}})),c=M,u=!0,this},render(f){return u||this.configure(),Xu.updateContainer(qe.jsx(CC,{store:s,children:f,onCreated:c,rootElement:r}),l,null,()=>{}),s},unmount(){qy(r)}}}function CC({store:r,children:e,onCreated:t,rootElement:n}){return sl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),qe.jsx(Wy.Provider,{value:r,children:e})}function qy(r,e){const t=Io.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),Xu.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,l,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(l=s.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),pC(i),Io.delete(r)}catch{}},500)})}}Xu.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:be.version});const Fd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function RC(r){const{handlePointer:e}=_C(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Fd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(l=>({events:{...l.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([l,c])=>{const[u,h]=Fd[l];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,l])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Fd[s];n.connected.removeEventListener(c,l)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function Ev(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function PC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,l]=be.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=be.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=be.useRef(!1);be.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=be.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:A,height:L,bottom:P,right:D,x:O,y:C}=c.current.element.getBoundingClientRect(),b={left:E,top:w,width:A,height:L,bottom:P,right:D,x:O,y:C};c.current.element instanceof HTMLElement&&n&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),f.current&&!UC(c.current.lastBounds,b)&&l(c.current.lastBounds=b)};return[_,h?Ev(_,h):_,u?Ev(_,u):_]},[l,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=Yy(_),M())};return LC(g,!!e),IC(m),be.useEffect(()=>{y(),M()},[e,g,m]),be.useEffect(()=>y,[]),[x,s,p]}function IC(r){be.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function LC(r,e){be.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Yy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Yy(r.parentElement)]}const DC=["x","y","top","bottom","left","right","width","height"],UC=(r,e)=>DC.every(t=>r[t]===e[t]);var NC=Object.defineProperty,FC=Object.defineProperties,OC=Object.getOwnPropertyDescriptors,Tv=Object.getOwnPropertySymbols,BC=Object.prototype.hasOwnProperty,zC=Object.prototype.propertyIsEnumerable,Av=(r,e,t)=>e in r?NC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,bv=(r,e)=>{for(var t in e||(e={}))BC.call(e,t)&&Av(r,t,e[t]);if(Tv)for(var t of Tv(e))zC.call(e,t)&&Av(r,t,e[t]);return r},kC=(r,e)=>FC(r,OC(e)),Cv,Rv;typeof window<"u"&&((Cv=window.document)!=null&&Cv.createElement||((Rv=window.navigator)==null?void 0:Rv.product)==="ReactNative")?be.useLayoutEffect:be.useEffect;function Zy(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=Zy(n,e,t);if(i)return i;n=n.sibling}}function jy(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const Pv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=Pv;return}return Pv.apply(this,arguments)};const Qp=jy(be.createContext(null));class Jy extends be.Component{render(){return be.createElement(Qp.Provider,{value:this._reactInternals},this.props.children)}}function HC(){const r=be.useContext(Qp);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=be.useId();return be.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=Zy(n,!1,s=>{let l=s.memoizedState;for(;l;){if(l.memoizedState===e)return!0;l=l.next}});if(i)return i}},[r,e])}function VC(){const r=HC(),[e]=be.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Qp&&!e.has(i)&&e.set(i,be.useContext(jy(i)))}t=t.return}return e}function GC(){const r=VC();return be.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>be.createElement(e,null,be.createElement(t.Provider,kC(bv({},n),{value:r.get(t)}))),e=>be.createElement(Jy,bv({},e))),[r])}const WC=be.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:l=RC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:A,onCreated:L,...P},D){be.useMemo(()=>cC(Qb),[]);const O=GC(),[C,b]=PC({scroll:!0,debounce:{scroll:50,resize:0},...n}),N=be.useRef(null),q=be.useRef(null);be.useImperativeHandle(D,()=>N.current);const Y=Oy(A),[K,ae]=be.useState(!1),[$,me]=be.useState(!1);if(K)throw K;if($)throw $;const k=be.useRef(null);sl(()=>{const te=N.current;b.width>0&&b.height>0&&te&&(k.current||(k.current=bC(te)),k.current.configure({gl:s,events:l,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:b,onPointerMissed:(...ce)=>Y.current==null?void 0:Y.current(...ce),onCreated:ce=>{ce.events.connect==null||ce.events.connect(c?hC(c)?c.current:c:q.current),u&&ce.setEvents({compute:(Ie,Ye)=>{const re=Ie[u+"X"],ve=Ie[u+"Y"];Ye.pointer.set(re/Ye.size.width*2-1,-(ve/Ye.size.height)*2+1),Ye.raycaster.setFromCamera(Ye.pointer,Ye.camera)}}),L==null||L(ce)}}),k.current.render(qe.jsx(O,{children:qe.jsx(By,{set:me,children:qe.jsx(be.Suspense,{fallback:qe.jsx(fC,{set:ae}),children:e??null})})})))}),be.useEffect(()=>{const te=N.current;if(te)return()=>qy(te)},[]);const ne=c?"none":"auto";return qe.jsx("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:ne,...i},...P,children:qe.jsx("div",{ref:C,style:{width:"100%",height:"100%"},children:qe.jsx("canvas",{ref:N,style:{display:"block"},children:t})})})}),XC=be.forwardRef(function(e,t){return qe.jsx(Jy,{children:qe.jsx(WC,{...e,ref:t})})});function qu(){return qu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},qu.apply(null,arguments)}const Ky=parseInt(Lo.replace(/\D+/g,"")),Qy=Ky>=125?"uv1":"uv2",Iv=new mn,Jc=new U;class $p extends Vp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new We(e,3)),this.setAttribute("uv",new We(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Wu(t,6,1);return this.setAttribute("instanceStart",new oi(n,3,0)),this.setAttribute("instanceEnd",new oi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Wu(n,t*2,1);return this.setAttribute("instanceColorStart",new oi(i,t,0)),this.setAttribute("instanceColorEnd",new oi(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Dp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Iv.setFromBufferAttribute(t),this.boundingBox.union(Iv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)Jc.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jc)),Jc.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Jc));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class $y extends $p{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class em extends ci{constructor(e){super({type:"LineMaterial",uniforms:ku.clone(ku.merge([Ee.common,Ee.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Ky>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Od=new wt,Lv=new U,Dv=new U,yn=new wt,xn=new wt,ki=new wt,Bd=new U,zd=new at,Sn=new Ty,Uv=new U,Kc=new mn,Qc=new gn,Hi=new wt;let Gi,bs;function Nv(r,e,t){return Hi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=bs/t.width,Hi.y=bs/t.height,Hi.applyMatrix4(r.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function qC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,u=l;c<u;c++){Sn.start.fromBufferAttribute(i,c),Sn.end.fromBufferAttribute(s,c),Sn.applyMatrix4(t);const h=new U,f=new U;Gi.distanceSqToSegment(Sn.start,Sn.end,f,h),f.distanceTo(h)<bs*.5&&e.push({point:f,pointOnLine:h,distance:Gi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[Qy]:null})}}function YC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,l=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Gi.at(1,ki),ki.w=1,ki.applyMatrix4(e.matrixWorldInverse),ki.applyMatrix4(n),ki.multiplyScalar(1/ki.w),ki.x*=s.x/2,ki.y*=s.y/2,ki.z=0,Bd.copy(ki),zd.multiplyMatrices(e.matrixWorldInverse,l);for(let m=0,g=f;m<g;m++){if(yn.fromBufferAttribute(u,m),xn.fromBufferAttribute(h,m),yn.w=1,xn.w=1,yn.applyMatrix4(zd),xn.applyMatrix4(zd),yn.z>p&&xn.z>p)continue;if(yn.z>p){const w=yn.z-xn.z,A=(yn.z-p)/w;yn.lerp(xn,A)}else if(xn.z>p){const w=xn.z-yn.z,A=(xn.z-p)/w;xn.lerp(yn,A)}yn.applyMatrix4(n),xn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),xn.multiplyScalar(1/xn.w),yn.x*=s.x/2,yn.y*=s.y/2,xn.x*=s.x/2,xn.y*=s.y/2,Sn.start.copy(yn),Sn.start.z=0,Sn.end.copy(xn),Sn.end.z=0;const M=Sn.closestPointToPointParameter(Bd,!0);Sn.at(M,Uv);const x=zu.lerp(yn.z,xn.z,M),_=x>=-1&&x<=1,E=Bd.distanceTo(Uv)<bs*.5;if(_&&E){Sn.start.fromBufferAttribute(u,m),Sn.end.fromBufferAttribute(h,m),Sn.start.applyMatrix4(l),Sn.end.applyMatrix4(l);const w=new U,A=new U;Gi.distanceSqToSegment(Sn.start,Sn.end,A,w),t.push({point:A,pointOnLine:w,distance:Gi.origin.distanceTo(A),object:r,face:null,faceIndex:m,uv:null,[Qy]:null})}}}class ex extends Qt{constructor(e=new $p,t=new em({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let l=0,c=0,u=t.count;l<u;l++,c+=2)Lv.fromBufferAttribute(t,l),Dv.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+Lv.distanceTo(Dv);const s=new Wu(i,2,1);return e.setAttribute("instanceDistanceStart",new oi(s,1,0)),e.setAttribute("instanceDistanceEnd",new oi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Gi=e.ray;const l=this.matrixWorld,c=this.geometry,u=this.material;bs=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),Qc.copy(c.boundingSphere).applyMatrix4(l);let h;if(n)h=bs*.5;else{const p=Math.max(i.near,Qc.distanceToPoint(Gi.origin));h=Nv(i,p,u.resolution)}if(Qc.radius+=h,Gi.intersectsSphere(Qc)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Kc.copy(c.boundingBox).applyMatrix4(l);let f;if(n)f=bs*.5;else{const p=Math.max(i.near,Kc.distanceToPoint(Gi.origin));f=Nv(i,p,u.resolution)}Kc.expandByScalar(f),Gi.intersectsBox(Kc)!==!1&&(n?qC(this,t):YC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Od),this.material.uniforms.resolution.value.set(Od.z,Od.w))}}class ZC extends ex{constructor(e=new $y,t=new em({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const jC=be.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:l,dashed:c,...u},h){var f,p;const m=EC(_=>_.size),g=be.useMemo(()=>l?new ex:new ZC,[l]),[y]=be.useState(()=>new em),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=be.useMemo(()=>{const _=l?new $p:new $y,E=e.map(w=>{const A=Array.isArray(w);return w instanceof U||w instanceof wt?[w.x,w.y,w.z]:w instanceof he?[w.x,w.y,0]:A&&w.length===3?[w[0],w[1],w[2]]:A&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(A=>A instanceof Fe?A.toArray():A);_.setColors(w.flat(),M)}return _},[e,l,n,M]);return be.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),be.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),be.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),be.createElement("primitive",qu({object:g,ref:h},u),be.createElement("primitive",{object:x,attach:"geometry"}),be.createElement("primitive",qu({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))}),JC=()=>parseInt(Lo.replace(/\D+/g,"")),KC=JC();class QC extends ci{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${KC>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const $C=r=>new U().setFromSpherical(new Ey(r,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),eR=be.forwardRef(({radius:r=100,depth:e=50,count:t=5e3,saturation:n=0,factor:i=4,fade:s=!1,speed:l=1},c)=>{const u=be.useRef(),[h,f,p]=be.useMemo(()=>{const g=[],y=[],M=Array.from({length:t},()=>(.5+.5*Math.random())*i),x=new Fe;let _=r+e;const E=e/t;for(let w=0;w<t;w++)_-=E*Math.random(),g.push(...$C(_).toArray()),x.setHSL(w/t,n,.9),y.push(x.r,x.g,x.b);return[new Float32Array(g),new Float32Array(y),new Float32Array(M)]},[t,e,i,r,n]);Kp(g=>u.current&&(u.current.uniforms.time.value=g.clock.elapsedTime*l));const[m]=be.useState(()=>new QC);return be.createElement("points",{ref:c},be.createElement("bufferGeometry",null,be.createElement("bufferAttribute",{attach:"attributes-position",args:[h,3]}),be.createElement("bufferAttribute",{attach:"attributes-color",args:[f,3]}),be.createElement("bufferAttribute",{attach:"attributes-size",args:[p,1]})),be.createElement("primitive",{ref:u,object:m,attach:"material",blending:nu,"uniforms-fade-value":s,depthWrite:!1,transparent:!0,vertexColors:!0}))}),Yu="#55d7ff",tR="#1787f4";function kd({position:r,rotation:e=0,scale:t=1}){return qe.jsxs("mesh",{position:r,rotation:[0,e,0],scale:t,children:[qe.jsx("coneGeometry",{args:[.18,.48,5]}),qe.jsx("meshStandardMaterial",{color:"#19314a",flatShading:!0,roughness:.88})]})}function Hd({position:r,height:e=.26}){return qe.jsxs("group",{position:r,children:[qe.jsxs("mesh",{position:[0,e/2,0],children:[qe.jsx("cylinderGeometry",{args:[.055,.075,e,6]}),qe.jsx("meshStandardMaterial",{color:"#25445c",flatShading:!0})]}),qe.jsxs("mesh",{position:[0,e+.025,0],children:[qe.jsx("sphereGeometry",{args:[.045,6,6]}),qe.jsx("meshBasicMaterial",{color:Yu})]}),qe.jsx("pointLight",{color:Yu,intensity:.65,distance:.55,position:[0,e+.04,0]})]})}function Vd({radius:r,speed:e,phase:t,color:n}){const i=be.useRef(null),s=be.useRef(null);return Kp(({clock:l})=>{const c=l.getElapsedTime()*e+t;i.current&&(i.current.rotation.y=c),s.current&&(s.current.rotation.z=-c*2)}),qe.jsx("group",{ref:i,rotation:[t*.25,t,.15],children:qe.jsxs("group",{position:[r,0,0],ref:s,children:[qe.jsxs("mesh",{children:[qe.jsx("octahedronGeometry",{args:[.055,0]}),qe.jsx("meshStandardMaterial",{color:"#bfefff",emissive:n,emissiveIntensity:1.3})]}),qe.jsxs("mesh",{position:[.1,0,0],children:[qe.jsx("boxGeometry",{args:[.1,.028,.09]}),qe.jsx("meshStandardMaterial",{color:"#204264"})]}),qe.jsxs("mesh",{position:[-.1,0,0],children:[qe.jsx("boxGeometry",{args:[.1,.028,.09]}),qe.jsx("meshStandardMaterial",{color:"#204264"})]}),qe.jsx("pointLight",{color:n,intensity:.7,distance:.5})]})})}function nR(){const r=be.useRef(null),e=be.useRef({x:0,y:0});return Kp(({clock:t,pointer:n})=>{e.current.x=n.x*.12,e.current.y=n.y*.08,r.current&&(r.current.rotation.y=zu.lerp(r.current.rotation.y,t.getElapsedTime()*.075+e.current.x,.025),r.current.rotation.x=zu.lerp(r.current.rotation.x,e.current.y,.025),r.current.position.y=Math.sin(t.getElapsedTime()*.7)*.055)}),qe.jsxs("group",{ref:r,children:[qe.jsxs("mesh",{rotation:[.12,.15,0],children:[qe.jsx("icosahedronGeometry",{args:[1.26,2]}),qe.jsx("meshStandardMaterial",{color:"#102030",flatShading:!0,roughness:.82,metalness:.15})]}),qe.jsxs("mesh",{scale:1.01,rotation:[.12,.15,0],children:[qe.jsx("icosahedronGeometry",{args:[1.26,1]}),qe.jsx("meshBasicMaterial",{color:"#1d5578",wireframe:!0,transparent:!0,opacity:.15})]}),qe.jsxs("group",{position:[0,.98,.1],rotation:[-.1,.15,0],children:[qe.jsx(kd,{position:[-.52,.04,.03],rotation:.6,scale:1.4}),qe.jsx(kd,{position:[-.15,.05,-.16],rotation:1.1,scale:.9}),qe.jsx(kd,{position:[.49,.03,.03],rotation:.3,scale:1.15}),qe.jsx(Hd,{position:[-.25,.05,.1],height:.34}),qe.jsx(Hd,{position:[.05,.07,.05],height:.48}),qe.jsx(Hd,{position:[.3,.04,-.03],height:.25}),qe.jsxs("mesh",{position:[.05,.01,.15],rotation:[-Math.PI/2,0,0],children:[qe.jsx("ringGeometry",{args:[.24,.27,6]}),qe.jsx("meshBasicMaterial",{color:tR,transparent:!0,opacity:.85})]}),qe.jsx(jC,{points:[[-.53,.05,.05],[-.25,.2,.1],[.05,.28,.06],[.32,.14,-.03]],color:Yu,lineWidth:.8,transparent:!0,opacity:.8})]}),qe.jsx(Vd,{radius:1.73,speed:.42,phase:0,color:Yu}),qe.jsx(Vd,{radius:1.92,speed:.3,phase:2.15,color:"#6c8cff"}),qe.jsx(Vd,{radius:1.57,speed:.57,phase:4.1,color:"#4dd5cb"})]})}function sR(){return qe.jsxs(XC,{dpr:[1,1.75],camera:{position:[0,.15,4.1],fov:39},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},children:[qe.jsx("ambientLight",{intensity:.45}),qe.jsx("directionalLight",{position:[-3,4,3],intensity:1.75,color:"#bde7ff"}),qe.jsx("pointLight",{position:[2,-1,2],intensity:1.6,color:"#147fec"}),qe.jsx(eR,{radius:8,depth:3,count:230,factor:1.2,saturation:0,fade:!0,speed:.15}),qe.jsx(nR,{})]})}export{sR as default};
