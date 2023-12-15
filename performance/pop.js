const NumArray = require("../main");

var n = 30_000_000;
console.log("n =", n);

var arr = Array(n);
var int32 = NumArray(int32, n);

var func1 = () => {
  for (var i = 0; i < n; ++i) {
    int32.pop();
  }
};

var func2 = () => {
  for (var i = 0; i < n; ++i) {
    arr.pop();
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
