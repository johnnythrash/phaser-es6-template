import 'phaser';


const config = {
  type: Phaser.Auto,
  width: 490,
  height: 630,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y:300 },
      debug: false
    }
  },
  scene: []
};

// game
const game = new Phaser.Game(config);