// GLOBAL VARIABLES
    var randomNumber = 0;
    var CrystalValue1;
    var CrystalValue2;
    var CrystalValue3;
    var CrystalValue4;
    var totalValue = 0;

// FUNCTION DEFINTIONS

    // Generate a random number between 19 and 120 and display it on the screen
    function generateRandomNumber (min, max) {
        randomNumber = Math.floor(Math.random() * (max-min+1) + min);
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
    }

    // Generate random values between 1 and 12 for each of 4 crystals
    function generateCrystalValue () {
        
    }

    // click events for each of the 4 crystals
    function crystalClick() {

    }

// GAMEPLAY

    // generate a random number and display it on the screen 
    generateRandomNumber(19, 120);

    // generate 4 random numbers (between 1 and 12) and assign those values to each of the 4 crystals displayed on the page
    // create click events for each of the 4 crystals
    // 