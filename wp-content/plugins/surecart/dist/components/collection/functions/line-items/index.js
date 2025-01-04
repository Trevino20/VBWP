import{getQueryArg}from"@wordpress/url";export const getEnabledPriceChoices=e=>(e||[]).filter((e=>!1!==(null==e?void 0:e.enabled)));export const convertPriceChoiceToLineItemData=e=>({price_id:e.id,quantity:e.quantity});export const convertLineItemsToLineItemData=e=>((null==e?void 0:e.data)||[]).map((e=>{var i;return{...(null==e?void 0:e.id)?{id:e.id}:{},price_id:e.price.id,quantity:e.quantity,variant_id:null===(i=e.variant)||void 0===i?void 0:i.id}}));export const addLineItem=(e,i)=>{const t=convertLineItemsToLineItemData(e),n=t.findIndex((e=>e.price_id===i.price_id));return t[n]=i,t};export const calculateInitialLineItems=(e,i)=>{const t=getQueryArg(window.location.href,"prices");return t?t.map(convertPriceChoiceToLineItemData):getInitialChoiceLineItems(e,i)};export const getInitialChoiceLineItems=(e,i)=>{var t;return"all"===i?getEnabledPriceChoices(e).map(convertPriceChoiceToLineItemData):[null===(t=getEnabledPriceChoices(e).map(convertPriceChoiceToLineItemData))||void 0===t?void 0:t[0]]};export const getLineItemPriceIds=e=>((null==e?void 0:e.data)||[]).map((e=>e.price.id));export const getLineItemBumpIds=e=>((null==e?void 0:e.data)||[]).map((e=>{var i;return(null===(i=null==e?void 0:e.bump)||void 0===i?void 0:i.id)||(null==e?void 0:e.bump)}));export const getLineItemPrices=e=>((null==e?void 0:e.data)||[]).map((e=>e.price));export const getLineItemByPriceId=(e,i)=>((null==e?void 0:e.data)||[]).find((e=>e.price.id===i));export const isProductInOrder=(e,i)=>{const t=getLineItemPrices(null==i?void 0:i.line_items);return!!(null==t?void 0:t.length)&&!!t.find((i=>{var t;return(null===(t=null==i?void 0:i.product)||void 0===t?void 0:t.id)===e.id}))};export const isPriceInOrder=(e,i)=>!!getLineItemPriceIds(null==i?void 0:i.line_items).find((i=>(null==e?void 0:e.id)===i));export const isBumpInOrder=(e,i)=>!!getLineItemBumpIds(null==i?void 0:i.line_items).find((i=>(null==e?void 0:e.id)===i));export const getSessionId=(e,i,t=!1)=>{if(!0===t)return!1;if(null==i?void 0:i.id)return i.id;return getQueryArg(window.location.href,"order")||window.localStorage.getItem(e)};export const hasSubscription=e=>{var i,t,n;return!!(null===(t=null===(i=null==e?void 0:e.line_items)||void 0===i?void 0:i.data)||void 0===t?void 0:t.length)&&(null===(n=null==e?void 0:e.line_items.data)||void 0===n?void 0:n.some((e=>{var i;return null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.recurring_interval_count})))};export const hasTrial=e=>null==e?void 0:e.trial_amount;export const hasPaymentPlan=e=>{var i;return hasSubscription(e)&&(null===(i=null==e?void 0:e.line_items.data)||void 0===i?void 0:i.some((e=>{var i;return null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.recurring_period_count})))};