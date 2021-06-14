class Obstacle {
    constructor() {
        this.velocity = 2;
        this.lineY = 500;
        this.rectWidth = 50;
        this.rectX = this.rectWidth + (Math.random() * (500 - this.rectWidth*2));
        this.rectHeight = 5;
    }

    draw() {
        this.lineY -= this.velocity;
        strokeWeight(5);
        line(0, this.lineY, 500, this.lineY);
        
    }
}

// class ObstacleGap extends Obstacle {
//     draw() {
//         this.lineY -= this.velocity;
//         fill('white');
//         noStroke();
//         rect(this.rectX, this.lineY, this.rectWidth, this.rectHeight)
//     }

// }