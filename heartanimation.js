```javascript
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "999";

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const particles = [];

function heartFunction(t) {

    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y:
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t)
    };

}

const totalParticles = 1800;

for (let i = 0; i < totalParticles; i++) {

    const t = Math.random() * Math.PI * 2;

    const target = heartFunction(t);

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        tx: canvas.width / 2 + target.x * 18,
        ty: canvas.height / 2 - target.y * 18,

        size: Math.random() * 2 + 1,

        speed: Math.random() * 0.02 + 0.01

    });

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.x += (p.tx - p.x) * p.speed;
        p.y += (p.ty - p.y) * p.speed;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#A2D2FF";

        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();
```
