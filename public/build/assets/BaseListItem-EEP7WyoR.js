import{Z as c,o as n,c as l,a2 as i,k as o,r as d,m,w as _,K as f,b as $,t as B,aJ as h}from"./main-q-Vi2wV1.js";const k={name:"List"},x={class:"list-none"};function y(e,a,t,s,r,u){return n(),l("div",x,[i(e.$slots,"default")])}const I=c(k,[["render",y]]),C={name:"ListItem",props:{title:{type:String,required:!1,default:""},active:{type:Boolean,required:!0},index:{type:Number,default:null}},setup(e,{slots:a}){const t="cursor-pointer pb-2 pr-0 text-sm font-medium leading-5  flex items-center";let s=o(()=>!!a.icon),r=o(()=>e.active?`${t} text-primary-500`:`${t} text-gray-500`);return{hasIconSlot:s,containerClass:r}}},g={key:0,class:"mr-3"};function S(e,a,t,s,r,u){const p=d("router-link");return n(),m(p,h(e.$attrs,{class:s.containerClass}),{default:_(()=>[s.hasIconSlot?(n(),l("span",g,[i(e.$slots,"icon")])):f("",!0),$("span",null,B(t.title),1)]),_:3},16,["class"])}const L=c(C,[["render",S]]);export{L as B,I as a};
