export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMP_LEFT: 6,
    JUMP_RIGHT: 7,
    FALL_LEFT: 8,
    FALL_RIGHT: 9,
    ATTCK_LEFT: 10,
    ATTCK_RIGHT: 11,
}

class State {
    constructor(state) {
        this.state = state;
    }
}

export class StandingLeft extends State {
    constructor(player) {
        super("STANDING_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 1;
        this.player.maxFrame = 5;
        this.player.speed = 0;
    }
    inputHandler(input) {
        if (input === 'Press ArrowRight') {
            this.player.setState(states.RUNNING_RIGHT);
        }
        else if (input === 'Press ArrowLeft') {
            this.player.setState(states.RUNNING_LEFT);
        }
        else if (input === 'Press ArrowDown') {
            this.player.setState(states.SITTING_LEFT);
        }
        else if (input === 'Press ArrowUp') {
            this.player.setState(states.JUMP_LEFT);
        }
        else if (input === 'Press Enter') {
            this.player.setState(states.ATTCK_LEFT);
        }
    }
}

export class StandingRight extends State {
    constructor(player) {
        super("STANDING_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 0;
        this.player.maxFrame = 4;
        this.player.speed = 0;
    }
    inputHandler(input) {
        if (input === 'Press ArrowLeft') {
            this.player.setState(states.RUNNING_LEFT);
        }
        else if (input == 'Press ArrowRight') {
            this.player.setState(states.RUNNING_RIGHT);
        }
        else if (input === 'Press ArrowDown') {
            this.player.setState(states.SITTING_RIGHT);
        }
        else if (input === 'Press ArrowUp') {
            this.player.setState(states.JUMP_RIGHT);
        }
        else if (input === 'Press Enter') {
            this.player.setState(states.ATTCK_RIGHT);
        }
    }
}

export class SittingLeft extends State {
    constructor(player) {
        super("SITTING_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 9;
        this.player.maxFrame = 4;
        this.player.speed = 0;
    }
    inputHandler(input) {
        if (input === 'Press ArrowRight') {
            this.player.setState(states.SITTING_RIGHT);
        }
        else if (input === 'Press ArrowUp') {
            this.player.setState(states.STANDING_LEFT);
        }
        // else if(input === 'Realse ArrowDown') {
        //     this.player.setState(states.STANDING_LEFT)
        // }
    }
}

export class SittingRight extends State {
    constructor(player) {
        super("SITTING_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 8;
        // this.player.maxFrame = 4;
        this.player.speed = 0;
    }
    inputHandler(input) {
        if (input === 'Press ArrowLeft') {
            this.player.setState(states.SITTING_LEFT);
        }
        else if (input === 'Press ArrowUp') {
            this.player.setState(states.STANDING_RIGHT);
        }
    }
}

export class RunningLeft extends State {
    constructor(player) {
        super("RUNNING_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 7;
        this.player.maxFrame = 8;
        this.player.speed = -this.player.maxSpeed;
    }
    inputHandler(input) {
        if (input === 'Press ArrowRight') {
            this.player.setState(states.RUNNING_RIGHT);
        }
        else if (input === 'Realse ArrowLeft') {
            this.player.setState(states.STANDING_LEFT);
        }
        else if (input === 'Press ArrowDown') {
            this.player.setState(states.SITTING_LEFT);
        }
    }
}

export class RunningRight extends State {
    constructor(player) {
        super("RUNNING_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 6;
        this.player.maxFrame = 8;
        this.player.speed = this.player.maxSpeed;
    }
    inputHandler(input) {
        if (input === 'Press ArrowLeft') {
            this.player.setState(states.RUNNING_LEFT);
        }
        else if (input === 'Realse ArrowRight') {
            this.player.setState(states.STANDING_RIGHT);
        }
        else if (input === 'Press ArrowDown') {
            this.player.setState(states.SITTING_RIGHT);
        }
    }
}
export class JumpLeft extends State {
    constructor(player) {
        super("JUMP_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 3;
        this.player.maxFrame = 6;
        if (this.player.onground()) this.player.vh -= 35;
        this.player.speed = -this.player.maxSpeed * 0.5;
    }
    inputHandler(input) {
        if (input === 'Press ArrowRight') {
            this.player.setState(states.JUMP_RIGHT);
        }
        else if (this.player.vh >= 0) {
            this.player.setState(states.FALL_LEFT);
        }
        else if (input === 'Press Enter') {
            this.player.setState(states.ATTCK_LEFT);
        }
    }
}
export class JumpRight extends State {
    constructor(player) {
        super("JUMP_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 2;
        this.player.maxFrame = 6;
        if (this.player.onground()) this.player.vh -= 35;
        this.player.speed = this.player.maxSpeed * 0.5;
    }
    inputHandler(input) {
        if (input === 'Press ArrowLeft') {
            this.player.setState(states.JUMP_LEFT);
        }
        else if (this.player.vh >= 0) {
            this.player.setState(states.FALL_RIGHT);
        }
        else if (input === 'Press Enter') {
            this.player.setState(states.ATTCK_RIGHT);
        }
    }
}
export class FallLeft extends State {
    constructor(player) {
        super("FALL_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 5;
        this.player.maxFrame = 6;
    }
    inputHandler(input) {
        if (input === 'Press ArrowRight') {
            this.player.setState(states.FALL_RIGHT)
        }
        else if (this.player.onground()) this.player.setState(states.STANDING_LEFT);
    }
}
export class FallRight extends State {
    constructor(player) {
        super("FALL_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 4;
        this.player.maxFrame = 6;
    }
    inputHandler(input) {
        if (input === 'Press ArrowLeft') {
            this.player.setState(states.FALL_LEFT);
        }
        else if (this.player.onground()) this.player.setState(states.STANDING_RIGHT);
    }
}
export class AttckLeft extends State {
    constructor(player) {
        super("ATTCK_LEFT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 10;
        this.player.maxFrame = 6;
        this.player.speed = -this.player.maxSpeed;
    }
    inputHandler(input) {
        if (input === 'Realse Enter') {
            this.player.setState(states.STANDING_LEFT);
        }
    }
}
export class AttckRight extends State {
    constructor(player) {
        super("ATTCK_RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 11;
        this.player.maxFrame = 6;
        this.player.speed = this.player.maxSpeed;
    }
    inputHandler(input) {
        if (input === 'Realse Enter') {
            this.player.setState(states.STANDING_RIGHT);
        }
    }
}
