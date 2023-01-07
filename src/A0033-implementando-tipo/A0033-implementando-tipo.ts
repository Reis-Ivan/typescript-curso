type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type tipoNomeCompleto = {
  nomeCompleto: () => string;
};

type TipopPessoa = TipoNome & TipoSobrenome & tipoNomeCompleto;

export class Pessoa implements TipopPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Ivan', 'Reis');
console.log(pessoa.nomeCompleto());
