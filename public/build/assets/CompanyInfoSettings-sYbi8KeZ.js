import{E as R,F as T,G as A,e as ee,v as E,f as C,H as J,k as N,g as w,h as q,a0 as ae,j as H,r as i,o as I,m as F,w as l,b as r,t as g,l as n,q as K,a as t,p as k,J as O,K as G,a5 as te,c as L,n as oe,N as ne,I as se}from"./main-q-Vi2wV1.js";const le={class:"flex justify-between w-full"},de={class:"px-6 pt-6"},ie={class:"font-medium text-lg text-left"},re={class:"mt-2 text-sm leading-snug text-gray-500",style:{"max-width":"680px"}},ue={class:"p-4 sm:p-6 space-y-4"},me={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},pe={__name:"DeleteCompanyModal",setup(P){const p=R(),v=T(),h=A(),V=ee(),{t:S}=E.useI18n();let u=C(!1);const e=J({id:p.selectedCompany.id,name:null}),b=N(()=>v.active&&v.componentName==="DeleteCompanyModal"),f={formData:{name:{required:w.withMessage(S("validation.required"),q),sameAsName:w.withMessage(S("validation.company_name_not_same"),ae(p.selectedCompany.name))}}},c=H(f,{formData:e},{$scope:!1});async function B(){if(c.value.$touch(),c.value.$invalid)return!0;const y=p.companies[0];u.value=!0;try{const _=await p.deleteCompany(e);console.log(_.data.success),_.data.success&&(m(),await p.setSelectedCompany(y),V.push("/admin/dashboard"),await h.setIsAppLoaded(!1),await h.bootstrap()),u.value=!1}catch{u.value=!1}}function M(){e.id=null,e.name="",c.value.$reset()}function m(){v.closeModal(),setTimeout(()=>{M(),c.value.$reset()},300)}return(y,_)=>{const x=i("BaseInput"),U=i("BaseInputGroup"),s=i("BaseButton"),a=i("BaseIcon"),D=i("BaseModal");return I(),F(D,{show:b.value,onClose:m},{default:l(()=>[r("div",le,[r("div",de,[r("h6",ie,g(n(v).title),1),r("p",re,g(y.$t("settings.company_info.delete_company_modal_desc",{company:n(p).selectedCompany.name})),1)])]),r("form",{action:"",onSubmit:K(B,["prevent"])},[r("div",ue,[t(U,{label:y.$t("settings.company_info.delete_company_modal_label",{company:n(p).selectedCompany.name}),error:n(c).formData.name.$error&&n(c).formData.name.$errors[0].$message,required:""},{default:l(()=>[t(x,{modelValue:e.name,"onUpdate:modelValue":_[0]||(_[0]=d=>e.name=d),invalid:n(c).formData.name.$error,onInput:_[1]||(_[1]=d=>n(c).formData.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),r("div",me,[t(s,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:m},{default:l(()=>[k(g(y.$t("general.cancel")),1)]),_:1}),t(s,{loading:n(u),disabled:n(u),variant:"danger",type:"submit"},{left:l(d=>[n(u)?G("",!0):(I(),F(a,{key:0,name:"TrashIcon",class:O(d.class)},null,8,["class"]))]),default:l(()=>[k(" "+g(y.$t("general.delete")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}},ce={class:"space-y-6"},_e={key:0,class:"py-5"},fe={class:"text-lg leading-6 font-medium text-gray-900"},ye={class:"mt-2 max-w-xl text-sm text-gray-500"},ge={class:"mt-5"},be={__name:"CompanyInfoSettings",setup(P){const p=R(),v=A(),h=T(),{t:V}=E.useI18n(),S=te("utils");let u=C(!1);const e=J({name:null,logo:null,tax_id:null,vat_id:null,address:{address_street_1:"",address_street_2:"",website:"",country_id:null,state:"",city:"",phone:"",zip:""}});S.mergeSettings(e,{...p.selectedCompany});let b=C([]),f=C(null),c=C(null);const B=C(!1);e.logo&&b.value.push({image:e.logo});const M=N(()=>({name:{required:w.withMessage(V("validation.required"),q),minLength:w.withMessage(V("validation.name_min_length"),se(3))},address:{country_id:{required:w.withMessage(V("validation.required"),q)}}})),m=H(M,N(()=>e));v.fetchCountries();function y(s,a,D,d){c.value=d.name,f.value=a}function _(){f.value=null,B.value=!0}async function x(){if(m.value.$touch(),m.value.$invalid)return!0;if(u.value=!0,(await p.updateCompany(e)).data.data){if(f.value||B.value){let a=new FormData;f.value&&a.append("company_logo",JSON.stringify({name:c.value,data:f.value})),a.append("is_company_logo_removed",B.value),await p.updateCompanyLogo(a),f.value=null,B.value=!1}u.value=!1}u.value=!1}function U(s){h.openModal({title:V("settings.company_info.are_you_absolutely_sure"),componentName:"DeleteCompanyModal",size:"sm"})}return(s,a)=>{const D=i("BaseFileUploader"),d=i("BaseInputGroup"),z=i("BaseInputGrid"),$=i("BaseInput"),Q=i("BaseMultiselect"),j=i("BaseTextarea"),W=i("BaseIcon"),X=i("BaseButton"),Y=i("BaseDivider"),Z=i("BaseSettingCard");return I(),L(ne,null,[r("form",{onSubmit:K(x,["prevent"])},[t(Z,{title:s.$t("settings.company_info.company_info"),description:s.$t("settings.company_info.section_description")},{default:l(()=>[t(z,{class:"mt-5"},{default:l(()=>[t(d,{label:s.$t("settings.company_info.company_logo")},{default:l(()=>[t(D,{modelValue:n(b),"onUpdate:modelValue":a[0]||(a[0]=o=>oe(b)?b.value=o:b=o),base64:"",onChange:y,onRemove:_},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(z,{class:"mt-5"},{default:l(()=>[t(d,{label:s.$t("settings.company_info.company_name"),error:n(m).name.$error&&n(m).name.$errors[0].$message,required:""},{default:l(()=>[t($,{modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.name=o),invalid:n(m).name.$error,onBlur:a[2]||(a[2]=o=>n(m).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),t(d,{label:s.$t("settings.company_info.phone")},{default:l(()=>[t($,{modelValue:e.address.phone,"onUpdate:modelValue":a[3]||(a[3]=o=>e.address.phone=o)},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:s.$t("settings.company_info.country"),error:n(m).address.country_id.$error&&n(m).address.country_id.$errors[0].$message,required:""},{default:l(()=>[t(Q,{modelValue:e.address.country_id,"onUpdate:modelValue":a[4]||(a[4]=o=>e.address.country_id=o),label:"name",invalid:n(m).address.country_id.$error,options:n(v).countries,"value-prop":"id","can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","invalid","options"])]),_:1},8,["label","error"]),t(d,{label:s.$t("settings.company_info.state")},{default:l(()=>[t($,{modelValue:e.address.state,"onUpdate:modelValue":a[5]||(a[5]=o=>e.address.state=o),name:"state",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:s.$t("settings.company_info.city")},{default:l(()=>[t($,{modelValue:e.address.city,"onUpdate:modelValue":a[6]||(a[6]=o=>e.address.city=o),type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:s.$t("settings.company_info.zip")},{default:l(()=>[t($,{modelValue:e.address.zip,"onUpdate:modelValue":a[7]||(a[7]=o=>e.address.zip=o)},null,8,["modelValue"])]),_:1},8,["label"]),r("div",null,[t(d,{label:s.$t("settings.company_info.address")},{default:l(()=>[t(j,{modelValue:e.address.address_street_1,"onUpdate:modelValue":a[8]||(a[8]=o=>e.address.address_street_1=o),rows:"2"},null,8,["modelValue"])]),_:1},8,["label"]),t(j,{modelValue:e.address.address_street_2,"onUpdate:modelValue":a[9]||(a[9]=o=>e.address.address_street_2=o),rows:"2",row:2,class:"mt-2"},null,8,["modelValue"])]),r("div",ce,[t(d,{label:s.$t("settings.company_info.tax_id")},{default:l(()=>[t($,{modelValue:e.tax_id,"onUpdate:modelValue":a[10]||(a[10]=o=>e.tax_id=o),type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:s.$t("settings.company_info.vat_id")},{default:l(()=>[t($,{modelValue:e.vat_id,"onUpdate:modelValue":a[11]||(a[11]=o=>e.vat_id=o),type:"text"},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1}),t(X,{loading:n(u),disabled:n(u),type:"submit",class:"mt-6"},{left:l(o=>[n(u)?G("",!0):(I(),F(W,{key:0,class:O(o.class),name:"SaveIcon"},null,8,["class"]))]),default:l(()=>[k(" "+g(s.$t("settings.company_info.save")),1)]),_:1},8,["loading","disabled"]),n(p).companies.length!==1?(I(),L("div",_e,[t(Y,{class:"my-4"}),r("h3",fe,g(s.$t("settings.company_info.delete_company")),1),r("div",ye,[r("p",null,g(s.$t("settings.company_info.delete_company_description")),1)]),r("div",ge,[r("button",{type:"button",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm",onClick:U},g(s.$t("general.delete")),1)])])):G("",!0)]),_:1},8,["title","description"])],32),t(pe)],64)}}};export{be as default};
