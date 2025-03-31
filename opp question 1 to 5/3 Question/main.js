class student
{
    #Name;
    #Age;
    #Roll_No;
    #std;
    #precentage;

constructor(Name,Age,Roll_No,std,Precentage)
{
    this.#Name=Name;
    this.#Age =Age;
    this.#Roll_No =Roll_No;
    this.#std = std;
    this.#precentage =this.#precentage;

}
    display()
    {
        document.writeln("Name :"+ this.#Name+ "<br>")
        document.writeln("Age :"+ this.#Age+ "<br>")
        document.writeln("Roll number :"+ this.#Roll_No+ "<br>")
        document.writeln("std :"+ this.#std+ "<br>")
        document.writeln("precentage :"+ this.#precentage+ "<br>")

    }


}
document.writeln("<hr>")
const m1 = new student("Aryan",14,101,"",8,"th",60.24);
m1.display()
document.writeln("<hr>")

const m3 =new student("Raja",15,108+"",7,"th",50.24);
m3.display();
document.writeln("<hr>")

const m4 = new student("Anjali",12,1010+"",12,"th",75.24);
m4.display();
document.writeln("<hr>")
