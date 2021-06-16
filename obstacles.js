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
        //console.log(this.rectX)
        pop();
    }
// start back here:

    collision(ballCoords) {
        const gapMiddle = this.rectX + this.rectWidth / 2;
        //wy when i try to make this in the midde does it start skiping lines
        const ballMiddleY = ballCoords.y + ballCoords.diameter;
        const ballMiddleX = ballCoords.x + (ballCoords.diameter / 2) - 8;
        // console.log('bc - ' + ballCoords.x + ballCoords.y);
        // console.log('gm - ' + gapMiddle);
        // console.log('bb - ' + ballBottom);
        if ((ballCoords.y) === this.lineY && dist(gapMiddle, this.lineY, ballMiddleX, ballMiddleY) > 20) {
           console.log(ballCoords.y);
            return true;
        } else {
            //console.log('false');
            return false;
        }
       
    }
    collisionGap(ballCoords) {
        const gapMiddle = this.rectX + this.rectWidth / 2;
        const ballMiddleY = ballCoords.y + ballCoords.diameter;
        const ballMiddleX = ballCoords.x + (ballCoords.diameter / 2) - 8;
        if (dist(gapMiddle, this.lineY, ballMiddleX, ballMiddleY) <= 20) {
            //console.log('true');
            return true;
        } else {
            //console.log('false');
            return false;
        }
    }
}
