const genarateRandomNumber = (start, end) => {
  const range = end - start;
  const randomNum = Math.floor(Math.random() * range + start);
  return randomNum;
};

module.exports = {
  genarateRandomNumber,
};
