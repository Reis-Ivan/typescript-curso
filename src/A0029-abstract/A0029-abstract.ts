export abstract class Personagem {
  protected abstract emoji: string;
  protected morreu = false;

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida}...`);
    this.checkVida(this.vida);
  }

  checkVida(vida: number) {
    if (vida <= 0) {
      this.morreu = true;
      console.log(`${this.emoji} - está morto!`);
    }
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(`${this.emoji} - Furia do MACHADO!!!!`);
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(`${this.emoji} - UUUARRRRHH!!!!!`);
  }
}

const guerreira = new Guerreira('Guerreira', 500, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);

guerreira.atacar(monstro);
