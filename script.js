// ======================
// PINDAH HALAMAN
// ======================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}

// ======================
// SECURITY CHECK
// ======================

function checkNickname() {

    const nickname =
        document.getElementById("nickname")
        .value
        .toLowerCase()
        .trim();

    if (nickname === "bebe") {

        alert("Akses diterima ❤️");

        showScreen("heartGame");

        moveHeart();

    } else {

        alert("Ayo pikir lagi 😝");

    }

}

// ======================
// HEART GAME
// ======================

const heart = document.getElementById("heart");

function moveHeart() {

    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * 75 + "vw";

    heart.style.top =
        Math.random() * 75 + "vh";

}

setInterval(() => {

    const game =
        document.getElementById("heartGame");

    if (game.classList.contains("active")) {

        moveHeart();

    }

}, 800);

heart.addEventListener("click", () => {

    alert("Kamu berhasil menangkap hatiku ❤️");

    showScreen("memoryRoom");

});

// ======================
// MEMORY ROOM
// ======================

function showMemory(img, text) {

    document.getElementById("memoryContent")
    .innerHTML =

    `
    <img src="${img}"
    style="
    width:100%;
    max-width:350px;
    border-radius:20px;
    margin-top:20px;
    ">

    <p style="margin-top:15px;">
    ${text}
    </p>
    `;

}

// ======================
// QUIZ
// ======================

function wrongAnswer() {

    alert("HAHAHA KAMUUU SALAHHH!!!!!! 😝");

}

function correctAnswer() {

    showScreen("puzzle");

}

// ======================
// PUZZLE
// ======================

function checkPuzzle() {

    const answer =
        document.getElementById("puzzleAnswer")
        .value
        .toLowerCase()
        .trim();

    if (answer === "matchadepan") {

        alert("Amazing ❤️");

        showScreen("secret");

        startTyping();

    } else {

        alert("Coba lagi sayang 😝");

    }

}

// ======================
// SURAT CINTA
// ======================

function startTyping() {

const message =

`Selamat ulang tahun, sayangku cintakuuu

Semoga kamu panjang umur,
sehat selalu, semoga rezeki dan semua urusan kamu
selalu dilancarkan yaa.

Aku harap di umur kamu yang sekarang,
yang udah beranjak 24 tahun,
kamu semakin jaya jaya jaya,
semakin kuat, sabar,jadi pribadi yang lebih baik lagi dan tetap selalu berbuat baik yaa.

Terima kasih ya sayang,
karena udah selalu bantu aku
dan selalu ada buat aku.

Aku benar-benar bersyukur
punya kamu ❤️

Maafin aku kalau selama ini
aku masih sering merepotkan kamu.

Tetap jaga diri baik-baik di jakarta ya cintakuu.

Dan satu lagi...

Kamu harus selalu sayang sama keluarga dan aku yaa 😝❤️

Aku sayang kamu selamanya.

I Love You ❤️

- Cantiknya kamu ღ`;

const target =
document.getElementById("typingText");

target.innerHTML = "";

let i = 0;

function typing() {

    if (i < message.length) {

        target.innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(typing, 40);

    }

}

typing();

}

// ======================
// COUNTDOWN JADIAN
// ======================

function updateCountdown() {

    const startDate =
    new Date("2024-11-30T00:00:00");

    const now =
    new Date();

    const diff =
    now - startDate;

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (diff % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const countdown =
    document.getElementById("countdown");

    if(countdown){

        countdown.innerHTML =

        `
        Terima kasih udah menjadi bagian terbaik dalam hidup aku.
Semoga kita punya banyak cerita indah lagi kedepannya. ♡

I love you, always and forever. ♥︎
        <br><br>
        ${days} Hari
        ${hours} Jam
        ${minutes} Menit
        `;

    }

}

updateCountdown();

setInterval(updateCountdown, 60000);

// ======================
// ONE MORE MESSAGE
// ======================

function showLoveMessage(){

    document.getElementById("ending").innerHTML = "";

    document.body.style.transition = "2s";
   document.body.style.background =
"#FFF8D6";

    startHeartAnimation();

}

  function showLoveMessage(){

    const ending =
    document.getElementById("ending");

    ending.style.display = "none";

    document.querySelectorAll(".cloud").forEach(cloud => {
        cloud.style.display = "none";
    });

    document.body.style.background = "#000000";

    startHeartAnimation();

}


// ======================
// HEART PARTICLE
// ======================

function startHeartAnimation(){

    const canvas =
    document.createElement("canvas");

    document.body.appendChild(canvas);

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    const ctx =
    canvas.getContext("2d");

    const particles = [];

    function heartShape(t){

        return {

            x:
            16*Math.pow(Math.sin(t),3),

            y:
            13*Math.cos(t)
            -5*Math.cos(2*t)
            -2*Math.cos(3*t)
            -Math.cos(4*t)

        };

    }

    for(let i=0;i<2000;i++){

        const t =
        Math.random()*Math.PI*2;

        const p =
        heartShape(t);

        particles.push({

            x:
            Math.random()*canvas.width,

            y:
            Math.random()*canvas.height,

            tx:
            canvas.width/2+p.x*18,

            ty:
            canvas.height/2-p.y*18,

            size:
            Math.random()*2+1,

            speed:
            Math.random()*0.02+0.01

        });

    }

    function animate(){

        ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
        );

        particles.forEach(p=>{

    p.x += (p.tx-p.x)*p.speed;
    p.y += (p.ty-p.y)*p.speed;

    ctx.beginPath();

    ctx.arc(
        p.x,
        p.y,
        p.size,
        0,
        Math.PI*2
    );

    const colors = [
        "#ff1744",
        "#ff4569",
        "#ff6b81",
        "#ff8fa3"
    ];

    ctx.fillStyle =
    colors[Math.floor(
        Math.random() * colors.length
    )];

    ctx.shadowBlur = 20;
    ctx.shadowColor = ctx.fillStyle;

    ctx.fill();

});
        

        requestAnimationFrame(
        animate
        );

    }

    animate();

}
function createFloatingHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
    (Math.random() * 120 + 100) + "px";

    heart.style.animationDuration =
    (Math.random() * 15 + 20) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },35000);
}

setInterval(createFloatingHeart,3000);