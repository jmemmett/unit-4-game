// GLOBAL VARIABLES

    // create an array of crystal image links
    var crystalImages = ["images/blue.png", "images/green.png", "images/red.png", "images/yellow.png"];

// FUNCTION DEFINITIONS

// GAMEPLAY

    // loop through the array of image links
    crystalImages.forEach(function(imageUrl, index) {
        // for each one:
            // create a new 'img' element
            var crystal = $("<img>");
            // set src equal to link
            crystal.attr("src", imageUrl);  // <-- This is a SETTER statement (we're providing an attribute, and a value to set it to)
            // set a random point value and add it to the new crystal image
            crystal.attr("data-points", Math.floor(Math.random() * 12) + 1);
            // add unique ID
            crystal.attr("id", "crystal-" + (index + 1));
            // add a class
            crystal.addClass("crystal");
            // put the crystal image on the page
            $("#images").append(crystal);
    });

    // the random values assigned to each crystal is a string. it will need to be converted to an integer in order to use it for the game

    $("#images").on("click", ".crystal", function() {
        console.log(this);
        var crystalVal = $(this).attr("data-points"); // <-- this is a GETTER statement (we're asking for the value of 1 specific attribute)
        alert(crystalVal);
    })

       


