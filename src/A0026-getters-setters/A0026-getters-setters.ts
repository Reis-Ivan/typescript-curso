export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO!');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO!');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Ivan', 'Reis', 28, '123.456.789-00');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
