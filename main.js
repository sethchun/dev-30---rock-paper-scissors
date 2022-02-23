getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error: Not a Valid Choice');
    }
};

getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (userChoice === 'bomb') {
        return 'It\'s a bomb! User Wins!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
};

playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
