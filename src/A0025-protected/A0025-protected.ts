export class Empresa {
  public readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColadorador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    return colaborador ? colaborador : null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public age: number,
  ) {}
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Ivan', 'Reis', 28);
const colaborador2 = new Colaborador('Maria', 'Silva', 19);
const colaborador3 = new Colaborador('João', 'Silva', 42);

empresa1.adicionaColadorador(colaborador1);
empresa1.adicionaColadorador(colaborador2);
empresa1.adicionaColadorador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
