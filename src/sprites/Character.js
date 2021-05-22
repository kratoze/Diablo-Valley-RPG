import { Orientation } from '../lib/constants/Orientation';

import { Move, Attack, Damageable } from '../lib/components';

export default class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, options) {
    super(scene, x, y, options.texture);

    Object.assign(this, Move(this));
    Object.assign(this, Attack(this));
    Object.assign(this, Damageable(this));

    this.health = 20;
    this.speed = options.speed;
    this.maxSpeed = options.maxSpeed;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setSize(8, 16);
    this.setDepth(2);
    this.body.maxVelocity.x = this.maxSpeed;
    this.body.maxVelocity.y = this.maxSpeed;

    this.isAttacking = false;
    this.invulnerable = false;

    this.orientation = Orientation.Down;
  }
}
