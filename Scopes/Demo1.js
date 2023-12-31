// In simple words scope is the simply where to look for 
// is the variable and function
// there are three types of scope in js
//Global scope
//Functional scope 
//block

//Global Scope Demo.js

var name = "sahil";
function greet() {
  console.log("Hello" , name);

}

function fun() {
  console.log("have fun! " , name);
}

greet();
fun();