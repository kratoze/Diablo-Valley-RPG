export const Move = (self) => ({
  move: (vector) => {
    self.setVelocity(vector.x, vector.y);
    if (!self.isAttacking) self.play(`${self.name} move${self.orientation}`);
  },

  idle: () => {
    self.setVelocity(0, 0);
    self.play(`idle${self.orientation}`);
  },
});
