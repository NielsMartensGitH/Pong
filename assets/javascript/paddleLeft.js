export default class PaddleLeft {
    constructor(gameWidth, gameHeight) {
        this.width = 20;
        this.height = 100;
        this.position = {
            x: this.width + 10,
            y: gameHeight / 2 - this.height / 2
        };
    };

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
};