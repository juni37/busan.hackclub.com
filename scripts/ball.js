const ball = document.getElementById('ball');
let Position = {
    x: 0,
    y: 0
}
let MousePosition = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    MousePosition.x = e.clientX;
    MousePosition.y = e.clientY;
});

setInterval(() => {
    let angle = Math.atan((MousePosition.y - Position.y) / (MousePosition.x - Position.x));
    let d = Math.sqrt(Math.pow(Position.x - MousePosition.x, 2) + Math.pow(Position.y - MousePosition.y, 2));
    
    Position.x += (MousePosition.x - 25 - Position.x) * 0.05;
    Position.y += (MousePosition.y - 25 - Position.y) * 0.05;

    ball.style.transform = `
        scaleX(${Math.max(2 - d / 100, 1.5)})
        scaleY(${Math.max(2 - d / 100, 1)})
    `;
    ball.style.top = `${Position.y}px`;
    ball.style.left = `${Position.x}px`;
    ball.style.rotate = `${angle}rad`;
}, 16);