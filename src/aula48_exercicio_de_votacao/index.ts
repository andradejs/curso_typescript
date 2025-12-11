interface Alternativas{
  campo:string,
  quantidade: number
}

export class Votocao{

  private _alternativas:Alternativas[] = [];
  constructor(private _pergunta:string){}

  get alternativas():Alternativas[]{
    return this._alternativas;
  }

  get pergunta():string{
    return this._pergunta;
  }

  public adicionarCampo(alternativa:Alternativas):void{
    this.alternativas.push(alternativa);
  }

  public votar(index:number){
    if (!this.alternativas[index]) return;
    this.alternativas[index].quantidade += 1;
  }
}

export class AppVotation{

  private votations:Votocao[] = [];

  addVotation(votation: Votocao){
    this.votations.push(votation);
  }

  showVotation():void{
    for (const votation of this.votations){
      console.log(votation.pergunta);
      for ( const alternativa of votation.alternativas){
        console.log(`${alternativa.campo} - ${alternativa.quantidade}`)
      }
    }
  }
}


const vocation = new Votocao("qual a melhor linguagem?");
vocation.adicionarCampo({campo:'python', quantidade:0});
vocation.adicionarCampo({campo:'typescript', quantidade:0});
vocation.adicionarCampo({campo:'java', quantidade:0});

const votationApp = new AppVotation();
votationApp.addVotation(vocation);
vocation.votar(0);
vocation.votar(0)
vocation.votar(2)
votationApp.showVotation();
