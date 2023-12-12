const Int8 = require("./lib/int/byte1");
const Int16 = require("./lib/int/byte2");
const Int32 = require("./lib/int/byte4");
const Uint8 = require("./lib/uint/byte1");
const Uint16 = require("./lib/uint/byte2");
const Uint32 = require("./lib/uint/byte4");
const Float32 = require("./lib/float/byte4");
const Float64 = require("./lib/float/byte8");
const BigInt64 = require("./lib/bigint/byte8");
const BigUint64 = require("./lib/biguint/byte8");

var TypedArray = function (type = "int32", length = 0) {
  if (length < 0) {
    throw new Error("Array length is not valid");
  }

  // Int Array
  if (type === "int8") return new Int8(length);
  if (type === "int16") return new Int16(length);
  if (type === "int32") return new Int32(length);

  // Uint Array
  if (type === "uint8") return new Uint8(length);
  if (type === "uint16") return new Uint16(length);
  if (type === "uint32") return new Uint32(length);

  // Float Array
  if (type === "float32") return new Float32(length);
  if (type === "float64") return new Float64(length);

  // BigInt
  if (type === "int64") return new BigInt64(length);
  if (type === "uint64") return new BigUint64(length);
  throw Error("Enter Valid Type");
};

module.exports = TypedArray;
