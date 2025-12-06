# 📘 API de Agendamento e Autenticação – Documentação

Este projeto implementa uma API completa em NestJS, utilizando MongoDB (Mongoose), JWT, validação com DTOs, arquitetura em camadas e programação orientada a objetos.

## A API permite:
```
✔ Autenticação via JWT
✔ Criação de configurações de agendamento
✔ Atualização e ativação de agendamentos
✔ Listagem com filtros
✔ Validação forte de entrada com DTOs
✔ Conexão com MongoDB local
```
## Tecnologias Utilizadas
```

NestJS – Framework Node.js modular

TypeScript

MongoDB + Mongoose

JWT + Passport

Class-Validator / Class-Transformer

Arquitetura limpa (Controller → Service → Repository)

```

## 🛠️ Como instalar

Siga as etapas para executar o projeto localmente:

### 1. Clonar o repositório

``` bash
git clone https://github.com/veganico98/API-Agendamento-Suporte-Tecnico.git
```

### 2. Acessar o diretório do projeto

``` bash
cd API-Agendamento-Suporte-Tecnico
```

### 3. Instalar dependências

``` bash
npm install
```

### 4. Iniciar o servidor

``` bash
npm run start:dev
```

A API ficará disponível em:

    http://localhost:3000


```

# 🗄️ Guia Completo de Instalação e Uso do MongoDB + NestJS

## 🚀 Instalação do MongoDB e Ferramentas

### 🧩 Baixe o MongoDB Compass
🔗 https://www.mongodb.com/try/download/compass

> **MongoDB Compass** é a interface gráfica oficial do MongoDB — uma ferramenta visual que te permite explorar, gerenciar e manipular seus bancos de dados de forma simples, sem precisar usar comandos no terminal.

### ☁️ Crie uma conta no MongoDB Atlas
Crie uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para ter um banco de dados na nuvem.

### 💾 Baixe o MongoDB Community Server
🔗 https://www.mongodb.com/try/download/community
```
```
Após a instalação, execute o arquivo:

C:\Program Files\MongoDB\Server\8.2\bin\mongod
```

> Isso iniciará o servidor MongoDB local.

### 🧭 Conecte-se ao servidor no MongoDB Compass
Abra o Compass e crie uma nova conexão com a URL:
```
mongodb://localhost:27017

## Disponibilizado a collection POSTMAN para realização de testes
```
```
Importar a collection: Suportetecnico.postman_collection
```
------------------------------------------------------------------------

# 🔗 Endpoints utilizados

### POST `/api/exemplo`

### 📄 Descrição

Endpoint responsável por receber dados via **JSON**, validar os campos
necessários e retornar uma resposta adequada.\
Ele demonstra como estruturar entradas e saídas de forma clara e
objetiva.

------------------------------------------------------------------------


# /users
## Criação de usuário
```
POST http://localhost:3000/users
```
Exemplo de requisição:
```
{
  "nome": "usuário",
  "email": "teste@com.br",
  "password": "Abc12345!"
}
```
## Total de usuários
```
GET http://localhost:3000/users
```

## Deletar usuário
```
Delete http://localhost:3000/users/id
```
## Atualizar dado do usuário
```
Patch http://localhost:3000/users/id
```

------------------------------------------------------------------------
# /auth
## Validação de usuário
```
POST http://localhost:3000/auth
```
Exemplo de requisição:
```
{
  "email": "teste@com.br",
  "password": "Abc12345!"
}
```
Resultado esperado:
```
{
    "token":"Bearer SEU_TOKEN",
    "expiresIn": "1d"
}
```
------------------------------------------------------------------------
# /agendamento/config
## Obrigatório o Bearer SEU_TOKEN no authorization para realizar as seguintes chamadas
## Criação de agendamento
```
POST http://localhost:3000/agendamento/config
```
Exemplo de requisição:
```
{
  "name": "Agendamento diário",
  "description": "Rodar script de suporte",
  "color": "#ff0000",
  "fields": [
    {
      "type": "text",
      "required": true,
      "label": "Nome do cliente",
      "placeholder": "Digite o nome do cliente"
    },
    {
      "type": "select",
      "required": false,
      "label": "Tipo de suporte",
      "placeholder": "Selecione o tipo",
      "options": ["Remoto", "Presencial", "Telefone"]
    }
  ],
  "weekdays": ["segunda", "terça", "quarta"]
}
```

## Lista de agendamentos:
```
GET http://localhost:3000/agendamento/config
```

## Lista de agendamentos confirmados:
```
GET http://localhost:3000/agendamento/config?status=true
```
## Atualizar dados de agendamento
### Necessário passar para o body os dados opcionais que serão alterados seguindo a estrutura do create
```
Patch http://localhost:3000/agendamento/config/id
```
