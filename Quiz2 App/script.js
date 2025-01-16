const answers = ['option-4', 'option-5', 'option-11', 'option-14', 'option-19']; // Correct answers
const allQuestions = document.querySelectorAll('.question-cont'); // Select all question containers
const scoreBoardElement = document.querySelector('.result'); // Scoreboard container
const scoreElement = document.querySelector('#score'); // Score display element
let score = 0; // Initialize score
let attemptedQuestions = new Set(); // Set to track attempted questions

// Iterate over all questions
allQuestions.forEach((question) => {
  question.addEventListener('click', (e) => {
    // Check if the clicked element is an input
    if (e.target.tagName === 'INPUT') {
      const index = question.getAttribute('data-value'); // Get the question index
      const userAns = e.target.id; // Get the ID of the selected answer

      // Add the current question to the attempted set
      attemptedQuestions.add(index);

      // Check if the user's answer is correct
      if (userAns === answers[index]) {
        console.log('correct');
        score++;
      } else {
        console.log('incorrect, try again');
      }

      // Check if all questions have been attempted
      if (attemptedQuestions.size === answers.length) {
        // Update the score and display the scoreboard
        scoreElement.innerText = score;
        scoreBoardElement.classList.remove('hide');

        // Smoothly scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        // Ensure the body's height is adjusted
        document.body.style.minHeight = 'auto';

        //disable selecting options
      }
    }
  });
});
