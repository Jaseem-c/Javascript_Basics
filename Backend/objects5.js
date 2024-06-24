products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach(pro => {
    console.log(pro.pName); 
});
console.log('...............................');
//2. print all mobile details whose display is lcd
products.filter(pro=>pro.display=='lcd').forEach(item=>{console.log(item.pName)})
console.log('...............................');
//3. print 5g mobile phone name
products.filter(pro=>pro.band=='5g').forEach(item=>{console.log(item.pName);})
console.log('...............................');
//4. sort mobile based on price
rate=products.sort((n1,n2)=>n1.price-n2.price).forEach(item=>{console.log(item.pName)})
console.log('...............................');
//5. print costly mobile
s=products.reduce((n1,n2)=>n1.price>n2.price?n1:n2)
console.log(s.pName);
console.log('...............................');
//6. print low cost mobile
l=products.reduce((n1,n2)=>n1.price<n2.price?n1:n2)
console.log(l.pName);
console.log('...............................');