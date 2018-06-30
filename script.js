var quote, author;

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
  var url = "https://talaikis.com/api/quotes/random/";
  $.getJSON(url, function(json) {
    quote = json.quote;
    author = json.author;
    $("#randomQuote").html(quote);
    $("#randomAuthor").html(author);
  });

  randomColorGen();
};

$("#getNewQuote").on("click", function(){
  $("h1").add("h5").fadeOut(2000);

  setTimeout(function() {
    randomQuoteGen();
    $("h1").add("h5").fadeIn(2000);
  }, 2000);
});

$("#tweet").on("click", function(){
  window.open("https://twitter.com/intent/tweet?related=freecodecamp&hashtags=quote&text=" + quote + " " + author);
});
