// Encadeamento opcional (?) e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1 - Data não existe!');
console.log(undefined ?? '2 - Data não existe!');
console.log(null ?? '3 - Data não existe!');
console.log(false ?? '4 - Data não existe!');
console.log(0 ?? '5 - Data não existe!');
console.log('' ?? '6 - Data não existe!');
