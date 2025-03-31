// 

class collage {

    #name;
    #year;

    collage_info(name , year){

        this.#name = name;
        this.#year = year;
    }

    display(){

        document.writeln(" collage Name "+" = " + this.#name + "<br>");
        document.writeln("Year : "+" = " + this.#year + "<br>");
    }
        
}

class Student extends collage {

    #student_name;
    #std;

    Student_info(student_name,std){

        this.#student_name = student_name;
        this.#std =std;
    
    }

    display(){

        super.display()
        document.writeln("Name of student "+" = " + this.#student_name  + "<br>");
        document.writeln("std "+" = " + this.#std + "<br>");

    }

}

const m2 = new Student();
m2.collage_info("R&w" , 2008  );
m2.Student_info("lalu singh" ,12+"yr");
m2.display();
