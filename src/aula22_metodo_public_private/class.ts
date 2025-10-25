export class Colaborador {

  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}

  public getNome():string{
    return this.nome;
  }

  public getSobrenome():string{
    return this.sobrenome;
  }

}


export class Empresa {

  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public addColaborador(...colaboradores:Colaborador[]):void {

    //private pode ser utilizado dentro da classe como no caso do array de colaboradores
    colaboradores.forEach((colaborador)=>{

      this.colaboradores.push(colaborador);

    })
  }

  showColaboradores(){
    this.colaboradores.forEach((colaborador)=>{
      console.log("colaborador:",  colaborador.nome + " " + colaborador.sobrenome);
    })
  }
}

const empresa1 = new Empresa("paraiba", "aosijoajsooasjjo");
const colaborador1 = new Colaborador("Pablo","Marsal");
const colaborador2 = new Colaborador("Neymar","JR");
const colaborador3 = new Colaborador("Ronaldinho", "Gaucho");

//public pode acessar fora da classe
colaborador1.getNome();


empresa1.addColaborador(colaborador1,colaborador2,colaborador3);
// console.log(empresa1)
empresa1.showColaboradores();

