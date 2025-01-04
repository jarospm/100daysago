// GAME STATE
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// DOM REFERENCES
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")

// GAME MECHANICS
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    //TODO: fix for Ace to be 1 OR 11
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard,secondCard]

    sum = firstCard + secondCard

    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
    
        renderGame()
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}