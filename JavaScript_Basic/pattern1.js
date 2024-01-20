let clargs = process.argv;
let n = parseInt(clargs[2]);

for(let i = 1; i <=  n; i++ ) {
  for(let j = 1; j  <= i; j++) {
    console.log("*");
  }
  console.log("\n")
}
