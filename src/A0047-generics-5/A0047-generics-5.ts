// Estrutura de dados Pilha

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count += 1;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.count -= 1;

    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  lenght(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const pilha = new Stack<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.showStack();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
