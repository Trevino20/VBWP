import{newE2EPage}from"@stencil/core/testing";describe("sc-custom-order-price-input",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-custom-order-price-input></sc-custom-order-price-input>");const t=await e.find("sc-custom-order-price-input");expect(t).toHaveClass("hydrated")}))}));