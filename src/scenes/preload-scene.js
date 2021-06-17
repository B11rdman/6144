import { SceneNames, TEXTURE } from "../constants";

export class PreloadScene extends Phaser.Scene {
  preload() {
    //
  }

  create() {
    this.load.atlas(TEXTURE, "src/assets/atlases/main.png", "src/assets/atlases/main.json");
    this.load.on("progress", this._onFileLoadComplete, this);
    this.load.on("complete", this._onLoadComplete, this);
    this.load.start();
  }

  _onFileLoadComplete(progress) {
    console.log("LOAD_PROGRESS", progress);
  }

  _onLoadComplete() {
    this.game.scene.stop(SceneNames.preload);
    this.game.scene.start(SceneNames.game);
  }
}
