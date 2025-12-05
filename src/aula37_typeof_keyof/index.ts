// Pessoa adquiri o formato apresentado em pessoaObj
//
// type Pessoa = {
//     nome: string;
//     sobrenome: string;
// }
//

type Pessoa = typeof pessoaObj;

const pessoaObj = {
  nome: 'arthur',
  sobrenome: 'morgan',
  mostraNome():void {}
}


// ChavesPessoa obtem todas as chaves que estao em Pessoa
// type ChavesPessoa = "nome" | "sobrenome" | "mostraNome"
//
type ChavesPessoa = keyof Pessoa;


