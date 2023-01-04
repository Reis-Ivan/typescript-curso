const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'valueA',
  keyB: 'valueB',
};

objectA.keyA = 'newValueA';
objectA.keyC = 'newKeyC';
objectA.keyD = 'newKeyD';

console.log(objectA);
