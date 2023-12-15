const NumArray = require("../main");

var n = 10_000_000;
console.log("n =", n);

var arr = Array(n);
var int32 = NumArray(int32, n);

for (var i = 0; i < n; ++i) {
  var num = Math.floor(Math.random() * n);
  arr[i] = num;
  int32.set(i, num);
}

var func1 = () => {
  int32.sort();
};

var func2 = () => {
  arr.sort((a, b) => a - b);
};

var t1 = new Date();
func1();
var t2 = new Date();
console.log("Typed Array: ", t2 - t1);

var t3 = new Date();
func2();
var t4 = new Date();
console.log("Normal Array: ", t4 - t3);
