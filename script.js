$(document).ready(function() {
  var randomQuote, author;

  //show elements when page loads
  $("body").addClass("load");

  function randomColorGen() {
    var str = "0123456789ABCDEF".split("");
    var colors = "#";
    for (var i = 0; i < 6; i++) {
      var rand = Math.floor(Math.random() * str.length);
      colors += str[rand];
    };

    /*the 3 statements below have to be inside randomColorGen() since "colors"
    var will be outside the function scope & thus unreachable; declaring var
    colors outside randomColorGen() then referencing colors below did not work;*/
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

    //now change the h1 and h5 elements using .html
    $("h1").html(randomQuote);
    $("h5").html(author);

    /*since we call randomQuoteGen() immediately after page loads by assigning
    it to window.onload below, all we have to do to make the randomColorGen()
    function run onload is to call it inside this randomQuoteGen() function*/
    randomColorGen();
  };

  /*run randomQuoteGen() onload so that a different quote is generated at random
  after page loads; note that onload seems to work wherever you run it! i ran
  onload above function randomQuoteGen(), & it still worked; refreshing the page
  generated a new, random quote each time :)*/
  window.onload = randomQuoteGen();

  $("#getNewQuote").on("click", function(){
    //on click, fadeOut current quote and owner of quote (note: .add is a nice way of making additional elements fade at the same time)
    $("h1").add("h5").fadeOut(2000);

    setTimeout(function() {
      /*call randomQuoteGen() within this timeout function so that the change of
      quotes "sync" with the change of background and text colors; if called
      outside of this, you'll notice the quote change quickly, followed by the
      change in colors*/
      randomQuoteGen();

      //fadeIn new random quote
      $("h1").add("h5").fadeIn(2000);
    }, 2000);
  });

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?related=freecodecamp&hashtags=quote&text=" + randomQuote + " " + author);
  });
});

/*-------------------CREDITS-------------------*/
/*
Successfully Reverse Engineered by Kent after countless hours of hair-pulling trial and error. Thanks to the folks at FCC (Deigo Mayer @Chrono79 for helping me with the change of background colors and Jared Abel @jaredabel for helping me with the setTimeout function), Stackoverflow, and a big thanks to Dylan C. Israel @CodingTutorials360 of youtube for the easy to understand twitter button. WHAT A GENIUS! Lastly, I learned so much through this one project alone! Thanks FCC!
*/
