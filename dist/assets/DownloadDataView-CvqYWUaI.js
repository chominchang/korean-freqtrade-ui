import{_ as q}from"./DraggableContainer.vue_vue_type_script_setup_true_lang-DHspYSQf.js";import{_ as G}from"./ExchangeSelect.vue_vue_type_script_setup_true_lang-DDqJuBNR.js";import{Z as K,aa as Q,af as j,c as i,a as s,k as V,N as M,a1 as ee,x as _,z as $,H as ne,e as t,d as I,c9 as te,l as b,F as A,m as J,b as o,f as r,g as W,h as p,B as se,j as ae,r as v,u as re,R as oe,S as ie,i as N,W as le,a2 as de,Y as R,V as F,c2 as ue,X as L,t as me}from"./index-B_v6adOj.js";import{_ as ce,a as pe}from"./chevron-up-Cdlm2Zlx.js";import{s as ge}from"./index-B9PkDuDZ.js";import{_ as fe}from"./TimeRangeSelect.vue_vue_type_script_setup_true_lang-6P7vX6fe.js";import{_ as _e}from"./check-D6h_suYs.js";import"./plus-box-outline-CSP7u_fJ.js";var ve=({dt:n})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${n("progressbar.height")};
    background: ${n("progressbar.background")};
    border-radius: ${n("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${n("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${n("progressbar.label.color")};
    font-size: ${n("progressbar.label.font.size")};
    font-weight: ${n("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,be={root:function(d){var u=d.instance;return["p-progressbar p-component",{"p-progressbar-determinate":u.determinate,"p-progressbar-indeterminate":u.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},xe=K.extend({name:"progressbar",style:ve,classes:be}),he={name:"BaseProgressBar",extends:Q,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:xe,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},X={name:"ProgressBar",extends:he,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return j({determinate:this.determinate,indeterminate:this.indeterminate})}}},ke=["aria-valuenow","data-p"],ye=["data-p"],we=["data-p"],Se=["data-p"];function Ve(n,d,u,y,m,g){return s(),i("div",M({role:"progressbar",class:n.cx("root"),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100","data-p":g.dataP},n.ptmi("root")),[g.determinate?(s(),i("div",M({key:0,class:n.cx("value"),style:g.progressStyle,"data-p":g.dataP},n.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(s(),i("div",M({key:0,class:n.cx("label"),"data-p":g.dataP},n.ptm("label")),[ee(n.$slots,"default",{},function(){return[_($(n.value+"%"),1)]})],16,we)):V("",!0)],16,ye)):g.indeterminate?(s(),i("div",M({key:1,class:n.cx("value"),"data-p":g.dataP},n.ptm("value")),null,16,Se)):V("",!0)],16,ke)}X.render=Ve;const $e={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function Te(n,d){return s(),i("svg",$e,d[0]||(d[0]=[t("path",{fill:"currentColor",d:"M8 17v-2h8v2zm8-7l-4 4l-4-4h2.5V7h3v3zM5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 2v14h14V5z"},null,-1)]))}const De=ne({name:"mdi-download-box-outline",render:Te}),Be={class:"flex flex-row items-end gap-1"},Ce={class:"ms-2 w-full grow space-y-1"},Pe=["title"],Ee={key:1},Ue={class:"flex justify-between"},ze={key:1},Me={key:2,class:"w-25"},Ne={key:3,class:"flex flex-col md:flex-row w-full grow gap-2"},Oe=I({__name:"BackgroundJobTracking",setup(n){const{runningJobs:d,clearJobs:u}=te();return(y,m)=>{const g=De,f=_e,x=X,w=se,h=W;return s(),i("div",Be,[t("ul",Ce,[(s(!0),i(A,null,J(r(d),(c,B)=>{var l,e,C,T,S,k,P,E,U,z;return s(),i("li",{key:B,class:"border p-1 pb-2 rounded-sm dark:border-surface-700 border-surface-300 flex gap-2 items-center",title:B},[((l=c.taskStatus)==null?void 0:l.job_category)==="download_data"?(s(),b(g,{key:0})):(s(),i("span",Ee,$((e=c.taskStatus)==null?void 0:e.job_category),1)),t("div",Ue,[((C=c.taskStatus)==null?void 0:C.status)==="success"?(s(),b(f,{key:0,class:"text-success",title:""})):(s(),i("span",ze,$((T=c.taskStatus)==null?void 0:T.status),1)),(S=c.taskStatus)!=null&&S.progress?(s(),i("span",Me,$((k=c.taskStatus)==null?void 0:k.progress),1)):V("",!0)]),(P=c.taskStatus)!=null&&P.progress?(s(),b(x,{key:2,class:"w-full grow",value:((E=c.taskStatus)==null?void 0:E.progress)/100*100,"show-progress":"",max:100,striped:""},null,8,["value"])):V("",!0),(U=c.taskStatus)!=null&&U.progress_tasks?(s(),i("div",Ne,[(s(!0),i(A,null,J(Object.entries((z=c.taskStatus)==null?void 0:z.progress_tasks),([O,D])=>(s(),i("div",{key:O,class:"w-full"},[_($(D.description)+" ",1),o(x,{class:"w-full grow",value:Math.round(D.progress/D.total*100*100)/100,"show-progress":"",pt:{value:{class:c.taskStatus.status==="success"?"bg-emerald-500":"bg-amber-500"}},striped:""},null,8,["value","pt"])]))),128))])):V("",!0)],8,Pe)}),128))]),Object.keys(r(d)).length>0?(s(),b(h,{key:0,severity:"secondary",class:"ms-auto",onClick:r(u)},{icon:p(()=>[o(w)]),_:1},8,["onClick"])):V("",!0)])}}}),Ae=v([{description:"All USDT Pairs",pairs:[".*/USDT"]},{description:"All USDT Futures Pairs",pairs:[".*/USDT:USDT"]}]);function Je(){return{pairTemplates:ae(()=>Ae.value.map((n,d)=>({...n,idx:d})))}}const He={class:"px-1 mx-auto w-full max-w-4xl lg:max-w-7xl"},Re={class:"flex mb-3 gap-3 flex-col"},Fe={class:"flex flex-col gap-3"},Le={class:"flex flex-col lg:flex-row gap-3"},Ie={class:"flex-fill"},We={class:"flex flex-col gap-2"},Xe={class:"flex gap-2"},Ye={class:"flex flex-col gap-1"},Ze={class:"flex flex-col gap-1"},qe={class:"flex-fill px-3"},Ge={class:"flex flex-col gap-2"},Ke={class:"px-3 border dark:border-surface-700 border-surface-300 p-2 rounded-sm"},Qe={class:"flex flex-col gap-2"},je={class:"flex justify-between items-center"},en={key:0},nn={key:1,class:"flex items-center gap-2"},tn={class:"mb-2 border dark:border-surface-700 border-surface-300 rounded-sm p-2 text-start"},sn={class:"mb-2 border dark:border-surface-700 border-surface-300 rounded-md p-2 text-start"},an={class:"mb-2 border dark:border-surface-700 border-surface-300 rounded-md p-2 text-start"},rn={class:"px-3"},on=I({__name:"DownloadDataMain",setup(n){const d=re(),u=v(["BTC/USDT","ETH/USDT",""]),y=v(["5m","1h"]),m=v({useCustomTimerange:!1,timerange:"",days:30}),{pairTemplates:g}=Je(),f=v({customExchange:!1,selectedExchange:{exchange:"binance",trade_mode:{margin_mode:ie.NONE,trading_mode:oe.SPOT}}}),x=v(!1),w=v(!1),h=v(!1);function c(l){u.value.push(...l)}async function B(){const l={pairs:u.value.filter(e=>e!==""),timeframes:y.value.filter(e=>e!=="")};m.value.useCustomTimerange&&m.value.timerange?l.timerange=m.value.timerange:l.days=m.value.days,h.value&&(l.erase=x.value,l.download_trades=w.value,f.value.customExchange&&(l.exchange=f.value.selectedExchange.exchange,l.trading_mode=f.value.selectedExchange.trade_mode.trading_mode,l.margin_mode=f.value.selectedExchange.trade_mode.margin_mode)),await d.activeBot.startDataDownload(l)}return(l,e)=>{const C=Oe,T=ce,S=W,k=le,P=fe,E=ge,U=de,z=pe,O=ue,D=G,Y=q;return s(),i("div",He,[o(C,{class:"mb-4"}),o(Y,{header:"Downloading Data",class:"mx-1 p-4"},{default:p(()=>[t("div",Re,[t("div",Fe,[t("div",Le,[t("div",Ie,[t("div",We,[e[10]||(e[10]=t("div",{class:"flex justify-between"},[t("h4",{class:"text-start font-bold text-lg"},"Select Pairs"),t("h5",{class:"text-start font-bold text-lg"},"Pairs from template")],-1)),t("div",Xe,[o(T,{modelValue:r(u),"onUpdate:modelValue":e[0]||(e[0]=a=>N(u)?u.value=a:null),placeholder:"Pair",size:"small",class:"flex-grow-1"},null,8,["modelValue"]),t("div",Ye,[t("div",Ze,[(s(!0),i(A,null,J(r(g),a=>(s(),b(S,{key:a.idx,severity:"secondary",title:a.pairs.reduce((H,Z)=>`${H}${Z}
`,""),onClick:H=>c(a.pairs)},{default:p(()=>[_($(a.description),1)]),_:2},1032,["title","onClick"]))),128))])])])])]),t("div",qe,[t("div",Ge,[e[11]||(e[11]=t("h4",{class:"text-start font-bold text-lg"},"Select timeframes",-1)),o(T,{modelValue:r(y),"onUpdate:modelValue":e[1]||(e[1]=a=>N(y)?y.value=a:null),placeholder:"Timeframe"},null,8,["modelValue"])])])]),t("div",Ke,[t("div",Qe,[t("div",je,[e[13]||(e[13]=t("h4",{class:"text-start mb-0 font-bold text-lg"},"Time Selection",-1)),o(k,{modelValue:r(m).useCustomTimerange,"onUpdate:modelValue":e[2]||(e[2]=a=>r(m).useCustomTimerange=a),class:"mb-0",switch:""},{default:p(()=>e[12]||(e[12]=[_(" Use custom timerange ")])),_:1},8,["modelValue"])]),r(m).useCustomTimerange?(s(),i("div",en,[o(P,{modelValue:r(m).timerange,"onUpdate:modelValue":e[3]||(e[3]=a=>r(m).timerange=a)},null,8,["modelValue"])])):(s(),i("div",nn,[e[14]||(e[14]=t("label",null,"Days to download:",-1)),o(E,{modelValue:r(m).days,"onUpdate:modelValue":e[4]||(e[4]=a=>r(m).days=a),type:"number","aria-label":"Days to download",min:1,step:1,size:"small"},null,8,["modelValue"])]))])]),t("div",tn,[o(S,{class:"mb-2",severity:"secondary",onClick:e[5]||(e[5]=a=>h.value=!r(h))},{default:p(()=>[e[15]||(e[15]=_(" Advanced Options ")),r(h)?(s(),b(z,{key:1})):(s(),b(U,{key:0}))]),_:1}),o(R,null,{default:p(()=>[F(t("div",null,[o(O,{severity:"info",class:"mb-2 py-2"},{default:p(()=>e[16]||(e[16]=[_(" Advanced options (Erase data, Download trades, and Custom Exchange settings) will only be applied when this section is expanded. ")])),_:1}),t("div",sn,[o(k,{modelValue:r(x),"onUpdate:modelValue":e[6]||(e[6]=a=>N(x)?x.value=a:null),class:"mb-2"},{default:p(()=>e[17]||(e[17]=[_("Erase existing data")])),_:1},8,["modelValue"]),o(k,{modelValue:r(w),"onUpdate:modelValue":e[7]||(e[7]=a=>N(w)?w.value=a:null),class:"mb-2"},{default:p(()=>e[18]||(e[18]=[_(" Download Trades instead of OHLCV data ")])),_:1},8,["modelValue"])]),t("div",an,[o(k,{modelValue:r(f).customExchange,"onUpdate:modelValue":e[8]||(e[8]=a=>r(f).customExchange=a),class:"mb-2"},{default:p(()=>e[19]||(e[19]=[_(" Custom Exchange ")])),_:1},8,["modelValue"]),o(R,{name:"fade"},{default:p(()=>[F(o(D,{modelValue:r(f).selectedExchange,"onUpdate:modelValue":e[9]||(e[9]=a=>r(f).selectedExchange=a)},null,8,["modelValue"]),[[L,r(f).customExchange]])]),_:1})])],512),[[L,r(h)]])]),_:1})]),t("div",rn,[o(S,{severity:"primary",onClick:B},{default:p(()=>e[20]||(e[20]=[_("Start Download")])),_:1})])])])]),_:1})])}}}),ln={};function dn(n,d){const u=on;return s(),b(u,{class:"pt-4"})}const bn=me(ln,[["render",dn]]);export{bn as default};
//# sourceMappingURL=DownloadDataView-CvqYWUaI.js.map
