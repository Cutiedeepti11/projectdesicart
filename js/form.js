class Form{
    constructor(){
        this.title= createElement("h1");
        this.register=createElement("h3");
        this.Signin=createElement("h3");

        this.rname =createInput("Name");
        this.rphone =createInput("Phone")
}
display()
{
    this.title.html("DESI CART")
    this.title.position(windowWidth/2-50,20);
 
    this.register.html("Register")
    this.register.position(windowWidth/6,150)

    this.Signin.html("Sign in")
    this.Signin.position(windowWidth-300,150)

    var a = createElement("h5");
    a.position(200,230);
    a.html("Name: ")
    this.rname.position(300,250);
    var b = createElement("h5");
    b.position(200,330);
    b.html("Phone: ")
    this.rphone.position(300,350);

    
}
}