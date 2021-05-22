import { Utils } from '../lib/utils';

import mapTownJson from '../assets/Map/Town.json';
import mapTownTexture from '../assets/Map/Town.png';

import playerTexture from '../assets/Player/Player.png';
import playerJson from '../assets/Player/Player.json';

import Weapon from '../assets/weapon.jpeg';

// Enemy
import enemySpiritTexture from '../assets/Enemy/Spirit/Spirit.png';
import enemySpiritJson from '../assets/Enemy/Spirit/Spirit.json';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }
  preload() {
    // Tile map and map texture
    this.load.image('map-texture', mapTownTexture);
    this.load.tilemapTiledJSON('map', mapTownJson);

    // Player spritesheet
    this.load.atlas('player', playerTexture, playerJson);

    // Weapon
    this.load.image('weapon', Weapon);

    // Enemy sprites
    this.load.atlas('spirit', enemySpiritTexture, enemySpiritJson);
  }
  create() {
    this.anims.create({
      key: 'Player moveUp',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'walk/walk up',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'Player moveDown',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'walk/walk down',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'Player moveRight',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'walk/walk right',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'Player moveLeft',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'walk/walk left',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'idleUp',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'idle/idle up',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'idleRight',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'idle/idle right',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'idleDown',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'idle/idle down',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'idleLeft',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'idle/idle left',
        suffix: '.png',
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'attackUp',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'attack/attack up',
        suffix: '.png',
      }),
      frameRate: 16,
      repeat: 0,
    });
    this.anims.create({
      key: 'attackRight',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'attack/attack right',
        suffix: '.png',
      }),
      frameRate: 16,
      repeat: 0,
    });

    this.anims.create({
      key: 'attackDown',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'attack/attack down',
        suffix: '.png',
      }),
      frameRate: 16,
      repeat: 0,
    });

    this.anims.create({
      key: 'attackLeft',
      frames: this.anims.generateFrameNames('player', {
        start: 1,
        end: 4,
        prefix: 'attack/attack left',
        suffix: '.png',
      }),
      frameRate: 16,
      repeat: 0,
    });
    Utils.loadEnemyAnims(this, 'Spirit');
    //var frameNames = this.textures.get('player').getFrameNames();
    //var enemyFrames = this.textures.get('spirit').getFrameNames();

    this.scene.start('Level');
  }
}
