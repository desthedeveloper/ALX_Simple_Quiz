function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";
    
    // Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

































// The line document.querySelector('input[name="quiz"]:checked').value; is used to retrieve the value of the selected radio button from a group of radio buttons with the name "quiz".

// Let's break it down:

// document.querySelector: This is a method that returns the first element within the document that matches the specified selector, or group of selectors.
// input[name="quiz"]: This is the selector that targets <input> elements with a name attribute equal to "quiz". This is likely a group of radio buttons.
// :checked: This is a pseudo-class that targets the radio button that is currently checked.
// .value: This property returns the value of the selected radio button.
// So, when you combine all of these, document.querySelector('input[name="quiz"]:checked').value; returns the value of the currently selected radio button from the group of radio buttons with the name "quiz".