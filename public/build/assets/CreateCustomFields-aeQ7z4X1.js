import{v as E,g as T,ag as g,j as P,k as _,ax as I,ay as s,r as f,o as l,m as c,w as v,a3 as D,l as m,ae as q,aE as V,z as F,c as y,a as h,N as L,O,K as S,ab as b}from"./main-q-Vi2wV1.js";import{_ as x}from"./dynamic-import-helper-0gtGTknh.js";const C={__name:"CreateCustomFieldsSingle",props:{field:{type:Object,required:!0},customFieldScope:{type:String,required:!0},index:{type:Number,required:!0},store:{type:Object,required:!0},storeProp:{type:String,required:!0}},setup(e){const i=e,{t:o}=E.useI18n(),d={value:{required:T.withMessage(o("validation.required"),g(i.field.is_required))}},a=P(d,_(()=>i.field),{$scope:i.customFieldScope}),t=_(()=>i.field.type?I(()=>x(Object.assign({"./types/DateTimeType.vue":()=>s(()=>import("./DateTimeType-01SBDxmZ.js"),__vite__mapDeps([0,1,2])),"./types/DateType.vue":()=>s(()=>import("./DateType-yg10WV5l.js"),__vite__mapDeps([3,1,2])),"./types/DropdownType.vue":()=>s(()=>import("./DropdownType-z-8cLdjx.js"),__vite__mapDeps([4,1,2])),"./types/InputType.vue":()=>s(()=>import("./InputType-J4RQjsLS.js"),__vite__mapDeps([5,1,2])),"./types/NumberType.vue":()=>s(()=>import("./NumberType-Ec32GKLd.js"),__vite__mapDeps([6,1,2])),"./types/PhoneType.vue":()=>s(()=>import("./PhoneType-muYx8dD2.js"),__vite__mapDeps([7,1,2])),"./types/SwitchType.vue":()=>s(()=>import("./SwitchType-X7dC5A2U.js"),__vite__mapDeps([8,1,2])),"./types/TextAreaType.vue":()=>s(()=>import("./TextAreaType-Hj7HozVf.js"),__vite__mapDeps([9,1,2])),"./types/TimeType.vue":()=>s(()=>import("./TimeType-bEwasr-1.js"),__vite__mapDeps([10,1,2])),"./types/UrlType.vue":()=>s(()=>import("./UrlType-reV0w2s1.js"),__vite__mapDeps([11,1,2]))}),`./types/${i.field.type}Type.vue`)):!1);return(u,r)=>{const n=f("BaseInputGroup");return l(),c(n,{label:e.field.label,required:!!e.field.is_required,error:m(a).value.$error&&m(a).value.$errors[0].$message},{default:v(()=>[(l(),c(D(t.value),{modelValue:e.field.value,"onUpdate:modelValue":r[0]||(r[0]=p=>e.field.value=p),options:e.field.options,invalid:m(a).value.$error,placeholder:e.field.placeholder},null,8,["modelValue","options","invalid","placeholder"]))]),_:1},8,["label","required","error"])}}},A={key:0},B={__name:"CreateCustomFields",props:{store:{type:Object,required:!0},storeProp:{type:String,required:!0},isEdit:{type:Boolean,default:!1},type:{type:String,default:null},gridLayout:{type:String,default:"two-column"},isLoading:{type:Boolean,default:null},customFieldScope:{type:String,required:!0}},setup(e){const i=q(),o=e;a();function d(){o.isEdit&&o.store[o.storeProp].fields.forEach(t=>{const u=o.store[o.storeProp].customFields.findIndex(r=>r.id===t.custom_field_id);if(u>-1){let r=t.default_answer;r&&t.custom_field.type==="DateTime"&&(r=b(t.default_answer,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm")),o.store[o.storeProp].customFields[u]={...t,id:t.custom_field_id,value:r,label:t.custom_field.label,options:t.custom_field.options,is_required:t.custom_field.is_required,placeholder:t.custom_field.placeholder,order:t.custom_field.order}}})}async function a(){let u=(await i.fetchCustomFields({type:o.type,limit:"all"})).data.data;u.map(r=>r.value=r.default_answer),o.store[o.storeProp].customFields=V.sortBy(u,r=>r.order),d()}return F(()=>o.store[o.storeProp].fields,t=>{d()}),(t,u)=>{const r=f("BaseInputGrid");return e.store[e.storeProp]&&e.store[e.storeProp].customFields.length>0&&!e.isLoading?(l(),y("div",A,[h(r,{layout:e.gridLayout},{default:v(()=>[(l(!0),y(L,null,O(e.store[e.storeProp].customFields,(n,p)=>(l(),c(C,{key:n.id,"custom-field-scope":e.customFieldScope,store:e.store,"store-prop":e.storeProp,index:p,field:n},null,8,["custom-field-scope","store","store-prop","index","field"]))),128))]),_:1},8,["layout"])])):S("",!0)}}};export{B as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DateTimeType-01SBDxmZ.js","assets/main-q-Vi2wV1.js","assets/main-qvsb96KG.css","assets/DateType-yg10WV5l.js","assets/DropdownType-z-8cLdjx.js","assets/InputType-J4RQjsLS.js","assets/NumberType-Ec32GKLd.js","assets/PhoneType-muYx8dD2.js","assets/SwitchType-X7dC5A2U.js","assets/TextAreaType-Hj7HozVf.js","assets/TimeType-bEwasr-1.js","assets/UrlType-reV0w2s1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
