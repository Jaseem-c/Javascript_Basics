class sample{
    methoda(){
        console.log('inside method a');
    }
    methoda(num){
        console.log(`inside method a with arguments ${num}`);
    }
    methoda(n1,n2){
        console.log(`inside method a with arguments ${n1},${n2}`);
    }
}
const obj=new sample()
obj.methoda()
obj.methoda(5)

// js doesn't support method overloading
// rest operator 

class ex{
    add(...arg){
        console.log(arg);
        let sum = arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);
    }
}

const obj1=new ex()
obj1.add(1,2,3)