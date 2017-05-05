var balls = [];

var pingPong = function(countCondition) {
  for(i = 1; i <= countCondition ; i +=1) {

    if(i <= countCondition) {

      if(i % 15 === 0) {
        balls.push("ping-pong!");

      }

      else if((i % 3 === 0) && (i % 15 !== 0)) {
        balls.push("ping!");

      }

      else if((i % 5 === 0) && (i % 15 !== 0)) {
        balls.push("pong!")

      }

      else { balls.push(i); }

    }
  }
}

$(function() {

  $("#inputForm").submit(function(event) { debugger;

    var userInput = $("#input").val();

    var currentNumber = parseInt(userInput);

    pingPong(currentNumber);

    alert(currentGame);
    // currentGame.forEach(function(currentGame) {
    //   $("ul").text.append("<li>" + currentGame + "</li>");
    // });

    event.preventDefault();
  });
});
