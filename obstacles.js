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
        strokeWeight(5);
        line(0, this.lineY, width, this.lineY);
        push();
        fill('white');
        strokeWeight(0);
        rect(this.rectX, this.lineY - 3, this.rectWidth, this.rectHeight);
        pop();
    }
}
