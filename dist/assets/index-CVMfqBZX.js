import{Z as T,aa as w,c as d,a as c,a1 as h,N as u,ab as E,F as N,k as y,V as C,X as j,l as k,h as R,ac as _,n as P,H as U,e as $,d as q,r as Z,u as G,j as X,A as z,G as J,b as K,s as Q,f as v,i as Y,m as tt,E as et,x as at,z as nt,t as rt,ad as st,ae as F,af as D,ag as S,ah as it,ai as V,aj as ot,ak as B,al as lt,am as O,an as W,ao as ct,ap as x}from"./index-B_v6adOj.js";import{a as ut,b as dt}from"./InfoBox.vue_vue_type_script_setup_true_lang-BoagT56j.js";import{b as bt}from"./index-DgUDcEHW.js";var pt=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,ft={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},vt=T.extend({name:"tabs",style:pt,classes:ft}),ht={name:"BaseTabs",extends:w,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:vt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},$t={name:"Tabs",extends:ht,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function mt(t,e,n,r,o,a){return c(),d("div",u({class:t.cx("root")},t.ptmi("root")),[h(t.$slots,"default")],16)}$t.render=mt;var gt={root:"p-tabpanels"},yt=T.extend({name:"tabpanels",classes:gt}),kt={name:"BaseTabPanels",extends:w,props:{},style:yt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Tt={name:"TabPanels",extends:kt,inheritAttrs:!1};function wt(t,e,n,r,o,a){return c(),d("div",u({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[h(t.$slots,"default")],16)}Tt.render=wt;var Bt={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},xt=T.extend({name:"tabpanel",classes:Bt}),Ct={name:"BaseTabPanel",extends:w,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:xt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},_t={name:"TabPanel",extends:Ct,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return E((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return u(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Pt(t,e,n,r,o,a){var s,i;return a.$pcTabs?(c(),d(N,{key:1},[t.asChild?h(t.$slots,"default",{key:1,class:P(t.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(c(),d(N,{key:0},[!((s=a.$pcTabs)!==null&&s!==void 0&&s.lazy)||a.active?C((c(),k(_(t.as),u({key:0,class:t.cx("root")},a.attrs),{default:R(function(){return[h(t.$slots,"default")]}),_:3},16,["class"])),[[j,(i=a.$pcTabs)!==null&&i!==void 0&&i.lazy?!0:a.active]]):y("",!0)],64))],64)):h(t.$slots,"default",{key:0})}_t.render=Pt;const Lt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function At(t,e){return c(),d("svg",Lt,e[0]||(e[0]=[$("path",{fill:"currentColor",d:"M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"},null,-1)]))}const St=U({name:"mdi-lock",render:At}),Nt={class:"divide-y divide-surface-300 dark:divide-surface-700 divide-solid border-x border-y rounded-sm border-surface-300 dark:border-surface-700"},Vt=["title","onClick"],It=["title"],zt=q({__name:"PairSummary",props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean},startingBalance:{required:!1,type:Number,default:0}},setup(t){const e=Z(""),n=t,r=G(),o=X(()=>{const a=[];return n.pairlist.forEach(s=>{const i=n.trades.filter(f=>f.pair===s),b=n.currentLocks.filter(f=>f.pair===s);let m="",p;b.sort((f,H)=>f.lock_end_timestamp>H.lock_end_timestamp?-1:1),b.length>0&&([p]=b,m=`${z(p.lock_end_timestamp)} - ${p.side} - ${p.reason}`);let l="",g=0,L=0;i.forEach(f=>{g+=f.profit_ratio,L+=f.profit_abs??0}),n.sortMethod=="profit"&&n.startingBalance&&(g=L/n.startingBalance);const I=i.length,A=I?i[0]:void 0;i.length>0&&(l=`Current profit: ${J(g)}`),A&&(l+=`
Open since: ${z(A.open_timestamp)}`),(e.value===""||s.toLocaleLowerCase().includes(e.value.toLocaleLowerCase()))&&a.push({pair:s,trade:A,locks:p,lockReason:m,profitString:l,profit:g,profitAbs:L,tradeCount:I})}),n.sortMethod==="profit"?a.sort((s,i)=>s.profit>i.profit?-1:1):a.sort((s,i)=>s.trade&&!i.trade?-1:s.trade&&i.trade?s.trade.trade_id>i.trade.trade_id?1:-1:!s.locks&&i.locks?-1:s.locks&&i.locks?s.locks.lock_end_timestamp>i.locks.lock_end_timestamp?1:-1:1),a});return(a,s)=>{const i=Q,b=St,m=ut,p=dt;return c(),d("div",null,[$("div",{"label-for":"trade-filter",class:P(["mb-2",{"me-4":t.backtestMode,"me-2":!t.backtestMode}])},[K(i,{id:"trade-filter",modelValue:v(e),"onUpdate:modelValue":s[0]||(s[0]=l=>Y(e)?e.value=l:null),type:"text",placeholder:"Filter",class:"w-full"},null,8,["modelValue"])],2),$("ul",Nt,[(c(!0),d(N,null,tt(v(o),l=>(c(),d("li",{key:l.pair,button:"",class:P(["flex cursor-pointer last:rounded-b justify-between items-center px-1 py-1.5",{"bg-primary dark:border-primary text-primary-contrast":l.pair===v(r).activeBot.selectedPair}]),title:`${("formatPriceCurrency"in a?a.formatPriceCurrency:v(et))(l.profitAbs,v(r).activeBot.stakeCurrency,v(r).activeBot.stakeCurrencyDecimals)} - ${l.pair} - ${l.tradeCount} trades`,onClick:g=>v(r).activeBot.selectedPair=l.pair},[$("div",null,[at(nt(l.pair)+" ",1),l.locks?(c(),d("span",{key:0,title:l.lockReason},[K(b)],8,It)):y("",!0)]),l.trade&&!t.backtestMode?(c(),k(m,{key:0,trade:l.trade},null,8,["trade"])):y("",!0),t.backtestMode&&l.tradeCount>0?(c(),k(p,{key:1,"profit-ratio":l.profit,"stake-currency":v(r).activeBot.stakeCurrency},null,8,["profit-ratio","stake-currency"])):y("",!0)],10,Vt))),128))])])}}}),ee=rt(zt,[["__scopeId","data-v-88c2e308"]]);var M={name:"ChevronLeftIcon",extends:st};function Kt(t,e,n,r,o,a){return c(),d("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[$("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}M.render=Kt;var Ot={root:"p-tablist",content:function(e){var n=e.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Et=T.extend({name:"tablist",classes:Ot}),Rt={name:"BaseTabList",extends:w,props:{},style:Et,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Ft={name:"TabList",extends:Rt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),r=S(e)-n,o=Math.abs(e.scrollLeft),a=r*.8,s=o-a,i=Math.max(s,0);e.scrollLeft=O(e)?-1*i:i},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),r=S(e)-n,o=Math.abs(e.scrollLeft),a=r*.8,s=o+a,i=e.scrollWidth-r,b=Math.min(s,i);e.scrollLeft=O(e)?-1*b:b},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,r=e.inkbar,o=e.tabs;if(r){var a=V(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(r.style.height=ot(a)+"px",r.style.top=B(a).top-B(o).top+"px"):(r.style.width=lt(a)+"px",r.style.left=B(a).left-B(o).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,r=e.content,o=r.scrollTop,a=r.scrollWidth,s=r.scrollHeight,i=r.offsetWidth,b=r.offsetHeight,m=Math.abs(r.scrollLeft),p=[S(r),it(r)],l=p[0],g=p[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=n.offsetHeight>=b&&parseInt(o)!==s-g):(this.isPrevButtonEnabled=m!==0,this.isNextButtonEnabled=n.offsetWidth>=i&&parseInt(m)!==a-l)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,r=e.nextButton,o=0;return this.showNavigators&&(o=((n==null?void 0:n.offsetWidth)||0)+((r==null?void 0:r.offsetWidth)||0)),o}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return D({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:M,ChevronRightIcon:bt},directives:{ripple:F}},Dt=["data-p"],Wt=["aria-label","tabindex"],Mt=["data-p"],Ht=["aria-orientation"],jt=["aria-label","tabindex"];function Ut(t,e,n,r,o,a){var s=W("ripple");return c(),d("div",u({ref:"list",class:t.cx("root"),"data-p":a.dataP},t.ptmi("root")),[a.showNavigators&&o.isPrevButtonEnabled?C((c(),d("button",u({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),k(_(a.templates.previcon||"ChevronLeftIcon"),u({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Wt)),[[s]]):y("",!0),$("div",u({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),"data-p":a.dataP},t.ptm("content")),[$("div",u({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[h(t.$slots,"default"),$("span",u({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ht)],16,Mt),a.showNavigators&&o.isNextButtonEnabled?C((c(),d("button",u({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),k(_(a.templates.nexticon||"ChevronRightIcon"),u({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,jt)),[[s]]):y("",!0)],16,Dt)}Ft.render=Ut;var qt={root:function(e){var n=e.instance,r=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":r.disabled}]}},Zt=T.extend({name:"tab",classes:qt}),Gt={name:"BaseTab",extends:w,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Zt,provide:function(){return{$pcTab:this,$parentInstance:this}}},Xt={name:"Tab",extends:Gt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?e:e.nextElementSibling;return r?x(r,"data-p-disabled")||x(r,"data-pc-section")==="activebar"?this.findNextTab(r):V(r,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?e:e.previousElementSibling;return r?x(r,"data-p-disabled")||x(r,"data-pc-section")==="activebar"?this.findPrevTab(r):V(r,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){ct(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return E((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return u(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return D({active:this.active})}},directives:{ripple:F}};function Jt(t,e,n,r,o,a){var s=W("ripple");return t.asChild?h(t.$slots,"default",{key:1,dataP:a.dataP,class:P(t.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):C((c(),k(_(t.as),u({key:0,class:t.cx("root"),"data-p":a.dataP,onClick:a.onClick},a.attrs),{default:R(function(){return[h(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[s]])}Xt.render=Jt;export{ee as _,Ft as a,Xt as b,Tt as c,_t as d,$t as s};
//# sourceMappingURL=index-CVMfqBZX.js.map
