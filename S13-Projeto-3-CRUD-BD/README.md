
<h1 align="center">
    <br>
    <p align="center">API Pokemon utilizando CRUD e MongoDB 🕹️ <p>
</h1>


<!--ts-->
- [💻 Tecnologias que vamos usar](#-tecnologias-que-vamos-usar)
- [🪄 Preparando o ambiente!](#-preparando-o-ambiente)
- [📁 Arquitetura](#-arquitetura)
- [🕹️ Pokedex](#️-pokedex)
- [🕹️ Interface gráfica para realizar os testes Pokedex (Thunder Client ou Postman)](#️-interface-gráfica-para-realizar-os-testes-pokedex-thunder-client-ou-postman)
- [🎮 Treinadores](#-treinadores)
- [🎮 Interface gráfica para realizar os testes treinadores (Thunder Client ou Postman)](#-interface-gráfica-para-realizar-os-testes-treinadores-thunder-client-ou-postman)
- [🎄 Autora](#-autora)

<!--te-->

</br>

## 💻 Tecnologias que vamos usar
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs`     | Ambiente de execução do javascript|
| `express`    | Framework NodeJS |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn`| Gerenciador de pacotes|
| `MongoDb`    | Banco de dado não relacional orietado a documentos|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos|
 `Thunder Client ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 🪄 Preparando o ambiente!

</br>

Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm. Além disso, iremos fazer requisições na API com a plataforma Postman.

Seguiremos a ordem de instalações no terminal:

- Clone o projeto através do comando:
`$git clone https://github.com/andrezapipolo/On16-TodasEmTech-S11-API-Revisao`
- ` npm init`
- ` npm install express `
- ` npm install nodemon `
- ` npm install mongoose `
- Inicialize com o comando `npm start` para que você possa executar os testes localmente.

</br>

## 📁 Arquitetura

```
 📁 Pokedex
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 coachController.js
   |  |    |- 📄 pokemonController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 moogoseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 coachModel.js
   |  |    |- 📄 pokemonModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 coachRoutes.js
   |  |    |- 📄 pokemonRoutes.js
   |  |
   |  |
   |  |
   |  |-📄 app.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.MD
   |- 📄 server.js

```

<br>
<br>


## 🕹️ Pokedex

</br>

Este projeto já está com os métodos HTTP organizados. Você pode testar as rotas Get, Post, Update e Delete através da ferramenta Postman. A interface é um CRUD, onde é possível listar as séries/games na base de dados; listar games através do ID; listar séries através de um gênero específico ; listar as séries através de um ID; cadastrar novas séries/games; atualizar um game específico; alterar séries/games favoritadas; deletar séries/games específicos.


<br>✅ Deverá criar um pokemon.
<br>✅ Deverá retornar todos os pokemons cadastrados e os seus treinadores.
<br>✅ Deverá retornar o pokemon com o id informado e o seu treinador.
<br>✅ Deverá deletar um pokemon por id específico e retorna mensagem amigável.
<br>✅ Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado.


Sendo assim precisaremos criar 5 rotas para Pokedex:

| Verbo  | Descrição da Rota                                                                               |
| ------ | ------------------------------------------------------------------------------------------------|
| POST   | Criar um novo pokemon                                                                           |
| GET    | Listar todos pokemons                                                                           |
| GET    | Listar o pokemon com o id informado e o seu treinador                                           |
| DELETE | Deletar um pokemon por id específico e retorna mensagem amigável.                               |
| PATCH  | Aterar informação específica dentro de um estudio por id específico e retorna o título alterado.|

</br>

## 🕹️ Interface gráfica para realizar os testes Pokedex (Thunder Client ou Postman)

</br>

**`POST`** Criar um novo pokemon  | `localhost:1313/pokedex`;

**`GET`** Listar todos pokemons | `localhost:1313/pokedex`;

**`GET`** Listar o pokemon com o id informado e o seu treinador | `localhost:1313/pokedex/`;

**`DELETE`** Deletar um pokemon por id específico e retorna mensagem amigável | `localhost:1313/pokedex/`;

**`PATCH`** Aterar informação específica dentro de um estudio por id específico e retorna o título alterado | `localhost:1313/pokedex/`;

## 🎮 Treinadores

<br>✅ poder criar um treinador.
<br>✅ poder retornar todos os treinadores.
<br>✅ poder retornar o treinador com o id informado.
<br>✅ poder deletar um treinador por id específico e retorna mensagem amigável.
<br>✅ poder alterar informação específica dentro de um titulo por id específico e retorna o título alterado.

Sendo assim precisaremos criar 5 rotas para treinador:

| Verbo  | Descrição da Rota                                                                               |
| ------ | ------------------------------------------------------------------------------------------------|
| POST   | Criar um treinador                                                                              |
| GET    | Listar todos os treinadores                                                                     |
| GET    | Listar o treinador com o id informado                                                           |
| DELETE | Deletar um treinador por id específico e retorna mensagem amigável                              |
| PATCH  | Aterar informação específica dentro de um titulo por id específico e retorna o título alterado. |

</br>


## 🎮 Interface gráfica para realizar os testes treinadores (Thunder Client ou Postman)

</br>

**`POST`** Criar um treinador  | `localhost:1313/treinador`;

**`GET`** Listar todos os treinadores | `localhost:1313/treinadores`;

**`GET`** Listar o treinador com o id informado | `localhost:1313/treinadores/`;

**`DELETE`** Deletar um treinador por id específico e retorna mensagem amigável   | `localhost:1313/treinador/`;

**`PATCH`** Aterar informação específica dentro de um titulo por id específico e retorna o título alterado. |`localhost:1313/treinador/`;


</br>

## 🎄 Autora

</br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFUFLABHg5xfA/profile-displayphoto-shrink_800_800/0/1646500768370?e=1659571200&v=beta&t=ZeyR8RdmYcjcC_Mfr83iTLwkrQT3MR74QzceWIdbWfI" width="100px;" alt="Foto de Perfil de Andreza"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/andrezapipolo" target="_blank"><img src="https://img.shields.io/badge/-Andreza_Pipolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrezapipolo" target="_blank"></a>  com o apoio das amigas 💙
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>