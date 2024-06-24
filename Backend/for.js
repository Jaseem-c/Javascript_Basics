// w.a.p to print values 1-10
for (i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('----------------completed-------------');
// 10-1
for (i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('----------------completed-------------');

// factorial
x = 4;
fact = 1
for (i = 1; i <= x; i++) {
    fact = fact * i
}
console.log(fact);
console.log('----------------completed-------------');

// w.a.p to create a foor loop which have the potential to iterate upto 10 but print only up to 5

for (i = 1; i <= 10; i++) {
    if (i <= 5) {
        console.log(i);
    }
}
console.log('----------------completed-------------');

// prime or not
num = 1;
prime = true;

if(num>1)
{
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
}
else{
    prime=false;
}
// prime?console.log('prime'):console.log('not');
if(prime)
{
    console.log(`prime ${num}`);
}
else
{
    console.log('not');
}
console.log('----------------completed-------------');

// display all prime numbers from 2-50
// algorithm
// loop to iterate up to 50
// create a loop for checking factor

for(i=2;i<=50;i++)

{
    let flag =0;
   for(j=2;j<i;j++)
   {
    if(i%j==0)
    {
        flag=1;
        break;
    }
   }
   if(i>1 && flag==0)
   {
console.log(i);
   }
}
console.log('----------------completed-------------');

// to display all armstrong number between 8-500
// create a loop to iterate 8-500
// for(i=8;i<=500;i++)
// {
//     sum=0;
//     temp=i;
//     // calculate length of the given number
//     power=(i+"").length;
//     // for loop to check the factors
//     for(j=)
// }

// w.a.p to find gcd or hcf of any two given numbers
// 12 - 1,2,3,4,6,12
// 28- 1,2,4,7,14,28

num1=12;
num2=28;
gcd=0;

for(i=1;i<=num1 && i<=num2;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        gcd=i;
    }
}
console.log(gcd);
console.log('----------------completed-------------');