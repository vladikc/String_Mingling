
//Regular way

// function removeVowel (str1){
//   str1 =   str1.replace(/[aeiou]/ig,'')
// return str1;
// }
// console.log(removeVowel('hello')) //'hll'


function removeVowel(str1) {
    if (str1.length === 0) {return ""}
    return ('aeiouAEIOU'.indexOf(str1[0]) > -1) ?  "" + removeVowel(str1.slice(1)) : str1[0]+ removeVowel(str1.slice(1))

    

}

console.log(removeVowel('china')) //'hll'