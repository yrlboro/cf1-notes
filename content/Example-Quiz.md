<!-- This script tag points to the static file you saved above -->
<script src="/static/quiz.js"></script>

<!-- The simulator container (change timer as needed) -->
<div id="exam-simulator" data-timer="120"></div>

<!-- Your hidden question data -->
<script id="quiz-data" type="application/json">
[
  {
    "id": 1,
    "question": "A continuous random variable $X$ has density $f(x) = 2x$ for $0 < x < 1$. Calculate $E[X]$.",
    "options": ["$1/3$", "$1/2$", "$2/3$", "$3/4$"],
    "correctIndex": 2,
    "explanation": "$E[X] = \\int_0^1 x(2x) dx = \\int_0^1 2x^2 dx = [\\frac{2x^3}{3}]_0^1 = 2/3$"
  }
]
</script>