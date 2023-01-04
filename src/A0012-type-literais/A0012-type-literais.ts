let x = 10;
x = 0b1010;

const y = 10; // tipo literal
let a = 100 as const;

const person = {
  name: 'Ivan' as const,
  lastName: 'Reis',
};

// Determinando quais tipos de valores a função aceita.
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

export default 1;
