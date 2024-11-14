function isPalindrome(str) {
  console.log(str)   //given input value
  str = str.toLowerCase(str);  //converting to lowercase
  str = str.replace(/[^a-z]/g, ""); //punctuation removal
  str = str.replace(/\s/g,'');// space removal
  console.log(str)//str after removing
 if (str === '') {
    return "string is empty"
 } else {
  const reversedstr = str.split('').reverse().join('');
 
  if(str === reversedstr) {
    return "string is palidrome"
  }else if (str != reversedstr) {
    return  "string is not palindrom"
  } 

}

}

//var string = prompt("enter a string")
let me = "ma@la #Y!!.   alaM"

let me2 = "strinnnnnnsg"

let me3 = "@#$ !%^& ."
let me33 = "@#$ !%^& yMy"
console.log(isPalindrome(me)); 
console.log("----------------------------------------------------------------------------")
console.log(isPalindrome(me2));
console.log("----------------------------------------------------------------------------")
console.log(isPalindrome(me3));
console.log("-----------------------------------------------------------------------------")
console.log(isPalindrome(me33));
