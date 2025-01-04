import{c as createStore}from"./index-06061d4e.js";import"./google-dd89f242.js";import{i as isProductVariantOptionSoldOut,a as isProductVariantOptionMissing,g as getSerializedState}from"./utils-cd1431df.js";import{g as getVariantFromValues}from"./util-50af2a83.js";import{s as speak}from"./index-c5a96d53.js";const productViewed=(t,i,e=1)=>{var a;const o=new CustomEvent("scProductViewed",{detail:{id:null==t?void 0:t.id,name:null==t?void 0:t.name,price:i,permalink:null==t?void 0:t.permalink,prices:null==t?void 0:t.prices,variant_options:null===(a=null==t?void 0:t.variant_options)||void 0===a?void 0:a.data,product_collections:null==t?void 0:t.product_collections,quantity:e},bubbles:!0});document.dispatchEvent(o)},availablePrices=t=>{var i;return((null===(i=state[t])||void 0===i?void 0:i.prices)||[]).filter((t=>!(null==t?void 0:t.archived))).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position)))},getProduct=t=>{var i;return null!==(i=state[t])&&void 0!==i?i:null},isStockNeedsToBeChecked=t=>{var i,e,a,o;return!(!(null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.product)||void 0===e?void 0:e.stock_enabled)||(null===(o=null===(a=null==state?void 0:state[t])||void 0===a?void 0:a.product)||void 0===o?void 0:o.allow_out_of_stock_purchases))},isOptionSoldOut=(t,i,e)=>isProductVariantOptionSoldOut(i,e,state[t].variantValues,state[t].product),isOptionMissing=(t,i,e)=>isProductVariantOptionMissing(i,e,state[t].variantValues,state[t].product),isProductOutOfStock=t=>{var i,e,a,o;return!!isStockNeedsToBeChecked(t)&&((null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.selectedVariant)||void 0===e?void 0:e.id)?(null===(o=state[t].selectedVariant)||void 0===o?void 0:o.available_stock)<=0:(null===(a=state[t].product)||void 0===a?void 0:a.available_stock)<=0)},isSelectedVariantMissing=t=>{var i,e,a;return!!(null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.variants)||void 0===e?void 0:e.length)&&void 0===(null===(a=getVariantFromValues({variants:state[t].variants,values:state[t].variantValues}))||void 0===a?void 0:a.id)},getDefaultState=()=>{const{product:t={}}=getSerializedState();return Object.values(t).reduce(((t,i)=>{const{selectedPrice:e,product:a,selectedVariant:o}=i||{},l={...i,quantity:1,total:null,dialog:null,busy:!1,error:null,adHocAmount:(null==e?void 0:e.amount)||null,disabled:(null==e?void 0:e.archived)||(null==a?void 0:a.archived),line_item:{price_id:null==e?void 0:e.id,quantity:1,...(null==e?void 0:e.ad_hoc)?{ad_hoc_amount:null==e?void 0:e.amount}:{},...(null==o?void 0:o.id)?{variant_id:null==o?void 0:o.id}:{}},variantValues:{...(null==o?void 0:o.option_1)?{option_1:null==o?void 0:o.option_1}:{},...(null==o?void 0:o.option_2)?{option_2:null==o?void 0:o.option_2}:{},...(null==o?void 0:o.option_3)?{option_3:null==o?void 0:o.option_3}:{}}};return t[a.id]=l,t}),{})||{}},availableSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>null==t?void 0:t.recurring_interval)).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position))),availableNonSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>!(null==t?void 0:t.recurring_interval))).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position))),getters=Object.freeze({__proto__:null,availablePrices:availablePrices,getProduct:getProduct,isStockNeedsToBeChecked:isStockNeedsToBeChecked,isOptionSoldOut:isOptionSoldOut,isOptionMissing:isOptionMissing,isProductOutOfStock:isProductOutOfStock,isSelectedVariantMissing:isSelectedVariantMissing,getDefaultState:getDefaultState,availableSubscriptionPrices:availableSubscriptionPrices,availableNonSubscriptionPrices:availableNonSubscriptionPrices}),defaultState=getDefaultState();Object.values(defaultState).filter((t=>null==t?void 0:t.isProductPage)).forEach((t=>{var i;(null===(i=null==t?void 0:t.product)||void 0===i?void 0:i.id)&&productViewed(null==t?void 0:t.product,null==t?void 0:t.selectedPrice,null==t?void 0:t.quantity)}));const store=createStore(defaultState,((t,i)=>JSON.stringify(t)!==JSON.stringify(i))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store,setProduct=(t,i)=>{t&&(state[t]={...state[t],...i})};on("set",((t,i,e)=>{var a,o,l,d;(null===(a=null==i?void 0:i.selectedPrice)||void 0===a?void 0:a.id)!==(null===(o=null==e?void 0:e.selectedPrice)||void 0===o?void 0:o.id)&&updateSelectedPrice(t,i),(null===(l=null==i?void 0:i.selectedVariant)||void 0===l?void 0:l.id)!==(null===(d=null==e?void 0:e.selectedVariant)||void 0===d?void 0:d.id)&&handleStockWithSelectedVariant(t),(!e||["selectedPrice","adHocAmount","quantity","selectedVariant"].some((t=>JSON.stringify(i[t])!==JSON.stringify(e[t]))))&&setLineItem(t),(!e||JSON.stringify(null==i?void 0:i.variantValues)!==JSON.stringify(null==e?void 0:e.variantValues))&&updateSelectedVariant(t,i)}));const updateSelectedVariant=(t,i)=>{const e=getVariantFromValues({variants:state[t].variants,values:null==i?void 0:i.variantValues});e&&setProduct(t,{selectedVariant:e})},handleStockWithSelectedVariant=t=>{var i,e,a;state[t].selectedVariant&&isStockNeedsToBeChecked&&(null===(i=state[t])||void 0===i?void 0:i.selectedVariant.available_stock)<(null===(e=state[t])||void 0===e?void 0:e.quantity)&&(state[t].quantity=(null===(a=state[t])||void 0===a?void 0:a.selectedVariant.available_stock)||1,speak(wp.i18n.sprintf(wp.i18n.__("There are just %d items left in stock, and the quantity has been adjusted to %d.","surecart"),state[t].quantity,state[t].quantity),"assertive"))},updateSelectedPrice=(t,i)=>{var e,a,o,l;setProduct(t,{total:state[t].adHocAmount||(null===(e=null==i?void 0:i.selectedPrice)||void 0===e?void 0:e.amount)||0,adHocAmount:null===(a=null==i?void 0:i.selectedPrice)||void 0===a?void 0:a.amount,disabled:(null===(o=null==i?void 0:i.selectedPrice)||void 0===o?void 0:o.archived)||(null===(l=state[t].product)||void 0===l?void 0:l.archived)})},setLineItem=t=>{var i,e,a,o,l,d,n,s;setProduct(t,{line_item:{price_id:null===(e=null===(i=state[t])||void 0===i?void 0:i.selectedPrice)||void 0===e?void 0:e.id,quantity:Math.max((null===(o=null===(a=state[t])||void 0===a?void 0:a.selectedPrice)||void 0===o?void 0:o.ad_hoc)?1:state[t].quantity,1),...(null===(d=null===(l=state[t])||void 0===l?void 0:l.selectedPrice)||void 0===d?void 0:d.ad_hoc)?{ad_hoc_amount:null===(n=state[t])||void 0===n?void 0:n.adHocAmount}:{},variant:null===(s=state[t].selectedVariant)||void 0===s?void 0:s.id}})};export{on as a,setProduct as b,isSelectedVariantMissing as c,dispose as d,isOptionSoldOut as e,forceUpdate as f,getters as g,isOptionMissing as h,isProductOutOfStock as i,availablePrices as j,onChange as o,state as s};