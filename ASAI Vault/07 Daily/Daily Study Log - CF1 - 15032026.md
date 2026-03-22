---
date: 2026-03-15
week: Week 1
day_number: Day 1
status: ✅ Completed
---

# 📅 Daily Study Log - Sunday, 15 March 2026

> **Week Focus:** Chapter 1 — Nilai Waktu dari Uang (Time Value of Money)
> **Today's Focus:** Topik 1.1 · 1.2 · 1.3 · 1.4 · 1.5 (Full Chapter 1)
> **Study Quality:** ⭐⭐⭐⭐ (solid understanding, beberapa miskonsepsi terkoreksi di tengah jalan)

---

## 🎯 TODAY'S PLAN

### Study Goals
- [x] Topic 1: 1.1 Interest Rates & Discount Rates
- [x] Topic 2: 1.2 Effective, Nominal, and Force of Interest
- [x] Topic 3: 1.3 Cash Flow Equations & Inflation
- [x] Topic 4: 1.4 Accumulation and Present Value
- [x] Topic 5: 1.5 NPV, IRR, DWRR, TWRR
- [x] Practice: Latihan soal per topik + 6 soal gabungan
- [x] Review: Checkpoint summary per 3 topik dan checkpoint Chapter 1 penuh

### Time Allocation
- **Planned:** Full day self-study session
- **Actual:** 1 full session (estimasi 4–6 jam efektif)

---

## 📚 STUDY SESSIONS

### Session 1: Topik 1.1 — Interest Rates & Discount Rates
**Duration:** ~45 menit
**Topic:** Interest rate, discount rate, simple vs compound interest
**Type:** 🔵 Theory

**What I Did:**
- Mempelajari konsep time value of money dari level awam (analogi pinjam meminjam)
- Memahami perbedaan interest rate $i$ vs discount rate $d$ vs discount factor $v$
- Memahami perbedaan simple interest (linear) vs compound interest (eksponensial)
- Berlatih dengan konversi $i \leftrightarrow d \leftrightarrow v$

**Key Concepts Learned:**
1. Interest rate $i$ dihitung dari principal awal; discount rate $d$ dihitung dari nilai akhir → selalu $d < i$
2. Compound interest default di CF1 kecuali soal menyebut "simple interest" secara eksplisit
3. Discount factor $v = 1/(1+i) = 1-d$ selalu bernilai antara 0 dan 1

**Formulas Added to Sheet:**
- Compound: $A(n) = A(0)(1+i)^n$
- Simple: $A(n) = A(0)(1+in)$
- Present Value: $PV = FV \cdot v^n = FV/(1+i)^n$
- Discount rate: $d = i/(1+i)$, $i = d/(1-d)$, $v = 1-d$

**Understanding Level:** ✅ Clear

---

### Session 2: Topik 1.2 — Effective, Nominal, and Force of Interest
**Duration:** ~60 menit
**Topic:** Konversi $i$, $i^{(m)}$, $d^{(m)}$, $\delta$ · rate ladder · $\delta_t$ berubah
**Type:** 🔵 Theory + 🟢 Practice

**What I Did:**
- Mempelajari perbedaan nominal rate vs effective rate melalui analogi iklan bank
- Memahami konsep force of interest $\delta$ sebagai limit compounding kontinu
- Berdiskusi tentang penerapan bunga kontinu di dunia nyata (Black-Scholes, yield obligasi, aktuaria jiwa)
- Memahami pola rate ladder: $d < d^{(m)} < \delta < i^{(m)} < i$
- Latihan soal 1.2: konversi $\delta \to i \to d^{(4)}$ — berhasil mengoreksi jawaban gue sendiri yang awalnya kurang tepat

**Key Concepts Learned:**
1. Nominal rate $i^{(m)}$ ≠ effective rate $i$ — wajib konversi dulu sebelum dipakai di formula lain
2. Force of interest: $\delta = \ln(1+i)$, $a(t) = e^{\delta t}$ (konstan), $a(t) = e^{\int \delta_t dt}$ (berubah)
3. $\delta_t$ berubah → wajib integral per zona, bukan dikali langsung

**Formulas Added to Sheet:**
- $i = (1 + i^{(m)}/m)^m - 1$
- $i^{(m)} = m[(1+i)^{1/m} - 1]$
- $\delta = \ln(1+i)$, $i = e^\delta - 1$
- $d^{(m)} = m[1-(1+i)^{-1/m}]$
- $a(t) = e^{\int_0^t \delta_s \, ds}$

**Understanding Level:** ✅ Clear

---

### Session 3: Topik 1.3 — Cash Flow Equations & Inflation
**Duration:** ~50 menit
**Topic:** Equation of value · focal date · Fisher equation · real vs nominal framework
**Type:** 🔵 Theory + 🟢 Practice

**What I Did:**
- Mempelajari konsep focal date dan equation of value
- Memahami Fisher equation exact vs approximate
- Memahami dua framework: nominal (CF nominal + rate $i$) vs real (CF real + rate $r$) — keduanya harus menghasilkan PV yang sama
- Shortcut penting: CF yang tumbuh sebesar $q$ → CF real konstan
- Latihan soal 1.3: equation of value cari payment pengganti, dan Fisher + inflasi dengan dua framework

**Key Concepts Learned:**
1. Focal date bebas dipilih — hasilnya identik; pilih titik terbanyak CF berkumpul
2. Fisher exact: $(1+i) = (1+r)(1+q)$ → jangan pakai $r \approx i-q$ di soal numerik
3. Jangan pernah menjumlah CF dari waktu berbeda tanpa diskonto ke titik yang sama
4. Jangan campur nominal CF dengan real rate atau sebaliknya

**Formulas Added to Sheet:**
- Equation of value: $\sum_k C_k \cdot v^{t_k} = 0$
- Fisher exact: $r = (1+i)/(1+q) - 1$
- Konversi nominal → real: $C_t^{\text{real}} = C_t^{\text{nom}} / (1+q)^t$
- Cari $n$: $n = \ln(FV/PV) / \ln(1+i)$

**Understanding Level:** ✅ Clear

---

### Session 4: Topik 1.4 — Accumulation and Present Value
**Duration:** ~40 menit
**Topic:** $a(t)$ generalized · varying rates · faktor partial · hubungan $\delta_t \leftrightarrow a(t)$
**Type:** 🔵 Theory

**What I Did:**
- Mempelajari accumulation function $a(t)$ sebagai generalisasi dari semua mekanisme pertumbuhan
- Memahami tiga wajah $a(t)$: compound, simple, force of interest
- Memahami faktor akumulasi partial $a(t_1, t_2) = a(t_2)/a(t_1)$ — tidak bisa pakai $a(t_2)$ langsung jika $t_1 \neq 0$
- Memahami hubungan dua arah: dari $\delta_t$ ke $a(t)$ (integral) dan dari $a(t)$ ke $\delta_t$ (diferensial)

**Key Concepts Learned:**
1. $a(t_1, t_2) = a(t_2)/a(t_1)$ — untuk partial factor, selalu pakai rasio
2. Varying rates: kalikan berurutan $(1+i_1)(1+i_2)\cdots$ — jangan rata-rata aritmetik
3. $\delta_t = a'(t)/a(t) = d/dt [\ln a(t)]$ — force of interest adalah laju pertumbuhan relatif

**Formulas Added to Sheet:**
- $a(n) = \prod_{t=1}^n (1+i_t)$ untuk varying rates
- $a(t_1, t_2) = a(t_2)/a(t_1) = e^{\int_{t_1}^{t_2} \delta_s \, ds}$
- $\delta_t = a'(t)/a(t)$
- Rule of 72: $t \approx 72/i_{\%}$ (estimasi cepat)

**Understanding Level:** ✅ Clear

---

### Session 5: Topik 1.5 — NPV, IRR, DWRR, TWRR
**Duration:** ~50 menit
**Topic:** Keputusan proyek · yield investasi · evaluasi kinerja investor vs manajer
**Type:** 🔵 Theory

**What I Did:**
- Mempelajari empat ukuran return: NPV, IRR, DWRR, TWRR
- Memahami kapan menggunakan masing-masing ukuran dan dari perspektif siapa
- Memahami perbedaan DWRR (terpengaruh timing) vs TWRR (bebas timing)
- Mempelajari metode interpolasi linear untuk mencari IRR
- Memahami jebakan multiple IRR pada proyek non-konvensional

**Key Concepts Learned:**
1. NPV & IRR → keputusan proyek. DWRR & TWRR → evaluasi kinerja
2. DWRR = pengalaman investor (terpengaruh timing deposit/withdrawal). TWRR = skill manajer (eliminasi timing)
3. Tidak ada kontribusi/withdrawal → DWRR = TWRR = $B/A - 1$
4. Withdrawal = $C_k$ negatif di formula DWRR (jebakan utama!)

**Formulas Added to Sheet:**
- $NPV(i) = \sum_{t=0}^n C_t \cdot v^t$
- $i_{DW} \approx I / (A + \sum_k C_k(1-t_k))$ dengan $I = B - A - \sum C_k$
- $1 + i_{TW} = \prod_k (1+r_k)$ di mana $1+r_k = B_k/(A_k + C_k)$
- Interpolasi IRR: $i^* \approx i_1 + \frac{NPV_1}{NPV_1 - NPV_2}(i_2 - i_1)$

**Understanding Level:** 🟡 Partial (konsep jelas, perlu lebih banyak practice soal untuk DWRR & TWRR)

---

## 🧮 PRACTICE PROBLEMS LOG

### Problems Attempted Today

| # | Source | Topic | Difficulty | Time | Result | Notes |
|---|--------|-------|------------|------|--------|-------|
| 1 | Latihan Claude | 1.2 — δ → d⁽⁴⁾ | ⭐⭐⭐ | ~5 min | ✅ | Jawaban 5.956% benar, bukan 5.76% seperti kunci yang salah |
| 2 | Latihan Claude | 1.2 — Nominal rate + varying δ | ⭐⭐⭐ | ~8 min | ✅ | Dua fase: e^(δt) + konversi i⁽⁴⁾ |
| 3 | Latihan Claude | 1.3 — EoV payment pengganti | ⭐⭐⭐ | ~6 min | ✅ | Focal date t=0, solve X |
| 4 | Latihan Claude | 1.3 — Fisher + dua framework | ⭐⭐⭐ | ~8 min | ✅ | Nominal dan real menghasilkan PV identik |
| 5 | Latihan Claude | Gabungan 1.1–1.3 Soal 1 | ⭐⭐⭐ | ~5 min | ✅ | Simple interest → i → d |
| 6 | Latihan Claude | Gabungan 1.1–1.3 Soal 2 | ⭐⭐⭐ | ~6 min | ✅ | Ditemukan kesalahan di kunci jawaban yang dibuat Claude |
| 7 | Latihan Claude | Gabungan 1.1–1.3 Soal 3 | ⭐⭐⭐ | ~6 min | ✅ | Ditemukan kesalahan di pilihan jawaban |
| 8 | Latihan Claude | Gabungan 1.1–1.3 Soal 4 | ⭐⭐⭐ | ~6 min | ✅ | Fisher + konversi ke i⁽¹²⁾ — jawaban benar 7.382% |

**Difficulty:** ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard

### Summary Statistics
```
Total problems attempted: 8
Correct: 8
Incorrect: 0
Accuracy: 100%

Catatan penting: 3 dari soal gabungan (nomor 2, 3, 4) memiliki pilihan
jawaban yang SALAH dari sumber (Claude), bukan dari cara pengerjaan.
Jawaban perhitungan sendiri sudah benar dan berhasil diverifikasi.

Time statistics:
- Fastest: ~5 min
- Slowest: ~8 min
- Average: ~6 min
```

---

## 🚨 ERRORS & CHALLENGES

### Errors Made Today

> Catatan: Tidak ada error dari sisi pengerjaan soal. Semua perhitungan yang dilakukan sendiri sudah benar. Kesalahan justru ditemukan pada pilihan jawaban yang disediakan oleh sumber latihan (Claude), bukan dari pemahaman materi.

**Incident #1 — Kunci jawaban soal latihan gabungan nomor 2:**
- **Problem:** Soal δ → d⁽⁴⁾ dengan δ = 0.06
- **My answer:** 5.956%
- **Provided "correct" answer:** C (5.76%) ← SALAH di sumber
- **Actual correct answer:** 5.955–5.956% ✅ (jawaban sendiri benar)
- **Error type:** Bukan error pengerjaan — ini kesalahan sumber soal
- **Resolution:** Berhasil membuktikan jawaban sendiri dengan derivasi lengkap $\delta \to i \to d^{(4)}$
- **Key learning:** Selalu verifikasi dengan sanity check rate ladder $d < d^{(m)} < \delta < i^{(m)} < i$

**Incident #2 — Kunci jawaban soal gabungan nomor 3 dan 4:**
- **Problem:** Pilihan jawaban tidak konsisten dengan perhitungan yang benar
- **My answers:** ~Rp 6.753 juta (soal 3), 7.382% (soal 4) — keduanya BENAR
- **Resolution:** Dinyatakan benar setelah diverifikasi ulang
- **Key learning:** Kepercayaan diri dalam proses pengerjaan soal — jika proses sudah benar, percayai hasilnya

### Difficult Concepts Today
1. **d⁽ᵐ⁾ vs i⁽ᵐ⁾:** Rumus sangat mirip tapi arahnya berlawanan. d⁽ᵐ⁾ = m[1-(1+i)^(-1/m)] pakai eksponen negatif, sedangkan i⁽ᵐ⁾ = m[(1+i)^(1/m)-1] pakai eksponen positif.
2. **DWRR vs TWRR:** Konsep jelas, tapi aplikasi soal dengan banyak sub-periode perlu lebih banyak latihan

**Action plan for these:**
- [x] Sudah diklarifikasi dan dipahami dalam sesi hari ini
- [ ] Latihan 2–3 soal DWRR dan TWRR dengan withdrawal dan multiple kontribusi
- [ ] Drill konversi d⁽ᵐ⁾ sampai tidak tertukar dengan i⁽ᵐ⁾

---

## 📐 FORMULA MASTERY

### Formulas Reviewed Today
- [x] $A(n) = A(0)(1+i)^n$ — Can derive: ✅
- [x] $d = i/(1+i)$, $i = d/(1-d)$, $v = 1-d$ — Can derive: ✅
- [x] $i = (1 + i^{(m)}/m)^m - 1$ — Can derive: ✅
- [x] $i^{(m)} = m[(1+i)^{1/m} - 1]$ — Can derive: ✅
- [x] $d^{(m)} = m[1-(1+i)^{-1/m}]$ — Can derive: ✅
- [x] $\delta = \ln(1+i)$, $i = e^\delta - 1$ — Can derive: ✅
- [x] $a(t) = e^{\int_0^t \delta_s ds}$ — Can derive: ✅
- [x] $(1+i) = (1+r)(1+q)$ Fisher exact — Can derive: ✅
- [x] $a(t_1, t_2) = a(t_2)/a(t_1)$ — Can derive: ✅
- [x] $NPV(i) = \sum C_t v^t$, IRR interpolasi — Can derive: ✅
- [x] DWRR: $i_{DW} \approx I/(A + \sum C_k w_k)$ — Can derive: ✅
- [x] TWRR: $1+i_{TW} = \prod(1+r_k)$ — Can derive: ✅

### Formulas Still Confused
- $d^{(m)}$ vs $i^{(m)}$: Mudah tertukar karena rumus mirip. Perlu drill tambahan.
- TWRR dengan 3+ sub-periode dan withdrawal: Perlu lebih banyak practice soal.

---

## 🧮 CALCULATOR PRACTICE

### Calculator Functions Used
- [x] Basic TVM (N, I/Y, PV, PMT, FV) — digunakan untuk verifikasi akumulasi
- [x] Cash Flow (CF, NPV, IRR) — konsep dipelajari di 1.5
- [x] Interest Conversion (2nd ICONV) — digunakan untuk konversi nominal ke efektif
- [ ] BGN/END mode switch
- [ ] Other: _______

### Calculator Challenges
- Issue: Memastikan konsistensi antara hasil kalkulator dan perhitungan manual untuk $e^{0.06}$ dan $(1.06)^{0.25}$
- Solution: Verifikasi dengan logaritma natural — karena $i = e^\delta - 1$ dan $(1+i)^{1/4} = e^{\delta/4}$

**Calculator Proficiency Today:** ⭐⭐⭐ (3/5 — perlu lebih terbiasa dengan ICONV dan CF worksheet)

---

## 💪 DAILY PERFORMANCE

### Energy & Focus
- **Energy level:** 🔋🔋🔋🔋 (4/5)
  - Morning: 🔋🔋🔋🔋🔋
  - Afternoon: 🔋🔋🔋🔋
  - Evening: 🔋🔋🔋

- **Focus quality:** 🎯🎯🎯🎯 (4/5)
- **Distractions:** Sempat frustrasi saat menemukan kesalahan di kunci soal latihan
- **Most productive period:** Morning / Early Afternoon

### Study Environment
- **Location:** Self-study dengan AI tutor (Claude)
- **Quality:** ⭐⭐⭐⭐
- **Issues:** Sempat down dan kehilangan motivasi setelah menemukan 3 soal gabungan dengan pilihan jawaban yang salah dari sumber — setelah dikonfirmasi bahwa jawaban sendiri benar, motivasi pulih

---

## 🎯 PROGRESS TRACKING

### Topics Progress
- **1.1 Interest Rates & Discount Rates:** ✅ Completed
- **1.2 Effective, Nominal, Force of Interest:** ✅ Completed
- **1.3 Cash Flow Equations & Inflation:** ✅ Completed
- **1.4 Accumulation and Present Value:** ✅ Completed
- **1.5 NPV, IRR, DWRR, TWRR:** 🟡 In progress (konsep selesai, latihan soal belum)

### Cumulative This Week
- **Total hours this week:** ~5–6 jam (estimasi)
- **Total problems this week:** 8 soal latihan formal + banyak contoh dalam materi
- **Average accuracy this week:** 100% (semua jawaban benar, 3 soal dikonfirmasi kunci salah dari sumber)

---

## 💭 REFLECTION

### What Went Well Today
1. Berhasil menyelesaikan Chapter 1 penuh dalam satu sesi — 5 topik dari 1.1 sampai 1.5
2. Berhasil mendeteksi dan membuktikan kesalahan pada kunci jawaban soal latihan (soal 2, 3, 4 dari sesi gabungan) — ini menunjukkan bahwa pemahaman konsep cukup solid
3. Metode Feynman + gradual level escalation sangat efektif untuk membangun pemahaman dari dasar ke formal

### What Needs Improvement
1. Latihan soal DWRR dan TWRR — terutama kasus dengan withdrawal dan multiple sub-periode
2. Drill konversi $d^{(m)}$ agar tidak tertukar dengan $i^{(m)}$
3. Manajemen emosi — sempat down dan malas melanjutkan soal 5–6 setelah frustrasi dengan kunci salah

### Biggest Challenge Today
**Challenge:** Menemukan bahwa 3 soal dalam set latihan gabungan memiliki pilihan jawaban yang salah dari sumber (Claude), yang menyebabkan keraguan pada cara pengerjaan sendiri padahal sudah benar.

**How I addressed it:** Membuktikan jawaban sendiri dengan derivasi lengkap, terutama soal nomor 2 ($d^{(4)}$ dari $\delta = 0.06$). Hasil: 5.956%, terbukti benar melalui sanity check rate ladder.

**Still unresolved?** No — sudah dikonfirmasi dan diterima. Namun tetap perlu lebih banyak latihan soal dari sumber yang lebih terpercaya (misalnya bank soal ujian resmi CF1).

### Key Insight / "Aha!" Moment
> **Topik 1.2:** Force of interest $\delta$ bukan hanya konsep teoritis — ia hadir secara nyata di balik model Black-Scholes, yield obligasi antar tenor, dan bahkan di force of mortality dalam asuransi jiwa. Struktur matematisnya identik: semua adalah "instantaneous rate of change" yang diintegralkan.

> **Topik 1.3:** CF yang tumbuh tepat sebesar inflasi $q$ memiliki nilai real yang **konstan** — ini adalah shortcut paling powerful di topik inflasi karena langsung mengubah soal varying CF menjadi soal CF konstan yang trivial.

> **Umum:** Kepercayaan pada proses pengerjaan lebih penting dari kepercayaan pada kunci jawaban. Jika langkah-langkah derivasi sudah benar dan sanity check terpenuhi, percaya pada jawaban sendiri.

---

## 📋 TOMORROW'S PREPARATION

### Tomorrow's Goals
- [ ] Study: Chapter 2 — Topik 2.1 Annuity-Immediate and Annuity-Due
- [ ] Study: Chapter 2 — Topik 2.2 Perpetuity
- [ ] Practice: 4–6 soal latihan 1.5 (DWRR & TWRR) sebagai pemanasan
- [ ] Review: Formula $d^{(m)}$ vs $i^{(m)}$ — drill 5 menit sebelum mulai
- [ ] Focus on: Membangun intuisi anuitas dari konsep TVM yang sudah dikuasai

### Materials Needed
- [x] Materi Chapter 2 (tersedia di project knowledge)
- [ ] Bank soal ujian CF1 resmi untuk latihan DWRR/TWRR
- [ ] Kalkulator finansial (BA II Plus atau ekuivalen)

### Mental Note for Tomorrow
> Chapter 2 adalah kelanjutan langsung dari Chapter 1. Annuity = serangkaian pembayaran periodik — yang berarti equation of value (1.3) akan digunakan berulang kali. Pastikan fondasi discounting sudah benar-benar solid sebelum masuk.

---

## 📊 DAILY METRICS SUMMARY

```
✅ Completed Plan Items: 7 / 7
📚 Study Hours: ~5–6 jam (Target: 4 jam) — EXCEEDED
🧮 Problems Done: 8 formal (Target: 6) — EXCEEDED
✔️ Accuracy: 100% (Target: ≥70%) — EXCEEDED
   *Catatan: 3 soal memiliki kunci salah dari sumber, bukan dari pengerjaan
⏱️ Avg Time/Problem: ~6 min (Target: <6 min) — ON TARGET
🚨 Errors Logged: 0 errors (dari sisi pengerjaan)
📐 Formulas Learned: 12 formula utama Chapter 1
⭐ Overall Day Rating: ⭐⭐⭐⭐
```

---

## 🔗 LINKS & REFERENCES

**Related Notes:**
- [[00_DASHBOARD]] - Main dashboard
- [[Error_Log]] - Tidak ada error pengerjaan hari ini
- [[Formula_Sheet]] - 12 formula Chapter 1 ditambahkan
- [[Chapter 1 Checkpoint]] - Summary lengkap 1.1–1.5
- Next day: [[Day 2 Log]]

**External Resources Used:**
- Claude AI (Project CF1) — materi, penjelasan Feynman, soal latihan
- Project Knowledge: file markdown materi 1.1–1.5, soal ujian CF1 historical
- Referensi: Vaaler & Daniel (2009) *Mathematical Interest Theory* Bab 1–2; Kellison (2006) *Theory of Interest* Bab 1–2, 11

---

## ✅ DAILY CLOSING CHECKLIST

Before ending the day, ensure:
- [x] Semua sesi belajar terdokumentasi
- [x] Incident kunci salah dicatat dan dikonfirmasi benar
- [x] Formula sheet sudah diupdate (12 formula Chapter 1)
- [x] Practice problems table terisi
- [x] Rencana hari berikutnya sudah dibuat (Chapter 2 — Annuities)
- [x] Checkpoint summary Chapter 1 (1.1–1.5) sudah dibuat
- [x] Refleksi selesai dengan jujur

**Day Status:** ✅ COMPLETE

**Completed at:** Malam, 15 Maret 2026

---

*"Consistency beats intensity. Every day counts."*

---

### 📎 Appendix — Formula Quick Reference Chapter 1

| Topik | Formula | Kondisi |
|-------|---------|---------|
| 1.1 | $A(n) = A(0)(1+i)^n$ | Compound, default |
| 1.1 | $A(n) = A(0)(1+in)$ | Simple, eksplisit di soal |
| 1.1 | $d = i/(1+i)$, $v = 1/(1+i) = 1-d$ | Selalu $d < i$, $0 < v < 1$ |
| 1.2 | $i = (1+i^{(m)}/m)^m - 1$ | Nominal → Effective |
| 1.2 | $d^{(m)} = m[1-(1+i)^{-1/m}]$ | Nominal discount rate |
| 1.2 | $\delta = \ln(1+i)$; $a(t) = e^{\int \delta_t dt}$ | Force of interest |
| 1.2 | $d < d^{(m)} < \delta < i^{(m)} < i$ | Rate ladder (sanity check) |
| 1.3 | $\sum C_k v^{t_k} = 0$ | Equation of value @ $t=0$ |
| 1.3 | $r = (1+i)/(1+q) - 1$ | Fisher exact |
| 1.4 | $a(t_1,t_2) = a(t_2)/a(t_1)$ | Faktor partial |
| 1.4 | $a(n) = \prod(1+i_t)$ | Varying rates |
| 1.5 | $NPV = \sum C_t v^t$ | Terima jika NPV > 0 |
| 1.5 | $i_{DW} \approx I/(A + \sum C_k(1-t_k))$ | DWRR approx |
| 1.5 | $1+i_{TW} = \prod(1+r_k)$ | TWRR chain-link |
