import PaddleLeft from "./paddleLeft.js"
import PaddleRight from "./paddleRight.js"

let canvas = document.getElementById("gamebox");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

let paddleLeft = new PaddleLeft(GAME_WIDTH, GAME_HEIGHT);
let paddleRight = new PaddleRight(GAME_WIDTH, GAME_HEIGHT);


paddleLeft.draw(ctx);
paddleRight.draw(ctx);