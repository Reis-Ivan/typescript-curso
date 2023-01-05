export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Ivan', 28);
funcao.apply(new Date(), ['Ivan', 28]);
