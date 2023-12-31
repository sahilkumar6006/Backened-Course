let x = 1;
if( x == 1) {
  x = 2;
  console.log(x);
}

console.log(x);


function fun(x, fn) {

  for(let i =0; i < x ; i++) {
    console.log(i);
  }

  fn();
}