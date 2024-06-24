//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(element => {
    console.log(element[1]);
});
console.log('............................');
//2. display product whose price < Rs.50
products.filter(item=>item[2]<50).forEach(element=>{console.log(element[1]);})
console.log('............................');
//3. print price of oreo
products.filter(item=>item[1]=='oreo').forEach(element=>{console.log(element[2]);})
console.log('............................');
//4. print costly product name
costly=products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(costly[1]);
console.log('............................');
//5. display out of stock product
products.filter(item=>item[3]==0).forEach(element=>{console.log(element[1]);})
console.log('............................');
//6. sort products based on stock in decsending order
products.sort((n1,n2)=>n2[3]-n1[3]).forEach(element=>{console.log(element[1]);})
console.log('............................');
//7. print product having maximum available stock
maxstock=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(maxstock[1]);
console.log('............................');
//8. is there any product can be purchased by Rs. 10
p=products.some(item=>item[2]<=10)
console.log(p);
console.log('............................');
//9. Is there any product in the range of 10 to 30
a=products.some(item=>item[2]>=10 && item[2]<=30)
console.log(a);
console.log('............................');
//10. print all products in the range of 10 to 30
c=products.filter(item=>item[2]>=10 && item[2]<=30).forEach(element=>{console.log(element[1])})
