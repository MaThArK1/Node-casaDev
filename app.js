//Requere o modulo express e o instancia.
const express = require('express');
const nodemon = require('nodemon');
const app = express();

//Permite a aplicação a receber POST com JSON
app.use(express.json());

const contatos = ["Kaio", "Luisa", "Matheus"];

//Cria a rota GET
app.get('/', (req, res) =>{
    res.send("Olá Mundo! 5");
})

app.get('/contato', (req,res)=> {
    res.json(contatos)
    //const { id } = req.params;
   //const { sit } = req.query;

//    res.json({
//        id,
//        sit,
//        email: "matheus_barucho@hotmail.com"
//    });
//})
})

//Cria a rota POST
app.post('/contato', (req,res) =>{
    //constante nome = o que estiver no BODY/JSON
    const { nome } = req.body;

    //adiciona o nome da requisição no array "contatos"
    contatos.push(nome);

    return res.json({
        contatos
    });
})

//Cria a rota PUT
app.put("/contato/:id", (req,res) =>{

    const { id } = req.params;
    const { nome } = req.body;

    //Substitui o contato do ID pelo informado no JSON
    contatos[id] = nome;

    return res.json(contatos);
})

//Estabelece a porta
const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`App running in port ${PORT}`);
})
