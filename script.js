$(document).ready(function() {
  var randomQuote, author;

  $("body").addClass("load");

  function randomColorGen() {
    var str = "0123456789ABCDEF".split("");
    var colors = "#";
    for (var i = 0; i < 6; i++) {
      var rand = Math.floor(Math.random() * str.length);
      colors += str[rand];
    };

    $("body").animate({backgroundColor: colors}, 1000);
    $("button").add("#tweet").animate({backgroundColor: colors}, 1000);
    $("h1").add("h5").css("color", colors);
  };

  function randomQuoteGen() {
    var quoteArr = ["here is the new quote", "dude, how'd i get here?", "this quote machine is wierd", "why did you bring me here?", "this quote machine is kinda neat!", "don't mind me, bro. i'm just testing out a brand new quote to see how this container adjusts to a lengthy sentence."];
    var authorArr = ['- howdy richardson', '- mike mike', '- jules', '- batman', '- sorta', '- johnny'];
    var randomNum = Math.floor(Math.random() * quoteArr.length);
    randomQuote = quoteArr[randomNum];
    author = authorArr[randomNum];

    $("h1").html(randomQuote);
    $("h5").html(author);

    randomColorGen();
  };

  window.onload = randomQuoteGen();

  $("#getNewQuote").on("click", function(){
    $("h1").add("h5").fadeOut(2000);

    setTimeout(function() {
      randomQuoteGen();
      $("h1").add("h5").fadeIn(2000);
    }, 2000);
  });

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?related=freecodecamp&hashtags=quote&text=" + randomQuote + " " + author);
  });
});
