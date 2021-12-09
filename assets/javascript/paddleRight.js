export default class PaddleRight {
    constructor(gameWidth, gameHeight) {
        this.width = 20;
        this.height = 100;
        this.position = {
            x: gameWidth - this.width - 30,
            y: gameHeight / 2 - this.height / 2
        };
    };

    draw(ctx) {
        console.log("works!")
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
};