// Fred Lewis PWA1 1510 Duel Assignment Part 2



// self-executing function
(function(){       // this is the javascript way to call a particular task or function

    console.log("FIGHT!!!");   // this sends a statement to the console

    //player name
    var fighter1 = ["Spiderman", 20, 100];       // establishing a variable of fighter1 given the array value of Spiderman, 20, 100
    var fighter2 = ["Batman", 20, 100];          // establishing a variable of fighter2 given the array value of Batman, 20, 100

    //initiate round
    var round=0;                       // establishing a variable of round given the number value of 0

    function fight(){                  // this is the javascript way to call a particular task or function

        alert(fighter1 [0] + ":" + fighter1 [2] + " " +  "*START*" + " " + fighter2[0] + ":" + fighter2 [2]);   // alert box that says Spiderman:100 *START* Batman:100

        console.log(fighter1 [0] + ":" + fighter1 [2] + " " + "*START*" + " " + fighter2[0] + ":" + fighter2 [2]); // console.log i created to test the alert


        for (var i = 0; i < 10; i++)  //  This sets a loop with  "for"; Statement 1 sets a variable before the loop starts (var i = 0), Statement 2 defines the condition for the loop to run (i must be less than 10), Statement 3 increases a value (i++) each time the code block in the loop has been executed.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1 [1] * .5; // establishing a variable of minDamage1 which is equal to var fighter1 [1] multiplied by .5
            var minDamage2 = fighter2 [1] * .5; // establishing a variable of minDamage2 which is equal to var fighter2 [1] multiplied by .5

            var f1 = Math.floor(Math.random()*(fighter1 [1]-minDamage1) + minDamage1);                        // Math.floor() rounds a number down to its nearest integer while the Math.random returns a random number from 0 (inclusive) up to but not including 1 (exclusive). This line established a variable of f1 which is equal to a random number rounded down to the nearest integer multiplied by ( the value of player1Damage (20) minus the value of minDamage1 (which is 20 *.5) plus minDamage, this action produces a random number for var f1

            var f2 = Math.floor(Math.random()*(fighter2 [1]-minDamage2)+ minDamage2);                     // This does the same with var f2 as with var f1 above

            //inflict damage
            fighter1 [2]-=f1;  //This establishes that the value of var fighter1 [2] is the prior value minus var f1
            fighter2 [2]-=f2;  // This establishes the same for fighter2 [2] as above

            console.log(fighter1 [0]+ ":" + fighter1 [2] + " " + fighter2 [0] + ":" + fighter2 [2]);  // This produces a statement on the console that reads the value of fighter1 [0] of Spiderman and the updated value of fighter1 [2] followed by the same info for fighter2 [0] or Batman; example "Spiderman:60 Batman:60"

            //check for victor
            var result = winnerCheck();  // this is setting up for below with function winnerCheck
            console.log(result);       // once the below code is processed the value of var result will be displayed here
            if (result==="no winner")   // if that result is "no winner"
            {
                round++;      // the round number will have one added to its value each time
                alert(fighter1 [0] + ":" + fighter1 [2] + "  *ROUND " + round +" OVER" +"*  "+ fighter2 [0] +":"+ fighter2 [2]);   // and the alert "Spiderman:xx  *ROUND xx OVER*  Batman:xx" will display as an alert

            } else{     // if the value of var result is not "no winner"
                alert(result);  // the value of var result will be alerted
                break;         // and this break in the loop will occur
            };

          };
    };

    function winnerCheck(){     // once the value of var result does not equal "no winner" this function occurs
        var result="no winner";   // this establishes the value of var result
        if (fighter1 [2]<1 && fighter2 [2]<1)  // if fighter1 [2] AND fighter2 [2] are BOTH less than 1 then the loop will stop
        {
            result = "You Both Die";  // and the value of var result will be......"You Both Die"
        } else if(fighter1 [2]<1){   // if this does not occur, but fighter1 [2] only drops below 1
            result =fighter2 [0] +" WINS!!!"    // then the value of var result will be that playerTwoName WINS!!!
        } else if (fighter2 [2]<1)    // // if this does not occur, but fighter2 [2] only drops below 1
        {
            result = fighter1 [0] +" WINS!!!"    //then the value of var result will be that fighter1 [0] WINS!!!
        };
       return result;  // this returns the result variables value to the console
    };

    /*******  The program gets started below *******/
    fight();

})();