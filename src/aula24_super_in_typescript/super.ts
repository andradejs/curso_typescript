export class Person{

  constructor(protected name:string, protected lastName:string){}

  public getName():string{
    return this.name;
  }
}


export class Student extends Person{

  constructor(name:string,lastName:string, private sala:string){
    super(name,lastName);                                                     // super usado para adcionar mais atributos em classes filhas
    this.sala = sala;
  }
}

export class Custumer extends Person{

  getName(){
    return this.name + " " + this.lastName;
  }

  getNameOriginal(){                                                          // super utilizado para acessar o metodo da classe pai que foi
	  return super.getName();                                                   // reescritona classe na filho.
  }

}


const custumer = new Custumer("Caua", "Kastro");

console.log(custumer.getNameOriginal());
console.log(custumer.getName());

