class Game {
    constructor() {
        this.obstacles = [];
        
    }
    setup() {
        this.player = new Player ();
    }

    draw() {
        clear();
        if (frameCount % 50 === 0) {
            this.obstacles.push(new Obstacle());
        }
      
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
            //console.log('obstacle');
            if (obstacle.collision(this.player)) {
                this.player.velocity = -2;
            } 
            if (obstacle.collisionGap(this.player)) {
                this.player.velocity = 2;
            }
        });   

        this.player.draw();

     }
    checkPlayerStatus() {
        if (this.player.y >= 0) {
            return true;
        }
    }
}