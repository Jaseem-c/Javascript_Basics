// class inheritance
class A{
  methoda(){
    console.log('inside method a');
  }
}

class B extends A{
    methodb(){
console.log('inside method b');
    }
}

const obj=new B()
obj.methodb()
obj.methoda()
console.log('...............');

// object inheritance

balano={
    manufaturer:'maruthi',
    model:'hatch back',
    varient:['manual','automatic']
}

glanza={
    manufaturer:'maruthi',
}
glanza.__proto__=balano
console.log(glanza.manufaturer);
console.log(glanza.model);
console.log('.................');
// multilevel inheritance

class Aa{
    methoda(){
      console.log('inside method a');
    }
  }
  
  class Bb extends A{
      methodb(){
  console.log('inside method b');
      }
  }

  class Cc extends B{
    methodc(){
        console.log('inside method c');
    }
  }

  const obj1=new Cc()
  obj1.methodc()
  obj1.methodb()
  obj1.methoda()
