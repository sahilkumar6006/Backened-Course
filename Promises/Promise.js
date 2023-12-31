const p = new Promise((resolve, reject) => {
  resolve("promise resolved");
});


//always return a promise

async function getData(){
  return p;
}

console.log(getData());

const dataPromise  = getData();
dataPromise.then((res) => console.log(res));
getData();