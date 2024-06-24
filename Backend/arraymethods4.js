// indexOf()
fruits=['pineapple','apple','mango','orange','mango']
console.log(fruits.indexOf('mango'));
console.log(fruits.lastIndexOf('mango'));
// splice()
a=['manu','rani','max','mani']
// remove rani from the array
console.log(a);
a.splice(1,1)
console.log(a);
// add dhoni to second position
a.splice(1,0,'dhoni')
console.log(a);
// remove dhoni and add miller
a.splice(1,1,'miller')
console.log(a);
// add ken as the third item
a.splice(2,0,'ken')
console.log(a);
console.log('..................................');


// slice()
b=['manu','rani','max','mani','babu','hari']
console.log(b);
c=b.slice(1,4)
console.log(c);
d=b.slice(3)
console.log(d);