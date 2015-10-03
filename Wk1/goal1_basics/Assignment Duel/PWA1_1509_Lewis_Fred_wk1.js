/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){       // this is the javascript way to call a particular task or function

    console.log("FIGHT!!!");   // this sends a statement to the console

    //player name
    var playerOneName = "Spiderman";       // establishing a variable of playerOneName given the string value of Spiderman
    var playerTwoName = "Batman";          // establishing a variable of playerTwoName given the string value of Batman

    //player damage
    var player1Damage = 20;               // establishing a variable of player1Damage given the number value of 20
    var player2Damage = 20;               // establishing a variable of player2Damage given the number value of 20

    //player health
    var playerOneHealth = 100;           // establishing a variable of playerOneHealth given the number value of 100
    var playerTwoHealth = 100;          // establishing a variable of playerTwoHealth given the number value of 100

    //initiate round
    var round=0;                       // establishing a variable of round given the number value of 0

    function fight(){                  // this is the javascript way to call a particular task or function

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)  // sets an alert to the user displaying the values of playerOneName and playerOneHealth which is " Spiderman 100" then the text of *START* appear, followed by playerTwoName and playerTwoHealth which is " Batman 100" This alert also sets a loop with  "for"; Statement 1 sets a variable before the loop starts (var i = 0), Statement 2 defines the condition for the loop to run (i must be less than 10), Statement 3 increases a value (i++) each time the code block in the loop has been executed.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // establishing a variable of minDamage1 which is equal to var player1Damage multiplied by .5
            var minDamage2 = player2Damage * .5; // establishing a variable of minDamage2 which is equal to var player2Damage multiplied by .5

            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)
+minDamage1);                        // Math.floor() rounds a number down to its nearest integer while the Math.random returns a random number from 0 (inclusive) up to but not including 1 (exclusive). This line established a variable of f1 which is equal to a random number rounded down to the nearest integer multiplied by ( the value of player1Damage (20) minus the value of minDamage1 (which is 20 *.5) plus minDamage, this action produces a random number for var f1

            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);                     // This does the same with var f2 as with var f1 above

            //inflict damage
            playerOneHealth-=f1;  //This establishes that the value of var playerOneHealth is the prior value minus var f1
            playerTwoHealth-=f2;  // This establishes the same for playerTwoHealth as abover for playerOneHealth

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  // This produces a statement on the console that reads the value of playerOneName of Spiderman and the updated value of playerOneHealth followed by the same info for playerTwoName or Batman; example "Spiderman:60 Batman:60"

            //check for victor
            var result = winnerCheck();  // this is setting up for below with function winnerCheck
            console.log(result);       // once the below code is processed the value of var result will be displayed here
            if (result==="no winner")   // if that result is "no winner"
            {
                round++;      // the round number will have one added to its value each time
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);   // and the alert "Spiderman:xx  *ROUND xx OVER*  Batman:xx" will display as an alert

            } else{     // if the value of var result is not "no winner"
                alert(result);  // the value of var result will be alerted
                break;         // and this break in the loop will occur
            };

          };
    };

    function winnerCheck(){     // once the value of var result does not equal "no winner" this function occurs
        var result="no winner";   // this establishes the value of var result
        if (playerOneHealth<1 && playerTwoHealth<1)  // if playerOneHealth AND playerTwoHealth are BOTH less than 1 then the loop will stop
        {
            result = "You Both Die";  // and the value of var result will be......"You Both Die"
        } else if(playerOneHealth<1){   // if this does not occur, but playerOneHealth only drops below 1
            result =playerTwoName+" WINS!!!"    // then the value of var result will be that playerTwoName WINS!!!
        } else if (playerTwoHealth<1)    // // if this does not occur, but playerTwoHealth only drops below 1
        {
            result = playerOneName+" WINS!!!"    //then the value of var result will be that playerOneName WINS!!!
        };
       return result;  // this returns the result variables value to the console
    };

    /*******  The program gets started below *******/
    fight();

})();