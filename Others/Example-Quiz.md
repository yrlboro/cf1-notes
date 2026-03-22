---
title: Example Quiz
date: 2026-01-21
---

# Actuarial FM/P Practice Exam

Test your knowledge on common probability distributions. This exam simulates real exam conditions with a timer and immediate feedback.

<div id="exam-simulator" data-timer="30">
  Loading exam...
</div>

<script id="quiz-data" type="application/json">
[
  {
    "id": "fm-compound",
    "question": "An investor deposits $\\$5000$ into an account earning $6\\%$ annual interest compounded monthly. How much will be in the account after 4 years?<br><br>Formula: $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$",
    "options": [
      "$\\$6312.38$",
      "$\\$6341.21$",
      "$\\$6356.14$",
      "$\\$6400.00$"
    ],
    "correctIndex": 1,
    "explanation": "Using the compound interest formula:<br>$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$<br>where $P = 5000$, $r = 0.06$, $n = 12$, $t = 4$:<br>$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 4} = 5000(1.005)^{48}$$<br>$$= 5000 \\times 1.270489 = \\$6341.21$$"
  },
  {
    "id": "p-variance",
    "question": "Let $X$ be a discrete random variable with $E[X] = 3$ and $E[X^2] = 13$. Calculate $\\text{Var}(X)$.<br><br>Recall: $\\text{Var}(X) = E[X^2] - (E[X])^2$",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 2,
    "explanation": "Using the variance formula:<br>$$\\text{Var}(X) = E[X^2] - (E[X])^2 = 13 - 3^2 = 13 - 9 = 4$$"
  },
  {
    "id": "fm-annuity",
    "question": "Calculate the accumulated value of an annuity-due that pays $\\$1000$ at the beginning of each year for 5 years at an annual effective interest rate of $8\\%$.<br><br>Formula: $\\ddot{s}_{\\overline{n}|i} = \\frac{(1+i)^n - 1}{i} \\times (1+i)$",
    "options": [
      "$\\$6335.93$",
      "$\\$6336.80$",
      "$\\$6802.75$",
      "$\\$6336.00$"
    ],
    "correctIndex": 1,
    "explanation": "For an annuity-due (payments at the beginning):<br>$$FV = PMT \\times \\ddot{s}_{\\overline{5}|0.08} = 1000 \\times \\frac{(1.08)^5 - 1}{0.08} \\times 1.08$$<br>$$= 1000 \\times \\frac{1.469328 - 1}{0.08} \\times 1.08$$<br>$$= 1000 \\times 5.8666 \\times 1.08 = \\$6336.80$$"
  },
  {
    "id": "p-binomial",
    "question": "A fair coin is flipped 10 times. What is the probability of getting exactly 7 heads?<br><br>Use: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$",
    "options": [
      "$0.1172$",
      "$0.1250$",
      "$0.1563$",
      "$0.2000$"
    ],
    "correctIndex": 0,
    "explanation": "Using the binomial probability formula with $n=10$, $k=7$, $p=0.5$:<br>$$P(X = 7) = \\binom{10}{7} (0.5)^7 (0.5)^3 = \\binom{10}{7} (0.5)^{10}$$<br>$$= \\frac{10!}{7!3!} \\times \\frac{1}{1024} = 120 \\times \\frac{1}{1024} = \\frac{120}{1024} \\approx 0.1172$$"
  },
  {
    "id": "fm-bond",
    "question": "A 3-year bond with face value $\\$1000$ pays annual coupons of $\\$50$. If the yield rate is $6\\%$, calculate the bond's price.<br><br>Format: $P = C \\times a_{\\overline{n}|i} + F(1+i)^{-n}$",
    "options": [
      "$\\$973.27$",
      "$\\$980.00$",
      "$\\$1000.00$",
      "$\\$1026.73$"
    ],
    "correctIndex": 0,
    "explanation": "The bond price is the present value of all cash flows:<br>$$P = 50 \\times a_{\\overline{3}|0.06} + 1000(1.06)^{-3}$$<br>$$= 50 \\times \\frac{1-(1.06)^{-3}}{0.06} + 1000(1.06)^{-3}$$<br>$$= 50 \\times 2.6730 + 1000 \\times 0.8396$$<br>$$= 133.65 + 839.62 = \\$973.27$$<br><br>Since the coupon rate (5%) is less than the yield rate (6%), the bond trades at a discount."
  }
]
</script>

