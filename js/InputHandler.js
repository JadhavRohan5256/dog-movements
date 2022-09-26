export default class InputHandler {
    constructor() {
        this.lastInput = '';
        this.keyUp();
        this.keyDown();
    }

    keyDown() {
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.lastInput = 'Press ArrowUp';
                    break;
                case "ArrowLeft":
                    this.lastInput = 'Press ArrowLeft';
                    break;
                case "ArrowRight":
                    this.lastInput = 'Press ArrowRight';
                    break;
                case "ArrowDown":
                    this.lastInput = 'Press ArrowDown';
                    break;
                case "Enter":
                    this.lastInput = 'Press Enter';
                    break;
            }
        });
        console.log(this.lastInput);
    }
    keyUp() {
        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            switch (e.key) {
                case "ArrowUp":
                    this.lastInput = 'Realse ArrowUp';
                    break;
                case "ArrowLeft":
                    this.lastInput = 'Realse ArrowLeft';
                    break;
                case "ArrowRight":
                    this.lastInput = 'Realse ArrowRight';
                    break;
                case "ArrowDown":
                    this.lastInput = 'Realse ArrowDown';
                    break;
                case "Enter":
                    this.lastInput = 'Realse Enter';
                    break;
            }
        });
    }

}