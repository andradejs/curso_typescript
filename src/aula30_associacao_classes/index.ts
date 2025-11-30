export class Book {

  constructor(
    private title: string,
    private yearPublication: number,
    private _price: number,
    private grade: number,
    private _amount: number
  ) { }

  isAvailable(): boolean {
    return (this._amount > 0);
  }

  updateNote(grade: number):number{
    this.grade = grade;
    return grade;
  }

  set price(price:number){
    this._price = price;
  }

  set amount(amount:number){
    this._amount = amount;
  }
}
  

export class Publisher {

  constructor(
    private name:string,
    private email:string,
  ){}

  consult(){
    //logica de consultar
  }

  updateBookPrice(book:Book, price:number){
    book.price = price;
  }

  updateBookAmount(book:Book, amount:number){
    book.amount = amount;
  }

}
