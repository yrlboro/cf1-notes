---
date: 2026-03-16
week: Week 1
day_number: Day 2
status: ✅ Completed
---

# 📅 Daily Study Log - Senin, 16 Maret 2026

> **Week Focus:** Topik 2 — Anuitas dan Nilai Arus Kas  
> **Today's Focus:** 2.1 Annuity-Immediate & Due · 2.2 Perpetuity · 2.3 Varying Annuities  
> **Study Quality:** ⭐⭐⭐⭐⭐

---

## 🎯 TODAY'S PLAN

### Study Goals
- [x] Topic 1: 2.1 Annuity-Immediate and Annuity-Due
- [x] Topic 2: 2.2 Perpetuity (level, growing, deferred)
- [x] Topic 3: 2.3 Varying Annuities (geometric & arithmetic)
- [x] Practice: 9 soal latihan interaktif (3 per topik)
- [x] Review: Klarifikasi konsep PV vs FV, deferred timing, growing perpetuity R di t=1

### Time Allocation
- **Planned:** 3 hours
- **Actual:** ~3.5 hours

---

## 📚 STUDY SESSIONS

### Session 1: Pagi
**Duration:** ~75 minutes  
**Topic:** 2.1 Annuity-Immediate and Annuity-Due  
**Type:** 🔵 Theory | 🟢 Practice

**What I Did:**
- Belajar 6 level Feynman dari intuisi awam sampai exam-ready
- Memahami time diagram annuity-immediate (bayar t=1..n) vs annuity-due (bayar t=0..n-1)
- Menggunakan kalkulator PV vs FV interaktif untuk internalisasi kapan pakai PV dan kapan FV
- Mengerjakan 3 soal latihan interaktif

**Key Concepts Learned:**
1. Empat simbol utama: $a_{\overline{n}|i}$, $s_{\overline{n}|i}$, $\ddot{a}_{\overline{n}|i}$, $\ddot{s}_{\overline{n}|i}$ — masing-masing punya focal date yang berbeda
2. Annuity-due = annuity-immediate × $(1+i)$ — karena semua pembayaran bergeser satu periode lebih awal
3. Rule praktis PV vs FV: nilai di kiri semua pembayaran → PV; nilai di kanan semua pembayaran → FV
4. Identitas $\frac{1}{a_{\overline{n}|}} = \frac{1}{s_{\overline{n}|}} + i$ berguna untuk verifikasi cepat

**Formulas Added to Sheet:**
- $a_{\overline{n}|i} = \frac{1 - v^n}{i}$
- $s_{\overline{n}|i} = \frac{(1+i)^n - 1}{i}$
- $\ddot{a}_{\overline{n}|i} = (1+i) \cdot a_{\overline{n}|i} = \frac{1-v^n}{d}$
- $\ddot{s}_{\overline{n}|i} = (1+i) \cdot s_{\overline{n}|i}$
- $s_{\overline{n}|i} = a_{\overline{n}|i} \cdot (1+i)^n$

**Understanding Level:** ✅ Clear

---

### Session 2: Siang
**Duration:** ~70 minutes  
**Topic:** 2.2 Perpetuity  
**Type:** 🔵 Theory | 🟢 Practice

**What I Did:**
- Mempelajari tiga varian perpetuity: level immediate, level due, growing
- Deep dive pada deferred perpetuity — sempat bingung soal timing, lalu diklarifikasi
- Memahami growing perpetuity: perbedaan $D_0$ vs $D_1$ (R harus di t=1)
- Eksplorasi visualisasi interaktif konvergensi annuity ke perpetuity
- Mengerjakan 3 soal latihan (sempat salah soal 3, lalu minta pembahasan)

**Key Concepts Learned:**
1. PV perpetuity-immediate = $R/i$; due = $R/d = R(1+i)/i$ — selisih tepat 1 pembayaran
2. Deferred perpetuity: pembayaran pertama di $t=K$ → $m = K-1$, bukan $K$. PV = $v^m/i \cdot R$
3. Growing perpetuity: $R$ adalah pembayaran PERTAMA di $t=1$. Kalau dikasih $D_0$, harus kalikan $(1+g)$ dulu → $R = D_0(1+g)$
4. Growing perpetuity due: $PV = \frac{R}{i-g} \times (1+i)$ — logika sama dengan annuity-due vs immediate
5. Syarat $g < i$ hanya untuk perpetuity ($n \to \infty$), bukan untuk geometric annuity ($n$ terbatas)

**Formulas Added to Sheet:**
- $a_{\overline{\infty}|i} = \frac{1}{i}$
- $\ddot{a}_{\overline{\infty}|i} = \frac{1}{d} = \frac{1+i}{i} = 1 + \frac{1}{i}$
- $_{m|}a_{\overline{\infty}|i} = \frac{v^m}{i}$
- $PV_{\text{growing}} = \frac{R}{i-g}$, syarat $g < i$

**Understanding Level:** ✅ Clear (setelah klarifikasi deferred timing dan $D_0$ vs $D_1$)

---

### Session 3: Sore
**Duration:** ~65 minutes  
**Type:** 🔵 Theory | 🟢 Practice

**Topic:** 2.3 Varying Annuities

**What I Did:**
- Mempelajari dua pola utama: geometric (tumbuh ×$(1+g)$) dan arithmetic (tambah +$Q$)
- Memahami derivasi $(Ia)$ via "annuity of annuities" — kenapa $\ddot{a}$ muncul di rumus
- Memahami perbedaan $(Ia)$ immediate vs $(I\ddot{a})$ due
- Klarifikasi skema KPR flat+floating → bukan varying annuity, tapi varying interest rate (2.6)
- Klarifikasi: geometric annuity boleh $g > i$ selama $n$ terbatas
- Mengerjakan 3 soal latihan

**Key Concepts Learned:**
1. Keyword: "tumbuh X%" → geometric; "bertambah Rp X" → arithmetic
2. Geometric: $PV = R \cdot \frac{1-\rho^n}{i-g}$, $\rho = (1+g)/(1+i)$. Special case $i=g$: pakai $Rn/(1+i)$
3. $(Ia)_{\overline{n}|} = \frac{\ddot{a}_{\overline{n}|} - nv^n}{i}$ — $\ddot{a}$ muncul dari $\sum_{k=1}^n v^{n-k} = \ddot{a}_{\overline{n}|}$, bukan dipilih arbitrer
4. $(I\ddot{a}) = (1+i) \cdot (Ia)$ — sama persis logika due vs immediate
5. Identitas kritis: $(Ia) + (Da) = (n+1) \cdot a_{\overline{n}|}$ — alat verifikasi exam
6. General arithmetic: pembayaran ke-$k$ = $P + (k-1)Q$ → $PV = (P-Q)\cdot a + Q\cdot (Ia)$

**Formulas Added to Sheet:**
- $PV_{\text{geo}} = R \cdot \frac{1-\rho^n}{i-g}$, $\rho = \frac{1+g}{1+i}$
- $PV_{\text{geo, }i=g} = \frac{Rn}{1+i}$
- $(Ia)_{\overline{n}|i} = \frac{\ddot{a}_{\overline{n}|i} - nv^n}{i}$
- $(Da)_{\overline{n}|i} = \frac{n - a_{\overline{n}|i}}{i}$
- $(Ia) + (Da) = (n+1) \cdot a_{\overline{n}|}$
- $PV_{\text{general}} = (P-Q)\cdot a_{\overline{n}|} + Q\cdot (Ia)_{\overline{n}|}$

**Understanding Level:** ✅ Clear

---

## 🧮 PRACTICE PROBLEMS LOG

### Problems Attempted Today

| # | Source | Topic | Difficulty | Time | Result | Notes |
|---|--------|-------|------------|------|--------|-------|
| 1 | Claude Study Session | 2.1 — FV annuity-immediate | ⭐⭐ | ~3 min | ✅ | s(36, 1%) = 43.077 |
| 2 | Claude Study Session | 2.1 — Cicilan annuity-immediate | ⭐⭐ | ~3 min | ✅ | Konversi nominal → monthly i |
| 3 | Claude Study Session | 2.1 — Konversi antar simbol | ⭐⭐⭐ | ~5 min | ✅ | ä(n) → s(n) via relasi |
| 4 | Claude Study Session | 2.2 — Saham preferen | ⭐⭐ | ~2 min | ❌→✅ | Sempat pakai rumus salah |
| 5 | Claude Study Session | 2.2 — Perpetuity-due properti | ⭐⭐ | ~3 min | ✅ | Ingat pakai 1/d bukan 1/i |
| 6 | Claude Study Session | 2.2 — Deferred perpetuity | ⭐⭐⭐ | ~5 min | ❌→✅ | Timing m = K−1 awalnya salah |
| 7 | Claude Study Session | 2.3 — Geometric annuity | ⭐⭐ | ~4 min | ✅ | Hitung ρ dan ρⁿ dengan benar |
| 8 | Claude Study Session | 2.3 — General arithmetic | ⭐⭐ | ~4 min | ✅ | Dekomposisi (P−Q)·a + Q·(Ia) |
| 9 | Claude Study Session | 2.3 — Special case i=g | ⭐⭐⭐ | ~4 min | ✅ | Ingat Rn/(1+i), bukan formula biasa |

**Difficulty:** ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard

### Summary Statistics
```
Total problems attempted: 9
Correct (first try):      7
Incorrect (first try):    2
Accuracy (first try):    77.8%

Time statistics:
- Fastest: ~2 min (soal 4 — perpetuity level)
- Slowest: ~5 min (soal 3 & 6)
- Average: ~3.7 min
```

---

## 🚨 ERRORS & CHALLENGES

### Errors Made Today

**Error #1:**
- **Problem:** Soal 2.2 — Saham preferen dividen Rp 600.000/tahun, i=8%
- **My answer:** Pakai 1/d (perpetuity-due)
- **Correct answer:** 1/i = Rp 7.500.000 (perpetuity-immediate karena dividen di akhir tahun)
- **Error type:** [x] Concept
- **Why wrong:** Tidak membaca timing pembayaran — "akhir tahun" = immediate, bukan due
- **Re-attempt scheduled:** 2026-03-17

**Error #2:**
- **Problem:** Soal 2.2 — Deferred perpetuity, pembayaran pertama 4 tahun dari sekarang
- **My answer:** m = 4
- **Correct answer:** m = 3, PV = v³/i (pembayaran pertama di t=4 → PV perp di t=3 → discount 3 periode)
- **Error type:** [x] Concept
- **Why wrong:** Lupa aturan: m = titik waktu pembayaran pertama − 1
- **Re-attempt scheduled:** 2026-03-17

### Difficult Concepts Today
1. **Deferred perpetuity timing:** Awalnya bingung kenapa m = K−1 bukan K. Sekarang sudah paham: PV perpetuity-immediate selalu berada SATU PERIODE sebelum pembayaran pertama.
2. **Growing perpetuity $D_0$ vs $D_1$:** Sering disebut sebagai "dividen tahun ini" tapi yang masuk rumus adalah $D_1 = D_0(1+g)$. Harus baca soal dengan teliti.
3. **$(Ia)$ derivasi via $\ddot{a}$:** Awalnya tidak intuitif kenapa annuity-due muncul di rumus annuity-immediate increasing. Sekarang paham: $\sum_{k=1}^n v^{n-k} = \ddot{a}_{\overline{n}|}$ keluar secara alami dari aljabar.

**Action plan untuk ini:**
- [x] Sudah diklarifikasi hari ini via sesi tanya-jawab
- [ ] Re-attempt soal deferred perpetuity besok pagi tanpa melihat catatan
- [ ] Practice 2 soal growing perpetuity dengan konteks $D_0$ diberikan

---

## 📐 FORMULA MASTERY

### Formulas Reviewed Today
- [x] $a_{\overline{n}|i}$ dan $s_{\overline{n}|i}$ — Can derive: ✅
- [x] $\ddot{a}_{\overline{n}|i} = (1+i) \cdot a_{\overline{n}|i}$ — Can derive: ✅
- [x] $a_{\overline{\infty}|} = 1/i$ via limit deret geometri — Can derive: ✅
- [x] $_{m|}a_{\overline{\infty}|} = v^m/i$ — Can derive: ✅
- [x] $PV_{\text{growing}} = R/(i-g)$ via deret geometri tak hingga — Can derive: ✅
- [x] $(Ia)_{\overline{n}|} = (\ddot{a} - nv^n)/i$ via annuity of annuities — Can derive: ✅
- [x] $(Ia) + (Da) = (n+1) \cdot a$ via identitas — Can derive: ✅

### Formulas Still Confused
- Tidak ada yang masih membingungkan setelah sesi hari ini

---

## 🧮 CALCULATOR PRACTICE

### Calculator Functions Used
- [x] Basic TVM (N, I/Y, PV, PMT, FV)
- [ ] Cash Flow (CF, NPV, IRR)
- [ ] Interest Conversion (2nd ICONV)
- [x] BGN/END mode switch (annuity-due vs immediate)
- [ ] Other: _______

### Calculator Challenges
- Issue: Sering lupa switch BGN mode untuk annuity-due → hitung ulang
- Solution: Biasakan cek mode di awal setiap soal annuity

**Calculator Proficiency Today:** ⭐⭐⭐ (3/5) — perlu latihan lebih untuk mode switching

---

## 💪 DAILY PERFORMANCE

### Energy & Focus
- **Energy level:** 🔋🔋🔋🔋 (4/5)
  - Pagi: 🔋🔋🔋🔋🔋 (5/5)
  - Siang: 🔋🔋🔋🔋 (4/5)
  - Sore: 🔋🔋🔋 (3/5)

- **Focus quality:** 🎯🎯🎯🎯 (4/5)
- **Distractions:** ~3 kali
- **Most productive period:** Pagi

### Study Environment
- **Location:** Rumah
- **Quality:** ⭐⭐⭐⭐
- **Issues:** Sedikit terganggu di sore hari

---

## 🎯 PROGRESS TRACKING

### Topics Progress
- **2.1 Annuity-Immediate & Due:** ✅ Completed
- **2.2 Perpetuity:** ✅ Completed
- **2.3 Varying Annuities:** ✅ Completed
- **2.4 Continuous Annuities:** ⬜ Not started
- **2.5 Deferred Annuities:** ⬜ Not started
- **2.6 Varying Interest Rates:** ⬜ Not started

### Cumulative This Week
- **Total hours this week:** ~3.5 hours
- **Total problems this week:** 9 soal
- **Average accuracy this week:** 77.8% (first attempt)

---

## 💭 REFLECTION

### What Went Well Today
1. Berhasil menyelesaikan 3 topik sesuai rencana (2.1, 2.2, 2.3)
2. Konsep yang awalnya membingungkan (deferred timing, $D_0$ vs $D_1$, derivasi $(Ia)$) akhirnya jelas setelah klarifikasi aktif
3. Identitas $(Ia) + (Da) = (n+1) \cdot a$ langsung dimengerti lewat argumen visual

### What Needs Improvement
1. Kebiasaan membaca timing pembayaran di soal sebelum langsung pakai formula — jangan terburu-buru
2. Calculator proficiency untuk BGN/END mode switching harus lebih cepat

### Biggest Challenge Today
**Challenge:** Deferred perpetuity timing — bingung kapan $m = K$ vs $m = K-1$

**How I addressed it:** Minta penjelasan ulang dengan visualisasi interaktif dan time diagram. Rule yang sekarang dipegang: *"PV perpetuity-immediate selalu satu periode sebelum pembayaran pertama."* Jadi kalau bayar pertama di $t=K$, PV ada di $t=K-1$, discount $K-1$ periode → $m = K-1$.

**Still unresolved?** No

### Key Insight / "Aha!" Moment
> Kenapa $(Ia)$ pakai $\ddot{a}$ padahal ini annuity-immediate? Karena saat derivasi via "annuity of annuities", penjumlahan $\sum_{k=1}^n v^{n-k}$ menghasilkan $1 + v + v^2 + \cdots + v^{n-1}$ — dan itu persis definisi $\ddot{a}_{\overline{n}|}$. Bukan dipilih arbitrer, tapi keluar sendiri dari aljabar. Formula yang kelihatan aneh ternyata punya alasan yang sangat elegan.

---

## 📋 TOMORROW'S PREPARATION

### Tomorrow's Goals
- [ ] Study: 2.4 Continuous Annuities
- [ ] Study: 2.5 Deferred Annuities
- [ ] Review: Ulangi soal deferred perpetuity (Error #2 hari ini) tanpa catatan
- [ ] Practice: Minimal 2 soal growing perpetuity dengan $D_0$ diberikan
- [ ] Focus on: Timing dan focal date — kelemahan yang teridentifikasi hari ini

### Materials Needed
- [ ] File 2_4_Continuous_Annuities.md
- [ ] File 2_5_Deferred_Annuities.md
- [ ] Cheat sheet hari ini sebagai referensi

### Mental Note for Tomorrow
> Sebelum colok angka ke rumus apapun — gambar time diagram dulu, tentukan focal date, tentukan PV atau FV. Baru hitung.

---

## 📊 DAILY METRICS SUMMARY

```
✅ Completed Plan Items: 5 / 5
📚 Study Hours:          3.5 hours (Target: 3 hours)
🧮 Problems Done:        9 soal (Target: 9)
✔️ Accuracy:             77.8% first attempt → 100% setelah klarifikasi
⏱️ Avg Time/Problem:     ~3.7 min (Target: <4 min) ✓
🚨 Errors Logged:        2 errors (deferred timing, perpetuity-immediate vs due)
📐 Formulas Learned:     13 formula baru
⭐ Overall Day Rating:   ⭐⭐⭐⭐⭐
```

---

## 🔗 LINKS & REFERENCES

**Related Notes:**
- [[00_DASHBOARD]] - Main dashboard
- [[Error_Log]] - Error #1 (perpetuity timing), Error #2 (deferred m)
- [[Formula_Sheet]] - 13 formula ditambahkan hari ini
- [[Week 1 Review]] - Progress mingguan
- Next day: [[Day 2 Log — 2026-03-17]]

**Project Files Used:**
- `2_1_Annuity-Immediate_and_Annuity-Due.md`
- `2_2_Perpetuity.md`
- `2_3_Varying_Annuities.md`
- `PROMPT_CF1_Study_Session.md`

---

## ✅ DAILY CLOSING CHECKLIST

Sebelum selesai hari ini:
- [x] Semua study session tercatat
- [x] Semua error dicatat (2 error)
- [x] Formula sheet diupdate (13 formula)
- [x] Practice problems table diisi
- [x] Rencana besok sudah dibuat
- [x] Reflection selesai

**Day Status:** ✅ COMPLETE

**Completed at:** Malam, 16 Maret 2026

---

*"Consistency beats intensity. Every day counts."*
