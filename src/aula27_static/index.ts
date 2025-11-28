export class Pessoa {

  static standardAge = 0;
  static standarCPF = "000.000.000-00"


  constructor(
    protected nome: string,
    protected sobrenome: string,
    protected idade: number,
    private cpf: string,

  ) { }

  metodoNormal():void{
    console.log(Pessoa.standardAge, Pessoa.standarCPF)
  }

  static criaPessoa(nome: string, sobrenome: string) { //metodo construtor
    return new Pessoa(
      nome,
      sobrenome,
      Pessoa.standardAge,
      Pessoa.standarCPF
    ) //deixa padrao a idade e cpf
  }
}

const pessoa = new Pessoa("Joao", "Castro", 35, "342.234.234-45");
const pessoa2 = Pessoa.criaPessoa("heitor", "silva");

console.log(pessoa)
console.log(pessoa2)


