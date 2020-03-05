# Semana OmniStack 10 - Estudos e Anotações Importantes

Aqui, iremos estudar:
- NodeJS;
- ReactJS;  
- React Native.

Iremos desenvolver uma aplicação de Waze/GoogleMaps para desenvolvedores.


## Arquitetura da aplicação

### Back-end

No nosso back-end, teremos:

- Regras de negócio;  
- Conexão com o banco de dados;  
- Disparo e envio de e-mails;  
- Comunicação com webservices externos;  
- Autenticação e autorização de usuários;  
- Criptografia e segurança.

#### Métodos HTTP

- GET;  
- POST;  
- PUT;  
- DELETE.

#### Tipos de Pârametros (no express)

##### Query Params

Na maioria das vezes é utilizado em requisições do tipo GET. Pois o GET não aceita body.

Utilizamos os *query params* em filtros, ordenação, paginação. Para acessar eles, basta chamarmos `request.query`.

##### Route Params

Utilizamos o *route params* basicamente nos métodos PUT e DELETE. Por exemplo, quero editar ou deletar um usuário, estamos falando apenas de um usuário, por isso *route params*.

Basicamente, serve para identificarmos um recurso durante uma alteração ou remoção.

##### Body

É o corpo da nossa requisição. Iremos utilizar nos métodos POST e PUT. Serve para que o cliente envie à nossa API uma requisição com dados de criação ou alteração de um registro.


#### Banco de Dados - MongoDB

É um banco não relacional, é totalmente perfomático e escalável.

##### Models

São as repesentações de entidades da nossa aplicação. Entidades são as informações que queremos armazenar dentro do nosso banco de dados.

No MongoDB, entidades são chamadas de **collections**. E as informações armazenadas dentro da entidade são chamadas de **documents**.

##### Schemas

É a estruturação de uma entidade dentro do nosso banco de dados.