# Autenticação

<h1 align="center">
    <br>
    <p align="center">Autenticação<p>
</h1>

## Vamos falar sobre segurança!

![hacker](https://st2.depositphotos.com/2631505/10530/i/450/depositphotos_105305530-stock-photo-young-attractive-teen-woman-wearing.jpg)

Nas aulas anteriores você aprendeu sobre rotas POST, GET, PATCH, PUT e DELETE. Aprendeu também sobre banco de dados e também a utilizar essas rotas para trabalhar com os dados. Entretanto, concorda que qualquer pessoa hoje que tiver acesso a essas rotas que criou poderá utilizá-las livremente para salvar, trazer, alterar e deletar informações sem o menor tipo de controle? 

Isso é extremamente perigoso, não somente para a segurança da aplicação em si, mas para todo o negócio! Imagina que você está desenvolvendo um produto para um cliente (que pode ser de qualquer nicho, como por exemplo, financeiro, área médica, educação etc) e os dados dos clientes são vazados ou mesmo alterados na base de dados? É um problema bem grande, certo? Por isso é importante que tenhamos um mínimo (e máximo) de cuidado com a segurança do que desenvolvemos.

> Mas como você acha que podemos aumentar a segurança das rotas nas APIs?

Podemos criar um login para os usuários e somente esses usuários que estão logados (autenticados) vão poder fazer chamadas para nossas rotas.

## Login - Autenticação

Na aula de hoje iremos aprender a autenticar nossos usuários (login e senha) e proteger nossas rotas permitindo apenas que os usuários logados possam chamá-las! Com isso vamos ter uma aplicação mais segura e protegida!

Mas como funciona isso?

![token-login](https://i.stack.imgur.com/41htB.png)

1) O usuário loga na aplicação com seu usuário e senha pelo frontend que chama a rota de login da API
2) A API retorna para esse usuário um token (um código de autorização)
3) Esse código (token) chega até o frontend e deverá ser utilizado nas demais chamadas da API para que as chamadas estejam autorizadas.

## Autenticação vs Autorização

- A autenticação é a checagem da identidade de um usuário ou sistema. Existem várias formas de autenticação, como por exemplo login com usuário e senha, autenticação biométrica etc.

- A autorização é a checagem de permissão de um usuário autenticado.

Um analogia que podemos fazer para exemplificar uma autenticação e autorização é um vôo. O passageiro faz a autenticação na entrada do vôo quando sua identidade é checada, mas não necessariamente esse passageiro tem autorização para acessar a primeira classe.

> Mas como você armazenaria a senha desse usuário na base de dados para uma autenticação?

Para armazenar senhas na base de dados, por exemplo, podemos utilizar um hash. Mas o que seria hash?

## Hash

![hash](https://criptofy.com/wp-content/uploads/2019/10/hashing-1024x449.png)

- Hash é uma string (texto) criptografada e é gerada a partir de uma função de Hash. O hash pode ter diversas utilidades, como por exemplo, armazenar uma senha numa base de dados para uma posterior checagem.

> Importante: uma função de hash não tem volta, uma vez que você transforma uma string em um hash, a partir de uma função de hash, não é possível transformar novamente na string original.

Os algoritmos mais conhecidos para hash são: MD5, SHA-1 e SHA-2.

- Vantagem: É uma operação pouco custosa de computação e segura pois é unidirecional, isto é, impossível de você voltar a string original a partir do hash.

- Desvantagem: a principal desvantagem é que não é possível recuperar uma senha; você só pode redefinir sua senha.

Site com a função hash: https://passwordsgenerator.net/sha1-hash-generator/


## Criptografia

![alan_turing_e_joan_clarke](https://www.cutedrop.com.br/wp-content/uploads/2015/10/alan-e-clarke.jpg)

Quando falamos de criptografar logo pensamos em algo super complexo, mas isso nada mais é do que codificar uma mensagem que você não quer que pessoas não autorizadas tenha acesso. 

Um filme bem bacana que fala desse tema e que vale a pena assistir é o Jogo da Imitação, que conta sobre o matemático Alan Turing e a criptoanalista Joan Clarke na Segunda Guerra Mundial, quando desenvolveram uma máquina que foi capaz de descriptografar (revelar) mensagens de comunicação da Alemanha Nazista.

### Exemplos de criptografia

![criptografia-simples](https://acaditi.com.br/wp-content/uploads/2019/11/acaditi-criptografia.png)

![criptografia-exemplo](https://upload.wikimedia.org/wikipedia/commons/f/f8/Crypto.png)

No caso o "Hello World" após ser criptografado se torna um texto cifrado que apenas depois de descriptografado terá seu valor texto real revelado.


## Criptografia Simétrica

Os algoritmos de criptografia simétrica utilizam apenas uma chave para criptografar um dado qualquer, que pode ser uma mensagem, etc. Os algoritmos mais conhecidos são: DES, TripleDES, AES, RC4 e RC5.

A principal vantagem da criptografia simétrica é que são muito rápidos, o que se traduz em baixa latência (tempo que demora para iniciar e terminar) e pouco uso de CPU. Já a principal desvantagem é que por utilizar a mesma chave para criptografar quanto para descriptografar, a chave precisa ser compartilhada com o receptor. Se alguém conseguir pegar essa chave, todas as mensagens poderão ser reveladas.

![criptografia-simetrica](http://www.universidadejava.com.br/images/2020-05-22-criptografia-simetrica-01.png)


## Criptografia Assimétrica

Os algoritmos de criptografia assimétrica utilizam duas chaves complementares para criptografar e descriptografar. Uma das chaves é guardada em segredo e não é revelada ninguém (chave privada) e outra pode ser publicada a qualquer um livremente (chave pública). Os algoritmos mais conhecidos são: RSA e ECDSA.

Um grande diferencial dessa classe de algoritmos é que um dado criptografado com uma chave pode apenas ser descriptografado com outra e vice-versa. Essa característica permite que estranhos mantenham uma comunicação segura mesmo que o meio de comunicação não seja tão seguro. Além disso, não há a necessidade de um meio seguro para que a troca de chave pública ocorra.

![criptografia-assimetrica](https://i.imgur.com/MUfQ2eO.png)

Algoritmos de criptografia assimétrica são muito custosos em termos de CPU, por esse motivo as comunicações, normalmente, os utilizam como meio de troca de chave simétrica. Diminuindo, assim o tempo e recursos da CPU. Na prática, a criptografia assimétrica é utilizada uma vez para transportar a chave de criptografia simétrica até seu destino para passar a ser utilizada.

![criptografia-assimetrica](http://www.universidadejava.com.br/images/2020-05-23-criptografia-assimetrica-02.png)


### Assinaturas

Há também outro uso muito comum para a criptografia assimétrica, além de ser utilizada para garantir privacidade, também é utilizada em assinaturas para garantir identidade. Quando queremos apenas confirmar identidade o dado não é privado, pois a chave pública está disponível a qualquer um, o que permite que os mesmos acessem os dados. Assim, uma maneira eficiente de alcançar o mesmo objetivo, com quase a mesma eficiência, é gerar uma soma Hash (Checksum) do dado e criptografar esse resultado. Então a confirmação de identidade passaria a ser da seguinte maneira: gerar uma soma Hash do dado recebido, descriptografar a assinatura recebida e por fim comparar se os resultados são iguais.

![assinaturas](https://www.gta.ufrj.br/grad/07_1/ass-dig/NotesImages/Topic9NotesImage2.jpg)


## OAuth

É um mecanismo de autorização utilizado para realizar login por meio de redes sociais (ex: login pelo Facebook, Twitter etc).

![oauth_2](https://i.stack.imgur.com/YTtMz.png)


## JWT - Json Web Token

### Conceito

O padrão JWT permite as informações sejam assinadas tanto com criptografia simétrica (com o algoritmo HMAC) quanto com criptografia assimétrica (com os algoritmos RSA e ECDSA).

Os JWTs são muito utilizados no processo de autenticação permitindo que o processo de autorização de acesso a recursos seja mais rápido e escalável. Mais rápido porque por ser independente retira da equação o tempo de latência de acesso ao banco de dados ou outro mecanismo de cache. E mais escalável pois permite que serviços totalmente independentes compartilhem a mesma autenticação sem necessitar de comunicação entre os mesmos.

### Estrutura

- Header
- Payload
- Signature

O cabeçalho é codificado utilizando o algoritmo Base64Url, antes de compor um JWT.

![jwt_estrutura](https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/what-is-jwt.png)
![jwt_estrutura_2](https://research.securitum.com/wp-content/uploads/sites/2/2019/10/jwt_ng1_en.png)

#### Header

É um objeto JSON que define informações sobre o tipo do token (typ), nesse caso JWT, e o algorítmo de criptografia em sua assinatura (alg), normalmente HMAC SHA256 ou RSA. 

#### Payload

É um objeto JSON com as Claims (informações) da identidade tratada, normalmente o usuário autenticado.

![payload_1](https://i.imgur.com/oN1fR5s.png)
![payload_2](https://i.imgur.com/aRtxfxN.png)
![payload_3](https://i.imgur.com/WPltx9H.png)

#### Signature

![Signature_1](https://i.imgur.com/cVggV3E.png)

#### Estrutura final
![estrutura_jwt](https://i.imgur.com/3VjcFVK.png)


### Vulnerabilidades

Se a biblioteca aceita que um token seja validado sem especificar o algoritmo esperado, outra vulnerabilidade grave é aberta. Exatamente no caso esperarmos que o token use uma criptografia assimétrica e o atacante utiliza uma criptografia simétrica. O problema com essa lógica é que o atacante pode obter a chave pública e assinar um token qualquer utilizando um algoritmo simétrico (HMAC) e indicar no cabeçalho o mesmo algoritmo. Assim quando um recurso protegido utilizar o mesmo algoritmo e a mesma chave o token será considerado válido, pois a **assinatura gerada** será igual a **assinatura do token**.

![vulnerabilidades](https://i.imgur.com/imKqVzs.png)

Lembrando que nesse caso como os tokens válidos estão sendo assinados com a chave privada os mesmos devem ser validados com a chave pública. Por isso o atacante terá sucesso, pois tem a certeza que o token está sendo validado com a chave pública.


### Recomendações

Desenvolvedores deveriam exigir que o algoritmo utilizado para validação seja passado como parâmetro. Assim garante-se que será utilizado o algoritmo
apropriado para a chave fornecida. Caso seja necessária a utilização de mais de um algoritmo com chaves diferentes, a solução é atribuir um identificador para cada chave e indicá-la no campo kid do cabeçalho (key identifier, em inglês). Assim será possível inferir o algoritmo de acordo com a chave utilizada. Dessa maneira o campo alg não terá utilidade alguma além de, talvez, validar se ele indica o algoritmo esperado.

Ao utilizar uma implementação do padrão JWT, você deve auditar de maneira consistente se ela rejeita efetivamente algoritmos além do esperado. Assim a
possibilidade de sucesso em ataques dessa natureza estarão quase nulos.


## Vamos por a mão na massa!

![mao_massa](https://espacojacyra.com.br/wp-content/uploads/2017/05/Untitled-1-1.png)

Utilizando o projeto da aula anterior, pasta ***S13-Projeto-3-CRUD-BD*** (https://github.com/reprograma/On16-TodasEmTech-S14-Auth/tree/master/S13-Projeto-3-CRUD-BD), vamos evoluí-lo para criar autenticação utilizando JWT. Para isso vamos seguir os passos:

### Instalar todas as bibliotecas que iremos utilizar
```
$ npm install jsonwebtoken -- save // para utilizar o jwt
$ npm install bcrypt -- save // para encriptar as senhas
$ npm install dotenv-safe -- save // para carregar o arquivo .env
```
### Arquivos env

- Criar arquivo .env.example e .env (adicionar no .gitignore), ambos com chave chamada SECRET $ SECRET=chave_aqui_sem_aspas
- Utilizar uma secret que pode ser gerada pelo https://passwordsgenerator.net/sha1-hash-generator/ e guardar essa secret no arquivo env

### Criar rotas para colaboradoras (criar, listar, deletar e login)

- Criar model de colaboradoras com id, nome, email e senha
```
const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const colaboradorasSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String }
}, {
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema);

// exportar o model para ser utilizado
module.exports = colaboradoras;
```
- Criar rota para criar usuária em routes/colaboradorasRoute.js:
```
const express = require("express");
const router = express.Router();
const controller = require('../controller/colaboradorasController');

router.post('/colaboradoras/', controller.create);

module.exports = router;

```
- Criar adicionar routes/colaboradorasRoute.js no arquivo app.js:

```
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoute') // aqui

// { restante do codigo }

app.use(coachRoutes)
app.use(pokedexRoutes)
app.use(colaboradorasRoutes) // aqui
```
- Criar controller colaboradorasController com a função create:

```
const Colaboradoras = require('../models/colaboradorasModel');
const bcrypt = require('bcrypt');

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash;
    const colaboradora = new Colaboradoras(req.body);

    colaboradora.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(colaboradora)
    })
};

module.exports = {
    create,
}
```

- Criar uma colaborada de teste via Postman

- Criar rota para listar colaboradoras no arquivo colaboradorasRoutes.js:

```
router.get('/colaboradoras/', controller.getAll);
```

- Criar função getAll no colaboradorasController:

```
const getAll = (req, res) => {
    Colaboradoras.find(function (err, colaboradoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(colaboradoras);
    })
};

module.exports = {
    create,
    getAll,
}
```
- Testar trazer as colaboradas via Postman

- Criar rota para deletar colaboradora no arquivo colaboradorasRouter.js:
```
router.delete('/colaboradoras/:id', controller.deleteById);
```

- Criar função de deletar no arquivo colaboradorasController: 
```
const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await Colaboradoras.findByIdAndDelete(id)
        const message = `A colaboradora com o ${id} foi deletada com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
};

module.exports = {
    create,
    getAll,
    deleteById,
}

```

- Criar rota de login de colaboradora no arquivo colaboradorasRouter.js:

```
router.post('/colaboradoras/login', controller.login);
```

- Carregar as variáveis de ambiente no projeto, no início do arquivo app.js:
```
require('dotenv-safe').config();
```

- Criar função de login no arquivo colaboradorasController: 

```
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const login = (req, res) => {
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
        if (!colaboradora) {
            return res.status(404).send(`Não existe colaboradora com o email ${req.body.email}`);
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha);

        if (!senhaValida) {
        /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
        */
            return res.status(403).send('que senha é essa hein');
        }
        const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token);
    });
}

module.exports = {
    create,
    getAll,
    deleteById
    login,
}

```

### Proteger rota GET treinadores do coachRoutes

- No arquivo coachController.js adicionar:
```
const SECRET = process.env.SECRET //carrega secret do arquivo de env
const jwt = require('jsonwebtoken'); // carrega lib jwt
```
- Criar método de autenticação em findAllCoaches:
```
const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get('authorization'); // pega o header de autorização

    if (!authHeader) { // envia uma mensagem de erro 401 quando vier vazio
      return res.status(401).send('Kd os header parça');
    }

    const token = authHeader.split(' ')[1]; //reserva o token em uma variavel

    await jwt.verify(token, SECRET, async function (erro) { //utiliza a lib jwt para verificar se o token é valido

      if (erro) { // se for inválido retorna 403
      /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
      */
        return res.status(403).send('Nope');
      }
      // se estiver tudo certo retorna os treinadores
      const allCoaches = await CoachModel.find()
      res.status(200).json(allCoaches)

    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
```
- Para testar via postman, passar bearer token no header de autenticação $ Bearer TOKEN_JWT_AQUI

# Exercício para casa!

![casa](https://gerarmemes.s3.us-east-2.amazonaws.com/memes/thumb/ffad82c9.jpg)

Devemos utilizar o projeto da aula anterior (S13), conforme fizemos em aula, e colocarmos uma rota para login e proteger todas as rotas de coach e pokedex, exigindo um token de autorização.

# Apresentação em Slides da Aula

> Aula: https://docs.google.com/presentation/d/1AYw0QCtyH1c8sr_Lg6Wop_2---Skkz9pOp-C6t2JCjs/edit?usp=sharing
> Revisão: https://docs.google.com/presentation/d/17SapaGgQg1dj7e71Iw5YILhudv_FehCBilKcPlc3ulA/edit?usp=sharing

# Leitura Extra Obrigatória

> https://github.com/reprograma/On16-TodasEmTech-S14-Auth/blob/master/Extra/01.%20C%C3%B3digo%20Seguro.md


