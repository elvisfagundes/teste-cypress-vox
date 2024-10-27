# Desafio técnico Cypress

Este repositório se trata de um desafio técnico realizado com Cypress, com o objetivo de automatizar testes WEB.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de validar os testes realizados, lembrando que as ferramentas utilizadas foram instaladas como dependências de desenvolvimento.

### 📋 Pré-requisitos

```
Cypress
Faker
mochawesome-reporter
NodeJS
```

## ⚙️ Executando os testes

Sugiro que utilize o comando abaixo para executar testes em modo headless:

```
npx cypress run
```

No modo headless os testes serão executados por padrão no browser Electron. Realizei uma configuração de script no packeage.json para utilizar o chrome como o browser, para isso utilize o commando abaixo:

```
npm run cy:run:chrome
```

Para utilizar a interface do Cypress, utilize o comando abaixo:

```
npx cypress open
```

Sugestão de navegador: Electron

*Nota: Para utilizar a interface do Cypress no navegador chrome o comando é 'npm run cy:open:chrome', é necessário possuir o Chrome instalado na sua maquina.*


### 🔩 Relatórios de testes

Foi utilizado o Mochawesome para gerar relatórios de testes. Para visualizar os relatórios, utilize o comando abaixo:

```
npx cypress run 
```

O comando é o mesmo, pois realzei a configuração dentro do arquivo cypress.config.js para utilizar o mochawesome-reporter como padrão.

Após executar os testes, será gerada uma pasta chamada reports, onde você pode encontrar os relatórios de testes em index.html.

## 🛠️ Construído com

* [Cypress](https://www.cypress.io/) - Biblioteca para automatização WEB
* [Faker](https://fakerjs.dev/guide/) - Gerador de dados falsos para preenchimento do formulário
* [mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Gerador de relatórios dos testes


## 📌 Versão

Utilizei [GIT](https://git-scm.com/) para controle de versão. 

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/elvisfagundes/teste-cypress-vox/blob/main/LICENSE) para detalhes.