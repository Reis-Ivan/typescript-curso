export class SimpleCalculator {
  constructor(public number: number) {}

  add(num: number): this {
    this.number += num;
    return this;
  }

  sub(num: number): this {
    this.number -= num;
    return this;
  }

  div(num: number): this {
    this.number /= num;
    return this;
  }

  mul(num: number): this {
    this.number *= num;
    return this;
  }
}

export class SubCalculadora extends SimpleCalculator {
  pow(num: number): this {
    this.number **= num;
    return this;
  }
}

const calculator = new SubCalculadora(10);
calculator.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculator);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviado dados via ${this.method?.toUpperCase()} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();
