interface PessoaProtocolo< T,U > {
  nome: T;
  sobrenome: T;
  ideade: U;
}

type PessoaProtocolo2<T = string, U = number> =  {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'João',
  sobrenome: 'Silva',
  ideade: 25
};

