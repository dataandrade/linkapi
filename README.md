

## How to run this project
#### Requirements

---

## GitHub Configuration

This project use two 
- **Main branch**: `main`
    - Production type env
- **Sandbox branch**: `sandbox`
    - Sandbox env for testing before deploying to the main branch
- **Dev branch**: `dev`
    - Latest development branch. 

Flow of deployment

- Updating the `dev` branch:
    `feature/my-new-feature` -> `dev`

- Updating the `sandbox` branch:
    `dev` -> `sandbox`

- Updating the `main` branch:
`dev` -> `main`


---

# Teste Técnico - Back-end (Rodrigo Andrade)
## General instructions
Leia atentamente as instruções abaixo para a realização do teste proposto.

Você terá em torno de 72h para realizar o teste proposto.

---



### OBJETIVO

Deverá construir uma API RESTful usando a tecnologia NodeJS.


---


### REQUISITOS

● Criar contas testes nas plataformas Pipedrive e Bling.

● Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

● Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

● Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

● Criar endpoint para trazer os dados consolidados da collection do MongoDB.

---

## INSTRUÇÕES

● Desenvolva e versione o projeto usando git

● Utilize o GitHub para hospedar o código

● Enviar o link do repositório para people@linkapi.com.br

---

## O QUE SERÁ AVALIADO

● Quantidade de requisitos realizados

● Desacoplamento de código

● Legibilidade

● Boas práticas de desenvolvimento de API RESTful

● Performance