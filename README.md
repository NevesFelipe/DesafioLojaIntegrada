# DESAFIO TÉCNICO | QUALITY ASSURANCE

# Automação de testes funcionais
Projeto de automação de testes funcionais na interface de [E-commerce](https://qastoredesafio.lojaintegrada.com.br/) para os seguintes requisitos:<br>
- Cupons válidos<br>
- Cupons inválidos<br>
- Casos Limite<br>
- Fluxos adicionais<br>

Os testes foram desenvolvidos em JS com [Cypress](https://www.cypress.io/) e [Cucumber](https://cucumber.io/)

## Arquitetura do Projeto

- Cypress: Pasta Raiz do projeto
  - E2E:
    - Arquivos .feature com os cenários de testes
  - Support:
    - Elements: Elementos da página
    - Pages: Implementações das funções de cada feature
    - Steps: Passo-a-passo dos testes de acordo com as features

## Pré-Requisitos
Para a execução dos teste é necessário instalar as ferramentas abaixo:
- Node > Ultima versão LTS - [instalação Node](https://nodejs.org/en/download/)
- Cypress > Ultima versão
```bash
npm install cypress
```
- Cucumber > Ultima versão 
```bash
npm install @badeball/cypress-cucumber-preprocessor
```
## Execução dos testes
Para realizar a execução dos testes, basta roda o comando abaixo:
```
npx cypress run
```