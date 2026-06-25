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


app.get('/produtos', (req, res)=>{
const produtos = [
{ id: 1, nome: "linguiça", preco: 15.00 },
{ id: 2, nome: "calabresa", preco: 60.00 },
{ id: 3, nome: "salamitos", preco: 25.00 },
{ id: 4, nome: "café", preco: 50.00 },
{ id: 5, nome: "bulacha", preco: 30.00 }
];
res.json(produtos);
})