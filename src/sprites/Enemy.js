import { Orientation } from '../lib/constants/Orientation';
import Character from './Character';

export default class Enemy extends Character {
  constructor(scene, x, y, options) {
    super(scene, x, y, options);
    this.name = 'Spirit';
    this.orientation = Orientation.Right;
    this.move({ x: 10, y: 0 });
    this.setDepth(1);
  }
}
