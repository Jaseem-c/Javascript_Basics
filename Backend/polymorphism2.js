// method overriding
class a{
    methoda(){
        console.log('inside method first method');
    }
    methoda(){
        console.log('inside the second method');
    }
}
const obj=new a()
obj.methoda()