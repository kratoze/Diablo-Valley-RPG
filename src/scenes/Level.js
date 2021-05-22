import Player from '../sprites/Player';
import Enemy from '../sprites/Enemy';

export default class Level extends Phaser.Scene {
  constructor() {
    super({
      key: 'Level',
    });
  }

  create() {
    this.cameras.main.setBackgroundColor(0x2a0503);
    this.map = this.add.tilemap('map');
    const tileset = this.map.addTilesetImage(
      'rpgtiles',
      'map-texture',
      16,
      16,
      0,
      0
    );
    this.layer1 = this.map.createLayer('layer1', tileset, 0, 0);
    this.layer2 = this.map.createLayer('layer2', tileset, 0, 0);
    this.player = new Player(this, 100, 300, {
      speed: 100,
      maxSpeed: 200,
      texture: 'player',
    });

    this.enemies = this.add.group();
    for (let i = 0; i < 12; i++) {
      this.enemies.add(
        new Enemy(
          this,
          250 + i * 40 * Math.random(),
          300 + i * 30 * Math.random(),
          {
            speed: 100,
            maxSpeed: 200,
            texture: 'spirit',
          }
        )
      );
    }

    console.log(this.enemies);
    this.physics.add.overlap(
      this.player.weapon,
      this.enemies,
      this.player.weapon.onHit,
      false,
      this.player.weapon
    );

    this.cameras.main.startFollow(this.player);
    this.controls.addControlledSprite(this.player);
    this.controls.start();
  }

  update() {
    //this.player.update();
  }
}
