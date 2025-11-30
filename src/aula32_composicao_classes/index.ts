export class Carro{

  private readonly motor:Motor = new Motor();

  ligar(){
    this.motor.ligar();
  }

  acelerar(){
    this.motor.acelerar();
  }

  parar(){
    this.motor.parar();
  }

  desligar(){
    this.motor.desligar();
  }

}



export class Motor{

  ligar():void{
    console.log("Motor esta ligado");
  }

  acelerar():void{
    console.log("Motor esta acelerando");
  }

  parar():void{
    console.log("Motor esta parando");
  }

  desligar():void{
    console.log("Motor esta desligado");
  }
}


const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
