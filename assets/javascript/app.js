import Paddle from "./paddle.js"

let canvas = document.getElementById("gamebox");

let ctx = canvas.getContext("2d");

let paddleLeft = new Paddle(30, 200);
let paddleRight = new Paddle(750, 200);


paddleLeft.draw(ctx);
paddleRight.draw(ctx);