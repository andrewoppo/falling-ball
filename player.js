class Player {
    constructor() {
        this.velocity = 2;
        this.diameter = 20;
        this.x = width / 2;
        this.y = 0;
    }
    draw () {
        this.y += this.velocity;
        circle(this.x, this.y, this.diameter);
        fill('blue');
        
        if (this.y >= height - this.diameter) {
            this.y = height - this.diameter;
        }
        if (keyIsDown(LEFT_ARROW)){
            this.x -= 3;
            console.log(this.x);
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x += 3;
            console.log(this.x);
        }
        

    }
}