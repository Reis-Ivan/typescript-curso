function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverte(args[0]);
      this.color = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

const dog = new Animal('Dog', 'brown');
console.log(dog);
