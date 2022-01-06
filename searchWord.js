//Write a javascript function to find a word with in a string??
const searchWord = (text, word) =>{
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
    if ((text.substr(i, i + word.length)) == word) {
    counter++;
    }
    }
    return "'"+text+"' was found "+counter+" times.";
    }
    console.log(searchWord('The quick brown fox', 'fox'))
    console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));