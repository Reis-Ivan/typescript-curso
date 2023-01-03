function withoutReturn(...args: string[]): void {
  console.log(`${args}`);
}

const person = {
  name: 'Ivan',
  lastName: 'Reis',

  showName(): void {
    console.log(`${this.name} ${this.lastName}`);
  },
};

withoutReturn('João Silva');
person.showName();

export { person };
