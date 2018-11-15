//----------------------
// GLOBAL VARIABLES
//----------------------

    var crystalImages = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"];    
    var randomNumber = 0;
    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;
    var totalValue = 0;
    var wins = 0;
    var losses = 0;

//----------------------
// FUNCTION DEFINTIONS
//----------------------

    // Generate a random number between 19 and 120 and display it on the screen
    function generateRandomNumber (min, max) {
        randomNumber = Math.floor(Math.random() * (max-min+1) + min);
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
    }

    // dynamically generate crystal images, assign random values and display them on the screen
    crystalImages.forEach(function(imageUrl, index) {
        var crystal = $("<img>"); // create a new 'img' element
        crystal.attr("src", imageUrl);  // set the src equal to the image URL from the crystalImages array
        crystal.attr("data-points", Math.floor(Math.random() * 12) + 1); // set a random point value and add it to the new crystal image
        crystal.attr("id", "crystal-" + (index + 1)); // add a unique ID to each dynamically created crystal image
        crystal.addClass("crystal"); // add a class of crystal to each dynamically created crystal image
        $("#images").append(crystal); // place the image on the page
    });

    // Checking the score
    function scoreChecker() {
        if ( totalValue === randomNumber ) {
            $("#win-loss").text("You win!");
            wins++;
            $("#wins").text("Wins : " + wins);
            reset();
        } else if ( totalValue < randomNumber ) {
            return;
        } else {
            $("#win-loss").text("You lose!");
            losses++;
            $("#losses").text("Losses : " + losses);
            reset();
        }
    }

    // reset the page and play again
    function reset () {
        totalValue = 0;
        $("#totalScore").text(totalValue);
        generateRandomNumber(19, 120);
    }

    // Crystal 1 click event
    $("#crystal-1").on("click", function() {
        crystalValue1 = parseInt($(this).attr("data-points"));
        totalValue = totalValue + crystalValue1; // add the point value of this crystal to totalValue
        $("#totalScore").text(totalValue); // display the updated totalValue to the HTML page
        scoreChecker();
    });

    // Crystal 2 click event
    $("#crystal-2").on("click", function() {
        crystalValue2 = parseInt($(this).attr("data-points"));
        totalValue = totalValue + crystalValue2; // add the point value of this crystal to totalValue
        $("#totalScore").text(totalValue); // display the updated totalValue to the HTML page
        scoreChecker();
    });

    // Crystal 3 click event
    $("#crystal-3").on("click", function() {
        crystalValue3 = parseInt($(this).attr("data-points"));
        totalValue = totalValue + crystalValue3; // add the point value of this crystal to totalValue
        $("#totalScore").text(totalValue); // display the updated totalValue to the HTML page
        scoreChecker();
    });

    // Crystal 4 click event
    $("#crystal-4").on("click", function() {
        crystalValue4 = parseInt($(this).attr("data-points"));
        totalValue = totalValue + crystalValue4; // add the point value of this crystal to totalValue
        $("#totalScore").text(totalValue); // display the updated totalValue to the HTML page
        scoreChecker();
    });

    


//----------------------
// GAMEPLAY
//----------------------

    // generate a random number and display it on the screen 
    generateRandomNumber(19, 120);