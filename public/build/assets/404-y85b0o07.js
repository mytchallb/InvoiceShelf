import{L as u,e as m,k as d,r as n,o as p,c as h,b as s,t as o,a as c,w as _,p as f}from"./main-q-Vi2wV1.js";const x={class:"w-full h-screen"},g={class:"flex items-center justify-center w-full h-full"},w={class:"flex flex-col items-center justify-center"},y={class:"text-primary-500",style:{"font-size":"10rem"}},b={class:"mb-10 text-3xl text-primary-500"},B={__name:"404",setup(v){const e=u();m();const l=d(()=>{if(e.path.indexOf("customer")>-1&&e.params.company)return`/${e.params.company}/customer/dashboard`;if(e.params.catchAll){let a=e.params.catchAll.indexOf("/");return a>-1?`/${e.params.catchAll.substring(a,0)}/customer/dashboard`:"/"}else return"/admin/dashboard"});return(t,a)=>{const r=n("BaseIcon"),i=n("router-link");return p(),h("div",x,[s("div",g,[s("div",w,[s("h1",y,o(t.$t("general.four_zero_four")),1),s("h5",b,o(t.$t("general.you_got_lost")),1),c(i,{class:"flex items-center w-32 h-12 px-3 py-1 text-base font-medium leading-none text-center text-white rounded whitespace-nowrap bg-primary-500 btn-lg hover:text-white",to:l.value},{default:_(()=>[c(r,{name:"ArrowLeftIcon",class:"mr-2 text-white icon"}),f(" "+o(t.$t("general.go_home")),1)]),_:1},8,["to"])])])])}}};export{B as default};
