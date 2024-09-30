import{F as H,as as K,u as X,E as J,v as Q,f as h,H as W,k as M,g as p,h as B,i as E,j as Y,r as d,o as _,m as V,w as l,b as v,p as f,t as $,l as e,a,c as N,K as x}from"./main-q-Vi2wV1.js";import{u as Z}from"./mail-driver-oRoVIHQf.js";const ee={class:"flex justify-between w-full"},te={key:0,action:""},ae={class:"px-8 py-8 sm:p-6"},oe={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},se={key:1},re={class:"my-6 mx-4 border border-gray-200 relative"},le=["src"],ne={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},me={__name:"SendEstimateModal",emits:["update"],setup(ie,{emit:U}){const m=H(),j=K(),P=X(),k=J();Z();const{t:u}=Q.useI18n(),n=h(!1),I=h(""),b=h(!1),D=h(["customer","customerCustom","estimate","estimateCustom","company"]);let o=W({id:null,from:null,to:null,subject:"New Estimate",body:null});const F=U,G=M(()=>m.active&&m.componentName==="SendEstimateModal"),S=M(()=>m.data),L={from:{required:p.withMessage(u("validation.required"),B),email:p.withMessage(u("validation.email_incorrect"),E)},to:{required:p.withMessage(u("validation.required"),B),email:p.withMessage(u("validation.email_incorrect"),E)},subject:{required:p.withMessage(u("validation.required"),B)},body:{required:p.withMessage(u("validation.required"),B)}},s=Y(L,M(()=>o));function R(){b.value=!1}async function z(){let r=await k.fetchBasicMailConfig();o.id=m.id,r.data&&(o.from=r.data.from_mail),S.value&&(o.to=S.value.customer.email),o.body=k.selectedCompanySettings.estimate_mail_body}async function q(){if(s.value.$touch(),s.value.$invalid)return!0;try{if(n.value=!0,!b.value){const c=await j.previewEstimate(o);n.value=!1,b.value=!0;var r=new Blob([c.data],{type:"text/html"});I.value=URL.createObjectURL(r);return}const t=await j.sendEstimate(o);if(n.value=!1,t.data.success)return F("update"),y(),!0}catch(t){console.error(t),n.value=!1,P.showNotification({type:"error",message:u("estimates.something_went_wrong")})}}function y(){m.closeModal(),setTimeout(()=>{s.value.$reset(),b.value=!1,I.value=null},300)}return(r,t)=>{const c=d("BaseIcon"),C=d("BaseInput"),w=d("BaseInputGroup"),A=d("BaseCustomInput"),O=d("BaseInputGrid"),g=d("BaseButton"),T=d("BaseModal");return _(),V(T,{show:G.value,onClose:y,onOpen:z},{header:l(()=>[v("div",ee,[f($(e(m).title)+" ",1),a(c,{name:"XIcon",class:"h-6 w-6 text-gray-500 cursor-pointer",onClick:y})])]),default:l(()=>[b.value?(_(),N("div",se,[v("div",re,[a(g,{class:"absolute top-4 right-4",disabled:n.value,variant:"primary-outline",onClick:R},{default:l(()=>[a(c,{name:"PencilIcon",class:"h-5 mr-2"}),f(" Edit ")]),_:1},8,["disabled"]),v("iframe",{src:I.value,frameborder:"0",class:"w-full",style:{"min-height":"500px"}},null,8,le)]),v("div",ne,[a(g,{class:"mr-3",variant:"primary-outline",type:"button",onClick:y},{default:l(()=>[f($(r.$t("general.cancel")),1)]),_:1}),a(g,{loading:n.value,disabled:n.value,variant:"primary",type:"button",onClick:q},{default:l(()=>[n.value?x("",!0):(_(),V(c,{key:0,name:"PaperAirplaneIcon",class:"mr-2"})),f(" "+$(r.$t("general.send")),1)]),_:1},8,["loading","disabled"])])])):(_(),N("form",te,[v("div",ae,[a(O,{layout:"one-column"},{default:l(()=>[a(w,{label:r.$t("general.from"),required:"",error:e(s).from.$error&&e(s).from.$errors[0].$message},{default:l(()=>[a(C,{modelValue:e(o).from,"onUpdate:modelValue":t[0]||(t[0]=i=>e(o).from=i),type:"text",invalid:e(s).from.$error,onInput:t[1]||(t[1]=i=>e(s).from.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:r.$t("general.to"),required:"",error:e(s).to.$error&&e(s).to.$errors[0].$message},{default:l(()=>[a(C,{modelValue:e(o).to,"onUpdate:modelValue":t[2]||(t[2]=i=>e(o).to=i),type:"text",invalid:e(s).to.$error,onInput:t[3]||(t[3]=i=>e(s).to.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:r.$t("general.subject"),required:"",error:e(s).subject.$error&&e(s).subject.$errors[0].$message},{default:l(()=>[a(C,{modelValue:e(o).subject,"onUpdate:modelValue":t[4]||(t[4]=i=>e(o).subject=i),type:"text",invalid:e(s).subject.$error,onInput:t[5]||(t[5]=i=>e(s).subject.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(w,{label:r.$t("general.body"),required:""},{default:l(()=>[a(A,{modelValue:e(o).body,"onUpdate:modelValue":t[6]||(t[6]=i=>e(o).body=i),fields:D.value},null,8,["modelValue","fields"])]),_:1},8,["label"])]),_:1})]),v("div",oe,[a(g,{class:"mr-3",variant:"primary-outline",type:"button",onClick:y},{default:l(()=>[f($(r.$t("general.cancel")),1)]),_:1}),a(g,{loading:n.value,disabled:n.value,variant:"primary",type:"button",class:"mr-3",onClick:q},{default:l(()=>[n.value?x("",!0):(_(),V(c,{key:0,name:"PhotographIcon",class:"h-5 mr-2"})),f(" "+$(r.$t("general.preview")),1)]),_:1},8,["loading","disabled"])])]))]),_:1},8,["show"])}}};export{me as _};
