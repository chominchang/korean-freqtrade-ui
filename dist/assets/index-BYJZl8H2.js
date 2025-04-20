import{r as pe,G as b,D as te,bW as W,A as H,bX as he,Z as ie,bY as fe,aa as me,af as D,c as r,k as h,a,a1 as p,l as v,N as s,ac as x,z as I,aE as ge,bh as be,bi as ye,aF as ve,bj as Oe,aH as Ie,aG as Se,as as ke,aI as we,bk as $e,s as xe,ae as Ce,ar as Le,aJ as F,bm as Fe,aK as _e,ai as Te,aL as B,ab as N,bZ as Ve,au as Me,av as Ke,ay as Ae,al as De,az as Ee,aA as j,bt as Pe,ao as _,at as ze,b_ as Re,aN as Be,aM as Ne,aP as M,M as S,an as He,e as O,b as T,F as K,x as A,m as Z,h as k,n as w,Y as Ge,aQ as Ue,aR as je,V as qe}from"./index-B_v6adOj.js";function We(e){return e.slice().sort((i,l)=>i.profit_ratio-l.profit_ratio)}function Qe(e){if(e.length===0)return"N/A";const t=e[e.length-1];return`${t.pair} ${b(t.profit_ratio,2)}`}function Ze(e){if(e.length===0)return"N/A";const t=e[0];return`${t.pair} ${b(t.profit_ratio,2)}`}function ne(e,t){return l=>`${te(l,e)} ${t}`}function Ft(e){const t=We(e.trades),i=Qe(t),l=Ze(t),o=e.results_per_pair[e.results_per_pair.length-1],n=ne(e.stake_currency_decimals,e.stake_currency),d=e.trade_count_short&&e.trade_count_short>0?[{"___ ":"___"},{"Long / Short":`${e.trade_count_long} / ${e.trade_count_short}`},{"Total profit Long":`${b(e.profit_total_long||0)} | ${n(e.profit_total_long_abs)}`},{"Total profit Short":`${b(e.profit_total_short||0)} | ${n(e.profit_total_short_abs)}`}]:[];return[{"Total Profit":`${b(e.profit_total)} | ${n(e.profit_total_abs)}`},{CAGR:`${e.cagr?b(e.cagr):"N/A"}`},{Sortino:`${e.sortino?e.sortino.toFixed(2):"N/A"}`},{Sharpe:`${e.sharpe?e.sharpe.toFixed(2):"N/A"}`},{Calmar:`${e.calmar?e.calmar.toFixed(2):"N/A"}`},{"System Quality Number (SQN)":`${e.sqn?e.sqn.toFixed(2):"N/A"}`},{[`Expectancy ${e.expectancy_ratio?"(ratio)":""}`]:`${e.expectancy?e.expectancy_ratio?e.expectancy.toFixed(2)+" ("+e.expectancy_ratio.toFixed(2)+")":e.expectancy.toFixed(2):"N/A"}`},{"Profit factor":`${e.profit_factor?te(e.profit_factor,3):"N/A"}`},{"Total trades / Daily Avg Trades":`${e.total_trades} / ${e.trades_per_day}`},{"Best day":`${b(e.backtest_best_day,2)} | ${n(e.backtest_best_day_abs)}`},{"Worst day":`${b(e.backtest_worst_day,2)} | ${n(e.backtest_worst_day_abs)}`},{"Win/Draw/Loss":`${o.wins} / ${o.draws} / ${o.losses} ${he(o.winrate)?"(WR: "+b(e.results_per_pair[e.results_per_pair.length-1].winrate??0,2)+")":""}`},{"Days win/draw/loss":`${e.winning_days} / ${e.draw_days} / ${e.losing_days}`},{"Avg. Duration winners":W(e.winner_holding_avg_s)},{"Avg. Duration Losers":W(e.loser_holding_avg_s)},{"Max Consecutive Wins / Loss":e.max_consecutive_wins===void 0?"N/A":`${e.max_consecutive_wins} / ${e.max_consecutive_losses}`},{"Rejected entry signals":e.rejected_signals},{"Entry/Exit timeouts":`${e.timedout_entry_orders} / ${e.timedout_exit_orders}`},{"Canceled Trade Entries":e.canceled_trade_entries??"N/A"},{"Canceled Entry Orders":e.canceled_entry_orders??"N/A"},{"Replaced Entry Orders":e.replaced_entry_orders??"N/A"},...d,{___:"___"},{"Min balance":n(e.csum_min)},{"Max balance":n(e.csum_max)},{"Market change":b(e.market_change)},{"___  ":"___"},{"Max Drawdown (Account)":b(e.max_drawdown_account)},{"Max Drawdown ABS":n(e.max_drawdown_abs)},{"Drawdown high | low":`${n(e.max_drawdown_high)} | ${n(e.max_drawdown_low)}`},{"Drawdown start":H(e.drawdown_start_ts)},{"Drawdown end":H(e.drawdown_end_ts)},{"___   ":"___"},{"Best Pair":`${e.best_pair.key} ${b(e.best_pair.profit_total)}`},{"Worst Pair":`${e.worst_pair.key} ${b(e.worst_pair.profit_total)}`},{"Best single Trade":i},{"Worst single Trade":l}]}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Je(e){return!e.trading_mode||!e.margin_mode?{}:{"Trading Mode":e.trading_mode==="spot"?q(e.trading_mode):`${q(e.margin_mode)} ${q(e.trading_mode)}`}}function _t(e){const t=ne(e.stake_currency_decimals,e.stake_currency),i=Je(e);return[{"Backtesting from":H(e.backtest_start_ts)},{"Backtesting to":H(e.backtest_end_ts)},...Object.keys(i).length!==0?[i]:[],{"BT execution time":W(e.backtest_run_end_ts-e.backtest_run_start_ts)},{"Max open trades":e.max_open_trades},{Timeframe:e.timeframe},{"Timeframe Detail":e.timeframe_detail||"N/A"},{Timerange:e.timerange},{Stoploss:b(e.stoploss,2)},{"Trailing Stoploss":e.trailing_stop},{"Trail only when offset is reached":e.trailing_only_offset_is_reached},{"Trailing Stop positive":e.trailing_stop_positive},{"Trailing stop positive offset":e.trailing_stop_positive_offset},{"Custom Stoploss":e.use_custom_stoploss},{ROI:JSON.stringify(e.minimal_roi)},{"Use Exit Signal":e.use_exit_signal!==void 0?e.use_exit_signal:e.use_sell_signal},{"Exit profit only":e.exit_profit_only!==void 0?e.exit_profit_only:e.sell_profit_only},{"Exit profit offset":e.exit_profit_offset!==void 0?e.exit_profit_offset:e.sell_profit_offset},{"Enable protections":e.enable_protections},{"Starting balance":t(e.starting_balance)},{"Final balance":t(e.final_balance)},{"Avg. stake amount":t(e.avg_stake_amount)},{"Total trade volume":t(e.total_volume)}]}const Tt=pe([{field:"sqn",header:"SQN"},{field:"cagr",header:"Cagr"},{field:"calmar",header:"Calmar"},{field:"expectancy",header:"Expectancy"},{field:"profit_factor",header:"Profit Factor"},{field:"sharpe",header:"Sharpe"},{field:"sortino",header:"Sortino"},{field:"max_drawdown_account",header:"Max Drawdown",is_ratio:!0}]);var Ye=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding-block: ${e("chip.padding.y")};
    padding-inline: ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-inline-start: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(${e("chip.padding.y")} / 2);
    padding-block-end: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,Xe={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},et=ie.extend({name:"chip",style:Ye,classes:Xe}),tt={name:"BaseChip",extends:me,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:et,provide:function(){return{$pcChip:this,$parentInstance:this}}},le={name:"Chip",extends:tt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return D({removable:this.removable})}},components:{TimesCircleIcon:fe}},it=["aria-label","data-p"],nt=["src"];function lt(e,t,i,l,o,n){return o.visible?(a(),r("div",s({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":n.dataP}),[p(e.$slots,"default",{},function(){return[e.image?(a(),r("img",s({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,nt)):e.$slots.icon?(a(),v(x(e.$slots.icon),s({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),r("span",s({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):h("",!0),e.label?(a(),r("div",s({key:3,class:e.cx("label")},e.ptm("label")),I(e.label),17)):h("",!0)]}),e.removable?p(e.$slots,"removeicon",{key:0,removeCallback:n.close,keydownCallback:n.onKeydown},function(){return[(a(),v(x(e.removeIcon?"span":"TimesCircleIcon"),s({class:[e.cx("removeIcon"),e.removeIcon],onClick:n.close,onKeydown:n.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):h("",!0)],16,it)):h("",!0)}le.render=lt;var ot=({dt:e})=>`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${e("multiselect.background")};
    border: 1px solid ${e("multiselect.border.color")};
    transition: background ${e("multiselect.transition.duration")}, color ${e("multiselect.transition.duration")}, border-color ${e("multiselect.transition.duration")}, outline-color ${e("multiselect.transition.duration")}, box-shadow ${e("multiselect.transition.duration")};
    border-radius: ${e("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("multiselect.shadow")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${e("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${e("multiselect.focus.border.color")};
    box-shadow: ${e("multiselect.focus.ring.shadow")};
    outline: ${e("multiselect.focus.ring.width")} ${e("multiselect.focus.ring.style")} ${e("multiselect.focus.ring.color")};
    outline-offset: ${e("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${e("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${e("multiselect.filled.focus.background")};
}

.p-multiselect.p-invalid {
    border-color: ${e("multiselect.invalid.border.color")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${e("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${e("multiselect.dropdown.color")};
    width: ${e("multiselect.dropdown.width")};
    border-start-end-radius: ${e("multiselect.border.radius")};
    border-end-end-radius: ${e("multiselect.border.radius")};
}

.p-multiselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${e("multiselect.clear.icon.color")};
    inset-inline-end: ${e("multiselect.dropdown.width")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items: center;
    gap: calc(${e("multiselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${e("multiselect.padding.y")} ${e("multiselect.padding.x")};
    color: ${e("multiselect.color")};
}

.p-multiselect-label.p-placeholder {
    color: ${e("multiselect.placeholder.color")};
}

.p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
    color: ${e("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${e("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("multiselect.overlay.background")};
    color: ${e("multiselect.overlay.color")};
    border: 1px solid ${e("multiselect.overlay.border.color")};
    border-radius: ${e("multiselect.overlay.border.radius")};
    box-shadow: ${e("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${e("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${e("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${e("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("multiselect.list.gap")};
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${e("multiselect.option.gap")};
    padding: ${e("multiselect.option.padding")};
    border: 0 none;
    color: ${e("multiselect.option.color")};
    background: transparent;
    transition: background ${e("multiselect.transition.duration")}, color ${e("multiselect.transition.duration")}, border-color ${e("multiselect.transition.duration")}, box-shadow ${e("multiselect.transition.duration")}, outline-color ${e("multiselect.transition.duration")};
    border-radius: ${e("multiselect.option.border.radius")};
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${e("multiselect.option.focus.background")};
    color: ${e("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${e("multiselect.option.selected.background")};
    color: ${e("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${e("multiselect.option.selected.focus.background")};
    color: ${e("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${e("multiselect.option.group.padding")};
    background: ${e("multiselect.option.group.background")};
    color: ${e("multiselect.option.group.color")};
    font-weight: ${e("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${e("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-block-start: calc(${e("multiselect.padding.y")} / 2);
    padding-block-end: calc(${e("multiselect.padding.y")} / 2);
    border-radius: ${e("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${e("multiselect.padding.y")} / 2) calc(${e("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
    width: 100%;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${e("multiselect.sm.font.size")};
    padding-block: ${e("multiselect.sm.padding.y")};
    padding-inline: ${e("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${e("multiselect.sm.font.size")};
    width: ${e("multiselect.sm.font.size")};
    height: ${e("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${e("multiselect.lg.font.size")};
    padding-block: ${e("multiselect.lg.padding.y")};
    padding-inline: ${e("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${e("multiselect.lg.font.size")};
    width: ${e("multiselect.lg.font.size")};
    height: ${e("multiselect.lg.font.size")};
}
`,st={root:function(t){var i=t.props;return{position:i.appendTo==="self"?"relative":void 0}}},at={root:function(t){var i=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-focus":i.focused,"p-inputwrapper-filled":i.$filled,"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-multiselect-open":i.overlayVisible,"p-multiselect-fluid":i.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var i=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":i.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&!i.$filled}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var i=t.instance,l=t.option,o=t.index,n=t.getItemOptions,d=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":i.isSelected(l)&&d.highlightOnSelect,"p-focus":i.focusedOptionIndex===i.getOptionIndex(o,n),"p-disabled":i.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},rt=ie.extend({name:"multiselect",style:ot,classes:at,inlineStyles:st}),ct={name:"BaseMultiSelect",extends:Le,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:rt,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function J(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,l)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?J(Object(i),!0).forEach(function(l){$(e,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))})}return e}function $(e,t,i){return(t=dt(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function dt(e){var t=ut(e,"string");return E(t)=="symbol"?t:t+""}function ut(e,t){if(E(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var l=i.call(e,t);if(E(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function X(e){return mt(e)||ft(e)||ht(e)||pt()}function pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,t){if(e){if(typeof e=="string")return Q(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Q(e,t):void 0}}function ft(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mt(e){if(Array.isArray(e))return Q(e)}function Q(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,l=Array(t);i<t;i++)l[i]=e[i];return l}var gt={name:"MultiSelect",extends:ct,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(j.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,i){return this.virtualScrollerDisabled?t:i&&i(t).index},getOptionLabel:function(t){return this.optionLabel?M(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?M(t,this.optionValue):t},getOptionRenderKey:function(t,i){return this.dataKey?M(t,this.dataKey):this.getOptionLabel(t)+"_".concat(i)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,i,l,o){return this.ptm(o,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,i),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?M(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return M(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return M(t,this.optionGroupChildren)},getAriaPosInset:function(t){var i=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return i.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&_(this.$refs.focusInput)},hide:function(t){var i=this,l=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),t&&_(i.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),!this.autoFilterFocus&&this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var i,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(i=(l=this.formField).onBlur)===null||i===void 0||i.call(l)},onKeyDown:function(t){var i=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(n){return i.isValidOption(n)}).map(function(n){return i.getOptionValue(n)});this.updateModel(t,o),t.preventDefault();break}!l&&Ne(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var i=t.relatedTarget===this.$refs.focusInput?Be(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;_(i)},onLastHiddenFocus:function(t){var i=t.relatedTarget===this.$refs.focusInput?Re(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;_(i)},onOptionSelect:function(t,i){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(i))){var d=this.isSelected(i),f=null;d?f=this.d_value.filter(function(g){return!N(g,l.getOptionValue(i),l.equalityKey)}):f=[].concat(X(this.d_value||[]),[this.getOptionValue(i)]),this.updateModel(t,f),o!==-1&&(this.focusedOptionIndex=o),n&&_(this.$refs.focusInput)}},onOptionMouseMove:function(t,i){this.focusOnHover&&this.changeFocusedOptionIndex(t,i)},onOptionSelectRange:function(t){var i=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var n=Math.min(l,o),d=Math.max(l,o),f=this.visibleOptions.slice(n,d+1).filter(function(g){return i.isValidOption(g)}).map(function(g){return i.getOptionValue(g)});this.updateModel(t,f)}},onFilterChange:function(t){var i=t.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){ze.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,i),this.changeFocusedOptionIndex(t,i)}t.preventDefault()},onArrowUpKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=t.metaKey||t.ctrlKey,n=this.findFirstOptionIndex();t.shiftKey&&o&&this.onOptionSelectRange(t,n,this.startRangeIndex),this.changeFocusedOptionIndex(t,n),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var n=t.metaKey||t.ctrlKey,d=this.findLastOptionIndex();t.shiftKey&&n&&this.onOptionSelectRange(t,this.startRangeIndex,d),this.changeFocusedOptionIndex(t,d),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?(_(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){j.set("overlay",t,this.$primevue.config.zIndex.overlay),Pe(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&_(this.$refs.filterInput.$el),this.autoUpdateModel()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){j.clear(t)},alignOverlay:function(){this.appendTo==="self"?Ae(this.overlay,this.$el):(this.overlay.style.minWidth=De(this.$el)+"px",Ee(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){t.overlayVisible&&t.isOutsideClicked(i)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Ke(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Me()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var i=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(n){return!i.isOptionGroup(n)&&N(i.getOptionValue(n),t,i.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,i=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(i)?i.replace(i.match(t)[0],this.d_value.length+""):i},onToggleAll:function(t){var i=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return i.isValidOption(o)}).map(function(o){return i.getOptionValue(o)});this.updateModel(t,l)}},removeOption:function(t,i){var l=this;t.stopPropagation();var o=this.d_value.filter(function(n){return!N(n,i,l.equalityKey)});this.updateModel(t,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return Ve(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var i;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((i=this.getOptionLabel(t))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return F(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,i){return N(t,i,this.equalityKey)},isSelected:function(t){var i=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(o){return i.isEquals(o,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(i){return t.isValidOption(i)})},findLastOptionIndex:function(){var t=this;return B(this.visibleOptions,function(i){return t.isValidOption(i)})},findNextOptionIndex:function(t){var i=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return i.isValidOption(o)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var i=this,l=t>0?B(this.visibleOptions.slice(0,t),function(o){return i.isValidOption(o)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var i=function(){var d=t.d_value[o],f=t.visibleOptions.findIndex(function(g){return t.isValidSelectedOption(g)&&t.isEquals(d,t.getOptionValue(g))});if(f>-1)return{v:f}},l,o=this.d_value.length-1;o>=0;o--)if(l=i(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(i){return t.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?B(this.visibleOptions,function(i){return t.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(t){var i=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(o){return i.isValidSelectedOption(o)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var i=this,l=this.$filled&&t>0?B(this.visibleOptions.slice(0,t),function(o){return i.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(i?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var i=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;F(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return i.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return i.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return i.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[i]))},scrollInView:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=i!==-1?"".concat(t.$id,"_").concat(i):t.focusedOptionId,o=Te(t.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(i!==-1?i:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,i){this.writeValue(i,t),this.$emit("change",{originalEvent:t,value:i})},flatOptions:function(t){var i=this;return(t||[]).reduce(function(l,o,n){l.push({optionGroup:o,group:!0,index:n});var d=i.getOptionGroupChildren(o);return d&&d.forEach(function(f){return l.push(f)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,i){this.list=t,i&&i(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=_e.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],n=[];return o.forEach(function(d){var f=t.getOptionGroupChildren(d),g=f.filter(function(G){return l.includes(G)});g.length>0&&n.push(Y(Y({},d),{},$({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",X(g))))}),this.flatOptions(n)}return l}return i},label:function(){var t;if(this.d_value&&this.d_value.length){if(F(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var i=0;i<this.d_value.length;i++)i!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[i])}else t=this.placeholder;return t},chipSelectedItems:function(){return F(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:F(this.visibleOptions)&&this.visibleOptions.every(function(i){return t.isOptionGroup(i)||t.isOptionDisabled(i)||t.isSelected(i)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return F(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(i){return!t.isOptionGroup(i)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Fe(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value&&this.d_value.length&&this.d_value!=null&&F(this.options)},containerDataP:function(){return D($({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))},labelDataP:function(){return D($($($({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled},this.size,this.size),"has-chip",this.display==="chip"&&this.d_value&&this.d_value.length&&(this.maxSelectedLabels?this.d_value.length<=this.maxSelectedLabels:!0)),"empty",!this.placeholder&&!this.$filled))},dropdownIconDataP:function(){return D($({},this.size,this.size))},overlayDataP:function(){return D($({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},directives:{ripple:Ce},components:{InputText:xe,Checkbox:$e,VirtualScroller:we,Portal:ke,Chip:le,IconField:Se,InputIcon:Ie,TimesIcon:Oe,SearchIcon:ve,ChevronDownIcon:ye,SpinnerIcon:be,CheckIcon:ge}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function ee(e,t,i){return(t=bt(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function bt(e){var t=yt(e,"string");return P(t)=="symbol"?t:t+""}function yt(e,t){if(P(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var l=i.call(e,t);if(P(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vt=["data-p"],Ot=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],It=["data-p"],St={key:0},kt=["data-p"],wt=["id","aria-label"],$t=["id"],xt=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function Ct(e,t,i,l,o,n){var d=S("Chip"),f=S("SpinnerIcon"),g=S("Checkbox"),G=S("InputText"),oe=S("SearchIcon"),se=S("InputIcon"),ae=S("IconField"),re=S("VirtualScroller"),ce=S("Portal"),de=He("ripple");return a(),r("div",s({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)}),"data-p":n.containerDataP},e.ptmi("root")),[O("div",s({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[O("input",s({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":e.$id+"_list","aria-activedescendant":o.focused?n.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:t[1]||(t[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:t[2]||(t[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},e.ptm("hiddenInput")),null,16,Ot)],16),O("div",s({class:e.cx("labelContainer")},e.ptm("labelContainer")),[O("div",s({class:e.cx("label"),"data-p":n.labelDataP},e.ptm("label")),[p(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(a(),r(K,{key:0},[A(I(n.label||"empty"),1)],64)):e.display==="chip"?(a(),r(K,{key:1},[n.chipSelectedItems?(a(),r("span",St,I(n.label),1)):(a(!0),r(K,{key:1},Z(e.d_value,function(c){return a(),r("span",s({key:n.getLabelByValue(c),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[p(e.$slots,"chip",{value:c,removeCallback:function(C){return n.removeOption(C,c)}},function(){return[T(d,{class:w(e.cx("pcChip")),label:n.getLabelByValue(c),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(C){return n.removeOption(C,c)},pt:e.ptm("pcChip")},{removeicon:k(function(){return[p(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:w(e.cx("chipIcon")),item:c,removeCallback:function(C){return n.removeOption(C,c)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(a(),r(K,{key:2},[A(I(e.placeholder||"empty"),1)],64)):h("",!0)],64)):h("",!0)]})],16,It)],16),n.isClearIconVisible?p(e.$slots,"clearicon",{key:0,class:w(e.cx("clearIcon")),clearCallback:n.onClearClick},function(){return[(a(),v(x(e.clearIcon?"i":"TimesIcon"),s({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:n.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):h("",!0),O("div",s({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?p(e.$slots,"loadingicon",{key:0,class:w(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(a(),r("span",s({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(a(),v(f,s({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):p(e.$slots,"dropdownicon",{key:1,class:w(e.cx("dropdownIcon"))},function(){return[(a(),v(x(e.dropdownIcon?"span":"ChevronDownIcon"),s({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true","data-p":n.dropdownIconDataP},e.ptm("dropdownIcon")),null,16,["class","data-p"]))]})],16),T(ce,{appendTo:e.appendTo},{default:k(function(){return[T(Ge,s({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},e.ptm("transition")),{default:k(function(){return[o.overlayVisible?(a(),r("div",s({key:0,ref:n.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:t[6]||(t[6]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)}),"data-p":n.overlayDataP},e.ptm("overlay")),[O("span",s({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),p(e.$slots,"header",{value:e.d_value,options:n.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(a(),r("div",s({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(a(),v(g,{key:0,modelValue:n.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":n.toggleAllAriaLabel,onChange:n.onToggleAll,unstyled:e.unstyled,pt:n.getHeaderCheckboxPTOptions("pcHeaderCheckbox"),formControl:{novalidate:!0}},{icon:k(function(c){return[e.$slots.headercheckboxicon?(a(),v(x(e.$slots.headercheckboxicon),{key:0,checked:c.checked,class:w(c.class)},null,8,["checked","class"])):c.checked?(a(),v(x(e.checkboxIcon?"span":"CheckIcon"),s({key:1,class:[c.class,ee({},e.checkboxIcon,c.checked)]},n.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):h("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):h("",!0),e.filter?(a(),v(ae,{key:1,class:w(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:k(function(){return[T(G,{ref:"filterInput",value:o.filterValue,onVnodeMounted:n.onFilterUpdated,onVnodeUpdated:n.onFilterUpdated,class:w(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":e.$id+"_list","aria-activedescendant":n.focusedOptionId,onKeydown:n.onFilterKeyDown,onBlur:n.onFilterBlur,onInput:n.onFilterChange,pt:e.ptm("pcFilter"),formControl:{novalidate:!0}},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),T(se,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:k(function(){return[p(e.$slots,"filtericon",{},function(){return[e.filterIcon?(a(),r("span",s({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(a(),v(oe,Ue(s({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):h("",!0),e.filter?(a(),r("span",s({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),I(n.filterResultMessageText),17)):h("",!0)],16)):h("",!0),O("div",s({class:e.cx("listContainer"),style:{"max-height":n.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[T(re,s({ref:n.virtualScrollerRef},e.virtualScrollerOptions,{items:n.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:n.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),je({content:k(function(c){var V=c.styleClass,C=c.contentRef,z=c.items,y=c.getItemOptions,ue=c.contentStyle,R=c.itemSize;return[O("ul",s({ref:function(m){return n.listRef(m,C)},id:e.$id+"_list",class:[e.cx("list"),V],style:ue,role:"listbox","aria-multiselectable":"true","aria-label":n.listAriaLabel},e.ptm("list")),[(a(!0),r(K,null,Z(z,function(u,m){return a(),r(K,{key:n.getOptionRenderKey(u,n.getOptionIndex(m,y))},[n.isOptionGroup(u)?(a(),r("li",s({key:0,id:e.$id+"_"+n.getOptionIndex(m,y),style:{height:R?R+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[p(e.$slots,"optiongroup",{option:u.optionGroup,index:n.getOptionIndex(m,y)},function(){return[A(I(n.getOptionGroupLabel(u.optionGroup)),1)]})],16,$t)):qe((a(),r("li",s({key:1,id:e.$id+"_"+n.getOptionIndex(m,y),style:{height:R?R+"px":void 0},class:e.cx("option",{option:u,index:m,getItemOptions:y}),role:"option","aria-label":n.getOptionLabel(u),"aria-selected":n.isSelected(u),"aria-disabled":n.isOptionDisabled(u),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(m,y)),onClick:function(U){return n.onOptionSelect(U,u,n.getOptionIndex(m,y),!0)},onMousemove:function(U){return n.onOptionMouseMove(U,n.getOptionIndex(m,y))},ref_for:!0},n.getCheckboxPTOptions(u,y,m,"option"),{"data-p-selected":n.isSelected(u),"data-p-focused":o.focusedOptionIndex===n.getOptionIndex(m,y),"data-p-disabled":n.isOptionDisabled(u)}),[T(g,{defaultValue:n.isSelected(u),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:n.getCheckboxPTOptions(u,y,m,"pcOptionCheckbox"),formControl:{novalidate:!0}},{icon:k(function(L){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(a(),v(x(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:L.checked,class:w(L.class)},null,8,["checked","class"])):L.checked?(a(),v(x(e.checkboxIcon?"span":"CheckIcon"),s({key:1,class:[L.class,ee({},e.checkboxIcon,L.checked)],ref_for:!0},n.getCheckboxPTOptions(u,y,m,"pcOptionCheckbox.icon")),null,16,["class"])):h("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),p(e.$slots,"option",{option:u,selected:n.isSelected(u),index:n.getOptionIndex(m,y)},function(){return[O("span",s({ref_for:!0},e.ptm("optionLabel")),I(n.getOptionLabel(u)),17)]})],16,xt)),[[de]])],64)}),128)),o.filterValue&&(!z||z&&z.length===0)?(a(),r("li",s({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[p(e.$slots,"emptyfilter",{},function(){return[A(I(n.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(a(),r("li",s({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[p(e.$slots,"empty",{},function(){return[A(I(n.emptyMessageText),1)]})],16)):h("",!0)],16,wt)]}),_:2},[e.$slots.loader?{name:"loader",fn:k(function(c){var V=c.options;return[p(e.$slots,"loader",{options:V})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),p(e.$slots,"footer",{value:e.d_value,options:n.visibleOptions}),!e.options||e.options&&e.options.length===0?(a(),r("span",s({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),I(n.emptyMessageText),17)):h("",!0),O("span",s({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),I(n.selectedMessageText),17),O("span",s({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16,kt)):h("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,vt)}gt.render=Ct;export{Tt as a,_t as b,Ft as g,gt as s};
//# sourceMappingURL=index-BYJZl8H2.js.map
