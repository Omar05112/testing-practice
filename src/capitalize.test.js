import expect from "expect";
import { capitalize } from "./capitalize.js";

test("String should be capitalized", () => {
  expect(capitalize("tekken")).toBe("TEKKEN");
});

