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
  let isLightNext = true;

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

  function drag(e) {
    setTransferData(e);
  }

  function displayTurn() {
    $('#status-bar').html('<h4>Next Turn: '+(isLightNext ? 'light' : 'dark')+'</h4>');
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    let id = getTransferData(e);
    if (!id) return;
    console.log(id + ' moved to ' + e.currentTarget.id);

    if (!validate(e, id)) return;

    //once movement is valid, we can pass to the end
    e.currentTarget.appendChild(document.getElementById(id));
    endTurn();
  }

  function setTransferData(e) {
    if (e.dataTransfer) {
      e.dataTransfer.setData('id', e.target.id);
    } else if (e.originalEvent.dataTransfer){
      e.originalEvent.dataTransfer.setData('id', e.target.id);
    }
  }

  function getTransferData(e) {
    if (e.dataTransfer) {
      return e.dataTransfer.getData('id');
    } else if (e.originalEvent.dataTransfer){
      return e.originalEvent.dataTransfer.getData('id');
    }
  }

  function endTurn() {
    isLightNext = !isLightNext;
    displayTurn();
  }

  function validate(e, sourceId) {
    let sourcePiece, dest;
    sourcePiece = chessPieceManager.find(sourceId);
    if (!sourcePiece) return false;

    // find destination is equal to sourcePiece's position
    console.log(sourcePiece.position);
    if (sourcePiece.position === e.currentTarget.id) return false;

    //TODO: find if there's another piece on this div
    dest = $(e.currentTarget).find('.piece');

    if (dest.length !== 0) {
      //TODO: find if source and destination got the same color if true, return false
      let destPiece = chessPieceManager.find(dest[0].id);
      console.log(destPiece);
      if (sourcePiece.color !== destPiece.color) {
        //TODO: move destPiece out of the board
        console.log('piece: ' + sourcePiece.id + ' is taking over piece: ' + destPiece.id);
        destPiece.taken = true;
        return true;
      }
    } else {
      //IDEA: return if position is valid
      return true;
    }
  }

  function findPieceFromSquare(target) {

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
      $('.piece').on('dragstart', drag);
      $('.square').on('drop', drop);
      $('.square').on('dragover', allowDrop);
      displayTurn();
    }
  }
})();
