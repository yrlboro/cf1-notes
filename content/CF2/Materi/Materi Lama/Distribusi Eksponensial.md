---
title: Distribusi Eksponensial
aliases:
  - Exponential Distribution
  - Distribusi Eksponensial
  - Memoryless Distribution
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - ContinuousDistributions
exam_weight: 10-15%
difficulty: Medium
learning_objective: Topic 3 - Continuous Univariate Distributions
created: 2026-01-16
status: active
---

# Distribusi Eksponensial (Exponential Distribution)

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Topic 3 (Continuous Probability Distributions)
> - **Kategori**: Continuous Univariate Distributions
> - **Skill yang Diuji**: Menghitung PDF/CDF/Survival, Menggunakan Memoryless Property, Relasi dengan Poisson.
> - **Bobot**: ~10-15% (Sangat Sering Muncul)
> - **Prerequisite**: [[Konsep Dasar Probabilitas]], [[Integration]], [[Geometric Series]]
> - **Connected Topics**: [[Poisson Distribution]], [[Gamma Distribution]], [[Order Statistics]]

---

## 1. Intuisi (Feynman Principle)

> [!tip] Intuisi: The Waiting Game
> Bayangkan Anda sedang menunggu bus di sebuah halte yang sangat kacau tanpa jadwal pasti. Bus bisa datang kapan saja.
> 
> Distribusi Eksponensial memodelkan **waktu tunggu** (waiting time) hingga kejadian berikutnya terjadi.
> 
> Konsep intinya adalah **"No Memory" (Tanpa Memori)**.
> Misalkan rata-rata bus datang setiap 10 menit. Anda sudah menunggu selama 20 menit. Teman Anda baru saja datang.
> - Secara intuisi manusia: "Bus pasti sebentar lagi datang karena saya sudah nunggu lama!" (Gambler's Fallacy).
> - Secara fakta Eksponensial: Peluang bus datang dalam 5 menit ke depan bagi Anda adalah **SAMA PERSIS** dengan peluang bagi teman yang baru datang.
> 
> Alam semesta "me-reset" jam tandingnya setiap saat. Kabel lampu tidak "ingat" sudah menyala berapa lama; ia punya probabilitas putus yang konstan setiap detiknya.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Variabel acak kontinu $X$ dikatakan berdistribusi eksponensial dengan parameter $\lambda$ (rate parameter), dinotasikan $X \sim \text{Exp}(\lambda)$.
> 
> **Parameter & Batasan:**
> - $\lambda$: Rate parameter (rata-rata kejadian per satuan waktu), dengan $\lambda > 0$.
> - **Support:** $x \in [0, \infty)$ atau $x \ge 0$.
> 
> **Rumus Utama:**
> 
> 1. **PDF (Probability Density Function):**
> $$
> f_X(x) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}
> $$
> 
> 2. **CDF (Cumulative Distribution Function):**
> $$
> F_X(x) = P(X \le x) = 1 - e^{-\lambda x}, \quad x \ge 0
> $$
> 
> 3. **Survival Function (CRITICAL FOR EXAM P):**
> $$
> S_X(x) = P(X > x) = 1 - F_X(x) = e^{-\lambda x}
> $$
> 
> 4. **Moments & Transforms:**
> - Mean (Ekspektasi): $E[X] = \frac{1}{\lambda}$
> - Variance: $\text{Var}(X) = \frac{1}{\lambda^2}$
> - MGF: $M_X(t) = \frac{\lambda}{\lambda - t}, \quad \text{untuk } t < \lambda$
> 
> **Asumsi:**
> - Kejadian terjadi secara independen.
> - Laju rata-rata konstan ($\lambda$).

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> **Mengapa $e^{-\lambda x}$? (Koneksi dengan Poisson)**
> Distribusi [[Poisson Distribution]] memodelkan *jumlah* kejadian dalam interval waktu $t$ dengan rata-rata $\lambda t$.
> Probabilitas terjadi **0 kejadian** (tidak ada bus datang) dalam waktu $x$ menurut rumus Poisson ($P(N=k) = \frac{e^{-\mu}\mu^k}{k!}$) adalah:
> 
> $$
> P(N(x) = 0) = \frac{e^{-\lambda x}(\lambda x)^0}{0!} = e^{-\lambda x}
> $$
> 
> Jika tidak ada kejadian dalam waktu $0$ sampai $x$, itu berarti waktu tunggu kejadian pertama ($X$) pasti lebih besar dari $x$.
> Maka: $P(X > x) = e^{-\lambda x}$ (Survival Function).
> 
> **Dari mana PDF $f_X(x) = \lambda e^{-\lambda x}$ berasal?**
> Menggunakan hubungan kalkulus $f_X(x) = -\frac{d}{dx} S_X(x)$:
> 
> $$
> -\frac{d}{dx} (e^{-\lambda x}) = -(-\lambda e^{-\lambda x}) = \lambda e^{-\lambda x}
> $$
> 
> **Logika Mean $\frac{1}{\lambda}$:**
> Jika $\lambda$ adalah *rate* (contoh: 2 kejadian per jam), maka wajar jika rata-rata waktu tunggu adalah kebalikannya, $\frac{1}{2}$ jam. Satuan terbalik ($\text{time} = \frac{1}{\text{rate}}$).

---

## 4. Contoh Soal

> [!example] Soal A (Fundamental - 30% difficulty)
> **Soal:**
> Waktu hidup sebuah komponen elektronik mengikuti distribusi eksponensial dengan rata-rata 100 jam. Hitung probabilitas komponen tersebut bertahan hidup lebih dari 150 jam.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - Diketahui Mean $\mu = 100$.
>    - Ditanya $P(X > 150)$.
> 
> 2. **Setup:**
>    - Hati-hati! Parameter distribusi adalah $\lambda$, bukan mean.
>    $$
>    \lambda = \frac{1}{\text{Mean}} = \frac{1}{100} = 0.01
>    $$
>    - Gunakan Survival Function: $S_X(x) = e^{-\lambda x}$.
> 
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(X > 150) &= e^{-0.01(150)} \\
>    &= e^{-1.5} \\
>    &\approx 0.2231
>    \end{align}
>    $$
> 
> 4. **Verification:**
>    - Hasil 0.2231 ada di antara 0 dan 1. Masuk akal.

> [!example] Soal B (Memoryless Property - 60% difficulty)
> **Soal:**
> Waktu tunggu pelanggan di sebuah bank berdistribusi eksponensial. Diketahui peluang seorang pelanggan menunggu lebih dari 10 menit adalah 0.6. Tentukan peluang pelanggan tersebut menunggu lebih dari 25 menit, *jika diketahui* dia sudah menunggu selama 15 menit.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $X \sim \text{Exp}(\lambda)$.
>    - Diketahui: $P(X > 10) = 0.6$.
>    - Ditanya: $P(X > 25 \mid X > 15)$.
> 
> 2. **Setup (Exam Optimal):**
>    - Menggunakan **Memoryless Property**: $P(X > s + t \mid X > s) = P(X > t)$.
>    - Disini, $s = 15$ (waktu berlalu) dan total waktu $25 = 15 + 10$. Jadi $t = 10$.
>    $$
>    P(X > 15 + 10 \mid X > 15) = P(X > 10)
>    $$
> 
> 3. **Eksekusi:**
>    - Soal sudah memberikan nilai $P(X > 10) = 0.6$.
>    - Jawaban langsung: **0.6**.
> 
> 4. **Exam Tips:**
>    - Jangan buang waktu mencari $\lambda$ jika pola memoryless terlihat jelas.

> [!example] Soal C (Challenging - Min of Exponentials - 90% difficulty)
> **Soal:**
> Ada dua server independen, Server A dan Server B.
> - $X_A \sim \text{Exp}(\lambda_A = 0.1)$.
> - $X_B \sim \text{Exp}(\lambda_B = 0.3)$.
> Pekerjaan selesai segera setelah *salah satu* server selesai. Berapa probabilitas pekerjaan selesai dalam waktu kurang dari 5 menit?
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - Variabel baru $Y = \min(X_A, X_B)$.
>    - Ditanya $P(Y < 5)$.
> 
> 2. **Setup:**
>    - **Teorema:** Minimum dari $n$ variabel eksponensial independen adalah eksponensial dengan parameter penjumlahan $\lambda$.
>    $$
>    Y \sim \text{Exp}(\lambda_{total}) \quad \text{dimana } \lambda_{total} = \lambda_A + \lambda_B
>    $$
> 
> 3. **Eksekusi:**
>    $$
>    \lambda_{new} = 0.1 + 0.3 = 0.4
>    $$
>    Jadi, $Y \sim \text{Exp}(0.4)$. Mencari CDF dari Y pada $y=5$:
>    $$
>    \begin{align}
>    P(Y < 5) &= 1 - e^{-\lambda_{new}(5)} \\
>    &= 1 - e^{-0.4(5)} \\
>    &= 1 - e^{-2} \\
>    &= 1 - 0.1353 = 0.8647
>    \end{align}
>    $$
> 
> 4. **Verification:**
>    - Karena ada dua server, pekerjaan harusnya lebih cepat selesai. Probabilitas selesai dalam 5 menit (0.8647) cukup tinggi, yang logis.

---

## 5. Verification & Sanity Check

> [!success] Verification
> - ✓ **Probability Constraints:** Apakah hasil $0 \le P \le 1$?
> - ✓ **Dimensional Analysis:** Apakah parameter $\lambda$ konsisten dengan satuan waktu? ($\text{time}^{-1}$)
> - ✓ **Limiting Case:** Jika $x \to \infty$, $P(X > x) \to 0$.
> - ✓ **Alternative Method (Soal C):**
>   $$P(\min > y) = P(X_A > y)P(X_B > y) = e^{-\lambda_A y}e^{-\lambda_B y} = e^{-(\lambda_A+\lambda_B)y}$$
>   Hasil konsisten.

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **Grafik PDF ($f_X(x)$):**
> Bayangkan perosotan (slide) yang curam.
> - Dimulai dari titik $(0, \lambda)$ di sumbu Y.
> - Meluncur turun secara eksponensial mendekati sumbu X tetapi tidak pernah menyentuhnya ($asymptote$).
> - Makin besar $\lambda$, makin curam perosotannya.
> 
> **Grafik CDF ($F_X(x)$):**
> Bayangkan kurva yang naik cepat dari 0 lalu melambat (konkaf ke bawah) mendekati "langit-langit" di $y=1$.
> 
> **Visualisasi Memoryless:**
> Bayangkan grafik PDF. Potong grafik di $x=s$. Ambil sisa ekor di kanan, geser ke titik 0, dan regangkan (scale up) supaya luasnya kembali jadi 1. Bentuk kurvanya akan **identik** dengan kurva aslinya.

---

## 7. Jebakan Umum (Exam Traps)

> [!warning] Jebakan Umum
> **1. The Parameter Trap ($\lambda$ vs $\theta$):**
> - **Standard:** $f(x) = \lambda e^{-\lambda x}$. Mean = $1/\lambda$.
> - **Alternative (Tabel SOA kadang pakai ini):** Mean = $\theta$. Maka $f(x) = \frac{1}{\theta} e^{-x/\theta}$.
> - **Cara Menghindari:** Selalu cek satuan. Jika soal bilang "Mean = 10", maka $\theta = 10$ dan $\lambda = 0.1$.
> 
> **2. Salah Interpretasi "Rate":**
> - "Rate of 5 per hour" $\rightarrow \lambda = 5$.
> - "Average time is 5 hours" $\rightarrow \lambda = 1/5 = 0.2$.
> 
> **3. Conditional Probability Pitfall:**
> - ✗ **SALAH:** $P(X < 5 \mid X > 2) = P(X < 3)$ (Memoryless tidak berlaku untuk "Less Than" dengan cara ini).
> - ✓ **BENAR:** Gunakan definisi dasar $\frac{P(2 < X < 5)}{P(X > 2)}$.

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **MUST-REMEMBER:**
> 1. **Survival Function Shortcut:** $P(X > x) = e^{-\lambda x}$. (Pakai ini untuk 90% soal).
> 2. **Mean vs Rate:** Mean $\mu = 1/\lambda$.
> 3. **Memoryless Property:** $P(X > s+t \mid X > s) = P(X > t) = e^{-\lambda t}$.
> 4. **Minimum of Exponentials:** Jika $X_i \sim \text{Exp}(\lambda_i)$, maka $\min(X_i) \sim \text{Exp}(\sum \lambda_i)$.
> 
> **DECISION TREE:**
> ```mermaid
> graph TD
>     A[Soal Eksponensial] --> B{Ditanya Probabilitas?}
>     B -->|Greater Than| C[Gunakan e^-λx]
>     B -->|Less Than| D[Gunakan 1 - e^-λx]
>     A --> E{Kondisional?}
>     E -->|Given X > s| F[Memoryless: Geser t ke 0]
>     A --> G{Minimum X,Y?}
>     G --> H[Jumlahkan lambda: λ_total = λ1 + λ2]
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 5 (Continuous Random Variables).
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*.
- **Official**: SOA Exam P Learning Objective Topic 3.

## 🔗 Related Notes

- [[Konsep Dasar Probabilitas]]
- [[Poisson Distribution]]
- [[Gamma Distribution]]
- [[Order Statistics]]

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition & Calculus relation
- [ ] Solve Contoh Soal A (Basic)
- [ ] Solve Contoh Soal B (Memoryless)
- [ ] Solve Contoh Soal C (Minimum/Joint)
- [ ] Review common traps (Lambda vs Theta)
- [ ] Memorize Survival Function shortcut

---
**Last Updated:** {{date:YYYY-MM-DD}}