let hands = ["rock", "paper", "scissor"]

function myHand(){
    let randomNr = Math.floor(Math.random() * hands.length)
    return hands[randomNr]
    
}
console.log(myHand())