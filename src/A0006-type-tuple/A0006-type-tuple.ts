// Tuple
const clientData1: readonly [number, string] = [1, 'Ivan'];
const clientData2: [number, string, string] = [1, 'Ivan', 'Reis'];
const clientData3: [number, string, string?] = [11, 'Reis'];
const clientData4: [number, string, ...string[]] = [11, 'Reis', 'Rosa'];

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// Readonly Array
const array1: readonly string[] = ['Ivan', 'Reis'];
const array2: ReadonlyArray<string> = ['Ivan', 'Reis'];

console.log(array1);
console.log(array2);
