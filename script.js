// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.

// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverse(str){
    let reverseStr = "";
    // console.log(str[7] += reverseStr)

    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i]
    }
    return reverseStr;

}
console.log(reverse("creature"))



// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing

// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].

function removeEvenLengths(arr){

    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length%2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr;

}
console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));



// D Gets Jiggy
// Write a function that accepts as a parameter a string containing someone’s name. Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!" 

// Given "Dylan", return "Ylan to the D!"


function dGetsJiggy(name){
    let firstLetterOfName = name[0];
    let newName = "";
    for(let i = 1; i < name.length; i++){
        if(i == 1){
            let cap = name[i].toUpperCase();
            newName += cap;
            
        }
        else{
            newName+=name[i]
        }
        // newName += name[i];
    }
    
    console.log(newName)
    return `${newName} to the ${firstLetterOfName}!`
}
console.log(dGetsJiggy("Dylan"));




// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.



function numToRo(int){
    const romanChart = {
        D:500,
        C:100,
        L: 50,
        XL: 40,
        X:10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1 
    }
    let answer = "";
    if(int <= 4000 && int > 0){
        for(key in romanChart){
            while(int >= romanChart[key]){
                answer += key
                int -= romanChart[key]
            }
        }

    
    }
    else{
        return `Integer is too large to decipher!`
    }
   
    return answer;
}

console.log(numToRo(4000));



