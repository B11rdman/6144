import { TEXTURE } from "../src/constants";

export class Cube extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);

    this._build();
  }

  _build() {
    this._buildBg();
    this._buildText();
  }

  _buildBg() {
    const bg = this.scene.add.image(0, 0, TEXTURE, "cub.png");
    this.add((this._bg = bg));
    bg.setTint(0x00ff00);
  }

  _buildText() {
    let r = Math.random();
    if (r > 0.5) {
      const text = this.scene.add.text(0, 0, "3", {
        fontFamily: '"Arial"',
        color: "blue",
        align: "center",
        fontSize: 60
      });
      text.setOrigin(0.5);
      this.add(text);
    } else if (r < 0.5) {
      const text = this.scene.add.text(0, 0, "6", {
        fontFamily: '"Arial"',
        color: "blue",
        align: "center",
        fontSize: 60
      });
      text.setOrigin(0.5);
      this.add(text);
    }
  }
}
