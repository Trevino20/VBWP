!function(){"use strict";var e=window.wp.blocks,r=(window.wp.i18n,window.wp.blockEditor);var t=JSON.parse('{"UU":"surecart/product-selected-price-amount"}');(0,e.registerBlockType)(t.UU,{edit:()=>{const e=(0,r.useBlockProps)({className:"sc-price__amount"});return React.createElement("span",e,(({amount:e,currency:r="usd"})=>{const t=((e,r)=>["BIF","BYR","CLP","DJF","GNF","ISK","JPY","KMF","KRW","PYG","RWF","UGX","VND","VUV","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XDR","XOF","XPD","XPF","XPT","XTS"].includes(r?.toUpperCase())?e:e/100)(parseFloat(e),r),c=e%1==0?0:2;return`${new Intl.NumberFormat(void 0,{style:"currency",currency:r,minimumFractionDigits:c}).format(parseFloat(t.toFixed(2)))}`})({amount:1500,currency:scData?.currency}))}})}();