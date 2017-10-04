 //Variables//

var wins = 0;
var loses = 0;
var counter = 0;

        var randomNum;

        // This will generate a random variable between 19 and 120 //

function randomIntFromInterval(min,max) {
    randomNum = Math.floor(Math.random()*(max-min+1)+min);
//    $(".crystals").append("div class=")

}

    // Calling the function above and setting a min/max. //

      randomIntFromInterval(19,120);
      $("#internal").append(randomNum)

    // This is an array that has 4 variables to choose from. I didn't know how to create a random variable like above to give each image a different number. //

    var numberOptions = [1, 2, 3, 4,];

    // For loop used to assign numbers //

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    // Each crystal is give an image property. I couldbt figure out how to assign different images to a property. //
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image. I have 4 crystals saved but I wasn't able to get the crystals to open. It would always open the last crystal. //
   imageCrystal.attr("src", "Assets/1.jpg");

    // Each imageCrystal is given a data attribute called data-crystalValue. //
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

   // Crystal image (with all it classes and attributes) will get added to the page. //
    $("#crystals").append(imageCrystal);
  }

    // Click element that applies to each image. //
  $(".crystal-image").on("click", function() {

    // Assigns crystal value to each image. //
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable. //
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged. //
    $("#total-score").html("Your Score is " + counter);

    // If the counter amount is equal to random number generated, add 1 point to the score.//
    if (counter === randomNum) {
        wins++;
      $("#counter").html("Wins: " + wins);

    // Generate a random number and append to random number field. //

    //*****Couldn't figure out how to clear the numbers that have already been selected. ******//
        randomIntFromInterval(19,120);
      $("#internal").append(randomNum);
    }

    // If the counter has an amount higher than the random number, add a loss to the count. //
    else if (counter >= randomNum) {
        loses ++;
      $("#counter").html("Loses: " + loses);

    // Generate another random number //

    //*****Couldn't figure out how to clear the numbers that have already been selected*******//
        randomIntFromInterval(19,120);
      $("#internal").append(randomNum);
    }

  });