class Game {
    constructor() {
        this.obstacles = [];
        this.spawnRate = 40;
        this.song;
        // this.player = new Player ();
        
    }
    preload() {
        this.song = loadSound("assets/574744__badoink__there-is-hope.wav");
    }
    setup() {
        this.player = new Player ();
    }
    // preload() {
    //     this.player.preload();
    // }

    draw() {
        clear();
        if (frameCount === 1) this.song.play();
        if (this.song.isPlaying() === false ) {
            this.song.play() }
        if (this.spawnRate > 31 && frameCount % 40 === 0) {
            this.spawnRate -= .11;
        }
        if (frameCount % Math.floor(this.spawnRate) === 0) {
            this.obstacles.push(new Obstacle());
        
            console.log(Math.floor(this.spawnRate));
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