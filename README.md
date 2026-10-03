# ServeRest QA Automation

Projeto de automação de testes para a aplicação **ServeRest**, contemplando testes Web e API.

O objetivo é disponibilizar uma suíte que possa ser executada por qualquer avaliador após a instalação das dependências, sem necessidade de configuração manual.

## Tecnologias

* **Cypress 16.1.1** — testes Web.
* **Postman** — criação e validação dos testes de API.
* **Newman 6.2.2** — execução da collection de API via linha de comando.
* **Node.js / npm** — execução e gerenciamento das dependências.
* **Git / GitHub** — versionamento e publicação do projeto.

## Pré-requisitos

É necessário ter instalado:

* Node.js
* npm
* Git

Não é necessário instalar Cypress ou Newman globalmente. As ferramentas são instaladas como dependências do projeto.

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd serve-rest-qa
```

Instale as dependências:

```bash
npm install
```

## Execução da suíte

Toda a suíte pode ser executada utilizando **um único comando**:

```bash
npm test
```

O comando executa automaticamente:

```text
C1 — Testes Web (Cypress)
        ↓
C2 — Testes de API (Newman)
```

Também é possível executar cada etapa separadamente:

```bash
npm run test:web
```

```bash
npm run test:api
```

Para a execução completa, o comando recomendado é:

```bash
npm test
```

Não é necessário abrir o Postman para executar os testes de API.

## Estrutura do projeto

```text
serve-rest-qa/
│
├── cypress/
│   └── e2e/
│
├── cypress.config.js
├── ServeRest - C2 API.postman_collection.json
├── ServeRest.postman_environment.json
├── README.md
├── RELATORIO-NEWMAN.md
├── package.json
└── package-lock.json
```

## C1 — Testes Web

Os testes Web foram implementados utilizando Cypress.

Os cenários contemplam:

* login com credenciais válidas;
* login com senha inválida;
* validação de campos obrigatórios;
* acesso à área de produtos após autenticação.

A execução pode ser realizada individualmente com:

```bash
npm run test:web
```

## C2 — Testes de API

Os testes de API foram criados no Postman e executados pelo Newman.

A collection contempla 9 cenários:

1. Cadastro de usuário com sucesso.
2. Cadastro de usuário com e-mail já cadastrado.
3. Login com sucesso.
4. Login com credenciais inválidas.
5. Cadastro de produto sem token.
6. Cadastro de produto utilizando usuário comum.
7. Cadastro de usuário administrador.
8. Login de administrador.
9. Cadastro de produto utilizando administrador.

As validações incluem códigos HTTP, mensagens de resposta, tokens, IDs e validação de contrato da resposta.

A execução individual pode ser realizada com:

```bash
npm run test:api
```

## C3 — Estratégia de testes

A automação prioriza cenários críticos e repetitivos, principalmente:

* autenticação;
* cadastro de usuários;
* controle de acesso;
* operações de produtos;
* validações de API;
* contratos de resposta.

Testes de usabilidade, validação visual, responsividade, acessibilidade e testes exploratórios podem ser complementados manualmente.

## Decisões técnicas

### Cypress

Foi utilizado para os testes Web devido à experiência prévia com a ferramenta e à facilidade de implementação e manutenção dos cenários.

### Postman + Newman

O Postman foi utilizado para criação e validação dos cenários de API. O Newman permite executar a mesma collection pela linha de comando e integrá-la à suíte automatizada.

### Dados dinâmicos

Os testes utilizam dados de cadastro gerados durante a execução, reduzindo conflitos com registros existentes no ambiente compartilhado.

### Execução unificada

O script:

```bash
npm test
```

foi configurado para executar C1 e C2 em sequência. Dessa forma, o avaliador não precisa conhecer a estrutura interna do projeto nem executar cada ferramenta manualmente.

## Dados e segurança

O projeto não utiliza credenciais reais.

Os usuários e demais dados utilizados nos testes são fictícios e destinados exclusivamente à automação.

Os tokens de autenticação são obtidos durante a execução dos testes e não são armazenados como credenciais fixas no repositório.

## Relatório da última execução

O relatório da última execução dos testes de API está disponível em:

[RELATORIO-NEWMAN.md](RELATORIO-NEWMAN.md)

O relatório contém a data e hora da execução, resultado dos cenários, quantidade de requisições, assertions e falhas.

## Ambiente

Os testes utilizam os ambientes públicos do ServeRest:

* `https://serverest.dev`
* `https://front.serverest.dev`

Por utilizar um ambiente compartilhado, os dados podem sofrer alterações entre diferentes execuções.

## Execução rápida

Para executar toda a suíte após clonar o projeto:

```bash
npm install
npm test
```

O segundo comando executa **C1 + C2 automaticamente**.
