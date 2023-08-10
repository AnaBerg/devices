export const handleMacAddressMask = (macAddress: string) => {
  const MAC_ADDRESS_WITH_MASK = 17;
  const setCharacters = new Set([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);
  let res = "";
  let idxAtMask = -1;
  for (let idx = 0; idx < macAddress.length; idx++) {
    let currChar = macAddress.charAt(idx);
    if (setCharacters.has(currChar)) {
      if (idxAtMask === 1) {
        res += ":";
        idxAtMask = -1;
      }
      res += currChar;
      idxAtMask++;
    }
  }

  if (res.length <= MAC_ADDRESS_WITH_MASK) {
    return res;
  } else {
    return res.substr(0, MAC_ADDRESS_WITH_MASK);
  }
};
