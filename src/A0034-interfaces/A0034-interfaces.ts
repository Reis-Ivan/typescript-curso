interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface tipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, tipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaObj: TipoPessoa = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const pessoa = new Pessoa('Ivan', 'Reis');

console.log(pessoaObj.nomeCompleto());
console.log(pessoa.nomeCompleto());
