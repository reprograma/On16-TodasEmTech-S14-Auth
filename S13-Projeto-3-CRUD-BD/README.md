# On16-TodasEmTech-S13-Projeto-3-CRUD-BD
Turma Online 16 - Todas em Tech | Back-end | 2022 | Semana 13 - Projeto Guiado CRUD com MongoDB

## Olá, prazer em conhece-las💜

Um pouquinho sobre mim.  Meu nome é Beatriz Ramerindo, sou engenheira de software, não possui faculdade, trabalho com enfãse em desenvolvimento back-end de produto, nas stacks de Spring com Koltin e e Express/Node com Typescript/Javascript.  Sou tão apaixonada por Js que ganhei uma caneca da mesma, apaixonada que só né, amo falar sobre, mas porque raios afinal `0 + null = 0?`. Prazer em conhece-las, quem curtir ai um anime de um pirata que estica e/ou curti um lolzinho, chama no PV depois e bora criar umas teoria ai ou uma flex?

- Chamada, apresentação das monitoras e acordos:

<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Caso queira fazer uma pergunta, levante a mão por favor.
* Enviar as dúvidas no chat, assim minhas queridas monitoras podem ajudar.
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* momento de olho na tela, sim depois deixo copiar 😌

<br>
<br>

## Revisão

### `1. Por que precisamos de um banco de dados?`

Vantagens: 
* Facilidade de acesso
* Análises e comparativos
* Segurança de dados
* Atualizações e aprimoramento das informações
* Escalabilidade 

<br>
<br>

#### `2. NoSQL v/s SQL`

| NoSQL | SQL |
| --- | --- |
| `Surgiu no final dos anos 90 e como uma alternativa de natureza não relacional` | RDBMS ou Sistema de Gerenciamento de Banco de Dados Relacional, armazenam dados em um formato estruturado, usando linhas, colunas e tabelas |
| `Possuem alta escalabilidade e desempenho` | Geralmente demanda distribuição vertical de servidores, o que gera mais custo, pois quanto mais dados, mais memória e mais disco um servidor precisa. |
| `Alguns tipos de bancos de dados não relacional: armazenamento de chave-valor, armazenamento column family, orientado a grafos e orientado a documentos` | Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.|

Aqui está um comparativo dos termos MongoDb e SQL:

| MongoDB | SQL |
| --- | --- |
| `database` | database|
| `collection` | table|
| `document` | row|
| `field` | column|
| `lookup` | table joins|


<br>
<br>

#### `3. O que é MongoDB?`
Um banco de dados não relacional, orientado a documentos, livre com o código aberto e multiplataforma. Ele foi escrito na linguagem C++.

No MongoDB, os conjuntos de dados forma uma collection, cada item forma um documento e dentro dos documentos temos os campos.

Os dados são armazenados no formato JSON, o que é uma grande facilidade para quem programa com Javascript.

Podemos usá-lo pelo serviço de nuvem(cloud) ou localmente fazendo o download para nossa máquina (vamos usar essa opção).

Além disso, o Mongo possui seu driver com suas próprias queries(comandos para interação com o banco que se assemelham muito com javascript com orientação a objeto), podemos também usar uma interface gráfica e ainda podemos usar um ODM(vamos usar a última opção).

#### `4. Quem usa MongoDB?`
Mais de 22.600 clientes no mundo usam MongoDB. Algumas delas: Google, Forbes, eBay, Toyota, SAP, Adobe e muitas outras.

#### `5. Operações de CRUD`
O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados) . São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose essas funcionalidades são:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

Para conhecer todas as operações MongoDb: 
https://docs.mongodb.com/manual/crud/

#### `6. O que é odm?`
Uma ferramenta que mapeia entre um Modelo de Objeto e um Banco de Dados de Documentos.

#### `7. Mongoose`

Mongoose é uma modelagem de objeto mongodb elegante para node.js.

Tudo no Mongoose começa com um Schema. Cada esquema é mapa para uma coleção MongoDB e define a forma dos documentos dentro dessa coleção.

Exemplo photoshop x Filtro do Instagram

#### `8. Conceito de Model (Schema)`
Nosso mongoose utiliza a `Schema` para pôr ordem na ' bagunça ', afinal como podemos salvar qualquer coisa, de qualquer jeito, seria uma loucura não?  Para isso precisamos de um schema( espelho ) de como será salvo nosso `document`.

Além disso, nos permite fazer o relacionamento de dados entre os collections diferentes.

exemplo de schema:

```javascript
const mongoose = require('mongoose');

const PokemonSchema = monogoose.Schema({
    name: String,
    avaliable: Boolean,
    birthdate: Date,
    abilities: [String],
    attributes: {
      hp: Number,
      attack: Number,
      defense: Number,
    }
});

```

#### `9. Passos para conectar o MongoDb usando mongoose:`

1 - Crio minha configuracao de conexao no database, passando informacoes padrão e a minha string de conexão
2 - Crio meu schema no model
3 - requiro no app e chamo a função de conexão


## [extra: 01] Dotenv - variaves de ambiente

Essa dica com certeza dará mais maturidade aos seus códigos de backend.
Afinal de contas dotenv é uma excelente ferramenta para gerenciar os dados sensíveis de desenvolvimento que não devem ser compartilhados como: chaves de API’s, informações do banco de dados, entre outras.

Vem aprender como orquestrar suas variáveis do ambiente dev em apenas 4 passos:

```
1- No seu projeto node com express, instale como dependência de desenvolvimento o dotenv. Utilize yarn ou npm.

yarn add dotenv -D
npm I —save-dev dotenv

2- Crie o arquivo .env

E nele crie suas chaves e valores que contém informações sensíveis e não podem ser compartilhadas além do ambiente de dev.

Por padrão as chaves são maiúsculas e não podem conter espaço, os valores ficam após o igual e podem ser de qualquer tipo pois retornarão sempre uma string:

NOME_DA_CHAVE=valor

3- Execute o ‘dotenv’, importando, usando a função config e incluindo ao processo para ler as variáveis configuradas:

require(‘dotenv’).config( )
process.env.NOME_DA_CHAVE

4- Como boa prática lembre-se de incluir seu arquivo .env no .gitignore

Você pode criar um .env.example e deixar apenas as chaves genéricas
```
## [extra: 02] Classes | POO (orientação a objetos) Conceitos básicos
Uma breve introdução sobre classes e objetos, para que possamos entender melhor o  nosso ORM.

###  uso da palavra reservada `new`
Quando possuímos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ),  afinal, não queremos que um Pikachu, se transforme num Charmander.

```javascript
const pokemon = new Model({
    name: 'Pikachu',
    avaliable: true,
    abilities: ['choque-do-trovao', 'esquivar'],
    attributes: {
      hp: 100,
      attack: 55,
      defense: 40,
    }
});

```

### Métodos
Como mencionamos em aulas passadas, assim como o objeto, as classes possuiem métodos, que são funções que nos auxiliam a realizar **ações** como por exemplo: salvar um pokemon, ou um ataque especial como shock do trovao, no nosso dia-a-dia usamos o console`.log`, *.log("hello word")* é um método que nos permite imprimir no terminal uma mensagem de texto.

#### Métodos relação com a nossa API

| OPERAÇÃO | MONGODB | MOOGOSE | DESCRIÇÃO | HttpCode
| ---------- | -------------- | ---------------- | ----------------- | ---- |
| **C**REATE | **db**.insertOne() | new **MusicModel**() | cria um documento | 201 |
| **R**EAD | **db**.find() |  **MusicModel**.find() | ler um documento | 200 |
| **U**PDATE | **db**.updateOne() | **MusicModel**.updateOne() | atualiza um documento | 200 |
| **D**ELETE | **db**.deleteOne() | **MusicModel**.deleteOne() | deleta um documento | 200 ou 204


### Constructor
Nosso `constructor` é responsável por inicializar a nossa classe, ele recebe os parametros para criar construir a instancia da classe, como por exemplo, nossa música, é assim que nossa Schema gera a música no formato que o banco espera, no caso do mongo, um BJSON.

### Tipagem - Tipos primários
Na programação, existem tipos primários, que são responsáveis por definir o tipo de informação ( dado ) que estamos trabalhando, por exemplo um número de celular `Number`, ou um email que é texto `String`, ou até mesmo se é verdadeiro(true) ou falso(false) que é um `Boolean`, além disso, temos o `Date` que representa uma data. 

 - String -> representa *texto* -> `""`
 - Number -> representa *número*  `0`
 - Boolean -> representa `true` ou `false`
 - Date -> representa uma data, por exemplo, 1970-01-13 -> `Date`

```typescript
    name: String,
    avaliable: Boolean,
    birthdate: Date,
    abilities: [String],
    attributes: {
      hp: Number,
      attack: Number,
      defense: Number,
    }
```

## Sobre o Projeto

O **{Pokedex}** é um sistema de gerenciamento de pokemons e treinadores.

Onde receberemos cadastros de pokemons referenciando cada ao seu respectivo treinador. 

```javascript
 // "Relacionamento" no MongoDB? Como é isso?

coach { // 'coach' nome da key 'chave' da schema
  type: mongoose.Schema.Types.ObjectId, // id de referencia,
  ref: 'coach' // colection de referencia
}

```

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 Pokedex
   |
   |-  📁 src
   |    |
        |- 📁 📄 app.js
   |    |- 📁 database
   |         |- 📄 moogoseConnect.js
   |
   |    |- 📁 controllers
   |         |- 📄 coachController.js
   |         |- 📄 pokemonController.js
   |
   |    |- 📁 models
   |         |- 📄 coachModel.js
   |         |- 📄 pokemonModel.js
   |
   |    |- 📁 routes
   |         |- 📄 coachRoutes.js 
   |         |- 📄 pokemonRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

# Contrato da API
 - Sim, eu torcia pela equipe Rocket

### Requisitos 
- [ ] GET "**/treinadores**" Deverá retornar todos os treinadores cadastrados.
- [ ] GET **"/treinador/[id]** Deverá retornar o treinador com o id informado.

- [ ] GET "**/pokedex**" Deverá retornar todos os pokemons cadastrados e os seus treinadores.
- [ ] GET **"/pokedex/[id]** Deverá retornar o pokemon com o id informado e o seu treinador

- [ ] POST   "**/treinador**" Deverá criar um treinador 
- [ ] POST   "**/pokedex**"  Deverá criar um pokemon 

- [ ] DELETE   "/treinadores/[ID]" Deverá deletar um treinador por id específico e retorna mensagem amigável
- [ ] DELETE   "/pokedex/[ID]" Deverá deletar um pokemon por id específico e retorna mensagem amigável

- [ ] PATCH  "/treinadores/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ] PATCH  "/pokedex/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [ ]  Não deverá ser possível criar mais de um treinador com o mesmo nome
- [ ]  Para criar um novo pokemon, deverá vincular no momento da criação a um treinador já existente no sistema, utilizando o numero do id do treinador correspondente no corpo da requisição

<br>
<br>

## Dados para Collection Treinador

- _id: autogerado e obrigatório
- name: texto e obrigatório
- age: numero e obrigatorio
- team: texto e opcional
- gender: texto, opcional e com default 'não informado'
- region: texto e opcional

### API deve retornar seguinte JSON:

```javascript
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b10fe"),
    name: 'Ash',
    age: 10,
    team: null,
    gender: 'male',
    region: 'Kanto',
    createdAt: 2022-06-16T18:55:02.023Z,
    updatedAt: 2022-06-16T18:55:02.023Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1104"),
    name: 'Jessie',
    age: 25,
    team: 'Rocket',
    gender: 'female',
    region: 'Kanto',
    createdAt: 2022-06-16T18:55:02.090Z,
    updatedAt: 2022-06-16T18:55:02.090Z,
    __v: 0
  }
]

```
<br>
<br>


## Dados para Collection Pokemon

- _id: autogerado e obrigatório
- name: texto e obrigatório
- type: texto e obrigatório
- abilities: array de texto, opcional e com default []
- description: texto e opcional


### API deve retornar seguinte JSON:

```javascript
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b1100"),
    name: 'Pikachu',
    type: 'Eletric',
    abilities: [ 'Static' ],
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b10fe"),
    createdAt: 2022-06-16T18:55:02.076Z,
    updatedAt: 2022-06-16T18:55:02.076Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1102"),
    name: 'Bulbasaur',
    type: 'Eletric',
    abilities: [ 'Overgrow' ],
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b10fe"),
    createdAt: 2022-06-16T18:55:02.084Z,
    updatedAt: 2022-06-16T18:55:02.084Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1106"),
    name: 'Wobbuffet',
    type: 'Psychic',
    abilities: [ 'Shadow Tag' ],
    description: 'It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b1104"),
    createdAt: 2022-06-16T18:55:02.095Z,
    updatedAt: 2022-06-16T18:55:02.095Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1108"),
    name: 'Ekans',
    type: 'Poison',
    abilities: [ 'Shed Skin', 'Intimidate' ],
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b1104"),
    createdAt: 2022-06-16T18:55:02.102Z,
    updatedAt: 2022-06-16T18:55:02.102Z,
    __v: 0
  }
]
```
<br>
<br>


##  🎓 Combinado da semana
 - [PARA O LAR](./para_o_lar//instru%C3%A7%C3%B5es.md) < clique aqui

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://dzone.com/articles/sql-vs-nosql
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)

## 👋🏾 Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/beatriz-ramerindo/)
 - [GITHUB](https://github.com/isjanebia)
 - [INSTAGRAN](https://www.instagram.com/isjanebea/)
 - [site] [beatriz.rarmerindo.com.br](beatriz.ramerindo.com.br)
 - [email] bea@ramerindo.com.br

