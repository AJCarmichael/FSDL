<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sophisticated Polling System</title>
  <style>
    /* Reset some basic elements */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #f4f6f8;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }

    .poll-container {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      max-width: 500px;
      width: 100%;
      padding: 20px 30px;
    }

    h2, h3 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    form {
      margin-bottom: 20px;
    }

    .poll-options label {
      display: block;
      padding: 10px;
      margin-bottom: 10px;
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .poll-options label:hover {
      background: #e9e9e9;
    }

    .poll-options input[type="radio"] {
      margin-right: 10px;
    }

    button {
      display: block;
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 4px;
      background: #007acc;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #005fa3;
    }

    /* Results section styling */
    .poll-results {
      margin-top: 20px;
    }

    .result-item {
      margin-bottom: 15px;
    }

    .result-label {
      font-weight: bold;
      margin-bottom: 4px;
      display: block;
    }

    .result-bar {
      background: #eee;
      border-radius: 4px;
      overflow: hidden;
      height: 24px;
      position: relative;
    }

    .result-bar-fill {
      background: #007acc;
      height: 100%;
      width: 0;
      transition: width 1s ease-out;
      border-radius: 4px 0 0 4px;
    }

    .result-percent {
      position: absolute;
      right: 10px;
      top: 0;
      height: 100%;
      line-height: 24px;
      color: #fff;
      font-weight: bold;
    }

    /* Hide vote again button until needed */
    #vote-again {
      margin-top: 20px;
      background: #28a745;
    }
    #vote-again:hover {
      background: #1e7e34;
    }
  </style>
</head>
<body>
  <div class="poll-container">
    <!-- Poll Form -->
    <h2>What is your favorite programming language?</h2>
    <form id="poll-form">
      <div class="poll-options">
        <label>
          <input type="radio" name="option" value="0" />
          JavaScript
        </label>
        <label>
          <input type="radio" name="option" value="1" />
          Python
        </label>
        <label>
          <input type="radio" name="option" value="2" />
          Java
        </label>
        <label>
          <input type="radio" name="option" value="3" />
          C++
        </label>
      </div>
      <button type="submit">Vote</button>
    </form>

    <!-- Results Section -->
    <div id="results" class="poll-results" style="display: none;">
      <h3>Poll Results</h3>
      <div id="results-container"></div>
      <button id="vote-again">Vote Again</button>
    </div>
  </div>

  <script>
    // Poll data object; votes are loaded from localStorage if available.
    const poll = {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
      votes: [0, 0, 0, 0]
    };

    // Attempt to load stored votes from localStorage
    if (localStorage.getItem('pollVotes')) {
      try {
        const storedVotes = JSON.parse(localStorage.getItem('pollVotes'));
        if (Array.isArray(storedVotes) && storedVotes.length === poll.options.length) {
          poll.votes = storedVotes;
        }
      } catch (e) {
        console.error('Error reading stored votes:', e);
      }
    }

    // Grab elements from DOM
    const pollForm = document.getElementById('poll-form');
    const resultsSection = document.getElementById('results');
    const resultsContainer = document.getElementById('results-container');
    const voteAgainButton = document.getElementById('vote-again');

    // Function to update the results UI with a smooth bar animation.
    function updateResultsUI() {
      // Clear previous results
      resultsContainer.innerHTML = "";
      const totalVotes = poll.votes.reduce((sum, v) => sum + v, 0);

      poll.options.forEach((option, index) => {
        const votes = poll.votes[index];
        const percent = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;

        // Create the result item container
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        // Label for the option
        const label = document.createElement('span');
        label.className = 'result-label';
        label.textContent = option;
        resultItem.appendChild(label);

        // Bar container
        const barContainer = document.createElement('div');
        barContainer.className = 'result-bar';

        // Bar fill element
        const barFill = document.createElement('div');
        barFill.className = 'result-bar-fill';
        // Set the width after a short timeout so the transition animates
        setTimeout(() => {
          barFill.style.width = percent + '%';
        }, 100);

        // Percentage label inside the bar
        const percentLabel = document.createElement('span');
        percentLabel.className = 'result-percent';
        percentLabel.textContent = percent + '%';

        barContainer.appendChild(barFill);
        barContainer.appendChild(percentLabel);
        resultItem.appendChild(barContainer);

        resultsContainer.appendChild(resultItem);
      });
    }

    // Handle poll form submission (voting)
    pollForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Find the selected option
      const selectedOption = document.querySelector('input[name="option"]:checked');
      if (!selectedOption) {
        alert("Please select an option before voting.");
        return;
      }
      const optionIndex = parseInt(selectedOption.value, 10);
      poll.votes[optionIndex]++;

      // Save updated votes to localStorage
      localStorage.setItem('pollVotes', JSON.stringify(poll.votes));

      // Hide the poll form and show results
      pollForm.style.display = 'none';
      resultsSection.style.display = 'block';

      // Update the results UI
      updateResultsUI();
    });

    // Allow user to vote again (does not reset votes, just shows the form again)
    voteAgainButton.addEventListener('click', function () {
      // Reset the form so no radio button is pre-selected
      pollForm.reset();
      // Hide the results section and show the poll form
      resultsSection.style.display = 'none';
      pollForm.style.display = 'block';
    });
  </script>
</body>
</html>