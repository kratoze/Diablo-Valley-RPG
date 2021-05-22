import { Orientation } from '../lib/constants/Orientation';

export const Utils = {
  loadEnemyAnims: (scene, textureName) => {
    const lowerCaseName = textureName.toLowerCase();
    for (const direction in Orientation) {
      console.log(`${textureName} move${direction}`);
      scene.anims.create({
        key: `${textureName} move${direction}`,
        frames: scene.anims.generateFrameNames(textureName.toLowerCase(), {
          start: 0,
          end: 3,
          prefix: `${textureName} ${direction.toLowerCase()}`,
          suffix: '.png',
        }),
        frameRate: 8,
        repeat: -1,
      });
    }
  },
};
