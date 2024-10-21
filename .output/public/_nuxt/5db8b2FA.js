import{_ as g}from"./BUSYGByJ.js";import y from"./YFHOmU5B.js";import{_ as z}from"./C79oDZiF.js";import{n as C,f as k}from"./Bcq594Xs.js";import{J as F,f as p,o as r,c as l,a as e,b as o,w as a,d as i,t as f,i as d,k as v,g as N,l as w,j as h,a1 as A}from"./D9G6bm-n.js";import{_ as $}from"./DlAUqK2U.js";import"./eoc066xz.js";const B=()=>F("color-mode").value,L={class:"py-5 border-b dark:border-gray-800 font-semibold"},M={class:"flex px-6 container max-w-5xl justify-between mx-auto items-baseline"},S={class:"flex items-baseline space-x-5"},D={class:"text-base sm:text-2xl font-bold"},T={class:"flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"},V={title:"About Me"},j=p({__name:"header",setup(c){const t=B();function n(_){t.preference=_}return(_,s)=>{const u=g,m=y,x=z;return r(),l("div",L,[e("div",M,[e("ul",S,[e("li",D,[o(u,{to:"/"},{default:a(()=>[i(f(d(C).homeTitle),1)]),_:1})])]),e("ul",T,[e("li",null,[o(u,{to:"/blogs"},{default:a(()=>s[2]||(s[2]=[i(" Blogs ")])),_:1})]),e("li",null,[o(u,{to:"/categories"},{default:a(()=>s[3]||(s[3]=[i(" Categories ")])),_:1})]),e("li",V,[o(u,{to:"/about","aria-label":"About me"},{default:a(()=>s[4]||(s[4]=[i(" About ")])),_:1})]),e("li",null,[o(x,null,{fallback:a(()=>[o(m,{name:"svg-spinners:180-ring",size:"20"})]),default:a(()=>[d(t).value==="light"?(r(),l("button",{key:0,name:"light-mode",title:"Light",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:s[0]||(s[0]=b=>n("dark"))},[o(m,{name:"icon-park:moon",size:"20"})])):v("",!0),d(t).value==="dark"?(r(),l("button",{key:1,name:"dark-mode",title:"Dark",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:s[1]||(s[1]=b=>n("light"))},[o(m,{name:"noto:sun",size:"20"})])):v("",!0)]),_:1})])])])])}}}),I={class:"py-2 dark:text-zinc-300"},H=p({__name:"site",setup(c){return(t,n)=>(r(),l("div",null,[n[0]||(n[0]=e("p",{class:"text-black dark:text-zinc-300 text-base py-1 font-semibold"}," About This Site ",-1)),e("p",I,f(d(k).aboutTheSite),1)]))}}),E={class:"text-black dark:text-zinc-300 text-2xl py-1 font-semibold"},G={class:"py-2 dark:text-zinc-300"},J={class:"my-3 space-x-3 pb-3"},O=p({__name:"developer",setup(c){return(t,n)=>{const _=y,s=g;return r(),l("div",null,[e("p",E,f(d(k).author),1),e("p",G,f(d(k).aboutAuthor),1),e("div",J,[o(s,{to:"https://myurioka.github.io",target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]","aria-label":"Github"},{default:a(()=>[o(_,{name:"fa:github",size:"1em"})]),_:1})])])}}}),P={},Q={class:"flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"};function R(c,t){const n=g;return r(),l("div",Q,[t[4]||(t[4]=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"}," Quick Link ",-1)),o(n,{to:"/",class:"hover:underline"},{default:a(()=>t[0]||(t[0]=[i(" Home ")])),_:1}),o(n,{to:"/blogs",class:"hover:underline"},{default:a(()=>t[1]||(t[1]=[i(" Blogs ")])),_:1}),o(n,{to:"/categories",class:"hover:underline"},{default:a(()=>t[2]||(t[2]=[i(" Categories ")])),_:1}),o(n,{to:"/about",class:"hover:underline"},{default:a(()=>t[3]||(t[3]=[i(" About Me ")])),_:1})])}const q=$(P,[["render",R]]),K=p({__name:"connect",setup(c){return(t,n)=>(r(),l("div"))}}),U={class:"py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300"},W={class:"px-6 container max-w-5xl mx-auto"},X={class:"grid grid-cols-1 md:grid-cols-3"},Y=p({__name:"footer",setup(c){const t=N(),n=w(()=>t.fullPath.replace("/",""));return(_,s)=>{const u=H,m=O,x=q,b=K;return r(),l("div",U,[e("div",W,[e("div",X,[d(n)==="about"?(r(),h(u,{key:0})):(r(),h(m,{key:1})),o(x),o(b)])])])}}}),Z={},tt={class:"gd-container font-spacegrotesk"},et={class:"fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10"};function ot(c,t){const n=j,_=Y;return r(),l("div",tt,[e("header",et,[o(n)]),e("main",null,[t[0]||(t[0]=e("div",{class:"p-9"},null,-1)),A(c.$slots,"default",{},void 0,!0)]),e("footer",null,[o(_)])])}const _t=$(Z,[["render",ot],["__scopeId","data-v-6b416664"]]);export{_t as default};