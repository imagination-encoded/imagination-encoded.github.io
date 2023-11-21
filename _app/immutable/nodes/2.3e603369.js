import{s as B,f as D,n as I,r as N,e as q,h as z}from"../chunks/scheduler.c0fc71e6.js";import{S as O,i as P,g as h,s as A,m as U,h as p,j as y,c as H,n as J,f as m,k as g,A as F,a as M,y as _,z as b,o as R,d as v,b as V,t as w,B as K,r as L,u as Q,v as W,w as X,p as Y}from"../chunks/index.830e3ff5.js";import{e as x,v as C}from"../chunks/store.d821dfb9.js";import{g as Z}from"../chunks/navigation.abdb9a9f.js";async function $({fetch:o,params:a}){const s=new Map,t=await(await o("/galleries.json")).json();for(const i of t.galleries){const n=await(await o(`/galleries/${i}.json`)).json();s.set(i,n)}return{galleries:s}}const ce=Object.freeze(Object.defineProperty({__proto__:null,load:$},Symbol.toStringTag,{value:"Module"}));function ee(o){let a,s,e,t,i,l,n=o[0].subject+"",r,c,j;return{c(){a=h("button"),s=h("figure"),e=h("img"),i=A(),l=h("figcaption"),r=U(n),this.h()},l(u){a=p(u,"BUTTON",{});var f=y(a);s=p(f,"FIGURE",{class:!0});var d=y(s);e=p(d,"IMG",{class:!0,src:!0,alt:!0}),i=H(d),l=p(d,"FIGCAPTION",{class:!0});var k=y(l);r=J(k,n),k.forEach(m),d.forEach(m),f.forEach(m),this.h()},h(){g(e,"class","h-auto max-w-full opacity-80"),D(e.src,t=o[0].variants[E].images[G].src)||g(e,"src",t),g(e,"alt",""),F(e,"opacity-100",o[1]),g(l,"class","absolute px-4 py-2 text-white bg-black opacity-80"),g(s,"class","relative flex justify-center items-center")},m(u,f){M(u,a,f),_(a,s),_(s,e),_(s,i),_(s,l),_(l,r),c||(j=[b(a,"click",o[2]),b(a,"mouseenter",o[4]),b(a,"mouseleave",o[5])],c=!0)},p(u,[f]){f&1&&!D(e.src,t=u[0].variants[E].images[G].src)&&g(e,"src",t),f&2&&F(e,"opacity-100",u[1]),f&1&&n!==(n=u[0].subject+"")&&R(r,n)},i:I,o:I,d(u){u&&m(a),c=!1,N(j)}}}let E=0,G=0;function te(o,a,s){let{path:e}=a,{galleryData:t}=a,i=!1;function l(){Z(`/galleries/${e}`,{replaceState:!1})}const n=()=>{s(1,i=!0)},r=()=>{s(1,i=!1)};return o.$$set=c=>{"path"in c&&s(3,e=c.path),"galleryData"in c&&s(0,t=c.galleryData)},[t,i,l,e,n,r]}class ae extends O{constructor(a){super(),P(this,a,te,ee,B,{path:3,galleryData:0})}}function S(o,a,s){const e=o.slice();return e[2]=a[s][0],e[3]=a[s][1],e}function T(o){let a,s;return a=new ae({props:{path:o[2],galleryData:o[3]}}),{c(){L(a.$$.fragment)},l(e){Q(a.$$.fragment,e)},m(e,t){W(a,e,t),s=!0},p(e,t){const i={};t&1&&(i.path=e[2]),t&1&&(i.galleryData=e[3]),a.$set(i)},i(e){s||(v(a.$$.fragment,e),s=!0)},o(e){w(a.$$.fragment,e),s=!1},d(e){X(a,e)}}}function le(o){let a,s,e=x(o[0].galleries),t=[];for(let l=0;l<e.length;l+=1)t[l]=T(S(o,e,l));const i=l=>w(t[l],1,1,()=>{t[l]=null});return{c(){a=h("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){a=p(l,"DIV",{class:!0});var n=y(a);for(let r=0;r<t.length;r+=1)t[r].l(n);n.forEach(m),this.h()},h(){g(a,"class","grid grid-cols-1 gap-3 justify-center justify-items-center mx-auto max-w-md")},m(l,n){M(l,a,n);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(a,null);s=!0},p(l,[n]){if(n&1){e=x(l[0].galleries);let r;for(r=0;r<e.length;r+=1){const c=S(l,e,r);t[r]?(t[r].p(c,n),v(t[r],1)):(t[r]=T(c),t[r].c(),v(t[r],1),t[r].m(a,null))}for(Y(),r=e.length;r<t.length;r+=1)i(r);V()}},i(l){if(!s){for(let n=0;n<e.length;n+=1)v(t[n]);s=!0}},o(l){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)w(t[n]);s=!1},d(l){l&&m(a),K(t,l)}}}function se(o,a,s){let e;q(o,C,i=>s(1,e=i)),z(C,e="",e);let{data:t}=a;return o.$$set=i=>{"data"in i&&s(0,t=i.data)},[t]}class ue extends O{constructor(a){super(),P(this,a,se,le,B,{data:0})}}export{ue as component,ce as universal};
