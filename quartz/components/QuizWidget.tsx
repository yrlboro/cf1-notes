import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface AnswerOption {
    text: string
    rationale: string
    isCorrect: boolean
}

interface Question {
    question: string
    answerOptions: AnswerOption[]
    hint: string
}

interface QuizData {
    questions: Question[]
}

interface QuizWidgetProps {
    quizData: QuizData
}

export default ((userOpts?: Partial<QuizWidgetProps>) => {
    const QuizWidget: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
        const opts = { ...userOpts } as QuizWidgetProps

        if (!opts.quizData || !opts.quizData.questions) {
            return <div class="quiz-widget error">No quiz data provided</div>
        }

        return (
            <div class={classNames(displayClass, "quiz-widget")}>
                <div class="quiz-container">
                    {opts.quizData.questions.map((question, qIndex) => (
                        <div class="quiz-question-card" key={qIndex} data-question-index={qIndex}>
                            <div class="question-header">
                                <h3 class="question-number">Question {qIndex + 1}</h3>
                            </div>

                            <div class="question-text" dangerouslySetInnerHTML={{ __html: question.question }}></div>

                            {/* Hint Section */}
                            {question.hint && (
                                <div class="hint-section">
                                    <button
                                        class="hint-toggle"
                                        onclick={`this.classList.toggle('active'); this.nextElementSibling.classList.toggle('show')`}
                                    >
                                        💡 Show Hint
                                    </button>
                                    <div class="hint-content">
                                        <div class="hint-text" dangerouslySetInnerHTML={{ __html: question.hint }}></div>
                                    </div>
                                </div>
                            )}

                            {/* Answer Options */}
                            <div class="answer-options">
                                {question.answerOptions.map((option, oIndex) => (
                                    <div class="answer-option-wrapper" key={oIndex}>
                                        <button
                                            class="answer-option"
                                            data-correct={option.isCorrect}
                                            data-option-index={oIndex}
                                            onclick={`
                        const card = this.closest('.quiz-question-card');
                        const allOptions = card.querySelectorAll('.answer-option');
                        const allRationales = card.querySelectorAll('.rationale-content');
                        
                        // Don't allow reselection after answered
                        if (card.classList.contains('answered')) return;
                        
                        // Mark as answered
                        card.classList.add('answered');
                        
                        // Highlight selected option
                        allOptions.forEach(opt => opt.classList.remove('selected'));
                        this.classList.add('selected');
                        
                        // Show correct/incorrect status
                        if (this.dataset.correct === 'true') {
                          this.classList.add('correct');
                        } else {
                          this.classList.add('incorrect');
                          // Also highlight the correct answer
                          allOptions.forEach(opt => {
                            if (opt.dataset.correct === 'true') {
                              opt.classList.add('correct');
                            }
                          });
                        }
                        
                        // Reveal rationale for selected option
                        const rationale = this.nextElementSibling;
                        if (rationale && rationale.classList.contains('rationale-content')) {
                          rationale.classList.add('show');
                        }
                      `}
                                        >
                                            <span class="option-letter">{String.fromCharCode(65 + oIndex)}</span>
                                            <span class="option-text" dangerouslySetInnerHTML={{ __html: option.text }}></span>
                                        </button>
                                        <div class="rationale-content">
                                            <div class="rationale-header">Explanation:</div>
                                            <div class="rationale-text" dangerouslySetInnerHTML={{ __html: option.rationale }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    QuizWidget.css = `
    .quiz-widget {
      margin: 2rem 0;
      font-family: var(--bodyFont);
    }

    .quiz-widget.error {
      background: var(--darkgray);
      color: var(--light);
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }

    .quiz-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .quiz-question-card {
      background: var(--darkgray);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .quiz-question-card:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .question-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .question-number {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--secondary);
      margin: 0;
    }

    .question-text {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--light);
    }

    /* Hint Section */
    .hint-section {
      margin-bottom: 1.5rem;
    }

    .hint-toggle {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #60a5fa;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hint-toggle:hover {
      background: rgba(59, 130, 246, 0.2);
      border-color: rgba(59, 130, 246, 0.5);
    }

    .hint-toggle.active {
      background: rgba(59, 130, 246, 0.2);
    }

    .hint-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .hint-content.show {
      max-height: 500px;
      margin-top: 0.75rem;
    }

    .hint-text {
      background: rgba(59, 130, 246, 0.05);
      border-left: 3px solid #60a5fa;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      color: var(--light);
      font-size: 0.95rem;
    }

    /* Answer Options */
    .answer-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .answer-option-wrapper {
      display: flex;
      flex-direction: column;
    }

    .answer-option {
      width: 100%;
      background: var(--gray);
      border: 2px solid transparent;
      padding: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      text-align: left;
      color: var(--light);
    }

    .answer-option:hover:not(.selected) {
      background: var(--lightgray);
      border-color: var(--secondary);
      transform: translateX(4px);
    }

    .answer-option.selected {
      border-color: var(--tertiary);
    }

    .answer-option.correct {
      background: rgba(34, 197, 94, 0.15);
      border-color: #22c55e;
      color: #86efac;
    }

    .answer-option.incorrect {
      background: rgba(239, 68, 68, 0.15);
      border-color: #ef4444;
      color: #fca5a5;
    }

    .quiz-question-card.answered .answer-option {
      cursor: not-allowed;
    }

    .quiz-question-card.answered .answer-option:hover:not(.selected):not(.correct) {
      transform: none;
      border-color: transparent;
    }

    .option-letter {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      height: 28px;
      background: var(--secondary);
      color: var(--dark);
      border-radius: 50%;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .answer-option.correct .option-letter {
      background: #22c55e;
      color: var(--dark);
    }

    .answer-option.incorrect .option-letter {
      background: #ef4444;
      color: white;
    }

    .option-text {
      flex: 1;
      font-size: 1rem;
      line-height: 1.5;
    }

    /* Rationale */
    .rationale-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      margin-top: 0;
    }

    .rationale-content.show {
      max-height: 1000px;
      margin-top: 0.75rem;
    }

    .rationale-header {
      font-weight: 600;
      color: var(--secondary);
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .rationale-text {
      background: rgba(100, 100, 100, 0.2);
      border-left: 3px solid var(--secondary);
      padding: 0.75rem 1rem;
      border-radius: 4px;
      color: var(--light);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Dark mode adjustments */
    @media (prefers-color-scheme: dark) {
      .quiz-question-card {
        background: rgba(30, 30, 30, 0.8);
      }
      
      .answer-option {
        background: rgba(50, 50, 50, 0.6);
      }
      
      .answer-option:hover:not(.selected) {
        background: rgba(70, 70, 70, 0.6);
      }
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .quiz-question-card {
        padding: 1rem;
      }

      .question-text {
        font-size: 1rem;
      }

      .answer-option {
        padding: 0.75rem;
      }
    }
  `

    return QuizWidget
}) satisfies QuartzComponentConstructor
