// Selectors
const x = document.querySelector(".x")
const o = document.querySelector(".o")
const boxes = document.querySelectorAll(".box")
const buttons = document.querySelectorAll("#buttons-container button")
const messageContainer = document.querySelector("#message")
const messageText = document.querySelector("#message p")
let secondPlayer

// Play Counter
let player1 = 0
let player2 = 0

// Game Mode Buttons
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++)
            buttons[j].style.display = "none"
        
        setTimeout(function(){
            const container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 500)
    })
}

// Adds a listener for every box
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        if(this.childNodes.length === 0){
            this.appendChild(checkElement(player1, player2).cloneNode(true))

            if(player1 === player2){
                player1++

                if(secondPlayer === "ai-player"){
                    computerPlay()
                    player2++
                }
            }
            else
                player2++

            checkWinCondition()
        }
    })
}

// Checks which will be the next player's symbol
const checkElement = (player1, player2) => (player1 === player2) ? x : o

function checkWinCondition(){
    const b1 = getBlock("block-1")
    const b2 = getBlock("block-2")
    const b3 = getBlock("block-3")
    const b4 = getBlock("block-4")
    const b5 = getBlock("block-5")
    const b6 = getBlock("block-6")
    const b7 = getBlock("block-7")
    const b8 = getBlock("block-8")
    const b9 = getBlock("block-9")

    // Horizontal
    checkLine(b1, b2, b3)
    checkLine(b4, b5, b6)
    checkLine(b7, b8, b9)

    // Vertical
    checkLine(b1, b4, b7)
    checkLine(b2, b5, b8)
    checkLine(b3, b6, b9)

    // Diagonal
    checkLine(b1, b5, b9)
    checkLine(b2, b5, b7)

    let counter = 0
    for(let i = 0; i < boxes.length; i++)
        counter = (boxes[i].childNodes[0] !== undefined) ? counter + 1 : counter

    if(counter === 9)
        declareWinner()
}

// Returns the symbol class of a block
function getBlock(blockId){
    const block = document.getElementById(blockId).childNodes[0]
    
    return (block !== undefined) ? block.className : undefined
}

// Checks if a line represents a win condition
function checkLine(block1, block2, block3){
    if(block1 === "x" && block2 === "x" && block3 === "x") declareWinner("x")
    
    if(block1 === "o" && block2 === "o" && block3 === "o") declareWinner("o")
}

// Cleans the game, declares the winner and updates the scoreboard
function declareWinner(winner = undefined){
    const scoreboardX = document.querySelector("#scoreboard-1")
    const scoreboardO = document.querySelector("#scoreboard-2")
    let message

    if(winner === "x"){
        message = "Player 1 won!"
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
    }
    else if(winner === "o"){
        message = (secondPlayer === "ai-player") ? "The Computer won" : "Player 2 won!"
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
    }
    else message = "Draw!"

    // Shows endgame message
    messageText.innerHTML = message
    messageContainer.classList.remove("hide")
    setTimeout(function(){
        messageContainer.classList.add("hide")
    }, 3000)

    // Resets the game
    player1 = 0
    player2 = 0

    // Resets the boxes
    const boxesToRemove = document.querySelectorAll(".box div")
    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

function computerPlay(){
    let counter = 0
    let filled = 0

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5)

        if(boxes[i].childNodes[0] === undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(o.cloneNode(true))
                counter++
                break
            }
        // Checks how many boxes are already filled
        }
        else
            filled++
    }
    if(counter === 0 && filled < 9)
        computerPlay()
}