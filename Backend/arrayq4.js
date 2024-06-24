//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log('employee names:');
employee.forEach(element => {
    console.log(element[1]);
});

console.log('...................');
//print total numbers of employee
console.log('total number of employee:',employee.length);
console.log('...................');
//print developer employee details
console.log('developer employee details:');
employee.filter(item=>item[2]=='developer').forEach(element=>console.log(element))
console.log('...................');
//print employee whose salary > 30000
console.log('employee whose salary > 30000:');
b=employee.filter(item=>item[4]>30000).forEach(element=>{console.log(element[1]);})
console.log('...................');
// print details of employee Laisha
console.log('details of employee Laisha:');
c=employee.find(item=>item[1]=='Laisha')
console.log(c);
console.log('...................');
// //arrange employee based on their salary in descending order
 console.log('employee based on their salary in descending order');
 console.log('employee based on their salary in descending order');
 sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
 console.log(sal);
 console.log('...................');
// //arrange employee based on their experience in ascending order
// console.log('employee based on their experience in ascending order');

// console.log('...................');
// print the employ name whose have the higest salary
// console.log(employee);
d=employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)
console.log(d[1]);
console.log('...................');
// print empoyee with lowest salary
d=employee.reduce((n1,n2)=>n1[4]<n2[4]?n1:n2)
console.log(d[1]);
console.log('...................');

// print total salary
e=employee.map(item=>item[4]).reduce((n1,n2)=>n1+n2)
console.log(e);



