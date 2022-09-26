import Player from './Player.js';
import InputHandler from './InputHandler.js';
import {drawKeyPress} from './Utils.js';
window.addEventListener('load', () => {
    alert("1)Running Left Press ArrowLeft, 2)Running Right Press ArrowRight, 3)Jump Up Press ArrowUp, 4)Sit Press ArrowDown, 5)Attack Press Enter")
    /**@type {HTMLCanvasElement} */
    let loading = document.querySelector('#loading');
    loading.style.display="none";
    let canvas = document.querySelector('#canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');

    const player = new Player(canvas.width, canvas.height);
    const inputHandler = new InputHandler();
    let lastTime = 0;
    function animate(timer) {
        let deltaTime = timer - lastTime;
        lastTime = timer;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawKeyPress(ctx, inputHandler, player);
        player.draw(ctx);
        player.update(inputHandler.lastInput, deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
});