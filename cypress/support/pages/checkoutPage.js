import checkoutElements from "../elements/checkoutElements";

class CheckoutPage {
    clickButtonByText(button){
        switch (button){
            case "Comprar":
                cy.get(checkoutElements.buyButton()).should("be.visible").click();
                break;
            case "Usar cupom":
                cy.get(checkoutElements.counponButton()).should("be.visible").click();
                break;
        }
    }
    calculateShipping(string, dataTable){
        const dados = dataTable.rowsHash();
        const CEP = dados[string];
        cy.get(checkoutElements.shippingInput()).type(CEP);
        cy.get(checkoutElements.shippingButton()).should("be.visible").click();
        cy.get(checkoutElements.shippingRadioButtonFirst()).should("be.visible").click();
    }
    fillCouponField(coupon){
        cy.get(checkoutElements.couponInput()).should("be.visible").type(coupon);
    }
    verifyTotalValue(string){
        switch(string){
            case "do frete":
                cy.get(checkoutElements.freeShipping()).should("be.visible").should('contain', "Frete Grátis");
                break;
            case "total":
                cy.get(checkoutElements.subtotal()).invoke('text').then((subtotalText) => {
                    cy.get(checkoutElements.total()).invoke('text').should("not.equal", subtotalText)
                });
        }
    }
    verifyErrorMsg(error_msg){
        switch(error_msg){
            case "Cupom expirado":
                cy.get(checkoutElements.errorMsg()).should("be.visible").should('contain', "Cupom expirado");
            case "Cupom não encontrado":
                cy.get(checkoutElements.errorMsg()).should("be.visible").should('contain', "Cupom não encontrado");
        }
    }
}
export default new CheckoutPage();