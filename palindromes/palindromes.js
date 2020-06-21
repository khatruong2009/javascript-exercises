const palindromes = function(str) {
 let regex = /[^A-Za-z]/g;
 let modStr = str.replace(regex, "").toLowerCase();
 if (modStr.split("").reverse().join("") == modStr) {
  return true;
 } else return false;
}

module.exports = palindromes
