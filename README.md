# Tic-Tac-Toe
First major project to showcase commits - 2 days to complete functioning game. 

 ---
## :page_facing_up: About

## :fishing_pole_and_fish: Page url
https://ob-code.github.io/Tic-Tac-Toe/ 



## 🗒️ - Planning & Problem Solving
- Design and render a game of Tic Tac Toe in HTML/CSS and JS. 
- **Switch turns** between more than one player
- **Design logic for winning** & **visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

[![Visual]( )

- The method of finding a draw check that all boxes have been selected, but was having a double up if a win was made on the last selection. A win and draw were both declared. A win status or true/false was brought in to try and avoid this as a secondary check to see if a win had occured. 

## 🧰: Tech
---
- Programming languages: JS
- JS functions - pretty cool!
---

## :scream: Bugs to fix
//Known bugs:
    - FIXED :sunglasses: No draw feature yet.
    - FIXED :sunglasses: You can click on a square that has already been clicked on and it changes the turn (background stays the same)
    - FIXED :sunglasses: Play again button does not clear the array so the previous selections are still counting towards the next game. 
     - FIXED :sunglasses: "player [] won" still shows the winner from the previous game even when play again and reset buttons are clicked. 
    - :grey_question: Show the winning combo by changing those squares in some way.
    - :angry: Clicking on the .gameContainer changes the background - need to turn this feature off. 
    - :angry: Need to stop game from registering clicks once winner declared. 


---
## :sob: Lessons learnt
- storing array data in a new variable change the data type and cause problems if not done correctly.
    Storing the choice as a 'var combo' DOES NOT WORK - I think it captures the slice at the start and does not keep it upto date. I have learnt to only use array mutation methods on the array when you are about to acces it. 
- .at() = a very useful method and far less complex than splice and slice. 
---
## :white_check_mark: Cool things I would add if I can keep working on this
