# On16-TodasEmTech-S14-Auth
Turma Online 16 - Todas em Tech | Back-end | 2022 | Semana 14 - Auth

## Atividade Semana 14: Inserir Rota Login e Proteger Rotas
<br>
A partir da atividade da semana anterior (semana 13), inserir a rota Login e proteger todas as todas de Coach e Pokemons.



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
|`jwt` | Json Web Token. Utilizado para criação de dados criptografados|
|`bcrypy` | Usado para criptografar senha|
| `Dotenv` | Usado para ocultar o segredo|

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