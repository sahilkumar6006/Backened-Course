const express = require('express');

//we got access to express functon

const app = express();

//app is a new express application object
// 1. using the app object, bind it to 
// port u want  for server  to listen for  socket connection

app.get('/home', (request , response) => {
  console.log("ping received");
  response.json({message: 'PING received'});
}); 

app.listen( 3000, () => {
  console.log(`Example app is listening on port `);
});