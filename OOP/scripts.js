function Person(fullName, favColor){
  this.name = fullName;
  this.favColor = favColor;
  this.greet = function(){
    console.log("Hello there! I am " + this.name + " and my favourite colour is " + this.favColor + ".");
  }
}

var john = new Person("John Doe", "Green");
john.greet();

var jane = new Person("Jane Smith", "Blue");
jane.greet();
