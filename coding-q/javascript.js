// Set the time limit for the quiz in seconds
var timeLimit = 15;

// Set the initial time remaining
var timeRemaining = timeLimit;

// Get the timer element from the HTML
var timerElement = document.getElementById("timer");

// Set the timer interval to update the time remaining
var timerInterval = setInterval(function() {
  // Decrement the time remaining
  timeRemaining--;
  
  // Update the timer element with the new time remaining
  timerElement.innerHTML = timeRemaining;
  
  // Check if the time is up
  if (timeRemaining == 0) {
    // Clear the timer interval
    clearInterval(timerInterval);
    
    // Do something when the time is up
    alert("Time's up!");
  }
}, 1000); // Update the timer every second




function nextQuestion() {
  // Get the current URL
  var currentUrl = window.location.href;
  
  // Extract the question number from the URL
  var questionNumber = parseInt(currentUrl.match(/question(\d+)\.html/)[1]);
  
  // Construct the URL for the next question
  var nextUrl = "question" + (questionNumber + 1) + ".html";
  
  // Navigate to the next question
  window.location.href = nextUrl;
}
