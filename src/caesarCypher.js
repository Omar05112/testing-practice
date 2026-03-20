export const caesarCipher = (val, key) => {
  const advancedStr = val
    .split("")
    .map((char) => {
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        return String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
      else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        return String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
      else return char;
    })
    .join("");

  return advancedStr;
};
