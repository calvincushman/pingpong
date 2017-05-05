var userInput = parseInt(prompt("please input a number"));

var countCondition = userInput;

var output = [];

for(i = 1; i <= countCondition ; i +=1) {

  if(i <= userInput) {

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

  alert(output)
  }
}

// $(function() {
//   $("ul")append("li").output();
// })
