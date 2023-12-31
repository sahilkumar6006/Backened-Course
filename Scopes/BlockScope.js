let x = 10;
if(x >= 10) {
  x = x+1;
  console.log(x);
}

// Let Var Const 
//Var whenever we use a var anywhere inside a function , the variable gets functional scope
//const is also block scope
//difference is it= doen't allow reassignem
const y =10;
y = 20;
console.log(y);