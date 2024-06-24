student={
    studid:10,
    studname:"sai",
    studclass:10,
}

console.log(student);
console.log(student['studname']);
student['studdiv']='D'
console.log(student);
student['fees']=1000
console.log(student);
student['fees']+=2000
console.log(student);
delete student.studdiv
console.log(student);

for(key in student)
    {
        console.log(key);
    }
for(key in student)
    {
        console.log(student[key]);
    }