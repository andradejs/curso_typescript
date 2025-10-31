export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;

  }

  public adcionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaborador(): void {
    this.colaboradores.forEach((colaborador) => {
      console.log(colaborador);
    })
  }
}

export class Colaborador {
  constructor(private cpf: string, protected nome: string) { }
}

export class Udemy extends Empresa {

  constructor() {
    super("Udemy", "111.111.111/0001-11")
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador == undefined) return null;
    return colaborador;
  }
}


