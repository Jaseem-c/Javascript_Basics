//[id, name, designation, location, salary, experience]
//  [1000,'Neel','developer','kochi',25000,3],
// objects-key value pairs-more clarity

employee ={
    empid:1000,
    empname:'neel',
    empdesg:'developer',
    empplace:'kochi',
    empsal:25000,
}
console.log(employee);
// print neel
console.log(employee['empname']);
// developer
console.log(employee['empdesg']);
// another way to print
console.log(employee.empsal);
// to add data
employee['empexp']=3
console.log(employee);
// to update data
employee['empexp']+=2
console.log(employee);
employee['empname']='max'
console.log(employee);
// to delete data
delete employee.empexp
console.log(employee);

// data type
console.log(typeof(employee));
// to print all keys
for(key in employee)
    {
        console.log(key);
    }
// display all values
for(key in employee)
    {
        console.log(employee[key]);
    }
 