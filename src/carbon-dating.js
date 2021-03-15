const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  const parsed = Number.parseFloat(sampleActivity);
  if(Number.isNaN(parsed) || typeof(sampleActivity) !== 'string' || parsed <= 0){
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.log( MODERN_ACTIVITY / parsed);
  
  let answer =  Math.ceil(time / k);
  if(answer < 0 ) return false;
  return answer;
};
