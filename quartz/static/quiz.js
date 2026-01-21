/**
 * Exam Simulator for Actuarial Study Site
 * Designed for Obsidian + Quartz + GitHub Pages
 * 
 * Features:
 * - Countdown timer with auto-submit
 * - One question at a time view
 * - Immediate answer feedback
 * - Full MathJax v3 LaTeX rendering support
 * 
 * Usage: Place in quartz/static/ folder
 */

(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    CONTAINER_ID: 'exam-simulator',
    DATA_SCRIPT_ID: 'quiz-data',
    TIMER_ATTRIBUTE: 'data-timer',
    MATHJAX_DELAY: 100, // ms delay before typesetting
  };

  // State management
  let state = {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timerSeconds: 0,
    timerInterval: null,
    examStarted: false,
    examSubmitted: false,
    answeredCurrentQuestion: false,
  };

  // DOM elements
  let elements = {
    container: null,
    timerDisplay: null,
    questionContainer: null,
    feedbackContainer: null,
    navigationContainer: null,
    progressBar: null,
    submitButton: null,
    resultsContainer: null,
  };

  /**
   * Initialize the exam simulator
   */
  function init() {
    // Check if the exam container exists
    elements.container = document.getElementById(CONFIG.CONTAINER_ID);
    if (!elements.container) {
      return; // Not an exam page, exit silently
    }

    // Clean up any existing state/timer from previous page loads (SPA navigation)
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
    }
    state = {
      questions: [],
      currentQuestionIndex: 0,
      userAnswers: [],
      timerSeconds: 0,
      timerInterval: null,
      examStarted: false,
      examSubmitted: false,
      answeredCurrentQuestion: false,
    };

    console.log('[Exam Simulator] Initializing...');

    // Load quiz data
    if (!loadQuizData()) {
      showError('Failed to load quiz data. Please check the quiz-data script tag.');
      return;
    }

    // Get timer duration from data attribute
    const timerMinutes = parseInt(elements.container.getAttribute(CONFIG.TIMER_ATTRIBUTE), 10);
    if (isNaN(timerMinutes) || timerMinutes <= 0) {
      showError('Invalid timer duration. Please set data-timer attribute correctly.');
      return;
    }
    state.timerSeconds = timerMinutes * 60;

    // Initialize user answers array
    state.userAnswers = new Array(state.questions.length).fill(null);

    // Build the UI
    buildUI();

    // Start the exam
    startExam();

    console.log('[Exam Simulator] Initialized successfully');
  }

  /**
   * Load quiz data from the JSON script tag
   */
  function loadQuizData() {
    const dataScript = document.getElementById(CONFIG.DATA_SCRIPT_ID);
    if (!dataScript) {
      console.error('[Exam Simulator] quiz-data script tag not found');
      return false;
    }

    try {
      // Quartz/Markdown HTML-escapes JSON content (e.g. " becomes &quot;)
      // Robust unescaping using a temporary DOM element handles all entities safely.
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = dataScript.innerHTML;
      // .textContent or .innerText deduces the unescaped text
      const rawData = tempDiv.textContent || tempDiv.innerText || "";

      state.questions = JSON.parse(rawData);

      if (!Array.isArray(state.questions) || state.questions.length === 0) {
        console.error('[Exam Simulator] Invalid quiz data format');
        return false;
      }

      // Validate question structure
      for (let i = 0; i < state.questions.length; i++) {
        const q = state.questions[i];
        if (!q.id || !q.question || !Array.isArray(q.options) ||
          typeof q.correctIndex !== 'number' || !q.explanation) {
          console.error(`[Exam Simulator] Invalid question structure at index ${i}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('[Exam Simulator] Error parsing quiz data:', error);
      return false;
    }
  }

  /**
   * Build the user interface
   */
  function buildUI() {
    elements.container.innerHTML = ''; // Clear container
    elements.container.className = 'exam-simulator-container';

    // Create header with timer
    const header = document.createElement('div');
    header.className = 'exam-header';
    header.innerHTML = `
      <div class="exam-title">
        <h2>Exam Simulator</h2>
        <p>Question <span id="current-question-number">1</span> of ${state.questions.length}</p>
      </div>
      <div class="exam-timer">
        <span class="timer-label">Time Remaining:</span>
        <span id="timer-display" class="timer-value">00:00</span>
      </div>
    `;
    elements.container.appendChild(header);
    elements.timerDisplay = document.getElementById('timer-display');

    // Create progress bar
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    progressBarContainer.innerHTML = `
      <div class="progress-bar">
        <div id="progress-bar-fill" class="progress-bar-fill" style="width: 0%"></div>
      </div>
    `;
    elements.container.appendChild(progressBarContainer);
    elements.progressBar = document.getElementById('progress-bar-fill');

    // Create question container
    elements.questionContainer = document.createElement('div');
    elements.questionContainer.id = 'question-container';
    elements.questionContainer.className = 'question-container';
    elements.container.appendChild(elements.questionContainer);

    // Create feedback container (initially hidden)
    elements.feedbackContainer = document.createElement('div');
    elements.feedbackContainer.id = 'feedback-container';
    elements.feedbackContainer.className = 'feedback-container hidden';
    elements.container.appendChild(elements.feedbackContainer);

    // Create navigation container
    elements.navigationContainer = document.createElement('div');
    elements.navigationContainer.className = 'navigation-container';
    elements.navigationContainer.innerHTML = `
      <button id="check-answer-btn" class="btn btn-primary">Check Answer</button>
      <button id="next-question-btn" class="btn btn-secondary hidden">Next Question</button>
      <button id="submit-exam-btn" class="btn btn-danger">Submit Exam</button>
    `;
    elements.container.appendChild(elements.navigationContainer);

    // Attach event listeners
    document.getElementById('check-answer-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-exam-btn').addEventListener('click', submitExam);

    // Create results container (initially hidden)
    elements.resultsContainer = document.createElement('div');
    elements.resultsContainer.id = 'results-container';
    elements.resultsContainer.className = 'results-container hidden';
    elements.container.appendChild(elements.resultsContainer);
  }

  /**
   * Start the exam
   */
  function startExam() {
    state.examStarted = true;
    startTimer();
    displayQuestion();
  }

  /**
   * Start the countdown timer
   */
  function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      updateTimerDisplay();

      if (state.timerSeconds <= 0) {
        clearInterval(state.timerInterval);
        autoSubmitExam();
      }
    }, 1000);
  }

  /**
   * Update timer display
   */
  function updateTimerDisplay() {
    const minutes = Math.floor(state.timerSeconds / 60);
    const seconds = state.timerSeconds % 60;
    const timerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    elements.timerDisplay.textContent = timerText;

    // Add warning class when time is running low (< 5 minutes)
    if (state.timerSeconds < 300 && state.timerSeconds > 0) {
      elements.timerDisplay.classList.add('timer-warning');
    }
    if (state.timerSeconds <= 0) {
      elements.timerDisplay.classList.add('timer-expired');
    }
  }

  /**
   * Display the current question
   */
  function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    state.answeredCurrentQuestion = false;

    // Update question number
    const questionNumberElement = document.getElementById('current-question-number');
    if (questionNumberElement) {
      questionNumberElement.textContent = state.currentQuestionIndex + 1;
    }

    // Update progress bar
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    // Build question HTML
    let questionHTML = `
      <div class="question-text">
        <strong>Question ${state.currentQuestionIndex + 1}:</strong>
        <div class="question-content">${question.question}</div>
      </div>
      <div class="options-container">
    `;

    question.options.forEach((option, index) => {
      const optionId = `option-${question.id}-${index}`;
      const isChecked = state.userAnswers[state.currentQuestionIndex] === index;
      questionHTML += `
        <div class="option-item">
          <input type="radio" 
                 id="${optionId}" 
                 name="question-${question.id}" 
                 value="${index}"
                 ${isChecked ? 'checked' : ''}>
          <label for="${optionId}">
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
          </label>
        </div>
      `;
    });

    questionHTML += '</div>';

    elements.questionContainer.innerHTML = questionHTML;

    // Hide feedback
    elements.feedbackContainer.classList.add('hidden');

    // Reset buttons
    document.getElementById('check-answer-btn').classList.remove('hidden');
    document.getElementById('next-question-btn').classList.add('hidden');

    // Attach event listeners to radio buttons
    const radioButtons = elements.questionContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', handleAnswerSelection);
    });

    // Render LaTeX with MathJax
    renderMathJax();
  }

  /**
   * Handle answer selection
   */
  function handleAnswerSelection(event) {
    const selectedValue = parseInt(event.target.value, 10);
    state.userAnswers[state.currentQuestionIndex] = selectedValue;
  }

  /**
   * Check the selected answer
   */
  function checkAnswer() {
    const question = state.questions[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];

    if (userAnswer === null || userAnswer === undefined) {
      alert('Please select an answer before checking.');
      return;
    }

    state.answeredCurrentQuestion = true;

    const isCorrect = userAnswer === question.correctIndex;

    // Display feedback
    let feedbackHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
      </div>
      <div class="feedback-body">
        <p><strong>Your answer:</strong> ${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}</p>
        ${!isCorrect ? `<p><strong>Correct answer:</strong> ${String.fromCharCode(65 + question.correctIndex)}. ${question.options[question.correctIndex]}</p>` : ''}
        <div class="explanation">
          <strong>Explanation:</strong>
          <div class="explanation-content">${question.explanation}</div>
        </div>
      </div>
    `;

    elements.feedbackContainer.innerHTML = feedbackHTML;
    elements.feedbackContainer.classList.remove('hidden');

    // Update button visibility
    document.getElementById('check-answer-btn').classList.add('hidden');
    if (state.currentQuestionIndex < state.questions.length - 1) {
      document.getElementById('next-question-btn').classList.remove('hidden');
    }

    // Highlight the selected and correct answers
    highlightAnswers(userAnswer, question.correctIndex);

    // Render LaTeX in feedback
    renderMathJax();
  }

  /**
   * Highlight the selected and correct answers
   */
  function highlightAnswers(userAnswer, correctAnswer) {
    const options = elements.questionContainer.querySelectorAll('.option-item');
    options.forEach((option, index) => {
      if (index === correctAnswer) {
        option.classList.add('correct-answer');
      }
      if (index === userAnswer && userAnswer !== correctAnswer) {
        option.classList.add('wrong-answer');
      }
    });

    // Disable all radio buttons
    const radioButtons = elements.questionContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.disabled = true;
    });
  }

  /**
   * Navigate to the next question
   */
  function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      state.currentQuestionIndex++;
      displayQuestion();
    }
  }

  /**
   * Submit the exam
   */
  function submitExam() {
    // Check if all questions have been answered
    const unansweredCount = state.userAnswers.filter(a => a === null).length;
    if (unansweredCount > 0) {
      const confirmSubmit = confirm(
        `You have ${unansweredCount} unanswered question(s). Are you sure you want to submit?`
      );
      if (!confirmSubmit) {
        return;
      }
    }

    // Stop timer
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
    }

    state.examSubmitted = true;
    displayResults();
  }

  /**
   * Auto-submit when timer expires
   */
  function autoSubmitExam() {
    alert('Time is up! Your exam will be submitted automatically.');
    state.examSubmitted = true;
    displayResults();
  }

  /**
   * Display exam results
   */
  function displayResults() {
    // Calculate score
    let correctCount = 0;
    state.questions.forEach((question, index) => {
      if (state.userAnswers[index] === question.correctIndex) {
        correctCount++;
      }
    });

    const totalQuestions = state.questions.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    // Hide question and navigation
    elements.questionContainer.classList.add('hidden');
    elements.feedbackContainer.classList.add('hidden');
    elements.navigationContainer.classList.add('hidden');

    // Build results HTML
    let resultsHTML = `
      <div class="results-summary">
        <h2>Exam Complete!</h2>
        <div class="score-display">
          <div class="score-circle">
            <span class="score-percentage">${percentage}%</span>
          </div>
          <p class="score-text">${correctCount} out of ${totalQuestions} correct</p>
        </div>
      </div>
      <div class="results-breakdown">
        <h3>Question Breakdown</h3>
    `;

    state.questions.forEach((question, index) => {
      const userAnswer = state.userAnswers[index];
      const isCorrect = userAnswer === question.correctIndex;
      const status = userAnswer === null ? 'unanswered' : (isCorrect ? 'correct' : 'incorrect');

      resultsHTML += `
        <div class="result-item ${status}">
          <div class="result-header">
            <span class="result-number">Question ${index + 1}</span>
            <span class="result-status">${status === 'unanswered' ? 'Not Answered' : (isCorrect ? '✓ Correct' : '✗ Incorrect')}</span>
          </div>
          <div class="result-details">
            ${userAnswer !== null ? `<p><strong>Your answer:</strong> ${String.fromCharCode(65 + userAnswer)}</p>` : ''}
            ${!isCorrect ? `<p><strong>Correct answer:</strong> ${String.fromCharCode(65 + question.correctIndex)}</p>` : ''}
          </div>
        </div>
      `;
    });

    resultsHTML += `
      </div>
      <div class="results-actions">
        <button id="review-answers-btn" class="btn btn-primary">Review Answers</button>
        <button id="restart-exam-btn" class="btn btn-secondary">Restart Exam</button>
      </div>
    `;

    elements.resultsContainer.innerHTML = resultsHTML;
    elements.resultsContainer.classList.remove('hidden');

    // Attach event listeners
    document.getElementById('review-answers-btn').addEventListener('click', reviewAnswers);
    document.getElementById('restart-exam-btn').addEventListener('click', restartExam);

    // Render LaTeX in results
    renderMathJax();
  }

  /**
   * Review all answers
   */
  function reviewAnswers() {
    alert('Review mode: Navigate through questions to see your answers and explanations.');
    state.currentQuestionIndex = 0;
    elements.resultsContainer.classList.add('hidden');
    elements.questionContainer.classList.remove('hidden');
    displayReviewQuestion();
  }

  /**
   * Display question in review mode
   */
  function displayReviewQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];

    // Update question number
    document.getElementById('current-question-number').textContent = state.currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    // Build question HTML
    let questionHTML = `
      <div class="question-text">
        <strong>Question ${state.currentQuestionIndex + 1}:</strong>
        <div class="question-content">${question.question}</div>
      </div>
      <div class="options-container">
    `;

    question.options.forEach((option, index) => {
      const optionId = `option-${question.id}-${index}`;
      const isUserAnswer = userAnswer === index;
      const isCorrectAnswer = index === question.correctIndex;

      let optionClass = 'option-item';
      if (isCorrectAnswer) optionClass += ' correct-answer';
      if (isUserAnswer && !isCorrectAnswer) optionClass += ' wrong-answer';

      questionHTML += `
        <div class="${optionClass}">
          <input type="radio" 
                 id="${optionId}" 
                 name="question-${question.id}" 
                 value="${index}"
                 ${isUserAnswer ? 'checked' : ''}
                 disabled>
          <label for="${optionId}">
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
          </label>
        </div>
      `;
    });

    questionHTML += '</div>';

    elements.questionContainer.innerHTML = questionHTML;

    // Show feedback
    const isCorrect = userAnswer === question.correctIndex;
    let feedbackHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : (userAnswer === null ? 'unanswered' : 'incorrect')}">
        ${userAnswer === null ? 'Not Answered' : (isCorrect ? '✓ Correct!' : '✗ Incorrect')}
      </div>
      <div class="feedback-body">
        ${userAnswer !== null ? `<p><strong>Your answer:</strong> ${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}</p>` : '<p>You did not answer this question.</p>'}
        ${!isCorrect ? `<p><strong>Correct answer:</strong> ${String.fromCharCode(65 + question.correctIndex)}. ${question.options[question.correctIndex]}</p>` : ''}
        <div class="explanation">
          <strong>Explanation:</strong>
          <div class="explanation-content">${question.explanation}</div>
        </div>
      </div>
    `;

    elements.feedbackContainer.innerHTML = feedbackHTML;
    elements.feedbackContainer.classList.remove('hidden');

    // Update navigation
    elements.navigationContainer.classList.remove('hidden');
    elements.navigationContainer.innerHTML = `
      <button id="prev-question-btn" class="btn btn-secondary" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
      <button id="next-question-btn" class="btn btn-secondary" ${state.currentQuestionIndex === state.questions.length - 1 ? 'disabled' : ''}>Next</button>
      <button id="back-to-results-btn" class="btn btn-primary">Back to Results</button>
    `;

    // Attach event listeners
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const backBtn = document.getElementById('back-to-results-btn');

    if (prevBtn && !prevBtn.disabled) {
      prevBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex--;
          displayReviewQuestion();
        }
      });
    }

    if (nextBtn && !nextBtn.disabled) {
      nextBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex < state.questions.length - 1) {
          state.currentQuestionIndex++;
          displayReviewQuestion();
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        elements.questionContainer.classList.add('hidden');
        elements.feedbackContainer.classList.add('hidden');
        elements.navigationContainer.classList.add('hidden');
        elements.resultsContainer.classList.remove('hidden');
      });
    }

    // Render LaTeX
    renderMathJax();
  }

  /**
   * Restart the exam
   */
  function restartExam() {
    const confirmRestart = confirm('Are you sure you want to restart? All progress will be lost.');
    if (!confirmRestart) return;

    // Reset state
    state.currentQuestionIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(null);
    state.examSubmitted = false;
    state.answeredCurrentQuestion = false;

    // Reset timer
    const timerMinutes = parseInt(elements.container.getAttribute(CONFIG.TIMER_ATTRIBUTE), 10);
    state.timerSeconds = timerMinutes * 60;

    // Clear existing timer if any
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
    }

    // Rebuild UI
    buildUI();
    startExam();
  }

  /**
   * Render LaTeX using MathJax v3
   */
  function renderMathJax() {
    // Check if MathJax is available
    if (typeof window.MathJax !== 'undefined' && window.MathJax.typesetPromise) {
      // Small delay to ensure DOM is fully updated
      setTimeout(() => {
        window.MathJax.typesetPromise()
          .then(() => {
            console.log('[Exam Simulator] MathJax rendering complete');
          })
          .catch((err) => {
            console.error('[Exam Simulator] MathJax rendering error:', err);
          });
      }, CONFIG.MATHJAX_DELAY);
    } else {
      console.warn('[Exam Simulator] MathJax not found. LaTeX will not be rendered.');
    }
  }

  /**
   * Show error message
   */
  function showError(message) {
    elements.container.innerHTML = `
      <div class="exam-error">
        <h2>Error</h2>
        <p>${message}</p>
      </div>
    `;
  }

  // Initialize when DOM is ready
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Support for Quartz SPA Navigation (re-init on page change)
  document.addEventListener('nav', () => {
    init();
  });

})();
