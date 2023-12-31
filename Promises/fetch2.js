const API_URl = "";

async function handlePromise() {
  const data = await fetch(API_URl);
const json =  await data.json();

console.log(json);

}

handlePromise().catch((err) => console.log(err));