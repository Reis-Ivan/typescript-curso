// Interface e Tipos
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  idade: 28,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Ivan2',
  sobrenome: 'Reis2',
  idade: 28,
};

console.log(aluno1);
console.log(aluno2);
