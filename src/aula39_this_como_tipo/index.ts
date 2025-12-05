export class Calculator {
  private num: number;

  constructor(num:number) {
    this.num = num;
  }

  public add(num: number): this {

    this.num += num;
    return this;
  }

  public sub(num: number): this {
    this.num -= num;
    return this;
  }

  public div(num: number): this {
    this.num /= num;
    return this;
  }

  public mut(num: number): this{
    this.num *= num;
    return this;
  }
}


const calculator = new Calculator(1);

calculator.div(2).add(2.5).mut(2).sub(3);

console.log(calculator);



export class RequestBuilder{

  private method: 'get' | 'post' | null = null;
  private url: string | null = null;


  public setMethod(method:'get' | 'post' ): this{
    this.method = method;
    return this;
  }

  public setUrl(url:string):this{
    this.url = url;
    return this;
  }

  public send():void{
    console.log(`enviando mensagem via ${this.method} para url ${this.url}`);
  }
}


const request = new RequestBuilder();

request.setMethod('get').setUrl('http//:ajsflajs;');
