// define variables

let amountRaised = 0;
let ticketAmount = 0;
let cocktailAmount = 0;
let otherAmount = 0;

let displayAmount;

const totalTracker = document.querySelector("#totalTracker")

// ticket sale variables and event listeners

const ticketSale = document.querySelector("#ticketButton")
const ticketTracker = document.querySelector("#ticketTracker")

ticketSale.addEventListener("click", () =>
    updateTicketSale()
)

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        updateTicketSale()
    }
})

// cocktail sale event listeners

const cocktailSale = document.querySelector("#cocktailButton")
const cocktailTracker = document.querySelector("#cocktailTracker")

cocktailSale.addEventListener("click", () =>
    updateCocktailSale()
)

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        updateCocktailSale()
    }
})

// ticket sale tracker function

function updateTicketSale() {
    ticketAmount += 1
    amountRaised += 150
    ticketTracker.textContent = ticketAmount
    totalTracker.textContent = amountRaised.toLocaleString()
}

// cocktail sale tracker function

function updateCocktailSale() {
    cocktailAmount += 1
    amountRaised += 20
    cocktailTracker.textContent = cocktailAmount
    totalTracker.textContent = amountRaised.toLocaleString()
}

// modal update sales function

const editButton = document.querySelector("#editButton")   
const acceptButton = document.querySelector("#acceptButton")
const cancelButton = document.querySelector("#cancelButton")

const ticketInput = document.querySelector("#ticketInput")
const cocktailInput = document.querySelector("#cocktailInput")
const otherInput = document.querySelector("#otherInput")

const modal = document.querySelector("#updateSalesBox")

editButton.addEventListener("click", () => {
    ticketInput.value = ""
    cocktailInput.value = ""
    otherInput.value = ""
    ticketInput.placeholder = `${ticketAmount}`
    cocktailInput.placeholder = `${cocktailAmount}`
    otherInput.placeholder = `${otherAmount}`
    modal.showModal()
})

acceptButton.addEventListener("click", () =>
    manualSalesUpdate()
)

cancelButton.addEventListener("click", () =>
    modal.close()
)

// function for manual update

function manualSalesUpdate() {
    if (ticketInput.value) {
        ticketAmount = Number(ticketInput.value)
        ticketTracker.textContent = ticketAmount
    }

    if (cocktailInput.value) {
        cocktailAmount = Number(cocktailInput.value)
        cocktailTracker.textContent = cocktailAmount
    }

    if (otherInput.value) {
        otherAmount = Number(otherInput.value)
        cocktailTracker.textContent = cocktailAmount
    }       

    if (ticketInput.value|| cocktailInput.value || otherInput.value) {
        amountRaised = (ticketAmount * 150) + (cocktailAmount * 20) + (otherAmount)
        totalTracker.textContent = amountRaised.toLocaleString()
    }

    modal.close()
}