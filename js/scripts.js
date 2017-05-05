var userInput = parseInt(prompt("please input a number"));

var countCondition = userInput;

var output = [];

var pingPong = function (countCondition) {
  for(i = 1; i <= countCondition ; i +=1) {

    if(i <= countCondition) {

      if(i % 15 === 0) {
        output.push("ping-pong!");
  
      }

      else if((i % 3 === 0) && (i % 15 !== 0)) {
        output.push("ping!");

      }

      else if((i % 5 === 0) && (i % 15 !== 0)) {
        output.push("pong!")

      }

      else { output.push(i); }
    }
  }
}


// $(function() {
//   $("ul")append("li").output();
// })
