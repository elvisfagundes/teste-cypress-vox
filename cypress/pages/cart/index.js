import { elementos as el } from "./elements";

export default new class Cart {

    validarItemCarrinho(product){
        cy.get(el.itemName).
        should('have.text', product)
    }

    irParaCheckout(){
        cy.get(el.checkoutButton)
        .should('be.visible')
        .click()
    }
}