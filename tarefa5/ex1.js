const input = require("readline-sync");
app.get("/alunos", (req, res)=>{
const alunos = [
{ id: 1, nome: "Ana", disciplina: "back-end", ano: "2º"},
{ id: 2, nome: " Bruno ", disciplina: "front-end", ano: "3º"} 
];
res.json(alunos);
});