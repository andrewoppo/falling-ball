const game = new Game();
let timerValue = 0;
// function preload() {
//     game.preload();
// }

function setup () {
    createCanvas(500, 500);
    game.setup();
    setInterval(timer, 100);
}

function draw() {
    game.draw();
    if (game.checkPlayerStatus()) {
        textAlign(LEFT);
        textSize(18);
        text("Score: " + timerValue, 380, 15);
    }
    if (!game.checkPlayerStatus()) {
        noLoop();
        background('white');
        textAlign(CENTER);
        textSize(24);
        text("GAME OVER! Your score is: " + timerValue, width / 2, height / 2)
    }
}
function timer() {
    timerValue += 10;
}
