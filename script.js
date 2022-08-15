// Get all the data-selection atributes
const selectionButtons = document.querySelectorAll("[data-selection]")

// For each atribute in the data-selection array run a function,
// Add a eventlistener that runs a function on click,
// Get the selection names from data array,
// call a function that console.log the selections
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e  => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}