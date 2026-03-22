---
date: 2026-03-15
week: Week 1
day_number: Day 1
status: ✅ Completed
---

# 📅 Daily Study Log - Monday, 15 March 2026

> **Week Focus:** Time Value of Money (TVM)  
> **Today's Focus:** Interest Rates vs Discount Rates + Effective/Nominal Rates  
> **Study Quality:** ⭐⭐⭐⭐ (4/5 - good focus but tired at end)

---

## 🎯 TODAY'S PLAN

### Study Goals
- [x] Topic 1: Interest Rates and Discount Rates (1.1)
- [x] Topic 2: Effective, Nominal, Force of Interest (1.2)
- [x] Practice: 9 problems minimum
- [ ] Review: N/A (first day)
- [x] Other: Set up Obsidian vault, create formula sheet

### Time Allocation
- **Planned:** 3 hours
- **Actual:** 3.25 hours (went slightly over on error analysis)

---

## 📚 STUDY SESSIONS

### Session 1: 21:15-22:30
**Duration:** 75 minutes  
**Topic:** Interest Rates and Discount Rates (1.1)  
**Type:** 🔵 Theory + 🟢 Practice

**What I Did:**
- Read 1_1_Interest_Rates_and_Discount_Rates.md completely
- Made notes on differences between i and d
- Drew timeline diagrams showing payment timing
- Solved 5 basic problems on i ↔ d conversion

**Key Concepts Learned:**
1. Interest rate (i) = return earned on money invested at START of period
2. Discount rate (d) = discount applied to money at END of period
3. Relationship: d = i/(1+i) and i = d/(1-d)
4. Also: d = iv where v = 1/(1+i)

**Formulas Added to Sheet:**
- $d = \frac{i}{1+i}$
- $i = \frac{d}{1-d}$
- $v = \frac{1}{1+i}$
- $d = iv$
- $1 = v(1+i)$

**Understanding Level:** ✅ Clear (concept makes sense, just need practice)

---

### Session 2: 22:45-23:45
**Duration:** 60 minutes  
**Topic:** Effective, Nominal, and Force of Interest (1.2)  
**Type:** 🔵 Theory + 🟢 Practice

**What I Did:**
- Read 1_2_Effective_Nominal_and_Force_of_Interest.md
- Learned 2nd ICONV function on BA II Plus calculator
- Practiced conversions: i → i^(m), i^(m) → i
- Solved 4 conversion problems

**Key Concepts Learned:**
1. Nominal rate i^(m) = stated annual rate compounded m times
2. Effective annual rate i = actual annual return
3. Force of interest δ = continuous compounding rate
4. Calculator shortcut: 2nd ICONV makes conversions easy!

**Understanding Level:** 🟡 Partial (formulas clear, but still slow on calculator)

---

### Session 3: 23:45-24:00
**Duration:** 15 minutes  
**Type:** 🟡 Review + Admin

**What I Did:**
- Logged all errors in Error_Log.md
- Updated formula sheet
- Created tomorrow's study plan

---

## 🧮 PRACTICE PROBLEMS LOG

### Problems Attempted Today

| # | Source | Topic | Difficulty | Time | Result | Notes |
|---|--------|-------|------------|------|--------|-------|
| 1 | 2023-05 Q3 | i vs d conversion | ⭐ | 3min | ✅ | Easy, straightforward |
| 2 | 2023-05 Q7 | d to i | ⭐ | 2.5min | ✅ | Simple formula application |
| 3 | 2023-08 Q2 | i with discount factor | ⭐⭐ | 5min | ❌ | Confused v with d |
| 4 | Practice | Equation of value with d | ⭐⭐ | 6min | ❌ | Set up equation wrong |
| 5 | 2024-04 Q1 | Basic i to d | ⭐ | 2min | ✅ | Quick win |
| 6 | Practice | i to i^(12) | ⭐⭐ | 4min | ✅ | Used calculator |
| 7 | Practice | i^(4) to i | ⭐⭐ | 3.5min | ✅ | Getting faster |
| 8 | 2023-11 Q5 | δ to i | ⭐⭐ | 5min | ❌ | Used wrong formula |
| 9 | Practice | i to δ | ⭐⭐ | 3min | ✅ | ln function on calculator |

### Summary Statistics
```
Total problems attempted: 9
Correct: 6
Incorrect: 3
Accuracy: 67%

Time statistics:
- Fastest: 2 min (Problem 5)
- Slowest: 6 min (Problem 4)
- Average: 3.8 min
```

---

## 🚨 ERRORS & CHALLENGES

### Errors Made Today

**Error #1:**
- **Problem:** 2023-08 Q2 - Finding i given discount factor v
- **My answer:** Used d = 1-v then converted (WRONG approach)
- **Correct answer:** v = 1/(1+i), so i = 1/v - 1
- **Error type:** [x] Concept (confused v and d)
- **Why wrong:** I thought discount factor v was same as discount rate d. They're different!
- **Logged in Error_Log:** [[Error #001]]
- **Re-attempt scheduled:** Wednesday 17 March

**Error #2:**
- **Problem:** Practice problem - Equation of value with discount rate
- **My answer:** Set focal date at end, used d incorrectly in equation
- **Correct answer:** Need to use (1-d)^t for accumulation with discount
- **Error type:** [x] Concept (equation setup wrong)
- **Why wrong:** Confused direction of time with discount rate
- **Logged in Error_Log:** [[Error #002]]
- **Re-attempt scheduled:** Wednesday 17 March

**Error #3:**
- **Problem:** 2023-11 Q5 - Convert δ to i
- **My answer:** Used δ = ln(1+i) backward incorrectly
- **Correct answer:** i = e^δ - 1 (need to exponentiate both sides)
- **Error type:** [x] Formula (algebra mistake)
- **Why wrong:** Rushed the algebra, forgot to subtract 1
- **Logged in Error_Log:** [[Error #003]]
- **Re-attempt scheduled:** Tuesday 16 March (easy fix)

### Difficult Concepts Today
1. **Discount factor (v) vs Discount rate (d):** Initially confused these two. v is the present value factor = 1/(1+i), while d is the discount rate. Need to be more careful with notation.
2. **Force of interest (δ):** The continuous compounding concept is clear, but converting back and forth with ln and e^x needs more practice.

**Action plan for these:**
- [x] Re-read section on v vs d relationship
- [ ] Make flashcard: "v is NOT d"
- [ ] Practice 5 more problems tomorrow on v and d
- [ ] Drill δ conversions on calculator

---

## 📐 FORMULA MASTERY

### Formulas Reviewed Today
- [x] d = i/(1+i) - Can derive: ✅ (from definition)
- [x] i = d/(1-d) - Can derive: ✅ (algebra from above)
- [x] v = 1/(1+i) - Can derive: ✅ (discount factor definition)
- [x] d = iv - Can derive: ✅ (substitute v into d formula)
- [x] i = (1 + i^(m)/m)^m - 1 - Can derive: ❌ (need to understand better)
- [x] δ = ln(1+i) - Can derive: ✅ (continuous limit)

### Formulas Still Confused
- Nominal to effective conversion: I can use the formula, but can't derive it from first principles yet. Need to review compound interest fundamentals.

---

## 🧠 CALCULATOR PRACTICE

### Calculator Functions Used
- [x] Basic TVM (N, I/Y, PV, PMT, FV) - didn't use today, will need tomorrow
- [ ] Cash Flow (CF, NPV, IRR) - not yet
- [x] Interest Conversion (2nd ICONV) - YES! This is super useful
- [ ] BGN/END mode switch - not yet
- [x] Other: Natural log (ln) and e^x functions for δ conversions

### Calculator Challenges
- Issue: First time using 2nd ICONV, took me 5 minutes to figure out the menu
- Solution: Watched calculator tutorial, now can do it in 30 seconds

**Calculator Proficiency Today:** ⭐⭐⭐ (3/5 - getting there, need more practice)

---

## 💪 DAILY PERFORMANCE

### Energy & Focus
- **Energy level:** 🔋🔋🔋🔋 (4/5 overall)
  - Morning: N/A (at work)
  - Afternoon: N/A (at work)
  - Evening (21:00): 🔋🔋🔋🔋🔋 (5/5 - fresh start)
  - Evening (23:00): 🔋🔋🔋 (3/5 - getting tired)

- **Focus quality:** 🎯🎯🎯🎯 (4/5 - good concentration)
- **Distractions:** 2 times (phone notification once, roommate once)
- **Most productive period:** Early evening 21:15-22:30

### Study Environment
- **Location:** Home desk
- **Quality:** ⭐⭐⭐⭐ (4/5 - mostly quiet)
- **Issues:** Room a bit warm, opened window at 22:30

---

## 🎯 PROGRESS TRACKING

### Topics Progress
- **1.1 Interest & Discount Rates:** ✅ Completed (will review errors)
- **1.2 Effective/Nominal/Force:** ✅ Completed (need more calculator practice)
- **1.3 Cash Flow & Inflation:** ⬜ Not started (tomorrow)
- **1.4 Accumulation & PV:** ⬜ Not started
- **1.5 NPV, IRR, Returns:** ⬜ Not started

### Cumulative This Week
- **Total hours this week:** 3.25 hours (Day 1)
- **Total problems this week:** 9 problems
- **Average accuracy this week:** 67%

---

## 💭 REFLECTION

### What Went Well Today
1. Successfully set up entire Obsidian system in 30 min (faster than expected)
2. Covered 2 subtopics as planned - on schedule
3. Learned calculator 2nd ICONV function - this will save time going forward
4. Good focus overall, minimal distractions

### What Needs Improvement
1. Speed on harder problems (6 min is too slow, need to get to <4 min)
2. Need to be more careful distinguishing v and d (made conceptual error)
3. Should have taken a proper break between sessions 1 and 2 (only took 15 min)

### Biggest Challenge Today
**Challenge:** Understanding the difference between discount factor (v) and discount rate (d) - made errors because I confused them.

**How I addressed it:** Re-read the section, made clear notes with definitions, created comparison table in my notebook.

**Still unresolved?** No - clear now, but need to practice more to avoid confusion.

### Key Insight / "Aha!" Moment
> Realized that i and d are just two different ways of measuring the SAME financial reality - one from investor perspective (i), one from borrower perspective (d). The formulas connecting them (d = iv) suddenly made intuitive sense after thinking about it this way!

---

## 📋 TOMORROW'S PREPARATION

### Tomorrow's Goals
- [x] Study: Cash Flow Equations & Inflation (1.3)
- [x] Practice: 10-12 problems (5 new + re-attempt today's 3 errors + 2-4 mixed)
- [x] Review: Today's 3 errors - must get 100% correct
- [x] Focus on: Setting up equations of value correctly

### Materials Needed
- [x] 1_3_Cash_Flow_Equations_and_Inflation.md
- [x] Past paper 2024-04 for practice problems
- [x] Calculator with fresh batteries
- [x] Error log open for review

### Mental Note for Tomorrow
> Pay attention to focal date selection in equations of value - this seems to be a key concept I'll need for tomorrow's material.

---

## 📊 DAILY METRICS SUMMARY

```
✅ Completed Plan Items: 4 / 5 (80%)
📚 Study Hours: 3.25 hours (Target: 3 hours) ✅
🧮 Problems Done: 9 (Target: 9) ✅
✔️ Accuracy: 67% (Target: ≥70%) ⚠️ Close!
⏱️ Avg Time/Problem: 3.8 min (Target: <4 min) ✅
🚨 Errors Logged: 3 errors
📐 Formulas Learned: 9 formulas
⭐ Overall Day Rating: ⭐⭐⭐⭐ (4/5 - solid first day!)
```

---

## 🔗 LINKS & REFERENCES

**Related Notes:**
- [[00_DASHBOARD]] - Updated with Day 1 stats
- [[Error_Log]] - Errors #001, #002, #003 logged
- [[Formula_Sheet]] - TVM section started (9 formulas)
- [[Week 1 Review]] - Will complete Sunday
- Next day: [[Day 2 - 16 March Log]]

**External Resources Used:**
- BA II Plus Calculator Tutorial: https://www.youtube.com/watch?v=example
- CF1 Material: 1_1 and 1_2 .md files from project

---

## ✅ DAILY CLOSING CHECKLIST

Before ending the day, ensure:
- [x] All study sessions logged above
- [x] All errors logged in Error_Log.md (Errors #001-003)
- [x] Formula sheet updated (9 formulas added)
- [x] Practice problems table filled (9 problems)
- [x] Tomorrow's plan created
- [x] Dashboard updated with today's stats
- [x] Reflection completed honestly

**Day Status:** ✅ COMPLETE

**Completed at:** 00:15 (went 15 min over, but worth it for thoroughness)

---

*"Day 1 done. 8 weeks to go. One day at a time."*
