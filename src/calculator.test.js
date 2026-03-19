import { experiments } from "webpack";
import { calculator } from "./calculator.js";
import expect from "expect";

test("All functions working", () => {
  expect(calculator.add(1, 7)).toBe(8);
  expect(calculator.subtract(7, 5)).toBe(2);
  expect(calculator.multiply(9, 4)).toBe(36);
});
