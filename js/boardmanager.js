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

  function allowDrop(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    let id;
    if (e.dataTransfer) {
      id = e.dataTransfer.getData("pieceid");
    } else if (e.originalEvent.dataTransfer){
      id = e.originalEvent.dataTransfer.getData("pieceid");
    }
    if (id) {
      e.target.appendChild(document.getElementById(id));
    }
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
      $('.square').on('drop', drop);
      $('.square').on('dragover', allowDrop);
    }
  }
})();
