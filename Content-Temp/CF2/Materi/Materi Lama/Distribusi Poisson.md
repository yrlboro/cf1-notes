---
title: Distribusi Poisson
aliases:
  - Poisson Distribution
  - Poisson Random Variable
  - Rare Event Distribution
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - UnivariateDistributions
  - DiscreteDistributions
exam_weight: 10-15%
difficulty: Low to Medium
learning_objective: Topic 1 (General Probability), Topic 2 (Univariate Probability Distributions)
created:
  "{ date:YYYY-MM-DD }":
updated:
  "{ date:YYYY-MM-DD }":
status: active
---

# Distribusi Poisson (The Poisson Distribution)

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Topic 1 & 2 (Univariate Discrete Distributions)
> - **Kategori**: Univariate Discrete Distributions
> - **Skill yang Diuji**: Calculate (Probabilitas, Mean, Var), Apply (Sum of independent Poissons), Recognize (Rare events)
> - **Bobot**: ~10-15% of exam (Sering muncul sebagai komponen soal yang lebih besar)
> - **Prerequisite**: [[Infinite Series]] (Taylor Series untuk $e^x$), [[Kalkulus Dasar]], [[Kombinatorial Dasar]]
> - **Connected Topics**: 
>   - [[Distribusi Poisson-ChatGPT]] (Poisson adalah limit Binomial saat $n \to \infty, p \to 0$)
>   - [[Distribusi Eksponensial]] (Waktu antar kedatangan proses Poisson)
>   - [[Normal Approximation]] (Untuk $\lambda$ besar)

---

## 1. Intuisi (The "Why")

> [!tip] Intuisi: Manajer Kedai Kopi
> Bayangkan Anda adalah seorang manajer kedai kopi yang sedang mengamati pelanggan yang masuk ke toko.
> 
> Distribusi Poisson menjawab pertanyaan: **"Berapa peluang sejumlah $X$ orang masuk dalam 1 jam ke depan, jika kita tahu rata-rata keramaian toko ini?"**
> 
> Kunci dari Poisson adalah **"Keacakan yang Stabil"**:
> 1. Pelanggan datang satu per satu (tidak bergerombol secara simultan).
> 2. Kedatangan satu orang tidak mempengaruhi kedatangan orang lain (independen).
> 3. Rata-rata kedatangan per jam konstan (misalnya, rata-rata 5 orang/jam).
> 
> Jika [[Distribusi Poisson-ChatGPT]] adalah tentang "melempar koin $N$ kali", Poisson adalah "melempar koin tak terhingga kali dengan peluang sukses yang sangat kecil, dalam jendela waktu tertentu". Ini adalah distribusi untuk **kejadian langka (rare events)** yang terjadi dalam kontinum waktu atau ruang.
> 
> **Contoh Klasik:**
> - Jumlah klaim asuransi kecelakaan mobil dalam setahun (Aktuaria).
> - Jumlah typo pada satu halaman buku.
> - Jumlah partikel radioaktif yang meluruh dalam satu detik.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Variabel acak diskrit $X$ dikatakan berdistribusi Poisson dengan parameter $\lambda$ ($X \sim \text{Poisson}(\lambda)$) jika Probability Mass Function (PMF)-nya adalah:
> 
> $$
> p_X(k) = P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
> $$
> 
> **Parameter:**
> - $\lambda$: Rata-rata kejadian dalam interval yang ditentukan (rate), dengan constraint $\lambda > 0$.
> 
> **Support:**
> $k \in \{0, 1, 2, 3, \dots, \infty\}$ (Integer non-negatif).
> 
> **Rumus Momen Utama:**
> - **Mean (Ekspektasi):** $E[X] = \lambda$
> - **Varians:** $\text{Var}(X) = \lambda$
>   - *Note: Ciri khas Poisson adalah Mean = Varians.*
> - **Moment Generating Function (MGF):**
>   $$M_X(t) = E[e^{tX}] = \exp\{\lambda(e^t - 1)\}$$
> 
> **Sifat Penjumlahan (Sum of Independent Poissons):**
> Jika $X \sim \text{Poisson}(\lambda_1)$ dan $Y \sim \text{Poisson}(\lambda_2)$ saling bebas, maka:
> $$X + Y \sim \text{Poisson}(\lambda_1 + \lambda_2)$$

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> Mari kita bedah rumus $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$:
> 
> 1. **Mengapa ada $e^{-\lambda}$?**
>    Ini adalah probabilitas bahwa **tidak ada kejadian sama sekali** ($P(X=0)$). Bayangkan ini sebagai faktor "penalti" atau "survival" dari interval tersebut tanpa gangguan. Semakin besar rata-rata $\lambda$, semakin kecil kemungkinan nol kejadian ($e^{-\lambda}$ mendekati 0).
> 
> 2. **Mengapa $\lambda^k$?**
>    Ini merepresentasikan kekuatan rata-rata yang terjadi sebanyak $k$ kali.
> 
> 3. **Mengapa dibagi $k!$?**
>    Karena urutan kejadian tidak dipermasalahkan. Jika 3 pelanggan datang, kita tidak peduli urutan A, B, C atau C, B, A; kita hanya peduli "ada 3 orang". Faktorial membuang permutasi urutan tersebut.
> 
> 4. **Verifikasi Total Probabilitas ([[Taylor Series]]):**
>    Kita tahu deret Maclaurin untuk eksponensial: $e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}$.
>    Maka, jumlah semua probabilitas:
>    $$
>    \sum_{k=0}^{\infty} \frac{e^{-\lambda} \lambda^k}{k!} = e^{-\lambda} \underbrace{\sum_{k=0}^{\infty} \frac{\lambda^k}{k!}}_{e^{\lambda}} = e^{-\lambda} \cdot e^{\lambda} = 1
>    $$
>    *Logika ini membuktikan rumus tersebut valid secara probabilitas.*

---

## 4. Contoh Soal (SOA Exam P Style)

> [!example] Contoh Soal A (Fundamental - 30% difficulty)
> **Soal:**
> Jumlah klaim yang diterima sebuah perusahaan asuransi mengikuti distribusi Poisson dengan rata-rata 4 klaim per hari. Hitung probabilitas bahwa perusahaan menerima tepat 2 klaim besok.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $X \sim \text{Poisson}(\lambda=4)$
>    - Ditanya: $P(X=2)$
> 
> 2. **Setup:**
>    Gunakan rumus PMF:
>    $$P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}$$
> 
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(X=2) &= \frac{e^{-4} \cdot 4^2}{2!} \\
>    &= \frac{0.0183 \cdot 16}{2} \\
>    &= 0.0183 \cdot 8 \\
>    &\approx 0.1465
>    \end{align}
>    $$
> 
> 4. **Verification:**
>    - ✓ Masuk akal (di antara 0 dan 1).
>    - ✓ Nilai 2 cukup dekat dengan rata-rata 4, jadi probabilitasnya signifikan.

> [!example] Contoh Soal B (Exam-Typical - 60% difficulty)
> **Soal:**
> Misalkan $N$, jumlah badai di suatu kota dalam satu tahun, berdistribusi Poisson. Diketahui bahwa probabilitas tidak ada badai dalam setahun adalah tiga kali lipat probabilitas terjadinya tepat satu badai. Hitung varians dari $N$.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $N \sim \text{Poisson}(\lambda)$
>    - Diketahui: $P(N=0) = 3 P(N=1)$
>    - Ditanya: $\text{Var}(N)$
> 
> 2. **Setup:**
>    - $P(N=0) = \frac{e^{-\lambda}\lambda^0}{0!} = e^{-\lambda}$
>    - $P(N=1) = \frac{e^{-\lambda}\lambda^1}{1!} = \lambda e^{-\lambda}$
>    - Ingat untuk Poisson, $\text{Var}(N) = \lambda$. Jadi target kita mencari $\lambda$.
> 
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(N=0) &= 3 P(N=1) \\
>    e^{-\lambda} &= 3 (\lambda e^{-\lambda}) \\
>    \text{Bagi kedua sisi dengan } e^{-\lambda} (\neq 0): \\
>    1 &= 3\lambda \\
>    \lambda &= \frac{1}{3}
>    \end{align}
>    $$
>    Maka, $\text{Var}(N) = \lambda = \frac{1}{3}$.
> 
> 4. **Verification:**
>    - ✓ $\lambda > 0$, konsisten.

> [!example] Contoh Soal C (Challenging - 90% difficulty)
> **Soal:**
> Jumlah kecelakaan lalu lintas di Jalan A adalah Poisson dengan rata-rata 2 per minggu. Jumlah kecelakaan di Jalan B adalah Poisson dengan rata-rata 3 per minggu. Kedua kejadian saling bebas. Hitung probabilitas bahwa total kecelakaan di kedua jalan tersebut dalam waktu **2 minggu** adalah tepat 8.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $X_A \sim \text{Poisson}(2 \text{ per minggu})$
>    - $X_B \sim \text{Poisson}(3 \text{ per minggu})$
>    - Waktu observasi: $t = 2$ minggu.
>    - Perlu penyesuaian parameter $\lambda$ berdasarkan waktu.
> 
> 2. **Setup:**
>    - $\lambda_{A, 2\text{weeks}} = 2 \times 2 = 4$
>    - $\lambda_{B, 2\text{weeks}} = 3 \times 2 = 6$
>    - Misalkan $Y = X_A + X_B$ pada interval 2 minggu.
>    - Menggunakan sifat penjumlahan Poisson independen: $\lambda_{total} = 4 + 6 = 10$.
>    - Jadi, $Y \sim \text{Poisson}(10)$. Target: $P(Y=8)$.
> 
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(Y=8) &= \frac{e^{-10} \cdot 10^8}{8!} \\
>    &= \frac{4.54 \times 10^{-5} \cdot 100,000,000}{40,320} \\
>    &\approx 0.1126
>    \end{align}
>    $$
> 
> 4. **Exam Tips:**
>    - **Jebakan:** Lupa mengalikan rate awal dengan durasi waktu (2 minggu). Jangan gunakan $\lambda=2$ atau $\lambda=3$.
>    - **Metode:** Selalu gabungkan $\lambda$ terlebih dahulu ($X+Y$) baru hitung probabilitas, jangan mencoba menghitung semua kombinasi $(0,8), (1,7), \dots$ (terlalu lama).

---

## 5. Verification & Sanity Check

> [!success] Verification Points
> - ✓ **Constraint Probabilitas:** Apakah hasil selalu positif? Ya, karena $e^x$ dan $k!$ selalu positif.
> - ✓ **Perilaku $\lambda$:**
>   - Jika $\lambda$ sangat kecil (e.g., 0.1), $P(X=0)$ harus mendekati 1. (Check: $e^{-0.1} \approx 0.905$. Masuk akal).
>   - Jika $\lambda$ sangat besar, distribusi akan simetris ([[Normal Approximation]]).
> - ✓ **Recursive Formula (Exam Hack):**
>   Berguna untuk menghitung $P(X=k)$ berurutan:
>   $$P(X=k) = \frac{\lambda}{k} P(X=k-1)$$
>   *Gunakan ini jika Anda sudah punya $P(X=k-1)$ untuk menghemat waktu.*

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **Histogram:**
> - Bayangkan grafik batang vertikal. Sumbu X adalah 0, 1, 2...
> - **Untuk $\lambda$ kecil** (misal 1 atau 2): Grafik sangat "miring ke kanan" (**Skewed Right**). Batang tertinggi ada di 0 atau 1, lalu turun cepat.
> - **Untuk $\lambda$ sedang** (misal 5): Puncak ada di sekitar 4 atau 5. Ekor kanan masih lebih panjang sedikit.
> - **Untuk $\lambda$ besar** (misal 20): Bentuknya hampir seperti Lonceng (**Normal Distribution**) simetris.
> 
> **Area:**
> - Jumlah tinggi semua batang harus sama dengan 1.

---

## 7. Jebakan Umum (Common Exam Traps)

> [!warning] Jebakan Umum (Exam Traps)
> **1. Kesalahan Satuan Waktu (Scaling Trap):**
> - **Soal:** "Rate 2 per jam."
> - **Pertanyaan:** "Probabilitas 3 kejadian dalam 30 menit."
> - ✗ **Salah:** Pakai $\lambda = 2$.
> - ✓ **Benar:** Pakai $\lambda = 2 \times 0.5 = 1$.
> - **Aturan:** Selalu sesuaikan $\lambda$ dengan interval waktu pertanyaan ($\lambda_{new} = \lambda_{rate} \times t$).
> 
> **2. "At Least One" Trick:**
> - Jika ditanya $P(X \geq 1)$, **JANGAN** hitung $P(1) + P(2) + \dots$
> - Gunakan komplemen: $1 - P(X=0) = 1 - e^{-\lambda}$.
> 
> **3. Mode (Modus) Poisson:**
> - Modus Poisson adalah integer $\lfloor \lambda \rfloor$.
> - Jika $\lambda$ adalah integer, modusnya ada dua: $\lambda$ dan $\lambda - 1$.
> - *Contoh:* $\lambda=5$, modus di 4 dan 5 ($P(4)=P(5)$).

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **MUST-REMEMBER:**
> 1. **PMF:** $P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}$
> 2. **Key Stat:** Mean = Variance = $\lambda$
> 3. **Sum Property:** $X_1(\lambda_1) + X_2(\lambda_2) \to \text{Poisson}(\lambda_1+\lambda_2)$
> 4. **Complement Rule:** $P(\text{at least one}) = 1 - e^{-\lambda}$
> 
> **QUICK DECISION TREE:**
> ```mermaid
> graph TD
>     A[Soal Counting Events 0,1,2...?] -->|Yes| B{Fixed number of trials n?}
>     B -->|Yes| C[Binomial Distribution]
>     B -->|No - Interval Time/Space| D[POISSON Distribution]
>     D --> E{Check Properties}
>     E -->|Mean = Variance| F[Confirm Poisson]
>     E -->|Mean > Variance| G[Binomial]
>     E -->|Mean < Variance| H[Negative Binomial]
>     A -->|No| I[Continuous Time -> Cek Exponential]
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 4 (Discrete Random Variables).
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*. Chapter 3.
- **SOA**: Exam P Learning Objective Topic 1 & 2.

## 🔗 Related Notes

- [[Distribusi Poisson-ChatGPT]]
- [[Distribusi Eksponensial]]
- [[Moment Generating Function]]
- [[Taylor Series]]

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition & properties
- [ ] Solve Contoh Soal A (Basic)
- [ ] Solve Contoh Soal B (Variance/Properties)
- [ ] Solve Contoh Soal C (Sum & Time Scaling)
- [ ] Memorize Cheat Sheet formulae

---
**Last Updated:** {{date:YYYY-MM-DD}}