import{aR as fe,a8 as pe,a7 as ge,u as be,M as Ie,f as b,v as Be,e as ye,H as he,k,a9 as Ce,aa as ke,r as o,o as I,m as B,w as s,a,ac as R,ad as V,l as i,J as $,p as m,t as _,Q as y,K as M,a6 as q,b as p}from"./main-q-Vi2wV1.js";import{_ as Re}from"./SendInvoiceModal-hvwojAIr.js";import{_ as Ve}from"./RecurringInvoiceIndexDropdown-Exjcr0RW.js";import{_ as $e}from"./MoonwalkerIcon-BRIfbOjP.js";import"./mail-driver-oRoVIHQf.js";const Ee=p("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Ne={class:"relative table-container"},Ae={class:"relative flex items-center justify-between h-10 mt-5 list-none border-b-2 border-gray-200 border-solid"},Se={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Te={class:"absolute items-center left-6 top-2.5 select-none"},we={class:"relative block"},Pe={__name:"Index",setup(xe){const c=fe();pe();const H=ge(),w=be(),E=Ie(),h=b(null),{t:r}=Be.useI18n(),g=b(!1),x=b(["ACTIVE","ON_HOLD","ALL"]),N=b(!0),v=b("recurring-invoices.all");ye();let l=he({customer_id:"",status:"",from_date:"",to_date:""});const D=k(()=>!c.totalRecurringInvoices&&!N.value),F=k({get:()=>c.selectedRecurringInvoices,set:e=>c.selectRecurringInvoice(e)}),j=k(()=>[{key:"checkbox",thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"starts_at",label:r("recurring_invoices.starts_at"),thClass:"extra",tdClass:"font-medium"},{key:"customer",label:r("invoices.customer")},{key:"frequency",label:r("recurring_invoices.frequency.title")},{key:"status",label:r("invoices.status")},{key:"total",label:r("invoices.total")},{key:"actions",label:r("recurring_invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);Ce(l,()=>{X()},{debounce:500}),ke(()=>{c.selectAllField&&c.selectAllRecurringInvoices()});const W=k(()=>x.value.findIndex(e=>e===l.status));function z(){return E.hasAbilities([y.DELETE_RECURRING_INVOICE,y.EDIT_RECURRING_INVOICE,y.VIEW_RECURRING_INVOICE])}function J(e){const n=c.frequencies.find(u=>u.value===e);return n?n.label:`CUSTOM: ${e}`}function A(){h.value&&h.value.refresh()}async function K({page:e,filter:n,sort:u}){let f={customer_id:l.customer_id,status:l.status,from_date:l.from_date,to_date:l.to_date,orderByField:u.fieldName||"created_at",orderBy:u.order||"desc",page:e};N.value=!0;let d=await c.fetchRecurringInvoices(f);return N.value=!1,{data:d.data.data,pagination:{totalPages:d.data.meta.last_page,currentPage:e,totalCount:d.data.meta.total,limit:10}}}function Q(e){if(v.value==e.title)return!0;switch(v.value=e.title,e.title){case r("recurring_invoices.active"):l.status="ACTIVE";break;case r("recurring_invoices.on_hold"):l.status="ON_HOLD";break;case r("recurring_invoices.all"):l.status="ALL";break}}function X(){c.$patch(e=>{e.selectedRecurringInvoices=[],e.selectAllField=!1}),A()}function L(){l.customer_id="",l.status="",l.from_date="",l.to_date="",l.invoice_number="",v.value=r("general.all")}async function Y(e=null){H.openDialog({title:r("general.are_you_sure"),message:r("invoices.confirm_delete"),yesLabel:r("general.ok"),noLabel:r("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async n=>{n&&await c.deleteMultipleRecurringInvoices(e).then(u=>{u.data.success?(A(),c.$patch(f=>{f.selectedRecurringInvoices=[],f.selectAllField=!1}),w.showNotification({type:"success",message:r("recurring_invoices.deleted_message",2)})):u.data.error&&w.showNotification({type:"error",message:u.data.message})})})}function Z(){g.value&&L(),g.value=!g.value}async function ee(e,n){l.status="",A()}function te(e){switch(e){case"ACTIVE":v.value=r("recurring_invoices.active");break;case"ON_HOLD":v.value=r("recurring_invoices.on_hold");break;case"ALL":v.value=r("recurring_invoices.all");break}}return(e,n)=>{const u=o("BaseBreadcrumbItem"),f=o("BaseBreadcrumb"),d=o("BaseIcon"),S=o("BaseButton"),O=o("router-link"),ae=o("BasePageHeader"),se=o("BaseCustomerSelectInput"),C=o("BaseInputGroup"),ne=o("BaseMultiselect"),U=o("BaseDatePicker"),le=o("BaseFilterWrapper"),oe=o("BaseEmptyPlaceholder"),T=o("BaseTab"),re=o("BaseTabGroup"),ie=o("BaseDropdownItem"),ce=o("BaseDropdown"),P=o("BaseCheckbox"),G=o("BaseText"),ue=o("BaseRecurringInvoiceStatusBadge"),de=o("BaseFormatMoney"),me=o("BaseTable"),_e=o("BasePage");return I(),B(_e,null,{default:s(()=>[a(Re),a(ae,{title:e.$t("recurring_invoices.title")},{actions:s(()=>[R(a(S,{variant:"primary-outline",onClick:Z},{right:s(t=>[g.value?(I(),B(d,{key:1,name:"XIcon",class:$(t.class)},null,8,["class"])):(I(),B(d,{key:0,name:"FilterIcon",class:$(t.class)},null,8,["class"]))]),default:s(()=>[m(_(e.$t("general.filter"))+" ",1)]),_:1},512),[[V,i(c).totalRecurringInvoices]]),i(E).hasAbilities(i(y).CREATE_RECURRING_INVOICE)?(I(),B(O,{key:0,to:"recurring-invoices/create"},{default:s(()=>[a(S,{variant:"primary",class:"ml-4"},{left:s(t=>[a(d,{name:"PlusIcon",class:$(t.class)},null,8,["class"])]),default:s(()=>[m(" "+_(e.$t("recurring_invoices.new_invoice")),1)]),_:1})]),_:1})):M("",!0)]),default:s(()=>[a(f,null,{default:s(()=>[a(u,{title:e.$t("general.home"),to:"dashboard"},null,8,["title"]),a(u,{title:e.$t("recurring_invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),R(a(le,{onClear:L},{default:s(()=>[a(C,{label:e.$t("customers.customer",1)},{default:s(()=>[a(se,{modelValue:i(l).customer_id,"onUpdate:modelValue":n[0]||(n[0]=t=>i(l).customer_id=t),placeholder:e.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(C,{label:e.$t("recurring_invoices.status")},{default:s(()=>[a(ne,{modelValue:i(l).status,"onUpdate:modelValue":[n[1]||(n[1]=t=>i(l).status=t),te],options:x.value,searchable:"",placeholder:e.$t("general.select_a_status"),onRemove:n[2]||(n[2]=t=>ee())},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),a(C,{label:e.$t("general.from")},{default:s(()=>[a(U,{modelValue:i(l).from_date,"onUpdate:modelValue":n[3]||(n[3]=t=>i(l).from_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),Ee,a(C,{label:e.$t("general.to")},{default:s(()=>[a(U,{modelValue:i(l).to_date,"onUpdate:modelValue":n[4]||(n[4]=t=>i(l).to_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[V,g.value]]),R(a(oe,{title:e.$t("recurring_invoices.no_invoices"),description:e.$t("recurring_invoices.list_of_invoices")},q({default:s(()=>[a($e,{class:"mt-5 mb-4"})]),_:2},[i(E).hasAbilities(i(y).CREATE_RECURRING_INVOICE)?{name:"actions",fn:s(()=>[a(S,{variant:"primary-outline",onClick:n[5]||(n[5]=t=>e.$router.push("/admin/recurring-invoices/create"))},{left:s(t=>[a(d,{name:"PlusIcon",class:$(t.class)},null,8,["class"])]),default:s(()=>[m(" "+_(e.$t("recurring_invoices.add_new_invoice")),1)]),_:1})]),key:"0"}:void 0]),1032,["title","description"]),[[V,D.value]]),R(p("div",Ne,[p("div",Ae,[a(re,{class:"-mb-5","default-index":W.value,onChange:Q},{default:s(()=>[a(T,{title:e.$t("recurring_invoices.all"),filter:"ALL"},null,8,["title"]),a(T,{title:e.$t("recurring_invoices.active"),filter:"ACTIVE"},null,8,["title"]),a(T,{title:e.$t("recurring_invoices.on_hold"),filter:"ON_HOLD"},null,8,["title"])]),_:1},8,["default-index"]),i(c).selectedRecurringInvoices.length?(I(),B(ce,{key:0,class:"absolute float-right"},{activator:s(()=>[p("span",Se,[m(_(e.$t("general.actions"))+" ",1),a(d,{name:"ChevronDownIcon",class:"h-5"})])]),default:s(()=>[a(ie,{onClick:n[6]||(n[6]=t=>Y())},{default:s(()=>[a(d,{name:"TrashIcon",class:"mr-3 text-gray-600"}),m(" "+_(e.$t("general.delete")),1)]),_:1})]),_:1})):M("",!0)]),a(me,{ref_key:"table",ref:h,data:K,columns:j.value,"placeholder-count":i(c).totalRecurringInvoices>=20?10:5,class:"mt-10"},q({header:s(()=>[p("div",Te,[a(P,{modelValue:i(c).selectAllField,"onUpdate:modelValue":n[7]||(n[7]=t=>i(c).selectAllField=t),variant:"primary",onChange:i(c).selectAllRecurringInvoices},null,8,["modelValue","onChange"])])]),"cell-checkbox":s(({row:t})=>[p("div",we,[a(P,{id:t.id,modelValue:F.value,"onUpdate:modelValue":n[8]||(n[8]=ve=>F.value=ve),value:t.data.id},null,8,["id","modelValue","value"])])]),"cell-starts_at":s(({row:t})=>[m(_(t.data.formatted_starts_at),1)]),"cell-customer":s(({row:t})=>[a(O,{to:{path:`recurring-invoices/${t.data.id}/view`}},{default:s(()=>[a(G,{text:t.data.customer.name,length:30,tag:"span",class:"font-medium text-primary-500 flex flex-col"},null,8,["text"]),a(G,{text:t.data.customer.contact_name?t.data.customer.contact_name:"",length:30,tag:"span",class:"text-xs text-gray-400"},null,8,["text"])]),_:2},1032,["to"])]),"cell-frequency":s(({row:t})=>[m(_(J(t.data.frequency)),1)]),"cell-status":s(({row:t})=>[a(ue,{status:t.data.status,class:"px-3 py-1"},{default:s(()=>[m(_(t.data.status),1)]),_:2},1032,["status"])]),"cell-total":s(({row:t})=>[a(de,{amount:t.data.total,currency:t.data.customer.currency},null,8,["amount","currency"])]),_:2},[z?{name:"cell-actions",fn:s(({row:t})=>[a(Ve,{row:t.data,table:h.value},null,8,["row","table"])]),key:"0"}:void 0]),1032,["columns","placeholder-count"])],512),[[V,!D.value]])]),_:1})}}};export{Pe as default};
