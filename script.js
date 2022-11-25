//code to change the individual div boxes via adding an event listener to the parent
//target each box via: document.querySelector('.bN1')  //use methods after ) such as ).textContent = " "
// above largely removed and changed with square 

let allSquares = document.querySelector('.gameContainer')
let whoTurn = 1
let winner = false
let gameStyle = 1
let gameStyleContainer = document.querySelector('.options')
let computerPlayer = false

// set defaults:
document.querySelector('#playerImg1').classList.add('addPlayer1')
document.querySelector('#playerImg2').classList.add('addPlayer2')



// write a function to listen for button clicks on game style on the DOM and change in the website. 
gameStyleContainer.addEventListener('click', function (event) {
    console.log(event.target)
    let styleSelect = event.target
    if (styleSelect == document.querySelector('#style1')) {
        gameStyle = 1
        gameStyleChange ()
        changeStyleMidGame ()
    } if (styleSelect == document.querySelector('#style2')) {
        gameStyle = 2
        gameStyleChange ()
        changeStyleMidGame ()
    } if (styleSelect == document.querySelector('#style3')) {
        gameStyle = 3
        gameStyleChange ()
        changeStyleMidGame ()
    } if (styleSelect == document.querySelector('#style4')) {
        gameStyle = 4
        gameStyleChange ()
        changeStyleMidGame ()
    }
})
// code to run a function to change game stype according to button clicks above. 

function gameStyleChange () {
    if (gameStyle == 1) {
        document.querySelector('#playerImg1').removeAttribute('class')
        document.querySelector('#playerImg2').removeAttribute('class')
        document.querySelector('#playerImg1').classList.add('addPlayer1')
        document.querySelector('#playerImg2').classList.add('addPlayer2')
        document.querySelector('div#result').removeAttribute('class')
        document.querySelector('div#result').classList.add('footerStandardBack')
    } if (gameStyle == 2) {
        document.querySelector('#playerImg1').removeAttribute('class')
        document.querySelector('#playerImg2').removeAttribute('class')
        document.querySelector('#playerImg1').classList.add('addPlayer1rvb')
        document.querySelector('#playerImg2').classList.add('addPlayer2rvb')
        document.querySelector('div#result').removeAttribute('class')
        document.querySelector('div#result').classList.add('footerRVBBack')
    } if (gameStyle == 3) {
        document.querySelector('#playerImg1').removeAttribute('class')
        document.querySelector('#playerImg2').removeAttribute('class')
        document.querySelector('#playerImg1').classList.add('addPlayer1election')
        document.querySelector('#playerImg2').classList.add('addPlayer2election')
        document.querySelector('div#result').removeAttribute('class')
        document.querySelector('div#result').classList.add('footerElectionBack')
    } if (gameStyle == 4) {
        document.querySelector('#playerImg1').removeAttribute('class')
        document.querySelector('#playerImg2').removeAttribute('class')
        document.querySelector('#playerImg1').classList.add('addPlayer1GoneFishing')
        document.querySelector('#playerImg2').classList.add('addPlayer2GoneFishing')
        document.querySelector('div#result').removeAttribute('class')
        document.querySelector('div#result').classList.add('footerSbobBack')
    }
}



// writing a method of changing the 'its your turn' div via a class attribute method. Will allow for other classes down the track.
function changeTurnSym() {
    if (whoTurn % 2 == 0) {
        document.querySelector('div #showSymbol').removeAttribute('class')
        if (gameStyle == 1) {
            document.querySelector('div #showSymbol').classList.add('addPlayer2')
        } if (gameStyle == 2) {
            document.querySelector('div #showSymbol').classList.add('addPlayer2rvb')
        } if (gameStyle == 3) {
            document.querySelector('div #showSymbol').classList.add('addPlayer2election')
        } if (gameStyle == 4) {
            document.querySelector('div #showSymbol').classList.add('addPlayer2GoneFishing')
        } 
    } else {
        document.querySelector('div #showSymbol').removeAttribute('class')
        if (gameStyle == 1) {
            document.querySelector('div #showSymbol').classList.add('addPlayer1')
        } if (gameStyle == 2) {
            document.querySelector('div #showSymbol').classList.add('addPlayer1rvb')
        } if (gameStyle == 3) {
            document.querySelector('div #showSymbol').classList.add('addPlayer1election')
        } if (gameStyle == 4) {
            document.querySelector('div #showSymbol').classList.add('addPlayer1GoneFishing')
        } 
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
    if (winner == false) {
        if (whoTurn % 2 === 0) {
            
            if (computerPlayer == false) {
                if (eachSquare.classList.value == '') {
                    if (gameStyle == 1) {
                    eachSquare.classList.add('addPlayer2')
                    } if (gameStyle == 2) {
                    eachSquare.classList.add('addPlayer2rvb')
                 } if (gameStyle == 3) {
                    eachSquare.classList.add('addPlayer2election')
                    } if (gameStyle == 4) {
                    eachSquare.classList.add('addPlayer2GoneFishing')
                 } 
                let j = event.target.textContent
                // console.log(parseInt(j)) // working now use this number to change score Array
                copyOfScoreTrack.splice((j), 1, '2')
                console.log(copyOfScoreTrack)
                }
            }
                whoTurn++
                // console.log(whoTurn)
                check2()
                checkDraw()
                changeTurnSym()
                increaseWinners2()
            
        }
    }
    if (winner == false) {
        if (eachSquare.classList.value == '') {
            if (gameStyle == 1) {
                eachSquare.classList.add('addPlayer1')
            } if (gameStyle == 2) {
                eachSquare.classList.add('addPlayer1rvb')
            } if (gameStyle == 3) {
                eachSquare.classList.add('addPlayer1election')
            } if (gameStyle == 4) {
                eachSquare.classList.add('addPlayer1GoneFishing')
            } 
            eachSquare.classList.add('addPlayer1')
            let k = event.target.textContent
            // console.log(parseInt(k))
            copyOfScoreTrack.splice((k), 1, '1')
            console.log(copyOfScoreTrack)
            whoTurn++
            // console.log(whoTurn)
            check1()
            checkDraw()
            changeTurnSym()
            increaseWinners1()
            if (computerPlayer == true) {
                compMaths ()
                // console.log(whoTurn)
                check2()
                checkDraw()
                changeTurnSym()
                increaseWinners2()
                whoTurn++
                document.querySelector('div #showSymbol').removeAttribute('class')
                checkGameStyleOnButtonClickAndChangeTopSymbol ()        
            }
    }
    }
})

//Design logic for winning & visually display which player won.
// how to access the classList: document.querySelector('#square5')
// Squares changed to IDs in order to use class for the scoring system and resetting the game. 
//check for winner
// using .at to create winning combos:

function check1() {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) + copyOfScoreTrack.at(3) == ('111') || copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(6) == ('111') || copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) + copyOfScoreTrack.at(7) == ('111') || copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(8) == ('111') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(9) == ('111') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(7) == ('111')) {
        console.log('winner1')
        if (gameStyle == 1) {
            document.querySelector('#winner').classList.add('addPlayer1')
        } if (gameStyle == 2) {
            document.querySelector('#winner').classList.add('addPlayer1rvb')
        } if (gameStyle == 3) {
            document.querySelector('#winner').classList.add('addPlayer1election')
        } if (gameStyle == 4) {
            document.querySelector('#winner').classList.add('addPlayer1GoneFishing')
        }       
        setScore1.textContent++
        return winner = true
    }
}

function check2() {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) + copyOfScoreTrack.at(3) == ('222') || copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(6) == ('222') || copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) + copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) + copyOfScoreTrack.at(7) == ('222') || copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(8) == ('222') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) + copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(9) == ('222') || copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(7) == ('222')) {
        console.log('winner2')
        if (gameStyle == 1) {
            document.querySelector('#winner').classList.add('addPlayer2')
        } if (gameStyle == 2) {
            document.querySelector('#winner').classList.add('addPlayer2rvb')
        } if (gameStyle == 3) {
            document.querySelector('#winner').classList.add('addPlayer2election')
        } if (gameStyle == 4) {
            document.querySelector('#winner').classList.add('addPlayer2GoneFishing')
        } 
        setScore2.textContent++
        return winner = true
    }
}

// Create a draw feature. If none of the above 'win conditions' got triggered, the result must be a draw. 
function checkDraw() {
    if (copyOfScoreTrack.slice(1).sort().shift() != 0) {
        if (winner == false) {
            console.log('draw')
            document.querySelector('#winner').classList.add('draw')
            document.querySelector('div#result').classList.add('invis')
        }
    }
}


// Play again button
let playAgain = document.querySelector('.clickPlayAgain')
playAgain.addEventListener('click', function (event) {
    if (winner == false) {
        console.log('no play again until winner declared')
    } if (winner == true) {
    document.querySelector('div#result').removeAttribute('class')
    gameStyleChange ()
    document.querySelector('#winner').classList.replace('draw', 'invis')
    document.querySelector('#winner').removeAttribute('class')
    winner = false
    children = allSquares.querySelectorAll(':scope > div')
        for (let i = 0; 0 < 9; i++) {
            children[i].removeAttribute('class')
            copyOfScoreTrack[(i + 1)] = '0'
        }
    }
})

// Button to clear score. Use the play again button to have all of the same features as that. Additional features 1. return whosTurn to 1 2. set scores to 0. 

let resetScores = document.querySelector('.clickResetScore')
resetScores.addEventListener('click', function (event) {
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
    checkGameStyleOnButtonClickAndChangeTopSymbol ()
    children = allSquares.querySelectorAll(':scope > div')
    for (let i = 0; 0 < 9; i++) {
        children[i].removeAttribute('class')
        copyOfScoreTrack[(i + 1)] = '0'
    }
})

// take some code from above to make a fucntion to reset aspects when a style change is made

function changeStyleMidGame () {
    document.querySelector('#winner').removeAttribute('class')
    winner = false
    whoTurn = 1
    setScore1.textContent = 0
    document.querySelector('.score1').textContent = 0
    setScore2.textContent = 0
    document.querySelector('.score2').textContent = 0
    checkGameStyleOnButtonClickAndChangeTopSymbol () 
    children = allSquares.querySelectorAll(':scope > div')
    for (let i = 0; 0 < 9; i++) {
        children[i].removeAttribute('class')
        copyOfScoreTrack[(i + 1)] = '0'
    }
}

function checkGameStyleOnButtonClickAndChangeTopSymbol () {
    if (gameStyle == 1) {
        document.querySelector('#showSymbol').removeAttribute('class')
        document.querySelector('#showSymbol').classList.add('addPlayer1')
    } else if (gameStyle == 2) {
        document.querySelector('#showSymbol').removeAttribute('class')
        document.querySelector('#showSymbol').classList.add('addPlayer1rvb')
    } else if (gameStyle == 3) {
        document.querySelector('#showSymbol').removeAttribute('class')
        document.querySelector('#showSymbol').classList.add('addPlayer1election')
    } else if (gameStyle == 4) {
        document.querySelector('#showSymbol').removeAttribute('class')
        document.querySelector('#showSymbol').classList.add('addPlayer1GoneFishing')
    }
}



// code for changing modes:
// Set a default background colour via JS
document.querySelector('div#result').classList.add('footerStandardBack')
// default backgrounds for the biggers symbols




// Pseudo Code - Planning area for each section to be commented out in time in order to copy into working code. 

// socring logic - pseudo code:
// 1. Options worked out for win (only 8 combos for each player) .2 store the choice made by each player so the combo can be listened out for .3. Display winner 4.Stop game from registering clicks at this point. 5. Show the winning combo by changing those squares. 6. update the score in each col.
//console log put into eventListener to show the clicks and how to scrape the needed info of what they are hitting. 
// let scoreTrack = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let copyOfScoreTrack = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] // use this to manipulate in event listener code. 
// numbbers now include 0 to make my maths easier :D
//2. Storing the choice as a 'var combo' DOES NOT WORK - I think it captures the slice at the start and does not keep it upto date.


// Make a function to work out the winning comobo to increase winning box size:
function increaseWinners2() {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) + copyOfScoreTrack.at(3) == ('222')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square2').classList.add('boxesThatWon')
        document.querySelector('#square3').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(6) == ('222')) {
        document.querySelector('#square4').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square6').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) + copyOfScoreTrack.at(9) == ('222')) {
        document.querySelector('#square7').classList.add('boxesThatWon')
        document.querySelector('#square8').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) + copyOfScoreTrack.at(7) == ('222')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square4').classList.add('boxesThatWon')
        document.querySelector('#square7').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(8) == ('222')) {
        document.querySelector('#square2').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square8').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) + copyOfScoreTrack.at(9) == ('222')) {
        document.querySelector('#square3').classList.add('boxesThatWon')
        document.querySelector('#square6').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(9) == ('222')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(7) == ('222')) {
        document.querySelector('#square3').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square7').classList.add('boxesThatWon')
    }
}

function increaseWinners1() {
    if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(2) + copyOfScoreTrack.at(3) == ('111')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square2').classList.add('boxesThatWon')
        document.querySelector('#square3').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(4) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(6) == ('111')) {
        document.querySelector('#square4').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square6').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(7) + copyOfScoreTrack.at(8) + copyOfScoreTrack.at(9) == ('111')) {
        document.querySelector('#square7').classList.add('boxesThatWon')
        document.querySelector('#square8').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(4) + copyOfScoreTrack.at(7) == ('111')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square4').classList.add('boxesThatWon')
        document.querySelector('#square7').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(2) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(8) == ('111')) {
        document.querySelector('#square2').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square8').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(6) + copyOfScoreTrack.at(9) == ('111')) {
        document.querySelector('#square3').classList.add('boxesThatWon')
        document.querySelector('#square6').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(1) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(9) == ('111')) {
        document.querySelector('#square1').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square9').classList.add('boxesThatWon')
    } if (copyOfScoreTrack.at(3) + copyOfScoreTrack.at(5) + copyOfScoreTrack.at(7) == ('111')) {
        document.querySelector('#square3').classList.add('boxesThatWon')
        document.querySelector('#square5').classList.add('boxesThatWon')
        document.querySelector('#square7').classList.add('boxesThatWon')
    }
} 

// computer maths:
// make a look to check what is still 0

// if (copyOfScoreTrack.at(6) == 0) {
//     copyOfScoreTrack.splice((j), 1, '2')
// }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// old maths code:
function compMaths () {
    let compMoveFound = false
    ranNum = getRandomInt(1,(10))
    // console.log(ranNum)
    for (let i = 0; i < 1000; i++) {
        ranNum = getRandomInt(1,(10))
        console.log(ranNum)
        if (copyOfScoreTrack.at(ranNum) == 0 ) {
            console.log('hi')
            copyOfScoreTrack.splice((ranNum), 1, '2')
            if (gameStyle == 1) {
                document.querySelector(`#square${(ranNum)}`).classList.add('addPlayer2')
                {break}
            } else if (gameStyle == 2) {
                document.querySelector(`#square${(ranNum)}`).classList.add('addPlayer2rvb')
                {break}
            } else if (gameStyle == 3) {
                document.querySelector(`#square${(ranNum)}`).classList.add('addPlayer2election')
                {break}
            } else if (gameStyle == 4) {
                document.querySelector(`#square${(ranNum)}`).classList.add('addPlayer2GoneFishing')
                {break}
            }
        }
    }
}
    

    
    // copyOfScoreTrack.at(ranNum) == 0
    // for (let i = 10; i > 0; i--) {
    //     let ranNum = getRandomInt(1,(10))
    //         console.log(ranNum)
    // }
    //         console.log(checkRemaining)
    //         if (checkRemaining == 0) {
    //             console.log('Need to change index K as comp choice')
    //             copyOfScoreTrack.splice((j), 1, '2')
    //             if (gameStyle == 1) {
    //                 document.querySelector(`#square${(i)}`).classList.add('addPlayer2')
    //                 {break}
    //             } else if (gameStyle == 2) {
    //                 document.querySelector(`#square${(i)}`).classList.add('addPlayer2rvb')
    //                 {break}
    //             } else if (gameStyle == 3) {
    //                 document.querySelector(`#square${(i)}`).classList.add('addPlayer2election')
    //                 {break}
    //             } else if (gameStyle == 4) {
    //                 document.querySelector(`#square${(i)}`).classList.add('addPlayer2GoneFishing')
    //                 {break}
    //         }
    //     }

        
    
    // if (gameStyle == 1) {
    //             if (j == 1 && copyOfScoreTrack.at(1) == 0) {
    //                 document.querySelector('#square1').classList.add('addPlayer2')
    //             } if (j == 2 && copyOfScoreTrack.at(2) == 0) {
    //                 document.querySelector('#square2').classList.add('addPlayer2')
    //             } if (j == 3 && copyOfScoreTrack.at(3) == 0) {
    //                 document.querySelector('#square3').classList.add('addPlayer2')
    //             } if (j == 4 && copyOfScoreTrack.at(4) == 0) {
    //                 document.querySelector('#square4').classList.add('addPlayer2')
    //             } if (j == 5 && copyOfScoreTrack.at(5) == 0) {
    //                 document.querySelector('#square5').classList.add('addPlayer2')
    //             } if (j == 6 && copyOfScoreTrack.at(6) == 0) {
    //                 document.querySelector('#square6').classList.add('addPlayer2')
    //             } if (j == 7 && copyOfScoreTrack.at(7) == 0) {
    //                 document.querySelector('#square7').classList.add('addPlayer2')
    //             } if (j == 8 && copyOfScoreTrack.at(8) == 0) {
    //                 document.querySelector('#square8').classList.add('addPlayer2')
    //             } if (j == 9 && copyOfScoreTrack.at(9) == 0) {
    //                 document.querySelector('#square9').classList.add('addPlayer2')
    //             }
    //         }




        



        
//         } if (gameStyle == 2) {
//             eachSquare.classList.add('addPlayer2rvb')
//         } if (gameStyle == 3) {
//             eachSquare.classList.add('addPlayer2election')
//         } if (gameStyle == 4) {
//             eachSquare.classList.add('addPlayer2GoneFishing')
//         } 
        
//         break
//     }
// }  
// }

// if (gameStyle == 1) {
//     eachSquare.classList.add('addPlayer2')
// } if (gameStyle == 2) {
//     eachSquare.classList.add('addPlayer2rvb')
// } if (gameStyle == 3) {
//     eachSquare.classList.add('addPlayer2election')
// } if (gameStyle == 4) {
//     eachSquare.classList.add('addPlayer2GoneFishing')
// } 

// comp maths works at this point and changes text. 



// find the first 0 and replace it with 2 + change the propert image
