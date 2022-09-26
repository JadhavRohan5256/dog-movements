export function drawKeyPress(ctx, inputHandler, player) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(`Last Input: ${inputHandler.lastInput}`, 10, 50);
    ctx.fillText(`Active State ${player.currentState.state}`, 10, 70);
}  