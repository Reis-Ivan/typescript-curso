// Condicional - Recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertions (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion - Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement - Recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Type assertion
const body4 = document.querySelector('body') as unknown as number;