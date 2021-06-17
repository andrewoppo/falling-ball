const game = new Game();
let timerValue = 0;
// let pressStartFont;

// function fontRead() {
//     fontReady = true;
// }

// function preload() {
//   game.preload();
// }

function setup() {
    //mode = 0;
    createCanvas(500, 500);
    setInterval(timer, 100);
    // textFont(pressStartFont);
    game.setup();


}

function draw() {
    // clear();
    // if (mode === 0) {
    //     text('Press enter to start', width / 2, height / 2);
    // }
    // if (mode === 1) {
    //     game.setup();
    // }
    game.draw();
    if (game.checkPlayerStatus()) {
        textAlign(LEFT);
        textFont('Arial');
        textSize(18);
        text("Score: " + timerValue, 380, 15);
    }
    if (!game.checkPlayerStatus()) {
        noLoop();
        background('white');
        textAlign(CENTER);
        textFont('Arial');
        textSize(24);
        text("GAME OVER! Your score is: " + timerValue, width / 2, height / 2)
    }
}
function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
    }
}
function timer() {
    timerValue += 10;
}
