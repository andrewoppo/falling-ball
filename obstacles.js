class Obstacle {
    constructor() {
        this.velocity = 2;
        this.lineY = height;
        this.rectWidth = 50;
        this.rectX = this.rectWidth + (Math.random() * (500 - this.rectWidth*2));
        this.rectHeight = 6;
    }

    draw() {
        this.lineY -= this.velocity;
        push();
        strokeWeight(5);
        line(0, this.lineY, width, this.lineY);
        pop();
        push();
        fill('white');
        strokeWeight(0);
        rect(this.rectX, this.lineY - 3, this.rectWidth, this.rectHeight);
        pop();
    }
// start back here:

    collision(ballCoords) {
        const gapMiddle = this.rectX + this.rectWidth / 2;
        const ballBottom = ballCoords.y + ballCoords.diameter;
        const ballMiddle = ballCoords.x + ballCoords.diameter / 2;
        if (ballBottom === this.lineY && dist(gapMiddle, this.lineY, ballMiddle, ballBottom) > 15) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        }
    }
}
