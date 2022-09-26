import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight, JumpLeft, JumpRight, FallLeft, FallRight, AttckLeft, AttckRight } from "./state.js";

export default class Player {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.image = document.querySelector('#dog-sprite');
        this.spriteWidth = (1800 / 9);
        this.spriteHeight = (2182 / 12);
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.canvasWidth / 2 - this.width / 2;
        this.y = this.canvasHeight - this.height;
        this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this), new RunningLeft(this), new RunningRight(this), new JumpLeft(this), new JumpRight(this), new FallLeft(this), new FallRight(this), new AttckLeft(this), new AttckRight(this)];
        this.currentState = this.states[1];
        this.frameX = 0;
        this.maxFrame = 4;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.vh = 0;
        this.weight = 1;
        this.sp = 20;
        this.playerTime = 0;
        this.playerInterval = 1000 / this.sp;

    }
    update(input, deltaTime) {
        if (this.playerTime > this.playerInterval) {
            (this.frameX >= this.maxFrame) ? this.frameX = 0 : this.frameX++;
            this.playerTime = 0;
        }
        this.playerTime += deltaTime;

        this.currentState.inputHandler(input);
        this.x += this.speed;
        if (this.x <= 0) this.x = 0;
        if (this.x >= this.canvasWidth - this.width) this.x = this.canvasWidth - this.width;

        // vertical movement
        this.y += this.vh;
        if (!this.onground()) {
            this.vh += this.weight;
        }
        else {
            this.vh = 0;
        }

        if (this.y <= 0) this.y = 0;
        if (this.y >= this.canvasHeight - this.height) this.y = this.canvasHeight - this.height;
    }

    onground() {
        return (this.y >= this.canvasHeight - this.height);
    }
    draw(ctx) {
        ctx.drawImage(this.image, (this.frameX * this.spriteWidth), (this.frameY * this.spriteHeight), this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}