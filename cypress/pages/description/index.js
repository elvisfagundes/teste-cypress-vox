import { elementos as el } from "./elements";

export default new class Description {

    adicionarAoCarrinho(){
        cy.get(el.buttonAddCart)
        .click()
        cy.get(el.badgeCart)
        .should('have.text', '1')
    }

    removerItemCarrinho(){
        cy.get(el.buttonRemoveCart)
        .click()
        cy.get(el.badgeCart)
        .should('not.exist')
    }

    validarCarrinhoComItem(){
        cy.get(el.badgeCart)
        .should('have.text', '1')
    }

    validarDescricao(){
        cy.get(el.descriptionText)
        .should('be.visible')
    }

    clicarIconeCarrinho() {
        cy.get(el.buttonCart)
        .should('be.visible')
        .click()
    }
}