// src/merge-sorted-arrays.test.ts

import { merge } from "./merge-sorted-arrays";

describe("merge()", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const actual = merge(collection1, collection2);

    expect(actual).toEqual(expected);
  });

  it("should merge two empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expected: number[] = [];

    const actual = merge(collection1, collection2);

    expect(actual).toEqual(expected);
  });

  it("should merge an array with one element and an empty array", () => {
    const collection1 = [1];
    const collection2: number[] = [];
    const expected = [1];

    const actual = merge(collection1, collection2);

    expect(actual).toEqual(expected);
  });
});
