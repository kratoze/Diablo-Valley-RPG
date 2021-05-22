export const Damageable = (self) => ({
  takeDamage: (damage) => {
    if (!self.invulnerable) {
      self.health -= damage;
      self.invulnerable = true;

      let timer = self.scene.time.delayedCall(
        200,
        () => (self.invulnerable = false)
      );
    }
    if (self.health < 0) self.die();
  },
  die: () => {
    self.disableBody(true, true);
  },
});
