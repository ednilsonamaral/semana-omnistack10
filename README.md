# Semana OmniStack 10 - Estudos e Anotações Importantes

Aqui, iremos estudar:
- NodeJS;
- ReactJS;  
- React Native.

Iremos desenvolver uma aplicação como se fosse um radar de desenvolvedores, utilizando mapa no app mobile e busca no web.


## Back-end

No nosso back-end, teremos:

- Regras de negócio;  
- Conexão com o banco de dados;  
- Disparo e envio de e-mails;  
- Comunicação com webservices externos;  
- Autenticação e autorização de usuários;  
- Criptografia e segurança.

### Métodos HTTP

- GET;  
- POST;  
- PUT;  
- DELETE.

### Tipos de Pârametros (no express)

#### Query Params

Na maioria das vezes é utilizado em requisições do tipo GET. Pois o GET não aceita body.

Utilizamos os *query params* em filtros, ordenação, paginação. Para acessar eles, basta chamarmos `request.query`.

#### Route Params

Utilizamos o *route params* basicamente nos métodos PUT e DELETE. Por exemplo, quero editar ou deletar um usuário, estamos falando apenas de um usuário, por isso *route params*.

Basicamente, serve para identificarmos um recurso durante uma alteração ou remoção.

#### Body

É o corpo da nossa requisição. Iremos utilizar nos métodos POST e PUT. Serve para que o cliente envie à nossa API uma requisição com dados de criação ou alteração de um registro.


### Banco de Dados - MongoDB

É um banco não relacional, é totalmente perfomático e escalável.

#### Models

São as repesentações de entidades da nossa aplicação. Entidades são as informações que queremos armazenar dentro do nosso banco de dados.

No MongoDB, entidades são chamadas de **collections**. E as informações armazenadas dentro da entidade são chamadas de **documents**.

#### Schemas

É a estruturação de uma entidade dentro do nosso banco de dados.


## Front-end

### Abordagem tradicional de aplicações Web

A abordagem tradicional de aplicações web são páginas estáticas com HTML + CSS + JS sem a utilização de frameworks (Angular, VueJS, ReactJS).

Nessa abordagem, cada requisição realizada, o back-end é responsável por devolver o conteúdo completo da aplicação, contendo o HTML, CSS e JS.

Aqui, nosso front-end fica limitado, pois o browser não vai conseguir interpretar o HTML por completo.


### Abordagem de SPA - Single Page Applications

A abordagem de SPA tornou-se mundialmente conhecida e começou a ganhar espaço em meados de 2012 e 2013, com a vinda do AngularJS.

Nessa abordagem, as requisições trazem apenas os dados como resposta, tirando assim a responsabilidade do back-end de devolver todo o conteúdo. Com isso, o front-end recebendo apenas os dados irá mostrar isso na tela.

Em uma aplicação SPA, a página nunca recarrega, otimizando assim a performance e dando vida ao conceito de SPA.


### Criar projeto em ReactJS

Para criar um novo projeto em ReactJS basta executarmos o seguinte comando no terminal `yarn create react-app app-name`, onde **app-name** é o nome do novo projeto.

#### Principais conceitos em React

##### Componentes

É um bloco isolado de HTML, CSS e Javascript, o qual ele não interfere no restante da aplicação.

##### Propriedade

São informações que um componente PAI passa para o componente FILHO. Também conhecidos como atributos.

##### Estado

São informações mantidas pelo componente (imutabilidade).

##### JSX

JSX é uma sintaxe semelhante ao XML, onde você consegue escrever e compreender de uma melhor forma, como será montado o seu component na UI.

Em aplicações ReactJS podemos trabalhar com JSX. Ou seja, podemos colocar o HTML da nossa aplicação no mesmo arquivo do Javascript. Isso revolucionou o desenvolvimento web, com essa possibilidade.

Usando o JSX podemos escrever estruturas HTML, e no mesmo arquivo que você escreve o código JavaScript. Ao contrário do passado, em vez de colocar JavaScript em HTML, o JSX nos permite colocar HTML em JavaScript. 

O projeto que utiliza JSX deve possuir uma lib responsável para compilar esse código para que seja possível ser interpretado pelos browsers, já que o JSX não são interpretados pelos browsers.

O JSX providencia uma sintaxe familiar para definir a árvore estrutural, e isso não requer um novo conhecimento e também não abandonamos o Javascript.