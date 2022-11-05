class amr
{
    hello() // default function
    {
        console.log("My name is Amritpal Singh ")
    }
    test(a,b) // parameter function(formal) or argument
    {
        this.hello()
        var c=a+b
        console.log("Sum is: "+c)
    }
}
const chd=new amr()
chd.test(12,23)