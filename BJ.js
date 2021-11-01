
let sum = 0
let message =""
let cards = []
let hasBlackJack = false
let isAlife = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl =document.getElementById("card-el")
let player = {
     name: "Kareem",
     chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// the basic logic

function startgame() {
    isAlife = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardEl.textContent ="Cards: " 

    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent ="Sum: " + sum
                               //message condition
    if (sum <= 20){

        message ="Do you want to draw a new card? "
        isAlife = true

    }
    else if (sum === 21){

        message = "whooo! You've got BlackJack!"
        hasBlackJack = true

    }
    else {

        message = "you are out of the game !"
        isAlife = false
    }

    console.log(message)

    messageEl.innerText = message
    
}

function newCard(){
    if(isAlife === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        
        renderGame()
    }
    
}


function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 + 1)
    if ( randomNumber > 10){
        return 10
        }
        else if ( randomNumber === 1){

        return 11
        } 
        else {
            return randomNumber
        }
}
  