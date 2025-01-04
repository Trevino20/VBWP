import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{o as openWormhole}from"./consumer.js";import{d as defineCustomElement$5}from"./sc-form-control2.js";import{d as defineCustomElement$4}from"./sc-input2.js";import{d as defineCustomElement$3}from"./sc-password2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scOrderPasswordCss=":host{display:block}.password{display:grid;gap:var(--sc-form-row-spacing, 0.75em)}.password__hint{padding-top:0.36rem;color:red}",ScOrderPasswordStyle0=scOrderPasswordCss,ScOrderPassword$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.loggedIn=void 0,this.size="medium",this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.autofocus=void 0,this.emailExists=void 0,this.confirmation=!1,this.confirmationLabel=void 0,this.confirmationPlaceholder=void 0,this.confirmationHelp=void 0,this.enableValidation=!0}async reportValidity(){var e,s;return null===(s=null===(e=this.input)||void 0===e?void 0:e.reportValidity)||void 0===s?void 0:s.call(e)}render(){return this.loggedIn?h(Host,{style:{display:"none"}}):h("sc-password",{label:this.label,"aria-label":this.label,help:this.help,autofocus:this.autofocus,placeholder:this.placeholder,showLabel:this.showLabel,size:this.size?this.size:"medium",name:"password",ref:e=>this.input=e,value:this.value,required:this.required,disabled:this.disabled,enableValidation:this.enableValidation,confirmationHelp:this.confirmationHelp,confirmationLabel:this.confirmationLabel,confirmationPlaceholder:this.confirmationPlaceholder,confirmation:this.confirmation})}static get style(){return ScOrderPasswordStyle0}},[1,"sc-order-password",{loggedIn:[4,"logged-in"],size:[513],value:[1025],pill:[516],label:[1],showLabel:[4,"show-label"],help:[1],placeholder:[1],disabled:[516],readonly:[516],required:[516],autofocus:[4],emailExists:[4,"email-exists"],confirmation:[516],confirmationLabel:[1,"confirmation-label"],confirmationPlaceholder:[1,"confirmation-placeholder"],confirmationHelp:[1,"confirmation-help"],enableValidation:[516,"enable-validation"],reportValidity:[64]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-password","sc-form-control","sc-input","sc-password","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-order-password":customElements.get(e)||customElements.define(e,ScOrderPassword$1);break;case"sc-form-control":customElements.get(e)||defineCustomElement$5();break;case"sc-input":customElements.get(e)||defineCustomElement$4();break;case"sc-password":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}openWormhole(ScOrderPassword$1,["loggedIn","emailExists"],!1);const ScOrderPassword=ScOrderPassword$1,defineCustomElement=defineCustomElement$1;export{ScOrderPassword,defineCustomElement};