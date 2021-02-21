const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  let namesArr = [];
  let arr = [];
  let abbreviation = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      arr.push(array[i].trim().toUpperCase());
    }
  }
  // check for fullname
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      namesArr.push(arr[i][0]);
    } else {
      null;
    }
  }

  // peeking first letters

  for (let i = 0; i < namesArr.length; i++) {
    abbreviation.push(namesArr[i][0]);
  }
  return abbreviation.sort().join("");
};
