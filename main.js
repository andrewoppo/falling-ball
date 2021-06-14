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

function keyPressed() {
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keycode === 39) {
        game.player.moveRight();
    }
}