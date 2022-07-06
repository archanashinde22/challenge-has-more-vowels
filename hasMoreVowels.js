const hasMoreVowels = str =>{
 const vowelsArr = ['a','e','o','i','u']
 const strArr = str.split('')
 let vowel =0;
 for(let i=0; i<strArr.length ;i++)
 {
    if(vowelsArr.includes(strArr[i].toLowerCase())){
        vowel ++ ;
    }
 }
    if(vowel > strArr.length/2)
    {
        return true;
    }
    else {
        return false;
    }
}

const regex = /[aeiou]/
const hasMoreVowels1 = str =>{
    const strArr = str.split('')
    let vowel =0;
    for(let i=0; i<strArr.length ;i++)
    {
        if(regex.test(strArr[i].toLowerCase())){
            vowel++ ;
        }
    }
       if(vowel > strArr.length/2)
       {
           return true;
       }
       else {
           return false;
       }
   }
console.log(hasMoreVowels1('moose'));
console.log(hasMoreVowels1('mice'));
console.log(hasMoreVowels1('graph'));
console.log(hasMoreVowels1('yay'));
console.log(hasMoreVowels1('Aal'));


