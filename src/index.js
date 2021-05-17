//3rd rule: Different terms for inputs

//in this function we have two inputs
function compressBoxesTwice(boxes, boxes2) {
  //This loop has more than one input and loops over the second loop
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  //This loops the sec input that could be having only 1 item
  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

//The answer to this Big O Notation is, O(a + b), a and b being 2 different inputs

//if the loop were to be nested the BigO would have been so, =(a * b). Rule of thumb
//anything that happens on the same indentation we add and anything nested an indentation within
//an indentation we Multiply
