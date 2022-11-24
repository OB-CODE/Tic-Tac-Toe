//code to change the individual div boxes via adding an event listener to the parent
//target each box via: document.querySelector('.bN1')  //use methods after ) such as ).textContent = " "
// above largely removed and changed with square 

let allSquares = document.querySelector('.gameContainer')
let whoTurn = 1
let winner = false
let symbol = 1

// writing a method of changing the 'its your turn' div via a class attribute method. Will allow for other classes down the track.
function changeTurnSym () {
    if (whoTurn % 2 == 0) {
        document.querySelector('div #showSymbol').removeAttribute('class')
        document.querySelector('div #showSymbol').classList.add('sym2')
    } else {
        document.querySelector('div #showSymbol').removeAttribute('class')
        document.querySelector('div #showSymbol').classList.add('sym1')
    }
}
let copyOfScoreTrack = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

// make each score a number
let setScore1 = document.querySelector('div .score1')
setScore1.textContent = 0
let setScore2 = document.querySelector('div .score2')
setScore1.textContent = 0

// method of capturing the clicks. 
// Bug fix - need to prevent a class getting added if there is already one allocated. + avoid background changing.
// (eachSquare.classList.value == '') used to check no class through a nested if statement. 

allSquares.addEventListener('click', function (event) {
    let eachSquare = event.target
    console.log(parseInt(event.target.textContent))
    if  (winner == false) {
        if (whoTurn % 2 === 0) {
            if (eachSquare.classList.value == '') {
                eachSquare.classList.add('addPlayer2')
                let j = event.target.textContent
                console.log(parseInt(j)) // working now use this number to change score Array
                copyOfScoreTrack.splice((j), 1, '2')
                console.log(copyOfScoreTrack)
                whoTurn++
                console.log(whoTurn)
                check2 ()
                checkDraw ()
                changeTurnSym ()
            } 
        }
    } 
    if (winner == false) {
        if (eachSquare.classList.value == '') {
                eachSquare.classList.add('addPlayer1')
                let k = event.target.textContent
                console.log(parseInt(k))
                copyOfScoreTrack.splice((k), 1, '1')
                console.log(copyOfScoreTrack)
                whoTurn++
                console.log(whoTurn)
                check1()
                checkDraw ()
                changeTurnSym ()
        }

    }
})

//Design logic for winning & visually display which player won.
// how to access the classList: document.querySelector('#square5')
    // Squares changed to IDs in order to use class for the scoring system and resetting the game. 
//check for winner
// using .at to create winning combos:

function check1 () {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) +copyOfScoreTrack.at(3) == ('111') || copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(6) == ('111') || copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) + copyOfScoreTrack.at(7) == ('111') || copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(8) == ('111') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(7) == ('111')) {
    console.log('winner1')
    document.querySelector('#winner').classList.add('addPlayer1')
    setScore1.textContent++
    return winner = true
    } 
}

function check2 () {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) +copyOfScoreTrack.at(3) == ('222') || copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(6) == ('222') || copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) +copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) +copyOfScoreTrack.at(7) == ('222') || copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(8) == ('222') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) +copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) +copyOfScoreTrack.at(7) == ('222')) {
    console.log('winner2')
    document.querySelector('#winner').classList.add('addPlayer2')
    setScore2.textContent++
    return winner = true
    }
} 

// Create a draw feature. If none of the above 'win conditions' got triggered, the result must be a draw. 
function checkDraw () {
    if (copyOfScoreTrack.slice(1).sort().shift() != 0) {
        if (winner == false) {
        console.log('draw')
        document.querySelector('#winner').classList.add('draw')
        document.querySelector('div.result').classList.replace('result', 'invis')
        }
    }
}


// Play again button
let playAgain = document.querySelector('.clickPlayAgain')
playAgain.addEventListener('click', function(event) {
    if (winner == false) {
        document.querySelector('div.invis').classList.replace('invis', 'result')
        document.querySelector('#winner').classList.replace('draw', 'invis')
    }
    document.querySelector('#winner').removeAttribute('class')
    winner = false
    children = allSquares.querySelectorAll(':scope > div')
    for (let i = 0; 0 <9; i++) {
        children[i].removeAttribute('class')
        copyOfScoreTrack[(i+1)] = '0'
    } 
})

// Button to clear score. Use the play again button to have all of the same features as that. Additional features 1. return whosTurn to 1 2. set scores to 0. 

let resetScores = document.querySelector('.clickResetScore')
resetScores.addEventListener('click', function(event) {
    if (document.querySelector('#winner').classList.value == 'draw') {
        document.querySelector('#winner').removeAttribute('class')
        document.querySelector('#winner').classList.replace('draw', 'invis')
        document.querySelector('div.invis').classList.replace('invis', 'result')
    }
    document.querySelector('#winner').removeAttribute('class')
    winner = false
    whoTurn = 1
    setScore1.textContent = 0
    document.querySelector('.score1').textContent = 0
    setScore2.textContent = 0
    document.querySelector('.score2').textContent = 0
    document.querySelector('div #showSymbol').removeAttribute('class')
    document.querySelector('div #showSymbol').classList.add('sym1')
    children = allSquares.querySelectorAll(':scope > div')
    for (let i = 0; 0 <9; i++) {
        children[i].removeAttribute('class')
        copyOfScoreTrack[(i+1)] = '0'
    }
})

// code for changing modes:
// Set a default background colour via JS
document.querySelector('div.result').classList.add('footerStandardBack')
// default backgrounds for the biggers symbols
document.querySelector('#playerImg1').classList.add('addPlayer1')
document.querySelector('#playerImg2').classList.add('addPlayer2')



// Pseudo Code - Planning area for each section to be commented out in time in order to copy into working code. 

// socring logic - pseudo code:
// 1. Options worked out for win (only 8 combos for each player) .2 store the choice made by each player so the combo can be listened out for .3. Display winner 4.Stop game from registering clicks at this point. 5. Show the winning combo by changing those squares. 6. update the score in each col.
//console log put into eventListener to show the clicks and how to scrape the needed info of what they are hitting. 
// let scoreTrack = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let copyOfScoreTrack = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] // use this to manipulate in event listener code. 
    // numbbers now include 0 to make my maths easier :D
    //2. Storing the choice as a 'var combo' DOES NOT WORK - I think it captures the slice at the start and does not keep it upto date.