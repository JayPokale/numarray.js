const Float32 = require("../../lib/float/byte4");
const Float64 = require("../../lib/float/byte8");
const TypedArray = require("../../main");

describe("Float32Array", () => {
  test("should create an instance of Float32", () => {
    const float32 = TypedArray("float32", 10);
    expect(float32).toBeInstanceOf(Float32);
  });

  test("should have the correct type", () => {
    const float32 = TypedArray("float32", 10);
    expect(float32.type).toBe("Float32");
  });

  test("float32 array should be instance of Float32Array", () => {
    const float32 = TypedArray("float32", 10);
    const array = float32.array();
    expect(array instanceof Float32Array).toBe(true);
  });

  test("should sort float32 array", () => {
    const float32 = TypedArray("float32");
    float32.push(2.5);
    float32.push(0.5);
    float32.push(1.5);
    float32.push(1.5);

    float32.sort();

    expect(float32.at(0)).toBe(0.5);
    expect(float32.at(1)).toBe(1.5);
    expect(float32.at(2)).toBe(1.5);
    expect(float32.at(3)).toBe(2.5);
  });

  test("should sort float32 array with custom function", () => {
    const float32 = TypedArray("float32");
    float32.push(2.5);
    float32.push(0.5);
    float32.push(1.5);
    float32.push(1.5);

    float32.sort((a, b) => a - b);

    expect(float32.at(0)).toBe(0.5);
    expect(float32.at(1)).toBe(1.5);
    expect(float32.at(2)).toBe(1.5);
    expect(float32.at(3)).toBe(2.5);
  });
});

describe("Float64Array", () => {
  test("should create an instance of Float64", () => {
    const float64 = TypedArray("float64", 10);
    expect(float64).toBeInstanceOf(Float64);
  });

  test("should have the correct type", () => {
    const float64 = TypedArray("float64", 10);
    expect(float64.type).toBe("Float64");
  });

  test("float64 array should be instance of Float64Array", () => {
    const float64 = TypedArray("float64", 10);
    const array = float64.array();
    expect(array instanceof Float64Array).toBe(true);
  });

  test("should sort float64 array", () => {
    const float64 = TypedArray("float64");
    float64.push(2.5);
    float64.push(0.5);
    float64.push(1.5);
    float64.push(1.5);

    float64.sort();

    expect(float64.at(0)).toBe(0.5);
    expect(float64.at(1)).toBe(1.5);
    expect(float64.at(2)).toBe(1.5);
    expect(float64.at(3)).toBe(2.5);
  });

  test("should sort float64 array with custom function", () => {
    const float64 = TypedArray("float64");
    float64.push(2.5);
    float64.push(0.5);
    float64.push(1.5);
    float64.push(1.5);

    float64.sort((a, b) => a - b);

    expect(float64.at(0)).toBe(0.5);
    expect(float64.at(1)).toBe(1.5);
    expect(float64.at(2)).toBe(1.5);
    expect(float64.at(3)).toBe(2.5);
  });
});
