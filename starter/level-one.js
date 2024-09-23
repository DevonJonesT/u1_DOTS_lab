/*
 * DOTS: Level One
 *
 */
let score = 0;

const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

ball.addEventListener('click', function() {
    score += 10;
    console.log(`Score: ${score}`);
    scoreDisplay.innerText = score;
    console.log(`Score Display: ${scoreDisplay.innerText}`);

    if (score >= 100) {
        console.log('Level complete!');

        levelWinner.style.opacity = 1;
    }
})