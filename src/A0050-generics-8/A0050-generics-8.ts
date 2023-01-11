// Utility Types - Generics Padrão

// Record - Tipo da chave e tipo do valor
const objeto1: Record<string, string | number> = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required - Tudo que fica obrigatório
type PessoaRequired = Required<PessoaProtocol>;
//Parcial - Tudo que fica opcional
type PessoaParcial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Ivan',
  sobrenome: 'Reis',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TIpoeEctract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'asdadsda098-123123s0a9sd',
  name: 'Ivan',
  age: 28,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
