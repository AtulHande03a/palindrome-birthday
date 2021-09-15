reverseString("atul");

const reverseString = (str) => {
  const listOfChars = str.split("");
  const reverseListOfChar = listOfChars.reverse();
  const reversedStr = reverseListOfChar.join("");
  return reversedStr;
  console.log(reversedStr);
};

reverseString("atul");
