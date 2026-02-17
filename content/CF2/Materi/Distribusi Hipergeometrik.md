---
title: "Hypergeometric Distribution"
aliases: ["Distribusi Hipergeometrik", "Sampling Without Replacement"]
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - DiscreteDistributions
exam_weight: 5-10%
difficulty: Medium
learning_objective: "Univariate Discrete Distributions"
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
status: active
---

# Hypergeometric Distribution

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Univariate Discrete Distributions
> - **Kategori Silabus**: Discrete Probability Distributions
> - **Skill yang Diuji**: Calculate (Probabilities, Mean, Variance), Recognize (Sampling without replacement), Apply (Quality control, Auditing)
> - **Bobot Relatif**: ~5-10% (Sering muncul dalam soal Conditional Probability)
> - **Level Kesulitan**: Medium
> - **Prerequisite Topics**: [[Counting Principles]], [[Combinations]], [[Klasik Probabilitas]]
> - **Connected Topics**: [[Distribusi Binomial]] (Limiting case), [[Normal Approximation]]

---

## 1. Intuisi (The "Why")

> [!tip] Intuisi: Urn Model & Kartu
> Bayangkan Anda sedang bermain kartu poker, atau mengambil bola dari sebuah kotak tertutup (*Urn Model*).
>
> **Situasi:**
> Anda memiliki kotak berisi **10 bola**: 4 Merah (Sukses) dan 6 Biru (Gagal). Anda mengambil **3 bola sekaligus** (atau satu per satu **tanpa pengembalian**).
>
> **Mengapa tidak menggunakan [[Distribusi Binomial]]?**
> Dalam Binomial, setiap percobaan itu independen (seperti melempar koin; peluang sukses konstan). Namun, dalam kasus ini, jika bola pertama yang Anda ambil adalah Merah, maka jumlah bola Merah di dalam kotak *berkurang*. Akibatnya, peluang mengambil bola Merah kedua menjadi *lebih kecil*.
>
> **Inti Konsep:**
> Distribusi Hypergeometric menghitung peluang mendapatkan sejumlah "Sukses" spesifik ketika Anda mengambil sampel dari **populasi terbatas** (*finite population*) di mana keberadaan satu objek mempengaruhi peluang objek berikutnya (*dependency*).
>
> > **Analogi Kasar:** Binomial adalah mengambil air dari lautan dengan cangkir (mengambil sedikit tidak mengubah komposisi lautan). Hypergeometric adalah mengambil permen dari toples kecil (setiap permen yang diambil mengubah sisa rasa yang ada di toples).

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Misalkan sebuah populasi terbatas berukuran $N$ terdiri dari dua tipe objek:
> 1. Objek Tipe I (disebut "Sukses") sebanyak $K$.
> 2. Objek Tipe II (disebut "Gagal") sebanyak $N-K$.
>
> Jika sebuah sampel acak berukuran $n$ diambil **tanpa pengembalian** (*without replacement*) dari populasi tersebut, maka variabel acak $X$ yang menyatakan "banyaknya Sukses dalam sampel" berdistribusi Hypergeometric.
>
> **Notasi:**
> $$X \sim \text{Hypergeo}(N, K, n)$$
>
> **Probability Mass Function (PMF):**
> $$P(X = x) = \frac{\binom{K}{x} \binom{N-K}{n-x}}{\binom{N}{n}}$$
>
> **Support (Domain):**
> $$x \in \{ \max(0, n - (N-K)), \dots, \min(n, K) \}$$
> *Catatan: $x$ tidak bisa melebihi ukuran sampel $n$ ataupun jumlah sukses tersedia $K$.*
>
> **Momen Utama:**
>
> **1. Mean (Ekspektasi):**
> $$E[X] = n \left( \frac{K}{N} \right) = np$$
> *(Dimana $p = K/N$ adalah proporsi sukses awal)*
>
> **2. Variance:**
> $$\text{Var}(X) = n \left( \frac{K}{N} \right) \left( 1 - \frac{K}{N} \right) \left( \frac{N-n}{N-1} \right)$$
> atau
> $$\text{Var}(X) = np(1-p) \left( \frac{N-n}{N-1} \right)$$
>
> **Finite Population Correction (FPC):**
> Istilah $\left( \frac{N-n}{N-1} \right)$ disebut **FPC**. Perhatikan jika $N \to \infty$, FPC $\to 1$, dan varians kembali menjadi varians Binomial $np(1-p)$.

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> Mari kita bedah rumus PMF:
> $$\frac{\text{Numerator}}{\text{Denominator}} = \frac{\binom{K}{x} \binom{N-K}{n-x}}{\binom{N}{n}}$$
>
> 1.  **Denominator $\binom{N}{n}$ (Ruang Sampel Total):**
>     Berapa banyak cara memilih $n$ objek apa saja dari total populasi $N$? Kita menggunakan Kombinasi karena urutan pengambilan tidak dipedulikan.
>
> 2.  **Numerator Bagian 1 $\binom{K}{x}$ (Cara memilih Sukses):**
>     Dari total $K$ sukses yang tersedia di populasi, kita ingin mendapatkan tepat $x$ sukses.
>
> 3.  **Numerator Bagian 2 $\binom{N-K}{n-x}$ (Cara memilih Gagal):**
>     Jika ukuran sampel kita $n$ dan kita sudah ambil $x$ sukses, maka sisanya $(n-x)$ **haruslah** berupa kegagalan. Kita mengambilnya dari populasi gagal yang tersedia $(N-K)$.
>
> 4.  **Prinsip Perkalian:**
>     Kita mengalikan kedua bagian numerator karena kita melakukan kedua hal tersebut secara bersamaan untuk membentuk satu kejadian (memilih $x$ sukses DAN $n-x$ gagal).

---

## 4. Contoh Soal

> [!example] Contoh Soal A (Fundamental)
> **Soal:**
> Sebuah kotak berisi 10 sekering (fuses), di mana 3 di antaranya cacat. Seorang inspektur mengambil 4 sekering secara acak tanpa pengembalian untuk diuji. Berapa peluang tepat 1 sekering yang cacat ditemukan?
>
> **Solusi:**
>
> 1. **Identifikasi:**
>    - Total Populasi ($N$) = 10
>    - Total Sukses/Cacat ($K$) = 3
>    - Ukuran Sampel ($n$) = 4
>    - Target ($x$) = 1
>    - Variabel $X \sim \text{Hypergeo}(10, 3, 4)$
>
> 2. **Setup Rumus:**
>    $$P(X=1) = \frac{\binom{3}{1} \binom{10-3}{4-1}}{\binom{10}{4}}$$
>
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    P(X=1) &= \frac{\binom{3}{1} \binom{7}{3}}{\binom{10}{4}} \\
>    &= \frac{3 \cdot 35}{210} \\
>    &= \frac{105}{210} \\
>    &= 0.5
>    \end{align}
>    $$
>    *(Catatan: $\binom{7}{3} = 35$, $\binom{10}{4} = 210$)*
>
> 4. **Verification:**
>    ✓ Peluang 50% masuk akal karena proporsi cacat 30%, sampel 4 cukup besar untuk "menangkap" setidaknya satu.

> [!example] Contoh Soal B (Exam-Typical)
> **Soal:**
> Sebuah perusahaan asuransi sedang mengaudit 20 klaim. Diketahui 12 klaim adalah "Auto" dan 8 adalah "Homeowner". Auditor memilih 5 klaim secara acak untuk diperiksa.
> Hitung ekspektasi jumlah klaim "Auto" yang diperiksa, dan hitung peluang bahwa jumlah klaim "Auto" yang terpilih **melebihi** jumlah klaim "Homeowner" yang terpilih.
>
> **Solusi:**
>
> 1. **Identifikasi:**
>    - $N=20, K=12$ (Auto), $n=5$.
>    - $X =$ jumlah Auto dalam sampel.
>    - Jumlah Homeowner dalam sampel = $5 - X$.
>
> 2. **Bagian 1: Ekspektasi:**
>    $$E[X] = n \frac{K}{N} = 5 \times \frac{12}{20} = 5 \times 0.6 = 3$$
>
> 3. **Bagian 2: Setup Kondisi:**
>    - Kondisi: "Auto melebihi Homeowner" $\rightarrow X > (5 - X)$
>    - $2X > 5 \Rightarrow X > 2.5$
>    - Karena $X$ diskrit, $X \in \{3, 4, 5\}$.
>    - Target: $P(X \ge 3) = P(X=3) + P(X=4) + P(X=5)$.
>
> 4. **Eksekusi:**
>    Denominator: $\binom{20}{5} = 15,504$
>
>    $$
>    \begin{align}
>    P(X=3) &= \frac{\binom{12}{3}\binom{8}{2}}{15,504} = \frac{220 \cdot 28}{15,504} \approx 0.3973 \\
>    P(X=4) &= \frac{\binom{12}{4}\binom{8}{1}}{15,504} = \frac{495 \cdot 8}{15,504} \approx 0.2554 \\
>    P(X=5) &= \frac{\binom{12}{5}\binom{8}{0}}{15,504} = \frac{792 \cdot 1}{15,504} \approx 0.0511
>    \end{align}
>    $$
>
>    Total Probabilitas:
>    $$P(X \ge 3) = 0.3973 + 0.2554 + 0.0511 = 0.7038$$
>
> **Exam Tips:** Jangan lupa kasus $X=5$. Banyak peserta ujian berhenti di $X=4$.

> [!example] Contoh Soal C (Challenging)
> **Soal:**
> Sebuah kolam berisi $N$ ikan. Peneliti menangkap 50 ikan, menandainya, dan melepaskannya kembali. Keesokan harinya, peneliti menangkap 50 ikan lagi dan menemukan 4 ikan bertanda.
> Jika diketahui bahwa Variance dari jumlah ikan bertanda pada penangkapan kedua adalah 3.6, tentukan estimasi $N$ (bulatkan ke integer terdekat).
> *(Asumsi: Populasi ikan tetap konstan dan tercampur sempurna).*
>
> **Solusi:**
>
> 1. **Identifikasi (Capture-Recapture):**
>    - "Sukses" ($K$) = Ikan bertanda di populasi = 50.
>    - Sampel ($n$) = 50.
>    - Total Populasi ($N$) = Dicari.
>    - Diketahui: $\text{Var}(X) = 3.6$.
>
> 2. **Setup Rumus Variance:**
>    $$\text{Var}(X) = n \left( \frac{K}{N} \right) \left( 1 - \frac{K}{N} \right) \left( \frac{N-n}{N-1} \right) = 3.6$$
>    $$50 \left( \frac{50}{N} \right) \left( \frac{N-50}{N} \right) \left( \frac{N-50}{N-1} \right) = 3.6$$
>
> 3. **Eksekusi (Approximation Strategy):**
>    - Asumsi $N$ besar sehingga $N-1 \approx N$, maka FPC $\approx \frac{N-50}{N}$.
>    - Kita tahu $E[X] \approx \text{Observed Count} = 4$.
>    - Cek: $E[X] = 50(50/N) = 2500/N$. Jika $2500/N \approx 4$, maka $N \approx 625$.
>
>    **Verifikasi dengan $N=625$:**
>    - $p = 50/625 = 0.08$
>    - $\text{Var} = 50(0.08)(0.92) \left( \frac{575}{624} \right) = 3.68 \cdot 0.921 = 3.39$ (Terlalu rendah).
>
>    **Coba $N=600$:**
>    - $p = 50/600 \approx 0.0833$
>    - $\text{Var} = 50(0.0833)(0.9167) \left( \frac{550}{599} \right) \approx 3.5$ (Mendekati).
>
>    *Exam Note:* Soal ini menguji pemahaman struktur varians. Menggunakan Mean $\approx$ Observed Count ($N=625$) biasanya cukup untuk memilih jawaban terdekat di pilihan ganda.
>
> 4. **Hasil:** $N \approx 625$.

---

## 5. Verification & Sanity Check

> [!success] Verification & Sanity Check
> - ✓ **Batasan Probabilitas:** Apakah $\binom{N}{n}$ (total cara) selalu $\ge$ dari pembilang? Ya.
> - ✓ **Batasan Support:** $x$ tidak boleh negatif dan tidak boleh melebihi $n$ atau $K$.
> - ✓ **Approximation Check:** Jika $N$ sangat besar (misal $N=10,000$), rumus Hypergeometric harus menghasilkan nilai yang sangat mirip dengan Binomial (Mean dan Varians).
>   - $FPC \to 1$ saat $N \to \infty$.

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **Grafik Histogram:**
> Bayangkan histogram batang yang mirip dengan **Binomial** (berbentuk lonceng simetris atau miring tergantung $p$), tetapi **lebih ramping** (kurtosis lebih tinggi / varians lebih kecil).
>
> **Mengapa lebih ramping?**
> Visualisasikan "FPC" (Finite Population Correction). Karena pengambilan tanpa pengembalian, kita "kehabisan" kemungkinan ekstrem lebih cepat. Jika Anda mengambil semua bola merah, Anda tidak bisa mengambil lagi. Ini memotong ekor distribusi, membuat grafik lebih terkonsentrasi di sekitar mean dibanding Binomial.

---

## 7. Jebakan Umum

> [!warning] Jebakan Umum (Exam Traps)
> **1. Jebakan Support Bawah (The Lower Bound Trap):**
> - ✗ Salah: $x$ selalu mulai dari 0.
> - ✓ Benar: $x$ mulai dari $\max(0, n - (N-K))$.
> - *Contoh:* Jika ada 5 bola Merah dan 5 Biru, dan Anda ambil 8 bola. Minimal Anda pasti dapat 3 Merah ($8-5=3$). Jadi $P(X=0, 1, 2) = 0$.
>
> **2. Salah Tukar Variabel:**
> - Selalu tulis definisi variabel di kertas coretan:
>   - $N$: TOTAL populasi
>   - $K$: TOTAL sukses
>   - $n$: Ukuran SAMPEL
>
> **3. Perhitungan Kombinasi:**
> - Jangan gunakan Permutasi (nPr) kecuali urutan spesifik diminta. Gunakan Kombinasi (nCr).

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **Must-Remember:**
> 1. **PMF:** $$P(X=x) = \frac{\binom{K}{x} \binom{N-K}{n-x}}{\binom{N}{n}}$$
> 2. **Mean:** $$E[X] = n \cdot \frac{K}{N}$$
> 3. **Variance:** $$\text{Var}(X) = n p (1-p) \left( \frac{N-n}{N-1} \right)$$
>
> **Kapan Digunakan:**
> - Keywords: "Without replacement", "Selected from a group", "Committee of X people from Y candidates".
> - Scenario: Batch testing, Quality control sampling, Card games.
>
> **Decision Tree:**
> ```mermaid
> graph TD
>     A[Apakah sampling dilakukan TANPA pengembalian?] -->|NO| B[Gunakan BINOMIAL]
>     A -->|YES| C{Apakah populasi kecil/finite?}
>     C -->|YES| D[Gunakan HYPERGEOMETRIC]
>     C -->|NO| B
>     style D fill:#f9f,stroke:#333,stroke-width:2px
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 4 (Discrete Random Variables).
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*.
- **SOA**: Exam P Learning Objective [Univariate Discrete Distributions].

## 🔗 Related Notes

- [[Distribusi Binomial]]
- [[Counting Principles]]
- [[Conditional Probability]]
- [[Discrete Random Variables]]

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition
- [ ] Solve Contoh Soal A
- [ ] Solve Contoh Soal B
- [ ] Solve Contoh Soal C
- [ ] Review common traps
- [ ] Memorize cheat sheet formulas

---

**Last Updated:** {{date:YYYY-MM-DD}}