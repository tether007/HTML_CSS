document.getElementById('envelope').addEventListener('click', function() {
    this.classList.add('open');
    showConfetti();
});

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 200; i++) { // Increased the number of confetti pieces for a fuller effect
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ffcc00', '#66ff66', '#0099ff', '#ff66b2'];
    return colors[Math.floor(Math.random() * colors.length)];
}