import{f as v,v as j,F as E,M as O,k as T,r as h,o as s,c as n,a as o,b as t,w as c,l as a,Q as b,m as A,aO as F,J as L,p as P,t as u,K as x,T as D,aP as G,N as g,O as Q,aQ as U}from"./main-q-Vi2wV1.js";import{u as J,_ as K}from"./NoteModal-NRtf3S-a.js";const W={class:"w-full"},q={class:"overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5"},H={class:"relative grid bg-white"},R={class:"relative p-4"},X={key:0,class:"relative flex flex-col overflow-auto list max-h-36"},Y=["onClick"],Z={class:"flex justify-between px-2"},ee={class:"m-0 text-base font-semibold leading-tight text-gray-700 cursor-pointer"},te={key:1,class:"flex justify-center p-5 text-gray-400"},se={class:"text-base text-gray-500"},oe={class:"m-0 ml-3 text-sm leading-none cursor-pointer font-base text-primary-400"},re={__name:"SelectNotePopup",props:{type:{type:String,default:null}},emits:["select"],setup(k,{emit:w}){const d=k,N=w;v(null);const{t:C}=j.useI18n(),l=v(null),B=E(),r=J(),m=O(),f=T(()=>l.value?r.notes.filter(function(e){return e.name.toLowerCase().indexOf(l.value.toLowerCase())!==-1}):r.notes);async function I(){await r.fetchNotes({filter:{},orderByField:"",orderBy:"",type:d.type?d.type:""})}function S(e,i){N("select",{...r.notes[e]}),l.value=null,i()}function V(){B.openModal({title:C("settings.customization.notes.add_note"),componentName:"NoteModal",size:"lg",data:d.type})}return(e,i)=>{const y=h("BaseIcon"),z=h("BaseInput");return s(),n(g,null,[o(K),t("div",W,[o(a(U),null,{default:c(({isOpen:M})=>[a(m).hasAbilities(a(b).VIEW_NOTE)?(s(),A(a(F),{key:0,class:L([M?"":"text-opacity-90","flex items-center z-10 font-medium text-primary-400 focus:outline-none focus:border-none"]),onClick:I},{default:c(()=>[o(y,{name:"PlusIcon",class:"w-4 h-4 font-medium text-primary-400"}),P(" "+u(e.$t("general.insert_note")),1)]),_:2},1032,["class"])):x("",!0),o(D,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:c(()=>[o(a(G),{class:"absolute z-20 px-4 mt-3 sm:px-0 w-screen max-w-full left-0 top-3"},{default:c(({close:$})=>[t("div",q,[t("div",H,[t("div",R,[o(z,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=p=>l.value=p),placeholder:e.$t("general.search"),type:"text",class:"text-black"},null,8,["modelValue","placeholder"])]),f.value.length>0?(s(),n("div",X,[(s(!0),n(g,null,Q(f.value,(p,_)=>(s(),n("div",{key:_,tabindex:"2",class:"px-6 py-4 border-b border-gray-200 border-solid cursor-pointer hover:bg-gray-100 hover:cursor-pointer last:border-b-0",onClick:ae=>S(_,$)},[t("div",Z,[t("label",ee,u(p.name),1)])],8,Y))),128))])):(s(),n("div",te,[t("label",se,u(e.$t("general.no_note_found")),1)]))]),a(m).hasAbilities(a(b).MANAGE_NOTE)?(s(),n("button",{key:0,type:"button",class:"h-10 flex items-center justify-center w-full px-2 py-3 bg-gray-200 border-none outline-none",onClick:V},[o(y,{name:"CheckCircleIcon",class:"text-primary-400"}),t("label",oe,u(e.$t("settings.customization.notes.add_new_note")),1)])):x("",!0)])]),_:1})]),_:1})]),_:1})])],64)}}};export{re as _};
