/* global $ */

var inputBox = $('#color-field')
var setColorButton = $('#set-color')
var brushBox = $('.brush')

setColorButton.on('click', function (e) {
  e.preventDefault()
  brushBox.css('background', inputBox.val())
})

inputBox.on('onkeypress', function (e) {
  if (e.which === 13) {
    brushBox.css('background', inputBox.val())
  }
})

for (var i = 0; i < 8000; i++) {
  var $newDiv = $('<div class="square"></div>')
  $newDiv.attr('id', 'square' + i)
  $('body').append($newDiv)
}

var square = $('.square')

square.on('mouseover', function () {
  $(this).css('background', inputBox.val())
})
