let number = 23;

let isPrime = true;

if( number > 1) {
  for(let i = 0; i < number; i++) {
    if(number %  i == 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime == true) {
    console.log(' isprime' );
  }else {
    console.log(" isnotPrime");
  }
}

