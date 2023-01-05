export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.constructor.name.toUpperCase()}: ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' Aluno';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `${this.constructor.name.toUpperCase()}: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Ivan', 'Reis', 28, '000.000.000-00');
const aluno = new Aluno('Ivan', 'Reis', 28, '000.000.000-00', 'A1');
const cliente = new Cliente('Ivan', 'Reis', 28, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
