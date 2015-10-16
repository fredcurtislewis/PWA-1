// Fred Lewis PWA1 1510 Duel Assignment Part 3



// self-executing function
(function() {
    console.log("Fight!!!");

    var fighter1 = document.querySelector("#kabal").querySelector("p");        //This establishes that the text will go in the paragraph
    var fighter2 = document.querySelector("#kratos").querySelector("p");
    var fightButton = document.getElementById("fight_btn");                    //The function button is represented by var fightButton
    var roundNum = document.querySelector("h4");                               //h4 is where the round number will be posted

    console.log();

    fightButton.addEventListener("click", fight, false);                       //Creates an event when the button is clicked and returns it

    var fighters = [                                                           // This combines the fighters in one var
        {name: "Kabal", damage: 20, health: 100},
        {name: "Kratos", damage: 20, health: 100}
    ];

    var round = 1;                                                             // You always start in Round 1

    roundNum.innerHTML = "Click here to begin";                                //This is what displays above the fight button
    fighter1.innerHTML = fighters[0].name + ":" + " " + fighters[0].health;    //Kabal : 100 and so on ..
    fighter2.innerHTML = fighters[1].name + ":" + " " + fighters[1].health;    //Kratos : 100 and so on ..

    function fight() {                                                         //Establishes a function of fight

        fighter1.innerHTML = fighters[0].name + ":" + " " + fighters[0].health; // Establishes the first round
        fighter2.innerHTML = fighters[1].name + ":" + " " + fighters[1].health;

        var f1 = Math.floor(Math.random() * fighters[0].damage +                // This is the same formula from before to make a random amount of damage
            fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage +
            fighters[1].damage * .5);

        fighters[0].health -= f1;                                               //Gives the updated health after damage has been applied
        fighters[1].health -= f2;
        console.log(fighters[0].health, fighters[1].health);                    //Sends the score to the console

        var result = winnerCheck();
        console.log(result);
        roundNum.innerHTML = "      Round # " + round + "      Results:";       // Displays which round it is and results
        round++;                                                                // Advances the round one each time the button is pushed

        if (result === "no winner") {
            fighter1.innerHTML = fighters[0].name + ":" + " " + fighters[       //When there is not a winner the fighters name and their health score will be displayed
                    0].health;
            fighter2.innerHTML = fighters[1].name + ":" + " " + fighters[
                    1].health;

        }
        else {
            fighter1.innerHTML = result;                                        //This section changes the button function from active to inactive and changes the text to "Defeat!!"

            fightButton.removeEventListener("click", fight, false);
            document.querySelector('.buttonblue').innerHTML = 'Defeat!!';
        }
    }

    function winnerCheck() {                                                    //Function to check for a winner
        var result = "no winner";

        if (fighters[0].health < 1 && fighters[1].health < 1) {                 //if both dead and  if both <1
            result = "Your Both Dead - Good luck in the next life!";            //Your Both Dead- Good Luck in the Next Life

        }
        else if (fighters[0].health < 1) {                                      //If Kabal goes below 0 Kratos wins
            result = fighters[1].name + " WINS!!";

        }
        else if (fighters[1].health < 1) {                                      //If Kratos goes below 0 Kabal wins
            result = fighters[0].name + " WINS!!"
        }

        return result;
    }

})();
