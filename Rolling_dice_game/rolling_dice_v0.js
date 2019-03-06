// This function take the user input and generate a random number between 1-6
function playDice() {

    // Set the rules of the game
    alert("Welcome to Dice rolling game\nIn this game you choose one number between 1 to 6 and the computer check if you were lucky to pick the right number on the dice.\n And if so You are winner of the game.\n Beware that You are not allow to play more than 3 times");
   
    do
    {
        // Set the limit of trials
        var essay = 3;

        // Set a counter to check the number of trials
        var counter = 0;

        // Prompt the user 3x if the provided number is not equal to the rand_int value
        for(var count = 0; count < 3; count++)
        {
            var userNumber = prompt("Enter one number between 1 and 6");

            // Generate a random num between 1 to 6
            var rand_int = Math.floor(Math.random()  * 6) + 1;

                
            // If the user enter a number greater than 6 Error alert will be dispalyed 
            if(+userNumber > 6)
            {
                alert("Error you should should only between 1 to 6");
            }
            // If the user input is equal to  rand_int value display the message 
            else if(+userNumber === rand_int)
            {
                alert("Congratulation Your lucky number " +  +userNumber  + " correspond to the roll Dice number " + rand_int + ". You won the game");
                break;
            }
            else
            {
                // Decrease the limit of trials
                essay--;
                if(essay > 0)
                {
                    alert("You loose the lucky number was " + rand_int + ".  Try again You got " + essay + " chance to win!");
                }

                // Count the number of trial 
                counter++;
            }
        }


        // Display the Game Over message if counter reach the limit of trials
        if(counter === 3)
        {
            alert("Game Over. You loose");
        }

        // Ask if the user desire to play 
        var ans = prompt("Wanna play again?\n Type(y) for yes (n) for no");
    }
    while(ans === 'Y' || ans === 'y'); //
      
}
  
// Start the process
playDice();

