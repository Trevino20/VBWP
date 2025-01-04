import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{s as speak}from"./index2.js";import{a as apiFetch,h as handleNonceError}from"./fetch.js";import"./google.js";import{d as defineCustomElement$n}from"./sc-alert2.js";import{d as defineCustomElement$m}from"./sc-block-ui2.js";import{d as defineCustomElement$l}from"./sc-button2.js";import{d as defineCustomElement$k}from"./dropdown.js";import{d as defineCustomElement$j}from"./sc-empty2.js";import{d as defineCustomElement$i}from"./sc-flex2.js";import{d as defineCustomElement$h}from"./sc-form-control2.js";import{d as defineCustomElement$g}from"./sc-format-number2.js";import{d as defineCustomElement$f}from"./sc-icon2.js";import{d as defineCustomElement$e}from"./sc-input2.js";import{d as defineCustomElement$d}from"./sc-menu2.js";import{d as defineCustomElement$c}from"./sc-menu-item2.js";import{d as defineCustomElement$b}from"./sc-pagination2.js";import{d as defineCustomElement$a}from"./sc-price-range2.js";import{d as defineCustomElement$9}from"./sc-product-item2.js";import{d as defineCustomElement$8}from"./sc-product-item-image2.js";import{d as defineCustomElement$7}from"./sc-product-item-price2.js";import{d as defineCustomElement$6}from"./sc-product-item-title2.js";import{d as defineCustomElement$5}from"./sc-skeleton2.js";import{d as defineCustomElement$4}from"./sc-spinner2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs,g as getQueryArgs}from"./add-query-args.js";const scProductItemListCss=":host {\n  display: block;\n}\n\n.product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search, .product-item-list__search-tag {\n  font-size: 16px;\n}\n.product-item-list__search, .product-item-list__sort {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-dropdown sc-button::part(base):focus-visible {\n  border: 1px dashed var(--sc-product-item-border-color, --sc-color-gray-50);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}",ScProductItemListStyle0=scProductItemListCss,ScProductItemList$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scSearched=createEvent(this,"scSearched",7),this.scProductsViewed=createEvent(this,"scProductsViewed",7),this.ids=void 0,this.sort="created_at:desc",this.query=void 0,this.searchEnabled=!0,this.sortEnabled=!0,this.collectionEnabled=!0,this.collectionId=void 0,this.pageTitle=void 0,this.featured=!1,this.paginationEnabled=!0,this.ajaxPagination=!0,this.paginationAutoScroll=!0,this.layoutConfig=void 0,this.paginationAlignment="center",this.limit=15,this.page=1,this.products=void 0,this.loading=!1,this.busy=!1,this.error=void 0,this.currentPage=1,this.currentQuery=void 0,this.pagination={total:0,total_pages:0},this.collections=void 0,this.selectedCollections=[]}handleProductsChanged(e,t){var s;const i=new Set([...(t||[]).map((e=>e.id)),...(e||[]).map((e=>e.id))]);if((null==e?void 0:e.length)===(null==t?void 0:t.length)&&i.size===e.length)return;const a=[this.pageTitle,this.paginationEnabled?wp.i18n.sprintf(wp.i18n.__("Page %d","surecart"),this.currentPage):void 0,this.sort?this.renderSortName():void 0,this.query||(null===(s=this.selectedCollections)||void 0===s?void 0:s.length)?wp.i18n.__("Search results","surecart"):void 0].filter((e=>!!e)).join(" - ");this.scProductsViewed.emit({products:this.products,pageTitle:a,collectionId:this.collectionId})}componentWillLoad(){var e;(null===(e=null==this?void 0:this.products)||void 0===e?void 0:e.length)?this.handleProductsChanged(this.products):this.getProducts(),this.collectionEnabled&&this.getCollections()}doPagination(e){if(this.ajaxPagination)return this.page=e,this.updateProducts(),void(this.paginationAutoScroll&&this.el.scrollIntoView({behavior:"smooth"}));const t=addQueryArgs(location.href,{"product-page":e});window.location.replace(t)}async getProducts(){const{"product-page":e}=getQueryArgs(window.location.href);this.page=this.paginationEnabled&&e?parseInt(e):1;try{this.loading=!0,await this.fetchProducts()}catch(e){console.error(e)}finally{this.loading=!1}}async getCollections(){try{this.collections=await apiFetch({path:addQueryArgs("surecart/v1/product_collections/",{per_page:100})})}catch(e){console.error(e)}}async handleSortChange(){this.page=1,this.updateProducts()}async updateProducts(e=!1){var t;try{this.busy=!0,await this.fetchProducts(),this.query&&e&&this.scSearched.emit({searchString:this.query,searchResultCount:null===(t=this.products)||void 0===t?void 0:t.length,searchResultIds:this.products.map((e=>e.id))})}catch(e){console.log("error"),console.error(e),this.error=e.message||wp.i18n.__("An unknown error occurred.","surecart")}finally{this.busy=!1}}handleIdsChange(){null!==this.debounce&&(clearTimeout(this.debounce),this.debounce=null),this.debounce=window.setTimeout((()=>{this.updateProducts(),this.debounce=null}),200)}async fetchProducts(){var e,t;let s=(null===(e=this.selectedCollections)||void 0===e?void 0:e.map((e=>e.id)))||[];this.collectionId&&(s=[this.collectionId]);try{const e=await apiFetch({path:addQueryArgs("surecart/v1/products/",{expand:["prices","featured_product_media","product_medias","product_media.media","variants"],archived:!1,status:["published"],per_page:this.limit,page:this.page,sort:this.sort,product_collection_ids:s,...this.featured?{featured:!0}:{},...(null===(t=this.ids)||void 0===t?void 0:t.length)?{ids:this.ids}:{},...this.query?{query:this.query}:{}}),parse:!1});this.currentQuery=this.query,this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))},this.products=await e.json(),(s.length||this.query)&&speak(wp.i18n.sprintf(wp.i18n.__("%s products found","surecart"),this.pagination.total))}catch(e){await handleNonceError(e).then((()=>this.fetchProducts())).catch((e=>{this.error=e.message||wp.i18n.__("An unknown error occurred.","surecart")}))}}renderSortName(){switch(this.sort){case"cataloged_at:desc":return wp.i18n.__("Latest","surecart");case"cataloged_at:asc":return wp.i18n.__("Oldest","surecart");case"name:asc":return wp.i18n.__("Alphabetical, A-Z","surecart");case"name:desc":return wp.i18n.__("Alphabetical, Z-A","surecart");default:return wp.i18n.__("Sort","surecart")}}toggleSelectCollection(e){this.selectedCollections.find((t=>t.id===e.id))?this.selectedCollections=this.selectedCollections.filter((t=>t.id!==e.id)):this.selectedCollections=[...this.selectedCollections,e]}getCollectionsAfterFiltered(){var e;return(null!==(e=this.collections)&&void 0!==e?e:[]).filter((e=>!this.selectedCollections.some((t=>t.id===e.id))))}isPaginationAvailable(){var e;return!!(null===(e=this.products)||void 0===e?void 0:e.length)&&this.pagination.total>this.products.length&&this.paginationEnabled}render(){var e,t,s,i,a,n;return h("div",{key:"6408c64fbd0b59e9aa1b0359b0dfcc490f4a8f2e",class:{"product-item-list__wrapper":!0,"product-item-list__has-search":!!this.query}},this.error&&h("sc-alert",{key:"cb15953f986ef3f1d88f3f837f50d3ce47a3216c",type:"danger",open:!0},this.error),(this.searchEnabled||this.sortEnabled||this.collectionEnabled)&&h("div",{key:"a101ad04a589e86fa9f0c8d093d41c10a40866cd",class:"product-item-list__header"},h("div",{key:"e55564b57eaa31b336b9f70820e8394790529b22",class:"product-item-list__controls"},h("div",{key:"23123b910e85dc008e9d7984ec18a6608c65598c",class:"product-item-list__sort"},this.sortEnabled&&h("sc-dropdown",{key:"83eadbcb43854c20f7bab062471e60e8076cd275",style:{"--panel-width":"15em"}},h("sc-button",{key:"79671e76fb3e790e7938bd48b12dffb8a491efe7",type:"text",caret:!0,slot:"trigger"},h("sc-visually-hidden",{key:"b807aa612abcea288ff2ea851d6e94f6e8e09c22"},wp.i18n.__("Dropdown to sort products.","surecart")," "),this.renderSortName(),h("sc-visually-hidden",{key:"d3f51057f0fb170e8465c5d938551989ef0e335e"}," ",wp.i18n.__("selected.","surecart"))),h("sc-menu",{key:"1748bb7c348d2984a531f3eeaa5b3b17b3687c8c","aria-label":wp.i18n.__("Sort Products","surecart")},h("sc-menu-item",{key:"53f7e6fbfb1e390e19435a4a5ba7fd9c35f05fa9","aria-label":wp.i18n.__("Sort by latest","surecart"),onClick:()=>this.sort="cataloged_at:desc"},wp.i18n.__("Latest","surecart")),h("sc-menu-item",{key:"f55715b201942ca079ac51d04887071833c3e9ba","aria-label":wp.i18n.__("Sort by oldest","surecart"),onClick:()=>this.sort="cataloged_at:asc"},wp.i18n.__("Oldest","surecart")),h("sc-menu-item",{key:"2ddd3d99ece189731314d33cfea794aa2cb9c80f","aria-label":wp.i18n.__("Sort by name, A to Z","surecart"),onClick:()=>this.sort="name:asc"},wp.i18n.__("Alphabetical, A-Z","surecart")),h("sc-menu-item",{key:"4003d5a412b3d0ed9a9607396632d0c37bc0acc4","aria-label":wp.i18n.__("Sort by name, Z to A","surecart"),onClick:()=>this.sort="name:desc"},wp.i18n.__("Alphabetical, Z-A","surecart")))),this.collectionEnabled&&(null!==(e=this.collections)&&void 0!==e?e:[]).length>0&&h("sc-dropdown",{key:"5d802aad1f066a874d7712147ed19e1a7089c158",style:{"--panel-width":"15rem"}},h("sc-button",{key:"fcb4357e8da11867435a290fb7b1b177f8536b03",type:"text",caret:!0,slot:"trigger"},h("sc-visually-hidden",{key:"38c5edb5b1dd1424ac47ad7ec110e93e854c696b"},wp.i18n.sprintf(wp.i18n.__("Dropdown to filter products by collection. %s selected.","surecart"),(null===(t=this.selectedCollections)||void 0===t?void 0:t.length)?this.selectedCollections.map((e=>null==e?void 0:e.name)).join(","):wp.i18n.__("None","surecart"))),h("span",{key:"5b9bc299add9b062b54a9bc1e8fe706642b0948e","aria-hidden":!0}," ",wp.i18n.__("Filter","surecart"))),h("sc-menu",{key:"1fc5548d30df5fc47ca85c340becbbca97fb9a28","aria-label":wp.i18n.__("Filter products","surecart")},(null!==(s=this.collections)&&void 0!==s?s:[]).map((e=>h("sc-menu-item",{checked:this.selectedCollections.some((t=>(null==t?void 0:t.id)===(null==e?void 0:e.id))),onClick:()=>this.toggleSelectCollection(e),key:null==e?void 0:e.id,"aria-label":wp.i18n.sprintf(wp.i18n.__("Filter by %s","surecart"),null==e?void 0:e.name)},e.name)))))),h("div",{key:"a1504c73a5d0c071ab9195b89db82904de4e1da5",class:"product-item-list__search"},this.searchEnabled&&((null===(i=this.query)||void 0===i?void 0:i.length)&&this.query===this.currentQuery?h("div",{class:"product-item-list__search-tag"},h("div",{class:"product-item-list__search-label"},wp.i18n.__("Search Results:","surecart")),h("sc-tag",{clearable:!0,onScClear:()=>{this.query="",this.currentQuery="",this.updateProducts()},"aria-label":wp.i18n.sprintf(wp.i18n.__("Searched for %s. Press space to clear search.","surecart"),this.query)},this.query)):h("sc-input",{type:"text",placeholder:wp.i18n.__("Search","surecart"),size:"small",onKeyUp:e=>{"Enter"===e.key&&(this.query=e.target.value,this.updateProducts(!0))},value:this.query,clearable:!0},this.query?h("sc-icon",{class:"clear-button",slot:"prefix",name:"x",onClick:()=>{this.query=""}}):h("sc-icon",{slot:"prefix",name:"search"}),h("sc-button",{class:"search-button",type:"link",slot:"suffix",busy:this.busy,onClick:()=>{this.updateProducts(!0)}},wp.i18n.__("Search","surecart")))))),this.collectionEnabled&&this.selectedCollections.length>0&&h("div",{key:"03a75bc5384dab3ffad8711a452a6ac24d5ab50a",class:"product-item-list__search-tag"},this.selectedCollections.map((e=>h("sc-tag",{key:null==e?void 0:e.id,clearable:!0,onScClear:()=>{this.toggleSelectCollection(e)}},null==e?void 0:e.name))))),!(null===(a=this.products)||void 0===a?void 0:a.length)&&!this.loading&&h("sc-empty",{key:"04bc5a3be8805ed387e9df841e4e34df3f951439",class:"product-item-list__empty",icon:"shopping-bag"},wp.i18n.__("No products found.","surecart")),h("section",{key:"1b11f9a08ae5f231c477799ebd6e3c12b6d2ee45",class:"product-item-list","aria-label":wp.i18n.__("Product list","surecart")},this.loading?[...Array((null===(n=this.products)||void 0===n?void 0:n.length)||this.limit||10)].map(((e,t)=>h("div",{class:"product-item-list__loader",key:t},(this.layoutConfig||[]).map((e=>{var t,s;switch(e.blockName){case"surecart/product-item-title":return h("div",{style:{textAlign:"var(--sc-product-title-align)"}},h("sc-skeleton",{style:{width:"80%",display:"inline-block"}}));case"surecart/product-item-image":return h("sc-skeleton",{style:{width:"100%",minHeight:"90%",aspectRatio:null!==(s=null===(t=e.attributes)||void 0===t?void 0:t.ratio)&&void 0!==s?s:"1/1.4","--sc-border-radius-pill":"12px",display:"inline-block"}});case"surecart/product-item-price":return h("div",{style:{textAlign:"var(--sc-product-price-align)"}},h("sc-skeleton",{style:{width:"40%",display:"inline-block"}}));default:return null}}))))):(this.products||[]).map(((e,t)=>h("sc-product-item",{key:null==e?void 0:e.id,...this.products.length-1===t?{"aria-label":wp.i18n.sprintf(wp.i18n.__("You have reached the end of product list. %s","surecart"),this.isPaginationAvailable()?wp.i18n.__("Press tab to browse more products using pagination.","surecart"):wp.i18n.__("No more products to browse.","surecart"))}:{},exportparts:"title, price, image",product:e,layoutConfig:this.layoutConfig})))),this.isPaginationAvailable()&&h("div",{key:"293890b47fc0c00064c9e7c4b480b7e7ccf75b2c",class:{"product-item-list__pagination":!0,"--is-aligned-left":"left"===this.paginationAlignment,"--is-aligned-center":"center"===this.paginationAlignment,"--is-aligned-right":"right"===this.paginationAlignment}},h("sc-pagination",{key:"4c80a73728002f933d48642395cc026d98d39198",page:this.page,perPage:this.limit,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:this.limit,onScNextPage:()=>this.doPagination(this.page+1),onScPrevPage:()=>this.doPagination(this.page-1)})),(this.busy||this.loading)&&h("sc-block-ui",{key:"ba5a393b08ea081b7dfbcdc873ae42271c28da4b"}))}get el(){return this}static get watchers(){return{products:["handleProductsChanged"],sort:["handleSortChange"],selectedCollections:["handleSortChange"],query:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}}static get style(){return ScProductItemListStyle0}},[1,"sc-product-item-list",{ids:[16],sort:[1025],query:[1025],searchEnabled:[4,"search-enabled"],sortEnabled:[4,"sort-enabled"],collectionEnabled:[4,"collection-enabled"],collectionId:[1,"collection-id"],pageTitle:[1,"page-title"],featured:[4],paginationEnabled:[4,"pagination-enabled"],ajaxPagination:[4,"ajax-pagination"],paginationAutoScroll:[4,"pagination-auto-scroll"],layoutConfig:[16],paginationAlignment:[1,"pagination-alignment"],limit:[2],page:[1026],products:[1040],pagination:[1040],loading:[32],busy:[32],error:[32],currentPage:[32],currentQuery:[32],collections:[32],selectedCollections:[32]},void 0,{products:["handleProductsChanged"],sort:["handleSortChange"],selectedCollections:["handleSortChange"],query:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-item-list","sc-alert","sc-block-ui","sc-button","sc-dropdown","sc-empty","sc-flex","sc-form-control","sc-format-number","sc-icon","sc-input","sc-menu","sc-menu-item","sc-pagination","sc-price-range","sc-product-item","sc-product-item-image","sc-product-item-price","sc-product-item-title","sc-skeleton","sc-spinner","sc-tag","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-product-item-list":customElements.get(e)||customElements.define(e,ScProductItemList$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$n();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$m();break;case"sc-button":customElements.get(e)||defineCustomElement$l();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$k();break;case"sc-empty":customElements.get(e)||defineCustomElement$j();break;case"sc-flex":customElements.get(e)||defineCustomElement$i();break;case"sc-form-control":customElements.get(e)||defineCustomElement$h();break;case"sc-format-number":customElements.get(e)||defineCustomElement$g();break;case"sc-icon":customElements.get(e)||defineCustomElement$f();break;case"sc-input":customElements.get(e)||defineCustomElement$e();break;case"sc-menu":customElements.get(e)||defineCustomElement$d();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$c();break;case"sc-pagination":customElements.get(e)||defineCustomElement$b();break;case"sc-price-range":customElements.get(e)||defineCustomElement$a();break;case"sc-product-item":customElements.get(e)||defineCustomElement$9();break;case"sc-product-item-image":customElements.get(e)||defineCustomElement$8();break;case"sc-product-item-price":customElements.get(e)||defineCustomElement$7();break;case"sc-product-item-title":customElements.get(e)||defineCustomElement$6();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$5();break;case"sc-spinner":customElements.get(e)||defineCustomElement$4();break;case"sc-tag":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScProductItemList=ScProductItemList$1,defineCustomElement=defineCustomElement$1;export{ScProductItemList,defineCustomElement};