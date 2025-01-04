import{r as e,h as s,F as d,a as i}from"./p-e97fde0a.js";import{a as t}from"./p-401e165e.js";const n=":host{display:block}.download__details{opacity:0.75}";const a=n;const o=class{constructor(s){e(this,s);this.allLink=undefined;this.heading=undefined;this.busy=undefined;this.loading=undefined;this.requestNonce=undefined;this.error=undefined;this.purchases=[]}renderEmpty(){return s("div",null,s("sc-divider",{style:{"--spacing":"0"}}),s("slot",{name:"empty"},s("sc-empty",{icon:"download"},wp.i18n.__("You don't have any downloads.","surecart"))))}renderLoading(){return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,s("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},s("div",{style:{padding:"0.5em"}},s("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),s("sc-skeleton",{style:{width:"20%"}})))))}renderList(){return this.purchases.map((e=>{var i,n,a;const o=(n=(i=e===null||e===void 0?void 0:e.product)===null||i===void 0?void 0:i.downloads)===null||n===void 0?void 0:n.data.filter((e=>!e.archived));const l=(o||[]).map((e=>{var s;return(e===null||e===void 0?void 0:e.media)?(s=e===null||e===void 0?void 0:e.media)===null||s===void 0?void 0:s.byte_size:0}));const r=l.reduce(((e,s)=>e+s),0);return s("sc-stacked-list-row",{href:!(e===null||e===void 0?void 0:e.revoked)?t(window.location.href,{action:"show",model:"download",id:e.id,nonce:this.requestNonce}):null,key:e.id,"mobile-size":0},s("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},s("div",null,s("strong",null,(a=e===null||e===void 0?void 0:e.product)===null||a===void 0?void 0:a.name)),s("div",{class:"download__details"},wp.i18n.sprintf(wp.i18n._n("%s file","%s files",o===null||o===void 0?void 0:o.length,"surecart"),o===null||o===void 0?void 0:o.length),!!r&&s(d,null," ","• ",s("sc-format-bytes",{value:r})))),s("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}renderContent(){var e;if(this.loading){return this.renderLoading()}if(((e=this.purchases)===null||e===void 0?void 0:e.length)===0){return this.renderEmpty()}return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,this.renderList()))}render(){return s("sc-dashboard-module",{key:"5ccf0a38a0bc8b065d0ff56eaaf3a9717e793f43",class:"downloads-list",error:this.error},s("span",{key:"57110086a52d06895a05c445f4ad5824aea9f0af",slot:"heading"},s("slot",{key:"1d2c5639a5966b8a03dad99855ad2879a7047036",name:"heading"},this.heading||wp.i18n.__("Items","surecart"))),s("slot",{key:"8c988bfc8038d2a71af97aa30f790799d2b7aeda",name:"before"}),!!this.allLink&&s("sc-button",{key:"c49361ab9aa83d123c5185dc3249f04ebe00aa0c",type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),s("sc-icon",{key:"e6b38f6630fab8f33c1aa2d98da294a4110d22ae",name:"chevron-right",slot:"suffix"})),this.renderContent(),s("slot",{key:"e2a8442ebe848fb3cc9edf0647358781dce7d617",name:"after"}),this.busy&&s("sc-block-ui",{key:"a5d7e2413662795dceae785db3473de988bdc94e"}))}get el(){return i(this)}};o.style=a;export{o as sc_purchase_downloads_list};
//# sourceMappingURL=p-29a4a8bf.entry.js.map