const API_URl = " ";
async function handlePromise(){
  try {
    const data = await fetch(API_URl) ;
    const jsonVal = await data.json();
    console.log(jsonVal);
  } catch(err) {
    console.log(err);
  }

}

handlePromise();