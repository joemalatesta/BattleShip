


$(() => {
  makeBoard()
  ply1()
  ply2()
  cmptr()
  genGameBoard()
  genTargetpads()
  boardTop()
  boardSide()
  $openBtn.on('click', openModal)
  $closeBtn.on('click', closeModal)
  startGame()
    $(document).on('click', '.aButton', function(e) {
      let $aButton = $(event.target)
      $aButton.css('background-color', 'red')
      toFireButton.push(e.currentTarget.innerText)
    })

    $(document).on('click', '.nButton', function(e) {
      let $nButton = $(event.target)
      let $launchButton =$(event.target)
      $nButton.css('background-color', 'red')
      toFireButton.push(e.currentTarget.innerText)
      $('#launchButton').css('background-color', 'red')
    })

    $(document).on('click', '#launchButton', function(e) {
      let $launchButton = $(event.target)
      chk4fire()
      $('#launchButton').css('background-color', 'white')
    })


})
