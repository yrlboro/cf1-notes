# Exam Simulator Template for Obsidian

This template shows you how to add the exam simulator to any Obsidian note. When published via Quartz, it will render as an interactive exam.

---

## Quick Start

Simply copy and paste the code below into your Obsidian note:

```html
<!-- Exam Simulator Container -->
<div id="exam-simulator" data-timer="120">
  <!-- Quiz UI will be injected here by quiz.js -->
</div>

<!-- Quiz Data (JSON) -->
<script id="quiz-data" type="application/json">
[
  {
    "id": "q1",
    "question": "Calculate the future value of $\\$1000$ invested at $5\\%$ annual interest compounded continuously for 3 years. Use the formula $FV = Pe^{rt}$.",
    "options": [
      "$\\$1150.00$",
      "$\\$1157.63$",
      "$\\$1161.83$",
      "$\\$1200.00$"
    ],
    "correctIndex": 2,
    "explanation": "Using the continuous compounding formula:<br>$$FV = Pe^{rt} = 1000 \\cdot e^{0.05 \\times 3} = 1000 \\cdot e^{0.15} \\approx 1000 \\times 1.16183 = \\$1161.83$$"
  },
  {
    "id": "q2",
    "question": "A random variable $X$ has the following probability distribution:<br><table border='1'><tr><td>$x$</td><td>1</td><td>2</td><td>3</td></tr><tr><td>$P(X=x)$</td><td>0.3</td><td>0.5</td><td>0.2</td></tr></table><br>Calculate $E[X]$.",
    "options": [
      "$1.8$",
      "$1.9$",
      "$2.0$",
      "$2.1$"
    ],
    "correctIndex": 1,
    "explanation": "The expected value is calculated as:<br>$$E[X] = \\sum x \\cdot P(X=x) = (1)(0.3) + (2)(0.5) + (3)(0.2)$$<br>$$= 0.3 + 1.0 + 0.6 = 1.9$$"
  }
]
</script>
```

---

## Configuration Options

### 1. **Timer Duration**
Set the `data-timer` attribute to the desired duration in **minutes**:
```html
<div id="exam-simulator" data-timer="60">  <!-- 60 minutes -->
<div id="exam-simulator" data-timer="120"> <!-- 2 hours -->
<div id="exam-simulator" data-timer="3">   <!-- 3 minutes for testing -->
```

### 2. **Question Structure**
Each question object must have these fields:

```json
{
  "id": "unique-identifier",           // Unique ID for this question
  "question": "Question text with $\\LaTeX$", // Can include HTML and LaTeX
  "options": [                         // Array of answer choices
    "Option A",
    "Option B with $\\frac{1}{2}$",
    "Option C",
    "Option D"
  ],
  "correctIndex": 1,                   // Index of correct answer (0-based)
  "explanation": "Why this is correct" // Detailed explanation
}
```

### 3. **LaTeX Support**
- **Inline math**: Use `$...$` → Example: `$E[X]$`, `$\\alpha = 0.05$`
- **Display math**: Use `$$...$$` → Example: `$$\\int_0^1 x^2 dx$$`
- **Escape backslashes**: Use `\\` instead of `\` → `$\\frac{1}{2}$` not `$\frac{1}{2}$`

### 4. **HTML Formatting**
You can use HTML tags in questions and explanations:
- Line breaks: `<br>`
- Lists: `<ul><li>Item 1</li><li>Item 2</li></ul>`
- Tables: `<table border='1'><tr><td>Cell</td></tr></table>`
- Bold: `<strong>Important</strong>`

---

## Full Example with Multiple Questions

```html
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
```

---

## Tips for Actuarial Exams

1. **Use standard actuarial notation**: `$a_{\\overline{n}|i}$`, `$s_{\\overline{n}|i}$`, `$\\ddot{a}_{\\overline{n}|i}$`

2. **Include formula references**: Help students remember which formula to use

3. **Show step-by-step solutions**: Break down complex calculations

4. **Add context**: Explain why certain approaches work

5. **Test locally first**: Set `data-timer="3"` (3 minutes) to quickly test the exam flow

---

## Styling Notes

The exam simulator includes built-in styling, but you can customize it by:
1. Adding custom CSS to your Quartz theme
2. Modifying the `.exam-simulator-container` and child classes
3. The timer shows a warning pulse when < 5 minutes remain

---

## Troubleshooting

**LaTeX not rendering?**
- Make sure MathJax is loaded in your Quartz HTML template
- Check that you're using `\\` for backslashes (JSON escaping)
- Verify your JSON is valid using a JSON validator

**Exam not appearing?**
- Ensure `quiz.js` is in the `quartz/static/` folder
- Check browser console for error messages
- Verify the `#exam-simulator` div exists

**Timer issues?**
- Confirm `data-timer` is a valid number (minutes)
- The timer auto-submits at zero

---

## Question Bank Template

```json
{
  "id": "topic-subtopic-number",
  "question": "",
  "options": ["", "", "", ""],
  "correctIndex": 0,
  "explanation": ""
}
```

Good luck with your actuarial studies! 📊📈
