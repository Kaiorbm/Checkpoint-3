/* Micro desafio - Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: 
nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
(um array composto pelos alunos criados no passo 1).*/
const aluno = require('./aluno')
const estudantes = require('./estudantes')

/* Micro desafio - Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de 
estudantes do objeto curso.*/
const curso = {
  nomeDoCurso: 'Front-end',
  notaDeAprovacao: 6,
  faltasMaximas: 5,
  listaEstudantes: estudantes,

  /* Micro desafio - Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne 
true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média 
igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem 
que estar 10% acima da nota de aprovação.*/
  adicionarAluno(nome, qtdDeFaltas, notas) {
    let alunoNovo = new aluno(nome, qtdDeFaltas, notas)
    this.listaEstudantes.push(alunoNovo)
  },

  /* Micro desafio - Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne 
um array de booleanos com os resultados se os alunos aprovaram ou não. */
  Aprovado(aluno) {
    let mediaAluno = aluno.calcularMediaAritmetica()
    if (
      aluno.qtdDeFaltas > this.faltasMaximas &&
      mediaAluno < this.notaDeAprovacao * 1.1
    ) {
      console.log(
        `Aluno(a) ${
          aluno.nome
        }  , parabéns  você foi aprovado com média ${aluno.calcularMediaAritmetica()}.`
      )
      return false
    } else if (mediaAluno < this.notaDeAprovacao) {
      console.log(
        `Aluno(a) ${
          aluno.nome
        } foi reprovado com média ${aluno.calcularMediaAritmetica()}.`
      )
      return false
    } else {
      console.log(
        `Aluno(a) ${
          aluno.nome
        } foi aprovado com média ${aluno.calcularMediaAritmetica()}.`
      )
      return true
    }
  },

  arrayDeResultados() {
    for (let i = 0; i < this.listaEstudantes.length; i++) {
      curso.Aprovado(this.listaEstudantes[i])
    }
  }
}

console.log(` `)
console.log(`CURSO: ${curso.nomeDoCurso}`)
console.log(` `)
console.log('===Lista dos Aprovados===')
console.log(` `)
curso.arrayDeResultados()
