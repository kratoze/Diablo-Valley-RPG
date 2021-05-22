// TO DO ADD CONDITION IN 'addLISTENER' FUNCTIONS TO MAKE SURE KEYS HAVE BEEN SET
import { Orientation } from '../lib/constants/Orientation';

export default class ControlsPlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
    this.scene = scene;

    this.orientation = Orientation.Down;
  }

  boot() {
    this.WASD = this.setWASDKeys();
    this.MenuKeys = this.setMenuKeys();
    this.interactionKeys = this.setInteractKeys();
  }

  start() {
    this.sprite = this.scene.player;
    this.addWASDOnDownListeners();
    this.addWASDOnUpListeners();
    this.addInteractionKeyOnDownListeners();
    this.addInteractionKeyOnUpListeners();
  }

  stop() {}

  setWASDKeys() {
    return this.scene.input.keyboard.addKeys('W, A, S, D');
  }

  setMenuKeys() {
    return this.scene.input.keyboard.addKeys('E, Q');
  }

  setInteractKeys() {
    return this.scene.input.keyboard.addKeys('J, K, L');
  }

  addWASDOnDownListeners() {
    this.WASD.W.on('down', (event) => this.handleVerticalMovement(event));
    this.WASD.S.on('down', (event) => this.handleVerticalMovement(event));
    this.WASD.A.on('down', (event) => this.handleHorizontalMovement(event));
    this.WASD.D.on('down', (event) => this.handleHorizontalMovement(event));
  }

  addWASDOnUpListeners() {
    this.WASD.W.on('up', (event) => this.onWASDRelease(event));
    this.WASD.S.on('up', (event) => this.onWASDRelease(event));
    this.WASD.A.on('up', (event) => this.onWASDRelease(event));
    this.WASD.D.on('up', (event) => this.onWASDRelease(event));
  }

  addInteractionKeyOnDownListeners() {
    this.interactionKeys.J.on('down', (event) => this.onPrimaryDown(event));
    this.interactionKeys.K.on('down', (event) => this.onSecondaryDown(event));
    this.interactionKeys.L.on('down', (event) => this.onThirdDown(event));
  }

  addInteractionKeyOnUpListeners() {
    this.interactionKeys.J.on('up', (event) => this.onPrimaryUp(event));
    this.interactionKeys.K.on('up', (event) => this.onSecondaryUp(event));
    this.interactionKeys.L.on('up', (event) => this.onThirdUp(event));
  }

  addControlledSprite(sprite) {
    this.sprite = sprite;
  }

  onPrimaryDown(event) {
    this.sprite.autoAttack = true;
    this.sprite.attack();
  }

  onSecondaryDown(event) {}

  onThirdDown(event) {}

  onPrimaryUp(event) {
    this.sprite.autoAttack = false;
  }

  onSecondaryyUp(event) {}

  onThirdUp(event) {}

  handleVerticalMovement(event) {
    let y,
      x = 0;
    if (event.keyCode === 87) {
      this.sprite.orientation = Orientation.Up;
      y = -this.sprite.speed;
    } else if (event.keyCode === 83) {
      this.sprite.orientation = Orientation.Down;
      y = this.sprite.speed;
    }
    if (this.WASD.A.isDown || this.WASD.D.isDown) y = y / 2;
    x = this.WASD.A.isDown ? -this.sprite.speed / 2 : x;
    x = this.WASD.D.isDown ? this.sprite.speed / 2 : x;

    const moveDirection = new Phaser.Math.Vector2(x, y);

    this.sprite.move(moveDirection);
  }

  handleHorizontalMovement(event) {
    let x,
      y = 0;
    if (event.keyCode === 65) {
      this.sprite.orientation = Orientation.Left;
      x = -this.sprite.speed;
    }
    if (event.keyCode === 68) {
      this.sprite.orientation = Orientation.Right;
      x = this.sprite.speed;
    }

    if (this.WASD.W.isDown || this.WASD.S.isDown) x = x / 2;
    y = this.WASD.S.isDown ? this.sprite.speed / 2 : y;
    y = this.WASD.W.isDown ? -this.sprite.speed / 2 : y;

    const moveDirection = new Phaser.Math.Vector2(x, y);

    this.sprite.move(moveDirection);
  }

  onWASDRelease(event) {
    const keysDown = Object.keys(this.WASD).filter((key) => {
      return this.WASD[key].isDown;
    });

    this.sprite.idle();

    if (keysDown.length === 0 && !this.sprite.isAttacking) {
      this.sprite.idle();
    } else {
      keysDown.forEach((key) => {
        this.WASD[key].emit('down', this.WASD[key]);
      });
    }
  }
}
