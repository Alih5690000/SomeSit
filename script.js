const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rect={
    x: 0,
    y: 0
};
rect.x=0;
rect.y=0;
const speed=300;
const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.code] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.code] = false;
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

let lastTime = 0;

function loop(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (keys["KeyW"]){
        rect.y-=speed*dt;
    }
    if (keys["KeyS"]){
        rect.y+=speed*dt;
    }
    if (keys["KeyA"]){
        rect.x-=speed*dt;
    }
    if (keys["KeyD"]){
        rect.x+=speed*dt;
    }

    ctx.fillStyle="red";
    ctx.fillRect(rect.x,rect.y,100,100);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);