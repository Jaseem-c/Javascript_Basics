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
for(item of employee)
    {
        console.log(item[1]);
    }
console.log('...................');
//print total numbers of employee
console.log('total number of employee:',employee.length);
console.log('...................');
//print developer employee details
console.log('developer employee details:');
for(item of employee)
    {
        if(item[2]=='developer')
            {
                console.log(item);
            }
    }
console.log('...................');
//print employee whose salary > 30000
console.log('employee whose salary > 30000:');
for(item of employee)
    {
        if(item[4]>30000)
            {
                console.log(item[1]);
            }
    }
console.log('...................');
// print details of employee Laisha
console.log('details of employee Laisha:');
for(item of employee)
    {
        if(item[1]=='Laisha')
            {
                console.log(item);
            }
    }
console.log('...................');
//arrange employee based on their salary in descending order
console.log('employee based on their salary in descending order');
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal);

// print their names only
// for(emp of sal)
//     {
//         console.log(emp[1]);
//     }
console.log('...................');
//arrange employee based on their experience in ascending order
console.log('employee based on their experience in ascending order');
exp=employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(exp);
console.log('...................');
// print the employ name whose have the higest salary
highestsal=0;
highemp=''
for(emp of employee)
    {
        if(emp[4]>highestsal)
            {
                highestsal=emp[4]
                highemp=emp[1]

            }
    }
    console.log(highestsal);
    console.log(highemp);
    console.log('another method:');
    console.log('highest salary employee:',employee[8][1]);


