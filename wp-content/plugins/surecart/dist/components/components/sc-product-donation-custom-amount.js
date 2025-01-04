import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as state}from"./watchers3.js";import{d as defineCustomElement$6}from"./sc-choice-container2.js";import{d as defineCustomElement$5}from"./sc-form-control2.js";import{d as defineCustomElement$4}from"./sc-input2.js";import{d as defineCustomElement$3}from"./sc-price-input2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scProductDonationCustomAmountCss="sc-product-donation-custom-amount sc-price-input sc-button{margin-right:-10px !important}.sc-product-donation-custom-amount sc-button{opacity:0;visibility:hidden;transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}.sc-product-donation-custom-amount--has-value sc-button{opacity:1;visibility:visible}",ScProductDonationCustomAmountStyle0=scProductDonationCustomAmountCss,ScProductDonationCustomAmount$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.productId=void 0,this.value=void 0}state(){return state[this.productId]}updateState(t){state[this.productId]={...state[this.productId],...t}}render(){var t,o,e,s,n,c,i,u,a,r;const d=!!(null===(t=this.state())||void 0===t?void 0:t.custom_amount);return h(Host,{key:"7a9b7f513d19b5dfa61fe1199c36ff8af9310e25",class:{"sc-product-donation-custom-amount":!0,"sc-product-donation-custom-amount--has-value":!!this.value}},h("sc-choice-container",{key:"053018bee56a379f1fafd534d4ccfb26317d866b",value:`${null===(o=this.state())||void 0===o?void 0:o.custom_amount}`,"show-control":"false",checked:d,onClick:()=>this.priceInput.triggerFocus(),onKeyDown:()=>{this.priceInput.triggerFocus()},role:"button"},h("sc-visually-hidden",{key:"65639092b47669fa4102de1dd3f9985917ed6381"},wp.i18n.__("Enter a custom amount.","surecart")),h("sc-price-input",{key:"c985e5cfed51496288adb2763d12be39e857f67b",ref:t=>this.priceInput=t,currencyCode:(null===(s=null===(e=this.state())||void 0===e?void 0:e.selectedPrice)||void 0===s?void 0:s.currency)||(null===(n=null===window||void 0===window?void 0:window.scData)||void 0===n?void 0:n.currency)||"usd",showCode:!1,showLabel:!1,value:`${(null===(c=this.state())||void 0===c?void 0:c.custom_amount)||""}`,onScChange:t=>this.updateState({ad_hoc_amount:null,custom_amount:t.target.value}),min:null===(u=null===(i=this.state())||void 0===i?void 0:i.selectedPrice)||void 0===u?void 0:u.ad_hoc_min_amount,max:null===(r=null===(a=this.state())||void 0===a?void 0:a.selectedPrice)||void 0===r?void 0:r.ad_hoc_max_amount,style:{"--sc-input-border-color-focus":"var(--sc-input-border-color-hover)","--sc-focus-ring-color-primary":"transparent"}})))}get el(){return this}static get style(){return ScProductDonationCustomAmountStyle0}},[0,"sc-product-donation-custom-amount",{productId:[1,"product-id"],value:[2]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-donation-custom-amount","sc-choice-container","sc-form-control","sc-input","sc-price-input","sc-visually-hidden"].forEach((t=>{switch(t){case"sc-product-donation-custom-amount":customElements.get(t)||customElements.define(t,ScProductDonationCustomAmount$1);break;case"sc-choice-container":customElements.get(t)||defineCustomElement$6();break;case"sc-form-control":customElements.get(t)||defineCustomElement$5();break;case"sc-input":customElements.get(t)||defineCustomElement$4();break;case"sc-price-input":customElements.get(t)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(t)||defineCustomElement$2()}}))}const ScProductDonationCustomAmount=ScProductDonationCustomAmount$1,defineCustomElement=defineCustomElement$1;export{ScProductDonationCustomAmount,defineCustomElement};