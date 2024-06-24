expense=[12000,50000,25000,55000,60000,1000,10000]
// find highest expense
// find lowest expense
// find the total expense

// 1)
highest=expense[0]
for(let exp of expense)
    {
         if(highest<exp)
            {
                highest=exp;
            }
    }
    console.log(highest);

// 2)
lowest=expense[0]
for(i=0;i<expense.length;i++)
    {
        if (lowest>expense[i])
            {
                lowest=expense[i]
            }
    }
    console.log(lowest);

// 3)
sum=0
for(let exp of expense)
    {
    sum=sum+exp;
    }
console.log(sum);
console.log('.........................');

// next question
var arr=[10,11,12,3,2,4]
// check whether 2 is present in the array or not
// number=true
// for(let num of arr)
//     {
//         if(num==2)
//             {
//                 number=false
//                 break;
//             }
//     }
// if(number)
//     {
//         console.log('not present');
//     }
//     else
//     {
//         console.log('present');
//     }

count=0
for(let num of arr)
    {
        if(num==2)
            {
                count++;
                break;
            }
    }
if(count==0)
    {
        console.log('not present');
    }
    else
    {
        console.log('present');
    }('.........................')
console.log

// next
a=[4,5,6]
// o/p arr=[11,10,9]

// 4+5=9
// 5+5=10
// 6+5=11

b=[]
for(let i of a)
    {
        i=i+5
        b.unshift(i)
    }
console.log(b);
console.log('.........................')
console.log('another method');

// sum=15
// 15-4=11
// 15-10
sum=0
c=[]
for(let num of a){
    sum=num+sum
}
for(let num of a){
   c.push(sum-num)
}
console.log(c);
console.log('.........................')