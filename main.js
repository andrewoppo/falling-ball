const game = new Game();

// function preload() {
//     game.preload();
// }

function setup () {
    createCanvas(500, 500);
    game.setup();
}

function draw() {
    game.draw();
}

// function keyPressed() {
//     // if (keyCode === 37) {
//     //     game.player.moveLeft();
//     // }
//     // if (keyCode === 39) {
//     //     game.player.moveRight();
//     // }
//      window.addEventListener("keydown", () => {
//          if (keyCode === 37) {
//          game.player.moveLeft();
//          }
//      });
//      window.addEventListener("keydown", () => {
//          if (keyCode === 39) {
//          game.player.moveRight();
//          }
//     })
// }