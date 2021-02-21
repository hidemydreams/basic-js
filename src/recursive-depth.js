const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let elem of arr) {
      let depthAdd = 1;
      if (Array.isArray(elem)) {
        depthAdd = depthAdd + this.calculateDepth(elem);
        if (depthAdd > depth) {
          depth = depthAdd;
        }
      }
    }
    return depth;
  }
};
