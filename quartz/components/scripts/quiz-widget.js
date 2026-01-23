// Quiz Widget Script
// This script powers the interactive quiz widget

class QuizWidget {
    constructor(containerId, quizData) {
        this.container = document.getElementById(containerId);
        this.quizData = quizData;
        this.init();
    }

    init() {
        if (!this.container || !this.quizData) {
            console.error('Quiz widget: Missing container or data');
            return;
        }

        this.render();
        this.attachEventListeners();
    }

    render() {
        const quizHTML = `
      <div class="quiz-widget">
        <div class="quiz-container">
          ${this.quizData.questions.map((question, qIndex) => this.renderQuestion(question, qIndex)).join('')}
        </div>
      </div>
    `;

        this.container.innerHTML = quizHTML;
    }

    renderQuestion(question, qIndex) {
        return `
      <div class="quiz-question-card" data-question-index="${qIndex}">
        <div class="question-header">
          <h3 class="question-number">Question ${qIndex + 1}</h3>
        </div>
        
        <div class="question-text">${question.question}</div>

        ${question.hint ? `
          <div class="hint-section">
            <button class="hint-toggle" data-question="${qIndex}">
              💡 Show Hint
            </button>
            <div class="hint-content">
              <div class="hint-text">${question.hint}</div>
            </div>
          </div>
        ` : ''}

        <div class="answer-options">
          ${question.answerOptions.map((option, oIndex) => this.renderOption(option, qIndex, oIndex)).join('')}
        </div>
      </div>
    `;
    }

    renderOption(option, qIndex, oIndex) {
        return `
      <div class="answer-option-wrapper">
        <button 
          class="answer-option"
          data-question="${qIndex}"
          data-option="${oIndex}"
          data-correct="${option.isCorrect}"
        >
          <span class="option-letter">${String.fromCharCode(65 + oIndex)}</span>
          <span class="option-text">${option.text}</span>
        </button>
        <div class="rationale-content">
          <div class="rationale-header">Explanation:</div>
          <div class="rationale-text">${option.rationale}</div>
        </div>
      </div>
    `;
    }

    attachEventListeners() {
        // Hint toggle listeners
        this.container.querySelectorAll('.hint-toggle').forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.classList.toggle('active');
                e.target.nextElementSibling.classList.toggle('show');
            });
        });

        // Answer option listeners
        this.container.querySelectorAll('.answer-option').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleAnswerClick(e.currentTarget);
            });
        });
    }

    handleAnswerClick(button) {
        const card = button.closest('.quiz-question-card');

        // Don't allow reselection after answered
        if (card.classList.contains('answered')) return;

        const allOptions = card.querySelectorAll('.answer-option');
        const isCorrect = button.dataset.correct === 'true';

        // Mark as answered
        card.classList.add('answered');

        // Highlight selected option
        allOptions.forEach(opt => opt.classList.remove('selected'));
        button.classList.add('selected');

        // Show correct/incorrect status
        if (isCorrect) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
            // Also highlight the correct answer
            allOptions.forEach(opt => {
                if (opt.dataset.correct === 'true') {
                    opt.classList.add('correct');
                }
            });
        }

        // Reveal rationale for selected option
        const wrapper = button.closest('.answer-option-wrapper');
        const rationale = wrapper.querySelector('.rationale-content');
        if (rationale) {
            rationale.classList.add('show');
        }
    }
}

// Auto-initialize quiz widgets when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Look for quiz data scripts
    const quizDataScripts = document.querySelectorAll('script[type="application/json"][data-quiz-id]');

    quizDataScripts.forEach(script => {
        const quizId = script.dataset.quizId;
        const container = document.getElementById(quizId);

        if (container) {
            try {
                const quizData = JSON.parse(script.textContent);
                new QuizWidget(quizId, quizData);
            } catch (error) {
                console.error(`Failed to initialize quiz ${quizId}:`, error);
            }
        }
    });
});
