const IntegerArray = require("./baseArray/integerArray");

class U8 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Uint8");
  }

  get ArrayType() {
    return Uint8Array;
  }
}

module.exports = U8;
