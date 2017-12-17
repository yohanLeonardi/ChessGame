function init() {
  initBoard();
}

function initBoard() {
  var board = $('#board');
  for (var i = 0; i < 8; i++) {
    board.append(initRow());
  }
}

function initRow() {
  return $( '<div/>', {
      html: initSquares(),
      'class': 'row'
  });
}

function initSquares() {
  var squares = '';
  for (var i = 0; i < 8; i++) {
    squares += '<div class="square">'
            // + '<img src="./img/chesspieces/pdt60.png" alt="Spreadsheet screenshot.">'
            + '</div>';
  }
  return squares;
}

window.onload = init;
