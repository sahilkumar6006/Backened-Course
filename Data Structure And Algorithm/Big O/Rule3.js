let boxes = ['a', 'b','c','d', 'e'];
let boxes2 = ['f', 'g','h','i', 'j'];


function find(boxes1, boxes2) {
  boxes1.forEach(function(boxes){
    console.log(boxes);
  });


  boxes2.forEach(function(boxes2) {
    console.log(boxes2);
  })
}

find(boxes, boxes2)