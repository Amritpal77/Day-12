/*
******Constructor****
It is automatically calledd when you create a class object.
It cannot return a value
Constructor has a same name as class name
It is  used for initilized your class data member, member function, and object.
-------Types of Constructors:---
1. Default constructor:-- A constructor which has no parameter(arguments) is called default  
constructor
2. Parameter constructor:--A constructor which has no parameter(arguments) is called parameter  
constructor
*/
class abc
{
    c=null
    constructor(a,b)
    {
        this.c=a+b
    }
    hi()
    {
        console.log("Sum is: "+this.c)
    }
}
const chd=new abc(12,4)
chd.hi()