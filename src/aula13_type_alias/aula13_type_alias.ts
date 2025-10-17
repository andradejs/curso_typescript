type Idade = number;
type Pessoa = {
	nome:string;
	idade: Idade;
	salario: number;
	idioma?: string
}


type IdiomasBrasil = "portugues" | "ingles" | "espanhol";

type IdiomasCanada = "ingles" | "Frances";

type Idiomas = IdiomasBrasil | IdiomasCanada;


const pessoa:Pessoa = {
	nome: "Joao",
	idade: 18,
	salario: 10000,
}

export function setIdiomaFalado(pessoa:Pessoa, idioma:Idiomas):Pessoa{
	return {...pessoa, idioma}
}

console.log(setIdiomaFalado(pessoa, "Frances"));
