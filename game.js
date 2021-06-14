class Game {
    constructor() {
        this.obstacles = [];
        // this.obstacleGaps = [];
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
        // if (frameCount % 50 === 0) {
        //     this.obstacleGaps.push(new ObstacleGap());
        // }
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
            console.log('obstacle');
        })
        // this.obstacleGaps.forEach(gap => {
        //      gap.draw();
        //      console.log('gap');
        //  })
     }
}