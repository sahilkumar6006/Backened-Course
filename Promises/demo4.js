const p = new Promise((resolve, reject) =>{
  setTimeout(()=> {
    resolve(
    "Promise Resolve Value"
    )
  } , 3000);
})

async function handlePromise() {
  console.log("Hello World");
  const val = await p;
  console.log("Namaste javaScript");
  console.log(val);
}

handlePromise();