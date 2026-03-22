# 🚀 Exam Simulator Deployment Guide

## Problem Identified

Your exam simulator isn't showing up because of **3 critical issues**:

### ❌ Issue 1: Wrong Script Path in Quiz.md
Your `Quiz.md` file has:
```html
<script src="/quiz.js"></script>
```

But it should be:
```html
<script src="/static/quiz.js"></script>
```

### ❌ Issue 2: Quartz Uses KaTeX, Not MathJax
Your Quartz config uses **KaTeX** for LaTeX rendering (line 74 in `quartz.config.ts`), but `quiz.js` expects **MathJax v3**. They are incompatible!

### ❌ Issue 3: MathJax Not Loaded
The `quiz.js` script calls `window.MathJax.typesetPromise()`, but MathJax is never loaded in your Quartz site.

---

## ✅ Solution: Step-by-Step Fix

### Step 1: Add MathJax to Your Quartz Site

You need to modify `quartz/components/Head.tsx` to load MathJax alongside KaTeX.

**Add this code** at line 53 (right after the CDN preconnect):

```tsx
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

{/* MathJax v3 for Exam Simulator */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
          processEscapes: true,
          processEnvironments: true
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
      };
    `,
  }}
/>
<script
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
  async
/>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Step 2: Fix Your Quiz.md File

Replace the entire content of `Quiz.md` with this corrected version:

```html
<!-- Exam Simulator Container -->
<div id="exam-simulator" data-timer="3"></div>

<!-- Quiz Data -->
<script id="quiz-data" type="application/json">
[
  {
    "id": "q1",
    "question": "Calculate $E[X]$ where $X \\sim \\text{Exp}(\\lambda = 2)$",
    "options": [
      "$E[X] = 0.5$",
      "$E[X] = 1.0$",
      "$E[X] = 2.0$",
      "$E[X] = 4.0$"
    ],
    "correctIndex": 0,
    "explanation": "For exponential distribution: $E[X] = \\frac{1}{\\lambda} = \\frac{1}{2} = 0.5$"
  }
]
</script>
```

**Key changes:**
- ✅ Removed the `<script src="/quiz.js">` line (Quartz loads it automatically from `/static/`)
- ✅ Fixed JSON formatting (removed extra line breaks)
- ✅ Fixed LaTeX escaping (use `\\` not `\\\\` in JSON)

### Step 3: Verify quiz.js is in the Right Place

Make sure `quiz.js` is located at:
```
d:\File Ronald\AKTUARIS\Ujian PAI\study-notes\quartz\static\quiz.js
```

✅ **This is already correct** (I verified it exists)

### Step 4: Build and Deploy

Now run your usual deployment commands:

```bash
# 1. Build Quartz (this compiles your site)
npx quartz build

# 2. Add all changes
git add .

# 3. Commit with a message
git commit -m "Add exam simulator with MathJax support"

# 4. Push to GitHub
git push origin v4
```

---

## 🔍 Why It Wasn't Working

1. **Script Path**: Quartz's `Plugin.Static()` serves files from `quartz/static/` at the URL path `/static/`. Your `Quiz.md` was looking for `/quiz.js` (root) instead of `/static/quiz.js`.

2. **No MathJax**: The `quiz.js` script requires MathJax v3 to render LaTeX formulas, but your Quartz site only has KaTeX. They don't talk to each other!

3. **Auto-Loading**: Quartz automatically includes scripts from `/static/` in the build, so you don't need to manually load `quiz.js` in your markdown files. Just having the `#exam-simulator` div is enough.

---

## 📋 Complete Deployment Checklist

- [ ] Modify `quartz/components/Head.tsx` to add MathJax
- [ ] Fix `Quiz.md` (remove script tag, fix JSON)
- [ ] Run `npx quartz build`
- [ ] Run `git add .`
- [ ] Run `git commit -m "Add exam simulator"`
- [ ] Run `git push origin v4`
- [ ] Wait 2-3 minutes for GitHub Pages to rebuild
- [ ] Visit your site and check if the exam loads

---

## 🧪 How to Test Locally Before Deploying

Instead of pushing to GitHub first, test locally:

```bash
# Start Quartz dev server
npx quartz build --serve

# Or if you prefer
npm run serve
```

Then open your browser to `http://localhost:8080` and navigate to your Quiz page. You should see:
- Timer counting down from 3:00
- The question with properly rendered LaTeX: $E[X]$
- Four radio button options
- "Check Answer" and "Submit Exam" buttons

---

## 🎯 Alternative: Use KaTeX Instead of MathJax

If you prefer to keep your site KaTeX-only (lighter and faster), you would need to modify `quiz.js` to use KaTeX instead of MathJax. However, this requires significant code changes to the rendering function.

**I recommend using MathJax** for the exam simulator since it's already written for it, and having both KaTeX (for regular notes) and MathJax (for exams) won't cause conflicts.

---

## 📝 Quick Reference: File Locations

```
study-notes/
├── Quiz.md                          ← Your exam page (needs fixing)
├── quartz/
│   ├── components/
│   │   └── Head.tsx                 ← Add MathJax here
│   └── static/
│       ├── quiz.js                  ← Exam engine (already correct)
│       └── quiz-example.html        ← Demo file
├── quartz.config.ts                 ← Uses KaTeX (line 74)
└── quartz.layout.ts                 ← Layout config
```

---

## 🆘 Still Not Working?

If the exam still doesn't appear after following these steps:

1. **Check Browser Console**: Press F12 → Console tab. Look for errors like:
   - `quiz.js:647 MathJax not found` → MathJax didn't load
   - `Failed to load resource: /quiz.js` → Wrong script path
   - `Unexpected token in JSON` → JSON syntax error

2. **Verify Build Output**: After `npx quartz build`, check the `public/` folder:
   - Should have `public/static/quiz.js`
   - Should have `public/Quiz/index.html` (your quiz page)

3. **Check GitHub Pages**: Make sure your GitHub Pages is set to deploy from the correct branch (v4) and folder (usually root or /docs)

---

## 💡 Pro Tip: Testing Timer

In `Quiz.md`, I set `data-timer="3"` (3 minutes) for quick testing. Once everything works, change it to your desired duration:

```html
<div id="exam-simulator" data-timer="120">  <!-- 2 hours -->
```

---

Let me know if you need help with any of these steps!
