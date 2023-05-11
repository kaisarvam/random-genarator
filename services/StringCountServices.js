const getAllcount = (countString) => {
  const Counts = {
    characterCount: 0,
    numberCount: 0,
    specialCharacterCount: 0,
  };
  for (let i = 0; i < countString.length; i++) {
    if (
      (countString[i] >= "a" && countString[i] <= "z") ||
      (countString[i] >= "A" && countString[i] <= "Z")
    ) {
      Counts.characterCount++;
    } else if (countString[i] >= "0" && countString[i] <= "9") {
      Counts.numberCount++;
    } else {
      Counts.specialCharacterCount++;
    }
  }
  return Counts;
};
module.exports = { getAllcount };
