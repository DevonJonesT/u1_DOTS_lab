/*
 * DOTS: Level Three
 *
 */


// Needed help from ChatGPT to figured out the Data Increments.
// Still not really sure how the increments were determined.
let score = 0;

const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

console.log(balls);

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        console.log(ball.dataset);

        const incrementValue = parseInt(ball.getAttribute('data-increment'), 10);
        console.log(`Increment Value: ${incrementValue}`);

        score += incrementValue; 
        console.log(`Score: ${score}`);

        scoreDisplay.innerText = score;
        console.log(`Score Display: ${scoreDisplay.innerText}`);

        if (score >= 100) {
            console.log('Level complete!');

            levelWinner.style.opacity = 1;
        }
    })
})