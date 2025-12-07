type CallBackFuntion<U> =
  (valor: U, index?: number, arrya?: U[]) => boolean | U


export function meuFiltro<T>(array: T[], callback: CallBackFuntion<T>): T[] {

  const arrayResult: T[] = [];

  for (let i = 0; i < array.length; i++) {


    const typeItem: T | undefined = array[i];

    if (typeItem) {

      const resultCallback = callback(typeItem);

      typeof resultCallback === "boolean" ?
        (resultCallback ? arrayResult.push(typeItem) : false) :
        arrayResult.push(resultCallback);
    }

  }

  return arrayResult;
}


const array2 = ['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]

const array2Result = meuFiltro(array2, (valor) => {
  if (valor === 1 ) { return true };
  // console.log(valor)
  return false
})

console.log(array2Result)

