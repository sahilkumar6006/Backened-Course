const p = new Promise((resolve, reject) =>{
  setTimeout(()=> {
    resolve(
    "Promise Resolve Value"
    )
  } , 3000);
})


function getData() {
  p.then((res) => console.log(res));
  console.log("Namaste React");
}

getData();