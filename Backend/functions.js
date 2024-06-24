// write a function to find sum of two numbers

function sum(num1, num2) {
    result = num1 + num2;
    console.log(`sum of two given numbers is ${result}`);
}
sum(3, 2)
console.log("--------------completed------------ ");
// functional hoisting is  possible , not possible on arrow functions
// variable inside a function have functional scope
// for outside access -return
// return statement is the last statement of a function
function sum(num1, num2) {
    console.log("pgm end");
    return result = num1 + num2;
}
console.log(sum(3, 2));
console.log("--------------completed------------ ");

// write a program to find cube of a number using function
// function cube(num)
// {
//     return result=num*num*num;
// }
// console.log(cube(3));

function cube(num) {
    result = num ** 3;
    console.log(`cube is ${result}`);
}
cube(3)
console.log("--------------completed------------ ");

// w.a.p to check a given number is odd or even
function number(num) {
    if (num % 2 == 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
    //  return num%2==0?'even':'odd'
}
number(3)
// console.log(number(6));
console.log("--------------completed------------");

// arrrow function
// javascript latest version- ES6
// two parts fn definition and fn call
// const variable =()=>{}

// find sum of two given numbers 
const summ = (num1, num2) => {
    result = num1 + num2;
    console.log(`sum is ${result}`);
}

summ(3, 5)
console.log("--------------completed------------");

// write a program to find square of a number using arrow function
const sqaure = (num) => {
    sq = num ** 2;
    console.log(`square- ${sq}`);
}
sqaure(3)
console.log("--------------completed------------");

// call back function
function greet(name, callback) {
    console.log(`name is ${name}`);
    callback()
}

function callme() {
    console.log('call inside the call back function');
}
greet('peter', callme)
console.log("--------------completed------------");




function greet(num1, num2, num3) {
    result = num1 + num2 + callme(num3) // 3+4+ (5+3) =15
    console.log(result);
}

function callme(num) {
    return num + 3
}
greet(3, 4, 5)
console.log("--------------completed------------");

// nested functions
// closure stratgey
const global='global'
const parent = () => {
    let parentvariable = 'parent'
    console.log('inside a parent function');
    console.log('parent variable is ', parentvariable);
    console.log(global);

    child = () => {
        let childvariable = 'child'
        console.log('inside the child function');
        console.log('child variable is ', childvariable);
        console.log(global);
    }
    child()
}

parent()
console.log("--------------completed------------");

// asynchronous function   

function add(num1,num2,num3)
{
result=num1+num2+num3;
console.log(result);
setTimeout(() => {
    console.log('task completed');
}, 5000);
}

add(2,3,5)
