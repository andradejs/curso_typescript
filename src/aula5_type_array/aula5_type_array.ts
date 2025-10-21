const listString: string[] = ["verde", "vermelhor", "amarelo"];
const listNumber: Array<number> = [1, 2, 3, 4, 5];

//Usando em funções

export function multiplicaArgs(args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function toUpperCase(args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicaArgs(listNumber));
console.log(toUpperCase(listString));
