// write a program to print javascript 5 times
i=1;
while(i<=5){
    console.log('javascript');
    i++;
}
console.log('--------------completed---------------');

// w.a.p to print values from 1-5
x=1;
while(x<=5)
{
    console.log(x);
    x++;
}
console.log('--------------completed---------------');
// w.a.p to print values from 5-1
y=5;
while(y>=1)
{
    console.log(y);
    y--;
}
console.log('--------------completed---------------');
// w.a.p to find even numbers between 1-50
x=1;
while(x<=50)
{
    if(x%2==0){
    console.log(x);
    }
    x++;
}
console.log('--------------completed---------------');

// w.a.p to find sum of all numbers from 1-10
a=1;
sum=0;
while(a<=10)
{
    sum=sum+a;
    a++;
}
console.log(`sum is ${sum}`);
console.log('--------------completed---------------');

// input  1  2   3    4  
// output 1 24  369  4936
// 2*12 ,3*123,4*1234
input=4;
i=1;
str="";
while(i<=input)
{
str=str+i; //concatination
i++;
}
output=input*str;
console.log(output);
console.log('--------------completed---------------');

// 2+22 3+33+333 4+44+444+4444
input=3;
i=1;
str="";
sum=0;
while(i<=input)
{
    str=str+input
    sum=sum+Number(str)
    i++;
}
console.log(sum);
console.log('--------------completed---------------');

// w.a.p to find reverse of a given number
x=123;
i=3;
str="";
while(i>=1)
{
str=str+i;
i--;
}
console.log(str);
console.log('--------------completed---------------');

// general
// Math.floor(1.3)=1;
input=561;
lastDigit=0;
str="";
while(input>0)
{
lastDigit=input%10;
str=str+lastDigit;
input=Math.floor(input/10);
}
console.log(Number(str));
console.log('--------------completed---------------');

// w.a.p a given number is pallindrome or not
input=161;
number=input;
lastDigit=0;
str="";
while(input>0)
{
lastDigit=input%10;
str=str+lastDigit;
input=Math.floor(input/10);
}
reverse=(Number(str));
console.log(reverse);

if(number==reverse)
{
    console.log('given number is pallindrome');
}
else{
    console.log('not');
}
console.log('--------------completed---------------');

// w.a.p to find factorial of a given number
i=4;
factorial=1;
while(i>=1)
{
    factorial=factorial*i;
    i--;
}
console.log(factorial);
console.log('--------------completed---------------');

// another
num=0;
i=1;
fact=1;
if(num==0)
{
    fact=1;
}
else{

while(i<=5)
{
fact=fact*i;
i++;
}
}
console.log(fact);
console.log('--------------completed---------------');

// w.a.p a program to check a 3 digit number is armstrong or not
// 153 = 1**3+5**3+3**3 =153  (1+125+27)
// armstrong numbers are those numbers whose sum of indivigual number raised to the total number of digit is equal to the original number
input=153;
num=input;
pwr=(input+'').length;
console.log(pwr);
lastDigit=0;
sum=0;
while(input>0)
{
    lastDigit=input%10;
    power=lastDigit**pwr;
    sum=sum+power;
    input=Math.floor(input/10);
}  
console.log(sum);

if(num==sum)
{
    console.log('given number is armstrong');
}
else{
    console.log('not');
}

console.log('--------------completed---------------');

// w.a.p to display numbers whose exponential is in the range of 8-36,usercan input the power
i=1;
power=2;
while(i<=36)
{
 if(i**power>=8 && i**power<=36)
 {
    console.log(i,`exponential: ${i**power}`);
 }
 i++;
}
console.log('--------------completed---------------');