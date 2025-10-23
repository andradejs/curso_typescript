//-----------------------------------------------------------------
//Dependendo do tipo de funçao que declaramos o this da função muda
//-----------------------------------------------------------------


//Em funçao anonimas e declaradas


function criarPessoa(this: string, nome: string) {           //Em funções anonimas e declaradas o this pode ser passaado como parametro
  console.log(this);                                         //No entanto quando chamada a função ve ser chamado o parametro call para
}                                                            //que posso especificar valor o que o this tera na funçao

criarPessoa.call("l", "pedro");




//Em arrow function

const pessoa = (nome: string) => {                          //Em arrow function as funções não tem o parâmetro this pois as constantes
  console.log(this);                                        //são declarados no escopo global contendo o this do escopo global
}                                                           //Isso acontece em qualquer arrow function


//Dica: para não ter duvida qual o this, é aconselhavel
//notar onde a função foi declarada pois se for dentro
//de uma classe ou objeto o this sera esse elemento
