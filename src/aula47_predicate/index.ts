export function isNumber(value: unknown): value is number { // Se o valor de booleano for true
  return typeof value === 'number';                        // o predicate tipa value com number
}


export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(value) && isNumber(sum)) {
      return sum + value;
    }
    return sum;
  }, 0)

  return retorno;
}

console.log(soma(2,3,4))
console.log(...[1,2,3,`a`,`b`,`c`,1])
