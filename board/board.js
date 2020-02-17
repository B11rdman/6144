import { BOARD_DIMENSIONS } from "../src/constants";
import { Cell } from "./cell";
import { Cube } from "./cube";

export class Board extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);

    this._cells = [];
    this.flipped = []; //aj dzax
    this._buildBoard();
    this._makeCubes();
  }

  _buildBoard() {
    const gap = 5;
    for (let col = 0; col < BOARD_DIMENSIONS.width; col++) {
      const column = [];

      for (let row = 0; row < BOARD_DIMENSIONS.height; row++) {
        const cell = new Cell(this.scene, row, col);
        this.add(cell);
        column.push(cell);
        const { width, height } = cell;
        cell.setPosition(
          col * (width + gap) + width / 2,
          row * (height + gap) + height / 2
        );
      }

      this._cells.push(column);
    }
  }

  getRandomEmptyCell() {
    const rndI = Math.floor(Math.random() * BOARD_DIMENSIONS.width);
    const rndJ = Math.floor(Math.random() * BOARD_DIMENSIONS.height);
    const rndCell = this._cells[rndI][rndJ];

    if (!rndCell.isEmpty) {
      return this.getRandomEmptyCell();
    }

    return rndCell;
  }

  getCellByCube(cube) {
    for (let i = 0; i < this._cells.length; i++) {
      const columns = this._cells[i];
      for (let j = 0; j < columns.length; j++) {
        const cell = columns[j];
        if (cell.cube === cube) {
          return cell;
        }
      }
    }
  }

  _makeCubes() {
    const emptyCells = this._getEmptyCells();

    for (let i = 0; i < Math.min(2, emptyCells.length); i++) {
      const cube = this._generateRandomCube();
      const cell = this.getRandomEmptyCell();
      cell.addCube(cube);
    }
  }

  _generateRandomCube() {
    const type = Math.floor(Math.random() * 4 + 1);
    const cube = new Cube(this.scene, type);

    return cube;
  }

  _getEmptyCells() {
    const emptyCells = [];
    this._cells.forEach(col => {
      emptyCells.push(...col.filter(cell => cell.isEmpty));
    });
    return emptyCells;
  }
}
