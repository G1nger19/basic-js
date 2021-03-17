const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max_depth = 0;
    max_depth = Math.max(...arr.map(el => Array.isArray(el) ? this.calculateDepth(el) : 0), max_depth)
    return max_depth + 1;
  }
};