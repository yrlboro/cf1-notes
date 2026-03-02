---
title: Distribusi Binomial
aliases:
  - Bernoulli Process
  - Binomial PMF
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - DiscreteDistributions
  - Univariate
exam_weight: 10-15%
difficulty: Low to Medium
learning_objective: Topic 2 (Univariate Probability Distributions)
created: 2026-01-16
status: active
---

# Binomial Distribution

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Topic 2 (Univariate Probability Distributions)
> - **Kategori Silabus**: Discrete Distributions
> - **Skill yang Diuji**: Calculate probabilities, Calculate moments (mean, variance), Moment Generating Functions, Hubungan dengan distribusi lain.
> - **Bobot Relatif**: **Sangat Tinggi** (~10-15%). "Bread and butter" dari distribusi diskrit.
> - **Prerequisite Topics**: [[Basic Probability]], [[Combinatorics]], [[Bernoulli Distribution]]
> - **Connected Topics**: [[Normal Approximation to Binomial]], [[Poisson Approximation]], [[Multinomial Distribution]]

---

## 1. Intuisi

> [!tip] Intuisi: The Quality Control Analogy
> Bayangkan Anda adalah seorang pengendali mutu di pabrik microchip. Anda mengambil 10 chip secara acak dari jalur produksi yang sangat besar. Anda tahu dari data historis bahwa setiap chip memiliki peluang kerusakan yang sama, dan kerusakan satu chip tidak mempengaruhi chip lainnya.
>
> Tugas Anda bukan memprediksi *chip mana* yang rusak (urutan tidak penting), tetapi *berapa banyak* total chip yang rusak di tangan Anda. Bisa 0, bisa 1, atau bahkan ke-10 chip tersebut rusak.
>
> **Konsep Inti:**
> Distribusi Binomial adalah alat hitung untuk menjawab: "Jika saya melakukan eksperimen yang sama berulang kali (seperti melempar koin atau mengecek chip), berapa peluang saya mendapatkan **sukses** sebanyak $k$ kali dari total $n$ percobaan?"
>
> Kuncinya ada dua:
> 1.  **Konsistensi:** Peluang sukses ($p$) tidak berubah tiap percobaan.
> 2.  **Independensi:** Hasil percobaan sebelumnya tidak mempengaruhi percobaan berikutnya.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Variabel acak $X$ dikatakan berdistribusi Binomial dengan parameter $n$ dan $p$, dinotasikan sebagai $X \sim \text{Bin}(n, p)$, jika $X$ merepresentasikan jumlah sukses dalam $n$ percobaan [[Bernoulli Distribution|Bernoulli]] yang saling bebas.
>
> **Parameter & Batasan:**
> - $n \in \{1, 2, 3, \dots\}$ (Jumlah percobaan, harus integer positif)
> - $p \in [0, 1]$ (Peluang sukses dalam satu percobaan)
> - $q = 1 - p$ (Peluang gagal)
>
> **Support (Domain):**
> $$S_X = \{0, 1, 2, \dots, n\}$$
> *(Catatan Kritis: Jangan lupa 0 adalah hasil yang mungkin)*
>
> **Probability Mass Function (PMF):**
> $$p_X(k) = P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad \text{untuk } k = 0, 1, \dots, n$$
>
> **Key Statistics:**
> - **Mean (Ekspektasi):** $E[X] = np$
> - **Varians:** $\text{Var}(X) = np(1-p) = npq$
> - **Moment Generating Function (MGF):** $M_X(t) = (pe^t + 1-p)^n$
>
> **Asumsi Eksplisit:**
> 1.  Terdapat jumlah percobaan tetap ($n$).
> 2.  Setiap percobaan hanya memiliki dua hasil (Sukses/Gagal).
> 3.  Peluang sukses ($p$) konstan.
> 4.  Percobaan bersifat independen.

---

## 3. JEMBATAN LOGIKA

> [!note] Jembatan: Intuisi → Matematika
> Mari kita bedah rumus PMF $\binom{n}{k} p^k (1-p)^{n-k}$:
>
> **1. Komponen Probabilitas Independen ($p^k (1-p)^{n-k}$):**
> Jika Anda menginginkan spesifik $k$ sukses dan $(n-k)$ gagal dalam urutan tertentu (misal: S-S-G-G-S), karena independen, kita cukup mengalikan peluangnya.
> $$\underbrace{p \cdot p \dots p}_{k \text{ kali}} \cdot \underbrace{(1-p) \cdot (1-p) \dots (1-p)}_{(n-k) \text{ kali}} = p^k (1-p)^{n-k}$$
>
> **2. Komponen Kombinatorik ($\binom{n}{k}$):**
> Probabilitas di atas hanya untuk *satu urutan spesifik*. Namun, kita tidak peduli urutannya. Sukses bisa terjadi di awal, tengah, atau akhir.
> Ada berapa banyak cara menyusun $k$ sukses dalam $n$ slot? Inilah definisi dari kombinasi $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.
>
> **Kesimpulan:** (Banyak cara mengatur sukses) $\times$ (Peluang satu urutan spesifik).
>
> **3. Mengapa MGF-nya $(pe^t + q)^n$?**
> Binomial adalah jumlah dari $n$ variabel Bernoulli ($Y_i$) yang independen.
> MGF Bernoulli adalah $(pe^t + q)$.
> Karena $X = \sum Y_i$, dan $Y_i$ independen, maka:
> $$M_X(t) = \prod_{i=1}^n M_{Y_i}(t) = (pe^t + q)^n$$

---

## 4. CONTOH SOAL (SOA Exam P Authentic Style)

> [!example] Contoh Soal A (Fundamental - 30% difficulty)
> **Soal:**
> Sebuah perusahaan asuransi mengetahui bahwa peluang seorang pengemudi mengajukan klaim dalam satu tahun adalah 0.05. Jika dipilih 10 pengemudi secara acak, hitung peluang tepat 2 pengemudi mengajukan klaim.
>
> **Solusi:**
> 1. **Identifikasi:**
>    - Eksperimen sukses/gagal berulang.
>    - $n=10$, $p=0.05$.
>    - Ditanya: $P(X=2)$.
>
> 2. **Setup:**
>    Gunakan rumus PMF Binomial:
>    $$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$
>
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(X=2) &= \binom{10}{2} (0.05)^2 (1-0.05)^{10-2} \\
>    &= \frac{10 \times 9}{2 \times 1} (0.0025) (0.95)^8 \\
>    &= 45 \times 0.0025 \times 0.6634 \\
>    &\approx 0.0746
>    \end{align}
>    $$
>
> 4. **Verification:**
>    - ✓ Peluang kecil masuk akal karena $p$ kecil.

> [!example] Contoh Soal B (Exam-Typical - 60% difficulty)
> **Soal:**
> Diketahui $X \sim \text{Bin}(n, p)$. Jika diketahui rata-rata (mean) dari $X$ adalah 6 dan varians dari $X$ adalah 2.4. Hitung $P(X \le 1)$.
>
> **Solusi:**
> 1. **Identifikasi:**
>    - Diketahui momen, ditanya probabilitas.
>    - Kita butuh parameter $n$ dan $p$ terlebih dahulu.
>
> 2. **Setup:**
>    $$E[X] = np = 6$$
>    $$\text{Var}(X) = np(1-p) = 2.4$$
>
> 3. **Eksekusi:**
>    - Substitusi $np = 6$ ke persamaan varians:
>    $$
>    \begin{align}
>    6(1-p) &= 2.4 \\
>    1-p &= \frac{2.4}{6} = 0.4 \\
>    \implies p &= 0.6
>    \end{align}
>    $$
>    - Sekarang cari $n$:
>    $$n(0.6) = 6 \implies n = 10$$
>    - Distribusi adalah $X \sim \text{Bin}(10, 0.6)$.
>    - Ditanya $P(X \le 1) = P(X=0) + P(X=1)$.
>    $$
>    \begin{align}
>    P(X=0) &= \binom{10}{0}(0.6)^0(0.4)^{10} = 1 \cdot 1 \cdot (0.4)^{10} \approx 0.000105 \\
>    P(X=1) &= \binom{10}{1}(0.6)^1(0.4)^9 = 10 \cdot 0.6 \cdot (0.4)^9 \approx 0.001573 \\
>    P(X \le 1) &= 0.000105 + 0.001573 = 0.001678
>    \end{align}
>    $$
>
> 4. **Verification:**
>    - ✓ Mean 6 dari 10 percobaan berarti sukses sering terjadi. Maka peluang sukses $\le 1$ harus sangat kecil. Hasil 0.0016 masuk akal.
>    - **Exam Tips:** Soal tipe "reverse engineering" parameter dari momen sangat umum di Exam P.

> [!example] Contoh Soal C (Challenging - 90% difficulty)
> **Soal:**
> Sebuah ujian terdiri dari $n$ pertanyaan pilihan ganda. Setiap pertanyaan memiliki 4 pilihan jawaban (1 benar, 3 salah). Seorang siswa menjawab setiap pertanyaan dengan menebak secara acak (independen). Agar siswa memiliki setidaknya 90% peluang untuk menjawab *setidaknya satu* pertanyaan dengan benar, berapakah nilai minimum $n$?
>
> **Solusi:**
> 1. **Identifikasi:**
>    - $X \sim \text{Bin}(n, p=0.25)$.
>    - Target: Cari $n$ minimum agar $P(X \ge 1) \ge 0.90$.
>
> 2. **Setup:**
>    - Menghitung $P(X \ge 1)$ secara langsung sulit karena melibatkan $X=1, 2, \dots, n$.
>    - Gunakan aturan komplemen: $P(X \ge 1) = 1 - P(X=0)$.
>
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    1 - P(X=0) &\ge 0.90 \\
>    1 - \binom{n}{0}(0.25)^0(0.75)^n &\ge 0.90 \\
>    1 - (0.75)^n &\ge 0.90 \\
>    0.10 &\ge (0.75)^n
>    \end{align}
>    $$
>    - Ambil logaritma natural (ln) pada kedua sisi (ingat ln pecahan adalah negatif, jadi tanda pertidaksamaan berubah saat dibagi):
>    $$
>    \begin{align}
>    \ln(0.10) &\ge n \ln(0.75) \\
>    -2.3026 &\ge n (-0.2877) \\
>    n &\ge \frac{-2.3026}{-0.2877} \\
>    n &\ge 8.003
>    \end{align}
>    $$
>    - Karena $n$ harus integer, maka $n=9$.
>
> 4. **Verification:**
>    - Cek $n=8$: $1 - 0.75^8 \approx 0.899$ (Kurang).
>    - Cek $n=9$: $1 - 0.75^9 \approx 0.925$ (Memenuhi).
>    - **Exam Tips:** Jangan membulatkan 8.003 ke bawah (8). Pertanyaannya adalah kondisi minimum untuk *memenuhi* syarat.

---

## 5. VERIFIKASI & SANITY CHECK

> [!success] Verification & Sanity Check
> Untuk setiap perhitungan Binomial, pastikan:
> - ✓ **Total Probability:** $\sum_{k=0}^n P(X=k) = (p + (1-p))^n = 1^n = 1$.
> - ✓ **Constraints:** Jika $p > 0.5$, grafiknya skew ke kiri (peak di kanan). Jika $p < 0.5$, skew ke kanan (peak di kiri).
> - ✓ **Unit:** Probabilitas tidak memiliki satuan. Ekspektasi memiliki satuan yang sama dengan unit hitungan (orang, klaim, dll).

---

## 6. VISUALISASI MENTAL

> [!quote] Visualisasi Mental
> **Bayangkan Grafik Batang (Bar Chart):**
> - **Sumbu X:** Jumlah sukses $k$ (0 sampai $n$).
> - **Sumbu Y:** Probabilitas.
>
> **Bentuk Kurva berdasarkan $p$:**
> - **Kasus $p=0.5$**: Grafik berbentuk lonceng simetris sempurna di tengah $n/2$.
> - **Kasus $p=0.1$**: Grafik "menumpuk" di kiri (dekat 0), ekor panjang ke kanan.
> - **Kasus $p=0.9$**: Grafik "menumpuk" di kanan (dekat $n$), ekor panjang ke kiri.
>
> **Hubungan Visual:** Area batang merepresentasikan probabilitas massa. Jumlah tinggi semua batang harus sama dengan 1.

---

## 7. JEBAKAN UMUM

> [!warning] Jebakan Umum (Exam Traps)
> **1. At Least vs At Most vs More Than:**
> - ==TRAP==: "At least 1" ($X \ge 1$) → Gunakan $1 - P(X=0)$. Ini adalah trik paling klasik.
> - ==TRAP==: "More than 2" ($X > 2$) → Artinya $X \ge 3$. Jangan hitung 2.
> - ==TRAP==: "At most 2" ($X \le 2$) → $P(0) + P(1) + P(2)$.
>
> **2. Melupakan $x=0$:**
> - ✗ Saat menghitung support atau menjumlahkan probabilitas, siswa sering lupa bahwa "tidak ada sukses sama sekali" adalah kejadian yang valid.
>
> **3. Salah Membedakan Binomial & Geometrik:**
> - Jika $n$ **tetap** dan kita menghitung sukses → **Binomial**.
> - Jika kita menghitung percobaan sampai sukses pertama terjadi ($n$ tidak tetap) → [[Geometric Distribution]].
> - *Red Flag Soal:* "Sample of 10 items" (Binomial) vs "Inspect items until a defect is found" (Geometrik).

---

## 8. RINGKASAN EKSEKUTIF

> [!summary] Exam Cheat Sheet
> **MUST-REMEMBER:**
> 1.  $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$
> 2.  $E[X] = np$
> 3.  $Var(X) = np(1-p)$
> 4.  Jika soal bilang "at least one", REFLEKS ANDA HARUS: $1 - P(\text{None})$.


> [!INFO] QUICK DECISION TREE
> ```mermaid
> graph TD
>     A[Apakah ini Binomial?] --> B{Apakah jumlah percobaan n tetap?}
>     B -- NO --> C[Cek Geometric/Negative Binomial/Poisson]
>     B -- YES --> D{Apakah p konstan & independen?}
>     D -- NO --> E[Hypergeometric <br> tanpa pengembalian]
>     D -- YES --> F[BINOMIAL]
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 4 (Discrete Random Variables).
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*.
- **SOA**: Exam P Learning Objective Topic 2.

## 🔗 Related Notes

- [[Basic Probability]]
- [[Combinatorics]]
- [[Bernoulli Distribution]]
- [[Normal Approximation to Binomial]]
- [[Poisson Approximation]]

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition
- [ ] Solve Contoh Soal A
- [ ] Solve Contoh Soal B
- [ ] Solve Contoh Soal C
- [ ] Review common traps
- [ ] Memorize cheat sheet

---
**Last Updated:** {{date:YYYY-MM-DD}}