const Orientaion = {
  Left: 'Left',
  Right: 'Right',
  Up: 'Up',
  Down: 'Down',
};

export default class ControlActions {
  constructor() {}

  addControlledSprite(sprite) {
    this.sprite = sprite;
    this.self = this;
  }

  verticalMovement(event) {
    if (event.originalEvent.key === 'w') {
      this.moveSprite(Orientaion.Up);
    }
    if (event.originalEvent.key === 's') {
      this.moveSprite(Orientaion.Down);
    }
  }

  horizontalMovement(event) {
    console.log(this);
    if (event.originalEvent.key === 'a') {
      this.self.moveSprite(Orientaion.Left);
    }
    if (event.originalEvent.key === 'd') {
      this.moveSprite(Orientaion.Right);
    }
  }

  moveSprite(direction) {
    console.log(this);
    switch (direction) {
      case Orientaion.Left:
        this.sprite.setVelocityX(-100);
        this.sprite.play('walkLeft');
        break;
      case Orientaion.Right:
        this.sprite.setVelocityX(100);
        this.sprite.play('walkRight');
        break;
      case Orientaion.Up:
        this.sprite.setVelocityY(-100);
        this.sprite.play('walkUp');
        break;
      case Orientaion.Down:
        this.sprite.setVelocityY(100);
        this.sprite.play('walkDown');
        break;
      default:
        break;
    }
  }
}
