import { Board } from "./board/board";

export class MainView extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._build();
  }

  _build() {
    this._buildBoard();
  }

  _buildBoard() {
    const board = new Board(this.scene);
    this.add(board);
  }
}
