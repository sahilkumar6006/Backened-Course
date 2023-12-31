const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value !");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value !");
  }, 40000);
});



async function handlePromise() {
  console.log("Hello World");

  const val = await p1;
  console.log("Namaste javascript 1");
  console.log(val);


  const val2 = await p2;
  console.log("Namaste javascript 2");
  console.log(val2);
}

handlePromise(); 