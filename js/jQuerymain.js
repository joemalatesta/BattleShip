


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

    $(document).on('click', '.aButton', function(e) {
      let $aButton = $(event.target)
      $aButton.css('background-color', 'red')
      toFireButton.push(e.currentTarget.innerText)

    })




    $(document).on('click', '.nButton', function(e) {
      let $nButton = $(event.target)
      $nButton.css('background-color', 'red')
      toFireButton.push(e.currentTarget.innerText)

      chk4fire()
    })



})
