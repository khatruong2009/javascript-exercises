

const repeatString = function(str, num) {
 let final = "";
 if (num < 0) {
  return "ERROR";
 } else {
 for (i = 0; i < num; i++) {
  {
  final = final + str;
  }
 }
 return final;
}
}

module.exports = repeatString
