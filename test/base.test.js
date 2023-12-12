const BaseArray = require("../lib/baseArray/baseArray");
const TypedArray = require("../main");

describe("BaseArray", () => {
  test("should throw an error when trying to get ArrayType on BaseArray", () => {
    expect(() => {
      const arr = new BaseArray(10, "Int8", "number", 1);
      arr.ArrayType;
    }).toThrow("ArrayType must be implemented in derived classes");
  });

  test("should throw an error when trying to give negative length", () => {
    expect(() => {
      TypedArray("int8", -5);
    }).toThrow("Array length is not valid");
  });

  test("should have a default length of 0", () => {
    const BaseArray = TypedArray("int8");
    expect(BaseArray.length).toBe(0);
  });

  test("should have a default type of int32", () => {
    const BaseArray = TypedArray();
    expect(BaseArray.type).toBe("Int32");
  });

  test("at() should return value at given index", () => {
    const BaseArray = TypedArray("int8", 0);
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

  test("set(), at() should set and get values correctly", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 42);
    expect(BaseArray.at(0)).toBe(42);
    BaseArray.set(10, 50);
    expect(BaseArray.at(10)).toBe(50);
  });

  test("array() should create a new array with same buffer with same type", () => {
    const BaseArray = TypedArray("int8", 10);
    const array = BaseArray.array();
    expect(array instanceof BaseArray.ArrayType).toBe(true);
    expect(array.length).toBe(BaseArray.length);
    array[0] = 5;
    expect(array[0]).toBe(5);
    expect(BaseArray.at(0)).toBe(5);
  });

  test("toArray() should convert to a normal array with toArray method", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 42);
    const normalArray = BaseArray.toArray();
    expect(normalArray).toEqual([42, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("should clone the array with clone method", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 42);
    const cloneArray = BaseArray.clone();
    expect(cloneArray).toEqual(BaseArray.array());
  });

  test("should handle pushing elements with push method", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.push(42);
    expect(BaseArray.length).toBe(11);
    expect(BaseArray.at(10)).toBe(42);
  });

  test("should handle popping elements with pop method", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.pop();
    expect(BaseArray.length).toBe(9);
  });

  test("should handle popping elements and shirk", () => {
    const BaseArray = TypedArray("int8", 30);
    for (var i = 0; i < 20; ++i) {
      BaseArray.pop();
    }
    expect(BaseArray.length).toBe(10);
  });

  test("should throw an error when trying to pop from an empty array", () => {
    const BaseArray = TypedArray("int8", 0);
    expect(() => {
      BaseArray.pop();
    }).toThrow("Array is empty");
  });

  test("should shift elements from the beginning of the array", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 42);
    BaseArray.set(1, 23);
    const shiftedValue = BaseArray.shift();

    expect(BaseArray.length).toBe(9);
    expect(shiftedValue).toBe(42);
    expect(BaseArray.at(0)).toBe(23);
  });

  test("should throw an error when trying to shift from an empty array", () => {
    const BaseArray = TypedArray("int8", 0);
    expect(() => {
      BaseArray.shift();
    }).toThrow("Array is empty");
  });

  test("should unshift elements to the beginning of the array", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 42);
    BaseArray.set(1, 23);
    BaseArray.unshift(99);

    expect(BaseArray.length).toBe(11);
    expect(BaseArray.at(0)).toBe(99);
    expect(BaseArray.at(1)).toBe(42);
    expect(BaseArray.at(2)).toBe(23);
  });

  test("should not unshift non-number values", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.unshift("hello");
    expect(BaseArray.length).toBe(10);
    expect(BaseArray.at(0)).toBe(0);
  });

  test("should slice the array based on start and end indices", () => {
    const BaseArray = TypedArray("int8", 10);
    BaseArray.set(0, 1);
    BaseArray.set(1, 2);
    BaseArray.set(2, 3);

    const slicedArray = BaseArray.slice(1, 3);

    expect(slicedArray.length).toBe(2);
    expect(slicedArray.at(0)).toBe(2);
    expect(slicedArray.at(1)).toBe(3);
  });

  test("should sort the array in ascending order", () => {
    const BaseArray = TypedArray("int8", 3);
    BaseArray.set(0, 3);
    BaseArray.set(1, 1);
    BaseArray.set(2, 2);

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(1);
    expect(BaseArray.at(1)).toBe(2);
    expect(BaseArray.at(2)).toBe(3);
  });

  test("should sort the array in descending order", () => {
    const BaseArray = TypedArray("int8", 3);
    BaseArray.set(0, 3);
    BaseArray.set(1, 1);
    BaseArray.set(2, 2);

    BaseArray.sort((a, b) => b - a);

    expect(BaseArray.at(0)).toBe(3);
    expect(BaseArray.at(1)).toBe(2);
    expect(BaseArray.at(2)).toBe(1);
  });

  test("should reverse the array", () => {
    const BaseArray = TypedArray("int8", 3);
    BaseArray.set(0, 1);
    BaseArray.set(1, 2);
    BaseArray.set(2, 3);

    BaseArray.reverse();

    expect(BaseArray.at(0)).toBe(3);
    expect(BaseArray.at(1)).toBe(2);
    expect(BaseArray.at(2)).toBe(1);
  });

  test("should fill the array with 1", () => {
    const BaseArray = TypedArray("int8", 3).fill(1);
    expect(BaseArray.at(0)).toBe(1);
    expect(BaseArray.at(1)).toBe(1);
    expect(BaseArray.at(2)).toBe(1);
  });

  test("should return indexes of elements", () => {
    const BaseArray = TypedArray("int8", 3);
    BaseArray.set(0, 1);
    BaseArray.set(1, 2);
    BaseArray.set(2, 2);

    expect(BaseArray.indexOf(2)).toBe(1);
    expect(BaseArray.indexOf(0)).toBe(-1);
    expect(BaseArray.lastIndexOf(2)).toBe(2);
    expect(BaseArray.lastIndexOf(0)).toBe(-1);
  });

  test("should return true if element includes in array", () => {
    const BaseArray = TypedArray("int8", 3);
    BaseArray.set(0, 1);
    BaseArray.set(1, 2);
    BaseArray.set(2, 2);

    expect(BaseArray.includes(2)).toBe(true);
    expect(BaseArray.includes(3)).toBe(false);
  });
});
