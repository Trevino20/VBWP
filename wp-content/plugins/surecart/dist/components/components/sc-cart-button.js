import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{a as store,d as onChange,s as state}from"./mutations2.js";const scCartButtonCss=":host{display:inline-block;vertical-align:middle;line-height:1}::slotted(*){display:block !important;line-height:1}.cart__button{padding:0 4px;height:100%;display:grid;align-items:center}.cart__content{position:relative}.cart__count{box-sizing:border-box;position:absolute;inset:-12px -16px auto auto;text-align:center;font-size:10px;font-weight:bold;border-radius:var(--sc-cart-icon-counter-border-radius, 9999px);color:var(--sc-cart-icon-counter-color, var(--sc-color-primary-text, var(--sc-color-white)));background:var(--sc-cart-icon-counter-background, var(--sc-color-primary-500));box-shadow:var(--sc-cart-icon-box-shadow, var(--sc-shadow-x-large));padding:2px 6px;line-height:14px;min-width:14px;z-index:1}.cart__icon{font-size:var(--sc-cart-icon-size, 1.1em);cursor:pointer}.cart__icon sc-icon{display:block}",ScCartButtonStyle0=scCartButtonCss,ScCartButton$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.open=null,this.count=0,this.formId=void 0,this.mode="live",this.cartMenuAlwaysShown=!0,this.showEmptyCount=!1}getItemsCount(){var t,e;const o=null===(e=null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.line_items)||void 0===e?void 0:e.data;let n=0;return(o||[]).forEach((t=>{n+=null==t?void 0:t.quantity})),n}componentDidLoad(){this.link=this.el.closest("a"),this.link.addEventListener("click",(t=>(t.preventDefault(),t.stopImmediatePropagation(),store.state.cart={...store.state.cart,open:!store.state.cart.open},!1))),this.handleParentLinkDisplay(),onChange(this.mode,(()=>this.handleParentLinkDisplay()))}handleParentLinkDisplay(){this.link.style.display=this.cartMenuAlwaysShown||this.getItemsCount()?null:"none"}render(){return h(Host,{key:"a8b28268b983d5a3530aa1708c34ae597b8975cc",tabindex:0,role:"button","aria-label":wp.i18n.sprintf(wp.i18n.__("Open Cart Menu Icon with %d items.","surecart"),this.getItemsCount()),onKeyDown:t=>{"Enter"!==(null==t?void 0:t.code)&&"Space"!==(null==t?void 0:t.code)||(store.state.cart={...store.state.cart,open:!store.state.cart.open},t.preventDefault())}},h("div",{key:"6e9e014fb1aa3bf54b4f8037b679778bee24b7c1",class:"cart__button",part:"base"},h("div",{key:"7b86fe7670e9a4fcef7630efd24d773b9a490732",class:"cart__content"},(this.showEmptyCount||!!this.getItemsCount())&&h("span",{key:"211358c60afba93db2d0a00e40167f8a6611e219",class:"cart__count",part:"count"},this.getItemsCount()),h("div",{key:"44758b3160736ae83af6b666f8e0a437d0d2fc72",class:"cart__icon"},h("slot",{key:"a6f3baac1b7b84ee7481180e623f555bda1f576e"})))))}get el(){return this}static get style(){return ScCartButtonStyle0}},[1,"sc-cart-button",{formId:[513,"form-id"],mode:[1],cartMenuAlwaysShown:[4,"cart-menu-always-shown"],showEmptyCount:[4,"show-empty-count"],open:[32],count:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-button"].forEach((t=>{"sc-cart-button"===t&&(customElements.get(t)||customElements.define(t,ScCartButton$1))}))}const ScCartButton=ScCartButton$1,defineCustomElement=defineCustomElement$1;export{ScCartButton,defineCustomElement};