const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let temp = matrix.join(",").split(',').filter(i => i == '^^');
  if(temp.length !== 0) return temp.length;
  else return 0;
};
