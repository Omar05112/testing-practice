import { experiments } from "webpack";
import { caesarCipher } from "./caesarCypher";
import expect from "expect";

test("Caesar Cipher function functioning", () => {
  expect(caesarCipher("wagwan", 7)).toBe("dhndhu");
  expect(caesarCipher("WAgWAn", 7)).toBe("DHnDHu");
  expect(caesarCipher("wagwan GUH ,;:,;%¨£%%§///.???;:,;:,", 7)).toBe(
    "dhndhu NBO ,;:,;%¨£%%§///.???;:,;:,",
  );
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
