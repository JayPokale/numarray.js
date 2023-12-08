const Int8 = require("../../lib/int/byte1");
const TypedArray = require("../../main");

describe("BaseArray", () => {
  test("should create an instance of Int8", () => {
    const int8 = TypedArray("i8", 10);
    expect(int8).toBeInstanceOf(Int8);
  });

  test("should have the correct type", () => {
    const int8 = TypedArray("i8", 10);
    expect(int8.type).toBe("Int8");
  });

  test("i8 array should be instance of Int8Array", () => {
    const int8 = TypedArray("i8", 10);
    const array = int8.array();
    expect(array instanceof Int8Array).toBe(true);
  });

  /////////
  test("should throw an error when trying to give negative length", () => {
    expect(() => {
      TypedArray("i8", -5);
    }).toThrow("Array length is not valid");
  });

  test("should have a default length of 0", () => {
    const BaseArray = TypedArray("i8");
    expect(BaseArray.length).toBe(0);
  });

  test("should have a default type of int32", () => {
    const BaseArray = TypedArray();
    expect(BaseArray.type).toBe("Int32");
  });

  test("at() should return value at given index", () => {
    const BaseArray = TypedArray("i8", 0);
    BaseArray.push(1);
    BaseArray.push(2);
    BaseArray.push(3);
    expect(BaseArray.at(0)).toBe(1);
    expect(BaseArray.at(1)).toBe(2);
    expect(BaseArray.at(2)).toBe(3);
    expect(BaseArray.at(-1)).toBe(3);
    expect(BaseArray.at(-2)).toBe(2);
    expect(BaseArray.at(-3)).toBe(1);
  });

  test("set(), get() should set and get values correctly", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 42);
    expect(BaseArray.at(0)).toBe(42);
  });

  test("array() should create a new array with same buffer with same type", () => {
    const BaseArray = TypedArray("i8", 10);
    const array = BaseArray.array();
    expect(array instanceof BaseArray.ArrayType).toBe(true);
    expect(array.length).toBe(BaseArray.length);
    array[0] = 5;
    expect(array[0]).toBe(5);
    expect(BaseArray.at(0)).toBe(5);
  });

  test("toArray() should convert to a normal array with toArray method", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 42);
    const normalArray = BaseArray.toArray();
    expect(normalArray).toEqual([42, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("should clone the array with clone method", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 42);
    const cloneArray = BaseArray.clone();
    expect(cloneArray).toEqual(BaseArray.array());
  });

  test("should handle pushing elements with push method", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.push(42);
    expect(BaseArray.length).toBe(11);
    expect(BaseArray.at(10)).toBe(42);
  });

  test("should handle popping elements with pop method", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.pop();
    expect(BaseArray.length).toBe(9);
  });

  test("should throw an error when trying to pop from an empty array", () => {
    const BaseArray = TypedArray("i8", 0);
    expect(() => {
      BaseArray.pop();
    }).toThrow("Array is empty");
  });

  test("should shift elements from the beginning of the array", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 42);
    BaseArray.set(1, 23);
    const shiftedValue = BaseArray.shift();

    expect(BaseArray.length).toBe(9);
    expect(shiftedValue).toBe(42);
    expect(BaseArray.at(0)).toBe(23);
  });

  test("should throw an error when trying to shift from an empty array", () => {
    const BaseArray = TypedArray("i8", 0);
    expect(() => {
      BaseArray.shift();
    }).toThrow("Array is empty");
  });

  test("should unshift elements to the beginning of the array", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 42);
    BaseArray.set(1, 23);
    BaseArray.unshift(99);

    expect(BaseArray.length).toBe(11);
    expect(BaseArray.at(0)).toBe(99);
    expect(BaseArray.at(1)).toBe(42);
    expect(BaseArray.at(2)).toBe(23);
  });

  test("should not unshift non-number values", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.unshift("hello");
    expect(BaseArray.length).toBe(10);
    expect(BaseArray.at(0)).toBe(0);
  });

  test("should slice the array based on start and end indices", () => {
    const BaseArray = TypedArray("i8", 10);
    BaseArray.set(0, 1);
    BaseArray.set(1, 2);
    BaseArray.set(2, 3);

    const slicedArray = BaseArray.slice(1, 3);

    expect(slicedArray.length).toBe(2);
    expect(slicedArray.at(0)).toBe(2);
    expect(slicedArray.at(1)).toBe(3);
  });

  test("should sort the array in ascending order", () => {
    const BaseArray = TypedArray("i8", 3);
    BaseArray.set(0, 3);
    BaseArray.set(1, 1);
    BaseArray.set(2, 2);

    const sortedArray = BaseArray.sort();

    expect(sortedArray.at(0)).toBe(1);
    expect(sortedArray.at(1)).toBe(2);
    expect(sortedArray.at(2)).toBe(3);
  });
});
