// define variables

let amountRaised = 0;
let ticketAmount = 0;
let cocktailAmount = 0;
let otherAmount = 0;

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
    totalTracker.textContent = amountRaised
}

// cocktail sale tracker function

function updateCocktailSale() {
    cocktailAmount += 1
    amountRaised += 20
    cocktailTracker.textContent = cocktailAmount
    totalTracker.textContent = amountRaised
}

// modal update sales function

const editButton = document.querySelector("#editButton")

const acceptButton = document.querySelector("#acceptButton")

const cancelButton = document.querySelector("#cancelButton")

const modal = document.querySelector("#updateSalesBox")

editButton.addEventListener("click", () =>
    modal.showModal()
)

acceptButton.addEventListener("click", () =>
    modal.close()
)

cancelButton.addEventListener("click", () =>
    modal.close()
)