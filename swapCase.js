//Write a javascript function that takes a string which can has lower and upper case letters as a parameter and converts upper case letters to lower case,and lower case letters to upper case?? 
const swapCase = (str) => {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapCase('AaBbc'));

