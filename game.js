class Game {
    constructor() {
        this.obstacles = [];
        
    }
    setup() {
        this.player = new Player ();
    }

    draw() {
        clear();
        this.player.draw();
        if (frameCount % 50 === 0) {
            this.obstacles.push(new Obstacle());
        }
      
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
            //console.log('obstacle');
        })
      
     }
}