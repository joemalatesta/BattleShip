//*************************************** functions *******************************

const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

const player1Attack = () => {

  toFireButton = []
  $('.container').empty()
  $('.container2').empty()
  $('.container3').empty()
  $('.container4').empty()
  genGameBoard()
  genTargetpads()

  // $('.aButton').on('click', (event) => {
  //   let $aButton = $(event.target)
  //   $(document).on('click', '.aButton', function(e) {
  //     $aButton.css('background-color', 'red')
  //     toFireButton.push(e.currentTarget.innerText)
  //
  //   })
  // })
  //
  // $('.nButton').on('click', (event) => {
  //   let $nButton = $(event.target)
  //   $nButton.css('background-color', 'red')
  //   $(document).on('click', '.nButton', function(e) {
  //     toFireButton.push(e.currentTarget.innerText)
  //
  //     chk4fire()
  //   })
  // })





}

const chk4fire = () => {
  if (toFireButton.length >= 2) {
      firstValue = toFireButton[0].toLowerCase()
      secondValue = toFireButton.slice(1)
      target(firstValue, secondValue)
      setTimeout(function() {
      computerAttack()
      }, delayInMilliseconds);
  }
}
const target = (c,r) => { // takes alpha and numeric values from keypads, combines, and passes this to the check for hits function
  strikeLoc = c + r
  if (usedPlayer1BoardHit.includes(strikeLoc) || usedPlayer1BoardMiss.includes(strikeLoc)) {
    player1Attack()
  } else {
      strike.push(strikeLoc)
      targetedLoc.unshift(strikeLoc)
      checkForHit()
    }
}

const checkForHit = () => { //checks ship location array for the targeted location, if array is empty game is over
  if(computerShipLoc.includes(targetedLoc[0])) {
    computerShipLoc.splice(computerShipLoc.indexOf(strike[0]), 1);
    usedPlayer1BoardHit.push(strike[0])
  } else {
    usedPlayer1BoardMiss.push(strike[0])
  }
  computerBoard.splice(computerBoard.indexOf(strike), 1)
  strike.pop()
  if (computerShipLoc.length < 1 || computerShipLoc == undefined){
    alert("********************you win********************")
  }

}

// ***DONE   all in seperate containers
// ***DONE   Build grid for playing field and my ship locations
// ***DONE   Build key pads for launching the missiles
// NEED TO DO  Build fire button
// ***DONE   Turn based against the computer
// ***DONE   random placement of ships
// will add at a later time Add a window showing hit or miss
// will add at a later time When picking fire location hover over value light gray the row or column after click turns to dark grey.
// will add at a later time When both values are chosen the cross section shows a target
// ***DONE   build an array with all locations
// ***DONE   build an array with chosen locations that has values pushed in from the master array
// ***DONE   build an array with ship locations
// will add at a later time When both values are set fire button goes from dull red to bright red
// ***DONE   After fire display shows either a hit or miss.
// ***DONE   That location is turned blue for a miss or a small explosion icon for a hit
// ***DONE   It is a neutral color until either of these values are shown.
// will add at a later time Maybe showing ships with damage
// ***DONE   5 ships
// Sound effects?
