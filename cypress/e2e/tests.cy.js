import Login from '../pages/login'
import Products from '../pages/products'
import Description from '../pages/description'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'

import {  faker } from '@faker-js/faker'

const password = Cypress.env('password')
const usernameStandardUser = Cypress.env('usernameStandardUser')
const usernameLockedOutUser = Cypress.env('usernameLockedOutUser')
const usernameProblemUser = Cypress.env('usernameProblemUser')
const usernamePerformanceGlichUser = Cypress.env('usernamePerformanceGlichUser')

describe('Teste regressivo', () => {

  context('Página principal', () => {
    it('deve validar se a página foi exibida', () => {
      // Antes de cada teste verifica se a pagina de login foi exibida
      Login.paginaLogin()

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Pagina de login')
    })
  })

  context('Autenticação', () => {
    beforeEach(() => {
      // Antes de cada teste verifica se a pagina de login foi exibida
      Login.paginaLogin()
    })

    it('deve validar o login com dados válidos', () => {
      // Realiza o login com um usuário com standard user validando o login com sucesso
      Login.preencherLoginValido(usernameStandardUser, password)

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Login realizado com sucesso')
    })

   it('deve mostrar uma mensagem de erro caso o login seja com locked out user', () => {
     // Realiza tentativa de login com um usuário com locked out user validando a mensagem de erro
      Login.preencherLoginLockedOutUser(usernameLockedOutUser, password)
           
     // Retirar um screenshot para evidênciar o teste realizado.
     cy.screenshot('Mensagem de erro de login')
    })

   it('não deve exibir imagens dos produtos ao realizar o login com problem user', () => {
      // Realiza o login com um usuário com problem user validando a não exibição de imagens dos produtos
      Login.preencherLoginProblemUser(usernameProblemUser, password)
      Products.productPage()
      Products.validarImagemNaoExibida()

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Imagens quebradas')
    })

   it('deve apresentar lentidão ao realizar o login com performance glitch user', () => {
      // Realizar o login com um usuário com performance glitch validando a performance esperada
      Login.preencherLoginPerformanceGlichUser(usernamePerformanceGlichUser, password)
      Products.validarLentidao()

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Login com performance glitch')
    })
  })

  context('Compra', () => {
    beforeEach(() => {
      // Antes de cada teste realiza o login com um usuário valido 
      Login.paginaLogin()
      Login.preencherLoginValido(usernameStandardUser, password)
    })

    it('deve adicionar produto ao carrinho', () => {

      // Realiza a escolha do produto desejado para compra 
      Products.productPage()
      Products.selecionarProduto('Sauce Labs Backpack')

      // Valida a descrição do produto e adiciona ao carrinho
      Description.validarDescricao()
      Description.adicionarAoCarrinho()
      Description.validarCarrinhoComItem()

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Carrinho com item')
    })

    it('deve remover produto do carrinho', () => {

      // Realiza a escolha do produto desejado para compra 
      Products.productPage()
      Products.selecionarProduto('Sauce Labs Bike Light')
      
      // Valida a descrição do produto e adiciona ao carrinho
      Description.validarDescricao()
      Description.adicionarAoCarrinho()
      Description.validarCarrinhoComItem()

      // Valida se o carrinho possui o produto inserido e remove 
      Description.removerItemCarrinho()

      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Carrinho sem item')
    })

    it('deve finalizar a compra do Produto', () => {
      // Variável utilizada para escolha do produto desejado para compra
      let product = 'Sauce Labs Bike Light'
      
      // Escolhe um produto na página pós login
      Products.productPage()
      Products.selecionarProduto(product)

      // Valida a descrição do produto e adiciona ao carrinho
      Description.validarDescricao()
      Description.adicionarAoCarrinho()
      Description.validarCarrinhoComItem()

      // Redireciona para a página do carrinho 
      Description.clicarIconeCarrinho()

      // Valida o produto no carrinho e redireciona para a página de checkout
      Cart.validarItemCarrinho(product)
      Cart.irParaCheckout()

      // Realiza o preenchimento do formulário do primeiro checkout e redireciona para a página do resumo da compra
      Checkout.preencherFomulário(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode())
      Checkout.continuarParaFinalizarComprar()

      // Realiza a validação do resumo da compra e finaliza a compra
      Checkout.validarResumoCompra()
      Checkout.finalizarCompra()
      Checkout.validarCompraRealizada()
      
      // Retirar um screenshot para evidênciar o teste realizado.
      cy.screenshot('Compra realizada com sucesso')
    })

    it('deve validar campos do formulário', () => {
      // Variáveis necessárias para validação dos campos do formulário do primeiro checkout
      let product = 'Sauce Labs Bike Light'

      let errorFirstNameReq = "Error: First Name is required"
      let errorLastNameReq = "Error: Last Name is required"
      let errorPostalCodeReq = "Error: Postal Code is required"

      // Realiza a compra até a primeira página de checkout
      Products.selecionarProduto(product)
      Description.validarDescricao()
      Description.adicionarAoCarrinho()
      Description.validarCarrinhoComItem()
      Description.clicarIconeCarrinho()
      Cart.validarItemCarrinho(product)
      Cart.irParaCheckout()

      // Realiza a validação dos campos do formulário do primeiro checkout
      Checkout.validarCampoNome(faker.person.lastName())
      Checkout.continuarParaFinalizarComprar()
      Checkout.mensagemErro(errorFirstNameReq)

      // Retira um screenshot para evidênciar o teste realizado.
      cy.screenshot('Mensagem de erro do primeiro nome')
      
      Checkout.validarCampoSobrenome(faker.person.firstName())
      Checkout.continuarParaFinalizarComprar()
      Checkout.mensagemErro(errorLastNameReq)

      // Retira um screenshot para evidênciar o teste realizado.
      cy.screenshot('Mensagem de erro do sobrenome')

      Checkout.validarCampoCEP(faker.location.zipCode())
      Checkout.continuarParaFinalizarComprar()
      Checkout.mensagemErro(errorPostalCodeReq)

      // Retira um screenshot para evidênciar o teste realizado.
      cy.screenshot('Mensagem de erro de CEP')
    })
  })
})