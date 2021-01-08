let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//func call target num between 0-9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// determine the distance between the target and the guess.
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

//func will compare guess numbers by taking the abs value of computer and human.
const compareGuesses = (humanG, computerG, target) => {

//alert if user inter a number out of range.
    if (humanG < 0 || humanG > 9) {
        window.alert('sorry! Your number is out of range. Please try another number between 0-9.');
    }

//human wins if computer guess = human guess.
    if ((getAbsoluteDistance(humanG, target)) === (getAbsoluteDistance(computerG, target))) {
        return true;
    }

// human  wins if human score closer to the target.
    if ((getAbsoluteDistance(humanG, target)) < (getAbsoluteDistance(computerG, target))) {
        return true;
    } else {
        return false;
    }
};

//fonct update the score base on the winner, each win is 1 point.
const updateScore = winner => {

    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore +=1;
    }
};

// func increase the "currentRoundNumber" by 1.
const advanceRound = () => {
    currentRoundNumber += 1;
};
