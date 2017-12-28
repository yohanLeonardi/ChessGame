var chessPieceManager = (function () {

  //TODO: Design how to init images at the first time
  // Keep this variable private inside this closure scope
  var chessPieces = [];
  var filesList = 'abcdefgh';
  var rank = {
    dark: {
      line1: 7,
      line2: 8
    },
    light: {
      line1: 2,
      line2: 1
    }
  };

  //QUESTION: should I push items by color/type/number or
  //          just id including all three as a combination?
  function initPieces(color) {
    for (var i = 0; i < 8; i++) {
      initFirstLine(i, color);
      initSecondLine(i, color);
    }
  }

  //IDEA: it might be complicated by starting id from 1,
  //      but such a thing as Pawn 0 sounds weird too.
  function initFirstLine (fileIndex, color) {
    let position = filesList.charAt(fileIndex)+rank[color]['line1'];
    let piece = new Pawn((fileIndex+1), color, position);
    piece.init();
    chessPieces.push(piece);
  }

  function initSecondLine (fileIndex, color) {
    let id = fileIndex <= 4 ? 1 : 2;
    let piece;
    let position = filesList.charAt(fileIndex)+rank[color]['line2'];
    if (fileIndex === 0 || fileIndex === 7) piece = new Rook(id, color, position);
    else if (fileIndex === 1 || fileIndex === 6) piece = new Knight(id, color, position);
    else if (fileIndex === 2 || fileIndex === 5) piece = new Bishop(id, color, position);
    else if (fileIndex === 3) piece = new Queen(id, color, position);
    else if (fileIndex === 4) piece = new King(id, color, position);

    if (piece != null) {
      piece.init();
      chessPieces.push(piece);
    }
  }

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    init: function() {
      initPieces('dark');
      initPieces('light');
    },

    find: function(divID) {
      //parse div ID
      return chessPieces.find(function(e) {
        if (e.id === divID) return true;
      });
    },

    getPieces: function () {
      return chessPieces;
    }
  }
})();
