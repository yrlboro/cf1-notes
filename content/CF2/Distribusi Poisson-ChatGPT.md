---
title: Distribusi Poisson (Poisson Distribution)
aliases:
  - Poisson Distribution
  - Distribusi Poisson Exam P
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - DiscreteDistributions
exam_weight: 5-10%
difficulty: Medium
learning_objective: SOA Exam P LO 3b, LO 3c
created: "{date:2026-01-16}"
updated: 2026-01-16
status: active
---

# Distribusi Poisson

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: LO 3b, LO 3c  
> - **Kategori**: Univariate Discrete Distributions  
> - **Bobot**: ~5–10%  
> - **Prerequisite**: [[Konsep Dasar Probabilitas]], [[Variabel Acak Diskrit]], [[Ekspektasi dan Varians]]  
> - **Related Topics**: [[Distribusi Binomial]], [[Distribusi Eksponensial]], [[Conditional Probability]]

---

## 1. Intuisi

> [!tip] Intuisi
> Bayangkan Anda adalah seorang aktuaris asuransi yang setiap hari menghitung **jumlah klaim** yang masuk.  
> Kadang tidak ada klaim, kadang satu, kadang beberapa — tetapi tidak pernah setengah klaim.
>
> Klaim-klaim ini:
> - Terjadi secara acak  
> - Tidak saling mempengaruhi  
> - Memiliki rata-rata yang stabil dari waktu ke waktu  
>
> Distribusi Poisson adalah model probabilitas yang digunakan untuk menjawab pertanyaan:
> *“Berapa peluang tepat $x$ kejadian terjadi dalam suatu periode?”*  
> ketika kejadian tersebut jarang, independen, dan memiliki laju rata-rata yang konstan.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi:**
>
> Suatu variabel acak diskrit $X$ dikatakan berdistribusi **Poisson** dengan parameter $\lambda$, ditulis
> $X \sim \text{Poisson}(\lambda)$, jika fungsi massa probabilitasnya adalah:
>
> $$
> P(X = x) = p_X(x) = \frac{e^{-\lambda}\lambda^x}{x!}, \quad x = 0,1,2,\dots
> $$
>
> **Parameter:**
> - $\lambda$: rata-rata jumlah kejadian, dengan constraint $\lambda > 0$
>
> **Support:**
> $$
> X \in \{0,1,2,\dots\}
> $$

### Rumus Utama #formula

- **PMF:**
  $$
  p_X(x) = \frac{e^{-\lambda}\lambda^x}{x!}
  $$

- **Ekspektasi:**
  $$
  E[X] = \lambda
  $$

- **Varians:**
  $$
  \text{Var}(X) = \lambda
  $$

- **Moment Generating Function (MGF):**
  $$
  M_X(t) = E[e^{tX}] = \exp\{\lambda(e^t - 1)\}
  $$

### Asumsi Eksplisit
- Kejadian saling independen  
- Laju kejadian konstan  
- Probabilitas lebih dari satu kejadian dalam interval kecil dapat diabaikan  

Jika asumsi ini dilanggar, model Poisson **tidak valid**.

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> - Karena kita menghitung **jumlah kejadian**, maka $X$ harus diskrit dan bernilai bilangan bulat.
> - Faktor $\lambda^x$ mencerminkan kecenderungan munculnya $x$ kejadian ketika rata-rata kejadian adalah $\lambda$.
> - Faktor $x!$ muncul karena urutan kejadian tidak penting (penyesuaian kombinatorial).
> - Faktor $e^{-\lambda}$ adalah konstanta normalisasi agar:
> $$
> \sum_{x=0}^{\infty} P(X=x) = 1
> $$
> Setiap komponen rumus memiliki makna probabilistik yang langsung terkait dengan intuisi kejadian acak yang jarang.

---

## 4. Contoh Soal

> [!example] Contoh Soal A (Fundamental)
> **Soal:**  
> Jumlah klaim harian mengikuti distribusi Poisson dengan rata-rata 2 klaim per hari.  
> Hitung peluang tidak ada klaim hari ini.
>
> **Solusi:**
>
> 1. **Identifikasi Informasi:**  
>    - $X \sim \text{Poisson}(2)$  
>    - Ditanya: $P(X = 0)$
>
> 2. **Setup:**  
>    $$
>    P(X = 0) = \frac{e^{-2}2^0}{0!}
>    $$
>
> 3. **Eksekusi:**  
>    $$
>    P(X = 0) = e^{-2}
>    $$
>
> 4. **Verification:**  
>    - ✓ $0 < e^{-2} < 1$  
>    - ✓ Masuk akal untuk probabilitas tidak ada klaim

---

> [!example] Contoh Soal B (Exam-Typical)
> **Soal:**  
> Rata-rata kecelakaan lalu lintas di suatu persimpangan adalah 3 per minggu.  
> Hitung peluang **paling banyak 1 kecelakaan** dalam seminggu.
>
> **Solusi:**
>
> 1. **Identifikasi Informasi:**  
>    - $X \sim \text{Poisson}(3)$  
>    - Ditanya: $P(X \leq 1)$
>
> 2. **Setup:**  
>    $$
>    P(X \leq 1) = P(X=0) + P(X=1)
>    $$
>
> 3. **Eksekusi:**  
>    $$
>    \begin{align}
>    P(X \leq 1) &= e^{-3} + \frac{e^{-3}3^1}{1!} \\
>    &= e^{-3} + 3e^{-3} \\
>    &= 4e^{-3}
>    \end{align}
>    $$
>
> 4. **Verification:**  
>    - ✓ Nilai antara 0 dan 1  
>    - ✓ CDF meningkat seiring $x$

---

> [!example] Contoh Soal C (Challenging)
> **Soal:**  
> Jumlah klaim harian mengikuti distribusi Poisson dengan parameter $\lambda$.  
> Diketahui:
> $$
> P(X=1) = P(X=2)
> $$
> Tentukan nilai $\lambda$.
>
> **Solusi:**
>
> 1. **Identifikasi Informasi:**  
>    - $X \sim \text{Poisson}(\lambda)$
>
> 2. **Setup:**  
>    $$
>    \frac{e^{-\lambda}\lambda^1}{1!} = \frac{e^{-\lambda}\lambda^2}{2!}
>    $$
>
> 3. **Eksekusi:**  
>    $$
>    \lambda = \frac{\lambda^2}{2}
>    \Rightarrow \lambda = 2
>    $$
>
> 4. **Verification:**  
>    - ✓ $P(X=1)=P(X=2)=2e^{-2}$  
>    - ✓ Parameter memenuhi $\lambda>0$

---

## 5. Verification & Sanity Check

> [!success] Verification & Sanity Check
> ✓ Semua probabilitas berada pada $[0,1]$  
> ✓ Mean = Variance = $\lambda$  
> ✓ Limiting case: jika $\lambda \to 0$, maka $P(X=0) \to 1$

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> Bayangkan grafik batang diskrit pada $x = 0,1,2,\dots$.  
> - Untuk $\lambda$ kecil: puncak di $x=0$ atau $1$  
> - Untuk $\lambda$ besar: bentuk distribusi mendekati lonceng ([[Normal Distribution]])  
>
> Luas tiap batang merepresentasikan probabilitas.

---

## 7. Jebakan Umum

> [!warning] Jebakan Umum (Exam Traps)
> **Kesalahan Notasi:**
> - ✗ Menganggap $\frac{e^{-\lambda}\lambda^x}{x!}$ sebagai CDF  
> - ✓ Itu adalah PMF
>
> **Kesalahan Konseptual:**
> - Menggunakan Poisson untuk data kontinu  
> - Salah karena Poisson hanya untuk variabel diskrit
>
> **Kesalahan Interpretasi Soal:**
> - “At most 2” berarti $X \leq 2$, bukan $X = 2$
>
> ==Ini adalah jebakan paling sering muncul di Exam P==

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **Must-Remember:**
> 1. $P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}$
> 2. $E[X]=\lambda$
> 3. $\text{Var}(X)=\lambda$
>
> **Kapan Digunakan:**
> - Kata kunci: *number of events*, *average rate*, *rare events*
>
> **Kapan TIDAK Digunakan:**
> - Jika kejadian tidak independen  
> - Jika laju kejadian tidak konstan
>
> **Quick Decision Tree:**
>
> ```mermaid
> graph TD
> A[Apakah menghitung jumlah kejadian?] -->|Yes| B[Laju konstan?]
> A -->|No| C[Gunakan distribusi lain]
> B -->|Yes| D[Poisson]
> B -->|No| C
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*, Chapter 4  
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*  
- **SOA**: Exam P Learning Objectives LO 3b, LO 3c

## 🔗 Related Notes

- [[Distribusi Binomial]]
- [[Exponential Distribution]]
- [[Moment Generating Functions]]

## 📝 Study Log

- [ ] Read intuition section  
- [ ] Understand formal definition  
- [ ] Solve Contoh Soal A  
- [ ] Solve Contoh Soal B  
- [ ] Solve Contoh Soal C  
- [ ] Review common traps  
- [ ] Memorize cheat sheet  

---

**Last Updated:** {{date:2026-01-16}}  
**Next Review:** {{date:YYYY-MM-DD}}

---

**Folder Suggestion:**  
`Actuarial Science/Exam P/02 - Univariate Distributions/ExamP - Distributions - Poisson Distribution.md`
