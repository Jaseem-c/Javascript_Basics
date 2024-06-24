const weekdays=['monday','tuesday','wednesday'] //length-3,index-2
console.log(weekdays);
console.log(typeof(weekdays));
// print monday
console.log(weekdays[0]);
// total number of items
console.log(weekdays.length);
// add thursday
// push()
weekdays.push('thursday')
console.log(weekdays);
// remove last element
weekdays.pop()
console.log(weekdays);
// add element at first
weekdays.unshift('sunday')
console.log(weekdays);
// remove item from start
weekdays.shift()
console.log(weekdays);

// to access each items
const fruits=['banana','apple','mango','orange','kivi']
// 1)for loop
for(i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }
console.log('another method:::::');
// another method
// 2) IN
for(let fruit in fruits)
    {
        console.log(fruits[fruit]);
    }
 console.log('another method:::::');
// 3) of
for(let i of fruits)
    {
        console.log(i);
    }


    // 5) sort
    var arr=[10,11,12,3,4,2]
    b=arr.sort((n1,n2)=>n1-n2)
    console.log(b);

    c=arr.sort((n1,n2)=>n2-n1)
    console.log(c);
