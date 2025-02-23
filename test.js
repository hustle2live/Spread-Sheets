'use strict';             // strict mode on!

const a = true;
if (a) {
   function sayHello() {
      return 'say Hello';
   }
   d = 'man'; // ReferenceError
   var b = 'lol';
}
console.log(sayHello()); // ReferenceError
console.log(d); // ReferenceError
console.log(b); // output: lol



