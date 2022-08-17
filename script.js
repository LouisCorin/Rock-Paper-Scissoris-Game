//get all the selection-buttons
const selectionButtons = document.querySelectorAll("[data-selection]")
//get the second column and store it in a const
const finalColumn = document.querySelector("[data-final-column]")
//get computer span
const computerScoreSpan = document.querySelector("[data-computer-score]")
//get your score span
const yourScoreSpan = document.querySelector("[data-your-score]")

// make a global variabile for all the possible selections
const SELECTION = [
{
    name:"rock",
    emoji: "✊",
    beats: "scissors"
},
{
    name:"paper",
    emoji: "✋",
    beats: "rock"
},
{
    name:"scissors",
    emoji: "✌️",
    beats: "paper"
},
]
// get the selection-button and run a code for each element from the array
selectionButtons.forEach(selectionButton => {
// add a event listener for each element on click 
    selectionButton.addEventListener("click", e  => {
// get the names from the array selection and place it in a const
        const selectionName = selectionButton.dataset.selection
// get the individual selection and find wich one shares the same name // store it in a const
        const selection = SELECTION.find(selection => selection.name === selectionName) 
        makeSelection(selection)
    })
})
// make a function that holds the selections
function makeSelection(selection) {
// make a const that holds computerRandomSelection
    const computerSelection = randomSelection()
//make 2 const varibiles to hold the winners()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
// pass the selection result and insert them on top not at the bottom
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
//increment the score to the winner only
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}
// make a function that parseInt a string into a int and increment 1 every round
function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

//create a function to declare the winner that takes a selection
function addSelectionResult(selection, winner){
// create the div that hold the second column incrementation
    const div = document.createElement("div")
    div.innerText = selection.emoji
    div.classList.add("result-selection")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)
}

//make a function that checks if selection.beats is equal to opponent.name to decide the winner
function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}
// automate a random selection for computer
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomIndex]
}