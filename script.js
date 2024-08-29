const welcome = document.querySelector('.welcome');
const game = document.querySelector('.game');
const start_btn = document.getElementById('btn');
const play_again_btn = document.getElementById('btn1');
const player_score = document.querySelector('.player');
const computer_score = document.querySelector('.computer');
const result = document.querySelector('.result');
const choices = document.querySelectorAll('.img');

let playerScore = 0;
let computerScore = 0;
let gameStarted = false;
const choices_arr = ['rock', 'paper', 'scissors'];

game.style.display = 'none';
play_again_btn.style.display = 'none';

start_btn.addEventListener('click', () => {
    welcome.style.display = 'none';
    game.style.display = 'flex';
    gameStarted = true;
});

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if (!gameStarted) return;

        const playerChoice = choice.children[0].alt;
        playRound(playerChoice);
        play_again_btn.style.display = 'block';
    });
});

play_again_btn.addEventListener('click', resetGame);

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    displayResult(winner, playerChoice, computerChoice);
    updateScores(winner);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices_arr.length);
    return choices_arr[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'draw';
    if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) return 'player';
    else return 'computer';
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === 'draw') result.textContent = `It's a draw! You both choose ${playerChoice}.`;
    else if (winner === 'player') result.textContent = `You win! The computer choose ${computerChoice}.`;
    else result.textContent = `You lose! The computer choose ${computerChoice}.`;
}

function updateScores(winner) {
    if (winner === 'player') {
        playerScore++;
        player_score.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computer_score.textContent = computerScore;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    player_score.textContent = playerScore;
    computer_score.textContent = computerScore;
    result.textContent = '';
    play_again_btn.style.display = 'none';
    gameStarted = true;
}
