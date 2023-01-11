interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonlyidade?: number;
}

const pessoa: Pessoa = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  enderecos: ['Av. Brasil'],
};

// pessoa.enderecos.push('R. Nova');
// pessoa.idade = '28';
console.log(pessoa);
