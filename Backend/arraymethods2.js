a=[12,5,3,9,58,36]
// print all elements
a.forEach(num => {
    console.log(num);
});
console.log('........................');
// find sqaure of all numbers in the given array
a.forEach(num => {
    console.log('sqaure of',num,':',num**2);
});
console.log('........................');
sq=a.map(num=>num**2)
console.log(sq);
console.log('print first element',sq[0]);
// find cube of all numbers in the given array
a.forEach(num => {
    console.log('cube of',num,':',num**3);
});
console.log('........................');

// sum of array
sum=a.reduce((n1,n2)=>n1+n2)
console.log('sum:',sum);
// average
avg=sum/a.length
console.log(avg);
// lowest value
lowest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
// largest 
largest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(largest);
