type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  idade: 30,
};

console.log(pessoa);

// MODULE MODE
export { pessoa };
