const computerAttack = () => {
  setTimeout(function() {
    if (lastComputerHit == null) {
      let computerAttackPoint = randomNumber(computerBoard)
      if (player1ShipLoc.length < 1 || player1ShipLoc == undefined){
        alert("THE COMPUTER WON")
      }
      let gg = computerAttackPoint.slice(1)
      let r = computerAttackPoint[0]
      computerTarget(r, gg)
      console.log(computerAttackPoint)
    }else {
      let computerAttackPoint = lastComputerHit
      console.log(lastComputerHit)
      console.log(computerAttackPoint)
      let gg = computerAttackPoint.slice(1)
      if (Number(gg) + 1 > 10) {
        // console.log("this is " gg + 1 )
      }else{
        gg = Number(gg) + 1
      }
      let r = computerAttackPoint[0]
      computerTarget(r, gg)
      console.log(r)
      console.log(gg)
    }
  }, delayInMilliseconds);
}

const computerTarget = (c,r) => { // takes alpha and numeric values from keypads, combines, and passes this to the check for hits function
  strikeLoc = c + r
  if (usedComputerBoardHit.includes(strikeLoc) || usedComputerBoardMiss.includes(strikeLoc)) {
  } else {
      strike.push(strikeLoc)
      targetedLoc.unshift(strikeLoc)
      computerCheckForHit()
    }
}

const computerCheckForHit = () => { //checks ship location array for the targeted location, if array is empty game is over
  if(player1ShipLoc.includes(targetedLoc[0])) {
    player1ShipLoc.splice(player1ShipLoc.indexOf(strike[0]), 1);
    usedComputerBoardHit.push(strike[0])
    lastComputerHit = strikeLoc
    let audio = new Audio('./sounds/Bomb.mp3');
    audio.play();
  } else {
    usedComputerBoardMiss.push(strike[0])
    let audio = new Audio('./sounds/Splash.mp3');
    audio.play();
    lastComputerHit = null
  }
  strike.pop()
  if (player1ShipLoc.length < 1 || player1ShipLoc == undefined){
    alert("***************** The computer wins ********************")
  }

  player1Attack()
}
console.log(player1ShipLoc)
console.log(computerShipLoc)
