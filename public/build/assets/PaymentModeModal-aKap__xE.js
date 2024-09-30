import{F as w,v as S,f as V,k as p,g as P,h as C,I as k,j as q,r as u,o as j,m as N,w as r,b as c,p as y,t as v,l as a,a as s,q as x,J as D}from"./main-q-Vi2wV1.js";import{u as z}from"./payment-FVSr6VTp.js";const G={class:"flex justify-between w-full"},L={class:"p-4 sm:p-6"},T={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},U={__name:"PaymentModeModal",setup(A){const o=w(),e=z(),{t:M}=S.useI18n(),l=V(!1),g=p(()=>({currentPaymentMode:{name:{required:P.withMessage(M("validation.required"),C),minLength:P.withMessage(M("validation.name_min_length",{count:3}),k(3))}}})),t=q(g,p(()=>e)),h=p(()=>o.active&&o.componentName==="PaymentModeModal");async function B(){if(t.value.currentPaymentMode.$touch(),t.value.currentPaymentMode.$invalid)return!0;try{const n=e.currentPaymentMode.id?e.updatePaymentMode:e.addPaymentMode;l.value=!0,await n(e.currentPaymentMode),l.value=!1,o.refreshData&&o.refreshData(),d()}catch{return l.value=!1,!0}}function d(){o.closeModal(),setTimeout(()=>{t.value.$reset(),e.currentPaymentMode={id:"",name:null}})}return(n,m)=>{const f=u("BaseIcon"),$=u("BaseInput"),b=u("BaseInputGroup"),_=u("BaseButton"),I=u("BaseModal");return j(),N(I,{show:h.value,onClose:d},{header:r(()=>[c("div",G,[y(v(a(o).title)+" ",1),s(f,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[c("form",{action:"",onSubmit:x(B,["prevent"])},[c("div",L,[s(b,{label:n.$t("settings.payment_modes.mode_name"),error:a(t).currentPaymentMode.name.$error&&a(t).currentPaymentMode.name.$errors[0].$message,required:""},{default:r(()=>[s($,{modelValue:a(e).currentPaymentMode.name,"onUpdate:modelValue":m[0]||(m[0]=i=>a(e).currentPaymentMode.name=i),invalid:a(t).currentPaymentMode.name.$error,onInput:m[1]||(m[1]=i=>a(t).currentPaymentMode.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),c("div",T,[s(_,{variant:"primary-outline",class:"mr-3",type:"button",onClick:d},{default:r(()=>[y(v(n.$t("general.cancel")),1)]),_:1}),s(_,{loading:l.value,disabled:l.value,variant:"primary",type:"submit"},{left:r(i=>[s(f,{name:"SaveIcon",class:D(i.class)},null,8,["class"])]),default:r(()=>[y(" "+v(a(e).currentPaymentMode.id?n.$t("general.update"):n.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}};export{U as _};
