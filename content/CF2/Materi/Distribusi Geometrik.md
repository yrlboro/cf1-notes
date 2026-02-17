---
title: "Geometric Distribution"
aliases: ["Distribusi Geometrik", "Waiting Time Distribution"]
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - DiscreteDistributions
  - Formula
exam_weight: 5-8%
difficulty: Medium
learning_objective: "Topic 2 (Univariate Probability Distributions)"
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
status: active
---

# Geometric Distribution

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Topic 2 (Univariate Probability Distributions)
> - **Kategori**: Discrete Distributions
> - **Skill yang Diuji**: Calculate (Probabilities, Mean, Var), Apply (Memoryless Property), Recognize (Bernoulli trials until first success).
> - **Bobot**: ~5-8% (Sering muncul dalam soal conditional probability).
> - **Prerequisite**: [[Bernoulli Trials]], [[Independence]], [[Geometric Series]]
> - **Related Topics**: [[Negative Binomial Distribution]] (Generalisasi), [[Exponential Distribution]] (Continuous Analog), [[Poisson Process]]

---

## 1. Intuisi (The "Why")

> [!tip] Intuisi: Kisah Ketekunan
> Bayangkan Anda adalah seorang penembak jitu yang sedang latihan, atau seorang aktuaris yang sedang mencoba lulus ujian. Anda tidak berhenti mencoba sampai Anda berhasil **sekali**.
>
> - Coba 1 → Gagal.
> - Coba 2 → Gagal.
> - Coba 3 → Gagal.
> - Coba 4 → **Sukses!** (Berhenti).
>
> **Distribusi Geometrik** menghitung: **"Berapa banyak percobaan yang harus saya lakukan untuk mendapatkan sukses pertama?"**
>
> Intinya: Ini adalah kisah tentang "posisi" di mana sukses pertama terjadi dalam serangkaian percobaan independen yang identik.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Variabel acak $X$ dikatakan berdistribusi Geometrik dengan parameter $p$ jika $X$ merepresentasikan nomor urut percobaan di mana sukses pertama terjadi.
>
> **Notasi:**
> $$X \sim \text{Geom}(p)$$
>
> **Parameter:**
> - $p$: Probabilitas sukses dalam satu percobaan Bernoulli ($0 < p \le 1$).
> - $q = 1-p$: Probabilitas gagal.
>
> **Support:**
> $$S_X = \{1, 2, 3, \dots\}$$
> *(Catatan: $X$ minimal 1, karena butuh setidaknya 1 percobaan untuk sukses)*
>
> **Rumus Utama:**
>
> | Fungsi | Rumus | Keterangan |
> |:---|:---|:---|
> | **PMF** | $P(X = x) = (1-p)^{x-1} p$ | Probabilitas sukses tepat di percobaan ke-$x$ |
> | **CDF** | $F_X(x) = 1 - (1-p)^x$ | Probabilitas sukses pada atau sebelum percobaan ke-$x$ |
> | **Survival** | $S_X(x) = (1-p)^x$ | Probabilitas butuh $> x$ percobaan (x pertama gagal) |
> | **Mean** | $E[X] = \frac{1}{p}$ | Rata-rata trial sampai sukses |
> | **Variance** | $\text{Var}(X) = \frac{1-p}{p^2}$ | Ukuran sebaran |
>
> **Asumsi Eksplisit:**
> 1. **Independence**: Hasil percobaan ke-$n$ tidak bergantung pada sebelumnya.
> 2. **Homogeneity**: Probabilitas sukses $p$ konstan di setiap percobaan.

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
>
> **Bedah Rumus PMF:**
> $$P(X=x) = \underbrace{(1-p)^{x-1}}_{\text{A}} \cdot \underbrace{p}_{\text{B}}$$
>
> - **Term A $(1-p)^{x-1}$**: Jika sukses pertama terjadi di percobaan ke-$x$, maka secara logika, **$x-1$ percobaan sebelumnya HARUS gagal**. Karena independen, kita kalikan peluang gagal sebanyak $x-1$ kali.
> - **Term B $p$**: Pada percobaan ke-$x$, kita **HARUS sukses**.
>
> **Logika Mean ($E[X] = 1/p$):**
> Jika peluang sukses adalah $1/5$ ($p=0.2$), secara intuitif Anda perlu mencoba rata-rata 5 kali untuk sukses satu kali. Matematikanya: $1/0.2 = 5$.
>
> **The Memoryless Property (SANGAT KRUSIAL):**
> Geometrik adalah satu-satunya distribusi diskrit yang "tidak punya ingatan".
> $$P(X > n + m \mid X > n) = P(X > m)$$
> *Artinya:* Jika Anda sudah gagal 10 kali, probabilitas Anda butuh 5 percobaan *lagi* sama persis dengan probabilitas Anda butuh 5 percobaan dari titik awal. Koin tidak berhutang kemenangan pada Anda.

---

## 4. Contoh Soal (SOA Style)

> [!example] Contoh Soal A (Fundamental - 30% difficulty)
> **Soal:**
> Sebuah sistem keamanan memiliki probabilitas $0.1$ untuk mendeteksi virus pada setiap scan file. Setiap scan independen satu sama lain. Hitung probabilitas bahwa virus pertama kali terdeteksi tepat pada scan ke-5.
>
> **Solusi:**
>
> 1. **Identifikasi:**
>    - Mencari probabilitas sukses pertama pada trial spesifik ($X=5$).
>    - $p = 0.1$
>    - $X \sim \text{Geom}(0.1)$
>
> 2. **Setup:**
>    Gunakan rumus PMF:
>    $$P(X=x) = (1-p)^{x-1}p$$
>
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(X=5) &= (1 - 0.1)^{5-1} (0.1) \\
>    &= (0.9)^4 (0.1) \\
>    &= 0.6561 \times 0.1 \\
>    &= 0.06561
>    \end{align}
>    $$
>
> 4. **Verification:**
>    - ✓ Nilai probabilitas kecil dan positif ($0 \le P \le 1$).

> [!example] Contoh Soal B (Exam-Typical - 60% difficulty)
> **Soal:**
> Seorang aktuaris sedang mengerjakan soal latihan Exam P. Probabilitas dia menjawab benar sebuah soal adalah $0.6$. Anggap soal-soal tersebut independen. Jika $X$ adalah nomor soal di mana dia melakukan kesalahan pertamanya, hitung $E[X]$ dan $P(X > 3)$.
>
> **Solusi:**
>
> 1. **Identifikasi (TRAP ALERT):**
>    - "Sukses" dalam Geometric = Kejadian yang menghentikan proses.
>    - Di sini proses berhenti saat dia **salah**.
>    - Event of Interest ("Sukses") = Menjawab Salah.
>    - $p = P(\text{Salah}) = 1 - 0.6 = 0.4$.
>    - $X \sim \text{Geom}(0.4)$.
>
> 2. **Setup:**
>    - Mean: $E[X] = 1/p$
>    - Tail Probability (Survival): $P(X > x) = (1-p)^x$
>
> 3. **Eksekusi:**
>    - **Mean:**
>      $$E[X] = \frac{1}{0.4} = 2.5$$
>    - **Probability $P(X > 3)$:**
>      Artinya kesalahan pertama terjadi *setelah* soal ke-3 (Soal 1, 2, 3 Benar).
>      $$
>      \begin{align}
>      P(X > 3) &= (1-0.4)^3 \\
>      &= (0.6)^3 \\
>      &= 0.216
>      \end{align}
>      $$
>
> 4. **Verification:**
>    - ✓ $E[X] \ge 1$.
>    - ✓ Metode alternatif: $1 - P(X \le 3)$ memberikan hasil sama, tapi lebih lambat.

> [!example] Contoh Soal C (Challenging - 90% difficulty)
> **Soal:**
> Misalkan $X$ dan $Y$ adalah variabel acak independen dengan $X \sim \text{Geom}(p_1)$ dan $Y \sim \text{Geom}(p_2)$. Tentukan ekspresi untuk $P(X < Y)$ dalam bentuk $p_1$ dan $p_2$.
>
> **Solusi:**
>
> 1. **Identifikasi:**
>    Mencari probabilitas sukses $X$ terjadi *sebelum* sukses $Y$.
>
> 2. **Setup:**
>    Gunakan **Law of Total Probability** dengan conditioning pada $X$:
>    $$P(X < Y) = \sum_{x=1}^{\infty} P(X < Y \mid X = x) P(X = x)$$
>
> 3. **Eksekusi:**
>    Karena independen, $P(X < Y \mid X = x) = P(Y > x)$.
>    Ingat survival function $P(Y > x) = (1-p_2)^x$.
>
>    $$
>    \begin{align}
>    P(X < Y) &= \sum_{x=1}^{\infty} (1-p_2)^x \cdot \underbrace{(1-p_1)^{x-1} p_1}_{P(X=x)} \\
>    &= \frac{p_1}{1-p_1} \sum_{x=1}^{\infty} \left[ (1-p_2)(1-p_1) \right]^x
>    \end{align}
>    $$
>
>    Gunakan rumus deret geometri tak hingga $\sum_{k=1}^{\infty} r^k = \frac{r}{1-r}$ dengan $r = (1-p_1)(1-p_2)$:
>
>    $$
>    \begin{align}
>    \text{Sum} &= \frac{(1-p_1)(1-p_2)}{1 - (1-p_1)(1-p_2)} \\
>    P(X < Y) &= \frac{p_1}{1-p_1} \cdot \frac{(1-p_1)(1-p_2)}{1 - (1-p_1)(1-p_2)} \\
>    &= \frac{p_1(1-p_2)}{1 - (1 - p_1 - p_2 + p_1p_2)} \\
>    &= \frac{p_1(1-p_2)}{p_1 + p_2 - p_1p_2}
>    \end{align}
>    $$
>
> 4. **Verification:**
>    - ✓ Jika $p_2=1$, numerator jadi 0 $\to P(X<Y)=0$. Masuk akal (Y selalu menang di turn 1).

---

## 5. Verification & Sanity Check

> [!success] Verification Checklist
> - ✓ **Sum of PMF**: Apakah $\sum_{x=1}^\infty (1-p)^{x-1}p = 1$? (Valid via Geometric Series).
> - ✓ **Bounds**: Apakah $E[X] \ge 1$? (Valid karena $0 < p \le 1$).
> - ✓ **Consistency**: Hasil formula tail probability harus konsisten dengan $1 - \text{CDF}$.

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **PMF (Bar Chart):**
> - Bayangkan grafik batang dimana $x=1$ **selalu** paling tinggi (Modus = 1).
> - Setiap batang ke kanan makin pendek dengan rasio tetap $(1-p)$.
> - Meluruh (decay) secara eksponensial.
>
> **CDF (Step Function):**
> - Bayangkan tangga yang naik tajam di awal, lalu langkahnya makin kecil saat mendekati ketinggian 1.

---

## 7. Jebakan Umum (Exam Traps)

> [!warning] Jebakan Umum
> **1. Definisi Variabel (CRITICAL)**
> - ✗ **Salah**: Menganggap $X$ adalah jumlah *kegagalan* (Range: 0, 1, 2...).
> - ✓ **Benar (Standard Exam P)**: $X$ adalah jumlah *percobaan* sampai sukses (Range: 1, 2, 3...).
> - *Note: Jika soal spesifik minta "jumlah kegagalan", gunakan $Y = X - 1$.*
>
> **2. Inequality Words**
> - "At least $n$ trials" $\to X \ge n \to P(X > n-1) = (1-p)^{n-1}$.
> - "More than $n$ trials" $\to X > n \to P(X > n) = (1-p)^n$.
> - *Hati-hati: Beda satu angka di eksponen = jawaban salah.*
>
> **3. Conditional Probability**
> - Jika ditanya $P(X=5 \mid X>2)$, **JANGAN** hitung manual pakai Bayes.
> - Gunakan **Memoryless Property**: $P(X=5-2) = P(X=3)$.

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **MUST-REMEMBER:**
> 1. **PMF**: $P(X=x) = (1-p)^{x-1}p$
> 2. **Tail Prob (Survival)**: $P(X > x) = (1-p)^x$ ==(Sangat Cepat)==
> 3. **Mean**: $1/p$
> 4. **Variance**: $(1-p)/p^2$
> 5. **Memoryless**: $P(X > s+t \mid X > s) = P(X > t)$
>
> **Decision Tree:**
> ```mermaid
> graph TD
>     A[Soal Geometrik?] -->|Cari Exact Probability| B[Gunakan PMF]
>     A -->|Cari Cumulative/Tail| C[Gunakan Tail Formula]
>     A -->|Conditional Prob| D[Gunakan Memoryless]
>     B --> E["(1-p)^(x-1) * p"]
>     C --> F["(1-p)^x"]
>     D --> G[Reset process to 0]
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 4 (Discrete Random Variables).
- **Secondary**: Hogg, R., Tanis, E. *Probability and Statistical Inference*.
- **SOA**: Exam P Learning Objective [Topic 2].

## 🔗 Related Notes

- [[Bernoulli Trials]]
- [[Negative Binomial Distribution]]
- [[Exponential Distribution]]
- [[Infinite Geometric Series]]

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition & support
- [ ] Solve Contoh Soal A (Basic Calculation)
- [ ] Solve Contoh Soal B (Mean & Tail)
- [ ] Solve Contoh Soal C (Theoretical)
- [ ] Review Common Traps (esp. Definition of X)
- [ ] Memorize Cheat Sheet formulas

---
**Last Updated:** {{date:YYYY-MM-DD}}