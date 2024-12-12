const answers = ['option-4', 'option-5', 'option-11', 'option-14', 'option-19']; // Correct answers
const allQuestions = document.querySelectorAll('.question-cont'); // Select all question containers
let score = 0; // Initialize score
let attemptedQuestions = new Set(); // Set to track attempted questions

// Iterate over all questions
allQuestions.forEach((question) => {
  question.addEventListener('click', (e) => {
    // Ensure the click is only processed if the target is an input element
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
        setTimeout(() => {
          alert(`Test Completed. You answered ${score} questions correctly.`);
        }, 1);
      }
    }
  });
});
