export abstract class Personagem {

  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected vida: number,
    protected dano: number,
  ) { }

  atacar(personagem: Personagem) {
    this.grito();
    console.log(`O ${this.nome} cousou ${this.dano} de dano`);

    if (personagem.vida <= 0) {
      console.log(`O ${personagem.nome} foi morto`);
      return;
    }

    personagem.perderVida(this.dano);
  }

  perderVida(dano: number) {
    this.vida -= dano;
    console.log(`O ${this.nome} tem ${this.vida} de vida`)
  }

  abstract grito(): void;
}


export class Guerreiro extends Personagem {

  protected emoji = `\u{1F9DD}`;

  grito(): void {
    console.log(`${this.emoji} Vou te matar Monstro`);
  }
}
export class Monstro extends Personagem {

  protected emoji = `\u{1F47E}`;

  grito(): void {
    console.log(this.emoji + "Vou te devoraaaar!");
  }
}


const heroi = new Guerreiro("zenitsu", 1000, 100);
const monstro = new Monstro("esqueleto", 400, 100);

heroi.atacar(monstro);
monstro.atacar(heroi);
heroi.atacar(monstro);
monstro.atacar(heroi);
heroi.atacar(monstro);
monstro.atacar(heroi);
heroi.atacar(monstro);
monstro.atacar(heroi);
heroi.atacar(monstro);
monstro.atacar(heroi);
heroi.atacar(monstro);
monstro.atacar(heroi);
