/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Ivan';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace(nomeDoNamespace);
  console.log(pessoaDoNamespace);

  export namespace outroNamespace {
    export const nomeDoNamespace = 'Ivan2';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Ivan3');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.outroNamespace.nomeDoNamespace);
