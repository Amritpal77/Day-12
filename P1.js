/*
***********OOPS:::::------***************
It is an abstraction based on real world entity.
->Abstraction:::-----Private, Public, Protected
->Entity::--Any Object
OOPs Concept::--
1. Class
2. Reusbility
3. Encapsulation
4. Inheritance
5. Polymorphisim
6. Message Passing 

1. Class::--Collection of data members, member function. A object is called class.
->DataMember::--Data type(NUmber, String, Decimal etc)
->Member function::-- Set of block of statements
->Object:- instance of class.
OR
Blue print of class is called Object.
*/
class amr
{
    hello() // default function
    {
        console.log("My name is amritpal Singh ")
    }
    test(a,b) // parameter function(formal) or argument
    {
        var c=a+b
        console.log("Sum is: "+c)
    }
    how()
    {
        var k=12-3
        return k
    }
}
class one
{
    testing()
    {
        console.log("I am a testing function of class one")
    }
}
const chd=new amr()  // chd is an object
                   //new is a keyword which is used to initilize your memory
                    // amr() is a constructor which is used for initilized
                    //class data member, member function, & object
//  chd.hello()        // . is a calling operator
//chd.test(12,3)
//var ans=chd.how()
//console.log("Your result is: "+ans)
const pawan=new one()
//pawan.testing()
module.exports={chd,pawan} 