import { Orientation } from '../constants/Orientation';

export const WeaponAttack = (self) => ({
  attack: (parentSprite, orientation) => {
    self.hitBoxOffset = { x: 0, y: 0 };

    self.scene.physics.world.enableBody(self);

    switch (orientation) {
      case Orientation.Up:
        self.hitBoxOffset.y = -self.offset;
        break;
      case Orientation.Down:
        self.hitBoxOffset.y = self.offset;
        break;
      case Orientation.Left:
        self.hitBoxOffset.x = -self.offset;
        self.hitBoxOffset.y = 2;
        break;
      case Orientation.Right:
        self.hitBoxOffset.x = self.offset;
        self.hitBoxOffset.y = 2;
        break;
      default:
        break;
    }

    self.x = self.parentSprite.x - 12 + self.hitBoxOffset.x;
    self.y = self.parentSprite.y - 8 + self.hitBoxOffset.y;
  },

  stopAttack: () => {
    self.disableBody();
  },

  onHit: (weapon, enemy) => {
    enemy.takeDamage(self.damage);
  },
});
