/* eslint-disable */

// Basic types (not use)
let personName: string = 'Ivan';
let age: number = 28;
let isAdult: boolean = true;
let symbol: symbol = Symbol('Qq-symbol')
// let big: bigint = 10n

// Arrays
let numberArray: Array<number> = [1, 2, 3, 4, 5];
let numberArray1: number[] = [1, 2, 3, 4, 5];
let stringArray: Array<string> = ['Ivan', 'Reis'];
let stringArray2: string[] = ['Ivan', 'Reis'];

// Objects
let person: {name: string, age: number, isAdult?: boolean} = {
  name: 'Ivan',
  age: 28,
}

// Functions
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

