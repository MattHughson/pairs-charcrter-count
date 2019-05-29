 //Write a function countLetters that can return to us 
// all the unique characters that exist in a string that is passed into the function.
console.log(process.argv.slice(2))
console.log(countLetters(process.argv.slice(2)));

function countLetters(argument){
   var joinArg = argument.join("")
   var letterObj = {};
     for (var i = 0; i < joinArg.length; i++){
        var letters = joinArg[i] ;  
         letterObj[letters] = 0;
     }
     for (var i = 0; i < joinArg.length; i++){
        var letters = joinArg[i] ; 
        if (letterObj[letters]) {
        letterObj[letters] += 1;
        } else { letterObj[letters] = 1; 
        }
     }
     return letterObj;
 }

//Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen)
//  be a primitive data type, like a number, a boolean, null or a string.

// // However, our function countLetters needs to return an object that can 
// represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

// // What should the object returned back by countLetters look like?

// // Perhaps it could return an object where each unique character 
// encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.

// // So countLetters("lighthouse in the house") would return this: