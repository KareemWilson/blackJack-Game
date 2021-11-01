let hands = ["rock", "paper", "scissor"]

function getHand(){

    let randomIndex = Math.floor(Math.random() * hands.length)

    return hands[randomIndex]

}


console.log( getHand() )
console.log(hands.length)