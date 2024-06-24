const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
//  1) Find the sum of all numbers in the nested arrays.
sum= data.flat().reduce((n1, n2) => n1 + n2)
console.log(sum);
console.log('-------------------');
// 2) Find the maximum number in the entire nested array.
b = data.flat().reduce((n1, n2) => n1 > n2 ? n1 : n2)
console.log(b);
console.log('-------------------');
// 3) Find the average of all numbers in the nested arrays.
avg=sum/data.length
console.log(avg);
console.log('-------------------');
//  4) Find square of each number in the nested arrays.
data.flat().map(item=>item**2).forEach(item=>console.log(item))
console.log('-------------------');
//  5) Find all even numbers from the nested arrays.
data.flat().filter(item=>item%2==0).forEach(ele=>console.log(ele))
console.log('-------------------');
// 6) Use reduceRight to concatenate all nested arrays in reverse order.
    c=data.reduceRight((n1,n2)=>n1.concat(n2))
    console.log(c);
// 7) create a flattened array from the nested arrays.
arr=data.flat()
console.log(arr);
console.log('-------------------');
// 8) check if the number 5 is present in any of the nested arrays
num=arr.some(item=>item==5)
console.log(num);
console.log('-------------------');
// 9) create a single string of all numbers separated by a comma.
string=arr.join(',')
console.log(string);
console.log('-------------------');
//  10) Print each number in the nested arrays.
data.flat().forEach(item=>console.log(item))
console.log('-------------------');
// 11) Sort the nested arrays based on the sum of their numbers.
function sm(arr)
{
    arr.reduce((n1,n2)=>n1+n2)
}
data.sort((n1,n2)=>sm(n1)-sm(n2))
console.log(data);
console.log('-------------------');
// 12) Use map to get the product of the first and last number in each nested array.
k=data.map(item=>item[0]*item[item.length-1])
console.log(k);
console.log('-------------------');
// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
function sm(arr)
{
   return arr.reduce((n1,n2)=>n1+n2)
}
l=data.filter(item=>sm(item)>15)
console.log(l);
console.log('-------------------');
// 14) Use reduce to find the product of all numbers in the nested arrays.
m=data.flat().reduce((n1,n2)=>n1*n2)
console.log(m);
console.log('-------------------');
//  15) create an array of square roots of all numbers in the nested arrays.
n=data.flat().map(item=>item*2)
console.log(n);
console.log('-------------------');
// 16) Use includes to check if the number 20 is present in any of the nested arrays.
o=data.flat().includes(20)
console.log(o);
console.log('-------------------');
// 17) Use map to convert each number in the nested arrays to its string representation.
    s=data.map(arr=>arr.map(num=>num.toString()))
    console.log(s);
    console.log('-------------------');
// 18) Use filter to get all arrays where the length is greater than 2
p=data.filter(item=>item.length>2)
console.log(p);
console.log('-------------------');
// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
r=data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(r);
//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
sq=data.flat().filter(item=>item%2==0).map(item=>item**2)
console.log(Array.from(sq))
console.log('-------------------');
// 21) Sort the nested arrays based on the length of each array.
sr=data.sort((n1,n2)=>n1.length-n2.length)
console.log(sr);
console.log('-------------------');
// 22) Use map to convert each number in the nested arrays to its negative.
neg=data.flat().map(item=>item*-1)
console.log(neg);
console.log('-------------------');
// 23) Use filter to get all arrays where the last number is greater than 10.
sk=data.filter(item=>item[item.length-1]>10)
console.log(sk);
console.log('-------------------');
//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.
;
// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
sq=data.flat().filter(item=>item%2==0).map(item=>Math.sqrt(item))
console.log(Array.from(sq))
console.log('-------------------');
//  26) Use includes to check if the number 15 is present in any of the nested arrays.
af=data.flat().includes(15)
console.log(af);
console.log('-------------------');
// 27) Use map to convert each number in the nested arrays to its absolute value.
abs=data.map(arr=>arr.map(num=>Math.abs(num)))
console.log(abs);
console.log('-------------------');
// 28) Use filter to get all arrays where the first number is less than 5.
first=data.filter(item=>item[0]>5)
console.log(first);
console.log('-------------------');
// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
ar=data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(ar);
console.log('-------------------');
// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
gt=data.flat().filter(item=>item>5)
console.log(Array.from(gt));