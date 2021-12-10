/* Micro desafio - Passo 7 - Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo 
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes 
do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo
tenha todos os métodos corretamente). */

const aluno = require('./aluno')

const estudantes = [
  new aluno('Kaio', 0, [10, 10, 6.5, 5.5]),
  new aluno('Sidon', 4, [6.3, 7.2, 5.3, 5.5]),
  new aluno('Edmundo', 10, [8, 7.8, 6.4, 10]),
  new aluno('Ismael', 5, [9.8, 0, 7.6, 3.8])
]

module.exports = estudantes;
