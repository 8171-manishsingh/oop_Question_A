 class sum
{
   add_multi_num(a,b,c,d,)
   {
    if(b==undefined&&c==undefined&&d==undefined)
    {
        document.writeln("define num minimum two num :")
    }
    else if(c==undefined&&d==undefined)
    {
        document.writeln("sum"+a+"and"+b+" "+a+b)
    }
    else if(d==undefined)
    {
        document.writeln(a+b+c)
    }else
    {
        document.writeln(a+b+c+d)
    }
   }
}

const m2 = new sum()
m2.add_multi_num(1,1,1,1)
