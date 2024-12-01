class CheckoutElements {
    buyButton = () => ".comprar > .botao";
    shippingInput = () => "#calcularFrete";
    shippingButton = () => "#btn-frete";
    shippingRadioButtonFirst = () => ":nth-child(1) > .radio > input";
    shippingRadioButtonSecond = () => ":nth-child(2) > .radio > input";
    couponInput = () => "#usarCupom";
    counponButton = () => "#btn-cupom";
    counponApplied = () => ".cupom-codigo";
    subtotal = () => ".subtotal > .titulo";
    couponValue = () => "#cupom_valor_real";
    total = () => ".total > .titulo";
    errorMsg = () => ".alert";
    freeShipping = () => ".cupom-valor > .cor-secundaria";
}
export default new CheckoutElements();