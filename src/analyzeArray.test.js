import expect from "expect";
import { analyzeArray } from "./analyzeArray";

test("Array analyzed", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 13, 9, 90, 27, 6])).toEqual({
    average: 16,
    min: 1,
    max: 90,
    length: 10,
  });
});
