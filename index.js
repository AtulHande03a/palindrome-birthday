const reverseString = (str) => {
  const listOfChars = str.split("");
  const reverseListOfChars = listOfChars.reverse();
  const reversedStr = reverseListOfChars.join("");
  return reversedStr;
  //console.log(listOfChars);
  //console.log(reverseListOfChars);
  //console.log(reversedStr);
};
//reverseString("atul");

const isPlaindrome = (str) => {
  const reverse = reverseString(str);
  if (str === reverse) {
    //console.log("yes it is palindrome");
    return true;
  } else {
    //console.log("no it is not palindrome.");
    return false;
  }
};

//isPlaindrome("atul");

//convert date to string
const convertDateToString = (date) => {
  const dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.day < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
};
//console.log(convertDateToString(date));

//funtion takes date and returns all variations

const getAllDateFormats = (date) => {
  const dateStr = convertDateToString(date);

  const ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  const mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  const yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  const ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  const mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  const yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

//console.log(getAllDateFormats(date));
