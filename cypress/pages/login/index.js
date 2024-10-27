import { elementos as el } from "./elements"

export default new class Login {
    paginaLogin() {
      cy.visit('/')
      cy.title().should('eq', 'Swag Labs')
    }

    preencherLoginValido(username, password) {
      cy.get(el.usernameLabel).type(username)
      cy.get(el.passwordLabel).type(password, { log: false })
      cy.get(el.loginButton).click()
    }

    preencherLoginLockedOutUser(username, password) {
      cy.get(el.usernameLabel).type(username)
      cy.get(el.passwordLabel).type(password, { log: false })
      cy.get(el.loginButton).click()
      cy.get(el.errorMessage).should('exist')
      .contains('Epic sadface: Sorry, this user has been locked out.')
    }

    preencherLoginProblemUser(username, password) {
      cy.get(el.usernameLabel)
      .type(username)
      cy.get(el.passwordLabel)
      .type(password, { log: false })
      cy.get(el.loginButton)
      .click()
    }

    preencherLoginPerformanceGlichUser(username, password) {
      cy.get(el.usernameLabel)
      .type(username)
      cy.get(el.passwordLabel)
      .type(password, { log: false })
      cy.get(el.loginButton)
      .click()
    }
}