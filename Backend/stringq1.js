// wap to check wether a given number is a mobile number is not
a='23456678'
// if(a.length==10)
//     {
//         console.log('mobile number');
//     }
//     else{
//         console.log('not a mobile number');
//     }
console.log( a.length==10?'it is a mobile number':'it is a not a mobile number');
// wap to check whether a given mail id is gmail or not
email='jas@gmail.com'
console.log(email.endsWith('@gmail.com')?'it is a gemail':'it is not a gmail');
// wap to check whether a given word starts with letter q or not
word='evenging'
console.log(email.startsWith('q')?'it is a true':'it is false');
// print all vowels in the given string "good morning all"
sentence='good morning to all'
// characters=sentence.split('')
// console.log(characters);
 vowel=['a','i','o','u','e']
// for(let char of characters)
//     {
//         if(vowel.includes(char)){
//             console.log(char);
//         }
//     }

Array.from(sentence).filter(char=>vowel.includes(char)).forEach(item=>console.log(item))

console.log('...................');



str='malayala'
pal=''
for(i=str.length-1;i>=0;i--)
    {
        pal=pal+str[i];
    }
console.log(pal==str?'palindrome:':'not palindrome');
