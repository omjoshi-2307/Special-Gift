// ===== Password Configuration =====
const CORRECT_PASSWORD = "radha"; // Change this to your desired password

// ===== Date Configuration (IST Timezone) =====
// Define unlock dates for each day (YYYY-MM-DD format)
const unlockDates = [
    "2025-02-07", // Rose Day
    "2025-02-08", // Propose Day
    "2025-02-09", // Chocolate Day
    "2025-02-10", // Teddy Day
    "2025-02-11", // Promise Day
    "2025-02-12", // Hug Day
    "2025-02-13", // Kiss Day
    "2025-02-14"  // Valentine's Day
];

// ===== Password Functionality =====
function checkPassword() {
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('passwordError');
    const password = input.value.trim().toLowerCase();

    if (password === CORRECT_PASSWORD) {
        // Correct password - unlock the website
        document.getElementById('passwordScreen').classList.remove('active');
        document.getElementById('mainContent').classList.add('active');
        localStorage.setItem('websiteUnlocked', 'true');
        initializeWebsite();
    } else {
        // Wrong password
        error.textContent = "Oops! That's not the magic word... Try again, my love 💕";
        input.value = '';
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    // Check if already unlocked
    if (localStorage.getItem('websiteUnlocked') === 'true') {
        document.getElementById('passwordScreen').classList.remove('active');
        document.getElementById('mainContent').classList.add('active');
        initializeWebsite();
    }
});

// ===== Website Initialization =====
function initializeWebsite() {
    updateAllTimers();
    setInterval(updateAllTimers, 1000); // Update every second
}

// ===== Time Conversion (IST) =====
function getISTTime() {
    // Get current time in IST
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const istTime = new Date(utcTime + istOffset);
    return istTime;
}

// ===== Check if Day is Unlocked =====
function isDayUnlocked(dateString) {
    const istNow = getISTTime();
    const unlockDate = new Date(dateString + 'T00:00:00'); // Midnight of that day
    return istNow >= unlockDate;
}

// ===== Calculate Time Until Unlock =====
function getTimeUntilUnlock(dateString) {
    const istNow = getISTTime();
    const unlockDate = new Date(dateString + 'T00:00:00');
    const timeDiff = unlockDate - istNow;

    if (timeDiff <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

// ===== Update All Timers =====
function updateAllTimers() {
    const dayCards = document.querySelectorAll('.day-card');

    dayCards.forEach((card, index) => {
        const dateString = unlockDates[index];
        const timer = document.getElementById(`timer-${index}`);
        const isUnlocked = isDayUnlocked(dateString);

        if (isUnlocked) {
            // Day is unlocked
            card.classList.add('unlocked');
            card.classList.remove('locked');

            // Add click event to open page
            card.onclick = function () {
                const page = card.getAttribute('data-page');
                window.location.href = page;
            };

            // Update lock indicator
            const lockIndicator = card.querySelector('.lock-indicator');
            if (lockIndicator) {
                lockIndicator.textContent = '🔓';
            }
        } else {
            // Day is still locked
            card.classList.add('locked');
            card.classList.remove('unlocked');

            // Update countdown timer
            const timeLeft = getTimeUntilUnlock(dateString);
            const timerDigits = timer.querySelectorAll('.time-number');

            if (timerDigits.length >= 3) {
                timerDigits[0].textContent = String(timeLeft.hours).padStart(2, '0');
                timerDigits[1].textContent = String(timeLeft.minutes).padStart(2, '0');
                timerDigits[2].textContent = String(timeLeft.seconds).padStart(2, '0');
            }

            // Add click event to show locked message
            card.onclick = function () {
                showLockedModal();
            };
        }
    });
}

// ===== Show Locked Modal =====
function showLockedModal() {
    const modal = document.getElementById('lockedModal');
    modal.classList.add('active');
}

// ===== Close Modal =====
function closeModal() {
    const modal = document.getElementById('lockedModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('lockedModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

// ===== Animation Effects for Daily Pages =====

// Rose petals animation
function createRosePetals() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.textContent = '🌹';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (3 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            petal.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(petal);

            setTimeout(() => petal.remove(), 8000);
        }, i * 200);
    }
}

// Floating hearts animation
function createFloatingHearts() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (3 + Math.random() * 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 8000);
        }, i * 150);
    }
}

// Chocolates animation
function createChocolates() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const chocolate = document.createElement('div');
            chocolate.className = 'chocolate-piece';
            chocolate.textContent = '🍫';
            chocolate.style.left = Math.random() * 100 + '%';
            chocolate.style.animationDuration = (3 + Math.random() * 3) + 's';
            chocolate.style.animationDelay = Math.random() * 2 + 's';
            chocolate.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(chocolate);

            setTimeout(() => chocolate.remove(), 8000);
        }, i * 200);
    }
}

// Teddy animation
function createTeddyBounce() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const teddy = document.createElement('div');
            teddy.className = 'teddy-bounce';
            teddy.textContent = '🧸';
            teddy.style.left = Math.random() * 100 + '%';
            teddy.style.animationDuration = (2 + Math.random() * 2) + 's';
            teddy.style.animationDelay = Math.random() * 2 + 's';
            teddy.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
            container.appendChild(teddy);

            setTimeout(() => teddy.remove(), 6000);
        }, i * 250);
    }
}

// Promise symbols animation
function createPromiseSymbols() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    const symbols = ['💍', '🤝', '💫', '⭐', '✨'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const symbol = document.createElement('div');
            symbol.className = 'promise-symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + '%';
            symbol.style.animationDuration = (3 + Math.random() * 3) + 's';
            symbol.style.animationDelay = Math.random() * 2 + 's';
            symbol.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(symbol);

            setTimeout(() => symbol.remove(), 8000);
        }, i * 200);
    }
}

// Hug animation
function createHugAnimation() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    const emojis = ['🤗', '💕', '🫂', '💗'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'hug-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (3 + Math.random() * 3) + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            emoji.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(emoji);

            setTimeout(() => emoji.remove(), 8000);
        }, i * 200);
    }
}

// Kiss animation
function createKissAnimation() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    const emojis = ['💋', '💗', '💕', '💖'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'kiss-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (3 + Math.random() * 3) + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            emoji.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(emoji);

            setTimeout(() => emoji.remove(), 8000);
        }, i * 200);
    }
}

// Fireworks animation for Valentine's Day
function createFireworks() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 100 + '%';

            const colors = ['#FF6B9D', '#FFC5C5', '#E6D5F5', '#7EC8A3', '#C4A8E8'];
            firework.style.background = colors[Math.floor(Math.random() * colors.length)];

            container.appendChild(firework);

            setTimeout(() => firework.remove(), 1500);
        }, i * 300);
    }
}

// ===== CSS for Animations (injected dynamically) =====
function injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .rose-petal, .floating-heart, .chocolate-piece, 
        .teddy-bounce, .promise-symbol, .hug-emoji, .kiss-emoji {
            position: fixed;
            animation: fallDown 6s linear forwards;
            pointer-events: none;
            z-index: 5;
        }
        
        @keyframes fallDown {
            0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .teddy-bounce {
            animation: bounce 4s ease-in-out forwards;
        }
        
        @keyframes bounce {
            0%, 100% {
                transform: translateY(-100px) scale(0.5);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            50% {
                transform: translateY(50vh) scale(1);
            }
            90% {
                opacity: 1;
            }
        }
        
        .firework {
            position: fixed;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            animation: explode 1.5s ease-out forwards;
            pointer-events: none;
            z-index: 5;
        }
        
        @keyframes explode {
            0% {
                transform: scale(1);
                opacity: 1;
                box-shadow: 0 0 0px currentColor;
            }
            50% {
                transform: scale(30);
                opacity: 0.8;
                box-shadow: 0 0 40px currentColor;
            }
            100% {
                transform: scale(50);
                opacity: 0;
                box-shadow: 0 0 60px currentColor;
            }
        }
        
        .shake {
            animation: shake 0.5s ease;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);
}

// Inject animation styles when page loads
document.addEventListener('DOMContentLoaded', injectAnimationStyles);
