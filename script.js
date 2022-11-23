//code to change the individual div boxes via adding an event listener to the parent
//target each box via: document.querySelector('.bN1')  //use methods after ) such as ).textContent = " "

let allSquares = document.querySelector('.gameContainer')
let whoTurn = 1
let scoreTrack = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let copyOfScoreTrack = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']


allSquares.addEventListener('click', function (event) {
    let eachSquare = event.target
    console.log(parseInt(event.target.textContent))
    if (whoTurn % 2 === 0) {
        eachSquare.classList.add('addPlayer2')
        let j = event.target.textContent
        console.log(parseInt(j)) // working now use this number to change score Array
        copyOfScoreTrack.splice((j), 1, '2')
        console.log(copyOfScoreTrack)
        whoTurn++
        console.log(whoTurn)
        document.querySelector('.showSymbol').innerHTML = '&#10060'
        check2 ()
    } else {
        eachSquare.classList.add('addPlayer1')
        let k = event.target.textContent
        console.log(parseInt(k))
        copyOfScoreTrack.splice((k), 1, '1')
        console.log(copyOfScoreTrack)
        whoTurn++
        console.log(whoTurn)
        document.querySelector('.showSymbol').innerHTML = '&#x2B55'
        check1()
    } 
})
//check for winner
// using .at to create winning combos:

function check1 () {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) +copyOfScoreTrack.at(3) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(6) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) +copyOfScoreTrack.at(9) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) +copyOfScoreTrack.at(7) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(8) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) +copyOfScoreTrack.at(9) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(9) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(7) == ('111')) {
        console.log('winner1')
        document.querySelector('.winner').classList.add('addPlayer1')
    }
}
function check2 () {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) +copyOfScoreTrack.at(3) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(6) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) +copyOfScoreTrack.at(9) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) +copyOfScoreTrack.at(7) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(8) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) +copyOfScoreTrack.at(9) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(9) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(7) == ('222')) {
        console.log('winner2')
        document.querySelector('.winner').classList.add('addPlayer2')
    }
}


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

// Pseudo Code - Planning area for each section to be commented out in time in order to copy into working code. 

// socring logic - pseudo code:
// 1. Options worked out for win (only 8 combos for each player) .2 store the choice made by each player so the combo can be listened out for .3. Display winner 4.Stop game from registering clicks at this point. 5. Show the winning combo by changing those squares. 6. update the score in each col.
//console log put into eventListener to show the clicks and how to scrape the needed info of what they are hitting. 
// let scoreTrack = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let copyOfScoreTrack = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] // use this to manipulate in event listener code. 
    // numbbers now include 0 to make my maths easier :D
    //2. Storing the choice as a 'var combo' DOES NOT WORK - I think it captures the slice at the start and does not keep it upto date.

//Known bug - Clicking on the .gameContainer changes the background - need to turn this feature off. 
// You can click on a square that has already been clicked on and it changes the turn (background stays the same)