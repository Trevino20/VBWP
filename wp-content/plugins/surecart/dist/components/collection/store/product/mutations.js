import state from"./store";import{toggleCart}from"../ui";import{addQueryArgs}from"@wordpress/url";import{setProduct}from"./setters";import{addCheckoutLineItem}from"../checkout/mutations";export const submitCartForm=async t=>{var o,e,d,i,r,c;const a=state[t];if(a&&(null===(o=a.selectedPrice)||void 0===o?void 0:o.id)&&(!(null===(e=a.selectedPrice)||void 0===e?void 0:e.ad_hoc)||null!==a.adHocAmount&&void 0!==a.adHocAmount))try{setProduct(t,{busy:!0}),await addCheckoutLineItem({price:null===(d=a.selectedPrice)||void 0===d?void 0:d.id,quantity:Math.max((null===(i=a.selectedPrice)||void 0===i?void 0:i.ad_hoc)?1:a.quantity,1),...(null===(r=a.selectedPrice)||void 0===r?void 0:r.ad_hoc)?{ad_hoc_amount:a.adHocAmount}:{},variant:null===(c=a.selectedVariant)||void 0===c?void 0:c.id}),toggleCart(!0),setProduct(t,{dialog:null})}catch(t){throw console.error(t),state.error=t,t}finally{setProduct(t,{busy:!1})}};export const getProductBuyLink=(t,o,e={})=>{var d,i,r,c,a,l,n;const u=state[t];if(u&&(null===(d=u.selectedPrice)||void 0===d?void 0:d.id)&&(!(null===(i=u.selectedPrice)||void 0===i?void 0:i.ad_hoc)||u.adHocAmount||0===u.adHocAmount))return addQueryArgs(o,{line_items:[{price:null===(r=u.selectedPrice)||void 0===r?void 0:r.id,quantity:Math.max((null===(c=u.selectedPrice)||void 0===c?void 0:c.ad_hoc)?1:u.quantity,1),...(null===(a=u.selectedPrice)||void 0===a?void 0:a.ad_hoc)?{ad_hoc_amount:u.adHocAmount}:{},...(null===(l=u.selectedVariant)||void 0===l?void 0:l.id)?{variant:null===(n=u.selectedVariant)||void 0===n?void 0:n.id}:{}}],...e})};