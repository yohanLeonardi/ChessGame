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
      // let piece2;
      // if (i === 0 || i === 7) piece2 = initRook(i, color);
      // if (i === 1 || i === 6) piece2= initKnight(i, color);
      // if (i === 2 || i === 5) piece2= initBishop(i, color);
      // if (i === 3) piece2= initQueen(i, color);
      // if (i === 4) piece2= initKing(i, color);
      //
      // if (piece2 != null) {
      //   piece2.init();
      //   chessPieces.push(piece2);
      // }
    }
  }

  function initFirstLine (fileIndex, color) {
    let piece = initPawn(fileIndex, color);
    piece.init();
    chessPieces.push(piece);
  }

  function initSecondLine (fileIndex, color) {
    let id = fileIndex <= 4 ? 1 : 2;
    let piece;
    let position = filesList.charAt(fileIndex)+rank[color]['line1'];
    if (fileIndex === 0 || fileIndex === 7) piece = initRook(id, fileIndex, color);
    if (fileIndex === 1 || fileIndex === 6) piece = initKnight(id, fileIndex, color);
    if (fileIndex === 2 || fileIndex === 5) piece = initBishop(id, fileIndex, color);
    if (fileIndex === 3) piece = initQueen(id, fileIndex, color);
    if (fileIndex === 4) piece = initKing(id, fileIndex, color);

    if (piece != null) {
      piece.init();
      chessPieces.push(piece);
    }
  }

  //IDEA: it might be complicated by starting id from 1,
  //      but such a thing as Pawn 0 sounds weird too.
  function initPawn(index, color) {
    return new Pawn((index+1), color, filesList.charAt(index)+rank[color]['line1']);
  }

  function initRook (id, index, color) {
    return new Rook(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  function initKnight (id, index, color) {
    return new Knight(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  function initKnight (id, index, color) {
    return new Knight(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  function initBishop (id, index, color) {
    return new Bishop(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  function initQueen (id, index, color) {
    return new Queen(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  function initKing (id, index, color) {
    return new King(id, color, filesList.charAt(index)+rank[color]['line2']);
  }

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    init: function() {
      initPieces('dark');
      initPieces('light');
    },

    getChessPiece: function(divID) {
      //parse div ID
    }
  }
})();
