'use strict';

let myName = 'Konstantin';
let lastName = 'Grinev';
let str = 'Hello, my name is Konstantin';
// name += lastName;
// console.log(myName);

let val = myName.substring(2, 3);
console.log(val);

console.log(myName.length)

console.log(myName.concat(' ', lastName));


val = myName[0];

val = myName.indexOf('n');

val = myName.charAt(myName.length - 1);

val = myName.substring(0, 3);

val = myName.slice(0, 3);

val = str.split(',');

val = str.replace('Konstantin', 'Kostya');

val = val.includes('Kostya');

console.log(val);
// console.log(myName);
console.log(val)
