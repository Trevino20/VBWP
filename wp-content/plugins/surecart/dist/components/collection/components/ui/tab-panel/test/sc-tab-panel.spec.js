import{newSpecPage}from"@stencil/core/testing";import{ScTabPanel}from"../sc-tab-panel";describe("sc-tab-panel",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[ScTabPanel],html:"<sc-tab-panel></sc-tab-panel>"});expect(e.root).toMatchSnapshot()}))}));