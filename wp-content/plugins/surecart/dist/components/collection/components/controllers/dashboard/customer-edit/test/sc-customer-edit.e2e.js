import{newE2EPage}from"@stencil/core/testing";describe("sc-customer-edit",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-customer-edit></sc-customer-edit>");const t=await e.find("sc-customer-edit");expect(t).toHaveClass("hydrated")}))}));