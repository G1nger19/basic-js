const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'undefined' && members != null && members.length > 0){
    const members_words = members.filter(word => typeof word == 'string');
    const uppers_letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let up_letters = [];
    let temp = ''
    for(let i = 0;i<members_words.length;i++){
      temp = members_words[i].split('').filter(x => x != ' ').join('')
      up_letters.push(temp[0].toUpperCase());
    }
    return up_letters.sort().join('')
  }
  else return false;
};
