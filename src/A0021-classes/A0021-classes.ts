export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

  exibeColaboradores(): void {
    this.colaboradores.map((colaborador) =>
      console.log(`${colaborador.nome} ${colaborador.sobrenome}`),
    );
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Ivan', 'Reis');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('João', 'Silva');

empresa1.adicionaColadorador(colaborador1);
empresa1.adicionaColadorador(colaborador2);
empresa1.adicionaColadorador(colaborador3);
empresa1.adicionaColadorador({
  nome: 'Luiz',
  sobrenome: 'Ricardo',
});

console.log(empresa1);
empresa1.mostrarColaboradores();
empresa1.exibeColaboradores();
