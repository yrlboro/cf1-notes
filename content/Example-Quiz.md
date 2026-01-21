---
title: Example Quiz
date: 2026-01-21
---

# Actuarial FM/P Practice Exam

Test your knowledge on common probability distributions. This exam simulates real exam conditions with a timer and immediate feedback.

<script src="/quiz.js"></script>

<div id="exam-simulator" data-timer="120"></div>

<script id="quiz-data" type="application/json">
[
  {
    "id": 1,
    "question": "A continuous random variable $X$ has probability density function: $$f(x) = \\begin{cases} \\frac{2x}{9} & 0 \\leq x \\leq 3 \\\\ 0 & \\text{otherwise} \\end{cases}$$ Calculate $E[X]$.",
    "options": [
      "$E[X] = 1.5$",
      "$E[X] = 2.0$",
      "$E[X] = 2.5$",
      "$E[X] = 3.0$"
    ],
    "correctIndex": 1,
    "explanation": "To find the expected value, we use: $$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx = \\int_{0}^{3} x \\cdot \\frac{2x}{9} \\, dx = \\frac{2}{9} \\int_{0}^{3} x^2 \\, dx$$ Evaluating: $$E[X] = \\frac{2}{9} \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{2}{9} \\cdot \\frac{27}{3} = \\frac{2}{9} \\cdot 9 = 2$$ Therefore, $E[X] = 2.0$"
  },
  {
    "id": 2,
    "question": "The number of claims $N$ follows a Poisson distribution with parameter $\\lambda = 5$. What is the probability of exactly 3 claims? Use $e^{-5} \\approx 0.00674$.",
    "options": [
      "$P(N=3) = 0.084$",
      "$P(N=3) = 0.104$",
      "$P(N=3) = 0.124$",
      "$P(N=3) = 0.140$"
    ],
    "correctIndex": 3,
    "explanation": "For a Poisson distribution with parameter $\\lambda$, the probability mass function is: $$P(N = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$$ Substituting $\\lambda = 5$ and $k = 3$: $$P(N=3) = \\frac{e^{-5} \\cdot 5^3}{3!} = \\frac{0.00674 \\cdot 125}{6} = \\frac{0.8425}{6} \\approx 0.140$$ Therefore, the probability is approximately $0.140$."
  },
  {
    "id": 3,
    "question": "A random variable $X$ follows an exponential distribution with mean $\\mu = 10$. Calculate $P(X > 15)$.",
    "options": [
      "$P(X > 15) = e^{-1.5} \\approx 0.223$",
      "$P(X > 15) = e^{-1.0} \\approx 0.368$",
      "$P(X > 15) = e^{-0.5} \\approx 0.607$",
      "$P(X > 15) = e^{-2.0} \\approx 0.135$"
    ],
    "correctIndex": 0,
    "explanation": "For an exponential distribution with mean $\\mu$, the rate parameter is $\\lambda = \\frac{1}{\\mu} = \\frac{1}{10} = 0.1$. The survival function is: $$P(X > x) = e^{-\\lambda x}$$ Therefore: $$P(X > 15) = e^{-0.1 \\cdot 15} = e^{-1.5} \\approx 0.223$$"
  }
]
</script>
