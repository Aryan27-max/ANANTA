const heart = document.getElementById('heart');
const emojiContainer = document.getElementById('emoji-container');

heart.addEventListener('click', () => {
    // Add glow effect to heart
    heart.classList.add('glow');

    // Create emoji shower
    createEmojiShower();

    // Remove glow after 5 seconds
    setTimeout(() => {
        heart.classList.remove('glow');
    }, 5000);
});

function createEmojiShower() {
    // Remove old emojis if any
    emojiContainer.innerHTML = '';

    // Generate 50 sparkle emojis (✨) and 50 kiss emojis (😘)
    const emojiList = ['✨', '😘'];
    for (let i = 0; i < 50; i++) {
        const sparkleEmoji = createEmoji(emojiList[0]);
        const kissEmoji = createEmoji(emojiList[1]);
        
        emojiContainer.appendChild(sparkleEmoji);
        emojiContainer.appendChild(kissEmoji);
    }
}

function createEmoji(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.innerHTML = emoji;

    // Randomize position across the entire screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    emojiElement.style.left = `${x}px`;
    emojiElement.style.top = `${y}px`;

    return emojiElement;
}
