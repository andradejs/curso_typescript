interface Veiculo{
  marca: string;
  ano: number;
}


interface Car{
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}


const carro:Car = {
  brand: "ford",
  year: 2020,
  name: "ford k"
}

console.log(carro);
