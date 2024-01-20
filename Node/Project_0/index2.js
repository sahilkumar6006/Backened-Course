const axios = require('axios');
  const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
  let resp = axios.getAdapter(url);
  console.log(resp);
  
  
  // async function getData() {
    
  //   const response = await fetch(url);
  //   const jsonResponse = await response.json();
  //   console.log(jsonResponse);

  // }
  // getData();

