
export class Pilha<T>{
  private contador:number = 0;
  private elementos: {[K:number]:T } = {};

  public push(elemento:T){

    this.elementos[this.contador] = elemento;
    this.contador ++;
  }

  public pop():T | void{
    if (this.isEmpytStack()){
      return undefined
    }

    this.contador --;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;

  }

  public picker(){
    return this.elementos[this.contador-1]
  }

  private isEmpytStack():boolean{
    return this.contador === 0;
  }

  public tamanho():number{
    return this.contador;
  }

  public mostrarPilha():void{
    for (const elemento in this.elementos){
      console.log(this.elementos[elemento])
    }
  }

}


const pilha = new Pilha<string>();

pilha.push('ola');
pilha.push('ola');
pilha.push('ola');

pilha.mostrarPilha();
