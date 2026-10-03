# Relatório da Última Execução — Newman

## Informações da execução

| Informação              | Resultado          |
| ----------------------- | ------------------ |
| Data                    | 03/10/2026         |
| Hora                    | 13:29:34           |
| Ferramenta              | Newman 6.2.2       |
| Collection              | ServeRest - C2 API |
| Ambiente                | ServeRest          |
| Iterações               | 1                  |
| Requests executadas     | 9                  |
| Requests com falha      | 0                  |
| Assertions              | 20                 |
| Assertions com falha    | 0                  |
| Test scripts            | 8                  |
| Pre-request scripts     | 3                  |
| Duração total           | 3,6s               |
| Tempo médio de resposta | 287ms              |

## Resultado

A execução foi concluída sem falhas.

* **9 de 9 requests executadas com sucesso**
* **20 de 20 assertions aprovadas**
* **0 requests com falha**
* **0 assertions com falha**

## Cenários executados

| # | Cenário                                    | Status HTTP | Resultado |
| - | ------------------------------------------ | ----------: | --------- |
| 1 | Cadastro de usuário — Sucesso              |         201 | Aprovado  |
| 2 | Cadastro de usuário — E-mail já cadastrado |         400 | Aprovado  |
| 3 | Login — Sucesso                            |         200 | Aprovado  |
| 4 | Login — Credenciais inválidas              |         401 | Aprovado  |
| 5 | Cadastro de produto — Sem token            |         401 | Aprovado  |
| 6 | Cadastro de produto — Usuário comum        |         403 | Aprovado  |
| 7 | Cadastro de usuário administrador          |         201 | Aprovado  |
| 8 | Login — Administrador                      |         200 | Aprovado  |
| 9 | Cadastro de produto — Administrador        |         201 | Aprovado  |

## Validações realizadas

Foram validados:

* códigos de status HTTP;
* mensagens de resposta;
* criação de usuários;
* autenticação de usuário comum;
* autenticação de administrador;
* geração de tokens de autorização;
* rejeição de credenciais inválidas;
* rejeição de requisição sem token;
* restrição de acesso para usuário comum;
* cadastro de produto por administrador;
* presença do ID do usuário;
* presença do ID do produto;
* contrato da resposta do cadastro de produto.

## Conclusão

A última execução da collection **ServeRest - C2 API** foi concluída com sucesso, sem falhas nas requisições ou nas assertions configuradas.

A execução confirma o funcionamento dos cenários automatizados de cadastro, autenticação, autorização e cadastro de produtos previstos para a etapa C2.
