const words = [
    "react",
    "javascript",
    "coding",
    "developer",
    "frontend",
    "website",
    "program",
    "computer"
];

// DOM elements
const scrambledWordDisplay = document.getElementById('scrambledWord');
const guessForm = document.getElementById('guessForm');
const userInput = document.getElementById('userInput');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

let currentWord = '';
let scrambledWord = '';
let score = 0;

// Function to scramble a word
function scrambleWord(word) {
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
}

// Function to get a new word
function getNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    scrambledWordDisplay.textContent = scrambledWord;
    userInput.value = '';
    messageDisplay.textContent = '';
    messageDisplay.className = 'message';
}

// Form submit handler
guessForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const guess = userInput.value.toLowerCase();
    
    if (guess === currentWord.toLowerCase()) {
        score++;
        scoreDisplay.textContent = score;
        messageDisplay.textContent = 'Correct! 🎉';
        messageDisplay.className = 'message success';
        
        setTimeout(getNewWord, 1000);
    } else {
        score = 0;
        scoreDisplay.textContent = score;
        messageDisplay.textContent = 'Wrong answer! Try again 😕';
        messageDisplay.className = 'message error';
    }
});

// Initialize the game
getNewWord();