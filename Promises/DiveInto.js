const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value !");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello World");

  const val = await p;
  console.log("Namaste javascript 1");
  console.log(val);


  const val2 = await p;
  console.log("Namaste javascript 2");
  console.log(val2);
}

handlePromise();