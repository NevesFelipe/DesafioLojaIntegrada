import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../pages/checkoutPage";

Given("acesso a página do produto", () => {
    cy.visit('/codigo-produto-com-ncm-preenchido');
});

Then("clico no botão {string}", button => {
    checkoutPage.clickButtonByText(button);
});

Then("preencho, calculo e seleciono o {string}", (string, dataTable) => {
    checkoutPage.calculateShipping(string, dataTable);
});

When("insiro o cupom {string}", coupon => {
    checkoutPage.fillCouponField(coupon);
});

Then("verifico o valor {string}", string => {
    checkoutPage.verifyTotalValue(string);
});

Then("verifico a mensagem de erro {string}", error_mgs => {
    checkoutPage.verifyErrorMsg(error_mgs);
});