const NumArray = require("../main");

var n = 10_000_000;
console.log("n =", n);

var arr = Array();
var int32 = NumArray(int32);

var func1 = () => {
  for (var i = 0; i < n; ++i) {
    int32.push(i);
  }
};

var func2 = () => {
  for (var i = 0; i < n; ++i) {
    arr.push(i);
  }
};


var t1 = new Date();
func1();
var t2 = new Date();
console.log("Typed Array: ", t2 - t1);

var t3 = new Date();
func2();
var t4 = new Date();
console.log("Normal Array: ", t4 - t3);

// Typed array is 1.87 times faster in average
