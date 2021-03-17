const CustomError = require("../extensions/custom-error");

const chainMaker = {
  Chain : [],

  getLength() {
    this.Chain.length;
    return this;
  },
  addLink(value = '( )') {
    if (typeof value === 'undefined') { value = '( )'; }
    else { value = '( ' + value + ' )'; }
    this.Chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && (position < this.Chain.length) && (position > 0)) {
      this.Chain.splice(position-1, 1);
      return this;
    }
    else {
      this.Chain=[];
      throw new UserError("the position argument is invalid");      
    };
  },
  reverseChain() {
     this.Chain.reverse();   
    return this;
  },
  finishChain() {
    let a = this.Chain.join('~~');
    this.Chain=[];   
    return a;
  }
};

module.exports = chainMaker;
