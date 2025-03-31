
 
class Bihar{
    AdharNo; 
    birthPlace;
    constructor(adharNo , birthPlace){

        this.adharNo = adharNo ;
        this.birthPlace = birthPlace;
    }

    display_Bihar(){

        document.writeln("Adhar card No.  :" + this.adharNo +  "<br>") ;
        document.writeln("Birth place : " + this.birthPlace + "<br>");
    }

}


class Person extends Bihar {

    constructor(adharNo,birthPlace,name,age,gender){

        super(adharNo,birthPlace)

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    display_person(){

        super.display_Bihar();
        document.writeln("Name : "+ this.name  + "<br>");
        document.writeln("Age : "+ this.age  + "<br>");
        document.writeln("Gender : "+ this.gender  + "<br>");
    }

}


class Employee extends Person {

    constructor(adharNo,birthPlace,name,age,gender,id,salary,role){

        super(adharNo,birthPlace,name,age,gender)
        this.id = id;
        this.salary = salary;
        this.role = role;

    }

    Display_Employee(){

        super.display_person();
        document.writeln("Id no.   : "+ this.id  + "<br>");
        document.writeln("Salary : "+ this.salary  + "<br>");
        document.writeln("Role  : "+ this.role  + "<br>");
    }
}


const info = new Employee(854796284523 , "Bihar" , "Prince" , 84 , "Male" , 1999 , "$"+71500 ,"SI")

document.writeln( "<hr>")
info.display_Bihar();

document.writeln("<hr>")
info.display_person();

document.writeln("<hr>")
info.Display_Employee();
document.writeln("<hr>")
