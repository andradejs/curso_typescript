export class Pessoa {

	constructor(
		protected nome:string,
		protected sobrenome:string,
		protected idade:number,
		private _cpf:string,

	){}

	set cpf(valor:string){
		this._cpf = valor;
	}

	get cpf(): string {
		return this._cpf.replace(/\D/g, '');
	}

}

const pessoa = new Pessoa("Joao", "Castro", 35, "342.234.234-45");

//obtenção de atributo privado

console.log(pessoa.cpf)

//mudanção no atributo privado cpf

pessoa.cpf = "000.000.000-00"

//obtenção do atributo atualizado do _cpf

console.log(pessoa.cpf)
