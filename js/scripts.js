var userInput ;

var countCondition = userInput;

var game = [];

var pingPong = function (countCondition) {
  for(i = 1; i <= countCondition ; i +=1) {

    if(i <= countCondition) {

      if(i % 15 === 0) {
        game.push("ping-pong!");

      }

      else if((i % 3 === 0) && (i % 15 !== 0)) {
        game.push("ping!");

      }

      else if((i % 5 === 0) && (i % 15 !== 0)) {
        game.push("pong!")

      }

      else { game.push(i); }
    }
  }
}

$(function() {

  $("#inputForm").submit(function(event) {

    userInput = $("#input").val();

    game = pingPong(countCondition)

    game.forEach(function(game) {
      $("ul").append("<li>"game"</li>");
    });

    event.preventDefault();
  })
})
