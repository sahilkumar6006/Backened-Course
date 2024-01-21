let boxes = ['a', 'b','c','d', 'e'];

// function nested(boxes) {
//   for(let i =0; i < boxes.length; i++) {
//     for(let j =0; j < boxes.length; j++) {
//       console.log(boxes[i], boxes[j]);
//     }
//   }
// }


// nested(boxes)

//o(n^ 2)

function nested(boxes) {
  boxes.forEach(function(el) {
 
    boxes.forEach(function(k) {
      console.log(el, k);
    });
  });
}

nested(boxes);