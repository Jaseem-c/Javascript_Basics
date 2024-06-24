// hoisiting
console.log(a);
var a = 10;

i=10;
console.log('before',i);
for(let i=1;i<=5;i++)
{
    console.log('insde',i);
}
console.log('afetr',i);


i=10;
console.log('before',i);
for(var i=1;i<=5;i++)
{
    console.log('insde',i);
}
console.log('afetr',i);