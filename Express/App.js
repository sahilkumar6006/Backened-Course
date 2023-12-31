const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from sahil");
});

app.get('/about', (req, res) => {
  res.send(
  "we create our react app"
  )
})


app.listen(3000, () => console.log("port is running at 3000"));