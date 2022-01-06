//Write a javascript function to test whether the character at the provided (character) index is upper case??
const isUpperCaseAt =(str, index) => [index].toUpperCase() === str.charAt(index);
    
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));