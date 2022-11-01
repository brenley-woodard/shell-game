/* Get DOM Elements */
const patrickButton = document.getElementById('patrick-button');
const squidwardButton = document.getElementById('squidward-button');
const spongebobButton = document.getElementById('spongebob-button');

const patrickImg = document.getElementById('patrick-img');
const squidwardImg = document.getElementById('squidward-img');
const spongebobImg = document.getElementById('spongebob-img');

/* State */

/* Events */
patrickButton.addEventListener('click', () => {
    const randomLocation = Math.ceil(Math.random() * 3);
    if (randomLocation === 1) {
        //add to wins
        patrickImg.classList.add('reveal');
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
    } else {
        spongebobImg.classList.add('reveal');
    }
});

squidwardButton.addEventListener('click', () => {
    const randomLocation = Math.ceil(Math.random() * 3);
    console.log(randomLocation);
    if (randomLocation === 1) {
        patrickImg.classList.add('reveal');
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
        //add wins
    } else {
        spongebobImg.classList.add('reveal');
    }
});

spongebobButton.addEventListener('click', () => {
    const randomLocation = Math.ceil(Math.random() * 3);
    console.log(randomLocation);
    if (randomLocation === 1) {
        patrickImg.classList.add('reveal');
    } else if (randomLocation === 2) {
        squidwardImg.classList.add('reveal');
    } else {
        spongebobImg.classList.add('reveal');
        //add wins
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
