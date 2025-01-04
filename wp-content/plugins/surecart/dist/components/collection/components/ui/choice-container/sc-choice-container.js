import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{FormSubmitController}from"../../../functions/form-data";import{isRtl}from"../../../functions/page-align";let id=0;export class ScChoiceContainer{constructor(){this.inputId="choice-container-"+ ++id,this.labelId=`choice-container-label-${id}`,this.hasFocus=!1,this.name=void 0,this.size="medium",this.value=void 0,this.type="radio",this.disabled=!1,this.checked=!1,this.required=!1,this.invalid=!1,this.showControl=!0,this.role=void 0}async triggerClick(){this.input.click()}async triggerFocus(){this.input.focus()}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.required&&(this.getAllChoices().some((e=>e.checked))?(this.input.setCustomValidity(""),this.invalid=!this.input.checkValidity()):(this.input.setCustomValidity("radio"===this.type?__("Please choose one.","surecart"):__("Please choose at least one.","surecart")),this.invalid=!this.input.checkValidity())),this.input.reportValidity()}handleCheckedChange(){this.input.setCustomValidity(""),"radio"===this.type&&this.checked&&this.getSiblingChoices().map((e=>e.checked=!1)),this.input.checked=this.checked}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}async setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getAllChoices(){const e=this.el.closest("sc-choices")||this.el.parentElement;return e?[...e.querySelectorAll("sc-choice-container, sc-choice")]:[]}getSiblingChoices(){return this.getAllChoices().filter((e=>e!==this.el))}handleKeyDown(e){if("true"!==e.target.contentEditable){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const t=this.getAllChoices().filter((e=>!e.disabled)),i=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=t.indexOf(this.el)+i;s<0&&(s=t.length-1),s>t.length-1&&(s=0),t[s].triggerFocus(),t[s].checked=!0,e.preventDefault()}" "===e.key&&(e.preventDefault(),this.checked=!0,this.scChange.emit(this.input.checked))}}componentDidLoad(){this.formController=new FormSubmitController(this.el,{value:e=>e.checked?e.value:void 0}).addFormData()}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}handleClickEvent(){"checkbox"===this.type?(this.checked=!this.checked,this.scChange.emit(this.input.checked)):this.checked||(this.checked=!0,this.scChange.emit(this.input.checked))}render(){return h("div",{key:"77d6fb9d20fd772e4b2285b69c52c222d22ef092",part:"base",class:{choice:!0,"choice--checked":this.checked,"choice--disabled":this.disabled,"choice--focused":this.hasFocus,"choice--is-rtl":isRtl(),[`choice--size-${this.size}`]:!0},role:"radio","aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false",onKeyDown:e=>this.handleKeyDown(e)},h("slot",{key:"101cfc39748136ba55dbee171804db93baa78bf6",name:"header"}),h("div",{key:"68cfa1b7394ae4800329dd1cc0893d1af0149e30",class:"choice__content",part:"content"},h("span",{key:"fa4f61f13df55cd900ea393dd77ba00a224f6c4a",part:"control",class:{choice__control:!0,choice__checkbox:"checkbox"===this.type,choice__radio:"radio"===this.type},hidden:!this.showControl},h("span",{key:"2500e5d5f6133defdd37bf83005615bec88e1b4f",part:"checked-icon",class:"choice__icon"},"checkbox"===this.type?h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},h("g",{stroke:"currentColor","stroke-width":"2"},h("g",{transform:"translate(3.428571, 3.428571)"},h("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),h("path",{d:"M9.14285714,0 L3.42857143,9.14285714"}))))):h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor"},h("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),h("input",{key:"a332bef15f7cfc702f802b89f0abca997853bdb3",id:this.inputId,ref:e=>this.input=e,type:this.type,name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,"aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false","aria-labelledby":this.labelId,tabindex:"0",onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus(),onChange:()=>this.handleClickEvent(),role:this.role})),h("label",{key:"a70d774a37d07a4a82929c200cf0e66cdd732b31",part:"label",id:this.labelId,class:"choice__label"},h("slot",{key:"c53a4e8e218862392f25c716b6e7afc2c75c5eb7"}))))}static get is(){return"sc-choice-container"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-choice-container.scss"]}}static get styleUrls(){return{$:["sc-choice-container.css"]}}static get properties(){return{name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice name attribute"},attribute:"name",reflect:!1},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The size."},attribute:"size",reflect:!1,defaultValue:"'medium'"},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice value"},attribute:"value",reflect:!0},type:{type:"string",mutable:!1,complexType:{original:"'radio' | 'checkbox'",resolved:'"checkbox" | "radio"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The choice name attribute"},attribute:"type",reflect:!1,defaultValue:"'radio'"},disabled:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is the choice disabled"},attribute:"disabled",reflect:!0,defaultValue:"false"},checked:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws the choice in a checked state."},attribute:"checked",reflect:!0,defaultValue:"false"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this required"},attribute:"required",reflect:!0,defaultValue:"false"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by the `required` prop."},attribute:"invalid",reflect:!0,defaultValue:"false"},showControl:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the radio/checkbox control"},attribute:"show-control",reflect:!1,defaultValue:"true"},role:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Role of radio/checkbox control"},attribute:"role",reflect:!1}}}static get states(){return{hasFocus:{}}}static get events(){return[{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's checked state changes."},complexType:{original:"boolean",resolved:"boolean",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{triggerClick:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Simulates a click on the choice.",tags:[]}},triggerFocus:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"",tags:[]}},reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<boolean>"},docs:{text:"Checks for validity and shows the browser's validation message if the control is invalid.",tags:[]}},setCustomValidity:{complexType:{signature:"(message: string) => Promise<void>",parameters:[{name:"message",type:"string",docs:""}],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"checked",methodName:"handleCheckedChange"}]}static get listeners(){return[{name:"click",method:"handleClickEvent",target:void 0,capture:!1,passive:!1}]}}