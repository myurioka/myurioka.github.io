import{m as k}from"./B8M5arCw.js";import{e as u,f as h,k as l,o as n,c as m,a as c,t as C,h as d,g as $,u as w,b as A,F as B,r as N,i as _,j}from"./5SuSn2K8.js";import{_ as D,a as F}from"./CpYz1KXZ.js";import{a as I,q as V}from"./B8FgXnJQ.js";import{u as q}from"./DExGvEZX.js";import"./DdnaoAOL.js";import"./DEYKc0Fk.js";import"./DlAUqK2U.js";import"./BBp_WBJV.js";import"./BR3gnuJi.js";import"./BmkauNe9.js";const E={class:"container mx-auto"},S={class:"p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900"},z={class:"text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"},H=u({__name:"topic",setup(y){const s=h(),i=l(()=>{const r=s.params.category||"";let a="";return Array.isArray(r)?a=r.at(0)||"":a=r,k(a)});return(r,a)=>(n(),m("div",E,[c("div",S,[c("h1",z," #"+C(d(i)),1)])]))}}),L={class:"container max-w-5xl mx-auto text-zinc-600 px-4"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},X=u({__name:"[category]",async setup(y){let s,i;const r=h(),a=l(()=>{const o=r.params.category||"";let t="";return Array.isArray(o)?t=o.at(0)||"":t=o,t}),{data:g}=([s,i]=$(()=>I(`category-data-${a.value}`,()=>V("/blogs").where({tags:{$contains:a.value}}).find())),s=await s,i(),s),f=l(()=>{var o;return(o=g.value)==null?void 0:o.map(t=>({path:t._path||"",title:t.title||"no-title available",description:t.description||"no-description available",image:t.image||"/blogs-img/blog.jpg",alt:t.alt||"no alter data available",ogImage:t.ogImage||"/blogs-img/blog.jpg",date:t.date||"not-date-available",tags:t.tags||[],published:t.published||!1}))});return w({title:a.value,meta:[{name:"description",content:`You will find all the ${a.value} related post here`}]}),q(),(o,t)=>{var p;const b=H,x=D,v=F;return n(),m("main",L,[A(b),c("div",R,[(n(!0),m(B,null,N(d(f),e=>(n(),_(x,{key:e.title,path:e.path,title:e.title,date:e.date,description:e.description,image:e.image,alt:e.alt,"og-image":e.ogImage,tags:e.tags,published:e.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),((p=d(g))==null?void 0:p.length)===0?(n(),_(v,{key:0})):j("",!0)])])}}});export{X as default};