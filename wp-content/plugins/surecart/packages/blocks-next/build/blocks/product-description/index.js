!function(){"use strict";var e=window.wp.blocks,t=window.React,i=window.wp.primitives,o=(0,t.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(i.Path,{d:"M4 6h12V4.5H4V6Zm16 4.5H4V9h16v1.5ZM4 15h16v-1.5H4V15Zm0 4.5h16V18H4v1.5Z"})),r=window.wp.blockEditor,n=window.wp.i18n,c=window.wp.coreData,d=JSON.parse('{"UU":"surecart/product-description"}');(0,e.registerBlockType)(d.UU,{edit:e=>{let{context:{postId:t}}=e;const i=(0,r.useBlockProps)(),{record:{meta:{product:o}={}}={}}=(0,c.useEntityRecord)("postType","sc_product",t);return React.createElement("div",i,o?o?.description:(0,n.__)("Experience the next level of convenience with our innovative widget. Melding cutting-edge technology with user-friendly design, this product provides unparalleled functionality that caters to your lifestyle.","surecart"))},icon:o})}();