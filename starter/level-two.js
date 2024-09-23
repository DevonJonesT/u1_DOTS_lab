/*
 * DOTS: Level Two
 *
 */
let score = 0;

const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

console.log(balls);

balls.forEach(ball => {
    ball.addEventListener ('click', () => {
        score += 10;
        console.log(`Score: ${score}`);

        scoreDisplay.innerText = score;
        console.log(`Score Display: ${scoreDisplay.innerText}`);

        if (score >= 100) {
            console.log('Level complete!');

            levelWinner.style.opacity = 1;
        }
    })
})