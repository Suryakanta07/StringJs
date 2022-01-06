//Write a javascript function to extract a specified number of characters from a string??
const truncateString = (str1,length) => {

    if((str1.constructor===String) && (length>0)){
        return str1.slice(0,length);
    }
}
console.log(truncateString("Robin Singh",4));



//shorthand code