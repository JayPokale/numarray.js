const BigInt64 = require("../../lib/bigint/byte8");
const TypedArray = require("../../main");

describe("BigIntArray", () => {
  test("should create an instance of BigInt", () => {
    const bigint = TypedArray("int64", 10);
    expect(bigint).toBeInstanceOf(BigInt64);
  });

  test("should have the correct type", () => {
    const bigint = TypedArray("int64", 10);
    expect(bigint.type).toBe("BigInt");
  });

  test("BigInt array should be instance of BigInt64Array", () => {
    const bigint = TypedArray("int64", 10);
    const array = bigint.array();
    expect(array instanceof BigInt64Array).toBe(true);
  });

  test("should sort BigInt array", () => {
    const int64 = TypedArray("int64");
    int64.push(3n);
    int64.push(1n);
    int64.push(2n);
    int64.push(2n);

    int64.sort();

    expect(int64.at(0)).toBe(1n);
    expect(int64.at(1)).toBe(2n);
    expect(int64.at(2)).toBe(2n);
    expect(int64.at(3)).toBe(3n);
  });

  test("should handle push elements with different types", () => {
    const int64 = TypedArray("int64");

    int64.push(3);
    expect(int64.at(0)).toBe(3n);

    expect(() => {
      int64.push("Hi");
    }).toThrow("Invalid Type");
  });
});
