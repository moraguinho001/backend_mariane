const input = require("readline-sync");
// 1. Importar o Express ( igual ao require do readline - sync )
const express = require('express');
// 2. Criar a aplicacao
const app = express();
// 3. Configurar o app para entender JSON
app.use(express.json());
// 4. Criar a primeira rota (GET na raiz )
app.get('/', (req , res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});
// 5. Ligar o servidor na porta 3000
app.listen(3000, () => {
console.log(" Servidor rodando em http :// localhost :3000 ");
});

app.post('/ alunos', (req, res) => {
 const {nome, nota} = req.body;
if (!nome) {
return res.status (400).json({ erro: "O campo nome e obrigatorio " });
}
if (nota === undefined || isNaN(nota)) {
return res.status (400).json({erro:"A nota deve ser um numero"});
}
if (nota < 0 || nota > 10) {
return res.status (400).json({ erro: "A nota deve estar entre 0 e 10" });
}
const novoAluno = { id: proximoId , nome , nota };
alunos.push(novoAluno);
proximoId++;
res.status(201).json(novoAluno);

if (!aluno) {
return res.status (404).json({ erro: " Aluno nao encontrado " });
}
});

GET/alunos
app.get ('/alunos/: id', (req , res) => {
const id = Number (req.params.id) ;
const aluno = alunos.find (a => a.id===id) ;
if (!aluno) {
return res.status(404).json({erro:"coisa nao encontrada"});
}
res.json(aluno);
});
POST/http//localhost:3000/alunos
'Content-Type:application/json'
{
'"id": 3',
'"nome": "Ana"'
}

PUT/http//localhost:3000/alunos/3
'Content-Type:application/json'
{
'"nome": "Ana Paula"',
'"id": 4'
}
DELETE/http//localhost:3000/alunos/2
