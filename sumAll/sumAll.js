const sumAll = function(num1, num2) {
let sum = 0;
let length;
if (typeof num1 === "number" && typeof num2 === "number") {
 if (num1 >= 0 && num2 >= 0) {
  if (num1 < num2) {
   length = num2 - num1 + 1;
   for (i = num1; i <= length; i++) {
    sum += i;
   }
  } else {
   length = num1 - num2 + 1;
   for (i = num2; i <= length; i++) {
    sum += i;
   }
  }
  return sum;
 } else {
  return "ERROR";
 }
} else {
 return "ERROR";
}

{}} 

module.exports = sumAll
