function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    const emojis = ['😊', '😍', '🥰', '😘', '💖', '💝', '💘'];
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

setInterval(createHeart, 300);
setInterval(createEmoji, 500);

const forgiveBtn = document.querySelector('.forgive-btn');
const notForgiveBtn = document.querySelector('.not-forgive-btn');

// Add event listeners to buttons if needed
forgiveBtn.addEventListener('click', () => {
    alert('Terima kasih sudahh maafin akuu i love u sayangg');
});

notForgiveBtn.addEventListener('click', () => {
    alert('tenang sajaa aku akan berusahaa lagi supaya kamuu maafin akuu love u sayang');
});
