const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

 // const addition_str = (options['addition']+' ').repeat(options['additionRepeatTimes']).split(' ').reverse().splice(1).join(`${options['additionSeparator']}`)
  //return (str+addition_str+' ').repeat(options['repeatTimes']).split(' ').reverse().splice(1).join(`${options['separator']}`)
  str=str+'';
  let count = +options.repeatTimes;
  let custseparator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = +options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (typeof addition !== 'undefined') {   
    let new_str = str + addition;
    if (typeof additionRepeatTimes !== 'undefined') {

      for (let i = 0; i < additionRepeatTimes - 1; i++) {

        if (typeof additionSeparator !== 'undefined') {
          new_str += (additionSeparator + addition);
        }
        else {
          new_str = new_str + '|' + addition;
        }
      }
      str=new_str;
    }
    else str=str+addition;
  }

  let final_str = str;
  for (let i = 0; i < count - 1; i++) {
    if (typeof custseparator !== 'undefined') {
      final_str += (custseparator + str);
    }
    else {
      final_str += ('+' + str);
    }
  }
  return final_str;
};
  