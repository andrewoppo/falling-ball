class Player {
    constructor() {
        this.velocity = 2;
        this.diameter = 20;
        this.x = width / 2;
        this.y = 0;
        //this.img;
    }
    // preload() {
    //     this.img = loadImage("ball_blue_small_alt.png")
    // }
    draw () {
        this.y += this.velocity;
        circle(this.x, this.y, this.diameter);
        fill('black');
        
        if (this.y >= height - (this.diameter + 10)) {
            this.y = height - (this.diameter+ 10);
        }
        if (this.x >= width - this.diameter / 2) {
            this.x = width - this.diameter / 2;
        }
        if (this.x <= 0 + this.diameter / 2) {
            this.x = 0 + this.diameter / 2;
        }
        if (keyIsDown(LEFT_ARROW)){
            this.x -= 5;
           // console.log(this.x);
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x += 5;
           // console.log(this.x);
        }
        

    }
}