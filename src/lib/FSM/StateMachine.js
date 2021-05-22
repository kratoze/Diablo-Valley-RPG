export class StateMachine {
  constructor(initialState, possiblesStates, args) {
    this.initialState = initialState;
    this.possiblesStates.possiblesStates;
    this.args = args;
    this.state = null;
  }

  start() {
    this.state = this.initialState;
  }

  transition(newState) {
    this.state = newState;
    this.possiblesStates[this.state].execute();
  }
}
/*
 * ENEMY STATES
 * 1. Idle - movement + seeking
 * 2. Player in radius - move to player
 * 3. Player in range - attack
 * 4. Dead
 *
 */

function enemyIdleState() {
  // Move and look for player
}

function enemySeekPlayerState() {
  // Move towards player and check if in range
}

function enemyAttackPlayerState() {
  // Attack player, deal damage if hit
}

function enemyDeadState() {
  // Disable body, remove from display, reward loot and exp
}
