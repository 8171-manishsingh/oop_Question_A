class Animal
{
    #Name;
    #Age;
    #Type;
    #Gender;
       

    Animal_Details(Name,Age,Type,Gender)
    {
        this.#Name= Name;
        this.#Age = Age;
        this.#Type = Type;
        this.#Gender = Gender;
    }
    display()
    {
         document.writeln("Name :-"+this.#Name+ "<br>")
         document.writeln("Age :-" +this.#Age+ "<br>")
         document.writeln("Type :-" +this.#Type+ "<br>")
         document.writeln("Gender :-" +this.#Gender+ "<br>")

    }
}

const p1 = new Animal()
p1.Animal_Details("lovely",17 ,"cat","Female");
p1.display();
document.writeln("<hr>")


const p2= new Animal()
p2.Animal_Details("lovely",13 ,"cat","Female");
p2.display();

document.writeln("<hr>")

const p3 = new Animal()
p3.Animal_Details("lovely",18 ,"cat","Female");
p3.display();

document.writeln("<hr>")

const p4 = new Animal()
p4.Animal_Details("lovely",20 ,"cat","Female");
p4.display();