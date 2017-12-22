class ChessPiece {
  constructor(type, id, color, position) {
    this.type = type;
    this.id = this.type+'_'+id;
    this.color = color;
    this.imgSrc = (color === 'dark' ? 'pdt60.png' : 'plt60.png');
    this.position = position;
    this.moved = false;
  }

  init() {
    var obj = '<div id = "'+this.color+'_'+this.id+'">'
            + '<img src="./img/chesspieces/'+this.imgSrc+'" alt="Chess piece">'
            + '</div>';
    $('#'+this.position).append(obj);
  }

  set(destination) {
    if (this.position === destination) return;
    if (this.moved === true) {
      //TODO: set piece to move with only one cell (diagonal when there's target on diagonal way)
    }
    this.position = destination;
    this.moved = true;
  }

  getId() {
    return id;
  }
}

class Pawn extends ChessPiece{
  constructor(id, color, position) {
    super('pawn', id, color, position);
  }
}

class Rook extends ChessPiece{
  constructor(id, color, position) {
    super('rook', id, color, position);
  }
}

class Knight extends ChessPiece{
  constructor(id, color, position) {
    super('knight', id, color, position);
  }
}

class Bishop extends ChessPiece{
  constructor(id, color, position) {
    super('bishop', id, color, position);
  }
}

class Queen extends ChessPiece{
  constructor(id, color, position) {
    super('bishop', id, color, position);
  }
}

class King extends ChessPiece{
  constructor(id, color, position) {
    super('bishop', id, color, position);
  }
}
