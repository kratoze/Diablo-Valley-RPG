import Phaser from 'phaser';
//import plugins
import ControlsPlugin from './plugins/ControlsPlugin.js';

// import scenes
import Preload from './scenes/Preload';
import Level from './scenes/Level';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 400,
  height: 400,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      //debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  plugins: {
    scene: [
      {
        key: 'Controls',
        plugin: ControlsPlugin,
        mapping: 'controls',
      },
    ],
  },
  scene: [Preload, Level],
};

const game = new Phaser.Game(config);
