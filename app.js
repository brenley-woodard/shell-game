/* Get DOM Elements */
const patrickButton = document.getElementById('patrick-button');
const squidwardButton = document.getElementById('squidward-button');
const spongebobButton = document.getElementById('spongebob-button');

const patrickImg = document.getElementById('patrick-img');
const squidwardImg = document.getElementById('squidward-img');
const spongebobImg = document.getElementById('spongebob-img');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
patrickButton.addEventListener('click', () => {
    resetImg();
    total++;

    const randomLocation = Math.ceil(Math.random() * 3);
    if (randomLocation === 1) {
        patrickImg.classList.add('reveal');
        wins++;
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
    } else {
        spongebobImg.classList.add('reveal');
    }
    handleScoreboard();
});

squidwardButton.addEventListener('click', () => {
    resetImg();
    total++;

    const randomLocation = Math.ceil(Math.random() * 3);
    console.log(randomLocation);
    if (randomLocation === 1) {
        patrickImg.classList.add('reveal');
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
        wins++;
    } else {
        spongebobImg.classList.add('reveal');
    }
    handleScoreboard();
});

spongebobButton.addEventListener('click', () => {
    resetImg();
    total++;

    const randomLocation = Math.ceil(Math.random() * 3);
    console.log(randomLocation);
    if (randomLocation === 1) {
        patrickImg.classList.add('reveal');
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
    } else {
        spongebobImg.classList.add('reveal');
        wins++;
    }
    handleScoreboard();
});

/* Display Functions */
function resetImg() {
    patrickImg.classList.remove('reveal');
    squidwardImg.classList.remove('reveal');
    spongebobImg.classList.remove('reveal');
}

function handleScoreboard() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}
