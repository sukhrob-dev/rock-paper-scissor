const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.btn')
let userChoice, computerChoice, result, computerEmoji, userEmoji, resultEmoji

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (e.target.id === 'rock') {
        userEmoji = `&#x270A;`
    } else if (e.target.id === 'paper') {
        userEmoji = `&#x270B;`
    } else {
        userEmoji = `&#x270C;`
    }
    userChoiceDisplay.innerHTML = `${userChoice} ${userEmoji}`
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock'
        computerEmoji = `&#x270A`
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
        computerEmoji = `&#x270B`
    } else {
        computerChoice = 'scissors'
        computerEmoji = `&#x270C`
    }

    computerChoiceDisplay.innerHTML = `${computerChoice} ${computerEmoji}`
}

function getResult() {
    if (computerChoice === userChoice) {
        result = `It's draw :)`
        resultEmoji = `&#x1F91D;`
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = `You won!`
        resultEmoji = `&#x1F603;`
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = `You lost :(`
        resultEmoji = `&#x1F92F;`
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = `You won!`
        resultEmoji = `&#x1F603;`
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = `You lost :(`
        resultEmoji = `&#x1F92F;`
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = `You lost :(`
        resultEmoji = `&#x1F92F;`
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = `You won!`
        resultEmoji = `&#x1F603;`
    }

    resultDisplay.innerHTML = `${result} ${resultEmoji}`
}