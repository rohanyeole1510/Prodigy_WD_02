let startTime, elapsedTime = 0, timerInterval;

function startTimer() {
   startTime = Date.now() - elapsedTime; // Adjust start time based on elapsed time
   timerInterval = setInterval(() => {
       elapsedTime = Date.now() - startTime; // Calculate elapsed time
       updateDisplay(elapsedTime); // Update the display
   }, 10);
}

function stopTimer() {
   clearInterval(timerInterval); // Stop the timer
}

function resetTimer() {
   clearInterval(timerInterval); // Stop the timer if running
   elapsedTime = 0; // Reset elapsed time
   updateDisplay(elapsedTime); // Update display to show reset time

   // Clear lap times
   const lapList = document.getElementById('lapList'); // Reference to lap list
   lapList.innerHTML = ''; // Clear all previous lap times
}

function recordLap() {
   const lapList = document.getElementById('lapList'); // Reference to lap list
   const lapTime = elapsedTime; // Get current elapsed time

   const li = document.createElement('li'); // Create new list item for lap time
   li.textContent = formatTime(lapTime); // Format and set lap time text

   lapList.appendChild(li); // Add new lap time to the list
}

function updateDisplay(time) {
   const milliseconds = Math.floor((time % 1000) / 10);
   const seconds = Math.floor((time / 1000) % 60);
   const minutes = Math.floor((time / (1000 * 60)) % 60);
   
   const displayTime = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
   document.querySelector('.display').textContent = displayTime; // Update display text
}

function formatTime(time) {
   const milliseconds = Math.floor((time % 1000) / 10);
   const seconds = Math.floor((time / 1000) % 60);
   const minutes = Math.floor((time / (1000 * 60)) % 60);
   
   return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`; // Format time for lap display
}

function pad(number) {
   return number < 10 ? '0' + number : number; // Pad single digit numbers with leading zero
}

// Event listeners for buttons
document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', recordLap);
