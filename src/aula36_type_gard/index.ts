// Checar os tipos das variaveis com typeof
function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `${a} + ${b}`;
  }
}

// Checagem de campos quando utilizamos classes

type Pessoa = {
  nome: string;
}

type Animal = {
  cor: string;
}

type SerVivo = Pessoa | Animal;


class Aluno implements Pessoa {

  constructor(public nome: string) { }
}

function mostrarNome(obj: SerVivo) {
  if (obj instanceof Aluno)  return obj.nome;

  return null
}


//checar se um compo tem um tipo que diferencia o Pessoa de animal

function isAnimal(obj: SerVivo): obj is Animal {
  return "cor" in obj;
}

function mostrarCorAnimal(obj: SerVivo) {

  if (isAnimal(obj)) {
    console.log(obj.cor)
  }
  return null;
}

const pessoa = new Aluno( "fabricio")
const animal: Animal = { cor:  "caramelo" }

console.log(mostrarCorAnimal(pessoa));
console.log(mostrarNome(animal))
console.log(mostrarNome(pessoa))
