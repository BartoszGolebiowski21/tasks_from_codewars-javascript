// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3


function abbrevName(name){
    let first_letter = name.charAt(0).toUpperCase();
    let second_letter = name.charAt(name.indexOf(" ") + 1).toUpperCase();
    return first_letter + "." + second_letter;
}

console.log(abbrevName("Sam Harris"));