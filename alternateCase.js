//Write a javascript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case and lower case,starting from upper case??
const alternateCase = (str) => {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(alternateCase('SaMsUnG'));

