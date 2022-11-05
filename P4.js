class amr
{
    a=null
    b=null
    c=null
    by(t,y)
    {
        this.a=t
        this.b=y

    }
    hello() // default function
    {
        this.c=this.a+this.b
    }
    test(a,b) // parameter function(formal) or argument
    {
        console.log("Sum is: "+this.c)
    }
}
const chd=new amr()
chd.by(67,4)
chd.hello()
chd.test()
