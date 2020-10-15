// const player2Attack = () => {
//   toFireButton = []
//   console.log(toFireButton)
//   $('.container').empty()
//   $('.container2').empty()
//   $('.container3').empty()
//   $('.container4').empty()
//   genGameBoard()
//   genTargetpads()
// }
// const chk4fire = () => {
// if (toFireButton.length >= 2) {
//   if (playerShipLoc.includes(toFireButton)) {
//     }
//   toFireButton = toFireButton[0].toLowerCase() + toFireButton[1]
//   target(toFireButton[0], toFireButton[1])
//   console.log(playerShipLoc)
//   setTimeout(function() {
//     computerAttack()
//     }, delayInMilliseconds);
//   }
// }
//
// const target = (c,r) => { // takes alpha and numeric values from keypads, combines, and passes this to the check for hits function
//   strikeLoc = c + r
//   if (targetedLoc.includes(strikeLoc)) {
//     console.log("You already shot there")
//   } else {
//     strike.push(strikeLoc)
//     targetedLoc.unshift(strikeLoc)
//     checkForHit()
//   }
// }
//
// const checkForHit = () => { //checks ship location array for the targeted location, if array is empty game is over
//   if(playerShipLoc.includes(targetedLoc[0])) {
//     playerShipLoc.splice(playerShipLoc.indexOf(strike[0]), 1);
//     console.log("YOU HIT")
//   } else {
//     console.log("IT'S A MISS")
//   }
//   strike.pop()
//   if (playerShipLoc.length < 1 || playerShipLoc == undefined){
//   console.log("********************you win********************")
//   }
//
// }
//
//
//
//
// const computerAttack = () => {
//     let x = randomNumber(playerBoard)
//     if (playerShipLoc.length < 1 || playerShipLoc == undefined){
//       console.log("The computer has won")
//       //alert("the game is over")
//     }
//     let z = playerBoard.indexOf(x)
//     console.log(playerBoard.splice(playerBoard.indexOf(x), 1))
//     let gg = x.split("")
//     let r = x[0]
//     gg.shift()
//     target(r, gg)
//
//     //alert("the computer attacks " + r + gg)
//     playerAttack()
// }
