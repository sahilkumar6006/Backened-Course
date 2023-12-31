let name ={
 firstname: "Sahl",
 lastname: "Kumar",
 printFullName: function() {
  console.log(this.firstname + " " + this.lastname);
 } 
}

name.printFullName();


let name2 ={
  firstname : "Sachin",
  lastname: "Tendulkar"
}



//function borrowing 
name.printFullName.call(name2);