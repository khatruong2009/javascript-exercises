const removeFromArray = function(arr, rem) {
 let n = arr.indexOf(rem);
 let newStr = arr.splice(n, 1);
 return arr;
}

module.exports = removeFromArray
