// https://www.codewars.com/kata/57eae65a4321032ce000002d


function fakeBin(text){
    let new_text = "";
    for(let i=0; i<text.length; i++){
        if(Number(text[i]) < 5){
            new_text += 0;
        }
        else{
            new_text += 1;
        }
    }
    return new_text;
}

console.log(fakeBin('45385593107843568'))