const fibonacci = function(num) {
 let fibo = [0];
 let prevNum = 0;
 let currentNum = 1;
 let temp;

 if (num >= 0) {
  for (i = 0; i < 500; i++) {
   temp = currentNum;
   currentNum = prevNum + currentNum;
   prevNum = temp;
   fibo.push(prevNum);
  }
  return fibo[num];
 } else return "OOPS";
 }



module.exports = fibonacci
