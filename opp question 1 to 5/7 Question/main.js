class student
{
    #precentage;

    precentage(precentage)
    {
        this.#precentage = precentage;
    }

    Display_precentage()
    {
        if(this.#precentage>=90 && this.#precentage<=100)
        {
            document.writeln("Grade = A ")
        }
        else if(this.#precentage>=80 && this.#precentage<=80)
            {
                document.writeln("Grade = b ")

            }
            else if(this.#precentage>=70 && this.#precentage<=79)
                {
                    document.writeln("Grade = c ")
    
                }
                else if(this.#precentage>=33 && this.#precentage<=69)
                    {
                        document.writeln("Grade = d ")
        
                    }
                    else
                    {
                        document.writeln("Fail")
                    }
    }
}

const p1 = new student()

let output = prompt("Enter the Number ")

output = parseInt(output);

p1.precentage(output);
p1.Display_precentage();