import { elementos as el } from './elements.js';

export default new class Products {
    productPage() {
        cy.get(el.productLabel).should('exist').contains('Products')    
    }

    validarImagemNaoExibida(){
        cy.get(el.productImage).should('have.css', 'width', '0px')
    }

    validarLentidao(){
        cy.get(el.productLabel).should('exist').contains('Products')    
        cy.on('test:after:run', (attributes) => {
            if (attributes.duration < 5000) {
                expect(attributes.duration).to.be.false
            } else {
                expect(attributes.duration > 5000).to.be.true
            }
        })
    }
    
    selecionarProduto(product){
        cy.get(el.productName)
        .contains(product)
        .click()
    }
}