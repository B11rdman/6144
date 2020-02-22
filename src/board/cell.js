// import { TEXTURE } from "../src/constants";

export class Cell extends Phaser.GameObjects.Container {
  constructor(scene, row, col) {
    super(scene);

    this._row = row;
    this._col = col;
    this._buildBg();
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }

  get cube() {
    return this._cube;
  }

  get isEmpty() {
    return !this._cube;
  }

  addCube(cube) {
    this.add(cube);
    this._cube = cube;
  }

  _buildBg() {
    // const bg = this.scene.add.image(0, 0, TEXTURE, "box_bg.png");
    this.add((this._bg = bg));

    const { displayWidth, displayHeight } = bg;

    this.width = displayWidth;
    this.height = displayHeight;
  }
}
