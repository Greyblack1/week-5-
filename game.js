//this function will be called by a button click; it will start our game
function playcraps(){
    console.log("playcraps function called");

    //first roll of the dice
    var die1 = rolldie();
    console.log("the first die roll is: " + die1);

    //second roll of the dice
    var die2 = rolldie();
    console.log("the second die roll is: " + die2);  

    // add the rolls together
    var sum = die1 + die2;
    console.log("the sum of the dice rolls is " + sum);
    // shows the result of the first die roll on the HTML page
    outputRes("die1res", "Die 1 is:" + die1);
    // shows the result of the second die roll on the HTML page
    outputRes("die2res", "die 2 is:" + die2);
    //show the result of the sum on the HTML page
    outputRes("sumres", "the sum is: " + sum);

    //the logic for if we won loss or tied
    if (sum == 7 || sum == 11 ){
        outputRes("crapsRes", "you lose");
    }
    //if the dice equal each other or if they are even
    else if(die1 == die2 && die2 % 2 == 0){
        //you win 
        outputRes("crapsRes", "you win!");
        document.getElementById("crapsrep").style.color="blue";
    }
    else{
        outputRes("crapsRes", " you pushed(you tied)! ");
    }
}

//output our game results
function outputRes(htmlElement, theText){
    //use the HTML element to show the results
document.getElementById(htmlElement).innerHTML = theText; 
}

//this function will generate a random number between one and six
function rolldie(){
    //get a random nuumber between 0 and 6, multiply it by 6
    var die = 6 * Math.random();
    //return the die roll and make sure it is a whole number
    return Math.ceil(die);
}