const fs = require('fs');
const transformStream = require('stream');
let filestream = fs.createReadStream(__dirname + "/input.txt");
let outputStream = process.stdout;

//readstream.pipe(writestream)
//stream flow of data you can read 
//lot of data chunk of data
// from a network we are cosuming a lot of data
// modifiying those data packets
// we need streams for that


let middleStream = new transformStream.Transform({
  transform(chunk, enc, nextCB){
   let modifiedChunk = chunk.toString().toUpperCase();
   this.push(modifiedChunk);
   
   setTimeout(nextCB, 1000);
  // nextCB();
  }
});
// filestream.pipe(outputStream); 
 let newReadableStream = filestream.pipe(middleStream)  
  newReadableStream.pipe(outputStream);