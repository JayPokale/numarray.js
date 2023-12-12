const BigUint64 = require("../../lib/biguint/byte8");
const TypedArray = require("../../main");

describe("BigUintArray", () => {
  test("should create an instance of BigUint", () => {
    const biguint = TypedArray("uint64", 10);
    expect(biguint).toBeInstanceOf(BigUint64);
  });

  test("should have the correct type", () => {
    const biguint = TypedArray("uint64", 10);
    expect(biguint.type).toBe("BigUint");
  });

  test("BigUint array should be instance of BigUint64Array", () => {
    const biguint = TypedArray("uint64", 10);
    const array = biguint.array();
    expect(array instanceof BigUint64Array).toBe(true);
  });

  test("should sort BigUint array", () => {
    const uint64 = TypedArray("uint64");
    uint64.push(3n);
    uint64.push(1n);
    uint64.push(2n);
    uint64.push(2n);

    uint64.sort();

    expect(uint64.at(0)).toBe(1n);
    expect(uint64.at(1)).toBe(2n);
    expect(uint64.at(2)).toBe(2n);
    expect(uint64.at(3)).toBe(3n);
  });
});
