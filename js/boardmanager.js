var boardManager = (function () {

  let filesList = 'abcdefgh';
  let rank = {
    dark: {
      line1: 7,
      line2: 8
    },
    light: {
      line1: 2,
      line2: 1
    }
  };

  function initRow(index) {
    return $( '<div/>', {
        html: initSquares(index),
        'class': 'row',
        'id': 'row'+index
    });
  }

  function initSquares(index) {
    let squares = '';
    for (let i = 0; i < 8; i++) {
      squares += '<div class="square" id='+filesList.charAt(i)+(index)+'>'
              + '</div>';
    }
    return squares;
  }

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    init: function() {
      let board = $('#board');
      for (let i = 0; i < 8; i++) {
        board.append(initRow(8-i));
      }
    },

    addEvent: function() {
    }
  }
})();
