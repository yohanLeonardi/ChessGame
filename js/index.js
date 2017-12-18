function init() {
  initBoard();
}

function initBoard() {
  var board = $('#board');
  for (var i = 0; i < 8; i++) {
    board.append(initRow(8-i));
  }
}

function initRow(index) {
  return $( '<div/>', {
      html: initSquares(index),
      'class': 'row',
      'id': 'row'+index
  });
}

function initSquares(index) {
  var columnNames = 'abcdefgh';
  var squares = '';
  for (var i = 0; i < 8; i++) {
    squares += '<div class="square" id='+columnNames.charAt(i)+(index)+'>'
            // + '<img src="./img/chesspieces/pdt60.png" alt="Spreadsheet screenshot.">'
            + '</div>';
  }
  return squares;
}

window.onload = init;
