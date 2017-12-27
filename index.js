// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  let x = string.length

  if (x < 2) {
    return true
  }
  else if (string[x-1] === string[0]) {
    return isPalindrome(string.substring((x-1), 1))
  }
  else {
    return false
  }
}

function addUpTo(array, i) {
  if(i === 0){
    return array[i];
  } else {
    return array[i] + addUpTo(array, --i)
  }
}

function maxOf(array) {
  if (array.length === 1){
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (array.length === 0){
    return false;
  } else if (array[0] === num ){
    return true;
  } else {
    return includesNumber(array.slice(1), num)
  }
}
