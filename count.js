//Write a javascript function to count the occurrence of a substring in a string??
const count =(str, substr) => str.toLowerCase().split(substr).length - 1;
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));