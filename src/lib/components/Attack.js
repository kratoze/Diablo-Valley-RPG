export const Attack = (self) => ({
  attack: () => {
    if (self.autoAttack) {
      self.isAttacking = true;
      self.play(`attack${self.orientation}`);
      self.weapon.attack(self, self.orientation);
    } else {
      self.stopAttack();
    }
  },

  stopAttack: () => {
    self.weapon.stopAttack();
    if (self.autoAttack) self.attack();
    self.play(`${self.name} move${self.orientation}`);
    self.isAttacking = false;
  },
});
