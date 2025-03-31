// / wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// // and get for atleast 3 objects/employee.

class employee
{
    persone(Name,salary,id,Role)
    {
    document.writeln(" Name :-" + Name +"<br>")
    document.writeln("Salary :-" +salary+ "<br>")
    document.writeln("ID NO;- "  +id+ "<br>")
    document.writeln("Role :-" +Role+ "<br>")
    }

}

const p1 = new employee();
const p2 = new employee();
const p3 = new employee();
document.writeln(" <hr><br>")

  p1.persone("manish Das" ,85000,2541,"web developer ")
  document.writeln(" <hr><br>")
  p2.persone("Ajeet Yadav" ,75000,2501,"web developer ")
  document.writeln(" <hr><br>")
  p2.persone("Ankit Yadav" ,65000,2401,"web developer ")
  document.writeln(" <hr><br>")
