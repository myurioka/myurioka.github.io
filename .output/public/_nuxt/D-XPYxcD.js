import{c as g}from"./Bcq594Xs.js";import{f as m,m as C,o as c,c as _,a as s,t as d,i,b as f,z as v,p as w,w as y,h as b,u as k,F as $,r as F,j as L}from"./BWD4C5Rn.js";import{_ as B}from"./Bgz1su21.js";import{_ as M}from"./DlAUqK2U.js";import{m as z}from"./B8M5arCw.js";import{a as A,q as D}from"./PsQ7cp0R.js";import{u as N}from"./DNBHgyyY.js";import"./B8awsWs2.js";const E={class:"container mx-auto"},I={class:"grid grid-cols-1 items-center"},V={class:"px-6"},j={class:"text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-4xl my-4"},q={class:"dark:text-zinc-300"},H={class:"px-6 justify-self-center"},S=m({__name:"hero",setup(h){return(e,n)=>{const r=C("LogoDogs");return c(),_("div",E,[s("div",I,[s("div",V,[s("h1",j,d(i(g).title),1),s("p",q,d(i(g).description),1)]),s("div",H,[f(r)])])])}}}),P={class:"text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500"},R=m({__name:"card",props:{title:{default:"No title available"},count:{default:0}},setup(h){v(t=>({"2835aa38":i(r)}));const e=["#dc2626","#d97706","#65a30d","#059669","#0891b2","#0284c7","#4f46e5","#7c3aed","#c026d3","#db2777"];function n(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t}const r=w(`${e.at(n(0,8))}`);return(t,o)=>{const l=B;return c(),_("div",P,[f(l,{to:`/categories/${t.title.toLocaleLowerCase()}`,class:"text-lg font-extrabold"},{default:y(()=>[s("h1",null,"#"+d(t.title)+"("+d(t.count)+")",1)]),_:1},8,["to"])])}}}),T=M(R,[["__scopeId","data-v-85234d1a"]]),U={class:"container max-w-5xl mx-auto text-zinc-600"},G={class:"flex flex-wrap px-6 mt-12 gap-3"},tt=m({__name:"index",async setup(h){var o;let e,n;const{data:r}=([e,n]=b(()=>A("all-blog-post-for-category",()=>D("/blogs").sort({_id:-1}).find())),e=await e,n(),e),t=new Map;return(o=r.value)==null||o.forEach(l=>{(l.tags||[]).forEach(a=>{if(t.has(a)){const p=t.get(a);t.set(a,p+1)}else t.set(a,1)})}),k({title:"Categories",meta:[{name:"description",content:"Below All the topics are listed on which either I have written a blog or will write a blog in near future."}]}),N(),(l,x)=>{const a=S,p=T;return c(),_("main",U,[f(a),s("div",G,[(c(!0),_($,null,F(i(t),u=>(c(),L(p,{key:u[0],title:i(z)(u[0]),count:u[1]},null,8,["title","count"]))),128))])])}}});export{tt as default};
