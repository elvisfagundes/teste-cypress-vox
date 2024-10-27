import { elementos as el } from "./elements";

export default new class Checkout {

    preencherFomulário(nome = '', sobrenome = '', cep = ''){
        cy.get(el.firstNameLabel)
        .should('be.visible')
        .type(nome)
        cy.get(el.lastNameLabel)
        .should('be.visible')
        .type(sobrenome)
        cy.get(el.postalCodeLabel)
        .should('be.visible')
        .type(cep)
    }

    continuarParaFinalizarComprar() {
        cy.get(el.continueButton)
        .click()
    }

    validarResumoCompra(){
        cy.get(el.subHeader)
        .should('have.text', 'Checkout: Overview')
    }

    finalizarCompra(){
        cy.get(el.finishButton)
        .should('be.visible')
        .click()
    }

    validarCompraRealizada(){
        cy.get(el.completeHeader)
        .should('have.text', 'THANK YOU FOR YOUR ORDER')
    }

    mensagemErro(error){
        cy.get(el.errorMessage)
        .contains(error)
    }

    validarCampoNome(sobrenome){
        cy.get(el.lastNameLabel).type(sobrenome)
    }

    validarCampoSobrenome(nome){
        cy.get(el.lastNameLabel).clear()
        cy.get(el.firstNameLabel).type(nome)
    }

    validarCampoCEP(sobrenome){
        cy.get(el.lastNameLabel).type(sobrenome)
    }

}