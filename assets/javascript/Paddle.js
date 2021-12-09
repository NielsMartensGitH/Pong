export default class PaddleRight {
    constructor(x, y) {
        this.gameWidth = 800;
        this.gameHeight = 500;
        this.width = 20;
        this.height = 100;
        this.position = {
            x: x,
            y: y
        };
    };

    draw(ctx) {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
};