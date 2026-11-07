const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("message");
const card = document.querySelector(".card");

// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 450);

// YES button
yesButton.addEventListener("click", function () {
    card.innerHTML = `
        <div class="heart-image">
            <img src="couple.png" alt="Cute cartoon couple">
        </div>
        <h2>💖 It's a Date! 💖</h2>
        <p id="message">
            I'm so happy you said YES! 🥰<br>
            You just made my day brighter.<br>
            I can't wait to spend time with you.<br>
            You're special! ❤️
        </p>
    `;

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Make NO move away
function moveNoButton() {
    const maxX = Math.max(0, window.innerWidth - noButton.offsetWidth - 20);
    const maxY = Math.max(0, window.innerHeight - noButton.offsetHeight - 20);

    noButton.style.position = "fixed";
    noButton.style.left = (10 + Math.random() * Math.max(0, maxX - 10)) + "px";
    noButton.style.top = (10 + Math.random() * Math.max(0, maxY - 10)) + "px";
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
});