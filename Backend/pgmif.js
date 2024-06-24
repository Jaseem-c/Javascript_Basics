// write a program to find a person to eligible to vote

age = 20 ;
if(age>=20)
{
    console.log('eligible');
}
else
{
    console.log('not eligible');
}
console.log('------------------');

// positive or negative
x=0

if (x>0)
{
    console.log('postive');
}
else if (x==0)
{
    console.log('zero');
}
else {
    console.log('neagtive');
}
console.log('------------------');

// write a prm given number is even or odd
x=3;

if (x%2==0)
{
    console.log('even');
}

else
{
    console.log('odd');
}
console.log('---------------------');

// largest number

x=5;
y=2;
if (x>y)
{
    console.log('x-large');
}
else if(x==y)
{
    console.log('x and y are equal');
}
else
{
    console.log('y-large');
}

console.log('.................');
// largets among 3

x=5;
y=7;
z=1;
if (x>y && x>z)
{
    console.log('x-large');
}
else if (y>x && y>z)
{
    console.log('y-large');
}
else{
    console.log('z-large');
}
console.log('-----------------');

// fizz
x=30;
if(x%3==0 &&  x%5!=0 && x%15!=0)
{
    console.log('fizz');
}
else if(x%5==0 && x%3!=0){
console.log('buzz');
}
else if(x%3==0 && x%5==0)
{
    console.log('fizzbuzz');
}
else
{
    console.log('not divisible by 3,5,15');
}