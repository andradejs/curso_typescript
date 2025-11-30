export class CarrinhoDeCompras {

  constructor(
    private readonly produtos: Produto[] = [],
  ) { }

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade(): number {
    return this.produtos.length
  }

  total(): number {

    let total = 0;

    for (const produto of this.produtos) {
      total += produto.price;
    }

    return total;
  }

}


export class Produto {

  constructor(
    public nome:string,
    public price:number,
  ){}
}


const carrinho = new CarrinhoDeCompras();
const produto1 = new Produto("bola",30);
const produto2 = new Produto("arroz", 6);

carrinho.inserirProduto(produto1)
carrinho.inserirProduto(produto2)

console.log(carrinho.quantidade());
console.log(carrinho.total())
