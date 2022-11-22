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
// how to access the classList: document.querySelector('.bN5').classList[1]
