const input = require("readline-sync");
app.get("/produtos", (req, res)=>{
const produtos = [
{ id: 1, nome: "linguiça", preco: 15.00 },
{ id: 2, nome: "calabresa", preco: 60.00 },
{ id: 3, nome: "salamitos", preco: 25.00 },
{ id: 4, nome: "café", preco: 50.00 },
{ id: 5, nome: "bulacha", preco: 30.00 }
];
res.json(alunos);
})