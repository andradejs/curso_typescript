let nome: string = "fabricio";
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

let numbersArray: Array<number> = [1, 1, 2, 3];
let stringsArray: Array<string> = ["lucas", "zenitsu", "pedro"];

let numbersArray2: number[] = [1, 2, 3, 4, 5];
let stringsArray2: string[] = ["raimundo", "jose", "luiz"];

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
	nome: "fabricio",
	idade: 20,
};

function soma(numero1: number, numero2: number): number {
	return numero1 + numero2;
}

const soma1: (x: number, y: number) => number = (x,y) => x+y;
