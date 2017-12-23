class ChessPiece {
  constructor(type, id, color, position, imgSrc) {
    this.type = type;
    this.id = this.type+'_'+id;
    this.color = color;
    this.imgSrc = imgSrc;
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
    let imgSrc = (color === 'dark' ? 'pdt60.png' : 'plt60.png');
    super('pawn', id, color, position, imgSrc);
  }
}

class Rook extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'rdt60.png' : 'rlt60.png');
    super('rook', id, color, position, imgSrc);
  }
}

class Knight extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'ndt60.png' : 'nlt60.png');
    super('knight', id, color, position, imgSrc);
  }
}

class Bishop extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'bdt60.png' : 'blt60.png');
    super('bishop', id, color, position, imgSrc);
  }
}

class Queen extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'qdt60.png' : 'qlt60.png');
    super('bishop', id, color, position, imgSrc);
  }
}

class King extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'kdt60.png' : 'klt60.png');
    super('bishop', id, color, position, imgSrc);
  }
}
