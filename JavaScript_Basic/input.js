let args = process.argv;
let n = parseInt(args[2]);
let flag = true;

for(let i = 2; i * i < n; i++) {
    if(n % i == 0) {
      flag =false;
      break;
    }
}

if(flag == true) {
  console.log("number is prime");
}else {
  console.log("number is not prime")
}