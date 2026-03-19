export const reverseString = (val) => {
  let reversedVal = "";
  for (let index = val.length - 1; index >= 0; index--) {
    reversedVal = reversedVal + val.charAt(index);
  }

  return reversedVal;
};
