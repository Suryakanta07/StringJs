//write a javascript function to check whether a string is blank or not??
const isBlank = (input) => {
  
    if(input.length===0)
    
    return true;
    else
      return false;
    }
    console.log(isBlank(''));
    console.log(isBlank('abc'));

//shorthand code

   /* const isBlank =input=>input.length===0?true:false;
console.log(isBlank(''));
console.log(isBlank('abc'));*/