let name = {
  firstname: "Sahil",
  lastname: "Kumar",
}

let printFullName = function(hometown) {
  console.log(this.firstname + " " + this.lastname  + "from" + hometown);
}

printFullName.call(name , "jammu");

let name2 = {
  firstname : "sachin",
  lastname: "Tendulkar"
}

printFullName.apply(name2 , ["Maharashtra"]);


//bind method
//it gives you a copy 

let printmyName = printFullName.bind(name2, "Mumbai", "Maharastra");
console.log(printmyName);

printmyName();

//call method is used to invoke the function directly by passing
// the refrence which point to the this variable in the method

//apply is exactly same as the call method the only difference
// the only difference is that it takes 2nd arugement as an arraylist  of the parmeter
// which need to passed to function

// bind method does not invoke the method  but it gives you the copy
// of the exactly same method which can be invoked later

