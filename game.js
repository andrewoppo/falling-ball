class Game {
    setup () {
        this.player = new Player ();
        this.obstacles = [];
        // this.obstacleGaps = [];
    }

    draw() {
        clear();
        this.player.draw();
        if (frameCount % 50 === 0) {
            this.obstacles.push(new Obstacle());
            // this.obstacles.push(new ObstacleGap());
        }
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
        })
        // this.obstacleGaps.forEach(obstacleGap => {
        //     obstacleGap.draw();
        // })
    }
}