const caesar = function(str, shift) {
 shift = shift % 26;
 let solved = "";
 let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
 let lowerCaseStr = str.toLowerCase();

 for (i = 0; i < lowerCaseStr.length; i++) {
  let currentLetter = lowerCaseStr[i];
  if(currentLetter === " ") {
   solved += currentLetter;
   continue;
  } 

 let currentIndex = alphabet.indexOf(currentLetter);

 if (shift < 0) {
  do {
   shift += 26;
  }
  while (shift < 0);
}

 let newIndex = currentIndex + shift;
 


 if (str[i] === str[i].toUpperCase()) {
  solved += alphabet[newIndex].toUpperCase();
 } else solved += alphabet[newIndex];
  
}

 return solved;
};


module.exports = caesar
