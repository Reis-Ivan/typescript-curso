// Array<T> = T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, vlr) => ac * vlr, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, vlr) => ac + vlr);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
