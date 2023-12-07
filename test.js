const Uint8 = require("./uint/byte1");

var x = new Uint8(0);
x.push(9);
x.push(2);
x.push(1);
x.push(8);
x.push(6);
x.push(4);
x.push(5);
x.push(3);
x.push(7);
x.sort();
console.log(x.array());
