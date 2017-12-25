function init() {
  boardManager.init();
  chessPieceManager.init();
  boardManager.addEvent();
}

window.onload = init;
