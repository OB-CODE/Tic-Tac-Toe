//code to change the individual div boxes via adding an event listener to the parent
//target each box via: document.querySelector('.bN1')  //use methods after ) such as ).textContent = " "

let allSquares = document.querySelector('.gameContainer')
let whoTurn = 1

allSquares.addEventListener('click', function (event) {
    let eachSquare = event.target
    if (whoTurn % 2 === 0) {
        eachSquare.classList.add('addPlayer2')
        whoTurn++
        console.log(whoTurn)
        document.querySelector('.showSymbol').innerHTML = '&#10060'
    } else {
        eachSquare.classList.add('addPlayer1')
        whoTurn++
        console.log(whoTurn)
        document.querySelector('.showSymbol').innerHTML = '&#x2B55'

    }
})
//Design logic for winning & visually display which player won.
// how to access the classList: document.querySelector('#square5')
    // Squares changed to IDs in order to use class for the scoring system and resetting the game. 

// Play again button
let playAgain = document.querySelector('.clickPlayAgain')
playAgain.addEventListener('click', function(event) {
    children = allSquares.querySelectorAll(':scope > div')
    for (let i = 0; 0 <9; i++) {
        children[i].removeAttribute('class')
    }
})


// children[0].removeAttribute('class')
// children.classList
