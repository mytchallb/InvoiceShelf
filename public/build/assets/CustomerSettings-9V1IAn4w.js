import{L,v as A,f as p,k as h,j as D,r as v,o as c,c as G,a as u,w as i,b as I,t as C,l as e,n as _,m as y,J as P,K as j,p as O,q as z,g,h as k,I as S,i as J,a0 as K}from"./main-q-Vi2wV1.js";import{a as T,u as H}from"./global-y1AHXbzn.js";import"./auth-KwXiZJ7J.js";const Q={class:"font-bold text-left"},W={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},X={class:"grid gap-6 sm:grid-col-1 md:grid-cols-2 mt-6"},Y=I("span",null,null,-1),ae={__name:"CustomerSettings",setup(Z){const r=T();H(),L();const{t:m,tm:U}=A.useI18n();let f=p([]),d=p(!1),w=p(null),n=p(!1),l=p(!1);const b=p(!1);r.userForm.avatar&&f.value.push({image:r.userForm.avatar});const q=h(()=>({userForm:{name:{required:g.withMessage(m("validation.required"),k),minLength:g.withMessage(m("validation.name_min_length",{count:3}),S(3))},email:{required:g.withMessage(m("validation.required"),k),email:g.withMessage(m("validation.email_incorrect"),J)},password:{minLength:g.withMessage(m("validation.password_min_length",{count:8}),S(8))},confirm_password:{sameAsPassword:g.withMessage(m("validation.password_incorrect"),K(r.userForm.password))}}})),o=D(q,h(()=>r));function x(t,s){w.value=s}function M(){w.value=null,b.value=!0}function E(){if(o.value.userForm.$touch(),o.value.userForm.$invalid)return!0;d.value=!0;let t=new FormData;t.append("name",r.userForm.name),t.append("email",r.userForm.email),r.userForm.password!=null&&r.userForm.password!==void 0&&r.userForm.password!==""&&t.append("password",r.userForm.password),w.value&&t.append("customer_avatar",w.value),t.append("is_customer_avatar_removed",b.value),r.updateCurrentUser({data:t,message:U("settings.account_settings.updated_message")}).then(s=>{s.data.data&&(d.value=!1,r.$patch(V=>{V.userForm.password="",V.userForm.confirm_password=""}),w.value=null,b.value=!1)}).catch(s=>{d.value=!1})}return(t,s)=>{const V=v("BaseFileUploader"),F=v("BaseInputGroup"),B=v("BaseInput"),$=v("BaseIcon"),N=v("BaseButton"),R=v("BaseCard");return c(),G("form",{class:"relative h-full mt-4",onSubmit:z(E,["prevent"])},[u(R,null,{default:i(()=>[I("div",null,[I("h6",Q,C(t.$t("settings.account_settings.account_settings")),1),I("p",W,C(t.$t("settings.account_settings.section_description")),1)]),I("div",X,[u(F,{label:t.$t("settings.account_settings.profile_picture")},{default:i(()=>[u(V,{modelValue:e(f),"onUpdate:modelValue":s[0]||(s[0]=a=>_(f)?f.value=a:f=a),avatar:!0,accept:"image/*",onChange:x,onRemove:M},null,8,["modelValue"])]),_:1},8,["label"]),Y,u(F,{label:t.$t("settings.account_settings.name"),error:e(o).userForm.name.$error&&e(o).userForm.name.$errors[0].$message,required:""},{default:i(()=>[u(B,{modelValue:e(r).userForm.name,"onUpdate:modelValue":s[1]||(s[1]=a=>e(r).userForm.name=a),invalid:e(o).userForm.name.$error,onInput:s[2]||(s[2]=a=>e(o).userForm.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),u(F,{label:t.$t("settings.account_settings.email"),error:e(o).userForm.email.$error&&e(o).userForm.email.$errors[0].$message,required:""},{default:i(()=>[u(B,{modelValue:e(r).userForm.email,"onUpdate:modelValue":s[3]||(s[3]=a=>e(r).userForm.email=a),invalid:e(o).userForm.email.$error,onInput:s[4]||(s[4]=a=>e(o).userForm.email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),u(F,{error:e(o).userForm.password.$error&&e(o).userForm.password.$errors[0].$message,label:t.$t("settings.account_settings.password")},{default:i(()=>[u(B,{modelValue:e(r).userForm.password,"onUpdate:modelValue":s[7]||(s[7]=a=>e(r).userForm.password=a),type:e(n)?"text":"password",invalid:e(o).userForm.password.$error,onInput:s[8]||(s[8]=a=>e(o).userForm.password.$touch())},{right:i(()=>[e(n)?(c(),y($,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[5]||(s[5]=a=>_(n)?n.value=!e(n):n=!e(n))})):(c(),y($,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[6]||(s[6]=a=>_(n)?n.value=!e(n):n=!e(n))}))]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["error","label"]),u(F,{label:t.$t("settings.account_settings.confirm_password"),error:e(o).userForm.confirm_password.$error&&e(o).userForm.confirm_password.$errors[0].$message},{default:i(()=>[u(B,{modelValue:e(r).userForm.confirm_password,"onUpdate:modelValue":s[11]||(s[11]=a=>e(r).userForm.confirm_password=a),type:e(l)?"text":"password",invalid:e(o).userForm.confirm_password.$error,onInput:s[12]||(s[12]=a=>e(o).userForm.confirm_password.$touch())},{right:i(()=>[e(l)?(c(),y($,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[9]||(s[9]=a=>_(l)?l.value=!e(l):l=!e(l))})):(c(),y($,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[10]||(s[10]=a=>_(l)?l.value=!e(l):l=!e(l))}))]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["label","error"])]),u(N,{loading:e(d),disabled:e(d),class:"mt-6"},{left:i(a=>[e(d)?j("",!0):(c(),y($,{key:0,name:"SaveIcon",class:P(a.class)},null,8,["class"]))]),default:i(()=>[O(" "+C(t.$t("general.save")),1)]),_:1},8,["loading","disabled"])]),_:1})],32)}}};export{ae as default};
