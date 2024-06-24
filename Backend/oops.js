//  [1000,'Neel','developer','kochi',25000,3],

class employee{

    // property
    empid
    empname
    empdesg
    empplace
    // constructor
    constructor(id,name,desg,place){
        this.empid=id
        this.empname=name
        this.empdesg=desg
        this.empplace=place
    }
    // methods
    display(){
        console.log(`employee name is ${this.empname}`);
    }
}

const obj=new employee(1000,'neeel','developer','kochi')

obj.display()


// student

class students {
    studid
    studname
    studclass
    studdiv

    constructor(id,name,clas,div){
        this.studid=id
        this.studname=name
        this.studclass=clas
        this.studdiv=div
        this.display()
    }

    display(){
        console.log('student details:');
        console.log('id:',this.studid);
        console.log('name:',this.studname);
        console.log('class:',this.studclass);
        console.log('div',this.studdiv);
    }
}

const obj1=new students(1,'jaseem',8,'A')
const obj2=new students(2,'adarsh',9,'B')
const obj3=new students(3,'fathima',7,'B')

// obj1.display()
// obj2.display()
// obj3.display()