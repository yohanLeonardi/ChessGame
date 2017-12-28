class ChessPiece {
  constructor(type, id, color, position, imgSrc) {
    this._type = type;
    this._color = color;
    this._id = this._color+'_'+this._type+'_'+id;
    this._imgSrc = imgSrc;
    this._position = position;
    this._moved = false;
    this._taken = false;
  }

  init() {
    var obj = '<div class="piece ' + this._color + '" id = "'+this._id+'" draggable="true">'
            + '<img src="./img/chesspieces/'+this._imgSrc+'" alt="Chess piece" draggable="false">'
            + '</div>';
    $('#'+this._position).append(obj);
  }

  set(destination) {
    if (this._position === destination) return;
    if (this._moved === true) {
      //TODO: set piece to move with only one cell (diagonal when there's target on diagonal way)
    }
    this._position = destination;
    this._moved = true;
  }

  get id() {
    return this._id;
  }

  get position() {
    return this._position;
  }

  get color() {
    return this._color;
  }

  get taken() {
    return this._taken;
  }

  set taken(val) {
    //TODO: take the obj to taken div
    $('#'+this._id).appendTo('#taken_'+this._color);
    return this._taken = !this._taken;
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
    super('queen', id, color, position, imgSrc);
  }
}

class King extends ChessPiece{
  constructor(id, color, position) {
    let imgSrc = (color === 'dark' ? 'kdt60.png' : 'klt60.png');
    super('king', id, color, position, imgSrc);
  }
}
