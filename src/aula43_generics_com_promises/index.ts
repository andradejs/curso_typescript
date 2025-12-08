type TipoPessoa = {
  nome: string;
  sobrenome: string;
  cpf: string;
}

type CallBack<U> = (valor: U) => U

function minhaPromise<T>(variavel: T, callBack: CallBack<T>): Promise<T> {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callBack(variavel));
    }, 5000)
  })
}

async function resutl(pessoa: TipoPessoa) {

  try {

    const valor = await minhaPromise(pessoa, value => value =
    {
      nome: 'cleber',
      sobrenome: 'araujo',
      cpf: 'alskjflasj'
    })

    return valor;

  } catch (e) {
    console.log(e);
  }
}

const pessoa: TipoPessoa = {
  nome: 'lucas',
  sobrenome: 'soares',
  cpf: '23940294029'
}

console.log(resutl(pessoa).then())
