import { Orientation } from '../lib/constants/Orientation';

import { WeaponAttack } from '../lib/components';

export default class Weapon extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, parentSprite, x, y) {
    super(scene, x, y, 'weapon');
    this.parentSprite = parentSprite;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setVisible(false);
    this.body.setCircle(12);
    this.damage = 10;

    this.offset = 5;

    Object.assign(this, WeaponAttack(this));
    // Add event listener for each direction
  }

  //attack() {
  //this.hitBoxOffset = { x: 0, y: 0 };

  //this.scene.physics.world.enableBody(this);
  //switch (this.parentSprite.orientation) {
  //case Orientation.Up:
  //this.hitBoxOffset.y = -this.offset;
  //break;
  //case Orientation.Down:
  //this.hitBoxOffset.y = this.offset;
  //break;
  //case Orientation.Left:
  //this.hitBoxOffset.x = -this.offset;
  //this.hitBoxOffset.y = 2;
  //break;
  //case Orientation.Right:
  //this.hitBoxOffset.x = this.offset;
  //this.hitBoxOffset.y = 2;
  //break;
  //default:
  //break;
  //}
  //this.x = this.parentSprite.x - 12 + this.hitBoxOffset.x;
  //this.y = this.parentSprite.y - 8 + this.hitBoxOffset.y;
  //}

  //stopAttack() {
  //this.disableBody();
  //this.scene.physics.world.disableBody(this);
  //}

  //onHit(weapon, enemy) {
  //enemy.takeDamage(this.damage);
  //}
}
