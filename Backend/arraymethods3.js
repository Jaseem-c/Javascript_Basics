// filter
a=[2,3,56,47,50,12,4]
// wap to print even numbers only
even=a.filter(num=>num%2==0)
console.log(even);
// wap to print numbers > 15
b=a.filter(num=>num>15)
console.log(b);
// wap to check whether num greater than 15 is there or not /is there any numbers >15
c=a.some(num=>num>15)
console.log(c);
console.log('............................');
// find()

arr=[3,45,6,7,56,24]
gn=arr.find(num=>num>15)
console.log(gn);

// includes - used to check whether the value is present or not -retrun boolean values based on items\
check=arr.includes(7)
console.log(check);