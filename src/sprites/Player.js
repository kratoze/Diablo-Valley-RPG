import { Orientation } from '../lib/constants/Orientation';

import Character from './Character';
import Weapon from './Weapon';

export default class Player extends Character {
  constructor(scene, x, y, options) {
    super(scene, x, y, options);
    this.name = 'Player';
    this.weapon = new Weapon(scene, this, this.x - 5, this.y);

    for (const direction in Orientation) {
      this.on(
        Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'attack' + direction,
        () => this.attack()
      );
    }

    this.idle();
  }
}
