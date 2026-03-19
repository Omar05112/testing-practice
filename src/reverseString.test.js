import { reverseString } from "./reverseString.js";
import expect from "expect";

test("String reversed successfully", () => {
  expect(reverseString("kayak detartrated")).toBe("detartrated kayak");
});
