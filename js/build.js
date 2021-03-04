//**************************** arrays and objects ***************************************
const ships = { // stores ship build information
  ships: ["patrol", "submarine", "destroyer", "battleship", "carrier"],
  lengths: [5, 4, 3, 3, 2]
}
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const column = ["a","b","c","d","e","f","g","h","i","j"]
const row = [1,2,3,4,5,6,7,8,9,10]
const alphaChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const numChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numChars2 = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newShip = []
const delayInMilliseconds = 1;//sets computer turn delay
const board = [] //stores all useable grid locations
const player1Board = [] // players available target locations
const player1ShipLoc = []
const usedPlayer1BoardMiss = []
const usedPlayer1BoardHit = []
const player2Board = [] // players available target locations
const player2ShipLoc = []
const usedPlayer2BoardMiss = []
const usedPlayer2BoardHit = []
const computerBoard = [] // computers move available spaces
const computerShipLoc = [] // computers ship locations
const usedComputerBoardMiss = []
const usedComputerBoardHit = []
const playerArray = [player1ShipLoc, player2ShipLoc, computerShipLoc]
const targetedLoc = [] // players fired shots
const calledAlphaDigit = $('#calledAlphaDigit')
let lastComputerHit
const computerLastHitChoices = [+1, -1, +10, -10]


let strike = [] // to hold attack values while function executes
let toFireButton = []
let shipLoc = [] // used to build and transfer ship location to players


//************************************* function statements **********************************
const startGame = () => {
  let response = prompt("Are you ready to play battleship?", "Y / N")
  response = response.toLowerCase()
  if (response == 'y') {
    alert("If you not sure how to play, read the 'About The Game' down below")
    alert("LETS PLAY BATTLESHIP!")
  } else if (response == 'n') {
      alert('Maybe next time')
  } else {
      alert('This is not what we want')
      startGame()
    }
}
//************************************** build for background locations *********************************
const randomNumber = (value) => { //random generator for location and computer attack
    let item = value[Math.floor(Math.random() * value.length)]
    return item
}

const makeBoard = () => { //builds 100 spaces for gameplay
  for (i = 0; i < column.length; i++) {
    for (j = 0; j < row.length; j++){
      let firstPoint = column[i]
      let secondPoint = row[j]
      boardGrid = firstPoint + secondPoint
      board.push(boardGrid)
      computerBoard.push(boardGrid) //for storing spaces that have a hit or miss used by the computer
      player1Board.push(boardGrid) //for storing spaces that have a hit or miss used by player 1
      player2Board.push(boardGrid) //for storing spaces that have a hit or miss used by player 2
    }
  }
}
// const shipLength = () => {
//   for (let i = 0; i < ships.lengths.length; i++){
//     foo = ships.lengths[i]
//     return foo
//   }
// }


const placeShip = (shipLength) => { //pushes to player or computer ship locations

  let locOfShip = randomNumber(board) //gets random location from board
  let strsplit = locOfShip.split("")//
  let k = shipLength + column.indexOf(strsplit[0])
  // console.log(strsplit[0])
  // console.log(shipLength + column.indexOf(strsplit[0]))
  //places the ship horizontal or vertical
  strsplit.shift()
  strsplit = strsplit.join("")
  let value
  let alignment = [0,1]
  let vertOrHorzl = randomNumber(alignment)

  let m = Number(shipLength) + Number(strsplit)
  if (vertOrHorzl == 0) {
    if(m > 9) {
      for(let i = 0; i < shipLength; i++){
        let value = board.indexOf(locOfShip) - i
        let l = board[value]
        if (shipLoc.includes(l)) {
          while( i > 0) {
            i--
            shipLoc.pop(i)
          }
            placeShip(shipLength)
            break
        }
        shipLoc.push(l)
      }
    } else {
      for(let i = 0; i < shipLength; i++){
        let value = board.indexOf(locOfShip) + i
        let l = board[value]
        if (shipLoc.includes(l)) {
          while( i > 0) {
            i--
            shipLoc.pop(i)
          }
          placeShip(shipLength)
          break
        }
        shipLoc.push(l)
      }
    }
  } else {

    if(k > 9) {
      for(let i = 0; i < shipLength; i++){
        let value = board.indexOf(locOfShip) - i * 10
        let l = board[value]
        if (shipLoc.includes(l)) {
          while( i > 0) {
            i--
            shipLoc.pop(i)
          }
            placeShip(shipLength)
            break
        }
        shipLoc.push(l)
      }
    } else {
      for(let i = 0; i < shipLength; i++){
        let value = board.indexOf(locOfShip) + i * 10
        let l = board[value]
        if (shipLoc.includes(l)) {
          while( i > 0) {
            i--
            shipLoc.pop(i)
          }
          placeShip(shipLength)
          break
        }
        shipLoc.push(l)
      }
    }
  }
}

const ply1 = () => {
  shipLoc = []
  placeAllShip()
  for (i = 0; i < shipLoc.length; i++) {
    player1ShipLoc.push(shipLoc[i])
  }
}
const ply2 = () => {
  shipLoc = []
  placeAllShip()
  for (i = 0; i < shipLoc.length; i++) {
    player2ShipLoc.push(shipLoc[i])
  }
}
const cmptr = () => {
  shipLoc = []
  placeAllShip()
  for (i = 0; i < shipLoc.length; i++) {
    computerShipLoc.push(shipLoc[i])
  }
}

const placeAllShip = () => {
  for ( let i = 0; i < ships.lengths.length; i++){
    placeShip(ships.lengths[i])
  }

}
//******************************************* builds for visual board **********************************

const genGameBoard = (i) => {
  for (let i = 0; i < 100; i++) {
    makeSquare(i)
    makeComputerboard(i)
  }
}

const boardTop = () => {
  for (let i = 0; i < 11; i++) {
    makeTopSquare(i)
  }
}

const boardSide = () => {
  for (let i = 0; i < 10; i++) {
    makeSideSquare(i)
  }
}

const genTargetpads = () => {

  for (let i = 0; i < 10; i++) {
    makeAlphaButton(i)
    makeNumButton(i)
  }
  // $('.aButton').on('click')
  // $('.nButton').on('click')
}

const makeSquare = (i) => {
  if (usedPlayer1BoardHit.includes(board[i])) {
    const $hitSquare = $('<thead>').addClass('hitSquare')
    $('.container').append($hitSquare)
  } else if (usedPlayer1BoardMiss.includes(board[i])) {
    const $missSquare = $('<thead>').addClass('missSquare')
    $('.container').append($missSquare)
  }else {
    const $square = $('<thead>').addClass('square')
    $('.container').append($square)
    $square.css('background-color', 'beige')
    $square.attr('id', board[i])
  }
}

const makeSideSquare = (i) => {
  const $square = $('<div>').addClass('square')
  $('.boardSide').append($square)
  $square.css('background-color', '#none')
  $square.text(alphaChar[i])
  $square.css('color', '#f0ff00')
}

const makeTopSquare = (i) => {
  const $square = $('<div>').addClass('square')
  $('.boardTop').append($square)
  $square.css('background-color', 'none')
  $square.text(numChars2[i])
  $square.css('color', '#f0ff00')
}

const makeComputerboard = (i) => {
  if (usedComputerBoardHit.includes(board[i])) {
      const $hitSquareComputer = $('<div>').addClass('hitSquareComputer')
      $('.container2').append($hitSquareComputer)
  } else if (usedComputerBoardMiss.includes(board[i])) {
      const $computerSqr = $('<div>').addClass('computerSqr')
      $('.container2').append($computerSqr)
      $computerSqr.text('X')
      $computerSqr.css('color', 'white')
  } else if (player1ShipLoc.includes(board[i])) {
      const $computerSqrBoat = $('<div>').addClass('computerSqrBoat')
      $('.container2').append($computerSqrBoat)
  } else if (player1Board.includes(board[i])) {
      const $computerSqr = $('<div>').addClass('computerSqr')
      $('.container2').append($computerSqr)
    }
}

const makeNumButton = (i) => {
  const $nButton = $('<button>').addClass('nButton')
  $('.container4').append($nButton)
  $nButton.text(numChars[i])
  $nButton.attr('id', numChars[i])
}

const makeAlphaButton = (i) => {
  const $aButton = $('<button>').addClass('aButton')
  $('.container3').append($aButton)
  $aButton.text(alphaChar[i])
  $aButton.attr('id', alphaChar[i])
}


const makeFireButton = () => {
  const $launchButton = $('.buttonRow').addclass('launchButton')
  $('.buttonRow').append($launchButton)
}
